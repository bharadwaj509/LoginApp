import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from './index';
import { Trial } from '../_models/index';

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    putNewUsers(){//: Observable<U> {
        // // add authorization header with jwt token
        // let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.access_token });
        // let options = new RequestOptions({ headers: headers });

        // // get users from api
        // return this.http.get('http://localhost:8081/api/users', options)
        //     .map((response: Response) => response.json());

        return null;
    }
}