// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const DbMixin = require("../mixins/db.mixin");
/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "register",

	mixins: [DbMixin("users")],

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
		 * Say a 'Hello' action.
		 *
		 * @returns
		 */
		signup: {
			rest: {
				method: "POST",
				path: "/signup"
			},
			params: {
				user: { type: "object" },
				password: "string"
			},
			async handler(ctx) {
				const json =  { user:ctx.params.user.userId, password:ctx.params.password};
				// TODO: remove console logs for real projects
				console.log(json);
				console.log(ctx.meta.jwt);
				// TODO: verify userId does not already exists
				// TODO: verify Password strength and follows password guidelines
				// TODO: create password hash
				// TODO: save userId passowrd hash in Auth DB table
				// TODO: save user object in user table
				// TODO: return a meaningful res or http code
				return `${json.user} has successfully signed up`;
                
			}
		}
	},
};