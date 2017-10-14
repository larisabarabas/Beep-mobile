import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account/account'
import { LoginResponse } from '../../models/login/login-response';


@Injectable()
export class AuthService {

  constructor(private auth: AngularFireAuth) {
  }

getAuthenticatedUser(){
return this.auth.authState;
}
  async signInWithEmailAndPassword(account: Account){
    try{
      return <LoginResponse> {
        result: await this.auth.auth.signInWithEmailAndPassword(account.email, account.password)
      }
    }
    catch(e){
      return <LoginResponse> {
      error: e
      }
    }
  }

  async createUserWithEmailAndPasswor(account){
    try {
        return <LoginResponse>{
        result: await this.auth.auth.createUserWithEmailAndPassword(account.email, account.password)
        }
    }
    catch(e){
        return <LoginResponse>{
        error: e
        }
    }
  }
}
