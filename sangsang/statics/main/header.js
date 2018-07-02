// 여기에다가는 top-nav-collapse 클래스가 들어왔을 때 해당 요소의 자식요소들의 글씨 색상을 바꾸기

var didscroll;

var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didscroll = true;
});

setInterval(function () {
    if (didscroll) {
        hasScrolled();
        didscroll = False;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight) {
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
