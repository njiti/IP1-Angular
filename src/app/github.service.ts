import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  user: any = {};
  username: String = ''
  repo: String = '';
  avatar: String = '';

  constructor(public http: HttpClient) { }

  fetchUser(username: string) {

    const url = "https://api.github.com/users"

    let promise = new Promise<void>((resolve, reject) => {
      this.http.get(url + '/' + username + "?access_token" + environment.accessToken).toPromise().then(response => {
        this.user = response
        console.log(this.user)
        resolve();
      },
      error => {
        alert("There has been an error")
        reject()
      })
    })
    return promise
    // return this.http.get<any>(url + "/" + username)
  }

}
