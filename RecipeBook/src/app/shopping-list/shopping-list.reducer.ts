import { Ingredient } from '../shared/ingredient.model';

const initalState = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)]
};

export function shoppingListReducer(state = initalState, action) {}
