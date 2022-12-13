import { Component, OnInit } from '@angular/core';
import {
  ResultsPokemon,
  PokemonsService,
  BroadCastModel,
  BroadCastLibService,
} from 'projects/commons-lib/src/public-api';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  listPokemons: ResultsPokemon = null;

  constructor(
    private pokemonsService: PokemonsService,
    private broadCastLibService: BroadCastLibService
  ) {}

  ngOnInit(): void {
    this.getListPokemons();
  }

  getListPokemons(): void {
    this.pokemonsService.getPokemons().subscribe((results: ResultsPokemon) => {
      this.listPokemons = results;
      this.sendBroadCastChannel();
    });
  }

  nextPokemons(urlNext: string): void {
    this.pokemonsService
      .getNextPokemons(urlNext)
      .subscribe((results: ResultsPokemon) => {
        results.results.forEach((result) => {
          this.listPokemons.results.push(result);
          this.sendBroadCastChannel();
        });
      });
  }

  sendBroadCastChannel(): void {
    const broadCast: BroadCastModel = {
      data: {
        code: 404,
        data: {
          pokemons: this.listPokemons,
        },
        message: 'Lista de pokemones',
        status: 'success',
      },
      id: 2,
      mfe: 'mfe-pokemons',
      mfe_id: 4202,
    };
    this.broadCastLibService.sendBroadCast(broadCast);
  }
}
