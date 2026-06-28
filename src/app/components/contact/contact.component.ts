import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  submitted = false;

  contactInfo = [
    { icon: '📍', label: 'Address', value: 'Ambattur, Chennai<br>Tamil Nadu – 600053' },
    { icon: '📞', label: 'Phone', value: '<a href="tel:9487908765">94879 08765</a> (Veeramani)<br><a href="tel:7373888126">73738 88126</a>' },
    { icon: '🕐', label: 'Working Hours', value: 'Mon – Sat: 9:00 AM – 8:00 PM<br>Sunday: 10:00 AM – 5:00 PM' }
  ];

  faqs = [
    {
      q: 'Do you provide doorstep washing machine service in Chennai?',
      a: 'Yes! VM WashCare provides doorstep washing machine repair at your home across Chennai, including Ambattur, Anna Nagar, Padi, Kolathur and nearby areas.'
    },
    {
      q: 'Which washing machine brands do you service?',
      a: 'We service all major brands — IFB, LG, Samsung, Bosch, Whirlpool, Videocon and more. Both front-load and top-load washing machines.'
    },
    {
      q: 'How much does washing machine repair cost in Chennai?',
      a: 'Repair cost depends on the issue and part. We offer free diagnosis and transparent pricing with no hidden charges. Call us for a quote.'
    },
    {
      q: 'How quickly can you come for washing machine repair?',
      a: 'We offer same-day visits in most cases. Call 94879 08765 and we will schedule a technician at your earliest convenience.'
    }
  ];
}
