(function flexible (window, document) {
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1
  var browser = {
    versions: function () {
      var u = navigator.userAgent, app = navigator.appVersion;
      return {
        trident: u.indexOf('Trident') > -1, // IE内核
        presto: u.indexOf('Presto') > -1, // opera内核
        webkit: u.indexOf('AppleWebkit') > -1, // 苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
        mobile: !!u.match(/AppleWebkit.*Mobile.*/), // 是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者UC浏览器
        iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone
        iPad: u.indexOf('iPad') > -1, // 是否为iPad
      }
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
  };

  function refreshRem () {
    var width = docEl.getBoundingClientRect().width;
    if (!browser.versions.mobile) {
      width = width > 1200 ? width : 1200;
    }
    var rem;
    if (width / dpr > 540) {
      width = width * dpr;
    }
    if (browser.versions.mobile) {
      rem = width / 75; // 设计稿为750
    } else {
      rem = width / 192; // 设计稿为1920
    }
    docEl.style.fontSize = rem + 'px';
    flexible.rem = window.rem = rem;
  }

  // adjust body font size
  function setBodyFontSize () {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10
  function setRemUnit () {
    var rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
  }

  refreshRem()

  // reset rem unit on page resize
  window.addEventListener('resize', refreshRem)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      refreshRem()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))