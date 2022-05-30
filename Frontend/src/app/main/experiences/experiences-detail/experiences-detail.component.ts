import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences-detail',
  templateUrl: './experiences-detail.component.html',
  styleUrls: ['./experiences-detail.component.css']
})
export class ExperiencesDetailComponent implements OnInit {
  public longitude;
  public latitude;
  constructor() { }

  onFormDataLoaded(data: any) {
    if (data.latitude) {
      this.latitude = data.latitude;
    }
    if (data.longitude) {
      this.longitude = data.longitude;
    }
  }

  hasGPSPositition() {
    if (this.latitude && this.longitude) {
      return true;
    }
    return false;
  }

  getPositionGPS() {
    return this.latitude + ',' + this.longitude;
  }
  ngOnInit() {
  }

}
