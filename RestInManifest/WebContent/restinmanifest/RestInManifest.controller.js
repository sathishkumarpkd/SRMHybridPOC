sap.ui.define([
	"sap/ui/core/mvc/Controller"

], function(Controller) {
	"use strict";

	return Controller.extend("RestInManifest.restinmanifest.RestInManifest", {		
		onPress: function () {
			MessageToast.show("Hello UI5!");			
		},

	});

});