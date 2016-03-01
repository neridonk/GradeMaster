import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Globales} from '../../Globales';
import {Benutzer, LoginModel} from '../../Benutzer';
import {BenutzerService} from '../../services/BenutzerService';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    selector: 'sd-login',
    moduleId: module.id,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
    providers: [BenutzerService, ROUTER_DIRECTIVES]
})
export class Login {

    isBlur: boolean = false;
    loginModel: Benutzer = new Benutzer();

    constructor(private benutzerService: BenutzerService, private router: Router) { }

    login() {
        this.benutzerService.login(this.loginModel.bn_anmeldename, this.loginModel.bn_passwort).subscribe(
            data => this.gotoMainView(data),
            err => console.log(err)
        );
    }

    public gotoMainView(data: any) {

        if (data.length == 0) {
            alert('falsche Logindaten');
            return;
        }
        this.router.navigate(['About']);
    }

}
