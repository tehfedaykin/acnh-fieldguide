import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AcnhService } from 'src/app/acnh.service';
import { switchMap, tap } from 'rxjs/operators';
import { Villager } from 'src/app/acnh';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'ac-villager',
  templateUrl: './villager.component.html',
  styleUrls: ['./villager.component.less']
})
export class VillagerComponent implements OnInit {
  public villager$;
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
      tap((villager: Villager) => {
        this.titleTagService.setTitle(villager.name['name-USen']);
        this.metaTagService.updateTag({ name: 'keywords', content: `Animal Crossing New Horizons ${villager.name['name-USen']}` },
          'name="keywords"');
        this.metaTagService.updateTag({ name: 'title', content: `Animal Crossing New Horizons ${villager.name['name-USen']}` },
          'name="title"');
        this.metaTagService.updateTag({ name: 'description', content: `${villager.name['name-USen']} is ${villager.personality}` },
          'name="description"');
        this.metaTagService.updateTag({ itemProp: 'image', content: villager.imageUrl }, 'itemProp="image"');
      })
    )
  }

}
