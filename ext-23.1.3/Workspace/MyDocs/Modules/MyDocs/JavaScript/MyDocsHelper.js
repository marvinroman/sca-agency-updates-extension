define('MyDocs.Helper', ['MyDocs.SelectOptions.Model'], function (MyDocsSelectOptions) {

	'use strict';

  let typeOptions = [];

	return {
		getTypeOptions: function getTypeOptions() {

      if (!typeOptions.length) {
        // typeOptions = [
        //   { internalid: '1', name: Utils.translate('Color') },
        //   { internalid: '2', name: Utils.translate('Size') },
        // ];
        typeOptions = new MyDocsSelectOptions();
      }

			return typeOptions;
		},

		getTypeOptionIds: function getTypeOptionIds() {
			const ids = [];

			this.getTypeOptions().forEach(function (option) {
				ids.push(option.internalid);
			});

			return ids;
		},
	};
});
