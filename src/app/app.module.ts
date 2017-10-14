import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { RegisterFormComponent } from '../components/register-form/register-form.component';
import { ComponentsModule } from '../components/components.module';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../providers/auth/auth.service';
import { DataService } from '../providers/data/data.service';
import { AngularFireDatabaseModule} from 'angularfire2/database'

@NgModule({
  declarations: [
    MyApp,
    LoginPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    DataService,
  ]
})
export class AppModule {}
