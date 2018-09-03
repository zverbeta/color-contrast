import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBoxPreviewComponent } from './color-box-preview.component';

describe('ColorBoxPreviewComponent', () => {
  let component: ColorBoxPreviewComponent;
  let fixture: ComponentFixture<ColorBoxPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorBoxPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorBoxPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
