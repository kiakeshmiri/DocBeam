import { Injectable } from "@angular/core";
import { HttpXhrBackend, HttpRequest, XhrFactory } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class AuthenticateXHRBackend extends HttpXhrBackend {
    constructor(xhrFactory: XhrFactory){
        super(xhrFactory);
    }

    createConnection(request: HttpRequest<any>){
        super.handle(request).pipe(
            catchError(
                (error: Response) => {
                    if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
                        
                        console.log('The authentication session expired or the user is not authorized. Force refresh of the current page.');
                        /* Great solution for bundling with Auth Guard! 
                        1. Auth Guard checks authorized user (e.g. by looking into LocalStorage). 
                        2. On 401/403 response you clean authorized user for the Guard (e.g. by removing coresponding parameters in LocalStorage). 
                        3. As at this early stage you can't access the Router for forwarding to the login page,
                        4. refreshing the same page will trigger the Guard checks, which will forward you to the login screen */
                        localStorage.removeItem('auth_token');              
                        window.location.href = window.location.href + '?' + new Date().getMilliseconds();             
                    }
                    return Observable.throw(error);
                }
            )
        );
    }
}