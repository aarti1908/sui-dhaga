import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBvhQWMBK31Uv_r6Lnec_t7qfaZCeximnE",
  authDomain: "sui-dhaga-4836f.firebaseapp.com",
  projectId: "sui-dhaga-4836f",
  storageBucket: "sui-dhaga-4836f.appspot.com",
  messagingSenderId: "576388119294",
  appId: "1:576388119294:web:d66effc0ec13372ef2c3af",
  measurementId: "G-TWFNKX1SNC"
};



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
