import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/book-management', pathMatch: 'full' },
  { path: 'book-management', loadChildren: () => import('./book-management/book-management.module').then(m => m.BookManagementModule) },
  { path: '**', redirectTo: '/book-management', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
