define('MyDocs.Entrypoint', [
  'MyDocs.List.View',
  'MyDocs.Upload.View'
], function (
  MyDocsListView,
  MyDocsUploadView
) {
	'use strict';

	return {
		mountToApp: function mountToApp(container) {

      const pageTypeComponent = container.getComponent('PageType');
      const myAccountMenu = container.getComponent('MyAccountMenu');

      if (pageTypeComponent && myAccountMenu) {

        // register the My Documents listing page
        pageTypeComponent.registerPageType({
          name: 'MyDocumentsList',
          routes: ['my-documents'],
          view: MyDocsListView,
          defaultTemplate: {
            name: 'mydocs_list.tpl',
            displayName: 'My Documents'
          },
        });

        // register the My Documents upload page
        pageTypeComponent.registerPageType({
          name: 'MyDocumentsUpload',
          routes: ['my-documents/upload'],
          view: MyDocsUploadView,
          defaultTemplate: {
            name: 'mydocs_upload.tpl',
            displayName: 'Upload a Document',
          },
        });

        // add My Documents link to the menu
        myAccountMenu.addGroup({
          id: 'mydocumentslist',
          name: 'My Documents',
          index: 99,
          url: 'my-documents'
        });
      }

		},
	};
});
