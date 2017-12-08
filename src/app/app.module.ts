import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {APIService} from "../shared/services/APIService.service";
import {HttpClientModule} from '@angular/common/http';
import {LoginPage} from "../pages/login/login";
import {InfosUtilesPage} from "../pages/infos-utiles/infos-utiles";
import {AlcoolemiePage} from "../pages/alcoolemie/alcoolemie";
import {SamPage} from "../pages/sam/sam";
import {HomePage} from "../pages/home/home";
import {TempsReelPage} from "../pages/temps-reel/temps-reel";
import { Geolocation } from '@ionic-native/geolocation';
import { WeatherProvider } from '../providers/weather/weather';


@NgModule({
  declarations: [
    MyApp,
    InfosUtilesPage,
    LoginPage,
    AlcoolemiePage,
    SamPage,
    TempsReelPage,
      HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SamPage,
    InfosUtilesPage,
    LoginPage,
    AlcoolemiePage,
    TempsReelPage,
      HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
      APIService,
      Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider
  ]
})
export class AppModule {}
