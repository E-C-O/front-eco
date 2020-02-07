import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng';

@Component({
  selector: 'app-body',
  template: `

    <p-toast></p-toast>

  `,
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],

})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
