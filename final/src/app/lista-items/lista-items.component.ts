import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ImagenesService } from '../servicios/imagenes.service';

@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.css']
})
export class ListaItemsComponent implements OnInit {

  items:Item[] = []
  i:number = 0

  constructor(private imagenesService: ImagenesService) { }

  ngOnInit(): void {
    this.items = this.imagenesService.items
  }

  click(i:number){
    this.i = i
  }

}
