$(document).ready(init);

let toggle = false;

function init(){
    $(".checkbox").click(handleToggle);
}

let handleToggle = function(){
    if(toggle){
        toggle = false;
        $('.flexbox-container').removeClass("hidden");
        $('.flexbox-container-2').removeClass("hidden");
        $(".grid-container").removeClass('grid');
        
    }else{
        toggle = true;
        $(".grid-container").addClass("grid");
        $('.flexbox-container-2').addClass("hidden");
        $('.flexbox-container').addClass("hidden");
    }
}

