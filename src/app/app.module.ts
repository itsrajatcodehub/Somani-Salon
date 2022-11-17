import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AfterAuthComponent } from './after-auth/after-auth.component';
import { AfterAuthModule } from './after-auth/after-auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AfterAuthModule,
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}


