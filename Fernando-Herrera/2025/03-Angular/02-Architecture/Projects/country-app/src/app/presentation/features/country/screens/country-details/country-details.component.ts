import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryInformationComponent } from '../../components/country-information/country-information.component';
import { CountryApiAdapter } from '../../../../../infraestructure/driven-adapters/adapters/country-api.adapter';
import { NotFoundComponent } from '../../../../shared/not-found/not-found.component';

@Component({
  selector: 'app-country-page',
  imports: [NotFoundComponent, CountryInformationComponent],
  templateUrl: './country-details.component.html',
})
export class CountryDetailsComponent {

  countryCode = inject(ActivatedRoute).snapshot.params['code'];
  countryapiadapter = inject(CountryApiAdapter);

  countryResource = rxResource({
    request: () => ({ code: this.countryCode }),
    loader: ({ request }) => {
      return this.countryapiadapter.searchCountryByAlphaCode(request.code);
    },
  });

}
