import { Component, computed, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Country } from '../../../../../domain/models/country.interface';

@Component({
  selector: 'country-information-page',
  imports: [DecimalPipe],
  templateUrl: './country-information.component.html',
})
export class CountryInformationComponent {
  country = input.required<Country>();

  currentYear = computed(() => {
    return new Date().getFullYear();
  });
}
