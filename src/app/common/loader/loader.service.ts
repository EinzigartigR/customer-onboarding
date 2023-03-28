import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoaderService {
    private loading = new Subject<boolean>();

    loading$ = this.loading.asObservable();

    start() {
        this.loading.next(true);
    }

    stop() {
        this.loading.next(false);
    }
}