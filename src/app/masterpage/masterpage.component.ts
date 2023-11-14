import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-masterpage',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './masterpage.component.html',
  styleUrl: './masterpage.component.scss'
})
export class MasterpageComponent {

}
