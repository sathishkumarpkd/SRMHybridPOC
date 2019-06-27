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
		
		var oWeatherModel = new JSONModel();
		console.dir(oWeatherModel);
		oWeatherModel.loadData("http://api.openweathermap.org/data/2.5/weather?q=London,uk&mode=json&units=metric&callback=?&APPID=98889cbd029f06ac7ad810ad72b5ac64");
		sap.ui.getCore().setModel(oWeatherModel, "weatherDataModel");	
	/**
	 * ===============================================First try ================
	 */	
		
//		var oSrmModel = new JSONModel("https://linkedeng-api-int.app.corpintra.net/rest/srm/v3/partdetails?Identnummer=QEV111AHVAJT" ,{				
//			"Cookie":"SMSESSION=9JKMwccd54c8WNMEpxbT4T/HqLnfB6/QgNXdrmvgpKxKRND0Hwrp59BSE2fOwIOE82bpwI0avQ1IkjwywM/PHx2y64flvn0ko5lq3b+nuC4/w4Hpf74HrEPIlYOLS3szrcavBd/UeZCufvxgFq3VE0ObAhAitGcr3r9Zf3nxaRKTDR9yUAarKrQuJ5Gowpfx62MDSCqYe7Tt8Qv24u/DNQpcOz+FLgyIicpQOPjj0FTt4ppv8ODkGzHQ4U/ijQsrBuc+16DgIt42H3sslfUFS35gbBcBWZX+7HHTUHrd6srNXTAvlvmwTYEhEvuh2D5D2/wJ42ViXKLaSbyBtmcNjJUpgJPPIG7d2aY0YQ7UGX7diaZnAdB+UdxIlJrFSvQXYf6OhKeXhN1DvsMMuPvbo7CsZBylywJSiaqcKXobvQ6dALs3PB+cr7qJct9H1Fr7xFuh2EeXm3mFoKG4Mcb+R2ouVDCxc3LLdbyfbzf8TPys2i/iMzISDYUdqmeJlxgavC//i/OJ8OonkouNtEIYQsgpHoe51Dk1ujJfWMb4LG4dth+Ezi798Si4CO1DhrXrgQpQiihfqIAEA11jXnXqAxAMC2hzfoHIBGTi9g6bQc6+RilbBRXjpso1vmzLXFRYjnIJ8eWwprqPXP69UEZFT0zArOkgso/zwr15NqvXKza7LXQr5DYYb988Kw0x05wXAOEboFsJdUiUFFjJ70J7+w4STr+aW+QWd6u6vWPMBhjJ6fC8VwnCyPIM9Re8k6bymMVqiGHbjRF4/H/0s+87cEsliOkcOwUfSx3M22NqD8AJ44TueivjaB2mVUaoS1mdbwlO9Mtx+4dwAcfdvE7B1SRKwQgJl+xhmeOuwiwuvA7UHoJRHmhVlsysOx/wC6gdqPFpcjFXB5MokjldZ/LZm0v+Ml2Y+BQxu1qeV/A01zumCAghdUOrNPTZxFAjgph0wFuvaYm/Q4bszVcDPc8Z6b2FlcLo0xiVw4/kbvim00f/ZJJJALMC2bLEc4wuSxHxSqdkYz5qtluqIT2dU2TtWSdB0SLq2DPSYTswHbz4/sRgqZlXOhXmKxnucNTtDFOFH3LB6qC3PAs+q8XAJC5HA/bjhHLBGHOU3KFmx7BcoXuzqLVMchygtI4oRF1/8yMjQG9HrWugOkUMsVqqj8U/6AxoRWC4J16O",
//			"AppToken":"1c08c471-f601-463c-a291-ff2fe70d4851#b59f99ac20f6157f01211672850000d5"			
//		});
		
		/**
		 * ===============================================Second Try ================
		 */	
		
