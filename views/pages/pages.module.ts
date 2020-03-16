// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
// import { DashboardimgComponent } from './dashboardimg/dashboardimg.component';
import { NotificationhistoryComponent } from './notificationhistory/notificationhistory.component';

@NgModule({
	declarations: [NotificationhistoryComponent],
	exports: [],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		CoreModule,
		PartialsModule,
	],
	providers: []
})
export class PagesModule {
}
