import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
    selector: 'events-list',
    template:`
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr>
    <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
            <event-thumbnail (click)="handlethumbnailClick(event.name)"  [event]="event"></event-thumbnail>
        </div>
    </div>
    </div>`
})
export class EventsListComponent implements OnInit {

    events: IEvent[];
    constructor(private eventService: EventService
        ,private toastr: ToastrService
        ,private route: ActivatedRoute) {
    };

    handleEventClicked(data){
        console.log('The data re',data)
    };

    ngOnInit(){
        this.events = this.route.snapshot.data["events"];
    };

    handlethumbnailClick(eventName){
      this.toastr.sucess(eventName);
    }

}
