import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { data } from './data';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { timeout } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private http: HttpClient,
    public toastr: ToastrService,
    private ngxService: NgxUiLoaderService
  ) {}
  title = 'demoAPI';

  details: data[] = [];

  showSuccess() {
    this.toastr.success('everything is broken', 'major error', {
      timeOut: 3000,
    });
  }

  showError() {
    this.toastr.error('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
  }
  showInfo() {
    this.toastr.info('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
  }
  showWarning() {
    this.toastr.warning('everything is broken', 'Major Error', {
      closeButton: true,
      timeOut: 10000,
    });
  }

  // public list = []

  ngOnInit() {
    this.http
      .get<data[]>(
        'https://random-data-api.com/api/cannabis/random_cannabis?size=3'
      )
      .subscribe((data) => {
        this.details = data;
        console.log(this.details);
      });

    this.ngxService.start();
    setTimeout(() => {
      this.ngxService.stop();
    }, 1000);
  }
}
