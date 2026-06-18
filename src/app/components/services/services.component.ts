import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      icon: '📱',
      title: 'Smartphone Repair',
      description: 'Fast fixes for all major brands including Apple, Samsung, and more.',
      items: ['Screen replacement', 'Battery replacement', 'Charging port fix', 'Water damage'],
      price: '₹499'
    },
    {
      icon: '💻',
      title: 'Laptop Repair',
      description: 'Professional diagnosis and repair for all laptop makes and models.',
      items: ['Screen replacement', 'Keyboard repair', 'RAM / SSD upgrade', 'Motherboard repair'],
      price: '₹799'
    },
    {
      icon: '📺',
      title: 'TV & Display',
      description: 'Expert repair for LED, LCD, OLED and Smart TVs of all brands.',
      items: ['Screen panel fix', 'Power board repair', 'Remote issues', 'Software update'],
      price: '₹999'
    },
    {
      icon: '🖨️',
      title: 'Printers & Scanners',
      description: 'Servicing inkjet, laser, and multifunction devices.',
      items: ['Head cleaning', 'Paper jam fix', 'Driver install', 'Cartridge setup'],
      price: '₹399'
    },
    {
      icon: '🎮',
      title: 'Gaming Consoles',
      description: 'Repair and servicing for PlayStation, Xbox, Nintendo, and more.',
      items: ['Disc drive repair', 'Controller fix', 'HDMI port fix', 'Overheating fix'],
      price: '₹699'
    },
    {
      icon: '🔌',
      title: 'Home Electronics',
      description: 'General servicing for all other household electronic devices.',
      items: ['Air coolers & fans', 'Audio systems', 'Microwave ovens', 'Set-top boxes'],
      price: '₹299'
    }
  ];
}
