import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DatePickerModule} from 'ng2-datepicker';
import {DatepickerModule} from 'ng2-bootstrap';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers/index';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

// import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { PopupComponent } from './popup/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        ReactiveFormsModule,
        DatePickerModule,
        DatepickerModule
    ],
    exports:[
        DatepickerModule,
        DatePickerModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        PopupComponent
    ],
    providers: [
        // AuthGuard,
        AuthenticationService,
        UserService,

        // // providers used to create fake backend
        // fakeBackendProvider,
        // MockBackend,
        // BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }