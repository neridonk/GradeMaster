import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
declare var unescape: any;
import {Observable} from 'rxjs/Rx';

@Injectable()
export class BaseService {

    private http: Http;
    private url: string = 'http://betribie.lima-city.de/';


    constructor(http: Http) {
        this.http = http;
    }

    /**
     * http Get
     * @param path
     * @param param
     */
    get(path: string, param: any): Observable<Response> {

        return this.http.get(this.url + path + '?' + param);

    }

    /**
     * http post
     * @param path
     * @param param
     */
    post(path: string, creds: any): Observable<Response> {

        return this.http.post(this.url + path, JSON.stringify(creds), {
            // headers: <Headers>ServiceConstants.getAuthHeader()
        });

    }


    /**
     * http put
     * @param path
     * @param param
     */
    put(path: string, param: any, creds: any): Observable<Response> {

        return this.http.put(this.url + path + param, JSON.stringify(creds), {
        });

    }


}

