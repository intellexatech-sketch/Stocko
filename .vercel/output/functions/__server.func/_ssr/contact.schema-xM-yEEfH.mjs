import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact.schema-xM-yEEfH.js
var contactSchema = objectType({
	name: stringType().trim().min(1, "Name is required"),
	business: stringType().trim().optional().default(""),
	phone: stringType().trim().min(1, "Phone number is required"),
	email: stringType().trim().optional().default(""),
	message: stringType().trim().optional().default("")
});
//#endregion
export { contactSchema as t };
