import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
// import {retry} from 'rxjs/operators';
/*import {Observable, of, throwError} from 'rxjs';
import {mergeMap, delay, retryWhen} from 'rxjs/operators';

export const maxRetries = 2;
export const delayMs = 2000;*/

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request);
    /*return next.handle(request)
    .pipe(retry(3));*/ // Retry failed request up to 3 times.
  }
  /*intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retryWhen((error) => 
        return error.pipe(
          mergeMap((error, index) => {
            if (index < maxRetries && error.status == 500) {
              return of(error).pipe(delay(delayMs));
            }

            throw error;
          })
        )
      )
    )
  }*/
}