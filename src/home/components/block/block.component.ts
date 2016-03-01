import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Benutzer, LoginModel} from '../../../Benutzer';
import {Position} from '../position';


@Component({
    selector: 'Block',
    moduleId: module.id,
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.css'],
    directives: [CORE_DIRECTIVES]
})
export class Block {


    @Input() set collideBenutzer(value: any) {

        this.collisionCheck(value);
        console.log(JSON.stringify(value));
        this.benutzer = value;
    }
    benutzer: Position = new Position();
    benutzerWidth: number = 19;
    benutzerHeight: number = 19;

    block: Position = new Position();
    width: number = 32;
    height: number = 32;


    linksReschts: any[] = new Array();


    constructor() {

        this.block.x = 32;
        this.block.y = 220;

    }
    ngAfterViewInit() {

        var width: number = document.body.clientWidth.valueOf();

        for (var i = 0; i < width + 32; i++) {

            width = width - 32;

            this.linksReschts.push(width);
        }

        this.movement();
    }

    private movement() {
        var i = 0;
        var nachRechts: boolean = true;
        var id = setInterval(() => {

            if (this.linksReschts.length - 1 == i)
                nachRechts = false;

            if (i == 0)
                nachRechts = true;

            this.block.x = this.linksReschts[i];
            // this.block.y = this.linksReschts[i].y;

            nachRechts ? i++ : i--;


        }, 10);

    }


    private collisionCheck(obj: Position) {

        //oben
        if ((this.block.x <= obj.x + this.benutzerWidth && //links 
            this.block.x + this.width >= obj.x) &&//rechts 
            (this.block.y <= obj.y + this.benutzerHeight &&
                this.block.y + this.height >= obj.y))//Oben Coollide - Primary
            alert("collidiert");


        /**
        if ((this.block.x <= obj.x + this.benutzerWidth && //links 
            this.block.x + this.width >= obj.x) &&//rechts 
            (this.block.y + this.height >= obj.y && this.block.y <= obj.y + this.benutzerHeight))//Unten Coollide - Primary
            alert("collide unten");

        //links
        if ((this.block.y <= obj.y + this.benutzerHeight && //oben
            this.block.y + this.height >= obj.y) &&//unten
            (this.block.x <= obj.x + this.benutzerWidth && this.block.x + this.width >= obj.x))//links collide - Primary
            alert("collide links");

        //rechts
        if ((this.block.y <= obj.y + this.benutzerHeight && //oben 
            this.block.y + this.height >= obj.y) &&//unten
            (this.block.x + this.width >= obj.x && this.block.x <= obj.x + this.benutzerWidth))//rechts collide - Primary
            alert("collide rechts");
        */

    }


}
