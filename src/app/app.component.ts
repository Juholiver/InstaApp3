import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app3.1';

  ngOnInit(): void {

    const firebaseConfig = {
      apiKey: "AIzaSyAAtObvkWb4Tf6kabpBu5tihShClYoKImg",
      authDomain: "jta-instagram-f.firebaseapp.com",
      projectId: "jta-instagram-f",
      storageBucket: "jta-instagram-f.appspot.com",
      messagingSenderId: "1083884512778",
      appId: "1:1083884512778:web:0803d873d83afe7e6ee1f3",
      measurementId: "G-GJTNC6P31P"
    };
    
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }
}
