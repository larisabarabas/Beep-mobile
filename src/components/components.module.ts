import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { SearchCompComponent } from './search-comp/search-comp.component';

@NgModule({
   declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    EditProfileComponent,
    ProfileViewComponent,
    SearchCompComponent
  ],
   imports: [IonicModule],
   exports:[
    LoginFormComponent,
    RegisterFormComponent,
    EditProfileComponent,
    ProfileViewComponent,
    SearchCompComponent
  ]
})

export class ComponentsModule {

}
