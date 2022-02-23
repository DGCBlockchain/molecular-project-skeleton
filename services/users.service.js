const { MoleculerClientError } = require("moleculer").Errors;

const DbMixin = require("../mixins/db.mixin");

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "users",
	// version: 1

	/**
	 * Mixins
	 */
	mixins: [DbMixin("users")],
	/**
	 * Default settings
	 */
	settings: {
		/** Secret for JWT */
		// TODO: check if JWT_SECRET here is required
		//  JWT_SECRET: process.env.JWT_SECRET || "jwt-conduit-secret",

		/** Public fields */
		// TODO: change public fields as required
		fields: [ "firstName", "lastName", "email", "address", "middleName"],

		/** Validator schema for entity */
		entityValidator: {
			username: { type: "string", min: 8 }, // email or parcId
			password: { type: "string", min: 8 },
			email: { type: "email" },
			address: { type: "string"},
			firstName: { type: "string" },
			lastName: { type: "string" },
			middleName: {type: "string", optional:true}
		}
	},

	/**
	 * Actions
	 */
	actions: {
		/**
		 * The "moleculer-db" mixin registers the following actions:
		 *  - list
		 *  - find
		 *  - count
		 *  - create
		 *  - insert
		 *  - update
		 *  - remove
		 */

		/**
		 * Get current user entity.
		 * Auth is required!
		 *
		 * @actions
		 *
		 * @returns {Object} User entity
		 */
		me: {
			auth: "required",
			rest: {
				method: "GET",
				path: "/me"
			},
			async handler(ctx) {
				// TODO: implement logic to find the user in db from id and return necessary info
				// const user = await this.getById(ctx.meta.user._id); 
				// if (!user)
				// 	throw new MoleculerClientError("User not found!", 400);

				// const doc = await this.transformDocuments(ctx, {}, user);
				// return await this.transformEntity(doc, true, ctx.meta.token);
				console.log(ctx.meta.user.id);
				return `user ${ctx.meta.user.username} is logged in`;
			}
		},

		/**
		 * Update current user entity.
		 * Auth is required!
		 *
		 * @actions
		 *
		 * @param {Object} user - Modified fields
		 * @returns {Object} User entity
		 */
		updateSelf: {
			auth: "required",
			rest: "PUT /updateSelf",
			params: {
				user: { type: "object", props: {
					password: { type: "string", min: 6, optional: true },
					email: { type: "email", optional: true },
					address: { type: "string", optional: true },
					bankDetails: { type: "object", props: {
						name:{type: "string"},
						iban: {type: "string"},
						bic: {type: "string"}
					}, optional: true },
				} }
			},
			async handler(ctx) {
				// TODO: implement buisness logic for updating user entity
				// const newData = ctx.params.user;
				// if (newData.username) {
				// 	const found = await this.adapter.findOne({ username: newData.username });
				// 	if (found && found._id.toString() !== ctx.meta.user._id.toString())
				// 		throw new MoleculerClientError("Username is exist!", 422, "", [{ field: "username", message: "is exist" }]);
				// }
		
				// if (newData.email) {
				// 	const found = await this.adapter.findOne({ email: newData.email });
				// 	if (found && found._id.toString() !== ctx.meta.user._id.toString())
				// 		throw new MoleculerClientError("Email is exist!", 422, "", [{ field: "email", message: "is exist" }]);
				// }
				// newData.updatedAt = new Date();
				// const update = {
				// 	"$set": newData
				// };
				// const doc = await this.adapter.updateById(ctx.meta.user._id, update);
		
				// const user = await this.transformDocuments(ctx, {}, doc);
				// const json = await this.transformEntity(user, true, ctx.meta.token);
				// await this.entityChanged("updated", json, ctx);
				return `user ${ctx.meta.user.username} updated`;
			}
		},

		/**
		 * Get list of Users.
		 * Auth is required!
		 * only admins should be able to call this route
		 *
		 * @actions
		 *
		 * @returns {Array} entity
		 */
		list:{
			auth: "required",
			rest: "GET /list",
			async handler(ctx) {
				// TODO: add role based auth
				return [ctx.meta.user.username];
			}
		}
	},

	/**
	 * Methods
	 */
	methods: {
		/**
		 * Loading sample data to the collection.
		 * It is called in the DB.mixin after the database
		 * connection establishing & the collection is empty.
		 */
		// async seedDB() {
		// 	await this.adapter.insertMany([
		// 		{ name: "Samsung Galaxy S10 Plus", quantity: 10, price: 704 },
		// 		{ name: "iPhone 11 Pro", quantity: 25, price: 999 },
		// 		{ name: "Huawei P30 Pro", quantity: 15, price: 679 },
		// 	]);
		// }
	},

	/**
	 * Fired after database connection establishing.
	 */
	async afterConnected() {
		// await this.adapter.collection.createIndex({ name: 1 });
	}
};
