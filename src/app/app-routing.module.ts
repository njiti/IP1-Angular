import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepoDataComponent } from './repo-data/repo-data.component';

const routes: Routes = [
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'search-form', component: SearchFormComponent},
  {path: 'repos/:userRepos', component: RepoDataComponent},
  {path: '', redirectTo: 'landing-page', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
