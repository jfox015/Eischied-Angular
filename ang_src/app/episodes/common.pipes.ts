import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'errorText' })
export class ErrorTextPipe implements PipeTransform {
  transform(error: string, args: any[]) {
   if(typeof error !== "undefined") {
        // MonGO DB Duplicate Key error
        var regEx = /duplicate key error/;
        if (error.toString().match(regEx)) {
            return "Duplicate Key Error. Please enter a unique number.";
        } else {
          return error;
        }
    } else {
      return error;
    }
  }
}

@Pipe({ name: 'filter' })
export class FilterArrayPipe {
  transform(value, args) {
    if (!args[0]) {
      return value;
    } else if (value) {
      return value.filter(item => {
        for (let key in item) {
          if ((typeof item[key] === 'string' || item[key] instanceof String) && 
              (item[key].indexOf(args[0]) !== -1)) {
            return true;
          }
        }
      });
    }
  }
}