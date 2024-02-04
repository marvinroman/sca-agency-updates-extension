<section class="mydocs-list">
  <header class="mydocs-list-header">
    <h2 class="mydocs-list-title">{{translate 'My Documents'}}</h2>
    <a class="mydocs-list-button-new" href="my-documents/upload" data-toggle="show-in-modal">{{translate 'Upload a Document'}}</a>
  </header>
  <table class="mydocs-list-table">
    <thead class="mydocs-list-table-header">
        <tr class="mydocs-list-table-row">
            <th class="mydocs-list-table-header-title">{{translate 'Document Name'}}</th>
            <th class="mydocs-list-table-header-document-date">{{translate 'Document Type'}}</th>
            <th class="mydocs-list-table-header-document-date">{{translate 'Document Date'}}</th>
            <th class="mydocs-list-table-header-expiration-date">{{translate 'Expiration Date'}}</th>
            <!-- <th class="mydocs-list-table-header-delete">{{translate 'Delete'}}</th> -->
        </tr>
    </thead>
    <tbody data-view="MyDocs.Collection.View"></tbody>
  </table>
</section>

<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->