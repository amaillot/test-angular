import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatRippleModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatDialogRef
} from '@angular/material';

import { DialogExampleComponent } from './dialog-example.component';

describe('DialogExampleComponent', () => {
  let component: DialogExampleComponent;
  let fixture: ComponentFixture<DialogExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogExampleComponent ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatRippleModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule
      ],
      providers: [{
        provide: MatDialogRef,
        useValue: {
          close: (dialogResult: any) => {
          }
        }
      }, {
        provide: MAT_DIALOG_DATA,
        useValue: {} // Add any data you wish to test if it is passed/used correctly
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
