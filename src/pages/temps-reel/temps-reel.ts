import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { Geolocation } from '@ionic-native/geolocation';


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
            console.log('Error sgetting location', error);
        });
    }
    
 

    initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { lat: 34.04924594193164, lng: -118.24104309082031 }
    });

    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
	}

  goHome(){
  	this.navCtrl.setRoot(LoginPage);
  }
}
