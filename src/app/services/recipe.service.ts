import { RecipeModel } from '../models/recipe.model';
import { Injectable } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';
import { ShoppingService } from './shopping.service';

@Injectable()
export class RecipeService {

    private recipes: Array<RecipeModel> = [
        new RecipeModel('Chicken', 'Murg musallam', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', [
            new IngredientModel('Apple', 5),
            new IngredientModel('Orange', 6),
        ]),
        new RecipeModel('Pasta', 'White Sauce pasta', 'http://res.publicdomainfiles.com/pdf_view/2/13494451211528.jpg', [
            new IngredientModel('Banana', 8),
            new IngredientModel('Grapes', 20),
        ]),
        new RecipeModel('Pork', 'Frank futter', 'https://storage.needpix.com/rsynced_images/recipe-2508859_1280.jpg', [
            new IngredientModel('Apple', 5),
            new IngredientModel('Grapes', 20),
        ]),
        new RecipeModel('Paneer', 'Paneer Tikka', 'https://cdn.pixabay.com/photo/2017/08/10/15/51/tomato-mozzarella-2624120_960_720.jpg', [
            new IngredientModel('Orange', 6),
            new IngredientModel('Banana', 8),
        ]),
        new RecipeModel('Fish', 'King fish', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg', [
            new IngredientModel('Apple', 5),
            new IngredientModel('Banana', 8),
        ])
    ]

    constructor(private shoppingSvc:ShoppingService){
    }

    getRecipes() {
        return this.recipes.slice();  // slice cancels reference passing
    }

    addIngredientsToShoppingList(items:IngredientModel[]){
        this.shoppingSvc.addIngredients(items);
    }

    getRecipe(index:number){
        return this.recipes[index];
    }

}