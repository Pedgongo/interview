import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestApiService {


  url = "http://www.omdbapi.com/";
  apiKey = '653360f9';

  constructor(private http: HttpClient) { }


  searchData(title: string): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&apiKey=${this.apiKey}`)
    .pipe(
      map (results => results['Search'])
    );    
  }

  getData(id: string) {
    return this.http.get(`${this.url}?i={id}&plot=full&apiKey=${this.apiKey}`);
  }

}
