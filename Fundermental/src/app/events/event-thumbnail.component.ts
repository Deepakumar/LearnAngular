import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector : 'event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
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
        `
    ]
})
export class EventThumbnailcomponent {
   @Input() event:any
   @Output() eventClick = new EventEmitter()
}