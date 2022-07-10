import { Component, Input } from '@angular/core';
import { Pokemon } from '../../model/pokemon';

@Component({
  selector: 'card-detail-pokemon',
  templateUrl: './card-detail-pokemon.component.html',
  styleUrls: ['./card-detail-pokemon.component.sass'],
})
export class CardDetailPokemonComponent {
  @Input() pokemon: Pokemon | null;

  constructor() {
    this.pokemon = null;
  }
}
