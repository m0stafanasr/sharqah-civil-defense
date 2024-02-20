import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallTakersComponent } from './call-takers/call-takers.component';

const routes: Routes = [
  {
    path: '',
    component: CallTakersComponent,
   
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallTakerRoutingModule { }
