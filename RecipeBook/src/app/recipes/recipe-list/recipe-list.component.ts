import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Another test Recipe', 'this is simply a test',
      'https://static01.nyt.com/images/2017/09/27/dining/27KITCHENSAUSAGES1/27KITCHENSAUSAGES-articleLarge.jpg'),
    new Recipe('A TEST Recipe', 'this is simply a test',
      'https://static01.nyt.com/images/2017/09/27/dining/27KITCHENSAUSAGES1/27KITCHENSAUSAGES-articleLarge.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
