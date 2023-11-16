import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import { IGroup } from '../shared/interfaces/group';

const ELEMENT_DATA : IGroup[] = [
  { name: 'Administrator' },
  { name: 'Support' },
  { name: 'Sales' },
  { name: 'Distribution' },
  { name: 'Controlling' }
]

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatTableModule
  ],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent {
  displayedColumns: string[] = [ 'name' ];
  dataSource = ELEMENT_DATA;
}
