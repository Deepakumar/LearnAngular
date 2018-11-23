import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router} from "@angular/router"

@Component({
    templateUrl:'./login.component.html'
})
export class LoginComponent {
    username:string
    password:string

    constructor(private authService:AuthService,private router:Router) {

    }
    login(formValues) {
        this.authService.loginUser(formValues.username,formValues.password);
        this.router.navigate(['events'])
    }
    cancel(){
        this.router.navigate(['events'])
    }
}