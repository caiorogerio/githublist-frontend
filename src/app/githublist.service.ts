import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GithublistService {

  constructor(private http: HttpClient) { }

  loading: EventEmitter<any> = new EventEmitter();

  private _callsOnLoading = 0;

  private get callsOnLoading() {
    return this._callsOnLoading;
  }

  private set callsOnLoading(callsOnLoading) {
    if(callsOnLoading===1) {
      this.loading.emit(true);
    } else if(callsOnLoading===0) {
      this.loading.emit(false);
    }

    this._callsOnLoading = callsOnLoading;
  }

  get host() {
    return environment.githublist.host;
  }

  call(path) {
    let observable: Observable<any>;

    this.callsOnLoading++;

    observable = this.http.get(this.host + path.replace(/^\/+/, ''));
    observable.subscribe({
      complete: () => this.callsOnLoading--
    });

    return observable;
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

  getPath(value) {
    if(!value.url) return null;

    return '/' + value.url.replace(this.host, '').replace(/^\/+/, '');
  }
}
