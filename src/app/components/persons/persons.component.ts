import { Observable } from 'rxjs/Rx';
import { PersonService } from './../../services/person.service';
import { Person } from './../../models/Person';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  persons: Person[] ;

  constructor(public personService:PersonService) { 

  }

  ngOnInit() {
    this.loadPersons();
  }

  loadPersons(){
     // Get all comments
         this.personService.getPersons()
                           .subscribe(
                               persons => this.persons = persons, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
  }

}
