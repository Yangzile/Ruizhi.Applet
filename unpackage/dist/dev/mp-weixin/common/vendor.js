(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  redirectTo: redirectTo,
  navigateTo: navigateTo,
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"test-1","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          // eslint-disable-next-line no-sparse-arrays
          ret.push(handler.apply(handlerCtx, (Array.isArray(params) ? params : []).concat([,,,,,,,,,, event])));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 11:
/*!********************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 12));



var _request = _interopRequireDefault(__webpack_require__(/*! ./libs/request */ 13));




















var _queryParams = _interopRequireDefault(__webpack_require__(/*! ./libs/function/queryParams.js */ 17));

var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/function/route.js */ 18));

var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFormat.js */ 19));

var _timeFrom = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFrom.js */ 20));

var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 21));

var _guid = _interopRequireDefault(__webpack_require__(/*! ./libs/function/guid.js */ 22));

var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/function/color.js */ 23));

var _type2icon = _interopRequireDefault(__webpack_require__(/*! ./libs/function/type2icon.js */ 24));

var _randomArray = _interopRequireDefault(__webpack_require__(/*! ./libs/function/randomArray.js */ 25));

var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepClone.js */ 15));

var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepMerge.js */ 14));

var _addUnit = _interopRequireDefault(__webpack_require__(/*! ./libs/function/addUnit.js */ 26));


var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 16));

var _random = _interopRequireDefault(__webpack_require__(/*! ./libs/function/random.js */ 27));

var _trim = _interopRequireDefault(__webpack_require__(/*! ./libs/function/trim.js */ 28));

var _toast = _interopRequireDefault(__webpack_require__(/*! ./libs/function/toast.js */ 29));

var _getParent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/getParent.js */ 30));

var _$parent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/$parent.js */ 31));



var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 32));

var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 33));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // 引入全局mixin
// 引入关于是否mixin集成小程序分享的配置
// import wxshare from './libs/mixin/mpShare.js'
// 全局挂载引入http相关请求拦截插件
function wranning(str) {// 开发环境进行信息输出,主要是一些报错信息
  // 这个环境的来由是在程序编写时候,点击hx编辑器运行调试代码的时候,详见:
  // 	https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
  if (true) {console.warn(str);}} // 尝试判断在根目录的/store中是否有$u.mixin.js，此文件uView默认为需要挂在到全局的vuex的state变量
// HX2.6.11版本,放到try中,控制台依然会警告,暂时不用此方式，
// let vuexStore = {};
// try {
// 	vuexStore = require("@/store/$u.mixin.js");
// } catch (e) {
// 	//TODO handle the exception
// }
// post类型对象参数转为get类型url参数
var $u = { queryParams: _queryParams.default, route: _route.default, timeFormat: _timeFormat.default, date: _timeFormat.default, // 另名date
  timeFrom: _timeFrom.default, colorGradient: _colorGradient.default.colorGradient, guid: _guid.default, color: _color.default, type2icon: _type2icon.default, randomArray: _randomArray.default, wranning: wranning, get: _request.default.get, post: _request.default.post, put: _request.default.put, 'delete': _request.default.delete,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  test: _test.default,
  random: _random.default,
  deepClone: _deepClone.default,
  deepMerge: _deepMerge.default,
  getParent: _getParent.default,
  $parent: _$parent.default,
  addUnit: _addUnit.default,
  trim: _trim.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: _request.default,
  toast: _toast.default,
  config: _config.default, // uView配置信息相关，比如版本号
  zIndex: _zIndex.default };


var install = function install(Vue) {
  Vue.mixin(_mixin.default);
  if (Vue.prototype.openShare) {
    Vue.mixin(mpShare);
  }
  // Vue.mixin(vuexStore);
  // 时间格式化，同时两个名称，date和timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  Vue.filter('date', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {
    return (0, _timeFrom.default)(timestamp, format);
  });
  // 获取设备信息，挂载到$u的sys(system的缩写)属性中，
  // 同时把安卓和ios平台的名称"ios"和"android"挂到$u.os中，方便取用
  $u.sys = uni.getSystemInfoSync();
  $u.os = $u.sys.platform;
  Vue.prototype.$u = $u;
};var _default =

