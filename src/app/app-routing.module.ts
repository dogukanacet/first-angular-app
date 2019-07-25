import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { MovieComponent } from './components/movie/movie.component';




const routes: Routes = [
  {
    path: 'user',
    component: UserComponent
  }, {
    path: "movie",
    component: MovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
