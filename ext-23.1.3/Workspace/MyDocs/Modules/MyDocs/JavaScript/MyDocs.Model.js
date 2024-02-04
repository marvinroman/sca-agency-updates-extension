define('MyDocs.Model', [
	'SCModel',
	'Utils',
	'MyDocs.Helper',
], function (SCModelModule, Utils, MyDocsHelper) {
	'use strict';

	var SCModel = SCModelModule.SCModel;

	function MyDocsModel(model, options) {
		SCModel.call(this, model, options);

		this.urlRoot = function urlRoot() {
			return Utils.getAbsoluteUrl(
				getExtensionAssetsPath(
					'Modules/MyDocs/SuiteScript2/MyDocs.Service.ss'
				),
				true
			);
		};
	}

	MyDocsModel.prototype = Object.create(SCModel.prototype);
	
  MyDocsModel.prototype.constructor = MyDocsModel;

	// MyDocsModel.prototype.getValidationRules = function () {
	// 	return {
	// 		type: [
	// 			function (value, name) {
	// 				if (
	// 					typeof value === 'undefined' ||
	// 					value.length === 0 ||
	// 					!value.trim()
	// 				) {
	// 					return (
	// 						name.charAt(0).toUpperCase() + name.slice(1) + ' is required'
	// 					);
	// 				}
	// 			},
	// 			function (value, name) {
	// 				if (
	// 					MyDocsHelper.getTypeOptionIds().indexOf(
	// 						String(value)
	// 					) === -1
	// 				) {
	// 					return 'Select a valid ' + name;
	// 				}
	// 			},
	// 		],
	// 		value: [
	// 			function (value, name) {
	// 				if (
	// 					typeof value === 'undefined' ||
	// 					value.length === 0 ||
	// 					!value.trim()
	// 				) {
	// 					return (
	// 						name.charAt(0).toUpperCase() + name.slice(1) + ' is required'
	// 					);
	// 				}
	// 			},
	// 		],
	// 	};
	// };

	return MyDocsModel;
});
