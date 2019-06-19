sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {
		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			console.log("loading model....");
			console.log(oModel);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}
	};
});