import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallTakersComponent } from './call-takers/call-takers.component';
import { CallTakerRoutingModule } from './main-layout-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TimerComponent } from '../shared/components/timer/timer.component';
import { CommentsComponent } from '../shared/components/comments/comments.component';
import { IncidentsListComponent } from '../shared/components/incidents-list/incidents-list.component';
import { EsriMapComponent } from '../shared/components/esri-map/esri-map.component';



@NgModule({
  declarations: [
    CallTakersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CallTakerRoutingModule,
    CommentsComponent,
    IncidentsListComponent,
    EsriMapComponent,
    
    
  ]
})
export class CallTakerModule { }
