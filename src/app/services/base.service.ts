import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'node_modules/rxjs';

export abstract class BaseService {

  constructor() { }

  protected handleError(error: HttpErrorResponse) {
    var message = "";
    console.log(error.error[0]);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      message = error.error.message;
    } 
    else if(error.error.login_failure)
    {
      message = error.error.login_failure[0];
      console.error('An error occurred: ' + message);
    } 
    else if(error.error.Password)
    {
      message = error.error.Password[0];
      console.error('An error occurred: ' + message);
    } 

    else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      (message) ? 
      message :
      'Something bad happened; please try again later. ');
  };

}