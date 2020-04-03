import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// barrel import techniques
import { UserComponent, CompanyComponent, AddressComponent} from './components';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    UserComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
