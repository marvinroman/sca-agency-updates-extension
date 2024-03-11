define('ComplianceDocuments.List.View', [
	'PageType.Base.View',
	'ComplianceDocuments.Collection',
	'ComplianceDocuments.Collection.View',
	'compliancedocuments_list.tpl',
	'Utils',
], function (
	PageTypeBaseView,
	ComplianceDocumentsCollection,
	ComplianceDocumentsCollectionView,
	compliancedocuments_list_tpl,
	Utils
) {
	'use strict';

	return PageTypeBaseView.PageTypeBaseView.extend({
		template: compliancedocuments_list_tpl,

		initialize: function initialize(options) {
			this.collection = new ComplianceDocumentsCollection();
		},

		getSelectedMenu: function getSelectedMenu() {
			return 'compliancedocumentslist';
		},

		beforeShowContent: function beforeShowContent() {
			this.getBreadcrumbPages = function () {
				return [
					{
						text: Utils.translate('Compliance Documents'),
						href: '/compliance-documents',
					},
				];
			};

			this.title = Utils.translate('Compliance Documents');

			this.childViews = {
				'ComplianceDocuments.Collection.View': function () {
					return new ComplianceDocumentsCollectionView({
						collection: this.collection,
					});
				}
			};

			return this.collection.fetch();
		},
	});
});
