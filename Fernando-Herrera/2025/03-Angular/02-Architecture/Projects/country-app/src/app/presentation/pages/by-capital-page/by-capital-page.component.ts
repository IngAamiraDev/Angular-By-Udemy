import { Component } from '@angular/core';
import { SearchInputComponent } from '../../pages/search-input/search-input.component';
import { CountryListComponent } from '../../pages/country-list/country-list.component';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  onSearch(value: string) {
    console.log({ value });
  }
}
