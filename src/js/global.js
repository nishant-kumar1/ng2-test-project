
$(function(){
	/* Code of grid starts here*/
	grid = {					
		init : function (args){
			args.tableID.jqGrid({
				datatype: "local",
				data:args.result,
				height: args.height,
				autowidth: true,    
				shrinkToFit: true,
				rowNum:args.rowCount,
				forceFit:true,
				onFilterClick : function(e){
					args.toggleFilterFn(e);								
				},
				rowList:[10,20,30],
				viewrecords: true,				
				pager: '#pager',
				loadComplete: function() {
					args.onCompleteFn(args.tableID);					
				},    
				colNames: args.colNames,
				colModel: args.colModels				
			});
		},
		updateGridData:function(args){			
			args.tableID.jqGrid('setGridParam', {
					datatype: 'local',
					data: args.data //json object
			})
			.trigger("reloadGrid");			
		},
		paginate:function(args){
			args.contId.twbsPagination({
					totalPages: args.totalPages,
					visiblePages: args.visiblePages,
					onPageClick: function (event, page) {
						args.onPageClick(event, page);
					}
				});
		}
	
	}	

});