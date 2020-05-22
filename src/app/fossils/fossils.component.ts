import { Component, OnInit } from '@angular/core';
import { AcnhService } from '../acnh.service';

@Component({
  selector: 'ac-fossils',
  templateUrl: './fossils.component.html',
  styleUrls: ['./fossils.component.less']
})
export class FossilsComponent implements OnInit {
  public fossils$;

  constructor(private acnhService: AcnhService) { }

  ngOnInit(): void {
    this.fossils$ = this.acnhService.getFossils();
  }

}
