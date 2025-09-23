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
/**
 * Component responsible for displaying testimonials on the testimonials page.
 * 
 * This component retrieves testimonials from the {@link TestimonialsService}
 * and exposes specific testimonials for "Colleague1", "Colleague2", and "Colleague3".
 */
export class TestimonialsPageComponent {
  // #region ATTRIBUTES
  /**
   * Service providing access to the list of testimonials.
   */
  testimonialList = inject(TestimonialsService);

  /**
   * Testimonial object for "Colleague1", "Colleague2"and "Colleague3" resp., if found in the testimonial list.
   */
  colleague1 = this.testimonialList.testimonial.find(testi => testi.name === "Colleague1");
  colleague2 = this.testimonialList.testimonial.find(testi => testi.name === "Colleague2");
  colleague3 = this.testimonialList.testimonial.find(testi => testi.name === "Colleague3");
  // #endregion
}
