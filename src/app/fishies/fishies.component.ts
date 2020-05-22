import { Component, OnInit } from '@angular/core';
import { AcnhService } from '../acnh.service';

@Component({
  selector: 'ac-fish',
  templateUrl: './fishies.component.html',
  styleUrls: ['./fishies.component.less']
})
export class FishiesComponent implements OnInit {
  public fishies$;

  constructor(private acnhService: AcnhService) { }

  ngOnInit(): void {
    this.fishies$ = this.acnhService.getFishies();
  }

}
