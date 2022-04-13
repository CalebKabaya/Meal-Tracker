import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaloriesComponent } from './calories/calories.component';
import { CreatPlanComponent } from './creat-plan/creat-plan.component';
import { MealComponent } from './meal/meal.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'meal', component: MealComponent},
  { path: 'create-plan', component: CreatPlanComponent},
  { path: 'calories', component: CaloriesComponent},
  { path:'**', component:NotFoundComponent},
  { path: '', redirectTo:"/goals", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
