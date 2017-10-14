import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { RegisterPage } from '../register/register';
import { InboxPage } from '../inbox/inbox';
import { TabsPage } from '../tabs/tabs';
import { ComponentsModule } from '../../components/components.module';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth'
import { EditProfilePage } from '../edit-profile/edit-profile';


@NgModule({
  declarations: [
    LoginPage,
    RegisterPage,
    InboxPage,
    TabsPage,
    EditProfilePage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    ComponentsModule,
    AngularFireAuthModule
  ],
  providers: [
    AngularFireAuth,
  ]
})
export class LoginPageModule {}
