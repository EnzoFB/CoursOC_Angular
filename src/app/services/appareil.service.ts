export class AppareilService {
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

      switchOn(i: number) {
        this.appareils[i].status = "allumé";
      }

      switchOff(i: number) {
        this.appareils[i].status = "éteint";
      }

      switchOnAll() {
          for(let appareil of this.appareils) {
              appareil.status = 'allumé';
          }
      }

      switchOffAll() {
          for(let appareil of this.appareils) {
              appareil.status = 'éteint';
          }
      }
}