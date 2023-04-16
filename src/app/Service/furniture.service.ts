import { Injectable } from '@angular/core';
import { furnitures } from 'src/data';
import { furniture } from '../furniture/furniture';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  constructor() { }
  getAll():furniture[]{
    return furnitures;
  }
}
