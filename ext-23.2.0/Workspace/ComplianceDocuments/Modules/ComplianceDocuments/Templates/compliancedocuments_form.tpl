<div class="alert-placeholder" data-type="alert-placeholder"></div>
<form class="compliancedocuments-form">
  <fieldset>
    <small>Required <span class="compliancedocuments-form-required">*</span></small>
    <div class="compliancedocuments-form-control-group" data-validation="control-group">
      <label for="type">
        {{translate 'Document Type'}}
        <small class="compliancedocuments-form-required">*</small>
      </label>
      <div data-validation="control">
        <select class="compliancedocuments-form-select" name="type" id="type">
          <option selected default disabled>Please select a document type</option>
          {{#each typeOptions}}
          <option value="{{internalid}}" {{#ifEquals internalid ../model.type}}selected{{/ifEquals}}>{{name}}</option>
          {{/each}}
        </select>
      </div>
    </div>

    <div class="compliancedocuments-form-control-group" data-validation="control-group">
      <label for="file">
        {{translate 'File'}}
        <small class="compliancedocuments-form-required">*</small>
      </label>
      <div data-validation="control">
        <input class="compliancedocuments-form-input" type="file" name="file" id="file">
      </div>
    </div>
  </fieldset>
  <div class="compliancedocuments-form-control-group">
    <button class="compliancedocuments-form-submit" type="submit">{{translate 'Upload'}}</button>
  </div>
</form>
<div class="clearfix"></div>