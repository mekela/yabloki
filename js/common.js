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