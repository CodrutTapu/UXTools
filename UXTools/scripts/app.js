/*
==================================
    Text Module
==================================
*/
(function remove(){
    $('.text-module .delete').click(function(){
        $(this).parents().eq(2).remove();
    });
})();
/*
==================================
    Image Module
==================================
*/
(function remove(){
    $('.image-module .delete').click(function(){
        $(this).parents().eq(2).remove();
    });
})();
/*
==================================
    Bar Graph Module
==================================
*/
$(document).on('mouseenter','.bar-graph-module .progress-wrapper',function(){
     $(this).find('.delete-progress-bar').show(200);
});
$(document).on('mouseleave','.bar-graph-module .progress-wrapper',function(){
     $(this).find('.delete-progress-bar').delay(200).hide(200);
});
(function add(){
    $('.bar-graph-module .add').click(function(){
        $(this).parents().eq(2).append("<div class='progress-wrapper'><p>Label</p><div class='progress'><div class='progress-bar' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style='width: 60%;'><span class='sr-only'>60% Complete</span></div><div class='delete-progress-bar'><i class='fa fa-times' aria-hidden='true'></i></div></div></div>");
    });
})();
(function remove(){
    $('.bar-graph-module .delete').click(function(){
        $(this).parents().eq(2).remove();
    });
})();
// (function deleteBar(){
//     $('.bar-graph-module .delete-progress-bar').click(function(){
//         $(this).parents().eq(1).remove();
//     });
// })();
$(document).on('click','.bar-graph-module .delete-progress-bar',function(){
     $(this).parents().eq(1).remove();
});
/*
==================================
    Social Media Module
==================================
*/
(function remove(){
    $('.social-media-module .delete').click(function(){
        $(this).parents().eq(2).remove();
    });
})();
/*
==================================
    Tag Module
==================================
*/
(function remove(){
    $('.tag-module .delete').click(function(){
        $(this).parents().eq(2).remove();
    });
})();
(function add(){
    $('.tag-module .add').click(function(){
        $(this).parents().eq(2).append("<div class='tag'>tag<div class='delete-tag'><i class='fa fa-times' aria-hidden='true'></i></div></div>");
    });
})();
$(document).on("mouseenter",".tag-module .tag",function(){
     $(this).find('.delete-tag').show(200);
});
$(document).on("mouseleave",".tag-module .tag",function(){
     $(this).find('.delete-tag').delay(200).hide(200);
});
$(document).on("click",".tag-module .delete-tag",function(){
     $(this).parent().remove();
});
/*
==================================
    Email Module
==================================
*/
(function remove(){
    $('.email-module .delete').click(function(){
        $(this).parents().eq(2).remove();
    });
})();
/*
==================================
    Scale Chart Module
==================================
*/
(function remove(){
    $('.scale-chart-module .delete').click(function(){
        $(this).parents().eq(2).remove();
    });
})();
(function add(){
    $('.scale-chart-module .add').click(function(){
        $(this).parents().eq(2).append("<div class='slide-wrapper'><div class='slide-header clearfix'><p class='side-left'>Side A</p><p class='side-right'>Side B</p></div><div class='slide'><div class='slide-thumb'></div><div class='delete-slide'><i class='fa fa-times' aria-hidden='true'></i></div></div></div>");
        $( ".slide-thumb" ).draggable({ containment: "parent" });
    });
})();
$(document).on("mouseenter",".scale-chart-module .slide-wrapper",function(){
    $(this).find('.delete-slide').show(200);
});
$(document).on("mouseleave",".scale-chart-module .slide-wrapper",function(){
    $(this).find('.delete-slide').delay(200).hide(200);
});
$(document).on("click",".scale-chart-module .delete-slide",function(){
    $(this).parents().eq(1).remove();
});
$(document).ready(function(){
    $( ".slide-thumb" ).draggable({ containment: "parent" });
});
/*
==================================
    Pie Chart Module
==================================
*/
(function remove(){
    $('.pie-chart-module .delete').click(function(){
        $(this).parents().eq(2).remove();
    });
})();
