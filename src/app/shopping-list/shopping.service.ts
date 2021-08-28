import { Ingredient } from "../shared/ingredient.model";

export class ShoppingService {

      ingredients : Ingredient[] = [

      new Ingredient('Single Biryani Plate',100),
      new Ingredient('Double Biryani Plate',200),
      new Ingredient('Burger',200)
    ];

    getIngredient() {

        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {

      this.ingredients.push(ingredient);

    }
}
