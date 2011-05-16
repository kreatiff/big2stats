// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function() 
    {
	if( $("#user_ids_").attr("checked")==true) {
		$(".edit_btn").show();
	}else{
		$(".edit_btn").hide();
	}
      $("#scoreboard").tablesorter( {sortList: [[7,0]]} ); 
    } 
); 