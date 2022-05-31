import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { DiscreteBarChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-branch-card',
  templateUrl: './clients-card.component.html',
  styleUrls: ['./clients-card.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.home-card]': 'true'
  }
})
export class ClientsCardComponent implements OnInit {

  public clientsAmount: number;
  public chartParameters: DiscreteBarChartConfiguration;
  protected graphData: Array<Object>;


  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef
  ) {
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('clients'));
    this.ontimizeService.query(void 0, ['id'], 'client').subscribe(
      res => {
        if (res && res.data.length) {
          this.clientsAmount = res.data.length;
        }
      },
      err => console.log(err),
      () => this.cd.detectChanges()
    );
  }

  ngOnInit() {
  }

}
