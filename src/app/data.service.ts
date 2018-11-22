import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
@Injectable()
export class DataService {

  constructor(private http: Http) {
   }

   public getLedgerData(path:string): Observable<any> {
    return this.http.get("http://localhost:5000/"+path)
                    .map((res:any) => res.json())

}
}
