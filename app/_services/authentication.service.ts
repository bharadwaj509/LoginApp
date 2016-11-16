import { Injectable } from '@angular/core';
import { Http, Headers, Response , RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public access_token: string;
    public refresh_token: string;
    public token_type: string;
    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.access_token = currentUser && currentUser.token;
         
    }

    login(username, password) : Observable<Boolean> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');  
        headers.append('Authorization', 'Basic dGVzdENsaWVudDp0ZXN0U2VjcmV0');
        let options = new RequestOptions({headers: headers});
        
        var a = this.http.post('http://localhost:8081/auth', JSON.stringify({ grant_type:'password', username: 'ml@uc.edu', password: 'ucapplab' }), options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let access_token = response.json() && response.json().access_token;
                let refresh_token = response.json() && response.json().refresh_token;
                let token_type = response.json() && response.json().token_type;
                console.log(response.json());   
                console.log(response.json().access_token);        
                if (access_token) {
                    // set token property
                    this.access_token = access_token;
                    this.refresh_token = refresh_token;
                    this.token_type = token_type;
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, access_token: access_token, refresh_token: refresh_token, token_type: token_type }));
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            }); 
        // console.log(a)
         return a;
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.access_token = null;
        localStorage.removeItem('currentUser');
    }
}