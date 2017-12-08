import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
@Component({
  selector: 'temps-reel-page',
  templateUrl: 'temps-reel.html'
})
export class TempsReelPage {

  constructor(public navCtrl: NavController) {

  }
  goHome(){
  	this.navCtrl.setRoot(LoginPage);
  }
}
