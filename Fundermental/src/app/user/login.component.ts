import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
    templateUrl:'./login.component.html'
})
export class LoginComponent {
    username:string
    password:string

    constructor(private authService:AuthService) {

    }
    login(formValues) {
        this.authService.loginUser(formValues.username,formValues.password);
    }
}