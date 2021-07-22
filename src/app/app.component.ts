import { Component, OnInit } from '@angular/core';
import Post from './models/post.model';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth = false;
  title = 'Projet Angular';

  posts: Post[] = [
    {
      title: 'Premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
      loveIts: 0,
      hateIts: 0,
      createdAt: new Date()
    },
    {
      title: 'Deuxieme post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
      loveIts: 0,
      hateIts: 0,
      createdAt: new Date()
    },
    {
      title: 'Troisieme post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
      loveIts: 0,
      hateIts: 0,
      createdAt: new Date()
    },
    {
      title: 'Quatrieme post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
      loveIts: 0,
      hateIts: 0,
      createdAt: new Date()
    }
  ]



  /*
  appareilOne = "Machine à laver";
  appareilTwo = "Frigo";
  appareilThree = "Ordinateur";
  */

  constructor(private appareilService: AppareilService) {
    setTimeout( () => { this.isAuth = true; }, 4000 );
  }

  ngOnInit() {
  }

  
}