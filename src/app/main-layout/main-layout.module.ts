import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { SideMenuComponent } from '../shared/components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    MainLayoutRoutingModule,
    SideMenuComponent,
    
  ]
})
export class MainLayoutModule { }
