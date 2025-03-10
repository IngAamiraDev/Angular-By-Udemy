import { Routes } from '@angular/router';
import { CountryLayoutComponent } from './presentation/main/layout/CountryLayout.component';
import { HomePageComponent } from './presentation/pages/home-page/home-page.component';
import { ByCapitalPageComponent } from './presentation/pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './presentation/pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './presentation/pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './presentation/pages/country-page/country-page.component';

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
        component: ByCapitalPageComponent,
      },
      {
        path: 'by-country',
        component: ByCountryPageComponent,
      },
      {
        path: 'by-region',
        component: ByRegionPageComponent,
      },

      {
        path: 'by/:code',
        component: CountryPageComponent,
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
