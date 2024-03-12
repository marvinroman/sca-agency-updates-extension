define('ComplianceDocuments.Collection.View', [
	'SCCollectionView',
	'ComplianceDocuments.Details.View',
	'compliancedocuments_collection.tpl',
	'jQuery',
], function (
	SCCollectionViewModule,
	MyDocsDetailsView,
	compliancedocuments_collection_tpl,
	jQuery
) {
	'use strict';

	var SCCollectionView = SCCollectionViewModule.SCCollectionView;

	function ComplianceDocumentsCollectionView(options) {
		SCCollectionView.call(this, options.collection);

		this.collection = options.collection;
		this.template = compliancedocuments_collection_tpl;

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

	ComplianceDocumentsCollectionView.prototype = Object.create(SCCollectionView.prototype);
	
  ComplianceDocumentsCollectionView.prototype.constructor = ComplianceDocumentsCollectionView;

	ComplianceDocumentsCollectionView.prototype.getCellViewsPerRow = function () {
    return 1;
  };

	ComplianceDocumentsCollectionView.prototype.getCellViewInstance = function (model) {
    return new MyDocsDetailsView({
      model: model,
    });
  };

	// ComplianceDocumentsCollectionView.prototype.getEvents = function () {
	// 	return {
	// 		'click button[data-action="delete"]': 'deleteFile',
	// 	};
	// };

	ComplianceDocumentsCollectionView.prototype.getContext = function () {
		return {};
	};

	return ComplianceDocumentsCollectionView;
});