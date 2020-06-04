$('ul').on('click','li',function(){
	$(this).toggleClass("completed");
});
//click on x to delete To-Do
$('ul').on('click','span',function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
})
//Add new To-Do
$("input[type='text'").keypress(function(event){
	if(event.which===13){
		var newTodo=$(this).val();
		$(this).val("");
		//create a new li and add newTodo to it
		$('ul').append("<li><span><i class='fa fa-trash'></i></span>" + newTodo + "</li>");
	}
});
//Toggle input text box on clicking + icon
$('.fa-plus').on('click',function(){
	$('input[type="text"').fadeToggle();
});