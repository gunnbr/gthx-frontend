import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MenuModule, DataTableModule, SharedModule, PanelModule, ButtonModule } from 'primeng/primeng';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { FactoidListComponent } from './factoids/factoid-list.component';
import { StatsComponent } from './stats/stats.component';
import { AdminComponent } from './admin/admin.component';
import { CommandsComponent } from './commands/commands.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { AuthInterceptorService } from './authinterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FactoidListComponent,
    StatsComponent,
    AdminComponent,
    CommandsComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MenuModule,
    DataTableModule,
    SharedModule,
    PanelModule,
    ButtonModule
  ],
  providers: [AuthService, { 
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
