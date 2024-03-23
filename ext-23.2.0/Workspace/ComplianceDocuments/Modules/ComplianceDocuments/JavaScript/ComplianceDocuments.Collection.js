define('ComplianceDocuments.Collection', [
	'SCCollection',
	'ComplianceDocuments.Model',
	'Utils',
], function (SCCollectionModule, ComplianceDocumentsModel, Utils) {
	'use strict';

	var SCCollection = SCCollectionModule.SCCollection;

	function ComplianceDocumentsCollection(models, options) {
		SCCollection.call(this, models, options);

		this.model = ComplianceDocumentsModel;
		this.url = function () {
			return Utils.getAbsoluteUrl(
				getExtensionAssetsPath(
					'Modules/ComplianceDocuments/SuiteScript2/ComplianceDocuments.Service.ss'
				),
				true
			);
		};
	}

	ComplianceDocumentsCollection.prototype = Object.create(SCCollection.prototype);
	
  ComplianceDocumentsCollection.prototype.constructor = ComplianceDocumentsCollection;

	return ComplianceDocumentsCollection;
});
