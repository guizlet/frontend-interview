import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-learn-mode",
  templateUrl: "./learn-mode.component.html",
  styleUrls: ["./learn-mode.component.css"]
})
export class LearnModeComponent implements OnInit {

   terms = [
    {
      id: 1,
      word: "Nebraska",
      definition: "Lincoln"
    },
    {
      id: 2,
      word: "Massachusetts",
      definition: "Boston"
    },
    {
      id: 3,
      word: "California",
      definition: "Sacramento"
    }
  ];

  constructor() {}

  ngOnInit() {}

}
