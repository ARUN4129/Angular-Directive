import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-comp',
  templateUrl: './sub-comp.component.html',
  styleUrls: ['./sub-comp.component.css']
})
export class SubCompComponent implements OnInit {

  flag = false;
  val = true; 
  List = ['One','Two','Three','Four','Five'];
  tmp = 'Five';

  ngOnInit() {
  }

}
