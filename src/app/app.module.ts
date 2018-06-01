import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { FrameworkPollComponent } from './framework-poll/framework-poll.component';


const config = {
  apiKey: "AIzaSyCVLU4Frm3huhOGCUdXCbxGMrxmpM_8MQw",
  authDomain: "framework-voter-db49a.firebaseapp.com",
  databaseURL: "https://framework-voter-db49a.firebaseio.com",
  projectId: "framework-voter-db49a",
  storageBucket: "framework-voter-db49a.appspot.com",
  messagingSenderId: "780462874260"
}


@NgModule({
  declarations: [
    AppComponent,
    FrameworkPollComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [],
  entryComponents: [
    FrameworkPollComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) {

  }

  ngDoBootstrap(){
    const el = createCustomElement(FrameworkPollComponent, {injector: this.injector});
    customElements.define('framework-poll', el);
  }
 }
