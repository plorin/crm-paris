import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LignePrestationComponent } from './ligne-prestation.component';

describe('LignePrestationComponent', () => {
  let component: LignePrestationComponent;
  let fixture: ComponentFixture<LignePrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LignePrestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LignePrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
