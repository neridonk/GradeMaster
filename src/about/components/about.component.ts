import {Component} from 'angular2/core';
import {Globales} from '../../Globales';
import {Faecher} from './faecherMock';
import {Benutzer, LoginModel} from '../../Benutzer';
import {BenutzerService} from '../../services/BenutzerService';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'sd-about',
    moduleId: module.id,
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    providers: [BenutzerService, ROUTER_DIRECTIVES]

})
export class AboutComponent {


    faecher: any[];

    constructor(private benutzerService: BenutzerService, private router: Router) {


        if (!Globales.geBenutzer()) {
            return;
        }


        this.benutzerService.getFaecherById(Globales.geBenutzer().bn_klassen_id).subscribe(
            data => this.faecher = data,
            err => console.log(err),
            () => console.log(JSON.stringify(this.faecher))
        );

    }

    goFach(id: number) {
        this.router.navigate(['Noten', { id: id }]);
    }

    ngAfterViewInit() {
        setTimeout(() => {
            document.getElementById('newsfeed').style.left = "100%";
        }, 90);


    }


}
