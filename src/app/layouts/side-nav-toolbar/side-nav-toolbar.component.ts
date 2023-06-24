import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { SideNavigationMenuModule } from '../../shared/components';

@Component({
  selector: 'app-side-nav-toolbar',
  templateUrl: './side-nav-toolbar.component.html',
  styleUrls: ['./side-nav-toolbar.component.css'],
})
export class SideNavToolbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  imports: [SideNavigationMenuModule, CommonModule],
  exports: [SideNavToolbarComponent],
  declarations: [SideNavToolbarComponent],
})
export class SideNavInnerToolbarModule {}
