import {Component, OnInit} from "@angular/core";
import {IRace} from "./race";
import {RaceService} from "./race.service";

@Component({
  selector: 'race',
  templateUrl: 'race.component.html',
  styleUrls: ['race.component.css']
})

export class RaceComponent implements OnInit {

  races: IRace [] = [];

  constructor(private raceService: RaceService) {
  }

  ngOnInit(): void {
    this.raceService.getRaceCalendar().subscribe(data => { this.races = data});
  }
}
