import { Component} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AuthService} from './auth.service';
import { Router} from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    selector: 'login',
    styles: [
        `
            em {float:right; color:#E05c65; padding-Left:110px; font-size:.75em;}
        `
    ]
})
export class LoginComponent {
    constructor(private authService: AuthService, private router:Router) {

    };
    login(formValue) {
        this.authService.loginUser(formValue.username, formValue.password);
        this.router.navigate(['events']);
    };
    cancel(){
        this.router.navigate(['events']);
    }
}