$(document).ready(function () {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    $("#fork-me-custom").hide();
  }
  showShare();
});

$(window).resize(function () { //当浏览器大小变化时
  showShare();
});

function showShare() {
  if ($(".site-nav-toggle").is(":hidden")) {
    $("#fork-me-custom").show();
  } else {
    $("#fork-me-custom").hide();
  }
}