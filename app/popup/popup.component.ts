import {  Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Trial} from '../_models/index';

@Component({
    moduleId: module.id,
    selector: 'popup',
    templateUrl : 'popup.component.html',
    styleUrls: ['popup.component.css'],
})

export class PopupComponent implements OnInit{

  complexForm : FormGroup;
  private opened:boolean = true;
  private only_once:boolean = false;
  emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  public minDate:Date;
  public dt:Date = new Date();
  trials = [
      new Trial('One'),
      new Trial('Two'),
      new Trial('Three')
  ];
  @Input() messageIsVisible: boolean;

  constructor(fb: FormBuilder){  

    this.complexForm = fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      'firstName' : [null, Validators.required],
      // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'gender' : [null],
      'patientID': [null],
      'trialInfo':[null, Validators.required],
      'phoneNo':[null, Validators.compose([Validators.required, Validators.pattern('[0-9]{5}')])],  //^
      'emailId':[null, Validators.compose([Validators.pattern(this.emailRegex)])],
      'location': [null, Validators.required],
      'date-pick': [this.dt, Validators.required] ,
      'doctorInfo':[null, Validators.required],
    })
  }

  public getDate():number {
    console.log("minDate is ",this.minDate);
    console.log("Date is ",this.dt);
    return this.dt && this.dt.getTime() || new Date().getTime();
  }

  submitForm(value: any){
    console.log(value);
    this.hideMessage();
  }

  public open():void {
    if(!this.only_once){
        this.minDate = this.dt;
        this.only_once = true;
    }
    this.opened = !this.opened;
    console.log("minDate is ",this.minDate);
    console.log("Date is ",this.dt);
  }
  
  public showMessage():void{
       this.messageIsVisible = true;
       console.log("I am here");
  }

  public hideMessage():void{
      this.messageIsVisible = false;
      
  }

  ngOnInit() {
    this.minDate = new Date();
  }

}



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
