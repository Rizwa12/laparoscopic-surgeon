import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  contact = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  submitForm(): void {

    if (!this.contact.name.trim()) {
      alert('Please enter your name');
      return;
    }

    if (!this.contact.email.trim()) {
      alert('Please enter your email');
      return;
    }

    if (!this.contact.message.trim()) {
      alert('Please enter your message');
      return;
    }

    alert('Thank you! Your message has been submitted.');

    this.contact = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }

}