import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent} from './nava/navbar.component';
import { TOASTER_TOKEN, Toastr } from './common/toastr.service';
import { appRoutes} from './routes';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { CollasibleComponent} from './common/collapsible-well.component';

declare let toastr: Toastr;

import {
  EventsListComponent,
  EventThumbnailcomponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailcomponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollasibleComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    { provide: TOASTER_TOKEN, useValue: toastr},
    EventRouteActivator,
    {provide: 'canDeactivateEvent', useValue : checkdirtyState},
    EventListResolver,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkdirtyState(component: CreateEventComponent) {
  if(component.isdirty) {
    return window.confirm('you have not save this event, do you want to cancel?');
  }
  else {
    return true;
  }
}
