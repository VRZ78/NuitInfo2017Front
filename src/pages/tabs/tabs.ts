import { Component } from '@angular/core';

import {InfosUtilesPage} from "../infos-utiles/infos-utiles";
import {AlcoolemiePage} from "../alcoolemie/alcoolemie";
import {SamPage} from "../sam/sam";
import {TempsReelPage} from "../temps-reel/temps-reel";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  infosUtilesRoot = InfosUtilesPage;
  tempsReelRoot = TempsReelPage;
  samRoot = SamPage;
  alcoolemieRoot = AlcoolemiePage;

  constructor() {

  }
}
