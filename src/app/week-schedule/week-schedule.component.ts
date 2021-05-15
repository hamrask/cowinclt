import { DatePipe } from '@angular/common';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { WeekScheduleService } from './week-schedule.service';

@Component({
  selector: 'app-week-schedule',
  templateUrl: './week-schedule.component.html',
  styleUrls: ['./week-schedule.component.scss']
})
export class WeekScheduleComponent implements OnInit {
details = [];
date
  constructor(private service: WeekScheduleService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getWeekData();
  }
  getWeekData() {
    const date = this.datePipe.transform(this.date, 'dd-MM-yyyy');
    this.service.getWeekData(date).subscribe(data => {
      this.details = (data as any).centers;
      this.details.forEach((x, i) => {
        this.details[i].show = x.sessions.filter(x => x.available_capacity > 0 ).length > 0;
        this.details[i].show = true;
      });
    });
  }
}
