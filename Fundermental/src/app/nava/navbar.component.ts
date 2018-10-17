import { Component } from '@angular/core'

@Component ({
    selector:'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles : [`
        .nav.navbar-nav {font-size:15px;}
        #searchform {margin-right:100px;}
        @media (max-width:1200px) {#searchform {display;none}}
    `]
})
export class NavBarComponent {

}