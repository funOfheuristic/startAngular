import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
