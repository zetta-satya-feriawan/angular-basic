import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private postsSource = new BehaviorSubject<any[]>([]);
  posts$ = this.postsSource.asObservable();
  private posts: any[] = [];

  constructor(private http: HttpClient) { }

  getPosts(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      this.posts = posts;
      this.postsSource.next(this.posts);
    });
  }

  getPost(postId: number): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }

  createPost(post: any): void {
    if(!post.id.includes('dummy')) {
      this.http.post<any>('https://jsonplaceholder.typicode.com/posts', post).subscribe(createdPost => {
        this.posts.push(createdPost);
        this.postsSource.next(this.posts);
      });
    } else {
      this.posts.push(post);
      this.postsSource.next(this.posts);
    }
  }


  updatePost(post: any): void {
    const index = this.posts.findIndex(p => p.id === post.id);
    console.log('testt', post)
    if(!post.id.includes('dummy')) {
      this.http.put<any>(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post).subscribe(updatedPost => {
        if (index !== -1) {
          this.posts[index] = updatedPost;
          this.postsSource.next(this.posts);
        } 
      });
    } else {
      this.posts[index] = post;
          this.postsSource.next(this.posts);
    }
  }

  deletePost(postId: number): Observable<any> {
    const url = `${this.apiUrl}/${postId}`;
    return this.http.delete(url);
  }
}
