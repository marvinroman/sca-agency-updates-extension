define('ComplianceDocuments.Collection', [
	'SCCollection',
	'ComplianceDocuments.Model',
	'Utils',
], function (SCCollectionModule, MyDocsModel, Utils) {
	'use strict';

	var SCCollection = SCCollectionModule.SCCollection;

	function MyDocsCollection(models, options) {
		SCCollection.call(this, models, options);

		this.model = MyDocsModel;
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
