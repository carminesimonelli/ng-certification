import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WeatherConditionsDetail, WeatherConditionsForecast} from './weather.model';
import {forkJoin, Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

export const ICO_MAPPING = {
  Thunderstorm: 'rain',
  Drizzle: 'rain',
  Rain: 'rain',
  Snow: 'snow',
  Mist: 'clouds',
  Smoke: 'clouds',
  Haze: 'clouds',
  Dust: 'clouds',
  Fog: 'clouds',
  Sand: 'clouds',
  Ash: 'clouds',
  Squall: 'clouds',
  Tornado: 'clouds',
  Clouds: 'clouds',
  Clear: 'sun',
};

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherConditionsDetail(zipCode: string): Observable<WeatherConditionsDetail>{
    return this.http.get<WeatherConditionsDetail>(
      this.getWeatherConditionsDetailURL(zipCode)
    ).pipe(
      map(response => response, catchError( error => of(null)))
    );
  }

  getWeatherConditionsDetailList(zipCodes: Array<string>): Array<Observable<WeatherConditionsDetail>>{
    const obsList: Array<Observable<WeatherConditionsDetail>> = new Array<Observable<WeatherConditionsDetail>>();
    zipCodes.forEach(zipCode => {
      obsList.push(this.getWeatherConditionsDetail(zipCode));
    });
    return obsList;
  }

  getWeatherConditionsForecast(zipCode: string): Observable<WeatherConditionsForecast>{
    return this.http.get<WeatherConditionsForecast>(
      this.getWeatherConditionsForecastURL(zipCode)
    ).pipe(
      map((response) => {
        response.list = response.list.splice(0, 5);
        return response;
        }, catchError( error => of(null))
      )
    );
  }

  getWeatherConditionsDetailURL(zipCode: string){
    return environment.weatherDetailServiceAPIBaseUrl + '?zip=' + zipCode + '&units=imperial' + '&appId=' + environment.weatherServiceAPIKey;
  }

  getWeatherConditionsForecastURL(zipCode: string){
    return environment.weatherForecastServiceAPIBaseUrl + '?zip=' + zipCode + '&units=imperial' + '&appId=' + environment.weatherServiceAPIKey;
  }
}
