import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {
  articles = [];

  constructor(private http: HttpClient, public userService: UserService) {}

  ngOnInit(): void {
    this.getListArticles().subscribe((data) => {
      this.articles = data.articles.reverse();
    });
  }

  getListArticles() {
    return this.http.get<any>('/api/article/listArticle');
  }
}
