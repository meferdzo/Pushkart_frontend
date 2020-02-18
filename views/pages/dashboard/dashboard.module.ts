// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		PartialsModule,
		CoreModule,
		HttpClientModule,
		AngularEditorModule,
		RouterModule.forChild([
			{
				path: '',
				component: DashboardComponent
			},
		]),
	],
	providers: [],
	bootstrap: [DashboardComponent],
	declarations: [
		DashboardComponent,
	]
})
export class DashboardModule {
}
