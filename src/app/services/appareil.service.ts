export class AppareilService {
    appareils = [
      {
        id: 1,
        name: 'Machine à laver',
        status: 'éteint'
      },
      {
        id: 2,
        name: 'Frigo',
        status: 'allumé'
      },
      {
        id: 3,
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

      getAppareilById(id: number) {
        const appareil = this.appareils.find( (s) => { return s.id === id; });
        return appareil;
      }
}