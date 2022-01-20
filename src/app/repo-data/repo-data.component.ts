import { Component, OnInit } from '@angular/core';
import { GithubService} from '../github.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repo-data',
  templateUrl: './repo-data.component.html',
  styleUrls: ['./repo-data.component.css']
})
export class RepoDataComponent implements OnInit {

  public selectedRepos;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    let user = this.route.snapshot.paramMap.get('userRepos')
    this.selectedRepos = user
  }

}
