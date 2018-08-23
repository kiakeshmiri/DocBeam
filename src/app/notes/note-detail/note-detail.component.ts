import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../services/notes.service';
import { Location } from '@angular/common';
import { Note } from '../models/note.interface';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
  note: Note;


  constructor(
    private route: ActivatedRoute,
    private noteService: NotesService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getNote();
  }

  getNote(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.noteService.getNote(id)
      .subscribe(
        note => this.note = note
      );
  }

  goBack(): void {
    this.location.back();
  }

}
