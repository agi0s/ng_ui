import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FunctionsComponent } from './functions/functions.component';
import { FunctionComponent } from './function/function.component';
import { RatingComponent } from './rating/rating.component';

import { Meta } from '@angular/platform-browser';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

import { ArrowsComponent } from './arrows/arrows.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { HomeworkComponent } from './homework/homework.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TestsComponent} from './tests/tests.component'


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FunctionsComponent,
    FunctionComponent,
    RatingComponent,
    LoginComponent,
    FooterComponent,
    ArrowsComponent,
    Lesson2Component,
    HomeworkComponent,
    NotfoundComponent,
    TestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    FunctionsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private meta: Meta){
    this.meta.addTag({name: 'viewport', content: 'width=device-width, initial-scale=1.0'});
  }
}
