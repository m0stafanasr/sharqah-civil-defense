import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {path:'login', loadChildren:()=>import('../app/login/login.module').then(x=>x.LoginModule)},
    {path:'', loadChildren:()=>import('../app/main-layout/main-layout.module').then(x=>x.MainLayoutModule)},
];


