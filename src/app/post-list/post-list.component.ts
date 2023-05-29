import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from "../services/post.service";
import {  MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource  } from "@angular/material/table";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
posts : any[] = []

constructor(private postService : PostService){}
ngOnInit(): void {
    this.fetchPosts()
}

fetchPosts():void{
  this.postService.posts$.subscribe(posts => {
    this.posts = posts;
    console.log(posts)
  });
}
deletePost(postId : number):void{
  this.postService.deletePost(postId).subscribe(()=>{
    this.posts = this.posts.filter(post=>post.id !== postId)
  })
}

//   this.postService.getPosts();
// }
}
