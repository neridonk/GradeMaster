import {Component} from 'angular2/core';
import {Globales} from '../../Globales';
import {NotenMock} from './notenMock';
import {Benutzer, LoginModel} from '../../Benutzer';
import {LehrerService} from '../../services/LehrerService';
import {Router, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';


@Component({
    selector: 'sd-admin',
    moduleId: module.id,
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css'],
    providers: [LehrerService, ROUTER_DIRECTIVES]

})
export class Admin {


    klassen: any[];
    leherId;

    constructor(private lehrerService: LehrerService,
        private router: Router,
        private param: RouteParams
    ) {
        this.leherId = this.param.params['id'];

        this.lehrerService.getAlleKlassenByID(this.leherId).subscribe(
            data => this.klassen = data,
            err => console.log(err),
            () => console.log(JSON.stringify(this.klassen))
        );

    }

    ngAfterViewInit() {
    }

    gotoKlasse(id: number) {
        Globales.setinKlasse(id);
        this.router.navigate(['LehrerFaecher', { id: id }]);
    }


}
