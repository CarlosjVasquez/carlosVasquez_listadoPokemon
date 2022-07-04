import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  let searchElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    searchElement = fixture.debugElement.query(By.css('input'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return input value', () => {
    searchElement.nativeElement.value = 'pikachu';
    component.searchChange.subscribe((value: string) => {
      expect(value).toBe('pikachu');
      expect(value).not.toBe('pikachu1');
    });
  });

  it('should emit event', () => {
    spyOn(component.searchChange, 'emit');
    searchElement.nativeElement.value = 'pikachu';
    searchElement.nativeElement.dispatchEvent(new Event('input'));
    expect(component.searchChange.emit).toHaveBeenCalled();
  });
});
