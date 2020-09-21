import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  public getHeightLog(node: string): Observable<any[]>{
   return this.http.get<any[]>('http://149.56.25.24:8084/getnodesheight?node='+node);
  }

}
