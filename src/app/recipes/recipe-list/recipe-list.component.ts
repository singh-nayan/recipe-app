import { Component, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<RecipeModel> = new Array<RecipeModel>();

  constructor(
    private recipeSvc: RecipeService,
  ) { }

  ngOnInit() {
    this.recipes = this.recipeSvc.getRecipes();
  }


}
