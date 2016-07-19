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
    Grid System
==================================
*/
$( function() {
    $( ".sortable" ).sortable({
        handle: ".grid-block-control"
    });
});
$(document).on('click','.grid-block-control .minus',function(){
    var tDiv = $(this).parents().eq(2);
    var i = 0;
    for(i = 2 ; i <= 12; i+=2){
        if(tDiv.hasClass("col-md-" + i)){
            tClass="col-md-" + i;
            if(i == 2){
                alert("Too Small!");
                tClass="col-md-4";
            }
        }
    }
    tDiv.removeClass(tClass);
    if(tClass.length === 9){
        var nLength = parseInt(tClass[tClass.length-2] + tClass[tClass.length-1])-2;
    }else {
        var nLength = parseInt(tClass[tClass.length-1])-2;
    }
    tDiv.addClass("col-md-" + nLength);
    var tDim = $(this).parent().find('.dimension').text().toString();
    var temptDim = (parseInt(tDim[0]) - 1) + tDim[1] + tDim[2];
    $(this).parent().find('.dimension').text(temptDim);
});
$(document).on('click','.grid-block-control .plus',function(){
    var tDiv = $(this).parents().eq(2);
    var i = 0;
    for(i = 2 ; i <= 12; i+=2){
        if(tDiv.hasClass("col-md-" + i)){
            tClass="col-md-" + i;
            if(i == 12){
                alert("Too Large!");
                tClass="col-md-10";
            }
        }
    }
    tDiv.removeClass(tClass);
    if(tClass.length === 9){
        var nLength = parseInt(tClass[tClass.length-2] + tClass[tClass.length-1])+2;
    }else {
        var nLength = parseInt(tClass[tClass.length-1])+2;
    }
    tDiv.addClass("col-md-" + nLength );
    var tDim = $(this).parent().find('.dimension').text().toString();
    var temptDim = (parseInt(tDim[0]) + 1) + tDim[1] + tDim[2];
    $(this).parent().find('.dimension').text(temptDim);
});
$(document).on('click','.grid-block-control .delete',function(){
    var tdiv = $(this).parents().eq(2);
    tdiv.remove();
});
$(document).on('click','.grid-selector .dropdown-menu li',function(){
    var i;
    for(i = 2 ; i <= 12; i+=2){
        if($(this).hasClass(i)){
            $('.sortable').append("<div class='col-md-"+ i + " grid-block'><div class='grid-block-control'><ul><li class='minus'><span class='glyphicon glyphicon-chevron-left'></span></li><li class='dimension'>"+ (i/2) + "/6</li><li class='plus'><span class='glyphicon glyphicon-chevron-right'></span></li><li class='delete'><span class='glyphicon glyphicon-trash'></span></li><li class='add'><span class='glyphicon glyphicon-plus'></span></li></ul></div><div class='grid-block-content'></div></div>");
        }
    }
});
/*
==================================
    Add Module to layout element
==================================
*/
$(document).on('click', '.grid-block-control .add', function () {
    var modal = $('.addModuleModal');
    var currentBlock = $(this).parents().eq(2).find('.grid-block-content');
    modal.modal('show');
    $(document).on('click','.addModuleModal .add-text-module',function(){
        currentBlock.append("<div class='text-module white-brd'><div class='module-buttons'><ul class='no-pad'><li class='delete'><i class='fa fa-trash fa-lg' aria-hidden='true'></i></li></ul></div><div class='editable'><h1>Text Field</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p></div></div>");
        modal.modal('hide');
    });
});
