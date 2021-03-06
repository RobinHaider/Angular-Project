import { ForecaseService } from './../forecase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  forecasts = [];

  constructor(private forecastService: ForecaseService) {
    forecastService.getForecast()
      .subscribe((forecasts) => {
        this.forecasts = forecasts;
      });
   }

  ngOnInit() {
  }

}
