import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormComponent } from './pages/form/form.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { HttpClientModule , HttpClient} from '@angular/common/http';
import { EmployeedataService } from './employeedata.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    FormComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
