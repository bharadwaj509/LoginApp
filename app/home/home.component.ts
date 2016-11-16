import { Component, ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {PopupComponent} from '../popup/index';

@Component({
    moduleId: module.id,
    selector: 'home-component',
    templateUrl: 'home.component.html'
})
export class HomeComponent{
    // @ViewChild(PopupComponent) popupMsg:PopupComponent;  // ErrorMessage is a ViewChild

    // public clicked():void{
    //     console.log("I am here");
    //     this.popupMsg.showMessage();
    // }

    showDialog = false;
    

}