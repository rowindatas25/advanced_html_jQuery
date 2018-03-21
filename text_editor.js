$(document).ready(function(){

	$("button").click(function(){
		if ($(this).text() == "Edit Content") {
				$(".editable").prop("contentEditable", true);
				$(this).text("Save Changes");
		}

		else {
				$(".editable").prop("contentEditable", false);
				$(this).text("Edit Content");
				$.each($(".editable"), function(key, value) {
						localStorage.setItem(value.id, value.innerHTML)
				});
		}
	});

});