import { Component, Inject, Injector, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'portal-web',
  styleUrls: ['./portal-web.component.scss'],
  templateUrl: './portal-web.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PortalWebComponent implements OnInit {
  ngOnInit(): void {
    console.log("Constructor del nonPortalUser");
  }
}
