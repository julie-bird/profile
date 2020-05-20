import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user: UserProfile = {
    name: "Julie", contact: "julie@julie.com", bio: "She's very, very Julie."
  }

  constructor() { }
  getUserProfile(): UserProfile {
    return this.user;
  }
  setUserProfile(user: UserProfile): void {
    this.user = user;
  }
}
