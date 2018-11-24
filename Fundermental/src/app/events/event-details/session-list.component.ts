import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from "../shared";
import { NgOnChangesFeature } from "@angular/core/src/render3";

@Component({
    selector: 'session-list',
    templateUrl:'./session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions:ISession[]
    @Input() filterBy:string
    visiblesessions: ISession[];

    ngOnChanges() 
    {
        if(this.sessions) {
            this.filterSessions(this.filterBy);
        }
    }

    filterSessions(filter) {
        if(filter === 'all'){
            this.visiblesessions = this.sessions.slice(0);
        }else {
            this.visiblesessions = this.sessions.filter(session=> {
                return session.level.toLocaleLowerCase() === filter;
            })
        }
    }
}