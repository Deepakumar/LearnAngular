import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
// import { EventsListComponent} from './events/event-list.component';
// import { EventThumbnailComponent} from './events/event-thumbnail.component';
// import { EventService} from './events/shared/event.service';
// import { CreateEventComponent} from './events/create-event.component';
// import { EventListResolver} from './events/events-list-resolver.service';
// import { EventDetailsComponent} from './events/event-details/event-details.component';
// import { EventRouteActivator} from './events/event-details/event-route-activator.service';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  CreateEventComponent,
  EventListResolver,
  EventDetailsComponent,
  EventRouteActivator
} from './events/index'
import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    {
      provide:'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty)
  return window.confirm('You have not save this event, do you really want to cancel?')
  return true;
}
