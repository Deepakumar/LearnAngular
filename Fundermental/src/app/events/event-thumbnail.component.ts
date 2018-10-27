import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent } from './shared/event.model';

@Component({
    selector : 'event-thumbnail',
    template: `
    <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
        <h2>{{event.name | uppercase}}</h2>
        <div>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div [ngSwitch]="event?.time" [ngClass]="getStartTimeClass()">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: {{event.price}}</div>
        <div *ngIf="event?.location">
            <span>{{event.location.address}}</span>
            <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            Online URL: {{event.onlineUrl}}
        </div>
        <button class="btn btn-primary">Clicked me!</button>
        </div>
    </div>
    `,
    styles : [
        `.pad-left { margin-left: 10px; }
        .well div { color: #bbb; font-size:0.75em;}
        .thumbnail { min-height: 210px;}
        .green { color:#52FFC4 !important;}
        .bold { font-weight:bold;}
        `
    ]
})
export class EventThumbnailcomponent {
   @Input() event:IEvent
   @Output() eventClick = new EventEmitter()

   getStartTimeClass() {
       if(this.event && this.event.time === "8:00 an"){
           return ['green','bold'];
       }
       else {
        return[];
       }
   }
}