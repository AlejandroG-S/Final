import { Injectable } from '@angular/core';
import { Login } from '../login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public logins:Login[]
  constructor() {
    this.logins = [{
      usuario:"ale",
      contraseña:"a123"
    },
    {
      usuario:"adm",
      contraseña:"ad123"
    }
  
  ]
   }
}
