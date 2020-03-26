import Vue from 'vue';
console.log('is ios api*************************')

let $IOS_API = {};

function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
  if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
  window.WVJBCallbacks = [callback];
  let WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'https://__bridge_loaded__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
}

$IOS_API.postIosApi = function(apiUrl, param, isShowLogin,callback) {
  setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('post', {
          path: apiUrl,
          showLogin: isShowLogin,
          params: param
      },function(dataFromOC){
          if(typeof callback === 'function'){
              callback && callback(dataFromOC)
          }         
      });
  });
}

$IOS_API.getIosApi = function(apiUrl, param, isShowLogin,callback) {
  setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('get', {
          path: apiUrl,
          showLogin: isShowLogin,
          params: param
      },function(dataFromOC){            
          if(typeof callback === 'function'){
              callback && callback(dataFromOC)
          }
      });
  });
}

$IOS_API.commonMethodIos = function(methodName, param,callback) {
  setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler(methodName, param,function(dataFromOC){
          if(typeof callback === 'function'){
              callback && callback(dataFromOC)
          }           
      });
  });
}

$IOS_API.getSchemeIosUrl = function() {
  let resUrl = window.location.href;
  let res = "";
  if (resUrl.indexOf("share.html") > -1) {
    resUrl = resUrl.replace("share.html", "during.html");
  }
  if (resUrl.indexOf("https") > -1) {
    res = resUrl.replace("https", "vskit");
    return res;
  }
  
  if (resUrl.indexOf("http") > -1) {
    res = resUrl.replace("http", "vskit");
    return res;
  }
}

Vue.prototype.$IOS_API = $IOS_API;
// export default $IOS_API;