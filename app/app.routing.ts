import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';

import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { PopupComponent } from './popup/index';
// import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: LoginComponent },
    { path:'home', component: HomeComponent},
    { path:'popup', component: PopupComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

// @NgModule({
//   imports: [ RouterModule.forRoot(appRoutes) ],
//   exports: [ RouterModule ]
// })


export const routing = RouterModule.forRoot(appRoutes);


// export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/