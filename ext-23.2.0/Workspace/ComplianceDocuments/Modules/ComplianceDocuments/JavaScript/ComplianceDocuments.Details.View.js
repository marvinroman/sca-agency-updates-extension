define('ComplianceDocuments.Details.View', [
	'SCView',
	'compliancedocuments_details.tpl',
], function (
	SCViewModule,
	compliancedocuments_details_tpl
) {
	'use strict';

	var SCView = SCViewModule.SCView;

	function ComplianceDocumentssDetailsView(options) {

		SCView.call(this, options);

		this.model = options.model;
		this.template = compliancedocuments_details_tpl;
	}

	ComplianceDocumentssDetailsView.prototype = Object.create(SCView.prototype);
	ComplianceDocumentssDetailsView.prototype.constructor = ComplianceDocumentssDetailsView;


	ComplianceDocumentssDetailsView.prototype.getContext = function () {
		return {
			model: this.model
		};
	};

	return ComplianceDocumentssDetailsView;
});