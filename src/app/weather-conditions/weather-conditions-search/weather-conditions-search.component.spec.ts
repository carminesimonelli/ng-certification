import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherConditionsSearchComponent } from './weather-conditions-search.component';

describe('WeatherConditionsSearchComponent', () => {
  let component: WeatherConditionsSearchComponent;
  let fixture: ComponentFixture<WeatherConditionsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherConditionsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherConditionsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
