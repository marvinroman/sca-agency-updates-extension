define('ComplianceDocuments.Collection', [
	'SCCollection',
	'ComplianceDocuments.Model',
	'Utils',
], function (SCCollectionModule, ComplianceDocumentsModel, Utils) {
	'use strict';

	var SCCollection = SCCollectionModule.SCCollection;

	function MyDocsCollection(models, options) {
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

	MyDocsCollection.prototype = Object.create(SCCollection.prototype);
	
  MyDocsCollection.prototype.constructor = MyDocsCollection;

	return MyDocsCollection;
});
