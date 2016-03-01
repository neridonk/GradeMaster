import {Component, ViewEncapsulation} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {Login} from '../../login/components/login.component';
import {AboutComponent} from '../../about/components/about.component';
import {HomeComponent} from '../../home/components/home.component';
import {NameListService} from '../../shared/services/name-list.service';

@Component({
    selector: 'sd-app',
    viewProviders: [NameListService],
    moduleId: module.id,
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
})
@RouteConfig([
        { path: '/', name: 'Login', component: Login },
    { path: '/about', name: 'About', component: AboutComponent }
])
export class AppComponent { }