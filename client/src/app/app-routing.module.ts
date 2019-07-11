import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{CostumeListComponent} from './costume-list/costume-list.component'

const routes: Routes = [
  {
    path:'',
    redirectTo:'/costumes',
    pathMatch:'full'
  },
  {
    path:'costumes',
    component:CostumeListComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
