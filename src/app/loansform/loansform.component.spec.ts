import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansformComponent } from './loansform.component';

describe('LoansformComponent', () => {
  let component: LoansformComponent;
  let fixture: ComponentFixture<LoansformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoansformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoansformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
