import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ButtonComponent } from './components/button/button.component';
import { CardSimplePokemonComponent } from './components/card-simple-pokemon/card-simple-pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { CardDetailPokemonComponent } from './components/card-detail-pokemon/card-detail-pokemon.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PaginationComponent,
    ButtonComponent,
    CardSimplePokemonComponent,
    CardDetailPokemonComponent,
    CardComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
