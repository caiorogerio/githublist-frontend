import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';

import {GithublistService} from '../githublist.service';
import {ClipboardService} from '../clipboard.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  constructor(
    private githublistService: GithublistService,
    private clipboardService: ClipboardService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) { }

  repositories: object[];

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        this.githublistService.getLanguage(params.get('id'))
          .subscribe(
            (language) => {
              this.repositories = language.repositories;
            }
          )
      }
    )
  }

  copyUrl(url) {
    this.clipboardService.copyText(url);
    this.snackBar.open('Text copied','', {
      duration: 2000
    });
  }



}
