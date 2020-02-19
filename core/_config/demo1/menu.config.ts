export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: 'Sestavi sporočilo',
					root: true,
					alignment: 'left',
					page: 'dashboard',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Sestavi slikovno sporočilo',
					root: true,
					alignment: 'left',
					page: '/dashboardimg',
				},
				{
					title: 'Zgodovina pošiljanj',
					root: true,
					alignment: 'left',
					page: '/notificationhistory',
				},
			]
		},
		aside: {
			self: {},
			items: [
				{
					title: 'Sestavi sporočilo',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: 'dashboard',
					translate: 'MENU.DASHBOARD',
					bullet: 'dot',
				},
				{
					title: 'Sestavi slikovno sporočilo',
					root: true,
					icon: 'flaticon2-expand',
					page: '/dashboardimg'
				},
				{section: 'Arhiv'},
				{
					title: 'Zgodovina pošiljanj',
					root: true,
					icon: 'flaticon2-browser-2',
					page: '/notificationhistory'
				},
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
