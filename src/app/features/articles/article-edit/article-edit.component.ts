import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../auth/auth-service/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CrudService } from '../../../core/services/crud.service';

@Component({
  selector: 'app-articles-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css'],
})
export class ArticleEditComponent implements OnInit {
  isLoading = false;

  id!: string;
  editMode = false;

  formGroup!: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private crudService: CrudService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    if (this.editMode) {
      // this.crudService.putArticle();
      console.log(this.formGroup.value + ' from edit');
    } else {
      // console.log(this.formGroup.value);
      this.formGroup.value.ownerId = this.authService.getCurrentUserToken();
      this.crudService.postArticle(this.formGroup.value).subscribe((user) => {
        console.log(user);
      });
      this.formGroup.reset();
    }
    this.router.navigate(['/articles/all']);
  }

  private initForm() {
    this.formGroup = this.fb.group({
      ownerId: [''],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      imgUrl: ['', [Validators.required]],
      comments: [[]],
    });
  }
}
