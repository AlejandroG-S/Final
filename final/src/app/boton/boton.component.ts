import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  @Input() tamano:string = ""
  @Input() mensaje:string = "Boton"
  @Input() color:string = ""

  @Output() onClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  click(){
    this.onClick.emit()
  }

}
