import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
    </div>
    <h2>{{event.name}}</h2>
    <hr/>
    <div class="well hoverwell thumbnail"></div>
    `
})
export class EventsListComponent {
    event = {
        id:1,
        name:'Angular Connect',
        date:'06/26/2036',
        time:'10:00 am;',
        price:599.99,
        imageUrl:'./assets/images/angularconnect-shield.png',
        location: {
            address: {
                address:'1057 DT',
                city:'London',
                country:'England'
                    }
        }
    };
}