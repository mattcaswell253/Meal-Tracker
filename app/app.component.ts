import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <div class="jumbotron">
  <h1>Meal Tracker!</h1>
  </div>
  <h2> Todays Meals: </h2>
  <meal-list [childMealList]="mealList" (clickSender)="editMeal($event)"></meal-list>
  <edit-meal [childSelectedMeal]="selectedMeal" (doneButtonClickedSender)="finishedEditing()"></edit-meal>
  <new-meal (newMealSender)="addMeal($event)"></new-meal>
  </div>
  `
})

export class AppComponent {
  selectedMeal = null;
  mealList: Meal[] = [
    new Meal('Pizza', 250, 'two slices'),
    new Meal('MeatLoaf', 200, 'one slice'),
    new Meal('Chicken', 150, 'breast')
  ];

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }

  addMeal(newMealFromChild: Meal) {
    this.mealList.push(newMealFromChild);
  }
}
