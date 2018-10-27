import { Component} from '@angular/core';
import { Router} from '@angular/router';
import { EventService } from './shared';

@Component({
    templateUrl: 'create-event.component.html',
    selector:'create-event',
    styles : [`
    em {float:right; color:#E05C65;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {color:#999;}
    .error ::-moz-placeholder {color:#999;}
    .error :-moz-placeholder {color:#999;}
    .error :ms-input-placeholder {color:#999};
  `]
})
export class CreateEventComponent {
    isdirty:boolean = true;
    newEventForm;
    constructor(private router:Router, private eventService: EventService) {

    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        this.router.navigate(['/events']);
    }
    cancel() {
        this.router.navigate(['/events']);
    }
}