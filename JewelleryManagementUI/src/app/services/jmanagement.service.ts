import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { jewellery } from 'Model/jewellery.model';
import { feedback } from 'Model/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class JManagementService {

  baseApiUrl:string=environment.baseApiUrl;

  constructor(private http:HttpClient) { }
  getAllItems():Observable<jewellery[]>
  {
    return this.http.get<jewellery[]>(this.baseApiUrl+'/api/jewelleries');
  }
  addJewellery(addJewelleryRequest:jewellery): Observable<jewellery[]>
  {
    addJewelleryRequest.jid=0;
    return this.http.post<jewellery[]>(this.baseApiUrl+'/api/jewelleries',addJewelleryRequest);
  }
  getAllFeedbacks():Observable<feedback[]>
  {
    return this.http.get<feedback[]>(this.baseApiUrl+'/api/feedbacks');
  }
  addFeedback(addFeedbackRequest:feedback): Observable<feedback[]>
  {
    addFeedbackRequest.fid=0;
    return this.http.post<feedback[]>(this.baseApiUrl+'/api/feedbacks',addFeedbackRequest);
  }

//update item
  getJewelleryId(jid:number):Observable<jewellery>{
    return this.http.get<jewellery>(this.baseApiUrl+'/api/jewelleries/'+jid);
  }

  updateJewellery(jid:number,updateJewelleryRequest:jewellery):Observable<jewellery[]>{
    return this.http.put<jewellery[]>(this.baseApiUrl+'/api/jewelleries/'+jid,updateJewelleryRequest);
  }
  deleteJewellery(jid:number):Observable<jewellery>{
    return this.http.delete<jewellery>(this.baseApiUrl+'/api/jewelleries/'+jid);
  }
}
