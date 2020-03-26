import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Array<IngredientModel> = new Array<IngredientModel>();

  constructor(
    private shoppingSvc: ShoppingService
  ) { }

  ngOnInit() {
    this.ingredients=this.shoppingSvc.getIngredients();
  }

}
