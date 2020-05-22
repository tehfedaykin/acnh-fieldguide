import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AcnhService } from 'src/app/acnh.service';
import { switchMap, map,  multicast, refCount, withLatestFrom } from 'rxjs/operators';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Fish, Month, Insect } from 'src/app/acnh';

@Component({
  selector: 'ac-insect',
  templateUrl: './insect.component.html',
  styleUrls: ['./insect.component.less']
})
export class InsectComponent implements OnInit {
  public insect$: Observable<Insect>;
  public selectedHemi = new BehaviorSubject<'northern' | 'southern'>('northern');
  public displayedSchedule$: Observable<Month[]>;

  constructor(private route: ActivatedRoute, private acnhService: AcnhService) { }

  ngOnInit(): void {
    this.insect$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.acnhService.getInsect(params.get('id'));
      }),
      multicast(new ReplaySubject(1)),
      refCount()
    )

    this.displayedSchedule$ = this.selectedHemi.pipe(
      withLatestFrom(this.insect$),
      map(([selectedHemi, insect]) => {
        return insect.uiSchedule[selectedHemi];
      })
    )
  }

}
