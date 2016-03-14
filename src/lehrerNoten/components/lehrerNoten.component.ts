import {Component} from 'angular2/core';
import {Globales} from '../../Globales';
import {NotenMock} from './notenMock';
import {Benutzer, LoginModel} from '../../Benutzer';
import {LehrerService} from '../../services/LehrerService';
import {BenutzerService} from '../../services/BenutzerService';
import {Router, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';


@Component({
    selector: 'sd-faecher',
    moduleId: module.id,
    templateUrl: './lehrerNoten.component.html',
    styleUrls: ['./lehrerNoten.component.css'],
    providers: [LehrerService, BenutzerService, ROUTER_DIRECTIVES]

})
export class LehrerNoten {
    schuelerList: any[];

    selectedBenutzer: any;
    selectedNote: any;
    selectedNr: any;
    noten: any[];

    fachid;

    constructor(private lehrerService: LehrerService,
        private router: Router,
        private param: RouteParams
    ) {

        var id = this.param.params['id'];

        this.fachid = id;

        this.lehrerService.getNotenbyFachId(id, Globales.getinKlasse()).subscribe(
            data => this.noten = data,
            err => console.log(err)
        );


        this.lehrerService.getAlleSchuelerbyKlassenID(Globales.getinKlasse()).subscribe(
            data => this.schuelerList = data,
            err => console.log(err)
        );

    }

    ngAfterViewInit() {
    }

    speichereAenderungen(noteId) {
        var note: any = this.noten.filter(n=> n.no_id == noteId)[0];
        this.lehrerService.updateNotebyId(note.no_id, note.no_note).subscribe(
            data => {
                if (data.status == 'succes') {
                    alert('Erfolgreich geaendert');
                    return;
                }

                alert('Fehler versuchen Sie es erneut');

            },
            err => console.log(err)
        );
    }

    onChange(id) {
        this.selectedBenutzer = id;
    }

    public addNote() {
        this.lehrerService.neueNote(this.fachid, this.selectedNr, this.selectedNote, this.selectedBenutzer, Globales.getinKlasse()).subscribe(
            data => {
                location.reload();
            },
            err => console.log(err)
        );
    }



}
