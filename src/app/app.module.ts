import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FactureModule } from './facture/facture.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule, FactureModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
