import { Component, OnDestroy, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Profile } from '../../models/profile/profile';
import { DataService } from '../../providers/data/data.service';
import { AuthService } from '../../providers/auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { User } from 'firebase/app';


@Component({
  selector: 'edit-profile',
  templateUrl: 'edit-profile.component.html'
})

export class EditProfileComponent implements OnInit, OnDestroy{

  private authenticatedUser$:Subscription;
  private authenticatedUser: User;

  @Output() saveProfileResult: EventEmitter<Boolean>;


  @Input() profile: Profile;

  constructor( private data:DataService, private auth: AuthService) {
    this.saveProfileResult = new EventEmitter<Boolean>();
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    })
  }

    ngOnInit(): void {
      if(!this.profile){
      this.profile = {} as Profile;
      }
    }

  async saveProfile(){
    if(this.authenticatedUser){
      this.profile.email = this.authenticatedUser.email;
      const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
      this.saveProfileResult.emit(result);
      // console.log(result)
    }
  }
  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }

}
