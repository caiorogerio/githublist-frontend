import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {environment} from '../environments/environment';
import {RepositoriesComponent} from './repositories/repositories.component';
import {LanguagesIndexComponent} from './languages-index/languages-index.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';



const appRoutes: Routes = [
  { path: 'languages/:id', component: RepositoriesComponent },
  { path: '', component: LanguagesIndexComponent },
  { path: 'languages', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: !environment.production }
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
