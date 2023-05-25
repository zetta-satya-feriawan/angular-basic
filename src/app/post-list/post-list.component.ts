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

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;

  posts: Observable<any> | undefined;
  newPost : any = {}
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadPost()
    console.log(this.paginator);
    
  }
  loadPost(): void {
    this.postService.getPosts().subscribe(posts => {
      this.dataSource.data = posts
      console.log('sebelum oninit',this.paginator);
      if(this.paginator){
        this.dataSource.paginator = this.paginator
      }
      this.posts = this.dataSource.connect()
    })
  }

  createPost(): void{
    // this.newPost = {title : 'New post title', body : 'New Post Body'}
    console.log(this.newPost);
    
    this.postService.createPost(this.newPost).subscribe((response : any) =>{
        console.log('New post created:', response);
        this.loadPost(); 
        this.newPost = {}
         console.log(this.newPost, 'newpost');
      },
      (error: any) => {
        console.log('Error creating post:', error);
      }
    )
  }


  // createPost(): void {
  //   this.postService.createPost(this.newPost).subscribe(post => {
  //     this.dataSource.data = [...this.dataSource.data, post]
  //     this.posts = this.dataSource.connect()
  //     this.newPost = {} 
  //     console.log(this.posts);
      
  //   })
  // }


  editPost(post: any): void {
    const updatedPost = { ...post };

    updatedPost.title = 'Updated Title';
    updatedPost.body = 'Updated Body';

    this.postService.updatePost(updatedPost).subscribe(
      (response: any)=> {
        console.log('update post', response);
        this.loadPost()
      },
      (error : any) =>{
        console.log('eror update', error);
      }
    )

    // this.postService.updatePost(updatedPost).subscribe(updatedPost => {
    //   const index = this.posts.findIndex(p => p.id == updatedPost.id);
    //   if (index !== -1) {
    //     this.posts[index] = updatedPost
    //   }
    // })
  }
}
