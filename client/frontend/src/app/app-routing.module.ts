import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './article/article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-articles', pathMatch: 'full' },
  { path: 'list-articles', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },  
  { path: 'createArticle', component: ArticleComponent },
  { path: 'detailArticle/:id', component: DetailArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
