import { Injectable } from '@angular/core';
import { Meals } from '../meals';
import { MealsList } from '../mealList';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  getMeals(){
    return MealsList
  }
  constructor() { }
}
