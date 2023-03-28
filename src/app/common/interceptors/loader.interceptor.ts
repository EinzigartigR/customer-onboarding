import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../loader/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(private loaderService: LoaderService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {

        // Start the loader
        this.loaderService.start();

        return next.handle(request).pipe(
            // Stop the loader when the request completes
            finalize(() => {
                this.loaderService.stop();
            })
        );
    }
}