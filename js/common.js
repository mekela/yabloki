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


	$('#capcha').change(function(event) {
		if ($(this).is(':checked')) {
			$('#caphahide').val('checked');
		} 
		else {
			$('#caphahide').val('');
		}
	});
	$('#nocapha').hide(0);

	$('#capcha2').change(function(event) {
		if ($(this).is(':checked')) {
			$('#caphahide2').val('checked');
		} 
		else {
			$('#caphahide2').val('');
		}
	});
	$('#nocapha2').hide(0);

	
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

	        if ($('#caphahide').hasClass('error')) {
				$('#nocapha').show();
			} 
			else {
				$('#nocapha').hide();
			}

			if ($('#caphahide2').hasClass('error')) {
				$('#nocapha2').show();
			} 
			else {
				$('#nocapha2').hide();
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

	
});