/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

var src_default = {
	async fetch(request, env, ctx) {
		const SMresponses = {
			1: "Shannon McKenzie's random response 1",
			2: "Shannon McKenzie's random response 2",
			3: "Shannon McKenzie's random response 3",
			4: "Shannon McKenzie's random response 4"
		}

		const max = 4;
		const responseInteger = Math.ceil(Math.random() * max)

		let randomResponse = SMresponses[responseInteger]

		return new Response(randomResponse, { status: 200 })
	},
};