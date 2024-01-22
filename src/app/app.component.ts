import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppSidebarComponent } from './layouts/sidebar/sidebar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list'; // Add the missing import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppSidebarComponent, MatMenuModule, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'check-material';
}
