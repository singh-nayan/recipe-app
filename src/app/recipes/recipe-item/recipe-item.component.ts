import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeModel

  constructor(
    private recipeSvc:RecipeService
  ) { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeSvc.recipeSelected.emit(this.recipe)
  }

}
