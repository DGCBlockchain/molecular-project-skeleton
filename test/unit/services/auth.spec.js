

const { ServiceBroker } = require("moleculer");
const { ValidationError } = require("moleculer").Errors;
const TestService = require("../../../services/auth.service");

describe("Test 'auth' service", () => {
	const broker = new ServiceBroker({ logger: false });
	broker.createService(TestService);

	beforeAll(() => broker.start());
	afterAll(() => broker.stop());

	describe("Test 'auth.login' action", () => {

		// it("should return with 'Hello Moleculer'", async () => {
		// 	const res = await broker.call("greeter.hello");
		// 	expect(res).toBe("Hello Moleculer");
		// });

	});

	describe("Test 'auth.resolve' action", () => {

		// it("should return with 'Welcome'", async () => {
		// 	const res = await broker.call("greeter.welcome", { name: "Adam" });
		// 	expect(res).toBe("Welcome, Adam");
		// });

		// it("should reject an ValidationError", async () => {
		// 	expect.assertions(1);
		// 	try {
		// 		await broker.call("greeter.welcome");
		// 	} catch(err) {
		// 		expect(err).toBeInstanceOf(ValidationError);
		// 	}
		// });

	});

});

