define('ComplianceDocuments.Form.View', [
	'Backbone',
	'SCFormView',
	'ComplianceDocuments.Helper',
	'Utils',
	'compliancedocumentsform.tpl',
], function (
	Backbone,
	SCFormViewModule,
	MyDocsHelper,
	Utils,
	compliancedocumentsform_tpl
) {
	'use strict';

	var SCFormView = SCFormViewModule.SCFormView;

	function MyDocsFormView(options) {
		SCFormView.call(this, options.model);

		this.formModel.on('sync', function () {
			Backbone.history.navigate('compliance-documents', { trigger: true });
		});

		this.template = compliancedocumentsform_tpl;
	}

	MyDocsFormView.prototype = Object.create(SCFormView.prototype);
	
  MyDocsFormView.prototype.constructor = MyDocsFormView;

	MyDocsFormView.prototype.getEvents = function () {
		return {
			'submit form': 'saveForm',
			'blur :input': 'onFormFieldChange',
		};
	};

	MyDocsFormView.prototype.saveForm = function (e) {
		e.preventDefault();

		var promise = SCFormView.prototype.saveForm.call(this, e);

		return promise;
	};

	MyDocsFormView.prototype.getFormFieldValue = function (input) {
		var field = {
			name: input.attr('name'),
			value: input.val(),
		};

		if (!this.formModel.validate(field)) {
			SCFormView.prototype.removeErrorMessage.call(this, field.name);
		}

		return field;
	};

	MyDocsFormView.prototype.getFormValues = function (form) {
		var formValues = form.serializeObject();

		return {
			type: formValues.type,
			value: formValues.value,
		};
	};

	MyDocsFormView.prototype.getContext = function () {
		return {
			model: this.formModel,
			typeOptions: MyDocsHelper.getTypeOptions(),
		};
	};

	return MyDocsFormView;
});