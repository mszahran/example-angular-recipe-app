import {RecipeModel} from "./recipe.model";
import {Injectable} from "@angular/core";
import {IngredientModel} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<RecipeModel[]>();

  // private recipes: RecipeModel[] = [
  //   new RecipeModel(
  //     'A Test Recipes 1',
  //     'This is simply a test description',
  //     'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2020_09/1543282/chicken-fingers-today-main-200227.jpg',
  //     [
  //       new IngredientModel('Meat', 1),
  //       new IngredientModel('French Fries', 20)
  //     ]
  //   ),
  //   new RecipeModel(
  //     'A Test Recipes 2',
  //     'This is simply a test description',
  //     'https://www.masakapahariini.com/wp-content/uploads/2018/10/burger-rendang-MAHI-6.jpg',
  //     [
  //       new IngredientModel('Buns', 2),
  //       new IngredientModel('Meat', 1)
  //     ]
  //   ),
  // ];
  private recipes: RecipeModel[] = [];

  constructor(private slService: ShoppingListService) {
  }

  setRecipes(recipes: RecipeModel[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: RecipeModel) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: RecipeModel) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
