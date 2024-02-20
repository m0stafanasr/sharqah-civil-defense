import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispatchersListComponent } from './components/dispatchers-list/dispatchers-list.component';
import { IncidentControlComponent } from './components/incident-control/incident-control.component';
import { dispatcherRoutingModule } from './dispatcher-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EsriMapComponent } from '../shared/components/esri-map/esri-map.component';
import { IncidentsListComponent } from '../shared/components/incidents-list/incidents-list.component';
import { CommentsComponent } from '../shared/components/comments/comments.component';



@NgModule({
  declarations: [
    DispatchersListComponent,
    IncidentControlComponent
  ],
  imports: [
    CommonModule,
    dispatcherRoutingModule,
    SharedModule,
    EsriMapComponent,
    IncidentsListComponent,
    CommentsComponent
  ]
})
export class DispatcherModule { }
