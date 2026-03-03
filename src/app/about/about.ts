import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],  // CommonModule включает DatePipe
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  currentDate = new Date();  // Добавьте это свойство
}