import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogvalidService } from 'src/app/login/logvalid.service';

@Component({
  selector: 'app-seite',
  templateUrl: './seite.component.html',
  styleUrls: ['./seite.component.scss']
})
export class SeiteComponent implements OnInit {

  seite? : SeiteComponent;

  constructor(private route: ActivatedRoute, private router : Router, private logvalidService : LogvalidService) {
//    const seite : SeiteComponent = route.snapshot.data.seite;
    console.log("In Seite constructor");
   }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      params.get('username');
    });

    this.seite = this.route.snapshot.data["seite"];
  }

  login(){
    this.logvalidService.login();
  }

  logout(){
    this.logvalidService.logout();
  }


}
