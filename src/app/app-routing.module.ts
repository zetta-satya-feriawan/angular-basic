import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorListComponent } from './mentor-list/mentor-list.component';

const routes: Routes = [
  {path:'mentors', component:MentorListComponent},
  {path:'', redirectTo:'/mentors', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
