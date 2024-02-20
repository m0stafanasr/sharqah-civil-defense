import { statuses } from './../../model/incidents';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { IncidentsModel } from '../../model/incidents';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-incidents-list',
  standalone: true,
  imports: [SharedModule,CommonModule ],
  templateUrl: './incidents-list.component.html',
  styleUrl: './incidents-list.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class IncidentsListComponent {
  constructor(private _router:Router){}
  mySelection:string="الحالي"
@Input() incidentsList:IncidentsModel[];
statusList:statuses[]=[]
openSideNav(incident:IncidentsModel){
  document.getElementById('sideNav').style.width='400px';
  this.statusList = incident.statuses
}
closeSideNav(){
  document.getElementById('sideNav').style.width='0px'
  this.statusList = [];
}

goToIncident(id){
  this._router.navigateByUrl('dispatchers/incident-control/'+id);
}
}
