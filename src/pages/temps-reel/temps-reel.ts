import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
<<<<<<< HEAD
import { LoginPage } from '../login/login';
=======
import { Geolocation } from '@ionic-native/geolocation';


>>>>>>> f6ca7c0ada5dbcd50334441a2da02be9dd1a9bda
@Component({
    selector: 'temps-reel-page',
    templateUrl: 'temps-reel.html'
})
export class TempsReelPage {
    map: GoogleMap;
    constructor(public navCtrl: NavController, private geolocation: Geolocation) {
        this.geolocation.getCurrentPosition().then((resp) => {
          
            this.initMap();

        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    
 

    initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { lat: 34.04924594193164, lng: -118.24104309082031 }
    });

<<<<<<< HEAD
  }
  goHome(){
  	this.navCtrl.setRoot(LoginPage);
  }
=======
    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
}

>>>>>>> f6ca7c0ada5dbcd50334441a2da02be9dd1a9bda
}
