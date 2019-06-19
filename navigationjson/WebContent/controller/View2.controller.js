sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("navigationjson.controller.View2", {
		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("View2").attachMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function(oEvent) {
			var selectedArguments = oEvent.getParameter("arguments");
			var selectedRecord = JSON.parse(selectedArguments.selectedobj);
		
			var obj = {
				"Objects": selectedRecord
			};
			var navigationobjModel = new JSONModel();
			navigationobjModel.setData(obj);
			this.getView().setModel(navigationobjModel, "navigationModel");
		},
		onNavBack: function() {
			window.history.go(-1);
		}

	});

});