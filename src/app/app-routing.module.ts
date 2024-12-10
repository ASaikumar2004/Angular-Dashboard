import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifydashboardComponent } from './spotifydashboard/spotifydashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',component:SpotifydashboardComponent},
  { path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
