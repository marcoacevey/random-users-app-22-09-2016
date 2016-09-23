import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PeopleService {
  data: any = null;

  constructor(private http: Http) {

  }

  load() {
    if (this.data) {
      // Caso ja tenha carregado os dados
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('https://randomuser.me/api/?results=20')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.results;
          resolve(this.data);
        });
    });
  }
}

