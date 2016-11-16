"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./login/index');
var index_2 = require('./home/index');
var index_3 = require('./popup/index');
// import { AuthGuard } from './_guards/index';
var appRoutes = [
    { path: 'login', component: index_1.LoginComponent },
    { path: '', component: index_1.LoginComponent },
    { path: 'home', component: index_2.HomeComponent },
    { path: 'popup', component: index_3.PopupComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
// @NgModule({
//   imports: [ RouterModule.forRoot(appRoutes) ],
//   exports: [ RouterModule ]
// })
exports.routing = router_1.RouterModule.forRoot(appRoutes);
// export class AppRoutingModule {}
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.routing.js.map