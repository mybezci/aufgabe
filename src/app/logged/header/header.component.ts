import { Component, OnInit } from '@angular/core';
import { LogvalidService } from 'src/app/login/logvalid.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username = "Qwertz";
  constructor(public logvalidService: LogvalidService) { }

  ngOnInit(): void {
  }

}


