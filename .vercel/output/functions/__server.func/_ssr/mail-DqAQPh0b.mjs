import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as contactSchema } from "./contact.schema-xM-yEEfH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mail-DqAQPh0b.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var sendContactEmail_createServerFn_handler = createServerRpc({
	id: "14bd7cacbbf3d094600e9cf4eb55af96e5f4006ea54a5ceb80af6655f8a6fa19",
	name: "sendContactEmail",
	filename: "src/server/mail.ts"
}, (opts) => sendContactEmail.__executeServer(opts));
var sendContactEmail = createServerFn({ method: "POST" }).validator((data) => {
	return contactSchema.parse(data);
}).handler(sendContactEmail_createServerFn_handler, async ({ data }) => {
	const { handleSendContactEmail } = await import("./nodemailer.server-C2VTV-yL.mjs");
	return handleSendContactEmail(data);
});
//#endregion
export { sendContactEmail_createServerFn_handler };
