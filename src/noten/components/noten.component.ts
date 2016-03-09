import {Component} from 'angular2/core';
import {Globales} from '../../Globales';
import {NotenMock} from './notenMock';
import {Benutzer, LoginModel} from '../../Benutzer';
import {BenutzerService} from '../../services/BenutzerService';
import {Router, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';


@Component({
    selector: 'sd-noten',
    moduleId: module.id,
    templateUrl: './noten.component.html',
    styleUrls: ['./noten.component.css'],
    providers: [BenutzerService, ROUTER_DIRECTIVES]

})
export class Noten {


    noten: any[];

    constructor(private benutzerService: BenutzerService,
        private router: Router,
        private param: RouteParams
    ) {


        this.noten = NotenMock.noten;

    }

    ngAfterViewInit() {


    }


}
