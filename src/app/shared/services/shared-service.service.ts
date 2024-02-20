import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  lat = new BehaviorSubject<number>(0)
  long = new BehaviorSubject<number>(0)
  constructor(private http: HttpClient) { }
  getLocation(searchTerm: string): Observable<any> {
    console.log(searchTerm)
    // Use a geocoding service or your own API to fetch coordinates based on the search term
    const apiUrl = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?SingleLine=${searchTerm}&f=json`;
    return this.http.get(apiUrl);
  }
  stopTimer(timerId) {
    clearInterval(timerId);
  }
}
