import { stationNames } from './../../../shared/inner-data/innerData';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { IncidentsModel, assignedStations } from '../../../shared/model/incidents';
import { InnerData } from '../../../shared/model/inner-data';

@Component({
  selector: 'app-incident-control',
  templateUrl: './incident-control.component.html',
  styleUrl: './incident-control.component.scss'
})
export class IncidentControlComponent implements OnInit {
  id:string="";
  allIncidents:IncidentsModel[]=[]
  incident:IncidentsModel= new IncidentsModel()
  stationStatus:assignedStations[]=[]

  // map data
  mapCenter =[55.46264890831277,  25.332567173849995];
  basemapType = 'streets';
  mapZoomLevel = 12;
  stations:InnerData[]=stationNames;
constructor(
  private _route:ActivatedRoute
){
  this.stationStatus = JSON.parse(localStorage.getItem('busyStations')
  )
  let incidents =localStorage.getItem('incidents')
  this.allIncidents = JSON.parse(incidents);
}
ngOnInit(): void {
    console.log(this.mapCenter)
      this._route.params.subscribe(params => {
        // Get the value of the 'id' parameter
        this.id = params['id'];
        console.log('ID from URL:', this.id);
      });
      this.incident = this.allIncidents.find(x=>x.id == this.id );
      console.log(this.allIncidents)
      console.log(this.incident);
     this.incident.latLong[0]>0? this.mapCenter = this.incident.latLong:this.mapCenter =[55.46264890831277,  25.332567173849995];
      console.log(this.mapCenter)
  }
  mapLoadedEvent(status: boolean) {
    console.log('The map loaded: ' + status);
  }
  relief(id){

    let stationCheck = this.stationStatus.findIndex(x=>x.stationId ==id);
    let assignedCheck = this.incident.assignedStations.findIndex(x=>x.stationId ==id);
    if(stationCheck!==-1){
      this.stationStatus.slice(0, stationCheck).concat(this.stationStatus.slice(stationCheck + 1))
      this.incident.assignedStations.slice(0, assignedCheck).concat(this.incident.assignedStations.slice(assignedCheck + 1))
    }
  }
  changeEvent(e, id){
    let newStatus={
      status:e.target.innerText,
      statusTime:new Date().toISOString(),
      statusActualTime:new Date().toISOString(),
      dispatcherNo:id,
      user:'محمد مصطفي'
    }
    
    this.incident.statuses.unshift(newStatus);
  }
}
