import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }
  
  sobeTopo(){
    window.scroll({left: 0, top: 0, behavior: 'smooth'})
  }

  topo(){
    window.scrollTo(0,0);
  }
}
