import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { RootComponent } from './root/root.component';
import { NotesRoutingModule } from './notes-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, NotesRoutingModule, FormsModule
  ],
  declarations: [NoteListComponent, NoteDetailComponent, RootComponent]
})
export class NotesModule { }
