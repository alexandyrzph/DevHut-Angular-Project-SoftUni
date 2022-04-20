import { Comment } from './comment.model';

export interface Article {
  id?: string;
  title: string;
  description: string;
  imgUrl: string;
  category: string;
  ownerId: string;
  comments?: Comment[];
}
