define('ComplianceDocuments.Upload.View', [
	'PageType.Base.View',
	'ComplianceDocuments.Form.View',
	'ComplianceDocuments.Model',
	'compliancedocumentsupload.tpl',
	'jQuery',
	'Utils',
], function (
	PageTypeBaseView,
	MyDocsFormView,
	MyDocsModel,
	compliancedocumentsupload_tpl,
	jQuery,
	Utils
) {
	'use strict';

	return PageTypeBaseView.PageTypeBaseView.extend({
		template: compliancedocumentsupload_tpl,

		initialize: function initialize() {
			this.model = new MyDocsModel();
		},

		getSelectedMenu: function getSelectedMenu() {
			return 'compliancedocumentslist';
		},

		beforeShowContent: function beforeShowContent() {
			this.childViews = {
				'ComplianceDocuments.Form.View': function () {
					return new MyDocsFormView({
						model: this.model,
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
							text: Utils.translate('My Documents'),
							href: '/compliance-documents',
						},
						{
							text: 'Upload',
						},
					];
				};

				this.title = Utils.translate('Upload your document');

				return jQuery.Deferred().resolve();
			// }
		},

		getContext: function getContext() {
			return {};
		}
    
	});
});
