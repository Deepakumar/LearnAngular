import { Component, Input, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared";

declare let toastr;

@Component({
    template:`
                <div>
                    <h1>Upcoming Angular Events</h1>
                    <hr>
                    <div class="row">
                        <div class="col-md-5" *ngFor="let event of events">
                        <event-thumbnail  [event]="event" (eventClick)="handleEventClicked($event)" (click)="handleThumbnailClick(event.name)">
                        </event-thumbnail>
                        </div>
                    </div>
                </div>
    `
})
export class EventsListComponent implements OnInit {
    events:IEvent[];

    constructor(private eventService: EventService, private toastr:ToastrService, private route:ActivatedRoute) {
      
    }

    ngOnInit() {
       this.events = this.route.snapshot.data['events'];

    }

    handleEventClicked(data)
    {
        console.log('received:',data);
    }

    handleThumbnailClick(eventName){
      toastr.success(eventName);
    }

};