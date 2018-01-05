import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  login: string;
  password: string;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.login(this.login, this.password).subscribe((res) => {
      console.log(res);
      if ( localStorage.getItem(`user:${this.auth.userLogIn}`) === this.auth.sessionID ) {
        alert('success');
      } else {
        alert('CRAP!');
      }
    }, err => {
      console.log(err);
      alert('CRAP!CRAP!');
    });

  }
}
