/**
 * @NApiVersion 2.x
 * @NModuleScope TargetAccount
 */
define(['N/record', 'N/runtime', 'N/search'], function (
	record,
	runtime,
	search
) {
	'use strict';

	var ComplianceDocumentsBackendModel = {
		get: function (request) {
			var type = 'customrecord_cafb_site_visits';

			var filters = [
        ['custrecord_cafb_most_recent', search.Operator.IS, 'T'],
        'AND',
        ['custrecord_cafb_sv_agency', search.Operator.ANYOF, runtime.getCurrentUser().id],
        'AND',
        ['file.internalid', 'noneof', '@NONE@'],
      ];

			var columns = [
        search.createColumn({
          name: 'custrecord_cafb_sv_type',
          summary: 'GROUP',
          label: 'Document Type',
        }),
        search.createColumn({
          name: 'name',
          join: 'file',
          summary: 'GROUP',
          label: 'Site visit Attachment',
        }),
        search.createColumn({
          name: 'custrecord_cafb_sv_date',
          summary: 'MAX',
          label: 'Most Recent Date',
        }),
        // search.createColumn({
        // 	name: 'formuladate',
        // 	summary: 'MAX',
        // 	formula: 'ADD_MONTHS({custrecord_cafb_sv_date},18)',
        // 	label: 'CAFB 18 Month Compliance',
        // }),
        // search.createColumn({
        // 	name: 'formuladate',
        // 	summary: 'MAX',
        // 	formula: 'ADD_MONTHS({custrecord_cafb_sv_date},24)',
        // 	label: 'FA 24 Month Compliance',
        // }),
        search.createColumn({
          name: 'custrecord_cafb_doc_expiration',
          summary: 'MAX',
          label: 'Document expiration date',
        }),
        search.createColumn({
          name: 'url',
          join: 'file',
          summary: 'GROUP',
          label: 'URL',
        }),
      ];

			if (request.parameters.internalid) {
				filters.push('and', [
					['internalid', search.Operator.IS, request.parameters.internalid],
				]);
			}

			var searchResults = search
      .create({
        type: type,
        filters: filters,
        columns: columns,
      })
      .run().getRange({start: 0, end: 1000});


      var mappedResults = searchResults.map(function (result) {

        var returnObj = {
          internalid: result.id,
          custrecord_cafb_sv_type: result.getText({
            name: 'custrecord_cafb_sv_type',
            summary: 'GROUP'
          }),
          custrecord_cafb_sv_date: result.getValue({
            name: 'custrecord_cafb_sv_date',
            summary: 'MAX'
          }),
          custrecord_cafb_doc_expiration: result.getValue({
            name: 'custrecord_cafb_doc_expiration',
            summary: 'MAX'
          }),
          file: {
            name: result.getValue({ name: 'name', join: 'file', summary: 'GROUP' }),
            url: result.getValue({ name: 'url', join: 'file', summary: 'GROUP' }),
          }
        };

        return returnObj;
      });

			return mappedResults;
		},

		getSelectOptions: function (request) {
      var documentTypeSearch = search.create({
        type: 'customlist_cafb_site_visit_type',
        columns: [{ name: 'internalId' }, { name: 'name' }],
      });
    
      documentTypeSearch.filters = [
        search.createFilter({
          name: 'isinactive',
          operator: search.Operator.IS,
          values: false,
        }),
      ];
    
      var selectOptions = [];
    
      documentTypeSearch.run().each(function(result) {
        selectOptions.push({
          internalid: result.getValue('internalId'),
          name: result.getValue('name')
        })
    
        return true;
      });
    
      return selectOptions;
		},

		post: function (request) {
			var body = JSON.parse(request.body);

			var userPreferences = record.create({
				type: 'customrecord_user_preferences',
			});

			userPreferences.setValue({
				fieldId: 'custrecord_user_preferences_owner',
				value: runtime.getCurrentUser().id,
			});

			userPreferences.setValue({
				fieldId: 'custrecord_user_preferences_type',
				value: body.type,
			});

			userPreferences.setValue({
				fieldId: 'custrecord_user_preferences_value',
				value: body.value,
			});

			return userPreferences.save();
		},

		put: function (request) {
			var body = JSON.parse(request.body);

			var userPreferences = record.load({
				type: 'customrecord_user_preferences',
				id: request.parameters.internalid,
			});

			userPreferences.setValue({
				fieldId: 'custrecord_user_preferences_type',
				value: body.type,
			});

			userPreferences.setValue({
				fieldId: 'custrecord_user_preferences_value',
				value: body.value,
			});

			return userPreferences.save();
		},

		delete: function (request) {
			return record.delete({
				type: 'customrecord_user_preferences',
				id: request.parameters.internalid,
			});
		}
	};

	return ComplianceDocumentsBackendModel;
});
