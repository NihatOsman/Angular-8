import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Another test Recipe',
      'this is simply a test',
      'https://static01.nyt.com/images/2017/09/27/dining/27KITCHENSAUSAGES1/27KITCHENSAUSAGES-articleLarge.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Fries', 20)
      ]
    ),

    new Recipe('A TEST Recipe',
      'this is simply a test',
      'https://static01.nyt.com/images/2017/09/27/dining/27KITCHENSAUSAGES1/27KITCHENSAUSAGES-articleLarge.jpg',
      [
        new Ingredient('Chicken', 2),
        new Ingredient('Fries', 10)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
