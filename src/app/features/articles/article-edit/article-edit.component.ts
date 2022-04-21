import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CrudService } from '../../../core/services/crud.service';
import { Article } from '../../../shared/models/article.model';

@Component({
  selector: 'app-articles-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css'],
})
export class ArticleEditComponent implements OnInit {
  isLoading = false;
  formGroup!: FormGroup;
  article!: Article;
  articleId!: string;
  editMode = false;
  hasPermission!: boolean;
  userId: string | null = JSON.parse(localStorage.getItem('userData') as string).uid;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private crudService: CrudService
  ) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.initForm();
    this.isLoading = false;
    this.route.params.subscribe((params: Params) => {
      this.articleId = params['id'];
      this.editMode = this.articleId != null;
    });
    if (this.editMode) {
      this.isLoading = true;
      this.crudService.getPostById(this.articleId).subscribe(article => {
        this.hasPermission = article.ownerId == this.userId;
        if (this.hasPermission) {
          this.initForm(article);
        }
          this.isLoading = false;
      });
    }
  }

  onSubmit() {
    if (this.editMode) {
      this.isLoading = true;
      this.crudService.updateArticle(this.articleId, this.formGroup.value).subscribe(data => {
        this.isLoading = false;
        this.router.navigate(['/articles/' + this.articleId]);
      });
    } else {
      this.isLoading = true;
      this.crudService.postArticle(this.formGroup.value).subscribe(article => {
        this.isLoading = false;
        this.router.navigate(['/articles/all']);
      });
    }
    this.formGroup.reset();
  }

  private initForm(article?: Article) {
    this.formGroup = this.fb.group({
      title: [article?.title || '', [Validators.required]],
      description: [article?.description || '', [Validators.required]],
      category: [article?.category || '', [Validators.required]],
      imgUrl: [article?.imgUrl || '', [Validators.required]],
      ownerId: [this.userId]
    });
  }
}
