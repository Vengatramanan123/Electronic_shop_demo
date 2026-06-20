import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  features = [
    { icon: '🏠', title: 'Home Service Available', desc: 'Doorstep washing machine service in Chennai.' },
    { icon: '📦', title: 'Genuine Spare Parts', desc: 'Original parts with manufacturer warranty.' },
    { icon: '⚡', title: 'Quick Service', desc: 'Same day service for common repairs.' },
    { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden charges, clear quote upfront.' }
  ];

  stats = [
    { num: '10+', label: 'Years Experience' },
    { num: '★ 4.5 / 5', label: 'Customer Ratings' },
    { num: 'Chennai', label: 'Location' },
    { num: '24 Hrs', label: 'Emergency Service' }
  ];
}
