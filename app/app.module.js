"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng2_datepicker_1 = require('ng2-datepicker');
var ng2_bootstrap_1 = require('ng2-bootstrap');
// used to create fake backend
// import { fakeBackendProvider } from './_helpers/index';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { BaseRequestOptions } from '@angular/http';
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
// import { AuthGuard } from './_guards/index';
var index_1 = require('./_services/index');
var index_2 = require('./login/index');
var index_3 = require('./home/index');
var index_4 = require('./popup/index');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing,
                forms_1.ReactiveFormsModule,
                ng2_datepicker_1.DatePickerModule,
                ng2_bootstrap_1.DatepickerModule
            ],
            exports: [
                ng2_bootstrap_1.DatepickerModule,
                ng2_datepicker_1.DatePickerModule
            ],
            declarations: [
                app_component_1.AppComponent,
                index_2.LoginComponent,
                index_3.HomeComponent,
                index_4.PopupComponent
            ],
            providers: [
                // AuthGuard,
                index_1.AuthenticationService,
                index_1.UserService,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map