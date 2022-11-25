import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { ViewItemComponent } from './view-item/view-item.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'additem',component:AddItemComponent},
  {path:'viewitem',component:ViewItemComponent},
  {path:'home',component:HomeComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'jewelleries/edititem/:jid',component:EditItemComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
