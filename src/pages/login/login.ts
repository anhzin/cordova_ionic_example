import {
  NavController,
  LoadingController,
  AlertController
} from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';
import { FakeData } from '../../providers/fake-data';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { ResetPasswordPage } from '../reset-password/reset-password';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;
  submitAttempt: boolean = false;
  loading: any;

  constructor(public nav: NavController, public authData: AuthData, public fakeData: FakeData, public formBuilder: FormBuilder,
    public alertCtrl: AlertController, public loadingCtrl: LoadingController) {

    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  /**
   * Receives an input field and sets the corresponding fieldChanged property to 'true' to help with the styles.
   */
  elementChanged(input) {
    let field = input.inputControl.name;
    this[field + "Changed"] = true;
  }

  /**
   * If the form is valid it will call the AuthData service to log the user in displaying a loading component while
   * the user waits.
   *
   * If the form is invalid it will just log the form value, feel free to handle that as you like.
   */
  loginUser() {

    this.submitAttempt = true;

    if (!this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password).then(authData => {
        console.log('loginUser loginUser');
        //  this.fakeData.generateDataForWorkShop();
        //this.fakeData.getWorkshopDetail(0);
        //this.nav.setRoot(HomePage);
      }, error => {
        this.loading.dismiss().then(() => {
          
          var errorCode: any;
          let errorMessage: any;
          
          errorCode = error.code;
          errorMessage = errorCode == "auth/user-not-found"?"User is not found!":error.message;
          let alert = this.alertCtrl.create({
            message: errorMessage.toString(),
            // message: "This account not exist!",
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });

      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
    }
  }

  goToSignup() {
    this.nav.push(SignupPage);
  }

  goToResetPassword() {
    this.nav.push(ResetPasswordPage);
  }

}