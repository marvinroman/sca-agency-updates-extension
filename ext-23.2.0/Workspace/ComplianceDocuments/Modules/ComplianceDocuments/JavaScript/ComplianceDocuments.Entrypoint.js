define('ComplianceDocuments.Entrypoint', [
  'ComplianceDocuments.List.View',
  'ComplianceDocuments.Upload.View'
], function (
  MyDocsListView,
  MyDocsUploadView
) {
	'use strict';

	return {
		mountToApp: function mountToApp(container) {

      var pageTypeComponent = container.getComponent('PageType');
      var myAccountMenu = container.getComponent('MyAccountMenu');

      if (pageTypeComponent && myAccountMenu) {

        // register the My Documents listing page
        pageTypeComponent.registerPageType({
          name: 'MyDocumentsList',
          routes: ['compliance-documents'],
          view: MyDocsListView,
          defaultTemplate: {
            name: 'compliancedocuments_list.tpl',
            displayName: 'Compliance Documents'
          },
        });

        // register the My Documents upload page
        pageTypeComponent.registerPageType({
          name: 'MyDocumentsUpload',
          routes: ['compliance-documents/upload'],
          view: MyDocsUploadView,
          defaultTemplate: {
            name: 'compliancedocuments_upload.tpl',
            displayName: 'Upload a Document',
          },
        });

        // add My Documents link to the menu
        myAccountMenu.addGroup({
          id: 'compliancedocumentslist',
          name: 'Compliance Documents',
          index: 99,
          url: 'compliance-documents'
        });
      }

		},
	};
});
