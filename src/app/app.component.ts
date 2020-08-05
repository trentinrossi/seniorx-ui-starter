import { Component, OnInit } from '@angular/core';
import { AnalyticsHeaderService } from '@senior-gestao-pessoas/angular-components';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'seniorx-ui-starter';
  pageLoading: boolean;
  activeEmployees: any[];

  constructor(
    private readonly headerService: AnalyticsHeaderService
  ) {

  }

  ngOnInit(): void {
    // this.pageLoading = true;
    // this.headerService.personActiveEmployeesSubject
    //   .pipe(
    //     finalize(() => {
    //       this.pageLoading = false;
    //     })
    //   )
    //   .subscribe((employees: any) => {
    //     this.activeEmployees = employees;
    //   });
  }
}
