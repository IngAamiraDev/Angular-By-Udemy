import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { SearchInputComponent } from '../../../../../presentation/shared/components/search-input/search-input.component';
import { CountryApiAdapter } from '../../../../../infraestructure/driven-adapters/adapters/country-api.adapter';
import { CountryListComponent } from '../../components/country-list/country-list.component';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './search-by-country.component.html',
})
export class SearchByCountryComponent {

    countryapiadapter = inject(CountryApiAdapter)
    query = signal('');

    countryResource = rxResource({
      request: () => ({ query: this.query() }),
      loader: ({ request }) => {
        if (!request.query) return of([]);
        return this.countryapiadapter.searchByCountry(request.query);
      },
    });

}
