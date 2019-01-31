import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe( 'A test recipe', 'This is a test', 'http://cdn2.foodviva.com/static-content/food-images/curry-recipes/veg-kolhapuri/veg-kolhapuri.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
