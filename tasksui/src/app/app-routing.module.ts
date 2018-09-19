import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunctionsComponent } from './functions/functions.component';
import { FunctionComponent } from './function/function.component';
import { LoginComponent } from './login/login.component';
import { ArrowsComponent } from './arrows/arrows.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { HomeworkComponent } from './homework/homework.component';
import { NotfoundComponent } from './notfound/notfound.component';

const mainRoutes: Routes = [
  { path: '', redirectTo: '/all-tasks', pathMatch: 'full' },
  { path: 'all-tasks', component: FunctionsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'detail/:id', component: FunctionComponent },
  { path: 'halfArrowRight', component: ArrowsComponent },
  { path: 'halfArrowLeft', component: ArrowsComponent },
  { path: 'arrowRight', component: ArrowsComponent },
  { path: 'arrowLeft', component: ArrowsComponent },
  { path: 'moreThanAverage', component: Lesson2Component },
  { path: 'arrayByRule', component: Lesson2Component },
  { path: 'makeMatrixArray', component: Lesson2Component },
  { path: 'drawChessboard', component: HomeworkComponent },
  { path: 'canWrap', component: HomeworkComponent },
  { path: 'sortTrigons', component: HomeworkComponent },
  { path: 'Palindrome', component: HomeworkComponent },
  { path: 'happyTicket', component: HomeworkComponent },
  { path: 'numericalSequence', component: HomeworkComponent },
  { path: 'fibonacci', component: HomeworkComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(mainRoutes)
  ],
  exports: [
    RouterModule,
  ]
})

export class AppRoutingModule {
  public mainRoutes = this.mainRoutes;
 }
