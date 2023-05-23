import { Component, OnInit } from '@angular/core';
import { PostService } from "../services/post.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: any[] = [];
  newPost: any = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadPost()
  }
  loadPost(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts
    })
  }

  createPost(): void {
    this.postService.createPost(this.newPost).subscribe(post => {
      this.posts.push(post)
      this.newPost = {}
    })
  }

  editPost(post: any): void {
    const updatedPost = { ...post };
    // Update the post properties as needed
    updatedPost.title = 'Updated Title';
    updatedPost.body = 'Updated Body';

    this.postService.updatePost(updatedPost).subscribe(updatedPost => {
      const index = this.posts.findIndex(p => p.id == updatedPost.id);
      if (index !== -1) {
        this.posts[index] = updatedPost
      }
    })
  }
}
