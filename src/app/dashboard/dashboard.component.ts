import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { filter } from 'rxjs/operators';
import { WelcomeWidgetComponent } from './welcome-widget/welcome-widget.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    NavigationComponent,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    WelcomeWidgetComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  statistics = {
    clients: 0,
    pets: 0,
    appointments: 0,
    treatments: 0
  };
  
  isChildRoute: boolean = false;

  constructor(private router: Router) { 
    // Subscribe to route changes to detect if we're on a child route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // If URL is longer than /dashboard, we're on a child route
      this.isChildRoute = event.url !== '/dashboard';
    });
  }

  ngOnInit(): void {
    // Initialize the isChildRoute property based on current URL
    this.isChildRoute = this.router.url !== '/dashboard';
    
    // Here you would typically fetch data from your services
    // For now, we'll use placeholder data
    this.statistics = {
      clients: 125,
      pets: 215,
      appointments: 42,
      treatments: 89
    };
  }
}
