sap.ui.controller("view.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.check
*/
	onInit: function() {
		// Refresh model
		var sUrl = "mock_data.json";
		
		jQuery.ajax({
			type    : "GET",
			dataType: "json",
			url     : sUrl,
			context : this,
			error   : function(jqXHR, textStatus, errorThrown) {
				var sMessage = jqXHR.status + " " + jqXHR.statusText + " " + jqXHR.responseText;
				jQuery.sap.log.error("Data loading", sMessage, "index.html");
				sap.m.MessageToast.show(sMessage)				
			},
			success : function(oData, textStatus, jqXHR) {
				if (oData === null || oData === undefined) {
					var sMessage = "WARNING. Received a null or undefined response object.";
					jQuery.sap.log.warning("Data loading", sMessage, "index.html");
					sap.m.MessageToast.show(sMessage);
					return;
				}			
				
				var oModel = new sap.ui.model.json.JSONModel(oData);
			  var oList = this.byId("list");
        oList.setModel(oModel);
        
        var oListNamedModel = this.byId("listNamedModel");
        oListNamedModel.setModel(oModel, "model");

        var oTable = this.byId("table");
        oTable.setModel(oModel);

        var oTableNamedModel = this.byId("tableNamedModel");
        oTableNamedModel.setModel(oModel, "model");
			}
		});
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf publicis_userchecker.check
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf publicis_userchecker.check
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf publicis_userchecker.check
*/
//	onExit: function() {
//
//	}

});