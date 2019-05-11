import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  language = null;

  selectLanguage(language) {
    console.log("app", language);
    this.language = language;
  }
}
