sap.ui.jsview("srmpartdetailsproject.SRMPartDetails", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf srmpartdetailsproject.SRMPartDetails
	*/ 
	getControllerName : function() {
		return "srmpartdetailsproject.SRMPartDetails";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf srmpartdetailsproject.SRMPartDetails
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Title",
			content: [	]
		});
	}

});