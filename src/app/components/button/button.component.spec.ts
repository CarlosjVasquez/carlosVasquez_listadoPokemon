import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let buttonElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    buttonElement = fixture.debugElement.query(By.css('button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should allow to change button text', () => {
    component.text = 'test';
    fixture.detectChanges();
    expect(buttonElement.nativeElement.textContent.trim()).toBe('test');
  });
  it('should emit click event', () => {
    spyOn(component.onClick, 'emit');
    buttonElement.nativeElement.click();
    expect(component.onClick.emit).toHaveBeenCalled();
    component.handleClick();
    expect(component.onClick.emit).toHaveBeenCalled();
  });
});
