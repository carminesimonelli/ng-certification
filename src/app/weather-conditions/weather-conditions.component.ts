import { Component, OnInit } from '@angular/core';
import {WeatherConditionsDetail} from '../shared/weather.model';
import {LocalStorageService} from '../shared/local-storage.service';
import {ICO_MAPPING, WeatherService} from '../shared/weather.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-weather-conditions',
  templateUrl: './weather-conditions.component.html',
  styleUrls: ['./weather-conditions.component.css']
})
export class WeatherConditionsComponent implements OnInit {

  locationsList: Array<WeatherConditionsDetail>;

  constructor(private localStorageService: LocalStorageService, private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    if (!this.locationsList){
      this.locationsList = [];
      const zipCodes = this.localStorageService.fetchZipCodesFromLocalStorage();
      if (zipCodes.length > 0){
        forkJoin(this.weatherService.getWeatherConditionsDetailList(zipCodes)).subscribe(locationList => {
          locationList.forEach((location, index) => {
            if (location){
              location.zipCode = zipCodes[index];
              location.icon = ICO_MAPPING[location.weather[0].main];
              this.locationsList.push(location);
            }
          });
        });
      }
    }
  }

  onLocationAdded(location: WeatherConditionsDetail){
    if (location){
      this.locationsList.push(location);
    }
  }

  onLocationRemoved(location: WeatherConditionsDetail){
    if (location){
      const toRemoveIndex = this.locationsList.findIndex( l => l.zipCode === location.zipCode);
      if (toRemoveIndex > -1) {
        this.locationsList.splice(toRemoveIndex, 1);
      }
    }
  }
}
