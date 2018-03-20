import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorTextPipe, FilterArrayPipe } from './common.pipes';

 @NgModule({
     imports: [
    		CommonModule
  		],
     declarations:   [ ErrorTextPipe, FilterArrayPipe ],
     exports:        [ ErrorTextPipe, FilterArrayPipe ],
 })

 export class PipesModule {

   static forRoot() {
      return {
          ngModule: PipesModule,
          providers: [],
      };
   }
 }