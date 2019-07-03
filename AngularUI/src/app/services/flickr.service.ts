import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  constructor(private http: HttpClient) { }

  public getPhotos(tags?: string) : Observable<any> {
    let apiURL: string = 'http://localhost:8080/flickr/photos';
    let params = new HttpParams();
    if (tags) {
      params = params.set('tags', tags);
    }
    return this.http.get<any>(apiURL, {params}).pipe(catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
