import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './components/timer/timer.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { MaterialModule } from './components/material/material.module';
import { EsriMapComponent } from './components/esri-map/esri-map.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedServiceService } from './services/shared-service.service';



@NgModule({
  providers:[SharedServiceService],
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    TimerComponent,
    NgSelectModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports:[
    FormsModule,
    TimerComponent,
    NgSelectModule,
    MaterialModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
