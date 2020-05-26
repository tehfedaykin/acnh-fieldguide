import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  } from 'rxjs';
import { map } from 'rxjs/operators';
import * as camelcaseKeys from '../../node_modules/camelcase-keys';
import { Villager } from './acnh';
import { TransferStateService } from '@scullyio/ng-lib';
import { environment } from 'src/environments/environment';

const months = [
  {
    month: 'January',
    available: false
  },
  {
    month: 'February',
    available: false
  },
  {
    month: 'March',
    available: false
  },
  {
    month: 'April',
    available: false
  },
  {
    month: 'May',
    available: false
  },
  {
    month: 'June',
    available: false
  },
  {
    month: 'July',
    available: false
  },
  {
    month: 'August',
    available: false
  },
  {
    month: 'September',
    available: false
  },
  {
    month: 'October',
    available: false
  },
  {
    month: 'November',
    available: false
  },
  {
    month: 'December',
    available: false
  }
]

@Injectable({
  providedIn: 'root'
})
export class AcnhService {

  constructor(private http: HttpClient, private transferState: TransferStateService) { }

  getVillagers(): Observable<Villager[]> {
    const cached = this.transferState.useScullyTransferState(
      'villagers',
      this.http.get<Villager[]>(`${environment.apiUrl}/villagers`).pipe(
        map((res) => {
          return Object.values(res).map((villager) => {
            return {
              ...camelcaseKeys(villager),
              imageUrl: `${environment.apiUrl}/icons/villagers/${villager.id}`
            };
          })
        })
      )
    )
    return cached
  }

  getVillager(id: string): Observable<Villager> {
    return this.transferState.useScullyTransferState(
      'villager',
      this.http.get(`${environment.apiUrl}/villagers/${id}`).pipe(
        map((res: any) => {
          return {
            ...camelcaseKeys(res),
            imageUrl: `${environment.apiUrl}/images/villagers/${res.id}`
          };
        })
      )
    )
  }

  getFishies() {
    return this.transferState.useScullyTransferState(
      'fishies',
      this.http.get(`${environment.apiUrl}/fish`).pipe(
        map((res) => {
          return Object.values(res).map((fish) => {
            return {
              ...camelcaseKeys(fish),
              imageUrl: `${environment.apiUrl}/images/fish/${fish.id}`
            };
          })
        })
      ));
  }

  getFish(id: string) {
    return this.transferState.useScullyTransferState(
      'fish',
      this.http.get(`${environment.apiUrl}/fish/${id}`).pipe(
        map((res: any) => {
          return {
            ...camelcaseKeys(res),
            imageUrl: `${environment.apiUrl}/images/fish/${res.id}`,
            uiSchedule: {
              northern: this.buildSchedule(res.availability, 'northern'),
              southern: this.buildSchedule(res.availability, 'southern')
            }
          };
        })
      ));
  }

  getInsects() {
    return this.transferState.useScullyTransferState(
      'insects',
      this.http.get(`${environment.apiUrl}/bugs`).pipe(
        map((res) => {
          return Object.values(res).map((bug) => {
            return {
              ...camelcaseKeys(bug),
              imageUrl: `${environment.apiUrl}/icons/bugs/${bug.id}`,
            };
          })
        })
      ));
  }

  getInsect(id: string) {
    return this.transferState.useScullyTransferState(
      'insect',
      this.http.get(`${environment.apiUrl}/bugs/${id}`).pipe(
        map((res: any) => {
          return {
            ...camelcaseKeys(res),
            imageUrl: `${environment.apiUrl}/images/bugs/${res.id}`,
            uiSchedule: {
              northern: this.buildSchedule(res.availability, 'northern'),
              southern: this.buildSchedule(res.availability, 'southern')
            }
          };
        })
      ));
  }

  getFossils() {
    return this.transferState.useScullyTransferState(
      'fossils',
      this.http.get(`${environment.apiUrl}/fossils`).pipe(
        map((res) => {
          return Object.values(res).map((fossil) => {
            return {
              ...camelcaseKeys(fossil),
              imageUrl: `${environment.apiUrl}/images/fossils/${fossil['file-name']}`
            };
          })
        })
      ));
  }

  buildSchedule(availability, hemisphere) {
    const selectedHemKey = `month-${hemisphere}`;
    const [start, end] = availability[selectedHemKey].split('-').map((string) => parseInt(string, 10));

    const availabilityPattern = end < start ? (monthIndex) => {
      return monthIndex >= start || monthIndex <= end
    } : (monthIndex) => {
      return monthIndex >= start && monthIndex <= end
    }

    return months.map((month, idx) => {
      const monthIdx = idx + 1;
      return {
        ...month,
        available: availability.isAllYear ? true : availabilityPattern(monthIdx)
      }
    })
  }
}
