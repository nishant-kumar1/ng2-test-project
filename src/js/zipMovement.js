 var rowCount = 10,jsonData = []; 
 var globalFnCust  = {	
	tableWidth:function(){
		var poaCustTableWidth = $('#assignedTab .customerTable').width();
		//var nonpoaCustTableWidth = $('#nonpoaCustomer .customerTable').width();			
		var width = poaCustTableWidth;
		
		return width;	
	},
	resizeGrid: function(tableName) {	
        $(window).on("resize", function() {		
            tableName.setGridWidth(Math.round(globalFnCust.tableWidth(), true));
        });
        tableName.setGridWidth(Math.round(globalFnCust.tableWidth(), true));
	},
 }

$(function() {
    var tableID = $("#assignedTabGridList");
    var fnCustomer = {
		gridLoadComplition: function(tableID){			
			globalFnCust.resizeGrid(tableID);
		},       	
		onPaginate: function(event, page) {
			$('.navInfo').text('Geographies ' + (page * rowCount) + ' of 30');
			grid.updateGridData({
				'tableID': tableID,
				'data': eval('Zip' + page)
			});
		}
    }
    //Load intial set of Zip Movement assign customer
    
	
    colNames = ['', '', 'Zip', 'Territory', 'No. of Customers'];
    colModels = [{
        name: 'status',
        index: 'status',
        classes: 'status',
        width: 2,	
        hasFilter: true,      
        resizable: false,
        sortable: false,
        formatter: imageFormatter
    }, {
        name: '',
        index: '',
        width: 8,
        resizable: false,
        sortable: false,
        formatter: inputFormatter
    }, {
        name: 'zip',
        index: 'zip',
        width: 20,
        firstsortorder: 'asc',
        hasFilter: true,
        resizable: false
    }, {
        name: 'teritory',       
        width: 30,
        index: 'teritory',
        firstsortorder: 'asc',
        hasFilter: true,
        resizable: false
    }, {
        name: 'noCustomers',
        width: 50,
        index: 'noCustomers',
        firstsortorder: 'asc',
        hasFilter: true,
        resizable: false
    }];


	function imageFormatter(cellvalue, options, rowObject) {
		return '<center><span class="' + cellvalue + '"></span></center>';
	}

	function inputFormatter(cellvalue, options, rowObject) {
		return '<input type="checkbox" name="" class="" id="' + options.rowId + '"/>';
	}
	function dataFormatter(cellvalue, options, rowObject) {
		return '<center><span class="icons ' + cellvalue + '"></span></center>';
	}
	function compFormatter(cellvalue, options, rowObject) {
		return '<center><span class="icons comp' + cellvalue + '"></span><span class="icons shareComp"></span></center>';
	}
	
	
	
	
	grid.init({
        'tableID': $("#assignedTabGridList"),
        'result': jsonData,
        'rowCount': rowCount,
        'colNames': colNames,
        'colModels': colModels,
        'onCompleteFn': fnCustomer.gridLoadComplition,
        'toggleFilterFn': fnCustomer.toggleFilter,
        'height': 322
    });
	grid.paginate({
        'contId': $('#assignedTabpagination'),
        'totalPages': 5,
        'visiblePages': 3,
        'onPageClick': fnCustomer.onPaginate
    });
    /*Tree in assign popup*/
	$('.assignTree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
	$('.assignTree li.parent_li > span,.assignTree li.parent_li > i').on('click', function(e) {
		var children = $(this).parent('li.parent_li').find(' > ul > li');
		//alert(children);
		if (children.is(":visible")) {
		    children.hide('fast');
		    $(this).attr('title', 'Expand this branch').addClass('plusIcon').removeClass('minusIcon');
		} else {
		    children.show('fast');
		    $(this).attr('title', 'Collapse this branch').addClass('minusIcon').removeClass('plusIcon');
		}
		e.stopPropagation();
	});
    /**/
	 
});
	
