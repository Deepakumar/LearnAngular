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
        <button class="btn btn-primary">Clicked me!</button>
        </div>
        </div>
    `,
    styles : [
        `.pad-left { margin-left: 10px; }
        .well div { color: #bbb;}
        `
    ]
})
export class EventThumbnailcomponent {
   @Input() event:any
   @Output() eventClick = new EventEmitter()
}