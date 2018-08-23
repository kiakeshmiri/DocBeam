import { Component, OnInit } from '@angular/core';
import {NotesService} from '../services/notes.service';
import { Note } from '../models/note.interface';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes: Note[] =[];
  
  constructor(private notesService: NotesService) {  }

  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void{
    this.notesService.getNotes()
      .subscribe(notes => this.notes = notes);
  }
}
