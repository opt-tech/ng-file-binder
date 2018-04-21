import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';

import { FbModule } from '../../../../libs/fb/index';

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), FbModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
