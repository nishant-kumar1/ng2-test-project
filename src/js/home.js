$('document').ready(function() {
    var _parent = '',
        _container = $('div.infoDisplay');
    var popUpWidow = {
        /* function was developed where in custom alignment is required*/
        enableCustPopUp: function(elem) {
            _parent = $('.' + elem.attr('data-popup'));
            var bottom = $(window).height() - elem.offset().top;
            var left = elem.offset().left - _parent.outerWidth() + elem.children('span').outerWidth();
            _parent.css({
                'position': 'absolute',
                'bottom': bottom,
                'left': left
            });
            _parent.toggleClass('active');
            $(window).resize(function() {
                bottom = $(window).height() - elem.offset().top;
                left = elem.offset().left - _parent.outerWidth() + elem.children('span').outerWidth();
                _parent.css({
                    'position': 'absolute',
                    'bottom': bottom,
                    'left': left
                });
            });
        },
        enablePopUp: function(elem) {	
            _parent = $(elem.parents('div')[0]).find('div.infoPopUp');	    
            _parent.toggleClass('active');
        },
        disablePopUp: function(elem) {
            _parent = elem.parents('.infoPopUp');
            _parent.toggleClass('active');
        }
    };

    $('.salesPositionMoreinfo').click(function() {
        popUpWidow.enablePopUp($(this));

    });
    $('.zipcount').click(function(event) {
        popUpWidow.enableCustPopUp($(this));

    });
    $('a.closeIcon').click(function(event) {
        event.preventDefault();
        popUpWidow.disablePopUp($(this));

    });
    $('.navNoticePopUp').click(function() {
        popUpWidow.enablePopUp($(this));

    });
     $('.navAnnouncementsPopUp').click(function() {	
        popUpWidow.enablePopUp($(this));

    });
    
});


$(document).ready(function() {
    /*Accordian Start*/
    $('.statusAccodian li.accordianTitle').on('click', function() {
        $(this).next().slideToggle('500').siblings('.statusAccodian li.accordianData').slideUp();
        var img = $(this).children('i');
        $('i').not(img).removeClass('rotate');
        img.toggleClass('rotate');
    });
    /*END*/

});

/*Header Drop down list*/
$(function() {
    $('.breadcumContainer a .infoTitle').click(function() {
        var widthinfotile = $('.infoTitle').width();
        var widthheadertree = $('.headerTreePopup').width();
        var marginLeft = widthinfotile - widthheadertree;
        $('.headerTreePopup').toggle().css('margin-left', marginLeft);


    });
    $('.headerTreePopup li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
    $('.headerTreePopup li.parent_li > span,.headerTreePopup li.parent_li > i').on('click', function(e) {
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
    
    $('.affliationTree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
    $('.affliationTree li.parent_li > span,.affliationTree li.parent_li > i').on('click', function(e) {
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
});
/*End*/
/*DDL*/
$(document).ready(function() {
	$('.dropdown-menu li').click(function(event) {  
	      var $target = $(event.currentTarget);
	      $target.closest('.btn-group').find('[data-bind="label"]').text($target.text()).end().children('.dropdown-toggle').dropdown('toggle');
	      return false;
	});
});
/*End*/   