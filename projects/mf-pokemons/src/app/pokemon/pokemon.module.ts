import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import { CommonsLibModule } from 'projects/commons-lib/src/public-api';
import { PokemonRoutingModule } from './pokemon-routing.module';

@NgModule({
  declarations: [PokemonComponent],
  imports: [CommonModule, PokemonRoutingModule, CommonsLibModule],
})
export class PokemonModule {}
