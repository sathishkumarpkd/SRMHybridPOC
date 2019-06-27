sap.ui.require([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/model/resource/ResourceModel"
], function (JSONModel, XMLView, ResourceModel) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
		
		//////////// POC for SRM Rest ///////////////////////////////
		
		//avoid cors issue from chrome.
		// C:\Program Files (x86)\Google\Chrome\Application>chrome.exe  --disable-web-security --disable-gpu --user-data-dir=%LOCALAPPDATA%\Google\chromeTemp
		
		//var that = this;
		var oSRMModel = new sap.ui.model.json.JSONModel();
		
		var aData = jQuery.ajax({
            type: "GET",
            contentType: "application/json",
            crossDomain: true,
            url: "https://linkedeng-api-int.app.corpintra.net/rest/srm/v3/partdetails?Identnummer=QEV111AHVAJT",
            xhrFields: {
                withCredentials: true,
                setDisableHeaderCheck:false
            },
            beforeSend: function (req) {               
                req.setRequestHeader('Access-Control-Allow-Origin', '*');
            },
            headers: {
                "Cookie":"SMSESSION=48yuj97rYlVfmkYRMndXbu5BxH0jzW77Kty0DmpsWjw8Gs8OQzqXO/SVs/BxedCq6r6pzExC5fhSrMlkdl+FXDZoaWOKdbl5yUbqMNUKEVZILhdY2Dao0w8ea0R5kI4JsgMhPV/FcMPS7aC0YMn6FGcSiPkxPSKC60mRRq3Wg70l/K3TErMhm0sympLs6AC+joKmjzkLdlxoJPGG5xai2MfykKgMlT5s39GBGNnFDfTNrZHohD1eAMT+V5B/uqZ8JC938O8N7ZtsF6qBgcFnU08T9NjCsxRfS0VHvNIB917YYY84zZw/w37ClNgGpz2VMjOwQCIlnqveP5NDDFt7GI7YYAdpsiC/2UlNZ8OiEJ6Qc3nSzN7QgzrvdMu5QwygvDsqxE4Qkb/zBK0+mlX0mV/ChOyFuFMDCaAhb0iZxlR2r9h1fn9kBcE/O3T3M6vTUNiYbOY1N9k9DnhIAU6X29xmihIWmYJBgoA/SuJ0IpYmwUFdKKE6k2Rem3II/8A+Z1XqLApqAj7llxwzNBiByLXIB8dutKfkAzCRDogXAWKXebl0r1TSbg374mDvniAuS2vOwOA/OxOKGIe9X+SaE8aabRusTtTdYGMLY5HUpXgp2b+94md6OJ62ZTBbiWH/OPGAFIHMveJQY3tKLlUidiaXZ+xCn4jPqpxLMvw3VOOnFh9cInhcVO/acmIfEG0EK6ISPlXCF8JzNY/1/gf3EKiNix5dSbs2FXqyCEjnuA+6yDQXQ5LcE6BFqaZHRG83OIejedbfWeAd/GYYLJCqfLBUwtlOJbzTi+IUK/9EknorhFxcDD2130VfQAdpV7ZX4mXWWyx4xMZRyZuB2C3JE0Pa9WjUitXVj7qjmnxrZG1gwgnfZLqL0ukY2qZu5OwzoPkCoO99JJ3n+VOwFazbCX0znOEOLeGXRfu7RYbsEbOLGGG5j1h9lF+PCrWoHTdKVCp0/a0MNoeEHD2DIAbqq2CNlPYhQyVaGFza8D2PDUJXsO3dWqQcoReEKw2Fn3jzmZMKQPNVxmhfGj7/cSNg/4VJLr23P+/7OLE6mixnYIG5KciCmYiY9/u2tmm8xze1JNUmUhG8WJ3hAL101ntstYV5AHzd01ud/bRQb4UNYPDdX5eGrRPq4nznQH6w4ocU3+lnsGvWsVbIBKmE2HMdb5tslGn43J+E",           	
            	"AppToken":"1c08c471-f601-463c-a291-ff2fe70d4851#b59f99ac20f6157f01211672850000d5"
            },           
            dataType: "json",
            async: false,
            success: function (data, textStatus, jqXHR) {            	
            	//var oModel = that.getView().getModel(); // get your model, instatiated outside this method
            	oSRMModel.setData({
                    modelData: data
                });
                alert("success to Get");
            },
            error: function (oError) {
                console.log(oError);
                alert("Error to Get");
            }
        });
		
		sap.ui.getCore().setModel(oSRMModel, "oSRMModel");
		//return oSRMModel;
		
		
		// /////////////////////// Old Original code ////////////////////
		var oProductModel = new JSONModel();
		oProductModel.loadData("./model/Products.json");
		sap.ui.getCore().setModel(oProductModel, "products");
		
		var oWeatherModel = new JSONModel();
		console.dir(oWeatherModel);
		oWeatherModel.loadData("http://api.openweathermap.org/data/2.5/weather?q=London,uk&mode=json&units=metric&callback=?&APPID=98889cbd029f06ac7ad810ad72b5ac64");
		sap.ui.getCore().setModel(oWeatherModel, "weatherDataModel");
		

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