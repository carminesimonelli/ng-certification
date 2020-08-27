import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherConditionsForecastComponent } from './weather-conditions-forecast.component';

describe('WeatherConditionsForecastComponent', () => {
  let component: WeatherConditionsForecastComponent;
  let fixture: ComponentFixture<WeatherConditionsForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherConditionsForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherConditionsForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
