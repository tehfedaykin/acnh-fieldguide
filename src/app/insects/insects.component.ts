import { Component, OnInit } from '@angular/core';
import { AcnhService } from '../acnh.service';

@Component({
  selector: 'ac-insects',
  templateUrl: './insects.component.html',
  styleUrls: ['./insects.component.less']
})
export class InsectsComponent implements OnInit {
  public insects$;

  constructor(private acnhService: AcnhService) { }

  ngOnInit(): void {
    this.insects$ = this.acnhService.getInsects();
  }

}
