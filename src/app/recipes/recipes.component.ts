import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: RecipeModel

  constructor(private recipeSvc: RecipeService) { }

  ngOnInit() {
    this.recipeSvc.recipeSelected.subscribe((recipe: RecipeModel) => {
      this.selectedRecipe = recipe;
    })
  }



}
