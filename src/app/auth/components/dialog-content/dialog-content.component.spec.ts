import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentComponent } from './dialog-content.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogContent } from '@angular/material/dialog';

describe('DialogContentComponent', () => {
  let component: DialogContentComponent;
  let fixture: ComponentFixture<DialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatDialogContent ],
      imports: [
        RouterTestingModule
      ],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
