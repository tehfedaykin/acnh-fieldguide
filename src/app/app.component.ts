import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'animal-crossing';

  constructor(private metaTagService: Meta) { }

  ngOnInit(): void {
    this.metaTagService.addTags([
      { name: 'robots', content: 'index, follow' },
      { name: 'keywords', content: `Animal Crossing New Horizons, ACNH Villagers, ACNH Fish, ACNH Bugs, ACNH Fossils` },
      { name: 'title', content: `Animal Crossing New Horizons Field Guide` },
      { name: 'description', content: `A field guide to find information about fossils, fish, bugs, and villagers!` },
      { itemProp: 'image', content: './assets/images/explore.jpg' }
    ]);
  }
}
