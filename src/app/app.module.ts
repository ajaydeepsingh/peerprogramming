import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

export const firebaseConfig = {
  apiKey: "AIzaSyCNIAEGlWg0YuEVP7omETN-5EBMBRUdSKc",
  authDomain: "tasks-820d7.firebaseapp.com",
  databaseURL: "https://tasks-820d7.firebaseio.com",
  projectId: "tasks-820d7",
  storageBucket: "tasks-820d7.appspot.com",
  messagingSenderId: "57109794410",
  appId: "1:57109794410:web:481ee143f603c31d20c413",
  measurementId: "G-SXBP295PXE"
}


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
