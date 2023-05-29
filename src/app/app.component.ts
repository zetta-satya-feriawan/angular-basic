import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  

constructor(private postService : PostService){}
ngOnInit(): void {
    this.postService.getPosts()
}
}




// fetchPosts():void{
//   this.postService.posts$.subscribe(posts => {
//     this.posts = posts;
//   });
//   this.postService.getPosts();
// }

