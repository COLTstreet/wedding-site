// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAM1Nuti-0RqBeqIse1G7PH54ELF_EpC5U",
    authDomain: "engagement-site.firebaseapp.com",
    databaseURL: "https://engagement-site.firebaseio.com",
    projectId: "engagement-site",
    storageBucket: "engagement-site.appspot.com",
    messagingSenderId: "676499485473"
  },
  mapbox: {
    accessToken: "pk.eyJ1IjoiY29sdHN0cmVldCIsImEiOiJjanFjZmZsODIwcDNoNDJud3gzMjI4OGF4In0.h9uLyByXir4aaTDxRxleiA"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
