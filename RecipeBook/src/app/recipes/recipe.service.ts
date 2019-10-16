import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe('Another test Recipe', 'this is simply a test',
      'https://static01.nyt.com/images/2017/09/27/dining/27KITCHENSAUSAGES1/27KITCHENSAUSAGES-articleLarge.jpg'),
    new Recipe('A TEST Recipe', 'this is simply a test',
      'https://static01.nyt.com/images/2017/09/27/dining/27KITCHENSAUSAGES1/27KITCHENSAUSAGES-articleLarge.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
