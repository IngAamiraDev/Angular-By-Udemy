import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { SearchInputComponent } from '../../../../../presentation/shared/components/search-input/search-input.component';
import { CountryApiAdapter } from '../../../../../infraestructure/driven-adapters/adapters/country-api.adapter';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './search-by-capital.component.html',
})
export class SearchByCapitalComponent {

  countryapiadapter = inject(CountryApiAdapter)
  query = signal('');

  //Versiones >= 19
  countryResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query) return of([]); //Regrsar un objeto vacío
      return this.countryapiadapter.searchByCapital(request.query);
    },
  });

  //Versiones <= 18
  /*
  countryResource = resource({
    request: () => ({ query: this.query() }),
    loader: async ({ request }) => {
      if (!request.query) return [];
      return await firstValueFrom(
        this.countryapiadapter.searchByCapital(request.query)
      );
    },
  });
  isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);
  onSearch(query: string) {
    if (this.isLoading()) return;
    this.isLoading.set(true);
    this.isError.set(null);
    this.countryapiadapter.searchByCapital(query).subscribe({
      next: (countries) => {
        this.isLoading.set(false);
        this.countries.set(countries);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.countries.set([]);
        this.isError.set(err);
      },
    });
  }*/

}
