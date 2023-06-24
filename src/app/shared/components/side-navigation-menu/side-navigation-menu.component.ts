import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navigation-menu',
  templateUrl: './side-navigation-menu.component.html',
  styleUrls: ['./side-navigation-menu.component.css'],
})
export class SideNavigationMenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  imports: [CommonModule],
  exports: [SideNavigationMenuComponent],
  declarations: [SideNavigationMenuComponent],
})
export class SideNavigationMenuModule {}
