sap.ui.require([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/model/resource/ResourceModel"
], function (JSONModel, XMLView, ResourceModel) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
		var oProductModel = new JSONModel();
		oProductModel.loadData("./model/Products.json");
		sap.ui.getCore().setModel(oProductModel, "products");
		
		let personModel = {
				firstName: "Ralf",				
				enabled: false,
				address: {
					street: "Hanns-Klemm-Str. 5",
					city: "Böblingen",
					zip: "71034",
					country: "Germany"
				},
				"salesToDate": 12345.6789,
				"currencyCode": "EUR"
			};
		
		// adding new property and values to the person object 
		personModel.lastName = "Denningmann";

		let oModel = new JSONModel(personModel);

		// Assign the model object to the SAPUI5 core
		sap.ui.getCore().setModel(oModel);
		
		// for srm part details model.
		var srmModel = new JSONModel();
		srmModel.loadData("./model/getSachstammDetailsRestService.json");
		//sap.ui.getCore().setModel(srmModel, "getSachstammDetailsRestService");
		sap.ui.getCore().setModel(srmModel,"srmModel");

		var oResourceBundle = new ResourceModel({
			bundleName: "sap.ui.demo.db.i18n.i18n"
		});

		sap.ui.getCore().setModel(oResourceBundle, "i18n");

		// Display the XML view called "App"
		var oView = new XMLView({
			viewName: "sap.ui.demo.db.view.App"
		}).placeAt("content");

		// Register the view with the message manager
		sap.ui.getCore().getMessageManager().registerObject(oView, true);

		// Insert the view into the DOM
		oView.placeAt("content");
	});
});