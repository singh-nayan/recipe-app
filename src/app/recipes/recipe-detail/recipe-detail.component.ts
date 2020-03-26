import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: RecipeModel
  constructor(private recipeSvc:RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList(){
    this.recipeSvc.addIngredientsToShoppingList(this.recipe.ingredients)
  }

}
