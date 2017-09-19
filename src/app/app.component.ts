import { Component } from '@angular/core';
import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github Score';
  username: string;
  status: string[] = [];
  score: number;

  constructor(private _httpService: HttpService){}
  getScore(){ // retrieve when submitted
    this._httpService.retrieveScore(this.username) 
    .then(user => {this.score = user.followers + user.public_repos;
      if (this.score < 20) {
        this.status[0] = "red";
        this.status[1] = "Needs Work!";
      }
      else if (this.score < 50) {
        this.status[0] = "orange";
        this.status[1] = "A Decent Start!";
      }
      else if (this.score < 100) {
        this.status[0] = "black";
        this.status[1] = "Doing Good!";
      }
      else if (this.score < 200) {
        this.status[0] = "green";
        this.status[1] = "Great Job!";
      }
      else {
        this.status[0] = "blue";
        this.status[1] = "GitHub Elite!";
      }
    })
    .catch(err => {console.log(err)})
  }
}
