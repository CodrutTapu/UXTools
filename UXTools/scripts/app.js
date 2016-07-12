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
$(document).on('click','.image-module .image-input-set-button',function(){
    var val = $('.image-module .image-input-value').val();
    $(this).siblings('input:text').val('');
    if (val === ""){
        val = 'img/img-default.png';
    }
    localStorage.setItem("image-URL", val);
    $('#image-result').attr('src',localStorage.getItem("image-URL"));
    $('.add-image').stop().hide(200);
});
$(document).on('click','.image-module .image-module-item-delete',function(){
    $('#image-result').attr('src',"img/img-default.png");
});
$(document).on('mouseenter','.image-module',function(){
     $(this).find('.image-module-item-delete').stop().show(200);
});
$(document).on('mouseleave','.image-module',function(){
     $(this).find('.image-module-item-delete').stop().hide(200);
});
$(document).on('click','.image-module .add',function(){
    if( $('.add-image').is(':visible') ){
        $('.add-image').stop().hide(200);
    }else {
        $('.add-image').stop().show(200);
    }
});
/*
==================================
    Bar Graph Module
==================================
*/
$(document).on('mouseenter','.bar-graph-module .progress-wrapper',function(){
     $(this).find('.delete-progress-bar').stop().show(200);
});
$(document).on('mouseleave','.bar-graph-module .progress-wrapper',function(){
     $(this).find('.delete-progress-bar').stop().hide(200);
});
(function add(){
    $('.bar-graph-module .add').click(function(){
        $(this).parents().eq(2).append("<div class='progress-wrapper'><p>Label</p><div class='v-slider'></div><div class='delete-progress-bar'><i class='fa fa-times' aria-hidden='true'></i></div></div>");
});
    $(".v-slider").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 100,
        value: 60,
        slide: function (event, ui) {
        $(".amount").val(ui.value);
        }
    });
})();
(function remove(){
    $('.bar-graph-module .delete').click(function(){
        $(this).parents().eq(2).remove();
    });
})();
$(document).on('click','.bar-graph-module .delete-progress-bar',function(){
    $(this).parent().remove();
});
$(document).on('click','.bar-graph-module .add',function(){
    $(".bar-graph-module .v-slider").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 100,
        slide: function (event, ui) {
        $(".amount").val(ui.value);
        }
    });
});
$(".bar-graph-module .v-slider").slider({
    orientation: "horizontal",
    range: "min",
    min: 0,
    max: 100,
    value: 60,
    slide: function (event, ui) {
    $(".amount").val(ui.value);
    }
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
$(document).on("click",".social-media-module .edit",function(){
    var smModule = $(this).parents().eq(2);
    if( $('.edit-social-links').is(':visible') ){
        smModule.find('.social-links-list').stop().show(200);
        smModule.find('.edit-social-links').stop().hide(200);
    }else {
        smModule.find('.social-links-list').stop().hide(200);
        smModule.find('.edit-social-links').stop().show(200);
    }
});
$(document).on("click",".social-media-module .update-social-links",function(){
    var val = $('.social-media-module .facebook-link-edit').val();
    $(".social-links-list .facebook").prop("href",val);
    val = $('.social-media-module .twitter-link-edit').val();
    $(".social-links-list .twitter").prop("href",val);
    val = $('.social-media-module .linkedin-link-edit').val();
    $(".social-links-list .linkedin").prop("href",val);
    val = $('.social-media-module .external-link-edit').val();
    $(".social-links-list .external-link").prop("href",val);
    $('.social-links-list').stop().show(200);
    $('.edit-social-links').stop().hide(200);
});
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
    $(this).find('.delete-tag').stop().show(200);
});
$(document).on("mouseleave",".tag-module .tag",function(){
    $(this).find('.delete-tag').stop().hide(200);
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
        $(this).parents().eq(2).append("<div class='slide-wrapper'><div class='slide-header clearfix'><p class='side-left'>Side A</p><p class='side-right'>Side B</p></div><div class='v-slider'></div><div class='delete-slide'><i class='fa fa-times' aria-hidden='true'></i></div></div>");
        $( ".slide-thumb" ).draggable({ containment: "parent" });
    });
})();
$(document).on("mouseenter",".scale-chart-module .slide-wrapper",function(){
    $(this).find('.delete-slide').stop().show(200);
});
$(document).on("mouseleave",".scale-chart-module .slide-wrapper",function(){
    $(this).find('.delete-slide').stop().hide(200);
});
$(document).on("click",".scale-chart-module .delete-slide",function(){
    $(this).parent().remove();
});
$(document).on('click','.scale-chart-module .add',function(){
    $(".scale-chart-module .v-slider").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 100,
        slide: function (event, ui) {
        $(".amount").val(ui.value);
        }
    });
});
$(".scale-chart-module .v-slider").slider({
    orientation: "horizontal",
    range: "min",
    min: 0,
    max: 100,
    value: 30,
    slide: function (event, ui) {
    $(".amount").val(ui.value);
    }
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
