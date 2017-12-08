import {Component, OnInit} from '@angular/core';
import {APIService} from "../../shared/services/APIService.service";
import {User} from "../../shared/models/User.model";
import {NavController, ToastController} from "ionic-angular";
import {HomePage} from "../home/home";
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit{

  user: User;
  registerUser: User;
  showIframe : boolean = false;

  constructor(private APISerive : APIService,private authService : AuthProvider, public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  ngOnInit(): void {
    this.user = new User({});
    this.registerUser = new User({});
  }

  login = function () {
    this.authService.login(this.user).then(() => {
      this.navCtrl.push(HomePage);
      }, (err) => {
       this.showIframe = true;
    })
  };

  register = function () {
    this.APISerive.register(this.registerUser).then(() => {
          this.showIframe = true;
    }, (err) =>{
       this.showIframe = true;
    })
  };

}
