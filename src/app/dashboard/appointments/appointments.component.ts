import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';

interface Appointment {
  id: number;
  date: Date;
  time: string;
  petId: number;
  petName: string;
  ownerName: string;
  reason: string;
  status: string;
  statusColor: string;
}

interface CalendarDay {
  date: Date;
  currentMonth: boolean;
  isToday: boolean;
  appointmentsCount: number;
  appointments: Appointment[];
}

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [
    CommonModule, 
    DatePipe,
    MatTableModule, 
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonToggleModule,
    FormsModule
  ],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss'
})
export class AppointmentsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'time', 'pet', 'owner', 'reason', 'status', 'actions'];
  dataSource: Appointment[] = [];
  filterValue: string = '';
  currentView: string = 'calendar'; // 'calendar' or 'list'
  currentDate: Date = new Date();
  
  weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  calendarDays: CalendarDay[][] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Appointment>;

  constructor() {}

  ngOnInit(): void {
    // Sample data for demonstration
    this.generateSampleData();
    this.generateCalendarDays();
  }

  applyFilter(event: Event): void {
    this.filterValue = (event.target as HTMLInputElement).value;
    // Implement filtering logic here
  }

  addNewAppointment(): void {
    console.log('Add new appointment clicked');
    // Implement add appointment functionality
  }

  editAppointment(appointment: Appointment): void {
    console.log('Edit appointment clicked', appointment);
    // Implement edit appointment functionality
  }

  cancelAppointment(appointment: Appointment): void {
    console.log('Cancel appointment clicked', appointment);
    // Implement cancel appointment functionality
  }

  viewAppointmentDetails(appointment: Appointment): void {
    console.log('View appointment details clicked', appointment);
    // Implement view appointment details functionality
  }

  navigateCalendar(direction: 'prev' | 'next'): void {
    const newDate = new Date(this.currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    this.currentDate = newDate;
    this.generateCalendarDays();
  }

  goToToday(): void {
    this.currentDate = new Date();
    this.generateCalendarDays();
  }

  // Generate calendar grid for the current month
  private generateCalendarDays(): void {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    this.calendarDays = [];
    let week: CalendarDay[] = [];
    
    // Add days from previous month to fill first week
    const prevMonth = new Date(year, month, 0);
    const prevMonthDays = prevMonth.getDate();
    
    for (let i = 0; i < firstDayOfWeek; i++) {
      const day = prevMonthDays - firstDayOfWeek + i + 1;
      const date = new Date(year, month - 1, day);
      week.push(this.createCalendarDay(date, false));
    }
    
    // Add days from current month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      week.push(this.createCalendarDay(date, true));
      
      if (week.length === 7) {
        this.calendarDays.push(week);
        week = [];
      }
    }
    
    // Add days from next month to complete the last week
    if (week.length > 0) {
      const daysToAdd = 7 - week.length;
      for (let day = 1; day <= daysToAdd; day++) {
        const date = new Date(year, month + 1, day);
        week.push(this.createCalendarDay(date, false));
      }
      this.calendarDays.push(week);
    }
  }

  // Create a calendar day with appointments
  private createCalendarDay(date: Date, currentMonth: boolean): CalendarDay {
    const today = new Date();
    const isToday = date.getDate() === today.getDate() && 
                    date.getMonth() === today.getMonth() && 
                    date.getFullYear() === today.getFullYear();
    
    // Find appointments for this date
    const appointments = this.dataSource.filter(appointment => 
      appointment.date.getDate() === date.getDate() &&
      appointment.date.getMonth() === date.getMonth() &&
      appointment.date.getFullYear() === date.getFullYear()
    );
    
    return {
      date,
      currentMonth,
      isToday,
      appointmentsCount: appointments.length,
      appointments
    };
  }

  // Generate sample appointments data
  private generateSampleData(): void {
    const statusColors = {
      'Scheduled': 'rgba(33, 150, 243, 0.8)', // Blue
      'In Progress': 'rgba(156, 39, 176, 0.8)', // Purple
      'Completed': 'rgba(76, 175, 80, 0.8)', // Green
      'Cancelled': 'rgba(244, 67, 54, 0.8)' // Red
    };

    const today = new Date();
    const appointments: Appointment[] = [];
    
    // Generate appointments for the current month
    for (let i = 1; i <= 20; i++) {
      const dayOffset = Math.floor(Math.random() * 30) - 10; // -10 to +20 days from today
      const date = new Date(today);
      date.setDate(date.getDate() + dayOffset);
      
      const hour = 8 + Math.floor(Math.random() * 9); // 8 AM to 5 PM
      const minute = Math.random() > 0.5 ? 0 : 30; // Either on the hour or half past
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      
      const statuses = ['Scheduled', 'In Progress', 'Completed', 'Cancelled'];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      const statusColor = statusColors[status as keyof typeof statusColors];
      
      const reasons = [
        'Annual Check-up', 'Vaccination', 'Dental Cleaning', 
        'Surgery', 'Injury Treatment', 'Follow-up Visit'
      ];
      
      const pets = [
        { name: 'Max', owner: 'John Doe' },
        { name: 'Bella', owner: 'Jane Smith' },
        { name: 'Charlie', owner: 'Bob Johnson' },
        { name: 'Luna', owner: 'Sarah Williams' },
        { name: 'Rocky', owner: 'Michael Brown' }
      ];
      
      const pet = pets[Math.floor(Math.random() * pets.length)];
      
      appointments.push({
        id: i,
        date: date,
        time: timeString,
        petId: i,
        petName: pet.name,
        ownerName: pet.owner,
        reason: reasons[Math.floor(Math.random() * reasons.length)],
        status: status,
        statusColor: statusColor
      });
    }
    
    this.dataSource = appointments;
  }
}
