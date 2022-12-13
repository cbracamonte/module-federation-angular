import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {
  AuthLibService,
  BroadCastLibService,
  BroadCastModel,
} from 'projects/commons-lib/src/public-api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    private authLibService: AuthLibService,
    private broadCastLibService: BroadCastLibService
  ) {
    this.buildFormLogin();
  }

  ngOnInit(): void {}

  buildFormLogin(): void {
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitForm(): void {
    this.authLibService.setSession(true);
    this.sendBroadCastChannel();
  }

  sendBroadCastChannel(): void {
    const broadCast: BroadCastModel = {
      data: {
        code: 404,
        data: {
          user: this.formLogin.getRawValue(),
        },
        message: 'Usuario auntenticado',
        status: 'success',
      },
      id: 1,
      mfe: 'mfe-login',
      mfe_id: 4201,
    };
    this.broadCastLibService.sendBroadCast(broadCast);
  }
}
