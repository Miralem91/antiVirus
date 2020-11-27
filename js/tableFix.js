$(function() {
    $('.table-wrapper tr').each(function() {
        var tr = $(this),
            h = 0;
        tr.children().each(function() {
            var td = $(this),
                tdh = td.height();
            if (tdh > h) h = tdh;
        });
        tr.css({ height: h + 'px' });
    });
});