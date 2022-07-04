import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailPokemonComponent } from './card-detail-pokemon.component';
import { Pokemon } from '../../model/pokemon';
import { CardComponent } from '../card/card.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CardDetailPokemonComponent', () => {
  let component: CardDetailPokemonComponent;
  let component2: CardComponent;
  let fixture: ComponentFixture<CardDetailPokemonComponent>;
  let fixture2: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardDetailPokemonComponent, CardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailPokemonComponent);
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
