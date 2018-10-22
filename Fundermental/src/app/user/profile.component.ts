import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService} from './auth.service';
import { Router} from '@angular/router';

@Component({
  templateUrl: 'profile.component.html',
  styles : [`
    em {float:right; color:#E05C65;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {color:#999;}
    .error ::-moz-placeholder {color:#999;}
    .error :-moz-placeholder {color:#999;}
    .error :ms-input-placeholder {color:#999};
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private router: Router,private authService: AuthService){

  };

  ngOnInit() {
    let firstName = new FormControl(this.authService.currentUser.firstName, Validators.required);
    let lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  };

  cancel() {
    this.router.navigate(['events']);
  };

  saveProfile(formValues){
    if(this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }
  };
};