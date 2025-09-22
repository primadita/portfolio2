import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NotesComponent } from './notes/notes.component';
import { TestimonialsService } from '../../services/testimonials.service';

@Component({
  selector: 'app-testimonials-page',
  imports: [CommonModule, TranslateModule, NotesComponent],
  templateUrl: './testimonials-page.component.html',
  styleUrl: './testimonials-page.component.scss'
})
export class TestimonialsPageComponent {
  testimonialList = inject(TestimonialsService);
  colleague1 = this.testimonialList.testimonial.find(testi => testi.name === "Colleague1");
  colleague2 = this.testimonialList.testimonial.find(testi => testi.name === "Colleague2");
  colleague3 = this.testimonialList.testimonial.find(testi => testi.name === "Colleague3");

}
