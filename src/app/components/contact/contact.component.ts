import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  submitted = false;

  form = {
    name: '',
    phone: '',
    email: '',
    device: '',
    message: ''
  };

  contactInfo = [
    { icon: '📍', label: 'Address', value: '45, Anna Salai, Teynampet<br>Chennai - 600 018, Tamil Nadu' },
    { icon: '📞', label: 'Phone', value: '+91 98765 43210 &nbsp;|&nbsp; +91 44 2345 6789' },
    { icon: '✉️', label: 'Email', value: 'support@techfixpro.in' },
    { icon: '🕐', label: 'Working Hours', value: 'Mon – Sat: 9:00 AM – 8:00 PM<br>Sunday: 10:00 AM – 5:00 PM' }
  ];

  onSubmit() {
    this.submitted = true;
    this.form = { name: '', phone: '', email: '', device: '', message: '' };
    setTimeout(() => this.submitted = false, 5000);
  }
}
