sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/library",	
	"sap/ui/core/Locale",
	"sap/ui/core/LocaleData",
	"sap/ui/model/type/Currency",
	"sap/ui/model/json/JSONModel"
], function (Controller, mobileLibrary, Locale, LocaleData, Currency) {
	"use strict";

	return Controller.extend("sap.ui.demo.db.controller.App", {
		
		onInit: function() {			
			//var srmModel = this.getOwnerComponent().getModel("srmModel");
			//console.log(srmModel)
			//this.getView().setModel(srmModel, "srmDataModel");
			
			var srmModel = sap.ui.getCore().getModel("srmModel");
			console.log(srmModel);
			//var jsonModel = new sap.ui.model.json.JSONModel();
			//jsonModel.setJSON(srmModel);
			//var name1 = srmModel.getSachstammDetailsResponse.container.object.object.object[1].object[1].@name;
			//var propName = jsonModel.getProperty("/getSachstammDetailsResponse/container/object/object/object[1]/object[1]/@name");
			//console.log("jsonModel propName: "+propName);

		},		
		logSRMModel: function(srmModel) {
			console.log(srmModel);
			return "Print srmModel";
		},
		formatStockValue: function(fUnitPrice, iStockLevel, sCurrCode) {
			var sBrowserLocale = sap.ui.getCore().getConfiguration().getLanguage();
			var oLocale = new Locale(sBrowserLocale);
			var oLocaleData = new LocaleData(oLocale);
			var oCurrency = new Currency(oLocaleData.mData.currencyFormat);
			return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");
		},
		onPress: function () {			
			this.byId("app").to(this.byId("intro"));
		}
	});
});