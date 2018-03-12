$(document).ready(function(){
			$("input").change(function(){
					$("#result").text("The value is " + $(this).val());
			});
		});