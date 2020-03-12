import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { service, user } from '@seniorsistemas/senior-platform-data';
import { forkJoin, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(
    private readonly http: HttpClient
  ) { }

  /**
   * Retorna através do Token do usuário conectado qual o employeeId vinculado ao usuário
   */
  getPersonActiveEmployees() {
    // tslint:disable-next-line: deprecation
    return forkJoin(
      from(service.getRestUrl()),
      from(user.getAuthHeader()),
    ).pipe(mergeMap((values: any) => {
      const [restUrl, authHeader] = values;
      const headers = new HttpHeaders({
        Authorization: authHeader
      });
      return this.http.get<any>(`https://hcm-api.senior.com.br/frontend-api/employee/person-active-employees`, { headers });
    }));
  }

  /**
   * Retorna o NumEmp, TipCol e NumCad conforme o employeeId
   *
   * @param activeEmployeeId id do colaborador
   */
  getNumEmpTipColNumCad(activeEmployeeId: string) {
    // tslint:disable-next-line: deprecation
    return forkJoin(
      from(service.getRestUrl()),
      from(user.getAuthHeader()),
    ).pipe(mergeMap((values: any) => {
      const [restUrl, authHeader] = values;
      const headers = new HttpHeaders({
        Authorization: authHeader
      });
      // tslint:disable-next-line: max-line-length
      return this.http.get<any>(`https://hcm-api.senior.com.br/frontend-api/employee/work-contract-situation/${activeEmployeeId}`, { headers });
    }));
  }
}
