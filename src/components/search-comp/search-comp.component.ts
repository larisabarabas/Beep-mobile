import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../providers/data/data.service';
import { Profile } from '../../models/profile/profile';

@Component({
  selector: 'search-comp',
  templateUrl: 'search-comp.component.html'
})
export class SearchCompComponent {
  query: string;

  profileList: Profile[];

  @Output() selectedProfile: EventEmitter<Profile>

  constructor( private data: DataService) {
    this.selectedProfile = new EventEmitter<Profile>();
  }

  selectProfile(profile: Profile) {
    this.selectedProfile.emit(profile);
  }

  searchUser(query: string){
    const trimmedQuery = query.trim();
    if( trimmedQuery === query){
        this.data.searchUser(query).subscribe(profiles =>{
          this.profileList = profiles;
        })
      }
    }
  }
