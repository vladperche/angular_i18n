import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { DefaultLocales, ILocale } from '../../interfaces/locales';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-select-flag',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule, 
  ],
  templateUrl: './select-flag.component.html',
  styleUrl: './select-flag.component.scss'
})
export class SelectFlagComponent {
  flags : ILocale[] = DefaultLocales;
  selectedFlag: string;;

  /**
   *
   */
  constructor(
    private localeService : LocaleService
  ) {
    this.selectedFlag = localeService.getLocale();
  }

  FlagOnClick(){
    this.localeService.setLocale(this.selectedFlag);
    window.location.href = `/${this.selectedFlag}`;
  }
}
