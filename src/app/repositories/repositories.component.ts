import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';

import {GithublistService} from '../githublist.service';
import {ClipboardService} from '../clipboard.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  constructor(
    private githublistService: GithublistService,
    private clipboardService: ClipboardService,
    private snackBar: MatSnackBar
  ) { }

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

  copyUrl(url) {
    this.clipboardService.copyText(url);
    this.snackBar.open('Text copied','', {
      duration: 2000
    });
  }



}
