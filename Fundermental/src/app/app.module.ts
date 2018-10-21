import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent} from './nava/navbar.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes} from './routes'
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

import {
  EventsListComponent,
  EventThumbnailcomponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index';




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
