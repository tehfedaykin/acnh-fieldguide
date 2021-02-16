import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VillagersComponent } from './villagers/villagers.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VillagerComponent } from './villagers/villager/villager.component';
import { FishiesComponent } from './fishies/fishies.component';
import { FishComponent } from './fishies/fish/fish.component';
import { InsectsComponent } from './insects/insects.component';
import { FossilsComponent } from './fossils/fossils.component';
import { CommonModule } from '@angular/common';
import { InsectComponent } from './insects/insect/insect.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VillagersComponent,
    VillagerComponent,
    FishComponent,
    InsectsComponent,
    FossilsComponent,
    FishiesComponent,
    InsectComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
