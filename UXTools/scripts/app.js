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
        grid.addWidget($('<div><div class="grid-stack-item-content"><p>Module</p></div></div>'),
            node.x, node.y, node.width, node.height);
    });
}

var serialization = [
    {x: 0, y: 0, width: 0, height: 4},
    {x: 4, y: 0, width: 4, height: 4},
    {x: 8, y: 0, width: 2, height: 2},
    {x: 10, y: 0, width: 2, height: 2},
    {x: 0, y: 2, width: 2, height: 2},
    {x: 2, y: 2, width: 2, height: 4},
    {x: 8, y: 2, width: 4, height: 2},
    {x: 0, y: 4, width: 2, height: 2},
    {x: 4, y: 4, width: 4, height: 2},
    {x: 8, y: 4, width: 2, height: 2},
    {x: 10, y: 4, width: 2, height: 2}
    ];
    
    gridInitialize(serialization);

    $('#addModule').click(function(){
        var grid = $('.grid-stack').data('gridstack');
        grid.addWidget($('<div><div class="grid-stack-item-content"><p>New Module</p></div></div>'),
            0, 0, 1, 1);
    });
