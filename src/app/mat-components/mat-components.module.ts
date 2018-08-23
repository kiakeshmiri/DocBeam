import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatDividerModule, MatFormFieldModule, MatAutocompleteModule, MatInputModule, MatSlideToggleModule, 
  MatRadioModule, MatSelectModule, MatIconModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  declarations: []
})
export class MatComponentsModule { }
