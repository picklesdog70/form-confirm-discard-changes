import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { C1Component } from './c1component/c1.component';
import { C2Component } from './c2component/c2.component';
import { RouterModule, Routes } from '@angular/router';

import { FormChangedGuard } from './guard/form-changed.guard';

const appRoutes: Routes = [
  { path: 'page1', component: C1Component, canDeactivate: [FormChangedGuard] },
  { path: 'page2', component: C2Component }
];

@NgModule({
  imports:      [ 
    BrowserModule, FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes) ],
  providers: [
    FormChangedGuard
  ],
  declarations: [ AppComponent, C1Component, C2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