{
  install: install };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 12:
/*!*******************************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/libs/mixin/mixin.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {module.exports = {
  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$u.getRect = this.$uGetRect;
  },
  methods: {
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {var _this = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().
        in(_this)[all ? 'selectAll' : 'select'](selector).
        boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).
        exec();
      });
    } },

  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  } };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 13:
/*!*********************************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/libs/request/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ../function/deepMerge */ 14));
var _test = _interopRequireDefault(__webpack_require__(/*! ../function/test */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var
Request = /*#__PURE__*/function () {_createClass(Request, [{ key: "setConfig",
    // 设置全局默认配置
    value: function setConfig(customConfig) {
      // 深度合并对象，否则会造成对象深层属性丢失
      this.config = (0, _deepMerge.default)(this.config, customConfig);
    }

    // 主要请求部分
  }, { key: "request", value: function request() {var _this = this;var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // 检查请求拦截
      if (this.interceptor.request && typeof this.interceptor.request === 'function') {
        var tmpConfig = {};
        var interceptorReuest = this.interceptor.request(options);
        if (interceptorReuest === false) {
          // 返回一个处于pending状态中的Promise，来取消原promise
          return new Promise(function () {});
        }
        this.options = interceptorReuest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || '';
      options.params = options.params || {};
      options.header = Object.assign(this.config.header, options.header);
      options.method = options.method || this.config.method;

      return new Promise(function (resolve, reject) {
        options.complete = function (response) {
          // 请求返回后，隐藏loading(如果请求返回快的话，可能会没有loading)
          uni.hideLoading();
          // 清除定时器，如果请求回来了，就无需loading
          clearTimeout(_this.config.timer);
          _this.timer = null;
          // 判断用户对拦截返回数据的要求，如果originalData为true，返回所有的数据(response)到拦截器，否则只返回response.data
          if (_this.config.originalData) {
            // 判断是否存在拦截器
            if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
              var resInterceptors = _this.interceptor.response(response);
              // 如果拦截器不返回false，就将拦截器返回的内容给this.$u.post的then回调
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                // 如果拦截器返回false，意味着拦截器定义者认为返回有问题，直接接入catch回调
                reject(response);
              }
            } else {
              // 如果要求返回原始数据，就算没有拦截器，也返回最原始的数据
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
                var _resInterceptors = _this.interceptor.response(response.data);
                if (_resInterceptors !== false) {
                  resolve(_resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                // 如果不是返回原始数据(originalData=false)，且没有拦截器的情况下，返回纯数据给then回调
                resolve(response.data);
              }
            } else {
              // 不返回原始数据的情况下，服务器状态码不为200，modal弹框提示
              if (response.errMsg) {
                uni.showModal({
                  title: response.errMsg });

              }
              reject(response);
            }
          }
        };

        // 判断用户传递的URL是否/开头,如果不是,加上/，这里使用了uView的test.js验证库的url()方法
        options.url = _test.default.url(options.url) ? options.url : _this.config.baseUrl + (options.url.indexOf('/') == 0 ?
        options.url : '/' + options.url);

        // 是否显示loading
        // 加一个是否已有timer定时器的判断，否则有两个同时请求的时候，后者会清除前者的定时器id
        // 而没有清除前者的定时器，导致前者超时，一直显示loading
        if (_this.config.showLoading && !_this.config.timer) {
          _this.config.timer = setTimeout(function () {
            uni.showLoading({
              title: _this.config.loadingText,
              mask: _this.config.loadingMask });

            _this.config.timer = null;
          }, _this.config.loadingTime);
        }
        uni.request(options);
      }).catch(function (res) {
        // 如果返回reject()，不让其进入this.$u.post().then().catch()后面的catct()
        // 因为很多人都会忘了写后面的catch()，导致报错捕获不到catch
        return new Promise(function () {});
      });
    } }]);

  function Request() {var _this2 = this;_classCallCheck(this, Request);
    this.config = {
      baseUrl: '', // 请求的根域名
      // 默认的请求头
      header: {},
      method: 'POST',
      // 设置为json，返回后uni.request会对数据进行一次JSON.parse
      dataType: 'json',
      // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
      responseType: 'text',
      showLoading: true, // 是否显示请求中的loading
      loadingText: '请求中...',
      loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
      timer: null, // 定时器
      originalData: false, // 是否在拦截器中返回服务端的原始数据，见文档说明
      loadingMask: true // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    };

    // 拦截器
    this.interceptor = {
      // 请求前的拦截
      request: null,
      // 请求后的拦截
      response: null };


    // get请求
    this.get = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        method: 'GET',
        url: url,
        header: header,
        data: data });

    };

    // post请求
    this.post = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'POST',
        header: header,
        data: data });

    };

    // put请求，不支持支付宝小程序(HX2.6.15)
    this.put = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'PUT',
        header: header,
        data: data });

    };

    // delete请求，不支持支付宝和头条小程序(HX2.6.15)
    this.delete = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'DELETE',
        header: header,
        data: data });

    };
  }return Request;}();var _default =

