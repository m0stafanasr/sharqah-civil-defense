import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispatchersListComponent } from './components/dispatchers-list/dispatchers-list.component';
import { IncidentControlComponent } from './components/incident-control/incident-control.component';

const routes: Routes = [
  {
    path: '',
    component: DispatchersListComponent,
  },{
    path:'incident-control/:id',
    component:IncidentControlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class dispatcherRoutingModule { }
