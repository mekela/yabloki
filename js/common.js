$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	//bxslider
	$('.bxslider').bxSlider({
	  nextSelector: '#slider-next',
	  prevSelector: '#slider-prev',
	  nextText: 'Onward →',
	  prevText: '← Go back'
	});

	//tab
	$( "#to_tab1" ).click(function() {
	  $( "#tab2" ).hide();
	  $( "#tab1" ).show();
	});
	$( "#to_tab2" ).click(function() {
	  $( "#tab1" ).hide();
	  $( "#tab2" ).show();
	});

	//input file 
	$('.pick input').bind("change",function() { 

	    var imgVal = $('.pick input').val(); 
	     $('.pick_text').text(imgVal);             
	    return false;
    
	});



	/* - - - - - - - - - - - - - -   valid  - - - - - - - - - - - - - - - - */
	$('.text_center .button').click(function(){
     var parentClass=$(this).attr('rel');
	 var paramsFancy={
	    'scrolling':0,
	    'autoScale': true,
	    'transitionIn': 'elastic',
	    'transitionOut': 'elastic',
	    'speedIn': 500,
	    'speedOut': 300,
	    'autoDimensions': true,
	    'centerOnScroll': true,
	    'href' : '#thanks',
	    'padding' : '0',
	    'height' : 'auto',
	    helpers: {
	            overlay: {
	              locked: false
	            }
	        }
	    };
	    validate=1;
	    validate_msg='';
	    form=$('#'+$(this).attr('rel'));
	     jQuery.each(form.find('.validate'), function(key, value) {
	        if($(this).val()==''){
	        	validate_msg+=$(this).attr('title')+'\n';validate=0;
	            $(this).focus();
	            $(this).addClass('error');
	            $('.attention_block').show();
	        }else{
	            $(this).removeClass('error');
	             $('.attention_block').hide();
	        }
	    });
	    if(validate==1){
	        $.ajax({
	            url: 'ajax.php',
	            data: 'action=send_form&'+form.serialize(),
	            
	        });
	        
	    }else{
	        /*alert(validate_msg);*/
	    } 
	});

		//datepicker
	
	$.datepick.setDefaults($.datepick.regionalOptions['ru']);

	

	function updateLinked(dates) { 
	    $('#linkedMonth').val(dates.length ? dates[0].getMonth() + 1 : ''); 
	    $('#linkedDay').val(dates.length ? dates[0].getDate() : ''); 
	    $('#linkedYear').val(dates.length ? dates[0].getFullYear() : ''); 
	} 
	 
	$('.date').datepick({ 
	    alignment: 'bottomRight', onSelect: updateLinked
	 }); 
	 
	$('#linkedMonth,#linkedDay,#linkedYear').change(function() { 
	    $('.date').datepick('setDate', new Date( 
	        parseInt($('#linkedYear').val(), 10), 
	        parseInt($('#linkedMonth').val(), 10) - 1, 
	        parseInt($('#linkedDay').val(), 10))); 
	});
});