import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'kt-dashboardimg',
  templateUrl: './dashboardimg.component.html',
  styleUrls: ['./dashboardimg.component.scss']
})
export class DashboardimgComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	onSubmit(form: NgForm) {
		console.log('Submited!');
		console.log(form);
	}

}
