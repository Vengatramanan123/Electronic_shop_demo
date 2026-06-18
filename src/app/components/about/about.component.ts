import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  features = [
    { icon: '🔍', title: 'Free Diagnosis', desc: 'Bring your device in — we inspect it at no charge.' },
    { icon: '🛡️', title: '1-Year Warranty', desc: 'All repairs are backed by a full one-year warranty.' },
    { icon: '⚡', title: 'Same-Day Service', desc: 'Most common repairs are done within a few hours.' },
    { icon: '💳', title: 'Transparent Pricing', desc: 'You get a full quote before we start any work.' }
  ];

  stats = [
    { num: '15,000+', label: 'Devices Repaired' },
    { num: '14 Years', label: 'In Business' },
    { num: '4.9 / 5', label: 'Google Rating' },
    { num: '98%', label: 'Customer Satisfaction' }
  ];
}
