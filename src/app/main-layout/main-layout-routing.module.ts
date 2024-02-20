import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path:'',redirectTo:'call-taker', pathMatch:'full'},
      {path:'call-taker', loadChildren:()=>import('../../app/call-taker/call-taker.module').then(x=>x.CallTakerModule)},
      {path:'dispatchers', loadChildren:()=>import('../../app/dispatcher/dispatcher.module').then(x=>x.DispatcherModule)},
      
      // {path:'request-monitoring', loadChildren:()=>import('../../modules/request-monitoring/request-monitoring.module').then(y=>y.RequestMonitoringModule)},
      // {path:'sps-management', loadChildren:()=>import('../../modules/sps-management/sps-management.module').then(z=>z.SpsManagementModule)},
      // {path:'test', component:TestComponentComponent}

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
