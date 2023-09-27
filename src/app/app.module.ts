import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { RecordComponent } from './record/record.component';
import { ReadablePipe } from './shared/pipes/readable.pipe';
import { DatePipe } from '@angular/common';
import { PaginationComponent } from './shared/component/pagination/pagination.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  exports: [
    MatDialogModule
  ],
})
export class MaterialModules {}
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    RecordComponent,
    ReadablePipe,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MaterialModules
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
