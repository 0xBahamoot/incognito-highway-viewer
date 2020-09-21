import { BackendService } from './../backend.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  highwayNodes: any[] = [{
    UID: 'SIDF23492FDF',
    IP:'149.123.2.3',
  },{
    UID: 'OPDFPOG34533',
    IP:'34.5.74.29',
  },{
    UID: 'MNV0390JLKJ',
    IP:'89.12.4.5',
  }];
  constructor(private backend: BackendService) {

  }

  ngOnInit(): void {
  }

}
