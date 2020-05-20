import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { UserProfile } from '../interfaces/user-profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: UserProfile;
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.user = this.profileService.getUserProfile();
  }

}
