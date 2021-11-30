import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-log-test',
  templateUrl: './log-test.component.html',
  styleUrls: ['./log-test.component.css']
})
export class LogTestComponent implements OnInit {

  constructor(private logger:LogService) { }

  ngOnInit(): void {
  }

  testLog():void{
    this.logger.log("Test this log() Method")
    this.logger.log("Test 2 Parameters", "Paul", "Smith");

    this.logger.debug("Test Mixed Parameters", true, false, "Paul", "Smith");

    let values = ["1", "Paul", "Smith"];
    this.logger.warn("Test String and Array", "Some log entry", values);

  }

}
