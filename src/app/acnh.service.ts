import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';
import * as camelcaseKeys from '../../node_modules/camelcase-keys';
import { Villager } from './acnh';

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
    return this.http.get<Villager[]>('http://acnhapi.com/villagers').pipe(
      map((res) => {
        return Object.values(res).map((villager) => {
          return {
            ...camelcaseKeys(villager),
            imageUrl: `http://acnhapi.com/images/villagers/${villager.id}`
          };
        })
      })
    );
  }

  getVillager(id: string): Observable<Villager> {
    return this.http.get(`http://acnhapi.com/villagers/${id}`).pipe(
      map((res: any) => {
        return {
          ...camelcaseKeys(res),
          imageUrl: `http://acnhapi.com/images/villagers/${res.id}`
        };
      })
    );
  }

  getFishies() {
    return this.http.get('http://acnhapi.com/fish').pipe(
      map((res) => {
        return Object.values(res).map((fish) => {
          return {
            ...camelcaseKeys(fish),
            imageUrl: `http://acnhapi.com/images/fish/${fish.id}`
          };
        })
      })
    );
  }

  getFish(id: string) {
    return this.http.get(`http://acnhapi.com/fish/${id}`).pipe(
      map((res: any) => {
        return {
          ...camelcaseKeys(res),
          imageUrl: `http://acnhapi.com/images/fish/${res.id}`,
          uiSchedule: {
            northern: this.buildSchedule(res.availability, 'northern'),
            southern: this.buildSchedule(res.availability, 'southern')
          }
        };
      })
    );
  }

  getInsects() {
    return this.http.get('http://acnhapi.com/bugs').pipe(
      map((res) => {
        return Object.values(res).map((bug) => {
          return {
            ...camelcaseKeys(bug),
            imageUrl: `http://acnhapi.com/images/bugs/${bug.id}`,
          };
        })
      })
    );
  }

  getInsect(id: string) {
    return this.http.get(`http://acnhapi.com/bugs/${id}`).pipe(
      map((res: any) => {
        return {
          ...camelcaseKeys(res),
          imageUrl: `http://acnhapi.com/images/bugs/${res.id}`,
          uiSchedule: {
            northern: this.buildSchedule(res.availability, 'northern'),
            southern: this.buildSchedule(res.availability, 'southern')
          }
        };
      })
    );
  }

  getFossils() {
    return this.http.get('http://acnhapi.com/fossils').pipe(
      map((res) => {
        return Object.values(res).map((fossil) => {
          return {
            ...camelcaseKeys(fossil),
            imageUrl: `http://acnhapi.com/images/fossils/${fossil['file-name']}`
          };
        })
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
