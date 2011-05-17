// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
window.onunload = function(){}; 
$(document).ready(function() 
    {
	//alert('test');
	user_ids = 0;
	$('#edit_users')[0].reset();
			$("#edit_users").submit(function(e) {
			if(!$('input[type=checkbox]:checked').length) {
				//stop the form from submitting
				e.preventDefault();
				alert("Please select at least one to update.");
			}
			return true;
		});
	$("input[type=submit]").addClass("button");
	$(".button").button();
	$("#scoreboard").tablesorter( {sortList: [[7,0]]} );
	
	$("span[class='checkbox']").addClass("unchecked");

	$(".checkbox").click(function(){

		if($(this).children("input").attr("checked")){
			// uncheck
			$(this).children("input").attr({checked: ""});
			$(this).removeClass("checked");
			$(this).addClass("unchecked");
		}else{
			// check
			$(this).children("input").attr({checked: "checked"});
			$(this).removeClass("unchecked");
			$(this).addClass("checked");
		}

		//alert($(this).children("input").attr("checked"));
	});
	
	}); 
