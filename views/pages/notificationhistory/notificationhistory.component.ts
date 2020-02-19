import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {NotificationhistoryModel} from "./notificationhistory.model";
import { Observable } from 'rxjs';

@Component({
  selector: 'kt-notificationhistory',
  templateUrl: './notificationhistory.component.html',
  styleUrls: ['./notificationhistory.component.scss']
})
export class NotificationhistoryComponent implements OnInit {

	loadedPosts: NotificationhistoryModel[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  	this.fetchPosts().subscribe(posts => {
		  console.log(posts);
		  this.loadedPosts = posts;
	  });
  }

  private fetchPosts(): Observable<NotificationhistoryModel[]> {
  	return this.http.get<NotificationhistoryModel[]>('http://localhost:3000/notification/history')
  }
}