new Request();exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 14:
/*!**************************************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/libs/function/deepMerge.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./deepClone */ 15));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// JS对象深度合并
function deepMerge() {var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = (0, _deepClone.default)(target);
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else {
        if (typeof source[prop] !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}var _default =

deepMerge;exports.default = _default;

/***/ }),

/***/ 15:
/*!**************************************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/libs/function/deepClone.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// 深度克隆
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (typeof obj !== "object" && typeof obj !== 'function') {
    //原始类型直接返回
    return obj;
  }
  var o = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}var _default =

deepClone;exports.default = _default;

/***/ }),

/***/ 16:
/*!*********************************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/libs/function/test.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 验证电子邮箱格式
                                                                                                      */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
   * 验证手机格式
   */
function mobile(value) {
  return /^1[23456789]\d{9}$/.test(value);
}

/**
   * 验证URL格式
   */
function url(value) {
  return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.
  test(value);
}

/**
   * 验证日期格式
   */
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
   * 验证ISO类型的日期格式
   */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
   * 验证十进制数字
   */
function number(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

/**
   * 验证整数
   */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
   * 验证身份证号码
   */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
  value);
}

/**
   * 是否车牌号
   */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
   * 金额,只允许2位小数
   */
function amount(value) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
   * 中文
   */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
   * 只能输入字母
   */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
   * 只能是字母或者数字
   */
function enOrNum(value) {
  //英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
   * 验证是否包含某个值
   */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
   * 验证一个值范围[min, max]
   */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
   * 验证一个长度范围[min, max]
   */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
   * 是否固定电话
   */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
   * 判断是否为空
   */
function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (0 === value || isNaN(value)) return true;
      break;
    case 'object':
      if (null === value || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;}

  return false;
}

/**
   * 是否json字符串
   */
function jsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}


/**
   * 是否数组
   */
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}


/**
   * 是否对象
   */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}var _default =


{
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array };exports.default = _default;

/***/ }),

/***/ 17:
/*!****************************************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/libs/function/queryParams.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 对象转url参数
                                                                                                      * @param {*} data,对象
                                                                                                      * @param {*} isPrefix,是否自动加上"?"
                                                                                                      */
function queryParams() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';var _loop = function _loop(
  key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push(key + '[' + i + ']=' + value[i]);
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push(key + '=' + _value);
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = "";
          value.forEach(function (_value) {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(key + '=' + commaStr);
          break;
        default:
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });}

    } else {
      _result.push(key + '=' + value);
    }};for (var key in data) {var _ret = _loop(key);if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}var _default =

