import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Meals } from '../meals';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit {
 newMeal = new Meals(0,"",0,"");
  @Output() addMeal = new EventEmitter<Meals>();

  submitMeal(){
    this.addMeal.emit(this.newMeal)
    this.newMeal = new Meals(0,"",0,"");

  }
  constructor() { }

  ngOnInit(): void {
  }

}
