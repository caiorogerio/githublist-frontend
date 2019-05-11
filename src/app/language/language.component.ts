import { Component, OnInit } from '@angular/core';

import { GithublistService } from '../githublist.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  constructor(private githublistService: GithublistService) { }

  languages: Observable<Object>;

  ngOnInit() {
    this.getLanguages();
  }

  getLanguages() {
    this.languages = this.githublistService.getLanguages();
  }

  selectLanguage(language) {

  }

}
