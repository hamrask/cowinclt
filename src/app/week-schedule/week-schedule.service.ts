import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeekScheduleService {

  constructor(private http: HttpClient) { }

  getWeekData(date) {
    const url = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=305&date='+date;
    return this.http.get(url);
  }
}
