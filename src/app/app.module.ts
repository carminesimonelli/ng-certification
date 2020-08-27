import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherConditionsComponent } from './weather-conditions/weather-conditions.component';
import { WeatherConditionsDetailComponent } from './weather-conditions/weather-conditions-detail/weather-conditions-detail.component';
import { WeatherConditionsSearchComponent } from './weather-conditions/weather-conditions-search/weather-conditions-search.component';
import { WeatherConditionsForecastComponent } from './weather-conditions-forecast/weather-conditions-forecast.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {RouteReuseStrategy} from '@angular/router';
import {CustomRouteReuseStrategy} from './custom-route-reuse-strategy';

@NgModule({
  declarations: [
    AppComponent,
    WeatherConditionsComponent,
    WeatherConditionsDetailComponent,
    WeatherConditionsSearchComponent,
    WeatherConditionsForecastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: CustomRouteReuseStrategy,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
