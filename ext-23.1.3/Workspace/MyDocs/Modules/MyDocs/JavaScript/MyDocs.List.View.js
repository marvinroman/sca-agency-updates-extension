define('MyDocs.List.View', [
	'PageType.Base.View',
	'MyDocs.Collection',
	'MyDocs.Collection.View',
	'mydocs_list.tpl',
	'Utils',
], function (
	PageTypeBaseView,
	MyDocsCollection,
	MyDocsCollectionView,
	mydocs_list_tpl,
	Utils
) {
	'use strict';

	return PageTypeBaseView.PageTypeBaseView.extend({
		template: mydocs_list_tpl,

		initialize: function initialize(options) {
			this.collection = new MyDocsCollection();
		},

		getSelectedMenu: function getSelectedMenu() {
			return 'mydocumentslist';
		},

		beforeShowContent: function beforeShowContent() {
			this.getBreadcrumbPages = function () {
				return [
					{
						text: Utils.translate('My Documents'),
						href: '/my-documents',
					},
				];
			};

			this.title = Utils.translate('My Documents');

			this.childViews = {
				'MyDocs.Collection.View': function () {
					return new MyDocsCollectionView({
						collection: this.collection,
					});
				}
			};

			return this.collection.fetch();
		},
	});
});
