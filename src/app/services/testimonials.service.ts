import { Injectable } from '@angular/core';
import { Opinion } from '../shared/interfaces/opinion';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor() { }

  testimonial: Opinion[] = [
    {
      number: 1,
      name: "Nils A.-S.",
      testi: 'testimonials.testi1',
      position: "Frontend Developer",
      linkedin: 'https://www.linkedin.com/in/nils-alberding-schulz-abb4a0389/'
    },
    {
      number: 2,
      name: "Henry W.",
      testi: 'testimonials.testi2',
      position: "Frontend Developer",
      linkedin: 'https://www.linkedin.com/in/henry-wolf-261baa383/'
    },
    {
      number: 3,
      name: "Max Muster",
      testi: 'testimonials.testi3',
      position: "-",
      linkedin: 'http://linkedin.com/'
    }
  ]
}
