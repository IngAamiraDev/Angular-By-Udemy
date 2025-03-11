import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Country } from "../models/country.interface";
import { CountryApiAdapter } from "../../infraestructure/driven-adapters/adapters/country-api.adapter";

@Injectable({
  providedIn: "root",
})
export class GetCountryByCapitalUseCase {

  private countryRepository = inject(CountryApiAdapter)

  execute(query: string): Observable<Country[]> {
    return this.countryRepository.searchByCapital(query);
  }

}
