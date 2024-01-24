import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../../recipe.model";
// import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: any = RecipeModel;
  @Input() index: number = 0 ;

  // constructor(private recipeService: RecipeService) {
  // }

  ngOnInit() {
  }

  // onSelected() {
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
