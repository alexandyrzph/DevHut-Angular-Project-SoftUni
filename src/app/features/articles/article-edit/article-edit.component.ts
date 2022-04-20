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
  id!: string;
  editMode = false;

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
      this.id = params['id'];
      this.editMode = params['id'] != null;
    });
    if (this.editMode) {
      this.crudService.getPostById(this.id).subscribe(article => {
        this.initForm(article);
      });
    }
  }

  onSubmit() {
    if (this.editMode) {
      this.isLoading = true;
      this.crudService.updateArticle(this.id, this.formGroup.value).subscribe(data => {
        this.isLoading = false;
        this.router.navigate(['/articles/' + this.id]);
      });
      console.log(this.formGroup.value);
    } else {
      this.isLoading = true;
      this.crudService.postArticle(this.formGroup.value).subscribe(article => {
        this.isLoading = false;
        this.router.navigate(['/articles/all']);
      });
      this.formGroup.reset();
    }
  }

  private initForm(article?: Article) {
    this.formGroup = this.fb.group({
      title: [article?.title || '', [Validators.required]],
      description: [article?.description || '', [Validators.required]],
      category: [article?.category || '', [Validators.required]],
      imgUrl: [article?.imgUrl || '', [Validators.required]],
      ownerId: [JSON.parse(localStorage.getItem('userData') as string).id]
    });
  }
}
