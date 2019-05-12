import { Component } from '@angular/core';
import {GithublistService} from './githublist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  language = null;
  loading = false;

  constructor(private githublistService: GithublistService) {
    this.githublistService.loading.subscribe(event => this.loading = event);
  }

  selectLanguage(language) {
    this.language = language;
  }
}
