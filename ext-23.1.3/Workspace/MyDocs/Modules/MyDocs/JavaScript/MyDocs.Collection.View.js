define('MyDocs.Collection.View', [
	'SCCollectionView',
	'MyDocs.Details.View',
	'mydocs_collection.tpl',
	'jQuery',
], function (
	SCCollectionViewModule,
	MyDocsDetailsView,
	mydocs_collection_tpl,
	jQuery
) {
	'use strict';

	var SCCollectionView = SCCollectionViewModule.SCCollectionView;

	function MyDocsCollectionView(options) {
		SCCollectionView.call(this, options.collection);

		this.collection = options.collection;
		this.template = mydocs_collection_tpl;

		var self = this;
		this.collection.on('reset sync add remove change destroy', function () {
			self.render();
		});

		// this.deleteFile = function (e) {
		// 	e.preventDefault();

		// 	var id = jQuery(e.target).data('id');
		// 	var model = this.collection.get(id);
		// 	model.destroy();
		// };
	}

	MyDocsCollectionView.prototype = Object.create(SCCollectionView.prototype);
	
  MyDocsCollectionView.prototype.constructor = MyDocsCollectionView;

	MyDocsCollectionView.prototype.getCellViewsPerRow = function () {
    return 1;
  };

	MyDocsCollectionView.prototype.getCellViewInstance = function (model) {
    return new MyDocsDetailsView({
      model: model,
    });
  };

	// MyDocsCollectionView.prototype.getEvents = function () {
	// 	return {
	// 		'click button[data-action="delete"]': 'deleteFile',
	// 	};
	// };

	MyDocsCollectionView.prototype.getContext = function () {
		return {};
	};

	return MyDocsCollectionView;
});