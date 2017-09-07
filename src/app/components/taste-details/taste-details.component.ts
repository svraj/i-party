import { TasteService } from './../../services/taste.service';
import { Taste } from './../../models/Taste';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taste-details',
  templateUrl: './taste-details.component.html',
  styleUrls: ['./taste-details.component.css']
})
export class TasteDetailsComponent implements OnInit {
  id:number;
  isEdit:boolean;

  taste:Taste ={
    name:'',
    description:''
  }
  
  title: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tasteService: TasteService
  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];
    console.log('Id='+this.id);
    // if(this.id){
    //   console.log('editMode');
    //   this.isEdit = true;
    // }else{
    //   this.isEdit = false;
    // }

    // Get Client
    this.tasteService.getTaste(this.id).subscribe(taste => {
      this.taste = taste;
    });

  }


 saveEditable(value) {
    //call to http service
    console.log('Inside saveEditable ' + value);
    console.log(this.taste);
    this.tasteService.updateTaste(this.taste).subscribe(taste=>{
        this.taste = taste,
         err => {
            console.log(err);
         }
    });
 }

}
