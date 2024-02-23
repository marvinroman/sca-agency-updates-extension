/**
 * @NApiVersion 2.x
 * @NModuleScope Public
 */
define(['./ComplianceDocuments.Backend.Model', 'N/runtime'], function (
	MyDocsBackendModel,
	runtime
) {
	'use strict';

	function isLoggedIn() {
		var user = runtime.getCurrentUser();
		return user.id > 0 && user.role !== 17;
	}

	function service(context) {
		var response = {};

		if (isLoggedIn()) {
			switch (context.request.method) {
				case 'GET':
					response = MyDocsBackendModel.get(context.request);
					break;
				case 'POST':
					response = MyDocsBackendModel.post(context.request);
					break;
				case 'PUT':
					response = MyDocsBackendModel.put(context.request);
					break;
				case 'DELETE':
					response = MyDocsBackendModel.delete(context.request);
					break;
				default:
					response = {
						type: 'error',
						message: 'Method not supported: ' + context.request.method,
					};
			}
		} else {
			response = {
				type: 'error',
				message: 'You must be logged in to use this service',
			};
		}

		context.response.write(JSON.stringify(response));
	}

	return {
		service: service,
	};
});
