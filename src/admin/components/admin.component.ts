import {Component} from 'angular2/core';
import {Globales} from '../../Globales';
import {NotenMock} from './notenMock';
import {Benutzer, LoginModel} from '../../Benutzer';
import {BenutzerService, } from '../../services/BenutzerService';
import {Router, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';


@Component({
    selector: 'sd-admin',
    moduleId: module.id,
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css'],
    providers: [BenutzerService, ROUTER_DIRECTIVES]

})
export class Admin {


    klassen: any[];
    leherId;

    constructor(private benutzerService: BenutzerService,
        private router: Router,
        private param: RouteParams
    ) {

        this.leherId = this.param.params['id'];
        this.klassen = NotenMock.noten;

    }

    ngAfterViewInit() {


    }


}
