define('ComplianceDocuments.Form.View', [
	'Backbone',
	'SCFormView',
	'Utils',
	'compliancedocuments_form.tpl',
], function (
	Backbone,
	SCFormViewModule,
	Utils,
	compliancedocuments_form_tpl
) {
	'use strict';

	var SCFormView = SCFormViewModule.SCFormView;

	function MyDocsFormView(options) {
		SCFormView.call(this, options.model);

		this.formModel.on('sync', function () {
			Backbone.history.navigate('compliance-documents', { trigger: true });
		});

		this.template = compliancedocuments_form_tpl;

    this.selectOptions = [];

    for (let prop in options.model.attributes) {
      this.selectOptions.push(options.model.attributes[prop])
    }

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
			typeOptions: this.selectOptions,
		};
	};

	return MyDocsFormView;
});