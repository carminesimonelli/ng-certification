import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LocalStorageService} from '../../shared/local-storage.service';
import {ICO_MAPPING, WeatherService} from '../../shared/weather.service';
import {WeatherConditionsDetail} from '../../shared/weather.model';
import {EXISTING_ZIPCODE_MESSAGE, WRONG_ZIPCODE_MESSAGE} from '../../shared/constants';

@Component({
  selector: 'app-weather-conditions-search',
  templateUrl: './weather-conditions-search.component.html',
  styleUrls: ['./weather-conditions-search.component.css']
})
export class WeatherConditionsSearchComponent implements OnInit {

  @Output() locationAdded = new EventEmitter<WeatherConditionsDetail>();
  @ViewChild('f') locationForm: NgForm;
  showAlert: boolean;
  errorMessage: string;

  constructor(private localStorageService: LocalStorageService, private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  addLocation(){
    this.showAlert = false;
    const zipCode = this.locationForm.value.zipCode;
    this.locationForm.reset();
    this.weatherService.getWeatherConditionsDetail(zipCode).subscribe(weatherConditionsDetail => {
      weatherConditionsDetail.zipCode = zipCode;
      weatherConditionsDetail.icon = ICO_MAPPING[weatherConditionsDetail.weather[0].main];
      if (this.localStorageService.addZipCodeToLocalStorage(zipCode)){
        this.locationAdded.emit(weatherConditionsDetail);
      } else {
        this.showAlert = true;
        this.errorMessage = EXISTING_ZIPCODE_MESSAGE;
      }
    }, error => {
      this.showAlert = true;
      this.errorMessage = WRONG_ZIPCODE_MESSAGE;
    });
  }

  hideAlert(){
    this.showAlert = false;
  }
}



