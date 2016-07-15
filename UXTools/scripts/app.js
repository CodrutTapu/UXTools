/*
==================================
    Text Module
==================================
*/
$(document).on('click','.text-module .delete',function(){
    $(this).parents().eq(2).remove();
});
/*
==================================
    Image Module
==================================
*/
$(document).on('click','.image-module .delete',function(){
    $(this).parents().eq(2).remove();
});
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
        $(this).parents().eq(2).append("<div class='progress-wrapper'><p class='editable'>Label</p><div class='v-slider'></div><div class='delete-progress-bar'><i class='fa fa-times' aria-hidden='true'></i></div></div>");
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
        $(this).parents().eq(2).append("<div class='tag'><p class='editable'>tag</p><div class='delete-tag'><i class='fa fa-times' aria-hidden='true'></i></div></div>");
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
        $(this).parents().eq(2).append("<div class='slide-wrapper'><div class='slide-header clearfix'><div class='side-left'><p class='editable'>Side A</p></div><div class='side-right'><p class='editable'>Side B</p></div></div><div class='v-slider'></div><div class='delete-slide'><i class='fa fa-times' aria-hidden='true'></i></div></div>");
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
var ctx = document.getElementById("pieChart");
var pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [{
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    showScale: false
});
$(document).on('click','.create-pie-chart',function(){
    var pieLabels = [];
    var pieData = [];
    $('.pie-label').each(function(){
        pieLabels.push($(this).val());
    });
    $('.pie-data').each(function(){
        pieData.push($(this).val());
    });
    $('#pieChart').remove();
    $('.pie-chart-content').append("<canvas id='pieChart' width='400' height='400'></canvas>");
    var ctx = document.getElementById("pieChart");
    var pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: pieLabels,
            datasets: [{
                data: pieData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(191, 63, 127, 0.2)',
                    'rgba(38, 12, 12, 0.2)',
                    'rgba(3, 124, 21, 0.2)',
                    'rgba(242, 230, 63, 0.2)'
                    
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(191, 63, 127, 1)',
                    'rgba(38, 12, 12, 1)',
                    'rgba(3, 124, 21, 1)',
                    'rgba(242, 230, 63, 1)'
                ],
                borderWidth: 1
            }]
        },
        showScale: false
    });
    pcModule.find('.pie-chart-content').stop().show(200);
    pcModule.find('.create-pie-chart-box').stop().hide(200);
});
$(document).on('click','.pie-chart-module .add-pie-segment',function(){
    $('.pie-labels-list').append("<input class='pie-label form-control' type='text' name='name' value='' required>");
    $('.pie-data-list').append("<input class='pie-data form-control' type='number' name='name' value='' required>");
});
$(document).on('click','.pie-chart-module .remove-pie-segment',function(){
    $('.pie-labels-list input').last().remove();
    $('.pie-data-list input').last().remove();
});
$(document).on('click','.pie-chart-module .add',function(){
    pcModule = $('.pie-chart-module');
    if( $('.create-pie-chart-box').is(':visible') ){
        pcModule.find('.create-pie-chart-box').stop().hide(200);
    }else {
        pcModule.find('.create-pie-chart-box').stop().show(200);
    }
});
/*
==================================
    Summernote Initialize
==================================
*/
$(document).on('click','.editable',function(){
    $('.editable').each(function(){
        $(this).summernote('destroy');
    });
    $(this).summernote({
        toolbar: [
            ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
        ]
    });
});
/*
==================================
    Navigation Items Initialize
==================================
*/
$(document).on('click','.blank-canvas',function(){
    $('.main-content-wrapper').append("<div class='container canvas-wrapper'><div class='grid-stack' data-gs-width='12' data-gs-animate='yes'></div></div>");
    function gridInitialize(serialization) {
        var options = {
            cellheight: 80,
            verticalmargin: 10
        };

        $('.grid-stack').gridstack(options);

        serialization = GridStackUI.Utils.sort(serialization);

        var grid = $('.grid-stack').data('gridstack');
        grid.removeAll();

        _.each(serialization, function (node) {
            grid.addWidget($("<div class='text-module white-brd'><div class='module-buttons'><ul class='no-pad'><li class='delete'><i class='fa fa-trash fa-lg' aria-hidden='true'></i></li></ul></div><div class='editable'><h1>Text Field</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p></div></div>"),
                node.x, node.y, node.width, node.height);
        });
    }

    var serialization = [
        {x: 0, y: 0, width: 4, height: 2},
        {x: 4, y: 0, width: 4, height: 2},
        {x: 8, y: 0, width: 4, height: 2},
        ];

        gridInitialize(serialization);
});
$(document).on('click','.add-text-module',function(){
    $('.canvas-wrapper').append("<div class='text-module white-brd'><div class='module-buttons'><ul class='no-pad'><li class='delete'><i class='fa fa-trash fa-lg' aria-hidden='true'></i></li></ul></div><div class='editable'><h1>Text Field</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p></div></div>");
});
$(document).on('click','.add-image-module',function(){
    $('.canvas-wrapper').append("<div class='image-module white-brd'><!-- Image Module --><div class='module-buttons'><ul class='no-pad'><li class='add'><i class='fa fa-plus fa-lg' aria-hidden='true'></i></li><li class='delete'><i class='fa fa-trash fa-lg' aria-hidden='true'></i></li></ul></div><img src='img/img-default.png' alt='profile-image' id='image-result'/><div class='add-image'><h2>Image Upload by URL</h2><input type='text' class='image-input-value'><button type='button' name='button' class='image-input-set-button btn btn-primary'>Upload</button></div><div class='image-module-item-delete'><i class='fa fa-times' aria-hidden='true'></i></div></div>");
});
/*
==================================
    Grid System
==================================
*/
