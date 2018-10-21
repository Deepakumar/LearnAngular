import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { ProfileComponent } from './profile.component';
import { UserRoutes } from './user.routes';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(UserRoutes),
        FormsModule
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