import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Position} from './position';


@Component({
    selector: 'sd-home',
    moduleId: module.id,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class HomeComponent {
    newName: string;
    isMouseDown: boolean = false;
    canPush: boolean = true;
    canDot: boolean = true;

    animationPath: Position[] = new Array<Position>();

    pointX: number = 20;
    pointY: number = 20;

    constructor() { }


    addnewPoint(e) {


        this.canDot = false;

        setTimeout(() => {
            this.canDot = true;
        }, 50);

        var newpos: Position = new Position(e.pageX, e.pageY);
        this.animationPath.push(newpos);
        console.log(JSON.stringify(this.animationPath));

    }

    fahreLinie() {
        var i = 0;
        var id = setInterval(() => {

            if (this.animationPath.length == i) {
                clearInterval(id);

                return;
            }

            this.pointX = this.animationPath[i].x;
            this.pointY = this.animationPath[i].y;
            i++;



        }, 100);
    }

}
