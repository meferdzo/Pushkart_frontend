// Angular
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";


@Component({
	selector: 'kt-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {

	}
	onSubmit(form: NgForm){
		console.log("Submited!");
		console.log(form);
	}

}
