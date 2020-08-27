import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WeatherConditionsDetail} from '../../shared/weather.model';
import {LocalStorageService} from '../../shared/local-storage.service';
import {WeatherService} from '../../shared/weather.service';

@Component({
  selector: 'app-weather-conditions-detail',
  templateUrl: './weather-conditions-detail.component.html',
  styleUrls: ['./weather-conditions-detail.component.css']
})
export class WeatherConditionsDetailComponent implements OnInit {

  @Output() locationRemoved = new EventEmitter<WeatherConditionsDetail>();
  @Input() location: WeatherConditionsDetail;

  constructor(private weatherService: WeatherService, private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
  }

  removeLocation(){
    this.localStorageService.removeZipCodeFromLocalStorage(this.location.zipCode);
    this.locationRemoved.emit(this.location);
  }

}
