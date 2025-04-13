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
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';

interface Pet {
  id: number;
  name: string;
  species: string;
  breed: string;
  ownerName: string;
  ownerId: number;
}

@Component({
  selector: 'app-pets',
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
    MatTooltipModule,
    FormsModule
  ],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.scss'
})
export class PetsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'species', 'breed', 'owner', 'actions'];
  dataSource: Pet[] = [];
  filterValue: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Pet>;

  constructor() {}

  ngOnInit(): void {
    // Sample data - In a real app, this would come from a service
    this.dataSource = [
      { id: 1, name: 'Max', species: 'Dog', breed: 'Golden Retriever', ownerName: 'John Doe', ownerId: 1 },
      { id: 2, name: 'Bella', species: 'Cat', breed: 'Siamese', ownerName: 'Jane Smith', ownerId: 2 },
      { id: 3, name: 'Charlie', species: 'Dog', breed: 'Beagle', ownerName: 'Bob Johnson', ownerId: 3 },
      { id: 4, name: 'Luna', species: 'Cat', breed: 'Persian', ownerName: 'Sarah Williams', ownerId: 4 },
      { id: 5, name: 'Rocky', species: 'Dog', breed: 'German Shepherd', ownerName: 'Michael Brown', ownerId: 5 }
    ];
  }

  applyFilter(event: Event): void {
    this.filterValue = (event.target as HTMLInputElement).value;
    // Implement filtering logic here
  }

  addNewPet(): void {
    console.log('Add new pet clicked');
    // Implement add pet functionality
  }

  editPet(pet: Pet): void {
    console.log('Edit pet clicked', pet);
    // Implement edit pet functionality
  }

  deletePet(pet: Pet): void {
    console.log('Delete pet clicked', pet);
    // Implement delete pet functionality
  }

  viewPetDetails(pet: Pet): void {
    console.log('View pet details clicked', pet);
    // Implement view pet details functionality
  }
}
