import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IRace} from "./race";


@Injectable({
  providedIn: 'root'
})

export class RaceService {
  constructor(private http: HttpClient) {
  }

  rootUrl = '/api';

  getRaceCalendar(): Observable<IRace[]> {
    console.log("Hello there from the get request.");
    return this.http.get<IRace[]>(this.rootUrl + '/v1/calendar');
  }

  getSpecificRace(round : number): Observable<IRace> {
    return this.http.get<any>(this.rootUrl + `v1/calendar/${round}`);
  }
}
