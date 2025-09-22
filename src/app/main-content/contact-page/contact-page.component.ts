import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [TranslateModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  contactData = {
    name: "",
    email: "",
    message:""
  }
  privacyChecked = false;
  hideColumns  = false;
  hideFeedback = true;
  mailTest = true;
  post = {
    endPoint: 'https://www.dumpling-and-jazz.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers:{
        'Content-Type': 'text/plain', //üblich wäre application/json
        responseType: 'text',
      }
    }
  };
  http = inject(HttpClient);
  successMessage!: string[];
  errorMessage!: string[];
  // constructor(private router: Router){}

  onSubmit(ngForm: NgForm){
    this.successMessage = ["",""];
    this.errorMessage = ["",""];
    if(ngForm.form.valid && ngForm.submitted && !this.mailTest){
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          // this.router.navigate(['/feedback']);
          this.successMessage = ['feedback.positive_head','feedback.positive_text'];
          this.hideColumns = true;
          this.hideFeedback = false;
          ngForm.resetForm();
        },
        error:(error) => {
          this.errorMessage = ['feedback.negative_head','feedback.negative_text'];
        },
        complete: () => console.info('send post complete'),
      })
    } else if(ngForm.submitted && ngForm.form.valid && this.mailTest){
        this.successMessage = ['feedback.positive_head','feedback.positive_text'];
        this.hideColumns = true;
        this.hideFeedback = false;
        ngForm.resetForm();
    }
    
    sessionStorage.clear();
  }

  ngOnInit(): void {
    this.loadInputFromSessionStorage();
  }

  saveInput(){
    console.log('saved data', this.contactData, this.privacyChecked)
    sessionStorage.setItem('contactForm', JSON.stringify(this.contactData));
    sessionStorage.setItem('privacyPolicyChecked', JSON.stringify(this.privacyChecked));
  }

  loadInputFromSessionStorage(){
    const savedData = sessionStorage.getItem('contactForm');
    const savedPrivacy = sessionStorage.getItem('privacyPolicyChecked');
    if(savedData){
      this.contactData = JSON.parse(savedData);
    }
    if(savedPrivacy){
      this.privacyChecked = JSON.parse(savedPrivacy);
    }
  }
}
