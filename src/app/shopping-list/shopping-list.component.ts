import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Shopping } from './shopping.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[] = [];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {

    this.ingredients = this.shoppingService.getIngredient();
  }

  onIngredientAdded(ingredient: Ingredient) {

    this.ingredients.push(ingredient);
  }

}
