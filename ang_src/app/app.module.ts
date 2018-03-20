import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { MyDatePickerModule } from 'mydatepicker';

import { EpisodeComponent } from './episodes/episode.component';
import { EpisodeService } from './episodes/episode.service';
import { PipesModule } from './episodes/pipes.module';

@NgModule({
  imports: [
    BrowserModule,
    PipesModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    HttpModule,
    HttpClientModule, 
    HttpClientXsrfModule.withOptions({
        cookieName: 'XSRF-TOKEN',
        headerName: 'X-XSRF-TOKEN',
    }),
  ],
  declarations: [
    EpisodeComponent
  ],
  providers: [ EpisodeService ],
  exports: [ ReactiveFormsModule ],
  bootstrap: [ EpisodeComponent ]
})
export class AppModule { }