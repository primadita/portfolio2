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

/**
 * Component responsible for the contact page and contact form handling.
 *
 * Provides functionality to:
 * - Capture contact data (name, email, message)
 * - Handle privacy policy agreement
 * - Send form data to a backend service
 * - Show feedback messages on success or error
 * - Save and restore form input via session storage
 */
export class ContactPageComponent {
  // #region ATTRIBUTES
  /**
   * Contact form data entered by the user.
   */
  contactData = {
    name: "",
    email: "",
    message:""
  }

  /**
   * Indicates whether the user has accepted the privacy policy.
   */
  privacyChecked = false;

  /**
   * Controls whether the form columns are hidden (after successful submission).
   */
  hideColumns  = false;

  /**
   * Controls whether the feedback message is hidden.
   * Initially `true`, shown after form submission.
   */
  hideFeedback = true;

  /**
   * Flag used to simulate email sending (testing mode).
   * If `true`, no request to the backend is made.
   */
  mailTest = true;

   /**
   * Configuration object for HTTP POST request.
   * Contains the endpoint, request body builder, and headers.
   */
  post = {
    endPoint: 'https://www.felicia-primadita-tretter.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers:{
        'Content-Type': 'text/plain', //üblich wäre application/json
        responseType: 'text',
      }
    }
  };
  /**
   * Angular HTTP client used for sending requests.
   */
  http = inject(HttpClient);

  /**
   * Success feedback message keys displayed after form submission.
   */
  successMessage!: string[];

  /**
   * Error feedback message keys displayed after form submission.
   */
  errorMessage!: string[];
  // #endregion

  // constructor(private router: Router){}

  // #region METHODS

  /**
   * Handles the submission of the contact form.
   *
   * Sends the form data to the backend (if not in mail test mode),
   * or simulates a success if `mailTest` is enabled.
   *
   * @param {NgForm} ngForm - The Angular form reference containing validation state and values.
   * @returns {void}
   */
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

  /**
   * Lifecycle hook called on component initialization.
   * Restores saved input data from session storage.
   */
  ngOnInit(): void {
    this.loadInputFromSessionStorage();
  }

  /**
   * Saves the current form input and privacy agreement
   * to the browser's session storage.
   *
   * @returns {void}
   */
  saveInput(){
    sessionStorage.setItem('contactForm', JSON.stringify(this.contactData));
    sessionStorage.setItem('privacyPolicyChecked', JSON.stringify(this.privacyChecked));
  }

  /**
   * Loads the form input and privacy agreement state
   * from the browser's session storage.
   *
   * @returns {void}
   */
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
  // #endregion
}
