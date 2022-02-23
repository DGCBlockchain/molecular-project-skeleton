

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "auth",

	/**
	 * Settings
	 */
	settings: {

	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

		/**
		 * return JWT for an authenticated user.
		 *
		 * @returns
		 */
		login: {
			rest: {
				method: "POST",
				path: "/login"
			},
			async handler(ctx) {
				return `Hello ${ctx.meta.user.username}`;
			}
		},

		/**
		 * return JWT for an authenticated user.
		 *
		 * @returns
		 */
		resolve: {
			rest: {
				method: "GET",
			},
			async handler(ctx) {
				return  ctx.meta.user;
			}
		},
		
	},

	/**
	 * Events
	 */
	events: {

	},

};
