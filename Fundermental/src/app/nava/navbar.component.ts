import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component ({
    selector:'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles : [`
        .nav.navbar-nav {font-size:15px;}
        #searchform {margin-right:100px;}
        @media (max-width:1200px) {#searchform {display;none}},
        li > a.active {}
    `]
})
export class NavBarComponent {
    constructor(private authService: AuthService){

    };
}