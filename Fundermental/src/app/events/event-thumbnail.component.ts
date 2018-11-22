import  { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared';

@Component({
    selector: 'event-thumbnail',
    template: `
            <div class="well hoverwell thumbnail" [routerLink]="['/events',event.id]">
                <h2>{{event?.name}}</h2>
                <div>Date: {{event?.date}}</div>
                <div>Time: {{event?.time}}</div>
                <div>Price: \${{event?.price}}</div>
                <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
                    Time: {{event.time}}
                    <span *ngSwitch="'8:00 am'">(Early Start)</span>
                    <span *ngSwitch="'10:00 am'">(Late Star)</span>
                    <span *ngSwitchDefault>(Normal Start)</span>
                </div>
                <div *ngIf="event?.location">
                    <span>Location: {{event?.location.address}}</span>
                    <span class="pad-left"></span>
                    <span>{{event?.location.city}}, {{event.location.country}}</span>
                </div>
                <div *ngIf="event?.onlineUrl">
                    Online URL: {{event?.onlineUrl}}
                </div>
                <button class="btn btn-primary" (click)="handleclickMe()">Click Me!</button>
            </div>
            `,
    styles : [`
        .pad-left {margin-left:10px}
        .well div {color:#bbb};
        .thumbnail { min-height:210px};
        .green { color:green};
        .bold { font-weight: bold}
        `
    ]
})
export class EventThumbnailComponent  {
    @Input() event:IEvent
    @Output() eventClick = new EventEmitter();

    handleclickMe() {
        this.eventClick.emit(this.event.name);
    }

    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time === '8:00 am'
        return {green:isEarlyStart,bold:isEarlyStart};
    }

}