queryParams;exports.default = _default;

/***/ }),

/***/ 18:
/*!**********************************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/libs/function/route.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _queryParams = _interopRequireDefault(__webpack_require__(/*! ../../libs/function/queryParams.js */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
/**
                                                                                                                                                                                                                                                                                            * 路由跳转
                                                                                                                                                                                                                                                                                            * 注意:本方法没有对跳转的回调函数进行封装
                                                                                                                                                                                                                                                                                            */
function route() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var config = {
    type: 'navigateTo',
    url: '',
    delta: 1, // navigateBack页面后退时,回退的层数
    params: {}, // 传递的参数
    animationType: 'pop-in', // 窗口动画,只在APP有效
    animationDuration: 300 // 窗口动画持续时间,单位毫秒,只在APP有效
  };
  config = Object.assign(config, options);
  // 如果url没有"/"开头，添加上，因为uni的路由跳转需要"/"开头
  if (config.url[0] != '/') config.url = '/' + config.url;
  // 判断是否有传递显式的参数,Object.keys转为数组并判断长度,switchTab类型时不能携带参数
  if (Object.keys(config.params).length && config.type != 'switchTab') {
    // 判断用户传递的url中，是否带有参数
    // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
    // 如果有url中有get参数，转换后无需带上"?"
    var query = '';
    if (/.*\/.*\?.*=.*/.test(config.url)) {
      // object对象转为get类型的参数
      query = (0, _queryParams.default)(config.params, false);
      // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
      config.url += "&" + query;
    } else {
      query = (0, _queryParams.default)(config.params);
      config.url += query;
    }
  }
  // 简写形式，把url和参数拼接起来
  if (typeof options === 'string' && typeof params == 'object') {
    var _query = '';
    if (/.*\/.*\?.*=.*/.test(options)) {
      // object对象转为get类型的参数
      _query = (0, _queryParams.default)(params, false);
      // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
      options += "&" + _query;
    } else {
      _query = (0, _queryParams.default)(params);
      options += _query;
    }
  }
  // 判断是否一个字符串，如果是，直接跳转(简写法)
  // 如果是中情形，默认第二个参数为对象形式的参数
  if (typeof options === 'string') {
    if (options[0] != '/') options = '/' + options;
    return uni.navigateTo({
      url: options });

  }
  // navigateTo类型的跳转
  if (config.type == 'navigateTo' || config.type == 'to') {
    return uni.navigateTo({
      url: config.url,
      animationType: config.animationType,
      animationDuration: config.animationDuration });

  }
  if (config.type == 'redirectTo' || config.type == 'redirect') {
    return uni.redirectTo({
      url: config.url });

  }
  if (config.type == 'switchTab' || config.type == 'tab') {
    return uni.switchTab({
      url: config.url });

  }
  if (config.type == 'reLaunch') {
    return uni.reLaunch({
      url: config.url });

  }
  if (config.type == 'navigateBack' || config.type == 'back') {
    return uni.navigateBack({
      delta: parseInt(config.delta ? config.delta : this.delta) });

  }
}var _default =

route;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 19:
/*!***************************************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/libs/function/timeFormat.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function timeFormat() {var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 其他更多是格式化有如下:
  // yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
  timestamp = parseInt(timestamp);
  // 如果为null,则格式化当前时间
  if (!timestamp) timestamp = Number(new Date());
  // 判断用户输入的时间戳是秒还是毫秒,一般前端js获取的时间戳是毫秒(13位),后端传过来的为秒(10位)
  if (timestamp.toString().length == 10) timestamp *= 1000;
  var date = new Date(timestamp);
  var ret;
  var opt = {
    "y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "h+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "s+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    };
  };
  return fmt;
}var _default =

timeFormat;exports.default = _default;

/***/ }),

