import { Component, Input, OnInit } from '@angular/core';
import Post from 'src/app/models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post?: Post;

  constructor() { }

  ngOnInit(): void {
  }

  onLove() {
    console.log("Love !");
    this.post!.loveIts++;
  }

  onHate() {
    console.log("Hate !");
    this.post!.hateIts++;
  }
}