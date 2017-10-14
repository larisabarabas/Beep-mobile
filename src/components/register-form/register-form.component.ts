import { Component, Output, EventEmitter } from '@angular/core';
import { Account } from '../../models/account/account'
import { ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth.service';
import { LoginResponse } from '../../models/login/login-response';

@Component({
  selector: 'register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  account= {} as Account;

@Output() registerStatus:EventEmitter<LoginResponse>;

  constructor(private auth:AuthService, private toast:ToastController) {
    this.registerStatus = new EventEmitter<LoginResponse>();
  }

  async register() {
    try {
      const result = await
      this.auth.createUserWithEmailAndPasswor(this.account)
      this.registerStatus.emit(result)
      // this.toast.create({
      //   message:"Account successfully created",
      //   duration:300
      //   }).present();
  }
  catch(e){
    this.registerStatus.emit(e);
    // this.toast.create({
    // message:e.message,
    // duration:300
    // }).present();
  }
  }
}

