import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { RecordComponent } from './record/record.component';
import { ReadablePipe } from './shared/readable.pipe';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    RecordComponent,
    ReadablePipe
  ],
  imports: [
    BrowserModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
