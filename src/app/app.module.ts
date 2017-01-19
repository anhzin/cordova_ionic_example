import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { HomePage} from '../pages/home/home';
import { LoginPage} from '../pages/login/login';
import { SignupPage} from '../pages/signup/signup';
import { ResetPasswordPage} from '../pages/reset-password/reset-password';
import { SearchListPage} from '../pages/search-list/search-list';
import { AuthData } from '../providers/auth-data';
const Services = [
  AuthData
];
@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    HomePage,
    SearchListPage,
    LoginPage,
    SignupPage,
    ResetPasswordPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    HomePage,
    SearchListPage,
    LoginPage,
    SignupPage,
    ResetPasswordPage

  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    
    Services
  ]
})
export class AppModule {}
