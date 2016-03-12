import {Component, ViewEncapsulation} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {Login} from '../../login/components/login.component';
import {AboutComponent} from '../../about/components/about.component';
import {HomeComponent} from '../../home/components/home.component';
import {Admin} from '../../admin/components/admin.component';
import {Noten} from '../../noten/components/noten.component';
import {LehrerFaecher} from '../../lehrerFaecher/components/lehrerFaecher.component';
import {LehrerNoten} from '../../lehrerNoten/components/lehrerNoten.component';
import {NameListService} from '../../shared/services/name-list.service';
import {Globales} from '../../Globales';

@Component({
    selector: 'sd-app',
    viewProviders: [NameListService],
    moduleId: module.id,
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
@RouteConfig([
    { path: '/', name: 'Login', component: Login },
    { path: '/noten/:id', name: 'Noten', component: Noten },
    { path: '/lehrer/:id', name: 'Admin', component: Admin },
    { path: '/lehrerFaecher/:id', name: 'LehrerFaecher', component: LehrerFaecher },
    { path: '/lehrerNoten/:id', name: 'LehrerNoten', component: LehrerNoten },
    { path: '/home', name: 'About', component: AboutComponent }
])
export class AppComponent {

    public jwt;

    constructor(private router: Router) {
        this.jwt = Globales.geBenutzer();

        console.log(this.jwt);


        if (Globales.geBenutzer()) {

            if (Globales.geBenutzer().isLehrer == 1) {

                if (document.URL.indexOf("lehrerNoten") != -1 || document.URL.indexOf("lehrerFaecher") != -1) {
                    this.router.navigate(['Admin', { id: Globales.geBenutzer().bn_id }]);
                }


                return;
            }
            this.router.navigate(['About']);
            return;
        }


        this.router.navigate(['Login']);

    }




}
