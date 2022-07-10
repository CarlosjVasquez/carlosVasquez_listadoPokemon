import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should can format size', () => {
    const spyFormatStyle = jest.spyOn(component, 'formatStyle');
    const resFormatStyle = component.formatStyle(100);
    expect(spyFormatStyle).toHaveBeenCalled();
    expect(resFormatStyle).toBe('100px');
  });

  it('should can calc border', () => {
    const spyGetBorderWidth = jest.spyOn(component, 'getBorderWidth');
    component.size = 90;
    component.getBorderWidth();
    expect(spyGetBorderWidth).toHaveBeenCalled();
    expect(component.borderWidth).toBe('30px');
  });
});
