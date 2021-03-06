import {Pipe, PipeTransform} from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "count",
  pure: false
})

export class CountPipe implements PipeTransform {
  transform(input: Meal[], calorieCount) {
    var output: Meal[] = [];
    if(calorieCount === "highCal") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories > 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (calorieCount === "lowCal") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories <= 499) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }


}
