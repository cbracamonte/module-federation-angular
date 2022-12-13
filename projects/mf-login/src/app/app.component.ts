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
  title = 'mf-login';

  constructor(private broadCastLibService: BroadCastLibService) {
    const broadCast: BroadCastModel = {
      data: {
        code: 100,
        data: null,
        message: 'registro mfe-login',
        status: 'success',
      },
      id: 1,
      mfe: 'mfe-login',
      mfe_id: 4201,
    };
    this.broadCastLibService.sendBroadCast(broadCast);
  }
}
