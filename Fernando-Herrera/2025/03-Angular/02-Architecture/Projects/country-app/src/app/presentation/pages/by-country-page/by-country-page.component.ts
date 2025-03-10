import { Component } from '@angular/core';
import { SearchInputComponent } from '../../pages/search-input/search-input.component';
import { CountryListComponent } from '../../pages/country-list/country-list.component';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {}
