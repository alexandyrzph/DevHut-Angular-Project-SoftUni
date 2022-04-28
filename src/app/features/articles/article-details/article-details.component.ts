import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../core/services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { Article } from '../../../shared/models/article.model';

@Component({
  selector: 'app-articles-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  post!: Article | any;
  currentUserId!: string;
  postOwnerId!: string;
  currentPostId!: string;

  constructor(private crudService: CrudService,
              private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.currentPostId = this.route.snapshot.params['id'];
    this.currentUserId = JSON.parse(localStorage.getItem('userData') as string).uid;
    this.crudService.getPostById(this.currentPostId).subscribe((post: Article | any) => {
      if (!post) {
        this.router.navigate(['/404-not-found']);
        return;
      }
      this.post = post;
      this.postOwnerId = post.ownerId;
    });
  }

  onDelete() {
    this.crudService.deleteArticle(this.currentPostId).subscribe(data => {
      this.router.navigate(['/articles/all']);
    });
  }

}
