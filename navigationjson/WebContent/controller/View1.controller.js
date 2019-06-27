sap.ui.define([
	"sap/ui/core/mvc/Controller"

], function(Controller) {
	"use strict";

	return Controller.extend("navigationjson.controller.View1", {
		onInit: function() {
			/*this below code for get the JSON Model form Manifest.json file*/
			var dataModel = this.getOwnerComponent().getModel("tableData");
			this.getView().setModel(dataModel, "DataModel");
			
			/*this below code for get the JSON Model form Manifest.json file*/
			var weatherModel = this.getOwnerComponent().getModel("weather");
			//console.log(weatherModel)
			this.getView().setModel(weatherModel, "weatherDataModel");
			
			var srmModel = this.getOwnerComponent().getModel("srmModel");
			console.log(srmModel)
			this.getView().setModel(srmModel, "srmDataModel");

		},
		onPress: function () {
			//MessageToast.show("Hello UI5!");
			this.byId("app").to(this.byId("intro"));
		},
		formatStockValue: function(fUnitPrice, iStockLevel, sCurrCode) {
			var sBrowserLocale = sap.ui.getCore().getConfiguration().getLanguage();
			var oLocale = new Locale(sBrowserLocale);
			var oLocaleData = new LocaleData(oLocale);
			var oCurrency = new Currency(oLocaleData.mData.currencyFormat);
			return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");
		},
		/*this below code for click on row the the page will navigate to next View*/
		/*onPress: function(oEvent) {
			var spath = oEvent.getSource().getBindingContext("DataModel").getPath();
			console.log(spath);
			var selectedPath = JSON.stringify(oEvent.getSource().getBindingContext("DataModel").getProperty(spath));
			console.log(selectedPath);
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View2", {
				"selectedobj": selectedPath
			});
		},*/
		/*this below code for selected the row data and then navigate to next View */
		onselectionChange: function() {
			var contexts = this.getView().byId("table1").getSelectedContexts();
			var items = contexts.map(function(c) {
				return c.getObject();
			});
			var selectedItems = JSON.stringify(items);
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo( "View2", {"selectedobj": selectedItems} );
		}
	});

});