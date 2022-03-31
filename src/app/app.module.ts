import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { GitHubComponent } from './github.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, NotFoundComponent, GitHubComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,ReactiveFormsModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
