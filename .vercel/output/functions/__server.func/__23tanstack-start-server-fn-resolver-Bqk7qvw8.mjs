//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-Bqk7qvw8.js
var manifest = { "14bd7cacbbf3d094600e9cf4eb55af96e5f4006ea54a5ceb80af6655f8a6fa19": {
	functionName: "sendContactEmail_createServerFn_handler",
	importer: () => import("./_ssr/mail-DqAQPh0b.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ??= await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
