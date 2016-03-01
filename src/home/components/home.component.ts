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


    addnewPoint(e) {


        var newpos: Position = new Position(e.pageX, e.pageY);
        this.animationPath.push(newpos);
        // console.log(JSON.stringify(this.animationPath));

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

            var pos = new Position()
            pos.x = this.animationPath[i].x;
            pos.y = this.animationPath[i].y;

            this.myPosition = pos;

            i++;

        }, 100);
    }

}
