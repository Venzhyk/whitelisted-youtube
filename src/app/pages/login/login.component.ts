import { Component, OnInit } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'wlt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  faCircle = faCircle;

  constructor(public auth: AngularFireAuth) {
  }

  ngOnInit(): void {
  }

  googleLogin() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

}
