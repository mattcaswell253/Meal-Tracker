import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="row">
  <select (change)="onChange($event.target.value)">
     <option value="highCal">High Calorie(500+)</option>
     <option value="lowCal">Low Calorie(under 500)</option>
   </select>
   <div id="tap-board">
   <div class="row">
     <div class="col-md-5">
       <h3>Name | Details</h3>
     </div>
     <div class="col-md-2">
       <h3>Calories:</h3>
     </div>
   </div>
   <hr>

<div class="row">
  <div *ngFor="let currentMeal of childMealList" class="row">
    <div class="col-md-5">
      <span >{{currentMeal.name}} | {{currentMeal.details}}</span>
    </div>
    <div class="col-md-2">
    <span>
      {{currentMeal.calories}}
      </span>
      <button  (click)="editButtonHasBeenClicked(currentMeal)" >Edit</button>
    </div>

  </div>
</div>
</div>
</div>
`
})

export class MealListComponent{
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);

  }
}
