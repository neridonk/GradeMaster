import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';


@Component({
    selector: 'block',
    moduleId: module.id,
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.css'],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class HomeComponent {

    pointX: number = 20;
    pointY: number = 20;

    constructor() { }


   

}
