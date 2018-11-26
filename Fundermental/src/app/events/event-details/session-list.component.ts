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
    @Input() sortBy: string
    visiblesessions: ISession[];

    ngOnChanges() 
    {
        if(this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visiblesessions.sort(sortByNameAsc) : this.visiblesessions.sort(sortByVotesDesc);
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

function sortByNameAsc(s1:ISession, s2:ISession){
    if(s1.name > s2.name ) return 1
    else if(s1.name === s2.name) return 0
    else return -1
}

function sortByVotesDesc(s1:ISession, s2:ISession){
    return s1.voters.length - s1.voters.length;
}