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
var forms_1 = require('@angular/forms');
var index_1 = require('../_models/index');
var PopupComponent = (function () {
    function PopupComponent(fb) {
        this.opened = true;
        this.only_once = false;
        this.emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
        this.dt = new Date();
        this.trials = [
            new index_1.Trial('One'),
            new index_1.Trial('Two'),
            new index_1.Trial('Three')
        ];
        this.complexForm = fb.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            'firstName': [null, forms_1.Validators.required],
            // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
            'lastName': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(10)])],
            'gender': [null],
            'patientID': [null],
            'trialInfo': [null, forms_1.Validators.required],
            'phoneNo': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('[0-9]{5}')])],
            'emailId': [null, forms_1.Validators.compose([forms_1.Validators.pattern(this.emailRegex)])],
            'location': [null, forms_1.Validators.required],
            'date-pick': [this.dt, forms_1.Validators.required],
            'doctorInfo': [null, forms_1.Validators.required],
        });
    }
    PopupComponent.prototype.getDate = function () {
        console.log("minDate is ", this.minDate);
        console.log("Date is ", this.dt);
        return this.dt && this.dt.getTime() || new Date().getTime();
    };
    PopupComponent.prototype.submitForm = function (value) {
        console.log(value);
        this.hideMessage();
    };
    PopupComponent.prototype.open = function () {
        if (!this.only_once) {
            this.minDate = this.dt;
            this.only_once = true;
        }
        this.opened = !this.opened;
        console.log("minDate is ", this.minDate);
        console.log("Date is ", this.dt);
    };
    PopupComponent.prototype.showMessage = function () {
        this.messageIsVisible = true;
        console.log("I am here");
    };
    PopupComponent.prototype.hideMessage = function () {
        this.messageIsVisible = false;
    };
    PopupComponent.prototype.ngOnInit = function () {
        this.minDate = new Date();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PopupComponent.prototype, "messageIsVisible", void 0);
    PopupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'popup',
            templateUrl: 'popup.component.html',
            styleUrls: ['popup.component.css'],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], PopupComponent);
    return PopupComponent;
}());
exports.PopupComponent = PopupComponent;
// import { Component, OnInit } from '@angular/core';
// import {FormGroup, FormBuilder, Validators} from '@angular/forms';
// import { User } from '../_models/index';
// import { UserService } from '../_services/index';
// @Component({
//     moduleId: module.id,
//     templateUrl: `
//         <div class="col-md-6 col-md-offset-3">
//             <h1>Home</h1>
//             <p>You're logged in with JWT!!</p>
//             <p><a [routerLink]="['/login']">Logout</a></p>
//             <div class="col-md-12 col-md-offset-0">
//                 <h2>Patient Recruitment</h2>
//                 <div class="jumbotron">
//                     <form [formGroup]="complexForm" (ngSubmit)="submitForm(complexForm.value)">
//                     <div class="form-group">
//                         <label>First Name:</label>
//                         <input class="form-control" type="text" placeholder="John" [formControl]="complexForm.controls['firstName']">
//                     </div>
//                     <div class="form-group">
//                         <label>Last Name</label>
//                         <input class="form-control" type="text" placeholder="Doe" [formControl]="complexForm.controls['lastName']">
//                     </div>
//                     <div class="form-group">
//                         <label>Gender</label>
//                     </div>
//                     <div class="radio">
//                         <label>
//                         <input type="radio" name="gender" value="Male" [formControl]="complexForm.controls['gender']">
//                         Male
//                         </label>
//                     </div>
//                     <div class="radio">
//                         <label>
//                         <input type="radio" name="gender" value="Female" [formControl]="complexForm.controls['gender']">
//                         Female
//                         </label>
//                     </div>
//                     <div class="form-group">
//                         <label>Activities</label>
//                     </div>
//                     <label class="checkbox-inline">
//                         <input type="checkbox" value="hiking" name="hiking" [formControl]="complexForm.controls['hiking']"> Hiking
//                     </label>
//                     <label class="checkbox-inline">
//                         <input type="checkbox" value="swimming" name="swimming" [formControl]="complexForm.controls['swimming']"> Swimming
//                     </label>
//                     <label class="checkbox-inline">
//                         <input type="checkbox" value="running" name="running" [formControl]="complexForm.controls['running']"> Running
//                     </label>
//                     <div class="form-group">
//                         <button type="submit" class="btn btn-default" [disabled]="!complexForm.valid">Submit</button>
//                     </div>
//                     </form>
//                 </div>
//             </div>    
//         </div>
//     `
// })
// export class HomeComponent implements OnInit {
//     model: any = {};
//     loading = false;
//     error = '';
//     complexForm : FormGroup;
//     constructor(fb: FormBuilder){
//         this.complexForm = fb.group({
//       // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
//       'firstName' : [null, Validators.required],
//       // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
//       'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
//       'gender' : [null, Validators.required],
//       'hiking' : false,
//       'running' :false,
//       'swimming' :false
//     })
//     }
//     ngOnInit() {
//         // get users from secure api end point
//         // this.userService.putNewUsers()
//         //     .subscribe(users => {
//         //         this.users = users;
//         //     });
//     }
// }
//# sourceMappingURL=popup.component.js.map