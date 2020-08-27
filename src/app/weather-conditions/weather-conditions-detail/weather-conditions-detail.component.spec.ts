import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherConditionsDetailComponent } from './weather-conditions-detail.component';

describe('WeatherConditionsDetailComponent', () => {
  let component: WeatherConditionsDetailComponent;
  let fixture: ComponentFixture<WeatherConditionsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherConditionsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherConditionsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
