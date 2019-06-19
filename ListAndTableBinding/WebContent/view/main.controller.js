sap.ui.controller("view.main",{

					/**
					 * Called when a controller is instantiated and its View
					 * controls (if available) are already created. Can be used
					 * to modify the View before it is displayed, to bind event
					 * handlers and do other one-time initialization.
					 * 
					 * @memberOf view.check
					 */
					onInit : function() {
						
						var oProductModel = new JSONModel();
						oProductModel.loadData("mock_data.json");
						sap.ui.getCore().setModel(oProductModel);
						
						
						
					},

				});