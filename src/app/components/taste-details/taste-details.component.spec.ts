import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasteDetailsComponent } from './taste-details.component';

describe('TasteDetailsComponent', () => {
  let component: TasteDetailsComponent;
  let fixture: ComponentFixture<TasteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
