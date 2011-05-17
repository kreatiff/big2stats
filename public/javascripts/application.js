// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function() 
    {
		$(".edit_btn").button();
		$("#scoreboard").tablesorter( {sortList: [[7,0]]} ); 

		$("#edit_users").submit(function(e) {
			for(i=1; i<9; i++) {
				if($("#user_id_"+i).is(':checked') {
					return true;
					alert('true');
				}else{
					alert('false');
					e.preventDefault();
					return false;
				}
			};
		});
	} 
); 