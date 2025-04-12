import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ClientService } from '../../services/client.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface Client {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    CommonModule, 
    MatTableModule, 
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'address', 'actions'];
  dataSource: Client[] = [];
  filterValue: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Client>;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    // Normally you would fetch real clients from the service
    // For now, we'll use placeholder data
    this.dataSource = [
      { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '123-456-7890', address: '123 Main St' },
      { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', phone: '123-456-7891', address: '456 Oak Ave' },
      { id: 3, firstName: 'Bob', lastName: 'Johnson', email: 'bob.johnson@example.com', phone: '123-456-7892', address: '789 Pine Rd' },
      { id: 4, firstName: 'Sarah', lastName: 'Williams', email: 'sarah.w@example.com', phone: '123-456-7893', address: '321 Elm St' },
      { id: 5, firstName: 'Michael', lastName: 'Brown', email: 'michael.b@example.com', phone: '123-456-7894', address: '654 Maple Dr' }
    ];
  }

  applyFilter(event: Event): void {
    this.filterValue = (event.target as HTMLInputElement).value;
    // Implement filtering logic here
  }

  addNewClient(): void {
    console.log('Add new client clicked');
    // Implement add client functionality
  }

  editClient(client: Client): void {
    console.log('Edit client clicked', client);
    // Implement edit client functionality
  }

  deleteClient(client: Client): void {
    console.log('Delete client clicked', client);
    // Implement delete client functionality
  }

  viewClientDetails(client: Client): void {
    console.log('View client details clicked', client);
    // Implement view client details functionality
  }
}
