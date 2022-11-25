import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jewellery } from 'Model/jewellery.model';
import { JManagementService } from '../services/jmanagement.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  addJewelleryRequest:jewellery={
    jid:0,
    name:'',
    type:'',
    description:'',
    price:0
 };

  constructor(private jservice:JManagementService,private router:Router) { }

  ngOnInit(): void {
  }

  addJewellery()
  {
    this.jservice.addJewellery(this.addJewelleryRequest)
    .subscribe({
     next:(jewelleries) =>
        {
          this.router.navigate(['viewitem']);
          console.log(jewelleries);
        },
        error:(response)=>
        {
          console.log(response);
        }
    }) 
  }
}
