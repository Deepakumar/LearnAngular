import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailcomponent} from './events/event-thumbnail.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailcomponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
