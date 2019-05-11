import { TestBed, inject } from '@angular/core/testing';

import { GithublistService } from './githublist.service';

describe('GithublistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithublistService]
    });
  });

  it('should be created', inject([GithublistService], (service: GithublistService) => {
    expect(service).toBeTruthy();
  }));
});
