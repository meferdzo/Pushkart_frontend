// Angular
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators'


@Component({
	selector: 'kt-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
	public isPressed;
	loadedNotifications = [];

	constructor(private http: HttpClient) {
		this.isPressed = false;
	}

	ngOnInit(): void {
		console.log(this.isPressed);
	}
	onSubmit(postData: {title: string; body: string;}){
		this.isPressed = true;
		console.log("Submited!");
		//Send http request
		this.http.post('http://localhost:3000/notifications/sendNotifications',
			postData)
			.pipe(map(responseData => {
			const resArray = [];
			for(const key in responseData){
			resArray.push({ ...responseData[key]})
			}
			return resArray;
			})
			)
			.subscribe(responseData => {
			console.log(responseData);
			this.loadedNotifications = responseData
			});
	}
}
