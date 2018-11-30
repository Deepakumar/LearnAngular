import { Component, Input } from "@angular/core";

@Component({
    selector:'simple-model',
    template:`
        <div id="simple-model" class="model fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="model-content">
                    <div class="model-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times:</span>
                        </button>
                        <h4 class="modal-title">{{title}}</h4>
                    </div>
                    <div class="model-body">
                        <ng-content></ng-content>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [
        `.model-body {height:250px overflow-y:scroll;}`  
    ]
})
export class SimpleModelComponent {
    @Input() title:string
} 