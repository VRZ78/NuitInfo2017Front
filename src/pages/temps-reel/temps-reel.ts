import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { WeatherProvider } from "../../providers/weather/weather";

import { Geolocation } from '@ionic-native/geolocation';


@Component({
    selector: 'temps-reel-page',
    templateUrl: 'temps-reel.html'
})
export class TempsReelPage {
    map: any;
    weatherText: string = "";
    temp: string = "";
    constructor(public navCtrl: NavController, private geolocation: Geolocation, private weatherProvider: WeatherProvider) {
        this.geolocation.getCurrentPosition().then((resp) => {
          
            this.initMap(resp.coords.latitude, resp.coords.longitude);

            this.weatherProvider.getLocation(resp.coords.latitude, resp.coords.longitude).then((data : any) => {
            	this.weatherProvider.getWeather(data.Key).then((data) => {
            		this.weatherText = data[0].WeatherText
            		this.temp = String(data[0].Temperature.Metric.Value)
            	}, (err) => {
            		console.log(err);
            	})
            }, (err) => {
            	console.log(err);
            })

        }).catch((error) => {
            console.log('Error sgetting location', error);
        });
    }
    
 

    initMap(lat, long) {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { lat: lat, lng: long }
    });

    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
	}

  goHome(){
  	this.navCtrl.setRoot(LoginPage);
  }
}
