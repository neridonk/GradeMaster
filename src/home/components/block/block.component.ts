import {Component, Input, ElementRef} from 'angular2/core';
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

    obj: Position = new Position();
    goal: Position = new Position();
    benutzerWidth: number = 19;
    benutzerHeight: number = 19;

    maxwidth: number = document.body.clientWidth.valueOf();
    @Input()
    Speed: number = 2000;

    @Input()
    block: Position = new Position();

    width: number = 32;
    height: number = 32;


    linksReschts: any[] = new Array();


    constructor(private elementRef: ElementRef) {

        this.goal.x = 0;
        this.goal.y = 220;

    }

    ngAfterViewInit() {

        this.movement();
    }

    private movement() {
        var nachRechts: boolean = true;


        var id = setInterval(() => {

            //Dem collideObj seine x y nach absolutem setzten
            this.obj.x = document.getElementById("benutzer").offsetLeft;
            this.obj.y = document.getElementById("benutzer").offsetTop;

            this.block.x = this.elementRef.nativeElement.children[0].offsetLeft;
            this.block.y = this.elementRef.nativeElement.children[0].offsetTop;

            this.collisionCheck();

            if (this.block.x + 32 >= this.maxwidth)
                nachRechts = false;

            if (this.block.x <= 0)
                nachRechts = true;


            if (nachRechts) {
                this.goal.x = this.maxwidth;
            } else {
                this.goal.x = 0;
            }

        }, 10);

    }


    private collisionCheck() {


        
        //oben
        if (this.block.x <= this.obj.x + this.benutzerWidth && //links 
            this.block.x + this.width >= this.obj.x &&//rechts 
            this.block.y <= this.obj.y + this.benutzerHeight &&
            this.block.y + this.height >= this.obj.y)//Oben Coollide - Primary
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
