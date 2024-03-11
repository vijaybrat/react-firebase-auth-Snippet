import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4R05HeYwxqvefcXYS2-OwqcDjjJLWvo4",
  authDomain: "officemanage-eb10c.firebaseapp.com",
  databaseURL: "https://officemanage-eb10c-default-rtdb.firebaseio.com",
  projectId: "officemanage-eb10c",
  storageBucket: "officemanage-eb10c.appspot.com",
  messagingSenderId: "12610363811",
  appId: "1:12610363811:web:0d3826b191d3f6cd167a16",
  measurementId: "G-ZFDVSLZSJB",
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
