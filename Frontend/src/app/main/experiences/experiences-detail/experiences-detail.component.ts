import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone,
} from "@angular/core";
import { MapsAPILoader, MouseEvent } from "@agm/core";

@Component({
  selector: "app-experiences-detail",
  templateUrl: "./experiences-detail.component.html",
  styleUrls: ["./experiences-detail.component.css"],
})
export class ExperiencesDetailComponent implements OnInit {
  public longitude;
  public latitude;
  address: string;
  private geoCoder;

  @ViewChild("search", { static: false })
  public searchElementRef!: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder();
      let autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement
      );
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //set latitude and longitude
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
        });
      });
    });
  }

  onFormDataLoaded(data: any) {
    if (data.latitude) {
      this.latitude = data.latitude;
    }
    if (data.longitude) {
      this.longitude = data.longitude;
    }
  }

  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode(
      { location: { lat: latitude, lng: longitude } },
      (results, status) => {
        console.log(results);
        console.log(status);
        if (status === "OK") {
          if (results[0]) {
            this.address = results[0].formatted_address;
          } else {
            window.alert("No results found");
          }
        } else {
          window.alert("Geocoder failed due to: " + status);
        }
      }
    );
  }

  onMapClicked(event: any) {
    console.table(event.coords);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }
}
