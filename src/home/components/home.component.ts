import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Position} from './position';
import {Block} from './block/block.component';


@Component({
    selector: 'sd-home',
    moduleId: module.id,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, Block]
})
export class HomeComponent {
    newName: string;
    isMouseDown: boolean = false;
    canPush: boolean = true;
    canDot: boolean = true;

    animationPath: Position[] = new Array<Position>();
    myPosition: Position = new Position();


    constructor() {

        this.myPosition.x = 20;
        this.myPosition.y = 20;
    }


    addnewPointTouch(e) {//touch
        this.addnewPointList(e.targetTouches[0].pageX, e.targetTouches[0].pageY);

    }

    addnewPoint(e) {//noTouch
        this.addnewPointList(e.pageX, e.pageY);
    }

    addnewPointList(x, y) {

        this.canDot = false;
        setTimeout(() => {
            this.canDot = true;
        }, 90);

        var newpos: Position = new Position(x, y);
        this.animationPath.push(newpos);
    }

    fahreLinie() {
        var i = 0;
        var id = setInterval(() => {

            if (this.animationPath.length == i) {
                clearInterval(id);

                return;
            }

            this.myPosition.x = this.animationPath[i].x;
            this.myPosition.y = this.animationPath[i].y;

            i++;

        }, 100);
    }

}
