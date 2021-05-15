import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekScheduleComponent } from './week-schedule.component';

const routes: Routes = [{
  path: '',
  component: WeekScheduleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeekScheduleRoutingModule { }
