import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { auth, User } from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'wlt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'whitelist-tube';
  faCircle = faCircle;

  // get user(): Observable<string> { return;}

  displayName: string;
  constructor(public auth: AngularFireAuth, private router: Router) {
    this.auth.user
      .pipe(map(x => x?.displayName ?? 'Unknown'))
      .subscribe(x => this.displayName = x);
  }

  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }
}
