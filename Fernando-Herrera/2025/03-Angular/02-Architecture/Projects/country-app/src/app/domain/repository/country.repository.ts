/*
Los repositorios actúan como una capa intermedia entre la aplicación y la fuente de datos (API REST, base de datos, archivos, etc.).
Se encargan de recuperar y almacenar datos, sin importar de dónde provienen.
*/

import { Observable } from "rxjs";
import { Country } from "../models/country.interface";

export interface CountryRepository {
  searchByCapital(query: string): Observable<Country[]>;
  searchByCountry(query: string): Observable<Country[]>;
  searchCountryByAlphaCode(code: string): Observable<Country>;
}
