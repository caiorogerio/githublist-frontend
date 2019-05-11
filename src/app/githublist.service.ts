import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class GithublistService {

  constructor(private http: HttpClient) { }

  get host() {
    return environment.githublist.host;
  }

  call(path) {
    return this.http.get(this.host + path.replace(/^\/+/, ''));
  }

  getLanguages() {
    return this.call('languages/');
  }

  getLanguage(id) {
    id = this.isApiUrl(id) ? this.getIdFromUrl(id) : id;
    return this.call('languages/' + id + '/');
  }

  getIdFromUrl(url) {
    return url.match(/languages\/([a-z\d-]+)/)[1];
  }

  isApiUrl(url) {
    return url.indexOf && url.indexOf(this.host) === 0;
  }
}
