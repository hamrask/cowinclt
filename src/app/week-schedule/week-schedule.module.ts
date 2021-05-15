import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { WeekScheduleRoutingModule } from './week-schedule-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WeekScheduleRoutingModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ]
})
export class WeekScheduleModule { }
