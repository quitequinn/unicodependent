/* =============================================================
    Add your scripts here.
 * ============================================================= */
$(document).ready(function() {

////////////////////////////
//LIST OF FUNCTIONS
var functions = [
    'toBlackletter'
];

////////////////////////////
//SETUP
function setup(functions){
    $('.same').text('Welcome');
    same(functions);
}
setup(functions);

function makeRows(where, functions){
    var i=0;
    $.each( functions, function() {
        $(where).append('<section class="container"><p class="h3 '+functions[i]+' same"></p></section>');
        i++;
    });
    same(functions);
}
makeRows('.list', functions);

function same(functions){
    var i=0;
    $.each( functions, function() {
        $('.'+functions[i]).html(eval(functions[i])($('.input').text()));
        i++;
    });
}

$(".input").keyup(function() {
    same(functions);
});

});