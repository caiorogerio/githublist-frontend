import {Component, Input, OnInit} from '@angular/core';
import {GithublistService} from '../githublist.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  constructor(private githublistService: GithublistService) { }

  repositories: object[];
  private _language = null;

  @Input()
  set language(language) {
    if(language) {
      this.githublistService.getLanguage(language.url)
        .subscribe(
          (response: object) => this._language = response
        );
    }
  }

  get language() {
    return this._language;
  }

  ngOnInit() {}



}
