import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpService } from './Shared/http.service';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PeofileChildComponent } from './peofile-child/peofile-child.component';
import { CustomeDerectiveDirective } from './custome-derective.directive';
import { StructuralDirectivesDirective } from './structural-directives.directive';
import { AdditionPipe } from './pipes/addition.pipe';
import { Material } from './app-material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    PageNotFoundComponent,
    PeofileChildComponent,
    CustomeDerectiveDirective,
    StructuralDirectivesDirective,
    AdditionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    Material,
    BrowserAnimationsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
