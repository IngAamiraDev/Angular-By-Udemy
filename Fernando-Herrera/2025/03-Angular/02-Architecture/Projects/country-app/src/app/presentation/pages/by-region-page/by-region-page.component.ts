import { Component } from '@angular/core';
import { CountryListComponent } from '../../pages/country-list/country-list.component';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryListComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {}
