import { Routes } from '@angular/router';
import { CountryLayoutComponent } from '../app/presentation/shared/layouts/country-layout/country-layout.component';
import { HomePageComponent } from './presentation/home/home-page/home-page.component';
import { SearchByCapitalComponent } from '../app/presentation/features/country/screens/search-by-capital/search-by-capital.component';
import { SearchByCountryComponent } from '../app/presentation/features/country/screens/search-by-country/search-by-country.component';
import { SearchByRegionComponent } from '../app/presentation/features/country/screens/search-by-region/search-by-region.component';
import { CountryDetailsComponent } from './presentation/features/country/screens/country-details/country-details.component';
export const routes: Routes = [

  {
    path: '',
    component: HomePageComponent,
  },

  {
    path: 'country',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: SearchByCapitalComponent,
      },
      {
        path: 'by-country',
        component: SearchByCountryComponent,
      },
      {
        path: 'by-region',
        component: SearchByRegionComponent,
      },

      {
        path: 'by/:code',
        component: CountryDetailsComponent,
      },

      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },

];
