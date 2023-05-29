import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  title : string= '';
  body : string='';
  // id : number | undefined ;
  constructor(private postService : PostService, private router:Router){}
  
  createPost(): void {
    const id = Math.floor(Math.random()*(200-101)+101) + '-dummy'
    const post = { id: id, title: this.title, body: this.body };
    this.postService.createPost(post);

    console.log(post);
    this.router.navigate(['/'])
  }
  
}
