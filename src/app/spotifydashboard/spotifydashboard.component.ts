import { Component } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Spotify } from '../models/spotify';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-spotifydashboard',
  templateUrl: './spotifydashboard.component.html',
  styleUrls: ['./spotifydashboard.component.css']
})
export class SpotifydashboardComponent {
  records:Spotify[]=[];
  formgroup!:FormGroup;
  constructor(private service:SpotifyService,private fb:FormBuilder){
    this.formgroup=this.fb.group({
      username:['',[Validators.required]]

    })
  }

  ngOnInit():void{
    this.getrecords();
  }
  getrecords():void{
    this.service.getall().subscribe(data=>this.records=data)
  }

  updaterecords(){
    

  }
}
