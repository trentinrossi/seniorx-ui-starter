import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

import { BrowserModule } from '@angular/platform-browser';
import { MessageService } from 'primeng/components/common/messageservice';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  AnalyticsHeaderModule,
  BreadcrumbModule,
  ErrorPageModule,
  GoogleAnalyticsModule,
  RedirectPageModule
} from '@senior-gestao-pessoas/angular-components';
import { LoadingStateModule, LocaleModule } from '@seniorsistemas/angular-components';
import { RestUrl, TranslationsModule } from '@seniorsistemas/platform-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { default as fallback } from '../locale/pt-BR.json';
import { TranslateModule } from '@ngx-translate/core';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AnalyticsHeaderModule,
    LoadingStateModule,

    TranslateModule.forRoot(),
    TranslationsModule.forRoot([
      {
        domain: 'hcm',
        service: 'vacancymanagement',
        fallback
      },
      {
        domain: 'platform',
        service: 'filter_service',
        fallback
      }
    ]),

  ],
  providers: [MessageService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
