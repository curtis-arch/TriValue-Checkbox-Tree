$(document).ready(function(){
	// select elements to add multiple options for checkboxes
	// single checkbox / 3 or more options
	$('.check-level').multiCheck();
	
	// single checkbox / 2 options
	$('.parent-check').click(parentCheck);
	function parentCheck(){		
		var input = $(this);
		var inputReplace = $('span[rel-parent="'+input.attr('id')+'"]');
		if(input.prop('checked') == true){
			inputReplace.removeClass('none-selected').addClass('all-selected');
		}else{
			inputReplace.removeClass('all-selected').addClass('none-selected');
		}
	}
});