public posts : any [];

import { Component, OnInit } from '@angular/core';
import { ShowPostService } from './show-post.service';
import { CommonService } from '../service/common.service';


@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css'],
  providers: [ ShowPostService ]
})
export class ShowPostComponent implements OnInit {

  constructor(private showPostService: ShowPostService, private commonService: CommonService) {
       
}
 
  ngOnInit(){
    this.getAllPost();
    this.commonService.postAdded_Observable.subscribe(res => {
      this.getAllPost();
    });
  }
 
  getAllPost(){
    this.ShowPostService.getAllPost().subscribe(result => {
      this.posts = result['data'];
    });
  }
}