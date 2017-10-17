import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { RegisterPage } from '../register/register';
import { InboxPage } from '../inbox/inbox';
import { TabsPage } from '../tabs/tabs';
import { ComponentsModule } from '../../components/components.module';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth'


@NgModule({
  declarations: [
    LoginPage,
    RegisterPage,
    InboxPage,
    TabsPage
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
