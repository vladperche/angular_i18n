import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';

import { IUsuario } from '../shared/interfaces/usuario';

const ELEMENT_DATA : IUsuario[] = [
  { username: 'jose.silva', displayName: 'José Silva', email: 'jose.silva@email.com' },
  { username: 'maria.costa', displayName: 'Maria Costa', email: 'maria.costa@email.com' },
  { username: 'antonio.souza', displayName: 'Antônio Souza', email: 'antonio.souza@email.com' }
]

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  displayedColumns: string[] = [ 'username', 'displayName', 'email' ];
  dataSource = ELEMENT_DATA;
}
