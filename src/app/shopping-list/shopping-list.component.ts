import { Component, OnInit, OnDestroy } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';
import { ShoppingService } from '../services/shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Array<IngredientModel> = new Array<IngredientModel>();
  ingredientSubs: Subscription;

  constructor(
    private shoppingSvc: ShoppingService
  ) { }

  ngOnInit() {
    this.ingredients = this.shoppingSvc.getIngredients();
    this.ingredientSubs = this.shoppingSvc.ingredientsChanged.subscribe((ingredients: IngredientModel[]) => {
      this.ingredients = ingredients;
    })
  }

  ngOnDestroy() {
    this.ingredientSubs.unsubscribe();
  }

}
