<div class="alert-placeholder" data-type="alert-placeholder"></div>
<form class="mydocs-form">
  <fieldset>
    <small>Required <span class="mydocs-form-required">*</span></small>
    <div class="mydocs-form-control-group" data-validation="control-group">
      <label for="file">
        {{translate 'file'}}
        <small class="mydocs-form-required">*</small>
      </label>
      <div data-validation="control">
        <select class="mydocs-form-select" name="type" id="type">
          {{#each typeOptions}}
          <option value="{{internalid}}" {{#ifEquals internalid ../model.type}}selected{{/ifEquals}}>{{name}}</option>
          {{/each}}
        </select>
      </div>
    </div>

    <div class="mydocs-form-control-group" data-validation="control-group">
      <label for="value">
        {{translate 'Value'}}
        <small class="mydocs-form-required">*</small>
      </label>
      <div data-validation="control">
        <input class="mydocs-form-input" type="text" name="value" id="value" value="{{model.value}}">
      </div>
    </div>
  </fieldset>
  <div class="mydocs-form-control-group">
    <button class="mydocs-form-submit" type="submit">{{translate 'Upload'}}</button>
  </div>
</form>