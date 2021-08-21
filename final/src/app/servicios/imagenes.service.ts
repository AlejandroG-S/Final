import { Injectable } from '@angular/core';
import { Item } from '../item';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  public items:Item[]
  constructor() {  this.items = [
    {
      nombre: "Avengers",

      imagenes: [
        "https://depor.com/resizer/Div1MHEeSIpa_x6WwAnhxE7QR5c=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/RALZSE3SM5H7NCTSAKCQ7ZQ4AQ.jpg",
        "https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/69926.jpg",
        "https://mx.web.img2.acsta.net/r_1280_720/newsv7/19/04/27/00/24/55959960.jpg",
        "https://sm.ign.com/t/ign_latam/screenshot/default/capamer_xef6.1280.jpg",
        "https://img.fayerwayer.com/sites/9/2020/12/05/blackwidow02-cccdfa770fc47842c591f4c977e7adb2-1.jpg"
      ]
    },

    {
      nombre: "Liga DC",

      imagenes: [
        "https://as01.epimg.net/meristation/imagenes/2021/03/08/noticias/1615237585_450776_1615237623_portada_normal.jpg",
        "https://media.revistagq.com/photos/5f1e923e3c95260b5c5ad9dc/4:3/w_1124,h_843,c_limit/superman-traje-negro.jpg",
        "https://as.com/meristation/imagenes/2021/03/05/noticias/1614944737_511266_1614945183_noticia_normal.jpg",
        "https://elcomercio.pe/resizer/3U_wlshBmA4YU3klk6p4NbdzDAk=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LUJWZVI6RFBK3M2WQ5SKFIQJOI.jpg",
        "https://img.europapress.es/fotoweb/fotonoticia_20170604111203_1200.jpg",
        "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/c/cyborg-01.jpg"
      ]
    }
  ]}
}
