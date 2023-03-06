
$(document).on('mousedown', '.Piece', function(e) {
    if(UserMove.from === SQUARES.NO_SQ) {
        UserMove.from = ClickedSquare(e.pageX, e.pageY);
        if($('#pieceDragged').length === 0){

            $(this).clone().appendTo('#Board').css('z-index', 1000).prop('id', 'pieceDragged')
        }
    }
    else {
        UserMove.to = ClickedSquare(e.pageX, e.pageY);
        if(ParseMove(UserMove.from,UserMove.to) != NOMOVE){
            MakeUserMove();
        }
        else{
            DeselectSq(UserMove.from);
            UserMove.from = UserMove.to
            UserMove.to = SQUARES.NO_SQ;

        }
    }
})
$(document).on('mousemove', function(e) {
    var position = $("#Board").position();
    //console.log("Piece clicked at " + pageX + "," + pageY + " board top:" + position.top + " board left:" + position.left);

    var workedX = Math.floor(position.left);
    var workedY = Math.floor(position.top);
    var pageX = Math.floor(e.pageX);
    var pageY = Math.floor(e.pageY);

    $('#x').text(e.pageX)
    $('#y').text(e.pageY)
    var piece = $('#pieceDragged')
    //  console.log( Math.floor(pageX-workedX))
    piece.css('left',  Math.floor((pageX-workedX-30)) + 'px')
    piece.css('top', Math.floor((pageY-workedY-30)) + 'px')
})
$(document).on('mouseup', function(e) {

    if(UserMove.from != SQUARES.NO_SQ && UserMove.from != ClickedSquare(e.pageX, e.pageY)){
        UserMove.to = ClickedSquare(e.pageX, e.pageY);
        MakeUserMove();
        //$(this).clone().appendTo('#Board').css('z-index', 1000).prop('id', 'pieceDragged')
    }
    $('#pieceDragged').remove()
})