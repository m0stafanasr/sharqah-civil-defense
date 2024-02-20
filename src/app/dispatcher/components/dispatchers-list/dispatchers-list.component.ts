import { Component, OnInit } from '@angular/core';
import { IncidentsModel } from '../../../shared/model/incidents';

@Component({
  selector: 'app-dispatchers-list',
  templateUrl: './dispatchers-list.component.html',
  styleUrl: './dispatchers-list.component.scss'
})
export class DispatchersListComponent implements OnInit {
  incidentList:IncidentsModel[]=[]
  mapCenter = [55.46264890831277,  25.332567173849995];
  basemapType = 'streets';
  mapZoomLevel = 12;
constructor(){}
ngOnInit(): void {
  let incidents = localStorage.getItem("incidents")

    this.incidentList = JSON.parse(incidents);
}
mapLoadedEvent(status: boolean) {
  console.log('The map loaded: ' + status);
}
}
