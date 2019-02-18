import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe';
import {Ingredient} from '../Shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe( 'Rice', 'steamed rice with green peas',
      'http://cdn2.foodviva.com/static-content/food-images/curry-recipes/veg-kolhapuri/veg-kolhapuri.jpg',
      [new Ingredient('Rice', 1), new Ingredient('Green Peas', 1)]),
    new Recipe( 'Falafel', 'Tasty Falafel',
      'http://cdn2.foodviva.com/static-content/food-images/curry-recipes/veg-kolhapuri/veg-kolhapuri.jpg',
      [new Ingredient('Chik Peas', 1), new Ingredient('Flower', 1)])
  ];

  getRecipes(){
    return this.recipes.slice();
  }

}
