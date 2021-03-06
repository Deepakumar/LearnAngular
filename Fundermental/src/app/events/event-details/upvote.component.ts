import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ISession } from "../shared";

@Component({
    selector:'upvote',
    template:`
                <div class="votingWidgetContainer pointable" (click)="onClick()">
                    <div class="well votingWidget">
                        <div class="votingButton">
                            <i class="glyphicon glyphicon-heart" [style.color]="inconColor"></i>
                        </div>
                        <div class="badge badge-inverse votingCount">
                            <div>{{count}}</div>
                        </div>
                    </div>
                </div>
        `,
        styleUrls:['./upvote.component.css']
})
export class UpVotingComponent {
    @Input() count: number;
    @Input() set voted(val) {
        this.inconColor = val ? 'red':'white';
    }
    @Output() vote= new EventEmitter();
    private inconColor: string;

    onClick() {
        this.vote.emit({});
    }

    userHasVoted(session:ISession) {
        
    }

    toggleVote(session: ISession) {

    }
}