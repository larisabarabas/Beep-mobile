import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../providers/data/data.service';
import { AuthService } from '../../providers/auth/auth.service';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile';
import { LoadingController, Loading } from 'ionic-angular';

@Component({
  selector: 'profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileViewComponent {

  private authUser: User;
  public userProfile: Profile;
  private loader: Loading;

@Output() existingProfile: EventEmitter<Profile>;

  constructor(private loading:LoadingController, private data: DataService, private auth:AuthService,) {
    this.existingProfile = new EventEmitter<Profile>();
    this.loader = this.loading.create({
      content: "Loading profle ..."
    })
  }

  ngOnInit(): void {
    this.loader.present()
    this.auth.getAuthenticatedUser().subscribe(auth => {
    this.authUser = auth;
     this.data.getProfile(this.authUser).subscribe(profile => {
       this.userProfile = <Profile>profile.val();
       this.existingProfile.emit(this.userProfile);
       this.loader.dismiss();
     })
    })
 }

}
