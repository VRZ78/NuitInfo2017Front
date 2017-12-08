import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TempsReelPage } from '../temps-reel/temps-reel';
@Component({
  selector: 'alcoolemie',
  templateUrl: 'alcoolemie.html'
})
export class AlcoolemiePage {

    demiBiere: number = 0;
    bouteilleBiere: number = 0;
    pinteBiere: number = 0;
    verreVin: number = 0;
    shot: number = 0;
    mixte: number = 0;

    score: number = 0;

  constructor(public navCtrl: NavController) {

  }

  calculateScore = function () {
      this.score = (parseInt(this.demiBiere) * 5) + (parseInt(this.bouteilleBiere) * 7.5) + (parseInt(this.pinteBiere) * 10) + (parseInt(this.verreVin) * 5) + (parseInt(this.shot) * 10) + (parseInt(this.mixte) * 10);
  }
  goToMap(){
      this.navCtrl.push(TempsReelPage);
  }
  goToCarte(){
      this.navCtrl.push(TempsReelPage);
  }
}
