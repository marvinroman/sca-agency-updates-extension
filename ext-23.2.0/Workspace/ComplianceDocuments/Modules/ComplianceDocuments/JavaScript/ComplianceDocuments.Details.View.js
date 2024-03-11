define('ComplianceDocuments.Details.View', [
	'SCView',
	'ComplianceDocuments.Upload.View',
	'ComplianceDocuments.Helper',
	'compliancedocuments_details.tpl',
], function (
	SCViewModule,
	MyDocsUploadView,
	MyDocsHelper,
	compliancedocuments_details_tpl
) {
	'use strict';

	var SCView = SCViewModule.SCView;

	function MyDocsDetailsView(options) {

		SCView.call(this, options);

		this.model = options.model;
		this.template = compliancedocuments_details_tpl;
	}

	MyDocsDetailsView.prototype = Object.create(SCView.prototype);
	MyDocsDetailsView.prototype.constructor = MyDocsDetailsView;


	MyDocsDetailsView.prototype.getContext = function () {
		return {
			model: this.model,
			// typeOptions: MyDocsHelper.getTypeOptions(),
		};
	};

	return MyDocsDetailsView;
});