/***/ 196:
/*!********************************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/libs/util/emitter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 递归使用 call 方式this指向
                                                                                                      * @param componentName // 需要找的组件的名称
                                                                                                      * @param eventName // 事件名称
                                                                                                      * @param params // 需要传递的参数
                                                                                                      */
function _broadcast(componentName, eventName, params) {
  // 循环子节点找到名称一样的子节点 否则 递归 当前子节点
  this.$children.map(function (child) {
    if (componentName === child.$options.name) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      _broadcast.apply(child, [componentName, eventName].concat(params));
    }
  });
}var _default =
{
  methods: {
    /**
              * 派发 (向上查找) (一个)
              * @param componentName // 需要找的组件的名称
              * @param eventName // 事件名称
              * @param params // 需要传递的参数
              */
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root; //$parent 找到最近的父节点 $root 根节点
      var name = parent.$options.name; // 获取当前组件实例的name
      // 如果当前有节点 && 当前没名称 且 当前名称等于需要传进来的名称的时候就去查找当前的节点
      // 循环出当前名称的一样的组件实例
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      // 有节点表示当前找到了name一样的实例
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    /**
        * 广播 (向下查找) (广播多个)
        * @param componentName // 需要找的组件的名称
        * @param eventName // 事件名称
        * @param params // 需要传递的参数
        */
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    } } };exports.default = _default;

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_NAME":"test-1","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"test-1","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"test-1","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"test-1","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!*************************************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/libs/function/timeFrom.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ../../libs/function/timeFormat.js */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                                                                                                          * 时间戳转为多久之前
                                                                                                                                                                                                                                                                                          * @param String timestamp 时间戳
                                                                                                                                                                                                                                                                                          * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
                                                                                                                                                                                                                                                                                          * 如果为布尔值false，无论什么时间，都返回多久以前的格式
                                                                                                                                                                                                                                                                                          */
function timeFrom() {var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  if (timestamp == null) timestamp = Number(new Date());
  timestamp = parseInt(timestamp);
  // 判断用户输入的时间戳是秒还是毫秒,一般前端js获取的时间戳是毫秒(13位),后端传过来的为秒(10位)
  if (timestamp.toString().length == 10) timestamp *= 1000;
  var timer = new Date().getTime() - timestamp;
  timer = parseInt(timer / 1000);
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = parseInt(timer / 60) + '分钟前';
      break;
    case timer >= 3600 && timer < 86400:
      tips = parseInt(timer / 3600) + '小时前';
      break;
    case timer >= 86400 && timer < 2592000:
      tips = parseInt(timer / 86400) + '天前';
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = parseInt(timer / (86400 * 30)) + '个月前';
        } else {
          tips = parseInt(timer / (86400 * 365)) + '年前';
        }
      } else {
        tips = (0, _timeFormat.default)(timestamp, format);
      }}

  return tips;
}var _default =

timeFrom;exports.default = _default;

/***/ }),

/***/ 21:
/*!******************************************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/libs/function/colorGradient.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 求两个颜色之间的渐变值
                                                                                                      * @param {string} startColor 开始的颜色
                                                                                                      * @param {string} endColor 结束的颜色
                                                                                                      * @param {number} step 颜色等分的份额
                                                                                                      * */
function colorGradient() {var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); //转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];

  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];

  var sR = (endR - startR) / step; //总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    //计算每一步的hex值 
    var hex = rgbToHex('rgb(' + Math.round(sR * i + startR) + ',' + Math.round(sG * i + startG) + ',' + Math.round(sB *
    i + startB) + ')');
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = sColor.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(_i, _i + 2)));
    }
    if (!str) {
      return sColorChange;
    } else {
      return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
    }
  } else if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map(function (val) {return Number(val);});
  } else {
    return sColor;
  }
};

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    var strHex = "#";
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? 0 + '' + hex : hex; // 保证每个rgb的值为2位
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  } else if (reg.test(_this)) {
    var aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    } else if (aNum.length === 3) {
      var numHex = "#";
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}var _default =

