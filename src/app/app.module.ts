import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SearchListPage } from '../pages/search-list/search-list';
import { WorkshopDetailPage } from '../pages/workshops/workshop-detail/workshop-detail';
import { BookingPage } from '../pages/booking/booking';
import { HistoryBookingPage } from '../pages/history-booking/history-booking';

import { AuthData } from '../providers/auth-data';
import { FakeData } from '../providers/fake-data';
import { Workshop } from '../providers/workshop';
import { BookingService } from '../providers/booking-service';

import { RoundPipe } from '../pipes/round-pipe';

const Services = [
  AuthData,
  FakeData,
  Workshop,
  BookingService,
  RoundPipe

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
    ResetPasswordPage,
    WorkshopDetailPage,
    BookingPage,
    HistoryBookingPage
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
    ResetPasswordPage,
    WorkshopDetailPage,
    BookingPage,
    HistoryBookingPage

  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },

    Services
  ]
})
export class AppModule { }
