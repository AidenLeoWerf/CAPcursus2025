//@ui5-bundle aiden/lw/lwticketservice06/Component-preload.js
sap.ui.require.preload({
	"aiden/lw/lwticketservice06/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("aiden.lw.lwticketservice06.Component",{metadata:{manifest:"json"}})});
},
	"aiden/lw/lwticketservice06/i18n/i18n.properties":'# This is the resource bundle for aiden.lw.lwticketservice06\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Ticketservice van Leo\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\n#XFLD,45\nticketservice06-display.flpTitle=Display tickets\n',
	"aiden/lw/lwticketservice06/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"aiden.lw.lwticketservice06","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.17.1","toolsId":"3912b3d4-2144-4cc7-81b9-ca01a52866e5"},"dataSources":{"mainService":{"uri":"odata/v4/catalog/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"ticketservice06-display":{"semanticObject":"ticketservice06","action":"display","title":"{{ticketservice06-display.flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.134.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"aiden.lw.lwticketservice06.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"ProjectsList","target":"ProjectsList"},{"pattern":"Projects({key}):?query:","name":"ProjectsObjectPage","target":"ProjectsObjectPage"}],"targets":{"ProjectsList":{"type":"Component","id":"ProjectsList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Projects","variantManagement":"Page","navigation":{"Projects":{"detail":{"route":"ProjectsObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"ProjectsObjectPage":{"type":"Component","id":"ProjectsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Projects"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"}}'
});
//# sourceMappingURL=Component-preload.js.map
