import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	events: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	  this.events = [
  				{
  					"link"  : "https://publidata-prod.s3.amazonaws.com/production/images/images/000/021/371/cover_medium/fete-des-associations-de-lisses-2017.jpg?1499473869",
  					"album" : "./../../assets/imgs/hu1.jpg"
  				},
  				{
  					"link"  : "https://publidata-prod.s3.amazonaws.com/production/images/images/000/021/371/cover_medium/fete-des-associations-de-lisses-2017.jpg?1499473869",
  					"album" : "./../../assets/imgs/hu.jpg"
  				},
  				{
  					"link"  : "https://publidata-prod.s3.amazonaws.com/production/images/images/000/021/371/cover_medium/fete-des-associations-de-lisses-2017.jpg?1499473869",
  					"album" : "./../../assets/imgs/hu3.jpg"
  				},
  				{
  					"link"  : "https://publidata-prod.s3.amazonaws.com/production/images/images/000/021/371/cover_medium/fete-des-associations-de-lisses-2017.jpg?1499473869",
  					"album" : "./../../assets/imgs/hu1.jpg"
  				},
  				{
  					"link"  : "https://publidata-prod.s3.amazonaws.com/production/images/images/000/021/371/cover_medium/fete-des-associations-de-lisses-2017.jpg?1499473869",
  					"album" : "./../../assets/imgs/hu.jpg"
  				},
  				{
  					"link"  : "https://publidata-prod.s3.amazonaws.com/production/images/images/000/021/371/cover_medium/fete-des-associations-de-lisses-2017.jpg?1499473869",
  					"album" : "./../../assets/imgs/hu3.jpg"
  				},
  				{
  					"link"  : "https://publidata-prod.s3.amazonaws.com/production/images/images/000/021/371/cover_medium/fete-des-associations-de-lisses-2017.jpg?1499473869",
  					"album" : "./../../assets/imgs/hu2.jpg"
  				},
  				{
  					"link"  : "https://publidata-prod.s3.amazonaws.com/production/images/images/000/021/371/cover_medium/fete-des-associations-de-lisses-2017.jpg?1499473869",
  					"album" : "./../../assets/imgs/hu.jpg"
  				},
          {
            "link"  : "https://publidata-prod.s3.amazonaws.com/production/images/images/000/021/371/cover_medium/fete-des-associations-de-lisses-2017.jpg?1499473869",
            "album" : "./../../assets/imgs/hu.jpg"
          },
          {
            "link"  : "https://publidata-prod.s3.amazonaws.com/production/images/images/000/021/371/cover_medium/fete-des-associations-de-lisses-2017.jpg?1499473869",
            "album" : "./../../assets/imgs/hu.jpg"
          },
          {
            "link"  : "https://publidata-prod.s3.amazonaws.com/production/images/images/000/021/371/cover_medium/fete-des-associations-de-lisses-2017.jpg?1499473869",
            "album" : "./../../assets/imgs/hu.jpg"
          }
			  	];
  }
  goToEvent(link){
  	alert(link);
  	console.log(link);
  	this.navCtrl.push(TabsPage);
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
