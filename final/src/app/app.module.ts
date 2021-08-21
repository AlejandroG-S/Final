import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaItemsComponent } from './lista-items/lista-items.component';
import { BotonComponent } from './boton/boton.component';
import { ViewComponent } from './view/view.component';
import { ImagenesService } from './servicios/imagenes.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaItemsComponent,
    BotonComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ImagenesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
