import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AbilityService {
  private readonly API_SERVICE = 'https://pokeapi.co/api';
  private readonly API_VERSION = '/v2';
  private readonly PATH_ABILITY = '/ability';
  constructor(private http: HttpClient) {}

  getAbilities(limit: number = 20): Observable<any> {
    return this.http
      .get<any>(
        `${this.API_SERVICE}${this.API_VERSION}${this.PATH_ABILITY}?limit=${limit}&offset=20`
      )
      .pipe(
        map((itemPokemonModel: any) => {
          console.log('getAbilities', itemPokemonModel);
          return itemPokemonModel;
        })
      );
  }

  getAbilityByPokemon(pokemonId: number = 20): Observable<any> {
    return this.http
      .get<any>(
        `${this.API_SERVICE}${this.API_VERSION}${this.PATH_ABILITY}/${pokemonId}/`
      )
      .pipe(
        map((itemPokemonModel: any) => {
          console.log('getAbilityByPokemon', itemPokemonModel);
          return itemPokemonModel;
        })
      );
  }
}
