import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable, of, throwError, pipe } from 'rxjs';
import { map, filter, catchError, mergeMap, tap } from 'rxjs/operators';
import { Consultant } from './consultant';



@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  public apiURL = 'api/consultants';
  private _url = '18.219.96.215/home/consultants';
  constructor(private httpclient: HttpClient) { }

  insertConsultant (consultant: Consultant) {
    console.log(consultant);
    return this.httpclient.post(this.apiURL, consultant)
    .pipe(
      map(res => res),
      catchError(this.errorHandler)
    );
  }

  errorHandler (error: Response) {
    console.log(error);
    return throwError(error);
  }

  getConsultants (): Observable<Consultant[]> {
    return this.httpclient.get<Consultant[]>(this.apiURL)
    .pipe(
      tap(consultants => console.log(`fetched consultants`),
      catchError(this.errorHandler)
      )
    );
  }


}