/*		var oSrmModel = new sap.ui.model.json.JSONModel();
			
		oSrmModel.setHeaders({
			"Cookie":"SMSESSION=/F7BzipoiXrVtEG9qD4a7Zpt9lgyDAxa2hap9mjUflUjQNsBIeKkcRoC1DMRc5nVSHCbeT8RWEWTd7/kAeVD61/mmk1//5eyGyc1fx4129ghm1NNBuUeHtW6Aa+zwS1W/gVMJn6eEc44zsGEcpOKYc0Y0Y3wZ5ZzhZIbASXJIPq0eqs30KKw8kBmFMiIoK/whNxAYiBe72decs1q1Tm8nAECJJT4fQ8J2zBM064B5C7Y8DmZ/3XjGy4pKO/t3Ook8nDkFXidgXU8eAjEdMlbban8me6PRonwT0gsVYmvFPbBXkKWvPxakf+aGdmieFrCphV/2vRiTsLyK0RH6TWlOC1InwHA7tvsE1McewQFBccuUpTXA2qRk1aR0+tiORQJaw8JAwp36louP5hIHHhByNEw3zmY8OF80xhw30XOeFrIi0gOgiUX0Jgjua8vAOjyNU9nUSW5Bku2HtcD2sB0uFlOqNbO+a+tWb1fXyHzkbO2IhI9qlAAkjqoJxRWPPciN9aCueLO6bs8nfBGcVvCzZj5ylLEln2UuUpgVDBvIRXHFyKDiEnU4LwasWcTFZY2ZcgetQBQ+J32GZ4OyVQTvPcSwgiN9fQXlaXtWSLlF3nSmrbVgtY/ujobGHYzzCsuhD5Mkg1J8BnGV0yhyx0rZSpcx7LPBOfGklGYwUfSAwWgIH5jF81XTmE+ioudp6IDPq4qwBB+9eIYDhpPF53zefVsf8jGsIoIRfKpmII/5QhkbDuhKR5s3iDxPCPcm6fRb2OdzHWGfrUia6Uy+20N3riQKCiHKHKM9T4NxQQlxqNOAJW2Ojmi5jeULM1MQfO5ZDtV72RroDZYU/Ds+B6geB1gkc28xom8lAhRmgf1pz4oWCoZim2YrHUJ7SyQZ5rI0VoN2qFijMz/y1bFP+TdPpZf5kUihCZhpg7PA/yqJrcd9iSWybB/llRmxnVLhbosupAS4tPfibXfH0uU5l0gMbFbJ33L09WUdm8/NGGRIwmtYraCBmKSNOL2FXCvZErvo0vHq52O04JU2V2BrVJCS3vPhS1+sIfBcQJK4mdDML8CVp91uADKXDuCYMsVUiro/wfy0a77stGchVgouBzEqBD/2ULiSZz7dsIrcuA0jsMUAqW66Y7GJ5k4u5+kniRkIr6I7GaziuU9nTNuYgYwHW6OQ3JSR1e3",
			"AppToken":"1c08c471-f601-463c-a291-ff2fe70d4851#b59f99ac20f6157f01211672850000d5"			
			
		});
		
		oSrmModel.loadData("https://linkedeng-api-int.app.corpintra.net/rest/srm/v3/partdetails?Identnummer=QEV111AHVAJT");*/
		
		/**
		 * ===============================================Third try ================
		 */	
		
