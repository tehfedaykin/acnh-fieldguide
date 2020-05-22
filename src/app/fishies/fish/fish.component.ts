import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AcnhService } from 'src/app/acnh.service';
import { switchMap, map,  multicast, refCount, withLatestFrom } from 'rxjs/operators';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Fish, Month } from 'src/app/acnh';

@Component({
  selector: 'ac-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.less']
})
export class FishComponent implements OnInit {
  public fish$: Observable<Fish>;
  public selectedHemi = new BehaviorSubject<'northern' | 'southern'>('northern');
  public displayedSchedule$: Observable<Month[]>;

  constructor(private route: ActivatedRoute, private acnhService: AcnhService) { }

  ngOnInit(): void {
    this.fish$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.acnhService.getFish(params.get('id'));
      }),
      multicast(new ReplaySubject(1)),
      refCount()
    )

    this.displayedSchedule$ = this.selectedHemi.pipe(
      withLatestFrom(this.fish$),
      map(([selectedHemi, fish]) => {
        return fish.uiSchedule[selectedHemi];
      })
    )
  }
}
