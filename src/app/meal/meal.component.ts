import { Component, OnInit } from '@angular/core';
import { Meals } from '../meals';
import { MealService } from '../meal-service/meal.service';
import { MealsList } from '../mealList';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css'],

})
export class MealComponent implements OnInit {

  meals: Meals[]
  MealsList: any;

  addNewMeal(newMeal: any) {
    let mealLength = this.meals.length;
    newMeal.id = mealLength + 1;
    // meals.completeDate = new Date(meal.completeDate)
    this.meals.push(newMeal)
  }

  // getCalories() {
  //   //     var arr = [1, 2, 3];
  //   // var max = Math.max(...arr);
  // }
    // arr: Meals[] = this.mealService.map(this.addNewMeal=> this.mealService.getMeals)
    // calories = Math.max(...this.arr)

    

  constructor(private mealService: MealService) {
    this.meals = mealService.getMeals();
  }

  ngOnInit(): void {

    console.log(this.meals);

  }

}
