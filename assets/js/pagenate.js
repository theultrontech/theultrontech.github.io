$('.pagination-box').pagination({

    page: 1,
    limit: 10,
    total: 0,
    pageTotal: 1,
    pageShow: 3,
    min: 1,
    max: 3

});

$('.pagination-box').pagination('update', {
    // options here
});

$('.pagination-box').pagination('refresh');

$('.pagination-box').pagination({

    clickFun: function(page, limit, total, pageTotal, pageShow) {
        // do something
    }

});
$('.pagination-box').pagination({

    visible: ['start', 'end', 'last', 'next', 'number', 'left', 'right']

});