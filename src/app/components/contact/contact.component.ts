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
    { icon: '📍', label: 'Address', value: 'Ambattur, Chennai<br>Tamil Nadu' },
    { icon: '📞', label: 'Phone', value: 'Veeramani<br>94879 08765 &nbsp;<br> 73738 88126' },
    { icon: '🕐', label: 'Working Hours', value: 'Mon – Sat<br> 9:00 AM – 8:00 PM<br>Sunday<br> 10:00 AM – 5:00 PM' }
  ];

  onSubmit() {
    this.submitted = true;
    this.form = { name: '', phone: '', email: '', device: '', message: '' };
    setTimeout(() => this.submitted = false, 5000);
  }
}
