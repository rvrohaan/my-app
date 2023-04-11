import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomReactComponentComponent } from './components/custom-react-component/custom-react-component.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

import { CustomReactComponentWrapperComponent } from '../CustomReactComponentWrapper';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomReactComponentComponent,
    CustomReactComponentWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }