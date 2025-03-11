import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { CountryRepository } from "../../../domain/repository/country.repository";
import { Country } from "../../../domain/models/country.interface";
import { RESTCountry } from "../../../domain/models/rest-countries.interface";
import { CountryMapper } from "../mappers/country.mapper";

const API_URL = "https://restcountries.com/v3.1";

@Injectable({
  providedIn: "root",
})
export class CountryApiAdapter implements CountryRepository {
  constructor(private http: HttpClient) {}

  searchByCapital(query: string): Observable<Country[]> {
    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      catchError((error) => {
        console.error("Error fetching capital:", error);
        throw new Error(`No se pudo obtener países con la capital: ${query}`);
      })
    );
  }

  searchByCountry(query: string): Observable<Country[]> {
    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      catchError((error) => {
        console.error("Error fetching country:", error);
        throw new Error(`No se pudo obtener países con el nombre: ${query}`);
      })
    );
  }

  searchCountryByAlphaCode(code: string): Observable<Country> {
    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)[0]),
      catchError((error) => {
        console.error("Error fetching country by code:", error);
        throw new Error(`No se pudo obtener el país con código: ${code}`);
      })
    );
  }
}
