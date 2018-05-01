// Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass('completed');
});

$("ul").on("click", "span",function (e) {
    //Fade out and remove parent
    $(this).parent().fadeOut(400, function(){
        //In inner scope, 'this' is already parent. 
        $(this).remove();
    });
    // stop event from bubbling further up
    event.stopPropagation();
});

$("input[type='text'").keypress(function(e){
    if(e.which===13){
        //grab to-do text from input
        var todoText = $(this).val();
        //create a new li and add to ul
        var ico = "<span><i class=\"fa fa-trash\"></i></span>";
        $("ul").append("<li>" + ico + todoText + "</li>");
        //clear input
        $(this).val("");
    }
});

$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle(333);
});