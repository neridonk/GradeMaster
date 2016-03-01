import {Injectable} from 'angular2/core';
import {Benutzer, LoginModel} from '../Benutzer';
import {BaseService} from './BaseService';
import {Observable} from 'rxjs/Rx';
declare var unescape: any;
import 'rxjs/add/operator/toPromise';
import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BenutzerService extends BaseService {

    private httpS: Http;

    constructor(http: Http) {
        super(http);
        this.httpS = http
    }



    //User einloggen
    login(username: string, passwort: string): Observable<LoginModel> {

        var creds = 'username=' + username + '&password=' + passwort;

        return this.get('checkLogin.php', creds).map((response) => {
            return <LoginModel>response.json();
        });

    }



}

