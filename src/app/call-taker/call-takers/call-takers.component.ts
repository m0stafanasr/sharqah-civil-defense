import { assignedStations, statuses } from './../../shared/model/incidents';
import { areas, entityCategory, incidents, locationType, priority, stationNames } from './../../shared/inner-data/innerData';
import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { accidentTypes } from '../../shared/inner-data/innerData';
import { InnerData } from '../../shared/model/inner-data';
import {  IncidentsModel } from '../../shared/model/incidents';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedServiceService } from '../../shared/services/shared-service.service';
@Component({
  selector: 'app-call-takers',
  templateUrl: './call-takers.component.html',
  styleUrl: './call-takers.component.scss',
  
})
export class CallTakersComponent implements OnInit {
  _accidentTypes : InnerData[] = accidentTypes;
  _locationType : InnerData[] = locationType;
  _entityCategory : InnerData[] = entityCategory;
  _area: InnerData[] =areas;
  _priority: InnerData[] =priority;
  _incidents:IncidentsModel[]=[];
  _stationNames:InnerData[]=stationNames;
  searchTerm: string = '';
  newId:string="";
  newIncident:IncidentsModel = new IncidentsModel();
  isEdit: boolean= false;
  // map event
  mapCenter = this.isEdit?this.newIncident.latLong:[55.46264890831277,  25.332567173849995];
  basemapType = 'streets';
  mapZoomLevel = 12;
lat:number=0
  long:number=0
constructor(private sharedService: SharedServiceService){}
  // See app.component.html
  mapLoadedEvent(status: boolean) {
    console.log('The map loaded: ' + status);
  }

ngOnInit(): void {

    console.log(accidentTypes);

    let retrieved="";
    let retrievedArr = []
    retrieved = localStorage.getItem('incidents')
  
    retrievedArr = JSON.parse(retrieved);
    if(retrieved==null){
      this._incidents = incidents;
      localStorage.setItem('incidents',JSON.stringify(this._incidents));
    }
    this._incidents = JSON.parse(retrieved);
    console.log(retrievedArr)
}
updatedata(updatedItem: any, indexToUpdate: number){
  const existingItem = this._incidents[indexToUpdate];
  updatedItem = this.newIncident;
  this._incidents.splice(indexToUpdate, 1, existingItem);
  localStorage.setItem('incidents',JSON.stringify(this._incidents));
}


addIncidentComplete(){
  console.log(this.isEdit)
    this.submitIncidentData();
    if(this.isEdit==false){
      this._incidents.unshift(this.newIncident)
      localStorage.setItem('incidents', JSON.stringify(this._incidents))
    } else{
      let indexOfObj = this._incidents.findIndex(obj=>obj.id === this.newIncident.id);
      if (indexOfObj !== -1) {
        // If the item with the specified ID is found, update and insert it
        this.updatedata(this.newIncident, indexOfObj);
      } else {
        // Handle the case where the item with the specified ID is not found
        console.log('Item not found in the array.');
      }
      
    }

    // this.newIncident = new IncidentsModel();
  }

  addIncidentQuick(){
    this.submitIncidentData();
    this.updateData();
      this.isEdit= true;
    console.log(this.newIncident);
  }

setIncidentId(){
 let lastID =  parseInt(this._incidents[0].id)
 let newID = lastID+1
 this.newId = newID.toString();
 this.newIncident.id = this.newId;
}
submitIncidentData(){
  this.setIncidentId();
  this.sharedService.lat.asObservable().subscribe(res=>this.lat = res);
  this.sharedService.long.asObservable().subscribe(res=>this.long = res);
  this.newIncident.latLong = [this.lat, this.long];
  this.setArea();
  this.assignedStations();
  if(this.newIncident.priority == "بسيط"){
this.newIncident.priorityColor = "green"
  }
  else if(this.newIncident.priority == "متوسط"){this.newIncident.priorityColor = "Orange"}
  else if(this.newIncident.priority == "جسيم"){this.newIncident.priorityColor = "#D10F0F"}
  else if(this.newIncident.priority == "كارثي"){this.newIncident.priorityColor = "#750B0B"}
}

setArea(){
  let selectedArea = this._area.find(x=>x.id == this.newIncident.areaId);
  console.log(selectedArea)
  this.newIncident.areaName = selectedArea.nameAr;
}

assignedStations(){
  let selectedStation
  let selectedStationId = 0
  if(this.newIncident.areaId>=1&& this.newIncident.areaId<=33){
    selectedStationId = 1
  } 
  else if(this.newIncident.areaId>=34&& this.newIncident.areaId<=58){
    selectedStationId = 2
  }
  else if(this.newIncident.areaId>=59&& this.newIncident.areaId<=67){
    selectedStationId = 3
  }
  else if(this.newIncident.areaId>=68&& this.newIncident.areaId<=72){
    selectedStationId = 4
  }
  else if(this.newIncident.areaId>=73&& this.newIncident.areaId<=73){
    selectedStationId = 5
  }
  else if(this.newIncident.areaId>=74&& this.newIncident.areaId<=87){
    selectedStationId = 6
  }
  else if(this.newIncident.areaId>=88&& this.newIncident.areaId<=108){
    selectedStationId = 7
  }
  else if(this.newIncident.areaId>=109&& this.newIncident.areaId<=142){
    selectedStationId = 8
  }
  else if(this.newIncident.areaId>=143&& this.newIncident.areaId<=151){
    selectedStationId = 9
  }
  else if(this.newIncident.areaId>=152&& this.newIncident.areaId<=172){
    selectedStationId = 10
  }
  else if(this.newIncident.areaId>=173&& this.newIncident.areaId<=194){
    selectedStationId = 11
  }
  else if(this.newIncident.areaId>=195&& this.newIncident.areaId<=216){
    selectedStationId = 12
  }
  selectedStation = this._stationNames.find(x=> x.id==selectedStationId );
  let busyStations = []
  busyStations.push(selectedStationId)
  localStorage.setItem('busyStations',JSON.stringify(busyStations))
  console.log(selectedStation, selectedStationId)
  var newStationAssign:assignedStations = {
    stationName : selectedStation.nameAr,
    currentStatusId: "إسناد",
    statusChangeDate: new Date(),
    stationId: selectedStation.id
  }
  var status:statuses = {
    status:"تم الإسناد",
    statusTime:new Date().toISOString(),
    statusActualTime:new Date().toISOString(),
    dispatcherNo:'123569',
    user:'احمد سامى'
  }
  this.newIncident.statuses.unshift(status);
  this.newIncident.assignedStations.push(newStationAssign)
}
updateData(){
  this._incidents = JSON.parse(localStorage.getItem('incidents'));
  this._incidents.unshift(this.newIncident);
  localStorage.setItem('incidents', JSON.stringify(this._incidents))
}
editIncident(){

}
addpolice(e:any){
  console.log(e.target.innerText)
  this.newIncident.support.push(e.target.innerText);
}
addAmb(e:any){
  this.newIncident.support.push(e.target.innerText);
}
}
