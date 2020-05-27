import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AcnhService } from 'src/app/acnh.service';
import { switchMap, map, multicast, refCount, withLatestFrom, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Fish, Month } from 'src/app/acnh';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'ac-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.less']
})
export class FishComponent implements OnInit {
  public fish$: Observable<Fish>;
  public selectedHemi = new BehaviorSubject<'northern' | 'southern'>('northern');
  public displayedSchedule$: Observable<Month[]>;

  constructor(
    private route: ActivatedRoute,
    private acnhService: AcnhService,
    private metaTagService: Meta,
    private titleTagService: Title
  ) { }

  ngOnInit(): void {
    this.fish$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.acnhService.getFish(params.get('id'));
      }),
      tap((fish: Fish) => {
        this.titleTagService.setTitle(fish.name['name-USen']);
        this.metaTagService.updateTag({ name: 'keywords', content: `Animal Crossing New Horizons ${fish.name['name-USen']}` },
          'name="keywords"');
        this.metaTagService.updateTag({ name: 'title', content: `Animal Crossing New Horizons ${fish.name['name-USen']}` },
          'name="title"');
        this.metaTagService.updateTag({ name: 'description', content: `${fish.name['name-USen']} can be found in the ${fish.availability.location}` },
          'name="description"');
        this.metaTagService.updateTag({ itemProp: 'image', content: fish.imageUrl }, 'itemProp="image"');
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
