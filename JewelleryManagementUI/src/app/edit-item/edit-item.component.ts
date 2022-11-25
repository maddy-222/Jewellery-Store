import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { jewellery } from 'Model/jewellery.model';
import { JManagementService } from '../services/jmanagement.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  updateJewelleryRequest:jewellery={
    jid:0,
    name:'',
    type:'',
    description:'',
    price:0
 };

  constructor(private route:ActivatedRoute, private jservice:JManagementService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>
      {
        const jid=params.get('jid');
        if(jid){
          this.jservice.getJewelleryId(parseInt(jid))
          .subscribe({
            next:(response)=>{
              this.updateJewelleryRequest=response;
            }
          })
        }
      }
    })
  }
  updateJewellery(){
    this.jservice.updateJewellery(this.updateJewelleryRequest.jid,this.updateJewelleryRequest)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['viewitem']);
      },
      error:(response)=>{
        console.log(response);
      }
    })
  }
  deleteBooking(jid:number){
    this.jservice.deleteJewellery(jid)
    .subscribe({
      next:(response)=>
      {
        this.router.navigate(['viewitem']);
      },
      error:(response)=>{
        console.log(response);
      }
      
    });
  }

}

