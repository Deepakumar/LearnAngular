import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { ProfileComponent } from './profile.component';
import { UserRoutes } from './user.routes';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(UserRoutes),
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations:[
        ProfileComponent,
        LoginComponent
    ],
    providers:[

    ]
})
export class UserModule {

}