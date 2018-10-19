import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailcomponent} from './events/event-thumbnail.component';
import { NavBarComponent} from './nava/navbar.component';
import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service';
import { appRoutes} from './routes'
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event.route.activator';



@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailcomponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    {provide:'canDeactivateEvent', useValue : checkdirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkdirtyState(component: CreateEventComponent) {
  if(component.isdirty) {
    return window.confirm('you have not save this event, do you want to cancel?')
  }
  else {
    return true;    
  }
}
