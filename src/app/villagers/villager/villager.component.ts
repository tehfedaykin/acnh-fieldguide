import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AcnhService } from 'src/app/acnh.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'ac-villager',
  templateUrl: './villager.component.html',
  styleUrls: ['./villager.component.less']
})
export class VillagerComponent implements OnInit {
  public villager$;
  constructor(private route: ActivatedRoute, private acnhService: AcnhService) { }

  ngOnInit(): void {
    this.villager$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.acnhService.getVillager(params.get('id'))
      })
    )
  }

}
