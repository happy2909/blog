import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { IndexComponent } from './index/index.component';
import { ArticleComponent } from './article/article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { UserService } from './services/user.service';
import { ArticleService } from './services/article.service';
import { TruncatePipe } from './models/truncate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    IndexComponent,
    ArticleComponent,
    DetailArticleComponent,
    TruncatePipe,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [UserService, ArticleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
