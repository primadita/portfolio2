import { Injectable } from '@angular/core';
import { Opinion } from '../shared/interfaces/opinion';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor() { }

  testimonial: Opinion[] = [
    {
      name: "Colleague1",
      testi: 'testimonials.testi1',
      linkedin: 'http://linkedin.com/'
    },
    {
      name: "Colleague2",
      testi: 'testimonials.testi2',
      linkedin: 'http://linkedin.com/'
    },
    {
      name: "Colleague3",
      testi: 'testimonials.testi3',
      linkedin: 'http://linkedin.com/'
    }
  ]
}
