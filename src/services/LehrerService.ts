import {Injectable} from 'angular2/core';
import {Benutzer, LoginModel} from '../Benutzer';
import {BaseService} from './BaseService';
import {Observable} from 'rxjs/Rx';
declare var unescape: any;
import 'rxjs/add/operator/toPromise';
import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LehrerService extends BaseService {


    constructor(http: Http) {
        super(http);
    }

    getAlleKlassenByID(id: number): Observable<any> {

        var creds = 'lehrerid=' + id;

        return this.get('getAlleKlassen.php', creds).map((response) => {
            return <any>response.json();
        });

    }


    getFaecherByKlassenID(id): Observable<any> {

        var creds = 'klassenid=' + id;

        return this.get('getFaecherByKlassenID.php', creds).map((response) => {
            return <any>response.json();
        });

    }

    getNotenbyFachId(id, klassenid): Observable<any> {

        var creds = 'fachid=' + id + '&klassenid=' + klassenid;

        return this.get('getNotenByFachID.php', creds).map((response) => {
            return <any>response.json();
        });

    }


    updateNotebyId(id, note): Observable<any> {

        var creds = 'noteid=' + id + '&note=' + note;

        return this.get('updateNotebyId.php', creds).map((response) => {
            return <any>response.json();
        });

    }

    getAlleSchuelerbyKlassenID(id): Observable<any> {

        var creds = 'klassenid=' + id;

        return this.get('getAlleSchuelerbyKlassenID.php', creds).map((response) => {
            return <any>response.json();
        });

    }


    neueNote(fachid, klassenarbeitnr, note, benutzerid): Observable<any> {

        var creds = 'fachid=' + fachid + '&klassenarbeitnr=' + klassenarbeitnr + '&note=' + note + '&benutzerid=' + benutzerid;

        return this.get('insertNote.php', creds).map((response) => {
            return <any>response.json();
        });

    }


}

