import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreationComponent } from './user-creation/user-creation.component';

const routes: Routes = [{path:'', redirectTo:'/user', pathMatch:'full'},
{path:'user', component:UserListComponent},
{path:'create-user', component:UserCreationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
