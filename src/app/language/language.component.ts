import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { GithublistService } from '../githublist.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  constructor(private githublistService: GithublistService) { }

  languages: object[];
  @Output() select = new EventEmitter();

  ngOnInit() {
    this.writeLanguages();
  }

  writeLanguages() {
    this.githublistService.getLanguages()
      .subscribe(
        (response: object) => this.languages = response['results']
      );
  }

  selectLanguage(language) {
    this.select.emit(language);
  }

}
