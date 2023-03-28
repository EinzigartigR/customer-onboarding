import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const SERVER_API = 'https://glowing-sassy-celery.glitch.me/';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
    providedIn: 'root'
})

export class LoginService {
    cuurentToken: any;

    constructor(private http: HttpClient) { }

    login(credentials: any): Observable<any> {
        return this.http.post(SERVER_API + 'user/signIn', {
            username: credentials.username,
            password: credentials.password
        }, httpOptions);
    }

}

export class BasicDetService {
    cuurentToken: any;

    constructor(private http: HttpClient) { }

    basicDet(credentials: any): Observable<any> {
        return this.http.post(SERVER_API + 'user/basic-det', {
            firstname: credentials.firstname,
            lastname: credentials.lastname,
            email: credentials.email,
            gender: credentials.gender,
            phone: credentials.phone,
            dob: credentials.dob
        
        }, httpOptions);
    }

}
