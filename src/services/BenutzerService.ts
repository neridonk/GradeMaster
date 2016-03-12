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

    getFaecherById(id): Observable<any> {

        var creds = 'klassenid=' + id;

        return this.get('getFaecherByID.php', creds).map((response) => {
            return <any>response.json();
        });

    }

    getNotenByBenutzerIDandFachID(bid: number, fid: any): Observable<any> {

        var creds = 'benutzerid=' + bid + '&fachid=' + fid;

        return this.get('getNotenByBenutzerIDandFachID.php', creds).map((response) => {
            return <any>response.json();
        });

    }



    login(username: string, passwort: string): Observable<LoginModel> {

        var creds = 'username=' + username + '&password=' + passwort;

        return this.get('checkLogin.php', creds).map((response) => {
            return <LoginModel>response.json();
        });

    }



}

