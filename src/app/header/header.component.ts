import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<'recipe' | 'shopping-list'>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: 'recipe' | 'shopping-list') {
    this.featureSelected.emit(feature);
  }

}
