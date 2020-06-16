import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { SubscriptionKeyInterceptor } from './api-portal-http-interceptor';
import { environment } from '../../../environments/environment';

describe('subscription key http interceptor', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: SubscriptionKeyInterceptor,
                    multi: true
                }
            ]
        });
    });

    test('adds the azure api management subscription key and trace headers',
        inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
            http.get('/some-api-portal-path').subscribe();
            httpMock.expectOne((request) => {
                return request.headers.get('Az-Subscription-Key') === environment.subscriptionKey &&
                    request.headers.get('Az-Trace') === String('true');
            });
    })
    );
});