{
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex };exports.default = _default;

/***/ }),

/***/ 22:
/*!*********************************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/libs/function/guid.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
                                                                                                      * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier) 
                                                                                                      * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
                                                                                                      * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
                                                                                                      * v-for的时候,推荐使用后端返回的id而不是循环的index
                                                                                                      * @param {Number} len uuid的长度
                                                                                                      * @param {Boolean} firstU 将返回的首字母置为"u"
                                                                                                      * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
                                                                                                      */
function guid() {var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {uuid[i] = chars[0 | Math.random() * radix];}
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return 'u' + uuid.join('');
  } else {
    return uuid.join('');
  }
}var _default =

guid;exports.default = _default;

/***/ }),

/***/ 23:
/*!**********************************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/libs/function/color.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: "#2979ff",
  primaryDark: "#2b85e4",
  primaryDisabled: "#a0cfff",
  primaryLight: "#ecf5ff",
  bgColor: "#f3f4f6",

  info: "#909399",
  infoDark: "#82848a",
  infoDisabled: "#c8c9cc",
  infoLight: "#f4f4f5",

  warning: "#ff9900",
  warningDark: "#f29100",
  warningDisabled: "#fcbd71",
  warningLight: "#fdf6ec",

  error: "#fa3534",
  errorDark: "#dd6161",
  errorDisabled: "#fab6b6",
  errorLight: "#fef0f0",

  success: "#19be6b",
  successDark: "#18b566",
  successDisabled: "#71d5a1",
  successLight: "#dbf1e1",

  mainColor: "#303133",
  contentColor: "#606266",
  tipsColor: "#909399",
  lightColor: "#c0c4cc",
  borderColor: "#e4e7ed" };var _default =


color;exports.default = _default;

/***/ }),

/***/ 24:
/*!**************************************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/libs/function/type2icon.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 根据主题type值,获取对应的图标
                                                                                                      * @param String type 主题名称,primary|info|error|warning|success
                                                                                                      * @param String fill 是否使用fill填充实体的图标  
                                                                                                      */
function type2icon() {var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';}

  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}var _default =

type2icon;exports.default = _default;

/***/ }),

/***/ 25:
/*!****************************************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/libs/function/randomArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 打乱数组
function randomArray() {var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {return Math.random() - 0.5;});
}var _default =

randomArray;exports.default = _default;

/***/ }),

/***/ 26:
/*!************************************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/libs/function/addUnit.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = addUnit;var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
function addUnit() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/***/ }),

/***/ 27:
/*!***********************************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/libs/function/random.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}var _default =

random;exports.default = _default;

/***/ }),

/***/ 28:
/*!*********************************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/libs/function/trim.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function trim(str) {var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (pos == "left") {
    return str.replace(/^\s*/, '');
  } else if (pos == 'right') {
    return str.replace(/(\s*$)/g, "");
  } else if (pos == 'all') {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}var _default =

trim;exports.default = _default;

/***/ }),

/***/ 29:
/*!**********************************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/libs/function/toast.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function toast(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  uni.showToast({
    title: title,
    icon: 'none',
    duration: duration });

}var _default =

toast;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 30:
/*!**************************************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/libs/function/getParent.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = getParent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
function getParent(name, keys) {
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {var _ret = function () {
        var data = {};
        // 判断keys是否数组，如果传过来的是一个数组，那么直接使用数组元素值当做键值去父组件寻找
        if (Array.isArray(keys)) {
          keys.map(function (val) {
            data[val] = parent[val] ? parent[val] : '';
          });
        } else {
          // 历遍传过来的对象参数
          for (var i in keys) {
            // 如果子组件有此值则用，无此值则用父组件的值
            // 判断是否空数组，如果是，则用父组件的值，否则用子组件的值
            if (Array.isArray(keys[i])) {
              if (keys[i].length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else if (keys[i].constructor === Object) {
              // 判断是否对象，如果是对象，且有属性，那么使用子组件的值，否则使用父组件的值
              if (Object.keys(keys[i]).length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else {
              // 只要子组件有传值，即使是false值，也是“传值”了，也需要覆盖父组件的同名参数
              data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
            }
          }
        }
        return { v: data };}();if (typeof _ret === "object") return _ret.v;
    }
  }

  return {};
}

/***/ }),

