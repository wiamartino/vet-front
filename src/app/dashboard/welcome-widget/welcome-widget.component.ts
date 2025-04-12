import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome-widget',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './welcome-widget.component.html',
  styleUrl: './welcome-widget.component.scss'
})
export class WelcomeWidgetComponent implements OnInit {
  currentUser: string = 'Doctor';
  currentTime: string = '';
  greeting: string = '';
  upcomingAppointments: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.setGreeting();
    this.upcomingAppointments = 5; // Placeholder value
    
    // Update time every minute
    this.updateCurrentTime();
    setInterval(() => this.updateCurrentTime(), 60000);
  }

  private setGreeting(): void {
    const hour = new Date().getHours();
    
    if (hour < 12) {
      this.greeting = 'Good Morning';
    } else if (hour < 18) {
      this.greeting = 'Good Afternoon';
    } else {
      this.greeting = 'Good Evening';
    }
  }

  private updateCurrentTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  }
}
