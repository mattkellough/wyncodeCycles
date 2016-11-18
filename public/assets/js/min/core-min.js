function preventDefault(e) {
  e = e || window.event, e.preventDefault && e.preventDefault(), e.returnValue = !1
}

function wheel(e) {
  preventDefault(e)
}

function disable_scroll() {
  window.addEventListener && window.addEventListener("DOMMouseScroll", wheel, !1), window.onmousewheel = document.onmousewheel = wheel
}

function enable_scroll() {
  window.removeEventListener && window.removeEventListener("DOMMouseScroll", wheel, !1), window.onmousewheel = document.onmousewheel = document.onkeydown = null
}

function headerSlideBottom() {
  loaderLogo.removeClass("active"), $(".loader-line:first-of-type").removeClass("loader-move1b").addClass("loader-move1a"), $(".loader-line2").removeClass("loader-move2b").addClass("loader-move2a"), setTimeout(function() {
    body.addClass("b-content-pos"), setTimeout(function() {
      content.addClass("active")
    }, 300), setTimeout(function() {
      $(document).unbind("touchmove", !1)
    }, 600), setTimeout(function() {
      loaderLogo.removeClass("active"), loaderLine.removeClass("alt"), header.stop().addClass("overlay-active")
    }, 800), setTimeout(function() {
      draw()
    }, 1e3), setTimeout(function() {
      $(".design-more").addClass("active")
    }, 2900), $(document).bind("touchmove", !1), okScroll = 1
  }, 1e3), setTimeout(function() {
    $(".loader-line:first-of-type").removeClass("loader-move1a").addClass("loader-move1b"), $(".loader-line2").removeClass("loader-move1b").addClass("loader-move2b"), loaderLogo.stop().delay(1800).addClass("active")
  }, 2e3)
}

function ScrollStart() {
  0 === okScroll && 0 === ipad_keyboard_checker && (body.addClass("b-content-pos"), setTimeout(function() {
    content.addClass("active")
  }, 300), setTimeout(function() {
    $(document).unbind("touchmove", !1)
  }, 600), setTimeout(function() {
    loaderLogo.removeClass("active"), loaderLine.removeClass("alt"), header.stop().addClass("overlay-active")
  }, 800), setTimeout(function() {
    draw()
  }, 1e3), setTimeout(function() {
    $(".design-more").addClass("active")
  }, 3e3), $(document).bind("touchmove", !1), $("html,body").animate({
    scrollTop: 1
  }, 400), okScroll = 1)
}

