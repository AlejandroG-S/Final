import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaItemsComponent } from './lista-items/lista-items.component';
import { BotonComponent } from './boton/boton.component';
import { ViewComponent } from './view/view.component';
import { ImagenesService } from './servicios/imagenes.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login_sv/login.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaItemsComponent,
    BotonComponent,
    ViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ImagenesService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
