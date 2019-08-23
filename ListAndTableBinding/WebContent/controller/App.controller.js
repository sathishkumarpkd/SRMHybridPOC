sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",	
	"sap/ui/model/json/JSONModel"
], 	function(jQuery, Controller, JSONModel) {
	"use strict";

	var ListController = Controller.extend("sap.ui.demo.db.controller.App", {
		
		onPress: function (evt) {			
			this.byId("app").to(this.byId("intro"));
		},
		onInit : function (evt) {
			// set explored app's demo model on this sample
			/*var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock") + "/products.json");
			this.getView().setModel(oModel);*/
			
			/*var srmModel = new JSONModel();
			srmModel.loadData("./model/SachstammDetailsRestNew.json");
			this.getView().setModel(srmModel,"srmModel");
			console.log(srmModel);*/

			/*this.byId("ShortProductList").bindElement("srmModel>/SachstammDetails/Grunddaten");*/
		},
		onFilterInvoices: function (oEvent) {			
			var sQuery = oEvent.getParameter("query");
			if (sQuery && sQuery.length > 0) {
				console.log(sQuery);
				///////////////////Spring boot for setting SMSession Cookie//////////////////////////////////////////
				var aData1 = jQuery.ajax({
		            type: "GET",          
		            url:"proxy/http/localhost:8091/setCookie",                      
		            headers: {            	
		                "SMSESSION":"d4iyp7bJW2jhwGjQtpMvHIw4Gp7T4A+GXH1AFPu/G93gB7GLVdWPbv+yPBW0uzhzL9rN1aAQ48OYC7+m7q6SdRQTrdOwmLz++U9U9y0Z6bz3DMCgHbFVLb7MLlC3kUZ/R31kjKQBrmysiEidumZNZ9c7y9azzDcLf7aKv13clFZJt3OJOx5Da63kxQpb+TwrZT9d1HJqgPtf2M+rANfGq7BjKRWBWylh1rULKB5KAP7fPlNgJJrcnPg641pH2FzZyTJ3pTJQ3BJnKK4b84PHMqiQTN+2wtPVUBeU0KrJXz0lkIZxI/E8vIfH92nfh4jP8pb5RmdOMd38Jah10SYTgL5B37gf56PR5Flye16QbgsXeVkn8sdIUgDTcJA8uB8FfTLUoFuVFCcJ+cWLLdjAspEe+DvN4G94adMqdW/hKBFIlsYuD2K/SjOMZAV3kBFen/9+25Kjqe0ABteRV42XijS7IKGHzx7vhL8YlLCMqA3kCbDHdZ1VN5RS+Ozp4uqwFexEibh2Ok9ycU8iNC020GVdnQmHqbQE80H5idFdDi3PIVOfKZv3LDyVOfO9nr32VBAYfYDY8tLOxILvxXMMeSq4yZNpcQweVgiziGO634kNK/uP7+SUXqkbju532q4pjmaKvS9ZmHVpQVjZHSq1qd2XTsTS+VePIi6j6Pazp6sACB3JfnOMDsRHguaVBjBoCnoDpAY9tI2/t/isTSP47rvHc/iHNJ+KlAfoWTrkrdQJiBL3CMIJYLjtdIX5p/wg32nvzjnWPuKwY1VbT3USftr0IaIAEXIxxzgldWI1CE4zO0VRqXdLKQefCXnjLsZAT0lTbjI21AVCeaPbbVeBd0Cn2+qDAiqC7vE7zIKtKP4GFid4MlWOSrQG6dZMRbs8SZ4O4UMM+7fLLSiD2GSN4s9Rl+wQGNh+gix5P9eY9bxU02IQAU9oNm1ximpGSeRmQZPA+ZMfwgymTUdWsnxNsWHEliPJ+hJ2Yds6MRDisqHLIzpTWvjQphGkpq1CHYsDx0Ar7HRvTLQQyvsdqCzaGcQzFNhNmWLtPpVI3W1yiEWTYW0eXN7Xf255Pczr8faCe+BIDQyhqmf74K4zSiYo8lLPZJfBMWhebUu/KzogABMfoUac1Zc6jwrIH8+tWHavW1psPBdLGHd/jbTI0yZCKxRVbvf83n2o"          	
		            },         
		            success: function (data, textStatus, jqXHR) {   
		            	alert("success to Cookie set");            	
		            },
		            error: function (oError) {
		            	alert("Error to Cookie set");
		                console.log(oError);                
		            }
		        });		
				
				/////////////////////////////////////////////////////////////
				
				var baseUrl = "proxy/https/linkedeng-api-int.app.corpintra.net/rest/srm/v3/1.0/partdetails?Identnummer=";
				var resultUrl = baseUrl.concat(sQuery);
				console.log(resultUrl);
				
				//////////// SRM Rest call///////////////////////////////				

				var oSRMModel = new sap.ui.model.json.JSONModel();
				
				var aData = jQuery.ajax({
		            type: "GET",
		            contentType: "application/json",
		            crossDomain: true,		          
		            /*url:"proxy/https/linkedeng-api-int.app.corpintra.net/rest/srm/v3/1.0/partdetails?Identnummer=QEV111AHVAJT",*/
		            url:resultUrl,
		            xhrFields: {
		                withCredentials: true,
		                credentials:"include",
		                setDisableHeaderCheck:true
		            },
		            beforeSend: function (req) {               
		            	req.setRequestHeader("Access-Control-Allow-Origin", "*");
		            	req.setRequestHeader("Access-Control-Allow-Headers", "*");
		            	req.setRequestHeader("Access-Control-Expose-Headers", "*");
		            	req.setRequestHeader("Access-Control-Allow-Methods", "GET, POST,PUT");
		            	req.setRequestHeader("Access-Control-Allow-Credentials", "true");
		            },            
		            headers: {            	           	
		            	"Cache-Control":"no-cache",
		            	"AppToken":"1c08c471-f601-463c-a291-ff2fe70d4851#b59f99ac20f6157f01211672850000d5"
		            },           
		            dataType: "json",
		            async: true,
		            success: function (data, textStatus, jqXHR) {   
		            	alert("success to Get");            	
		            	oSRMModel.setData({
		                    modelData: data
		                });
		                sap.ui.getCore().setModel(oSRMModel, "srmModel");
		                console.log(oSRMModel);
		                //sap.ui.getCore().byId("ShortProductList").bindElement("oSRMModel>/SachstammDetails/Grunddaten");
		            },
		            error: function (oError) {
		                console.log(oError);
		                alert("Error to Get");
		            }
		        });			
				this.byId("ShortProductList").bindElement("srmModel>/SachstammDetails/Grunddaten");
			//////////// POC for SRM Rest ///////////////////////////////		
			}
		}// end of onFilterInvoices
		
	});
	return ListController;

});