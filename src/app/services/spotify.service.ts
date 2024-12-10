import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Spotify } from '../models/spotify';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private baseurl="assets/spotify.json";
  constructor(private http:HttpClient) { }

// method creations

  getall():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}`);
  }

  getbyemail(email:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}/searche?mail=${email}`);

  }

  addspotify(records:Spotify):Observable<any[]>{
    return this.http.post<any[]>(`${this.baseurl}`,{data:records});
  }

  updatespotify(id:number,records:Spotify):Observable<any[]>{
    return this.http.put<any[]>(`${this.baseurl}/id/${id}`,{data:records})

  }

  deletespotify(id:number):Observable<any[]>{
    return this.http.delete<any[]>(`${this.baseurl}/id/${id}`);

  }

  getbyid(id:number):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}/search?id=${id}`);
  }

  deletename(name:string):Observable<any[]>{
    return this.http.delete<any[]>(`${this.baseurl}/id/${name}`);

  }

}
