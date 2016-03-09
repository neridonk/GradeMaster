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

    constructor(private benutzerService: BenutzerService, private router: Router) {


    }

    login() {

        this.router.navigate(['About']);
        var logili: any = new Array<any>();
        var logi: LoginModel = new LoginModel();
        logi.bn_id = 1;
        logi.bn_klassen_id = 1;
        logi.bn_nachname = "Mein Nachname";
        logi.bn_vorname = "Domi";
        logi.isLehrer = 1;
        logili.push(logi);
        this.gotoMainView(logili)
        return;


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
        Globales.setLoggedBenutzer(data[0]);
        location.reload();
    }

}
