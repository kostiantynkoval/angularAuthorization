import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import { Router} from '@angular/router';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {

  private headers: Headers = new Headers({'Content-Type': 'application/json'});

  userLogIn: string;
  redirectUrl: string;
  sessionID: string;

  constructor(private http: Http, private router: Router) {
    this.userLogIn = '';
  }

  login(login, password) {
    const body = {login: login, password: password};
    return this.http.post('http://localhost:3003/login', body, this.headers).map(res => {
      const result = res.json();
      if (result.code === 200) {
        this.userLogIn = login;
        this.sessionID = this.generateID();
        localStorage.setItem(`user:${login}`, this.sessionID );
        this.router.navigate([this.redirectUrl || '/']);
      }
      return result;
    });
  }

  logout(): void {
    localStorage.removeItem(`user:${this.userLogIn}` );
    this.router.navigate(['/login']);
  }

  generateID(): string {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

}
