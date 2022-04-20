import { Component, OnDestroy, OnInit } from '@angular/core';
import { CrudService } from '../../../core/services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../auth/auth-service/auth.service';
import { Article } from '../../../shared/models/article.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit, OnDestroy {

  detailsSubscription!: Subscription;

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
    this.detailsSubscription = this.crudService.getPostById(this.currentPostId).subscribe((post: Article | any) => {
      this.authService.userSubject.subscribe(user => this.currentUserId = user.id);
      this.post = post;
      this.postOwnerId = post.ownerId;
    });
  }

  onDelete() {
    this.crudService.deleteArticle(this.currentPostId).subscribe(data => {
      this.router.navigate(['/articles/all']);
    });
  }


  ngOnDestroy() {
    this.detailsSubscription.unsubscribe();
  }
}
