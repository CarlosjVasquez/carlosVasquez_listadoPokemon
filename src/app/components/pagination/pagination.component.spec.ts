import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { ButtonComponent } from '../button/button.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let component2: ButtonComponent;
  let fixture2: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationComponent, ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture2 = TestBed.createComponent(ButtonComponent);
    component2 = fixture2.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component2).toBeTruthy();
  });

  it('should emit click event', () => {
    spyOn(component.onNext, 'emit');
    spyOn(component.onBack, 'emit');
    component.next();
    expect(component.onNext.emit).toHaveBeenCalled();
    component.back();
    expect(component.onBack.emit).toHaveBeenCalled();
  });
});
