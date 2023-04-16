import { Component, OnInit,  ViewEncapsulation } from '@angular/core';
import { FurnitureService } from '../Service/furniture.service';
import { furniture } from './furniture';


@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class BodyComponent implements OnInit {
  furnitures:furniture[]= [];
  open(){
    let div = document.createElement("div");
    div.className = "myDiv";
    document.querySelector(".containerone")?.appendChild(div);
  }
  constructor(private furnitureServices:FurnitureService) {
    this.furnitures = this.furnitureServices.getAll();
   }

  ngOnInit(): void {
  }

}
