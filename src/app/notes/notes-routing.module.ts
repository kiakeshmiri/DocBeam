import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoGuard } from '../auth.guard';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { RootComponent } from './root/root.component';

const routes: Routes = [
  {
    path: 'notes',
    component: RootComponent, canActivate:[AutoGuard],

    children: [
      {path: 'list', component: NotesListComponent},
      {path: 'detail/:{id}', component: NoteDetailComponent}
    ]

  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
