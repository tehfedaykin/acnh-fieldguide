import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AcnhService } from 'src/app/acnh.service';
import { switchMap, map,  multicast, refCount, withLatestFrom, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Month, Insect } from 'src/app/acnh';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'ac-insect',
  templateUrl: './insect.component.html',
  styleUrls: ['./insect.component.less']
})
export class InsectComponent implements OnInit {
  public insect$: Observable<Insect>;
  public selectedHemi = new BehaviorSubject<'northern' | 'southern'>('northern');
  public displayedSchedule$: Observable<Month[]>;

  constructor(
    private route: ActivatedRoute,
    private acnhService: AcnhService,
    private metaTagService: Meta,
    private titleTagService: Title
  ) { }

  ngOnInit(): void {
    this.insect$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.acnhService.getInsect(params.get('id'));
      }),
      tap((insect: Insect) => {
        this.titleTagService.setTitle(insect.name['name-USen']);
        this.metaTagService.updateTag({name: 'keywords', content: `Animal Crossing New Horizons ${insect.name['name-USen']}`},
        'name="keywords"');
        this.metaTagService.updateTag({name: 'title', content: `Animal Crossing New Horizons ${insect.name['name-USen']}`},
        'name="title"');
        this.metaTagService.updateTag({name: 'description', content: `${insect.name['name-USen']} is ${insect.availability.rarity}`},
        'name="description"');
        this.metaTagService.updateTag({ itemProp: 'image', content: insect.imageUrl},
        'itemProp="image"');
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
