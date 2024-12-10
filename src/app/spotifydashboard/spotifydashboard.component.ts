import { Component } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Spotify } from '../models/spotify';

@Component({
  selector: 'app-spotifydashboard',
  templateUrl: './spotifydashboard.component.html',
  styleUrls: ['./spotifydashboard.component.css']
})
export class SpotifydashboardComponent {
  records:Spotify[]=[]
  constructor(private service:SpotifyService){}

  ngOnInit():void{
    this.getrecords();
  }
  getrecords():void{
    this.service.getall().subscribe(data=>this.records=data)
  }
}
