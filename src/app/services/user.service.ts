import { Injectable } from '@angular/core';
import { globals } from './global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User.model';
import { Token } from '../models/token.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private url : string;
    constructor(private _http: HttpClient) {
        this.url = globals.apiUrl;
    }

    registerUser(user : User) {
        let params = JSON.stringify({
            name: user.name,
            lastName: user.lastName,
            username: user.username,
            password: user.password,
            email: user.email,
            imgUrl: ""
        });
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this._http.post<Token>(this.url + "/users/register", params, {
            headers: headers
        });
    }
}