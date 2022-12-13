import { Component } from '@angular/core';
import {
  BroadCastLibService,
  BroadCastModel,
} from 'projects/commons-lib/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mf-pokemons';
  constructor(private broadCastLibService: BroadCastLibService) {
    const broadCast: BroadCastModel = {
      data: {
        code: 100,
        data: null,
        message: 'registro mfe-pokemons',
        status: 'success',
      },
      id: 2,
      mfe: 'mfe-pokemons',
      mfe_id: 4202,
    };
    this.broadCastLibService.sendBroadCast(broadCast);
  }
}
