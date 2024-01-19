(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$2 = Symbol.for("react.element"), n$3 = Symbol.for("react.portal"), p$4 = Symbol.for("react.fragment"), q$3 = Symbol.for("react.strict_mode"), r$2 = Symbol.for("react.profiler"), t$2 = Symbol.for("react.provider"), u$2 = Symbol.for("react.context"), v$2 = Symbol.for("react.forward_ref"), w$1 = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
function A$1(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = z$1 && a[z$1] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$1 = {};
function E$1(a, b, e2) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e2 || B$1;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E$1.prototype;
function G$1(a, b, e2) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e2 || B$1;
}
var H$1 = G$1.prototype = new F();
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = true;
var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
function M$1(a, b, e2) {
  var d, c = {}, k2 = null, h2 = null;
  if (null != b)
    for (d in void 0 !== b.ref && (h2 = b.ref), void 0 !== b.key && (k2 = "" + b.key), b)
      J.call(b, d) && !L$1.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g)
    c.children = e2;
  else if (1 < g) {
    for (var f2 = Array(g), m2 = 0; m2 < g; m2++)
      f2[m2] = arguments[m2 + 2];
    c.children = f2;
  }
  if (a && a.defaultProps)
    for (d in g = a.defaultProps, g)
      void 0 === c[d] && (c[d] = g[d]);
  return { $$typeof: l$2, type: a, key: k2, ref: h2, props: c, _owner: K$1.current };
}
function N$1(a, b) {
  return { $$typeof: l$2, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$2;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var P$1 = /\/+/g;
function Q$1(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R$1(a, b, e2, d, c) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2)
    a = null;
  var h2 = false;
  if (null === a)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l$2:
          case n$3:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a, c = c(h2), a = "" === d ? "." + Q$1(h2, 0) : d, I$1(c) ? (e2 = "", null != a && (e2 = a.replace(P$1, "$&/") + "/"), R$1(c, b, e2, "", function(a2) {
      return a2;
    })) : null != c && (O$1(c) && (c = N$1(c, e2 + (!c.key || h2 && h2.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b.push(c)), 1;
  h2 = 0;
  d = "" === d ? "." : d + ":";
  if (I$1(a))
    for (var g = 0; g < a.length; g++) {
      k2 = a[g];
      var f2 = d + Q$1(k2, g);
      h2 += R$1(k2, b, e2, f2, c);
    }
  else if (f2 = A$1(a), "function" === typeof f2)
    for (a = f2.call(a), g = 0; !(k2 = a.next()).done; )
      k2 = k2.value, f2 = d + Q$1(k2, g++), h2 += R$1(k2, b, e2, f2, c);
  else if ("object" === k2)
    throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$1(a, b, e2) {
  if (null == a)
    return a;
  var d = [], c = 0;
  R$1(a, d, "", "", function(a2) {
    return b.call(e2, a2, c++);
  });
  return d;
}
function T$1(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function(b2) {
      if (0 === a._status || -1 === a._status)
        a._status = 1, a._result = b2;
    }, function(b2) {
      if (0 === a._status || -1 === a._status)
        a._status = 2, a._result = b2;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status)
    return a._result.default;
  throw a._result;
}
var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
react_production_min.Children = { map: S$1, forEach: function(a, b, e2) {
  S$1(a, function() {
    b.apply(this, arguments);
  }, e2);
}, count: function(a) {
  var b = 0;
  S$1(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return S$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$1(a))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = p$4;
react_production_min.Profiler = r$2;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$3;
react_production_min.Suspense = w$1;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.cloneElement = function(a, b, e2) {
  if (null === a || void 0 === a)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C$1({}, a.props), c = a.key, k2 = a.ref, h2 = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k2 = b.ref, h2 = K$1.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g = a.type.defaultProps;
    for (f2 in b)
      J.call(b, f2) && !L$1.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    d.children = e2;
  else if (1 < f2) {
    g = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g[m2] = arguments[m2 + 2];
    d.children = g;
  }
  return { $$typeof: l$2, type: a.type, key: c, ref: k2, props: d, _owner: h2 };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u$2, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t$2, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function(a) {
  var b = M$1.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$2, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
};
react_production_min.startTransition = function(a) {
  var b = V$1.transition;
  V$1.transition = {};
  try {
    a();
  } finally {
    V$1.transition = b;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a, b) {
  return U$1.current.useCallback(a, b);
};
react_production_min.useContext = function(a) {
  return U$1.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$1.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b) {
  return U$1.current.useEffect(a, b);
};
react_production_min.useId = function() {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function(a, b, e2) {
  return U$1.current.useImperativeHandle(a, b, e2);
};
react_production_min.useInsertionEffect = function(a, b) {
  return U$1.current.useInsertionEffect(a, b);
};
react_production_min.useLayoutEffect = function(a, b) {
  return U$1.current.useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return U$1.current.useMemo(a, b);
};
react_production_min.useReducer = function(a, b, e2) {
  return U$1.current.useReducer(a, b, e2);
};
react_production_min.useRef = function(a) {
  return U$1.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$1.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b, e2) {
  return U$1.current.useSyncExternalStore(a, b, e2);
};
react_production_min.useTransition = function() {
  return U$1.current.useTransition();
};
react_production_min.version = "18.2.0";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports, k$1 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$2 = Object.prototype.hasOwnProperty, n$2 = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$3 = { key: true, ref: true, __self: true, __source: true };
function q$2(c, a, g) {
  var b, d = {}, e2 = null, h2 = null;
  void 0 !== g && (e2 = "" + g);
  void 0 !== a.key && (e2 = "" + a.key);
  void 0 !== a.ref && (h2 = a.ref);
  for (b in a)
    m$2.call(a, b) && !p$3.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k$1, type: c, key: e2, ref: h2, props: d, _owner: n$2.current };
}
reactJsxRuntime_production_min.Fragment = l$1;
reactJsxRuntime_production_min.jsx = q$2;
reactJsxRuntime_production_min.jsxs = q$2;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var client = {};
var reactDom$1 = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; 0 < c; ) {
        var d = c - 1 >>> 1, e2 = a[d];
        if (0 < g(e2, b))
          a[d] = b, a[c] = e2, c = d;
        else
          break a;
      }
  }
  function h2(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length)
      return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
      a[0] = c;
      a:
        for (var d = 0, e2 = a.length, w2 = e2 >>> 1; d < w2; ) {
          var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
          if (0 > g(C2, c))
            n2 < e2 && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
          else if (n2 < e2 && 0 > g(x2, c))
            a[d] = x2, a[n2] = c, d = n2;
          else
            break a;
        }
    }
    return b;
  }
  function g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b = h2(t2); null !== b; ) {
      if (null === b.callback)
        k2(t2);
      else if (b.startTime <= a)
        k2(t2), b.sortIndex = b.expirationTime, f2(r2, b);
      else
        break;
      b = h2(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2)
      if (null !== h2(r2))
        A2 = true, I2(J2);
      else {
        var b = h2(t2);
        null !== b && K2(H2, b.startTime - a);
      }
  }
  function J2(a, b) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c = y2;
    try {
      G2(b);
      for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b) || a && !M2()); ) {
        var d = v2.callback;
        if ("function" === typeof d) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e2 = d(v2.expirationTime <= b);
          b = exports.unstable_now();
          "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b);
        } else
          k2(r2);
        v2 = h2(r2);
      }
      if (null !== v2)
        var w2 = true;
      else {
        var m2 = h2(t2);
        null !== m2 && K2(H2, m2.startTime - b);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports.unstable_now();
      Q2 = a;
      var b = true;
      try {
        b = O2(true, a);
      } finally {
        b ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if ("function" === typeof F2)
    S2 = function() {
      F2(R2);
    };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = y2;
    }
    var c = y2;
    y2 = b;
    try {
      return a();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = y2;
    y2 = a;
    try {
      return b();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c + e2;
    a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e2, sortIndex: -1 };
    c > d ? (a.sortIndex = c, f2(t2, a), null === h2(r2) && a === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e2, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b = y2;
    return function() {
      var c = y2;
      y2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p$2(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b) {
  ha(a, b);
  ha(a + "Capture", b);
}
function ha(a, b) {
  ea[a] = b;
  for (a = 0; a < b.length; a++)
    da.add(b[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
  if (ja.call(ma, a))
    return true;
  if (ja.call(la, a))
    return false;
  if (ka.test(a))
    return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b, c, d) {
  if (null !== c && 0 === c.type)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (null !== c)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa(a, b, c, d) {
  if (null === b || "undefined" === typeof b || pa(a, b, c, d))
    return true;
  if (d)
    return false;
  if (null !== c)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return false === b;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function v$1(a, b, c, d, e2, f2, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e2;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f2;
  this.removeEmptyString = g;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z[a] = new v$1(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  z[b] = new v$1(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z[a] = new v$1(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z[a] = new v$1(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z[a] = new v$1(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z[a] = new v$1(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z[a] = new v$1(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z[a] = new v$1(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z[a] = new v$1(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(
    ra,
    sa
  );
  z[b] = new v$1(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v$1(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v$1(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z[a] = new v$1(a, 1, false, a.toLowerCase(), null, false, false);
});
z.xlinkHref = new v$1("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z[a] = new v$1(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b, c, d) {
  var e2 = z.hasOwnProperty(b) ? z[b] : null;
  if (null !== e2 ? 0 !== e2.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1])
    qa(b, c, e2, d) && (c = null), d || null === e2 ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e2.mustUseProperty ? a[e2.propertyName] = null === c ? 3 === e2.type ? false : "" : c : (b = e2.attributeName, d = e2.attributeNamespace, null === c ? a.removeAttribute(b) : (e2 = e2.type, c = 3 === e2 || 4 === e2 && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A = Object.assign, La;
function Ma(a) {
  if (void 0 === La)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      La = b && b[1] || "";
    }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b) {
  if (!a || Na)
    return "";
  Na = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b)
      if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (l2) {
          var d = l2;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (l2) {
          d = l2;
        }
        a.call(b.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d && "string" === typeof l2.stack) {
      for (var e2 = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e2.length - 1, h2 = f2.length - 1; 1 <= g && 0 <= h2 && e2[g] !== f2[h2]; )
        h2--;
      for (; 1 <= g && 0 <= h2; g--, h2--)
        if (e2[g] !== f2[h2]) {
          if (1 !== g || 1 !== h2) {
            do
              if (g--, h2--, 0 > h2 || e2[g] !== f2[h2]) {
                var k2 = "\n" + e2[g].replace(" at new ", " at ");
                a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                return k2;
              }
            while (1 <= g && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a)
    return null;
  if ("function" === typeof a)
    return a.displayName || a.name || null;
  if ("string" === typeof a)
    return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a)
    switch (a.$$typeof) {
      case Ca:
        return (a.displayName || "Context") + ".Consumer";
      case Ba:
        return (a._context.displayName || "Context") + ".Provider";
      case Da:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Ga:
        return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
      case Ha:
        b = a._payload;
        a = a._init;
        try {
          return Qa(a(b));
        } catch (c) {
        }
    }
  return null;
}
function Ra(a) {
  var b = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b.displayName || "Context") + ".Consumer";
    case 10:
      return (b._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b);
    case 8:
      return b === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b)
        return b.displayName || b.name || null;
      if ("string" === typeof b)
        return b;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e2 = c.get, f2 = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a)
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
}
function Za(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
  c = Sa(null != b.value ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
}
function ab(a, b) {
  b = b.checked;
  null != b && ta(a, "checked", b, false);
}
function bb(a, b) {
  ab(a, b);
  var c = Sa(b.value), d = b.type;
  if (null != c)
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function db(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function cb(a, b, c) {
  if ("number" !== b || Xa(a.ownerDocument) !== a)
    null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e2 = 0; e2 < c.length; e2++)
      b["$" + c[e2]] = true;
    for (c = 0; c < a.length; c++)
      e2 = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e2 && (a[c].selected = e2), e2 && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e2 = 0; e2 < a.length; e2++) {
      if (a[e2].value === c) {
        a[e2].selected = true;
        d && (a[e2].defaultSelected = true);
        return;
      }
      null !== b || a[e2].disabled || (b = a[e2]);
    }
    null !== b && (b.selected = true);
  }
}
function gb(a, b) {
  if (null != b.dangerouslySetInnerHTML)
    throw Error(p$2(91));
  return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b) {
  var c = b.value;
  if (null == c) {
    c = b.children;
    b = b.defaultValue;
    if (null != c) {
      if (null != b)
        throw Error(p$2(92));
      if (eb(c)) {
        if (1 < c.length)
          throw Error(p$2(93));
        c = c[0];
      }
      b = c;
    }
    null == b && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e2);
    });
  } : a;
}(function(a, b) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
    a.innerHTML = b;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = mb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function ob(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b] = pb[a];
  });
});
function rb(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
}
function sb(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"), e2 = rb(c, b[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e2) : a[c] = e2;
    }
}
var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a, b) {
  if (b) {
    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
      throw Error(p$2(137, a));
    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children)
        throw Error(p$2(60));
      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML))
        throw Error(p$2(61));
    }
    if (null != b.style && "object" !== typeof b.style)
      throw Error(p$2(62));
  }
}
function vb(a, b) {
  if (-1 === a.indexOf("-"))
    return "string" === typeof b.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb)
      throw Error(p$2(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb() {
}
var Ib = false;
function Jb(a, b, c) {
  if (Ib)
    return a(b, c);
  Ib = true;
  try {
    return Gb(a, b, c);
  } finally {
    if (Ib = false, null !== zb || null !== Ab)
      Hb(), Fb();
  }
}
function Kb(a, b) {
  var c = a.stateNode;
  if (null === c)
    return null;
  var d = Db(c);
  if (null === d)
    return null;
  c = d[b];
  a:
    switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && "function" !== typeof c)
    throw Error(p$2(231, b, typeof c));
  return c;
}
var Lb = false;
if (ia)
  try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a) {
    Lb = false;
  }
function Nb(a, b, c, d, e2, f2, g, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
  Ob = true;
  Pb = a;
} };
function Tb(a, b, c, d, e2, f2, g, h2, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b, c, d, e2, f2, g, h2, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else
      throw Error(p$2(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
    while (a);
  }
  return 3 === b.tag ? c : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b)
      return b.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a)
    throw Error(p$2(188));
}
function Yb(a) {
  var b = a.alternate;
  if (!b) {
    b = Vb(a);
    if (null === b)
      throw Error(p$2(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e2 = c.return;
    if (null === e2)
      break;
    var f2 = e2.alternate;
    if (null === f2) {
      d = e2.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c)
          return Xb(e2), a;
        if (f2 === d)
          return Xb(e2), b;
        f2 = f2.sibling;
      }
      throw Error(p$2(188));
    }
    if (c.return !== d.return)
      c = e2, d = f2;
    else {
      for (var g = false, h2 = e2.child; h2; ) {
        if (h2 === c) {
          g = true;
          c = e2;
          d = f2;
          break;
        }
        if (h2 === d) {
          g = true;
          d = e2;
          c = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c) {
            g = true;
            c = f2;
            d = e2;
            break;
          }
          if (h2 === d) {
            g = true;
            d = f2;
            c = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g)
          throw Error(p$2(189));
      }
    }
    if (c.alternate !== d)
      throw Error(p$2(190));
  }
  if (3 !== c.tag)
    throw Error(p$2(188));
  return c.stateNode.current === c ? a : b;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag)
    return a;
  for (a = a.child; null !== a; ) {
    var b = $b(a);
    if (null !== b)
      return b;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot)
    try {
      lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {
    }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b) {
  var c = a.pendingLanes;
  if (0 === c)
    return 0;
  var d = 0, e2 = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
  if (0 !== g) {
    var h2 = g & ~e2;
    0 !== h2 ? d = tc(h2) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
  } else
    g = c & ~e2, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
  if (0 === d)
    return 0;
  if (0 !== b && b !== d && 0 === (b & e2) && (e2 = d & -d, f2 = b & -b, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240)))
    return b;
  0 !== (d & 4) && (d |= c & 16);
  b = a.entangledLanes;
  if (0 !== b)
    for (a = a.entanglements, b &= d; 0 < b; )
      c = 31 - oc(b), e2 = 1 << c, d |= a[c], b &= ~e2;
  return d;
}
function vc(a, b) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e2 = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g = 31 - oc(f2), h2 = 1 << g, k2 = e2[g];
    if (-1 === k2) {
      if (0 === (h2 & c) || 0 !== (h2 & d))
        e2[g] = vc(h2, b);
    } else
      k2 <= b && (a.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function Ac(a, b, c) {
  a.pendingLanes |= b;
  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b = 31 - oc(b);
  a[b] = c;
}
function Bc(a, b) {
  var c = a.pendingLanes & ~b;
  a.pendingLanes = b;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b;
  a.mutableReadLanes &= b;
  a.entangledLanes &= b;
  b = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c; ) {
    var e2 = 31 - oc(c), f2 = 1 << e2;
    b[e2] = 0;
    d[e2] = -1;
    a[e2] = -1;
    c &= ~f2;
  }
}
function Cc(a, b) {
  var c = a.entangledLanes |= b;
  for (a = a.entanglements; c; ) {
    var d = 31 - oc(c), e2 = 1 << d;
    e2 & b | a[d] & b && (a[d] |= b);
    c &= ~e2;
  }
}
var C = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b.pointerId);
  }
}
function Tc(a, b, c, d, e2, f2) {
  if (null === a || a.nativeEvent !== f2)
    return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e2] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  null !== e2 && -1 === b.indexOf(e2) && b.push(e2);
  return a;
}
function Uc(a, b, c, d, e2) {
  switch (b) {
    case "focusin":
      return Lc = Tc(Lc, a, b, c, d, e2), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b, c, d, e2), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b, c, d, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a, b, c, d, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b, c, d, e2)), true;
  }
  return false;
}
function Vc(a) {
  var b = Wc(a.target);
  if (null !== b) {
    var c = Vb(b);
    if (null !== c) {
      if (b = c.tag, 13 === b) {
        if (b = Wb(c), null !== b) {
          a.blockedOn = b;
          Ic(a.priority, function() {
            Gc(c);
          });
          return;
        }
      } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (null === c) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      wb = d;
      c.target.dispatchEvent(d);
      wb = null;
    } else
      return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function Zc(a, b, c) {
  Xc(a) && c.delete(b);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b) {
  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b(b2) {
    return ad(b2, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c = 1; c < Kc.length; c++) {
      var d = Kc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b);
  Pc.forEach(b);
  for (c = 0; c < Qc.length; c++)
    d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); )
    Vc(c), null === c.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a, b, c, d) {
  var e2 = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a, b, c, d);
  } finally {
    C = e2, cd.transition = f2;
  }
}
function gd(a, b, c, d) {
  var e2 = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a, b, c, d);
  } finally {
    C = e2, cd.transition = f2;
  }
}
function fd(a, b, c, d) {
  if (dd) {
    var e2 = Yc(a, b, c, d);
    if (null === e2)
      hd(a, b, d, id, c), Sc(a, d);
    else if (Uc(e2, a, b, c, d))
      d.stopPropagation();
    else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e2; ) {
        var f2 = Cb(e2);
        null !== f2 && Ec(f2);
        f2 = Yc(a, b, c, d);
        null === f2 && hd(a, b, d, id, c);
        if (f2 === e2)
          break;
        e2 = f2;
      }
      null !== e2 && d.stopPropagation();
    } else
      hd(a, b, d, null, c);
  }
}
var id = null;
function Yc(a, b, c, d) {
  id = null;
  a = xb(d);
  a = Wc(a);
  if (null !== a)
    if (b = Vb(a), null === b)
      a = null;
    else if (c = b.tag, 13 === c) {
      a = Wb(b);
      if (null !== a)
        return a;
      a = null;
    } else if (3 === c) {
      if (b.stateNode.current.memoizedState.isDehydrated)
        return 3 === b.tag ? b.stateNode.containerInfo : null;
      a = null;
    } else
      b !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b = ld, c = b.length, d, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a = 0; a < c && b[a] === e2[a]; a++)
    ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e2[f2 - d]; d++)
    ;
  return md = e2.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e2, f2, g) {
    this._reactName = b2;
    this._targetInst = e2;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, { key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if ("Unidentified" !== b)
      return b;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b.keyCode);
    case "keydown":
      return 229 !== b.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (32 !== b.which)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie)
    return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b))
    return a;
}
function ve(a, b) {
  if ("change" === a)
    return b;
}
var we = false;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    Jb(re, b);
  }
}
function Ce(a, b, c) {
  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a)
    return te(qe);
}
function Ee(a, b) {
  if ("click" === a)
    return te(b);
}
function Fe(a, b) {
  if ("input" === a || "change" === a)
    return te(b);
}
function Ge(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b) {
  if (He(a, b))
    return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++) {
    var e2 = c[d];
    if (!ja.call(b, e2) || !He(a[e2], b[e2]))
      return false;
  }
  return true;
}
function Je(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Ke(a, b) {
  var c = Je(a);
  a = 0;
  for (var d; c; ) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Je(c);
  }
}
function Le(a, b) {
  return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Me() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = Xa(a.document);
  }
  return b;
}
function Ne(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function Oe(a) {
  var b = Me(), c = a.focusedElem, d = a.selectionRange;
  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
    if (null !== d && Ne(c)) {
      if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c)
        c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
      else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e2 = c.textContent.length, f2 = Math.min(d.start, e2);
        d = void 0 === d.end ? f2 : Math.min(d.end, e2);
        !a.extend && f2 > d && (e2 = d, d = f2, f2 = e2);
        e2 = Ke(c, f2);
        var g = Ke(
          c,
          d
        );
        e2 && g && (1 !== a.rangeCount || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e2.node, e2.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
      }
    }
    b = [];
    for (a = c; a = a.parentNode; )
      1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c.focus && c.focus();
    for (c = 0; c < b.length; c++)
      a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
}
function Ve(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a])
    return Xe[a];
  if (!We[a])
    return a;
  var b = We[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Ye)
      return Xe[a] = b[c];
  return a;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b) {
  df.set(a, b);
  fa(b, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Ub(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = 0 !== (b & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e2 = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b)
        for (var g = d.length - 1; 0 <= g; g--) {
          var h2 = d[g], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
      else
        for (g = 0; g < d.length; g++) {
          h2 = d[g];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Qb)
    throw a = Rb, Qb = false, Rb = null, a;
}
function D(a, b) {
  var c = b[of];
  void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
  var d = a + "__bubble";
  c.has(d) || (pf(b, a, 2, false), c.add(d));
}
function qf(a, b, c) {
  var d = 0;
  b && (d |= 4);
  pf(c, a, d, b);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b2) {
      "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
    });
    var b = 9 === a.nodeType ? a : a.ownerDocument;
    null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
  }
}
function pf(a, b, c, d) {
  switch (jd(b)) {
    case 1:
      var e2 = ed;
      break;
    case 4:
      e2 = gd;
      break;
    default:
      e2 = fd;
  }
  c = e2.bind(null, b, c, a);
  e2 = void 0;
  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e2 = true);
  d ? void 0 !== e2 ? a.addEventListener(b, c, { capture: true, passive: e2 }) : a.addEventListener(b, c, true) : void 0 !== e2 ? a.addEventListener(b, c, { passive: e2 }) : a.addEventListener(b, c, false);
}
function hd(a, b, c, d, e2) {
  var f2 = d;
  if (0 === (b & 1) && 0 === (b & 2) && null !== d)
    a:
      for (; ; ) {
        if (null === d)
          return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h2 = d.stateNode.containerInfo;
          if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2)
            break;
          if (4 === g)
            for (g = d.return; null !== g; ) {
              var k2 = g.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2)
                  return;
              }
              g = g.return;
            }
          for (; null !== h2; ) {
            g = Wc(h2);
            if (null === g)
              return;
            k2 = g.tag;
            if (5 === k2 || 6 === k2) {
              d = f2 = g;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d = d.return;
      }
  Jb(function() {
    var d2 = f2, e3 = xb(c), g2 = [];
    a: {
      var h3 = df.get(a);
      if (void 0 !== h3) {
        var k3 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c))
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
        t2 = [];
        for (var w2 = d2, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2)
            break;
          w2 = w2.return;
        }
        0 < t2.length && (h3 = new k3(h3, n2, null, c, e3), g2.push({ event: h3, listeners: t2 }));
      }
    }
    if (0 === (b & 7)) {
      a: {
        h3 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h3 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
              n2 = null;
          } else
            k3 = null, n2 = d2;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a)
              t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h3 : ue(k3);
            u2 = null == n2 ? h3 : ue(n2);
            h3 = new t2(F2, w2 + "leave", k3, c, e3);
            h3.target = J2;
            h3.relatedTarget = u2;
            F2 = null;
            Wc(e3) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2)
              b: {
                t2 = k3;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2))
                  w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2))
                  u2++;
                for (; 0 < w2 - u2; )
                  t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; )
                  x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                    break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
            else
              t2 = null;
            null !== k3 && wf(g2, h3, k3, t2, false);
            null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
          }
        }
      }
      a: {
        h3 = d2 ? ue(d2) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h3.type)
          var na = ve;
        else if (me(h3))
          if (we)
            na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
        else
          (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee);
        if (na && (na = na(a, d2))) {
          ne(g2, na, c, e3);
          break a;
        }
        xa && xa(a, h3, d2);
        "focusout" === a && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
      }
      xa = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable)
            Qe = xa, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e3);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e3);
      }
      var $a;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
      else
        ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e3), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a, c) : ke(a, c))
        d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c, e3), g2.push({ event: e3, listeners: d2 }), e3.data = $a);
    }
    se(g2, b);
  });
}
function tf(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; null !== a; ) {
    var e2 = a, f2 = e2.stateNode;
    5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e2)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e2)));
    a = a.return;
  }
  return d;
}
function vf(a) {
  if (null === a)
    return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b, c, d, e2) {
  for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
    var h2 = c, k2 = h2.alternate, l2 = h2.stateNode;
    if (null !== k2 && k2 === d)
      break;
    5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h2))) : e2 || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h2))));
    c = c.return;
  }
  0 !== g.length && a.push({ event: b, listeners: g });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b, c) {
  b = zf(b);
  if (zf(a) !== b && c)
    throw Error(p$2(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b) {
  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b) {
  var c = b, d = 0;
  do {
    var e2 = c.nextSibling;
    a.removeChild(c);
    if (e2 && 8 === e2.nodeType)
      if (c = e2.data, "/$" === c) {
        if (0 === d) {
          a.removeChild(e2);
          bd(b);
          return;
        }
        d--;
      } else
        "$" !== c && "$?" !== c && "$!" !== c || d++;
    c = e2;
  } while (c);
  bd(b);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b)
      break;
    if (8 === b) {
      b = a.data;
      if ("$" === b || "$!" === b || "$?" === b)
        break;
      if ("/$" === b)
        return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b)
          return a;
        b--;
      } else
        "/$" === c && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b = a[Of];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[uf] || c[Of]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child)
        for (a = Mf(a); null !== a; ) {
          if (c = a[Of])
            return c;
          a = Mf(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag)
    return a.stateNode;
  throw Error(p$2(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a, b) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b;
}
var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Vf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c)
    e2[f2] = b[f2];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E(Wf);
  E(H);
}
function ag(a, b, c) {
  if (H.current !== Vf)
    throw Error(p$2(168));
  G(H, b);
  G(Wf, c);
}
function bg(a, b, c) {
  var d = a.stateNode;
  b = b.childContextTypes;
  if ("function" !== typeof d.getChildContext)
    return c;
  d = d.getChildContext();
  for (var e2 in d)
    if (!(e2 in b))
      throw Error(p$2(108, Ra(a) || "Unknown", e2));
  return A({}, c, d);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H.current;
  G(H, a);
  G(Wf, Wf.current);
  return true;
}
function dg(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(p$2(169));
  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
  G(Wf, c);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b = C;
    try {
      var c = eg;
      for (C = 1; a < c.length; a++) {
        var d = c[a];
        do
          d = d(true);
        while (null !== d);
      }
      eg = null;
      fg = false;
    } catch (e2) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e2;
    } finally {
      C = b, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b;
}
function ug(a, b, c) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d = rg;
  a = sg;
  var e2 = 32 - oc(d) - 1;
  d &= ~(1 << e2);
  c += 1;
  var f2 = 32 - oc(b) + e2;
  if (30 < f2) {
    var g = e2 - e2 % 5;
    f2 = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e2 -= g;
    rg = 1 << 32 - oc(b) + e2 | c << e2 | d;
    sg = f2 + a;
  } else
    rg = 1 << f2 | c << e2 | d, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; )
    mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; )
    qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I = false, zg = null;
function Ag(a, b) {
  var c = Bg(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b;
  c.return = a;
  b = a.deletions;
  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
}
function Cg(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
    case 13:
      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I) {
    var b = yg;
    if (b) {
      var c = b;
      if (!Cg(a, b)) {
        if (Dg(a))
          throw Error(p$2(418));
        b = Lf(c.nextSibling);
        var d = xg;
        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
      }
    } else {
      if (Dg(a))
        throw Error(p$2(418));
      a.flags = a.flags & -4097 | 2;
      I = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
    a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg)
    return false;
  if (!I)
    return Fg(a), I = true, false;
  var b;
  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
  if (b && (b = yg)) {
    if (Dg(a))
      throw Hg(), Error(p$2(418));
    for (; b; )
      Ag(a, b), b = Lf(b.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a)
      throw Error(p$2(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b--;
          } else
            "$" !== c && "$!" !== c && "$?" !== c || b++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else
    yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; )
    a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b) {
  if (a && a.defaultProps) {
    b = A({}, b);
    a = a.defaultProps;
    for (var c in a)
      void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
var Mg = Uf(null), Ng = null, Og = null, Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(a) {
  var b = Mg.current;
  E(Mg);
  a._currentValue = b;
}
function Sg(a, b, c) {
  for (; null !== a; ) {
    var d = a.alternate;
    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
    if (a === c)
      break;
    a = a.return;
  }
}
function Tg(a, b) {
  Ng = a;
  Pg = Og = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Ug = true), a.firstContext = null);
}
function Vg(a) {
  var b = a._currentValue;
  if (Pg !== a)
    if (a = { context: a, memoizedValue: b, next: null }, null === Og) {
      if (null === Ng)
        throw Error(p$2(308));
      Og = a;
      Ng.dependencies = { lanes: 0, firstContext: a };
    } else
      Og = Og.next = a;
  return b;
}
var Wg = null;
function Xg(a) {
  null === Wg ? Wg = [a] : Wg.push(a);
}
function Yg(a, b, c, d) {
  var e2 = b.interleaved;
  null === e2 ? (c.next = c, Xg(b)) : (c.next = e2.next, e2.next = c);
  b.interleaved = c;
  return Zg(a, d);
}
function Zg(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  null !== c && (c.lanes |= b);
  c = a;
  for (a = a.return; null !== a; )
    a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
var $g = false;
function ah(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function bh(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function ch(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function dh(a, b, c) {
  var d = a.updateQueue;
  if (null === d)
    return null;
  d = d.shared;
  if (0 !== (K & 2)) {
    var e2 = d.pending;
    null === e2 ? b.next = b : (b.next = e2.next, e2.next = b);
    d.pending = b;
    return Zg(a, c);
  }
  e2 = d.interleaved;
  null === e2 ? (b.next = b, Xg(d)) : (b.next = e2.next, e2.next = b);
  d.interleaved = b;
  return Zg(a, c);
}
function eh(a, b, c) {
  b = b.updateQueue;
  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
function fh(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e2 = null, f2 = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        null === f2 ? e2 = f2 = g : f2 = f2.next = g;
        c = c.next;
      } while (null !== c);
      null === f2 ? e2 = f2 = b : f2 = f2.next = b;
    } else
      e2 = f2 = b;
    c = { baseState: d.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function gh(a, b, c, d) {
  var e2 = a.updateQueue;
  $g = false;
  var f2 = e2.firstBaseUpdate, g = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (null !== h2) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    null === g ? f2 = l2 : g.next = l2;
    g = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e2.baseState;
    g = 0;
    m2 = l2 = k2 = null;
    h2 = f2;
    do {
      var r2 = h2.lane, y2 = h2.eventTime;
      if ((d & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h2;
          r2 = b;
          y2 = c;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2)
                break a;
              q2 = A({}, q2, r2);
              break a;
            case 2:
              $g = true;
          }
        }
        null !== h2.callback && 0 !== h2.lane && (a.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
      } else
        y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
      h2 = h2.next;
      if (null === h2)
        if (h2 = e2.shared.pending, null === h2)
          break;
        else
          r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = m2;
    b = e2.shared.interleaved;
    if (null !== b) {
      e2 = b;
      do
        g |= e2.lane, e2 = e2.next;
      while (e2 !== b);
    } else
      null === f2 && (e2.shared.lanes = 0);
    hh |= g;
    a.lanes = g;
    a.memoizedState = q2;
  }
}
function ih(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (null !== a)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e2 = d.callback;
      if (null !== e2) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e2)
          throw Error(p$2(191, e2));
        e2.call(d);
      }
    }
}
var jh = new aa.Component().refs;
function kh(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : A({}, b, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var nh = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = L(), e2 = lh(a), f2 = ch(d, e2);
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = dh(a, f2, e2);
  null !== b && (mh(b, a, e2, d), eh(b, a, e2));
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = L(), e2 = lh(a), f2 = ch(d, e2);
  f2.tag = 1;
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = dh(a, f2, e2);
  null !== b && (mh(b, a, e2, d), eh(b, a, e2));
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = L(), d = lh(a), e2 = ch(c, d);
  e2.tag = 2;
  void 0 !== b && null !== b && (e2.callback = b);
  b = dh(a, e2, d);
  null !== b && (mh(b, a, d, c), eh(b, a, d));
} };
function oh(a, b, c, d, e2, f2, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e2, f2) : true;
}
function ph(a, b, c) {
  var d = false, e2 = Vf;
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e2 = Zf(b) ? Xf : H.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e2) : Vf);
  b = new b(c, f2);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = nh;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b;
}
function qh(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && nh.enqueueReplaceState(b, b.state, null);
}
function rh(a, b, c, d) {
  var e2 = a.stateNode;
  e2.props = c;
  e2.state = a.memoizedState;
  e2.refs = jh;
  ah(a);
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? e2.context = Vg(f2) : (f2 = Zf(b) ? Xf : H.current, e2.context = Yf(a, f2));
  e2.state = a.memoizedState;
  f2 = b.getDerivedStateFromProps;
  "function" === typeof f2 && (kh(a, b, f2, c), e2.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b !== e2.state && nh.enqueueReplaceState(e2, e2.state, null), gh(a, c, e2, d), e2.state = a.memoizedState);
  "function" === typeof e2.componentDidMount && (a.flags |= 4194308);
}
function sh(a, b, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag)
          throw Error(p$2(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(p$2(147, a));
      var e2 = d, f2 = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2)
        return b.ref;
      b = function(a2) {
        var b2 = e2.refs;
        b2 === jh && (b2 = e2.refs = {});
        null === a2 ? delete b2[f2] : b2[f2] = a2;
      };
      b._stringRef = f2;
      return b;
    }
    if ("string" !== typeof a)
      throw Error(p$2(284));
    if (!c._owner)
      throw Error(p$2(290, a));
  }
  return a;
}
function th(a, b) {
  a = Object.prototype.toString.call(b);
  throw Error(p$2(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function uh(a) {
  var b = a._init;
  return b(a._payload);
}
function vh(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.deletions;
      null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; null !== d2; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b2; )
      null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e2(a2, b2) {
    a2 = wh(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return b2.flags |= 1048576, c2;
    d2 = b2.alternate;
    if (null !== d2)
      return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
    b2.flags |= 2;
    return c2;
  }
  function g(b2) {
    a && null === b2.alternate && (b2.flags |= 2);
    return b2;
  }
  function h2(a2, b2, c2, d2) {
    if (null === b2 || 6 !== b2.tag)
      return b2 = xh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e2(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k2(a2, b2, c2, d2) {
    var f3 = c2.type;
    if (f3 === ya)
      return m2(a2, b2, c2.props.children, d2, c2.key);
    if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b2.type))
      return d2 = e2(b2, c2.props), d2.ref = sh(a2, b2, c2), d2.return = a2, d2;
    d2 = yh(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = sh(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c2, d2) {
    if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = zh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e2(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function m2(a2, b2, c2, d2, f3) {
    if (null === b2 || 7 !== b2.tag)
      return b2 = Ah(c2, a2.mode, d2, f3), b2.return = a2, b2;
    b2 = e2(b2, c2);
    b2.return = a2;
    return b2;
  }
  function q2(a2, b2, c2) {
    if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2)
      return b2 = xh("" + b2, a2.mode, c2), b2.return = a2, b2;
    if ("object" === typeof b2 && null !== b2) {
      switch (b2.$$typeof) {
        case va:
          return c2 = yh(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = sh(a2, null, b2), c2.return = a2, c2;
        case wa:
          return b2 = zh(b2, a2.mode, c2), b2.return = a2, b2;
        case Ha:
          var d2 = b2._init;
          return q2(a2, d2(b2._payload), c2);
      }
      if (eb(b2) || Ka(b2))
        return b2 = Ah(b2, a2.mode, c2, null), b2.return = a2, b2;
      th(a2, b2);
    }
    return null;
  }
  function r2(a2, b2, c2, d2) {
    var e3 = null !== b2 ? b2.key : null;
    if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2)
      return null !== e3 ? null : h2(a2, b2, "" + c2, d2);
    if ("object" === typeof c2 && null !== c2) {
      switch (c2.$$typeof) {
        case va:
          return c2.key === e3 ? k2(a2, b2, c2, d2) : null;
        case wa:
          return c2.key === e3 ? l2(a2, b2, c2, d2) : null;
        case Ha:
          return e3 = c2._init, r2(
            a2,
            b2,
            e3(c2._payload),
            d2
          );
      }
      if (eb(c2) || Ka(c2))
        return null !== e3 ? null : m2(a2, b2, c2, d2, null);
      th(a2, c2);
    }
    return null;
  }
  function y2(a2, b2, c2, d2, e3) {
    if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2)
      return a2 = a2.get(c2) || null, h2(b2, a2, "" + d2, e3);
    if ("object" === typeof d2 && null !== d2) {
      switch (d2.$$typeof) {
        case va:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b2, a2, d2, e3);
        case wa:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e3);
        case Ha:
          var f3 = d2._init;
          return y2(a2, b2, c2, f3(d2._payload), e3);
      }
      if (eb(d2) || Ka(d2))
        return a2 = a2.get(c2) || null, m2(b2, a2, d2, e3, null);
      th(b2, d2);
    }
    return null;
  }
  function n2(e3, g2, h3, k3) {
    for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e3, u2, h3[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a && u2 && null === n3.alternate && b(e3, u2);
      g2 = f2(n3, g2, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h3.length)
      return c(e3, u2), I && tg(e3, w2), l3;
    if (null === u2) {
      for (; w2 < h3.length; w2++)
        u2 = q2(e3, h3[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I && tg(e3, w2);
      return l3;
    }
    for (u2 = d(e3, u2); w2 < h3.length; w2++)
      x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a && u2.forEach(function(a2) {
      return b(e3, a2);
    });
    I && tg(e3, w2);
    return l3;
  }
  function t2(e3, g2, h3, k3) {
    var l3 = Ka(h3);
    if ("function" !== typeof l3)
      throw Error(p$2(150));
    h3 = l3.call(h3);
    if (null == h3)
      throw Error(p$2(151));
    for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e3, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a && m3 && null === t3.alternate && b(e3, m3);
      g2 = f2(t3, g2, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done)
      return c(
        e3,
        m3
      ), I && tg(e3, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h3.next())
        n3 = q2(e3, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I && tg(e3, w2);
      return l3;
    }
    for (m3 = d(e3, m3); !n3.done; w2++, n3 = h3.next())
      n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m3.forEach(function(a2) {
      return b(e3, a2);
    });
    I && tg(e3, w2);
    return l3;
  }
  function J2(a2, d2, f3, h3) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d2; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c(a2, l3.sibling);
                    d2 = e2(l3, f3.props.children);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                  c(a2, l3.sibling);
                  d2 = e2(l3, f3.props);
                  d2.ref = sh(a2, l3, f3);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                }
                c(a2, l3);
                break;
              } else
                b(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d2 = Ah(f3.props.children, a2.mode, h3, f3.key), d2.return = a2, a2 = d2) : (h3 = yh(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = sh(a2, d2, f3), h3.return = a2, a2 = h3);
          }
          return g(a2);
        case wa:
          a: {
            for (l3 = f3.key; null !== d2; ) {
              if (d2.key === l3)
                if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                  c(a2, d2.sibling);
                  d2 = e2(d2, f3.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = zh(f3, a2.mode, h3);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
        case Ha:
          return l3 = f3._init, J2(a2, d2, l3(f3._payload), h3);
      }
      if (eb(f3))
        return n2(a2, d2, f3, h3);
      if (Ka(f3))
        return t2(a2, d2, f3, h3);
      th(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e2(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = xh(f3, a2.mode, h3), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
  }
  return J2;
}
var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
function Hh(a) {
  if (a === Dh)
    throw Error(p$2(174));
  return a;
}
function Ih(a, b) {
  G(Gh, b);
  G(Fh, a);
  G(Eh, Dh);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
  }
  E(Eh);
  G(Eh, b);
}
function Jh() {
  E(Eh);
  E(Fh);
  E(Gh);
}
function Kh(a) {
  Hh(Gh.current);
  var b = Hh(Eh.current);
  var c = lb(b, a.type);
  b !== c && (G(Fh, a), G(Eh, c));
}
function Lh(a) {
  Fh.current === a && (E(Eh), E(Fh));
}
var M = Uf(0);
function Mh(a) {
  for (var b = a; null !== b; ) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data))
        return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.flags & 128))
        return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; null === b.sibling; ) {
      if (null === b.return || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var a = 0; a < Nh.length; a++)
    Nh[a]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O = null, P = null, Sh = false, Th = false, Uh = 0, Vh = 0;
function Q() {
  throw Error(p$2(321));
}
function Wh(a, b) {
  if (null === b)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!He(a[c], b[c]))
      return false;
  return true;
}
function Xh(a, b, c, d, e2, f2) {
  Rh = f2;
  N = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
  a = c(d, e2);
  if (Th) {
    f2 = 0;
    do {
      Th = false;
      Uh = 0;
      if (25 <= f2)
        throw Error(p$2(301));
      f2 += 1;
      P = O = null;
      b.updateQueue = null;
      Ph.current = $h;
      a = c(d, e2);
    } while (Th);
  }
  Ph.current = ai;
  b = null !== O && null !== O.next;
  Rh = 0;
  P = O = N = null;
  Sh = false;
  if (b)
    throw Error(p$2(300));
  return a;
}
function bi() {
  var a = 0 !== Uh;
  Uh = 0;
  return a;
}
function ci() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === P ? N.memoizedState = P = a : P = P.next = a;
  return P;
}
function di() {
  if (null === O) {
    var a = N.alternate;
    a = null !== a ? a.memoizedState : null;
  } else
    a = O.next;
  var b = null === P ? N.memoizedState : P.next;
  if (null !== b)
    P = b, O = a;
  else {
    if (null === a)
      throw Error(p$2(310));
    O = a;
    a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
    null === P ? N.memoizedState = P = a : P = P.next = a;
  }
  return P;
}
function ei(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function fi(a) {
  var b = di(), c = b.queue;
  if (null === c)
    throw Error(p$2(311));
  c.lastRenderedReducer = a;
  var d = O, e2 = d.baseQueue, f2 = c.pending;
  if (null !== f2) {
    if (null !== e2) {
      var g = e2.next;
      e2.next = f2.next;
      f2.next = g;
    }
    d.baseQueue = e2 = f2;
    c.pending = null;
  }
  if (null !== e2) {
    f2 = e2.next;
    d = d.baseState;
    var h2 = g = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Rh & m2) === m2)
        null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h2 = k2 = q2, g = d) : k2 = k2.next = q2;
        N.lanes |= m2;
        hh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g = d : k2.next = h2;
    He(d, b.memoizedState) || (Ug = true);
    b.memoizedState = d;
    b.baseState = g;
    b.baseQueue = k2;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (null !== a) {
    e2 = a;
    do
      f2 = e2.lane, N.lanes |= f2, hh |= f2, e2 = e2.next;
    while (e2 !== a);
  } else
    null === e2 && (c.lanes = 0);
  return [b.memoizedState, c.dispatch];
}
function gi(a) {
  var b = di(), c = b.queue;
  if (null === c)
    throw Error(p$2(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e2 = c.pending, f2 = b.memoizedState;
  if (null !== e2) {
    c.pending = null;
    var g = e2 = e2.next;
    do
      f2 = a(f2, g.action), g = g.next;
    while (g !== e2);
    He(f2, b.memoizedState) || (Ug = true);
    b.memoizedState = f2;
    null === b.baseQueue && (b.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function hi() {
}
function ii(a, b) {
  var c = N, d = di(), e2 = b(), f2 = !He(d.memoizedState, e2);
  f2 && (d.memoizedState = e2, Ug = true);
  d = d.queue;
  ji(ki.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b || f2 || null !== P && P.memoizedState.tag & 1) {
    c.flags |= 2048;
    li(9, mi.bind(null, c, d, e2, b), void 0, null);
    if (null === R)
      throw Error(p$2(349));
    0 !== (Rh & 30) || ni(c, b, e2);
  }
  return e2;
}
function ni(a, b, c) {
  a.flags |= 16384;
  a = { getSnapshot: b, value: c };
  b = N.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
}
function mi(a, b, c, d) {
  b.value = c;
  b.getSnapshot = d;
  oi(b) && pi(a);
}
function ki(a, b, c) {
  return c(function() {
    oi(b) && pi(a);
  });
}
function oi(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var c = b();
    return !He(a, c);
  } catch (d) {
    return true;
  }
}
function pi(a) {
  var b = Zg(a, 1);
  null !== b && mh(b, a, 1, -1);
}
function qi(a) {
  var b = ci();
  "function" === typeof a && (a = a());
  b.memoizedState = b.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a };
  b.queue = a;
  a = a.dispatch = ri.bind(null, N, a);
  return [b.memoizedState, a];
}
function li(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = N.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function si() {
  return di().memoizedState;
}
function ti(a, b, c, d) {
  var e2 = ci();
  N.flags |= a;
  e2.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
}
function ui(a, b, c, d) {
  var e2 = di();
  d = void 0 === d ? null : d;
  var f2 = void 0;
  if (null !== O) {
    var g = O.memoizedState;
    f2 = g.destroy;
    if (null !== d && Wh(d, g.deps)) {
      e2.memoizedState = li(b, c, f2, d);
      return;
    }
  }
  N.flags |= a;
  e2.memoizedState = li(1 | b, c, f2, d);
}
function vi(a, b) {
  return ti(8390656, 8, a, b);
}
function ji(a, b) {
  return ui(2048, 8, a, b);
}
function wi(a, b) {
  return ui(4, 2, a, b);
}
function xi(a, b) {
  return ui(4, 4, a, b);
}
function yi(a, b) {
  if ("function" === typeof b)
    return a = a(), b(a), function() {
      b(null);
    };
  if (null !== b && void 0 !== b)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function zi(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ui(4, 4, yi.bind(null, b, a), c);
}
function Ai() {
}
function Bi(a, b) {
  var c = di();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Wh(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function Ci(a, b) {
  var c = di();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Wh(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function Di(a, b, c) {
  if (0 === (Rh & 21))
    return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c;
  He(c, b) || (c = yc(), N.lanes |= c, hh |= c, a.baseState = true);
  return b;
}
function Ei(a, b) {
  var c = C;
  C = 0 !== c && 4 > c ? c : 4;
  a(true);
  var d = Qh.transition;
  Qh.transition = {};
  try {
    a(false), b();
  } finally {
    C = c, Qh.transition = d;
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(a, b, c) {
  var d = lh(a);
  c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b, c);
  else if (c = Yg(a, b, c, d), null !== c) {
    var e2 = L();
    mh(c, a, d, e2);
    Ji(c, b, d);
  }
}
function ri(a, b, c) {
  var d = lh(a), e2 = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b, e2);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2))
      try {
        var g = b.lastRenderedState, h2 = f2(g, c);
        e2.hasEagerState = true;
        e2.eagerState = h2;
        if (He(h2, g)) {
          var k2 = b.interleaved;
          null === k2 ? (e2.next = e2, Xg(b)) : (e2.next = k2.next, k2.next = e2);
          b.interleaved = e2;
          return;
        }
      } catch (l2) {
      } finally {
      }
    c = Yg(a, b, e2, d);
    null !== c && (e2 = L(), mh(c, a, d, e2), Ji(c, b, d));
  }
}
function Hi(a) {
  var b = a.alternate;
  return a === N || null !== b && b === N;
}
function Ii(a, b) {
  Th = Sh = true;
  var c = a.pending;
  null === c ? b.next = b : (b.next = c.next, c.next = b);
  a.pending = b;
}
function Ji(a, b, c) {
  if (0 !== (c & 4194240)) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
var ai = { readContext: Vg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useInsertionEffect: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useDeferredValue: Q, useTransition: Q, useMutableSource: Q, useSyncExternalStore: Q, useId: Q, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a, b) {
  ci().memoizedState = [a, void 0 === b ? null : b];
  return a;
}, useContext: Vg, useEffect: vi, useImperativeHandle: function(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ti(
    4194308,
    4,
    yi.bind(null, b, a),
    c
  );
}, useLayoutEffect: function(a, b) {
  return ti(4194308, 4, a, b);
}, useInsertionEffect: function(a, b) {
  return ti(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = ci();
  b = void 0 === b ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = ci();
  b = void 0 !== c ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  d.queue = a;
  a = a.dispatch = Gi.bind(null, N, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b = ci();
  a = { current: a };
  return b.memoizedState = a;
}, useState: qi, useDebugValue: Ai, useDeferredValue: function(a) {
  return ci().memoizedState = a;
}, useTransition: function() {
  var a = qi(false), b = a[0];
  a = Ei.bind(null, a[1]);
  ci().memoizedState = a;
  return [b, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b, c) {
  var d = N, e2 = ci();
  if (I) {
    if (void 0 === c)
      throw Error(p$2(407));
    c = c();
  } else {
    c = b();
    if (null === R)
      throw Error(p$2(349));
    0 !== (Rh & 30) || ni(d, b, c);
  }
  e2.memoizedState = c;
  var f2 = { value: c, getSnapshot: b };
  e2.queue = f2;
  vi(ki.bind(
    null,
    d,
    f2,
    a
  ), [a]);
  d.flags |= 2048;
  li(9, mi.bind(null, d, f2, c, b), void 0, null);
  return c;
}, useId: function() {
  var a = ci(), b = R.identifierPrefix;
  if (I) {
    var c = sg;
    var d = rg;
    c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
    b = ":" + b + "R" + c;
    c = Uh++;
    0 < c && (b += "H" + c.toString(32));
    b += ":";
  } else
    c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
  return a.memoizedState = b;
}, unstable_isNewReconciler: false }, Zh = {
  readContext: Vg,
  useCallback: Bi,
  useContext: Vg,
  useEffect: ji,
  useImperativeHandle: zi,
  useInsertionEffect: wi,
  useLayoutEffect: xi,
  useMemo: Ci,
  useReducer: fi,
  useRef: si,
  useState: function() {
    return fi(ei);
  },
  useDebugValue: Ai,
  useDeferredValue: function(a) {
    var b = di();
    return Di(b, O.memoizedState, a);
  },
  useTransition: function() {
    var a = fi(ei)[0], b = di().memoizedState;
    return [a, b];
  },
  useMutableSource: hi,
  useSyncExternalStore: ii,
  useId: Fi,
  unstable_isNewReconciler: false
}, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
  return gi(ei);
}, useDebugValue: Ai, useDeferredValue: function(a) {
  var b = di();
  return null === O ? b.memoizedState = a : Di(b, O.memoizedState, a);
}, useTransition: function() {
  var a = gi(ei)[0], b = di().memoizedState;
  return [a, b];
}, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
function Ki(a, b) {
  try {
    var c = "", d = b;
    do
      c += Pa(d), d = d.return;
    while (d);
    var e2 = c;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b, stack: e2, digest: null };
}
function Li(a, b, c) {
  return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
}
function Mi(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Ni = "function" === typeof WeakMap ? WeakMap : Map;
function Oi(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Pi || (Pi = true, Qi = d);
    Mi(a, b);
  };
  return c;
}
function Ri(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e2 = b.value;
    c.payload = function() {
      return d(e2);
    };
    c.callback = function() {
      Mi(a, b);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
    Mi(a, b);
    "function" !== typeof d && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
  });
  return c;
}
function Ti(a, b, c) {
  var d = a.pingCache;
  if (null === d) {
    d = a.pingCache = new Ni();
    var e2 = /* @__PURE__ */ new Set();
    d.set(b, e2);
  } else
    e2 = d.get(b), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d.set(b, e2));
  e2.has(c) || (e2.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
}
function Vi(a) {
  do {
    var b;
    if (b = 13 === a.tag)
      b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
    if (b)
      return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Wi(a, b, c, d, e2) {
  if (0 === (a.mode & 1))
    return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e2;
  return a;
}
var Xi = ua.ReactCurrentOwner, Ug = false;
function Yi(a, b, c, d) {
  b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
}
function Zi(a, b, c, d, e2) {
  c = c.render;
  var f2 = b.ref;
  Tg(b, e2);
  d = Xh(a, b, c, d, f2, e2);
  c = bi();
  if (null !== a && !Ug)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e2, $i(a, b, e2);
  I && c && vg(b);
  b.flags |= 1;
  Yi(a, b, d, e2);
  return b.child;
}
function aj(a, b, c, d, e2) {
  if (null === a) {
    var f2 = c.type;
    if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps)
      return b.tag = 15, b.type = f2, cj(a, b, f2, d, e2);
    a = yh(c.type, null, d, b, b.mode, e2);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e2)) {
    var g = f2.memoizedProps;
    c = c.compare;
    c = null !== c ? c : Ie;
    if (c(g, d) && a.ref === b.ref)
      return $i(a, b, e2);
  }
  b.flags |= 1;
  a = wh(f2, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function cj(a, b, c, d, e2) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie(f2, d) && a.ref === b.ref)
      if (Ug = false, b.pendingProps = d = f2, 0 !== (a.lanes & e2))
        0 !== (a.flags & 131072) && (Ug = true);
      else
        return b.lanes = a.lanes, $i(a, b, e2);
  }
  return dj(a, b, c, d, e2);
}
function ej(a, b, c) {
  var d = b.pendingProps, e2 = d.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode)
    if (0 === (b.mode & 1))
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(fj, gj), gj |= c;
    else {
      if (0 === (c & 1073741824))
        return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(fj, gj), gj |= a, null;
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d = null !== f2 ? f2.baseLanes : c;
      G(fj, gj);
      gj |= d;
    }
  else
    null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G(fj, gj), gj |= d;
  Yi(a, b, e2, c);
  return b.child;
}
function hj(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c)
    b.flags |= 512, b.flags |= 2097152;
}
function dj(a, b, c, d, e2) {
  var f2 = Zf(c) ? Xf : H.current;
  f2 = Yf(b, f2);
  Tg(b, e2);
  c = Xh(a, b, c, d, f2, e2);
  d = bi();
  if (null !== a && !Ug)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e2, $i(a, b, e2);
  I && d && vg(b);
  b.flags |= 1;
  Yi(a, b, c, e2);
  return b.child;
}
function ij(a, b, c, d, e2) {
  if (Zf(c)) {
    var f2 = true;
    cg(b);
  } else
    f2 = false;
  Tg(b, e2);
  if (null === b.stateNode)
    jj(a, b), ph(b, c, d), rh(b, c, d, e2), d = true;
  else if (null === a) {
    var g = b.stateNode, h2 = b.memoizedProps;
    g.props = h2;
    var k2 = g.context, l2 = c.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b, l2));
    var m2 = c.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h2 !== d || k2 !== l2) && qh(b, g, d, l2);
    $g = false;
    var r2 = b.memoizedState;
    g.state = r2;
    gh(b, d, g, e2);
    k2 = b.memoizedState;
    h2 !== d || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b, c, m2, d), k2 = b.memoizedState), (h2 = $g || oh(b, c, h2, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h2) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
  } else {
    g = b.stateNode;
    bh(a, b);
    h2 = b.memoizedProps;
    l2 = b.type === b.elementType ? h2 : Lg(b.type, h2);
    g.props = l2;
    q2 = b.pendingProps;
    r2 = g.context;
    k2 = c.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c) ? Xf : H.current, k2 = Yf(b, k2));
    var y2 = c.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && qh(b, g, d, k2);
    $g = false;
    r2 = b.memoizedState;
    g.state = r2;
    gh(b, d, g, e2);
    var n2 = b.memoizedState;
    h2 !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b, c, y2, d), n2 = b.memoizedState), (l2 = $g || oh(b, c, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
  }
  return kj(a, b, c, d, f2, e2);
}
function kj(a, b, c, d, e2, f2) {
  hj(a, b);
  var g = 0 !== (b.flags & 128);
  if (!d && !g)
    return e2 && dg(b, c, false), $i(a, b, f2);
  d = b.stateNode;
  Xi.current = b;
  var h2 = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.flags |= 1;
  null !== a && g ? (b.child = Bh(b, a.child, null, f2), b.child = Bh(b, null, h2, f2)) : Yi(a, b, h2, f2);
  b.memoizedState = d.state;
  e2 && dg(b, c, true);
  return b.child;
}
function lj(a) {
  var b = a.stateNode;
  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
  Ih(a, b.containerInfo);
}
function mj(a, b, c, d, e2) {
  Ig();
  Jg(e2);
  b.flags |= 256;
  Yi(a, b, c, d);
  return b.child;
}
var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
function oj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function pj(a, b, c) {
  var d = b.pendingProps, e2 = M.current, f2 = false, g = 0 !== (b.flags & 128), h2;
  (h2 = g) || (h2 = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
  if (h2)
    f2 = true, b.flags &= -129;
  else if (null === a || null !== a.memoizedState)
    e2 |= 1;
  G(M, e2 & 1);
  if (null === a) {
    Eg(b);
    a = b.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a))
      return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
    g = d.children;
    a = d.fallback;
    return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = qj(g, d, 0, null), a = Ah(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g);
  }
  e2 = a.memoizedState;
  if (null !== e2 && (h2 = e2.dehydrated, null !== h2))
    return sj(a, b, g, d, h2, e2, c);
  if (f2) {
    f2 = d.fallback;
    g = b.mode;
    e2 = a.child;
    h2 = e2.sibling;
    var k2 = { mode: "hidden", children: d.children };
    0 === (g & 1) && b.child !== e2 ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = wh(e2, k2), d.subtreeFlags = e2.subtreeFlags & 14680064);
    null !== h2 ? f2 = wh(h2, f2) : (f2 = Ah(f2, g, c, null), f2.flags |= 2);
    f2.return = b;
    d.return = b;
    d.sibling = f2;
    b.child = d;
    d = f2;
    f2 = b.child;
    g = a.child.memoizedState;
    g = null === g ? oj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
    f2.memoizedState = g;
    f2.childLanes = a.childLanes & ~c;
    b.memoizedState = nj;
    return d;
  }
  f2 = a.child;
  a = f2.sibling;
  d = wh(f2, { mode: "visible", children: d.children });
  0 === (b.mode & 1) && (d.lanes = c);
  d.return = b;
  d.sibling = null;
  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
  b.child = d;
  b.memoizedState = null;
  return d;
}
function rj(a, b) {
  b = qj({ mode: "visible", children: b }, a.mode, 0, null);
  b.return = a;
  return a.child = b;
}
function tj(a, b, c, d) {
  null !== d && Jg(d);
  Bh(b, a.child, null, c);
  a = rj(b, b.pendingProps.children);
  a.flags |= 2;
  b.memoizedState = null;
  return a;
}
function sj(a, b, c, d, e2, f2, g) {
  if (c) {
    if (b.flags & 256)
      return b.flags &= -257, d = Li(Error(p$2(422))), tj(a, b, g, d);
    if (null !== b.memoizedState)
      return b.child = a.child, b.flags |= 128, null;
    f2 = d.fallback;
    e2 = b.mode;
    d = qj({ mode: "visible", children: d.children }, e2, 0, null);
    f2 = Ah(f2, e2, g, null);
    f2.flags |= 2;
    d.return = b;
    f2.return = b;
    d.sibling = f2;
    b.child = d;
    0 !== (b.mode & 1) && Bh(b, a.child, null, g);
    b.child.memoizedState = oj(g);
    b.memoizedState = nj;
    return f2;
  }
  if (0 === (b.mode & 1))
    return tj(a, b, g, null);
  if ("$!" === e2.data) {
    d = e2.nextSibling && e2.nextSibling.dataset;
    if (d)
      var h2 = d.dgst;
    d = h2;
    f2 = Error(p$2(419));
    d = Li(f2, d, void 0);
    return tj(a, b, g, d);
  }
  h2 = 0 !== (g & a.childLanes);
  if (Ug || h2) {
    d = R;
    if (null !== d) {
      switch (g & -g) {
        case 4:
          e2 = 2;
          break;
        case 16:
          e2 = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e2 = 32;
          break;
        case 536870912:
          e2 = 268435456;
          break;
        default:
          e2 = 0;
      }
      e2 = 0 !== (e2 & (d.suspendedLanes | g)) ? 0 : e2;
      0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, Zg(a, e2), mh(d, a, e2, -1));
    }
    uj();
    d = Li(Error(p$2(421)));
    return tj(a, b, g, d);
  }
  if ("$?" === e2.data)
    return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e2._reactRetry = b, null;
  a = f2.treeContext;
  yg = Lf(e2.nextSibling);
  xg = b;
  I = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
  b = rj(b, d.children);
  b.flags |= 4096;
  return b;
}
function wj(a, b, c) {
  a.lanes |= b;
  var d = a.alternate;
  null !== d && (d.lanes |= b);
  Sg(a.return, b, c);
}
function xj(a, b, c, d, e2) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e2 } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e2);
}
function yj(a, b, c) {
  var d = b.pendingProps, e2 = d.revealOrder, f2 = d.tail;
  Yi(a, b, d.children, c);
  d = M.current;
  if (0 !== (d & 2))
    d = d & 1 | 2, b.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128))
      a:
        for (a = b.child; null !== a; ) {
          if (13 === a.tag)
            null !== a.memoizedState && wj(a, c, b);
          else if (19 === a.tag)
            wj(a, c, b);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  G(M, d);
  if (0 === (b.mode & 1))
    b.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c = b.child;
        for (e2 = null; null !== c; )
          a = c.alternate, null !== a && null === Mh(a) && (e2 = c), c = c.sibling;
        c = e2;
        null === c ? (e2 = b.child, b.child = null) : (e2 = c.sibling, c.sibling = null);
        xj(b, false, e2, c, f2);
        break;
      case "backwards":
        c = null;
        e2 = b.child;
        for (b.child = null; null !== e2; ) {
          a = e2.alternate;
          if (null !== a && null === Mh(a)) {
            b.child = e2;
            break;
          }
          a = e2.sibling;
          e2.sibling = c;
          c = e2;
          e2 = a;
        }
        xj(b, true, c, null, f2);
        break;
      case "together":
        xj(b, false, null, null, void 0);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function jj(a, b) {
  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function $i(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  hh |= b.lanes;
  if (0 === (c & b.childLanes))
    return null;
  if (null !== a && b.child !== a.child)
    throw Error(p$2(153));
  if (null !== b.child) {
    a = b.child;
    c = wh(a, a.pendingProps);
    b.child = c;
    for (c.return = b; null !== a.sibling; )
      a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
function zj(a, b, c) {
  switch (b.tag) {
    case 3:
      lj(b);
      Ig();
      break;
    case 5:
      Kh(b);
      break;
    case 1:
      Zf(b.type) && cg(b);
      break;
    case 4:
      Ih(b, b.stateNode.containerInfo);
      break;
    case 10:
      var d = b.type._context, e2 = b.memoizedProps.value;
      G(Mg, d._currentValue);
      d._currentValue = e2;
      break;
    case 13:
      d = b.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated)
          return G(M, M.current & 1), b.flags |= 128, null;
        if (0 !== (c & b.child.childLanes))
          return pj(a, b, c);
        G(M, M.current & 1);
        a = $i(a, b, c);
        return null !== a ? a.sibling : null;
      }
      G(M, M.current & 1);
      break;
    case 19:
      d = 0 !== (c & b.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d)
          return yj(a, b, c);
        b.flags |= 128;
      }
      e2 = b.memoizedState;
      null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G(M, M.current);
      if (d)
        break;
      else
        return null;
    case 22:
    case 23:
      return b.lanes = 0, ej(a, b, c);
  }
  return $i(a, b, c);
}
var Aj, Bj, Cj, Dj;
Aj = function(a, b) {
  for (var c = b.child; null !== c; ) {
    if (5 === c.tag || 6 === c.tag)
      a.appendChild(c.stateNode);
    else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Bj = function() {
};
Cj = function(a, b, c, d) {
  var e2 = a.memoizedProps;
  if (e2 !== d) {
    a = b.stateNode;
    Hh(Eh.current);
    var f2 = null;
    switch (c) {
      case "input":
        e2 = Ya(a, e2);
        d = Ya(a, d);
        f2 = [];
        break;
      case "select":
        e2 = A({}, e2, { value: void 0 });
        d = A({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a, e2);
        d = gb(a, d);
        f2 = [];
        break;
      default:
        "function" !== typeof e2.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
    }
    ub(c, d);
    var g;
    c = null;
    for (l2 in e2)
      if (!d.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2])
        if ("style" === l2) {
          var h2 = e2[l2];
          for (g in h2)
            h2.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else
          "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k2 = d[l2];
      h2 = null != e2 ? e2[l2] : void 0;
      if (d.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2))
        if ("style" === l2)
          if (h2) {
            for (g in h2)
              !h2.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k2)
              k2.hasOwnProperty(g) && h2[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
          } else
            c || (f2 || (f2 = []), f2.push(
              l2,
              c
            )), c = k2;
        else
          "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c && (f2 = f2 || []).push("style", c);
    var l2 = f2;
    if (b.updateQueue = l2)
      b.flags |= 4;
  }
};
Dj = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Ej(a, b) {
  if (!I)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b; )
          null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; )
          null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function S(a) {
  var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
  if (b)
    for (var e2 = a.child; null !== e2; )
      c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags & 14680064, d |= e2.flags & 14680064, e2.return = a, e2 = e2.sibling;
  else
    for (e2 = a.child; null !== e2; )
      c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags, d |= e2.flags, e2.return = a, e2 = e2.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b;
}
function Fj(a, b, c) {
  var d = b.pendingProps;
  wg(b);
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(b), null;
    case 1:
      return Zf(b.type) && $f(), S(b), null;
    case 3:
      d = b.stateNode;
      Jh();
      E(Wf);
      E(H);
      Oh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child)
        Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
      Bj(a, b);
      S(b);
      return null;
    case 5:
      Lh(b);
      var e2 = Hh(Gh.current);
      c = b.type;
      if (null !== a && null != b.stateNode)
        Cj(a, b, c, d, e2), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      else {
        if (!d) {
          if (null === b.stateNode)
            throw Error(p$2(166));
          S(b);
          return null;
        }
        a = Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.type;
          var f2 = b.memoizedProps;
          d[Of] = b;
          d[Pf] = f2;
          a = 0 !== (b.mode & 1);
          switch (c) {
            case "dialog":
              D("cancel", d);
              D("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < lf.length; e2++)
                D(lf[e2], d);
              break;
            case "source":
              D("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                d
              );
              D("load", d);
              break;
            case "details":
              D("toggle", d);
              break;
            case "input":
              Za(d, f2);
              D("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d);
              break;
            case "textarea":
              hb(d, f2), D("invalid", d);
          }
          ub(c, f2);
          e2 = null;
          for (var g in f2)
            if (f2.hasOwnProperty(g)) {
              var h2 = f2[g];
              "children" === g ? "string" === typeof h2 ? d.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d.textContent, h2, a), e2 = ["children", h2]) : "number" === typeof h2 && d.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                d.textContent,
                h2,
                a
              ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g) && null != h2 && "onScroll" === g && D("scroll", d);
            }
          switch (c) {
            case "input":
              Va(d);
              db(d, f2, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d.onclick = Bf);
          }
          d = e2;
          b.updateQueue = d;
          null !== d && (b.flags |= 4);
        } else {
          g = 9 === e2.nodeType ? e2 : e2.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[Of] = b;
          a[Pf] = d;
          Aj(a, b, false, false);
          b.stateNode = a;
          a: {
            g = vb(c, d);
            switch (c) {
              case "dialog":
                D("cancel", a);
                D("close", a);
                e2 = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a);
                e2 = d;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++)
                  D(lf[e2], a);
                e2 = d;
                break;
              case "source":
                D("error", a);
                e2 = d;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  a
                );
                D("load", a);
                e2 = d;
                break;
              case "details":
                D("toggle", a);
                e2 = d;
                break;
              case "input":
                Za(a, d);
                e2 = Ya(a, d);
                D("invalid", a);
                break;
              case "option":
                e2 = d;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d.multiple };
                e2 = A({}, d, { value: void 0 });
                D("invalid", a);
                break;
              case "textarea":
                hb(a, d);
                e2 = gb(a, d);
                D("invalid", a);
                break;
              default:
                e2 = d;
            }
            ub(c, e2);
            h2 = e2;
            for (f2 in h2)
              if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g));
              }
            switch (c) {
              case "input":
                Va(a);
                db(a, d, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f2 = d.value;
                null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                  a,
                  !!d.multiple,
                  d.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e2.onClick && (a.onclick = Bf);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b.flags |= 4);
        }
        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      }
      S(b);
      return null;
    case 6:
      if (a && null != b.stateNode)
        Dj(a, b, a.memoizedProps, d);
      else {
        if ("string" !== typeof d && null === b.stateNode)
          throw Error(p$2(166));
        c = Hh(Gh.current);
        Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.memoizedProps;
          d[Of] = b;
          if (f2 = d.nodeValue !== c) {
            if (a = xg, null !== a)
              switch (a.tag) {
                case 3:
                  Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  break;
                case 5:
                  true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
              }
          }
          f2 && (b.flags |= 4);
        } else
          d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
      }
      S(b);
      return null;
    case 13:
      E(M);
      d = b.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128))
          Hg(), Ig(), b.flags |= 98560, f2 = false;
        else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
          if (null === a) {
            if (!f2)
              throw Error(p$2(318));
            f2 = b.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2)
              throw Error(p$2(317));
            f2[Of] = b;
          } else
            Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
          S(b);
          f2 = false;
        } else
          null !== zg && (Gj(zg), zg = null), f2 = true;
        if (!f2)
          return b.flags & 65536 ? b : null;
      }
      if (0 !== (b.flags & 128))
        return b.lanes = c, b;
      d = null !== d;
      d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
      null !== b.updateQueue && (b.flags |= 4);
      S(b);
      return null;
    case 4:
      return Jh(), Bj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
    case 10:
      return Rg(b.type._context), S(b), null;
    case 17:
      return Zf(b.type) && $f(), S(b), null;
    case 19:
      E(M);
      f2 = b.memoizedState;
      if (null === f2)
        return S(b), null;
      d = 0 !== (b.flags & 128);
      g = f2.rendering;
      if (null === g)
        if (d)
          Ej(f2, false);
        else {
          if (0 !== T || null !== a && 0 !== (a.flags & 128))
            for (a = b.child; null !== a; ) {
              g = Mh(a);
              if (null !== g) {
                b.flags |= 128;
                Ej(f2, false);
                d = g.updateQueue;
                null !== d && (b.updateQueue = d, b.flags |= 4);
                b.subtreeFlags = 0;
                d = c;
                for (c = b.child; null !== c; )
                  f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                G(M, M.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          null !== f2.tail && B() > Hj && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
        }
      else {
        if (!d)
          if (a = Mh(g), null !== a) {
            if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I)
              return S(b), null;
          } else
            2 * B() - f2.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
        f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f2.last, null !== c ? c.sibling = g : b.child = g, f2.last = g);
      }
      if (null !== f2.tail)
        return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c = M.current, G(M, d ? c & 1 | 2 : c & 1), b;
      S(b);
      return null;
    case 22:
    case 23:
      return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$2(156, b.tag));
}
function Jj(a, b) {
  wg(b);
  switch (b.tag) {
    case 1:
      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 3:
      return Jh(), E(Wf), E(H), Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
    case 5:
      return Lh(b), null;
    case 13:
      E(M);
      a = b.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b.alternate)
          throw Error(p$2(340));
        Ig();
      }
      a = b.flags;
      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 19:
      return E(M), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(b.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = false, U = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Mj(a, b) {
  var c = a.ref;
  if (null !== c)
    if ("function" === typeof c)
      try {
        c(null);
      } catch (d) {
        W(a, b, d);
      }
    else
      c.current = null;
}
function Nj(a, b, c) {
  try {
    c();
  } catch (d) {
    W(a, b, d);
  }
}
var Oj = false;
function Pj(a, b) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a)
      var c = { start: a.selectionStart, end: a.selectionEnd };
    else
      a: {
        c = (c = a.ownerDocument) && c.defaultView || window;
        var d = c.getSelection && c.getSelection();
        if (d && 0 !== d.rangeCount) {
          c = d.anchorNode;
          var e2 = d.anchorOffset, f2 = d.focusNode;
          d = d.focusOffset;
          try {
            c.nodeType, f2.nodeType;
          } catch (F2) {
            c = null;
            break a;
          }
          var g = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                q2 !== c || 0 !== e2 && 3 !== q2.nodeType || (h2 = g + e2);
                q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
                3 === q2.nodeType && (g += q2.nodeValue.length);
                if (null === (y2 = q2.firstChild))
                  break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a)
                  break b;
                r2 === c && ++l2 === e2 && (h2 = g);
                r2 === f2 && ++m2 === d && (k2 = g);
                if (null !== (y2 = q2.nextSibling))
                  break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
          c = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
        } else
          c = null;
      }
    c = c || { start: 0, end: 0 };
  } else
    c = null;
  Df = { focusedElem: a, selectionRange: c };
  dd = false;
  for (V = b; null !== V; )
    if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a)
      a.return = b, V = a;
    else
      for (; null !== V; ) {
        b = V;
        try {
          var n2 = b.alternate;
          if (0 !== (b.flags & 1024))
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n2) {
                  var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Lg(b.type, t2), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u2 = b.stateNode.containerInfo;
                1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p$2(163));
            }
        } catch (F2) {
          W(b, b.return, F2);
        }
        a = b.sibling;
        if (null !== a) {
          a.return = b.return;
          V = a;
          break;
        }
        V = b.return;
      }
  n2 = Oj;
  Oj = false;
  return n2;
}
function Qj(a, b, c) {
  var d = b.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e2 = d = d.next;
    do {
      if ((e2.tag & a) === a) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        void 0 !== f2 && Nj(b, c, f2);
      }
      e2 = e2.next;
    } while (e2 !== d);
  }
}
function Rj(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;
  if (null !== b) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Sj(a) {
  var b = a.ref;
  if (null !== b) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    "function" === typeof b ? b(a) : b.current = a;
  }
}
function Tj(a) {
  var b = a.alternate;
  null !== b && (a.alternate = null, Tj(b));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Uj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Vj(a) {
  a:
    for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Uj(a.return))
          return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2)
          continue a;
        if (null === a.child || 4 === a.tag)
          continue a;
        else
          a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2))
        return a.stateNode;
    }
}
function Wj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
  else if (4 !== d && (a = a.child, null !== a))
    for (Wj(a, b, c), a = a.sibling; null !== a; )
      Wj(a, b, c), a = a.sibling;
}
function Xj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (4 !== d && (a = a.child, null !== a))
    for (Xj(a, b, c), a = a.sibling; null !== a; )
      Xj(a, b, c), a = a.sibling;
}
var X = null, Yj = false;
function Zj(a, b, c) {
  for (c = c.child; null !== c; )
    ak(a, b, c), c = c.sibling;
}
function ak(a, b, c) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount)
    try {
      lc.onCommitFiberUnmount(kc, c);
    } catch (h2) {
    }
  switch (c.tag) {
    case 5:
      U || Mj(c, b);
    case 6:
      var d = X, e2 = Yj;
      X = null;
      Zj(a, b, c);
      X = d;
      Yj = e2;
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
      break;
    case 18:
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
      break;
    case 4:
      d = X;
      e2 = Yj;
      X = c.stateNode.containerInfo;
      Yj = true;
      Zj(a, b, c);
      X = d;
      Yj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e2 = d = d.next;
        do {
          var f2 = e2, g = f2.destroy;
          f2 = f2.tag;
          void 0 !== g && (0 !== (f2 & 2) ? Nj(c, b, g) : 0 !== (f2 & 4) && Nj(c, b, g));
          e2 = e2.next;
        } while (e2 !== d);
      }
      Zj(a, b, c);
      break;
    case 1:
      if (!U && (Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount))
        try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h2) {
          W(c, b, h2);
        }
      Zj(a, b, c);
      break;
    case 21:
      Zj(a, b, c);
      break;
    case 22:
      c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Zj(a, b, c), U = d) : Zj(a, b, c);
      break;
    default:
      Zj(a, b, c);
  }
}
function bk(a) {
  var b = a.updateQueue;
  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Lj());
    b.forEach(function(b2) {
      var d = ck.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function dk(a, b) {
  var c = b.deletions;
  if (null !== c)
    for (var d = 0; d < c.length; d++) {
      var e2 = c[d];
      try {
        var f2 = a, g = b, h2 = g;
        a:
          for (; null !== h2; ) {
            switch (h2.tag) {
              case 5:
                X = h2.stateNode;
                Yj = false;
                break a;
              case 3:
                X = h2.stateNode.containerInfo;
                Yj = true;
                break a;
              case 4:
                X = h2.stateNode.containerInfo;
                Yj = true;
                break a;
            }
            h2 = h2.return;
          }
        if (null === X)
          throw Error(p$2(160));
        ak(f2, g, e2);
        X = null;
        Yj = false;
        var k2 = e2.alternate;
        null !== k2 && (k2.return = null);
        e2.return = null;
      } catch (l2) {
        W(e2, b, l2);
      }
    }
  if (b.subtreeFlags & 12854)
    for (b = b.child; null !== b; )
      ek(b, a), b = b.sibling;
}
function ek(a, b) {
  var c = a.alternate, d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      dk(b, a);
      fk(a);
      if (d & 4) {
        try {
          Qj(3, a, a.return), Rj(3, a);
        } catch (t2) {
          W(a, a.return, t2);
        }
        try {
          Qj(5, a, a.return);
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 1:
      dk(b, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      break;
    case 5:
      dk(b, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      if (a.flags & 32) {
        var e2 = a.stateNode;
        try {
          ob(e2, "");
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      if (d & 4 && (e2 = a.stateNode, null != e2)) {
        var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h2 = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2)
          try {
            "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
            vb(h2, g);
            var l2 = vb(h2, f2);
            for (g = 0; g < k2.length; g += 2) {
              var m2 = k2[g], q2 = k2[g + 1];
              "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
            }
            switch (h2) {
              case "input":
                bb(e2, f2);
                break;
              case "textarea":
                ib(e2, f2);
                break;
              case "select":
                var r2 = e2._wrapperState.wasMultiple;
                e2._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e2,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e2[Pf] = f2;
          } catch (t2) {
            W(a, a.return, t2);
          }
      }
      break;
    case 6:
      dk(b, a);
      fk(a);
      if (d & 4) {
        if (null === a.stateNode)
          throw Error(p$2(162));
        e2 = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e2.nodeValue = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 3:
      dk(b, a);
      fk(a);
      if (d & 4 && null !== c && c.memoizedState.isDehydrated)
        try {
          bd(b.containerInfo);
        } catch (t2) {
          W(a, a.return, t2);
        }
      break;
    case 4:
      dk(b, a);
      fk(a);
      break;
    case 13:
      dk(b, a);
      fk(a);
      e2 = a.child;
      e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (gk = B()));
      d & 4 && bk(a);
      break;
    case 22:
      m2 = null !== c && null !== c.memoizedState;
      a.mode & 1 ? (U = (l2 = U) || m2, dk(b, a), U = l2) : dk(b, a);
      fk(a);
      if (d & 8192) {
        l2 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1))
          for (V = a, m2 = a.child; null !== m2; ) {
            for (q2 = V = m2; null !== V; ) {
              r2 = V;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, r2, r2.return);
                  break;
                case 1:
                  Mj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d = r2;
                    c = r2.return;
                    try {
                      b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W(d, c, t2);
                    }
                  }
                  break;
                case 5:
                  Mj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    hk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V = y2) : hk(q2);
            }
            m2 = m2.sibling;
          }
        a:
          for (m2 = null, q2 = a; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g));
                } catch (t2) {
                  W(a, a.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2)
                try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W(a, a.return, t2);
                }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a)
              break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a)
                break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
      }
      break;
    case 19:
      dk(b, a);
      fk(a);
      d & 4 && bk(a);
      break;
    case 21:
      break;
    default:
      dk(
        b,
        a
      ), fk(a);
  }
}
function fk(a) {
  var b = a.flags;
  if (b & 2) {
    try {
      a: {
        for (var c = a.return; null !== c; ) {
          if (Uj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p$2(160));
      }
      switch (d.tag) {
        case 5:
          var e2 = d.stateNode;
          d.flags & 32 && (ob(e2, ""), d.flags &= -33);
          var f2 = Vj(a);
          Xj(a, f2, e2);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo, h2 = Vj(a);
          Wj(a, h2, g);
          break;
        default:
          throw Error(p$2(161));
      }
    } catch (k2) {
      W(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b & 4096 && (a.flags &= -4097);
}
function ik(a, b, c) {
  V = a;
  jk(a);
}
function jk(a, b, c) {
  for (var d = 0 !== (a.mode & 1); null !== V; ) {
    var e2 = V, f2 = e2.child;
    if (22 === e2.tag && d) {
      var g = null !== e2.memoizedState || Kj;
      if (!g) {
        var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U;
        h2 = Kj;
        var l2 = U;
        Kj = g;
        if ((U = k2) && !l2)
          for (V = e2; null !== V; )
            g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e2) : null !== k2 ? (k2.return = g, V = k2) : kk(e2);
        for (; null !== f2; )
          V = f2, jk(f2), f2 = f2.sibling;
        V = e2;
        Kj = h2;
        U = l2;
      }
      lk(a);
    } else
      0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V = f2) : lk(a);
  }
}
function lk(a) {
  for (; null !== V; ) {
    var b = V;
    if (0 !== (b.flags & 8772)) {
      var c = b.alternate;
      try {
        if (0 !== (b.flags & 8772))
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              U || Rj(5, b);
              break;
            case 1:
              var d = b.stateNode;
              if (b.flags & 4 && !U)
                if (null === c)
                  d.componentDidMount();
                else {
                  var e2 = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
                  d.componentDidUpdate(e2, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b.updateQueue;
              null !== f2 && ih(b, f2, d);
              break;
            case 3:
              var g = b.updateQueue;
              if (null !== g) {
                c = null;
                if (null !== b.child)
                  switch (b.child.tag) {
                    case 5:
                      c = b.child.stateNode;
                      break;
                    case 1:
                      c = b.child.stateNode;
                  }
                ih(b, g, c);
              }
              break;
            case 5:
              var h2 = b.stateNode;
              if (null === c && b.flags & 4) {
                c = h2;
                var k2 = b.memoizedProps;
                switch (b.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c.focus();
                    break;
                  case "img":
                    k2.src && (c.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b.memoizedState) {
                var l2 = b.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p$2(163));
          }
        U || b.flags & 512 && Sj(b);
      } catch (r2) {
        W(b, b.return, r2);
      }
    }
    if (b === a) {
      V = null;
      break;
    }
    c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function hk(a) {
  for (; null !== V; ) {
    var b = V;
    if (b === a) {
      V = null;
      break;
    }
    var c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function kk(a) {
  for (; null !== V; ) {
    var b = V;
    try {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          var c = b.return;
          try {
            Rj(4, b);
          } catch (k2) {
            W(b, c, k2);
          }
          break;
        case 1:
          var d = b.stateNode;
          if ("function" === typeof d.componentDidMount) {
            var e2 = b.return;
            try {
              d.componentDidMount();
            } catch (k2) {
              W(b, e2, k2);
            }
          }
          var f2 = b.return;
          try {
            Sj(b);
          } catch (k2) {
            W(b, f2, k2);
          }
          break;
        case 5:
          var g = b.return;
          try {
            Sj(b);
          } catch (k2) {
            W(b, g, k2);
          }
      }
    } catch (k2) {
      W(b, b.return, k2);
    }
    if (b === a) {
      V = null;
      break;
    }
    var h2 = b.sibling;
    if (null !== h2) {
      h2.return = b.return;
      V = h2;
      break;
    }
    V = b.return;
  }
}
var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
function L() {
  return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
}
function lh(a) {
  if (0 === (a.mode & 1))
    return 1;
  if (0 !== (K & 2) && 0 !== Z)
    return Z & -Z;
  if (null !== Kg.transition)
    return 0 === Ck && (Ck = yc()), Ck;
  a = C;
  if (0 !== a)
    return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function mh(a, b, c, d) {
  if (50 < zk)
    throw zk = 0, Ak = null, Error(p$2(185));
  Ac(a, c, d);
  if (0 === (K & 2) || a !== R)
    a === R && (0 === (K & 2) && (rk |= c), 4 === T && Dk(a, Z)), Ek(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Hj = B() + 500, fg && jg());
}
function Ek(a, b) {
  var c = a.callbackNode;
  wc(a, b);
  var d = uc(a, a === R ? Z : 0);
  if (0 === d)
    null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
  else if (b = d & -d, a.callbackPriority !== b) {
    null != c && bc(c);
    if (1 === b)
      0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
        0 === (K & 6) && jg();
      }), c = null;
    else {
      switch (Dc(d)) {
        case 1:
          c = fc;
          break;
        case 4:
          c = gc;
          break;
        case 16:
          c = hc;
          break;
        case 536870912:
          c = jc;
          break;
        default:
          c = hc;
      }
      c = Gk(c, Hk.bind(null, a));
    }
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Hk(a, b) {
  Bk = -1;
  Ck = 0;
  if (0 !== (K & 6))
    throw Error(p$2(327));
  var c = a.callbackNode;
  if (Ik() && a.callbackNode !== c)
    return null;
  var d = uc(a, a === R ? Z : 0);
  if (0 === d)
    return null;
  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b)
    b = Jk(a, d);
  else {
    b = d;
    var e2 = K;
    K |= 2;
    var f2 = Kk();
    if (R !== a || Z !== b)
      vk = null, Hj = B() + 500, Lk(a, b);
    do
      try {
        Mk();
        break;
      } catch (h2) {
        Nk(a, h2);
      }
    while (1);
    Qg();
    nk.current = f2;
    K = e2;
    null !== Y ? b = 0 : (R = null, Z = 0, b = T);
  }
  if (0 !== b) {
    2 === b && (e2 = xc(a), 0 !== e2 && (d = e2, b = Ok(a, e2)));
    if (1 === b)
      throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
    if (6 === b)
      Dk(a, d);
    else {
      e2 = a.current.alternate;
      if (0 === (d & 30) && !Pk(e2) && (b = Jk(a, d), 2 === b && (f2 = xc(a), 0 !== f2 && (d = f2, b = Ok(a, f2))), 1 === b))
        throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
      a.finishedWork = e2;
      a.finishedLanes = d;
      switch (b) {
        case 0:
        case 1:
          throw Error(p$2(345));
        case 2:
          Qk(a, uk, vk);
          break;
        case 3:
          Dk(a, d);
          if ((d & 130023424) === d && (b = gk + 500 - B(), 10 < b)) {
            if (0 !== uc(a, 0))
              break;
            e2 = a.suspendedLanes;
            if ((e2 & d) !== d) {
              L();
              a.pingedLanes |= a.suspendedLanes & e2;
              break;
            }
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 4:
          Dk(a, d);
          if ((d & 4194240) === d)
            break;
          b = a.eventTimes;
          for (e2 = -1; 0 < d; ) {
            var g = 31 - oc(d);
            f2 = 1 << g;
            g = b[g];
            g > e2 && (e2 = g);
            d &= ~f2;
          }
          d = e2;
          d = B() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 5:
          Qk(a, uk, vk);
          break;
        default:
          throw Error(p$2(329));
      }
    }
  }
  Ek(a, B());
  return a.callbackNode === c ? Hk.bind(null, a) : null;
}
function Ok(a, b) {
  var c = tk;
  a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
  a = Jk(a, b);
  2 !== a && (b = uk, uk = c, null !== b && Gj(b));
  return a;
}
function Gj(a) {
  null === uk ? uk = a : uk.push.apply(uk, a);
}
function Pk(a) {
  for (var b = a; ; ) {
    if (b.flags & 16384) {
      var c = b.updateQueue;
      if (null !== c && (c = c.stores, null !== c))
        for (var d = 0; d < c.length; d++) {
          var e2 = c[d], f2 = e2.getSnapshot;
          e2 = e2.value;
          try {
            if (!He(f2(), e2))
              return false;
          } catch (g) {
            return false;
          }
        }
    }
    c = b.child;
    if (b.subtreeFlags & 16384 && null !== c)
      c.return = b, b = c;
    else {
      if (b === a)
        break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a)
          return true;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return true;
}
function Dk(a, b) {
  b &= ~sk;
  b &= ~rk;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - oc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Fk(a) {
  if (0 !== (K & 6))
    throw Error(p$2(327));
  Ik();
  var b = uc(a, 0);
  if (0 === (b & 1))
    return Ek(a, B()), null;
  var c = Jk(a, b);
  if (0 !== a.tag && 2 === c) {
    var d = xc(a);
    0 !== d && (b = d, c = Ok(a, d));
  }
  if (1 === c)
    throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B()), c;
  if (6 === c)
    throw Error(p$2(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Qk(a, uk, vk);
  Ek(a, B());
  return null;
}
function Rk(a, b) {
  var c = K;
  K |= 1;
  try {
    return a(b);
  } finally {
    K = c, 0 === K && (Hj = B() + 500, fg && jg());
  }
}
function Sk(a) {
  null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
  var b = K;
  K |= 1;
  var c = pk.transition, d = C;
  try {
    if (pk.transition = null, C = 1, a)
      return a();
  } finally {
    C = d, pk.transition = c, K = b, 0 === (K & 6) && jg();
  }
}
function Ij() {
  gj = fj.current;
  E(fj);
}
function Lk(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Gf(c));
  if (null !== Y)
    for (c = Y.return; null !== c; ) {
      var d = c;
      wg(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && $f();
          break;
        case 3:
          Jh();
          E(Wf);
          E(H);
          Oh();
          break;
        case 5:
          Lh(d);
          break;
        case 4:
          Jh();
          break;
        case 13:
          E(M);
          break;
        case 19:
          E(M);
          break;
        case 10:
          Rg(d.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      c = c.return;
    }
  R = a;
  Y = a = wh(a.current, null);
  Z = gj = b;
  T = 0;
  qk = null;
  sk = rk = hh = 0;
  uk = tk = null;
  if (null !== Wg) {
    for (b = 0; b < Wg.length; b++)
      if (c = Wg[b], d = c.interleaved, null !== d) {
        c.interleaved = null;
        var e2 = d.next, f2 = c.pending;
        if (null !== f2) {
          var g = f2.next;
          f2.next = e2;
          d.next = g;
        }
        c.pending = d;
      }
    Wg = null;
  }
  return a;
}
function Nk(a, b) {
  do {
    var c = Y;
    try {
      Qg();
      Ph.current = ai;
      if (Sh) {
        for (var d = N.memoizedState; null !== d; ) {
          var e2 = d.queue;
          null !== e2 && (e2.pending = null);
          d = d.next;
        }
        Sh = false;
      }
      Rh = 0;
      P = O = N = null;
      Th = false;
      Uh = 0;
      ok.current = null;
      if (null === c || null === c.return) {
        T = 1;
        qk = b;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g = c.return, h2 = c, k2 = b;
        b = Z;
        h2.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h2, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Vi(g);
          if (null !== y2) {
            y2.flags &= -257;
            Wi(y2, g, h2, f2, b);
            y2.mode & 1 && Ti(f2, l2, b);
            b = y2;
            k2 = l2;
            var n2 = b.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b.updateQueue = t2;
            } else
              n2.add(k2);
            break a;
          } else {
            if (0 === (b & 1)) {
              Ti(f2, l2, b);
              uj();
              break a;
            }
            k2 = Error(p$2(426));
          }
        } else if (I && h2.mode & 1) {
          var J2 = Vi(g);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Wi(J2, g, h2, f2, b);
            Jg(Ki(k2, h2));
            break a;
          }
        }
        f2 = k2 = Ki(k2, h2);
        4 !== T && (T = 2);
        null === tk ? tk = [f2] : tk.push(f2);
        f2 = g;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b &= -b;
              f2.lanes |= b;
              var x2 = Oi(f2, k2, b);
              fh(f2, x2);
              break a;
            case 1:
              h2 = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                f2.flags |= 65536;
                b &= -b;
                f2.lanes |= b;
                var F2 = Ri(f2, h2, b);
                fh(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Tk(c);
    } catch (na) {
      b = na;
      Y === c && null !== c && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var a = nk.current;
  nk.current = ai;
  return null === a ? ai : a;
}
function uj() {
  if (0 === T || 3 === T || 2 === T)
    T = 4;
  null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
}
function Jk(a, b) {
  var c = K;
  K |= 2;
  var d = Kk();
  if (R !== a || Z !== b)
    vk = null, Lk(a, b);
  do
    try {
      Uk();
      break;
    } catch (e2) {
      Nk(a, e2);
    }
  while (1);
  Qg();
  K = c;
  nk.current = d;
  if (null !== Y)
    throw Error(p$2(261));
  R = null;
  Z = 0;
  return T;
}
function Uk() {
  for (; null !== Y; )
    Vk(Y);
}
function Mk() {
  for (; null !== Y && !cc(); )
    Vk(Y);
}
function Vk(a) {
  var b = Wk(a.alternate, a, gj);
  a.memoizedProps = a.pendingProps;
  null === b ? Tk(a) : Y = b;
  ok.current = null;
}
function Tk(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if (0 === (b.flags & 32768)) {
      if (c = Fj(c, b, gj), null !== c) {
        Y = c;
        return;
      }
    } else {
      c = Jj(c, b);
      if (null !== c) {
        c.flags &= 32767;
        Y = c;
        return;
      }
      if (null !== a)
        a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T = 6;
        Y = null;
        return;
      }
    }
    b = b.sibling;
    if (null !== b) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (null !== b);
  0 === T && (T = 5);
}
function Qk(a, b, c) {
  var d = C, e2 = pk.transition;
  try {
    pk.transition = null, C = 1, Xk(a, b, c, d);
  } finally {
    pk.transition = e2, C = d;
  }
  return null;
}
function Xk(a, b, c, d) {
  do
    Ik();
  while (null !== xk);
  if (0 !== (K & 6))
    throw Error(p$2(327));
  c = a.finishedWork;
  var e2 = a.finishedLanes;
  if (null === c)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(p$2(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c.lanes | c.childLanes;
  Bc(a, f2);
  a === R && (Y = R = null, Z = 0);
  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = true, Gk(hc, function() {
    Ik();
    return null;
  }));
  f2 = 0 !== (c.flags & 15990);
  if (0 !== (c.subtreeFlags & 15990) || f2) {
    f2 = pk.transition;
    pk.transition = null;
    var g = C;
    C = 1;
    var h2 = K;
    K |= 4;
    ok.current = null;
    Pj(a, c);
    ek(c, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c;
    ik(c);
    dc();
    K = h2;
    C = g;
    pk.transition = f2;
  } else
    a.current = c;
  wk && (wk = false, xk = a, yk = e2);
  f2 = a.pendingLanes;
  0 === f2 && (Si = null);
  mc(c.stateNode);
  Ek(a, B());
  if (null !== b)
    for (d = a.onRecoverableError, c = 0; c < b.length; c++)
      e2 = b[c], d(e2.value, { componentStack: e2.stack, digest: e2.digest });
  if (Pi)
    throw Pi = false, a = Qi, Qi = null, a;
  0 !== (yk & 1) && 0 !== a.tag && Ik();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
  jg();
  return null;
}
function Ik() {
  if (null !== xk) {
    var a = Dc(yk), b = pk.transition, c = C;
    try {
      pk.transition = null;
      C = 16 > a ? 16 : a;
      if (null === xk)
        var d = false;
      else {
        a = xk;
        xk = null;
        yk = 0;
        if (0 !== (K & 6))
          throw Error(p$2(331));
        var e2 = K;
        K |= 4;
        for (V = a.current; null !== V; ) {
          var f2 = V, g = f2.child;
          if (0 !== (V.flags & 16)) {
            var h2 = f2.deletions;
            if (null !== h2) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2)
                    q2.return = m2, V = q2;
                  else
                    for (; null !== V; ) {
                      m2 = V;
                      var r2 = m2.sibling, y2 = m2.return;
                      Tj(m2);
                      if (m2 === l2) {
                        V = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V = r2;
                        break;
                      }
                      V = y2;
                    }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g)
            g.return = f2, V = g;
          else
            b:
              for (; null !== V; ) {
                f2 = V;
                if (0 !== (f2.flags & 2048))
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, f2, f2.return);
                  }
                var x2 = f2.sibling;
                if (null !== x2) {
                  x2.return = f2.return;
                  V = x2;
                  break b;
                }
                V = f2.return;
              }
        }
        var w2 = a.current;
        for (V = w2; null !== V; ) {
          g = V;
          var u2 = g.child;
          if (0 !== (g.subtreeFlags & 2064) && null !== u2)
            u2.return = g, V = u2;
          else
            b:
              for (g = w2; null !== V; ) {
                h2 = V;
                if (0 !== (h2.flags & 2048))
                  try {
                    switch (h2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rj(9, h2);
                    }
                  } catch (na) {
                    W(h2, h2.return, na);
                  }
                if (h2 === g) {
                  V = null;
                  break b;
                }
                var F2 = h2.sibling;
                if (null !== F2) {
                  F2.return = h2.return;
                  V = F2;
                  break b;
                }
                V = h2.return;
              }
        }
        K = e2;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot)
          try {
            lc.onPostCommitFiberRoot(kc, a);
          } catch (na) {
          }
        d = true;
      }
      return d;
    } finally {
      C = c, pk.transition = b;
    }
  }
  return false;
}
function Yk(a, b, c) {
  b = Ki(c, b);
  b = Oi(a, b, 1);
  a = dh(a, b, 1);
  b = L();
  null !== a && (Ac(a, 1, b), Ek(a, b));
}
function W(a, b, c) {
  if (3 === a.tag)
    Yk(a, a, c);
  else
    for (; null !== b; ) {
      if (3 === b.tag) {
        Yk(b, a, c);
        break;
      } else if (1 === b.tag) {
        var d = b.stateNode;
        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
          a = Ki(c, a);
          a = Ri(b, a, 1);
          b = dh(b, a, 1);
          a = L();
          null !== b && (Ac(b, 1, a), Ek(b, a));
          break;
        }
      }
      b = b.return;
    }
}
function Ui(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  b = L();
  a.pingedLanes |= a.suspendedLanes & c;
  R === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c);
  Ek(a, b);
}
function Zk(a, b) {
  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c = L();
  a = Zg(a, b);
  null !== a && (Ac(a, b, c), Ek(a, c));
}
function vj(a) {
  var b = a.memoizedState, c = 0;
  null !== b && (c = b.retryLane);
  Zk(a, c);
}
function ck(a, b) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e2 = a.memoizedState;
      null !== e2 && (c = e2.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p$2(314));
  }
  null !== d && d.delete(b);
  Zk(a, c);
}
var Wk;
Wk = function(a, b, c) {
  if (null !== a)
    if (a.memoizedProps !== b.pendingProps || Wf.current)
      Ug = true;
    else {
      if (0 === (a.lanes & c) && 0 === (b.flags & 128))
        return Ug = false, zj(a, b, c);
      Ug = 0 !== (a.flags & 131072) ? true : false;
    }
  else
    Ug = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      var d = b.type;
      jj(a, b);
      a = b.pendingProps;
      var e2 = Yf(b, H.current);
      Tg(b, c);
      e2 = Xh(null, b, d, a, e2, c);
      var f2 = bi();
      b.flags |= 1;
      "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, ah(b), e2.updater = nh, b.stateNode = e2, e2._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, true, f2, c)) : (b.tag = 0, I && f2 && vg(b), Yi(null, b, e2, c), b = b.child);
      return b;
    case 16:
      d = b.elementType;
      a: {
        jj(a, b);
        a = b.pendingProps;
        e2 = d._init;
        d = e2(d._payload);
        b.type = d;
        e2 = b.tag = $k(d);
        a = Lg(d, a);
        switch (e2) {
          case 0:
            b = dj(null, b, d, a, c);
            break a;
          case 1:
            b = ij(null, b, d, a, c);
            break a;
          case 11:
            b = Zi(null, b, d, a, c);
            break a;
          case 14:
            b = aj(null, b, d, Lg(d.type, a), c);
            break a;
        }
        throw Error(p$2(
          306,
          d,
          ""
        ));
      }
      return b;
    case 0:
      return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Lg(d, e2), dj(a, b, d, e2, c);
    case 1:
      return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Lg(d, e2), ij(a, b, d, e2, c);
    case 3:
      a: {
        lj(b);
        if (null === a)
          throw Error(p$2(387));
        d = b.pendingProps;
        f2 = b.memoizedState;
        e2 = f2.element;
        bh(a, b);
        gh(b, d, null, c);
        var g = b.memoizedState;
        d = g.element;
        if (f2.isDehydrated)
          if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
            e2 = Ki(Error(p$2(423)), b);
            b = mj(a, b, d, c, e2);
            break a;
          } else if (d !== e2) {
            e2 = Ki(Error(p$2(424)), b);
            b = mj(a, b, d, c, e2);
            break a;
          } else
            for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Ch(b, null, d, c), b.child = c; c; )
              c.flags = c.flags & -3 | 4096, c = c.sibling;
        else {
          Ig();
          if (d === e2) {
            b = $i(a, b, c);
            break a;
          }
          Yi(a, b, d, c);
        }
        b = b.child;
      }
      return b;
    case 5:
      return Kh(b), null === a && Eg(b), d = b.type, e2 = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e2.children, Ef(d, e2) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), hj(a, b), Yi(a, b, g, c), b.child;
    case 6:
      return null === a && Eg(b), null;
    case 13:
      return pj(a, b, c);
    case 4:
      return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Lg(d, e2), Zi(a, b, d, e2, c);
    case 7:
      return Yi(a, b, b.pendingProps, c), b.child;
    case 8:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e2 = b.pendingProps;
        f2 = b.memoizedProps;
        g = e2.value;
        G(Mg, d._currentValue);
        d._currentValue = g;
        if (null !== f2)
          if (He(f2.value, g)) {
            if (f2.children === e2.children && !Wf.current) {
              b = $i(a, b, c);
              break a;
            }
          } else
            for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
              var h2 = f2.dependencies;
              if (null !== h2) {
                g = f2.child;
                for (var k2 = h2.firstContext; null !== k2; ) {
                  if (k2.context === d) {
                    if (1 === f2.tag) {
                      k2 = ch(-1, c & -c);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (null !== l2) {
                        l2 = l2.shared;
                        var m2 = l2.pending;
                        null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c;
                    k2 = f2.alternate;
                    null !== k2 && (k2.lanes |= c);
                    Sg(
                      f2.return,
                      c,
                      b
                    );
                    h2.lanes |= c;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (10 === f2.tag)
                g = f2.type === b.type ? null : f2.child;
              else if (18 === f2.tag) {
                g = f2.return;
                if (null === g)
                  throw Error(p$2(341));
                g.lanes |= c;
                h2 = g.alternate;
                null !== h2 && (h2.lanes |= c);
                Sg(g, c, b);
                g = f2.sibling;
              } else
                g = f2.child;
              if (null !== g)
                g.return = f2;
              else
                for (g = f2; null !== g; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  f2 = g.sibling;
                  if (null !== f2) {
                    f2.return = g.return;
                    g = f2;
                    break;
                  }
                  g = g.return;
                }
              f2 = g;
            }
        Yi(a, b, e2.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e2 = b.type, d = b.pendingProps.children, Tg(b, c), e2 = Vg(e2), d = d(e2), b.flags |= 1, Yi(a, b, d, c), b.child;
    case 14:
      return d = b.type, e2 = Lg(d, b.pendingProps), e2 = Lg(d.type, e2), aj(a, b, d, e2, c);
    case 15:
      return cj(a, b, b.type, b.pendingProps, c);
    case 17:
      return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Lg(d, e2), jj(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, Tg(b, c), ph(b, d, e2), rh(b, d, e2, c), kj(null, b, d, true, a, c);
    case 19:
      return yj(a, b, c);
    case 22:
      return ej(a, b, c);
  }
  throw Error(p$2(156, b.tag));
};
function Gk(a, b) {
  return ac(a, b);
}
function al(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b, c, d) {
  return new al(a, b, c, d);
}
function bj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function $k(a) {
  if ("function" === typeof a)
    return bj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da)
      return 11;
    if (a === Ga)
      return 14;
  }
  return 2;
}
function wh(a, b) {
  var c = a.alternate;
  null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function yh(a, b, c, d, e2, f2) {
  var g = 2;
  d = a;
  if ("function" === typeof a)
    bj(a) && (g = 1);
  else if ("string" === typeof a)
    g = 5;
  else
    a:
      switch (a) {
        case ya:
          return Ah(c.children, e2, f2, b);
        case za:
          g = 8;
          e2 |= 8;
          break;
        case Aa:
          return a = Bg(12, c, b, e2 | 2), a.elementType = Aa, a.lanes = f2, a;
        case Ea:
          return a = Bg(13, c, b, e2), a.elementType = Ea, a.lanes = f2, a;
        case Fa:
          return a = Bg(19, c, b, e2), a.elementType = Fa, a.lanes = f2, a;
        case Ia:
          return qj(c, e2, f2, b);
        default:
          if ("object" === typeof a && null !== a)
            switch (a.$$typeof) {
              case Ba:
                g = 10;
                break a;
              case Ca:
                g = 9;
                break a;
              case Da:
                g = 11;
                break a;
              case Ga:
                g = 14;
                break a;
              case Ha:
                g = 16;
                d = null;
                break a;
            }
          throw Error(p$2(130, null == a ? a : typeof a, ""));
      }
  b = Bg(g, c, b, e2);
  b.elementType = a;
  b.type = d;
  b.lanes = f2;
  return b;
}
function Ah(a, b, c, d) {
  a = Bg(7, a, d, b);
  a.lanes = c;
  return a;
}
function qj(a, b, c, d) {
  a = Bg(22, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  a.stateNode = { isHidden: false };
  return a;
}
function xh(a, b, c) {
  a = Bg(6, a, null, b);
  a.lanes = c;
  return a;
}
function zh(a, b, c) {
  b = Bg(4, null !== a.children ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function bl(a, b, c, d, e2) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function cl(a, b, c, d, e2, f2, g, h2, k2) {
  a = new bl(a, b, c, h2, k2);
  1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
  f2 = Bg(3, null, null, b);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  ah(f2);
  return a;
}
function dl(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function el(a) {
  if (!a)
    return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag)
      throw Error(p$2(170));
    var b = a;
    do {
      switch (b.tag) {
        case 3:
          b = b.stateNode.context;
          break a;
        case 1:
          if (Zf(b.type)) {
            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b = b.return;
    } while (null !== b);
    throw Error(p$2(171));
  }
  if (1 === a.tag) {
    var c = a.type;
    if (Zf(c))
      return bg(a, c, b);
  }
  return b;
}
function fl(a, b, c, d, e2, f2, g, h2, k2) {
  a = cl(c, d, true, a, e2, f2, g, h2, k2);
  a.context = el(null);
  c = a.current;
  d = L();
  e2 = lh(c);
  f2 = ch(d, e2);
  f2.callback = void 0 !== b && null !== b ? b : null;
  dh(c, f2, e2);
  a.current.lanes = e2;
  Ac(a, e2, d);
  Ek(a, d);
  return a;
}
function gl(a, b, c, d) {
  var e2 = b.current, f2 = L(), g = lh(e2);
  c = el(c);
  null === b.context ? b.context = c : b.pendingContext = c;
  b = ch(f2, g);
  b.payload = { element: a };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  a = dh(e2, b, g);
  null !== a && (mh(a, e2, g, f2), eh(a, e2, g));
  return g;
}
function hl(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function il(a, b) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b ? c : b;
  }
}
function jl(a, b) {
  il(a, b);
  (a = a.alternate) && il(a, b);
}
function kl() {
  return null;
}
var ll = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ml(a) {
  this._internalRoot = a;
}
nl.prototype.render = ml.prototype.render = function(a) {
  var b = this._internalRoot;
  if (null === b)
    throw Error(p$2(409));
  gl(a, b, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b = a.containerInfo;
    Sk(function() {
      gl(null, a, null, null);
    });
    b[uf] = null;
  }
};
function nl(a) {
  this._internalRoot = a;
}
nl.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b = Hc();
    a = { blockedOn: null, target: a, priority: b };
    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++)
      ;
    Qc.splice(c, 0, a);
    0 === c && Vc(a);
  }
};
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function pl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function ql() {
}
function rl(a, b, c, d, e2) {
  if (e2) {
    if ("function" === typeof d) {
      var f2 = d;
      d = function() {
        var a2 = hl(g);
        f2.call(a2);
      };
    }
    var g = fl(b, d, a, 0, null, false, false, "", ql);
    a._reactRootContainer = g;
    a[uf] = g.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Sk();
    return g;
  }
  for (; e2 = a.lastChild; )
    a.removeChild(e2);
  if ("function" === typeof d) {
    var h2 = d;
    d = function() {
      var a2 = hl(k2);
      h2.call(a2);
    };
  }
  var k2 = cl(a, 0, false, null, null, false, false, "", ql);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Sk(function() {
    gl(b, k2, c, d);
  });
  return k2;
}
function sl(a, b, c, d, e2) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g = f2;
    if ("function" === typeof e2) {
      var h2 = e2;
      e2 = function() {
        var a2 = hl(g);
        h2.call(a2);
      };
    }
    gl(b, g, a, e2);
  } else
    g = rl(c, b, a, e2, d);
  return hl(g);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b = a.stateNode;
      if (b.current.memoizedState.isDehydrated) {
        var c = tc(b.pendingLanes);
        0 !== c && (Cc(b, c | 1), Ek(b, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
      }
      break;
    case 13:
      Sk(function() {
        var b2 = Zg(a, 1);
        if (null !== b2) {
          var c2 = L();
          mh(b2, a, 1, c2);
        }
      }), jl(a, 1);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b = Zg(a, 134217728);
    if (null !== b) {
      var c = L();
      mh(b, a, 134217728, c);
    }
    jl(a, 134217728);
  }
};
Gc = function(a) {
  if (13 === a.tag) {
    var b = lh(a), c = Zg(a, b);
    if (null !== c) {
      var d = L();
      mh(c, a, b, d);
    }
    jl(a, b);
  }
};
Hc = function() {
  return C;
};
Ic = function(a, b) {
  var c = C;
  try {
    return C = a, b();
  } finally {
    C = c;
  }
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      bb(a, c);
      b = c.name;
      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e2 = Db(d);
            if (!e2)
              throw Error(p$2(90));
            Wa(d);
            bb(d, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, null != b && fb(a, !!c.multiple, b, false);
  }
};
Gb = Rk;
Hb = Sk;
var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      kc = wl.inject(vl), lc = wl;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
reactDom_production_min.createPortal = function(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!ol(b))
    throw Error(p$2(200));
  return dl(a, b, null, c);
};
reactDom_production_min.createRoot = function(a, b) {
  if (!ol(a))
    throw Error(p$2(299));
  var c = false, d = "", e2 = ll;
  null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e2 = b.onRecoverableError));
  b = cl(a, 1, false, null, null, c, false, d, e2);
  a[uf] = b.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ml(b);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a)
    return null;
  if (1 === a.nodeType)
    return a;
  var b = a._reactInternals;
  if (void 0 === b) {
    if ("function" === typeof a.render)
      throw Error(p$2(188));
    a = Object.keys(a).join(",");
    throw Error(p$2(268, a));
  }
  a = Zb(b);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Sk(a);
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!pl(b))
    throw Error(p$2(200));
  return sl(null, a, b, true, c);
};
reactDom_production_min.hydrateRoot = function(a, b, c) {
  if (!ol(a))
    throw Error(p$2(405));
  var d = null != c && c.hydratedSources || null, e2 = false, f2 = "", g = ll;
  null !== c && void 0 !== c && (true === c.unstable_strictMode && (e2 = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
  b = fl(b, null, a, 1, null != c ? c : null, e2, false, f2, g);
  a[uf] = b.current;
  sf(a);
  if (d)
    for (a = 0; a < d.length; a++)
      c = d[a], e2 = c._getVersion, e2 = e2(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e2] : b.mutableSourceEagerHydrationData.push(
        c,
        e2
      );
  return new nl(b);
};
reactDom_production_min.render = function(a, b, c) {
  if (!pl(b))
    throw Error(p$2(200));
  return sl(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!pl(a))
    throw Error(p$2(40));
  return a._reactRootContainer ? (Sk(function() {
    sl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Rk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!pl(c))
    throw Error(p$2(200));
  if (null == a || void 0 === a._reactInternals)
    throw Error(p$2(38));
  return sl(a, b, c, false, d);
};
reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err2) {
    console.error(err2);
  }
}
{
  checkDCE();
  reactDom$1.exports = reactDom_production_min;
}
var reactDomExports = reactDom$1.exports;
const reactDom = /* @__PURE__ */ getDefaultExportFromCjs(reactDomExports);
var m$1 = reactDomExports;
{
  client.createRoot = m$1.createRoot;
  client.hydrateRoot = m$1.hydrateRoot;
}
const App$1 = "";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
var fastDeepEqual = function equal(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor)
      return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!equal(a[i], b[i]))
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      var key = keys[i];
      if (!equal(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
};
const DEFAULT_ID = "__googleMapsScriptId";
var LoaderStatus;
(function(LoaderStatus2) {
  LoaderStatus2[LoaderStatus2["INITIALIZED"] = 0] = "INITIALIZED";
  LoaderStatus2[LoaderStatus2["LOADING"] = 1] = "LOADING";
  LoaderStatus2[LoaderStatus2["SUCCESS"] = 2] = "SUCCESS";
  LoaderStatus2[LoaderStatus2["FAILURE"] = 3] = "FAILURE";
})(LoaderStatus || (LoaderStatus = {}));
class Loader {
  /**
   * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
   * using this library, instead the defaults are set by the Google Maps
   * JavaScript API server.
   *
   * ```
   * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
   * ```
   */
  constructor({ apiKey, authReferrerPolicy, channel, client: client2, id: id2 = DEFAULT_ID, language, libraries = [], mapIds, nonce, region, retries = 3, url = "https://maps.googleapis.com/maps/api/js", version }) {
    this.callbacks = [];
    this.done = false;
    this.loading = false;
    this.errors = [];
    this.apiKey = apiKey;
    this.authReferrerPolicy = authReferrerPolicy;
    this.channel = channel;
    this.client = client2;
    this.id = id2 || DEFAULT_ID;
    this.language = language;
    this.libraries = libraries;
    this.mapIds = mapIds;
    this.nonce = nonce;
    this.region = region;
    this.retries = retries;
    this.url = url;
    this.version = version;
    if (Loader.instance) {
      if (!fastDeepEqual(this.options, Loader.instance.options)) {
        throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);
      }
      return Loader.instance;
    }
    Loader.instance = this;
  }
  get options() {
    return {
      version: this.version,
      apiKey: this.apiKey,
      channel: this.channel,
      client: this.client,
      id: this.id,
      libraries: this.libraries,
      language: this.language,
      region: this.region,
      mapIds: this.mapIds,
      nonce: this.nonce,
      url: this.url,
      authReferrerPolicy: this.authReferrerPolicy
    };
  }
  get status() {
    if (this.errors.length) {
      return LoaderStatus.FAILURE;
    }
    if (this.done) {
      return LoaderStatus.SUCCESS;
    }
    if (this.loading) {
      return LoaderStatus.LOADING;
    }
    return LoaderStatus.INITIALIZED;
  }
  get failed() {
    return this.done && !this.loading && this.errors.length >= this.retries + 1;
  }
  /**
   * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
   *
   * @ignore
   * @deprecated
   */
  createUrl() {
    let url = this.url;
    url += `?callback=__googleMapsCallback`;
    if (this.apiKey) {
      url += `&key=${this.apiKey}`;
    }
    if (this.channel) {
      url += `&channel=${this.channel}`;
    }
    if (this.client) {
      url += `&client=${this.client}`;
    }
    if (this.libraries.length > 0) {
      url += `&libraries=${this.libraries.join(",")}`;
    }
    if (this.language) {
      url += `&language=${this.language}`;
    }
    if (this.region) {
      url += `&region=${this.region}`;
    }
    if (this.version) {
      url += `&v=${this.version}`;
    }
    if (this.mapIds) {
      url += `&map_ids=${this.mapIds.join(",")}`;
    }
    if (this.authReferrerPolicy) {
      url += `&auth_referrer_policy=${this.authReferrerPolicy}`;
    }
    return url;
  }
  deleteScript() {
    const script = document.getElementById(this.id);
    if (script) {
      script.remove();
    }
  }
  /**
   * Load the Google Maps JavaScript API script and return a Promise.
   * @deprecated, use importLibrary() instead.
   */
  load() {
    return this.loadPromise();
  }
  /**
   * Load the Google Maps JavaScript API script and return a Promise.
   *
   * @ignore
   * @deprecated, use importLibrary() instead.
   */
  loadPromise() {
    return new Promise((resolve, reject) => {
      this.loadCallback((err2) => {
        if (!err2) {
          resolve(window.google);
        } else {
          reject(err2.error);
        }
      });
    });
  }
  importLibrary(name) {
    this.execute();
    return google.maps.importLibrary(name);
  }
  /**
   * Load the Google Maps JavaScript API script with a callback.
   * @deprecated, use importLibrary() instead.
   */
  loadCallback(fn) {
    this.callbacks.push(fn);
    this.execute();
  }
  /**
   * Set the script on document.
   */
  setScript() {
    var _a, _b;
    if (document.getElementById(this.id)) {
      this.callback();
      return;
    }
    const params = {
      key: this.apiKey,
      channel: this.channel,
      client: this.client,
      libraries: this.libraries.length && this.libraries,
      v: this.version,
      mapIds: this.mapIds,
      language: this.language,
      region: this.region,
      authReferrerPolicy: this.authReferrerPolicy
    };
    Object.keys(params).forEach(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (key) => !params[key] && delete params[key]
    );
    if (!((_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.maps) === null || _b === void 0 ? void 0 : _b.importLibrary)) {
      ((g) => {
        let h2, a, k2, p2 = "The Google Maps JavaScript API", c = "google", l2 = "importLibrary", q2 = "__ib__", m2 = document, b = window;
        b = b[c] || (b[c] = {});
        const d = b.maps || (b.maps = {}), r2 = /* @__PURE__ */ new Set(), e2 = new URLSearchParams(), u2 = () => (
          // @ts-ignore
          h2 || (h2 = new Promise((f2, n2) => __awaiter(this, void 0, void 0, function* () {
            var _a2;
            yield a = m2.createElement("script");
            a.id = this.id;
            e2.set("libraries", [...r2] + "");
            for (k2 in g)
              e2.set(k2.replace(/[A-Z]/g, (t2) => "_" + t2[0].toLowerCase()), g[k2]);
            e2.set("callback", c + ".maps." + q2);
            a.src = this.url + `?` + e2;
            d[q2] = f2;
            a.onerror = () => h2 = n2(Error(p2 + " could not load."));
            a.nonce = this.nonce || ((_a2 = m2.querySelector("script[nonce]")) === null || _a2 === void 0 ? void 0 : _a2.nonce) || "";
            m2.head.append(a);
          })))
        );
        d[l2] ? console.warn(p2 + " only loads once. Ignoring:", g) : d[l2] = (f2, ...n2) => r2.add(f2) && u2().then(() => d[l2](f2, ...n2));
      })(params);
    }
    const libraryPromises = this.libraries.map((library) => this.importLibrary(library));
    if (!libraryPromises.length) {
      libraryPromises.push(this.importLibrary("core"));
    }
    Promise.all(libraryPromises).then(() => this.callback(), (error) => {
      const event = new ErrorEvent("error", { error });
      this.loadErrorCallback(event);
    });
  }
  /**
   * Reset the loader state.
   */
  reset() {
    this.deleteScript();
    this.done = false;
    this.loading = false;
    this.errors = [];
    this.onerrorEvent = null;
  }
  resetIfRetryingFailed() {
    if (this.failed) {
      this.reset();
    }
  }
  loadErrorCallback(e2) {
    this.errors.push(e2);
    if (this.errors.length <= this.retries) {
      const delay = this.errors.length * Math.pow(2, this.errors.length);
      console.error(`Failed to load Google Maps script, retrying in ${delay} ms.`);
      setTimeout(() => {
        this.deleteScript();
        this.setScript();
      }, delay);
    } else {
      this.onerrorEvent = e2;
      this.callback();
    }
  }
  callback() {
    this.done = true;
    this.loading = false;
    this.callbacks.forEach((cb2) => {
      cb2(this.onerrorEvent);
    });
    this.callbacks = [];
  }
  execute() {
    this.resetIfRetryingFailed();
    if (this.done) {
      this.callback();
    } else {
      if (window.google && window.google.maps && window.google.maps.version) {
        console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match.");
        this.callback();
        return;
      }
      if (this.loading)
        ;
      else {
        this.loading = true;
        this.setScript();
      }
    }
  }
}
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => {
    if (({ "VITE_ENVIRONMENT": "local", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false } ? "production" : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  };
  const api = { setState, getState, subscribe, destroy };
  state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
var withSelector = { exports: {} };
var withSelector_production_min = {};
var shim = { exports: {} };
var useSyncExternalStoreShim_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e = reactExports;
function h$1(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var k = "function" === typeof Object.is ? Object.is : h$1, l = e.useState, m = e.useEffect, n$1 = e.useLayoutEffect, p$1 = e.useDebugValue;
function q$1(a, b) {
  var d = b(), f2 = l({ inst: { value: d, getSnapshot: b } }), c = f2[0].inst, g = f2[1];
  n$1(function() {
    c.value = d;
    c.getSnapshot = b;
    r$1(c) && g({ inst: c });
  }, [a, d, b]);
  m(function() {
    r$1(c) && g({ inst: c });
    return a(function() {
      r$1(c) && g({ inst: c });
    });
  }, [a]);
  p$1(d);
  return d;
}
function r$1(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var d = b();
    return !k(a, d);
  } catch (f2) {
    return true;
  }
}
function t$1(a, b) {
  return b();
}
var u$1 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t$1 : q$1;
useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : u$1;
{
  shim.exports = useSyncExternalStoreShim_production_min;
}
var shimExports = shim.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h = reactExports, n = shimExports;
function p(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var q = "function" === typeof Object.is ? Object.is : p, r = n.useSyncExternalStore, t = h.useRef, u = h.useEffect, v = h.useMemo, w = h.useDebugValue;
withSelector_production_min.useSyncExternalStoreWithSelector = function(a, b, e2, l2, g) {
  var c = t(null);
  if (null === c.current) {
    var f2 = { hasValue: false, value: null };
    c.current = f2;
  } else
    f2 = c.current;
  c = v(function() {
    function a2(a3) {
      if (!c2) {
        c2 = true;
        d2 = a3;
        a3 = l2(a3);
        if (void 0 !== g && f2.hasValue) {
          var b2 = f2.value;
          if (g(b2, a3))
            return k2 = b2;
        }
        return k2 = a3;
      }
      b2 = k2;
      if (q(d2, a3))
        return b2;
      var e3 = l2(a3);
      if (void 0 !== g && g(b2, e3))
        return b2;
      d2 = a3;
      return k2 = e3;
    }
    var c2 = false, d2, k2, m2 = void 0 === e2 ? null : e2;
    return [function() {
      return a2(b());
    }, null === m2 ? void 0 : function() {
      return a2(m2());
    }];
  }, [b, e2, l2, g]);
  var d = r(a, c[0], c[1]);
  u(function() {
    f2.hasValue = true;
    f2.value = d;
  }, [d]);
  w(d);
  return d;
};
{
  withSelector.exports = withSelector_production_min;
}
var withSelectorExports = withSelector.exports;
const useSyncExternalStoreExports = /* @__PURE__ */ getDefaultExportFromCjs(withSelectorExports);
const { useDebugValue } = React;
const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
let didWarnAboutEqualityFn = false;
function useStore(api, selector2 = api.getState, equalityFn) {
  if (({ "VITE_ENVIRONMENT": "local", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false } ? "production" : void 0) !== "production" && equalityFn && !didWarnAboutEqualityFn) {
    console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    );
    didWarnAboutEqualityFn = true;
  }
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector2,
    equalityFn
  );
  useDebugValue(slice);
  return slice;
}
const createImpl = (createState) => {
  if (({ "VITE_ENVIRONMENT": "local", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false } ? "production" : void 0) !== "production" && typeof createState !== "function") {
    console.warn(
      "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
    );
  }
  const api = typeof createState === "function" ? createStore(createState) : createState;
  const useBoundStore = (selector2, equalityFn) => useStore(api, selector2, equalityFn);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;
const useElintVehiclesStore = create()((set2, get2) => ({
  everCount: 3,
  vehicles: [
    {
      id: crypto.randomUUID(),
      name: "A",
      latitude: 50.47520052846764,
      longitude: 30.417108362162082,
      azimuth: 90
    },
    {
      id: crypto.randomUUID(),
      name: "B",
      latitude: 50.4874781936058,
      longitude: 30.520131234011533,
      // latitude: 48.163618040334114,
      // longitude: 37.753974593776384,
      azimuth: 180
    },
    {
      id: crypto.randomUUID(),
      name: "C",
      latitude: 50.505311785025185,
      longitude: 30.476325613694026,
      azimuth: 157
    }
  ],
  addNew: () => set2((state) => ({ vehicles: [...state.vehicles, getRandomElint$1("РЕБ " + (state.everCount + 1))], everCount: ++state.everCount })),
  // addNew: () => set((state) => ({ vehicles: [...state.vehicles, { id: crypto.randomUUID(), name: 'РЕБ ' + (state.everCount + 1) }], everCount: ++state.everCount })),
  getById: (id2) => get2().vehicles.find((v2) => v2.id === id2),
  update: (vehicle) => set2((state) => {
    if (!vehicle) {
      return state;
    }
    const newVehicles = state.vehicles.map((v2) => {
      if (v2.id !== vehicle.id)
        return v2;
      return vehicle;
    });
    console.log("update", state.vehicles, newVehicles);
    return { vehicles: newVehicles };
  }),
  deleteById: (id2) => set2((state) => ({ vehicles: state.vehicles.filter((v2) => v2.id !== id2) }))
}));
const getRandomElint$1 = (name) => {
  return {
    name,
    id: crypto.randomUUID(),
    latitude: Math.random() * (48.5 - 48) + 48,
    longitude: Math.random() * (37.8 - 37.5) + 37.5,
    azimuth: Math.random() * 360
  };
};
const isDev = (environment) => {
  return environment === "local" || environment === "qa";
};
const isCurrentlyDev = () => {
  return isDev("local");
};
const log = (...data) => {
  if (isCurrentlyDev()) {
    console.log(...data);
  }
};
const earthRadiusAvg = 6371;
const toRadians = (angle) => Math.PI * angle / 180;
const toDegrees = (angle) => angle * (180 / Math.PI);
const toGeo = (coords) => {
  return {
    lat: toDegrees(Math.asin(coords.z / earthRadiusAvg)),
    lon: toDegrees(Math.atan2(coords.y, coords.x))
  };
};
const toCatesian = (lat, lon) => {
  const latRad = toRadians(lat);
  const lonRad = toRadians(lon);
  return {
    x: earthRadiusAvg * Math.cos(latRad) * Math.cos(lonRad),
    y: earthRadiusAvg * Math.cos(latRad) * Math.sin(lonRad),
    z: earthRadiusAvg * Math.sin(latRad)
  };
};
let dmsSeparator = " ";
class Dms {
  // note Unicode Degree = U+00B0. Prime = U+2032, Double prime = U+2033
  /**
   * Separator character to be used to separate degrees, minutes, seconds, and cardinal directions.
   *
   * Default separator is U+202F ‘narrow no-break space’.
   *
   * To change this (e.g. to empty string or full space), set Dms.separator prior to invoking
   * formatting.
   *
   * @example
   *   import LatLon, { Dms } from '/js/geodesy/latlon-spherical.js';
   *   const p = new LatLon(51.2, 0.33).toString('dms');  // 51° 12′ 00″ N, 000° 19′ 48″ E
   *   Dms.separator = '';                                // no separator
   *   const pʹ = new LatLon(51.2, 0.33).toString('dms'); // 51°12′00″N, 000°19′48″E
   */
  static get separator() {
    return dmsSeparator;
  }
  static set separator(char) {
    dmsSeparator = char;
  }
  /**
   * Parses string representing degrees/minutes/seconds into numeric degrees.
   *
   * This is very flexible on formats, allowing signed decimal degrees, or deg-min-sec optionally
   * suffixed by compass direction (NSEW); a variety of separators are accepted. Examples -3.62,
   * '3 37 12W', '3°37′12″W'.
   *
   * Thousands/decimal separators must be comma/dot; use Dms.fromLocale to convert locale-specific
   * thousands/decimal separators.
   *
   * @param   {string|number} dms - Degrees or deg/min/sec in variety of formats.
   * @returns {number}        Degrees as decimal number.
   *
   * @example
   *   const lat = Dms.parse('51° 28′ 40.37″ N');
   *   const lon = Dms.parse('000° 00′ 05.29″ W');
   *   const p1 = new LatLon(lat, lon); // 51.4779°N, 000.0015°W
   */
  static parse(dms) {
    if (!isNaN(parseFloat(dms)) && isFinite(dms))
      return Number(dms);
    const dmsParts = String(dms).trim().replace(/^-/, "").replace(/[NSEW]$/i, "").split(/[^0-9.,]+/);
    if (dmsParts[dmsParts.length - 1] == "")
      dmsParts.splice(dmsParts.length - 1);
    if (dmsParts == "")
      return NaN;
    let deg = null;
    switch (dmsParts.length) {
      case 3:
        deg = dmsParts[0] / 1 + dmsParts[1] / 60 + dmsParts[2] / 3600;
        break;
      case 2:
        deg = dmsParts[0] / 1 + dmsParts[1] / 60;
        break;
      case 1:
        deg = dmsParts[0];
        break;
      default:
        return NaN;
    }
    if (/^-|[WS]$/i.test(dms.trim()))
      deg = -deg;
    return Number(deg);
  }
  /**
   * Converts decimal degrees to deg/min/sec format
   *  - degree, prime, double-prime symbols are added, but sign is discarded, though no compass
   *    direction is added.
   *  - degrees are zero-padded to 3 digits; for degrees latitude, use .slice(1) to remove leading
   *    zero.
   *
   * @private
   * @param   {number} deg - Degrees to be formatted as specified.
   * @param   {string} [format=d] - Return value as 'd', 'dm', 'dms' for deg, deg+min, deg+min+sec.
   * @param   {number} [dp=4|2|0] - Number of decimal places to use – default 4 for d, 2 for dm, 0 for dms.
   * @returns {string} Degrees formatted as deg/min/secs according to specified format.
   */
  static toDms(deg, format = "d", dp = void 0) {
    if (isNaN(deg))
      return null;
    if (typeof deg == "string" && deg.trim() == "")
      return null;
    if (typeof deg == "boolean")
      return null;
    if (deg == Infinity)
      return null;
    if (deg == null)
      return null;
    if (dp === void 0) {
      switch (format) {
        case "d":
        case "deg":
          dp = 4;
          break;
        case "dm":
        case "deg+min":
          dp = 2;
          break;
        case "dms":
        case "deg+min+sec":
          dp = 0;
          break;
        default:
          format = "d";
          dp = 4;
          break;
      }
    }
    deg = Math.abs(deg);
    let dms = null, d = null, m2 = null, s = null;
    switch (format) {
      default:
      case "d":
      case "deg":
        d = deg.toFixed(dp);
        if (d < 100)
          d = "0" + d;
        if (d < 10)
          d = "0" + d;
        dms = d + "°";
        break;
      case "dm":
      case "deg+min":
        d = Math.floor(deg);
        m2 = (deg * 60 % 60).toFixed(dp);
        if (m2 == 60) {
          m2 = 0 .toFixed(dp);
          d++;
        }
        d = ("000" + d).slice(-3);
        if (m2 < 10)
          m2 = "0" + m2;
        dms = d + "°" + Dms.separator + m2 + "′";
        break;
      case "dms":
      case "deg+min+sec":
        d = Math.floor(deg);
        m2 = Math.floor(deg * 3600 / 60) % 60;
        s = (deg * 3600 % 60).toFixed(dp);
        if (s == 60) {
          s = 0 .toFixed(dp);
          m2++;
        }
        if (m2 == 60) {
          m2 = 0;
          d++;
        }
        d = ("000" + d).slice(-3);
        m2 = ("00" + m2).slice(-2);
        if (s < 10)
          s = "0" + s;
        dms = d + "°" + Dms.separator + m2 + "′" + Dms.separator + s + "″";
        break;
    }
    return dms;
  }
  /**
   * Converts numeric degrees to deg/min/sec latitude (2-digit degrees, suffixed with N/S).
   *
   * @param   {number} deg - Degrees to be formatted as specified.
   * @param   {string} [format=d] - Return value as 'd', 'dm', 'dms' for deg, deg+min, deg+min+sec.
   * @param   {number} [dp=4|2|0] - Number of decimal places to use – default 4 for d, 2 for dm, 0 for dms.
   * @returns {string} Degrees formatted as deg/min/secs according to specified format.
   *
   * @example
   *   const lat = Dms.toLat(-3.62, 'dms'); // 3°37′12″S
   */
  static toLat(deg, format, dp) {
    const lat = Dms.toDms(Dms.wrap90(deg), format, dp);
    return lat === null ? "–" : lat.slice(1) + Dms.separator + (deg < 0 ? "S" : "N");
  }
  /**
   * Convert numeric degrees to deg/min/sec longitude (3-digit degrees, suffixed with E/W).
   *
   * @param   {number} deg - Degrees to be formatted as specified.
   * @param   {string} [format=d] - Return value as 'd', 'dm', 'dms' for deg, deg+min, deg+min+sec.
   * @param   {number} [dp=4|2|0] - Number of decimal places to use – default 4 for d, 2 for dm, 0 for dms.
   * @returns {string} Degrees formatted as deg/min/secs according to specified format.
   *
   * @example
   *   const lon = Dms.toLon(-3.62, 'dms'); // 3°37′12″W
   */
  static toLon(deg, format, dp) {
    const lon = Dms.toDms(Dms.wrap180(deg), format, dp);
    return lon === null ? "–" : lon + Dms.separator + (deg < 0 ? "W" : "E");
  }
  /**
   * Converts numeric degrees to deg/min/sec as a bearing (0°..360°).
   *
   * @param   {number} deg - Degrees to be formatted as specified.
   * @param   {string} [format=d] - Return value as 'd', 'dm', 'dms' for deg, deg+min, deg+min+sec.
   * @param   {number} [dp=4|2|0] - Number of decimal places to use – default 4 for d, 2 for dm, 0 for dms.
   * @returns {string} Degrees formatted as deg/min/secs according to specified format.
   *
   * @example
   *   const lon = Dms.toBrng(-3.62, 'dms'); // 356°22′48″
   */
  static toBrng(deg, format, dp) {
    const brng = Dms.toDms(Dms.wrap360(deg), format, dp);
    return brng === null ? "–" : brng.replace("360", "0");
  }
  /**
   * Converts DMS string from locale thousands/decimal separators to JavaScript comma/dot separators
   * for subsequent parsing.
   *
   * Both thousands and decimal separators must be followed by a numeric character, to facilitate
   * parsing of single lat/long string (in which whitespace must be left after the comma separator).
   *
   * @param   {string} str - Degrees/minutes/seconds formatted with locale separators.
   * @returns {string} Degrees/minutes/seconds formatted with standard Javascript separators.
   *
   * @example
   *   const lat = Dms.fromLocale('51°28′40,12″N');                          // '51°28′40.12″N' in France
   *   const p = new LatLon(Dms.fromLocale('51°28′40,37″N, 000°00′05,29″W'); // '51.4779°N, 000.0015°W' in France
   */
  static fromLocale(str) {
    const locale = 123456.789.toLocaleString();
    const separator = { thousands: locale.slice(3, 4), decimal: locale.slice(7, 8) };
    return str.replace(separator.thousands, "⁜").replace(separator.decimal, ".").replace("⁜", ",");
  }
  /**
   * Converts DMS string from JavaScript comma/dot thousands/decimal separators to locale separators.
   *
   * Can also be used to format standard numbers such as distances.
   *
   * @param   {string} str - Degrees/minutes/seconds formatted with standard Javascript separators.
   * @returns {string} Degrees/minutes/seconds formatted with locale separators.
   *
   * @example
   *   const Dms.toLocale('123,456.789');                   // '123.456,789' in France
   *   const Dms.toLocale('51°28′40.12″N, 000°00′05.31″W'); // '51°28′40,12″N, 000°00′05,31″W' in France
   */
  static toLocale(str) {
    const locale = 123456.789.toLocaleString();
    const separator = { thousands: locale.slice(3, 4), decimal: locale.slice(7, 8) };
    return str.replace(/,([0-9])/, "⁜$1").replace(".", separator.decimal).replace("⁜", separator.thousands);
  }
  /**
   * Returns compass point (to given precision) for supplied bearing.
   *
   * @param   {number} bearing - Bearing in degrees from north.
   * @param   {number} [precision=3] - Precision (1:cardinal / 2:intercardinal / 3:secondary-intercardinal).
   * @returns {string} Compass point for supplied bearing.
   *
   * @example
   *   const point = Dms.compassPoint(24);    // point = 'NNE'
   *   const point = Dms.compassPoint(24, 1); // point = 'N'
   */
  static compassPoint(bearing, precision = 3) {
    if (![1, 2, 3].includes(Number(precision)))
      throw new RangeError(`invalid precision ‘${precision}’`);
    bearing = Dms.wrap360(bearing);
    const cardinals = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW"
    ];
    const n2 = 4 * 2 ** (precision - 1);
    const cardinal = cardinals[Math.round(bearing * n2 / 360) % n2 * 16 / n2];
    return cardinal;
  }
  /**
   * Constrain degrees to range -90..+90 (for latitude); e.g. -91 => -89, 91 => 89.
   *
   * @private
   * @param {number} degrees
   * @returns degrees within range -90..+90.
   */
  static wrap90(degrees) {
    if (-90 <= degrees && degrees <= 90)
      return degrees;
    const x2 = degrees, a = 90, p2 = 360;
    return 4 * a / p2 * Math.abs(((x2 - p2 / 4) % p2 + p2) % p2 - p2 / 2) - a;
  }
  /**
   * Constrain degrees to range -180..+180 (for longitude); e.g. -181 => 179, 181 => -179.
   *
   * @private
   * @param {number} degrees
   * @returns degrees within range -180..+180.
   */
  static wrap180(degrees) {
    if (-180 <= degrees && degrees <= 180)
      return degrees;
    const x2 = degrees, a = 180, p2 = 360;
    return ((2 * a * x2 / p2 - p2 / 2) % p2 + p2) % p2 - a;
  }
  /**
   * Constrain degrees to range 0..360 (for bearings); e.g. -1 => 359, 361 => 1.
   *
   * @private
   * @param {number} degrees
   * @returns degrees within range 0..360.
   */
  static wrap360(degrees) {
    if (0 <= degrees && degrees < 360)
      return degrees;
    const x2 = degrees, a = 180, p2 = 360;
    return (2 * a * x2 / p2 % p2 + p2) % p2;
  }
}
Number.prototype.toRadians = function() {
  return this * Math.PI / 180;
};
Number.prototype.toDegrees = function() {
  return this * 180 / Math.PI;
};
const π$1 = Math.PI;
class LatLonSpherical {
  /**
   * Creates a latitude/longitude point on the earth’s surface, using a spherical model earth.
   *
   * @param  {number} lat - Latitude (in degrees).
   * @param  {number} lon - Longitude (in degrees).
   * @throws {TypeError} Invalid lat/lon.
   *
   * @example
   *   import LatLon from '/js/geodesy/latlon-spherical.js';
   *   const p = new LatLon(52.205, 0.119);
   */
  constructor(lat, lon) {
    if (isNaN(lat))
      throw new TypeError(`invalid lat ‘${lat}’`);
    if (isNaN(lon))
      throw new TypeError(`invalid lon ‘${lon}’`);
    this._lat = Dms.wrap90(Number(lat));
    this._lon = Dms.wrap180(Number(lon));
  }
  /**
   * Latitude in degrees north from equator (including aliases lat, latitude): can be set as
   * numeric or hexagesimal (deg-min-sec); returned as numeric.
   */
  get lat() {
    return this._lat;
  }
  get latitude() {
    return this._lat;
  }
  set lat(lat) {
    this._lat = isNaN(lat) ? Dms.wrap90(Dms.parse(lat)) : Dms.wrap90(Number(lat));
    if (isNaN(this._lat))
      throw new TypeError(`invalid lat ‘${lat}’`);
  }
  set latitude(lat) {
    this._lat = isNaN(lat) ? Dms.wrap90(Dms.parse(lat)) : Dms.wrap90(Number(lat));
    if (isNaN(this._lat))
      throw new TypeError(`invalid latitude ‘${lat}’`);
  }
  /**
   * Longitude in degrees east from international reference meridian (including aliases lon, lng,
   * longitude): can be set as numeric or hexagesimal (deg-min-sec); returned as numeric.
   */
  get lon() {
    return this._lon;
  }
  get lng() {
    return this._lon;
  }
  get longitude() {
    return this._lon;
  }
  set lon(lon) {
    this._lon = isNaN(lon) ? Dms.wrap180(Dms.parse(lon)) : Dms.wrap180(Number(lon));
    if (isNaN(this._lon))
      throw new TypeError(`invalid lon ‘${lon}’`);
  }
  set lng(lon) {
    this._lon = isNaN(lon) ? Dms.wrap180(Dms.parse(lon)) : Dms.wrap180(Number(lon));
    if (isNaN(this._lon))
      throw new TypeError(`invalid lng ‘${lon}’`);
  }
  set longitude(lon) {
    this._lon = isNaN(lon) ? Dms.wrap180(Dms.parse(lon)) : Dms.wrap180(Number(lon));
    if (isNaN(this._lon))
      throw new TypeError(`invalid longitude ‘${lon}’`);
  }
  /** Conversion factors; 1000 * LatLon.metresToKm gives 1. */
  static get metresToKm() {
    return 1 / 1e3;
  }
  /** Conversion factors; 1000 * LatLon.metresToMiles gives 0.621371192237334. */
  static get metresToMiles() {
    return 1 / 1609.344;
  }
  /** Conversion factors; 1000 * LatLon.metresToMiles gives 0.5399568034557236. */
  static get metresToNauticalMiles() {
    return 1 / 1852;
  }
  /**
   * Parses a latitude/longitude point from a variety of formats.
   *
   * Latitude & longitude (in degrees) can be supplied as two separate parameters, as a single
   * comma-separated lat/lon string, or as a single object with { lat, lon } or GeoJSON properties.
   *
   * The latitude/longitude values may be numeric or strings; they may be signed decimal or
   * deg-min-sec (hexagesimal) suffixed by compass direction (NSEW); a variety of separators are
   * accepted. Examples -3.62, '3 37 12W', '3°37′12″W'.
   *
   * Thousands/decimal separators must be comma/dot; use Dms.fromLocale to convert locale-specific
   * thousands/decimal separators.
   *
   * @param   {number|string|Object} lat|latlon - Latitude (in degrees) or comma-separated lat/lon or lat/lon object.
   * @param   {number|string}        [lon]      - Longitude (in degrees).
   * @returns {LatLon} Latitude/longitude point.
   * @throws  {TypeError} Invalid point.
   *
   * @example
   *   const p1 = LatLon.parse(52.205, 0.119);                                    // numeric pair (≡ new LatLon)
   *   const p2 = LatLon.parse('52.205', '0.119');                                // numeric string pair (≡ new LatLon)
   *   const p3 = LatLon.parse('52.205, 0.119');                                  // single string numerics
   *   const p4 = LatLon.parse('52°12′18.0″N', '000°07′08.4″E');                  // DMS pair
   *   const p5 = LatLon.parse('52°12′18.0″N, 000°07′08.4″E');                    // single string DMS
   *   const p6 = LatLon.parse({ lat: 52.205, lon: 0.119 });                      // { lat, lon } object numeric
   *   const p7 = LatLon.parse({ lat: '52°12′18.0″N', lng: '000°07′08.4″E' });    // { lat, lng } object DMS
   *   const p8 = LatLon.parse({ type: 'Point', coordinates: [ 0.119, 52.205] }); // GeoJSON
   */
  static parse(...args) {
    if (args.length == 0)
      throw new TypeError("invalid (empty) point");
    if (args[0] === null || args[1] === null)
      throw new TypeError("invalid (null) point");
    let lat = void 0, lon = void 0;
    if (args.length == 2) {
      [lat, lon] = args;
      lat = Dms.wrap90(Dms.parse(lat));
      lon = Dms.wrap180(Dms.parse(lon));
      if (isNaN(lat) || isNaN(lon))
        throw new TypeError(`invalid point ‘${args.toString()}’`);
    }
    if (args.length == 1 && typeof args[0] == "string") {
      [lat, lon] = args[0].split(",");
      lat = Dms.wrap90(Dms.parse(lat));
      lon = Dms.wrap180(Dms.parse(lon));
      if (isNaN(lat) || isNaN(lon))
        throw new TypeError(`invalid point ‘${args[0]}’`);
    }
    if (args.length == 1 && typeof args[0] == "object") {
      const ll2 = args[0];
      if (ll2.type == "Point" && Array.isArray(ll2.coordinates)) {
        [lon, lat] = ll2.coordinates;
      } else {
        if (ll2.latitude != void 0)
          lat = ll2.latitude;
        if (ll2.lat != void 0)
          lat = ll2.lat;
        if (ll2.longitude != void 0)
          lon = ll2.longitude;
        if (ll2.lng != void 0)
          lon = ll2.lng;
        if (ll2.lon != void 0)
          lon = ll2.lon;
        lat = Dms.wrap90(Dms.parse(lat));
        lon = Dms.wrap180(Dms.parse(lon));
      }
      if (isNaN(lat) || isNaN(lon))
        throw new TypeError(`invalid point ‘${JSON.stringify(args[0])}’`);
    }
    if (isNaN(lat) || isNaN(lon))
      throw new TypeError(`invalid point ‘${args.toString()}’`);
    return new LatLonSpherical(lat, lon);
  }
  /**
   * Returns the distance along the surface of the earth from ‘this’ point to destination point.
   *
   * Uses haversine formula: a = sin²(Δφ/2) + cosφ1·cosφ2 · sin²(Δλ/2); d = 2 · atan2(√a, √(a-1)).
   *
   * @param   {LatLon} point - Latitude/longitude of destination point.
   * @param   {number} [radius=6371e3] - Radius of earth (defaults to mean radius in metres).
   * @returns {number} Distance between this point and destination point, in same units as radius.
   * @throws  {TypeError} Invalid radius.
   *
   * @example
   *   const p1 = new LatLon(52.205, 0.119);
   *   const p2 = new LatLon(48.857, 2.351);
   *   const d = p1.distanceTo(p2);       // 404.3×10³ m
   *   const m = p1.distanceTo(p2, 3959); // 251.2 miles
   */
  distanceTo(point, radius = 6371e3) {
    if (!(point instanceof LatLonSpherical))
      point = LatLonSpherical.parse(point);
    if (isNaN(radius))
      throw new TypeError(`invalid radius ‘${radius}’`);
    const R2 = radius;
    const φ1 = this.lat.toRadians(), λ1 = this.lon.toRadians();
    const φ2 = point.lat.toRadians(), λ2 = point.lon.toRadians();
    const Δφ = φ2 - φ1;
    const Δλ = λ2 - λ1;
    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R2 * c;
    return d;
  }
  /**
   * Returns the initial bearing from ‘this’ point to destination point.
   *
   * @param   {LatLon} point - Latitude/longitude of destination point.
   * @returns {number} Initial bearing in degrees from north (0°..360°).
   *
   * @example
   *   const p1 = new LatLon(52.205, 0.119);
   *   const p2 = new LatLon(48.857, 2.351);
   *   const b1 = p1.initialBearingTo(p2); // 156.2°
   */
  initialBearingTo(point) {
    if (!(point instanceof LatLonSpherical))
      point = LatLonSpherical.parse(point);
    if (this.equals(point))
      return NaN;
    const φ1 = this.lat.toRadians();
    const φ2 = point.lat.toRadians();
    const Δλ = (point.lon - this.lon).toRadians();
    const x2 = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
    const y2 = Math.sin(Δλ) * Math.cos(φ2);
    const θ = Math.atan2(y2, x2);
    const bearing = θ.toDegrees();
    return Dms.wrap360(bearing);
  }
  /**
   * Returns final bearing arriving at destination point from ‘this’ point; the final bearing will
   * differ from the initial bearing by varying degrees according to distance and latitude.
   *
   * @param   {LatLon} point - Latitude/longitude of destination point.
   * @returns {number} Final bearing in degrees from north (0°..360°).
   *
   * @example
   *   const p1 = new LatLon(52.205, 0.119);
   *   const p2 = new LatLon(48.857, 2.351);
   *   const b2 = p1.finalBearingTo(p2); // 157.9°
   */
  finalBearingTo(point) {
    if (!(point instanceof LatLonSpherical))
      point = LatLonSpherical.parse(point);
    const bearing = point.initialBearingTo(this) + 180;
    return Dms.wrap360(bearing);
  }
  /**
   * Returns the midpoint between ‘this’ point and destination point.
   *
   * @param   {LatLon} point - Latitude/longitude of destination point.
   * @returns {LatLon} Midpoint between this point and destination point.
   *
   * @example
   *   const p1 = new LatLon(52.205, 0.119);
   *   const p2 = new LatLon(48.857, 2.351);
   *   const pMid = p1.midpointTo(p2); // 50.5363°N, 001.2746°E
   */
  midpointTo(point) {
    if (!(point instanceof LatLonSpherical))
      point = LatLonSpherical.parse(point);
    const φ1 = this.lat.toRadians();
    const λ1 = this.lon.toRadians();
    const φ2 = point.lat.toRadians();
    const Δλ = (point.lon - this.lon).toRadians();
    const A2 = { x: Math.cos(φ1), y: 0, z: Math.sin(φ1) };
    const B2 = { x: Math.cos(φ2) * Math.cos(Δλ), y: Math.cos(φ2) * Math.sin(Δλ), z: Math.sin(φ2) };
    const C2 = { x: A2.x + B2.x, y: A2.y + B2.y, z: A2.z + B2.z };
    const φm = Math.atan2(C2.z, Math.sqrt(C2.x * C2.x + C2.y * C2.y));
    const λm = λ1 + Math.atan2(C2.y, C2.x);
    const lat = φm.toDegrees();
    const lon = λm.toDegrees();
    return new LatLonSpherical(lat, lon);
  }
  /**
   * Returns the point at given fraction between ‘this’ point and given point.
   *
   * @param   {LatLon} point - Latitude/longitude of destination point.
   * @param   {number} fraction - Fraction between the two points (0 = this point, 1 = specified point).
   * @returns {LatLon} Intermediate point between this point and destination point.
   *
   * @example
   *   const p1 = new LatLon(52.205, 0.119);
   *   const p2 = new LatLon(48.857, 2.351);
   *   const pInt = p1.intermediatePointTo(p2, 0.25); // 51.3721°N, 000.7073°E
   */
  intermediatePointTo(point, fraction) {
    if (!(point instanceof LatLonSpherical))
      point = LatLonSpherical.parse(point);
    if (this.equals(point))
      return new LatLonSpherical(this.lat, this.lon);
    const φ1 = this.lat.toRadians(), λ1 = this.lon.toRadians();
    const φ2 = point.lat.toRadians(), λ2 = point.lon.toRadians();
    const Δφ = φ2 - φ1;
    const Δλ = λ2 - λ1;
    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const δ = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const A2 = Math.sin((1 - fraction) * δ) / Math.sin(δ);
    const B2 = Math.sin(fraction * δ) / Math.sin(δ);
    const x2 = A2 * Math.cos(φ1) * Math.cos(λ1) + B2 * Math.cos(φ2) * Math.cos(λ2);
    const y2 = A2 * Math.cos(φ1) * Math.sin(λ1) + B2 * Math.cos(φ2) * Math.sin(λ2);
    const z2 = A2 * Math.sin(φ1) + B2 * Math.sin(φ2);
    const φ3 = Math.atan2(z2, Math.sqrt(x2 * x2 + y2 * y2));
    const λ3 = Math.atan2(y2, x2);
    const lat = φ3.toDegrees();
    const lon = λ3.toDegrees();
    return new LatLonSpherical(lat, lon);
  }
  /**
   * Returns the destination point from ‘this’ point having travelled the given distance on the
   * given initial bearing (bearing normally varies around path followed).
   *
   * @param   {number} distance - Distance travelled, in same units as earth radius (default: metres).
   * @param   {number} bearing - Initial bearing in degrees from north.
   * @param   {number} [radius=6371e3] - (Mean) radius of earth (defaults to radius in metres).
   * @returns {LatLon} Destination point.
   *
   * @example
   *   const p1 = new LatLon(51.47788, -0.00147);
   *   const p2 = p1.destinationPoint(7794, 300.7); // 51.5136°N, 000.0983°W
   */
  destinationPoint(distance, bearing, radius = 6371e3) {
    const δ = distance / radius;
    const θ = Number(bearing).toRadians();
    const φ1 = this.lat.toRadians(), λ1 = this.lon.toRadians();
    const sinφ2 = Math.sin(φ1) * Math.cos(δ) + Math.cos(φ1) * Math.sin(δ) * Math.cos(θ);
    const φ2 = Math.asin(sinφ2);
    const y2 = Math.sin(θ) * Math.sin(δ) * Math.cos(φ1);
    const x2 = Math.cos(δ) - Math.sin(φ1) * sinφ2;
    const λ2 = λ1 + Math.atan2(y2, x2);
    const lat = φ2.toDegrees();
    const lon = λ2.toDegrees();
    return new LatLonSpherical(lat, lon);
  }
  /**
   * Returns the point of intersection of two paths defined by point and bearing.
   *
   * @param   {LatLon}      p1 - First point.
   * @param   {number}      brng1 - Initial bearing from first point.
   * @param   {LatLon}      p2 - Second point.
   * @param   {number}      brng2 - Initial bearing from second point.
   * @returns {LatLon|null} Destination point (null if no unique intersection defined).
   *
   * @example
   *   const p1 = new LatLon(51.8853, 0.2545), brng1 = 108.547;
   *   const p2 = new LatLon(49.0034, 2.5735), brng2 =  32.435;
   *   const pInt = LatLon.intersection(p1, brng1, p2, brng2); // 50.9078°N, 004.5084°E
   */
  static intersection(p1, brng1, p2, brng2) {
    if (!(p1 instanceof LatLonSpherical))
      p1 = LatLonSpherical.parse(p1);
    if (!(p2 instanceof LatLonSpherical))
      p2 = LatLonSpherical.parse(p2);
    if (isNaN(brng1))
      throw new TypeError(`invalid brng1 ‘${brng1}’`);
    if (isNaN(brng2))
      throw new TypeError(`invalid brng2 ‘${brng2}’`);
    const φ1 = p1.lat.toRadians(), λ1 = p1.lon.toRadians();
    const φ2 = p2.lat.toRadians(), λ2 = p2.lon.toRadians();
    const θ13 = Number(brng1).toRadians(), θ23 = Number(brng2).toRadians();
    const Δφ = φ2 - φ1, Δλ = λ2 - λ1;
    const δ12 = 2 * Math.asin(Math.sqrt(Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)));
    if (Math.abs(δ12) < Number.EPSILON)
      return new LatLonSpherical(p1.lat, p1.lon);
    const cosθa = (Math.sin(φ2) - Math.sin(φ1) * Math.cos(δ12)) / (Math.sin(δ12) * Math.cos(φ1));
    const cosθb = (Math.sin(φ1) - Math.sin(φ2) * Math.cos(δ12)) / (Math.sin(δ12) * Math.cos(φ2));
    const θa = Math.acos(Math.min(Math.max(cosθa, -1), 1));
    const θb = Math.acos(Math.min(Math.max(cosθb, -1), 1));
    const θ12 = Math.sin(λ2 - λ1) > 0 ? θa : 2 * π$1 - θa;
    const θ21 = Math.sin(λ2 - λ1) > 0 ? 2 * π$1 - θb : θb;
    const α1 = θ13 - θ12;
    const α2 = θ21 - θ23;
    if (Math.sin(α1) == 0 && Math.sin(α2) == 0)
      return null;
    if (Math.sin(α1) * Math.sin(α2) < 0)
      return null;
    const cosα3 = -Math.cos(α1) * Math.cos(α2) + Math.sin(α1) * Math.sin(α2) * Math.cos(δ12);
    const δ13 = Math.atan2(Math.sin(δ12) * Math.sin(α1) * Math.sin(α2), Math.cos(α2) + Math.cos(α1) * cosα3);
    const φ3 = Math.asin(Math.min(Math.max(Math.sin(φ1) * Math.cos(δ13) + Math.cos(φ1) * Math.sin(δ13) * Math.cos(θ13), -1), 1));
    const Δλ13 = Math.atan2(Math.sin(θ13) * Math.sin(δ13) * Math.cos(φ1), Math.cos(δ13) - Math.sin(φ1) * Math.sin(φ3));
    const λ3 = λ1 + Δλ13;
    const lat = φ3.toDegrees();
    const lon = λ3.toDegrees();
    return new LatLonSpherical(lat, lon);
  }
  /**
   * Returns (signed) distance from ‘this’ point to great circle defined by start-point and
   * end-point.
   *
   * @param   {LatLon} pathStart - Start point of great circle path.
   * @param   {LatLon} pathEnd - End point of great circle path.
   * @param   {number} [radius=6371e3] - (Mean) radius of earth (defaults to radius in metres).
   * @returns {number} Distance to great circle (-ve if to left, +ve if to right of path).
   *
   * @example
   *   const pCurrent = new LatLon(53.2611, -0.7972);
   *   const p1 = new LatLon(53.3206, -1.7297);
   *   const p2 = new LatLon(53.1887, 0.1334);
   *   const d = pCurrent.crossTrackDistanceTo(p1, p2);  // -307.5 m
   */
  crossTrackDistanceTo(pathStart, pathEnd, radius = 6371e3) {
    if (!(pathStart instanceof LatLonSpherical))
      pathStart = LatLonSpherical.parse(pathStart);
    if (!(pathEnd instanceof LatLonSpherical))
      pathEnd = LatLonSpherical.parse(pathEnd);
    const R2 = radius;
    if (this.equals(pathStart))
      return 0;
    const δ13 = pathStart.distanceTo(this, R2) / R2;
    const θ13 = pathStart.initialBearingTo(this).toRadians();
    const θ12 = pathStart.initialBearingTo(pathEnd).toRadians();
    const δxt = Math.asin(Math.sin(δ13) * Math.sin(θ13 - θ12));
    return δxt * R2;
  }
  /**
   * Returns how far ‘this’ point is along a path from from start-point, heading towards end-point.
   * That is, if a perpendicular is drawn from ‘this’ point to the (great circle) path, the
   * along-track distance is the distance from the start point to where the perpendicular crosses
   * the path.
   *
   * @param   {LatLon} pathStart - Start point of great circle path.
   * @param   {LatLon} pathEnd - End point of great circle path.
   * @param   {number} [radius=6371e3] - (Mean) radius of earth (defaults to radius in metres).
   * @returns {number} Distance along great circle to point nearest ‘this’ point.
   *
   * @example
   *   const pCurrent = new LatLon(53.2611, -0.7972);
   *   const p1 = new LatLon(53.3206, -1.7297);
   *   const p2 = new LatLon(53.1887,  0.1334);
   *   const d = pCurrent.alongTrackDistanceTo(p1, p2);  // 62.331 km
   */
  alongTrackDistanceTo(pathStart, pathEnd, radius = 6371e3) {
    if (!(pathStart instanceof LatLonSpherical))
      pathStart = LatLonSpherical.parse(pathStart);
    if (!(pathEnd instanceof LatLonSpherical))
      pathEnd = LatLonSpherical.parse(pathEnd);
    const R2 = radius;
    if (this.equals(pathStart))
      return 0;
    const δ13 = pathStart.distanceTo(this, R2) / R2;
    const θ13 = pathStart.initialBearingTo(this).toRadians();
    const θ12 = pathStart.initialBearingTo(pathEnd).toRadians();
    const δxt = Math.asin(Math.sin(δ13) * Math.sin(θ13 - θ12));
    const δat = Math.acos(Math.cos(δ13) / Math.abs(Math.cos(δxt)));
    return δat * Math.sign(Math.cos(θ12 - θ13)) * R2;
  }
  /**
   * Returns maximum latitude reached when travelling on a great circle on given bearing from
   * ‘this’ point (‘Clairaut’s formula’). Negate the result for the minimum latitude (in the
   * southern hemisphere).
   *
   * The maximum latitude is independent of longitude; it will be the same for all points on a
   * given latitude.
   *
   * @param   {number} bearing - Initial bearing.
   * @returns {number} Maximum latitude reached.
   */
  maxLatitude(bearing) {
    const θ = Number(bearing).toRadians();
    const φ = this.lat.toRadians();
    const φMax = Math.acos(Math.abs(Math.sin(θ) * Math.cos(φ)));
    return φMax.toDegrees();
  }
  /**
   * Returns the pair of meridians at which a great circle defined by two points crosses the given
   * latitude. If the great circle doesn't reach the given latitude, null is returned.
   *
   * @param   {LatLon}      point1 - First point defining great circle.
   * @param   {LatLon}      point2 - Second point defining great circle.
   * @param   {number}      latitude - Latitude crossings are to be determined for.
   * @returns {Object|null} Object containing { lon1, lon2 } or null if given latitude not reached.
   */
  static crossingParallels(point1, point2, latitude) {
    if (point1.equals(point2))
      return null;
    const φ = Number(latitude).toRadians();
    const φ1 = point1.lat.toRadians();
    const λ1 = point1.lon.toRadians();
    const φ2 = point2.lat.toRadians();
    const λ2 = point2.lon.toRadians();
    const Δλ = λ2 - λ1;
    const x2 = Math.sin(φ1) * Math.cos(φ2) * Math.cos(φ) * Math.sin(Δλ);
    const y2 = Math.sin(φ1) * Math.cos(φ2) * Math.cos(φ) * Math.cos(Δλ) - Math.cos(φ1) * Math.sin(φ2) * Math.cos(φ);
    const z2 = Math.cos(φ1) * Math.cos(φ2) * Math.sin(φ) * Math.sin(Δλ);
    if (z2 * z2 > x2 * x2 + y2 * y2)
      return null;
    const λm = Math.atan2(-y2, x2);
    const Δλi = Math.acos(z2 / Math.sqrt(x2 * x2 + y2 * y2));
    const λi1 = λ1 + λm - Δλi;
    const λi2 = λ1 + λm + Δλi;
    const lon1 = λi1.toDegrees();
    const lon2 = λi2.toDegrees();
    return {
      lon1: Dms.wrap180(lon1),
      lon2: Dms.wrap180(lon2)
    };
  }
  /* Rhumb - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
  /**
   * Returns the distance travelling from ‘this’ point to destination point along a rhumb line.
   *
   * @param   {LatLon} point - Latitude/longitude of destination point.
   * @param   {number} [radius=6371e3] - (Mean) radius of earth (defaults to radius in metres).
   * @returns {number} Distance in km between this point and destination point (same units as radius).
   *
   * @example
   *   const p1 = new LatLon(51.127, 1.338);
   *   const p2 = new LatLon(50.964, 1.853);
   *   const d = p1.distanceTo(p2); //  40.31 km
   */
  rhumbDistanceTo(point, radius = 6371e3) {
    if (!(point instanceof LatLonSpherical))
      point = LatLonSpherical.parse(point);
    const R2 = radius;
    const φ1 = this.lat.toRadians();
    const φ2 = point.lat.toRadians();
    const Δφ = φ2 - φ1;
    let Δλ = Math.abs(point.lon - this.lon).toRadians();
    if (Math.abs(Δλ) > π$1)
      Δλ = Δλ > 0 ? -(2 * π$1 - Δλ) : 2 * π$1 + Δλ;
    const Δψ = Math.log(Math.tan(φ2 / 2 + π$1 / 4) / Math.tan(φ1 / 2 + π$1 / 4));
    const q2 = Math.abs(Δψ) > 1e-11 ? Δφ / Δψ : Math.cos(φ1);
    const δ = Math.sqrt(Δφ * Δφ + q2 * q2 * Δλ * Δλ);
    const d = δ * R2;
    return d;
  }
  /**
   * Returns the bearing from ‘this’ point to destination point along a rhumb line.
   *
   * @param   {LatLon}    point - Latitude/longitude of destination point.
   * @returns {number}    Bearing in degrees from north.
   *
   * @example
   *   const p1 = new LatLon(51.127, 1.338);
   *   const p2 = new LatLon(50.964, 1.853);
   *   const d = p1.rhumbBearingTo(p2); // 116.7°
   */
  rhumbBearingTo(point) {
    if (!(point instanceof LatLonSpherical))
      point = LatLonSpherical.parse(point);
    if (this.equals(point))
      return NaN;
    const φ1 = this.lat.toRadians();
    const φ2 = point.lat.toRadians();
    let Δλ = (point.lon - this.lon).toRadians();
    if (Math.abs(Δλ) > π$1)
      Δλ = Δλ > 0 ? -(2 * π$1 - Δλ) : 2 * π$1 + Δλ;
    const Δψ = Math.log(Math.tan(φ2 / 2 + π$1 / 4) / Math.tan(φ1 / 2 + π$1 / 4));
    const θ = Math.atan2(Δλ, Δψ);
    const bearing = θ.toDegrees();
    return Dms.wrap360(bearing);
  }
  /**
   * Returns the destination point having travelled along a rhumb line from ‘this’ point the given
   * distance on the given bearing.
   *
   * @param   {number} distance - Distance travelled, in same units as earth radius (default: metres).
   * @param   {number} bearing - Bearing in degrees from north.
   * @param   {number} [radius=6371e3] - (Mean) radius of earth (defaults to radius in metres).
   * @returns {LatLon} Destination point.
   *
   * @example
   *   const p1 = new LatLon(51.127, 1.338);
   *   const p2 = p1.rhumbDestinationPoint(40300, 116.7); // 50.9642°N, 001.8530°E
   */
  rhumbDestinationPoint(distance, bearing, radius = 6371e3) {
    const φ1 = this.lat.toRadians(), λ1 = this.lon.toRadians();
    const θ = Number(bearing).toRadians();
    const δ = distance / radius;
    const Δφ = δ * Math.cos(θ);
    let φ2 = φ1 + Δφ;
    if (Math.abs(φ2) > π$1 / 2)
      φ2 = φ2 > 0 ? π$1 - φ2 : -π$1 - φ2;
    const Δψ = Math.log(Math.tan(φ2 / 2 + π$1 / 4) / Math.tan(φ1 / 2 + π$1 / 4));
    const q2 = Math.abs(Δψ) > 1e-11 ? Δφ / Δψ : Math.cos(φ1);
    const Δλ = δ * Math.sin(θ) / q2;
    const λ2 = λ1 + Δλ;
    const lat = φ2.toDegrees();
    const lon = λ2.toDegrees();
    return new LatLonSpherical(lat, lon);
  }
  /**
   * Returns the loxodromic midpoint (along a rhumb line) between ‘this’ point and second point.
   *
   * @param   {LatLon} point - Latitude/longitude of second point.
   * @returns {LatLon} Midpoint between this point and second point.
   *
   * @example
   *   const p1 = new LatLon(51.127, 1.338);
   *   const p2 = new LatLon(50.964, 1.853);
   *   const pMid = p1.rhumbMidpointTo(p2); // 51.0455°N, 001.5957°E
   */
  rhumbMidpointTo(point) {
    if (!(point instanceof LatLonSpherical))
      point = LatLonSpherical.parse(point);
    const φ1 = this.lat.toRadians();
    let λ1 = this.lon.toRadians();
    const φ2 = point.lat.toRadians(), λ2 = point.lon.toRadians();
    if (Math.abs(λ2 - λ1) > π$1)
      λ1 += 2 * π$1;
    const φ3 = (φ1 + φ2) / 2;
    const f1 = Math.tan(π$1 / 4 + φ1 / 2);
    const f2 = Math.tan(π$1 / 4 + φ2 / 2);
    const f3 = Math.tan(π$1 / 4 + φ3 / 2);
    let λ3 = ((λ2 - λ1) * Math.log(f3) + λ1 * Math.log(f2) - λ2 * Math.log(f1)) / Math.log(f2 / f1);
    if (!isFinite(λ3))
      λ3 = (λ1 + λ2) / 2;
    const lat = φ3.toDegrees();
    const lon = λ3.toDegrees();
    return new LatLonSpherical(lat, lon);
  }
  /* Area - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
  /**
   * Calculates the area of a spherical polygon where the sides of the polygon are great circle
   * arcs joining the vertices.
   *
   * @param   {LatLon[]} polygon - Array of points defining vertices of the polygon.
   * @param   {number}   [radius=6371e3] - (Mean) radius of earth (defaults to radius in metres).
   * @returns {number}   The area of the polygon in the same units as radius.
   *
   * @example
   *   const polygon = [new LatLon(0,0), new LatLon(1,0), new LatLon(0,1)];
   *   const area = LatLon.areaOf(polygon); // 6.18e9 m²
   */
  static areaOf(polygon, radius = 6371e3) {
    const R2 = radius;
    const closed = polygon[0].equals(polygon[polygon.length - 1]);
    if (!closed)
      polygon.push(polygon[0]);
    const nVertices = polygon.length - 1;
    let S2 = 0;
    for (let v2 = 0; v2 < nVertices; v2++) {
      const φ1 = polygon[v2].lat.toRadians();
      const φ2 = polygon[v2 + 1].lat.toRadians();
      const Δλ = (polygon[v2 + 1].lon - polygon[v2].lon).toRadians();
      const E2 = 2 * Math.atan2(Math.tan(Δλ / 2) * (Math.tan(φ1 / 2) + Math.tan(φ2 / 2)), 1 + Math.tan(φ1 / 2) * Math.tan(φ2 / 2));
      S2 += E2;
    }
    if (isPoleEnclosedBy(polygon))
      S2 = Math.abs(S2) - 2 * π$1;
    const A2 = Math.abs(S2 * R2 * R2);
    if (!closed)
      polygon.pop();
    return A2;
    function isPoleEnclosedBy(p2) {
      let ΣΔ = 0;
      let prevBrng = p2[0].initialBearingTo(p2[1]);
      for (let v2 = 0; v2 < p2.length - 1; v2++) {
        const initBrng2 = p2[v2].initialBearingTo(p2[v2 + 1]);
        const finalBrng = p2[v2].finalBearingTo(p2[v2 + 1]);
        ΣΔ += (initBrng2 - prevBrng + 540) % 360 - 180;
        ΣΔ += (finalBrng - initBrng2 + 540) % 360 - 180;
        prevBrng = finalBrng;
      }
      const initBrng = p2[0].initialBearingTo(p2[1]);
      ΣΔ += (initBrng - prevBrng + 540) % 360 - 180;
      const enclosed = Math.abs(ΣΔ) < 90;
      return enclosed;
    }
  }
  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
  /**
   * Checks if another point is equal to ‘this’ point.
   *
   * @param   {LatLon} point - Point to be compared against this point.
   * @returns {bool}   True if points have identical latitude and longitude values.
   *
   * @example
   *   const p1 = new LatLon(52.205, 0.119);
   *   const p2 = new LatLon(52.205, 0.119);
   *   const equal = p1.equals(p2); // true
   */
  equals(point) {
    if (!(point instanceof LatLonSpherical))
      point = LatLonSpherical.parse(point);
    if (Math.abs(this.lat - point.lat) > Number.EPSILON)
      return false;
    if (Math.abs(this.lon - point.lon) > Number.EPSILON)
      return false;
    return true;
  }
  /**
   * Converts ‘this’ point to a GeoJSON object.
   *
   * @returns {Object} this point as a GeoJSON ‘Point’ object.
   */
  toGeoJSON() {
    return { type: "Point", coordinates: [this.lon, this.lat] };
  }
  /**
   * Returns a string representation of ‘this’ point, formatted as degrees, degrees+minutes, or
   * degrees+minutes+seconds.
   *
   * @param   {string} [format=d] - Format point as 'd', 'dm', 'dms', or 'n' for signed numeric.
   * @param   {number} [dp=4|2|0] - Number of decimal places to use: default 4 for d, 2 for dm, 0 for dms.
   * @returns {string} Comma-separated formatted latitude/longitude.
   * @throws  {RangeError} Invalid format.
   *
   * @example
   *   const greenwich = new LatLon(51.47788, -0.00147);
   *   const d = greenwich.toString();                        // 51.4779°N, 000.0015°W
   *   const dms = greenwich.toString('dms', 2);              // 51°28′40.37″N, 000°00′05.29″W
   *   const [lat, lon] = greenwich.toString('n').split(','); // 51.4779, -0.0015
   */
  toString(format = "d", dp = void 0) {
    if (!["d", "dm", "dms", "n"].includes(format))
      throw new RangeError(`invalid format ‘${format}’`);
    if (format == "n") {
      if (dp == void 0)
        dp = 4;
      return `${this.lat.toFixed(dp)},${this.lon.toFixed(dp)}`;
    }
    const lat = Dms.toLat(this.lat, format, dp);
    const lon = Dms.toLon(this.lon, format, dp);
    return `${lat}, ${lon}`;
  }
}
class Vector3d {
  /**
   * Creates a 3-d vector.
   *
   * @param {number} x - X component of vector.
   * @param {number} y - Y component of vector.
   * @param {number} z - Z component of vector.
   *
   * @example
   *   import Vector3d from '/js/geodesy/vector3d.js';
   *   const v = new Vector3d(0.267, 0.535, 0.802);
   */
  constructor(x2, y2, z2) {
    if (isNaN(x2) || isNaN(y2) || isNaN(z2))
      throw new TypeError(`invalid vector [${x2},${y2},${z2}]`);
    this.x = Number(x2);
    this.y = Number(y2);
    this.z = Number(z2);
  }
  /**
   * Length (magnitude or norm) of ‘this’ vector.
   *
   * @returns {number} Magnitude of this vector.
   */
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  /**
   * Adds supplied vector to ‘this’ vector.
   *
   * @param   {Vector3d} v - Vector to be added to this vector.
   * @returns {Vector3d} Vector representing sum of this and v.
   */
  plus(v2) {
    if (!(v2 instanceof Vector3d))
      throw new TypeError("v is not Vector3d object");
    return new Vector3d(this.x + v2.x, this.y + v2.y, this.z + v2.z);
  }
  /**
   * Subtracts supplied vector from ‘this’ vector.
   *
   * @param   {Vector3d} v - Vector to be subtracted from this vector.
   * @returns {Vector3d} Vector representing difference between this and v.
   */
  minus(v2) {
    if (!(v2 instanceof Vector3d))
      throw new TypeError("v is not Vector3d object");
    return new Vector3d(this.x - v2.x, this.y - v2.y, this.z - v2.z);
  }
  /**
   * Multiplies ‘this’ vector by a scalar value.
   *
   * @param   {number}   x - Factor to multiply this vector by.
   * @returns {Vector3d} Vector scaled by x.
   */
  times(x2) {
    if (isNaN(x2))
      throw new TypeError(`invalid scalar value ‘${x2}’`);
    return new Vector3d(this.x * x2, this.y * x2, this.z * x2);
  }
  /**
   * Divides ‘this’ vector by a scalar value.
   *
   * @param   {number}   x - Factor to divide this vector by.
   * @returns {Vector3d} Vector divided by x.
   */
  dividedBy(x2) {
    if (isNaN(x2))
      throw new TypeError(`invalid scalar value ‘${x2}’`);
    return new Vector3d(this.x / x2, this.y / x2, this.z / x2);
  }
  /**
   * Multiplies ‘this’ vector by the supplied vector using dot (scalar) product.
   *
   * @param   {Vector3d} v - Vector to be dotted with this vector.
   * @returns {number}   Dot product of ‘this’ and v.
   */
  dot(v2) {
    if (!(v2 instanceof Vector3d))
      throw new TypeError("v is not Vector3d object");
    return this.x * v2.x + this.y * v2.y + this.z * v2.z;
  }
  /**
   * Multiplies ‘this’ vector by the supplied vector using cross (vector) product.
   *
   * @param   {Vector3d} v - Vector to be crossed with this vector.
   * @returns {Vector3d} Cross product of ‘this’ and v.
   */
  cross(v2) {
    if (!(v2 instanceof Vector3d))
      throw new TypeError("v is not Vector3d object");
    const x2 = this.y * v2.z - this.z * v2.y;
    const y2 = this.z * v2.x - this.x * v2.z;
    const z2 = this.x * v2.y - this.y * v2.x;
    return new Vector3d(x2, y2, z2);
  }
  /**
   * Negates a vector to point in the opposite direction.
   *
   * @returns {Vector3d} Negated vector.
   */
  negate() {
    return new Vector3d(-this.x, -this.y, -this.z);
  }
  /**
   * Normalizes a vector to its unit vector
   * – if the vector is already unit or is zero magnitude, this is a no-op.
   *
   * @returns {Vector3d} Normalised version of this vector.
   */
  unit() {
    const norm = this.length;
    if (norm == 1)
      return this;
    if (norm == 0)
      return this;
    const x2 = this.x / norm;
    const y2 = this.y / norm;
    const z2 = this.z / norm;
    return new Vector3d(x2, y2, z2);
  }
  /**
   * Calculates the angle between ‘this’ vector and supplied vector atan2(|p₁×p₂|, p₁·p₂) (or if
   * (extra-planar) ‘n’ supplied then atan2(n·p₁×p₂, p₁·p₂).
   *
   * @param   {Vector3d} v - Vector whose angle is to be determined from ‘this’ vector.
   * @param   {Vector3d} [n] - Plane normal: if supplied, angle is signed +ve if this->v is
   *                     clockwise looking along n, -ve in opposite direction.
   * @returns {number}   Angle (in radians) between this vector and supplied vector (in range 0..π
   *                     if n not supplied, range -π..+π if n supplied).
   */
  angleTo(v2, n2 = void 0) {
    if (!(v2 instanceof Vector3d))
      throw new TypeError("v is not Vector3d object");
    if (!(n2 instanceof Vector3d || n2 == void 0))
      throw new TypeError("n is not Vector3d object");
    const sign = n2 == void 0 || this.cross(v2).dot(n2) >= 0 ? 1 : -1;
    const sinθ = this.cross(v2).length * sign;
    const cosθ = this.dot(v2);
    return Math.atan2(sinθ, cosθ);
  }
  /**
   * Rotates ‘this’ point around an axis by a specified angle.
   *
   * @param   {Vector3d} axis - The axis being rotated around.
   * @param   {number}   angle - The angle of rotation (in degrees).
   * @returns {Vector3d} The rotated point.
   */
  rotateAround(axis, angle) {
    if (!(axis instanceof Vector3d))
      throw new TypeError("axis is not Vector3d object");
    const θ = angle.toRadians();
    const p2 = this.unit();
    const a = axis.unit();
    const s = Math.sin(θ);
    const c = Math.cos(θ);
    const t2 = 1 - c;
    const x2 = a.x, y2 = a.y, z2 = a.z;
    const r2 = [
      // rotation matrix for rotation about supplied axis
      [t2 * x2 * x2 + c, t2 * x2 * y2 - s * z2, t2 * x2 * z2 + s * y2],
      [t2 * x2 * y2 + s * z2, t2 * y2 * y2 + c, t2 * y2 * z2 - s * x2],
      [t2 * x2 * z2 - s * y2, t2 * y2 * z2 + s * x2, t2 * z2 * z2 + c]
    ];
    const rp = [
      r2[0][0] * p2.x + r2[0][1] * p2.y + r2[0][2] * p2.z,
      r2[1][0] * p2.x + r2[1][1] * p2.y + r2[1][2] * p2.z,
      r2[2][0] * p2.x + r2[2][1] * p2.y + r2[2][2] * p2.z
    ];
    const p22 = new Vector3d(rp[0], rp[1], rp[2]);
    return p22;
  }
  /**
   * String representation of vector.
   *
   * @param   {number} [dp=3] - Number of decimal places to be used.
   * @returns {string} Vector represented as [x,y,z].
   */
  toString(dp = 3) {
    return `[${this.x.toFixed(dp)},${this.y.toFixed(dp)},${this.z.toFixed(dp)}]`;
  }
}
Number.prototype.toRadians = function() {
  return this * Math.PI / 180;
};
Number.prototype.toDegrees = function() {
  return this * 180 / Math.PI;
};
const ellipsoids = {
  WGS84: { a: 6378137, b: 6356752314245e-6, f: 1 / 298.257223563 }
};
const datums = {
  WGS84: { ellipsoid: ellipsoids.WGS84 }
};
Object.freeze(ellipsoids.WGS84);
Object.freeze(datums.WGS84);
class LatLonEllipsoidal {
  /**
   * Creates a geodetic latitude/longitude point on a (WGS84) ellipsoidal model earth.
   *
   * @param  {number} lat - Latitude (in degrees).
   * @param  {number} lon - Longitude (in degrees).
   * @param  {number} [height=0] - Height above ellipsoid in metres.
   * @throws {TypeError} Invalid lat/lon/height.
   *
   * @example
   *   import LatLon from '/js/geodesy/latlon-ellipsoidal.js';
   *   const p = new LatLon(51.47788, -0.00147, 17);
   */
  constructor(lat, lon, height = 0) {
    if (isNaN(lat) || lat == null)
      throw new TypeError(`invalid lat ‘${lat}’`);
    if (isNaN(lon) || lon == null)
      throw new TypeError(`invalid lon ‘${lon}’`);
    if (isNaN(height) || height == null)
      throw new TypeError(`invalid height ‘${height}’`);
    this._lat = Dms.wrap90(Number(lat));
    this._lon = Dms.wrap180(Number(lon));
    this._height = Number(height);
  }
  /**
   * Latitude in degrees north from equator (including aliases lat, latitude): can be set as
   * numeric or hexagesimal (deg-min-sec); returned as numeric.
   */
  get lat() {
    return this._lat;
  }
  get latitude() {
    return this._lat;
  }
  set lat(lat) {
    this._lat = isNaN(lat) ? Dms.wrap90(Dms.parse(lat)) : Dms.wrap90(Number(lat));
    if (isNaN(this._lat))
      throw new TypeError(`invalid lat ‘${lat}’`);
  }
  set latitude(lat) {
    this._lat = isNaN(lat) ? Dms.wrap90(Dms.parse(lat)) : Dms.wrap90(Number(lat));
    if (isNaN(this._lat))
      throw new TypeError(`invalid latitude ‘${lat}’`);
  }
  /**
   * Longitude in degrees east from international reference meridian (including aliases lon, lng,
   * longitude): can be set as numeric or hexagesimal (deg-min-sec); returned as numeric.
   */
  get lon() {
    return this._lon;
  }
  get lng() {
    return this._lon;
  }
  get longitude() {
    return this._lon;
  }
  set lon(lon) {
    this._lon = isNaN(lon) ? Dms.wrap180(Dms.parse(lon)) : Dms.wrap180(Number(lon));
    if (isNaN(this._lon))
      throw new TypeError(`invalid lon ‘${lon}’`);
  }
  set lng(lon) {
    this._lon = isNaN(lon) ? Dms.wrap180(Dms.parse(lon)) : Dms.wrap180(Number(lon));
    if (isNaN(this._lon))
      throw new TypeError(`invalid lng ‘${lon}’`);
  }
  set longitude(lon) {
    this._lon = isNaN(lon) ? Dms.wrap180(Dms.parse(lon)) : Dms.wrap180(Number(lon));
    if (isNaN(this._lon))
      throw new TypeError(`invalid longitude ‘${lon}’`);
  }
  /**
   * Height in metres above ellipsoid.
   */
  get height() {
    return this._height;
  }
  set height(height) {
    this._height = Number(height);
    if (isNaN(this._height))
      throw new TypeError(`invalid height ‘${height}’`);
  }
  /**
   * Datum.
   *
   * Note this is replicated within LatLonEllipsoidal in order that a LatLonEllipsoidal object can
   * be monkey-patched to look like a LatLonEllipsoidal_Datum, for Vincenty calculations on
   * different ellipsoids.
   *
   * @private
   */
  get datum() {
    return this._datum;
  }
  set datum(datum) {
    this._datum = datum;
  }
  /**
   * Ellipsoids with their parameters; this module only defines WGS84 parameters a = 6378137, b =
   * 6356752.314245, f = 1/298.257223563.
   *
   * @example
   *   const a = LatLon.ellipsoids.WGS84.a; // 6378137
   */
  static get ellipsoids() {
    return ellipsoids;
  }
  /**
   * Datums; this module only defines WGS84 datum, hence no datum transformations.
   *
   * @example
   *   const a = LatLon.datums.WGS84.ellipsoid.a; // 6377563.396
   */
  static get datums() {
    return datums;
  }
  /**
   * Parses a latitude/longitude point from a variety of formats.
   *
   * Latitude & longitude (in degrees) can be supplied as two separate parameters, as a single
   * comma-separated lat/lon string, or as a single object with { lat, lon } or GeoJSON properties.
   *
   * The latitude/longitude values may be numeric or strings; they may be signed decimal or
   * deg-min-sec (hexagesimal) suffixed by compass direction (NSEW); a variety of separators are
   * accepted. Examples -3.62, '3 37 12W', '3°37′12″W'.
   *
   * Thousands/decimal separators must be comma/dot; use Dms.fromLocale to convert locale-specific
   * thousands/decimal separators.
   *
   * @param   {number|string|Object} lat|latlon - Latitude (in degrees), or comma-separated lat/lon, or lat/lon object.
   * @param   {number}               [lon]      - Longitude (in degrees).
   * @param   {number}               [height=0] - Height above ellipsoid in metres.
   * @returns {LatLon} Latitude/longitude point on WGS84 ellipsoidal model earth.
   * @throws  {TypeError} Invalid coordinate.
   *
   * @example
   *   const p1 = LatLon.parse(51.47788, -0.00147);              // numeric pair
   *   const p2 = LatLon.parse('51°28′40″N, 000°00′05″W', 17);   // dms string + height
   *   const p3 = LatLon.parse({ lat: 52.205, lon: 0.119 }, 17); // { lat, lon } object numeric + height
   */
  static parse(...args) {
    if (args.length == 0)
      throw new TypeError("invalid (empty) point");
    let lat = void 0, lon = void 0, height = void 0;
    if (typeof args[0] == "object" && (args.length == 1 || !isNaN(parseFloat(args[1])))) {
      const ll2 = args[0];
      if (ll2.type == "Point" && Array.isArray(ll2.coordinates)) {
        [lon, lat, height] = ll2.coordinates;
        height = height || 0;
      } else {
        if (ll2.latitude != void 0)
          lat = ll2.latitude;
        if (ll2.lat != void 0)
          lat = ll2.lat;
        if (ll2.longitude != void 0)
          lon = ll2.longitude;
        if (ll2.lng != void 0)
          lon = ll2.lng;
        if (ll2.lon != void 0)
          lon = ll2.lon;
        if (ll2.height != void 0)
          height = ll2.height;
        lat = Dms.wrap90(Dms.parse(lat));
        lon = Dms.wrap180(Dms.parse(lon));
      }
      if (args[1] != void 0)
        height = args[1];
      if (isNaN(lat) || isNaN(lon))
        throw new TypeError(`invalid point ‘${JSON.stringify(args[0])}’`);
    }
    if (typeof args[0] == "string" && args[0].split(",").length == 2) {
      [lat, lon] = args[0].split(",");
      lat = Dms.wrap90(Dms.parse(lat));
      lon = Dms.wrap180(Dms.parse(lon));
      height = args[1] || 0;
      if (isNaN(lat) || isNaN(lon))
        throw new TypeError(`invalid point ‘${args[0]}’`);
    }
    if (lat == void 0 && lon == void 0) {
      [lat, lon] = args;
      lat = Dms.wrap90(Dms.parse(lat));
      lon = Dms.wrap180(Dms.parse(lon));
      height = args[2] || 0;
      if (isNaN(lat) || isNaN(lon))
        throw new TypeError(`invalid point ‘${args.toString()}’`);
    }
    return new this(lat, lon, height);
  }
  /**
   * Converts ‘this’ point from (geodetic) latitude/longitude coordinates to (geocentric)
   * cartesian (x/y/z) coordinates.
   *
   * @returns {Cartesian} Cartesian point equivalent to lat/lon point, with x, y, z in metres from
   *   earth centre.
   */
  toCartesian() {
    const ellipsoid = this.datum ? this.datum.ellipsoid : this.referenceFrame ? this.referenceFrame.ellipsoid : ellipsoids.WGS84;
    const φ = this.lat.toRadians();
    const λ = this.lon.toRadians();
    const h2 = this.height;
    const { a, f: f2 } = ellipsoid;
    const sinφ = Math.sin(φ), cosφ = Math.cos(φ);
    const sinλ = Math.sin(λ), cosλ = Math.cos(λ);
    const eSq = 2 * f2 - f2 * f2;
    const ν = a / Math.sqrt(1 - eSq * sinφ * sinφ);
    const x2 = (ν + h2) * cosφ * cosλ;
    const y2 = (ν + h2) * cosφ * sinλ;
    const z2 = (ν * (1 - eSq) + h2) * sinφ;
    return new Cartesian(x2, y2, z2);
  }
  /**
   * Checks if another point is equal to ‘this’ point.
   *
   * @param   {LatLon} point - Point to be compared against this point.
   * @returns {bool} True if points have identical latitude, longitude, height, and datum/referenceFrame.
   * @throws  {TypeError} Invalid point.
   *
   * @example
   *   const p1 = new LatLon(52.205, 0.119);
   *   const p2 = new LatLon(52.205, 0.119);
   *   const equal = p1.equals(p2); // true
   */
  equals(point) {
    if (!(point instanceof LatLonEllipsoidal))
      throw new TypeError(`invalid point ‘${point}’`);
    if (Math.abs(this.lat - point.lat) > Number.EPSILON)
      return false;
    if (Math.abs(this.lon - point.lon) > Number.EPSILON)
      return false;
    if (Math.abs(this.height - point.height) > Number.EPSILON)
      return false;
    if (this.datum != point.datum)
      return false;
    if (this.referenceFrame != point.referenceFrame)
      return false;
    if (this.epoch != point.epoch)
      return false;
    return true;
  }
  /**
   * Returns a string representation of ‘this’ point, formatted as degrees, degrees+minutes, or
   * degrees+minutes+seconds.
   *
   * @param   {string} [format=d] - Format point as 'd', 'dm', 'dms', or 'n' for signed numeric.
   * @param   {number} [dp=4|2|0] - Number of decimal places to use: default 4 for d, 2 for dm, 0 for dms.
   * @param   {number} [dpHeight=null] - Number of decimal places to use for height; default is no height display.
   * @returns {string} Comma-separated formatted latitude/longitude.
   * @throws  {RangeError} Invalid format.
   *
   * @example
   *   const greenwich = new LatLon(51.47788, -0.00147, 46);
   *   const d = greenwich.toString();                        // 51.4779°N, 000.0015°W
   *   const dms = greenwich.toString('dms', 2);              // 51°28′40″N, 000°00′05″W
   *   const [lat, lon] = greenwich.toString('n').split(','); // 51.4779, -0.0015
   *   const dmsh = greenwich.toString('dms', 0, 0);          // 51°28′40″N, 000°00′06″W +46m
   */
  toString(format = "d", dp = void 0, dpHeight = null) {
    if (!["d", "dm", "dms", "n"].includes(format))
      throw new RangeError(`invalid format ‘${format}’`);
    const height = (this.height >= 0 ? " +" : " ") + this.height.toFixed(dpHeight) + "m";
    if (format == "n") {
      if (dp == void 0)
        dp = 4;
      const lat2 = this.lat.toFixed(dp);
      const lon2 = this.lon.toFixed(dp);
      return `${lat2}, ${lon2}${dpHeight == null ? "" : height}`;
    }
    const lat = Dms.toLat(this.lat, format, dp);
    const lon = Dms.toLon(this.lon, format, dp);
    return `${lat}, ${lon}${dpHeight == null ? "" : height}`;
  }
}
class Cartesian extends Vector3d {
  /**
   * Creates cartesian coordinate representing ECEF (earth-centric earth-fixed) point.
   *
   * @param {number} x - X coordinate in metres (=> 0°N,0°E).
   * @param {number} y - Y coordinate in metres (=> 0°N,90°E).
   * @param {number} z - Z coordinate in metres (=> 90°N).
   *
   * @example
   *   import { Cartesian } from '/js/geodesy/latlon-ellipsoidal.js';
   *   const coord = new Cartesian(3980581.210, -111.159, 4966824.522);
   */
  constructor(x2, y2, z2) {
    super(x2, y2, z2);
  }
  /**
   * Converts ‘this’ (geocentric) cartesian (x/y/z) coordinate to (geodetic) latitude/longitude
   * point on specified ellipsoid.
   *
   * Uses Bowring’s (1985) formulation for μm precision in concise form; ‘The accuracy of geodetic
   * latitude and height equations’, B R Bowring, Survey Review vol 28, 218, Oct 1985.
   *
   * @param   {LatLon.ellipsoids} [ellipsoid=WGS84] - Ellipsoid to use when converting point.
   * @returns {LatLon} Latitude/longitude point defined by cartesian coordinates, on given ellipsoid.
   * @throws  {TypeError} Invalid ellipsoid.
   *
   * @example
   *   const c = new Cartesian(4027893.924, 307041.993, 4919474.294);
   *   const p = c.toLatLon(); // 50.7978°N, 004.3592°E
   */
  toLatLon(ellipsoid = ellipsoids.WGS84) {
    if (!ellipsoid || !ellipsoid.a)
      throw new TypeError(`invalid ellipsoid ‘${ellipsoid}’`);
    const { x: x2, y: y2, z: z2 } = this;
    const { a, b, f: f2 } = ellipsoid;
    const e2 = 2 * f2 - f2 * f2;
    const ε2 = e2 / (1 - e2);
    const p2 = Math.sqrt(x2 * x2 + y2 * y2);
    const R2 = Math.sqrt(p2 * p2 + z2 * z2);
    const tanβ = b * z2 / (a * p2) * (1 + ε2 * b / R2);
    const sinβ = tanβ / Math.sqrt(1 + tanβ * tanβ);
    const cosβ = sinβ / tanβ;
    const φ = isNaN(cosβ) ? 0 : Math.atan2(z2 + ε2 * b * sinβ * sinβ * sinβ, p2 - e2 * a * cosβ * cosβ * cosβ);
    const λ = Math.atan2(y2, x2);
    const sinφ = Math.sin(φ), cosφ = Math.cos(φ);
    const ν = a / Math.sqrt(1 - e2 * sinφ * sinφ);
    const h2 = p2 * cosφ + z2 * sinφ - a * a / ν;
    const point = new LatLonEllipsoidal(φ.toDegrees(), λ.toDegrees(), h2);
    return point;
  }
  /**
   * Returns a string representation of ‘this’ cartesian point.
   *
   * @param   {number} [dp=0] - Number of decimal places to use.
   * @returns {string} Comma-separated latitude/longitude.
   */
  toString(dp = 0) {
    const x2 = this.x.toFixed(dp), y2 = this.y.toFixed(dp), z2 = this.z.toFixed(dp);
    return `[${x2},${y2},${z2}]`;
  }
}
const π = Math.PI;
const ε = Number.EPSILON;
class LatLonEllipsoidal_Vincenty extends LatLonEllipsoidal {
  /**
   * Returns the distance between ‘this’ point and destination point along a geodesic on the
   * surface of the ellipsoid, using Vincenty inverse solution.
   *
   * @param   {LatLon} point - Latitude/longitude of destination point.
   * @returns {number} Distance in metres between points or NaN if failed to converge.
   *
   * @example
   *   const p1 = new LatLon(50.06632, -5.71475);
   *   const p2 = new LatLon(58.64402, -3.07009);
   *   const d = p1.distanceTo(p2); // 969,954.166 m
   */
  distanceTo(point) {
    try {
      const dist = this.inverse(point).distance;
      return Number(dist.toFixed(3));
    } catch (e2) {
      if (e2 instanceof EvalError)
        return NaN;
      throw e2;
    }
  }
  /**
   * Returns the initial bearing to travel along a geodesic from ‘this’ point to the given point,
   * using Vincenty inverse solution.
   *
   * @param   {LatLon} point - Latitude/longitude of destination point.
   * @returns {number} Initial bearing in degrees from north (0°..360°) or NaN if failed to converge.
   *
   * @example
   *   const p1 = new LatLon(50.06632, -5.71475);
   *   const p2 = new LatLon(58.64402, -3.07009);
   *   const b1 = p1.initialBearingTo(p2); // 9.1419°
   */
  initialBearingTo(point) {
    try {
      const brng = this.inverse(point).initialBearing;
      return Number(brng.toFixed(7));
    } catch (e2) {
      if (e2 instanceof EvalError)
        return NaN;
      throw e2;
    }
  }
  /**
   * Returns the final bearing having travelled along a geodesic from ‘this’ point to the given
   * point, using Vincenty inverse solution.
   *
   * @param   {LatLon} point - Latitude/longitude of destination point.
   * @returns {number} Final bearing in degrees from north (0°..360°) or NaN if failed to converge.
   *
   * @example
   *   const p1 = new LatLon(50.06632, -5.71475);
   *   const p2 = new LatLon(58.64402, -3.07009);
   *   const b2 = p1.finalBearingTo(p2); // 11.2972°
   */
  finalBearingTo(point) {
    try {
      const brng = this.inverse(point).finalBearing;
      return Number(brng.toFixed(7));
    } catch (e2) {
      if (e2 instanceof EvalError)
        return NaN;
      throw e2;
    }
  }
  /**
   * Returns the destination point having travelled the given distance along a geodesic given by
   * initial bearing from ‘this’ point, using Vincenty direct solution.
   *
   * @param   {number} distance - Distance travelled along the geodesic in metres.
   * @param   {number} initialBearing - Initial bearing in degrees from north.
   * @returns {LatLon} Destination point.
   *
   * @example
   *   const p1 = new LatLon(-37.95103, 144.42487);
   *   const p2 = p1.destinationPoint(54972.271, 306.86816); // 37.6528°S, 143.9265°E
   */
  destinationPoint(distance, initialBearing) {
    return this.direct(Number(distance), Number(initialBearing)).point;
  }
  /**
   * Returns the final bearing having travelled along a geodesic given by initial bearing for a
   * given distance from ‘this’ point, using Vincenty direct solution.
   * TODO: arg order? (this is consistent with destinationPoint, but perhaps less intuitive)
   *
   * @param   {number} distance - Distance travelled along the geodesic in metres.
   * @param   {LatLon} initialBearing - Initial bearing in degrees from north.
   * @returns {number} Final bearing in degrees from north (0°..360°).
   *
   * @example
   *   const p1 = new LatLon(-37.95103, 144.42487);
   *   const b2 = p1.finalBearingOn(54972.271, 306.86816); // 307.1736°
   */
  finalBearingOn(distance, initialBearing) {
    const brng = this.direct(Number(distance), Number(initialBearing)).finalBearing;
    return Number(brng.toFixed(7));
  }
  /**
   * Returns the point at given fraction between ‘this’ point and given point.
   *
   * @param   {LatLon} point - Latitude/longitude of destination point.
   * @param   {number} fraction - Fraction between the two points (0 = this point, 1 = specified point).
   * @returns {LatLon} Intermediate point between this point and destination point.
   *
   * @example
   *   const p1 = new LatLon(50.06632, -5.71475);
   *   const p2 = new LatLon(58.64402, -3.07009);
   *   const pInt = p1.intermediatePointTo(p2, 0.5); // 54.3639°N, 004.5304°W
   */
  intermediatePointTo(point, fraction) {
    if (fraction == 0)
      return this;
    if (fraction == 1)
      return point;
    const inverse = this.inverse(point);
    const dist = inverse.distance;
    const brng = inverse.initialBearing;
    return isNaN(brng) ? this : this.destinationPoint(dist * fraction, brng);
  }
  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
  /**
   * Vincenty direct calculation.
   *
   * Ellipsoid parameters are taken from datum of 'this' point. Height is ignored.
   *
   * @private
   * @param   {number} distance - Distance along bearing in metres.
   * @param   {number} initialBearing - Initial bearing in degrees from north.
   * @returns (Object} Object including point (destination point), finalBearing.
   * @throws  {RangeError} Point must be on surface of ellipsoid.
   * @throws  {EvalError}  Formula failed to converge.
   */
  direct(distance, initialBearing) {
    if (isNaN(distance))
      throw new TypeError(`invalid distance ${distance}`);
    if (distance == 0)
      return { point: this, finalBearing: NaN, iterations: 0 };
    if (isNaN(initialBearing))
      throw new TypeError(`invalid bearing ${initialBearing}`);
    if (this.height != 0)
      throw new RangeError("point must be on the surface of the ellipsoid");
    const φ1 = this.lat.toRadians(), λ1 = this.lon.toRadians();
    const α1 = Number(initialBearing).toRadians();
    const s = Number(distance);
    const ellipsoid = this.datum ? this.datum.ellipsoid : LatLonEllipsoidal.ellipsoids.WGS84;
    const { a, b, f: f2 } = ellipsoid;
    const sinα1 = Math.sin(α1);
    const cosα1 = Math.cos(α1);
    const tanU1 = (1 - f2) * Math.tan(φ1), cosU1 = 1 / Math.sqrt(1 + tanU1 * tanU1), sinU1 = tanU1 * cosU1;
    const σ1 = Math.atan2(tanU1, cosα1);
    const sinα = cosU1 * sinα1;
    const cosSqα = 1 - sinα * sinα;
    const uSq = cosSqα * (a * a - b * b) / (b * b);
    const A2 = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
    const B2 = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
    let σ = s / (b * A2), sinσ = null, cosσ = null;
    let cos2σₘ = null;
    let σʹ = null, iterations = 0;
    do {
      cos2σₘ = Math.cos(2 * σ1 + σ);
      sinσ = Math.sin(σ);
      cosσ = Math.cos(σ);
      const Δσ = B2 * sinσ * (cos2σₘ + B2 / 4 * (cosσ * (-1 + 2 * cos2σₘ * cos2σₘ) - B2 / 6 * cos2σₘ * (-3 + 4 * sinσ * sinσ) * (-3 + 4 * cos2σₘ * cos2σₘ)));
      σʹ = σ;
      σ = s / (b * A2) + Δσ;
    } while (Math.abs(σ - σʹ) > 1e-12 && ++iterations < 100);
    if (iterations >= 100)
      throw new EvalError("Vincenty formula failed to converge");
    const x2 = sinU1 * sinσ - cosU1 * cosσ * cosα1;
    const φ2 = Math.atan2(sinU1 * cosσ + cosU1 * sinσ * cosα1, (1 - f2) * Math.sqrt(sinα * sinα + x2 * x2));
    const λ = Math.atan2(sinσ * sinα1, cosU1 * cosσ - sinU1 * sinσ * cosα1);
    const C2 = f2 / 16 * cosSqα * (4 + f2 * (4 - 3 * cosSqα));
    const L2 = λ - (1 - C2) * f2 * sinα * (σ + C2 * sinσ * (cos2σₘ + C2 * cosσ * (-1 + 2 * cos2σₘ * cos2σₘ)));
    const λ2 = λ1 + L2;
    const α2 = Math.atan2(sinα, -x2);
    const destinationPoint = new LatLonEllipsoidal_Vincenty(φ2.toDegrees(), λ2.toDegrees(), 0, this.datum);
    return {
      point: destinationPoint,
      finalBearing: Dms.wrap360(α2.toDegrees()),
      iterations
    };
  }
  /**
   * Vincenty inverse calculation.
   *
   * Ellipsoid parameters are taken from datum of 'this' point. Height is ignored.
   *
   * @private
   * @param   {LatLon} point - Latitude/longitude of destination point.
   * @returns {Object} Object including distance, initialBearing, finalBearing.
   * @throws  {TypeError}  Invalid point.
   * @throws  {RangeError} Points must be on surface of ellipsoid.
   * @throws  {EvalError}  Formula failed to converge.
   */
  inverse(point) {
    if (!(point instanceof LatLonEllipsoidal))
      throw new TypeError(`invalid point ‘${point}’`);
    if (this.height != 0 || point.height != 0)
      throw new RangeError("point must be on the surface of the ellipsoid");
    const p1 = this, p2 = point;
    const φ1 = p1.lat.toRadians(), λ1 = p1.lon.toRadians();
    const φ2 = p2.lat.toRadians(), λ2 = p2.lon.toRadians();
    const ellipsoid = this.datum ? this.datum.ellipsoid : LatLonEllipsoidal.ellipsoids.WGS84;
    const { a, b, f: f2 } = ellipsoid;
    const L2 = λ2 - λ1;
    const tanU1 = (1 - f2) * Math.tan(φ1), cosU1 = 1 / Math.sqrt(1 + tanU1 * tanU1), sinU1 = tanU1 * cosU1;
    const tanU2 = (1 - f2) * Math.tan(φ2), cosU2 = 1 / Math.sqrt(1 + tanU2 * tanU2), sinU2 = tanU2 * cosU2;
    const antipodal = Math.abs(L2) > π / 2 || Math.abs(φ2 - φ1) > π / 2;
    let λ = L2, sinλ = null, cosλ = null;
    let σ = antipodal ? π : 0, sinσ = 0, cosσ = antipodal ? -1 : 1, sinSqσ = null;
    let cos2σₘ = 1;
    let cosSqα = 1;
    let λʹ = null, iterations = 0;
    do {
      sinλ = Math.sin(λ);
      cosλ = Math.cos(λ);
      sinSqσ = (cosU2 * sinλ) ** 2 + (cosU1 * sinU2 - sinU1 * cosU2 * cosλ) ** 2;
      if (Math.abs(sinSqσ) < 1e-24)
        break;
      sinσ = Math.sqrt(sinSqσ);
      cosσ = sinU1 * sinU2 + cosU1 * cosU2 * cosλ;
      σ = Math.atan2(sinσ, cosσ);
      const sinα = cosU1 * cosU2 * sinλ / sinσ;
      cosSqα = 1 - sinα * sinα;
      cos2σₘ = cosSqα != 0 ? cosσ - 2 * sinU1 * sinU2 / cosSqα : 0;
      const C2 = f2 / 16 * cosSqα * (4 + f2 * (4 - 3 * cosSqα));
      λʹ = λ;
      λ = L2 + (1 - C2) * f2 * sinα * (σ + C2 * sinσ * (cos2σₘ + C2 * cosσ * (-1 + 2 * cos2σₘ * cos2σₘ)));
      const iterationCheck = antipodal ? Math.abs(λ) - π : Math.abs(λ);
      if (iterationCheck > π)
        throw new EvalError("λ > π");
    } while (Math.abs(λ - λʹ) > 1e-12 && ++iterations < 1e3);
    if (iterations >= 1e3)
      throw new EvalError("Vincenty formula failed to converge");
    const uSq = cosSqα * (a * a - b * b) / (b * b);
    const A2 = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
    const B2 = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
    const Δσ = B2 * sinσ * (cos2σₘ + B2 / 4 * (cosσ * (-1 + 2 * cos2σₘ * cos2σₘ) - B2 / 6 * cos2σₘ * (-3 + 4 * sinσ * sinσ) * (-3 + 4 * cos2σₘ * cos2σₘ)));
    const s = b * A2 * (σ - Δσ);
    const α1 = Math.abs(sinSqσ) < ε ? 0 : Math.atan2(cosU2 * sinλ, cosU1 * sinU2 - sinU1 * cosU2 * cosλ);
    const α2 = Math.abs(sinSqσ) < ε ? π : Math.atan2(cosU1 * sinλ, -sinU1 * cosU2 + cosU1 * sinU2 * cosλ);
    return {
      distance: s,
      initialBearing: Math.abs(s) < ε ? NaN : Dms.wrap360(α1.toDegrees()),
      finalBearing: Math.abs(s) < ε ? NaN : Dms.wrap360(α2.toDegrees()),
      iterations
    };
  }
}
const useAzimuthIntersections = () => {
  const vehicles = useElintVehiclesStore((state) => state.vehicles);
  const [intersections, setIntersections] = reactExports.useState([]);
  log({ vehicles });
  reactExports.useEffect(() => {
    log("calculating intersections");
    setIntersections([]);
    for (let i = 0; i < vehicles.length - 1; i++) {
      for (let j = i + 1; j < vehicles.length; j++) {
        const intersection = getIntersection(vehicles[i].latitude, vehicles[i].longitude, vehicles[j].latitude, vehicles[j].longitude, vehicles[i].azimuth, vehicles[j].azimuth);
        if (intersection !== null) {
          setIntersections((i2) => [...i2, intersection]);
        }
      }
    }
  }, [vehicles]);
  const getIntersection = (latA, lonA, latB, lonB, azimuthA, azimuthB) => {
    const pA = new LatLonSpherical(latA, lonA);
    const pB = new LatLonSpherical(latB, lonB);
    const intersection = LatLonSpherical.intersection(pA, azimuthA, pB, azimuthB);
    if (intersection === null) {
      return null;
    }
    const pointA = new LatLonEllipsoidal_Vincenty(latA, lonA);
    const pointB = new LatLonEllipsoidal_Vincenty(latB, lonB);
    const pointC = new LatLonEllipsoidal_Vincenty(intersection.lat, intersection.lon);
    const inverseAC = pointA.inverse(pointC);
    const inverseBC = pointA.inverse(pointC);
    if (inverseAC.distance > 1e5 || inverseBC.distance > 1e5) {
      return null;
    }
    const rayLength2 = 3e4;
    const directAC = pointA.direct(rayLength2, azimuthA);
    const directBC = pointB.direct(rayLength2, azimuthB);
    return {
      intersection: pointC,
      pointA,
      pointB,
      directAC,
      directBC
    };
  };
  log({ intersections });
  return intersections;
};
const uaMarker = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAlCAYAAABcZvm2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAEpSURBVFhH3ZXBEYIwEEXBFvTAWIFnL7ZhBZZjIVZgG3RgBQ4Xa0A3ZnETsskHAuPwLmEmYd/8zQ6URYpb09qnOJcqWkvfVATtuTJreW/M2kMRhkVCwoVTOOKAbGNXQ33Yb1lCAlRCOOc/NUwtgWsWkil06USynyiThPFlX1FmCSNlzh3NSYmm0cYZfQ9KpEmI2J4kKUIKIWeMKPcQSLj2YsOwHpEzdejkTCGZCBkU5AzUulghdGLX+K1jZv5N9BLlmMBQjZ9I/g1zjbuo6SYSG2PxW8aEC4+8L01C6AkGymISQh3v+nrc0YrcF5/hd0KootPj+bKPMLF39NYxiRamWsakRYQiQyWE2rrcYIkIL9WQNMQfJiJsqg4wDbFYosVEw6H2+S1MUhRvp9aPHxX83zUAAAAASUVORK5CYII=";
const useAverageIntersection = () => {
  const intersections = useAzimuthIntersections();
  const coords = [];
  if (!intersections || intersections.length < 1) {
    return void 0;
  }
  console.log(intersections);
  intersections.forEach((i) => {
    coords.push(toCatesian(i.intersection.lat, i.intersection.lon));
  });
  const avgX = coords.reduce((acc, value) => acc + value.x, 0) / coords.length;
  const avgY = coords.reduce((acc, value) => acc + value.y, 0) / coords.length;
  const avgZ = coords.reduce((acc, value) => acc + value.z, 0) / coords.length;
  return toGeo({ x: avgX, y: avgY, z: avgZ });
};
const useEwVehiclesStore = create()((set2, get2) => ({
  everCount: 1,
  vehicles: [
    {
      id: crypto.randomUUID(),
      name: "Ew1",
      latitude: 50.50520052846764,
      longitude: 30.417108362162082
    }
  ],
  addNew: () => set2((state) => ({ vehicles: [...state.vehicles, getRandomElint("Ew " + (state.everCount + 1))], everCount: ++state.everCount })),
  // addNew: () => set((state) => ({ vehicles: [...state.vehicles, { id: crypto.randomUUID(), name: 'РЕБ ' + (state.everCount + 1) }], everCount: ++state.everCount })),
  getById: (id2) => get2().vehicles.find((v2) => v2.id === id2),
  update: (vehicle) => set2((state) => {
    if (!vehicle) {
      return state;
    }
    const newVehicles = state.vehicles.map((v2) => {
      if (v2.id !== vehicle.id)
        return v2;
      return vehicle;
    });
    console.log("update", state.vehicles, newVehicles);
    return { vehicles: newVehicles };
  }),
  deleteById: (id2) => set2((state) => ({ vehicles: state.vehicles.filter((v2) => v2.id !== id2) }))
}));
const getRandomElint = (name) => {
  return {
    name,
    id: crypto.randomUUID(),
    latitude: Math.random() * (48.5 - 48) + 48,
    longitude: Math.random() * (37.8 - 37.5) + 37.5
  };
};
const useEwAzimuths = () => {
  const ewV = useEwVehiclesStore((s) => s.vehicles);
  const avg = useAverageIntersection();
  const results = [];
  if (!ewV || ewV.length < 1 || (!avg || isNaN(avg.lat) || isNaN(avg.lon))) {
    return [];
  }
  ewV.forEach((ew) => {
    console.log(ew);
    console.log(avg);
    const pointA = new LatLonEllipsoidal_Vincenty(ew.latitude, ew.longitude);
    const pointB = new LatLonEllipsoidal_Vincenty(avg.lat, avg.lon);
    const inverseAB = pointA.inverse(pointB);
    const rayLength = 3e4;
    const directAB = pointA.direct(rayLength, inverseAB.finalBearing);
    results.push({
      ewVehicleId: ew.id,
      point: pointA,
      azimuth: inverseAB.finalBearing.toFixed(2),
      direct: directAB
    });
  });
  return results;
};
const GoogleMap = (props) => {
  const [googleMap, setGoogleMap] = reactExports.useState();
  const elintV = useElintVehiclesStore((state) => state.vehicles);
  const ewV = useEwVehiclesStore((state) => state.vehicles);
  const intersections = useAzimuthIntersections();
  const avgIntersection = useAverageIntersection();
  const ewAzimuths = useEwAzimuths();
  const [existingLines, setExistingLines] = reactExports.useState([]);
  const [existingPoints, setExistingPoints] = reactExports.useState([]);
  const loader = reactExports.useMemo(() => new Loader({
    apiKey: "AIzaSyCMsLjIaiYPRPeZa9WBCxUMzEdolhSCuxQ",
    version: "quarterly",
    language: "uk"
  }), []);
  console.log("GoogleMap");
  reactExports.useEffect(() => {
    loader.importLibrary("maps").then(async (mapsLibrary) => {
      const { Map: Map2 } = mapsLibrary;
      const map = new Map2(document.getElementById("map"), {
        center: { lat: 50.4519459, lng: 30.4684381 },
        zoom: 12.8
      });
      setGoogleMap(map);
    });
  }, []);
  reactExports.useEffect(() => {
    log("drawing lines");
    if (!googleMap) {
      return;
    }
    existingPoints.forEach((ep) => {
      ep.setMap(null);
    });
    existingLines.forEach((ep) => {
      ep.setMap(null);
    });
    setExistingLines([]);
    setExistingPoints([]);
    elintV.forEach((v2) => {
      const marker = new google.maps.Marker({
        position: { lat: v2.latitude, lng: v2.longitude },
        label: v2.name,
        title: `${v2.latitude}
${v2.longitude}`,
        icon: uaMarker,
        clickable: true
      });
      marker.setMap(googleMap);
      setExistingPoints((ex) => [...ex, marker]);
      log({ existingPoints });
    });
    ewV.forEach((v2) => {
      const marker = new google.maps.Marker({
        position: { lat: v2.latitude, lng: v2.longitude },
        label: v2.name,
        title: `${v2.latitude}
${v2.longitude}`,
        icon: uaMarker,
        clickable: true
      });
      marker.setMap(googleMap);
      setExistingPoints((ex) => [...ex, marker]);
      log({ existingPoints });
    });
    intersections.forEach((i) => {
      const lineAC = new google.maps.Polyline({
        path: [{ lat: i.pointA.lat, lng: i.pointA.lon }, { lat: i.directAC.point.lat, lng: i.directAC.point.lon }],
        geodesic: true,
        strokeColor: "#0000FF",
        strokeOpacity: 1,
        strokeWeight: 2
      });
      const lineBC = new google.maps.Polyline({
        path: [{ lat: i.pointB.lat, lng: i.pointB.lon }, { lat: i.directBC.point.lat, lng: i.directBC.point.lon }],
        geodesic: true,
        strokeColor: "#0000FF",
        strokeOpacity: 1,
        strokeWeight: 2
      });
      const intersectionPoint = new google.maps.Marker({
        position: { lat: i.intersection.lat, lng: i.intersection.lon },
        label: "target",
        draggable: false
      });
      lineAC.setMap(googleMap);
      lineBC.setMap(googleMap);
      intersectionPoint.setMap(googleMap);
      setExistingLines((el2) => [...el2, lineAC, lineBC]);
      setExistingPoints((ex) => [...ex, intersectionPoint]);
    });
    ewAzimuths.forEach((i) => {
      const line = new google.maps.Polyline({
        path: [{ lat: i.point.lat, lng: i.point.lon }, { lat: i.direct.point.lat, lng: i.direct.point.lon }],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1,
        strokeWeight: 2
      });
      line.setMap(googleMap);
      setExistingLines((el2) => [...el2, line]);
    });
    if (avgIntersection) {
      const avgPoint = new google.maps.Marker({
        position: { lat: avgIntersection.lat, lng: avgIntersection.lon },
        label: "average",
        draggable: false
      });
      avgPoint.setMap(googleMap);
      setExistingPoints((ex) => [...ex, avgPoint]);
    }
  }, [elintV, ewV, intersections, googleMap, avgIntersection]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "map", className: "h-screen" });
};
const TargetCard = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid justify-center text-sm overflow-ellipsis min-w-[150px]" });
};
const Only = (props) => {
  const { when, children } = props;
  if (!when)
    return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
};
var isCheckBoxInput = (element) => element.type === "checkbox";
var isDateObject = (value) => value instanceof Date;
var isNullOrUndefined = (value) => value == null;
const isObjectType = (value) => typeof value === "object";
var isObject = (value) => !isNullOrUndefined(value) && !Array.isArray(value) && isObjectType(value) && !isDateObject(value);
var getEventValue = (event) => isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
var getNodeParentName = (name) => name.substring(0, name.search(/\.\d+(\.|$)/)) || name;
var isNameInFieldArray = (names, name) => names.has(getNodeParentName(name));
var isPlainObject = (tempObject) => {
  const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
  return isObject(prototypeCopy) && prototypeCopy.hasOwnProperty("isPrototypeOf");
};
var isWeb = typeof window !== "undefined" && typeof window.HTMLElement !== "undefined" && typeof document !== "undefined";
function cloneObject(data) {
  let copy;
  const isArray = Array.isArray(data);
  if (data instanceof Date) {
    copy = new Date(data);
  } else if (data instanceof Set) {
    copy = new Set(data);
  } else if (!(isWeb && (data instanceof Blob || data instanceof FileList)) && (isArray || isObject(data))) {
    copy = isArray ? [] : {};
    if (!isArray && !isPlainObject(data)) {
      copy = data;
    } else {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          copy[key] = cloneObject(data[key]);
        }
      }
    }
  } else {
    return data;
  }
  return copy;
}
var compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];
var isUndefined = (val) => val === void 0;
var get = (object, path, defaultValue) => {
  if (!path || !isObject(object)) {
    return defaultValue;
  }
  const result = compact(path.split(/[,[\].]+?/)).reduce((result2, key) => isNullOrUndefined(result2) ? result2 : result2[key], object);
  return isUndefined(result) || result === object ? isUndefined(object[path]) ? defaultValue : object[path] : result;
};
var isBoolean = (value) => typeof value === "boolean";
const EVENTS = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
};
const VALIDATION_MODE = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
};
const INPUT_VALIDATION_RULES = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
const HookFormContext = React.createContext(null);
const useFormContext = () => React.useContext(HookFormContext);
const FormProvider = (props) => {
  const { children, ...data } = props;
  return React.createElement(HookFormContext.Provider, { value: data }, children);
};
var getProxyFormState = (formState, control, localProxyFormState, isRoot = true) => {
  const result = {
    defaultValues: control._defaultValues
  };
  for (const key in formState) {
    Object.defineProperty(result, key, {
      get: () => {
        const _key = key;
        if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
          control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
        }
        localProxyFormState && (localProxyFormState[_key] = true);
        return formState[_key];
      }
    });
  }
  return result;
};
var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;
var shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot) => {
  updateFormState(formStateData);
  const { name, ...formState } = formStateData;
  return isEmptyObject(formState) || Object.keys(formState).length >= Object.keys(_proxyFormState).length || Object.keys(formState).find((key) => _proxyFormState[key] === (!isRoot || VALIDATION_MODE.all));
};
var convertToArrayPayload = (value) => Array.isArray(value) ? value : [value];
var shouldSubscribeByName = (name, signalName, exact) => !name || !signalName || name === signalName || convertToArrayPayload(name).some((currentName) => currentName && (exact ? currentName === signalName : currentName.startsWith(signalName) || signalName.startsWith(currentName)));
function useSubscribe(props) {
  const _props = React.useRef(props);
  _props.current = props;
  React.useEffect(() => {
    const subscription = !props.disabled && _props.current.subject && _props.current.subject.subscribe({
      next: _props.current.next
    });
    return () => {
      subscription && subscription.unsubscribe();
    };
  }, [props.disabled]);
}
function useFormState(props) {
  const methods = useFormContext();
  const { control = methods.control, disabled, name, exact } = props || {};
  const [formState, updateFormState] = React.useState(control._formState);
  const _mounted = React.useRef(true);
  const _localProxyFormState = React.useRef({
    isDirty: false,
    isLoading: false,
    dirtyFields: false,
    touchedFields: false,
    isValidating: false,
    isValid: false,
    errors: false
  });
  const _name = React.useRef(name);
  _name.current = name;
  useSubscribe({
    disabled,
    next: (value) => _mounted.current && shouldSubscribeByName(_name.current, value.name, exact) && shouldRenderFormState(value, _localProxyFormState.current, control._updateFormState) && updateFormState({
      ...control._formState,
      ...value
    }),
    subject: control._subjects.state
  });
  React.useEffect(() => {
    _mounted.current = true;
    _localProxyFormState.current.isValid && control._updateValid(true);
    return () => {
      _mounted.current = false;
    };
  }, [control]);
  return getProxyFormState(formState, control, _localProxyFormState.current, false);
}
var isString = (value) => typeof value === "string";
var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue) => {
  if (isString(names)) {
    isGlobal && _names.watch.add(names);
    return get(formValues, names, defaultValue);
  }
  if (Array.isArray(names)) {
    return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName), get(formValues, fieldName)));
  }
  isGlobal && (_names.watchAll = true);
  return formValues;
};
function useWatch(props) {
  const methods = useFormContext();
  const { control = methods.control, name, defaultValue, disabled, exact } = props || {};
  const _name = React.useRef(name);
  _name.current = name;
  useSubscribe({
    disabled,
    subject: control._subjects.values,
    next: (formState) => {
      if (shouldSubscribeByName(_name.current, formState.name, exact)) {
        updateValue(cloneObject(generateWatchOutput(_name.current, control._names, formState.values || control._formValues, false, defaultValue)));
      }
    }
  });
  const [value, updateValue] = React.useState(control._getWatch(name, defaultValue));
  React.useEffect(() => control._removeUnmounted());
  return value;
}
var isKey = (value) => /^\w*$/.test(value);
var stringToPath = (input) => compact(input.replace(/["|']|\]/g, "").split(/\.|\[/));
var set = (object, path, value) => {
  let index2 = -1;
  const tempPath = isKey(path) ? [path] : stringToPath(path);
  const length = tempPath.length;
  const lastIndex = length - 1;
  while (++index2 < length) {
    const key = tempPath[index2];
    let newValue = value;
    if (index2 !== lastIndex) {
      const objValue = object[key];
      newValue = isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index2 + 1]) ? [] : {};
    }
    object[key] = newValue;
    object = object[key];
  }
  return object;
};
function useController(props) {
  const methods = useFormContext();
  const { name, disabled, control = methods.control, shouldUnregister } = props;
  const isArrayField = isNameInFieldArray(control._names.array, name);
  const value = useWatch({
    control,
    name,
    defaultValue: get(control._formValues, name, get(control._defaultValues, name, props.defaultValue)),
    exact: true
  });
  const formState = useFormState({
    control,
    name
  });
  const _registerProps = React.useRef(control.register(name, {
    ...props.rules,
    value,
    ...isBoolean(props.disabled) ? { disabled: props.disabled } : {}
  }));
  React.useEffect(() => {
    const _shouldUnregisterField = control._options.shouldUnregister || shouldUnregister;
    const updateMounted = (name2, value2) => {
      const field = get(control._fields, name2);
      if (field) {
        field._f.mount = value2;
      }
    };
    updateMounted(name, true);
    if (_shouldUnregisterField) {
      const value2 = cloneObject(get(control._options.defaultValues, name));
      set(control._defaultValues, name, value2);
      if (isUndefined(get(control._formValues, name))) {
        set(control._formValues, name, value2);
      }
    }
    return () => {
      (isArrayField ? _shouldUnregisterField && !control._state.action : _shouldUnregisterField) ? control.unregister(name) : updateMounted(name, false);
    };
  }, [name, control, isArrayField, shouldUnregister]);
  React.useEffect(() => {
    if (get(control._fields, name)) {
      control._updateDisabledField({
        disabled,
        fields: control._fields,
        name,
        value: get(control._fields, name)._f.value
      });
    }
  }, [disabled, name, control]);
  return {
    field: {
      name,
      value,
      ...isBoolean(disabled) || formState.disabled ? { disabled: formState.disabled || disabled } : {},
      onChange: React.useCallback((event) => _registerProps.current.onChange({
        target: {
          value: getEventValue(event),
          name
        },
        type: EVENTS.CHANGE
      }), [name]),
      onBlur: React.useCallback(() => _registerProps.current.onBlur({
        target: {
          value: get(control._formValues, name),
          name
        },
        type: EVENTS.BLUR
      }), [name, control]),
      ref: (elm) => {
        const field = get(control._fields, name);
        if (field && elm) {
          field._f.ref = {
            focus: () => elm.focus(),
            select: () => elm.select(),
            setCustomValidity: (message) => elm.setCustomValidity(message),
            reportValidity: () => elm.reportValidity()
          };
        }
      }
    },
    formState,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: true,
        get: () => !!get(formState.errors, name)
      },
      isDirty: {
        enumerable: true,
        get: () => !!get(formState.dirtyFields, name)
      },
      isTouched: {
        enumerable: true,
        get: () => !!get(formState.touchedFields, name)
      },
      error: {
        enumerable: true,
        get: () => get(formState.errors, name)
      }
    })
  };
}
var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria ? {
  ...errors[name],
  types: {
    ...errors[name] && errors[name].types ? errors[name].types : {},
    [type]: message || true
  }
} : {};
var getValidationModes = (mode) => ({
  isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
  isOnBlur: mode === VALIDATION_MODE.onBlur,
  isOnChange: mode === VALIDATION_MODE.onChange,
  isOnAll: mode === VALIDATION_MODE.all,
  isOnTouch: mode === VALIDATION_MODE.onTouched
});
var isWatched = (name, _names, isBlurEvent) => !isBlurEvent && (_names.watchAll || _names.watch.has(name) || [..._names.watch].some((watchName) => name.startsWith(watchName) && /^\.\w+/.test(name.slice(watchName.length))));
const iterateFieldsByAction = (fields, action, fieldsNames, abortEarly) => {
  for (const key of fieldsNames || Object.keys(fields)) {
    const field = get(fields, key);
    if (field) {
      const { _f, ...currentField } = field;
      if (_f) {
        if (_f.refs && _f.refs[0] && action(_f.refs[0], key) && !abortEarly) {
          break;
        } else if (_f.ref && action(_f.ref, _f.name) && !abortEarly) {
          break;
        } else {
          iterateFieldsByAction(currentField, action);
        }
      } else if (isObject(currentField)) {
        iterateFieldsByAction(currentField, action);
      }
    }
  }
};
var updateFieldArrayRootError = (errors, error, name) => {
  const fieldArrayErrors = compact(get(errors, name));
  set(fieldArrayErrors, "root", error[name]);
  set(errors, name, fieldArrayErrors);
  return errors;
};
var isFileInput = (element) => element.type === "file";
var isFunction = (value) => typeof value === "function";
var isHTMLElement = (value) => {
  if (!isWeb) {
    return false;
  }
  const owner = value ? value.ownerDocument : 0;
  return value instanceof (owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement);
};
var isMessage = (value) => isString(value);
var isRadioInput = (element) => element.type === "radio";
var isRegex = (value) => value instanceof RegExp;
const defaultResult = {
  value: false,
  isValid: false
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
  if (Array.isArray(options)) {
    if (options.length > 1) {
      const values = options.filter((option) => option && option.checked && !option.disabled).map((option) => option.value);
      return { value: values, isValid: !!values.length };
    }
    return options[0].checked && !options[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      options[0].attributes && !isUndefined(options[0].attributes.value) ? isUndefined(options[0].value) || options[0].value === "" ? validResult : { value: options[0].value, isValid: true } : validResult
    ) : defaultResult;
  }
  return defaultResult;
};
const defaultReturn = {
  isValid: false,
  value: null
};
var getRadioValue = (options) => Array.isArray(options) ? options.reduce((previous, option) => option && option.checked && !option.disabled ? {
  isValid: true,
  value: option.value
} : previous, defaultReturn) : defaultReturn;
function getValidateError(result, ref, type = "validate") {
  if (isMessage(result) || Array.isArray(result) && result.every(isMessage) || isBoolean(result) && !result) {
    return {
      type,
      message: isMessage(result) ? result : "",
      ref
    };
  }
}
var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData) ? validationData : {
  value: validationData,
  message: ""
};
var validateField = async (field, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray) => {
  const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount, disabled } = field._f;
  const inputValue = get(formValues, name);
  if (!mount || disabled) {
    return {};
  }
  const inputRef = refs ? refs[0] : ref;
  const setCustomValidity = (message) => {
    if (shouldUseNativeValidation && inputRef.reportValidity) {
      inputRef.setCustomValidity(isBoolean(message) ? "" : message || "");
      inputRef.reportValidity();
    }
  };
  const error = {};
  const isRadio = isRadioInput(ref);
  const isCheckBox = isCheckBoxInput(ref);
  const isRadioOrCheckbox2 = isRadio || isCheckBox;
  const isEmpty = (valueAsNumber || isFileInput(ref)) && isUndefined(ref.value) && isUndefined(inputValue) || isHTMLElement(ref) && ref.value === "" || inputValue === "" || Array.isArray(inputValue) && !inputValue.length;
  const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
  const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
    const message = exceedMax ? maxLengthMessage : minLengthMessage;
    error[name] = {
      type: exceedMax ? maxType : minType,
      message,
      ref,
      ...appendErrorsCurry(exceedMax ? maxType : minType, message)
    };
  };
  if (isFieldArray ? !Array.isArray(inputValue) || !inputValue.length : required && (!isRadioOrCheckbox2 && (isEmpty || isNullOrUndefined(inputValue)) || isBoolean(inputValue) && !inputValue || isCheckBox && !getCheckboxValue(refs).isValid || isRadio && !getRadioValue(refs).isValid)) {
    const { value, message } = isMessage(required) ? { value: !!required, message: required } : getValueAndMessage(required);
    if (value) {
      error[name] = {
        type: INPUT_VALIDATION_RULES.required,
        message,
        ref: inputRef,
        ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message)
      };
      if (!validateAllFieldCriteria) {
        setCustomValidity(message);
        return error;
      }
    }
  }
  if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
    let exceedMax;
    let exceedMin;
    const maxOutput = getValueAndMessage(max);
    const minOutput = getValueAndMessage(min);
    if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
      const valueNumber = ref.valueAsNumber || (inputValue ? +inputValue : inputValue);
      if (!isNullOrUndefined(maxOutput.value)) {
        exceedMax = valueNumber > maxOutput.value;
      }
      if (!isNullOrUndefined(minOutput.value)) {
        exceedMin = valueNumber < minOutput.value;
      }
    } else {
      const valueDate = ref.valueAsDate || new Date(inputValue);
      const convertTimeToDate = (time) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + time);
      const isTime = ref.type == "time";
      const isWeek = ref.type == "week";
      if (isString(maxOutput.value) && inputValue) {
        exceedMax = isTime ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value) : isWeek ? inputValue > maxOutput.value : valueDate > new Date(maxOutput.value);
      }
      if (isString(minOutput.value) && inputValue) {
        exceedMin = isTime ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value) : isWeek ? inputValue < minOutput.value : valueDate < new Date(minOutput.value);
      }
    }
    if (exceedMax || exceedMin) {
      getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
      if (!validateAllFieldCriteria) {
        setCustomValidity(error[name].message);
        return error;
      }
    }
  }
  if ((maxLength || minLength) && !isEmpty && (isString(inputValue) || isFieldArray && Array.isArray(inputValue))) {
    const maxLengthOutput = getValueAndMessage(maxLength);
    const minLengthOutput = getValueAndMessage(minLength);
    const exceedMax = !isNullOrUndefined(maxLengthOutput.value) && inputValue.length > +maxLengthOutput.value;
    const exceedMin = !isNullOrUndefined(minLengthOutput.value) && inputValue.length < +minLengthOutput.value;
    if (exceedMax || exceedMin) {
      getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
      if (!validateAllFieldCriteria) {
        setCustomValidity(error[name].message);
        return error;
      }
    }
  }
  if (pattern && !isEmpty && isString(inputValue)) {
    const { value: patternValue, message } = getValueAndMessage(pattern);
    if (isRegex(patternValue) && !inputValue.match(patternValue)) {
      error[name] = {
        type: INPUT_VALIDATION_RULES.pattern,
        message,
        ref,
        ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message)
      };
      if (!validateAllFieldCriteria) {
        setCustomValidity(message);
        return error;
      }
    }
  }
  if (validate) {
    if (isFunction(validate)) {
      const result = await validate(inputValue, formValues);
      const validateError = getValidateError(result, inputRef);
      if (validateError) {
        error[name] = {
          ...validateError,
          ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message)
        };
        if (!validateAllFieldCriteria) {
          setCustomValidity(validateError.message);
          return error;
        }
      }
    } else if (isObject(validate)) {
      let validationResult = {};
      for (const key in validate) {
        if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
          break;
        }
        const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
        if (validateError) {
          validationResult = {
            ...validateError,
            ...appendErrorsCurry(key, validateError.message)
          };
          setCustomValidity(validateError.message);
          if (validateAllFieldCriteria) {
            error[name] = validationResult;
          }
        }
      }
      if (!isEmptyObject(validationResult)) {
        error[name] = {
          ref: inputRef,
          ...validationResult
        };
        if (!validateAllFieldCriteria) {
          return error;
        }
      }
    }
  }
  setCustomValidity(true);
  return error;
};
function baseGet(object, updatePath) {
  const length = updatePath.slice(0, -1).length;
  let index2 = 0;
  while (index2 < length) {
    object = isUndefined(object) ? index2++ : object[updatePath[index2++]];
  }
  return object;
}
function isEmptyArray(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !isUndefined(obj[key])) {
      return false;
    }
  }
  return true;
}
function unset(object, path) {
  const paths = Array.isArray(path) ? path : isKey(path) ? [path] : stringToPath(path);
  const childObject = paths.length === 1 ? object : baseGet(object, paths);
  const index2 = paths.length - 1;
  const key = paths[index2];
  if (childObject) {
    delete childObject[key];
  }
  if (index2 !== 0 && (isObject(childObject) && isEmptyObject(childObject) || Array.isArray(childObject) && isEmptyArray(childObject))) {
    unset(object, paths.slice(0, -1));
  }
  return object;
}
var createSubject = () => {
  let _observers = [];
  const next = (value) => {
    for (const observer of _observers) {
      observer.next && observer.next(value);
    }
  };
  const subscribe = (observer) => {
    _observers.push(observer);
    return {
      unsubscribe: () => {
        _observers = _observers.filter((o) => o !== observer);
      }
    };
  };
  const unsubscribe = () => {
    _observers = [];
  };
  return {
    get observers() {
      return _observers;
    },
    next,
    subscribe,
    unsubscribe
  };
};
var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);
function deepEqual(object1, object2) {
  if (isPrimitive(object1) || isPrimitive(object2)) {
    return object1 === object2;
  }
  if (isDateObject(object1) && isDateObject(object2)) {
    return object1.getTime() === object2.getTime();
  }
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    if (!keys2.includes(key)) {
      return false;
    }
    if (key !== "ref") {
      const val2 = object2[key];
      if (isDateObject(val1) && isDateObject(val2) || isObject(val1) && isObject(val2) || Array.isArray(val1) && Array.isArray(val2) ? !deepEqual(val1, val2) : val1 !== val2) {
        return false;
      }
    }
  }
  return true;
}
var isMultipleSelect = (element) => element.type === `select-multiple`;
var isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);
var live = (ref) => isHTMLElement(ref) && ref.isConnected;
var objectHasFunction = (data) => {
  for (const key in data) {
    if (isFunction(data[key])) {
      return true;
    }
  }
  return false;
};
function markFieldsDirty(data, fields = {}) {
  const isParentNodeArray = Array.isArray(data);
  if (isObject(data) || isParentNodeArray) {
    for (const key in data) {
      if (Array.isArray(data[key]) || isObject(data[key]) && !objectHasFunction(data[key])) {
        fields[key] = Array.isArray(data[key]) ? [] : {};
        markFieldsDirty(data[key], fields[key]);
      } else if (!isNullOrUndefined(data[key])) {
        fields[key] = true;
      }
    }
  }
  return fields;
}
function getDirtyFieldsFromDefaultValues(data, formValues, dirtyFieldsFromValues) {
  const isParentNodeArray = Array.isArray(data);
  if (isObject(data) || isParentNodeArray) {
    for (const key in data) {
      if (Array.isArray(data[key]) || isObject(data[key]) && !objectHasFunction(data[key])) {
        if (isUndefined(formValues) || isPrimitive(dirtyFieldsFromValues[key])) {
          dirtyFieldsFromValues[key] = Array.isArray(data[key]) ? markFieldsDirty(data[key], []) : { ...markFieldsDirty(data[key]) };
        } else {
          getDirtyFieldsFromDefaultValues(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
        }
      } else {
        dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);
      }
    }
  }
  return dirtyFieldsFromValues;
}
var getDirtyFields = (defaultValues, formValues) => getDirtyFieldsFromDefaultValues(defaultValues, formValues, markFieldsDirty(formValues));
var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value) ? value : valueAsNumber ? value === "" ? NaN : value ? +value : value : valueAsDate && isString(value) ? new Date(value) : setValueAs ? setValueAs(value) : value;
function getFieldValue(_f) {
  const ref = _f.ref;
  if (_f.refs ? _f.refs.every((ref2) => ref2.disabled) : ref.disabled) {
    return;
  }
  if (isFileInput(ref)) {
    return ref.files;
  }
  if (isRadioInput(ref)) {
    return getRadioValue(_f.refs).value;
  }
  if (isMultipleSelect(ref)) {
    return [...ref.selectedOptions].map(({ value }) => value);
  }
  if (isCheckBoxInput(ref)) {
    return getCheckboxValue(_f.refs).value;
  }
  return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}
var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
  const fields = {};
  for (const name of fieldsNames) {
    const field = get(_fields, name);
    field && set(fields, name, field._f);
  }
  return {
    criteriaMode,
    names: [...fieldsNames],
    fields,
    shouldUseNativeValidation
  };
};
var getRuleValue = (rule) => isUndefined(rule) ? rule : isRegex(rule) ? rule.source : isObject(rule) ? isRegex(rule.value) ? rule.value.source : rule.value : rule;
var hasValidation = (options) => options.mount && (options.required || options.min || options.max || options.maxLength || options.minLength || options.pattern || options.validate);
function schemaErrorLookup(errors, _fields, name) {
  const error = get(errors, name);
  if (error || isKey(name)) {
    return {
      error,
      name
    };
  }
  const names = name.split(".");
  while (names.length) {
    const fieldName = names.join(".");
    const field = get(_fields, fieldName);
    const foundError = get(errors, fieldName);
    if (field && !Array.isArray(field) && name !== fieldName) {
      return { name };
    }
    if (foundError && foundError.type) {
      return {
        name: fieldName,
        error: foundError
      };
    }
    names.pop();
  }
  return {
    name
  };
}
var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
  if (mode.isOnAll) {
    return false;
  } else if (!isSubmitted && mode.isOnTouch) {
    return !(isTouched || isBlurEvent);
  } else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
    return !isBlurEvent;
  } else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
    return isBlurEvent;
  }
  return true;
};
var unsetEmptyArray = (ref, name) => !compact(get(ref, name)).length && unset(ref, name);
const defaultOptions = {
  mode: VALIDATION_MODE.onSubmit,
  reValidateMode: VALIDATION_MODE.onChange,
  shouldFocusError: true
};
function createFormControl(props = {}, flushRootRender) {
  let _options = {
    ...defaultOptions,
    ...props
  };
  let _formState = {
    submitCount: 0,
    isDirty: false,
    isLoading: isFunction(_options.defaultValues),
    isValidating: false,
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    touchedFields: {},
    dirtyFields: {},
    errors: _options.errors || {},
    disabled: _options.disabled || false
  };
  let _fields = {};
  let _defaultValues = isObject(_options.defaultValues) || isObject(_options.values) ? cloneObject(_options.defaultValues || _options.values) || {} : {};
  let _formValues = _options.shouldUnregister ? {} : cloneObject(_defaultValues);
  let _state = {
    action: false,
    mount: false,
    watch: false
  };
  let _names = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  };
  let delayErrorCallback;
  let timer = 0;
  const _proxyFormState = {
    isDirty: false,
    dirtyFields: false,
    touchedFields: false,
    isValidating: false,
    isValid: false,
    errors: false
  };
  const _subjects = {
    values: createSubject(),
    array: createSubject(),
    state: createSubject()
  };
  const validationModeBeforeSubmit = getValidationModes(_options.mode);
  const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
  const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
  const debounce = (callback) => (wait) => {
    clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
  const _updateValid = async (shouldUpdateValid) => {
    if (_proxyFormState.isValid || shouldUpdateValid) {
      const isValid = _options.resolver ? isEmptyObject((await _executeSchema()).errors) : await executeBuiltInValidation(_fields, true);
      if (isValid !== _formState.isValid) {
        _subjects.state.next({
          isValid
        });
      }
    }
  };
  const _updateIsValidating = (value) => _proxyFormState.isValidating && _subjects.state.next({
    isValidating: value
  });
  const _updateFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true) => {
    if (args && method) {
      _state.action = true;
      if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
        const fieldValues = method(get(_fields, name), args.argA, args.argB);
        shouldSetValues && set(_fields, name, fieldValues);
      }
      if (shouldUpdateFieldsAndState && Array.isArray(get(_formState.errors, name))) {
        const errors = method(get(_formState.errors, name), args.argA, args.argB);
        shouldSetValues && set(_formState.errors, name, errors);
        unsetEmptyArray(_formState.errors, name);
      }
      if (_proxyFormState.touchedFields && shouldUpdateFieldsAndState && Array.isArray(get(_formState.touchedFields, name))) {
        const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
        shouldSetValues && set(_formState.touchedFields, name, touchedFields);
      }
      if (_proxyFormState.dirtyFields) {
        _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
      }
      _subjects.state.next({
        name,
        isDirty: _getDirty(name, values),
        dirtyFields: _formState.dirtyFields,
        errors: _formState.errors,
        isValid: _formState.isValid
      });
    } else {
      set(_formValues, name, values);
    }
  };
  const updateErrors = (name, error) => {
    set(_formState.errors, name, error);
    _subjects.state.next({
      errors: _formState.errors
    });
  };
  const _setErrors = (errors) => {
    _formState.errors = errors;
    _subjects.state.next({
      errors: _formState.errors,
      isValid: false
    });
  };
  const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
    const field = get(_fields, name);
    if (field) {
      const defaultValue = get(_formValues, name, isUndefined(value) ? get(_defaultValues, name) : value);
      isUndefined(defaultValue) || ref && ref.defaultChecked || shouldSkipSetValueAs ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f)) : setFieldValue(name, defaultValue);
      _state.mount && _updateValid();
    }
  };
  const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
    let shouldUpdateField = false;
    let isPreviousDirty = false;
    const output = {
      name
    };
    const disabledField = !!(get(_fields, name) && get(_fields, name)._f.disabled);
    if (!isBlurEvent || shouldDirty) {
      if (_proxyFormState.isDirty) {
        isPreviousDirty = _formState.isDirty;
        _formState.isDirty = output.isDirty = _getDirty();
        shouldUpdateField = isPreviousDirty !== output.isDirty;
      }
      const isCurrentFieldPristine = disabledField || deepEqual(get(_defaultValues, name), fieldValue);
      isPreviousDirty = !!(!disabledField && get(_formState.dirtyFields, name));
      isCurrentFieldPristine || disabledField ? unset(_formState.dirtyFields, name) : set(_formState.dirtyFields, name, true);
      output.dirtyFields = _formState.dirtyFields;
      shouldUpdateField = shouldUpdateField || _proxyFormState.dirtyFields && isPreviousDirty !== !isCurrentFieldPristine;
    }
    if (isBlurEvent) {
      const isPreviousFieldTouched = get(_formState.touchedFields, name);
      if (!isPreviousFieldTouched) {
        set(_formState.touchedFields, name, isBlurEvent);
        output.touchedFields = _formState.touchedFields;
        shouldUpdateField = shouldUpdateField || _proxyFormState.touchedFields && isPreviousFieldTouched !== isBlurEvent;
      }
    }
    shouldUpdateField && shouldRender && _subjects.state.next(output);
    return shouldUpdateField ? output : {};
  };
  const shouldRenderByError = (name, isValid, error, fieldState) => {
    const previousFieldError = get(_formState.errors, name);
    const shouldUpdateValid = _proxyFormState.isValid && isBoolean(isValid) && _formState.isValid !== isValid;
    if (props.delayError && error) {
      delayErrorCallback = debounce(() => updateErrors(name, error));
      delayErrorCallback(props.delayError);
    } else {
      clearTimeout(timer);
      delayErrorCallback = null;
      error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
    }
    if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) || !isEmptyObject(fieldState) || shouldUpdateValid) {
      const updatedFormState = {
        ...fieldState,
        ...shouldUpdateValid && isBoolean(isValid) ? { isValid } : {},
        errors: _formState.errors,
        name
      };
      _formState = {
        ..._formState,
        ...updatedFormState
      };
      _subjects.state.next(updatedFormState);
    }
    _updateIsValidating(false);
  };
  const _executeSchema = async (name) => _options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
  const executeSchemaAndUpdateState = async (names) => {
    const { errors } = await _executeSchema(names);
    if (names) {
      for (const name of names) {
        const error = get(errors, name);
        error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
      }
    } else {
      _formState.errors = errors;
    }
    return errors;
  };
  const executeBuiltInValidation = async (fields, shouldOnlyCheckValid, context = {
    valid: true
  }) => {
    for (const name in fields) {
      const field = fields[name];
      if (field) {
        const { _f, ...fieldValue } = field;
        if (_f) {
          const isFieldArrayRoot = _names.array.has(_f.name);
          const fieldError = await validateField(field, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !shouldOnlyCheckValid, isFieldArrayRoot);
          if (fieldError[_f.name]) {
            context.valid = false;
            if (shouldOnlyCheckValid) {
              break;
            }
          }
          !shouldOnlyCheckValid && (get(fieldError, _f.name) ? isFieldArrayRoot ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name) : set(_formState.errors, _f.name, fieldError[_f.name]) : unset(_formState.errors, _f.name));
        }
        fieldValue && await executeBuiltInValidation(fieldValue, shouldOnlyCheckValid, context);
      }
    }
    return context.valid;
  };
  const _removeUnmounted = () => {
    for (const name of _names.unMount) {
      const field = get(_fields, name);
      field && (field._f.refs ? field._f.refs.every((ref) => !live(ref)) : !live(field._f.ref)) && unregister(name);
    }
    _names.unMount = /* @__PURE__ */ new Set();
  };
  const _getDirty = (name, data) => (name && data && set(_formValues, name, data), !deepEqual(getValues(), _defaultValues));
  const _getWatch = (names, defaultValue, isGlobal) => generateWatchOutput(names, _names, {
    ..._state.mount ? _formValues : isUndefined(defaultValue) ? _defaultValues : isString(names) ? { [names]: defaultValue } : defaultValue
  }, isGlobal, defaultValue);
  const _getFieldArray = (name) => compact(get(_state.mount ? _formValues : _defaultValues, name, props.shouldUnregister ? get(_defaultValues, name, []) : []));
  const setFieldValue = (name, value, options = {}) => {
    const field = get(_fields, name);
    let fieldValue = value;
    if (field) {
      const fieldReference = field._f;
      if (fieldReference) {
        !fieldReference.disabled && set(_formValues, name, getFieldValueAs(value, fieldReference));
        fieldValue = isHTMLElement(fieldReference.ref) && isNullOrUndefined(value) ? "" : value;
        if (isMultipleSelect(fieldReference.ref)) {
          [...fieldReference.ref.options].forEach((optionRef) => optionRef.selected = fieldValue.includes(optionRef.value));
        } else if (fieldReference.refs) {
          if (isCheckBoxInput(fieldReference.ref)) {
            fieldReference.refs.length > 1 ? fieldReference.refs.forEach((checkboxRef) => (!checkboxRef.defaultChecked || !checkboxRef.disabled) && (checkboxRef.checked = Array.isArray(fieldValue) ? !!fieldValue.find((data) => data === checkboxRef.value) : fieldValue === checkboxRef.value)) : fieldReference.refs[0] && (fieldReference.refs[0].checked = !!fieldValue);
          } else {
            fieldReference.refs.forEach((radioRef) => radioRef.checked = radioRef.value === fieldValue);
          }
        } else if (isFileInput(fieldReference.ref)) {
          fieldReference.ref.value = "";
        } else {
          fieldReference.ref.value = fieldValue;
          if (!fieldReference.ref.type) {
            _subjects.values.next({
              name,
              values: { ..._formValues }
            });
          }
        }
      }
    }
    (options.shouldDirty || options.shouldTouch) && updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
    options.shouldValidate && trigger(name);
  };
  const setValues = (name, value, options) => {
    for (const fieldKey in value) {
      const fieldValue = value[fieldKey];
      const fieldName = `${name}.${fieldKey}`;
      const field = get(_fields, fieldName);
      (_names.array.has(name) || !isPrimitive(fieldValue) || field && !field._f) && !isDateObject(fieldValue) ? setValues(fieldName, fieldValue, options) : setFieldValue(fieldName, fieldValue, options);
    }
  };
  const setValue = (name, value, options = {}) => {
    const field = get(_fields, name);
    const isFieldArray = _names.array.has(name);
    const cloneValue = cloneObject(value);
    set(_formValues, name, cloneValue);
    if (isFieldArray) {
      _subjects.array.next({
        name,
        values: { ..._formValues }
      });
      if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields) && options.shouldDirty) {
        _subjects.state.next({
          name,
          dirtyFields: getDirtyFields(_defaultValues, _formValues),
          isDirty: _getDirty(name, cloneValue)
        });
      }
    } else {
      field && !field._f && !isNullOrUndefined(cloneValue) ? setValues(name, cloneValue, options) : setFieldValue(name, cloneValue, options);
    }
    isWatched(name, _names) && _subjects.state.next({ ..._formState });
    _subjects.values.next({
      name,
      values: { ..._formValues }
    });
    !_state.mount && flushRootRender();
  };
  const onChange = async (event) => {
    const target = event.target;
    let name = target.name;
    let isFieldValueUpdated = true;
    const field = get(_fields, name);
    const getCurrentFieldValue = () => target.type ? getFieldValue(field._f) : getEventValue(event);
    const _updateIsFieldValueUpdated = (fieldValue) => {
      isFieldValueUpdated = Number.isNaN(fieldValue) || fieldValue === get(_formValues, name, fieldValue);
    };
    if (field) {
      let error;
      let isValid;
      const fieldValue = getCurrentFieldValue();
      const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
      const shouldSkipValidation = !hasValidation(field._f) && !_options.resolver && !get(_formState.errors, name) && !field._f.deps || skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
      const watched = isWatched(name, _names, isBlurEvent);
      set(_formValues, name, fieldValue);
      if (isBlurEvent) {
        field._f.onBlur && field._f.onBlur(event);
        delayErrorCallback && delayErrorCallback(0);
      } else if (field._f.onChange) {
        field._f.onChange(event);
      }
      const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent, false);
      const shouldRender = !isEmptyObject(fieldState) || watched;
      !isBlurEvent && _subjects.values.next({
        name,
        type: event.type,
        values: { ..._formValues }
      });
      if (shouldSkipValidation) {
        _proxyFormState.isValid && _updateValid();
        return shouldRender && _subjects.state.next({ name, ...watched ? {} : fieldState });
      }
      !isBlurEvent && watched && _subjects.state.next({ ..._formState });
      _updateIsValidating(true);
      if (_options.resolver) {
        const { errors } = await _executeSchema([name]);
        _updateIsFieldValueUpdated(fieldValue);
        if (isFieldValueUpdated) {
          const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
          const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
          error = errorLookupResult.error;
          name = errorLookupResult.name;
          isValid = isEmptyObject(errors);
        }
      } else {
        error = (await validateField(field, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
        _updateIsFieldValueUpdated(fieldValue);
        if (isFieldValueUpdated) {
          if (error) {
            isValid = false;
          } else if (_proxyFormState.isValid) {
            isValid = await executeBuiltInValidation(_fields, true);
          }
        }
      }
      if (isFieldValueUpdated) {
        field._f.deps && trigger(field._f.deps);
        shouldRenderByError(name, isValid, error, fieldState);
      }
    }
  };
  const _focusInput = (ref, key) => {
    if (get(_formState.errors, key) && ref.focus) {
      ref.focus();
      return 1;
    }
    return;
  };
  const trigger = async (name, options = {}) => {
    let isValid;
    let validationResult;
    const fieldNames = convertToArrayPayload(name);
    _updateIsValidating(true);
    if (_options.resolver) {
      const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
      isValid = isEmptyObject(errors);
      validationResult = name ? !fieldNames.some((name2) => get(errors, name2)) : isValid;
    } else if (name) {
      validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {
        const field = get(_fields, fieldName);
        return await executeBuiltInValidation(field && field._f ? { [fieldName]: field } : field);
      }))).every(Boolean);
      !(!validationResult && !_formState.isValid) && _updateValid();
    } else {
      validationResult = isValid = await executeBuiltInValidation(_fields);
    }
    _subjects.state.next({
      ...!isString(name) || _proxyFormState.isValid && isValid !== _formState.isValid ? {} : { name },
      ..._options.resolver || !name ? { isValid } : {},
      errors: _formState.errors,
      isValidating: false
    });
    options.shouldFocus && !validationResult && iterateFieldsByAction(_fields, _focusInput, name ? fieldNames : _names.mount);
    return validationResult;
  };
  const getValues = (fieldNames) => {
    const values = {
      ..._defaultValues,
      ..._state.mount ? _formValues : {}
    };
    return isUndefined(fieldNames) ? values : isString(fieldNames) ? get(values, fieldNames) : fieldNames.map((name) => get(values, name));
  };
  const getFieldState = (name, formState) => ({
    invalid: !!get((formState || _formState).errors, name),
    isDirty: !!get((formState || _formState).dirtyFields, name),
    isTouched: !!get((formState || _formState).touchedFields, name),
    error: get((formState || _formState).errors, name)
  });
  const clearErrors = (name) => {
    name && convertToArrayPayload(name).forEach((inputName) => unset(_formState.errors, inputName));
    _subjects.state.next({
      errors: name ? _formState.errors : {}
    });
  };
  const setError = (name, error, options) => {
    const ref = (get(_fields, name, { _f: {} })._f || {}).ref;
    set(_formState.errors, name, {
      ...error,
      ref
    });
    _subjects.state.next({
      name,
      errors: _formState.errors,
      isValid: false
    });
    options && options.shouldFocus && ref && ref.focus && ref.focus();
  };
  const watch = (name, defaultValue) => isFunction(name) ? _subjects.values.subscribe({
    next: (payload) => name(_getWatch(void 0, defaultValue), payload)
  }) : _getWatch(name, defaultValue, true);
  const unregister = (name, options = {}) => {
    for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
      _names.mount.delete(fieldName);
      _names.array.delete(fieldName);
      if (!options.keepValue) {
        unset(_fields, fieldName);
        unset(_formValues, fieldName);
      }
      !options.keepError && unset(_formState.errors, fieldName);
      !options.keepDirty && unset(_formState.dirtyFields, fieldName);
      !options.keepTouched && unset(_formState.touchedFields, fieldName);
      !_options.shouldUnregister && !options.keepDefaultValue && unset(_defaultValues, fieldName);
    }
    _subjects.values.next({
      values: { ..._formValues }
    });
    _subjects.state.next({
      ..._formState,
      ...!options.keepDirty ? {} : { isDirty: _getDirty() }
    });
    !options.keepIsValid && _updateValid();
  };
  const _updateDisabledField = ({ disabled, name, field, fields, value }) => {
    if (isBoolean(disabled)) {
      const inputValue = disabled ? void 0 : isUndefined(value) ? getFieldValue(field ? field._f : get(fields, name)._f) : value;
      set(_formValues, name, inputValue);
      updateTouchAndDirty(name, inputValue, false, false, true);
    }
  };
  const register = (name, options = {}) => {
    let field = get(_fields, name);
    const disabledIsDefined = isBoolean(options.disabled);
    set(_fields, name, {
      ...field || {},
      _f: {
        ...field && field._f ? field._f : { ref: { name } },
        name,
        mount: true,
        ...options
      }
    });
    _names.mount.add(name);
    if (field) {
      _updateDisabledField({
        field,
        disabled: options.disabled,
        name,
        value: options.value
      });
    } else {
      updateValidAndValue(name, true, options.value);
    }
    return {
      ...disabledIsDefined ? { disabled: options.disabled } : {},
      ..._options.progressive ? {
        required: !!options.required,
        min: getRuleValue(options.min),
        max: getRuleValue(options.max),
        minLength: getRuleValue(options.minLength),
        maxLength: getRuleValue(options.maxLength),
        pattern: getRuleValue(options.pattern)
      } : {},
      name,
      onChange,
      onBlur: onChange,
      ref: (ref) => {
        if (ref) {
          register(name, options);
          field = get(_fields, name);
          const fieldRef = isUndefined(ref.value) ? ref.querySelectorAll ? ref.querySelectorAll("input,select,textarea")[0] || ref : ref : ref;
          const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
          const refs = field._f.refs || [];
          if (radioOrCheckbox ? refs.find((option) => option === fieldRef) : fieldRef === field._f.ref) {
            return;
          }
          set(_fields, name, {
            _f: {
              ...field._f,
              ...radioOrCheckbox ? {
                refs: [
                  ...refs.filter(live),
                  fieldRef,
                  ...Array.isArray(get(_defaultValues, name)) ? [{}] : []
                ],
                ref: { type: fieldRef.type, name }
              } : { ref: fieldRef }
            }
          });
          updateValidAndValue(name, false, void 0, fieldRef);
        } else {
          field = get(_fields, name, {});
          if (field._f) {
            field._f.mount = false;
          }
          (_options.shouldUnregister || options.shouldUnregister) && !(isNameInFieldArray(_names.array, name) && _state.action) && _names.unMount.add(name);
        }
      }
    };
  };
  const _focusError = () => _options.shouldFocusError && iterateFieldsByAction(_fields, _focusInput, _names.mount);
  const _disableForm = (disabled) => {
    if (isBoolean(disabled)) {
      _subjects.state.next({ disabled });
      iterateFieldsByAction(_fields, (ref, name) => {
        let requiredDisabledState = disabled;
        const currentField = get(_fields, name);
        if (currentField && isBoolean(currentField._f.disabled)) {
          requiredDisabledState || (requiredDisabledState = currentField._f.disabled);
        }
        ref.disabled = requiredDisabledState;
      }, 0, false);
    }
  };
  const handleSubmit = (onValid, onInvalid) => async (e2) => {
    if (e2) {
      e2.preventDefault && e2.preventDefault();
      e2.persist && e2.persist();
    }
    let fieldValues = cloneObject(_formValues);
    _subjects.state.next({
      isSubmitting: true
    });
    if (_options.resolver) {
      const { errors, values } = await _executeSchema();
      _formState.errors = errors;
      fieldValues = values;
    } else {
      await executeBuiltInValidation(_fields);
    }
    unset(_formState.errors, "root");
    if (isEmptyObject(_formState.errors)) {
      _subjects.state.next({
        errors: {}
      });
      await onValid(fieldValues, e2);
    } else {
      if (onInvalid) {
        await onInvalid({ ..._formState.errors }, e2);
      }
      _focusError();
      setTimeout(_focusError);
    }
    _subjects.state.next({
      isSubmitted: true,
      isSubmitting: false,
      isSubmitSuccessful: isEmptyObject(_formState.errors),
      submitCount: _formState.submitCount + 1,
      errors: _formState.errors
    });
  };
  const resetField = (name, options = {}) => {
    if (get(_fields, name)) {
      if (isUndefined(options.defaultValue)) {
        setValue(name, cloneObject(get(_defaultValues, name)));
      } else {
        setValue(name, options.defaultValue);
        set(_defaultValues, name, cloneObject(options.defaultValue));
      }
      if (!options.keepTouched) {
        unset(_formState.touchedFields, name);
      }
      if (!options.keepDirty) {
        unset(_formState.dirtyFields, name);
        _formState.isDirty = options.defaultValue ? _getDirty(name, cloneObject(get(_defaultValues, name))) : _getDirty();
      }
      if (!options.keepError) {
        unset(_formState.errors, name);
        _proxyFormState.isValid && _updateValid();
      }
      _subjects.state.next({ ..._formState });
    }
  };
  const _reset = (formValues, keepStateOptions = {}) => {
    const updatedValues = formValues ? cloneObject(formValues) : _defaultValues;
    const cloneUpdatedValues = cloneObject(updatedValues);
    const values = formValues && !isEmptyObject(formValues) ? cloneUpdatedValues : _defaultValues;
    if (!keepStateOptions.keepDefaultValues) {
      _defaultValues = updatedValues;
    }
    if (!keepStateOptions.keepValues) {
      if (keepStateOptions.keepDirtyValues) {
        for (const fieldName of _names.mount) {
          get(_formState.dirtyFields, fieldName) ? set(values, fieldName, get(_formValues, fieldName)) : setValue(fieldName, get(values, fieldName));
        }
      } else {
        if (isWeb && isUndefined(formValues)) {
          for (const name of _names.mount) {
            const field = get(_fields, name);
            if (field && field._f) {
              const fieldReference = Array.isArray(field._f.refs) ? field._f.refs[0] : field._f.ref;
              if (isHTMLElement(fieldReference)) {
                const form = fieldReference.closest("form");
                if (form) {
                  form.reset();
                  break;
                }
              }
            }
          }
        }
        _fields = {};
      }
      _formValues = props.shouldUnregister ? keepStateOptions.keepDefaultValues ? cloneObject(_defaultValues) : {} : cloneObject(values);
      _subjects.array.next({
        values: { ...values }
      });
      _subjects.values.next({
        values: { ...values }
      });
    }
    _names = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: false,
      focus: ""
    };
    !_state.mount && flushRootRender();
    _state.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid;
    _state.watch = !!props.shouldUnregister;
    _subjects.state.next({
      submitCount: keepStateOptions.keepSubmitCount ? _formState.submitCount : 0,
      isDirty: keepStateOptions.keepDirty ? _formState.isDirty : !!(keepStateOptions.keepDefaultValues && !deepEqual(formValues, _defaultValues)),
      isSubmitted: keepStateOptions.keepIsSubmitted ? _formState.isSubmitted : false,
      dirtyFields: keepStateOptions.keepDirtyValues ? _formState.dirtyFields : keepStateOptions.keepDefaultValues && formValues ? getDirtyFields(_defaultValues, formValues) : {},
      touchedFields: keepStateOptions.keepTouched ? _formState.touchedFields : {},
      errors: keepStateOptions.keepErrors ? _formState.errors : {},
      isSubmitSuccessful: keepStateOptions.keepIsSubmitSuccessful ? _formState.isSubmitSuccessful : false,
      isSubmitting: false
    });
  };
  const reset = (formValues, keepStateOptions) => _reset(isFunction(formValues) ? formValues(_formValues) : formValues, keepStateOptions);
  const setFocus = (name, options = {}) => {
    const field = get(_fields, name);
    const fieldReference = field && field._f;
    if (fieldReference) {
      const fieldRef = fieldReference.refs ? fieldReference.refs[0] : fieldReference.ref;
      if (fieldRef.focus) {
        fieldRef.focus();
        options.shouldSelect && fieldRef.select();
      }
    }
  };
  const _updateFormState = (updatedFormState) => {
    _formState = {
      ..._formState,
      ...updatedFormState
    };
  };
  const _resetDefaultValues = () => isFunction(_options.defaultValues) && _options.defaultValues().then((values) => {
    reset(values, _options.resetOptions);
    _subjects.state.next({
      isLoading: false
    });
  });
  return {
    control: {
      register,
      unregister,
      getFieldState,
      handleSubmit,
      setError,
      _executeSchema,
      _getWatch,
      _getDirty,
      _updateValid,
      _removeUnmounted,
      _updateFieldArray,
      _updateDisabledField,
      _getFieldArray,
      _reset,
      _resetDefaultValues,
      _updateFormState,
      _disableForm,
      _subjects,
      _proxyFormState,
      _setErrors,
      get _fields() {
        return _fields;
      },
      get _formValues() {
        return _formValues;
      },
      get _state() {
        return _state;
      },
      set _state(value) {
        _state = value;
      },
      get _defaultValues() {
        return _defaultValues;
      },
      get _names() {
        return _names;
      },
      set _names(value) {
        _names = value;
      },
      get _formState() {
        return _formState;
      },
      set _formState(value) {
        _formState = value;
      },
      get _options() {
        return _options;
      },
      set _options(value) {
        _options = {
          ..._options,
          ...value
        };
      }
    },
    trigger,
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    resetField,
    clearErrors,
    unregister,
    setError,
    setFocus,
    getFieldState
  };
}
function useForm(props = {}) {
  const _formControl = React.useRef();
  const _values = React.useRef();
  const [formState, updateFormState] = React.useState({
    isDirty: false,
    isValidating: false,
    isLoading: isFunction(props.defaultValues),
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: props.errors || {},
    disabled: props.disabled || false,
    defaultValues: isFunction(props.defaultValues) ? void 0 : props.defaultValues
  });
  if (!_formControl.current) {
    _formControl.current = {
      ...createFormControl(props, () => updateFormState((formState2) => ({ ...formState2 }))),
      formState
    };
  }
  const control = _formControl.current.control;
  control._options = props;
  useSubscribe({
    subject: control._subjects.state,
    next: (value) => {
      if (shouldRenderFormState(value, control._proxyFormState, control._updateFormState, true)) {
        updateFormState({ ...control._formState });
      }
    }
  });
  React.useEffect(() => control._disableForm(props.disabled), [control, props.disabled]);
  React.useEffect(() => {
    if (control._proxyFormState.isDirty) {
      const isDirty = control._getDirty();
      if (isDirty !== formState.isDirty) {
        control._subjects.state.next({
          isDirty
        });
      }
    }
  }, [control, formState.isDirty]);
  React.useEffect(() => {
    if (props.values && !deepEqual(props.values, _values.current)) {
      control._reset(props.values, control._options.resetOptions);
      _values.current = props.values;
      updateFormState((state) => ({ ...state }));
    } else {
      control._resetDefaultValues();
    }
  }, [props.values, control]);
  React.useEffect(() => {
    if (props.errors) {
      control._setErrors(props.errors);
    }
  }, [props.errors, control]);
  React.useEffect(() => {
    if (!control._state.mount) {
      control._updateValid();
      control._state.mount = true;
    }
    if (control._state.watch) {
      control._state.watch = false;
      control._subjects.state.next({ ...control._formState });
    }
    control._removeUnmounted();
  });
  _formControl.current.formState = getProxyFormState(formState, control);
  return _formControl.current;
}
const TextInput = (props) => {
  const { name, type, onChange, onBlur, value, inputRef, isInvalid, errorMessage, minimal, ...rest } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        className: `w-full rounded-md px-2 py-1 focus:outline-none focus:ring focus:ring-yellow-500`,
        onChange,
        type,
        onBlur,
        value: value ?? "",
        ref: inputRef,
        name,
        ...rest
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Only, { when: !minimal, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `opacity-0 h-5 text-rose-600 ${isInvalid ? "opacity-100" : ""}`, children: errorMessage }) })
  ] });
};
const ControlledInput = (props) => {
  const { label, control, name, rules: rules2, isRequired, type = "text", labelClassName, minimal = false, ...rest } = props;
  const { field, fieldState } = useController({ control, name, rules: rules2 });
  const { onChange, onBlur, value, ref } = field;
  const { error, isTouched, isDirty } = fieldState;
  const errorMessage = error == null ? void 0 : error.message;
  const isInvalid = errorMessage !== void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-y-1 justify-items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Only, { when: !!label && !minimal, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "label",
      {
        className: `text-color-bold-regular text-bold-m ${labelClassName ? labelClassName : ""}`,
        children: [
          label,
          " ",
          isRequired && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-color-primary-regular", children: "*" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { isInvalid, errorMessage, minimal, onBlur, onChange, inputRef: ref, value, type, ...rest })
  ] });
};
const requiredLatLonMessage = "тут щось потрібно";
const rules$3 = {
  required: { value: true, message: requiredLatLonMessage }
};
const AzimuthInput = () => {
  const { control } = useFormContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ControlledInput, { control, name: `azimuth`, rules: rules$3, label: "Азимут", type: "number", min: 0, max: 360, step: 0.1 });
};
const VehicleAzimuthCard = (props) => {
  const { savedVehicle, update } = props;
  const form = useForm({
    defaultValues: {
      azimuth: savedVehicle.azimuth
    },
    mode: "onTouched"
  });
  if (savedVehicle === void 0)
    return null;
  const saveData = () => {
    console.log("saveData", savedVehicle);
    const values = form.getValues();
    const azimuth = values.azimuth;
    if (azimuth !== savedVehicle.azimuth) {
      update({ ...savedVehicle, azimuth });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormProvider, { ...form, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-flow-row-dense broder-gray-100 border-2 rounded-md p-1 bg-primary-background-dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-flow-col items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: savedVehicle.name }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("form", { className: "flex flex-col", onBlur: saveData, onSubmit: () => {
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AzimuthInput, {}) }, savedVehicle.id) })
  ] }) });
};
const ElintAzimuthCardsList = () => {
  const vehicles = useElintVehiclesStore((state) => state.vehicles);
  const update = useElintVehiclesStore((state) => state.update);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 tablet:grid-cols-3", children: vehicles.map((v2) => /* @__PURE__ */ jsxRuntimeExports.jsx(VehicleAzimuthCard, { savedVehicle: v2, update }, v2.id)) });
};
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = React.createContext && React.createContext(DefaultContext);
var __assign = globalThis && globalThis.__assign || function() {
  __assign = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
var __rest = globalThis && globalThis.__rest || function(s, e2) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return React.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return React.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return React.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? React.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}
function BsPlusCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" } }, { "tag": "path", "attr": { "d": "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" } }] })(props);
}
function BiSolidPencil(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M8.707 19.707 18 10.414 13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586 19.414 9 21 7.414z" } }] })(props);
}
function BiSolidSave(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M5 21h14a2 2 0 0 0 2-2V8l-5-5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zM7 5h4v2h2V5h2v4H7V5zm0 8h10v6H7v-6z" } }] })(props);
}
function BiSolidTrashAlt(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z" } }] })(props);
}
const rules$2 = {
  required: { value: true, message: requiredLatLonMessage }
};
const LatitudeInput = () => {
  const { control } = useFormContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ControlledInput, { control, name: `latitude`, rules: rules$2, label: "Широта", type: "number", min: -90, max: 90, step: 1e-5 });
};
const rules$1 = {
  required: { value: true, message: requiredLatLonMessage }
};
const LongitudeInput = () => {
  const { control } = useFormContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ControlledInput, { control, name: `longitude`, rules: rules$1, label: "Довгота", type: "number", min: -180, max: 180, step: 1e-5 });
};
const rules = {
  required: { value: true, message: requiredLatLonMessage }
};
const NameInput = () => {
  const { control } = useFormContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ControlledInput, { control, name: `name`, rules, label: "Ім'я", type: "string", minimal: true, min: -90, max: 90, step: 1e-5 });
};
function VehicleCoordinatesCard(props) {
  var _a, _b;
  const { savedVehicle, deleteById, update } = props;
  const [isRenaming, setIsRenaming] = reactExports.useState(false);
  const form = useForm({
    defaultValues: {
      latitude: (_a = savedVehicle == null ? void 0 : savedVehicle.latitude) == null ? void 0 : _a.toString(),
      longitude: (_b = savedVehicle == null ? void 0 : savedVehicle.longitude) == null ? void 0 : _b.toString(),
      name: savedVehicle == null ? void 0 : savedVehicle.name
    },
    mode: "onTouched"
  });
  if (savedVehicle === void 0)
    return null;
  const saveData = () => {
    console.log("saveData", savedVehicle);
    const values = form.getValues();
    const lat = parseFloat(values.latitude);
    const lon = parseFloat(values.longitude);
    const name = values.name;
    if (lat !== savedVehicle.latitude || lon !== savedVehicle.longitude || name !== savedVehicle.name) {
      update({ ...savedVehicle, latitude: lat, longitude: lon, name });
    }
    setIsRenaming(false);
  };
  const deleteVehicle = () => {
    log("deleteVehicle", savedVehicle);
    deleteById(savedVehicle.id);
  };
  const startRename = () => {
    setIsRenaming(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormProvider, { ...form, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-flow-row-dense broder-gray-100 border-2 rounded-md p-2 bg-primary-background-dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-flow-col items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Only, { when: isRenaming, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(NameInput, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BiSolidSave, { className: "ml-2 text-2xl", onClick: saveData })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Only, { when: !isRenaming, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: savedVehicle.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BiSolidPencil, { className: "ml-2", onClick: startRename })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl", onClick: deleteVehicle, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BiSolidTrashAlt, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("form", { className: "flex flex-col", onBlur: saveData, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LatitudeInput, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LongitudeInput, {})
    ] }, savedVehicle.id) })
  ] }) });
}
const ElintVehicleCardsList = () => {
  const vehicles = useElintVehiclesStore((state) => state.vehicles);
  const addNew = useElintVehiclesStore((state) => state.addNew);
  const deleteById = useElintVehiclesStore((state) => state.deleteById);
  const update = useElintVehiclesStore((state) => state.update);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 tablet:grid-cols-3", children: [
    vehicles.map((v2) => /* @__PURE__ */ jsxRuntimeExports.jsx(VehicleCoordinatesCard, { savedVehicle: v2, deleteById, update }, v2.id)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl max-h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "grid gap-4 grid-flow-col items-center justify-center max-w-full h-16 bg-primary-background-dark", onClick: addNew, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BsPlusCircle, {}) }) })
  ] });
};
const VehicleMinimalCard = reactExports.memo((props) => {
  const { savedVehicle } = props;
  if (savedVehicle === void 0)
    return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid justify-center text-sm overflow-ellipsis min-w-[150px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: savedVehicle.name }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "whitespace-nowrap overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Ш: " }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: savedVehicle.latitude })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Д: " }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: savedVehicle.longitude })
    ] })
  ] }) });
});
const ElintVehicleMinimalList = () => {
  const vehicles = useElintVehiclesStore((state) => state.vehicles);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 grid-cols-2 justify-between tablet:grid-cols-6", children: vehicles.map((v2) => /* @__PURE__ */ jsxRuntimeExports.jsx(VehicleMinimalCard, { savedVehicle: v2 }, v2.id)) });
};
const ElintVehicles = () => {
  const [coordsFormVisible, setCoordsFormVisible] = reactExports.useState(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2 rounded-md shadow-lg p-2 bg-primary-background-darker", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ELINTs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Only, { when: coordsFormVisible, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "bg-primary-background-dark", onClick: () => setCoordsFormVisible(false), children: "Save" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Only, { when: !coordsFormVisible, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "bg-primary-background-dark", onClick: () => setCoordsFormVisible(true), children: "Edit" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Only, { when: coordsFormVisible, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ElintVehicleCardsList, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Only, { when: !coordsFormVisible, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ElintVehicleMinimalList, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ElintAzimuthCardsList, {})
  ] });
};
const EwAzimuthCardsList = () => {
  useEwVehiclesStore((state) => state.vehicles);
  useEwVehiclesStore((state) => state.update);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 tablet:grid-cols-3" });
};
const EwVehicleCoordsList = () => {
  const vehicles = useEwVehiclesStore((state) => state.vehicles);
  const addNew = useEwVehiclesStore((state) => state.addNew);
  const deleteById = useEwVehiclesStore((state) => state.deleteById);
  const update = useEwVehiclesStore((state) => state.update);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 tablet:grid-cols-3", children: [
    vehicles.map((v2) => /* @__PURE__ */ jsxRuntimeExports.jsx(VehicleCoordinatesCard, { savedVehicle: v2, update, deleteById }, v2.id)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl max-h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "grid gap-4 grid-flow-col items-center justify-center max-w-full h-16 bg-primary-background-dark", onClick: addNew, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BsPlusCircle, {}) }) })
  ] });
};
const EwVehicleMinimalList = () => {
  const vehicles = useEwVehiclesStore((state) => state.vehicles);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 grid-auto-fit-[10rem] justify-between", children: vehicles.map(
    (v2) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-[150px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EwVehicleMinimalCard, { savedVehicle: v2 }, v2.id) })
  ) });
};
const EwVehicleMinimalCard = (props) => {
  const { savedVehicle } = props;
  const ewAzimuths = useEwAzimuths();
  const ewAzimuth = ewAzimuths.find((ew) => ew.ewVehicleId === savedVehicle.id);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 grid-auto-fit-[10rem] justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-[150px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(VehicleMinimalCard, { savedVehicle }, savedVehicle.id),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Аз: " }),
      ewAzimuth == null ? void 0 : ewAzimuth.azimuth
    ] })
  ] }) });
};
const EwVehicles = () => {
  const [coordsFormVisible, setCoordsFormVisible] = reactExports.useState(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2 rounded-md shadow-lg p-2 bg-primary-background-darker", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "EWs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Only, { when: coordsFormVisible, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "bg-primary-background-dark", onClick: () => setCoordsFormVisible(false), children: "Save" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Only, { when: !coordsFormVisible, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "bg-primary-background-dark", onClick: () => setCoordsFormVisible(true), children: "Edit" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Only, { when: coordsFormVisible, children: /* @__PURE__ */ jsxRuntimeExports.jsx(EwVehicleCoordsList, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Only, { when: !coordsFormVisible, children: /* @__PURE__ */ jsxRuntimeExports.jsx(EwVehicleMinimalList, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EwAzimuthCardsList, {})
  ] });
};
const MainPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 relative h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ElintVehicles, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EwVehicles, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TargetCard, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GoogleMap, {})
  ] });
};
function err(message) {
  const error = new Error(message);
  if (error.stack === void 0) {
    try {
      throw error;
    } catch (_) {
    }
  }
  return error;
}
var err_1 = err;
var Recoil_err = err_1;
function isPromise(p2) {
  return !!p2 && typeof p2.then === "function";
}
var Recoil_isPromise = isPromise;
function nullthrows(x2, message) {
  if (x2 != null) {
    return x2;
  }
  throw Recoil_err(message !== null && message !== void 0 ? message : "Got unexpected null or undefined");
}
var Recoil_nullthrows = nullthrows;
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
class BaseLoadable {
  getValue() {
    throw Recoil_err("BaseLoadable");
  }
  toPromise() {
    throw Recoil_err("BaseLoadable");
  }
  valueMaybe() {
    throw Recoil_err("BaseLoadable");
  }
  valueOrThrow() {
    throw Recoil_err(`Loadable expected value, but in "${this.state}" state`);
  }
  promiseMaybe() {
    throw Recoil_err("BaseLoadable");
  }
  promiseOrThrow() {
    throw Recoil_err(`Loadable expected promise, but in "${this.state}" state`);
  }
  errorMaybe() {
    throw Recoil_err("BaseLoadable");
  }
  errorOrThrow() {
    throw Recoil_err(`Loadable expected error, but in "${this.state}" state`);
  }
  is(other) {
    return other.state === this.state && other.contents === this.contents;
  }
  map(_map) {
    throw Recoil_err("BaseLoadable");
  }
}
class ValueLoadable extends BaseLoadable {
  constructor(value) {
    super();
    _defineProperty(this, "state", "hasValue");
    _defineProperty(this, "contents", void 0);
    this.contents = value;
  }
  getValue() {
    return this.contents;
  }
  toPromise() {
    return Promise.resolve(this.contents);
  }
  valueMaybe() {
    return this.contents;
  }
  valueOrThrow() {
    return this.contents;
  }
  promiseMaybe() {
    return void 0;
  }
  errorMaybe() {
    return void 0;
  }
  map(map) {
    try {
      const next = map(this.contents);
      return Recoil_isPromise(next) ? loadableWithPromise(next) : isLoadable(next) ? next : loadableWithValue(next);
    } catch (e2) {
      return Recoil_isPromise(e2) ? (
        // If we "suspended", then try again.
        // errors and subsequent retries will be handled in 'loading' case
        // $FlowFixMe[prop-missing]
        loadableWithPromise(e2.next(() => this.map(map)))
      ) : loadableWithError(e2);
    }
  }
}
class ErrorLoadable extends BaseLoadable {
  constructor(error) {
    super();
    _defineProperty(this, "state", "hasError");
    _defineProperty(this, "contents", void 0);
    this.contents = error;
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return Promise.reject(this.contents);
  }
  valueMaybe() {
    return void 0;
  }
  promiseMaybe() {
    return void 0;
  }
  errorMaybe() {
    return this.contents;
  }
  errorOrThrow() {
    return this.contents;
  }
  map(_map) {
    return this;
  }
}
class LoadingLoadable extends BaseLoadable {
  constructor(promise) {
    super();
    _defineProperty(this, "state", "loading");
    _defineProperty(this, "contents", void 0);
    this.contents = promise;
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return this.contents;
  }
  valueMaybe() {
    return void 0;
  }
  promiseMaybe() {
    return this.contents;
  }
  promiseOrThrow() {
    return this.contents;
  }
  errorMaybe() {
    return void 0;
  }
  map(map) {
    return loadableWithPromise(this.contents.then((value) => {
      const next = map(value);
      if (isLoadable(next)) {
        const nextLoadable = next;
        switch (nextLoadable.state) {
          case "hasValue":
            return nextLoadable.contents;
          case "hasError":
            throw nextLoadable.contents;
          case "loading":
            return nextLoadable.contents;
        }
      }
      return next;
    }).catch((e2) => {
      if (Recoil_isPromise(e2)) {
        return e2.then(() => this.map(map).contents);
      }
      throw e2;
    }));
  }
}
function loadableWithValue(value) {
  return Object.freeze(new ValueLoadable(value));
}
function loadableWithError(error) {
  return Object.freeze(new ErrorLoadable(error));
}
function loadableWithPromise(promise) {
  return Object.freeze(new LoadingLoadable(promise));
}
function loadableLoading() {
  return Object.freeze(new LoadingLoadable(new Promise(() => {
  })));
}
function loadableAllArray(inputs) {
  return inputs.every((i) => i.state === "hasValue") ? loadableWithValue(inputs.map((i) => i.contents)) : inputs.some((i) => i.state === "hasError") ? loadableWithError(Recoil_nullthrows(inputs.find((i) => i.state === "hasError"), "Invalid loadable passed to loadableAll").contents) : loadableWithPromise(Promise.all(inputs.map((i) => i.contents)));
}
function loadableAll(inputs) {
  const unwrapedInputs = Array.isArray(inputs) ? inputs : Object.getOwnPropertyNames(inputs).map((key) => inputs[key]);
  const normalizedInputs = unwrapedInputs.map((x2) => isLoadable(x2) ? x2 : Recoil_isPromise(x2) ? loadableWithPromise(x2) : loadableWithValue(x2));
  const output = loadableAllArray(normalizedInputs);
  return Array.isArray(inputs) ? (
    // $FlowIssue[incompatible-return]
    output
  ) : (
    // Object.getOwnPropertyNames() has consistent key ordering with ES6
    // $FlowIssue[incompatible-call]
    output.map((outputs) => Object.getOwnPropertyNames(inputs).reduce(
      // $FlowFixMe[invalid-computed-prop]
      (out, key, idx) => ({
        ...out,
        [key]: outputs[idx]
      }),
      {}
    ))
  );
}
function isLoadable(x2) {
  return x2 instanceof BaseLoadable;
}
const LoadableStaticInterface = {
  of: (value) => Recoil_isPromise(value) ? loadableWithPromise(value) : isLoadable(value) ? value : loadableWithValue(value),
  error: (error) => loadableWithError(error),
  // $FlowIssue[incompatible-return]
  loading: () => loadableLoading(),
  // $FlowIssue[unclear-type]
  all: loadableAll,
  isLoadable
};
var Recoil_Loadable = {
  loadableWithValue,
  loadableWithError,
  loadableWithPromise,
  loadableLoading,
  loadableAll,
  isLoadable,
  RecoilLoadable: LoadableStaticInterface
};
var Recoil_Loadable_1 = Recoil_Loadable.loadableWithValue;
var Recoil_Loadable_2 = Recoil_Loadable.loadableWithError;
var Recoil_Loadable_3 = Recoil_Loadable.loadableWithPromise;
var Recoil_Loadable_4 = Recoil_Loadable.loadableLoading;
var Recoil_Loadable_5 = Recoil_Loadable.loadableAll;
var Recoil_Loadable_6 = Recoil_Loadable.isLoadable;
var Recoil_Loadable_7 = Recoil_Loadable.RecoilLoadable;
var Recoil_Loadable$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  loadableWithValue: Recoil_Loadable_1,
  loadableWithError: Recoil_Loadable_2,
  loadableWithPromise: Recoil_Loadable_3,
  loadableLoading: Recoil_Loadable_4,
  loadableAll: Recoil_Loadable_5,
  isLoadable: Recoil_Loadable_6,
  RecoilLoadable: Recoil_Loadable_7
});
const env = {
  RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: true,
  // Note: RECOIL_GKS_ENABLED settings will only be honored in OSS builds of Recoil
  RECOIL_GKS_ENABLED: /* @__PURE__ */ new Set(["recoil_hamt_2020", "recoil_sync_external_store", "recoil_suppress_rerender_in_callback", "recoil_memory_managament_2020"])
};
function readProcessEnvBooleanFlag(name, set2) {
  var _process$env$name, _process$env$name$toL;
  const sanitizedValue = (_process$env$name = process.env[name]) === null || _process$env$name === void 0 ? void 0 : (_process$env$name$toL = _process$env$name.toLowerCase()) === null || _process$env$name$toL === void 0 ? void 0 : _process$env$name$toL.trim();
  if (sanitizedValue == null || sanitizedValue === "") {
    return;
  }
  const allowedValues = ["true", "false"];
  if (!allowedValues.includes(sanitizedValue)) {
    throw Recoil_err(`({}).${name} value must be 'true', 'false', or empty: ${sanitizedValue}`);
  }
  set2(sanitizedValue === "true");
}
function readProcessEnvStringArrayFlag(name, set2) {
  var _process$env$name2;
  const sanitizedValue = (_process$env$name2 = process.env[name]) === null || _process$env$name2 === void 0 ? void 0 : _process$env$name2.trim();
  if (sanitizedValue == null || sanitizedValue === "") {
    return;
  }
  set2(sanitizedValue.split(/\s*,\s*|\s+/));
}
function applyProcessEnvFlagOverrides() {
  var _process;
  if (typeof process === "undefined") {
    return;
  }
  if (((_process = process) === null || _process === void 0 ? void 0 : _process.env) == null) {
    return;
  }
  readProcessEnvBooleanFlag("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", (value) => {
    env.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = value;
  });
  readProcessEnvStringArrayFlag("RECOIL_GKS_ENABLED", (value) => {
    value.forEach((gk2) => {
      env.RECOIL_GKS_ENABLED.add(gk2);
    });
  });
}
applyProcessEnvFlagOverrides();
var Recoil_RecoilEnv = env;
function Recoil_gkx_OSS(gk2) {
  return Recoil_RecoilEnv.RECOIL_GKS_ENABLED.has(gk2);
}
Recoil_gkx_OSS.setPass = (gk2) => {
  Recoil_RecoilEnv.RECOIL_GKS_ENABLED.add(gk2);
};
Recoil_gkx_OSS.setFail = (gk2) => {
  Recoil_RecoilEnv.RECOIL_GKS_ENABLED.delete(gk2);
};
Recoil_gkx_OSS.clear = () => {
  Recoil_RecoilEnv.RECOIL_GKS_ENABLED.clear();
};
var Recoil_gkx = Recoil_gkx_OSS;
function recoverableViolation(message, _projectName, {
  error
} = {}) {
  return null;
}
var recoverableViolation_1 = recoverableViolation;
var Recoil_recoverableViolation = recoverableViolation_1;
var _createMutableSource, _useMutableSource, _useSyncExternalStore;
const createMutableSource = (
  // flowlint-next-line unclear-type:off
  (_createMutableSource = React.createMutableSource) !== null && _createMutableSource !== void 0 ? _createMutableSource : React.unstable_createMutableSource
);
const useMutableSource = (
  // flowlint-next-line unclear-type:off
  (_useMutableSource = React.useMutableSource) !== null && _useMutableSource !== void 0 ? _useMutableSource : React.unstable_useMutableSource
);
const useSyncExternalStore = (
  // flowlint-next-line unclear-type:off
  (_useSyncExternalStore = React.useSyncExternalStore) !== null && _useSyncExternalStore !== void 0 ? _useSyncExternalStore : (
    // flowlint-next-line unclear-type:off
    React.unstable_useSyncExternalStore
  )
);
function currentRendererSupportsUseSyncExternalStore() {
  var _ReactCurrentDispatch;
  const {
    ReactCurrentDispatcher,
    ReactCurrentOwner
  } = (
    /* $FlowFixMe[prop-missing] This workaround was approved as a safer mechanism
     * to detect if the current renderer supports useSyncExternalStore()
     * https://fb.workplace.com/groups/reactjs/posts/9558682330846963/ */
    React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  );
  const dispatcher = (_ReactCurrentDispatch = ReactCurrentDispatcher === null || ReactCurrentDispatcher === void 0 ? void 0 : ReactCurrentDispatcher.current) !== null && _ReactCurrentDispatch !== void 0 ? _ReactCurrentDispatch : ReactCurrentOwner.currentDispatcher;
  const isUseSyncExternalStoreSupported = dispatcher.useSyncExternalStore != null;
  return isUseSyncExternalStoreSupported;
}
function reactMode() {
  if (Recoil_gkx("recoil_transition_support")) {
    return {
      mode: "TRANSITION_SUPPORT",
      early: true,
      concurrent: true
    };
  }
  if (Recoil_gkx("recoil_sync_external_store") && useSyncExternalStore != null) {
    return {
      mode: "SYNC_EXTERNAL_STORE",
      early: true,
      concurrent: false
    };
  }
  if (Recoil_gkx("recoil_mutable_source") && useMutableSource != null && typeof window !== "undefined" && !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE) {
    return Recoil_gkx("recoil_suppress_rerender_in_callback") ? {
      mode: "MUTABLE_SOURCE",
      early: true,
      concurrent: true
    } : {
      mode: "MUTABLE_SOURCE",
      early: false,
      concurrent: false
    };
  }
  return Recoil_gkx("recoil_suppress_rerender_in_callback") ? {
    mode: "LEGACY",
    early: true,
    concurrent: false
  } : {
    mode: "LEGACY",
    early: false,
    concurrent: false
  };
}
function isFastRefreshEnabled() {
  return false;
}
var Recoil_ReactMode = {
  createMutableSource,
  useMutableSource,
  useSyncExternalStore,
  currentRendererSupportsUseSyncExternalStore,
  reactMode,
  isFastRefreshEnabled
};
class AbstractRecoilValue {
  constructor(newKey) {
    _defineProperty(this, "key", void 0);
    this.key = newKey;
  }
  toJSON() {
    return {
      key: this.key
    };
  }
}
class RecoilState extends AbstractRecoilValue {
}
class RecoilValueReadOnly extends AbstractRecoilValue {
}
function isRecoilValue(x2) {
  return x2 instanceof RecoilState || x2 instanceof RecoilValueReadOnly;
}
var Recoil_RecoilValue = {
  AbstractRecoilValue,
  RecoilState,
  RecoilValueReadOnly,
  isRecoilValue
};
var Recoil_RecoilValue_1 = Recoil_RecoilValue.AbstractRecoilValue;
var Recoil_RecoilValue_2 = Recoil_RecoilValue.RecoilState;
var Recoil_RecoilValue_3 = Recoil_RecoilValue.RecoilValueReadOnly;
var Recoil_RecoilValue_4 = Recoil_RecoilValue.isRecoilValue;
var Recoil_RecoilValue$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  AbstractRecoilValue: Recoil_RecoilValue_1,
  RecoilState: Recoil_RecoilValue_2,
  RecoilValueReadOnly: Recoil_RecoilValue_3,
  isRecoilValue: Recoil_RecoilValue_4
});
function mapIterable(iterable, callback) {
  return function* () {
    let index2 = 0;
    for (const value of iterable) {
      yield callback(value, index2++);
    }
  }();
}
var Recoil_mapIterable = mapIterable;
class DefaultValue {
}
const DEFAULT_VALUE = new DefaultValue();
const nodes = /* @__PURE__ */ new Map();
const recoilValues = /* @__PURE__ */ new Map();
function recoilValuesForKeys(keys) {
  return Recoil_mapIterable(keys, (key) => Recoil_nullthrows(recoilValues.get(key)));
}
function checkForDuplicateAtomKey(key) {
  if (nodes.has(key)) {
    const message = `Duplicate atom key "${key}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;
    {
      console.warn(message);
    }
  }
}
function registerNode(node) {
  if (Recoil_RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED) {
    checkForDuplicateAtomKey(node.key);
  }
  nodes.set(node.key, node);
  const recoilValue = node.set == null ? new Recoil_RecoilValue$1.RecoilValueReadOnly(node.key) : new Recoil_RecoilValue$1.RecoilState(node.key);
  recoilValues.set(node.key, recoilValue);
  return recoilValue;
}
class NodeMissingError extends Error {
}
function getNode(key) {
  const node = nodes.get(key);
  if (node == null) {
    throw new NodeMissingError(`Missing definition for RecoilValue: "${key}""`);
  }
  return node;
}
function getNodeMaybe(key) {
  return nodes.get(key);
}
const configDeletionHandlers = /* @__PURE__ */ new Map();
function deleteNodeConfigIfPossible(key) {
  var _node$shouldDeleteCon;
  if (!Recoil_gkx("recoil_memory_managament_2020")) {
    return;
  }
  const node = nodes.get(key);
  if (node !== null && node !== void 0 && (_node$shouldDeleteCon = node.shouldDeleteConfigOnRelease) !== null && _node$shouldDeleteCon !== void 0 && _node$shouldDeleteCon.call(node)) {
    var _getConfigDeletionHan;
    nodes.delete(key);
    (_getConfigDeletionHan = getConfigDeletionHandler(key)) === null || _getConfigDeletionHan === void 0 ? void 0 : _getConfigDeletionHan();
    configDeletionHandlers.delete(key);
  }
}
function setConfigDeletionHandler(key, fn) {
  if (!Recoil_gkx("recoil_memory_managament_2020")) {
    return;
  }
  if (fn === void 0) {
    configDeletionHandlers.delete(key);
  } else {
    configDeletionHandlers.set(key, fn);
  }
}
function getConfigDeletionHandler(key) {
  return configDeletionHandlers.get(key);
}
var Recoil_Node = {
  nodes,
  recoilValues,
  registerNode,
  getNode,
  getNodeMaybe,
  deleteNodeConfigIfPossible,
  setConfigDeletionHandler,
  getConfigDeletionHandler,
  recoilValuesForKeys,
  NodeMissingError,
  DefaultValue,
  DEFAULT_VALUE
};
function enqueueExecution(s, f2) {
  f2();
}
var Recoil_Queue = {
  enqueueExecution
};
function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}
var hamt_1 = createCommonjsModule(function(module) {
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  var hamt = {};
  var SIZE = 5;
  var BUCKET_SIZE = Math.pow(2, SIZE);
  var MASK = BUCKET_SIZE - 1;
  var MAX_INDEX_NODE = BUCKET_SIZE / 2;
  var MIN_ARRAY_NODE = BUCKET_SIZE / 4;
  var nothing = {};
  var constant = function constant2(x2) {
    return function() {
      return x2;
    };
  };
  var hash = hamt.hash = function(str) {
    var type = typeof str === "undefined" ? "undefined" : _typeof(str);
    if (type === "number")
      return str;
    if (type !== "string")
      str += "";
    var hash2 = 0;
    for (var i = 0, len = str.length; i < len; ++i) {
      var c = str.charCodeAt(i);
      hash2 = (hash2 << 5) - hash2 + c | 0;
    }
    return hash2;
  };
  var popcount = function popcount2(x2) {
    x2 -= x2 >> 1 & 1431655765;
    x2 = (x2 & 858993459) + (x2 >> 2 & 858993459);
    x2 = x2 + (x2 >> 4) & 252645135;
    x2 += x2 >> 8;
    x2 += x2 >> 16;
    return x2 & 127;
  };
  var hashFragment = function hashFragment2(shift, h2) {
    return h2 >>> shift & MASK;
  };
  var toBitmap = function toBitmap2(x2) {
    return 1 << x2;
  };
  var fromBitmap = function fromBitmap2(bitmap, bit) {
    return popcount(bitmap & bit - 1);
  };
  var arrayUpdate = function arrayUpdate2(mutate2, at, v2, arr) {
    var out = arr;
    if (!mutate2) {
      var len = arr.length;
      out = new Array(len);
      for (var i = 0; i < len; ++i) {
        out[i] = arr[i];
      }
    }
    out[at] = v2;
    return out;
  };
  var arraySpliceOut = function arraySpliceOut2(mutate2, at, arr) {
    var newLen = arr.length - 1;
    var i = 0;
    var g = 0;
    var out = arr;
    if (mutate2) {
      i = g = at;
    } else {
      out = new Array(newLen);
      while (i < at) {
        out[g++] = arr[i++];
      }
    }
    ++i;
    while (i <= newLen) {
      out[g++] = arr[i++];
    }
    if (mutate2) {
      out.length = newLen;
    }
    return out;
  };
  var arraySpliceIn = function arraySpliceIn2(mutate2, at, v2, arr) {
    var len = arr.length;
    if (mutate2) {
      var _i = len;
      while (_i >= at) {
        arr[_i--] = arr[_i];
      }
      arr[at] = v2;
      return arr;
    }
    var i = 0, g = 0;
    var out = new Array(len + 1);
    while (i < at) {
      out[g++] = arr[i++];
    }
    out[at] = v2;
    while (i < len) {
      out[++g] = arr[i++];
    }
    return out;
  };
  var LEAF = 1;
  var COLLISION = 2;
  var INDEX = 3;
  var ARRAY = 4;
  var empty = {
    __hamt_isEmpty: true
  };
  var isEmptyNode = function isEmptyNode2(x2) {
    return x2 === empty || x2 && x2.__hamt_isEmpty;
  };
  var Leaf = function Leaf2(edit, hash2, key, value) {
    return {
      type: LEAF,
      edit,
      hash: hash2,
      key,
      value,
      _modify: Leaf__modify
    };
  };
  var Collision = function Collision2(edit, hash2, children) {
    return {
      type: COLLISION,
      edit,
      hash: hash2,
      children,
      _modify: Collision__modify
    };
  };
  var IndexedNode = function IndexedNode2(edit, mask, children) {
    return {
      type: INDEX,
      edit,
      mask,
      children,
      _modify: IndexedNode__modify
    };
  };
  var ArrayNode = function ArrayNode2(edit, size, children) {
    return {
      type: ARRAY,
      edit,
      size,
      children,
      _modify: ArrayNode__modify
    };
  };
  var isLeaf = function isLeaf2(node) {
    return node === empty || node.type === LEAF || node.type === COLLISION;
  };
  var expand = function expand2(edit, frag, child, bitmap, subNodes) {
    var arr = [];
    var bit = bitmap;
    var count2 = 0;
    for (var i = 0; bit; ++i) {
      if (bit & 1)
        arr[i] = subNodes[count2++];
      bit >>>= 1;
    }
    arr[frag] = child;
    return ArrayNode(edit, count2 + 1, arr);
  };
  var pack = function pack2(edit, count2, removed, elements) {
    var children = new Array(count2 - 1);
    var g = 0;
    var bitmap = 0;
    for (var i = 0, len = elements.length; i < len; ++i) {
      if (i !== removed) {
        var elem = elements[i];
        if (elem && !isEmptyNode(elem)) {
          children[g++] = elem;
          bitmap |= 1 << i;
        }
      }
    }
    return IndexedNode(edit, bitmap, children);
  };
  var mergeLeaves = function mergeLeaves2(edit, shift, h1, n1, h2, n2) {
    if (h1 === h2)
      return Collision(edit, h1, [n2, n1]);
    var subH1 = hashFragment(shift, h1);
    var subH2 = hashFragment(shift, h2);
    return IndexedNode(edit, toBitmap(subH1) | toBitmap(subH2), subH1 === subH2 ? [mergeLeaves2(edit, shift + SIZE, h1, n1, h2, n2)] : subH1 < subH2 ? [n1, n2] : [n2, n1]);
  };
  var updateCollisionList = function updateCollisionList2(mutate2, edit, keyEq, h2, list, f2, k2, size) {
    var len = list.length;
    for (var i = 0; i < len; ++i) {
      var child = list[i];
      if (keyEq(k2, child.key)) {
        var value = child.value;
        var _newValue = f2(value);
        if (_newValue === value)
          return list;
        if (_newValue === nothing) {
          --size.value;
          return arraySpliceOut(mutate2, i, list);
        }
        return arrayUpdate(mutate2, i, Leaf(edit, h2, k2, _newValue), list);
      }
    }
    var newValue = f2();
    if (newValue === nothing)
      return list;
    ++size.value;
    return arrayUpdate(mutate2, len, Leaf(edit, h2, k2, newValue), list);
  };
  var canEditNode = function canEditNode2(edit, node) {
    return edit === node.edit;
  };
  var Leaf__modify = function Leaf__modify2(edit, keyEq, shift, f2, h2, k2, size) {
    if (keyEq(k2, this.key)) {
      var _v = f2(this.value);
      if (_v === this.value)
        return this;
      else if (_v === nothing) {
        --size.value;
        return empty;
      }
      if (canEditNode(edit, this)) {
        this.value = _v;
        return this;
      }
      return Leaf(edit, h2, k2, _v);
    }
    var v2 = f2();
    if (v2 === nothing)
      return this;
    ++size.value;
    return mergeLeaves(edit, shift, this.hash, this, h2, Leaf(edit, h2, k2, v2));
  };
  var Collision__modify = function Collision__modify2(edit, keyEq, shift, f2, h2, k2, size) {
    if (h2 === this.hash) {
      var canEdit = canEditNode(edit, this);
      var list = updateCollisionList(canEdit, edit, keyEq, this.hash, this.children, f2, k2, size);
      if (list === this.children)
        return this;
      return list.length > 1 ? Collision(edit, this.hash, list) : list[0];
    }
    var v2 = f2();
    if (v2 === nothing)
      return this;
    ++size.value;
    return mergeLeaves(edit, shift, this.hash, this, h2, Leaf(edit, h2, k2, v2));
  };
  var IndexedNode__modify = function IndexedNode__modify2(edit, keyEq, shift, f2, h2, k2, size) {
    var mask = this.mask;
    var children = this.children;
    var frag = hashFragment(shift, h2);
    var bit = toBitmap(frag);
    var indx = fromBitmap(mask, bit);
    var exists = mask & bit;
    var current = exists ? children[indx] : empty;
    var child = current._modify(edit, keyEq, shift + SIZE, f2, h2, k2, size);
    if (current === child)
      return this;
    var canEdit = canEditNode(edit, this);
    var bitmap = mask;
    var newChildren = void 0;
    if (exists && isEmptyNode(child)) {
      bitmap &= ~bit;
      if (!bitmap)
        return empty;
      if (children.length <= 2 && isLeaf(children[indx ^ 1]))
        return children[indx ^ 1];
      newChildren = arraySpliceOut(canEdit, indx, children);
    } else if (!exists && !isEmptyNode(child)) {
      if (children.length >= MAX_INDEX_NODE)
        return expand(edit, frag, child, mask, children);
      bitmap |= bit;
      newChildren = arraySpliceIn(canEdit, indx, child, children);
    } else {
      newChildren = arrayUpdate(canEdit, indx, child, children);
    }
    if (canEdit) {
      this.mask = bitmap;
      this.children = newChildren;
      return this;
    }
    return IndexedNode(edit, bitmap, newChildren);
  };
  var ArrayNode__modify = function ArrayNode__modify2(edit, keyEq, shift, f2, h2, k2, size) {
    var count2 = this.size;
    var children = this.children;
    var frag = hashFragment(shift, h2);
    var child = children[frag];
    var newChild = (child || empty)._modify(edit, keyEq, shift + SIZE, f2, h2, k2, size);
    if (child === newChild)
      return this;
    var canEdit = canEditNode(edit, this);
    var newChildren = void 0;
    if (isEmptyNode(child) && !isEmptyNode(newChild)) {
      ++count2;
      newChildren = arrayUpdate(canEdit, frag, newChild, children);
    } else if (!isEmptyNode(child) && isEmptyNode(newChild)) {
      --count2;
      if (count2 <= MIN_ARRAY_NODE)
        return pack(edit, count2, frag, children);
      newChildren = arrayUpdate(canEdit, frag, empty, children);
    } else {
      newChildren = arrayUpdate(canEdit, frag, newChild, children);
    }
    if (canEdit) {
      this.size = count2;
      this.children = newChildren;
      return this;
    }
    return ArrayNode(edit, count2, newChildren);
  };
  empty._modify = function(edit, keyEq, shift, f2, h2, k2, size) {
    var v2 = f2();
    if (v2 === nothing)
      return empty;
    ++size.value;
    return Leaf(edit, h2, k2, v2);
  };
  function Map2(editable, edit, config, root, size) {
    this._editable = editable;
    this._edit = edit;
    this._config = config;
    this._root = root;
    this._size = size;
  }
  Map2.prototype.setTree = function(newRoot, newSize) {
    if (this._editable) {
      this._root = newRoot;
      this._size = newSize;
      return this;
    }
    return newRoot === this._root ? this : new Map2(this._editable, this._edit, this._config, newRoot, newSize);
  };
  var tryGetHash = hamt.tryGetHash = function(alt, hash2, key, map) {
    var node = map._root;
    var shift = 0;
    var keyEq = map._config.keyEq;
    while (true) {
      switch (node.type) {
        case LEAF: {
          return keyEq(key, node.key) ? node.value : alt;
        }
        case COLLISION: {
          if (hash2 === node.hash) {
            var children = node.children;
            for (var i = 0, len = children.length; i < len; ++i) {
              var child = children[i];
              if (keyEq(key, child.key))
                return child.value;
            }
          }
          return alt;
        }
        case INDEX: {
          var frag = hashFragment(shift, hash2);
          var bit = toBitmap(frag);
          if (node.mask & bit) {
            node = node.children[fromBitmap(node.mask, bit)];
            shift += SIZE;
            break;
          }
          return alt;
        }
        case ARRAY: {
          node = node.children[hashFragment(shift, hash2)];
          if (node) {
            shift += SIZE;
            break;
          }
          return alt;
        }
        default:
          return alt;
      }
    }
  };
  Map2.prototype.tryGetHash = function(alt, hash2, key) {
    return tryGetHash(alt, hash2, key, this);
  };
  var tryGet = hamt.tryGet = function(alt, key, map) {
    return tryGetHash(alt, map._config.hash(key), key, map);
  };
  Map2.prototype.tryGet = function(alt, key) {
    return tryGet(alt, key, this);
  };
  var getHash = hamt.getHash = function(hash2, key, map) {
    return tryGetHash(void 0, hash2, key, map);
  };
  Map2.prototype.getHash = function(hash2, key) {
    return getHash(hash2, key, this);
  };
  hamt.get = function(key, map) {
    return tryGetHash(void 0, map._config.hash(key), key, map);
  };
  Map2.prototype.get = function(key, alt) {
    return tryGet(alt, key, this);
  };
  var hasHash = hamt.has = function(hash2, key, map) {
    return tryGetHash(nothing, hash2, key, map) !== nothing;
  };
  Map2.prototype.hasHash = function(hash2, key) {
    return hasHash(hash2, key, this);
  };
  var has = hamt.has = function(key, map) {
    return hasHash(map._config.hash(key), key, map);
  };
  Map2.prototype.has = function(key) {
    return has(key, this);
  };
  var defKeyCompare = function defKeyCompare2(x2, y2) {
    return x2 === y2;
  };
  hamt.make = function(config) {
    return new Map2(0, 0, {
      keyEq: config && config.keyEq || defKeyCompare,
      hash: config && config.hash || hash
    }, empty, 0);
  };
  hamt.empty = hamt.make();
  var isEmpty = hamt.isEmpty = function(map) {
    return map && !!isEmptyNode(map._root);
  };
  Map2.prototype.isEmpty = function() {
    return isEmpty(this);
  };
  var modifyHash = hamt.modifyHash = function(f2, hash2, key, map) {
    var size = {
      value: map._size
    };
    var newRoot = map._root._modify(map._editable ? map._edit : NaN, map._config.keyEq, 0, f2, hash2, key, size);
    return map.setTree(newRoot, size.value);
  };
  Map2.prototype.modifyHash = function(hash2, key, f2) {
    return modifyHash(f2, hash2, key, this);
  };
  var modify = hamt.modify = function(f2, key, map) {
    return modifyHash(f2, map._config.hash(key), key, map);
  };
  Map2.prototype.modify = function(key, f2) {
    return modify(f2, key, this);
  };
  var setHash = hamt.setHash = function(hash2, key, value, map) {
    return modifyHash(constant(value), hash2, key, map);
  };
  Map2.prototype.setHash = function(hash2, key, value) {
    return setHash(hash2, key, value, this);
  };
  var set2 = hamt.set = function(key, value, map) {
    return setHash(map._config.hash(key), key, value, map);
  };
  Map2.prototype.set = function(key, value) {
    return set2(key, value, this);
  };
  var del = constant(nothing);
  var removeHash = hamt.removeHash = function(hash2, key, map) {
    return modifyHash(del, hash2, key, map);
  };
  Map2.prototype.removeHash = Map2.prototype.deleteHash = function(hash2, key) {
    return removeHash(hash2, key, this);
  };
  var remove = hamt.remove = function(key, map) {
    return removeHash(map._config.hash(key), key, map);
  };
  Map2.prototype.remove = Map2.prototype.delete = function(key) {
    return remove(key, this);
  };
  var beginMutation = hamt.beginMutation = function(map) {
    return new Map2(map._editable + 1, map._edit + 1, map._config, map._root, map._size);
  };
  Map2.prototype.beginMutation = function() {
    return beginMutation(this);
  };
  var endMutation = hamt.endMutation = function(map) {
    map._editable = map._editable && map._editable - 1;
    return map;
  };
  Map2.prototype.endMutation = function() {
    return endMutation(this);
  };
  var mutate = hamt.mutate = function(f2, map) {
    var transient = beginMutation(map);
    f2(transient);
    return endMutation(transient);
  };
  Map2.prototype.mutate = function(f2) {
    return mutate(f2, this);
  };
  var appk = function appk2(k2) {
    return k2 && lazyVisitChildren(k2[0], k2[1], k2[2], k2[3], k2[4]);
  };
  var lazyVisitChildren = function lazyVisitChildren2(len, children, i, f2, k2) {
    while (i < len) {
      var child = children[i++];
      if (child && !isEmptyNode(child))
        return lazyVisit(child, f2, [len, children, i, f2, k2]);
    }
    return appk(k2);
  };
  var lazyVisit = function lazyVisit2(node, f2, k2) {
    switch (node.type) {
      case LEAF:
        return {
          value: f2(node),
          rest: k2
        };
      case COLLISION:
      case ARRAY:
      case INDEX:
        var children = node.children;
        return lazyVisitChildren(children.length, children, 0, f2, k2);
      default:
        return appk(k2);
    }
  };
  var DONE = {
    done: true
  };
  function MapIterator(v2) {
    this.v = v2;
  }
  MapIterator.prototype.next = function() {
    if (!this.v)
      return DONE;
    var v0 = this.v;
    this.v = appk(v0.rest);
    return v0;
  };
  MapIterator.prototype[Symbol.iterator] = function() {
    return this;
  };
  var visit = function visit2(map, f2) {
    return new MapIterator(lazyVisit(map._root, f2));
  };
  var buildPairs = function buildPairs2(x2) {
    return [x2.key, x2.value];
  };
  var entries = hamt.entries = function(map) {
    return visit(map, buildPairs);
  };
  Map2.prototype.entries = Map2.prototype[Symbol.iterator] = function() {
    return entries(this);
  };
  var buildKeys = function buildKeys2(x2) {
    return x2.key;
  };
  var keys = hamt.keys = function(map) {
    return visit(map, buildKeys);
  };
  Map2.prototype.keys = function() {
    return keys(this);
  };
  var buildValues = function buildValues2(x2) {
    return x2.value;
  };
  var values = hamt.values = Map2.prototype.values = function(map) {
    return visit(map, buildValues);
  };
  Map2.prototype.values = function() {
    return values(this);
  };
  var fold = hamt.fold = function(f2, z2, m2) {
    var root = m2._root;
    if (root.type === LEAF)
      return f2(z2, root.value, root.key);
    var toVisit = [root.children];
    var children = void 0;
    while (children = toVisit.pop()) {
      for (var i = 0, len = children.length; i < len; ) {
        var child = children[i++];
        if (child && child.type) {
          if (child.type === LEAF)
            z2 = f2(z2, child.value, child.key);
          else
            toVisit.push(child.children);
        }
      }
    }
    return z2;
  };
  Map2.prototype.fold = function(f2, z2) {
    return fold(f2, z2, this);
  };
  var forEach = hamt.forEach = function(f2, map) {
    return fold(function(_, value, key) {
      return f2(value, key, map);
    }, null, map);
  };
  Map2.prototype.forEach = function(f2) {
    return forEach(f2, this);
  };
  var count = hamt.count = function(map) {
    return map._size;
  };
  Map2.prototype.count = function() {
    return count(this);
  };
  Object.defineProperty(Map2.prototype, "size", {
    get: Map2.prototype.count
  });
  if (module.exports) {
    module.exports = hamt;
  } else {
    (void 0).hamt = hamt;
  }
});
class BuiltInMap {
  constructor(existing) {
    _defineProperty(this, "_map", void 0);
    this._map = new Map(existing === null || existing === void 0 ? void 0 : existing.entries());
  }
  keys() {
    return this._map.keys();
  }
  entries() {
    return this._map.entries();
  }
  get(k2) {
    return this._map.get(k2);
  }
  has(k2) {
    return this._map.has(k2);
  }
  set(k2, v2) {
    this._map.set(k2, v2);
    return this;
  }
  delete(k2) {
    this._map.delete(k2);
    return this;
  }
  clone() {
    return persistentMap(this);
  }
  toMap() {
    return new Map(this._map);
  }
}
class HashArrayMappedTrieMap {
  // Because hamt.empty is not a function there is no way to introduce type
  // parameters on it, so empty is typed as HAMTPlusMap<string, mixed>.
  // $FlowIssue
  constructor(existing) {
    _defineProperty(this, "_hamt", hamt_1.empty.beginMutation());
    if (existing instanceof HashArrayMappedTrieMap) {
      const h2 = existing._hamt.endMutation();
      existing._hamt = h2.beginMutation();
      this._hamt = h2.beginMutation();
    } else if (existing) {
      for (const [k2, v2] of existing.entries()) {
        this._hamt.set(k2, v2);
      }
    }
  }
  keys() {
    return this._hamt.keys();
  }
  entries() {
    return this._hamt.entries();
  }
  get(k2) {
    return this._hamt.get(k2);
  }
  has(k2) {
    return this._hamt.has(k2);
  }
  set(k2, v2) {
    this._hamt.set(k2, v2);
    return this;
  }
  delete(k2) {
    this._hamt.delete(k2);
    return this;
  }
  clone() {
    return persistentMap(this);
  }
  toMap() {
    return new Map(this._hamt);
  }
}
function persistentMap(existing) {
  if (Recoil_gkx("recoil_hamt_2020")) {
    return new HashArrayMappedTrieMap(existing);
  } else {
    return new BuiltInMap(existing);
  }
}
var Recoil_PersistentMap = {
  persistentMap
};
var Recoil_PersistentMap_1 = Recoil_PersistentMap.persistentMap;
var Recoil_PersistentMap$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  persistentMap: Recoil_PersistentMap_1
});
function differenceSets(set2, ...setsWithValuesToRemove) {
  const ret = /* @__PURE__ */ new Set();
  FIRST:
    for (const value of set2) {
      for (const otherSet of setsWithValuesToRemove) {
        if (otherSet.has(value)) {
          continue FIRST;
        }
      }
      ret.add(value);
    }
  return ret;
}
var Recoil_differenceSets = differenceSets;
function mapMap(map, callback) {
  const result = /* @__PURE__ */ new Map();
  map.forEach((value, key) => {
    result.set(key, callback(value, key));
  });
  return result;
}
var Recoil_mapMap = mapMap;
function makeGraph() {
  return {
    nodeDeps: /* @__PURE__ */ new Map(),
    nodeToNodeSubscriptions: /* @__PURE__ */ new Map()
  };
}
function cloneGraph(graph2) {
  return {
    nodeDeps: Recoil_mapMap(graph2.nodeDeps, (s) => new Set(s)),
    nodeToNodeSubscriptions: Recoil_mapMap(graph2.nodeToNodeSubscriptions, (s) => new Set(s))
  };
}
function mergeDepsIntoGraph(key, newDeps, graph2, olderGraph) {
  const {
    nodeDeps,
    nodeToNodeSubscriptions
  } = graph2;
  const oldDeps = nodeDeps.get(key);
  if (oldDeps && olderGraph && oldDeps !== olderGraph.nodeDeps.get(key)) {
    return;
  }
  nodeDeps.set(key, newDeps);
  const addedDeps = oldDeps == null ? newDeps : Recoil_differenceSets(newDeps, oldDeps);
  for (const dep of addedDeps) {
    if (!nodeToNodeSubscriptions.has(dep)) {
      nodeToNodeSubscriptions.set(dep, /* @__PURE__ */ new Set());
    }
    const existing = Recoil_nullthrows(nodeToNodeSubscriptions.get(dep));
    existing.add(key);
  }
  if (oldDeps) {
    const removedDeps = Recoil_differenceSets(oldDeps, newDeps);
    for (const dep of removedDeps) {
      if (!nodeToNodeSubscriptions.has(dep)) {
        return;
      }
      const existing = Recoil_nullthrows(nodeToNodeSubscriptions.get(dep));
      existing.delete(key);
      if (existing.size === 0) {
        nodeToNodeSubscriptions.delete(dep);
      }
    }
  }
}
function saveDepsToStore(key, deps, store, version) {
  var _storeState$nextTree, _storeState$previousT, _storeState$previousT2, _storeState$previousT3;
  const storeState = store.getState();
  if (!(version === storeState.currentTree.version || version === ((_storeState$nextTree = storeState.nextTree) === null || _storeState$nextTree === void 0 ? void 0 : _storeState$nextTree.version) || version === ((_storeState$previousT = storeState.previousTree) === null || _storeState$previousT === void 0 ? void 0 : _storeState$previousT.version)))
    ;
  const graph2 = store.getGraph(version);
  mergeDepsIntoGraph(key, deps, graph2);
  if (version === ((_storeState$previousT2 = storeState.previousTree) === null || _storeState$previousT2 === void 0 ? void 0 : _storeState$previousT2.version)) {
    const currentGraph = store.getGraph(storeState.currentTree.version);
    mergeDepsIntoGraph(key, deps, currentGraph, graph2);
  }
  if (version === ((_storeState$previousT3 = storeState.previousTree) === null || _storeState$previousT3 === void 0 ? void 0 : _storeState$previousT3.version) || version === storeState.currentTree.version) {
    var _storeState$nextTree2;
    const nextVersion = (_storeState$nextTree2 = storeState.nextTree) === null || _storeState$nextTree2 === void 0 ? void 0 : _storeState$nextTree2.version;
    if (nextVersion !== void 0) {
      const nextGraph = store.getGraph(nextVersion);
      mergeDepsIntoGraph(key, deps, nextGraph, graph2);
    }
  }
}
var Recoil_Graph = {
  cloneGraph,
  graph: makeGraph,
  saveDepsToStore
};
let nextTreeStateVersion = 0;
const getNextTreeStateVersion = () => nextTreeStateVersion++;
let nextStoreID = 0;
const getNextStoreID = () => nextStoreID++;
let nextComponentID = 0;
const getNextComponentID = () => nextComponentID++;
var Recoil_Keys = {
  getNextTreeStateVersion,
  getNextStoreID,
  getNextComponentID
};
const {
  persistentMap: persistentMap$1
} = Recoil_PersistentMap$1;
const {
  graph
} = Recoil_Graph;
const {
  getNextTreeStateVersion: getNextTreeStateVersion$1
} = Recoil_Keys;
function makeEmptyTreeState() {
  const version = getNextTreeStateVersion$1();
  return {
    version,
    stateID: version,
    transactionMetadata: {},
    dirtyAtoms: /* @__PURE__ */ new Set(),
    atomValues: persistentMap$1(),
    nonvalidatedAtoms: persistentMap$1()
  };
}
function makeEmptyStoreState() {
  const currentTree = makeEmptyTreeState();
  return {
    currentTree,
    nextTree: null,
    previousTree: null,
    commitDepth: 0,
    knownAtoms: /* @__PURE__ */ new Set(),
    knownSelectors: /* @__PURE__ */ new Set(),
    transactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeTransactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeToComponentSubscriptions: /* @__PURE__ */ new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: /* @__PURE__ */ new Set(),
    graphsByVersion: (/* @__PURE__ */ new Map()).set(currentTree.version, graph()),
    retention: {
      referenceCounts: /* @__PURE__ */ new Map(),
      nodesRetainedByZone: /* @__PURE__ */ new Map(),
      retainablesToCheckForRelease: /* @__PURE__ */ new Set()
    },
    nodeCleanupFunctions: /* @__PURE__ */ new Map()
  };
}
var Recoil_State = {
  makeEmptyTreeState,
  makeEmptyStoreState,
  getNextTreeStateVersion: getNextTreeStateVersion$1
};
class RetentionZone {
}
function retentionZone() {
  return new RetentionZone();
}
var Recoil_RetentionZone = {
  RetentionZone,
  retentionZone
};
function setByAddingToSet(set2, v2) {
  const next = new Set(set2);
  next.add(v2);
  return next;
}
function setByDeletingFromSet(set2, v2) {
  const next = new Set(set2);
  next.delete(v2);
  return next;
}
function mapBySettingInMap(map, k2, v2) {
  const next = new Map(map);
  next.set(k2, v2);
  return next;
}
function mapByUpdatingInMap(map, k2, updater) {
  const next = new Map(map);
  next.set(k2, updater(next.get(k2)));
  return next;
}
function mapByDeletingFromMap(map, k2) {
  const next = new Map(map);
  next.delete(k2);
  return next;
}
function mapByDeletingMultipleFromMap(map, ks) {
  const next = new Map(map);
  ks.forEach((k2) => next.delete(k2));
  return next;
}
var Recoil_CopyOnWrite = {
  setByAddingToSet,
  setByDeletingFromSet,
  mapBySettingInMap,
  mapByUpdatingInMap,
  mapByDeletingFromMap,
  mapByDeletingMultipleFromMap
};
function* filterIterable(iterable, predicate) {
  let index2 = 0;
  for (const value of iterable) {
    if (predicate(value, index2++)) {
      yield value;
    }
  }
}
var Recoil_filterIterable = filterIterable;
function lazyProxy(base, factories) {
  const proxy = new Proxy(base, {
    // Compute and cache lazy property if not already done.
    get: (target, prop) => {
      if (!(prop in target) && prop in factories) {
        target[prop] = factories[prop]();
      }
      return target[prop];
    },
    // This method allows user to iterate keys as normal
    ownKeys: (target) => {
      return Object.keys(target);
    }
  });
  return proxy;
}
var Recoil_lazyProxy = lazyProxy;
const {
  getNode: getNode$1,
  getNodeMaybe: getNodeMaybe$1,
  recoilValuesForKeys: recoilValuesForKeys$1
} = Recoil_Node;
const {
  RetentionZone: RetentionZone$1
} = Recoil_RetentionZone;
const {
  setByAddingToSet: setByAddingToSet$1
} = Recoil_CopyOnWrite;
const emptySet = Object.freeze(/* @__PURE__ */ new Set());
class ReadOnlyRecoilValueError extends Error {
}
function initializeRetentionForNode(store, nodeKey, retainedBy) {
  if (!Recoil_gkx("recoil_memory_managament_2020")) {
    return () => void 0;
  }
  const {
    nodesRetainedByZone: nodesRetainedByZone2
  } = store.getState().retention;
  function addToZone(zone) {
    let set2 = nodesRetainedByZone2.get(zone);
    if (!set2) {
      nodesRetainedByZone2.set(zone, set2 = /* @__PURE__ */ new Set());
    }
    set2.add(nodeKey);
  }
  if (retainedBy instanceof RetentionZone$1) {
    addToZone(retainedBy);
  } else if (Array.isArray(retainedBy)) {
    for (const zone of retainedBy) {
      addToZone(zone);
    }
  }
  return () => {
    if (!Recoil_gkx("recoil_memory_managament_2020")) {
      return;
    }
    const {
      retention
    } = store.getState();
    function deleteFromZone(zone) {
      const set2 = retention.nodesRetainedByZone.get(zone);
      set2 === null || set2 === void 0 ? void 0 : set2.delete(nodeKey);
      if (set2 && set2.size === 0) {
        retention.nodesRetainedByZone.delete(zone);
      }
    }
    if (retainedBy instanceof RetentionZone$1) {
      deleteFromZone(retainedBy);
    } else if (Array.isArray(retainedBy)) {
      for (const zone of retainedBy) {
        deleteFromZone(zone);
      }
    }
  };
}
function initializeNodeIfNewToStore(store, treeState, key, trigger) {
  const storeState = store.getState();
  if (storeState.nodeCleanupFunctions.has(key)) {
    return;
  }
  const node = getNode$1(key);
  const retentionCleanup = initializeRetentionForNode(store, key, node.retainedBy);
  const nodeCleanup = node.init(store, treeState, trigger);
  storeState.nodeCleanupFunctions.set(key, () => {
    nodeCleanup();
    retentionCleanup();
  });
}
function initializeNode(store, key, trigger) {
  initializeNodeIfNewToStore(store, store.getState().currentTree, key, trigger);
}
function cleanUpNode(store, key) {
  var _state$nodeCleanupFun;
  const state = store.getState();
  (_state$nodeCleanupFun = state.nodeCleanupFunctions.get(key)) === null || _state$nodeCleanupFun === void 0 ? void 0 : _state$nodeCleanupFun();
  state.nodeCleanupFunctions.delete(key);
}
function getNodeLoadable(store, state, key) {
  initializeNodeIfNewToStore(store, state, key, "get");
  return getNode$1(key).get(store, state);
}
function peekNodeLoadable(store, state, key) {
  return getNode$1(key).peek(store, state);
}
function setUnvalidatedAtomValue_DEPRECATED(state, key, newValue) {
  var _node$invalidate;
  const node = getNodeMaybe$1(key);
  node === null || node === void 0 ? void 0 : (_node$invalidate = node.invalidate) === null || _node$invalidate === void 0 ? void 0 : _node$invalidate.call(node, state);
  return {
    ...state,
    atomValues: state.atomValues.clone().delete(key),
    nonvalidatedAtoms: state.nonvalidatedAtoms.clone().set(key, newValue),
    dirtyAtoms: setByAddingToSet$1(state.dirtyAtoms, key)
  };
}
function setNodeValue(store, state, key, newValue) {
  const node = getNode$1(key);
  if (node.set == null) {
    throw new ReadOnlyRecoilValueError(`Attempt to set read-only RecoilValue: ${key}`);
  }
  const set2 = node.set;
  initializeNodeIfNewToStore(store, state, key, "set");
  return set2(store, state, newValue);
}
function peekNodeInfo(store, state, key) {
  const storeState = store.getState();
  const graph2 = store.getGraph(state.version);
  const type = getNode$1(key).nodeType;
  return Recoil_lazyProxy({
    type
  }, {
    // $FlowFixMe[underconstrained-implicit-instantiation]
    loadable: () => peekNodeLoadable(store, state, key),
    isActive: () => storeState.knownAtoms.has(key) || storeState.knownSelectors.has(key),
    isSet: () => type === "selector" ? false : state.atomValues.has(key),
    isModified: () => state.dirtyAtoms.has(key),
    // Report current dependencies.  If the node hasn't been evaluated, then
    // dependencies may be missing based on the current state.
    deps: () => {
      var _graph$nodeDeps$get;
      return recoilValuesForKeys$1((_graph$nodeDeps$get = graph2.nodeDeps.get(key)) !== null && _graph$nodeDeps$get !== void 0 ? _graph$nodeDeps$get : []);
    },
    // Reports all "current" subscribers.  Evaluating other nodes or
    // previous in-progress async evaluations may introduce new subscribers.
    subscribers: () => {
      var _storeState$nodeToCom, _storeState$nodeToCom2;
      return {
        nodes: recoilValuesForKeys$1(Recoil_filterIterable(getDownstreamNodes(store, state, /* @__PURE__ */ new Set([key])), (nodeKey) => nodeKey !== key)),
        components: Recoil_mapIterable((_storeState$nodeToCom = (_storeState$nodeToCom2 = storeState.nodeToComponentSubscriptions.get(key)) === null || _storeState$nodeToCom2 === void 0 ? void 0 : _storeState$nodeToCom2.values()) !== null && _storeState$nodeToCom !== void 0 ? _storeState$nodeToCom : [], ([name]) => ({
          name
        }))
      };
    }
  });
}
function getDownstreamNodes(store, state, keys) {
  const visitedNodes = /* @__PURE__ */ new Set();
  const visitingNodes = Array.from(keys);
  const graph2 = store.getGraph(state.version);
  for (let key = visitingNodes.pop(); key; key = visitingNodes.pop()) {
    var _graph$nodeToNodeSubs;
    visitedNodes.add(key);
    const subscribedNodes = (_graph$nodeToNodeSubs = graph2.nodeToNodeSubscriptions.get(key)) !== null && _graph$nodeToNodeSubs !== void 0 ? _graph$nodeToNodeSubs : emptySet;
    for (const downstreamNode of subscribedNodes) {
      if (!visitedNodes.has(downstreamNode)) {
        visitingNodes.push(downstreamNode);
      }
    }
  }
  return visitedNodes;
}
var Recoil_FunctionalCore = {
  getNodeLoadable,
  peekNodeLoadable,
  setNodeValue,
  initializeNode,
  cleanUpNode,
  setUnvalidatedAtomValue_DEPRECATED,
  peekNodeInfo,
  getDownstreamNodes
};
let _invalidateMemoizedSnapshot = null;
function setInvalidateMemoizedSnapshot(invalidate) {
  _invalidateMemoizedSnapshot = invalidate;
}
function invalidateMemoizedSnapshot() {
  var _invalidateMemoizedSn;
  (_invalidateMemoizedSn = _invalidateMemoizedSnapshot) === null || _invalidateMemoizedSn === void 0 ? void 0 : _invalidateMemoizedSn();
}
var Recoil_SnapshotCache = {
  setInvalidateMemoizedSnapshot,
  invalidateMemoizedSnapshot
};
const {
  getDownstreamNodes: getDownstreamNodes$1,
  getNodeLoadable: getNodeLoadable$1,
  setNodeValue: setNodeValue$1
} = Recoil_FunctionalCore;
const {
  getNextComponentID: getNextComponentID$1
} = Recoil_Keys;
const {
  getNode: getNode$2,
  getNodeMaybe: getNodeMaybe$2
} = Recoil_Node;
const {
  DefaultValue: DefaultValue$1
} = Recoil_Node;
const {
  reactMode: reactMode$1
} = Recoil_ReactMode;
const {
  AbstractRecoilValue: AbstractRecoilValue$1,
  RecoilState: RecoilState$1,
  RecoilValueReadOnly: RecoilValueReadOnly$1,
  isRecoilValue: isRecoilValue$1
} = Recoil_RecoilValue$1;
const {
  invalidateMemoizedSnapshot: invalidateMemoizedSnapshot$1
} = Recoil_SnapshotCache;
function getRecoilValueAsLoadable(store, {
  key
}, treeState = store.getState().currentTree) {
  var _storeState$nextTree, _storeState$previousT;
  const storeState = store.getState();
  if (!(treeState.version === storeState.currentTree.version || treeState.version === ((_storeState$nextTree = storeState.nextTree) === null || _storeState$nextTree === void 0 ? void 0 : _storeState$nextTree.version) || treeState.version === ((_storeState$previousT = storeState.previousTree) === null || _storeState$previousT === void 0 ? void 0 : _storeState$previousT.version)))
    ;
  const loadable = getNodeLoadable$1(store, treeState, key);
  if (loadable.state === "loading") {
    loadable.contents.catch(() => {
      return;
    });
  }
  return loadable;
}
function applyAtomValueWrites(atomValues, writes) {
  const result = atomValues.clone();
  writes.forEach((v2, k2) => {
    if (v2.state === "hasValue" && v2.contents instanceof DefaultValue$1) {
      result.delete(k2);
    } else {
      result.set(k2, v2);
    }
  });
  return result;
}
function valueFromValueOrUpdater(store, state, {
  key
}, valueOrUpdater) {
  if (typeof valueOrUpdater === "function") {
    const current = getNodeLoadable$1(store, state, key);
    if (current.state === "loading") {
      const msg = `Tried to set atom or selector "${key}" using an updater function while the current state is pending, this is not currently supported.`;
      throw Recoil_err(msg);
    } else if (current.state === "hasError") {
      throw current.contents;
    }
    return valueOrUpdater(current.contents);
  } else {
    return valueOrUpdater;
  }
}
function applyAction(store, state, action) {
  if (action.type === "set") {
    const {
      recoilValue,
      valueOrUpdater
    } = action;
    const newValue = valueFromValueOrUpdater(store, state, recoilValue, valueOrUpdater);
    const writes = setNodeValue$1(store, state, recoilValue.key, newValue);
    for (const [key, loadable] of writes.entries()) {
      writeLoadableToTreeState(state, key, loadable);
    }
  } else if (action.type === "setLoadable") {
    const {
      recoilValue: {
        key
      },
      loadable
    } = action;
    writeLoadableToTreeState(state, key, loadable);
  } else if (action.type === "markModified") {
    const {
      recoilValue: {
        key
      }
    } = action;
    state.dirtyAtoms.add(key);
  } else if (action.type === "setUnvalidated") {
    var _node$invalidate;
    const {
      recoilValue: {
        key
      },
      unvalidatedValue
    } = action;
    const node = getNodeMaybe$2(key);
    node === null || node === void 0 ? void 0 : (_node$invalidate = node.invalidate) === null || _node$invalidate === void 0 ? void 0 : _node$invalidate.call(node, state);
    state.atomValues.delete(key);
    state.nonvalidatedAtoms.set(key, unvalidatedValue);
    state.dirtyAtoms.add(key);
  } else {
    Recoil_recoverableViolation(`Unknown action ${action.type}`);
  }
}
function writeLoadableToTreeState(state, key, loadable) {
  if (loadable.state === "hasValue" && loadable.contents instanceof DefaultValue$1) {
    state.atomValues.delete(key);
  } else {
    state.atomValues.set(key, loadable);
  }
  state.dirtyAtoms.add(key);
  state.nonvalidatedAtoms.delete(key);
}
function applyActionsToStore(store, actions) {
  store.replaceState((state) => {
    const newState = copyTreeState(state);
    for (const action of actions) {
      applyAction(store, newState, action);
    }
    invalidateDownstreams(store, newState);
    invalidateMemoizedSnapshot$1();
    return newState;
  });
}
function queueOrPerformStateUpdate(store, action) {
  if (batchStack.length) {
    const actionsByStore = batchStack[batchStack.length - 1];
    let actions = actionsByStore.get(store);
    if (!actions) {
      actionsByStore.set(store, actions = []);
    }
    actions.push(action);
  } else {
    applyActionsToStore(store, [action]);
  }
}
const batchStack = [];
function batchStart() {
  const actionsByStore = /* @__PURE__ */ new Map();
  batchStack.push(actionsByStore);
  return () => {
    for (const [store, actions] of actionsByStore) {
      applyActionsToStore(store, actions);
    }
    batchStack.pop();
  };
}
function copyTreeState(state) {
  return {
    ...state,
    atomValues: state.atomValues.clone(),
    nonvalidatedAtoms: state.nonvalidatedAtoms.clone(),
    dirtyAtoms: new Set(state.dirtyAtoms)
  };
}
function invalidateDownstreams(store, state) {
  const downstreams = getDownstreamNodes$1(store, state, state.dirtyAtoms);
  for (const key of downstreams) {
    var _getNodeMaybe, _getNodeMaybe$invalid;
    (_getNodeMaybe = getNodeMaybe$2(key)) === null || _getNodeMaybe === void 0 ? void 0 : (_getNodeMaybe$invalid = _getNodeMaybe.invalidate) === null || _getNodeMaybe$invalid === void 0 ? void 0 : _getNodeMaybe$invalid.call(_getNodeMaybe, state);
  }
}
function setRecoilValue(store, recoilValue, valueOrUpdater) {
  queueOrPerformStateUpdate(store, {
    type: "set",
    recoilValue,
    valueOrUpdater
  });
}
function setRecoilValueLoadable(store, recoilValue, loadable) {
  if (loadable instanceof DefaultValue$1) {
    return setRecoilValue(store, recoilValue, loadable);
  }
  queueOrPerformStateUpdate(store, {
    type: "setLoadable",
    recoilValue,
    loadable
  });
}
function markRecoilValueModified(store, recoilValue) {
  queueOrPerformStateUpdate(store, {
    type: "markModified",
    recoilValue
  });
}
function setUnvalidatedRecoilValue(store, recoilValue, unvalidatedValue) {
  queueOrPerformStateUpdate(store, {
    type: "setUnvalidated",
    recoilValue,
    unvalidatedValue
  });
}
function subscribeToRecoilValue(store, {
  key
}, callback, componentDebugName = null) {
  const subID = getNextComponentID$1();
  const storeState = store.getState();
  if (!storeState.nodeToComponentSubscriptions.has(key)) {
    storeState.nodeToComponentSubscriptions.set(key, /* @__PURE__ */ new Map());
  }
  Recoil_nullthrows(storeState.nodeToComponentSubscriptions.get(key)).set(subID, [componentDebugName !== null && componentDebugName !== void 0 ? componentDebugName : "<not captured>", callback]);
  const mode = reactMode$1();
  if (mode.early && (mode.mode === "LEGACY" || mode.mode === "MUTABLE_SOURCE")) {
    const nextTree = store.getState().nextTree;
    if (nextTree && nextTree.dirtyAtoms.has(key)) {
      callback(nextTree);
    }
  }
  return {
    release: () => {
      const releaseStoreState = store.getState();
      const subs = releaseStoreState.nodeToComponentSubscriptions.get(key);
      if (subs === void 0 || !subs.has(subID)) {
        return;
      }
      subs.delete(subID);
      if (subs.size === 0) {
        releaseStoreState.nodeToComponentSubscriptions.delete(key);
      }
    }
  };
}
function refreshRecoilValue(store, recoilValue) {
  var _node$clearCache;
  const {
    currentTree
  } = store.getState();
  const node = getNode$2(recoilValue.key);
  (_node$clearCache = node.clearCache) === null || _node$clearCache === void 0 ? void 0 : _node$clearCache.call(node, store, currentTree);
}
var Recoil_RecoilValueInterface = {
  RecoilValueReadOnly: RecoilValueReadOnly$1,
  AbstractRecoilValue: AbstractRecoilValue$1,
  RecoilState: RecoilState$1,
  getRecoilValueAsLoadable,
  setRecoilValue,
  setRecoilValueLoadable,
  markRecoilValueModified,
  setUnvalidatedRecoilValue,
  subscribeToRecoilValue,
  isRecoilValue: isRecoilValue$1,
  applyAtomValueWrites,
  // TODO Remove export when deprecating initialStoreState_DEPRECATED in RecoilRoot
  batchStart,
  writeLoadableToTreeState,
  invalidateDownstreams,
  copyTreeState,
  refreshRecoilValue
};
function someSet(set2, callback, context) {
  const iterator = set2.entries();
  let current = iterator.next();
  while (!current.done) {
    const entry = current.value;
    if (callback.call(context, entry[1], entry[0], set2)) {
      return true;
    }
    current = iterator.next();
  }
  return false;
}
var Recoil_someSet = someSet;
const {
  cleanUpNode: cleanUpNode$1
} = Recoil_FunctionalCore;
const {
  deleteNodeConfigIfPossible: deleteNodeConfigIfPossible$1,
  getNode: getNode$3
} = Recoil_Node;
const {
  RetentionZone: RetentionZone$2
} = Recoil_RetentionZone;
const SUSPENSE_TIMEOUT_MS = 12e4;
const emptySet$1 = /* @__PURE__ */ new Set();
function releaseRetainablesNowOnCurrentTree(store, retainables) {
  const storeState = store.getState();
  const treeState = storeState.currentTree;
  if (storeState.nextTree) {
    return;
  }
  const nodes2 = /* @__PURE__ */ new Set();
  for (const r2 of retainables) {
    if (r2 instanceof RetentionZone$2) {
      for (const n2 of nodesRetainedByZone(storeState, r2)) {
        nodes2.add(n2);
      }
    } else {
      nodes2.add(r2);
    }
  }
  const releasableNodes = findReleasableNodes(store, nodes2);
  for (const node of releasableNodes) {
    releaseNode(store, treeState, node);
  }
}
function findReleasableNodes(store, searchFromNodes) {
  const storeState = store.getState();
  const treeState = storeState.currentTree;
  const graph2 = store.getGraph(treeState.version);
  const releasableNodes = /* @__PURE__ */ new Set();
  const nonReleasableNodes = /* @__PURE__ */ new Set();
  findReleasableNodesInner(searchFromNodes);
  return releasableNodes;
  function findReleasableNodesInner(searchFromNodes2) {
    const releasableNodesFoundThisIteration = /* @__PURE__ */ new Set();
    const downstreams = getDownstreamNodesInTopologicalOrder(
      store,
      treeState,
      searchFromNodes2,
      releasableNodes,
      // don't descend into these
      nonReleasableNodes
      // don't descend into these
    );
    for (const node of downstreams) {
      var _storeState$retention;
      if (getNode$3(node).retainedBy === "recoilRoot") {
        nonReleasableNodes.add(node);
        continue;
      }
      if (((_storeState$retention = storeState.retention.referenceCounts.get(node)) !== null && _storeState$retention !== void 0 ? _storeState$retention : 0) > 0) {
        nonReleasableNodes.add(node);
        continue;
      }
      if (zonesThatCouldRetainNode(node).some((z2) => storeState.retention.referenceCounts.get(z2))) {
        nonReleasableNodes.add(node);
        continue;
      }
      const nodeChildren = graph2.nodeToNodeSubscriptions.get(node);
      if (nodeChildren && Recoil_someSet(nodeChildren, (child) => nonReleasableNodes.has(child))) {
        nonReleasableNodes.add(node);
        continue;
      }
      releasableNodes.add(node);
      releasableNodesFoundThisIteration.add(node);
    }
    const parents = /* @__PURE__ */ new Set();
    for (const node of releasableNodesFoundThisIteration) {
      for (const parent of (_graph$nodeDeps$get = graph2.nodeDeps.get(node)) !== null && _graph$nodeDeps$get !== void 0 ? _graph$nodeDeps$get : emptySet$1) {
        var _graph$nodeDeps$get;
        if (!releasableNodes.has(parent)) {
          parents.add(parent);
        }
      }
    }
    if (parents.size) {
      findReleasableNodesInner(parents);
    }
  }
}
function getDownstreamNodesInTopologicalOrder(store, treeState, nodes2, doNotDescendInto1, doNotDescendInto2) {
  const graph2 = store.getGraph(treeState.version);
  const answer = [];
  const visited = /* @__PURE__ */ new Set();
  while (nodes2.size > 0) {
    visit(Recoil_nullthrows(nodes2.values().next().value));
  }
  return answer;
  function visit(node) {
    if (doNotDescendInto1.has(node) || doNotDescendInto2.has(node)) {
      nodes2.delete(node);
      return;
    }
    if (visited.has(node)) {
      return;
    }
    const children = graph2.nodeToNodeSubscriptions.get(node);
    if (children) {
      for (const child of children) {
        visit(child);
      }
    }
    visited.add(node);
    nodes2.delete(node);
    answer.push(node);
  }
}
function releaseNode(store, treeState, node) {
  if (!Recoil_gkx("recoil_memory_managament_2020")) {
    return;
  }
  cleanUpNode$1(store, node);
  const storeState = store.getState();
  storeState.knownAtoms.delete(node);
  storeState.knownSelectors.delete(node);
  storeState.nodeTransactionSubscriptions.delete(node);
  storeState.retention.referenceCounts.delete(node);
  const zones = zonesThatCouldRetainNode(node);
  for (const zone of zones) {
    var _storeState$retention2;
    (_storeState$retention2 = storeState.retention.nodesRetainedByZone.get(zone)) === null || _storeState$retention2 === void 0 ? void 0 : _storeState$retention2.delete(node);
  }
  treeState.atomValues.delete(node);
  treeState.dirtyAtoms.delete(node);
  treeState.nonvalidatedAtoms.delete(node);
  const graph2 = storeState.graphsByVersion.get(treeState.version);
  if (graph2) {
    const deps = graph2.nodeDeps.get(node);
    if (deps !== void 0) {
      graph2.nodeDeps.delete(node);
      for (const dep of deps) {
        var _graph$nodeToNodeSubs;
        (_graph$nodeToNodeSubs = graph2.nodeToNodeSubscriptions.get(dep)) === null || _graph$nodeToNodeSubs === void 0 ? void 0 : _graph$nodeToNodeSubs.delete(node);
      }
    }
    graph2.nodeToNodeSubscriptions.delete(node);
  }
  deleteNodeConfigIfPossible$1(node);
}
function nodesRetainedByZone(storeState, zone) {
  var _storeState$retention3;
  return (_storeState$retention3 = storeState.retention.nodesRetainedByZone.get(zone)) !== null && _storeState$retention3 !== void 0 ? _storeState$retention3 : emptySet$1;
}
function zonesThatCouldRetainNode(node) {
  const retainedBy = getNode$3(node).retainedBy;
  if (retainedBy === void 0 || retainedBy === "components" || retainedBy === "recoilRoot") {
    return [];
  } else if (retainedBy instanceof RetentionZone$2) {
    return [retainedBy];
  } else {
    return retainedBy;
  }
}
function scheduleOrPerformPossibleReleaseOfRetainable(store, retainable) {
  const state = store.getState();
  if (state.nextTree) {
    state.retention.retainablesToCheckForRelease.add(retainable);
  } else {
    releaseRetainablesNowOnCurrentTree(store, /* @__PURE__ */ new Set([retainable]));
  }
}
function updateRetainCount(store, retainable, delta) {
  var _map$get;
  if (!Recoil_gkx("recoil_memory_managament_2020")) {
    return;
  }
  const map = store.getState().retention.referenceCounts;
  const newCount = ((_map$get = map.get(retainable)) !== null && _map$get !== void 0 ? _map$get : 0) + delta;
  if (newCount === 0) {
    updateRetainCountToZero(store, retainable);
  } else {
    map.set(retainable, newCount);
  }
}
function updateRetainCountToZero(store, retainable) {
  if (!Recoil_gkx("recoil_memory_managament_2020")) {
    return;
  }
  const map = store.getState().retention.referenceCounts;
  map.delete(retainable);
  scheduleOrPerformPossibleReleaseOfRetainable(store, retainable);
}
function releaseScheduledRetainablesNow(store) {
  if (!Recoil_gkx("recoil_memory_managament_2020")) {
    return;
  }
  const state = store.getState();
  releaseRetainablesNowOnCurrentTree(store, state.retention.retainablesToCheckForRelease);
  state.retention.retainablesToCheckForRelease.clear();
}
function retainedByOptionWithDefault(r2) {
  return r2 === void 0 ? "recoilRoot" : r2;
}
var Recoil_Retention = {
  SUSPENSE_TIMEOUT_MS,
  updateRetainCount,
  updateRetainCountToZero,
  releaseScheduledRetainablesNow,
  retainedByOptionWithDefault
};
const {
  unstable_batchedUpdates
} = reactDom;
var ReactBatchedUpdates = {
  unstable_batchedUpdates
};
const {
  unstable_batchedUpdates: unstable_batchedUpdates$1
} = ReactBatchedUpdates;
var Recoil_ReactBatchedUpdates = {
  unstable_batchedUpdates: unstable_batchedUpdates$1
};
const {
  batchStart: batchStart$1
} = Recoil_RecoilValueInterface;
const {
  unstable_batchedUpdates: unstable_batchedUpdates$2
} = Recoil_ReactBatchedUpdates;
let batcher = unstable_batchedUpdates$2 || ((batchFn) => batchFn());
const setBatcher = (newBatcher) => {
  batcher = newBatcher;
};
const getBatcher = () => batcher;
const batchUpdates = (callback) => {
  batcher(() => {
    let batchEnd = () => void 0;
    try {
      batchEnd = batchStart$1();
      callback();
    } finally {
      batchEnd();
    }
  });
};
var Recoil_Batching = {
  getBatcher,
  setBatcher,
  batchUpdates
};
function* concatIterables(iters) {
  for (const iter of iters) {
    for (const val of iter) {
      yield val;
    }
  }
}
var Recoil_concatIterables = concatIterables;
const isSSR = (
  // $FlowFixMe(site=recoil) Window does not have a FlowType definition https://github.com/facebook/flow/issues/6709
  typeof Window === "undefined" || typeof window === "undefined"
);
const isWindow = (value) => !isSSR && // $FlowFixMe(site=recoil) Window does not have a FlowType definition https://github.com/facebook/flow/issues/6709
(value === window || value instanceof Window);
const isReactNative = typeof navigator !== "undefined" && navigator.product === "ReactNative";
var Recoil_Environment = {
  isSSR,
  isReactNative,
  isWindow
};
function memoizeWithArgsHash(fn, hashFunction) {
  let cache;
  return (...args) => {
    if (!cache) {
      cache = {};
    }
    const key = hashFunction(...args);
    if (!Object.hasOwnProperty.call(cache, key)) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
}
function memoizeOneWithArgsHash(fn, hashFunction) {
  let lastKey;
  let lastResult;
  return (...args) => {
    const key = hashFunction(...args);
    if (lastKey === key) {
      return lastResult;
    }
    lastKey = key;
    lastResult = fn(...args);
    return lastResult;
  };
}
function memoizeOneWithArgsHashAndInvalidation(fn, hashFunction) {
  let lastKey;
  let lastResult;
  const memoizedFn = (...args) => {
    const key = hashFunction(...args);
    if (lastKey === key) {
      return lastResult;
    }
    lastKey = key;
    lastResult = fn(...args);
    return lastResult;
  };
  const invalidate = () => {
    lastKey = null;
  };
  return [memoizedFn, invalidate];
}
var Recoil_Memoize = {
  memoizeWithArgsHash,
  memoizeOneWithArgsHash,
  memoizeOneWithArgsHashAndInvalidation
};
const {
  batchUpdates: batchUpdates$1
} = Recoil_Batching;
const {
  initializeNode: initializeNode$1,
  peekNodeInfo: peekNodeInfo$1
} = Recoil_FunctionalCore;
const {
  graph: graph$1
} = Recoil_Graph;
const {
  getNextStoreID: getNextStoreID$1
} = Recoil_Keys;
const {
  DEFAULT_VALUE: DEFAULT_VALUE$1,
  recoilValues: recoilValues$1,
  recoilValuesForKeys: recoilValuesForKeys$2
} = Recoil_Node;
const {
  AbstractRecoilValue: AbstractRecoilValue$2,
  getRecoilValueAsLoadable: getRecoilValueAsLoadable$1,
  setRecoilValue: setRecoilValue$1,
  setUnvalidatedRecoilValue: setUnvalidatedRecoilValue$1
} = Recoil_RecoilValueInterface;
const {
  updateRetainCount: updateRetainCount$1
} = Recoil_Retention;
const {
  setInvalidateMemoizedSnapshot: setInvalidateMemoizedSnapshot$1
} = Recoil_SnapshotCache;
const {
  getNextTreeStateVersion: getNextTreeStateVersion$2,
  makeEmptyStoreState: makeEmptyStoreState$1
} = Recoil_State;
const {
  isSSR: isSSR$1
} = Recoil_Environment;
const {
  memoizeOneWithArgsHashAndInvalidation: memoizeOneWithArgsHashAndInvalidation$1
} = Recoil_Memoize;
class Snapshot {
  // eslint-disable-next-line fb-www/no-uninitialized-properties
  constructor(storeState, parentStoreID) {
    _defineProperty(this, "_store", void 0);
    _defineProperty(this, "_refCount", 1);
    _defineProperty(this, "getLoadable", (recoilValue) => {
      this.checkRefCount_INTERNAL();
      return getRecoilValueAsLoadable$1(this._store, recoilValue);
    });
    _defineProperty(this, "getPromise", (recoilValue) => {
      this.checkRefCount_INTERNAL();
      return this.getLoadable(recoilValue).toPromise();
    });
    _defineProperty(this, "getNodes_UNSTABLE", (opt) => {
      this.checkRefCount_INTERNAL();
      if ((opt === null || opt === void 0 ? void 0 : opt.isModified) === true) {
        if ((opt === null || opt === void 0 ? void 0 : opt.isInitialized) === false) {
          return [];
        }
        const state = this._store.getState().currentTree;
        return recoilValuesForKeys$2(state.dirtyAtoms);
      }
      const knownAtoms = this._store.getState().knownAtoms;
      const knownSelectors = this._store.getState().knownSelectors;
      return (opt === null || opt === void 0 ? void 0 : opt.isInitialized) == null ? recoilValues$1.values() : opt.isInitialized === true ? recoilValuesForKeys$2(Recoil_concatIterables([knownAtoms, knownSelectors])) : Recoil_filterIterable(recoilValues$1.values(), ({
        key
      }) => !knownAtoms.has(key) && !knownSelectors.has(key));
    });
    _defineProperty(this, "getInfo_UNSTABLE", ({
      key
    }) => {
      this.checkRefCount_INTERNAL();
      return peekNodeInfo$1(this._store, this._store.getState().currentTree, key);
    });
    _defineProperty(this, "map", (mapper) => {
      this.checkRefCount_INTERNAL();
      const mutableSnapshot = new MutableSnapshot(this, batchUpdates$1);
      mapper(mutableSnapshot);
      return mutableSnapshot;
    });
    _defineProperty(this, "asyncMap", async (mapper) => {
      this.checkRefCount_INTERNAL();
      const mutableSnapshot = new MutableSnapshot(this, batchUpdates$1);
      mutableSnapshot.retain();
      await mapper(mutableSnapshot);
      mutableSnapshot.autoRelease_INTERNAL();
      return mutableSnapshot;
    });
    this._store = {
      storeID: getNextStoreID$1(),
      parentStoreID,
      getState: () => storeState,
      replaceState: (replacer) => {
        storeState.currentTree = replacer(storeState.currentTree);
      },
      getGraph: (version) => {
        const graphs = storeState.graphsByVersion;
        if (graphs.has(version)) {
          return Recoil_nullthrows(graphs.get(version));
        }
        const newGraph = graph$1();
        graphs.set(version, newGraph);
        return newGraph;
      },
      subscribeToTransactions: () => ({
        release: () => {
        }
      }),
      addTransactionMetadata: () => {
        throw Recoil_err("Cannot subscribe to Snapshots");
      }
    };
    for (const nodeKey of this._store.getState().knownAtoms) {
      initializeNode$1(this._store, nodeKey, "get");
      updateRetainCount$1(this._store, nodeKey, 1);
    }
    this.autoRelease_INTERNAL();
  }
  retain() {
    if (this._refCount <= 0)
      ;
    this._refCount++;
    let released = false;
    return () => {
      if (!released) {
        released = true;
        this._release();
      }
    };
  }
  /**
   * Release the snapshot on the next tick.  This means the snapshot is retained
   * during the execution of the current function using it.
   */
  autoRelease_INTERNAL() {
    if (!isSSR$1) {
      window.setTimeout(() => this._release(), 10);
    }
  }
  _release() {
    this._refCount--;
    if (this._refCount === 0) {
      this._store.getState().nodeCleanupFunctions.forEach((cleanup) => cleanup());
      this._store.getState().nodeCleanupFunctions.clear();
      if (!Recoil_gkx("recoil_memory_managament_2020")) {
        return;
      }
    } else if (this._refCount < 0)
      ;
  }
  isRetained() {
    return this._refCount > 0;
  }
  checkRefCount_INTERNAL() {
    if (Recoil_gkx("recoil_memory_managament_2020") && this._refCount <= 0)
      ;
  }
  getStore_INTERNAL() {
    this.checkRefCount_INTERNAL();
    return this._store;
  }
  getID() {
    this.checkRefCount_INTERNAL();
    return this._store.getState().currentTree.stateID;
  }
  getStoreID() {
    this.checkRefCount_INTERNAL();
    return this._store.storeID;
  }
  // We want to allow the methods to be destructured and used as accessors
  /* eslint-disable fb-www/extra-arrow-initializer */
  /* eslint-enable fb-www/extra-arrow-initializer */
}
function cloneStoreState(store, treeState, bumpVersion = false) {
  const storeState = store.getState();
  const version = bumpVersion ? getNextTreeStateVersion$2() : treeState.version;
  return {
    // Always clone the TreeState to isolate stores from accidental mutations.
    // For example, reading a selector from a cloned snapshot shouldn't cache
    // in the original treestate which may cause the original to skip
    // initialization of upstream atoms.
    currentTree: {
      // TODO snapshots shouldn't really have versions because a new version number
      // is always assigned when the snapshot is gone to.
      version: bumpVersion ? version : treeState.version,
      stateID: bumpVersion ? version : treeState.stateID,
      transactionMetadata: {
        ...treeState.transactionMetadata
      },
      dirtyAtoms: new Set(treeState.dirtyAtoms),
      atomValues: treeState.atomValues.clone(),
      nonvalidatedAtoms: treeState.nonvalidatedAtoms.clone()
    },
    commitDepth: 0,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(storeState.knownAtoms),
    // FIXME here's a copy
    knownSelectors: new Set(storeState.knownSelectors),
    // FIXME here's a copy
    transactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeTransactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeToComponentSubscriptions: /* @__PURE__ */ new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: /* @__PURE__ */ new Set(),
    graphsByVersion: (/* @__PURE__ */ new Map()).set(version, store.getGraph(treeState.version)),
    retention: {
      referenceCounts: /* @__PURE__ */ new Map(),
      nodesRetainedByZone: /* @__PURE__ */ new Map(),
      retainablesToCheckForRelease: /* @__PURE__ */ new Set()
    },
    // FIXME here's a copy
    // Create blank cleanup handlers for atoms so snapshots don't re-run
    // atom effects.
    nodeCleanupFunctions: new Map(Recoil_mapIterable(storeState.nodeCleanupFunctions.entries(), ([key]) => [key, () => {
    }]))
  };
}
function freshSnapshot(initializeState) {
  const snapshot = new Snapshot(makeEmptyStoreState$1());
  return initializeState != null ? snapshot.map(initializeState) : snapshot;
}
const [memoizedCloneSnapshot, invalidateMemoizedSnapshot$2] = memoizeOneWithArgsHashAndInvalidation$1(
  // $FlowFixMe[missing-local-annot]
  (store, version) => {
    var _storeState$nextTree;
    const storeState = store.getState();
    const treeState = version === "latest" ? (_storeState$nextTree = storeState.nextTree) !== null && _storeState$nextTree !== void 0 ? _storeState$nextTree : storeState.currentTree : Recoil_nullthrows(storeState.previousTree);
    return new Snapshot(cloneStoreState(store, treeState), store.storeID);
  },
  (store, version) => {
    var _store$getState$nextT, _store$getState$previ;
    return String(version) + String(store.storeID) + String((_store$getState$nextT = store.getState().nextTree) === null || _store$getState$nextT === void 0 ? void 0 : _store$getState$nextT.version) + String(store.getState().currentTree.version) + String((_store$getState$previ = store.getState().previousTree) === null || _store$getState$previ === void 0 ? void 0 : _store$getState$previ.version);
  }
);
setInvalidateMemoizedSnapshot$1(invalidateMemoizedSnapshot$2);
function cloneSnapshot(store, version = "latest") {
  const snapshot = memoizedCloneSnapshot(store, version);
  if (!snapshot.isRetained()) {
    invalidateMemoizedSnapshot$2();
    return memoizedCloneSnapshot(store, version);
  }
  return snapshot;
}
class MutableSnapshot extends Snapshot {
  constructor(snapshot, batch) {
    super(cloneStoreState(snapshot.getStore_INTERNAL(), snapshot.getStore_INTERNAL().getState().currentTree, true), snapshot.getStoreID());
    _defineProperty(this, "_batch", void 0);
    _defineProperty(this, "set", (recoilState, newValueOrUpdater) => {
      this.checkRefCount_INTERNAL();
      const store = this.getStore_INTERNAL();
      this._batch(() => {
        updateRetainCount$1(store, recoilState.key, 1);
        setRecoilValue$1(this.getStore_INTERNAL(), recoilState, newValueOrUpdater);
      });
    });
    _defineProperty(this, "reset", (recoilState) => {
      this.checkRefCount_INTERNAL();
      const store = this.getStore_INTERNAL();
      this._batch(() => {
        updateRetainCount$1(store, recoilState.key, 1);
        setRecoilValue$1(this.getStore_INTERNAL(), recoilState, DEFAULT_VALUE$1);
      });
    });
    _defineProperty(this, "setUnvalidatedAtomValues_DEPRECATED", (values) => {
      this.checkRefCount_INTERNAL();
      const store = this.getStore_INTERNAL();
      batchUpdates$1(() => {
        for (const [k2, v2] of values.entries()) {
          updateRetainCount$1(store, k2, 1);
          setUnvalidatedRecoilValue$1(store, new AbstractRecoilValue$2(k2), v2);
        }
      });
    });
    this._batch = batch;
  }
}
var Recoil_Snapshot = {
  Snapshot,
  MutableSnapshot,
  freshSnapshot,
  cloneSnapshot
};
var Recoil_Snapshot_1 = Recoil_Snapshot.Snapshot;
var Recoil_Snapshot_2 = Recoil_Snapshot.MutableSnapshot;
var Recoil_Snapshot_3 = Recoil_Snapshot.freshSnapshot;
var Recoil_Snapshot_4 = Recoil_Snapshot.cloneSnapshot;
var Recoil_Snapshot$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Snapshot: Recoil_Snapshot_1,
  MutableSnapshot: Recoil_Snapshot_2,
  freshSnapshot: Recoil_Snapshot_3,
  cloneSnapshot: Recoil_Snapshot_4
});
function unionSets(...sets) {
  const result = /* @__PURE__ */ new Set();
  for (const set2 of sets) {
    for (const value of set2) {
      result.add(value);
    }
  }
  return result;
}
var Recoil_unionSets = unionSets;
const {
  useRef
} = React;
function useRefInitOnce(initialValue) {
  const ref = useRef(initialValue);
  if (ref.current === initialValue && typeof initialValue === "function") {
    ref.current = initialValue();
  }
  return ref;
}
var Recoil_useRefInitOnce = useRefInitOnce;
const {
  getNextTreeStateVersion: getNextTreeStateVersion$3,
  makeEmptyStoreState: makeEmptyStoreState$2
} = Recoil_State;
const {
  cleanUpNode: cleanUpNode$2,
  getDownstreamNodes: getDownstreamNodes$2,
  initializeNode: initializeNode$2,
  setNodeValue: setNodeValue$2,
  setUnvalidatedAtomValue_DEPRECATED: setUnvalidatedAtomValue_DEPRECATED$1
} = Recoil_FunctionalCore;
const {
  graph: graph$2
} = Recoil_Graph;
const {
  cloneGraph: cloneGraph$1
} = Recoil_Graph;
const {
  getNextStoreID: getNextStoreID$2
} = Recoil_Keys;
const {
  createMutableSource: createMutableSource$1,
  reactMode: reactMode$2
} = Recoil_ReactMode;
const {
  applyAtomValueWrites: applyAtomValueWrites$1
} = Recoil_RecoilValueInterface;
const {
  releaseScheduledRetainablesNow: releaseScheduledRetainablesNow$1
} = Recoil_Retention;
const {
  freshSnapshot: freshSnapshot$1
} = Recoil_Snapshot$1;
const {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef: useRef$1,
  useState
} = React;
function notInAContext() {
  throw Recoil_err("This component must be used inside a <RecoilRoot> component.");
}
const defaultStore = Object.freeze({
  storeID: getNextStoreID$2(),
  getState: notInAContext,
  replaceState: notInAContext,
  getGraph: notInAContext,
  subscribeToTransactions: notInAContext,
  addTransactionMetadata: notInAContext
});
let stateReplacerIsBeingExecuted = false;
function startNextTreeIfNeeded(store) {
  if (stateReplacerIsBeingExecuted) {
    throw Recoil_err("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");
  }
  const storeState = store.getState();
  if (storeState.nextTree === null) {
    if (Recoil_gkx("recoil_memory_managament_2020") && Recoil_gkx("recoil_release_on_cascading_update_killswitch_2021")) {
      if (storeState.commitDepth > 0) {
        releaseScheduledRetainablesNow$1(store);
      }
    }
    const version = storeState.currentTree.version;
    const nextVersion = getNextTreeStateVersion$3();
    storeState.nextTree = {
      ...storeState.currentTree,
      version: nextVersion,
      stateID: nextVersion,
      dirtyAtoms: /* @__PURE__ */ new Set(),
      transactionMetadata: {}
    };
    storeState.graphsByVersion.set(nextVersion, cloneGraph$1(Recoil_nullthrows(storeState.graphsByVersion.get(version))));
  }
}
const AppContext = React.createContext({
  current: defaultStore
});
const useStoreRef = () => useContext(AppContext);
const MutableSourceContext = React.createContext(null);
function useRecoilMutableSource() {
  const mutableSource = useContext(MutableSourceContext);
  return mutableSource;
}
function notifyComponents(store, storeState, treeState) {
  const dependentNodes = getDownstreamNodes$2(store, treeState, treeState.dirtyAtoms);
  for (const key of dependentNodes) {
    const comps = storeState.nodeToComponentSubscriptions.get(key);
    if (comps) {
      for (const [_subID, [_debugName, callback]] of comps) {
        callback(treeState);
      }
    }
  }
}
function sendEndOfBatchNotifications(store) {
  const storeState = store.getState();
  const treeState = storeState.currentTree;
  const dirtyAtoms = treeState.dirtyAtoms;
  if (dirtyAtoms.size) {
    for (const [key, subscriptions] of storeState.nodeTransactionSubscriptions) {
      if (dirtyAtoms.has(key)) {
        for (const [_, subscription] of subscriptions) {
          subscription(store);
        }
      }
    }
    for (const [_, subscription] of storeState.transactionSubscriptions) {
      subscription(store);
    }
    if (!reactMode$2().early || storeState.suspendedComponentResolvers.size > 0) {
      notifyComponents(store, storeState, treeState);
      storeState.suspendedComponentResolvers.forEach((cb2) => cb2());
      storeState.suspendedComponentResolvers.clear();
    }
  }
  storeState.queuedComponentCallbacks_DEPRECATED.forEach((cb2) => cb2(treeState));
  storeState.queuedComponentCallbacks_DEPRECATED.splice(0, storeState.queuedComponentCallbacks_DEPRECATED.length);
}
function endBatch(store) {
  const storeState = store.getState();
  storeState.commitDepth++;
  try {
    const {
      nextTree
    } = storeState;
    if (nextTree == null) {
      return;
    }
    storeState.previousTree = storeState.currentTree;
    storeState.currentTree = nextTree;
    storeState.nextTree = null;
    sendEndOfBatchNotifications(store);
    if (storeState.previousTree != null) {
      storeState.graphsByVersion.delete(storeState.previousTree.version);
    } else {
      Recoil_recoverableViolation("Ended batch with no previous state, which is unexpected", "recoil");
    }
    storeState.previousTree = null;
    if (Recoil_gkx("recoil_memory_managament_2020")) {
      if (nextTree == null) {
        releaseScheduledRetainablesNow$1(store);
      }
    }
  } finally {
    storeState.commitDepth--;
  }
}
function Batcher({
  setNotifyBatcherOfChange
}) {
  const storeRef = useStoreRef();
  const [, setState] = useState([]);
  setNotifyBatcherOfChange(() => setState({}));
  useEffect(() => {
    setNotifyBatcherOfChange(() => setState({}));
    return () => {
      setNotifyBatcherOfChange(() => {
      });
    };
  }, [setNotifyBatcherOfChange]);
  useEffect(() => {
    Recoil_Queue.enqueueExecution("Batcher", () => {
      endBatch(storeRef.current);
    });
  });
  return null;
}
function initialStoreState_DEPRECATED(store, initializeState) {
  const initial = makeEmptyStoreState$2();
  initializeState({
    set: (atom2, value) => {
      const state = initial.currentTree;
      const writes = setNodeValue$2(store, state, atom2.key, value);
      const writtenNodes = new Set(writes.keys());
      const nonvalidatedAtoms = state.nonvalidatedAtoms.clone();
      for (const n2 of writtenNodes) {
        nonvalidatedAtoms.delete(n2);
      }
      initial.currentTree = {
        ...state,
        dirtyAtoms: Recoil_unionSets(state.dirtyAtoms, writtenNodes),
        atomValues: applyAtomValueWrites$1(state.atomValues, writes),
        // NB: PLEASE un-export applyAtomValueWrites when deleting this code
        nonvalidatedAtoms
      };
    },
    setUnvalidatedAtomValues: (atomValues) => {
      atomValues.forEach((v2, k2) => {
        initial.currentTree = setUnvalidatedAtomValue_DEPRECATED$1(initial.currentTree, k2, v2);
      });
    }
  });
  return initial;
}
function initialStoreState(initializeState) {
  const snapshot = freshSnapshot$1(initializeState);
  const storeState = snapshot.getStore_INTERNAL().getState();
  snapshot.retain();
  storeState.nodeCleanupFunctions.forEach((cleanup) => cleanup());
  storeState.nodeCleanupFunctions.clear();
  return storeState;
}
let nextID = 0;
function RecoilRoot_INTERNAL({
  initializeState_DEPRECATED,
  initializeState,
  store_INTERNAL: storeProp,
  // For use with React "context bridging"
  children
}) {
  let storeStateRef;
  const getGraph = (version) => {
    const graphs = storeStateRef.current.graphsByVersion;
    if (graphs.has(version)) {
      return Recoil_nullthrows(graphs.get(version));
    }
    const newGraph = graph$2();
    graphs.set(version, newGraph);
    return newGraph;
  };
  const subscribeToTransactions = (callback, key) => {
    if (key == null) {
      const {
        transactionSubscriptions
      } = storeRef.current.getState();
      const id2 = nextID++;
      transactionSubscriptions.set(id2, callback);
      return {
        release: () => {
          transactionSubscriptions.delete(id2);
        }
      };
    } else {
      const {
        nodeTransactionSubscriptions
      } = storeRef.current.getState();
      if (!nodeTransactionSubscriptions.has(key)) {
        nodeTransactionSubscriptions.set(key, /* @__PURE__ */ new Map());
      }
      const id2 = nextID++;
      Recoil_nullthrows(nodeTransactionSubscriptions.get(key)).set(id2, callback);
      return {
        release: () => {
          const subs = nodeTransactionSubscriptions.get(key);
          if (subs) {
            subs.delete(id2);
            if (subs.size === 0) {
              nodeTransactionSubscriptions.delete(key);
            }
          }
        }
      };
    }
  };
  const addTransactionMetadata = (metadata) => {
    startNextTreeIfNeeded(storeRef.current);
    for (const k2 of Object.keys(metadata)) {
      Recoil_nullthrows(storeRef.current.getState().nextTree).transactionMetadata[k2] = metadata[k2];
    }
  };
  const replaceState = (replacer) => {
    startNextTreeIfNeeded(storeRef.current);
    const nextTree = Recoil_nullthrows(storeStateRef.current.nextTree);
    let replaced;
    try {
      stateReplacerIsBeingExecuted = true;
      replaced = replacer(nextTree);
    } finally {
      stateReplacerIsBeingExecuted = false;
    }
    if (replaced === nextTree) {
      return;
    }
    storeStateRef.current.nextTree = replaced;
    if (reactMode$2().early) {
      notifyComponents(storeRef.current, storeStateRef.current, replaced);
    }
    Recoil_nullthrows(notifyBatcherOfChange.current)();
  };
  const notifyBatcherOfChange = useRef$1(null);
  const setNotifyBatcherOfChange = useCallback((x2) => {
    notifyBatcherOfChange.current = x2;
  }, [notifyBatcherOfChange]);
  const storeRef = Recoil_useRefInitOnce(() => storeProp !== null && storeProp !== void 0 ? storeProp : {
    storeID: getNextStoreID$2(),
    getState: () => storeStateRef.current,
    replaceState,
    getGraph,
    subscribeToTransactions,
    addTransactionMetadata
  });
  if (storeProp != null) {
    storeRef.current = storeProp;
  }
  storeStateRef = Recoil_useRefInitOnce(() => initializeState_DEPRECATED != null ? initialStoreState_DEPRECATED(storeRef.current, initializeState_DEPRECATED) : initializeState != null ? initialStoreState(initializeState) : makeEmptyStoreState$2());
  const mutableSource = useMemo(() => createMutableSource$1 === null || createMutableSource$1 === void 0 ? void 0 : createMutableSource$1(storeStateRef, () => storeStateRef.current.currentTree.version), [storeStateRef]);
  useEffect(() => {
    const store = storeRef.current;
    for (const atomKey of new Set(store.getState().knownAtoms)) {
      initializeNode$2(store, atomKey, "get");
    }
    return () => {
      for (const atomKey of store.getState().knownAtoms) {
        cleanUpNode$2(store, atomKey);
      }
    };
  }, [storeRef]);
  return /* @__PURE__ */ React.createElement(AppContext.Provider, {
    value: storeRef
  }, /* @__PURE__ */ React.createElement(MutableSourceContext.Provider, {
    value: mutableSource
  }, /* @__PURE__ */ React.createElement(Batcher, {
    setNotifyBatcherOfChange
  }), children));
}
function RecoilRoot(props) {
  const {
    override,
    ...propsExceptOverride
  } = props;
  const ancestorStoreRef = useStoreRef();
  if (override === false && ancestorStoreRef.current !== defaultStore) {
    return props.children;
  }
  return /* @__PURE__ */ React.createElement(RecoilRoot_INTERNAL, propsExceptOverride);
}
function useRecoilStoreID() {
  return useStoreRef().current.storeID;
}
var Recoil_RecoilRoot = {
  RecoilRoot,
  useStoreRef,
  useRecoilMutableSource,
  useRecoilStoreID,
  notifyComponents_FOR_TESTING: notifyComponents,
  sendEndOfBatchNotifications_FOR_TESTING: sendEndOfBatchNotifications
};
function shallowArrayEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0, l2 = a.length; i < l2; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
var Recoil_shallowArrayEqual = shallowArrayEqual;
const {
  useEffect: useEffect$1,
  useRef: useRef$2
} = React;
function usePrevious(value) {
  const ref = useRef$2();
  useEffect$1(() => {
    ref.current = value;
  });
  return ref.current;
}
var Recoil_usePrevious = usePrevious;
const {
  useStoreRef: useStoreRef$1
} = Recoil_RecoilRoot;
const {
  SUSPENSE_TIMEOUT_MS: SUSPENSE_TIMEOUT_MS$1
} = Recoil_Retention;
const {
  updateRetainCount: updateRetainCount$2
} = Recoil_Retention;
const {
  RetentionZone: RetentionZone$3
} = Recoil_RetentionZone;
const {
  useEffect: useEffect$2,
  useRef: useRef$3
} = React;
const {
  isSSR: isSSR$2
} = Recoil_Environment;
function useRetain(toRetain) {
  if (!Recoil_gkx("recoil_memory_managament_2020")) {
    return;
  }
  return useRetain_ACTUAL(toRetain);
}
function useRetain_ACTUAL(toRetain) {
  const array = Array.isArray(toRetain) ? toRetain : [toRetain];
  const retainables = array.map((a) => a instanceof RetentionZone$3 ? a : a.key);
  const storeRef = useStoreRef$1();
  useEffect$2(() => {
    if (!Recoil_gkx("recoil_memory_managament_2020")) {
      return;
    }
    const store = storeRef.current;
    if (timeoutID.current && !isSSR$2) {
      window.clearTimeout(timeoutID.current);
      timeoutID.current = null;
    } else {
      for (const r2 of retainables) {
        updateRetainCount$2(store, r2, 1);
      }
    }
    return () => {
      for (const r2 of retainables) {
        updateRetainCount$2(store, r2, -1);
      }
    };
  }, [storeRef, ...retainables]);
  const timeoutID = useRef$3();
  const previousRetainables = Recoil_usePrevious(retainables);
  if (!isSSR$2 && (previousRetainables === void 0 || !Recoil_shallowArrayEqual(previousRetainables, retainables))) {
    const store = storeRef.current;
    for (const r2 of retainables) {
      updateRetainCount$2(store, r2, 1);
    }
    if (previousRetainables) {
      for (const r2 of previousRetainables) {
        updateRetainCount$2(store, r2, -1);
      }
    }
    if (timeoutID.current) {
      window.clearTimeout(timeoutID.current);
    }
    timeoutID.current = window.setTimeout(() => {
      timeoutID.current = null;
      for (const r2 of retainables) {
        updateRetainCount$2(store, r2, -1);
      }
    }, SUSPENSE_TIMEOUT_MS$1);
  }
}
var Recoil_useRetain = useRetain;
function useComponentName() {
  return "<component name not available>";
}
var Recoil_useComponentName = useComponentName;
const {
  batchUpdates: batchUpdates$2
} = Recoil_Batching;
const {
  DEFAULT_VALUE: DEFAULT_VALUE$2
} = Recoil_Node;
const {
  currentRendererSupportsUseSyncExternalStore: currentRendererSupportsUseSyncExternalStore$1,
  reactMode: reactMode$3,
  useMutableSource: useMutableSource$1,
  useSyncExternalStore: useSyncExternalStore$1
} = Recoil_ReactMode;
const {
  useRecoilMutableSource: useRecoilMutableSource$1,
  useStoreRef: useStoreRef$2
} = Recoil_RecoilRoot;
const {
  AbstractRecoilValue: AbstractRecoilValue$3,
  getRecoilValueAsLoadable: getRecoilValueAsLoadable$2,
  setRecoilValue: setRecoilValue$2,
  setUnvalidatedRecoilValue: setUnvalidatedRecoilValue$2,
  subscribeToRecoilValue: subscribeToRecoilValue$1
} = Recoil_RecoilValueInterface;
const {
  useCallback: useCallback$1,
  useEffect: useEffect$3,
  useMemo: useMemo$1,
  useRef: useRef$4,
  useState: useState$1
} = React;
const {
  setByAddingToSet: setByAddingToSet$2
} = Recoil_CopyOnWrite;
const {
  isSSR: isSSR$3
} = Recoil_Environment;
function handleLoadable(loadable, recoilValue, storeRef) {
  if (loadable.state === "hasValue") {
    return loadable.contents;
  } else if (loadable.state === "loading") {
    const promise = new Promise((resolve) => {
      const suspendedComponentResolvers = storeRef.current.getState().suspendedComponentResolvers;
      suspendedComponentResolvers.add(resolve);
      if (isSSR$3 && Recoil_isPromise(loadable.contents)) {
        loadable.contents.finally(() => {
          suspendedComponentResolvers.delete(resolve);
        });
      }
    });
    throw promise;
  } else if (loadable.state === "hasError") {
    throw loadable.contents;
  } else {
    throw Recoil_err(`Invalid value of loadable atom "${recoilValue.key}"`);
  }
}
function useRecoilInterface_DEPRECATED() {
  const componentName = Recoil_useComponentName();
  const storeRef = useStoreRef$2();
  const [, forceUpdate] = useState$1([]);
  const recoilValuesUsed = useRef$4(/* @__PURE__ */ new Set());
  recoilValuesUsed.current = /* @__PURE__ */ new Set();
  const previousSubscriptions = useRef$4(/* @__PURE__ */ new Set());
  const subscriptions = useRef$4(/* @__PURE__ */ new Map());
  const unsubscribeFrom = useCallback$1((key) => {
    const sub = subscriptions.current.get(key);
    if (sub) {
      sub.release();
      subscriptions.current.delete(key);
    }
  }, [subscriptions]);
  const updateState = useCallback$1((_state, key) => {
    if (subscriptions.current.has(key)) {
      forceUpdate([]);
    }
  }, []);
  useEffect$3(() => {
    const store = storeRef.current;
    Recoil_differenceSets(recoilValuesUsed.current, previousSubscriptions.current).forEach((key) => {
      if (subscriptions.current.has(key)) {
        return;
      }
      const sub = subscribeToRecoilValue$1(store, new AbstractRecoilValue$3(key), (state2) => updateState(state2, key), componentName);
      subscriptions.current.set(key, sub);
      const state = store.getState();
      if (state.nextTree) {
        store.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
          updateState(store.getState(), key);
        });
      } else {
        updateState(store.getState(), key);
      }
    });
    Recoil_differenceSets(previousSubscriptions.current, recoilValuesUsed.current).forEach((key) => {
      unsubscribeFrom(key);
    });
    previousSubscriptions.current = recoilValuesUsed.current;
  });
  useEffect$3(() => {
    const currentSubscriptions = subscriptions.current;
    Recoil_differenceSets(recoilValuesUsed.current, new Set(currentSubscriptions.keys())).forEach((key) => {
      const sub = subscribeToRecoilValue$1(storeRef.current, new AbstractRecoilValue$3(key), (state) => updateState(state, key), componentName);
      currentSubscriptions.set(key, sub);
    });
    return () => currentSubscriptions.forEach((_, key) => unsubscribeFrom(key));
  }, [componentName, storeRef, unsubscribeFrom, updateState]);
  return useMemo$1(() => {
    function useSetRecoilState2(recoilState) {
      return (newValueOrUpdater) => {
        setRecoilValue$2(storeRef.current, recoilState, newValueOrUpdater);
      };
    }
    function useResetRecoilState2(recoilState) {
      return () => setRecoilValue$2(storeRef.current, recoilState, DEFAULT_VALUE$2);
    }
    function useRecoilValueLoadable2(recoilValue) {
      var _storeState$nextTree;
      if (!recoilValuesUsed.current.has(recoilValue.key)) {
        recoilValuesUsed.current = setByAddingToSet$2(recoilValuesUsed.current, recoilValue.key);
      }
      const storeState = storeRef.current.getState();
      return getRecoilValueAsLoadable$2(storeRef.current, recoilValue, reactMode$3().early ? (_storeState$nextTree = storeState.nextTree) !== null && _storeState$nextTree !== void 0 ? _storeState$nextTree : storeState.currentTree : storeState.currentTree);
    }
    function useRecoilValue2(recoilValue) {
      const loadable = useRecoilValueLoadable2(recoilValue);
      return handleLoadable(loadable, recoilValue, storeRef);
    }
    function useRecoilState2(recoilState) {
      return [useRecoilValue2(recoilState), useSetRecoilState2(recoilState)];
    }
    function useRecoilStateLoadable2(recoilState) {
      return [useRecoilValueLoadable2(recoilState), useSetRecoilState2(recoilState)];
    }
    return {
      getRecoilValue: useRecoilValue2,
      getRecoilValueLoadable: useRecoilValueLoadable2,
      getRecoilState: useRecoilState2,
      getRecoilStateLoadable: useRecoilStateLoadable2,
      getSetRecoilState: useSetRecoilState2,
      getResetRecoilState: useResetRecoilState2
    };
  }, [recoilValuesUsed, storeRef]);
}
const recoilComponentGetRecoilValueCount_FOR_TESTING = {
  current: 0
};
function useRecoilValueLoadable_SYNC_EXTERNAL_STORE(recoilValue) {
  const storeRef = useStoreRef$2();
  const componentName = Recoil_useComponentName();
  const getSnapshot = useCallback$1(() => {
    var _storeState$nextTree2;
    const store = storeRef.current;
    const storeState = store.getState();
    const treeState = reactMode$3().early ? (_storeState$nextTree2 = storeState.nextTree) !== null && _storeState$nextTree2 !== void 0 ? _storeState$nextTree2 : storeState.currentTree : storeState.currentTree;
    const loadable = getRecoilValueAsLoadable$2(store, recoilValue, treeState);
    return {
      loadable,
      key: recoilValue.key
    };
  }, [storeRef, recoilValue]);
  const memoizePreviousSnapshot = useCallback$1((getState) => {
    let prevState;
    return () => {
      var _prevState, _prevState2;
      const nextState = getState();
      if ((_prevState = prevState) !== null && _prevState !== void 0 && _prevState.loadable.is(nextState.loadable) && ((_prevState2 = prevState) === null || _prevState2 === void 0 ? void 0 : _prevState2.key) === nextState.key) {
        return prevState;
      }
      prevState = nextState;
      return nextState;
    };
  }, []);
  const getMemoizedSnapshot = useMemo$1(() => memoizePreviousSnapshot(getSnapshot), [getSnapshot, memoizePreviousSnapshot]);
  const subscribe = useCallback$1((notify) => {
    const store = storeRef.current;
    const subscription = subscribeToRecoilValue$1(store, recoilValue, notify, componentName);
    return subscription.release;
  }, [storeRef, recoilValue, componentName]);
  return useSyncExternalStore$1(
    subscribe,
    getMemoizedSnapshot,
    // getSnapshot()
    getMemoizedSnapshot
    // getServerSnapshot() for SSR support
  ).loadable;
}
function useRecoilValueLoadable_MUTABLE_SOURCE(recoilValue) {
  const storeRef = useStoreRef$2();
  const getLoadable = useCallback$1(() => {
    var _storeState$nextTree3;
    const store = storeRef.current;
    const storeState = store.getState();
    const treeState = reactMode$3().early ? (_storeState$nextTree3 = storeState.nextTree) !== null && _storeState$nextTree3 !== void 0 ? _storeState$nextTree3 : storeState.currentTree : storeState.currentTree;
    return getRecoilValueAsLoadable$2(store, recoilValue, treeState);
  }, [storeRef, recoilValue]);
  const getLoadableWithTesting = useCallback$1(() => {
    return getLoadable();
  }, [getLoadable]);
  const componentName = Recoil_useComponentName();
  const subscribe = useCallback$1((_storeState, notify) => {
    const store = storeRef.current;
    const subscription = subscribeToRecoilValue$1(store, recoilValue, () => {
      if (!Recoil_gkx("recoil_suppress_rerender_in_callback")) {
        return notify();
      }
      const newLoadable = getLoadable();
      if (!prevLoadableRef.current.is(newLoadable)) {
        notify();
      }
      prevLoadableRef.current = newLoadable;
    }, componentName);
    return subscription.release;
  }, [storeRef, recoilValue, componentName, getLoadable]);
  const source = useRecoilMutableSource$1();
  if (source == null) {
    throw Recoil_err("Recoil hooks must be used in components contained within a <RecoilRoot> component.");
  }
  const loadable = useMutableSource$1(source, getLoadableWithTesting, subscribe);
  const prevLoadableRef = useRef$4(loadable);
  useEffect$3(() => {
    prevLoadableRef.current = loadable;
  });
  return loadable;
}
function useRecoilValueLoadable_TRANSITION_SUPPORT(recoilValue) {
  const storeRef = useStoreRef$2();
  const componentName = Recoil_useComponentName();
  const getLoadable = useCallback$1(() => {
    var _storeState$nextTree4;
    const store = storeRef.current;
    const storeState = store.getState();
    const treeState = reactMode$3().early ? (_storeState$nextTree4 = storeState.nextTree) !== null && _storeState$nextTree4 !== void 0 ? _storeState$nextTree4 : storeState.currentTree : storeState.currentTree;
    return getRecoilValueAsLoadable$2(store, recoilValue, treeState);
  }, [storeRef, recoilValue]);
  const getState = useCallback$1(() => ({
    loadable: getLoadable(),
    key: recoilValue.key
  }), [getLoadable, recoilValue.key]);
  const updateState = useCallback$1((prevState) => {
    const nextState = getState();
    return prevState.loadable.is(nextState.loadable) && prevState.key === nextState.key ? prevState : nextState;
  }, [getState]);
  useEffect$3(() => {
    const subscription = subscribeToRecoilValue$1(storeRef.current, recoilValue, (_state) => {
      setState(updateState);
    }, componentName);
    setState(updateState);
    return subscription.release;
  }, [componentName, recoilValue, storeRef, updateState]);
  const [state, setState] = useState$1(getState);
  return state.key !== recoilValue.key ? getState().loadable : state.loadable;
}
function useRecoilValueLoadable_LEGACY(recoilValue) {
  const storeRef = useStoreRef$2();
  const [, forceUpdate] = useState$1([]);
  const componentName = Recoil_useComponentName();
  const getLoadable = useCallback$1(() => {
    var _storeState$nextTree5;
    const store = storeRef.current;
    const storeState = store.getState();
    const treeState = reactMode$3().early ? (_storeState$nextTree5 = storeState.nextTree) !== null && _storeState$nextTree5 !== void 0 ? _storeState$nextTree5 : storeState.currentTree : storeState.currentTree;
    return getRecoilValueAsLoadable$2(store, recoilValue, treeState);
  }, [storeRef, recoilValue]);
  const loadable = getLoadable();
  const prevLoadableRef = useRef$4(loadable);
  useEffect$3(() => {
    prevLoadableRef.current = loadable;
  });
  useEffect$3(() => {
    const store = storeRef.current;
    const storeState = store.getState();
    const subscription = subscribeToRecoilValue$1(store, recoilValue, (_state) => {
      var _prevLoadableRef$curr;
      if (!Recoil_gkx("recoil_suppress_rerender_in_callback")) {
        return forceUpdate([]);
      }
      const newLoadable = getLoadable();
      if (!((_prevLoadableRef$curr = prevLoadableRef.current) !== null && _prevLoadableRef$curr !== void 0 && _prevLoadableRef$curr.is(newLoadable))) {
        forceUpdate(newLoadable);
      }
      prevLoadableRef.current = newLoadable;
    }, componentName);
    if (storeState.nextTree) {
      store.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
        prevLoadableRef.current = null;
        forceUpdate([]);
      });
    } else {
      var _prevLoadableRef$curr2;
      if (!Recoil_gkx("recoil_suppress_rerender_in_callback")) {
        return forceUpdate([]);
      }
      const newLoadable = getLoadable();
      if (!((_prevLoadableRef$curr2 = prevLoadableRef.current) !== null && _prevLoadableRef$curr2 !== void 0 && _prevLoadableRef$curr2.is(newLoadable))) {
        forceUpdate(newLoadable);
      }
      prevLoadableRef.current = newLoadable;
    }
    return subscription.release;
  }, [componentName, getLoadable, recoilValue, storeRef]);
  return loadable;
}
function useRecoilValueLoadable(recoilValue) {
  if (Recoil_gkx("recoil_memory_managament_2020")) {
    Recoil_useRetain(recoilValue);
  }
  return {
    TRANSITION_SUPPORT: useRecoilValueLoadable_TRANSITION_SUPPORT,
    // Recoil will attemp to detect if `useSyncExternalStore()` is supported with
    // `reactMode()` before calling it.  However, sometimes the host React
    // environment supports it but uses additional React renderers (such as with
    // `react-three-fiber`) which do not.  While this is technically a user issue
    // by using a renderer with React 18+ that doesn't fully support React 18 we
    // don't want to break users if it can be avoided. As the current renderer can
    // change at runtime, we need to dynamically check and fallback if necessary.
    SYNC_EXTERNAL_STORE: currentRendererSupportsUseSyncExternalStore$1() ? useRecoilValueLoadable_SYNC_EXTERNAL_STORE : useRecoilValueLoadable_TRANSITION_SUPPORT,
    MUTABLE_SOURCE: useRecoilValueLoadable_MUTABLE_SOURCE,
    LEGACY: useRecoilValueLoadable_LEGACY
  }[reactMode$3().mode](recoilValue);
}
function useRecoilValue(recoilValue) {
  const storeRef = useStoreRef$2();
  const loadable = useRecoilValueLoadable(recoilValue);
  return handleLoadable(loadable, recoilValue, storeRef);
}
function useSetRecoilState(recoilState) {
  const storeRef = useStoreRef$2();
  return useCallback$1((newValueOrUpdater) => {
    setRecoilValue$2(storeRef.current, recoilState, newValueOrUpdater);
  }, [storeRef, recoilState]);
}
function useResetRecoilState(recoilState) {
  const storeRef = useStoreRef$2();
  return useCallback$1(() => {
    setRecoilValue$2(storeRef.current, recoilState, DEFAULT_VALUE$2);
  }, [storeRef, recoilState]);
}
function useRecoilState(recoilState) {
  return [useRecoilValue(recoilState), useSetRecoilState(recoilState)];
}
function useRecoilStateLoadable(recoilState) {
  return [useRecoilValueLoadable(recoilState), useSetRecoilState(recoilState)];
}
function useSetUnvalidatedAtomValues() {
  const storeRef = useStoreRef$2();
  return (values, transactionMetadata = {}) => {
    batchUpdates$2(() => {
      storeRef.current.addTransactionMetadata(transactionMetadata);
      values.forEach((value, key) => setUnvalidatedRecoilValue$2(storeRef.current, new AbstractRecoilValue$3(key), value));
    });
  };
}
function useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE(recoilValue) {
  if (Recoil_gkx("recoil_memory_managament_2020")) {
    Recoil_useRetain(recoilValue);
  }
  return useRecoilValueLoadable_TRANSITION_SUPPORT(recoilValue);
}
function useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(recoilValue) {
  const storeRef = useStoreRef$2();
  const loadable = useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE(recoilValue);
  return handleLoadable(loadable, recoilValue, storeRef);
}
function useRecoilState_TRANSITION_SUPPORT_UNSTABLE(recoilState) {
  return [useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(recoilState), useSetRecoilState(recoilState)];
}
var Recoil_Hooks = {
  recoilComponentGetRecoilValueCount_FOR_TESTING,
  useRecoilInterface: useRecoilInterface_DEPRECATED,
  useRecoilState,
  useRecoilStateLoadable,
  useRecoilValue,
  useRecoilValueLoadable,
  useResetRecoilState,
  useSetRecoilState,
  useSetUnvalidatedAtomValues,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE
};
function filterMap(map, callback) {
  const result = /* @__PURE__ */ new Map();
  for (const [key, value] of map) {
    if (callback(value, key)) {
      result.set(key, value);
    }
  }
  return result;
}
var Recoil_filterMap = filterMap;
function filterSet(set2, callback) {
  const result = /* @__PURE__ */ new Set();
  for (const value of set2) {
    if (callback(value)) {
      result.add(value);
    }
  }
  return result;
}
var Recoil_filterSet = filterSet;
function mergeMaps(...maps) {
  const result = /* @__PURE__ */ new Map();
  for (let i = 0; i < maps.length; i++) {
    const iterator = maps[i].keys();
    let nextKey;
    while (!(nextKey = iterator.next()).done) {
      result.set(nextKey.value, maps[i].get(nextKey.value));
    }
  }
  return result;
}
var Recoil_mergeMaps = mergeMaps;
const {
  batchUpdates: batchUpdates$3
} = Recoil_Batching;
const {
  DEFAULT_VALUE: DEFAULT_VALUE$3,
  getNode: getNode$4,
  nodes: nodes$1
} = Recoil_Node;
const {
  useStoreRef: useStoreRef$3
} = Recoil_RecoilRoot;
const {
  AbstractRecoilValue: AbstractRecoilValue$4,
  setRecoilValueLoadable: setRecoilValueLoadable$1
} = Recoil_RecoilValueInterface;
const {
  SUSPENSE_TIMEOUT_MS: SUSPENSE_TIMEOUT_MS$2
} = Recoil_Retention;
const {
  cloneSnapshot: cloneSnapshot$1
} = Recoil_Snapshot$1;
const {
  useCallback: useCallback$2,
  useEffect: useEffect$4,
  useRef: useRef$5,
  useState: useState$2
} = React;
const {
  isSSR: isSSR$4
} = Recoil_Environment;
function useTransactionSubscription(callback) {
  const storeRef = useStoreRef$3();
  useEffect$4(() => {
    const sub = storeRef.current.subscribeToTransactions(callback);
    return sub.release;
  }, [callback, storeRef]);
}
function externallyVisibleAtomValuesInState(state) {
  const atomValues = state.atomValues.toMap();
  const persistedAtomContentsValues = Recoil_mapMap(Recoil_filterMap(atomValues, (v2, k2) => {
    const node = getNode$4(k2);
    const persistence = node.persistence_UNSTABLE;
    return persistence != null && persistence.type !== "none" && v2.state === "hasValue";
  }), (v2) => v2.contents);
  return Recoil_mergeMaps(state.nonvalidatedAtoms.toMap(), persistedAtomContentsValues);
}
function useTransactionObservation_DEPRECATED(callback) {
  useTransactionSubscription(useCallback$2((store) => {
    let previousTree = store.getState().previousTree;
    const currentTree = store.getState().currentTree;
    if (!previousTree) {
      previousTree = store.getState().currentTree;
    }
    const atomValues = externallyVisibleAtomValuesInState(currentTree);
    const previousAtomValues = externallyVisibleAtomValuesInState(previousTree);
    const atomInfo = Recoil_mapMap(nodes$1, (node) => {
      var _node$persistence_UNS, _node$persistence_UNS2, _node$persistence_UNS3, _node$persistence_UNS4;
      return {
        persistence_UNSTABLE: {
          type: (_node$persistence_UNS = (_node$persistence_UNS2 = node.persistence_UNSTABLE) === null || _node$persistence_UNS2 === void 0 ? void 0 : _node$persistence_UNS2.type) !== null && _node$persistence_UNS !== void 0 ? _node$persistence_UNS : "none",
          backButton: (_node$persistence_UNS3 = (_node$persistence_UNS4 = node.persistence_UNSTABLE) === null || _node$persistence_UNS4 === void 0 ? void 0 : _node$persistence_UNS4.backButton) !== null && _node$persistence_UNS3 !== void 0 ? _node$persistence_UNS3 : false
        }
      };
    });
    const modifiedAtoms = Recoil_filterSet(currentTree.dirtyAtoms, (k2) => atomValues.has(k2) || previousAtomValues.has(k2));
    callback({
      atomValues,
      previousAtomValues,
      atomInfo,
      modifiedAtoms,
      transactionMetadata: {
        ...currentTree.transactionMetadata
      }
    });
  }, [callback]));
}
function useRecoilTransactionObserver(callback) {
  useTransactionSubscription(useCallback$2((store) => {
    const snapshot = cloneSnapshot$1(store, "latest");
    const previousSnapshot = cloneSnapshot$1(store, "previous");
    callback({
      snapshot,
      previousSnapshot
    });
  }, [callback]));
}
function useRecoilSnapshot() {
  const storeRef = useStoreRef$3();
  const [snapshot, setSnapshot] = useState$2(() => cloneSnapshot$1(storeRef.current));
  const previousSnapshot = Recoil_usePrevious(snapshot);
  const timeoutID = useRef$5();
  const releaseRef = useRef$5();
  useTransactionSubscription(useCallback$2((store) => setSnapshot(cloneSnapshot$1(store)), []));
  useEffect$4(() => {
    const release = snapshot.retain();
    if (timeoutID.current && !isSSR$4) {
      var _releaseRef$current;
      window.clearTimeout(timeoutID.current);
      timeoutID.current = null;
      (_releaseRef$current = releaseRef.current) === null || _releaseRef$current === void 0 ? void 0 : _releaseRef$current.call(releaseRef);
      releaseRef.current = null;
    }
    return () => {
      window.setTimeout(release, 10);
    };
  }, [snapshot]);
  if (previousSnapshot !== snapshot && !isSSR$4) {
    if (timeoutID.current) {
      var _releaseRef$current2;
      window.clearTimeout(timeoutID.current);
      timeoutID.current = null;
      (_releaseRef$current2 = releaseRef.current) === null || _releaseRef$current2 === void 0 ? void 0 : _releaseRef$current2.call(releaseRef);
      releaseRef.current = null;
    }
    releaseRef.current = snapshot.retain();
    timeoutID.current = window.setTimeout(() => {
      var _releaseRef$current3;
      timeoutID.current = null;
      (_releaseRef$current3 = releaseRef.current) === null || _releaseRef$current3 === void 0 ? void 0 : _releaseRef$current3.call(releaseRef);
      releaseRef.current = null;
    }, SUSPENSE_TIMEOUT_MS$2);
  }
  return snapshot;
}
function gotoSnapshot(store, snapshot) {
  var _storeState$nextTree;
  const storeState = store.getState();
  const prev = (_storeState$nextTree = storeState.nextTree) !== null && _storeState$nextTree !== void 0 ? _storeState$nextTree : storeState.currentTree;
  const next = snapshot.getStore_INTERNAL().getState().currentTree;
  batchUpdates$3(() => {
    const keysToUpdate = /* @__PURE__ */ new Set();
    for (const keys of [prev.atomValues.keys(), next.atomValues.keys()]) {
      for (const key of keys) {
        var _prev$atomValues$get, _next$atomValues$get;
        if (((_prev$atomValues$get = prev.atomValues.get(key)) === null || _prev$atomValues$get === void 0 ? void 0 : _prev$atomValues$get.contents) !== ((_next$atomValues$get = next.atomValues.get(key)) === null || _next$atomValues$get === void 0 ? void 0 : _next$atomValues$get.contents) && getNode$4(key).shouldRestoreFromSnapshots) {
          keysToUpdate.add(key);
        }
      }
    }
    keysToUpdate.forEach((key) => {
      setRecoilValueLoadable$1(store, new AbstractRecoilValue$4(key), next.atomValues.has(key) ? Recoil_nullthrows(next.atomValues.get(key)) : DEFAULT_VALUE$3);
    });
    store.replaceState((state) => ({
      ...state,
      stateID: snapshot.getID()
    }));
  });
}
function useGotoRecoilSnapshot() {
  const storeRef = useStoreRef$3();
  return useCallback$2((snapshot) => gotoSnapshot(storeRef.current, snapshot), [storeRef]);
}
var Recoil_SnapshotHooks = {
  useRecoilSnapshot,
  gotoSnapshot,
  useGotoRecoilSnapshot,
  useRecoilTransactionObserver,
  useTransactionObservation_DEPRECATED,
  useTransactionSubscription_DEPRECATED: useTransactionSubscription
};
const {
  peekNodeInfo: peekNodeInfo$2
} = Recoil_FunctionalCore;
const {
  useStoreRef: useStoreRef$4
} = Recoil_RecoilRoot;
function useGetRecoilValueInfo() {
  const storeRef = useStoreRef$4();
  return ({
    key
  }) => peekNodeInfo$2(storeRef.current, storeRef.current.getState().currentTree, key);
}
var Recoil_useGetRecoilValueInfo = useGetRecoilValueInfo;
const {
  reactMode: reactMode$4
} = Recoil_ReactMode;
const {
  RecoilRoot: RecoilRoot$1,
  useStoreRef: useStoreRef$5
} = Recoil_RecoilRoot;
const {
  useMemo: useMemo$2
} = React;
function useRecoilBridgeAcrossReactRoots() {
  if (reactMode$4().mode === "MUTABLE_SOURCE") {
    console.warn("Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.");
  }
  const store = useStoreRef$5().current;
  return useMemo$2(() => {
    function RecoilBridge({
      children
    }) {
      return /* @__PURE__ */ React.createElement(RecoilRoot$1, {
        store_INTERNAL: store
      }, children);
    }
    return RecoilBridge;
  }, [store]);
}
var Recoil_useRecoilBridgeAcrossReactRoots = useRecoilBridgeAcrossReactRoots;
const {
  loadableWithValue: loadableWithValue$1
} = Recoil_Loadable$1;
const {
  initializeNode: initializeNode$3
} = Recoil_FunctionalCore;
const {
  DEFAULT_VALUE: DEFAULT_VALUE$4,
  getNode: getNode$5
} = Recoil_Node;
const {
  copyTreeState: copyTreeState$1,
  getRecoilValueAsLoadable: getRecoilValueAsLoadable$3,
  invalidateDownstreams: invalidateDownstreams$1,
  writeLoadableToTreeState: writeLoadableToTreeState$1
} = Recoil_RecoilValueInterface;
function isAtom(recoilValue) {
  return getNode$5(recoilValue.key).nodeType === "atom";
}
class TransactionInterfaceImpl {
  constructor(store, treeState) {
    _defineProperty(this, "_store", void 0);
    _defineProperty(this, "_treeState", void 0);
    _defineProperty(this, "_changes", void 0);
    _defineProperty(this, "get", (recoilValue) => {
      if (this._changes.has(recoilValue.key)) {
        return this._changes.get(recoilValue.key);
      }
      if (!isAtom(recoilValue)) {
        throw Recoil_err("Reading selectors within atomicUpdate is not supported");
      }
      const loadable = getRecoilValueAsLoadable$3(this._store, recoilValue, this._treeState);
      if (loadable.state === "hasValue") {
        return loadable.contents;
      } else if (loadable.state === "hasError") {
        throw loadable.contents;
      } else {
        throw Recoil_err(`Expected Recoil atom ${recoilValue.key} to have a value, but it is in a loading state.`);
      }
    });
    _defineProperty(this, "set", (recoilState, valueOrUpdater) => {
      if (!isAtom(recoilState)) {
        throw Recoil_err("Setting selectors within atomicUpdate is not supported");
      }
      if (typeof valueOrUpdater === "function") {
        const current = this.get(recoilState);
        this._changes.set(recoilState.key, valueOrUpdater(current));
      } else {
        initializeNode$3(this._store, recoilState.key, "set");
        this._changes.set(recoilState.key, valueOrUpdater);
      }
    });
    _defineProperty(this, "reset", (recoilState) => {
      this.set(recoilState, DEFAULT_VALUE$4);
    });
    this._store = store;
    this._treeState = treeState;
    this._changes = /* @__PURE__ */ new Map();
  }
  // Allow destructing
  // eslint-disable-next-line fb-www/extra-arrow-initializer
  newTreeState_INTERNAL() {
    if (this._changes.size === 0) {
      return this._treeState;
    }
    const newState = copyTreeState$1(this._treeState);
    for (const [k2, v2] of this._changes) {
      writeLoadableToTreeState$1(newState, k2, loadableWithValue$1(v2));
    }
    invalidateDownstreams$1(this._store, newState);
    return newState;
  }
}
function atomicUpdater(store) {
  return (fn) => {
    store.replaceState((treeState) => {
      const changeset = new TransactionInterfaceImpl(store, treeState);
      fn(changeset);
      return changeset.newTreeState_INTERNAL();
    });
  };
}
var Recoil_AtomicUpdates = {
  atomicUpdater
};
var Recoil_AtomicUpdates_1 = Recoil_AtomicUpdates.atomicUpdater;
var Recoil_AtomicUpdates$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  atomicUpdater: Recoil_AtomicUpdates_1
});
function invariant(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}
var invariant_1 = invariant;
var Recoil_invariant = invariant_1;
const {
  atomicUpdater: atomicUpdater$1
} = Recoil_AtomicUpdates$1;
const {
  batchUpdates: batchUpdates$4
} = Recoil_Batching;
const {
  DEFAULT_VALUE: DEFAULT_VALUE$5
} = Recoil_Node;
const {
  useStoreRef: useStoreRef$6
} = Recoil_RecoilRoot;
const {
  refreshRecoilValue: refreshRecoilValue$1,
  setRecoilValue: setRecoilValue$3
} = Recoil_RecoilValueInterface;
const {
  cloneSnapshot: cloneSnapshot$2
} = Recoil_Snapshot$1;
const {
  gotoSnapshot: gotoSnapshot$1
} = Recoil_SnapshotHooks;
const {
  useCallback: useCallback$3
} = React;
class Sentinel {
}
const SENTINEL = new Sentinel();
function recoilCallback(store, fn, args, extraInterface) {
  let ret = SENTINEL;
  let releaseSnapshot;
  batchUpdates$4(() => {
    const errMsg = "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
    if (typeof fn !== "function") {
      throw Recoil_err(errMsg);
    }
    const callbackInterface = Recoil_lazyProxy({
      ...extraInterface !== null && extraInterface !== void 0 ? extraInterface : {},
      // flowlint-line unclear-type:off
      // $FlowFixMe[missing-local-annot]
      set: (node, newValue) => setRecoilValue$3(store, node, newValue),
      // $FlowFixMe[missing-local-annot]
      reset: (node) => setRecoilValue$3(store, node, DEFAULT_VALUE$5),
      // $FlowFixMe[missing-local-annot]
      refresh: (node) => refreshRecoilValue$1(store, node),
      gotoSnapshot: (snapshot) => gotoSnapshot$1(store, snapshot),
      transact_UNSTABLE: (transaction) => atomicUpdater$1(store)(transaction)
    }, {
      snapshot: () => {
        const snapshot = cloneSnapshot$2(store);
        releaseSnapshot = snapshot.retain();
        return snapshot;
      }
    });
    const callback = fn(callbackInterface);
    if (typeof callback !== "function") {
      throw Recoil_err(errMsg);
    }
    ret = callback(...args);
  });
  !!(ret instanceof Sentinel) ? Recoil_invariant(false) : void 0;
  if (Recoil_isPromise(ret)) {
    ret = ret.finally(() => {
      var _releaseSnapshot;
      (_releaseSnapshot = releaseSnapshot) === null || _releaseSnapshot === void 0 ? void 0 : _releaseSnapshot();
    });
  } else {
    var _releaseSnapshot2;
    (_releaseSnapshot2 = releaseSnapshot) === null || _releaseSnapshot2 === void 0 ? void 0 : _releaseSnapshot2();
  }
  return ret;
}
function useRecoilCallback(fn, deps) {
  const storeRef = useStoreRef$6();
  return useCallback$3(
    // $FlowIssue[incompatible-call]
    (...args) => {
      return recoilCallback(storeRef.current, fn, args);
    },
    deps != null ? [...deps, storeRef] : void 0
    // eslint-disable-line fb-www/react-hooks-deps
  );
}
var Recoil_useRecoilCallback = {
  recoilCallback,
  useRecoilCallback
};
const {
  useStoreRef: useStoreRef$7
} = Recoil_RecoilRoot;
const {
  refreshRecoilValue: refreshRecoilValue$2
} = Recoil_RecoilValueInterface;
const {
  useCallback: useCallback$4
} = React;
function useRecoilRefresher(recoilValue) {
  const storeRef = useStoreRef$7();
  return useCallback$4(() => {
    const store = storeRef.current;
    refreshRecoilValue$2(store, recoilValue);
  }, [recoilValue, storeRef]);
}
var Recoil_useRecoilRefresher = useRecoilRefresher;
const {
  atomicUpdater: atomicUpdater$2
} = Recoil_AtomicUpdates$1;
const {
  useStoreRef: useStoreRef$8
} = Recoil_RecoilRoot;
const {
  useMemo: useMemo$3
} = React;
function useRecoilTransaction(fn, deps) {
  const storeRef = useStoreRef$8();
  return useMemo$3(
    () => (...args) => {
      const atomicUpdate = atomicUpdater$2(storeRef.current);
      atomicUpdate((transactionInterface) => {
        fn(transactionInterface)(...args);
      });
    },
    deps != null ? [...deps, storeRef] : void 0
    // eslint-disable-line fb-www/react-hooks-deps
  );
}
var Recoil_useRecoilTransaction = useRecoilTransaction;
class WrappedValue {
  constructor(value) {
    _defineProperty(this, "value", void 0);
    this.value = value;
  }
}
var Recoil_Wrapper = {
  WrappedValue
};
var Recoil_Wrapper_1 = Recoil_Wrapper.WrappedValue;
var Recoil_Wrapper$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WrappedValue: Recoil_Wrapper_1
});
const {
  isFastRefreshEnabled: isFastRefreshEnabled$2
} = Recoil_ReactMode;
class ChangedPathError extends Error {
}
class TreeCache {
  // $FlowIssue[unclear-type]
  constructor(options) {
    var _options$onHit, _options$onSet, _options$mapNodeValue;
    _defineProperty(this, "_name", void 0);
    _defineProperty(this, "_numLeafs", void 0);
    _defineProperty(this, "_root", void 0);
    _defineProperty(this, "_onHit", void 0);
    _defineProperty(this, "_onSet", void 0);
    _defineProperty(this, "_mapNodeValue", void 0);
    this._name = options === null || options === void 0 ? void 0 : options.name;
    this._numLeafs = 0;
    this._root = null;
    this._onHit = (_options$onHit = options === null || options === void 0 ? void 0 : options.onHit) !== null && _options$onHit !== void 0 ? _options$onHit : () => {
    };
    this._onSet = (_options$onSet = options === null || options === void 0 ? void 0 : options.onSet) !== null && _options$onSet !== void 0 ? _options$onSet : () => {
    };
    this._mapNodeValue = (_options$mapNodeValue = options === null || options === void 0 ? void 0 : options.mapNodeValue) !== null && _options$mapNodeValue !== void 0 ? _options$mapNodeValue : (val) => val;
  }
  size() {
    return this._numLeafs;
  }
  // $FlowIssue[unclear-type]
  root() {
    return this._root;
  }
  get(getNodeValue, handlers) {
    var _this$getLeafNode;
    return (_this$getLeafNode = this.getLeafNode(getNodeValue, handlers)) === null || _this$getLeafNode === void 0 ? void 0 : _this$getLeafNode.value;
  }
  getLeafNode(getNodeValue, handlers) {
    if (this._root == null) {
      return void 0;
    }
    let node = this._root;
    while (node) {
      handlers === null || handlers === void 0 ? void 0 : handlers.onNodeVisit(node);
      if (node.type === "leaf") {
        this._onHit(node);
        return node;
      }
      const nodeValue = this._mapNodeValue(getNodeValue(node.nodeKey));
      node = node.branches.get(nodeValue);
    }
    return void 0;
  }
  set(route, value, handlers) {
    const addLeaf = () => {
      var _node2, _node3, _this$_root2, _handlers$onNodeVisit2;
      let node;
      let branchKey;
      for (const [nodeKey, nodeValue] of route) {
        var _node, _handlers$onNodeVisit, _this$_root;
        const root = this._root;
        if ((root === null || root === void 0 ? void 0 : root.type) === "leaf") {
          throw this.invalidCacheError();
        }
        const parent = node;
        node = parent ? parent.branches.get(branchKey) : root;
        node = (_node = node) !== null && _node !== void 0 ? _node : {
          type: "branch",
          nodeKey,
          parent,
          branches: /* @__PURE__ */ new Map(),
          branchKey
        };
        if (node.type !== "branch" || node.nodeKey !== nodeKey) {
          throw this.invalidCacheError();
        }
        parent === null || parent === void 0 ? void 0 : parent.branches.set(branchKey, node);
        handlers === null || handlers === void 0 ? void 0 : (_handlers$onNodeVisit = handlers.onNodeVisit) === null || _handlers$onNodeVisit === void 0 ? void 0 : _handlers$onNodeVisit.call(handlers, node);
        branchKey = this._mapNodeValue(nodeValue);
        this._root = (_this$_root = this._root) !== null && _this$_root !== void 0 ? _this$_root : node;
      }
      const oldLeaf = node ? (_node2 = node) === null || _node2 === void 0 ? void 0 : _node2.branches.get(branchKey) : this._root;
      if (oldLeaf != null && (oldLeaf.type !== "leaf" || oldLeaf.branchKey !== branchKey)) {
        throw this.invalidCacheError();
      }
      const leafNode = {
        type: "leaf",
        value,
        parent: node,
        branchKey
      };
      (_node3 = node) === null || _node3 === void 0 ? void 0 : _node3.branches.set(branchKey, leafNode);
      this._root = (_this$_root2 = this._root) !== null && _this$_root2 !== void 0 ? _this$_root2 : leafNode;
      this._numLeafs++;
      this._onSet(leafNode);
      handlers === null || handlers === void 0 ? void 0 : (_handlers$onNodeVisit2 = handlers.onNodeVisit) === null || _handlers$onNodeVisit2 === void 0 ? void 0 : _handlers$onNodeVisit2.call(handlers, leafNode);
    };
    try {
      addLeaf();
    } catch (error) {
      if (error instanceof ChangedPathError) {
        this.clear();
        addLeaf();
      } else {
        throw error;
      }
    }
  }
  // Returns true if leaf was actually deleted from the tree
  delete(leaf) {
    const root = this.root();
    if (!root) {
      return false;
    }
    if (leaf === root) {
      this._root = null;
      this._numLeafs = 0;
      return true;
    }
    let node = leaf.parent;
    let branchKey = leaf.branchKey;
    while (node) {
      var _node4;
      node.branches.delete(branchKey);
      if (node === root) {
        if (node.branches.size === 0) {
          this._root = null;
          this._numLeafs = 0;
        } else {
          this._numLeafs--;
        }
        return true;
      }
      if (node.branches.size > 0) {
        break;
      }
      branchKey = (_node4 = node) === null || _node4 === void 0 ? void 0 : _node4.branchKey;
      node = node.parent;
    }
    for (; node !== root; node = node.parent) {
      if (node == null) {
        return false;
      }
    }
    this._numLeafs--;
    return true;
  }
  clear() {
    this._numLeafs = 0;
    this._root = null;
  }
  invalidCacheError() {
    const CHANGED_PATH_ERROR_MESSAGE = isFastRefreshEnabled$2() ? "Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache." : "Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";
    Recoil_recoverableViolation(CHANGED_PATH_ERROR_MESSAGE + (this._name != null ? ` - ${this._name}` : ""));
    throw new ChangedPathError();
  }
}
var Recoil_TreeCache = {
  TreeCache
};
var Recoil_TreeCache_1 = Recoil_TreeCache.TreeCache;
var Recoil_TreeCache$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  TreeCache: Recoil_TreeCache_1
});
class LRUCache {
  constructor(options) {
    var _options$mapKey;
    _defineProperty(this, "_maxSize", void 0);
    _defineProperty(this, "_size", void 0);
    _defineProperty(this, "_head", void 0);
    _defineProperty(this, "_tail", void 0);
    _defineProperty(this, "_map", void 0);
    _defineProperty(this, "_keyMapper", void 0);
    this._maxSize = options.maxSize;
    this._size = 0;
    this._head = null;
    this._tail = null;
    this._map = /* @__PURE__ */ new Map();
    this._keyMapper = (_options$mapKey = options.mapKey) !== null && _options$mapKey !== void 0 ? _options$mapKey : (v2) => v2;
  }
  head() {
    return this._head;
  }
  tail() {
    return this._tail;
  }
  size() {
    return this._size;
  }
  maxSize() {
    return this._maxSize;
  }
  has(key) {
    return this._map.has(this._keyMapper(key));
  }
  get(key) {
    const mappedKey = this._keyMapper(key);
    const node = this._map.get(mappedKey);
    if (!node) {
      return void 0;
    }
    this.set(key, node.value);
    return node.value;
  }
  set(key, val) {
    const mappedKey = this._keyMapper(key);
    const existingNode = this._map.get(mappedKey);
    if (existingNode) {
      this.delete(key);
    }
    const head = this.head();
    const node = {
      key,
      right: head,
      left: null,
      value: val
    };
    if (head) {
      head.left = node;
    } else {
      this._tail = node;
    }
    this._map.set(mappedKey, node);
    this._head = node;
    this._size++;
    this._maybeDeleteLRU();
  }
  _maybeDeleteLRU() {
    if (this.size() > this.maxSize()) {
      this.deleteLru();
    }
  }
  deleteLru() {
    const tail = this.tail();
    if (tail) {
      this.delete(tail.key);
    }
  }
  delete(key) {
    const mappedKey = this._keyMapper(key);
    if (!this._size || !this._map.has(mappedKey)) {
      return;
    }
    const node = Recoil_nullthrows(this._map.get(mappedKey));
    const right = node.right;
    const left = node.left;
    if (right) {
      right.left = node.left;
    }
    if (left) {
      left.right = node.right;
    }
    if (node === this.head()) {
      this._head = right;
    }
    if (node === this.tail()) {
      this._tail = left;
    }
    this._map.delete(mappedKey);
    this._size--;
  }
  clear() {
    this._size = 0;
    this._head = null;
    this._tail = null;
    this._map = /* @__PURE__ */ new Map();
  }
}
var Recoil_LRUCache = {
  LRUCache
};
var Recoil_LRUCache_1 = Recoil_LRUCache.LRUCache;
var Recoil_LRUCache$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  LRUCache: Recoil_LRUCache_1
});
const {
  LRUCache: LRUCache$1
} = Recoil_LRUCache$1;
const {
  TreeCache: TreeCache$1
} = Recoil_TreeCache$1;
function treeCacheLRU({
  name,
  maxSize,
  mapNodeValue = (v2) => v2
}) {
  const lruCache = new LRUCache$1({
    maxSize
  });
  const cache = new TreeCache$1({
    name,
    mapNodeValue,
    onHit: (node) => {
      lruCache.set(node, true);
    },
    onSet: (node) => {
      const lruNode = lruCache.tail();
      lruCache.set(node, true);
      if (lruNode && cache.size() > maxSize) {
        cache.delete(lruNode.key);
      }
    }
  });
  return cache;
}
var Recoil_treeCacheLRU = treeCacheLRU;
function stringify(x2, opt, key) {
  if (typeof x2 === "string" && !x2.includes('"') && !x2.includes("\\")) {
    return `"${x2}"`;
  }
  switch (typeof x2) {
    case "undefined":
      return "";
    case "boolean":
      return x2 ? "true" : "false";
    case "number":
    case "symbol":
      return String(x2);
    case "string":
      return JSON.stringify(x2);
    case "function":
      if ((opt === null || opt === void 0 ? void 0 : opt.allowFunctions) !== true) {
        throw Recoil_err("Attempt to serialize function in a Recoil cache key");
      }
      return `__FUNCTION(${x2.name})__`;
  }
  if (x2 === null) {
    return "null";
  }
  if (typeof x2 !== "object") {
    var _JSON$stringify;
    return (_JSON$stringify = JSON.stringify(x2)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : "";
  }
  if (Recoil_isPromise(x2)) {
    return "__PROMISE__";
  }
  if (Array.isArray(x2)) {
    return `[${x2.map((v2, i) => stringify(v2, opt, i.toString()))}]`;
  }
  if (typeof x2.toJSON === "function") {
    return stringify(x2.toJSON(key), opt, key);
  }
  if (x2 instanceof Map) {
    const obj = {};
    for (const [k2, v2] of x2) {
      obj[typeof k2 === "string" ? k2 : stringify(k2, opt)] = v2;
    }
    return stringify(obj, opt, key);
  }
  if (x2 instanceof Set) {
    return stringify(
      // $FlowFixMe[missing-local-annot]
      Array.from(x2).sort((a, b) => stringify(a, opt).localeCompare(stringify(b, opt))),
      opt,
      key
    );
  }
  if (Symbol !== void 0 && x2[Symbol.iterator] != null && typeof x2[Symbol.iterator] === "function") {
    return stringify(Array.from(x2), opt, key);
  }
  return `{${Object.keys(x2).filter((k2) => x2[k2] !== void 0).sort().map((k2) => `${stringify(k2, opt)}:${stringify(x2[k2], opt, k2)}`).join(",")}}`;
}
function stableStringify(x2, opt = {
  allowFunctions: false
}) {
  return stringify(x2, opt);
}
var Recoil_stableStringify = stableStringify;
const {
  TreeCache: TreeCache$2
} = Recoil_TreeCache$1;
const defaultPolicy = {
  equality: "reference",
  eviction: "keep-all",
  maxSize: Infinity
};
function treeCacheFromPolicy({
  equality = defaultPolicy.equality,
  eviction = defaultPolicy.eviction,
  maxSize = defaultPolicy.maxSize
} = defaultPolicy, name) {
  const valueMapper = getValueMapper(equality);
  return getTreeCache(eviction, maxSize, valueMapper, name);
}
function getValueMapper(equality) {
  switch (equality) {
    case "reference":
      return (val) => val;
    case "value":
      return (val) => Recoil_stableStringify(val);
  }
  throw Recoil_err(`Unrecognized equality policy ${equality}`);
}
function getTreeCache(eviction, maxSize, mapNodeValue, name) {
  switch (eviction) {
    case "keep-all":
      return new TreeCache$2({
        name,
        mapNodeValue
      });
    case "lru":
      return Recoil_treeCacheLRU({
        name,
        maxSize: Recoil_nullthrows(maxSize),
        mapNodeValue
      });
    case "most-recent":
      return Recoil_treeCacheLRU({
        name,
        maxSize: 1,
        mapNodeValue
      });
  }
  throw Recoil_err(`Unrecognized eviction policy ${eviction}`);
}
var Recoil_treeCacheFromPolicy = treeCacheFromPolicy;
function startPerfBlock(_id) {
  return () => null;
}
var Recoil_PerformanceTimings = {
  startPerfBlock
};
const {
  isLoadable: isLoadable$1,
  loadableWithError: loadableWithError$1,
  loadableWithPromise: loadableWithPromise$1,
  loadableWithValue: loadableWithValue$2
} = Recoil_Loadable$1;
const {
  WrappedValue: WrappedValue$1
} = Recoil_Wrapper$1;
const {
  getNodeLoadable: getNodeLoadable$2,
  peekNodeLoadable: peekNodeLoadable$1,
  setNodeValue: setNodeValue$3
} = Recoil_FunctionalCore;
const {
  saveDepsToStore: saveDepsToStore$1
} = Recoil_Graph;
const {
  DEFAULT_VALUE: DEFAULT_VALUE$6,
  getConfigDeletionHandler: getConfigDeletionHandler$1,
  getNode: getNode$6,
  registerNode: registerNode$1
} = Recoil_Node;
const {
  isRecoilValue: isRecoilValue$3
} = Recoil_RecoilValue$1;
const {
  markRecoilValueModified: markRecoilValueModified$1
} = Recoil_RecoilValueInterface;
const {
  retainedByOptionWithDefault: retainedByOptionWithDefault$1
} = Recoil_Retention;
const {
  recoilCallback: recoilCallback$1
} = Recoil_useRecoilCallback;
const {
  startPerfBlock: startPerfBlock$1
} = Recoil_PerformanceTimings;
class Canceled {
}
const CANCELED = new Canceled();
const dependencyStack = [];
const waitingStores = /* @__PURE__ */ new Map();
const getNewExecutionID = (() => {
  let executionID = 0;
  return () => executionID++;
})();
function selector(options) {
  let recoilValue = null;
  const {
    key,
    get: get2,
    cachePolicy_UNSTABLE: cachePolicy
  } = options;
  const set2 = options.set != null ? options.set : void 0;
  const discoveredDependencyNodeKeys = /* @__PURE__ */ new Set();
  const cache = Recoil_treeCacheFromPolicy(cachePolicy !== null && cachePolicy !== void 0 ? cachePolicy : {
    equality: "reference",
    eviction: "keep-all"
  }, key);
  const retainedBy = retainedByOptionWithDefault$1(options.retainedBy_UNSTABLE);
  const executionInfoMap = /* @__PURE__ */ new Map();
  let liveStoresCount = 0;
  function selectorIsLive() {
    return !Recoil_gkx("recoil_memory_managament_2020") || liveStoresCount > 0;
  }
  function selectorInit(store) {
    store.getState().knownSelectors.add(key);
    liveStoresCount++;
    return () => {
      liveStoresCount--;
    };
  }
  function selectorShouldDeleteConfigOnRelease() {
    return getConfigDeletionHandler$1(key) !== void 0 && !selectorIsLive();
  }
  function resolveAsync(store, state, executionID, loadable, depValues) {
    setCache(state, loadable, depValues);
    notifyStoresOfResolvedAsync(store, executionID);
  }
  function notifyStoresOfResolvedAsync(store, executionID) {
    if (isLatestExecution(store, executionID)) {
      clearExecutionInfo(store);
    }
    notifyWaitingStores(executionID, true);
  }
  function notifyStoresOfNewAsyncDep(store, executionID) {
    if (isLatestExecution(store, executionID)) {
      const executionInfo = Recoil_nullthrows(getExecutionInfo(store));
      executionInfo.stateVersions.clear();
      notifyWaitingStores(executionID, false);
    }
  }
  function notifyWaitingStores(executionID, clearWaitlist) {
    const stores = waitingStores.get(executionID);
    if (stores != null) {
      for (const waitingStore of stores) {
        markRecoilValueModified$1(waitingStore, Recoil_nullthrows(recoilValue));
      }
      if (clearWaitlist) {
        waitingStores.delete(executionID);
      }
    }
  }
  function markStoreWaitingForResolvedAsync(store, executionID) {
    let stores = waitingStores.get(executionID);
    if (stores == null) {
      waitingStores.set(executionID, stores = /* @__PURE__ */ new Set());
    }
    stores.add(store);
  }
  function wrapResultPromise(store, promise, state, depValues, executionID, loadingDepsState) {
    return promise.then((value) => {
      if (!selectorIsLive()) {
        clearExecutionInfo(store);
        throw CANCELED;
      }
      const loadable = loadableWithValue$2(value);
      resolveAsync(store, state, executionID, loadable, depValues);
      return value;
    }).catch((errorOrPromise) => {
      if (!selectorIsLive()) {
        clearExecutionInfo(store);
        throw CANCELED;
      }
      if (Recoil_isPromise(errorOrPromise)) {
        return wrapPendingDependencyPromise(store, errorOrPromise, state, depValues, executionID, loadingDepsState);
      }
      const loadable = loadableWithError$1(errorOrPromise);
      resolveAsync(store, state, executionID, loadable, depValues);
      throw errorOrPromise;
    });
  }
  function wrapPendingDependencyPromise(store, promise, state, existingDeps, executionID, loadingDepsState) {
    return promise.then((resolvedDep) => {
      if (!selectorIsLive()) {
        clearExecutionInfo(store);
        throw CANCELED;
      }
      if (loadingDepsState.loadingDepKey != null && loadingDepsState.loadingDepPromise === promise) {
        state.atomValues.set(loadingDepsState.loadingDepKey, loadableWithValue$2(resolvedDep));
      } else {
        store.getState().knownSelectors.forEach((nodeKey) => {
          state.atomValues.delete(nodeKey);
        });
      }
      const cachedLoadable = getLoadableFromCacheAndUpdateDeps(store, state);
      if (cachedLoadable && cachedLoadable.state !== "loading") {
        if (isLatestExecution(store, executionID) || getExecutionInfo(store) == null) {
          notifyStoresOfResolvedAsync(store, executionID);
        }
        if (cachedLoadable.state === "hasValue") {
          return cachedLoadable.contents;
        } else {
          throw cachedLoadable.contents;
        }
      }
      if (!isLatestExecution(store, executionID)) {
        const executionInfo = getInProgressExecutionInfo(store, state);
        if (executionInfo != null) {
          return executionInfo.loadingLoadable.contents;
        }
      }
      const [loadable, depValues] = evaluateSelectorGetter(store, state, executionID);
      if (loadable.state !== "loading") {
        resolveAsync(store, state, executionID, loadable, depValues);
      }
      if (loadable.state === "hasError") {
        throw loadable.contents;
      }
      return loadable.contents;
    }).catch((error) => {
      if (error instanceof Canceled) {
        throw CANCELED;
      }
      if (!selectorIsLive()) {
        clearExecutionInfo(store);
        throw CANCELED;
      }
      const loadable = loadableWithError$1(error);
      resolveAsync(store, state, executionID, loadable, existingDeps);
      throw error;
    });
  }
  function updateDeps(store, state, deps, executionID) {
    var _store$getState, _store$getState$curre, _store$getState2, _store$getState2$next;
    if (isLatestExecution(store, executionID) || state.version === ((_store$getState = store.getState()) === null || _store$getState === void 0 ? void 0 : (_store$getState$curre = _store$getState.currentTree) === null || _store$getState$curre === void 0 ? void 0 : _store$getState$curre.version) || state.version === ((_store$getState2 = store.getState()) === null || _store$getState2 === void 0 ? void 0 : (_store$getState2$next = _store$getState2.nextTree) === null || _store$getState2$next === void 0 ? void 0 : _store$getState2$next.version)) {
      var _store$getState$nextT, _store$getState3, _store$getState3$next;
      saveDepsToStore$1(key, deps, store, (_store$getState$nextT = (_store$getState3 = store.getState()) === null || _store$getState3 === void 0 ? void 0 : (_store$getState3$next = _store$getState3.nextTree) === null || _store$getState3$next === void 0 ? void 0 : _store$getState3$next.version) !== null && _store$getState$nextT !== void 0 ? _store$getState$nextT : store.getState().currentTree.version);
    }
    for (const nodeKey of deps) {
      discoveredDependencyNodeKeys.add(nodeKey);
    }
  }
  function evaluateSelectorGetter(store, state, executionID) {
    const endPerfBlock = startPerfBlock$1(key);
    let duringSynchronousExecution = true;
    let duringAsynchronousExecution = true;
    const finishEvaluation = () => {
      endPerfBlock();
      duringAsynchronousExecution = false;
    };
    let result;
    let resultIsError = false;
    let loadable;
    const loadingDepsState = {
      loadingDepKey: null,
      loadingDepPromise: null
    };
    const depValues = /* @__PURE__ */ new Map();
    function getRecoilValue({
      key: depKey
    }) {
      const depLoadable = getNodeLoadable$2(store, state, depKey);
      depValues.set(depKey, depLoadable);
      if (!duringSynchronousExecution) {
        updateDeps(store, state, new Set(depValues.keys()), executionID);
        notifyStoresOfNewAsyncDep(store, executionID);
      }
      switch (depLoadable.state) {
        case "hasValue":
          return depLoadable.contents;
        case "hasError":
          throw depLoadable.contents;
        case "loading":
          loadingDepsState.loadingDepKey = depKey;
          loadingDepsState.loadingDepPromise = depLoadable.contents;
          throw depLoadable.contents;
      }
      throw Recoil_err("Invalid Loadable state");
    }
    const getCallback = (fn) => {
      return (...args) => {
        if (duringAsynchronousExecution) {
          throw Recoil_err("Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.");
        }
        !(recoilValue != null) ? Recoil_invariant(false) : void 0;
        return recoilCallback$1(
          store,
          fn,
          args,
          {
            node: recoilValue
          }
          // flowlint-line unclear-type:off
        );
      };
    };
    try {
      result = get2({
        get: getRecoilValue,
        getCallback
      });
      result = isRecoilValue$3(result) ? getRecoilValue(result) : result;
      if (isLoadable$1(result)) {
        if (result.state === "hasError") {
          resultIsError = true;
        }
        result = result.contents;
      }
      if (Recoil_isPromise(result)) {
        result = wrapResultPromise(store, result, state, depValues, executionID, loadingDepsState).finally(finishEvaluation);
      } else {
        finishEvaluation();
      }
      result = result instanceof WrappedValue$1 ? result.value : result;
    } catch (errorOrDepPromise) {
      result = errorOrDepPromise;
      if (Recoil_isPromise(result)) {
        result = wrapPendingDependencyPromise(store, result, state, depValues, executionID, loadingDepsState).finally(finishEvaluation);
      } else {
        resultIsError = true;
        finishEvaluation();
      }
    }
    if (resultIsError) {
      loadable = loadableWithError$1(result);
    } else if (Recoil_isPromise(result)) {
      loadable = loadableWithPromise$1(result);
    } else {
      loadable = loadableWithValue$2(result);
    }
    duringSynchronousExecution = false;
    updateExecutionInfoDepValues(store, executionID, depValues);
    updateDeps(store, state, new Set(depValues.keys()), executionID);
    return [loadable, depValues];
  }
  function getLoadableFromCacheAndUpdateDeps(store, state) {
    let cachedLoadable = state.atomValues.get(key);
    if (cachedLoadable != null) {
      return cachedLoadable;
    }
    const depsAfterCacheLookup = /* @__PURE__ */ new Set();
    try {
      cachedLoadable = cache.get((nodeKey) => {
        !(typeof nodeKey === "string") ? false ? Recoil_invariant(false, "Cache nodeKey is type string") : Recoil_invariant(false) : void 0;
        return getNodeLoadable$2(store, state, nodeKey).contents;
      }, {
        onNodeVisit: (node) => {
          if (node.type === "branch" && node.nodeKey !== key) {
            depsAfterCacheLookup.add(node.nodeKey);
          }
        }
      });
    } catch (error) {
      throw Recoil_err(`Problem with cache lookup for selector "${key}": ${error.message}`);
    }
    if (cachedLoadable) {
      var _getExecutionInfo;
      state.atomValues.set(key, cachedLoadable);
      updateDeps(store, state, depsAfterCacheLookup, (_getExecutionInfo = getExecutionInfo(store)) === null || _getExecutionInfo === void 0 ? void 0 : _getExecutionInfo.executionID);
    }
    return cachedLoadable;
  }
  function getSelectorLoadableAndUpdateDeps(store, state) {
    const cachedVal = getLoadableFromCacheAndUpdateDeps(store, state);
    if (cachedVal != null) {
      clearExecutionInfo(store);
      return cachedVal;
    }
    const inProgressExecutionInfo = getInProgressExecutionInfo(store, state);
    if (inProgressExecutionInfo != null) {
      var _inProgressExecutionI;
      if (((_inProgressExecutionI = inProgressExecutionInfo.loadingLoadable) === null || _inProgressExecutionI === void 0 ? void 0 : _inProgressExecutionI.state) === "loading") {
        markStoreWaitingForResolvedAsync(store, inProgressExecutionInfo.executionID);
      }
      return inProgressExecutionInfo.loadingLoadable;
    }
    const newExecutionID = getNewExecutionID();
    const [loadable, newDepValues] = evaluateSelectorGetter(store, state, newExecutionID);
    if (loadable.state === "loading") {
      setExecutionInfo(store, newExecutionID, loadable, newDepValues, state);
      markStoreWaitingForResolvedAsync(store, newExecutionID);
    } else {
      clearExecutionInfo(store);
      setCache(state, loadable, newDepValues);
    }
    return loadable;
  }
  function getInProgressExecutionInfo(store, state) {
    const pendingExecutions = Recoil_concatIterables([executionInfoMap.has(store) ? [Recoil_nullthrows(executionInfoMap.get(store))] : [], Recoil_mapIterable(Recoil_filterIterable(executionInfoMap, ([s]) => s !== store), ([, execInfo]) => execInfo)]);
    function anyDepChanged(execDepValues) {
      for (const [depKey, execLoadable] of execDepValues) {
        if (!getNodeLoadable$2(store, state, depKey).is(execLoadable)) {
          return true;
        }
      }
      return false;
    }
    for (const execInfo of pendingExecutions) {
      if (
        // If this execution was already checked to be valid with this version
        // of state, then let's use it!
        execInfo.stateVersions.get(state.version) || // If the deps for the execution match our current state, then it's valid
        !anyDepChanged(execInfo.depValuesDiscoveredSoFarDuringAsyncWork)
      ) {
        execInfo.stateVersions.set(state.version, true);
        return execInfo;
      } else {
        execInfo.stateVersions.set(state.version, false);
      }
    }
    return void 0;
  }
  function getExecutionInfo(store) {
    return executionInfoMap.get(store);
  }
  function setExecutionInfo(store, newExecutionID, loadable, depValues, state) {
    executionInfoMap.set(store, {
      depValuesDiscoveredSoFarDuringAsyncWork: depValues,
      executionID: newExecutionID,
      loadingLoadable: loadable,
      stateVersions: /* @__PURE__ */ new Map([[state.version, true]])
    });
  }
  function updateExecutionInfoDepValues(store, executionID, depValues) {
    if (isLatestExecution(store, executionID)) {
      const executionInfo = getExecutionInfo(store);
      if (executionInfo != null) {
        executionInfo.depValuesDiscoveredSoFarDuringAsyncWork = depValues;
      }
    }
  }
  function clearExecutionInfo(store) {
    executionInfoMap.delete(store);
  }
  function isLatestExecution(store, executionID) {
    var _getExecutionInfo2;
    return executionID === ((_getExecutionInfo2 = getExecutionInfo(store)) === null || _getExecutionInfo2 === void 0 ? void 0 : _getExecutionInfo2.executionID);
  }
  function depValuesToDepRoute(depValues) {
    return Array.from(depValues.entries()).map(([depKey, valLoadable]) => [depKey, valLoadable.contents]);
  }
  function setCache(state, loadable, depValues) {
    state.atomValues.set(key, loadable);
    try {
      cache.set(depValuesToDepRoute(depValues), loadable);
    } catch (error) {
      throw Recoil_err(`Problem with setting cache for selector "${key}": ${error.message}`);
    }
  }
  function detectCircularDependencies(fn) {
    if (dependencyStack.includes(key)) {
      const message = `Recoil selector has circular dependencies: ${dependencyStack.slice(dependencyStack.indexOf(key)).join(" → ")}`;
      return loadableWithError$1(Recoil_err(message));
    }
    dependencyStack.push(key);
    try {
      return fn();
    } finally {
      dependencyStack.pop();
    }
  }
  function selectorPeek(store, state) {
    const cachedLoadable = state.atomValues.get(key);
    if (cachedLoadable != null) {
      return cachedLoadable;
    }
    return cache.get((nodeKey) => {
      var _peekNodeLoadable;
      !(typeof nodeKey === "string") ? Recoil_invariant(false) : void 0;
      return (_peekNodeLoadable = peekNodeLoadable$1(store, state, nodeKey)) === null || _peekNodeLoadable === void 0 ? void 0 : _peekNodeLoadable.contents;
    });
  }
  function selectorGet(store, state) {
    return detectCircularDependencies(() => getSelectorLoadableAndUpdateDeps(store, state));
  }
  function invalidateSelector(state) {
    state.atomValues.delete(key);
  }
  function clearSelectorCache(store, treeState) {
    !(recoilValue != null) ? Recoil_invariant(false) : void 0;
    for (const nodeKey of discoveredDependencyNodeKeys) {
      var _node$clearCache;
      const node = getNode$6(nodeKey);
      (_node$clearCache = node.clearCache) === null || _node$clearCache === void 0 ? void 0 : _node$clearCache.call(node, store, treeState);
    }
    discoveredDependencyNodeKeys.clear();
    invalidateSelector(treeState);
    cache.clear();
    markRecoilValueModified$1(store, recoilValue);
  }
  if (set2 != null) {
    const selectorSet = (store, state, newValue) => {
      let syncSelectorSetFinished = false;
      const writes = /* @__PURE__ */ new Map();
      function getRecoilValue({
        key: depKey
      }) {
        if (syncSelectorSetFinished) {
          throw Recoil_err("Recoil: Async selector sets are not currently supported.");
        }
        const loadable = getNodeLoadable$2(store, state, depKey);
        if (loadable.state === "hasValue") {
          return loadable.contents;
        } else if (loadable.state === "loading") {
          const msg = `Getting value of asynchronous atom or selector "${depKey}" in a pending state while setting selector "${key}" is not yet supported.`;
          throw Recoil_err(msg);
        } else {
          throw loadable.contents;
        }
      }
      function setRecoilState(recoilState, valueOrUpdater) {
        if (syncSelectorSetFinished) {
          const msg = "Recoil: Async selector sets are not currently supported.";
          throw Recoil_err(msg);
        }
        const setValue = typeof valueOrUpdater === "function" ? (
          // cast to any because we can't restrict type S from being a function itself without losing support for opaque types
          // flowlint-next-line unclear-type:off
          valueOrUpdater(getRecoilValue(recoilState))
        ) : valueOrUpdater;
        const upstreamWrites = setNodeValue$3(store, state, recoilState.key, setValue);
        upstreamWrites.forEach((v2, k2) => writes.set(k2, v2));
      }
      function resetRecoilState(recoilState) {
        setRecoilState(recoilState, DEFAULT_VALUE$6);
      }
      const ret = set2({
        set: setRecoilState,
        get: getRecoilValue,
        reset: resetRecoilState
      }, newValue);
      if (ret !== void 0) {
        throw Recoil_isPromise(ret) ? Recoil_err("Recoil: Async selector sets are not currently supported.") : Recoil_err("Recoil: selector set should be a void function.");
      }
      syncSelectorSetFinished = true;
      return writes;
    };
    return recoilValue = registerNode$1({
      key,
      nodeType: "selector",
      peek: selectorPeek,
      get: selectorGet,
      set: selectorSet,
      init: selectorInit,
      invalidate: invalidateSelector,
      clearCache: clearSelectorCache,
      shouldDeleteConfigOnRelease: selectorShouldDeleteConfigOnRelease,
      dangerouslyAllowMutability: options.dangerouslyAllowMutability,
      shouldRestoreFromSnapshots: false,
      retainedBy
    });
  } else {
    return recoilValue = registerNode$1({
      key,
      nodeType: "selector",
      peek: selectorPeek,
      get: selectorGet,
      init: selectorInit,
      invalidate: invalidateSelector,
      clearCache: clearSelectorCache,
      shouldDeleteConfigOnRelease: selectorShouldDeleteConfigOnRelease,
      dangerouslyAllowMutability: options.dangerouslyAllowMutability,
      shouldRestoreFromSnapshots: false,
      retainedBy
    });
  }
}
selector.value = (value) => new WrappedValue$1(value);
var Recoil_selector = selector;
const {
  isLoadable: isLoadable$2,
  loadableWithError: loadableWithError$2,
  loadableWithPromise: loadableWithPromise$2,
  loadableWithValue: loadableWithValue$3
} = Recoil_Loadable$1;
const {
  WrappedValue: WrappedValue$2
} = Recoil_Wrapper$1;
const {
  peekNodeInfo: peekNodeInfo$3
} = Recoil_FunctionalCore;
const {
  DEFAULT_VALUE: DEFAULT_VALUE$7,
  DefaultValue: DefaultValue$2,
  getConfigDeletionHandler: getConfigDeletionHandler$2,
  registerNode: registerNode$2,
  setConfigDeletionHandler: setConfigDeletionHandler$1
} = Recoil_Node;
const {
  isRecoilValue: isRecoilValue$4
} = Recoil_RecoilValue$1;
const {
  getRecoilValueAsLoadable: getRecoilValueAsLoadable$4,
  markRecoilValueModified: markRecoilValueModified$2,
  setRecoilValue: setRecoilValue$4,
  setRecoilValueLoadable: setRecoilValueLoadable$2
} = Recoil_RecoilValueInterface;
const {
  retainedByOptionWithDefault: retainedByOptionWithDefault$2
} = Recoil_Retention;
const unwrap = (x2) => x2 instanceof WrappedValue$2 ? x2.value : x2;
function baseAtom(options) {
  const {
    key,
    persistence_UNSTABLE: persistence
  } = options;
  const retainedBy = retainedByOptionWithDefault$2(options.retainedBy_UNSTABLE);
  let liveStoresCount = 0;
  function unwrapPromise(promise) {
    return loadableWithPromise$2(promise.then((value) => {
      defaultLoadable = loadableWithValue$3(value);
      return value;
    }).catch((error) => {
      defaultLoadable = loadableWithError$2(error);
      throw error;
    }));
  }
  let defaultLoadable = Recoil_isPromise(options.default) ? unwrapPromise(options.default) : isLoadable$2(options.default) ? options.default.state === "loading" ? unwrapPromise(options.default.contents) : options.default : (
    // $FlowFixMe[incompatible-call]
    loadableWithValue$3(unwrap(options.default))
  );
  maybeFreezeValueOrPromise(defaultLoadable.contents);
  let cachedAnswerForUnvalidatedValue = void 0;
  const cleanupEffectsByStore = /* @__PURE__ */ new Map();
  function maybeFreezeValueOrPromise(valueOrPromise) {
    return valueOrPromise;
  }
  function wrapPendingPromise(store, promise) {
    const wrappedPromise = promise.then((value) => {
      var _store$getState$nextT, _state$atomValues$get;
      const state = (_store$getState$nextT = store.getState().nextTree) !== null && _store$getState$nextT !== void 0 ? _store$getState$nextT : store.getState().currentTree;
      if (((_state$atomValues$get = state.atomValues.get(key)) === null || _state$atomValues$get === void 0 ? void 0 : _state$atomValues$get.contents) === wrappedPromise) {
        setRecoilValue$4(store, node, value);
      }
      return value;
    }).catch((error) => {
      var _store$getState$nextT2, _state$atomValues$get2;
      const state = (_store$getState$nextT2 = store.getState().nextTree) !== null && _store$getState$nextT2 !== void 0 ? _store$getState$nextT2 : store.getState().currentTree;
      if (((_state$atomValues$get2 = state.atomValues.get(key)) === null || _state$atomValues$get2 === void 0 ? void 0 : _state$atomValues$get2.contents) === wrappedPromise) {
        setRecoilValueLoadable$2(store, node, loadableWithError$2(error));
      }
      throw error;
    });
    return wrappedPromise;
  }
  function initAtom(store, initState, trigger) {
    var _options$effects;
    liveStoresCount++;
    const cleanupAtom = () => {
      var _cleanupEffectsByStor;
      liveStoresCount--;
      (_cleanupEffectsByStor = cleanupEffectsByStore.get(store)) === null || _cleanupEffectsByStor === void 0 ? void 0 : _cleanupEffectsByStor.forEach((cleanup) => cleanup());
      cleanupEffectsByStore.delete(store);
    };
    store.getState().knownAtoms.add(key);
    if (defaultLoadable.state === "loading") {
      const notifyDefaultSubscribers = () => {
        var _store$getState$nextT3;
        const state = (_store$getState$nextT3 = store.getState().nextTree) !== null && _store$getState$nextT3 !== void 0 ? _store$getState$nextT3 : store.getState().currentTree;
        if (!state.atomValues.has(key)) {
          markRecoilValueModified$2(store, node);
        }
      };
      defaultLoadable.contents.finally(notifyDefaultSubscribers);
    }
    const effects = (_options$effects = options.effects) !== null && _options$effects !== void 0 ? _options$effects : options.effects_UNSTABLE;
    if (effects != null) {
      let getLoadable2 = function(recoilValue) {
        if (isDuringInit && recoilValue.key === key) {
          const retValue = initValue;
          return retValue instanceof DefaultValue$2 ? peekAtom(store, initState) : Recoil_isPromise(retValue) ? loadableWithPromise$2(retValue.then((v2) => v2 instanceof DefaultValue$2 ? (
            // Cast T to S
            defaultLoadable.toPromise()
          ) : v2)) : (
            // $FlowFixMe[incompatible-call]
            loadableWithValue$3(retValue)
          );
        }
        return getRecoilValueAsLoadable$4(store, recoilValue);
      }, getPromise2 = function(recoilValue) {
        return getLoadable2(recoilValue).toPromise();
      }, getInfo_UNSTABLE2 = function(recoilValue) {
        var _store$getState$nextT4;
        const info = peekNodeInfo$3(store, (_store$getState$nextT4 = store.getState().nextTree) !== null && _store$getState$nextT4 !== void 0 ? _store$getState$nextT4 : store.getState().currentTree, recoilValue.key);
        return isDuringInit && recoilValue.key === key && !(initValue instanceof DefaultValue$2) ? {
          ...info,
          isSet: true,
          loadable: getLoadable2(recoilValue)
        } : info;
      };
      var getLoadable = getLoadable2, getPromise = getPromise2, getInfo_UNSTABLE = getInfo_UNSTABLE2;
      let initValue = DEFAULT_VALUE$7;
      let isDuringInit = true;
      let isInitError = false;
      let pendingSetSelf = null;
      const setSelf = (effect) => (valueOrUpdater) => {
        if (isDuringInit) {
          const currentLoadable = getLoadable2(node);
          const currentValue = currentLoadable.state === "hasValue" ? currentLoadable.contents : DEFAULT_VALUE$7;
          initValue = typeof valueOrUpdater === "function" ? (
            // cast to any because we can't restrict T from being a function without losing support for opaque types
            valueOrUpdater(currentValue)
          ) : valueOrUpdater;
          if (Recoil_isPromise(initValue)) {
            initValue = initValue.then((value) => {
              pendingSetSelf = {
                effect,
                value
              };
              return value;
            });
          }
        } else {
          if (Recoil_isPromise(valueOrUpdater)) {
            throw Recoil_err("Setting atoms to async values is not implemented.");
          }
          if (typeof valueOrUpdater !== "function") {
            pendingSetSelf = {
              effect,
              value: unwrap(valueOrUpdater)
            };
          }
          setRecoilValue$4(store, node, typeof valueOrUpdater === "function" ? (currentValue) => {
            const newValue = unwrap(
              // cast to any because we can't restrict T from being a function without losing support for opaque types
              valueOrUpdater(currentValue)
              // flowlint-line unclear-type:off
            );
            pendingSetSelf = {
              effect,
              value: newValue
            };
            return newValue;
          } : unwrap(valueOrUpdater));
        }
      };
      const resetSelf = (effect) => () => setSelf(effect)(DEFAULT_VALUE$7);
      const onSet = (effect) => (handler) => {
        var _cleanupEffectsByStor2;
        const {
          release
        } = store.subscribeToTransactions((currentStore) => {
          var _currentTree$atomValu;
          let {
            currentTree,
            previousTree
          } = currentStore.getState();
          if (!previousTree) {
            previousTree = currentTree;
          }
          const newLoadable = (_currentTree$atomValu = currentTree.atomValues.get(key)) !== null && _currentTree$atomValu !== void 0 ? _currentTree$atomValu : defaultLoadable;
          if (newLoadable.state === "hasValue") {
            var _previousTree$atomVal, _pendingSetSelf, _pendingSetSelf2, _pendingSetSelf3;
            const newValue = newLoadable.contents;
            const oldLoadable = (_previousTree$atomVal = previousTree.atomValues.get(key)) !== null && _previousTree$atomVal !== void 0 ? _previousTree$atomVal : defaultLoadable;
            const oldValue = oldLoadable.state === "hasValue" ? oldLoadable.contents : DEFAULT_VALUE$7;
            if (((_pendingSetSelf = pendingSetSelf) === null || _pendingSetSelf === void 0 ? void 0 : _pendingSetSelf.effect) !== effect || ((_pendingSetSelf2 = pendingSetSelf) === null || _pendingSetSelf2 === void 0 ? void 0 : _pendingSetSelf2.value) !== newValue) {
              handler(newValue, oldValue, !currentTree.atomValues.has(key));
            } else if (((_pendingSetSelf3 = pendingSetSelf) === null || _pendingSetSelf3 === void 0 ? void 0 : _pendingSetSelf3.effect) === effect) {
              pendingSetSelf = null;
            }
          }
        }, key);
        cleanupEffectsByStore.set(store, [...(_cleanupEffectsByStor2 = cleanupEffectsByStore.get(store)) !== null && _cleanupEffectsByStor2 !== void 0 ? _cleanupEffectsByStor2 : [], release]);
      };
      for (const effect of effects) {
        try {
          const cleanup = effect({
            node,
            storeID: store.storeID,
            parentStoreID_UNSTABLE: store.parentStoreID,
            trigger,
            setSelf: setSelf(effect),
            resetSelf: resetSelf(effect),
            onSet: onSet(effect),
            getPromise: getPromise2,
            getLoadable: getLoadable2,
            getInfo_UNSTABLE: getInfo_UNSTABLE2
          });
          if (cleanup != null) {
            var _cleanupEffectsByStor3;
            cleanupEffectsByStore.set(store, [...(_cleanupEffectsByStor3 = cleanupEffectsByStore.get(store)) !== null && _cleanupEffectsByStor3 !== void 0 ? _cleanupEffectsByStor3 : [], cleanup]);
          }
        } catch (error) {
          initValue = error;
          isInitError = true;
        }
      }
      isDuringInit = false;
      if (!(initValue instanceof DefaultValue$2)) {
        var _store$getState$nextT5;
        const initLoadable = isInitError ? loadableWithError$2(initValue) : Recoil_isPromise(initValue) ? loadableWithPromise$2(wrapPendingPromise(store, initValue)) : loadableWithValue$3(unwrap(initValue));
        maybeFreezeValueOrPromise(initLoadable.contents);
        initState.atomValues.set(key, initLoadable);
        (_store$getState$nextT5 = store.getState().nextTree) === null || _store$getState$nextT5 === void 0 ? void 0 : _store$getState$nextT5.atomValues.set(key, initLoadable);
      }
    }
    return cleanupAtom;
  }
  function peekAtom(_store, state) {
    var _ref, _state$atomValues$get3;
    return (_ref = (_state$atomValues$get3 = state.atomValues.get(key)) !== null && _state$atomValues$get3 !== void 0 ? _state$atomValues$get3 : cachedAnswerForUnvalidatedValue) !== null && _ref !== void 0 ? _ref : defaultLoadable;
  }
  function getAtom(_store, state) {
    if (state.atomValues.has(key)) {
      return Recoil_nullthrows(state.atomValues.get(key));
    } else if (state.nonvalidatedAtoms.has(key)) {
      if (cachedAnswerForUnvalidatedValue != null) {
        return cachedAnswerForUnvalidatedValue;
      }
      if (persistence == null) {
        return defaultLoadable;
      }
      const nonvalidatedValue = state.nonvalidatedAtoms.get(key);
      const validatorResult = persistence.validator(nonvalidatedValue, DEFAULT_VALUE$7);
      const validatedValueLoadable = validatorResult instanceof DefaultValue$2 ? defaultLoadable : loadableWithValue$3(validatorResult);
      cachedAnswerForUnvalidatedValue = validatedValueLoadable;
      return cachedAnswerForUnvalidatedValue;
    } else {
      return defaultLoadable;
    }
  }
  function invalidateAtom() {
    cachedAnswerForUnvalidatedValue = void 0;
  }
  function setAtom(_store, state, newValue) {
    if (state.atomValues.has(key)) {
      const existing = Recoil_nullthrows(state.atomValues.get(key));
      if (existing.state === "hasValue" && newValue === existing.contents) {
        return /* @__PURE__ */ new Map();
      }
    } else if (!state.nonvalidatedAtoms.has(key) && newValue instanceof DefaultValue$2) {
      return /* @__PURE__ */ new Map();
    }
    cachedAnswerForUnvalidatedValue = void 0;
    return (/* @__PURE__ */ new Map()).set(key, loadableWithValue$3(newValue));
  }
  function shouldDeleteConfigOnReleaseAtom() {
    return getConfigDeletionHandler$2(key) !== void 0 && liveStoresCount <= 0;
  }
  const node = registerNode$2({
    key,
    nodeType: "atom",
    peek: peekAtom,
    get: getAtom,
    set: setAtom,
    init: initAtom,
    invalidate: invalidateAtom,
    shouldDeleteConfigOnRelease: shouldDeleteConfigOnReleaseAtom,
    dangerouslyAllowMutability: options.dangerouslyAllowMutability,
    persistence_UNSTABLE: options.persistence_UNSTABLE ? {
      type: options.persistence_UNSTABLE.type,
      backButton: options.persistence_UNSTABLE.backButton
    } : void 0,
    shouldRestoreFromSnapshots: true,
    retainedBy
  });
  return node;
}
function atom(options) {
  const {
    // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
    ...restOptions
  } = options;
  const optionsDefault = "default" in options ? (
    // $FlowIssue[incompatible-type] No way to refine in Flow that property is not defined
    options.default
  ) : new Promise(() => {
  });
  if (isRecoilValue$4(optionsDefault)) {
    return atomWithFallback({
      ...restOptions,
      default: optionsDefault
      // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
    });
  } else {
    return baseAtom({
      ...restOptions,
      default: optionsDefault
    });
  }
}
function atomWithFallback(options) {
  const base = atom({
    ...options,
    default: DEFAULT_VALUE$7,
    persistence_UNSTABLE: options.persistence_UNSTABLE === void 0 ? void 0 : {
      ...options.persistence_UNSTABLE,
      validator: (storedValue) => storedValue instanceof DefaultValue$2 ? storedValue : Recoil_nullthrows(options.persistence_UNSTABLE).validator(storedValue, DEFAULT_VALUE$7)
    },
    // TODO Hack for now.
    effects: options.effects,
    // flowlint-line unclear-type: off
    effects_UNSTABLE: options.effects_UNSTABLE
    // flowlint-line unclear-type: off
  });
  const sel = Recoil_selector({
    key: `${options.key}__withFallback`,
    get: ({
      get: get2
    }) => {
      const baseValue = get2(base);
      return baseValue instanceof DefaultValue$2 ? options.default : baseValue;
    },
    // $FlowFixMe[incompatible-call]
    set: ({
      set: set2
    }, newValue) => set2(base, newValue),
    // This selector does not need to cache as it is a wrapper selector
    // and the selector within the wrapper selector will have a cache
    // option by default
    cachePolicy_UNSTABLE: {
      eviction: "most-recent"
    },
    dangerouslyAllowMutability: options.dangerouslyAllowMutability
  });
  setConfigDeletionHandler$1(sel.key, getConfigDeletionHandler$2(options.key));
  return sel;
}
atom.value = (value) => new WrappedValue$2(value);
var Recoil_atom = atom;
class MapCache {
  constructor(options) {
    var _options$mapKey;
    _defineProperty(this, "_map", void 0);
    _defineProperty(this, "_keyMapper", void 0);
    this._map = /* @__PURE__ */ new Map();
    this._keyMapper = (_options$mapKey = options === null || options === void 0 ? void 0 : options.mapKey) !== null && _options$mapKey !== void 0 ? _options$mapKey : (v2) => v2;
  }
  size() {
    return this._map.size;
  }
  has(key) {
    return this._map.has(this._keyMapper(key));
  }
  get(key) {
    return this._map.get(this._keyMapper(key));
  }
  set(key, val) {
    this._map.set(this._keyMapper(key), val);
  }
  delete(key) {
    this._map.delete(this._keyMapper(key));
  }
  clear() {
    this._map.clear();
  }
}
var Recoil_MapCache = {
  MapCache
};
var Recoil_MapCache_1 = Recoil_MapCache.MapCache;
var Recoil_MapCache$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MapCache: Recoil_MapCache_1
});
const {
  LRUCache: LRUCache$2
} = Recoil_LRUCache$1;
const {
  MapCache: MapCache$1
} = Recoil_MapCache$1;
const defaultPolicy$1 = {
  equality: "reference",
  eviction: "none",
  maxSize: Infinity
};
function cacheFromPolicy({
  equality = defaultPolicy$1.equality,
  eviction = defaultPolicy$1.eviction,
  maxSize = defaultPolicy$1.maxSize
} = defaultPolicy$1) {
  const valueMapper = getValueMapper$1(equality);
  const cache = getCache(eviction, maxSize, valueMapper);
  return cache;
}
function getValueMapper$1(equality) {
  switch (equality) {
    case "reference":
      return (val) => val;
    case "value":
      return (val) => Recoil_stableStringify(val);
  }
  throw Recoil_err(`Unrecognized equality policy ${equality}`);
}
function getCache(eviction, maxSize, mapKey) {
  switch (eviction) {
    case "keep-all":
      return new MapCache$1({
        mapKey
      });
    case "lru":
      return new LRUCache$2({
        mapKey,
        maxSize: Recoil_nullthrows(maxSize)
      });
    case "most-recent":
      return new LRUCache$2({
        mapKey,
        maxSize: 1
      });
  }
  throw Recoil_err(`Unrecognized eviction policy ${eviction}`);
}
var Recoil_cacheFromPolicy = cacheFromPolicy;
const {
  setConfigDeletionHandler: setConfigDeletionHandler$2
} = Recoil_Node;
function atomFamily(options) {
  var _options$cachePolicyF, _options$cachePolicyF2;
  const atomCache = Recoil_cacheFromPolicy({
    equality: (_options$cachePolicyF = (_options$cachePolicyF2 = options.cachePolicyForParams_UNSTABLE) === null || _options$cachePolicyF2 === void 0 ? void 0 : _options$cachePolicyF2.equality) !== null && _options$cachePolicyF !== void 0 ? _options$cachePolicyF : "value",
    eviction: "keep-all"
  });
  return (params) => {
    var _stableStringify, _options$effects;
    const cachedAtom = atomCache.get(params);
    if (cachedAtom != null) {
      return cachedAtom;
    }
    const {
      cachePolicyForParams_UNSTABLE,
      ...atomOptions
    } = options;
    const optionsDefault = "default" in options ? (
      // $FlowIssue[incompatible-type] No way to refine in Flow that property is not defined
      options.default
    ) : new Promise(() => {
    });
    const newAtom = Recoil_atom({
      ...atomOptions,
      key: `${options.key}__${(_stableStringify = Recoil_stableStringify(params)) !== null && _stableStringify !== void 0 ? _stableStringify : "void"}`,
      default: typeof optionsDefault === "function" ? (
        // The default was parameterized
        // Flow doesn't know that T isn't a function, so we need to case to any
        // $FlowIssue[incompatible-use]
        optionsDefault(params)
      ) : (
        // Default may be a static value, promise, or RecoilValue
        optionsDefault
      ),
      retainedBy_UNSTABLE: typeof options.retainedBy_UNSTABLE === "function" ? options.retainedBy_UNSTABLE(params) : options.retainedBy_UNSTABLE,
      effects: typeof options.effects === "function" ? options.effects(params) : typeof options.effects_UNSTABLE === "function" ? options.effects_UNSTABLE(params) : (_options$effects = options.effects) !== null && _options$effects !== void 0 ? _options$effects : options.effects_UNSTABLE
      // prettier-ignore
      // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS: mapScopeRules(
      // @fb-only: options.scopeRules_APPEND_ONLY_READ_THE_DOCS,
      // @fb-only: params,
      // @fb-only: ),
    });
    atomCache.set(params, newAtom);
    setConfigDeletionHandler$2(newAtom.key, () => {
      atomCache.delete(params);
    });
    return newAtom;
  };
}
var Recoil_atomFamily = atomFamily;
const {
  setConfigDeletionHandler: setConfigDeletionHandler$3
} = Recoil_Node;
let nextIndex = 0;
function selectorFamily(options) {
  var _options$cachePolicyF, _options$cachePolicyF2;
  const selectorCache = Recoil_cacheFromPolicy({
    equality: (_options$cachePolicyF = (_options$cachePolicyF2 = options.cachePolicyForParams_UNSTABLE) === null || _options$cachePolicyF2 === void 0 ? void 0 : _options$cachePolicyF2.equality) !== null && _options$cachePolicyF !== void 0 ? _options$cachePolicyF : "value",
    eviction: "keep-all"
  });
  return (params) => {
    var _stableStringify;
    let cachedSelector;
    try {
      cachedSelector = selectorCache.get(params);
    } catch (error) {
      throw Recoil_err(`Problem with cache lookup for selector ${options.key}: ${error.message}`);
    }
    if (cachedSelector != null) {
      return cachedSelector;
    }
    const myKey = `${options.key}__selectorFamily/${(_stableStringify = Recoil_stableStringify(params, {
      // It is possible to use functions in parameters if the user uses
      // a cache with reference equality thanks to the incrementing index.
      allowFunctions: true
    })) !== null && _stableStringify !== void 0 ? _stableStringify : "void"}/${nextIndex++}`;
    const myGet = (callbacks) => options.get(params)(callbacks);
    const myCachePolicy = options.cachePolicy_UNSTABLE;
    const retainedBy = typeof options.retainedBy_UNSTABLE === "function" ? options.retainedBy_UNSTABLE(params) : options.retainedBy_UNSTABLE;
    let newSelector;
    if (options.set != null) {
      const set2 = options.set;
      const mySet = (callbacks, newValue) => set2(params)(callbacks, newValue);
      newSelector = Recoil_selector({
        key: myKey,
        get: myGet,
        set: mySet,
        cachePolicy_UNSTABLE: myCachePolicy,
        dangerouslyAllowMutability: options.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: retainedBy
      });
    } else {
      newSelector = Recoil_selector({
        key: myKey,
        get: myGet,
        cachePolicy_UNSTABLE: myCachePolicy,
        dangerouslyAllowMutability: options.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: retainedBy
      });
    }
    selectorCache.set(params, newSelector);
    setConfigDeletionHandler$3(newSelector.key, () => {
      selectorCache.delete(params);
    });
    return newSelector;
  };
}
var Recoil_selectorFamily = selectorFamily;
const constantSelector = Recoil_selectorFamily({
  key: "__constant",
  get: (constant) => () => constant,
  cachePolicyForParams_UNSTABLE: {
    equality: "reference"
  }
});
function constSelector(constant) {
  return constantSelector(constant);
}
var Recoil_constSelector = constSelector;
const throwingSelector = Recoil_selectorFamily({
  key: "__error",
  get: (message) => () => {
    throw Recoil_err(message);
  },
  // TODO Why?
  cachePolicyForParams_UNSTABLE: {
    equality: "reference"
  }
});
function errorSelector(message) {
  return throwingSelector(message);
}
var Recoil_errorSelector = errorSelector;
function readOnlySelector(atom2) {
  return atom2;
}
var Recoil_readOnlySelector = readOnlySelector;
const {
  loadableWithError: loadableWithError$3,
  loadableWithPromise: loadableWithPromise$3,
  loadableWithValue: loadableWithValue$4
} = Recoil_Loadable$1;
function concurrentRequests(getRecoilValue, deps) {
  const results = Array(deps.length).fill(void 0);
  const exceptions = Array(deps.length).fill(void 0);
  for (const [i, dep] of deps.entries()) {
    try {
      results[i] = getRecoilValue(dep);
    } catch (e2) {
      exceptions[i] = e2;
    }
  }
  return [results, exceptions];
}
function isError(exp) {
  return exp != null && !Recoil_isPromise(exp);
}
function unwrapDependencies(dependencies) {
  return Array.isArray(dependencies) ? dependencies : Object.getOwnPropertyNames(dependencies).map((key) => dependencies[key]);
}
function wrapResults(dependencies, results) {
  return Array.isArray(dependencies) ? results : (
    // Object.getOwnPropertyNames() has consistent key ordering with ES6
    Object.getOwnPropertyNames(dependencies).reduce((out, key, idx) => ({
      ...out,
      [key]: results[idx]
    }), {})
  );
}
function wrapLoadables(dependencies, results, exceptions) {
  const output = exceptions.map((exception, idx) => exception == null ? loadableWithValue$4(results[idx]) : Recoil_isPromise(exception) ? loadableWithPromise$3(exception) : loadableWithError$3(exception));
  return wrapResults(dependencies, output);
}
function combineAsyncResultsWithSyncResults(syncResults, asyncResults) {
  return asyncResults.map((result, idx) => (
    /**
     * it's important we use === undefined as opposed to == null, because the
     * resolved value of the async promise could be `null`, in which case we
     * don't want to use syncResults[idx], which would be undefined. If async
     * promise resolves to `undefined`, that's ok because `syncResults[idx]`
     * will also be `undefined`. That's a little hacky, but it works.
     */
    result === void 0 ? syncResults[idx] : result
  ));
}
const waitForNone = Recoil_selectorFamily({
  key: "__waitForNone",
  get: (dependencies) => ({
    get: get2
  }) => {
    const deps = unwrapDependencies(dependencies);
    const [results, exceptions] = concurrentRequests(get2, deps);
    return wrapLoadables(dependencies, results, exceptions);
  },
  dangerouslyAllowMutability: true
});
const waitForAny = Recoil_selectorFamily({
  key: "__waitForAny",
  get: (dependencies) => ({
    get: get2
  }) => {
    const deps = unwrapDependencies(dependencies);
    const [results, exceptions] = concurrentRequests(get2, deps);
    if (exceptions.some((exp) => !Recoil_isPromise(exp))) {
      return wrapLoadables(dependencies, results, exceptions);
    }
    return new Promise((resolve) => {
      for (const [i, exp] of exceptions.entries()) {
        if (Recoil_isPromise(exp)) {
          exp.then((result) => {
            results[i] = result;
            exceptions[i] = void 0;
            resolve(wrapLoadables(dependencies, results, exceptions));
          }).catch((error) => {
            exceptions[i] = error;
            resolve(wrapLoadables(dependencies, results, exceptions));
          });
        }
      }
    });
  },
  dangerouslyAllowMutability: true
});
const waitForAll = Recoil_selectorFamily({
  key: "__waitForAll",
  get: (dependencies) => ({
    get: get2
  }) => {
    const deps = unwrapDependencies(dependencies);
    const [results, exceptions] = concurrentRequests(get2, deps);
    if (exceptions.every((exp) => exp == null)) {
      return wrapResults(dependencies, results);
    }
    const error = exceptions.find(isError);
    if (error != null) {
      throw error;
    }
    return Promise.all(exceptions).then((exceptionResults) => wrapResults(dependencies, combineAsyncResultsWithSyncResults(results, exceptionResults)));
  },
  dangerouslyAllowMutability: true
});
const waitForAllSettled = Recoil_selectorFamily({
  key: "__waitForAllSettled",
  get: (dependencies) => ({
    get: get2
  }) => {
    const deps = unwrapDependencies(dependencies);
    const [results, exceptions] = concurrentRequests(get2, deps);
    if (exceptions.every((exp) => !Recoil_isPromise(exp))) {
      return wrapLoadables(dependencies, results, exceptions);
    }
    return Promise.all(exceptions.map((exp, i) => Recoil_isPromise(exp) ? exp.then((result) => {
      results[i] = result;
      exceptions[i] = void 0;
    }).catch((error) => {
      results[i] = void 0;
      exceptions[i] = error;
    }) : null)).then(() => wrapLoadables(dependencies, results, exceptions));
  },
  dangerouslyAllowMutability: true
});
const noWait = Recoil_selectorFamily({
  key: "__noWait",
  get: (dependency) => ({
    get: get2
  }) => {
    try {
      return Recoil_selector.value(loadableWithValue$4(get2(dependency)));
    } catch (exception) {
      return Recoil_selector.value(Recoil_isPromise(exception) ? loadableWithPromise$3(exception) : loadableWithError$3(exception));
    }
  },
  dangerouslyAllowMutability: true
});
var Recoil_WaitFor = {
  waitForNone,
  waitForAny,
  waitForAll,
  waitForAllSettled,
  noWait
};
const {
  RecoilLoadable
} = Recoil_Loadable$1;
const {
  DefaultValue: DefaultValue$3
} = Recoil_Node;
const {
  RecoilRoot: RecoilRoot$2,
  useRecoilStoreID: useRecoilStoreID$1
} = Recoil_RecoilRoot;
const {
  isRecoilValue: isRecoilValue$5
} = Recoil_RecoilValue$1;
const {
  retentionZone: retentionZone$1
} = Recoil_RetentionZone;
const {
  freshSnapshot: freshSnapshot$2
} = Recoil_Snapshot$1;
const {
  useRecoilState: useRecoilState$1,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE: useRecoilState_TRANSITION_SUPPORT_UNSTABLE$1,
  useRecoilStateLoadable: useRecoilStateLoadable$1,
  useRecoilValue: useRecoilValue$1,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: useRecoilValue_TRANSITION_SUPPORT_UNSTABLE$1,
  useRecoilValueLoadable: useRecoilValueLoadable$1,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE$1,
  useResetRecoilState: useResetRecoilState$1,
  useSetRecoilState: useSetRecoilState$1
} = Recoil_Hooks;
const {
  useGotoRecoilSnapshot: useGotoRecoilSnapshot$1,
  useRecoilSnapshot: useRecoilSnapshot$1,
  useRecoilTransactionObserver: useRecoilTransactionObserver$1
} = Recoil_SnapshotHooks;
const {
  useRecoilCallback: useRecoilCallback$1
} = Recoil_useRecoilCallback;
const {
  noWait: noWait$1,
  waitForAll: waitForAll$1,
  waitForAllSettled: waitForAllSettled$1,
  waitForAny: waitForAny$1,
  waitForNone: waitForNone$1
} = Recoil_WaitFor;
var Recoil_index = {
  // Types
  DefaultValue: DefaultValue$3,
  isRecoilValue: isRecoilValue$5,
  RecoilLoadable,
  // Global Recoil environment settiongs
  RecoilEnv: Recoil_RecoilEnv,
  // Recoil Root
  RecoilRoot: RecoilRoot$2,
  useRecoilStoreID: useRecoilStoreID$1,
  useRecoilBridgeAcrossReactRoots_UNSTABLE: Recoil_useRecoilBridgeAcrossReactRoots,
  // Atoms/Selectors
  atom: Recoil_atom,
  selector: Recoil_selector,
  // Convenience Atoms/Selectors
  atomFamily: Recoil_atomFamily,
  selectorFamily: Recoil_selectorFamily,
  constSelector: Recoil_constSelector,
  errorSelector: Recoil_errorSelector,
  readOnlySelector: Recoil_readOnlySelector,
  // Concurrency Helpers for Atoms/Selectors
  noWait: noWait$1,
  waitForNone: waitForNone$1,
  waitForAny: waitForAny$1,
  waitForAll: waitForAll$1,
  waitForAllSettled: waitForAllSettled$1,
  // Hooks for Atoms/Selectors
  useRecoilValue: useRecoilValue$1,
  useRecoilValueLoadable: useRecoilValueLoadable$1,
  useRecoilState: useRecoilState$1,
  useRecoilStateLoadable: useRecoilStateLoadable$1,
  useSetRecoilState: useSetRecoilState$1,
  useResetRecoilState: useResetRecoilState$1,
  useGetRecoilValueInfo_UNSTABLE: Recoil_useGetRecoilValueInfo,
  useRecoilRefresher_UNSTABLE: Recoil_useRecoilRefresher,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE$1,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: useRecoilValue_TRANSITION_SUPPORT_UNSTABLE$1,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE: useRecoilState_TRANSITION_SUPPORT_UNSTABLE$1,
  // Hooks for complex operations
  useRecoilCallback: useRecoilCallback$1,
  useRecoilTransaction_UNSTABLE: Recoil_useRecoilTransaction,
  // Snapshots
  useGotoRecoilSnapshot: useGotoRecoilSnapshot$1,
  useRecoilSnapshot: useRecoilSnapshot$1,
  useRecoilTransactionObserver_UNSTABLE: useRecoilTransactionObserver$1,
  snapshot_UNSTABLE: freshSnapshot$2,
  // Memory Management
  useRetain: Recoil_useRetain,
  retentionZone: retentionZone$1
};
var Recoil_index_5 = Recoil_index.RecoilRoot;
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Recoil_index_5, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MainPage, {}) }) });
}
const index = "";
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
