import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
})
export class DetailArticleComponent implements OnInit {
  articleId = null;
  commentContent = '';
  currentArticle = {
    title: '',
    content: '',
    user: '',
    comments: [],
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.articleId = params.id;

      this.getDetail();
    });
  }

  ////////////////////////////

  getDetail() {
    this.http
      .get<any>('/api/article/detailArticle/' + this.articleId)
      .subscribe(
        (data) => {
          this.currentArticle = data;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  postComment() {
    if (!this.commentContent) {
      return;
    }

    this.http
      .post<any>(
        '/api/article/' + this.articleId + '/createcomment',
        { content: this.commentContent }
      )
      .subscribe(
        (repsonse: any) => {
          this.commentContent = '';
          this.currentArticle.comments.push(repsonse.comment);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
