import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FoodListComponent, FoodAddComponent],
  imports: [
    CommonModule,
    FoodRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FoodListComponent, FoodAddComponent]
})
export class FoodModule { }
