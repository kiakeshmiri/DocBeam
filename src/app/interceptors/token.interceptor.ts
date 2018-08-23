import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from "@angular/common/http";
import { UserService } from "../services/user.service";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(userService: UserService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.indexOf('/login') < 0) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${localStorage.getItem('auth_token')}`
                }
            });
        }
        return next.handle(req);
    }
}