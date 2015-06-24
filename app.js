$(function() {

  $('[data-option]').on('click', function(e) {

    var $body = $('body'),
        $el = $(e.currentTarget),
        option = $el.data('option'),
        optionClass = 'option-' + option;

    if ($body.hasClass(optionClass)) {
      $body
        .removeClass();
    } else {
      $body
        .removeClass()
        .addClass(optionClass);
    }

  });

  $('textarea').on('click keyup', function(e) {

    var $textarea = $(e.currentTarget);

    // Line
    var currentLine = $textarea.val().substr(0, $textarea[0].selectionStart).split('\n').length;

    // Column
    var linesToThisPoint = $textarea.val().substr(0, $textarea[0].selectionStart),
        currentLineStart = linesToThisPoint.lastIndexOf('\n'),
        currentColumn = $textarea[0].selectionStart - currentLineStart;

    $('footer').text('Ln ' + currentLine + ', Col ' + currentColumn);

  });

});
