import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { loadModules } from "esri-loader";
import esri = __esri; // Esri TypeScript Types
import { RouterOutlet } from '@angular/router';
import { SharedServiceService } from '../../services/shared-service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-esri-map',
  standalone:true,
  imports:[RouterOutlet, CommonModule],
  templateUrl: './esri-map.component.html',
  styleUrl: './esri-map.component.scss'
})
export class EsriMapComponent  implements OnInit, OnDestroy{
  @Output() mapLoadedEvent = new EventEmitter<boolean>();
  searchTerm:string="";
  returnedLat:any;
  returnedLong:any;
  // The <div> where we will place the map
  @ViewChild("mapViewNode", { static: true })
  private mapViewEl!: ElementRef;
@Input() searchable:boolean;
@Input() clickable:boolean;
  /**
   * _zoom sets map zoom
   * _center sets map center
   * _basemap sets type of map
   * _loaded provides map loaded status
   */
  private _zoom = 10;
  private _center: Array<number> = [0.1278, 51.5074];
  private _basemap = "streets";
  private _loaded = false;
  private _view!: esri.MapView;

  get mapLoaded(): boolean {
    return this._loaded;
  }

  @Input()
  set zoom(zoom: number) {
    this._zoom = zoom;
  }

  get zoom(): number {
    return this._zoom;
  }

  @Input()
  set center(center: Array<number>) {
    this._center = center;
  }

  get center(): Array<number> {
    return this._center;
  }

  @Input()
  set basemap(basemap: string) {
    this._basemap = basemap;
  }

  get basemap(): string {
    return this._basemap;
  }

  constructor(private sharedService:SharedServiceService, private cd:ChangeDetectorRef) {}

  async initializeMap() {
    try {
      // Load the modules for the ArcGIS API for JavaScript
      const [EsriMap, EsriMapView,Graphic] = await loadModules([
        "esri/Map",
        "esri/views/MapView",
        "esri/Graphic"
      ]);

      // Configure the Map
      const mapProperties: esri.MapProperties = {
        basemap: this._basemap
      };

      const map: esri.Map = new EsriMap(mapProperties);

      // Initialize the MapView
      const mapViewProperties: esri.MapViewProperties = {
        container: this.mapViewEl.nativeElement,
        center: this.searchTerm!=""? [this.returnedLong, this.returnedLat] :this._center,
        zoom: this._zoom,
        map: map
      };

      this._view = new EsriMapView(mapViewProperties);
      this._view.on("click", (event) =>{
        if(this.clickable){
        this.createGraphic(event.mapPoint.latitude, event.mapPoint.longitude,Graphic);}
      });
      await this._view.when();
      // .when(() => {
      //   const editor = new Editor({
      //     view: this._view
      //   });

      //   // Add the widget to the view
      //   this._view.ui.add(editor, "top-right");
      // });
      return this._view;
    } catch (error) {
      
      console.log("EsriLoader: ", error);
      return null;
    }
  }

     async createGraphic(lat: number, long: number,Graphic:any){
      debugger;
    
    // First create a point geometry 
    var point = {
      type: "point", // autocasts as new Point()
      longitude: long,
      latitude: lat
    };
console.log(point)
    this.sharedService.lat.next(lat)
    this.sharedService.long.next(long)
    // Create a symbol for drawing the point
    var markerSymbol = {
      type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
      color: [226, 119, 59]
    };

    // Create a graphic and add the geometry and symbol to it
    var pointGraphic = new Graphic({geometry:point,
     
      symbol: markerSymbol
    });

    // Add the graphics to the view's graphics layer
    this._view.graphics.add(pointGraphic);
  }
 

  ngOnInit() {
    // Initialize MapView and return an instance of MapView
    this.initializeMap().then(mapView => {
      // The map has been initialized
      console.log("mapView ready: ", this._view.ready);
      this._loaded = this._view.ready;
      this.mapLoadedEvent.emit(true);
    });
  }

  ngOnDestroy() {
    if (this._view) {
      // destroy the map view
     // this._view.container = null;
    }
  }
  getLocation(searchTerm: string) {
    console.log(searchTerm)
    this.searchTerm = searchTerm
    // Use a geocoding service or your own API to fetch coordinates based on the search term
   this.sharedService.getLocation(searchTerm).subscribe(res=>{
    console.log(res)
    this.returnedLat = res.candidates[0].location.y
    this.returnedLong = res.candidates[0].location.x
    this.cd.detectChanges()
    this.initializeMap()
  });
  }
}
