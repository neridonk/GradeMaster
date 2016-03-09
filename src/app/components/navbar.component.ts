import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {BenutzerService} from '../../services/BenutzerService';
import {Globales} from '../../Globales';


@Component({
  selector: 'sd-navbar',
  moduleId: module.id,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent {
 

    logout() {
        Globales.loggout();
        location.reload();

    }
}
