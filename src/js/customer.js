 /*
   variable: selectionIndex;
   Purpose:  To achieve auto selection of customer when auto load is complete. we also need to restricted the auto load once the initial load is complete no other cases auto selection gets executed; 
   variable: selectedCust
   Purpose: Id of selected poa customer; 
  */
 var rowCount = 10,
     jsonData = [];
 var globalFnCust = {
     tableWidth: function() {
         var poaCustTableWidth = $('#poaCustomer .customerTable').width();
         var nonpoaCustTableWidth = $('#nonpoaCustomer .customerTable').width();

         var width = nonpoaCustTableWidth;
         if (poaCustTableWidth > nonpoaCustTableWidth) {
             width = poaCustTableWidth;
         }
         return width;
     },
     resizeGrid: function(tableName) {

         $(window).on("resize", function() {
             tableName.setGridWidth(Math.round(globalFnCust.tableWidth(), true));
         });
         tableName.setGridWidth(Math.round(globalFnCust.tableWidth(), true));
     },
     calculatePos: function(uielem) {
         var dirChange = false,
             top = uielem.offset().top + 20,
             left = uielem.offset().left,
             right = $(window).width() - uielem.offset().left - uielem.outerWidth();

         if (right < $(window).width() / 2) {
             dirChange = true;
         }
         return {
             'left': left,
             'top': top,
             'right': right,
             'dirChange': dirChange
         }
     },
     advancedSearchToggle: function(elem) {
         var advncedSearch = $('.' + elem.attr('data-for')),
             pos = globalFnCust.calculatePos($(elem));
         advncedSearch.css({
             'position': 'absolute',
             'left': 'inherit',
             'top': pos.top,
             'right': pos.right
         });
         advncedSearch.toggleClass('active');
         $(window).resize(function() {
             pos = globalFnCust.calculatePos($(elem));
             advncedSearch.css({
                 'position': 'absolute',
                 'left': 'inherit',
                 'top': pos.top,
                 'right': pos.right
             });
             advncedSearch.toggleClass('active');
         });

     },
     toggleFilter: function(elem, fromTable) {
         var filterElem = $('.filterTemplateSection .fil_name.fl' + fromTable),
             pos = globalFnCust.calculatePos($(elem.target));
         if (pos.dirChange) {
             filterElem.css({
                 'position': 'absolute',
                 'left': 'inherit',
                 'top': pos.top,
                 'right': pos.right
             });
         } else {
             filterElem.css({
                 'position': 'absolute',
                 'right': 'inherit',
                 'top': pos.top,
                 'left': pos.left
             });
         }
         filterElem.toggleClass('active');
         $(window).resize(function() {
             pos = globalFnCust.calculatePos($(elem.target));
             if (pos.dirChange) {
                 filterElem.css({
                     'position': 'absolute',
                     'left': 'inherit',
                     'top': pos.top,
                     'right': pos.right
                 });
             } else {
                 filterElem.css({
                     'position': 'absolute',
                     'right': 'inherit',
                     'top': pos.top,
                     'left': pos.left
                 });
             }
         });
     },
     radioBehavious: function(radioElem) {
         var group = "input:checkbox[name='" + radioElem.attr("name") + "']";
         $(group).not(radioElem).prop("checked", false);
     }
 }

 $(function() {
     var tableID = $("#poacustomerGridList");
     var selectionIndex = 0,
         selectedCust = '';
     var fnCustomer = {
         init: function() {
             if (selectionIndex < 2) {
                 $('.pocustomerDetailList').filter(':first').trigger('click');
                 selectionIndex++;
             }
         },
         detailsToggle: function() {
             $('.gridDetailContainer').toggleClass('fullscreen');
         },
         toggleFilter: function(elem) {
             globalFnCust.toggleFilter(elem, 'poaCustomer');
         },
         gridLoadComplition: function(tableID) {
             globalFnCust.resizeGrid(tableID);
             fnCustomer.init();
         },
         impactMetricToggle: function(elem) {
             var impactMetric = $('.impactMetric'),
                 pos = globalFnCust.calculatePos($(elem));
             impactMetric.css({
                 'position': 'absolute',
                 'left': 'inherit',
                 'top': pos.top,
                 'right': pos.right
             });
             impactMetric.toggleClass('active');
             $(window).resize(function() {
                 pos = globalFnCust.calculatePos($(elem));
                 impactMetric.css({
                     'position': 'absolute',
                     'left': 'inherit',
                     'top': pos.top,
                     'right': pos.right
                 });

             });


         },
         displayCustDetailPanel: function(checkBox) {

             var gridPannel = $('.gridDetailContainer'),
                 tableCont = $('#poaCustomer .customerTable'),
                 Panelbg = $('#pomoreDetailsPanelbg'),
                 arrow = $('#pomoreDetailsPanelbg i'),
                 editbtn = $('.poedit'),
                 pushbtn = $('.popush'),
                 tableHeight = 110;



             if (checkBox) {
                 //GET THE SPECIFIC CUSTOMER DETAILS AND THEN SHOW THE PANNEL
                 if (checkBox.prop('checked')) {
                     //Checkbox is enabled get the data to populate

			
                     Panelbg.children('span').text('Dr. Dominic J.R. Abrams, MD');
                     editbtn.addClass('btnenable');
                     pushbtn.addClass('btnenable');

                 }


                 gridPannel.removeClass('inactive');
                 tableCont.removeClass('colheightLrg');
                 Panelbg.addClass('moredetailsgrey pointer');
                 arrow.removeClass('topWhiteArrowIcon').addClass('downBlackArrowIcon');


             } else {

                 if (!gridPannel.hasClass('inactive')) {
                     tableHeight = 321;
                 }

                 gridPannel.toggleClass('inactive');
                 tableCont.toggleClass('colheightLrg');
                 Panelbg.toggleClass('moredetailsgrey');
                 arrow.toggleClass('topWhiteArrowIcon downBlackArrowIcon');

             }

             //globalFnCust.resizeGrid(tableID);
             tableID.setGridHeight(tableHeight);


         },
         getCustomer: function() {

         },
         onPaginate: function(event, page) {
             $('.navInfo').text('Showing records ' + (page * rowCount) + ' of 50');
             grid.updateGridData({
                 'tableID': tableID,
                 'data': eval('dummy' + page)
             });

         }
     }
     $('.fullScreenBtn').click(function(e) {
         fnCustomer.detailsToggle();
     });

     $('#poaCustomer').on('change', '.pocustomerDetailList', function(e) {
         if ($(this).prop('checked')) {
             selectedCust = $(this).attr('id');
             globalFnCust.radioBehavious($(this))
             fnCustomer.displayCustDetailPanel($(this));
         } else {
             $(this).prop('checked', true)
         }
     });

     $('.advancedSearchBtnWrapper .primarybutton').click(function(e) {
         globalFnCust.advancedSearchToggle($(this));
     });
     $('#poaCustomer .cmmWrapper').click(function(e) {
         fnCustomer.impactMetricToggle($(this));
     });

     $('#pomoreDetailsPanelbg').click(function(e) {
         if ($(this).hasClass('pointer')) {
             fnCustomer.displayCustDetailPanel();
         }
     });
     $('.posadvancesearch .posadsearchcnclbtn').click(function() {
         $('#poaCustomer .advancedSearchBtnWrapper .primarybutton').trigger('click');
     });

     $('.popush').click(function(e) {
         if ($(this).hasClass('btnenable')) {
             window.location = "pushcustomer.html";
         }
     });


     //Load intial set of customers


     colNames = ['', '', 'Customer Name', 'CMA#', 'Address', 'City', 'State', 'Zip', 'Type', 'Assignment Type', 'Products', 'Sub Cat Code', 'Suggested calls', 'Proposed Call',' My Comp'];

     colModels = [{
         name: 'status',
         index: 'status',
         classes: 'status',
         width: 1,
         resizable: false,
         sortable: false,
         formatter: imageFormatter
     }, {
         name: 'custID',
         index: 'custID',
         width: 2,
         resizable: false,
         sortable: false,
         formatter: inputFormatter
     }, {
         name: 'name',
         index: 'name',
         width: 11,
         firstsortorder: 'asc',
         hasFilter: true,
         resizable: false
     }, {
         name: 'CMA',
         width: 7,
         index: 'CMA',
         sortable: true,
         resizable: false
     }, {
         name: 'Address',
         width: 8,
         index: 'Address',
         sortable: true,
         resizable: false,
     }, {
         name: 'City',
         width: 7,
         index: 'City',
         resizable: false,
         sortable: true,
         sorttype: "float"
     }, {
         name: 'State',
         index: 'State',
         width: 7,
         resizable: false,
         sorttype: "float"
     }, {
         name: 'Zip',
         width: 7,
         index: 'Zip',
         resizable: false,
         sorttype: "float"
     }, {
         name: 'Speciality',
         width: 4,
         index: 'Speciality',
         resizable: false,
         sorttype: "float"
     }, {
         name: 'Type',
         width: 9,
         index: 'Type',
         resizable: false,
         sorttype: "float"
     }, {
         name: 'Products',
         width: 10,
         index: 'Products',
         hasFilter: true,
         resizable: false,
         sorttype: "float"
     }, {
         name: 'Assignment',
         width: 12,
         index: 'Assignment',
         resizable: false,
         hasFilter: true,
         sorttype: "float"
     }, {
         name: 'shared',
         index: 'shared',
         classes: 'pocustShared',
         width: 8,
         resizable: false,
         sortable: false,
         formatter: dataFormatter
     }, {
         name: 'Comp',
         index: 'Comp',
         classes: 'myComp',
         width: 7,
         resizable: false,
         sortable: false,
         formatter: compFormatter
     },{
         name: 'Comp',
         index: 'Comp',
         classes: 'myComp',
         width: 7,
         resizable: false,
         sortable: false,
         formatter: compFormatter
     }];


     function imageFormatter(cellvalue, options, rowObject) {
         return '<center><span class="' + cellvalue + '"></span></center>';
     }

     function inputFormatter(cellvalue, options, rowObject) {
         var selected = (cellvalue == selectedCust) ? 'checked="checked"' : '';
         return '<center><input type="checkbox" name="pocustomerlist" ' + selected + ' class="pocustomerDetailList customerDetailList" id="' + cellvalue + '"/></center>';
     }

     function dataFormatter(cellvalue, options, rowObject) {
         return '<center><span class="icons ' + cellvalue + '"></span></center>';
     }

     function compFormatter(cellvalue, options, rowObject) {
         return '<center><span class="icons comp' + cellvalue + '"></span><span class="icons shareComp"></span></center>';
     }




     grid.init({
         'tableID': $("#poacustomerGridList"),
         'result': jsonData,
         'rowCount': rowCount,
         'colNames': colNames,
         'colModels': colModels,
         'onCompleteFn': fnCustomer.gridLoadComplition,
         'toggleFilterFn': fnCustomer.toggleFilter,
         'height': 322
     });
     grid.paginate({
         'contId': $('#poapagination'),
         'totalPages': 5,
         'visiblePages': 3,
         'onPageClick': fnCustomer.onPaginate
     });
 });
 /*------------------------------------------------NON PO CUSTOMER JS ----------------------------------------------------*/

 $(function() {
     var tableID = $("#nonpoacustomerGridList");

     var fnNonPoCustomer = {
         onPaginate: function(event, page) {
             $('#nonpoaCustomerData .navInfo').text('Showing records ' + (page * rowCount) + ' of 50');
             grid.updateGridData({
                 'tableID': tableID,
                 'data': eval('dummy' + page)
             });

         },
         toggleFilter: function(elem) {
             //CALLING A COMMON DISPLAY FUNCTION
             globalFnCust.toggleFilter(elem, 'nonpoaCustomer');

         },
         impactMetricToggle: function(elem) {
             var impactMetric = $('.impactMetric'),
                 pos = globalFnCust.calculatePos($(elem));
             impactMetric.css({
                 'position': 'absolute',
                 'left': 'inherit',
                 'top': pos.top,
                 'right': pos.right
             });
             impactMetric.toggleClass('active');
             $(window).resize(function() {
                 pos = globalFnCust.calculatePos($(elem));
                 impactMetric.css({
                     'position': 'absolute',
                     'left': 'inherit',
                     'top': pos.top,
                     'right': pos.right
                 });

             });


         },
         displayCustDetailPanel: function() {
             var checkBoxList = $('input.nonpocustomerDetailList:checked'),
                 checkboxCount = checkBoxList.length,
                 detailPannel = $('#nonpomoreDetailsPanelbg'),
                 editbtn = $('.nonpoedit'),
                 pullbtn = $('.nonpopull')

             $('#nonpomoreDetailsPanelbg').text(checkBoxList.length + 'Customer Selected');
             if (checkboxCount != 0) {
                 editbtn.addClass('btnenable');
                 pullbtn.addClass('btnenable').attr('data-target', '#pullPopup');


             } else {
                 editbtn.removeClass('btnenable');
                 pullbtn.removeClass('btnenable');
             }
         }
     }



    colNames = ['', '', 'Customer Name', 'CMA#', 'Address', 'City', 'State', 'Zip', 'Type', 'Assignment Type', 'Products', 'Sub Cat Code', 'Suggested calls', 'Proposed Call',' My Comp'];

      colModels = [{
         name: 'status',
         index: 'status',
         classes: 'status',
         width: 1,
         resizable: false,
         sortable: false,
         formatter: imageFormatter
     }, {
         name: 'custID',
         index: 'custID',
         width: 2,
         resizable: false,
         sortable: false,
         formatter: inputFormatter
     }, {
         name: 'name',
         index: 'name',
         width: 11,
         firstsortorder: 'asc',
         hasFilter: true,
         resizable: false
     }, {
         name: 'CMA',
         width: 7,
         index: 'CMA',
         sortable: true,
         resizable: false
     }, {
         name: 'Address',
         width: 8,
         index: 'Address',
         sortable: true,
         resizable: false,
     }, {
         name: 'City',
         width: 7,
         index: 'City',
         resizable: false,
         sortable: true,
         sorttype: "float"
     }, {
         name: 'State',
         index: 'State',
         width: 7,
         resizable: false,
         sorttype: "float"
     }, {
         name: 'Zip',
         width: 7,
         index: 'Zip',
         resizable: false,
         sorttype: "float"
     }, {
         name: 'Speciality',
         width: 4,
         index: 'Speciality',
         resizable: false,
         sorttype: "float"
     }, {
         name: 'Type',
         width: 9,
         index: 'Type',
         resizable: false,
         sorttype: "float"
     }, {
         name: 'Products',
         width: 10,
         index: 'Products',
         hasFilter: true,
         resizable: false,
         sorttype: "float"
     }, {
         name: 'Assignment',
         width: 12,
         index: 'Assignment',
         resizable: false,
         hasFilter: true,
         sorttype: "float"
     }, {
         name: 'shared',
         index: 'shared',
         classes: 'pocustShared',
         width: 8,
         resizable: false,
         sortable: false,
         formatter: dataFormatter
     }, {
         name: 'Comp',
         index: 'Comp',
         classes: 'myComp',
         width: 7,
         resizable: false,
         sortable: false,
         formatter: compFormatter
     },{
         name: 'Comp',
         index: 'Comp',
         classes: 'myComp',
         width: 7,
         resizable: false,
         sortable: false,
         formatter: compFormatter
     }];



     function imageFormatter(cellvalue, options, rowObject) {
         return '<center><span class="' + cellvalue + '"></span></center>';
     }

     function inputFormatter(cellvalue, options, rowObject) {
         return '<center><input type="checkbox" name="nonpocustomerList" class="nonpocustomerDetailList customerDetailList" id="' + options.rowId + '"/></center>';

     }

     function dataFormatter(cellvalue, options, rowObject) {
         return '<center><span class="icons ' + cellvalue + '"></span></center>';
     }

     function compFormatter(cellvalue, options, rowObject) {
         return '<center><span class="icons comp' + cellvalue + '"></span><span class="icons shareComp"></span></center>';
     }


     $('#nonpoaCustomer').on('change', '.nonpocustomerDetailList', function(e) {
         fnNonPoCustomer.displayCustDetailPanel($(this));
     });
     $('.nonposadvancesearch .nonposadsearchcnclbtn').click(function() {
         $('#nonpoaCustomer .advancedSearchBtnWrapper .primarybutton').trigger('click');
     });




     grid.init({
         'tableID': $("#nonpoacustomerGridList"),
         'result': jsonData,
         'rowCount': rowCount,
         'colNames': colNames,
         'colModels': colModels,
         'onCompleteFn': globalFnCust.resizeGrid,
         'toggleFilterFn': fnNonPoCustomer.toggleFilter,
         'height': 321
     });
     grid.paginate({
         'contId': $('#nonpoapagination'),
         'totalPages': 5,
         'visiblePages': 3,
         'onPageClick': fnNonPoCustomer.onPaginate
     });
     $('#nonpoaCustomer .cmmWrapper').click(function(e) {
         fnNonPoCustomer.impactMetricToggle($(this));
     });




 });
 /*------------------------------------------------PUSH POP UP JS ----------------------------------------------------*/
 $(function() {
     var tableID = $("#pullNonPoaCustList");
     colNames = ['', '', 'Name', 'CMA', 'Address', 'City', 'Zip', 'State', 'Speciality', 'Type', 'Products', 'Assignment Type', 'Shared', 'My Comp'];

     colModels = [{
         name: 'status',
         index: 'status',
         classes: 'status',
         width: 1,
         resizable: false,
         sortable: false,
         formatter: imageFormatter
     }, {
         name: 'custID',
         index: 'custID',
         width: 2,
         resizable: false,
         sortable: false,
         formatter: inputFormatter
     }, {
         name: 'name',
         index: 'name',
         width: 11,
         firstsortorder: 'asc',
         hasFilter: true,
         resizable: false
     }, {
         name: 'CMA',
         width: 7,
         index: 'CMA',
         sortable: true,
         resizable: false
     }, {
         name: 'Address',
         width: 10,
         index: 'Address',
         sortable: true,
         resizable: false,
     }, {
         name: 'City',
         width: 7,
         index: 'City',
         resizable: false,
         sortable: true,
         sorttype: "float"
     }, {
         name: 'Zip',
         index: 'Zip',
         width: 7,
         resizable: false,
         sorttype: "float"
     }, {
         name: 'State',
         width: 7,
         index: 'State',
         resizable: false,
         sorttype: "float"
     }, {
         name: 'Speciality',
         width: 8,
         index: 'Speciality',
         resizable: false,
         sorttype: "float"
     }, {
         name: 'Type',
         width: 6,
         index: 'Type',
         resizable: false,
         sorttype: "float"
     }, {
         name: 'Products',
         width: 9,
         index: 'Products',
         hasFilter: true,
         resizable: false,
         sorttype: "float"
     }, {
         name: 'Assignment',
         width: 12,
         index: 'Assignment',
         resizable: false,
         hasFilter: true,
         sorttype: "float"
     }, {
         name: 'shared',
         index: 'shared',
         classes: 'pocustShared',
         width: 6,
         resizable: false,
         sortable: false,
         formatter: dataFormatter
     }, {
         name: 'Comp',
         index: 'Comp',
         classes: 'myComp',
         width: 7,
         resizable: false,
         sortable: false,
         formatter: compFormatter
     }];


     function imageFormatter(cellvalue, options, rowObject) {
         return '<center><span class="' + cellvalue + '"></span></center>';
     }

     function inputFormatter(cellvalue, options, rowObject) {
         return '<center><input type="checkbox" name="nonpopushpopuplist" class="customerDetailList" id="' + options.rowId + '"/></center>';
     }

     function dataFormatter(cellvalue, options, rowObject) {
         return '<center><span class="icons ' + cellvalue + '"></span></center>';
     }

     function compFormatter(cellvalue, options, rowObject) {
         return '<center><span class="icons comp' + cellvalue + '"></span><span class="icons shareComp"></span></center>';
     }


     var fnPullNonPoaCustomer = {
         resizeGrid: function() {
             $(window).on("resize", function() {
                 tableID.setGridWidth(Math.round($('#pullPopup').width() - 55, true));
             });
             tableID.setGridWidth(Math.round($('#pullPopup').width() - 55, true));
         }
     }
     grid.init({
         'tableID': $("#pullNonPoaCustList"),
         'result': dummy1,
         'rowCount': rowCount,
         'colNames': colNames,
         'colModels': colModels,
         'onCompleteFn': fnPullNonPoaCustomer.resizeGrid,
         'height': 322
     });
 });
 /*------------------------------------------------PULL POP UP JS ----------------------------------------------------*/
 $(function() {

     var pushcustData = {
         updateDestination: function() {
             var valueDdl = $('#destinationTypeSelect').val();
             $('#zipDataWrapper,.territoryInformation').addClass('inactive');
             switch (valueDdl) {
                 case 'Zip':
                     {
                         $('#zipDataWrapper').removeClass('inactive');
                         $('.zipcodelists').change(function() {
                             $('.zipcodelists option[value="NA"]').remove();
                             pushcustData.displayTeritory($(this));
                         });
                     }
                     break;
		case 'Territory':
                     {
                         $('#TerritoryDataWrapper').removeClass('inactive');
                         $('.Territorycodelists').change(function() {
                             $('.Territorycodelists option[value="NA"]').remove();
                             pushcustData.displayTeritory($(this));
                         });
                     }
                     break;
     
                 default:
                     {

                     }
                     break;
             }
         },
         displayTeritory: function(opt) {
             var selVal = opt.val();
             $('.territoryInformation').removeClass('inactive');
             $('.poCosSave,.poCosSubmit').addClass('btnenable');
             //POPULATE TERRITORY INFORMATION

         }
     }


     $('#pushpoaCustomerData').on('change', 'select#destinationTypeSelect', function(event) {
         pushcustData.updateDestination();
     });

     /* GUNJA - DISPLAY CODE*/
     $('.proceedBtn').click(function(e) {
         $('#pullPopup').hide();
         $('.modal-backdrop').removeClass('modal-backdrop fade in');
         $('.modal-open').removeClass('modal-open');
         $('#nonpoaCustomerData').hide();
         $('#pullAccordianData').show();
     });
 });