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
    templateUrl: './lehrerFaecher.component.html',
    styleUrls: ['./lehrerFaecher.component.css'],
    providers: [LehrerService, BenutzerService, ROUTER_DIRECTIVES]

})
export class LehrerFaecher {


    faecher: any[];

    constructor(private benutzerService: BenutzerService,
        private router: Router,
        private param: RouteParams
    ) {

        var id = this.param.params['id'];

        this.benutzerService.getFaecherById(id).subscribe(
            data => this.faecher = data,
            err => console.log(err)
        );


    }

    ngAfterViewInit() {
    }

    goFach(id) {
        this.router.navigate(['LehrerNoten', { id: id }]);
    }


}
