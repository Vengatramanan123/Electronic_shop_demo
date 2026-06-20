import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      icon: '🔧',
      title: 'Installation',
      description: 'Professional installation of washing machines.',
      items: ['Drilling & pipe fitting', 'Water inlet setup', 'Drainage connection', 'Testing & demo'],
      
    },
    {
      icon: '🛠️',
      title: 'General Service & Maintenance',
      description: 'Regular maintenance to keep your washing machine running smoothly.',
      items: ['Cleaning & descaling', 'Filter cleaning', 'Belt tension check'],
      
    },
    {
      icon: '🔌',
      title: 'PCB Repair',
      description: 'Electronic board repair for all washing machine brands.',
      items: ['Circuit diagnosis', 'Component replacement', 'Programming fix', 'Tested working'],
      
    },
    {
      icon: '⚙️',
      title: 'Motor Replacement',
      description: 'Motor issues diagnosed and fixed with genuine parts.',
      items: ['Motor winding repair', 'Bearing replacement', 'Motor oil change', 'Full replacement'],
      
    },
    {
      icon: '💧',
      title: 'Water Leakage Fixing',
      description: 'Identify and fix any water leakage problems.',
      items: ['Leak detection', 'Hose replacement', 'Drum seal fix', 'Inlet valve repair'],
      
    },
    {
      icon: '🌀',
      title: 'Spin & Dryer Issues',
      description: 'Fix spinning problems and dryer malfunctions.',
      items: ['Spin motor repair', 'Drum issue fix', 'Timer adjustment', 'Noise reduction'],
     
    },
    {
      icon: '🔒',
      title: 'Door Lock & Sensor Problems',
      description: 'Door lock and sensor repair for front load machines.',
      items: ['Lock mechanism fix', 'Sensor calibration', 'Safety check', 'Latch replacement'],
      
    },
    {
      icon: '🏠',
      title: 'Home Service',
      description: 'Doorstep service available in Ambattur.',
      items: ['At your home', 'Same day visit', 'No extra charge', 'Quick resolution'],
     
    },
    {
      icon: '📦',
      title: 'Genuine Spare Parts',
      description: 'Original spare parts with warranty.',
      items: ['Manufacturer warranty', 'Best prices', 'Quick delivery', 'Quality assured'],
      
    }
  ];
}
