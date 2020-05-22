import { Component, OnInit } from '@angular/core';
import { AcnhService } from '../acnh.service';

@Component({
  selector: 'ac-villagers',
  templateUrl: './villagers.component.html',
  styleUrls: ['./villagers.component.less']
})
export class VillagersComponent implements OnInit {
  public villagers$;

  constructor(private acnhService: AcnhService) { }

  ngOnInit(): void {
    this.villagers$ = this.acnhService.getVillagers();
  }

}
