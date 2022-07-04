import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSimplePokemonComponent } from './card-simple-pokemon.component';
import { CardComponent } from '../card/card.component';

describe('CardComponent', () => {
  let component: CardSimplePokemonComponent;
  let component2: CardComponent;
  let fixture: ComponentFixture<CardSimplePokemonComponent>;
  let fixture2: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSimplePokemonComponent, CardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSimplePokemonComponent);
    fixture2 = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component2 = fixture2.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component2).toBeTruthy();
  });
});
