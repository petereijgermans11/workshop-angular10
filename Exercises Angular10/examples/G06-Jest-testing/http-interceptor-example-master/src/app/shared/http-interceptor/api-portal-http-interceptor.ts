import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable()
export class SubscriptionKeyInterceptor implements HttpInterceptor {

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newHeaders = request.headers
            .set('Az-Subscription-Key', environment.subscriptionKey)
            .set('Az-Trace', String('true'));

        return next.handle(request.clone({ headers: newHeaders }));
    }
}
