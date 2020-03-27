import { IngredientModel } from '../models/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingService{
    ingredientsChanged=new Subject<IngredientModel[]>();

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
          this.ingredientsChanged.next(this.ingredients.slice())
      }

      addIngredients(items:IngredientModel[]){
          this.ingredients.push(...items)
          this.ingredientsChanged.next(this.ingredients.slice())
      }
}