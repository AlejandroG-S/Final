import { Component, Input, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login_sv/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() SiEs = false
  @Input() NoEs = false

  logins:Login[] = []

  usuario:string = ""
  contrasena:string = ""

  constructor(private loginServices:LoginService) { }

  ngOnInit(): void {
    this.logins = this.loginServices.logins
  }

  comprueba(usuario:string, contrasena:string){
    if(this.usuario!=usuario || this.contrasena!=contrasena ){
      return this.NoEs=true
    }
    return this.SiEs = true
  }
}
