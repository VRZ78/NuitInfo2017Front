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
import { WeatherProvider } from '../providers/weather/weather';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthProvider } from '../providers/auth/auth';


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
    HttpClientModule,
    AngularFireModule.initializeApp({ 
    apiKey: "AIzaSyCqQyNMeRS4JkB4JdPxMseGY6ALcIVHmyg",
    authDomain: "whitewalkers-7da66.firebaseapp.com",
    databaseURL: "https://whitewalkers-7da66.firebaseio.com",
    projectId: "whitewalkers-7da66",
    storageBucket: "whitewalkers-7da66.appspot.com",
    messagingSenderId: "1078947334217" }), 
    AngularFireDatabaseModule,
    
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
      AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider,
    AngularFireAuth,
    AuthProvider
  ]
})
export class AppModule {}
