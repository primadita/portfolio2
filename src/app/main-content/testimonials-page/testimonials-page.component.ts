import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NotesComponent } from './notes/notes.component';

@Component({
  selector: 'app-testimonials-page',
  imports: [CommonModule, TranslateModule, NotesComponent],
  templateUrl: './testimonials-page.component.html',
  styleUrl: './testimonials-page.component.scss'
})
export class TestimonialsPageComponent {

}
