import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AcnhService } from 'src/app/acnh.service';
import { switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Villager } from 'src/app/acnh';

@Component({
  selector: 'ac-villager',
  templateUrl: './villager.component.html',
  styleUrls: ['./villager.component.less']
})
export class VillagerComponent implements OnInit {
  public villager$: Observable<Villager>;
  constructor(
    private route: ActivatedRoute, 
    private acnhService: AcnhService,
    private metaTagService: Meta,
    private titleTagService: Title
    ) { }

  ngOnInit(): void {
    this.villager$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.acnhService.getVillager(params.get('id'))
      }),
      tap((villager) => {
        this.titleTagService.setTitle(villager.name['name-USen']);
        this.metaTagService.updateTag({ name: 'keywords', content: `Animal Crossing New Horizons ${villager.name['name-USen']}` });
        this.metaTagService.updateTag({ name: 'title', content: `Animal Crossing New Horizons ${villager.name['name-USen']}` });
        this.metaTagService.updateTag({ name: 'description', content: `Information about Animal Crossing New Horizons villager ${villager.name['name-USen']}` });
        this.metaTagService.updateTag({ itemProp: 'image', content: villager.imageUri }, 'itemProp="image"');
      })
    )
  }

}
