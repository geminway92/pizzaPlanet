import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderScrollComponent } from './slider-scroll.component';

describe('SliderScrollComponent', () => {
  let component: SliderScrollComponent;
  let fixture: ComponentFixture<SliderScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
