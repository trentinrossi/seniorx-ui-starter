import { Component, OnInit } from '@angular/core';
import { AnalyticsHeaderService, ProjectService } from '@senior-gestao-pessoas/angular-components';
import { finalize } from 'rxjs/operators';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'seniorx-ui-starter';
  pageLoading: boolean;
  activeEmployees: any[];

  items: MenuItem[];
  home: MenuItem;

  constructor(
    private readonly router: Router,
    private readonly projectService: ProjectService,
    private readonly headerService: AnalyticsHeaderService
    // private readonly _previousRouteService: PreviousRouteService

  ) {
    // _previousRouteService.init();

    this.projectService.setProject({
      name: 'hcm.vacancymanagement.module_name',
      app: 'gestao-pessoas',
      domain: 'hcm',
      service: 'vacancymanagement'
    });

  }

  ngOnInit(): void {
    this.items = [
      { label: 'Gestão de pessoas', disabled: true },
      { label: 'Analytics', disabled: true },
      { label: 'Meu analytics', disabled: true },
      { label: 'SeniorX UI - Starter', disabled: true }
    ];
    this.home = { icon: 'pi pi-home', url: 'https://platform.senior.com.br/senior-x/' };

    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.pageLoading = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        window.scroll(0, 0);
        this.pageLoading = false;
      }
    });

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

  clearStorage() {
    localStorage.removeItem('vacancyListParams');
    localStorage.removeItem('settingStageListParams');
  }

}
