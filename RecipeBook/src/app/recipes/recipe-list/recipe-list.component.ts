import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A TEST Recipe', 'this is simply a test',
      'https://static01.nyt.com/images/2017/09/27/dining/27KITCHENSAUSAGES1/27KITCHENSAUSAGES-articleLarge.jpg'),
    new Recipe('A TEST Recipe', 'this is simply a test',
      'https://static01.nyt.com/images/2017/09/27/dining/27KITCHENSAUSAGES1/27KITCHENSAUSAGES-articleLarge.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
