import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthLibService {
  private status = false;

  constructor() {}

  public get isActive() {
    return this.status;
  }

  public setSession(state: boolean) {
    this.status = state;
  }
}
