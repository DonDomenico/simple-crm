import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-649fc","appId":"1:1017144676391:web:7d22288659222a7e767e02","storageBucket":"simple-crm-649fc.appspot.com","apiKey":"AIzaSyCWIDwR6FnBoDKu8xorqulQCrTACiduAVw","authDomain":"simple-crm-649fc.firebaseapp.com","messagingSenderId":"1017144676391"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
