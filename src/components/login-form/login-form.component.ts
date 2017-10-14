import { Component, EventEmitter, Output } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Account } from '../../models/account/account'
import { LoginResponse } from '../../models/login/login-response';
import { AuthService } from '../../providers/auth/auth.service';


@Component({
  selector: 'login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  account = {} as Account;
  @Output() loginStatus: EventEmitter<any>;

  constructor(private auth:AuthService, private navCtrl: NavController, private navParams: NavParams) {
    this.loginStatus = new EventEmitter<LoginResponse>()
  }

  async login(){
    const result = await this.auth.signInWithEmailAndPassword(this.account)
    this.loginStatus.emit(result)
  }


  navigateToRegisterPage() {
    this.navCtrl.push('RegisterPage')
   }
}
