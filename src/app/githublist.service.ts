import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GithublistService {

  constructor(private http: HttpClient) { }

  host = 'http://localhost:8000/api/';

  call(path) {
    return this.http.get(this.host + path.replace(/^\/+/, ''));
  }

  getLanguages() {
    return this.call('languages/');
  }

  getLanguage(id) {
    return this.call('languages/' + id);
  }
}
