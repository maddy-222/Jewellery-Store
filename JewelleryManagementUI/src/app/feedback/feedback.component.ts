import { Component, OnInit } from '@angular/core';
import { feedback } from 'Model/feedback.model';
import { Router } from '@angular/router';
import { JManagementService } from '../services/jmanagement.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  addFeedbackRequest:feedback={
    fid:0,
    username:'',
    email:'',
    message:''
 };

  feedbacks:feedback[]=[];
  constructor(private jservice:JManagementService ,private router:Router) { }

  ngOnInit(): void {
    this.jservice.getAllFeedbacks()
    .subscribe({
      next:(feedbacks)=>
      {
        this.feedbacks=feedbacks;
        console.log(feedbacks);
      },
      error:(response)=>
      {
        console.log(response);
      }
    })
  }
  addFeedback()
  {
    this.jservice.addFeedback(this.addFeedbackRequest)
    .subscribe({
     next:(feedback) =>
        {
          console.log(feedback);
          alert("Response recieved")
          this.router.navigate(['feedback']);
          location.reload();
        },
        error:(response)=>
        {
          console.log(response);
        }
    }) 
  }

}
