import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-clients-card',
  templateUrl: './clients-card.component.html',
  styleUrls: ['./clients-card.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.home-card]': 'true'
  }
})
export class ClientsCardComponent implements OnInit {

  public clientAmount: number;
  // public vipClients: number;
  // public normalClients: number;
  // public otherClients: number;
  // public basicClients: number;

  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef,
  ) {
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('clients'));
    this.ontimizeService.query(undefined, ['CLIENTID', 'CLIENTTYPEID'], 'clients').subscribe(
      res => {
        if (res.data && res.data.length) {
          this.clientAmount = res.data.length;
        }else{
          this.clientAmount = undefined;
        }

        },
      err => console.log(err),
      () => this.cd.detectChanges()
    );
   }

  ngOnInit() {
  }

}
