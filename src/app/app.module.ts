import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'


import { AppComponent } from './app.component';
import { NewTranferenceComponent } from './new-transference/new-transference.component';
import { StatementComponent } from './statement/statement.component';

registerLocaleData(localePt, 'pt')
@NgModule({
  declarations: [
    AppComponent,
    NewTranferenceComponent,
    StatementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'pt-BR'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
