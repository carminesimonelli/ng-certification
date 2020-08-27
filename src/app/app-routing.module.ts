import {WeatherConditionsComponent} from './weather-conditions/weather-conditions.component';
import {WeatherConditionsForecastComponent} from './weather-conditions-forecast/weather-conditions-forecast.component';

import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';


const appRoutes: Routes = [
  {path: '', component: WeatherConditionsComponent},
  {path: 'forecast/:zipCode', component: WeatherConditionsForecastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
