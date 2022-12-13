import { NgModule } from '@angular/core';
import { AbilityService } from './services/api/ability-lib.service';
import { PokemonsService } from './services/api/pokemons-lib.service';
import { AuthLibService } from './services/auth/auth-lib.service';
import { BroadCastLibService } from './services/broadcast/broadcast-lib.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [
    BroadCastLibService,
    AuthLibService,
    PokemonsService,
    AbilityService,
  ],
  exports: [],
})
export class CommonsLibModule {}
