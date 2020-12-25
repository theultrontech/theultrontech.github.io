$(function() {
    $('#easy-filter-wrap').easyFilter();
});

$('#easy-filter-wrap').easyFilter({

    // or 'fade'
    animation: 'slide',

    // duration of the animation
    duration: 400

});

$('#easy-filter-wrap').easyFilter({

    firstFilter: 'item01'

});