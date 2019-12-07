import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 
        'This is a recipe for test','https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?cs=srgb&dl=dishes-food-herb-1109197.jpg&fm=jpg',
        [
            new Ingredients('Meat', 1),
            new Ingredients('French Fries', 20)
        ]),
        new Recipe('Another Test Recipe', 
        'This is a another recipe for test',
        'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?cs=srgb&dl=dishes-food-herb-1109197.jpg&fm=jpg',
        [
            new Ingredients('Buns', 2),
            new Ingredients('Meat', 1)
        ])
      ];

      constructor(private shoppingListService: ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipeById(id: number){
        return this.recipes[id];
      }

      addIngredientsToShoppingService(ingredients: Ingredients[]){
        this.shoppingListService.addIngredientsArray(ingredients);
      }

      
}