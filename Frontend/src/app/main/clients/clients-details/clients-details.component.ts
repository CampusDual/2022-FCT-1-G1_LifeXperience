import { Component, Injector, OnInit, ViewChild} from '@angular/core';
import { DialogService, OFormComponent, OntimizeService } from 'ontimize-web-ngx';
import { ModalService } from '../../ui-elements/ui-modal-window';

@Component({
  selector: 'app-clients-details',
  templateUrl: './clients-details.component.html',
  styleUrls: ['./clients-details.component.css']
})
export class ClientsDetailsComponent implements OnInit {
  @ViewChild('details', { static: false }) detailBox: OFormComponent;
    selectedItemId = -1;
    constructor(private modalService: ModalService,private injector: Injector,private dialogService: DialogService) { }

    ngOnInit() {
      
    }

    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }

    setSelectedItemId(id){
      this.selectedItemId = id
    }

    showConfirm(evt: any) {
      if (this.dialogService) {
        this.dialogService.confirm('¿Asignar caja de experiencias?', '¿Quieres asignar la caja seleccionada al cliente?');
        this.dialogService.dialogRef.afterClosed().subscribe( result => {
          if(result) {
            // Actions on confirmation
          } else {
            // Actions on cancellation
          }
        })
      }
    }




    protected service: OntimizeService;


    getMovements(){
      this.service = this.injector.get(OntimizeService);
      const conf = this.service.getDefaultServiceConfiguration('experienceboxes');
      this.service.configureService(conf);
  
      const columns = ['id','name','price','description','associate_image'];
      const filter = {
        'id': this.selectedItemId
      };
      this.service.query(filter, columns, 'clientExperienceBox').subscribe(resp => {
        if (resp.code === 0) {
          console.log("Peticion realizada")
          return resp.data
          // resp.data contains the data retrieved from the server
  
        } else {
          alert('Impossible to query data!');
          console.log("Shit")
          throw new Error
        }
      });
    }
}
