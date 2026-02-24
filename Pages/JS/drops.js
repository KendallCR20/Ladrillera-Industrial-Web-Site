$('.dropdown').on('show.bs.dropdown', function () {
    var $menu = $(this).find('.dropdown-menu');
    var buttonHeight = $(this).find('.dropdown-toggle').outerHeight();

    // Ajusta el menú desplegable justo debajo del botón
    $menu.css({
        top: (buttonHeight + 5) + 'px', // Añade un margen de 5px
        left: '0',
        transform: 'none'
    });
});


  