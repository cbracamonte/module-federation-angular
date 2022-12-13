import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BroadCastModel } from '../../models/Broadcast/broadcast.model';

@Injectable({
  providedIn: 'root',
})
export class BroadCastLibService {
  private broadcast: BroadCastModel = {
    data: {
      code: 0,
      data: null,
      message: '',
      status: '',
    },
    id: 0,
    mfe: '',
    mfe_id: 0,
  };
  private broadcasts: BroadCastModel[] = [];
  private broadcast$ = new BehaviorSubject<BroadCastModel>({
    data: {
      code: 0,
      data: null,
      message: '',
      status: '',
    },
    id: 0,
    mfe: '',
    mfe_id: 0,
  });
  private broadcasts$ = new BehaviorSubject<BroadCastModel[]>([
    {
      data: {
        code: 0,
        data: null,
        message: '',
        status: '',
      },
      id: 0,
      mfe: '',
      mfe_id: 0,
    },
  ]);

  sendBroadCast(broadCastModel: BroadCastModel): void {
    this.broadcast = broadCastModel;
    localStorage.setItem('broadcast', JSON.stringify(this.broadcast));
  }

  getBroadCast(): Observable<BroadCastModel> {
    return this.broadcast$.asObservable();
  }

  sendBroadCasts(broadCastModel: BroadCastModel): void {
    this.broadcasts.push(broadCastModel);
    localStorage.setItem('broadcasts', JSON.stringify(this.broadcast));
  }

  getBroadCasts(): Observable<BroadCastModel[]> {
    return this.broadcasts$.asObservable();
  }
}
