import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { RootComponent } from './root/root.component';

const routes: Routes = [
  {
    path: 'notes',
    component: RootComponent, canActivate: [AuthGuard],

    children: [
      {path: 'list', component: NoteListComponent},
      {path: 'detail/:{id}', component: NoteDetailComponent}
    ]

  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
