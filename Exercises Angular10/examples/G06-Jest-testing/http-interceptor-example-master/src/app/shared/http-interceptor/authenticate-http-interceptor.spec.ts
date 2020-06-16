import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticateHttpInterceptor } from './authenticate-http-interceptor';
import { Router } from '@angular/router';


describe('Authenticate http interceptor', () => {
    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule.withRoutes([])
            ],
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AuthenticateHttpInterceptor,
                    multi: true
                }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        router = TestBed.get(Router);
    });

    test('should authenticate on a 401 - unauthorized response',
        inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
            const navigateSpy = spyOn(router, 'navigate');

            http.get('/some-api-path').subscribe(
                (result) => result
            );
            httpMock.expectOne('/some-api-path').error(new ErrorEvent('Unauthorized'), { status: 401 });

            expect(navigateSpy).toHaveBeenCalledWith(['/login']);
    }));

    test('should propagate non authentication errors',
        inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
            const navigateSpy = spyOn(router, 'navigate');

            http.get('/some-api-path').subscribe(
                (result) => result
            );
            httpMock.expectOne('/some-api-path').error(new ErrorEvent('Internal Server Error'), { status: 500 });

            expect(navigateSpy).not.toHaveBeenCalledWith(['/login']);
    }));
});
