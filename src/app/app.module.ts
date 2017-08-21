import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


import { FoodService } from './services/food.service';
import { PersonService } from './services/person.service';

import { AboutComponent } from './components/about/about.component';
import { PersonsComponent } from './components/persons/persons.component';
import { PersonComponent } from './components/person/person.component';
import { FoodItemsComponent } from './components/food-items/food-items.component';
import { FoodItemComponent } from './components/food-item/food-item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PartiesComponent } from './components/parties/parties.component';


const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'parties', component: PartiesComponent },
  { path: 'friends',      component: PersonsComponent },
  { path: 'friend/:id',      component: PersonComponent },
  { path: 'food-items', component: FoodItemsComponent },
  { path: 'food-item/:id', component: FoodItemComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    PersonsComponent,
    PersonComponent,
    FoodItemsComponent,
    FoodItemComponent,
    PageNotFoundComponent,
    PartiesComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,HttpModule
  ],
  providers: [FoodService,PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
