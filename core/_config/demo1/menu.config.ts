export class MenuConfig {
	public defaults: any = {
		aside: {
			self: {},
			items: [
				{
					title: '    Sestavi sporočilo',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: 'dashboard',
					translate: 'MENU.DASHBOARD',
					bullet: 'dot',
				},
				{
					title: '    Layout Builder',
					root: true,
					icon: 'flaticon2-expand',
					pageone: 'builder'
				},
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
