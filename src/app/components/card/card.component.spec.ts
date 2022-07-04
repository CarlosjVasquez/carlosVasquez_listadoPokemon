import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  let imgElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    imgElement = fixture.debugElement.query(By.css('img'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should allow to change image url', () => {
    component.urlimg = 'https://localhost';
    fixture.detectChanges();
    expect(imgElement.nativeElement.getAttribute('src')).toBe(
      'https://localhost'
    );
  });
});
