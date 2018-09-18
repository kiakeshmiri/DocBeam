import { Component, OnInit } from '@angular/core';
import { NotesService } from '../service/notes.service';
import { Note } from '../model/note.interface';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  notes: Note[] = [];

  constructor(private notesService: NotesService) {  }

  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void {
    this.notesService.getNotes()
      .subscribe(notes => this.notes = notes);
  }

}
