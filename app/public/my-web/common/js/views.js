~!!function () {
    remLayout();
    function remLayout () {
        var screen_width=document.documentElement.clientWidth,font_size;
        font_size=screen_width>953?127 :screen_width / 7.5;
        font_size = font_size > 32 ? font_size : 32;
        console.log(screen_width);
        document.documentElement.style.fontSize =  font_size + 'px';
    }
    window.addEventListener('resize', function() {
        remLayout();
    }, false);

}();
