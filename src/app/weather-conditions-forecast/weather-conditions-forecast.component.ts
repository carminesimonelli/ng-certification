import {Component, Input, OnInit} from '@angular/core';
import {ICO_MAPPING, WeatherService} from '../shared/weather.service';
import {List, WeatherConditionsDetail, WeatherConditionsForecast} from '../shared/weather.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-weather-conditions-forecast',
  templateUrl: './weather-conditions-forecast.component.html',
  styleUrls: ['./weather-conditions-forecast.component.css']
})

export class WeatherConditionsForecastComponent implements OnInit {
  zipCode: string;
  weatherConditionsForecast: WeatherConditionsForecast;

  constructor(private route: ActivatedRoute, private weatherConditionsService: WeatherService) {
  }

  ngOnInit(): void {
    this.zipCode = this.route.snapshot.paramMap.get('zipCode');
    this.weatherConditionsService.getWeatherConditionsForecast(this.zipCode).subscribe((response: WeatherConditionsForecast) => {
      this.weatherConditionsForecast = response;
      this.weatherConditionsForecast.list.map(location => location.icon = ICO_MAPPING[location.weather[0].main]);
    });
  }

}
