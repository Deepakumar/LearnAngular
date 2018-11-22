import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    templateUrl:'./login.component.html'
})
export class LoginComponent {
    username:string
    password:string
    login(formValues) {
        console.log(formValues);
    }
}