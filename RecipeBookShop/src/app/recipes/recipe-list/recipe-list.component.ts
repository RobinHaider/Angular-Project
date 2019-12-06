import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a recipe for test','https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?cs=srgb&dl=dishes-food-herb-1109197.jpg&fm=jpg'),
    new Recipe('Another Test Recipe', 'This is a another recipe for test','https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?cs=srgb&dl=dishes-food-herb-1109197.jpg&fm=jpg')
  ];

  onRecipeSelected(selectedRecipe: Recipe){
    this.recipeWasSelected.emit(selectedRecipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
