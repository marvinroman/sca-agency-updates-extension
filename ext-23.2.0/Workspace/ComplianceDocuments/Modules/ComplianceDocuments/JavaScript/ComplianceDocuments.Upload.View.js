define('ComplianceDocuments.Upload.View', [
	'PageType.Base.View',
	'ComplianceDocuments.Form.View',
	'ComplianceDocuments.SelectOptions.Model',
	'compliancedocuments_upload.tpl',
	'jQuery',
	'Utils',
], function (
	PageTypeBaseView,
	ComplianceDocumentsFormView,
	SelectOptionsModel,
	compliancedocuments_upload_tpl,
	jQuery,
	Utils
) {
	'use strict';

	return PageTypeBaseView.PageTypeBaseView.extend({
		template: compliancedocuments_upload_tpl,

		initialize: function initialize() {
			this.model = new SelectOptionsModel();
		},

		getSelectedMenu: function getSelectedMenu() {
			return 'compliancedocumentslist';
		},

		beforeShowContent: function beforeShowContent() {

			this.childViews = {
				'ComplianceDocuments.Form.View': function () {
					return new ComplianceDocumentsFormView({
						model: this.model
					});
				}
			};

			// if (!!Number(this.options.routerArguments[0])) {
			// 	this.getBreadcrumbPages = function () {
			// 		return [
			// 			{
			// 				text: Utils.translate('My Documents'),
			// 				href: '/compliance-documents',
			// 			},
			// 			{
			// 				text: 'Edit',
			// 			},
			// 		];
			// 	};

			// 	this.title = Utils.translate('Edit My Document');

			// 	return this.model.fetch({
			// 		data: { internalid: this.options.routerArguments[0] },
			// 	});
			// } else {
				this.getBreadcrumbPages = function () {
					return [
						{
							text: Utils.translate('Compliance Documents'),
							href: '/compliance-documents',
						},
						{
							text: 'Upload',
						},
					];
				};

				this.title = Utils.translate('Upload your document');

				// return jQuery.Deferred().resolve();
        return this.model.fetch();
			// }
		},

		getContext: function getContext() {
			return {};
		}
    
	});
});
