// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCfAdRawQ1w6wygjKQHOjzB_kDDlrsj3K4",
    authDomain: "portfolio-42950.firebaseapp.com",
    projectId: "portfolio-42950",
    storageBucket: "portfolio-42950.appspot.com",
    messagingSenderId: "226529046723",
    appId: "1:226529046723:web:845ce4081e8b982bb9f276"
  }
};

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
