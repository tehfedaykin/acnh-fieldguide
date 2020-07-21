import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';
import * as camelcaseKeys from '../../node_modules/camelcase-keys';
import { Villager, Fish, Insect, Fossil } from './acnh';
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

  constructor(private http: HttpClient) { }

  getVillagers(): Observable<Villager[]> {
    return this.http.get<Villager[]>(`${environment.apiUrl}/villagers`).pipe(
      map((res) => {
        return res.map((villager) => {
          return {
            ...camelcaseKeys(villager)
          }
        })
      })
    );
  }

  getVillager(id: string): Observable<Villager> {
    return this.http.get(`${environment.apiUrl}/villagers/${id}`).pipe(
      map((res: any) => {
        return {
          ...camelcaseKeys(res)
        };
      })
    );
  }

  getFishies(): Observable<Fish[]> {
    return this.http.get(`${environment.apiUrl}/fish`).pipe(
      map((res: any) => {
        return res.map((fish) => {
          return {
            ...camelcaseKeys(fish)
          };
        })
      })
    );
  }

  getFish(id: string) {
    return this.http.get(`${environment.apiUrl}/fish/${id}`).pipe(
      map((res: any) => {
        return {
          ...camelcaseKeys(res),
          uiSchedule: {
            northern: this.buildSchedule(res.availability, 'northern'),
            southern: this.buildSchedule(res.availability, 'southern')
          }
        };
      })
    );
  }

  getInsects(): Observable<Insect[]> {
    return this.http.get(`${environment.apiUrl}/bugs`).pipe(
      map((res: any) => {
        return res.map((bug) => {
          return {
            ...camelcaseKeys(bug)
          };
        })
      })
    );
  }

  getInsect(id: string): Observable<Insect> {
    return this.http.get(`${environment.apiUrl}/bugs/${id}`).pipe(
      map((res: any) => {
        return {
          ...camelcaseKeys(res),
          uiSchedule: {
            northern: this.buildSchedule(res.availability, 'northern'),
            southern: this.buildSchedule(res.availability, 'southern')
          }
        };
      })
    );
  }

  getFossils(): Observable<Fossil[]> {
    return this.http.get(`${environment.apiUrl}/fossils`).pipe(
      map((res: any) => {
        return res.map((fossil) => {
          return {
            ...camelcaseKeys(fossil),
          };
        })
      })
    );
  }

  getFossil(id:string): Observable<Fossil> {
    return this.http.get(`${environment.apiUrl}/fossils/${id}`).pipe(
      map((res: any) => {
          return {
            ...camelcaseKeys(res),
          };
      })
    );
  }

   buildSchedule(availability, hemisphere) {
    const selectedHemKey = `month-${hemisphere}`;
    const [start, end] = availability[selectedHemKey].split('-').map((string) => parseInt(string, 10));

    const availabilityPattern = end < start ?  (monthIndex) => {
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
