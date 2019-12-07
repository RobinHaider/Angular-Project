import { Ingredients } from './../shared/ingredients.model';
import { EventEmitter } from '@angular/core';


export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredients[]>();
    
    private ingredients: Ingredients[] = [
        new Ingredients('Apples', 5),
        new Ingredients('Tomatoes', 10)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredients(ing: Ingredients){
        this.ingredients.push(ing);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredientsArray(ingredients: Ingredients[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

}