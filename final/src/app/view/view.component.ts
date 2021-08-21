import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() img_url:string[] = []

  url:string = ""
  i:number = 0

  constructor() { }

  ngOnInit(): void {
  }

  anterior(){
    if(this.i == 0){
      this.i = this.img_url.length
    }
    this.i++
    this.url = this.img_url[this.i-1]
  }

  siguiente(){
    if(this.i == this.img_url.length-1){
      this.i = -1
    }
    this.i++
    this.url = this.img_url[this.i+1]
  }

}
