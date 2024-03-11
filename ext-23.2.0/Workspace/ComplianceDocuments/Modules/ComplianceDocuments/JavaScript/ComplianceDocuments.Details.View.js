define('ComplianceDocuments.Details.View', [
	'SCView',
	'compliancedocuments_details.tpl',
], function (
	SCViewModule,
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
			model: this.model
		};
	};

	return MyDocsDetailsView;
});