/***/ 31:
/*!************************************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/libs/function/$parent.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = $parent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
function $parent(name, keys) {
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/***/ }),

/***/ 32:
/*!*********************************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/libs/config/config.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 此版本发布于2020-07-28
var version = '1.5.6';var _default =

{
  v: version,
  version: version,
  // 主题名称
  type: [
  'primary',
  'success',
  'info',
  'error',
  'warning'] };exports.default = _default;

/***/ }),

/***/ 33:
/*!*********************************************************!*\
  !*** H:/uniapp练习/test-1/uview-ui/libs/config/zIndex.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */var _default =

{
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965 };exports.default = _default;

/***/ }),

/***/ 330:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 331);

/***/ }),

/***/ 331:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 332);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 332:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** H:/uniapp练习/test-1/pages.json ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 40:
/*!***************************************************!*\
  !*** H:/uniapp练习/test-1/static/img/exam_icon.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABQCAYAAABcQfj1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEyOTM3NzIzRTI4NjExRTlCQ0ZGRUZBRDc1ODExRjAzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEyOTM3NzI0RTI4NjExRTlCQ0ZGRUZBRDc1ODExRjAzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTI5Mzc3MjFFMjg2MTFFOUJDRkZFRkFENzU4MTFGMDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTI5Mzc3MjJFMjg2MTFFOUJDRkZFRkFENzU4MTFGMDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz43EgdMAAAKg0lEQVR42uxc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"

/***/ }),

/***/ 41:
/*!*******************************************************!*\
  !*** H:/uniapp练习/test-1/static/img/guidance_icon.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABMCAYAAADkzAD+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIwQkVDOEUzRTI4NjExRTlCQUZBOTc1NjBFOTI1Q0Y2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIwQkVDOEU0RTI4NjExRTlCQUZBOTc1NjBFOTI1Q0Y2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjBCRUM4RTFFMjg2MTFFOUJBRkE5NzU2MEU5MjVDRjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjBCRUM4RTJFMjg2MTFFOUJBRkE5NzU2MEU5MjVDRjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz65IMGIAAAF/0lEQVR42uyc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"

/***/ }),

/***/ 42:
/*!****************************************************!*\
  !*** H:/uniapp练习/test-1/static/img/class_icon.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAYAAACZM2JkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI1MjFENEUzRTI4NjExRTk4N0EzQkQ3MzMyMkI0RkY2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI1MjFENEU0RTI4NjExRTk4N0EzQkQ3MzMyMkI0RkY2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjUyMUQ0RTFFMjg2MTFFOTg3QTNCRDczMzIyQjRGRjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjUyMUQ0RTJFMjg2MTFFOTg3QTNCRDczMzIyQjRGRjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4G5+QiAAAIX0lEQVR42uxd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"

/***/ }),

/***/ 43:
/*!*******************************************************!*\
  !*** H:/uniapp练习/test-1/static/img/teaching_icon.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABSCAYAAAD3oJK6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIzOTFFNjEzRTI4NjExRTk5NDI0RUM2OUU5OEZGMjg5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIzOTFFNjE0RTI4NjExRTk5NDI0RUM2OUU5OEZGMjg5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjM5MUU2MTFFMjg2MTFFOTk0MjRFQzY5RTk4RkYyODkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjM5MUU2MTJFMjg2MTFFOTk0MjRFQzY5RTk4RkYyODkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4MeK/fAAAG4ElEQVR42uyc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"

/***/ }),