function Scroll() {
  if (responsive_viewport >= 768 && 0 === ipad_keyboard_checker) {
    var e = $(this).scrollTop();
    previousPos > e && 20 > e && (body.removeClass("b-content-pos"), content.removeClass("active"), okScroll = 0, setTimeout(function() {
      loaderLogo.addClass("active")
    }, 500), setTimeout(function() {
      header.stop().delay(1e3).removeClass("overlay-active")
    }, 1e3), loaderLine.addClass("alt")), previousPos = e
  }
}! function($) {
  function e() {
    var e, o, t = {
      height: r.innerHeight,
      width: r.innerWidth
    };
    return t.height || (e = s.compatMode, (e || !$.support.boxModel) && (o = "CSS1Compat" === e ? l : s.body, t = {
      height: o.clientHeight,
      width: o.clientWidth
    })), t
  }

  function o() {
    return {
      top: r.pageYOffset || l.scrollTop || s.body.scrollTop,
      left: r.pageXOffset || l.scrollLeft || s.body.scrollLeft
    }
  }

  function t() {
    var t = $(),
    s, r = 0;
    if ($.each(a, function(e, o) {
      var a = o.data.selector,
      n = o.$element;
      t = t.add(a ? n.find(a) : n)
    }), s = t.length)
    for (n = n || e(), i = i || o(); s > r; r++)
    if ($.contains(l, t[r])) {
      var d = $(t[r]),
      c = {
        height: d.height(),
        width: d.width()
      },
      u = d.offset(),
      v = d.data("inview"),
      f, m, h;
      if (!i || !n) return;
      u.top + c.height > i.top && u.top < i.top + n.height && u.left + c.width > i.left && u.left < i.left + n.width ? (f = i.left > u.left ? "right" : i.left + n.width < u.left + c.width ? "left" : "both", m = i.top > u.top ? "bottom" : i.top + n.height < u.top + c.height ? "top" : "both", h = f + "-" + m, v && v === h || d.data("inview", h).trigger("inview", [!0, f, m])) : v && d.data("inview", !1).trigger("inview", [!1])
    }
  }
  var a = {},
  n, i, s = document,
  r = window,
  l = s.documentElement,
  d = $.expando,
  c;
  $.event.special.inview = {
    add: function(e) {
      a[e.guid + "-" + this[d]] = {
        data: e,
        $element: $(this)
      }, c || $.isEmptyObject(a) || (c = setInterval(t, 250))
    },
    remove: function(e) {
      try {
        delete a[e.guid + "-" + this[d]]
      } catch (o) {}
      $.isEmptyObject(a) && (clearInterval(c), c = null)
    }
  }, $(r).bind("scroll resize", function() {
    n = i = null
  }), !l.addEventListener && l.attachEvent && l.attachEvent("onfocusin", function() {
    i = null
  })
}(jQuery),
function() {
  for (var e, o = function() {}, t = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], a = t.length, n = window.console = window.console || {}; a--;) e = t[a], n[e] || (n[e] = o)
}();
for (var header = $("#header"), content = $("#content"), previousPos = 0, okScroll = 0, body = $("body"), loader = $(".loader"), loaderContent = $(".loader-content"), loaderLine = $(".loader-line"), loaderLogo = $(".loader-logo"), responsive_viewport = $(window).width(), timer = 0, ipad_keyboard_checker = 0, supportsTouch = ("ontouchstart" in window || navigator.msMaxTouchPoints), current_frame = 0, total_frames = 120, path = [], f_length = [], i = 0; 1 > i; i++) {
  path[i] = document.getElementById("i" + i);
  var l = path[i].getTotalLength();
  f_length[i] = l, path[i].style.strokeDasharray = l + " " + l, path[i].style.strokeDashoffset = l
}
for (var handle = 0, draw = function() {
  var e = current_frame / total_frames;
  if (e > 1) window.cancelAnimationFrame(handle);
  else {
    current_frame++;
    for (var o = 0; o < path.length; o++) path[o].style.strokeDashoffset = Math.floor(f_length[o] * (1 - e));
    handle = window.requestAnimationFrame(draw)
  }
}, s_current_frame = 0, s_total_frames = 60, s_path = [], s_length = [], i = 0; 2 > i; i++) {
  s_path[i] = document.getElementById("z" + i);
  var l = "1107.41015625";
  s_length[i] = l, s_path[i].style.strokeDasharray = l + " " + l, s_path[i].style.strokeDashoffset = l
}
var s_handle = 0,
draw2 = function() {
  var e = s_current_frame / s_total_frames;
  if (e > 1) window.cancelAnimationFrame(s_handle);
  else {
    s_current_frame++;
    for (var o = 0; o < s_path.length; o++) s_path[o].style.strokeDashoffset = Math.floor(s_length[o] * (1 - e));
    s_handle = window.requestAnimationFrame(draw2)
  }
};
supportsTouch ? responsive_viewport >= 768 && (document.addEventListener("touchmove", ScrollStart, !1), document.addEventListener("scroll", Scroll, !1)) : $(window).scroll(function() {
  if (responsive_viewport >= 768) {
    var e = $(this).scrollTop();
    e > previousPos ? e > 1 && 0 === okScroll && (disable_scroll(), okScroll = 1, body.addClass("b-content-pos"), setTimeout(function() {
      content.addClass("active")
    }, 300), setTimeout(function() {
      loaderLogo.removeClass("active"), loaderLine.removeClass("alt"), header.stop().addClass("overlay-active"), enable_scroll()
    }, 800), setTimeout(function() {
      draw()
    }, 1e3), setTimeout(function() {
      $(".design-more").addClass("active")
    }, 3e3)) : 1 > e && (body.removeClass("b-content-pos"), content.removeClass("active"), okScroll = 0, setTimeout(function() {
      loaderLogo.addClass("active")
    }, 500), setTimeout(function() {
      header.stop().delay(1e3).removeClass("overlay-active")
    }, 1e3), loaderLine.addClass("alt")), previousPos = e
  }
}), $(".myvcard").click(function() {
  ga("send", "pageview", "/vcard-downloaded.html")
}), $(".m-next-section").click(function(e) {
  $("html,body").animate({
    scrollTop: $(this.hash).offset().top + 40
  }, 400), e.preventDefault()
}), $(".backtotop").click(function(e) {
  $("html, body").animate({
    scrollTop: 0
  }, 800), e.preventDefault()
}), loader.click(responsive_viewport >= 768 && supportsTouch ? function(e) {
  headerSlideBottom(), e.preventDefault()
} : responsive_viewport >= 768 ? function(e) {
  $("html, body").animate({
    scrollTop: 2
  }, 0), e.preventDefault()
} : function(e) {
  $("html,body").animate({
    scrollTop: $(this.hash).offset().top + 50
  }, 800), e.preventDefault()
}), $(".design-more").click(function(e) {
  $(".ref-overlay-wrap").addClass("active"), setTimeout(function() {
    $(".ref-overlay").addClass("active")
  }, 20), setTimeout(function() {
    $(".ref-overlay-content").addClass("active"), $(".ref-overlay-close").addClass("active")
  }, 420), e.preventDefault()
}), $(".ref-overlay-close").click(function(e) {
  $(".ref-overlay-content").addClass("pre-inactive"), $(".ref-overlay-close").removeClass("active"), setTimeout(function() {
    $(".ref-overlay").removeClass("active")
  }, 400), setTimeout(function() {
    $(".ref-overlay-content").removeClass("active"), $(".ref-overlay-content").removeClass("pre-inactive"), $(".ref-overlay-wrap").removeClass("active")
  }, 850), e.preventDefault()
}), $("textarea").focus(function() {
  $(".submit").addClass("active")
}), $("input").focus(function() {
  $(this).parent().find(">.form-error").removeClass("active"), setTimeout(function() {
    $(this).parent().find(">.form-error").remove()
  }, 300)
}), $("textarea").focus(function() {
  $("#contact-form .descr .form-error").removeClass("active"), setTimeout(function() {
    $("#contact-form .descr .form-error").remove()
  }, 300)
}), responsive_viewport >= 768 && supportsTouch && ($("input, select, textarea").bind("focus", function() {
  $("#header").css("display", "none"), ipad_keyboard_checker = 1
}), $("input, select, textarea").bind("blur", function() {
  $("#header").css("display", "block"), ipad_keyboard_checker = 0
})), responsive_viewport >= 768 && ($("#about-dev p").one("inview", function(e, o) {
  o && setTimeout(function() {
    draw2()
  }, 400)
}), $(".portfolio-cont h2").one("inview", function(e, o) {
  o && (setTimeout(function() {
    $(".portfolio-anim-simulate").addClass("animate-showPortfolio")
  }, 200), setTimeout(function() {
    $(".portfolio-cont").addClass("active")
  }, 1260))
}), $("#contact-form").one("inview", function(e, o) {
  o && (setTimeout(function() {
    $("input").addClass("activewidth"), $("textarea").addClass("activewidth")
  }, 200), setTimeout(function() {
    $("textarea").addClass("activeheight")
  }, 750), setTimeout(function() {
    $("input").addClass("activetext"), $(".descr").addClass("activetext")
  }, 1500), setTimeout(function() {
    $("input").addClass("activetextlocked")
  }, 2e3))
})), $(window).load(function() {
  loaderContent.addClass("active"), setTimeout(function() {
    loaderLine.addClass("alt")
  }, 1e3), setTimeout(function() {
    loaderLogo.stop().addClass("active")
  }, 1400), setTimeout(function() {
    $(".choose-lang").addClass("active"), header.stop().removeClass("overlay-active")
  }, 2e3), responsive_viewport >= 768 && !supportsTouch && loader.hover(function() {
    loaderLogo.removeClass("active"), $(".loader-line:first-of-type").removeClass("loader-move1b").addClass("loader-move1a"), $(".loader-line2").removeClass("loader-move2b").addClass("loader-move2a"), timer && clearTimeout(timer)
  }, function() {
    $(".loader-line:first-of-type").removeClass("loader-move1a").addClass("loader-move1b"), $(".loader-line2").removeClass("loader-move1b").addClass("loader-move2b"), timer = setTimeout(function() {
      loaderLogo.addClass("active")
    }, 300)
  })
}), $(window).resize(function() {
  responsive_viewport = $(window).width()
});


