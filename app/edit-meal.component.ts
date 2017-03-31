import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="childSelectedMeal">
    <div id="edit-meal-form">
      <h3>{{childSelectedMeal.name}} - {{childSelectedMeal.details}}</h3>
      <h3>Edit Meal</h3>
      <label>Edit Meal Information</label><br>
      <label>Name:</label>
      <input class="edit-input" [(ngModel)]="childSelectedMeal.name"><br>
      <label>Details:</label>
      <input class="edit-input" [(ngModel)]="childSelectedMeal.details"><br>
      <label>Calories:</label>
      <input class="edit-input" type="number" [(ngModel)]="childSelectedMeal.calories"><br>
      <button class="btn btn-success" (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(){
     this.doneButtonClickedSender.emit();
   }
 }
