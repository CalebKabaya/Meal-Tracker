import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaloriesComponent } from './calories/calories.component';
import { CreatPlanComponent } from './creat-plan/creat-plan.component';
import { MealComponent } from './meal/meal.component';

const routes: Routes = [
  { path: 'meal', component: MealComponent},
  { path: 'create-plan', component: CreatPlanComponent},
  { path: 'calories', component: CaloriesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
