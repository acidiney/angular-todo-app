import { Component, OnInit } from '@angular/core';

import { IFormInput } from 'src/app/shared/interfaces/form-input.interface';
import { IOutputInputValue } from 'src/app/shared/input-with-icon/input-with-icon.component';

interface IAuth {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formStruture: IFormInput[] = [];
  private formData: IAuth;

  constructor() {
    this.formStruture = [
      {
        placeholder: 'Username',
        icon: 'icon-user',
        type: 'text',
        bind: 'username',
        direction: 'left',
        extraClass: 'border-bottom'
      },
      {
        placeholder: 'Password',
        icon: 'icon-lock',
        bind: 'password',
        type: 'password',
        direction: 'left'
      }
    ];

    this.formData = {
      username: '',
      password: ''
    };
  }

  ngOnInit(): void {
  }

  setText(inputData: IOutputInputValue): void {
    this.formData[inputData.bind] = inputData.currentValue;
  }

}
