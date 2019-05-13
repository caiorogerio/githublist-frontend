import { Pipe, PipeTransform } from '@angular/core';
import {GithublistService} from './githublist.service';

@Pipe({
  name: 'getLink'
})
export class GetLinkPipe implements PipeTransform {

  constructor(private githublistService: GithublistService) {}

  transform(value: any, args?: any): any {
    return this.githublistService.getPath(value);
  }
}
