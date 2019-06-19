sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",	
	"navigationjson/model/models",
	"sap/ui/model/json/JSONModel"

], function(UIComponent, Device, models, JSONModel) {
	"use strict";

	return UIComponent.extend("navigationjson.Component", {

		metadata : {
			manifest : "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup
		 * of the app and calls the init method once.
		 * 
		 * @public
		 * @override
		 */
		init : function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			/** *Create the model and load data from the local JSON file ** */
			// var oModel = new JSONModel("./model/Object.json");
			// oModel.setDefaultBindingMode("OneWay");
			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			this.getRouter().initialize();
		}
	});

});