/***/ 60:
/*!******************************************************!*\
  !*** H:/uniapp练习/test-1/static/img/teacher_icon.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM5NjZBOUEzRTI4RjExRTlCQzA1QTlEQzNFNzFDRDUzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM5NjZBOUE0RTI4RjExRTlCQzA1QTlEQzNFNzFDRDUzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Qzk2NkE5QTFFMjhGMTFFOUJDMDVBOURDM0U3MUNENTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Qzk2NkE5QTJFMjhGMTFFOUJDMDVBOURDM0U3MUNENTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4nZwIwAAAKTklEQVR42uxd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"

/***/ }),

/***/ 61:
/*!**********************************************************!*\
  !*** H:/uniapp练习/test-1/static/img/teach-class_icon.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM2RDU5RTgzRTI4RjExRTlCQjM3ODAyMkVCRjIyNjREIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM2RDU5RTg0RTI4RjExRTlCQjM3ODAyMkVCRjIyNjREIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzZENTlFODFFMjhGMTFFOUJCMzc4MDIyRUJGMjI2NEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzZENTlFODJFMjhGMTFFOUJCMzc4MDIyRUJGMjI2NEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz45i5GHAAAHF0lEQVR42uyd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"

/***/ }),

/***/ 62:
/*!*********************************************************!*\
  !*** H:/uniapp练习/test-1/static/img/class_live-icon.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMxRkU3M0YzRTI4RjExRTk5MTVDQTg5NDBDMkQxRUE3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMxRkU3M0Y0RTI4RjExRTk5MTVDQTg5NDBDMkQxRUE3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzFGRTczRjFFMjhGMTFFOTkxNUNBODk0MEMyRDFFQTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzFGRTczRjJFMjhGMTFFOTkxNUNBODk0MEMyRDFFQTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz72Kgh8AAAI2ElEQVR42uyd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"

/***/ }),

/***/ 63:
/*!******************************************************!*\
  !*** H:/uniapp练习/test-1/static/img/student-icon.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI2QzI3OUYzRTI4RjExRTk4M0ExRDAzMDg5NzY0RTJDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI2QzI3OUY0RTI4RjExRTk4M0ExRDAzMDg5NzY0RTJDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjZDMjc5RjFFMjhGMTFFOTgzQTFEMDMwODk3NjRFMkMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjZDMjc5RjJFMjhGMTFFOTgzQTFEMDMwODk3NjRFMkMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6IBhAgAAAKrklEQVR42uxd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"

/***/ }),

/***/ 64:
/*!***************************************************!*\
  !*** H:/uniapp练习/test-1/static/img/teacher01.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAAC0CAYAAACUuc6mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNBMjAyOUMzRTI5RDExRTlCNTlEQTkwNTdEM0E4RTNDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNBMjAyOUM0RTI5RDExRTlCNTlEQTkwNTdEM0E4RTNDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0EyMDI5QzFFMjlEMTFFOUI1OURBOTA1N0QzQThFM0MiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0EyMDI5QzJFMjlEMTFFOUI1OURBOTA1N0QzQThFM0MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6mSrKcAACWTElEQVR42uy9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"

/***/ }),

/***/ 65:
/*!***************************************************!*\
  !*** H:/uniapp练习/test-1/static/img/teacher02.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/img/teacher02.png";

/***/ }),

/***/ 66:
/*!***************************************************!*\
  !*** H:/uniapp练习/test-1/static/img/teacher04.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAC2CAYAAADKpi9ZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFCNzVFMDUzRTI5RTExRTk4QzY5QzYyNzk1Q0M0ODg1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFCNzVFMDU0RTI5RTExRTk4QzY5QzYyNzk1Q0M0ODg1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUI3NUUwNTFFMjlFMTFFOThDNjlDNjI3OTVDQzQ4ODUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUI3NUUwNTJFMjlFMTFFOThDNjlDNjI3OTVDQzQ4ODUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6hILUrAACS8UlEQVR42uy9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"

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map