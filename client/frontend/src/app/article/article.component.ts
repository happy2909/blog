import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',  
})
export class ArticleComponent implements OnInit {
  constructor(private articleService: ArticleService, private router: Router) {}
  ngOnInit(): void {}

  article = {
    title: '',
    content: '',
  };

  submit(): void {
    const data = {
      title: this.article.title,
      content: this.article.content,
    };
    this.articleService.createArticle(data).subscribe(
      () => {
        this.router.navigateByUrl('/');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
