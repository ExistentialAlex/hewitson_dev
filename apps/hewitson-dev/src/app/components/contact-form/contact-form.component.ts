import { Component } from '@angular/core';

@Component({
  selector: 'hewitson-dev-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  // public formMessage: string;
  // public contactForm: FormGroup;
  // public nameError: boolean;
  // public emailError: boolean;
  // public subjectError: boolean;
  // public messageError: boolean;
  // constructor(
  //   private readonly fb: FormBuilder,
  //   private readonly firestore: AngularFirestore
  // ) {
  //   this.contactForm = this.fb.group({
  //     name: ['', [Validators.required]],
  //     email: ['', [Validators.email, Validators.required]],
  //     subject: ['', [Validators.required]],
  //     message: ['', [Validators.required]],
  //   });
  // }
  // get name() {
  //   return this.contactForm.get('name');
  // }
  // get email() {
  //   return this.contactForm.get('email');
  // }
  // get subject() {
  //   return this.contactForm.get('subject');
  // }
  // get message() {
  //   return this.contactForm.get('message');
  // }
  // public async submit(): Promise<string | void> {
  //   this.nameError = false;
  //   this.emailError = false;
  //   this.subjectError = false;
  //   this.messageError = false;
  //   if (!this.name.valid) {
  //     this.nameError = true;
  //     return;
  //   }
  //   if (!this.email.valid) {
  //     this.emailError = true;
  //     return;
  //   }
  //   if (!this.subject.valid) {
  //     this.subjectError = true;
  //     return;
  //   }
  //   if (!this.message.valid) {
  //     this.messageError = true;
  //     return;
  //   }
  //   try {
  //     await this.firestore.collection(hewContactRequests).add({
  //       name: this.name.value,
  //       email: this.email.value,
  //       subject: this.subject.value,
  //       message: this.message.value,
  //     });
  //     return (this.formMessage = 'Message sent');
  //   } catch (error) {
  //     const message = 'An error occured while sending the message';
  //     this.firestore.collection('hew_errors').add({
  //       error,
  //       message,
  //       time: Date.now(),
  //     });
  //     this.formMessage = message;
  //   }
  // }
}
