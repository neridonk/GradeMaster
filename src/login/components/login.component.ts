import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'sd-login',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class Login {

    constructor( ) { }

 
}
