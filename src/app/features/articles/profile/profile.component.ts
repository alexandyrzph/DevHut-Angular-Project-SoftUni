import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import { Article } from '../../../shared/models/article.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  articles: Article[] = [];
  userArticles: Article[] = [];
  isLoading: boolean = false;
  uid!: string | null;
  ownerHasPosts!: boolean;
  respData: any;
  email!: string | null;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.crudService.getAllArticles().subscribe((data) => {
      this.respData = data;
      for (const el in this.respData) {
        this.respData[el].id = el;
      }
      this.articles = Object.values(data);
      this.uid = JSON.parse(localStorage.getItem('userData') as string).uid;
      this.email = JSON.parse(localStorage.getItem('userData') as string).email;
      this.ownerHasPosts = this.articles.some(
        (article) => article.ownerId == this.uid
      );
      this.isLoading = false;
      this.userArticles = this.articles.filter(article => article.ownerId == this.uid);
    });
  }
}
