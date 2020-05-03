import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class AppHeaderComponent {
  @Input("showBackButton") showBackButton: boolean;

  constructor() {}

  ngOnInit() {}
}
