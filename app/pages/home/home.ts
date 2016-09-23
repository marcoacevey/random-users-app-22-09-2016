import { Component } from '@angular/core';
import {PeopleService} from '../../providers/people-service/people-service';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [PeopleService]
})
export class HomePage {
  public people: any;

  constructor(public peopleService: PeopleService) {
    this.loadPeople();
  }

  loadPeople() {
    console.log('Chamou o Load People!');

    this.peopleService.load()
      .then(data => {
        console.log('Dados Carregados com sucesso!');

        this.people = data;
      });
  }
}
