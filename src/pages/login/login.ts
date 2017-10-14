import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController, private navParams: NavParams, private toast: ToastController) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

    login(event: LoginResponse){
      if(!event.error){
      this.toast.create({
        message:`Welcome to Beep, ${event.result.email}`,
        duration:3000
      }).present()
      this.navCtrl.setRoot('EditProfilePage')
    }
    else {
      this.toast.create({
        message:event.error.message,
        duration: 3000
      }).present()
    }
  }
}
