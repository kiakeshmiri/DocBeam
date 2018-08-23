import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { RootComponent } from './root/root.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { FormsModule } from '@angular/forms';
import { NotesService } from './services/notes.service';
import { AutoGuard } from '../auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NotesRoutingModule
  ],
  declarations: [
    RootComponent,
    NotesListComponent,
    NoteDetailComponent
  ],
  providers:[NotesService, AutoGuard]
})
export class NotesModule { }
