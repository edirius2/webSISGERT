import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class LogInterceptorService implements HttpInterceptor {

  constructor(private accountService: AccountService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    var token = this.accountService.obtenerToken();
    req = req.clone({
      setHeaders: { Authorization: "bearer " + token}
    });

    return next.handle(req);
  }

  
}
