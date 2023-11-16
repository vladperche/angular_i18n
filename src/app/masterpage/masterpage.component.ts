import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';

import { UsuarioService } from '../shared/services/usuario.service';
import { SelectFlagComponent } from '../shared/components/select-flag/select-flag.component';

@Component({
  selector: 'app-masterpage',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterLink,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    SelectFlagComponent
  ],
  templateUrl: './masterpage.component.html',
  styleUrl: './masterpage.component.scss'
})
export class MasterpageComponent {
  constructor(
    private usuarioService : UsuarioService
  ) {}

  onClickMenu(){
    //
  }

  logout(){
    this.usuarioService.logout();
  }
}
