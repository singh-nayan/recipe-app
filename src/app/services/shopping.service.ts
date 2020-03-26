import { IngredientModel } from '../models/ingredient.model';

export class ShoppingService{
   private ingredients: Array<IngredientModel> = [
        new IngredientModel('Apple', 5),
        new IngredientModel('Orange', 6),
        new IngredientModel('Banana', 8),
        new IngredientModel('Grapes', 20),
      ]

      getIngredients(){
          return this.ingredients;
      }

      addIngredient(item:IngredientModel){
          this.ingredients.push(item);
      }

      addIngredients(items:IngredientModel[]){
          this.ingredients.push(...items)
      }
}