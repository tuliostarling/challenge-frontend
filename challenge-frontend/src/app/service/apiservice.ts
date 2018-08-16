import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppSettings } from '../app.settings';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

    API_URL: string = AppSettings.API_ENDPOINT;

    constructor(
        private http: HttpClient
    ) { }

    // read method
    public get(path) {
        const endpoint = this.API_URL + path;
        return this.http.get(endpoint);
    }

    // create method
    public post(path: string, body: any) {
        const endpoint = this.API_URL + path;
        return this.http.post(endpoint, body);
    }

    // delete method
    public delete(path: string) {
        const endpoint = this.API_URL + path;
        return this.http.delete(endpoint);
    }

    // update method
    public update(path: string, body: any) {
        const endpoint = this.API_URL + path;
        return this.http.put(endpoint, body);
    }
}
