import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [

      new Recipe('Biryani',
                 'In short, I literally ate, slept, and breathed biryani until I could proudly publish this most-beloved, highly requested recipe and do it justice. Phew. Let’s do this.',
                 'https://static.toiimg.com/thumb/82571270.cms?width=573&height=382'),
      new Recipe('Burger',
                 'We are sharing our best secrets, tips, and tricks for making the perfect restaurant-quality burger, from the juiciest patty you’ll sink your teeth into, to the best burger buns and burger sauces. Try these and you will be known for your burgers!',
                 'https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/veg-burger-recipe-1.jpg')
  ];

      getRecipes() {

         return this.recipes;
      }
}
