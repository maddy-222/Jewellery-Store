import { Component, OnInit } from '@angular/core';
import { jewellery } from 'Model/jewellery.model';
import { JManagementService } from '../services/jmanagement.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  jewelleries:jewellery[]=[];

  constructor(private jservice:JManagementService ) { }

  ngOnInit(): void {
    this.jservice.getAllItems()
    .subscribe({
      next:(jewelleries)=>
      {
        this.jewelleries=jewelleries;
        console.log(jewelleries);
      },
      error:(response)=>
      {
        console.log(response);
      }
    })
  }

}
