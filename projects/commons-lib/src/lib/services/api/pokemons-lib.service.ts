import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ResultsPokemon } from '../../models/Pokemons/ItemPokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private readonly API_SERVICE = 'https://pokeapi.co/api';
  private readonly API_VERSION = '/v2';
  private readonly PATH_POKEMONS = '/pokemon';
  constructor(private http: HttpClient) {}

  /**
   *
   * @param limit = Limitamos la cantidad de pokemons por cada petición
   */
  getPokemons(limit: number = 20): Observable<ResultsPokemon> {
    /**
     * Por fines practicamos haremos un console log para ver el response del API
     */
    return this.http
      .get<ResultsPokemon>(
        `${this.API_SERVICE}${this.API_VERSION}${this.PATH_POKEMONS}?limit=${limit}`
      )
      .pipe(
        map((itemPokemonModel: ResultsPokemon) => {
          console.log('getPokemons', itemPokemonModel);
          return itemPokemonModel;
        })
      );
  }

  getNextPokemons(urlPokemon: string): Observable<ResultsPokemon> {
    /**
     * Por fines practicamos haremos un console log para ver el response del API
     */
    return this.http.get<ResultsPokemon>(`${urlPokemon}`).pipe(
      map((itemPokemonModel: ResultsPokemon) => {
        console.log('getNextPokemons', itemPokemonModel);
        return itemPokemonModel;
      })
    );
  }
}
