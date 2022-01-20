import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { GithubService } from '../github.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {

 users: any = {};
 username: User;


  getUsername(value: any) {
    this.username = new User(value.username)
    this.githubService.fetchUser(this.username.username)
  }

  onSelect(user) {
    console.log(this.githubService.user)
    this.router.navigate(['/repos', user.repos_url]);
  }

  constructor(public githubService: GithubService, private router: Router) {
  }

  ngOnInit(): void {
  }

}
