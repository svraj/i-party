import { Taste } from './../../models/Taste';
import { TasteService } from './../../services/taste.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tastes',
  templateUrl: './tastes.component.html',
  styleUrls: ['./tastes.component.css']
})
export class TastesComponent implements OnInit {

  private tastes:Taste[];

  constructor(private tasteService: TasteService ) { }
  
  ngOnInit() {
    this.tasteService.getTastes().subscribe(tastes=>{
      this.tastes = tastes,
       err => {// Log errors if any
                console.log(err);
              }
    });
  }

}
