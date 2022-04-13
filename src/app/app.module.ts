import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealComponent } from './meal/meal.component';
import { MealFormComponent } from './meal-form/meal-form.component';
import { FormsModule } from '@angular/forms';
import { CreatPlanComponent } from './creat-plan/creat-plan.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CaloriesComponent } from './calories/calories.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    MealFormComponent,
    CreatPlanComponent,
    NavbarComponent,
    CaloriesComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
