define('ComplianceDocuments.List.View', [
	'PageType.Base.View',
	'ComplianceDocuments.Collection',
	'ComplianceDocuments.Collection.View',
	'compliancedocumentslist.tpl',
	'Utils',
], function (
	PageTypeBaseView,
	MyDocsCollection,
	MyDocsCollectionView,
	compliancedocumentslist_tpl,
	Utils
) {
	'use strict';

	return PageTypeBaseView.PageTypeBaseView.extend({
		template: compliancedocumentslist_tpl,

		initialize: function initialize(options) {
			this.collection = new MyDocsCollection();
		},

		getSelectedMenu: function getSelectedMenu() {
			return 'compliancedocumentslist';
		},

		beforeShowContent: function beforeShowContent() {
			this.getBreadcrumbPages = function () {
				return [
					{
						text: Utils.translate('My Documents'),
						href: '/compliance-documents',
					},
				];
			};

			this.title = Utils.translate('My Documents');

			this.childViews = {
				'ComplianceDocuments.Collection.View': function () {
					return new MyDocsCollectionView({
						collection: this.collection,
					});
				}
			};

			return this.collection.fetch();
		},
	});
});
