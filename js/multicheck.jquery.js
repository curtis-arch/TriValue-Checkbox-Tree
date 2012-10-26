(function($){
	$.fn.multiCheck = function( options ) {  
		return this.each(function() {        
			var el = $(this);
			var input = el.find('input[type="checkbox"]');
			input.click(multiCheckInput);
			var label = input.closest('label');			
			$.each(input,function(){
				var tInput = $(this);
				tInput.hide();
				var inputClass = tInput.attr("class");
				var styledInput = '<span class="multicheck '+inputClass+'"></span>';
				$(styledInput).insertAfter(tInput).click(function(){tInput.trigger('click')});
			});
			var styledInput = el.find('.multicheck');
			function multiCheckInput(){
				var lb = $(this).parent().find('.check-options');
				var mo = lb.find('.multi-option');
				var st = lb.parent().find('.multicheck');
				if(lb.hasClass('checked')){
					lb.removeClass('checked').removeClass('all-selected').addClass('none-selected');
					st.removeClass('all-selected').addClass('none-selected');
					mo.removeClass('checked');
					input.prop('checked', false);				
				}else{
					var countChecked = lb.find('.multi-option.checked').length;
					$(mo[countChecked]).addClass('checked');
					if(lb.hasClass('none-selected')){
						lb.removeClass('none-selected');
						st.removeClass('none-selected');
					}
					if(!lb.hasClass('partial-selection')){
						lb.addClass('partial-selection');
						st.addClass('partial-selection');
					}					
					if(countChecked + 1 == mo.length){
						lb.removeClass('partial-selection').addClass('all-selected');
						st.removeClass('partial-selection').addClass('all-selected');
						mo.removeClass('checked');
						lb.addClass('checked');						
					}
					input.prop('checked', true);
				}
			}			
		});
	};
})(jQuery);