/*		var oSrmModel = new sap.ui.model.json.JSONModel();
		oSrmModel.setData({
			"Cookie":"SMSESSION=/F7BzipoiXrVtEG9qD4a7Zpt9lgyDAxa2hap9mjUflUjQNsBIeKkcRoC1DMRc5nVSHCbeT8RWEWTd7/kAeVD61/mmk1//5eyGyc1fx4129ghm1NNBuUeHtW6Aa+zwS1W/gVMJn6eEc44zsGEcpOKYc0Y0Y3wZ5ZzhZIbASXJIPq0eqs30KKw8kBmFMiIoK/whNxAYiBe72decs1q1Tm8nAECJJT4fQ8J2zBM064B5C7Y8DmZ/3XjGy4pKO/t3Ook8nDkFXidgXU8eAjEdMlbban8me6PRonwT0gsVYmvFPbBXkKWvPxakf+aGdmieFrCphV/2vRiTsLyK0RH6TWlOC1InwHA7tvsE1McewQFBccuUpTXA2qRk1aR0+tiORQJaw8JAwp36louP5hIHHhByNEw3zmY8OF80xhw30XOeFrIi0gOgiUX0Jgjua8vAOjyNU9nUSW5Bku2HtcD2sB0uFlOqNbO+a+tWb1fXyHzkbO2IhI9qlAAkjqoJxRWPPciN9aCueLO6bs8nfBGcVvCzZj5ylLEln2UuUpgVDBvIRXHFyKDiEnU4LwasWcTFZY2ZcgetQBQ+J32GZ4OyVQTvPcSwgiN9fQXlaXtWSLlF3nSmrbVgtY/ujobGHYzzCsuhD5Mkg1J8BnGV0yhyx0rZSpcx7LPBOfGklGYwUfSAwWgIH5jF81XTmE+ioudp6IDPq4qwBB+9eIYDhpPF53zefVsf8jGsIoIRfKpmII/5QhkbDuhKR5s3iDxPCPcm6fRb2OdzHWGfrUia6Uy+20N3riQKCiHKHKM9T4NxQQlxqNOAJW2Ojmi5jeULM1MQfO5ZDtV72RroDZYU/Ds+B6geB1gkc28xom8lAhRmgf1pz4oWCoZim2YrHUJ7SyQZ5rI0VoN2qFijMz/y1bFP+TdPpZf5kUihCZhpg7PA/yqJrcd9iSWybB/llRmxnVLhbosupAS4tPfibXfH0uU5l0gMbFbJ33L09WUdm8/NGGRIwmtYraCBmKSNOL2FXCvZErvo0vHq52O04JU2V2BrVJCS3vPhS1+sIfBcQJK4mdDML8CVp91uADKXDuCYMsVUiro/wfy0a77stGchVgouBzEqBD/2ULiSZz7dsIrcuA0jsMUAqW66Y7GJ5k4u5+kniRkIr6I7GaziuU9nTNuYgYwHW6OQ3JSR1e3",
			"AppToken":"1c08c471-f601-463c-a291-ff2fe70d4851#b59f99ac20f6157f01211672850000d5"
		});
		oSrmModel.loadData("https://linkedeng-api-int.app.corpintra.net/rest/srm/v3/partdetails?Identnummer=QEV111AHVAJT");		
		sap.ui.getCore().setModel(oSrmModel, "srmDataModel");		
		console.log(oSrmModel);*/
		
		/**
		 * ===============================================Fourth try ================
		 */	
		var uri = "https://linkedeng-api-int.app.corpintra.net/rest/srm/v3/partdetails/";
		var headers = {	                
				 "Cookie":"SMSESSION=/F7BzipoiXrVtEG9qD4a7Zpt9lgyDAxa2hap9mjUflUjQNsBIeKkcRoC1DMRc5nVSHCbeT8RWEWTd7/kAeVD61/mmk1//5eyGyc1fx4129ghm1NNBuUeHtW6Aa+zwS1W/gVMJn6eEc44zsGEcpOKYc0Y0Y3wZ5ZzhZIbASXJIPq0eqs30KKw8kBmFMiIoK/whNxAYiBe72decs1q1Tm8nAECJJT4fQ8J2zBM064B5C7Y8DmZ/3XjGy4pKO/t3Ook8nDkFXidgXU8eAjEdMlbban8me6PRonwT0gsVYmvFPbBXkKWvPxakf+aGdmieFrCphV/2vRiTsLyK0RH6TWlOC1InwHA7tvsE1McewQFBccuUpTXA2qRk1aR0+tiORQJaw8JAwp36louP5hIHHhByNEw3zmY8OF80xhw30XOeFrIi0gOgiUX0Jgjua8vAOjyNU9nUSW5Bku2HtcD2sB0uFlOqNbO+a+tWb1fXyHzkbO2IhI9qlAAkjqoJxRWPPciN9aCueLO6bs8nfBGcVvCzZj5ylLEln2UuUpgVDBvIRXHFyKDiEnU4LwasWcTFZY2ZcgetQBQ+J32GZ4OyVQTvPcSwgiN9fQXlaXtWSLlF3nSmrbVgtY/ujobGHYzzCsuhD5Mkg1J8BnGV0yhyx0rZSpcx7LPBOfGklGYwUfSAwWgIH5jF81XTmE+ioudp6IDPq4qwBB+9eIYDhpPF53zefVsf8jGsIoIRfKpmII/5QhkbDuhKR5s3iDxPCPcm6fRb2OdzHWGfrUia6Uy+20N3riQKCiHKHKM9T4NxQQlxqNOAJW2Ojmi5jeULM1MQfO5ZDtV72RroDZYU/Ds+B6geB1gkc28xom8lAhRmgf1pz4oWCoZim2YrHUJ7SyQZ5rI0VoN2qFijMz/y1bFP+TdPpZf5kUihCZhpg7PA/yqJrcd9iSWybB/llRmxnVLhbosupAS4tPfibXfH0uU5l0gMbFbJ33L09WUdm8/NGGRIwmtYraCBmKSNOL2FXCvZErvo0vHq52O04JU2V2BrVJCS3vPhS1+sIfBcQJK4mdDML8CVp91uADKXDuCYMsVUiro/wfy0a77stGchVgouBzEqBD/2ULiSZz7dsIrcuA0jsMUAqW66Y7GJ5k4u5+kniRkIr6I7GaziuU9nTNuYgYwHW6OQ3JSR1e3",
				 "AppToken":"1c08c471-f601-463c-a291-ff2fe70d4851#b59f99ac20f6157f01211672850000d5",
				 
				 "Access-Control-Allow-Origin": "*",
				 "Content-Type":"application/json",
				  "Accept": "application/json",
				  "Access-Control-Allow-Credentials" :"true",
				  "Access-Control-Allow-Headers":"*",				 
				  "Access-Control-Allow-Methods": "'HEAD', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'",
				  "withCredentials":"true"
				 
				 
				 
				// "Access-Control-Allow-Origin":"*",
			/*	 "Access-Control-Allow-Methods": "HEAD, GET, POST, PUT, PATCH, DELETE",
				 "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"*/
	    };
		
		console.log("Try comunicating the first time");
		
		var oModel = new sap.ui.model.odata.ODataModel(uri,true);
		oModel.setHeaders(headers);
		console.dir(oModel);
		oModel.read( {
			success: function(oData,response){
				console.log("Try comunicating the first time: success");
				console.log(response);
			},
			error : function(oData,response){
				console.log("Try comunicating the first time : Failed");
				console.log(response);
			}			
		});

		
		
		/**
		 * ===============================================
		 */	
		
		

		var oModel = new JSONModel({
			firstName: "Harry",
			lastName: "Hawk",
			enabled: true,
			address: {
				street: "Dietmar-Hopp-Allee 16",
				city: "Walldorf",
				zip: "69190",
				country: "Germany"
			},
			"salesToDate": 12345.6789,
			"currencyCode": "EUR"
		});

		// Assign the model object to the SAPUI5 core
		sap.ui.getCore().setModel(oModel);

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