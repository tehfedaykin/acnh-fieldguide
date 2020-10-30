import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Villager } from '../acnh';
import { AcnhService } from '../acnh.service';

@Component({
  selector: 'ac-villagers',
  templateUrl: './villagers.component.html',
  styleUrls: ['./villagers.component.less']
})
export class VillagersComponent implements OnInit {
  private _villagers: Villager[] = [];

  @ViewChild('villagerContainer', { read: ViewContainerRef}) villagerContainer: ViewContainerRef;
  @ViewChild('villagerTemplate', { read: TemplateRef }) villagerTemplate: TemplateRef<any>;

  constructor(private acnhService: AcnhService) { }

  get villagers(): Villager[] {
    return this._villagers;
  }
  set villagers(villagers: Villager[]) {
    this._villagers = villagers;
    this.buildVillagerUI(this._villagers);
  }

  ngOnInit(): void {
    this.acnhService.getVillagers().subscribe((villagers: Villager[]) => {
      this.villagers = villagers;
    });
  }

  buildVillagerUI(villagers) {
    this.villagerContainer.clear();
    for (let index = 0; index < villagers.length; index++) {
      const villagerData = villagers[index];
      this.villagerContainer.createEmbeddedView(this.villagerTemplate, {
        villager: villagerData
      })
      
    }
  }

  filter() {

  }

  compare(a, b) {

    const villagerA = a.name['name-EUes'].toUpperCase();
    const villagerB = b.name['name-EUes'].toUpperCase();
  
    let comparison = 0;
    if (villagerA > villagerB) {
      comparison = 1;
    } else if (villagerA < villagerB) {
      comparison = -1;
    }
    return comparison;
  }

  sortVillagers() {
    this.villagers = this.villagers.sort(this.compare);
  }

}
