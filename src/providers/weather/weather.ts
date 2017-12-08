import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

	apiKey = "Vx0iUAVM4xJxg3ONmZMkRyOChmsktw3i";

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  getLocation(lat, long) {
  	  return new Promise((resolve, reject) => {
       this.http.get("http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=" + this.apiKey + "&q=" + lat + "," + long).subscribe((data) => {
        resolve(data);
      }, (err) => {
        reject(err);
       })
     });
  
  };

  getWeather(locationKey) {

  }

}
