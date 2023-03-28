import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  public text = '';
  loading: boolean = false;
  loadingSubscription: Subscription = new Subscription;

  constructor(
    private loadingScreenService: LoaderService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.loadingSubscription = this.loadingScreenService.loading$.pipe()
      .subscribe((status: boolean) => {
        this.loading = status;
        this.changeDetectorRef.detectChanges();
      })


  }

}
