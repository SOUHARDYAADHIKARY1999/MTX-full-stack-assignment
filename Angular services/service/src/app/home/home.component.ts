import { Component, OnInit ,AfterViewInit} from '@angular/core';
declare var anime: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    var textWrapper:any;
    var el:any;
    textWrapper = document.querySelector('.an-1');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
      .add({
        targets: '.an-1 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 450,
        //delay: (el, i) => 70 * i,
      }).add({
        targets: '.an-1',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 100
      });


  }

}
