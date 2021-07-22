import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  appareils?: any[];
  isAuth: boolean = false;

  lastUpdate: Promise<Date> = new Promise( (resolve, reject) => {
    const date = new Date();
    setTimeout( () => { resolve(date); }, 2000);
  }
);

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    console.log("On allume tout !");
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if ( confirm('Etes-vous sur de vouloir tout eteindre ?')) {
      console.log("On éteint tout !");
      this.appareilService.switchOffAll();
    }
  }

}
