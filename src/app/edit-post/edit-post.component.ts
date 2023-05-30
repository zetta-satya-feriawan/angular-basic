import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { Inject } from '@angular/core';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  postId: number | null = null
  title: string = '';
  body: string = '';
  posts: any[]=[];

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const postIdParam = params.get('id');
      console.log('id of post',postIdParam);
        if (postIdParam?.includes('dummy')) {
        this.postService.posts$.subscribe((resp) => {
          const selectedPost = resp.find((data) => data?.id === postIdParam)
          if(selectedPost) {
            this.postId = selectedPost.id
            this.title = selectedPost.title
            this.body = selectedPost.body
          }
        })
      } else if (postIdParam) {
        this.postId = +postIdParam;
        this.postService.getPost(this.postId).subscribe(post => {
          this.title = post.title;
          this.body = post.body;
        });
      } 
    });
  }
  updatePost(): void {
    if (this.postId !== null) {
      const updatedPost = { id: this.postId, title: this.title, body: this.body };
      this.postService.updatePost(updatedPost);
      this.router.navigate(['/'])
    }
  }
}
