import { Component } from '@angular/core';
import Post from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  title = 'Projet Angular';

  lastUpdate: Promise<Date> = new Promise( (resolve, reject) => {
      const date = new Date();
      setTimeout( () => { resolve(date); }, 2000);
    }
  );

  /*
  appareilOne = "Machine à laver";
  appareilTwo = "Frigo";
  appareilThree = "Ordinateur";
  */

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

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

  constructor() {
    setTimeout( () => { this.isAuth = true; }, 4000 );
  }

  onAllumer() {
    console.log("On allume tout !")
  }
}