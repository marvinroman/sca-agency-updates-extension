define('ComplianceDocuments.Upload.Model', [
	'SCModel',
	'Utils'
], function (SCModelModule, Utils) {
	'use strict';

	var SCModel = SCModelModule.SCModel;

	function ComplianceDocumentsUploadModel(model, options) {
		SCModel.call(this, model, options);

		this.urlRoot = function urlRoot() {
			return Utils.getAbsoluteUrl(
				getExtensionAssetsPath(
					'Modules/ComplianceDocuments/SuiteScript2/ComplianceDocuments.Upload.Service.ss'
				),
				true
			);
		};
	}

	ComplianceDocumentsUploadModel.prototype = Object.create(SCModel.prototype);
	
  ComplianceDocumentsUploadModel.prototype.constructor = ComplianceDocumentsUploadModel;

	// ComplianceDocumentsUploadModel.prototype.getValidationRules = function () {
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

	return ComplianceDocumentsUploadModel;
});
