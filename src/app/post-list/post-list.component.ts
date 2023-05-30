import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from "../services/post.service";
import {  MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableDataSourcePaginator  } from "@angular/material/table";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, AfterViewInit {
// @ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatPaginator, { static: false }) paginator!:MatPaginator
posts : any;
// dataSource: MatTableDataSource<any> = new MatTableDataSource<any>(this.posts);
dataSource!: MatTableDataSource<any>;
constructor(private postService : PostService){
  this.dataSource = new MatTableDataSource<any>(this.posts);
}

ngOnInit(): void {
  
}
ngAfterViewInit(): void {
  this.fetchPosts() 
}
fetchPosts():void{
  this.postService.posts$.subscribe(posts => {
    // this.dataSource = new MatTableDataSource<any>(this.posts);

    this.dataSource.data = posts;
    this.dataSource.paginator = this.paginator;
    this.posts = this.dataSource.connect()
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.data = this.posts; 
    // this.dataSource.paginator!.length = this.posts.length; 
    // this.dataSource.connect()
    // this.dataSource = new MatTableDataSource<any[]>(this.posts);
    // this.dataSource.paginator = this.paginator;
    console.log(posts)
  });
}
deletePost(postId : number):void{

  this.postService.deletePost(postId).subscribe(()=>{
    this.dataSource.data = this.dataSource.data.filter(post=>post.id !== postId)
  })
}

//   this.postService.getPosts();
// }
}
