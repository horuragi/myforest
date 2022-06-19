/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 744:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function (e, t) {
  var n,
      r,
      i = typeof t,
      o = e.location,
      a = e.document,
      s = a.documentElement,
      l = e.jQuery,
      u = e.$,
      c = {},
      p = [],
      f = "1.10.2",
      d = p.concat,
      h = p.push,
      g = p.slice,
      m = p.indexOf,
      y = c.toString,
      v = c.hasOwnProperty,
      b = f.trim,
      x = function (e, t) {
    return new x.fn.init(e, t, r);
  },
      w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = /\S+/g,
      C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      E = /^[\],:{}\s]*$/,
      S = /(?:^|:|,)(?:\s*\[)+/g,
      A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
      D = /^-ms-/,
      L = /-([\da-z])/gi,
      H = function (e, t) {
    return t.toUpperCase();
  },
      q = function (e) {
    (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready());
  },
      _ = function () {
    a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q));
  };

  x.fn = x.prototype = {
    jquery: f,
    constructor: x,
    init: function (e, n, r) {
      var i, o;
      if (!e) return this;

      if ("string" == typeof e) {
        if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);

        if (i[1]) {
          if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n)) for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
          return this;
        }

        if (o = a.getElementById(i[2]), o && o.parentNode) {
          if (o.id !== i[2]) return r.find(e);
          this.length = 1, this[0] = o;
        }

        return this.context = a, this.selector = e, this;
      }

      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this));
    },
    selector: "",
    length: 0,
    toArray: function () {
      return g.call(this);
    },
    get: function (e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
    },
    pushStack: function (e) {
      var t = x.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t;
    },
    each: function (e, t) {
      return x.each(this, e, t);
    },
    ready: function (e) {
      return x.ready.promise().done(e), this;
    },
    slice: function () {
      return this.pushStack(g.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var t = this.length,
          n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
    },
    map: function (e) {
      return this.pushStack(x.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: h,
    sort: [].sort,
    splice: [].splice
  }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
    var e,
        n,
        r,
        i,
        o,
        a,
        s = arguments[0] || {},
        l = 1,
        u = arguments.length,
        c = !1;

    for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) if (null != (o = arguments[l])) for (i in o) e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));

    return s;
  }, x.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    noConflict: function (t) {
      return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x;
    },
    isReady: !1,
    readyWait: 1,
    holdReady: function (e) {
      e ? x.readyWait++ : x.ready(!0);
    },
    ready: function (e) {
      if (e === !0 ? ! --x.readyWait : !x.isReady) {
        if (!a.body) return setTimeout(x.ready);
        x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"));
      }
    },
    isFunction: function (e) {
      return "function" === x.type(e);
    },
    isArray: Array.isArray || function (e) {
      return "array" === x.type(e);
    },
    isWindow: function (e) {
      return null != e && e == e.window;
    },
    isNumeric: function (e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    },
    type: function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e;
    },
    isPlainObject: function (e) {
      var n;
      if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;

      try {
        if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (r) {
        return !1;
      }

      if (x.support.ownLast) for (n in e) return v.call(e, n);

      for (n in e);

      return n === t || v.call(e, n);
    },
    isEmptyObject: function (e) {
      var t;

      for (t in e) return !1;

      return !0;
    },
    error: function (e) {
      throw Error(e);
    },
    parseHTML: function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (n = t, t = !1), t = t || a;
      var r = k.exec(e),
          i = !n && [];
      return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes));
    },
    parseJSON: function (n) {
      return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t);
    },
    parseXML: function (n) {
      var r, i;
      if (!n || "string" != typeof n) return null;

      try {
        e.DOMParser ? (i = new DOMParser(), r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n));
      } catch (o) {
        r = t;
      }

      return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r;
    },
    noop: function () {},
    globalEval: function (t) {
      t && x.trim(t) && (e.execScript || function (t) {
        e.eval.call(e, t);
      })(t);
    },
    camelCase: function (e) {
      return e.replace(D, "ms-").replace(L, H);
    },
    nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function (e, t, n) {
      var r,
          i = 0,
          o = e.length,
          a = M(e);

      if (n) {
        if (a) {
          for (; o > i; i++) if (r = t.apply(e[i], n), r === !1) break;
        } else for (i in e) if (r = t.apply(e[i], n), r === !1) break;
      } else if (a) {
        for (; o > i; i++) if (r = t.call(e[i], i, e[i]), r === !1) break;
      } else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break;

      return e;
    },
    trim: b && !b.call("\ufeff\u00a0") ? function (e) {
      return null == e ? "" : b.call(e);
    } : function (e) {
      return null == e ? "" : (e + "").replace(C, "");
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n;
    },
    inArray: function (e, t, n) {
      var r;

      if (t) {
        if (m) return m.call(t, e, n);

        for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n;
      }

      return -1;
    },
    merge: function (e, n) {
      var r = n.length,
          i = e.length,
          o = 0;
      if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o];else while (n[o] !== t) e[i++] = n[o++];
      return e.length = i, e;
    },
    grep: function (e, t, n) {
      var r,
          i = [],
          o = 0,
          a = e.length;

      for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);

      return i;
    },
    map: function (e, t, n) {
      var r,
          i = 0,
          o = e.length,
          a = M(e),
          s = [];
      if (a) for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);else for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
      return d.apply([], s);
    },
    guid: 1,
    proxy: function (e, n) {
      var r, i, o;
      return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function () {
        return e.apply(n || this, r.concat(g.call(arguments)));
      }, i.guid = e.guid = e.guid || x.guid++, i) : t;
    },
    access: function (e, n, r, i, o, a, s) {
      var l = 0,
          u = e.length,
          c = null == r;

      if ("object" === x.type(r)) {
        o = !0;

        for (l in r) x.access(e, n, l, r[l], !0, a, s);
      } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
        return c.call(x(e), n);
      })), n)) for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));

      return o ? e : c ? n.call(e) : u ? n(e[0], r) : a;
    },
    now: function () {
      return new Date().getTime();
    },
    swap: function (e, t, n, r) {
      var i,
          o,
          a = {};

      for (o in t) a[o] = e.style[o], e.style[o] = t[o];

      i = n.apply(e, r || []);

      for (o in t) e.style[o] = a[o];

      return i;
    }
  }), x.ready.promise = function (t) {
    if (!n) if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready);else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);else {
      a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
      var r = !1;

      try {
        r = null == e.frameElement && a.documentElement;
      } catch (i) {}

      r && r.doScroll && function o() {
        if (!x.isReady) {
          try {
            r.doScroll("left");
          } catch (e) {
            return setTimeout(o, 50);
          }

          _(), x.ready();
        }
      }();
    }
    return n.promise(t);
  }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
    c["[object " + t + "]"] = t.toLowerCase();
  });

  function M(e) {
    var t = e.length,
        n = x.type(e);
    return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }

  r = x(a), function (e, t) {
    var n,
        r,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        p,
        f,
        d,
        h,
        g,
        m,
        y,
        v,
        b = "sizzle" + -new Date(),
        w = e.document,
        T = 0,
        C = 0,
        N = st(),
        k = st(),
        E = st(),
        S = !1,
        A = function (e, t) {
      return e === t ? (S = !0, 0) : 0;
    },
        j = typeof t,
        D = 1 << 31,
        L = {}.hasOwnProperty,
        H = [],
        q = H.pop,
        _ = H.push,
        M = H.push,
        O = H.slice,
        F = H.indexOf || function (e) {
      var t = 0,
          n = this.length;

      for (; n > t; t++) if (this[t] === e) return t;

      return -1;
    },
        B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        P = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        W = R.replace("w", "w#"),
        $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
        I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
        z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
        X = RegExp("^" + P + "*," + P + "*"),
        U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
        V = RegExp(P + "*[+~]"),
        Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
        J = RegExp(I),
        G = RegExp("^" + W + "$"),
        Q = {
      ID: RegExp("^#(" + R + ")"),
      CLASS: RegExp("^\\.(" + R + ")"),
      TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
      ATTR: RegExp("^" + $),
      PSEUDO: RegExp("^" + I),
      CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
      bool: RegExp("^(?:" + B + ")$", "i"),
      needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
    },
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        et = /^(?:input|select|textarea|button)$/i,
        tt = /^h\d$/i,
        nt = /'|\\/g,
        rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
        it = function (e, t, n) {
      var r = "0x" + t - 65536;
      return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r);
    };

    try {
      M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType;
    } catch (ot) {
      M = {
        apply: H.length ? function (e, t) {
          _.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]);

          e.length = n - 1;
        }
      };
    }

    function at(e, t, n, i) {
      var o, a, s, l, u, c, d, m, y, x;
      if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n;
      if (1 !== (l = t.nodeType) && 9 !== l) return [];

      if (h && !i) {
        if (o = Z.exec(e)) if (s = o[1]) {
          if (9 === l) {
            if (a = t.getElementById(s), !a || !a.parentNode) return n;
            if (a.id === s) return n.push(a), n;
          } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n;
        } else {
          if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
          if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n;
        }

        if (r.qsa && (!g || !g.test(e))) {
          if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
            c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;

            while (u--) c[u] = m + yt(c[u]);

            y = V.test(e) && t.parentNode || t, x = c.join(",");
          }

          if (x) try {
            return M.apply(n, y.querySelectorAll(x)), n;
          } catch (T) {} finally {
            d || t.removeAttribute("id");
          }
        }
      }

      return kt(e.replace(z, "$1"), t, n, i);
    }

    function st() {
      var e = [];

      function t(n, r) {
        return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r;
      }

      return t;
    }

    function lt(e) {
      return e[b] = !0, e;
    }

    function ut(e) {
      var t = f.createElement("div");

      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function ct(e, t) {
      var n = e.split("|"),
          r = e.length;

      while (r--) o.attrHandle[n[r]] = t;
    }

    function pt(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
      if (r) return r;
      if (n) while (n = n.nextSibling) if (n === t) return -1;
      return e ? 1 : -1;
    }

    function ft(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e;
      };
    }

    function dt(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }

    function ht(e) {
      return lt(function (t) {
        return t = +t, lt(function (n, r) {
          var i,
              o = e([], n.length, t),
              a = o.length;

          while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
        });
      });
    }

    s = at.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? "HTML" !== t.nodeName : !1;
    }, r = at.support = {}, p = at.setDocument = function (e) {
      var n = e ? e.ownerDocument || e : w,
          i = n.defaultView;
      return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function () {
        p();
      }), r.attributes = ut(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), r.getElementsByTagName = ut(function (e) {
        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length;
      }), r.getElementsByClassName = ut(function (e) {
        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length;
      }), r.getById = ut(function (e) {
        return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length;
      }), r.getById ? (o.find.ID = function (e, t) {
        if (typeof t.getElementById !== j && h) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [n] : [];
        }
      }, o.filter.ID = function (e) {
        var t = e.replace(rt, it);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }) : (delete o.find.ID, o.filter.ID = function (e) {
        var t = e.replace(rt, it);
        return function (e) {
          var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
          return n && n.value === t;
        };
      }), o.find.TAG = r.getElementsByTagName ? function (e, n) {
        return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) 1 === n.nodeType && r.push(n);

          return r;
        }

        return o;
      }, o.find.CLASS = r.getElementsByClassName && function (e, n) {
        return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t;
      }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function (e) {
        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked");
      }), ut(function (e) {
        var t = n.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:");
      })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function (e) {
        r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I);
      }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) if (t === e) return !0;
        return !1;
      }, A = d.compareDocumentPosition ? function (e, t) {
        if (e === t) return S = !0, 0;
        var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
        return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
      } : function (e, t) {
        var r,
            i = 0,
            o = e.parentNode,
            a = t.parentNode,
            s = [e],
            l = [t];
        if (e === t) return S = !0, 0;
        if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
        if (o === a) return pt(e, t);
        r = e;

        while (r = r.parentNode) s.unshift(r);

        r = t;

        while (r = r.parentNode) l.unshift(r);

        while (s[i] === l[i]) i++;

        return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0;
      }, n) : f;
    }, at.matches = function (e, t) {
      return at(e, null, null, t);
    }, at.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
        var n = y.call(e, t);
        if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (i) {}
      return at(t, f, null, [e]).length > 0;
    }, at.contains = function (e, t) {
      return (e.ownerDocument || e) !== f && p(e), v(e, t);
    }, at.attr = function (e, n) {
      (e.ownerDocument || e) !== f && p(e);
      var i = o.attrHandle[n.toLowerCase()],
          a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
      return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a;
    }, at.error = function (e) {
      throw Error("Syntax error, unrecognized expression: " + e);
    }, at.uniqueSort = function (e) {
      var t,
          n = [],
          i = 0,
          o = 0;

      if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
        while (t = e[o++]) t === e[o] && (i = n.push(o));

        while (i--) e.splice(n[i], 1);
      }

      return e;
    }, a = at.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) n += a(e);
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else for (; t = e[r]; r++) n += a(t);

      return n;
    }, o = at.selectors = {
      cacheLength: 50,
      createPseudo: lt,
      match: Q,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var n,
              r = !e[5] && e[2];
          return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(rt, it).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function (e) {
          var t = N[e + " "];
          return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function (e) {
            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "");
          });
        },
        ATTR: function (e, t, n) {
          return function (r) {
            var i = at.attr(r, e);
            return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0;
          };
        },
        CHILD: function (e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, l) {
            var u,
                c,
                p,
                f,
                d,
                h,
                g = o !== a ? "nextSibling" : "previousSibling",
                m = t.parentNode,
                y = s && t.nodeName.toLowerCase(),
                v = !l && !s;

            if (m) {
              if (o) {
                while (g) {
                  p = t;

                  while (p = p[g]) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;

                  h = g = "only" === e && !h && "nextSibling";
                }

                return !0;
              }

              if (h = [a ? m.firstChild : m.lastChild], a && v) {
                c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];

                while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if (1 === p.nodeType && ++f && p === t) {
                  c[e] = [T, d, f];
                  break;
                }
              } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break;

              return f -= i, f === r || 0 === f % r && f / r >= 0;
            }
          };
        },
        PSEUDO: function (e, t) {
          var n,
              r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
          return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function (e, n) {
            var i,
                o = r(e, t),
                a = o.length;

            while (a--) i = F.call(e, o[a]), e[i] = !(n[i] = o[a]);
          }) : function (e) {
            return r(e, 0, n);
          }) : r;
        }
      },
      pseudos: {
        not: lt(function (e) {
          var t = [],
              n = [],
              r = l(e.replace(z, "$1"));
          return r[b] ? lt(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                s = e.length;

            while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), !n.pop();
          };
        }),
        has: lt(function (e) {
          return function (t) {
            return at(e, t).length > 0;
          };
        }),
        contains: lt(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || a(t)).indexOf(e) > -1;
          };
        }),
        lang: lt(function (e) {
          return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function (t) {
            var n;

            do if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);

            return !1;
          };
        }),
        target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function (e) {
          return e === d;
        },
        focus: function (e) {
          return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: function (e) {
          return e.disabled === !1;
        },
        disabled: function (e) {
          return e.disabled === !0;
        },
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;

          return !0;
        },
        parent: function (e) {
          return !o.pseudos.empty(e);
        },
        header: function (e) {
          return tt.test(e.nodeName);
        },
        input: function (e) {
          return et.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
        },
        first: ht(function () {
          return [0];
        }),
        last: ht(function (e, t) {
          return [t - 1];
        }),
        eq: ht(function (e, t, n) {
          return [0 > n ? n + t : n];
        }),
        even: ht(function (e, t) {
          var n = 0;

          for (; t > n; n += 2) e.push(n);

          return e;
        }),
        odd: ht(function (e, t) {
          var n = 1;

          for (; t > n; n += 2) e.push(n);

          return e;
        }),
        lt: ht(function (e, t, n) {
          var r = 0 > n ? n + t : n;

          for (; --r >= 0;) e.push(r);

          return e;
        }),
        gt: ht(function (e, t, n) {
          var r = 0 > n ? n + t : n;

          for (; t > ++r;) e.push(r);

          return e;
        })
      }
    }, o.pseudos.nth = o.pseudos.eq;

    for (n in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) o.pseudos[n] = ft(n);

    for (n in {
      submit: !0,
      reset: !0
    }) o.pseudos[n] = dt(n);

    function gt() {}

    gt.prototype = o.filters = o.pseudos, o.setFilters = new gt();

    function mt(e, t) {
      var n,
          r,
          i,
          a,
          s,
          l,
          u,
          c = k[e + " "];
      if (c) return t ? 0 : c.slice(0);
      s = e, l = [], u = o.preFilter;

      while (s) {
        (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(z, " ")
        }), s = s.slice(n.length));

        for (a in o.filter) !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
          value: n,
          type: a,
          matches: r
        }), s = s.slice(n.length));

        if (!n) break;
      }

      return t ? s.length : s ? at.error(e) : k(e, l).slice(0);
    }

    function yt(e) {
      var t = 0,
          n = e.length,
          r = "";

      for (; n > t; t++) r += e[t].value;

      return r;
    }

    function vt(e, t, n) {
      var r = t.dir,
          o = n && "parentNode" === r,
          a = C++;
      return t.first ? function (t, n, i) {
        while (t = t[r]) if (1 === t.nodeType || o) return e(t, n, i);
      } : function (t, n, s) {
        var l,
            u,
            c,
            p = T + " " + a;

        if (s) {
          while (t = t[r]) if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
        } else while (t = t[r]) if (1 === t.nodeType || o) if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
          if ((l = u[1]) === !0 || l === i) return l === !0;
        } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0;
      };
    }

    function bt(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;

        while (i--) if (!e[i](t, n, r)) return !1;

        return !0;
      } : e[0];
    }

    function xt(e, t, n, r, i) {
      var o,
          a = [],
          s = 0,
          l = e.length,
          u = null != t;

      for (; l > s; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));

      return a;
    }

    function wt(e, t, n, r, i, o) {
      return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function (o, a, s, l) {
        var u,
            c,
            p,
            f = [],
            d = [],
            h = a.length,
            g = o || Nt(t || "*", s.nodeType ? [s] : s, []),
            m = !e || !o && t ? g : xt(g, f, e, s, l),
            y = n ? i || (o ? e : h || r) ? [] : a : m;

        if (n && n(m, y, s, l), r) {
          u = xt(y, d), r(u, [], s, l), c = u.length;

          while (c--) (p = u[c]) && (y[d[c]] = !(m[d[c]] = p));
        }

        if (o) {
          if (i || e) {
            if (i) {
              u = [], c = y.length;

              while (c--) (p = y[c]) && u.push(m[c] = p);

              i(null, y = [], u, l);
            }

            c = y.length;

            while (c--) (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p));
          }
        } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y);
      });
    }

    function Tt(e) {
      var t,
          n,
          r,
          i = e.length,
          a = o.relative[e[0].type],
          s = a || o.relative[" "],
          l = a ? 1 : 0,
          c = vt(function (e) {
        return e === t;
      }, s, !0),
          p = vt(function (e) {
        return F.call(t, e) > -1;
      }, s, !0),
          f = [function (e, n, r) {
        return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
      }];

      for (; i > l; l++) if (n = o.relative[e[l].type]) f = [vt(bt(f), n)];else {
        if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
          for (r = ++l; i > r; r++) if (o.relative[e[r].type]) break;

          return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({
            value: " " === e[l - 2].type ? "*" : ""
          })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e));
        }

        f.push(n);
      }

      return bt(f);
    }

    function Ct(e, t) {
      var n = 0,
          r = t.length > 0,
          a = e.length > 0,
          s = function (s, l, c, p, d) {
        var h,
            g,
            m,
            y = [],
            v = 0,
            b = "0",
            x = s && [],
            w = null != d,
            C = u,
            N = s || a && o.find.TAG("*", d && l.parentNode || l),
            k = T += null == C ? 1 : Math.random() || .1;

        for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
          if (a && h) {
            g = 0;

            while (m = e[g++]) if (m(h, l, c)) {
              p.push(h);
              break;
            }

            w && (T = k, i = ++n);
          }

          r && ((h = !m && h) && v--, s && x.push(h));
        }

        if (v += b, r && b !== v) {
          g = 0;

          while (m = t[g++]) m(x, y, l, c);

          if (s) {
            if (v > 0) while (b--) x[b] || y[b] || (y[b] = q.call(p));
            y = xt(y);
          }

          M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p);
        }

        return w && (T = k, u = C), x;
      };

      return r ? lt(s) : s;
    }

    l = at.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = E[e + " "];

      if (!o) {
        t || (t = mt(e)), n = t.length;

        while (n--) o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);

        o = E(e, Ct(i, r));
      }

      return o;
    };

    function Nt(e, t, n) {
      var r = 0,
          i = t.length;

      for (; i > r; r++) at(e, t[r], n);

      return n;
    }

    function kt(e, t, n, i) {
      var a,
          s,
          u,
          c,
          p,
          f = mt(e);

      if (!i && 1 === f.length) {
        if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
          if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;
          e = e.slice(s.shift().value.length);
        }

        a = Q.needsContext.test(e) ? 0 : s.length;

        while (a--) {
          if (u = s[a], o.relative[c = u.type]) break;

          if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
            if (s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n;
            break;
          }
        }
      }

      return l(e, f)(i, t, !h, n, V.test(e)), n;
    }

    r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function (e) {
      return 1 & e.compareDocumentPosition(f.createElement("div"));
    }), ut(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || ct("type|href|height|width", function (e, n, r) {
      return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2);
    }), r.attributes && ut(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || ct("value", function (e, n, r) {
      return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue;
    }), ut(function (e) {
      return null == e.getAttribute("disabled");
    }) || ct(B, function (e, n, r) {
      var i;
      return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null;
    }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains;
  }(e);
  var O = {};

  function F(e) {
    var t = O[e] = {};
    return x.each(e.match(T) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }

  x.Callbacks = function (e) {
    e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);

    var n,
        r,
        i,
        o,
        a,
        s,
        l = [],
        u = !e.once && [],
        c = function (t) {
      for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++) if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
        r = !1;
        break;
      }

      n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable());
    },
        p = {
      add: function () {
        if (l) {
          var t = l.length;
          (function i(t) {
            x.each(t, function (t, n) {
              var r = x.type(n);
              "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n);
            });
          })(arguments), n ? o = l.length : r && (s = t, c(r));
        }

        return this;
      },
      remove: function () {
        return l && x.each(arguments, function (e, t) {
          var r;

          while ((r = x.inArray(t, l, r)) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--);
        }), this;
      },
      has: function (e) {
        return e ? x.inArray(e, l) > -1 : !(!l || !l.length);
      },
      empty: function () {
        return l = [], o = 0, this;
      },
      disable: function () {
        return l = u = r = t, this;
      },
      disabled: function () {
        return !l;
      },
      lock: function () {
        return u = t, r || p.disable(), this;
      },
      locked: function () {
        return !u;
      },
      fireWith: function (e, t) {
        return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this;
      },
      fire: function () {
        return p.fireWith(this, arguments), this;
      },
      fired: function () {
        return !!i;
      }
    };

    return p;
  }, x.extend({
    Deferred: function (e) {
      var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]],
          n = "pending",
          r = {
        state: function () {
          return n;
        },
        always: function () {
          return i.done(arguments).fail(arguments), this;
        },
        then: function () {
          var e = arguments;
          return x.Deferred(function (n) {
            x.each(t, function (t, o) {
              var a = o[0],
                  s = x.isFunction(e[t]) && e[t];
              i[o[1]](function () {
                var e = s && s.apply(this, arguments);
                e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        },
        promise: function (e) {
          return null != e ? x.extend(e, r) : r;
        }
      },
          i = {};
      return r.pipe = r.then, x.each(t, function (e, o) {
        var a = o[2],
            s = o[3];
        r[o[1]] = a.add, s && a.add(function () {
          n = s;
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
          return i[o[0] + "With"](this === i ? r : this, arguments), this;
        }, i[o[0] + "With"] = a.fireWith;
      }), r.promise(i), e && e.call(i, i), i;
    },
    when: function (e) {
      var t = 0,
          n = g.call(arguments),
          r = n.length,
          i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
          o = 1 === i ? e : x.Deferred(),
          a = function (e, t, n) {
        return function (r) {
          t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
        };
      },
          s,
          l,
          u;

      if (r > 1) for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
      return i || o.resolveWith(u, n), o.promise();
    }
  }), x.support = function (t) {
    var n,
        r,
        o,
        s,
        l,
        u,
        c,
        p,
        f,
        d = a.createElement("div");
    if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
    s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;

    try {
      delete d.test;
    } catch (h) {
      t.deleteExpando = !1;
    }

    o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
      t.noCloneEvent = !1;
    }), d.cloneNode(!0).click());

    for (f in {
      submit: !0,
      change: !0,
      focusin: !0
    }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;

    d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;

    for (f in x(t)) break;

    return t.ownLast = "0" !== f, x(function () {
      var n,
          r,
          o,
          s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
          l = a.getElementsByTagName("body")[0];
      l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {
        zoom: 1
      } : {}, function () {
        t.boxSizing = 4 === d.offsetWidth;
      }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
        width: "4px"
      }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null);
    }), n = s = l = u = r = o = null, t;
  }({});
  var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
      P = /([A-Z])/g;

  function R(e, n, r, i) {
    if (x.acceptData(e)) {
      var o,
          a,
          s = x.expando,
          l = e.nodeType,
          u = l ? x.cache : e,
          c = l ? e[s] : e[s] && s;
      if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {
        toJSON: x.noop
      }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o;
    }
  }

  function W(e, t, n) {
    if (x.acceptData(e)) {
      var r,
          i,
          o = e.nodeType,
          a = o ? x.cache : e,
          s = o ? e[x.expando] : x.expando;

      if (a[s]) {
        if (t && (r = n ? a[s] : a[s].data)) {
          x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;

          while (i--) delete r[t[i]];

          if (n ? !I(r) : !x.isEmptyObject(r)) return;
        }

        (n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null);
      }
    }
  }

  x.extend({
    cache: {},
    noData: {
      applet: !0,
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function (e) {
      return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e);
    },
    data: function (e, t, n) {
      return R(e, t, n);
    },
    removeData: function (e, t) {
      return W(e, t);
    },
    _data: function (e, t, n) {
      return R(e, t, n, !0);
    },
    _removeData: function (e, t) {
      return W(e, t, !0);
    },
    acceptData: function (e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
      var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
      return !t || t !== !0 && e.getAttribute("classid") === t;
    }
  }), x.fn.extend({
    data: function (e, n) {
      var r,
          i,
          o = null,
          a = 0,
          s = this[0];

      if (e === t) {
        if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
          for (r = s.attributes; r.length > a; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));

          x._data(s, "parsedAttrs", !0);
        }

        return o;
      }

      return "object" == typeof e ? this.each(function () {
        x.data(this, e);
      }) : arguments.length > 1 ? this.each(function () {
        x.data(this, e, n);
      }) : s ? $(s, e, x.data(s, e)) : null;
    },
    removeData: function (e) {
      return this.each(function () {
        x.removeData(this, e);
      });
    }
  });

  function $(e, n, r) {
    if (r === t && 1 === e.nodeType) {
      var i = "data-" + n.replace(P, "-$1").toLowerCase();

      if (r = e.getAttribute(i), "string" == typeof r) {
        try {
          r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r;
        } catch (o) {}

        x.data(e, n, r);
      } else r = t;
    }

    return r;
  }

  function I(e) {
    var t;

    for (t in e) if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;

    return !0;
  }

  x.extend({
    queue: function (e, n, r) {
      var i;
      return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t;
    },
    dequeue: function (e, t) {
      t = t || "fx";

      var n = x.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = x._queueHooks(e, t),
          a = function () {
        x.dequeue(e, t);
      };

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return x._data(e, n) || x._data(e, n, {
        empty: x.Callbacks("once memory").add(function () {
          x._removeData(e, t + "queue"), x._removeData(e, n);
        })
      });
    }
  }), x.fn.extend({
    queue: function (e, n) {
      var r = 2;
      return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () {
        var t = x.queue(this, e, n);
        x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        x.dequeue(this, e);
      });
    },
    delay: function (e, t) {
      return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
        var r = setTimeout(t, e);

        n.stop = function () {
          clearTimeout(r);
        };
      });
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", []);
    },
    promise: function (e, n) {
      var r,
          i = 1,
          o = x.Deferred(),
          a = this,
          s = this.length,
          l = function () {
        --i || o.resolveWith(a, [a]);
      };

      "string" != typeof e && (n = e, e = t), e = e || "fx";

      while (s--) r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));

      return l(), o.promise(n);
    }
  });
  var z,
      X,
      U = /[\t\r\n\f]/g,
      V = /\r/g,
      Y = /^(?:input|select|textarea|button|object)$/i,
      J = /^(?:a|area)$/i,
      G = /^(?:checked|selected)$/i,
      Q = x.support.getSetAttribute,
      K = x.support.input;
  x.fn.extend({
    attr: function (e, t) {
      return x.access(this, x.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        x.removeAttr(this, e);
      });
    },
    prop: function (e, t) {
      return x.access(this, x.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return e = x.propFix[e] || e, this.each(function () {
        try {
          this[e] = t, delete this[e];
        } catch (n) {}
      });
    },
    addClass: function (e) {
      var t,
          n,
          r,
          i,
          o,
          a = 0,
          s = this.length,
          l = "string" == typeof e && e;
      if (x.isFunction(e)) return this.each(function (t) {
        x(this).addClass(e.call(this, t, this.className));
      });
      if (l) for (t = (e || "").match(T) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
        o = 0;

        while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");

        n.className = x.trim(r);
      }
      return this;
    },
    removeClass: function (e) {
      var t,
          n,
          r,
          i,
          o,
          a = 0,
          s = this.length,
          l = 0 === arguments.length || "string" == typeof e && e;
      if (x.isFunction(e)) return this.each(function (t) {
        x(this).removeClass(e.call(this, t, this.className));
      });
      if (l) for (t = (e || "").match(T) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
        o = 0;

        while (i = t[o++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");

        n.className = e ? x.trim(r) : "";
      }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
        x(this).toggleClass(e.call(this, n, this.className, t), t);
      }) : this.each(function () {
        if ("string" === n) {
          var t,
              r = 0,
              o = x(this),
              a = e.match(T) || [];

          while (t = a[r++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
        } else (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "");
      });
    },
    hasClass: function (e) {
      var t = " " + e + " ",
          n = 0,
          r = this.length;

      for (; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;

      return !1;
    },
    val: function (e) {
      var n,
          r,
          i,
          o = this[0];
      {
        if (arguments.length) return i = x.isFunction(e), this.each(function (n) {
          var o;
          1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function (e) {
            return null == e ? "" : e + "";
          })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o));
        });
        if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n);
      }
    }
  }), x.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = x.find.attr(e, "value");
          return null != t ? t : e.text;
        }
      },
      select: {
        get: function (e) {
          var t,
              n,
              r = e.options,
              i = e.selectedIndex,
              o = "select-one" === e.type || 0 > i,
              a = o ? null : [],
              s = o ? i + 1 : r.length,
              l = 0 > i ? s : o ? i : 0;

          for (; s > l; l++) if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
            if (t = x(n).val(), o) return t;
            a.push(t);
          }

          return a;
        },
        set: function (e, t) {
          var n,
              r,
              i = e.options,
              o = x.makeArray(t),
              a = i.length;

          while (a--) r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);

          return n || (e.selectedIndex = -1), o;
        }
      }
    },
    attr: function (e, n, r) {
      var o,
          a,
          s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t));
    },
    removeAttr: function (e, t) {
      var n,
          r,
          i = 0,
          o = t && t.match(T);
      if (o && 1 === e.nodeType) while (n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r);
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function (e, n, r) {
      var i,
          o,
          a,
          s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n];
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = x.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    }
  }), X = {
    set: function (e, t, n) {
      return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n;
    }
  }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
    var r = x.expr.attrHandle[n] || x.find.attr;
    x.expr.attrHandle[n] = K && Q || !G.test(n) ? function (e, n, i) {
      var o = x.expr.attrHandle[n],
          a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
      return x.expr.attrHandle[n] = o, a;
    } : function (e, n, r) {
      return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null;
    };
  }), K && Q || (x.attrHooks.value = {
    set: function (e, n, r) {
      return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r);
    }
  }), Q || (z = {
    set: function (e, n, r) {
      var i = e.getAttributeNode(r);
      return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t;
    }
  }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (e, n, r) {
    var i;
    return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null;
  }, x.valHooks.button = {
    get: function (e, n) {
      var r = e.getAttributeNode(n);
      return r && r.specified ? r.value : t;
    },
    set: z.set
  }, x.attrHooks.contenteditable = {
    set: function (e, t, n) {
      z.set(e, "" === t ? !1 : t, n);
    }
  }, x.each(["width", "height"], function (e, n) {
    x.attrHooks[n] = {
      set: function (e, r) {
        return "" === r ? (e.setAttribute(n, "auto"), r) : t;
      }
    };
  })), x.support.hrefNormalized || x.each(["href", "src"], function (e, t) {
    x.propHooks[t] = {
      get: function (e) {
        return e.getAttribute(t, 4);
      }
    };
  }), x.support.style || (x.attrHooks.style = {
    get: function (e) {
      return e.style.cssText || t;
    },
    set: function (e, t) {
      return e.style.cssText = t + "";
    }
  }), x.support.optSelected || (x.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
    }
  }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    x.propFix[this.toLowerCase()] = this;
  }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function () {
    x.valHooks[this] = {
      set: function (e, n) {
        return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t;
      }
    }, x.support.checkOn || (x.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });
  var Z = /^(?:input|select|textarea)$/i,
      et = /^key/,
      tt = /^(?:mouse|contextmenu)|click/,
      nt = /^(?:focusinfocus|focusoutblur)$/,
      rt = /^([^.]*)(?:\.(.+)|)$/;

  function it() {
    return !0;
  }

  function ot() {
    return !1;
  }

  function at() {
    try {
      return a.activeElement;
    } catch (e) {}
  }

  x.event = {
    global: {},
    add: function (e, n, r, o, a) {
      var s,
          l,
          u,
          c,
          p,
          f,
          d,
          h,
          g,
          m,
          y,
          v = x._data(e);

      if (v) {
        r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
          return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments);
        }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;

        while (u--) s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
          type: g,
          origType: y,
          data: o,
          handler: r,
          guid: r.guid,
          selector: a,
          needsContext: a && x.expr.match.needsContext.test(a),
          namespace: m.join(".")
        }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);

        e = null;
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
          a,
          s,
          l,
          u,
          c,
          p,
          f,
          d,
          h,
          g,
          m = x.hasData(e) && x._data(e);

      if (m && (c = m.events)) {
        t = (t || "").match(T) || [""], u = t.length;

        while (u--) if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
          p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;

          while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));

          l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d]);
        } else for (d in c) x.event.remove(e, d + t[u], n, r, !0);

        x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"));
      }
    },
    trigger: function (n, r, i, o) {
      var s,
          l,
          u,
          c,
          p,
          f,
          d,
          h = [i || a],
          g = v.call(n, "type") ? n.type : n,
          m = v.call(n, "namespace") ? n.namespace.split(".") : [];

      if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
        if (!o && !p.noBubble && !x.isWindow(i)) {
          for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) h.push(u), f = u;

          f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e);
        }

        d = 0;

        while ((u = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();

        if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
          f = i[l], f && (i[l] = null), x.event.triggered = g;

          try {
            i[g]();
          } catch (y) {}

          x.event.triggered = t, f && (i[l] = f);
        }

        return n.result;
      }
    },
    dispatch: function (e) {
      e = x.event.fix(e);
      var n,
          r,
          i,
          o,
          a,
          s = [],
          l = g.call(arguments),
          u = (x._data(this, "events") || {})[e.type] || [],
          c = x.event.special[e.type] || {};

      if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
        s = x.event.handlers.call(this, e, u), n = 0;

        while ((o = s[n++]) && !e.isPropagationStopped()) {
          e.currentTarget = o.elem, a = 0;

          while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
        }

        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, n) {
      var r,
          i,
          o,
          a,
          s = [],
          l = n.delegateCount,
          u = e.target;
      if (l && u.nodeType && (!e.button || "click" !== e.type)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
        for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);

        o.length && s.push({
          elem: u,
          handlers: o
        });
      }
      return n.length > l && s.push({
        elem: this,
        handlers: n.slice(l)
      }), s;
    },
    fix: function (e) {
      if (e[x.expando]) return e;
      var t,
          n,
          r,
          i = e.type,
          o = e,
          s = this.fixHooks[i];
      s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;

      while (t--) n = r[t], e[n] = o[n];

      return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (e, n) {
        var r,
            i,
            o,
            s = n.button,
            l = n.fromElement;
        return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e;
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function () {
          if (this !== at() && this.focus) try {
            return this.focus(), !1;
          } catch (e) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function () {
          return this === at() && this.blur ? (this.blur(), !1) : t;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function () {
          return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t;
        },
        _default: function (e) {
          return x.nodeName(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          e.result !== t && (e.originalEvent.returnValue = e.result);
        }
      }
    },
    simulate: function (e, t, n, r) {
      var i = x.extend(new x.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      });
      r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
    }
  }, x.removeEvent = a.removeEventListener ? function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  } : function (e, t, n) {
    var r = "on" + t;
    e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n));
  }, x.Event = function (e, n) {
    return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n);
  }, x.Event.prototype = {
    isDefaultPrevented: ot,
    isPropagationStopped: ot,
    isImmediatePropagationStopped: ot,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = it, this.stopPropagation();
    }
  }, x.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function (e, t) {
    x.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function (e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;
        return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), x.support.submitBubbles || (x.event.special.submit = {
    setup: function () {
      return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function (e) {
        var n = e.target,
            r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
        r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function (e) {
          e._submit_bubble = !0;
        }), x._data(r, "submitBubbles", !0));
      }), t);
    },
    postDispatch: function (e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0));
    },
    teardown: function () {
      return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t);
    }
  }), x.support.changeBubbles || (x.event.special.change = {
    setup: function () {
      return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function (e) {
        "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
      }), x.event.add(this, "click._change", function (e) {
        this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0);
      })), !1) : (x.event.add(this, "beforeactivate._change", function (e) {
        var t = e.target;
        Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function (e) {
          !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0);
        }), x._data(t, "changeBubbles", !0));
      }), t);
    },
    handle: function (e) {
      var n = e.target;
      return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t;
    },
    teardown: function () {
      return x.event.remove(this, "._change"), !Z.test(this.nodeName);
    }
  }), x.support.focusinBubbles || x.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    var n = 0,
        r = function (e) {
      x.event.simulate(t, e.target, x.event.fix(e), !0);
    };

    x.event.special[t] = {
      setup: function () {
        0 === n++ && a.addEventListener(e, r, !0);
      },
      teardown: function () {
        0 === --n && a.removeEventListener(e, r, !0);
      }
    };
  }), x.fn.extend({
    on: function (e, n, r, i, o) {
      var a, s;

      if ("object" == typeof e) {
        "string" != typeof n && (r = r || n, n = t);

        for (a in e) this.on(a, n, r, e[a], o);

        return this;
      }

      if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;else if (!i) return this;
      return 1 === o && (s = i, i = function (e) {
        return x().off(e), s.apply(this, arguments);
      }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function () {
        x.event.add(this, e, i, r, n);
      });
    },
    one: function (e, t, n, r) {
      return this.on(e, t, n, r, 1);
    },
    off: function (e, n, r) {
      var i, o;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;

      if ("object" == typeof e) {
        for (o in e) this.off(o, n, e[o]);

        return this;
      }

      return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
        x.event.remove(this, e, r, n);
      });
    },
    trigger: function (e, t) {
      return this.each(function () {
        x.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, n) {
      var r = this[0];
      return r ? x.event.trigger(e, n, r, !0) : t;
    }
  });
  var st = /^.[^:#\[\.,]*$/,
      lt = /^(?:parents|prev(?:Until|All))/,
      ut = x.expr.match.needsContext,
      ct = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  x.fn.extend({
    find: function (e) {
      var t,
          n = [],
          r = this,
          i = r.length;
      if ("string" != typeof e) return this.pushStack(x(e).filter(function () {
        for (t = 0; i > t; t++) if (x.contains(r[t], this)) return !0;
      }));

      for (t = 0; i > t; t++) x.find(e, r[t], n);

      return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n;
    },
    has: function (e) {
      var t,
          n = x(e, this),
          r = n.length;
      return this.filter(function () {
        for (t = 0; r > t; t++) if (x.contains(this, n[t])) return !0;
      });
    },
    not: function (e) {
      return this.pushStack(ft(this, e || [], !0));
    },
    filter: function (e) {
      return this.pushStack(ft(this, e || [], !1));
    },
    is: function (e) {
      return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length;
    },
    closest: function (e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;

      for (; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
        n = o.push(n);
        break;
      }

      return this.pushStack(o.length > 1 ? x.unique(o) : o);
    },
    index: function (e) {
      return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
          r = x.merge(this.get(), n);
      return this.pushStack(x.unique(r));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  });

  function pt(e, t) {
    do e = e[t]; while (e && 1 !== e.nodeType);

    return e;
  }

  x.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return x.dir(e, "parentNode");
    },
    parentsUntil: function (e, t, n) {
      return x.dir(e, "parentNode", n);
    },
    next: function (e) {
      return pt(e, "nextSibling");
    },
    prev: function (e) {
      return pt(e, "previousSibling");
    },
    nextAll: function (e) {
      return x.dir(e, "nextSibling");
    },
    prevAll: function (e) {
      return x.dir(e, "previousSibling");
    },
    nextUntil: function (e, t, n) {
      return x.dir(e, "nextSibling", n);
    },
    prevUntil: function (e, t, n) {
      return x.dir(e, "previousSibling", n);
    },
    siblings: function (e) {
      return x.sibling((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return x.sibling(e.firstChild);
    },
    contents: function (e) {
      return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes);
    }
  }, function (e, t) {
    x.fn[e] = function (n, r) {
      var i = x.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i);
    };
  }), x.extend({
    filter: function (e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    },
    dir: function (e, n, r) {
      var i = [],
          o = e[n];

      while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];

      return i;
    },
    sibling: function (e, t) {
      var n = [];

      for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);

      return n;
    }
  });

  function ft(e, t, n) {
    if (x.isFunction(t)) return x.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    });
    if (t.nodeType) return x.grep(e, function (e) {
      return e === t !== n;
    });

    if ("string" == typeof t) {
      if (st.test(t)) return x.filter(t, e, n);
      t = x.filter(t, e);
    }

    return x.grep(e, function (e) {
      return x.inArray(e, t) >= 0 !== n;
    });
  }

  function dt(e) {
    var t = ht.split("|"),
        n = e.createDocumentFragment();
    if (n.createElement) while (t.length) n.createElement(t.pop());
    return n;
  }

  var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      gt = / jQuery\d+="(?:null|\d+)"/g,
      mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
      yt = /^\s+/,
      vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      bt = /<([\w:]+)/,
      xt = /<tbody/i,
      wt = /<|&#?\w+;/,
      Tt = /<(?:script|style|link)/i,
      Ct = /^(?:checkbox|radio)$/i,
      Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      kt = /^$|\/(?:java|ecma)script/i,
      Et = /^true\/(.*)/,
      St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      At = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  },
      jt = dt(a),
      Dt = jt.appendChild(a.createElement("div"));
  At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
    text: function (e) {
      return x.access(this, function (e) {
        return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e));
      }, null, e, arguments.length);
    },
    append: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Lt(this, e);
          t.appendChild(e);
        }
      });
    },
    prepend: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Lt(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    remove: function (e, t) {
      var n,
          r = e ? x.filter(e, this) : this,
          i = 0;

      for (; null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));

      return this;
    },
    empty: function () {
      var e,
          t = 0;

      for (; null != (e = this[t]); t++) {
        1 === e.nodeType && x.cleanData(Ft(e, !1));

        while (e.firstChild) e.removeChild(e.firstChild);

        e.options && x.nodeName(e, "select") && (e.options.length = 0);
      }

      return this;
    },
    clone: function (e, t) {
      return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
        return x.clone(this, e, t);
      });
    },
    html: function (e) {
      return x.access(this, function (e) {
        var n = this[0] || {},
            r = 0,
            i = this.length;
        if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;

        if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
          e = e.replace(vt, "<$1></$2>");

          try {
            for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);

            n = 0;
          } catch (o) {}
        }

        n && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var e = x.map(this, function (e) {
        return [e.nextSibling, e.parentNode];
      }),
          t = 0;
      return this.domManip(arguments, function (n) {
        var r = e[t++],
            i = e[t++];
        i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r));
      }, !0), t ? this : this.remove();
    },
    detach: function (e) {
      return this.remove(e, !0);
    },
    domManip: function (e, t, n) {
      e = d.apply([], e);
      var r,
          i,
          o,
          a,
          s,
          l,
          u = 0,
          c = this.length,
          p = this,
          f = c - 1,
          h = e[0],
          g = x.isFunction(h);
      if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function (r) {
        var i = p.eq(r);
        g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n);
      });

      if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
        for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);

        if (o) for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
        l = r = null;
      }

      return this;
    }
  });

  function Lt(e, t) {
    return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
  }

  function Ht(e) {
    return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e;
  }

  function qt(e) {
    var t = Et.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }

  function _t(e, t) {
    var n,
        r = 0;

    for (; null != (n = e[r]); r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval"));
  }

  function Mt(e, t) {
    if (1 === t.nodeType && x.hasData(e)) {
      var n,
          r,
          i,
          o = x._data(e),
          a = x._data(t, o),
          s = o.events;

      if (s) {
        delete a.handle, a.events = {};

        for (n in s) for (r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r]);
      }

      a.data && (a.data = x.extend({}, a.data));
    }
  }

  function Ot(e, t) {
    var n, r, i;

    if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
        i = x._data(t);

        for (r in i.events) x.removeEvent(t, r, i.handle);

        t.removeAttribute(x.expando);
      }

      "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
    }
  }

  x.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    x.fn[e] = function (e) {
      var n,
          r = 0,
          i = [],
          o = x(e),
          a = o.length - 1;

      for (; a >= r; r++) n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());

      return this.pushStack(i);
    };
  });

  function Ft(e, n) {
    var r,
        o,
        a = 0,
        s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
    if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
    return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s;
  }

  function Bt(e) {
    Ct.test(e.type) && (e.defaultChecked = e.checked);
  }

  x.extend({
    clone: function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          l = x.contains(e.ownerDocument, e);
      if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) r[a] && Ot(i, r[a]);
      if (t) if (n) for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) Mt(i, r[a]);else Mt(e, o);
      return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o;
    },
    buildFragment: function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          l,
          u,
          c,
          p = e.length,
          f = dt(t),
          d = [],
          h = 0;

      for (; p > h; h++) if (o = e[h], o || 0 === o) if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);else if (wt.test(o)) {
        s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];

        while (i--) s = s.lastChild;

        if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
          o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;

          while (i--) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
        }

        x.merge(d, s.childNodes), s.textContent = "";

        while (s.firstChild) s.removeChild(s.firstChild);

        s = f.lastChild;
      } else d.push(t.createTextNode(o));

      s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;

      while (o = d[h++]) if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
        i = 0;

        while (o = s[i++]) kt.test(o.type || "") && n.push(o);
      }

      return s = null, f;
    },
    cleanData: function (e, t) {
      var n,
          r,
          o,
          a,
          s = 0,
          l = x.expando,
          u = x.cache,
          c = x.support.deleteExpando,
          f = x.event.special;

      for (; null != (n = e[s]); s++) if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
        if (a.events) for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
        u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o));
      }
    },
    _evalUrl: function (e) {
      return x.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        "throws": !0
      });
    }
  }), x.fn.extend({
    wrapAll: function (e) {
      if (x.isFunction(e)) return this.each(function (t) {
        x(this).wrapAll(e.call(this, t));
      });

      if (this[0]) {
        var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          var e = this;

          while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;

          return e;
        }).append(this);
      }

      return this;
    },
    wrapInner: function (e) {
      return x.isFunction(e) ? this.each(function (t) {
        x(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = x(this),
            n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function (e) {
      var t = x.isFunction(e);
      return this.each(function (n) {
        x(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function () {
      return this.parent().each(function () {
        x.nodeName(this, "body") || x(this).replaceWith(this.childNodes);
      }).end();
    }
  });
  var Pt,
      Rt,
      Wt,
      $t = /alpha\([^)]*\)/i,
      It = /opacity\s*=\s*([^)]*)/,
      zt = /^(top|right|bottom|left)$/,
      Xt = /^(none|table(?!-c[ea]).+)/,
      Ut = /^margin/,
      Vt = RegExp("^(" + w + ")(.*)$", "i"),
      Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
      Jt = RegExp("^([+-])=(" + w + ")", "i"),
      Gt = {
    BODY: "block"
  },
      Qt = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Kt = {
    letterSpacing: 0,
    fontWeight: 400
  },
      Zt = ["Top", "Right", "Bottom", "Left"],
      en = ["Webkit", "O", "Moz", "ms"];

  function tn(e, t) {
    if (t in e) return t;
    var n = t.charAt(0).toUpperCase() + t.slice(1),
        r = t,
        i = en.length;

    while (i--) if (t = en[i] + n, t in e) return t;

    return r;
  }

  function nn(e, t) {
    return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e);
  }

  function rn(e, t) {
    var n,
        r,
        i,
        o = [],
        a = 0,
        s = e.length;

    for (; s > a; a++) r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));

    for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));

    return e;
  }

  x.fn.extend({
    css: function (e, n) {
      return x.access(this, function (e, n, r) {
        var i,
            o,
            a = {},
            s = 0;

        if (x.isArray(n)) {
          for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = x.css(e, n[s], !1, o);

          return a;
        }

        return r !== t ? x.style(e, n, r) : x.css(e, n);
      }, e, n, arguments.length > 1);
    },
    show: function () {
      return rn(this, !0);
    },
    hide: function () {
      return rn(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        nn(this) ? x(this).show() : x(this).hide();
      });
    }
  }), x.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Wt(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": x.support.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function (e, n, r, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
            a,
            s,
            l = x.camelCase(n),
            u = e.style;
        if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
        if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
          u[n] = r;
        } catch (c) {}
      }
    },
    css: function (e, n, r, i) {
      var o,
          a,
          s,
          l = x.camelCase(n);
      return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a;
    }
  }), e.getComputedStyle ? (Rt = function (t) {
    return e.getComputedStyle(t, null);
  }, Wt = function (e, n, r) {
    var i,
        o,
        a,
        s = r || Rt(e),
        l = s ? s.getPropertyValue(n) || s[n] : t,
        u = e.style;
    return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l;
  }) : a.documentElement.currentStyle && (Rt = function (e) {
    return e.currentStyle;
  }, Wt = function (e, n, r) {
    var i,
        o,
        a,
        s = r || Rt(e),
        l = s ? s[n] : t,
        u = e.style;
    return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l;
  });

  function on(e, t, n) {
    var r = Vt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }

  function an(e, t, n, r, i) {
    var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        a = 0;

    for (; 4 > o; o += 2) "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));

    return a;
  }

  function sn(e, t, n) {
    var r = !0,
        i = "width" === t ? e.offsetWidth : e.offsetHeight,
        o = Rt(e),
        a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);

    if (0 >= i || null == i) {
      if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
      r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
    }

    return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px";
  }

  function ln(e) {
    var t = a,
        n = Gt[e];
    return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n;
  }

  function un(e, t) {
    var n = x(t.createElement(e)).appendTo(t.body),
        r = x.css(n[0], "display");
    return n.remove(), r;
  }

  x.each(["height", "width"], function (e, n) {
    x.cssHooks[n] = {
      get: function (e, r, i) {
        return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function () {
          return sn(e, n, i);
        }) : sn(e, n, i) : t;
      },
      set: function (e, t, r) {
        var i = r && Rt(e);
        return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0);
      }
    };
  }), x.support.opacity || (x.cssHooks.opacity = {
    get: function (e, t) {
      return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
    },
    set: function (e, t) {
      var n = e.style,
          r = e.currentStyle,
          i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
          o = r && r.filter || n.filter || "";
      n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i);
    }
  }), x(function () {
    x.support.reliableMarginRight || (x.cssHooks.marginRight = {
      get: function (e, n) {
        return n ? x.swap(e, {
          display: "inline-block"
        }, Wt, [e, "marginRight"]) : t;
      }
    }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, n) {
      x.cssHooks[n] = {
        get: function (e, r) {
          return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t;
        }
      };
    });
  }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"));
  }, x.expr.filters.visible = function (e) {
    return !x.expr.filters.hidden(e);
  }), x.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (e, t) {
    x.cssHooks[e + t] = {
      expand: function (n) {
        var r = 0,
            i = {},
            o = "string" == typeof n ? n.split(" ") : [n];

        for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];

        return i;
      }
    }, Ut.test(e) || (x.cssHooks[e + t].set = on);
  });
  var cn = /%20/g,
      pn = /\[\]$/,
      fn = /\r?\n/g,
      dn = /^(?:submit|button|image|reset|file)$/i,
      hn = /^(?:input|select|textarea|keygen)/i;
  x.fn.extend({
    serialize: function () {
      return x.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = x.prop(this, "elements");
        return e ? x.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e));
      }).map(function (e, t) {
        var n = x(this).val();
        return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(fn, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(fn, "\r\n")
        };
      }).get();
    }
  }), x.param = function (e, n) {
    var r,
        i = [],
        o = function (e, t) {
      t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    };

    if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function () {
      o(this.name, this.value);
    });else for (r in e) gn(r, e[r], n, o);
    return i.join("&").replace(cn, "+");
  };

  function gn(e, t, n, r) {
    var i;
    if (x.isArray(t)) x.each(t, function (t, i) {
      n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== x.type(t)) r(e, t);else for (i in t) gn(e + "[" + i + "]", t[i], n, r);
  }

  x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    x.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), x.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    },
    bind: function (e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function (e, t) {
      return this.off(e, null, t);
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  });
  var mn,
      yn,
      vn = x.now(),
      bn = /\?/,
      xn = /#.*$/,
      wn = /([?&])_=[^&]*/,
      Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Nn = /^(?:GET|HEAD)$/,
      kn = /^\/\//,
      En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      Sn = x.fn.load,
      An = {},
      jn = {},
      Dn = "*/".concat("*");

  try {
    yn = o.href;
  } catch (Ln) {
    yn = a.createElement("a"), yn.href = "", yn = yn.href;
  }

  mn = En.exec(yn.toLowerCase()) || [];

  function Hn(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r,
          i = 0,
          o = t.toLowerCase().match(T) || [];
      if (x.isFunction(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
    };
  }

  function qn(e, n, r, i) {
    var o = {},
        a = e === jn;

    function s(l) {
      var u;
      return o[l] = !0, x.each(e[l] || [], function (e, l) {
        var c = l(n, r, i);
        return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1);
      }), u;
    }

    return s(n.dataTypes[0]) || !o["*"] && s("*");
  }

  function _n(e, n) {
    var r,
        i,
        o = x.ajaxSettings.flatOptions || {};

    for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);

    return r && x.extend(!0, e, r), e;
  }

  x.fn.load = function (e, n, r) {
    if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
    var i,
        o,
        a,
        s = this,
        l = e.indexOf(" ");
    return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
      url: e,
      type: a,
      dataType: "html",
      data: n
    }).done(function (e) {
      o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e);
    }).complete(r && function (e, t) {
      s.each(r, o || [e.responseText, t, e]);
    }), this;
  }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    x.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), x.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: yn,
      type: "GET",
      isLocal: Cn.test(mn[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Dn,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": x.parseJSON,
        "text xml": x.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e);
    },
    ajaxPrefilter: Hn(An),
    ajaxTransport: Hn(jn),
    ajax: function (e, n) {
      "object" == typeof e && (n = e, e = t), n = n || {};
      var r,
          i,
          o,
          a,
          s,
          l,
          u,
          c,
          p = x.ajaxSetup({}, n),
          f = p.context || p,
          d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
          h = x.Deferred(),
          g = x.Callbacks("once memory"),
          m = p.statusCode || {},
          y = {},
          v = {},
          b = 0,
          w = "canceled",
          C = {
        readyState: 0,
        getResponseHeader: function (e) {
          var t;

          if (2 === b) {
            if (!c) {
              c = {};

              while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2];
            }

            t = c[e.toLowerCase()];
          }

          return null == t ? null : t;
        },
        getAllResponseHeaders: function () {
          return 2 === b ? a : null;
        },
        setRequestHeader: function (e, t) {
          var n = e.toLowerCase();
          return b || (e = v[n] = v[n] || e, y[e] = t), this;
        },
        overrideMimeType: function (e) {
          return b || (p.mimeType = e), this;
        },
        statusCode: function (e) {
          var t;
          if (e) if (2 > b) for (t in e) m[t] = [m[t], e[t]];else C.always(e[C.status]);
          return this;
        },
        abort: function (e) {
          var t = e || w;
          return u && u.abort(t), k(0, t), this;
        }
      };
      if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C;
      l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);

      for (i in p.headers) C.setRequestHeader(i, p.headers[i]);

      if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();
      w = "abort";

      for (i in {
        success: 1,
        error: 1,
        complete: 1
      }) C[i](p[i]);

      if (u = qn(jn, p, n, C)) {
        C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
          C.abort("timeout");
        }, p.timeout));

        try {
          b = 1, u.send(y, k);
        } catch (N) {
          if (!(2 > b)) throw N;
          k(-1, N);
        }
      } else k(-1, "No Transport");

      function k(e, n, r, i) {
        var c,
            y,
            v,
            w,
            T,
            N = n;
        2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")));
      }

      return C;
    },
    getJSON: function (e, t, n) {
      return x.get(e, t, n, "json");
    },
    getScript: function (e, n) {
      return x.get(e, t, n, "script");
    }
  }), x.each(["get", "post"], function (e, n) {
    x[n] = function (e, r, i, o) {
      return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
        url: e,
        type: n,
        dataType: o,
        data: r,
        success: i
      });
    };
  });

  function Mn(e, n, r) {
    var i,
        o,
        a,
        s,
        l = e.contents,
        u = e.dataTypes;

    while ("*" === u[0]) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));

    if (o) for (s in l) if (l[s] && l[s].test(o)) {
      u.unshift(s);
      break;
    }
    if (u[0] in r) a = u[0];else {
      for (s in r) {
        if (!u[0] || e.converters[s + " " + u[0]]) {
          a = s;
          break;
        }

        i || (i = s);
      }

      a = a || i;
    }
    return a ? (a !== u[0] && u.unshift(a), r[a]) : t;
  }

  function On(e, t, n, r) {
    var i,
        o,
        a,
        s,
        l,
        u = {},
        c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
    o = c.shift();

    while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
      if (a = u[l + " " + o] || u["* " + o], !a) for (i in u) if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
        a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
        break;
      }
      if (a !== !0) if (a && e["throws"]) t = a(t);else try {
        t = a(t);
      } catch (p) {
        return {
          state: "parsererror",
          error: a ? p : "No conversion from " + l + " to " + o
        };
      }
    }

    return {
      state: "success",
      data: t
    };
  }

  x.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function (e) {
        return x.globalEval(e), e;
      }
    }
  }), x.ajaxPrefilter("script", function (e) {
    e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
  }), x.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var n,
          r = a.head || x("head")[0] || a.documentElement;
      return {
        send: function (t, i) {
          n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"));
          }, r.insertBefore(n, r.firstChild);
        },
        abort: function () {
          n && n.onload(t, !0);
        }
      };
    }
  });
  var Fn = [],
      Bn = /(=)\?(?=&|$)|\?\?/;
  x.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Fn.pop() || x.expando + "_" + vn++;
      return this[e] = !0, e;
    }
  }), x.ajaxPrefilter("json jsonp", function (n, r, i) {
    var o,
        a,
        s,
        l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
    return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
      return s || x.error(o + " was not called"), s[0];
    }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
      s = arguments;
    }, i.always(function () {
      e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t;
    }), "script") : t;
  });

  var Pn,
      Rn,
      Wn = 0,
      $n = e.ActiveXObject && function () {
    var e;

    for (e in Pn) Pn[e](t, !0);
  };

  function In() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }

  function zn() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (t) {}
  }

  x.ajaxSettings.xhr = e.ActiveXObject ? function () {
    return !this.isLocal && In() || zn();
  } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function (n) {
    if (!n.crossDomain || x.support.cors) {
      var r;
      return {
        send: function (i, o) {
          var a,
              s,
              l = n.xhr();
          if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];
          n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");

          try {
            for (s in i) l.setRequestHeader(s, i[s]);
          } catch (u) {}

          l.send(n.hasContent && n.data || null), r = function (e, i) {
            var s, u, c, p;

            try {
              if (r && (i || 4 === l.readyState)) if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort();else {
                p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);

                try {
                  c = l.statusText;
                } catch (f) {
                  c = "";
                }

                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404;
              }
            } catch (d) {
              i || o(-1, d);
            }

            p && o(s, c, p, u);
          }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r();
        },
        abort: function () {
          r && r(t, !0);
        }
      };
    }
  });
  var Xn,
      Un,
      Vn = /^(?:toggle|show|hide)$/,
      Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
      Jn = /queueHooks$/,
      Gn = [nr],
      Qn = {
    "*": [function (e, t) {
      var n = this.createTween(e, t),
          r = n.cur(),
          i = Yn.exec(t),
          o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
          a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
          s = 1,
          l = 20;

      if (a && a[3] !== o) {
        o = o || a[3], i = i || [], a = +r || 1;

        do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l);
      }

      return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n;
    }]
  };

  function Kn() {
    return setTimeout(function () {
      Xn = t;
    }), Xn = x.now();
  }

  function Zn(e, t, n) {
    var r,
        i = (Qn[t] || []).concat(Qn["*"]),
        o = 0,
        a = i.length;

    for (; a > o; o++) if (r = i[o].call(n, t, e)) return r;
  }

  function er(e, t, n) {
    var r,
        i,
        o = 0,
        a = Gn.length,
        s = x.Deferred().always(function () {
      delete l.elem;
    }),
        l = function () {
      if (i) return !1;
      var t = Xn || Kn(),
          n = Math.max(0, u.startTime + u.duration - t),
          r = n / u.duration || 0,
          o = 1 - r,
          a = 0,
          l = u.tweens.length;

      for (; l > a; a++) u.tweens[a].run(o);

      return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1);
    },
        u = s.promise({
      elem: e,
      props: x.extend({}, t),
      opts: x.extend(!0, {
        specialEasing: {}
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: Xn || Kn(),
      duration: n.duration,
      tweens: [],
      createTween: function (t, n) {
        var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
        return u.tweens.push(r), r;
      },
      stop: function (t) {
        var n = 0,
            r = t ? u.tweens.length : 0;
        if (i) return this;

        for (i = !0; r > n; n++) u.tweens[n].run(1);

        return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this;
      }
    }),
        c = u.props;

    for (tr(c, u.opts.specialEasing); a > o; o++) if (r = Gn[o].call(u, e, c, u.opts)) return r;

    return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
      elem: e,
      anim: u,
      queue: u.opts.queue
    })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
  }

  function tr(e, t) {
    var n, r, i, o, a;

    for (n in e) if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
      o = a.expand(o), delete e[r];

      for (n in o) n in e || (e[n] = o[n], t[n] = i);
    } else t[r] = i;
  }

  x.Animation = x.extend(er, {
    tweener: function (e, t) {
      x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
      var n,
          r = 0,
          i = e.length;

      for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? Gn.unshift(e) : Gn.push(e);
    }
  });

  function nr(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        l,
        u = this,
        c = {},
        p = e.style,
        f = e.nodeType && nn(e),
        d = x._data(e, "fxshow");

    n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
      s.unqueued || l();
    }), s.unqueued++, u.always(function () {
      u.always(function () {
        s.unqueued--, x.queue(e, "fx").length || s.empty.fire();
      });
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function () {
      p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
    }));

    for (r in t) if (i = t[r], Vn.exec(i)) {
      if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
      c[r] = d && d[r] || x.style(e, r);
    }

    if (!x.isEmptyObject(c)) {
      d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function () {
        x(e).hide();
      }), u.done(function () {
        var t;

        x._removeData(e, "fxshow");

        for (t in c) x.style(e, t, c[t]);
      });

      for (r in c) a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0));
    }
  }

  function rr(e, t, n, r, i) {
    return new rr.prototype.init(e, t, n, r, i);
  }

  x.Tween = rr, rr.prototype = {
    constructor: rr,
    init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px");
    },
    cur: function () {
      var e = rr.propHooks[this.prop];
      return e && e.get ? e.get(this) : rr.propHooks._default.get(this);
    },
    run: function (e) {
      var t,
          n = rr.propHooks[this.prop];
      return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this;
    }
  }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop];
      },
      set: function (e) {
        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
      }
    }
  }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, x.each(["toggle", "show", "hide"], function (e, t) {
    var n = x.fn[t];

    x.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i);
    };
  }), x.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(nn).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function (e, t, n, r) {
      var i = x.isEmptyObject(e),
          o = x.speed(t, n, r),
          a = function () {
        var t = er(this, x.extend({}, e), o);
        (i || x._data(this, "finish")) && t.stop(!0);
      };

      return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function (e, n, r) {
      var i = function (e) {
        var t = e.stop;
        delete e.stop, t(r);
      };

      return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            n = null != e && e + "queueHooks",
            o = x.timers,
            a = x._data(this);

        if (n) a[n] && a[n].stop && i(a[n]);else for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);

        for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));

        (t || !r) && x.dequeue(this, e);
      });
    },
    finish: function (e) {
      return e !== !1 && (e = e || "fx"), this.each(function () {
        var t,
            n = x._data(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = x.timers,
            a = r ? r.length : 0;

        for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));

        for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);

        delete n.finish;
      });
    }
  });

  function ir(e, t) {
    var n,
        r = {
      height: e
    },
        i = 0;

    for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;

    return t && (r.opacity = r.width = e), r;
  }

  x.each({
    slideDown: ir("show"),
    slideUp: ir("hide"),
    slideToggle: ir("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, t) {
    x.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), x.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? x.extend({}, e) : {
      complete: n || !n && t || x.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !x.isFunction(t) && t
    };
    return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue);
    }, r;
  }, x.easing = {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }
  }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function () {
    var e,
        n = x.timers,
        r = 0;

    for (Xn = x.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);

    n.length || x.fx.stop(), Xn = t;
  }, x.fx.timer = function (e) {
    e() && x.timers.push(e) && x.fx.start();
  }, x.fx.interval = 13, x.fx.start = function () {
    Un || (Un = setInterval(x.fx.tick, x.fx.interval));
  }, x.fx.stop = function () {
    clearInterval(Un), Un = null;
  }, x.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
    return x.grep(x.timers, function (t) {
      return e === t.elem;
    }).length;
  }), x.fn.offset = function (e) {
    if (arguments.length) return e === t ? this : this.each(function (t) {
      x.offset.setOffset(this, e, t);
    });
    var n,
        r,
        o = {
      top: 0,
      left: 0
    },
        a = this[0],
        s = a && a.ownerDocument;
    if (s) return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
      top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
      left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
    }) : o;
  }, x.offset = {
    setOffset: function (e, t, n) {
      var r = x.css(e, "position");
      "static" === r && (e.style.position = "relative");
      var i = x(e),
          o = i.offset(),
          a = x.css(e, "top"),
          s = x.css(e, "left"),
          l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
          u = {},
          c = {},
          p,
          f;
      l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u);
    }
  }, x.fn.extend({
    position: function () {
      if (this[0]) {
        var e,
            t,
            n = {
          top: 0,
          left: 0
        },
            r = this[0];
        return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - n.top - x.css(r, "marginTop", !0),
          left: t.left - n.left - x.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var e = this.offsetParent || s;

        while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent;

        return e || s;
      });
    }
  }), x.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (e, n) {
    var r = /Y/.test(n);

    x.fn[e] = function (i) {
      return x.access(this, function (e, i, o) {
        var a = or(e);
        return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t);
      }, e, i, arguments.length, null);
    };
  });

  function or(e) {
    return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1;
  }

  x.each({
    Height: "height",
    Width: "width"
  }, function (e, n) {
    x.each({
      padding: "inner" + e,
      content: n,
      "": "outer" + e
    }, function (r, i) {
      x.fn[i] = function (i, o) {
        var a = arguments.length && (r || "boolean" != typeof i),
            s = r || (i === !0 || o === !0 ? "margin" : "border");
        return x.access(this, function (n, r, i) {
          var o;
          return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s);
        }, n, a ? i : t, a, null);
      };
    });
  }), x.fn.size = function () {
    return this.length;
  }, x.fn.andSelf = x.fn.addBack,  true && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x,  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return x;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
})(window);

/***/ }),

/***/ 275:
/***/ (() => {

!function (s) {
  function t(i, t) {
    this.element = i, this.$el = s(i), this._defaults = n, this._name = e;
    var a = this.$el.data(),
        l = {};

    for (var o in a) if (a.hasOwnProperty(o) && o.match(/zs[A-Z]/)) {
      var r = o.substr(2);
      r = r.charAt(0).toLowerCase() + r.slice(1), l[r] = a[o];
    }

    return this.settings = s.extend({}, n, l, t), null == this.settings.src || this.settings.src.length < 1 ? void console.log("ZoomSlider terminated - invalid input.") : void this.init();
  }

  var e = "zoomSlider",
      n = {
    src: null,
    speed: 8e3,
    switchSpeed: 800,
    interval: 4500,
    autoplay: !0,
    bullets: !0,
    overlay: "plain"
  };
  s.extend(t.prototype, {
    init: function () {
      0 == s.isArray(this.settings.src) && (this.settings.src = [this.settings.src]), this.transEndEventNames = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        msTransition: "MSTransitionEnd",
        transition: "transitionend"
      }, this.transEndEventName = this.transEndEventNames[Modernizr.prefixed("transition")], this.support = Modernizr.csstransitions && Modernizr.csstransforms;
      var i = Modernizr.prefixed("transform");

      switch (i = i.replace(/([A-Z])/g, function (s, i) {
        return "-" + i.toLowerCase();
      }).replace(/^ms-/, "-ms-"), this.transitionProp = {
        transition: i + " " + this.settings.speed + "ms ease-out, opacity " + this.settings.switchSpeed + "ms"
      }, this.numSlides = this.settings.src.length, this.$el.css("position")) {
        case "relative":
        case "absolute":
        case "fixed":
          break;

        default:
          this.$el.css("position", "relative");
      }

      var t = this,
          e = s("<img />");
      e.load(function () {
        1 == t.numSlides ? t.initSingle() : t.initSlideshow();
      }), e.attr("src", this.settings.src[0]);
    },
    initSlideshow: function () {
      var t = this,
          e = s('<div class="zs-slideshow"></div>'),
          n = s('<div class="zs-slides"></div>'),
          a = s('<div class="zs-bullets"></div>');

      for (i = 0; i < this.numSlides; i++) {
        var l = s('<div class="zs-slide zs-slide-' + i + '"></div>');
        l.css({
          "background-image": "url('" + this.settings.src[i] + "')"
        }).appendTo(n);
        var o = s('<div class="zs-bullet zs-bullet-' + i + '"></div>');
        o.appendTo(a), 0 == i && (l.addClass("active").css("opacity", 1), o.addClass("active"));
      }

      if (t._promoteChildren(), e.append(n).prependTo(this.$el), 1 == this.settings.bullets && (e.append(a), e.on("click", ".zs-bullet", function () {
        t.jump(s(this).index());
      })), this.pos = 0, this.pending = null, this.switching = !1, this.$slideshow = e, this.$slides = n.children(".zs-slide"), this.$bullets = a.children(".zs-bullet"), this.$el.addClass("zs-enabled"), "dots" == this.settings.overlay ? this.$el.addClass("overlay-dots") : "plain" == this.settings.overlay && this.$el.addClass("overlay-plain"), this.support) {
        var r = this.$slides.eq(0);
        r.css("opacity", 0).css(this.transitionProp), setTimeout(function () {
          r.css({
            opacity: 1,
            transform: "scale(1.0, 1.0)",
            "z-index": 2
          });
        }, 50);
      }

      1 == this.settings.autoplay && this.play();
    },
    initSingle: function () {
      var i = this,
          t = s('<div class="zs-slideshow"></div>'),
          e = s('<div class="zs-slides"></div>'),
          n = s('<div class="zs-slide zs-slide-0"></div>');
      n.css({
        "background-image": "url('" + this.settings.src[0] + "')"
      }).appendTo(e), n.addClass("active").css("opacity", 1), i._promoteChildren(), t.append(e).prependTo(this.$el), this.$el.addClass("zs-enabled"), "dots" == this.settings.overlay ? this.$el.addClass("overlay-dots") : "plain" == this.settings.overlay && this.$el.addClass("overlay-plain"), this.support && (n.css("opacity", 0).css(this.transitionProp), setTimeout(function () {
        n.css({
          opacity: 1,
          transform: "scale(1.0, 1.0)",
          "z-index": 2
        });
      }, 50));
    },
    _promoteChildren: function () {
      this.$el.children().each(function () {
        $this = s(this), "auto" == $this.css("z-index") && $this.css("z-index", 2), "static" == $this.css("position") && $this.css("position", "relative");
      });
    },
    jump: function (s) {
      if (s >= this.numSlides) return void console.log("ZoomSlider: jump(pos) aborted. supplied index out of range.");

      if (this.pos != s) {
        if (this.switching) return void (this.pending = s);
        var i = this,
            t = this.$slides.eq(this.pos),
            e = this.$slides.eq(s);
        this.support ? (this.switching = !0, t.css("z-index", 1), e.addClass("active").css(this.transitionProp).css({
          opacity: 1,
          transform: "scale(1.0, 1.0)",
          "z-index": 2
        }).on(this.transEndEventName, function (s) {
          "opacity" == s.originalEvent.propertyName && (lastSlideBg = t.css("background-image"), t.removeClass("active").removeAttr("style").css("background-image", lastSlideBg), e.off(i.transEndEventName), i.switching = !1, null != i.pending && setTimeout(function () {
            var s = i.pending;
            i.pending = null, i.$bullets.eq(s).click();
          }, 30));
        })) : (t.removeClass("active"), e.addClass("active")), this.$bullets.eq(this.pos).removeClass("active"), this.$bullets.eq(s).addClass("active"), this.pos = s, this.settings.autoplay && this.play();
      }
    },
    prev: function () {
      var s = this.pos - 1;
      0 > s && (s = this.numSlides - 1), this.jump(s);
    },
    next: function () {
      var s = this.pos + 1;
      s >= this.numSlides && (s = 0), this.jump(s);
    },
    play: function () {
      null != this.timer && clearInterval(this.timer);
      var s = this;
      this.settings.autoplay = !0, this.timer = setInterval(function () {
        s.next();
      }, this.settings.interval);
    },
    stop: function () {
      this.settings.autoplay = !1, clearInterval(this.timer), this.timer = null;
    }
  }), s.fn[e] = function (i) {
    return this.each(function () {
      s.data(this, "plugin_" + e) || s.data(this, "plugin_" + e, new t(this, i));
    });
  };
  var a = s("[data-zs-src]");
  a.length > 0 && a.each(function () {
    var i = s(this);
    i.zoomSlider();
  });
}(jQuery, window, document);

/***/ }),

/***/ 819:
/***/ (function() {

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;
window.Modernizr = function (a, b, c) {
  function D(a) {
    j.cssText = a;
  }

  function E(a, b) {
    return D(n.join(a + ";") + (b || ""));
  }

  function F(a, b) {
    return typeof a === b;
  }

  function G(a, b) {
    return !!~("" + a).indexOf(b);
  }

  function H(a, b) {
    for (var d in a) {
      var e = a[d];
      if (!G(e, "-") && j[e] !== c) return b == "pfx" ? e : !0;
    }

    return !1;
  }

  function I(a, b, d) {
    for (var e in a) {
      var f = b[a[e]];
      if (f !== c) return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f;
    }

    return !1;
  }

  function J(a, b, c) {
    var d = a.charAt(0).toUpperCase() + a.slice(1),
        e = (a + " " + p.join(d + " ") + d).split(" ");
    return F(b, "string") || F(b, "undefined") ? H(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), I(e, b, c));
  }

  function K() {
    e.input = function (c) {
      for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k;

      return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), u;
    }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function (a) {
      for (var d = 0, e, f, h, i = a.length; d < i; d++) k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), t[a[d]] = !!e;

      return t;
    }("search tel url email datetime date month week time datetime-local number range color".split(" "));
  }

  var d = "2.6.2",
      e = {},
      f = !0,
      g = b.documentElement,
      h = "modernizr",
      i = b.createElement(h),
      j = i.style,
      k = b.createElement("input"),
      l = ":)",
      m = {}.toString,
      n = " -webkit- -moz- -o- -ms- ".split(" "),
      o = "Webkit Moz O ms",
      p = o.split(" "),
      q = o.toLowerCase().split(" "),
      r = {
    svg: "http://www.w3.org/2000/svg"
  },
      s = {},
      t = {},
      u = {},
      v = [],
      w = v.slice,
      x,
      y = function (a, c, d, e) {
    var f,
        i,
        j,
        k,
        l = b.createElement("div"),
        m = b.body,
        n = m || b.createElement("body");
    if (parseInt(d, 10)) while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
    return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i;
  },
      z = function (b) {
    var c = a.matchMedia || a.msMatchMedia;
    if (c) return c(b).matches;
    var d;
    return y("@media " + b + " { #" + h + " { position: absolute; } }", function (b) {
      d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute";
    }), d;
  },
      A = function () {
    function d(d, e) {
      e = e || b.createElement(a[d] || "div"), d = "on" + d;
      var f = (d in e);
      return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = F(e[d], "function"), F(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f;
    }

    var a = {
      select: "input",
      change: "input",
      submit: "form",
      reset: "form",
      error: "img",
      load: "img",
      abort: "img"
    };
    return d;
  }(),
      B = {}.hasOwnProperty,
      C;

  !F(B, "undefined") && !F(B.call, "undefined") ? C = function (a, b) {
    return B.call(a, b);
  } : C = function (a, b) {
    return b in a && F(a.constructor.prototype[b], "undefined");
  }, Function.prototype.bind || (Function.prototype.bind = function (b) {
    var c = this;
    if (typeof c != "function") throw new TypeError();

    var d = w.call(arguments, 1),
        e = function () {
      if (this instanceof e) {
        var a = function () {};

        a.prototype = c.prototype;
        var f = new a(),
            g = c.apply(f, d.concat(w.call(arguments)));
        return Object(g) === g ? g : f;
      }

      return c.apply(b, d.concat(w.call(arguments)));
    };

    return e;
  }), s.flexbox = function () {
    return J("flexWrap");
  }, s.canvas = function () {
    var a = b.createElement("canvas");
    return !!a.getContext && !!a.getContext("2d");
  }, s.canvastext = function () {
    return !!e.canvas && !!F(b.createElement("canvas").getContext("2d").fillText, "function");
  }, s.webgl = function () {
    return !!a.WebGLRenderingContext;
  }, s.touch = function () {
    var c;
    return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
      c = a.offsetTop === 9;
    }), c;
  }, s.geolocation = function () {
    return "geolocation" in navigator;
  }, s.postmessage = function () {
    return !!a.postMessage;
  }, s.websqldatabase = function () {
    return !!a.openDatabase;
  }, s.indexedDB = function () {
    return !!J("indexedDB", a);
  }, s.hashchange = function () {
    return A("hashchange", a) && (b.documentMode === c || b.documentMode > 7);
  }, s.history = function () {
    return !!a.history && !!history.pushState;
  }, s.draganddrop = function () {
    var a = b.createElement("div");
    return "draggable" in a || "ondragstart" in a && "ondrop" in a;
  }, s.websockets = function () {
    return "WebSocket" in a || "MozWebSocket" in a;
  }, s.rgba = function () {
    return D("background-color:rgba(150,255,150,.5)"), G(j.backgroundColor, "rgba");
  }, s.hsla = function () {
    return D("background-color:hsla(120,40%,100%,.5)"), G(j.backgroundColor, "rgba") || G(j.backgroundColor, "hsla");
  }, s.multiplebgs = function () {
    return D("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background);
  }, s.backgroundsize = function () {
    return J("backgroundSize");
  }, s.borderimage = function () {
    return J("borderImage");
  }, s.borderradius = function () {
    return J("borderRadius");
  }, s.boxshadow = function () {
    return J("boxShadow");
  }, s.textshadow = function () {
    return b.createElement("div").style.textShadow === "";
  }, s.opacity = function () {
    return E("opacity:.55"), /^0.55$/.test(j.opacity);
  }, s.cssanimations = function () {
    return J("animationName");
  }, s.csscolumns = function () {
    return J("columnCount");
  }, s.cssgradients = function () {
    var a = "background-image:",
        b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        c = "linear-gradient(left top,#9f9, white);";
    return D((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), G(j.backgroundImage, "gradient");
  }, s.cssreflections = function () {
    return J("boxReflect");
  }, s.csstransforms = function () {
    return !!J("transform");
  }, s.csstransforms3d = function () {
    var a = !!J("perspective");
    return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (b, c) {
      a = b.offsetLeft === 9 && b.offsetHeight === 3;
    }), a;
  }, s.csstransitions = function () {
    return J("transition");
  }, s.fontface = function () {
    var a;
    return y('@font-face {font-family:"font";src:url("https://")}', function (c, d) {
      var e = b.getElementById("smodernizr"),
          f = e.sheet || e.styleSheet,
          g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
      a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0;
    }), a;
  }, s.generatedcontent = function () {
    var a;
    return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function (b) {
      a = b.offsetHeight >= 3;
    }), a;
  }, s.video = function () {
    var a = b.createElement("video"),
        c = !1;

    try {
      if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "");
    } catch (d) {}

    return c;
  }, s.audio = function () {
    var a = b.createElement("audio"),
        c = !1;

    try {
      if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "");
    } catch (d) {}

    return c;
  }, s.localstorage = function () {
    try {
      return localStorage.setItem(h, h), localStorage.removeItem(h), !0;
    } catch (a) {
      return !1;
    }
  }, s.sessionstorage = function () {
    try {
      return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0;
    } catch (a) {
      return !1;
    }
  }, s.webworkers = function () {
    return !!a.Worker;
  }, s.applicationcache = function () {
    return !!a.applicationCache;
  }, s.svg = function () {
    return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect;
  }, s.inlinesvg = function () {
    var a = b.createElement("div");
    return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg;
  }, s.smil = function () {
    return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")));
  }, s.svgclippaths = function () {
    return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")));
  };

  for (var L in s) C(s, L) && (x = L.toLowerCase(), e[x] = s[L](), v.push((e[x] ? "" : "no-") + x));

  return e.input || K(), e.addTest = function (a, b) {
    if (typeof a == "object") for (var d in a) C(a, d) && e.addTest(d, a[d]);else {
      a = a.toLowerCase();
      if (e[a] !== c) return e;
      b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b;
    }
    return e;
  }, D(""), i = k = null, function (a, b) {
    function k(a, b) {
      var c = a.createElement("p"),
          d = a.getElementsByTagName("head")[0] || a.documentElement;
      return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild);
    }

    function l() {
      var a = r.elements;
      return typeof a == "string" ? a.split(" ") : a;
    }

    function m(a) {
      var b = i[a[g]];
      return b || (b = {}, h++, a[g] = h, i[h] = b), b;
    }

    function n(a, c, f) {
      c || (c = b);
      if (j) return c.createElement(a);
      f || (f = m(c));
      var g;
      return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g;
    }

    function o(a, c) {
      a || (a = b);
      if (j) return a.createDocumentFragment();
      c = c || m(a);
      var d = c.frag.cloneNode(),
          e = 0,
          f = l(),
          g = f.length;

      for (; e < g; e++) d.createElement(f[e]);

      return d;
    }

    function p(a, b) {
      b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
        return r.shivMethods ? n(c, a, b) : b.createElem(c);
      }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function (a) {
        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
      }) + ");return n}")(r, b.frag);
    }

    function q(a) {
      a || (a = b);
      var c = m(a);
      return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a;
    }

    var c = a.html5 || {},
        d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        f,
        g = "_html5shiv",
        h = 0,
        i = {},
        j;

    (function () {
      try {
        var a = b.createElement("a");
        a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function () {
          b.createElement("a");
          var a = b.createDocumentFragment();
          return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined";
        }();
      } catch (c) {
        f = !0, j = !0;
      }
    })();

    var r = {
      elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
      shivCSS: c.shivCSS !== !1,
      supportsUnknownElements: j,
      shivMethods: c.shivMethods !== !1,
      type: "default",
      shivDocument: q,
      createElement: n,
      createDocumentFragment: o
    };
    a.html5 = r, q(b);
  }(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.mq = z, e.hasEvent = A, e.testProp = function (a) {
    return H([a]);
  }, e.testAllProps = J, e.testStyles = y, e.prefixed = function (a, b, c) {
    return b ? J(a, b, c) : J(a, "pfx");
  }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e;
}(this, this.document), function (a, b, c) {
  function d(a) {
    return "[object Function]" == o.call(a);
  }

  function e(a) {
    return "string" == typeof a;
  }

  function f() {}

  function g(a) {
    return !a || "loaded" == a || "complete" == a || "uninitialized" == a;
  }

  function h() {
    var a = p.shift();
    q = 1, a ? a.t ? m(function () {
      ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
    }, 0) : (a(), h()) : q = 0;
  }

  function i(a, c, d, e, f, i, j) {
    function k(b) {
      if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
        "img" != a && m(function () {
          t.removeChild(l);
        }, 50);

        for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload();
      }
    }

    var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = {
      t: d,
      s: c,
      e: f,
      a: i,
      x: j
    };
    1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
      k.call(this, r);
    }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
  }

  function j(a, b, c, d, f) {
    return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
  }

  function k() {
    var a = B;
    return a.loader = {
      load: j,
      i: 0
    }, a;
  }

  var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = ("MozAppearance" in l.style),
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && "[object Opera]" == o.call(a.opera),
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w = Array.isArray || function (a) {
    return "[object Array]" == o.call(a);
  },
      x = [],
      y = {},
      z = {
    timeout: function (a, b) {
      return b.length && (a.timeout = b[0]), a;
    }
  },
      A,
      B;

  B = function (a) {
    function b(a) {
      var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = {
        url: c,
        origUrl: c,
        prefixes: a
      },
          e,
          f,
          g;

      for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));

      for (f = 0; f < b; f++) c = x[f](c);

      return c;
    }

    function g(a, e, f, g, h) {
      var i = b(a),
          j = i.autoCallback;
      i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
        k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
      })));
    }

    function h(a, b) {
      function c(a, c) {
        if (a) {
          if (e(a)) c || (j = function () {
            var a = [].slice.call(arguments);
            k.apply(this, a), l();
          }), g(a, j, b, 0, h);else if (Object(a) === a) for (n in m = function () {
            var b = 0,
                c;

            for (c in a) a.hasOwnProperty(c) && b++;

            return b;
          }(), a) a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function () {
            var a = [].slice.call(arguments);
            k.apply(this, a), l();
          } : j[n] = function (a) {
            return function () {
              var b = [].slice.call(arguments);
              a && a.apply(this, b), l();
            };
          }(k[n])), g(a[n], j, b, n, h));
        } else !c && l();
      }

      var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m,
          n;
      c(h ? a.yep : a.nope, !!i), i && c(i);
    }

    var i,
        j,
        l = this.yepnope.loader;
    if (e(a)) g(a, 0, l, 0);else if (w(a)) for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);else Object(a) === a && h(a, l);
  }, B.addPrefix = function (a, b) {
    z[a] = b;
  }, B.addFilter = function (a) {
    x.push(a);
  }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
    b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete";
  }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
    var k = b.createElement("script"),
        l,
        o,
        e = e || B.errorTimeout;
    k.src = a;

    for (o in d) k.setAttribute(o, d[o]);

    c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
      !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
    }, m(function () {
      l || (l = 1, c(1));
    }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
  }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
    var e = b.createElement("link"),
        j,
        c = i ? h : c || f;
    e.href = a, e.rel = "stylesheet", e.type = "text/css";

    for (j in d) e.setAttribute(j, d[j]);

    g || (n.parentNode.insertBefore(e, n), m(c, 0));
  };
}(this, document), Modernizr.load = function () {
  yepnope.apply(window, [].slice.call(arguments, 0));
};

/***/ }),

/***/ 940:
/***/ (() => {

/*
* # Semantic UI - 2.4.2
* https://github.com/Semantic-Org/Semantic-UI
* http://www.semantic-ui.com/
*
* Copyright 2014 Contributors
* Released under the MIT license
* http://opensource.org/licenses/MIT
*
*/
!function (p, h, v, b) {
  p.site = p.fn.site = function (e) {
    var s,
        l,
        i = new Date().getTime(),
        o = [],
        t = e,
        n = "string" == typeof t,
        c = [].slice.call(arguments, 1),
        u = p.isPlainObject(e) ? p.extend(!0, {}, p.site.settings, e) : p.extend({}, p.site.settings),
        a = u.namespace,
        d = u.error,
        r = "module-" + a,
        f = p(v),
        m = this,
        g = f.data(r);
    return s = {
      initialize: function () {
        s.instantiate();
      },
      instantiate: function () {
        s.verbose("Storing instance of site", s), g = s, f.data(r, s);
      },
      normalize: function () {
        s.fix.console(), s.fix.requestAnimationFrame();
      },
      fix: {
        console: function () {
          s.debug("Normalizing window.console"), console !== b && console.log !== b || (s.verbose("Console not available, normalizing events"), s.disable.console()), void 0 !== console.group && void 0 !== console.groupEnd && void 0 !== console.groupCollapsed || (s.verbose("Console group not available, normalizing events"), h.console.group = function () {}, h.console.groupEnd = function () {}, h.console.groupCollapsed = function () {}), void 0 === console.markTimeline && (s.verbose("Mark timeline not available, normalizing events"), h.console.markTimeline = function () {});
        },
        consoleClear: function () {
          s.debug("Disabling programmatic console clearing"), h.console.clear = function () {};
        },
        requestAnimationFrame: function () {
          s.debug("Normalizing requestAnimationFrame"), h.requestAnimationFrame === b && (s.debug("RequestAnimationFrame not available, normalizing event"), h.requestAnimationFrame = h.requestAnimationFrame || h.mozRequestAnimationFrame || h.webkitRequestAnimationFrame || h.msRequestAnimationFrame || function (e) {
            setTimeout(e, 0);
          });
        }
      },
      moduleExists: function (e) {
        return p.fn[e] !== b && p.fn[e].settings !== b;
      },
      enabled: {
        modules: function (e) {
          var n = [];
          return e = e || u.modules, p.each(e, function (e, t) {
            s.moduleExists(t) && n.push(t);
          }), n;
        }
      },
      disabled: {
        modules: function (e) {
          var n = [];
          return e = e || u.modules, p.each(e, function (e, t) {
            s.moduleExists(t) || n.push(t);
          }), n;
        }
      },
      change: {
        setting: function (o, a, e, r) {
          e = "string" == typeof e ? "all" === e ? u.modules : [e] : e || u.modules, r = r === b || r, p.each(e, function (e, t) {
            var n,
                i = !s.moduleExists(t) || p.fn[t].settings.namespace || !1;
            s.moduleExists(t) && (s.verbose("Changing default setting", o, a, t), p.fn[t].settings[o] = a, r && i && 0 < (n = p(":data(module-" + i + ")")).length && (s.verbose("Modifying existing settings", n), n[t]("setting", o, a)));
          });
        },
        settings: function (i, e, o) {
          e = "string" == typeof e ? [e] : e || u.modules, o = o === b || o, p.each(e, function (e, t) {
            var n;
            s.moduleExists(t) && (s.verbose("Changing default setting", i, t), p.extend(!0, p.fn[t].settings, i), o && a && 0 < (n = p(":data(module-" + a + ")")).length && (s.verbose("Modifying existing settings", n), n[t]("setting", i)));
          });
        }
      },
      enable: {
        console: function () {
          s.console(!0);
        },
        debug: function (e, t) {
          e = e || u.modules, s.debug("Enabling debug for modules", e), s.change.setting("debug", !0, e, t);
        },
        verbose: function (e, t) {
          e = e || u.modules, s.debug("Enabling verbose debug for modules", e), s.change.setting("verbose", !0, e, t);
        }
      },
      disable: {
        console: function () {
          s.console(!1);
        },
        debug: function (e, t) {
          e = e || u.modules, s.debug("Disabling debug for modules", e), s.change.setting("debug", !1, e, t);
        },
        verbose: function (e, t) {
          e = e || u.modules, s.debug("Disabling verbose debug for modules", e), s.change.setting("verbose", !1, e, t);
        }
      },
      console: function (e) {
        if (e) {
          if (g.cache.console === b) return void s.error(d.console);
          s.debug("Restoring console function"), h.console = g.cache.console;
        } else s.debug("Disabling console function"), g.cache.console = h.console, h.console = {
          clear: function () {},
          error: function () {},
          group: function () {},
          groupCollapsed: function () {},
          groupEnd: function () {},
          info: function () {},
          log: function () {},
          markTimeline: function () {},
          warn: function () {}
        };
      },
      destroy: function () {
        s.verbose("Destroying previous site for", f), f.removeData(r);
      },
      cache: {},
      setting: function (e, t) {
        if (p.isPlainObject(e)) p.extend(!0, u, e);else {
          if (t === b) return u[e];
          u[e] = t;
        }
      },
      internal: function (e, t) {
        if (p.isPlainObject(e)) p.extend(!0, s, e);else {
          if (t === b) return s[e];
          s[e] = t;
        }
      },
      debug: function () {
        u.debug && (u.performance ? s.performance.log(arguments) : (s.debug = Function.prototype.bind.call(console.info, console, u.name + ":"), s.debug.apply(console, arguments)));
      },
      verbose: function () {
        u.verbose && u.debug && (u.performance ? s.performance.log(arguments) : (s.verbose = Function.prototype.bind.call(console.info, console, u.name + ":"), s.verbose.apply(console, arguments)));
      },
      error: function () {
        s.error = Function.prototype.bind.call(console.error, console, u.name + ":"), s.error.apply(console, arguments);
      },
      performance: {
        log: function (e) {
          var t, n;
          u.performance && (n = (t = new Date().getTime()) - (i || t), i = t, o.push({
            Element: m,
            Name: e[0],
            Arguments: [].slice.call(e, 1) || "",
            "Execution Time": n
          })), clearTimeout(s.performance.timer), s.performance.timer = setTimeout(s.performance.display, 500);
        },
        display: function () {
          var e = u.name + ":",
              n = 0;
          i = !1, clearTimeout(s.performance.timer), p.each(o, function (e, t) {
            n += t["Execution Time"];
          }), e += " " + n + "ms", (console.group !== b || console.table !== b) && 0 < o.length && (console.groupCollapsed(e), console.table ? console.table(o) : p.each(o, function (e, t) {
            console.log(t.Name + ": " + t["Execution Time"] + "ms");
          }), console.groupEnd()), o = [];
        }
      },
      invoke: function (i, e, t) {
        var o,
            a,
            n,
            r = g;
        return e = e || c, t = m || t, "string" == typeof i && r !== b && (i = i.split(/[\. ]/), o = i.length - 1, p.each(i, function (e, t) {
          var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
          if (p.isPlainObject(r[n]) && e != o) r = r[n];else {
            if (r[n] !== b) return a = r[n], !1;
            if (!p.isPlainObject(r[t]) || e == o) return r[t] !== b ? a = r[t] : s.error(d.method, i), !1;
            r = r[t];
          }
        })), p.isFunction(a) ? n = a.apply(t, e) : a !== b && (n = a), p.isArray(l) ? l.push(n) : l !== b ? l = [l, n] : n !== b && (l = n), a;
      }
    }, n ? (g === b && s.initialize(), s.invoke(t)) : (g !== b && s.destroy(), s.initialize()), l !== b ? l : this;
  }, p.site.settings = {
    name: "Site",
    namespace: "site",
    error: {
      console: "Console cannot be restored, most likely it was overwritten outside of module",
      method: "The method you called is not defined."
    },
    debug: !1,
    verbose: !1,
    performance: !0,
    modules: ["accordion", "api", "checkbox", "dimmer", "dropdown", "embed", "form", "modal", "nag", "popup", "rating", "shape", "sidebar", "state", "sticky", "tab", "transition", "visit", "visibility"],
    siteNamespace: "site",
    namespaceStub: {
      cache: {},
      config: {},
      sections: {},
      section: {},
      utilities: {}
    }
  }, p.extend(p.expr[":"], {
    data: p.expr.createPseudo ? p.expr.createPseudo(function (t) {
      return function (e) {
        return !!p.data(e, t);
      };
    }) : function (e, t, n) {
      return !!p.data(e, n[3]);
    }
  });
}(jQuery, window, document), function (F, e, O, D) {
  "use strict";

  e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), F.fn.form = function (x) {
    var C,
        w = F(this),
        S = w.selector || "",
        k = new Date().getTime(),
        T = [],
        A = x,
        R = arguments[1],
        P = "string" == typeof A,
        E = [].slice.call(arguments, 1);
    return w.each(function () {
      var n,
          l,
          t,
          e,
          d,
          c,
          u,
          f,
          m,
          i,
          s,
          o,
          a,
          g,
          p,
          h,
          r = F(this),
          v = this,
          b = [],
          y = !1;
      (h = {
        initialize: function () {
          h.get.settings(), P ? (p === D && h.instantiate(), h.invoke(A)) : (p !== D && p.invoke("destroy"), h.verbose("Initializing form validation", r, d), h.bindEvents(), h.set.defaults(), h.instantiate());
        },
        instantiate: function () {
          h.verbose("Storing instance of module", h), p = h, r.data(a, h);
        },
        destroy: function () {
          h.verbose("Destroying previous module", p), h.removeEvents(), r.removeData(a);
        },
        refresh: function () {
          h.verbose("Refreshing selector cache"), n = r.find(f.field), l = r.find(f.group), t = r.find(f.message), r.find(f.prompt), e = r.find(f.submit), r.find(f.clear), r.find(f.reset);
        },
        submit: function () {
          h.verbose("Submitting form", r), r.submit();
        },
        attachEvents: function (e, t) {
          t = t || "submit", F(e).on("click" + g, function (e) {
            h[t](), e.preventDefault();
          });
        },
        bindEvents: function () {
          h.verbose("Attaching form events"), r.on("submit" + g, h.validate.form).on("blur" + g, f.field, h.event.field.blur).on("click" + g, f.submit, h.submit).on("click" + g, f.reset, h.reset).on("click" + g, f.clear, h.clear), d.keyboardShortcuts && r.on("keydown" + g, f.field, h.event.field.keydown), n.each(function () {
            var e = F(this),
                t = e.prop("type"),
                n = h.get.changeEvent(t, e);
            F(this).on(n + g, h.event.field.change);
          });
        },
        clear: function () {
          n.each(function () {
            var e = F(this),
                t = e.parent(),
                n = e.closest(l),
                i = n.find(f.prompt),
                o = e.data(u.defaultValue) || "",
                a = t.is(f.uiCheckbox),
                r = t.is(f.uiDropdown);
            n.hasClass(m.error) && (h.verbose("Resetting error on field", n), n.removeClass(m.error), i.remove()), r ? (h.verbose("Resetting dropdown value", t, o), t.dropdown("clear")) : a ? e.prop("checked", !1) : (h.verbose("Resetting field value", e, o), e.val(""));
          });
        },
        reset: function () {
          n.each(function () {
            var e = F(this),
                t = e.parent(),
                n = e.closest(l),
                i = n.find(f.prompt),
                o = e.data(u.defaultValue),
                a = t.is(f.uiCheckbox),
                r = t.is(f.uiDropdown),
                s = n.hasClass(m.error);
            o !== D && (s && (h.verbose("Resetting error on field", n), n.removeClass(m.error), i.remove()), r ? (h.verbose("Resetting dropdown value", t, o), t.dropdown("restore defaults")) : a ? (h.verbose("Resetting checkbox value", t, o), e.prop("checked", o)) : (h.verbose("Resetting field value", e, o), e.val(o)));
          });
        },
        determine: {
          isValid: function () {
            var n = !0;
            return F.each(c, function (e, t) {
              h.validate.field(t, e, !0) || (n = !1);
            }), n;
          }
        },
        is: {
          bracketedRule: function (e) {
            return e.type && e.type.match(d.regExp.bracket);
          },
          shorthandFields: function (e) {
            var t = e[Object.keys(e)[0]];
            return h.is.shorthandRules(t);
          },
          shorthandRules: function (e) {
            return "string" == typeof e || F.isArray(e);
          },
          empty: function (e) {
            return !e || 0 === e.length || (e.is('input[type="checkbox"]') ? !e.is(":checked") : h.is.blank(e));
          },
          blank: function (e) {
            return "" === F.trim(e.val());
          },
          valid: function (e) {
            var n = !0;
            return e ? (h.verbose("Checking if field is valid", e), h.validate.field(c[e], e, !1)) : (h.verbose("Checking if form is valid"), F.each(c, function (e, t) {
              h.is.valid(e) || (n = !1);
            }), n);
          }
        },
        removeEvents: function () {
          r.off(g), n.off(g), e.off(g), n.off(g);
        },
        event: {
          field: {
            keydown: function (e) {
              var t = F(this),
                  n = e.which,
                  i = t.is(f.input),
                  o = t.is(f.checkbox),
                  a = 0 < t.closest(f.uiDropdown).length,
                  r = 13;
              n == 27 && (h.verbose("Escape key pressed blurring field"), t.blur()), e.ctrlKey || n != r || !i || a || o || (y || (t.one("keyup" + g, h.event.field.keyup), h.submit(), h.debug("Enter pressed on input submitting form")), y = !0);
            },
            keyup: function () {
              y = !1;
            },
            blur: function (e) {
              var t = F(this),
                  n = t.closest(l),
                  i = h.get.validation(t);
              n.hasClass(m.error) ? (h.debug("Revalidating field", t, i), i && h.validate.field(i)) : "blur" == d.on && i && h.validate.field(i);
            },
            change: function (e) {
              var t = F(this),
                  n = t.closest(l),
                  i = h.get.validation(t);
              i && ("change" == d.on || n.hasClass(m.error) && d.revalidate) && (clearTimeout(h.timer), h.timer = setTimeout(function () {
                h.debug("Revalidating field", t, h.get.validation(t)), h.validate.field(i);
              }, d.delay));
            }
          }
        },
        get: {
          ancillaryValue: function (e) {
            return !(!e.type || !e.value && !h.is.bracketedRule(e)) && (e.value !== D ? e.value : e.type.match(d.regExp.bracket)[1] + "");
          },
          ruleName: function (e) {
            return h.is.bracketedRule(e) ? e.type.replace(e.type.match(d.regExp.bracket)[0], "") : e.type;
          },
          changeEvent: function (e, t) {
            return "checkbox" == e || "radio" == e || "hidden" == e || t.is("select") ? "change" : h.get.inputEvent();
          },
          inputEvent: function () {
            return O.createElement("input").oninput !== D ? "input" : O.createElement("input").onpropertychange !== D ? "propertychange" : "keyup";
          },
          fieldsFromShorthand: function (e) {
            var i = {};
            return F.each(e, function (n, e) {
              "string" == typeof e && (e = [e]), i[n] = {
                rules: []
              }, F.each(e, function (e, t) {
                i[n].rules.push({
                  type: t
                });
              });
            }), i;
          },
          prompt: function (e, t) {
            var n,
                i,
                o = h.get.ruleName(e),
                a = h.get.ancillaryValue(e),
                r = h.get.field(t.identifier),
                s = r.val(),
                l = F.isFunction(e.prompt) ? e.prompt(s) : e.prompt || d.prompt[o] || d.text.unspecifiedRule,
                c = -1 !== l.search("{value}"),
                u = -1 !== l.search("{name}");
            return c && (l = l.replace("{value}", r.val())), u && (i = 1 == (n = r.closest(f.group).find("label").eq(0)).length ? n.text() : r.prop("placeholder") || d.text.unspecifiedField, l = l.replace("{name}", i)), l = (l = l.replace("{identifier}", t.identifier)).replace("{ruleValue}", a), e.prompt || h.verbose("Using default validation prompt for type", l, o), l;
          },
          settings: function () {
            if (F.isPlainObject(x)) {
              var e = Object.keys(x);
              0 < e.length && x[e[0]].identifier !== D && x[e[0]].rules !== D ? (d = F.extend(!0, {}, F.fn.form.settings, R), c = F.extend({}, F.fn.form.settings.defaults, x), h.error(d.error.oldSyntax, v), h.verbose("Extending settings from legacy parameters", c, d)) : (x.fields && h.is.shorthandFields(x.fields) && (x.fields = h.get.fieldsFromShorthand(x.fields)), d = F.extend(!0, {}, F.fn.form.settings, x), c = F.extend({}, F.fn.form.settings.defaults, d.fields), h.verbose("Extending settings", c, d));
            } else d = F.fn.form.settings, c = F.fn.form.settings.defaults, h.verbose("Using default form validation", c, d);

            o = d.namespace, u = d.metadata, f = d.selector, m = d.className, i = d.regExp, s = d.error, a = "module-" + o, g = "." + o, p = r.data(a), h.refresh();
          },
          field: function (e) {
            return h.verbose("Finding field with identifier", e), e = h.escape.string(e), 0 < n.filter("#" + e).length ? n.filter("#" + e) : 0 < n.filter('[name="' + e + '"]').length ? n.filter('[name="' + e + '"]') : 0 < n.filter('[name="' + e + '[]"]').length ? n.filter('[name="' + e + '[]"]') : 0 < n.filter("[data-" + u.validate + '="' + e + '"]').length ? n.filter("[data-" + u.validate + '="' + e + '"]') : F("<input/>");
          },
          fields: function (e) {
            var n = F();
            return F.each(e, function (e, t) {
              n = n.add(h.get.field(t));
            }), n;
          },
          validation: function (n) {
            var i, o;
            return !!c && (F.each(c, function (e, t) {
              o = t.identifier || e, h.get.field(o)[0] == n[0] && (t.identifier = o, i = t);
            }), i || !1);
          },
          value: function (e) {
            var t = [];
            return t.push(e), h.get.values.call(v, t)[e];
          },
          values: function (e) {
            var t = F.isArray(e) ? h.get.fields(e) : n,
                c = {};
            return t.each(function (e, t) {
              var n = F(t),
                  i = (n.prop("type"), n.prop("name")),
                  o = n.val(),
                  a = n.is(f.checkbox),
                  r = n.is(f.radio),
                  s = -1 !== i.indexOf("[]"),
                  l = !!a && n.is(":checked");
              i && (s ? (i = i.replace("[]", ""), c[i] || (c[i] = []), a ? l ? c[i].push(o || !0) : c[i].push(!1) : c[i].push(o)) : r ? c[i] !== D && 0 != c[i] || (c[i] = !!l && (o || !0)) : c[i] = a ? !!l && (o || !0) : o);
            }), c;
          }
        },
        has: {
          field: function (e) {
            return h.verbose("Checking for existence of a field with identifier", e), "string" != typeof (e = h.escape.string(e)) && h.error(s.identifier, e), 0 < n.filter("#" + e).length || 0 < n.filter('[name="' + e + '"]').length || 0 < n.filter("[data-" + u.validate + '="' + e + '"]').length;
          }
        },
        escape: {
          string: function (e) {
            return (e = String(e)).replace(i.escape, "\\$&");
          }
        },
        add: {
          rule: function (e, t) {
            h.add.field(e, t);
          },
          field: function (n, e) {
            var i = {};
            h.is.shorthandRules(e) ? (e = F.isArray(e) ? e : [e], i[n] = {
              rules: []
            }, F.each(e, function (e, t) {
              i[n].rules.push({
                type: t
              });
            })) : i[n] = e, c = F.extend({}, c, i), h.debug("Adding rules", i, c);
          },
          fields: function (e) {
            var t;
            t = e && h.is.shorthandFields(e) ? h.get.fieldsFromShorthand(e) : e, c = F.extend({}, c, t);
          },
          prompt: function (e, t) {
            var n = h.get.field(e).closest(l),
                i = n.children(f.prompt),
                o = 0 !== i.length;
            t = "string" == typeof t ? [t] : t, h.verbose("Adding field error state", e), n.addClass(m.error), d.inline && (o || (i = d.templates.prompt(t)).appendTo(n), i.html(t[0]), o ? h.verbose("Inline errors are disabled, no inline error added", e) : d.transition && F.fn.transition !== D && r.transition("is supported") ? (h.verbose("Displaying error with css transition", d.transition), i.transition(d.transition + " in", d.duration)) : (h.verbose("Displaying error with fallback javascript animation"), i.fadeIn(d.duration)));
          },
          errors: function (e) {
            h.debug("Adding form error messages", e), h.set.error(), t.html(d.templates.error(e));
          }
        },
        remove: {
          rule: function (n, e) {
            var i = F.isArray(e) ? e : [e];
            if (e == D) return h.debug("Removed all rules"), void (c[n].rules = []);
            c[n] != D && F.isArray(c[n].rules) && F.each(c[n].rules, function (e, t) {
              -1 !== i.indexOf(t.type) && (h.debug("Removed rule", t.type), c[n].rules.splice(e, 1));
            });
          },
          field: function (e) {
            var t = F.isArray(e) ? e : [e];
            F.each(t, function (e, t) {
              h.remove.rule(t);
            });
          },
          rules: function (e, n) {
            F.isArray(e) ? F.each(fields, function (e, t) {
              h.remove.rule(t, n);
            }) : h.remove.rule(e, n);
          },
          fields: function (e) {
            h.remove.field(e);
          },
          prompt: function (e) {
            var t = h.get.field(e).closest(l),
                n = t.children(f.prompt);
            t.removeClass(m.error), d.inline && n.is(":visible") && (h.verbose("Removing prompt for field", e), d.transition && F.fn.transition !== D && r.transition("is supported") ? n.transition(d.transition + " out", d.duration, function () {
              n.remove();
            }) : n.fadeOut(d.duration, function () {
              n.remove();
            }));
          }
        },
        set: {
          success: function () {
            r.removeClass(m.error).addClass(m.success);
          },
          defaults: function () {
            n.each(function () {
              var e = F(this),
                  t = 0 < e.filter(f.checkbox).length ? e.is(":checked") : e.val();
              e.data(u.defaultValue, t);
            });
          },
          error: function () {
            r.removeClass(m.success).addClass(m.error);
          },
          value: function (e, t) {
            var n = {};
            return n[e] = t, h.set.values.call(v, n);
          },
          values: function (e) {
            F.isEmptyObject(e) || F.each(e, function (e, t) {
              var n,
                  i = h.get.field(e),
                  o = i.parent(),
                  a = F.isArray(t),
                  r = o.is(f.uiCheckbox),
                  s = o.is(f.uiDropdown),
                  l = i.is(f.radio) && r;
              0 < i.length && (a && r ? (h.verbose("Selecting multiple", t, i), o.checkbox("uncheck"), F.each(t, function (e, t) {
                n = i.filter('[value="' + t + '"]'), o = n.parent(), 0 < n.length && o.checkbox("check");
              })) : l ? (h.verbose("Selecting radio value", t, i), i.filter('[value="' + t + '"]').parent(f.uiCheckbox).checkbox("check")) : r ? (h.verbose("Setting checkbox value", t, o), !0 === t ? o.checkbox("check") : o.checkbox("uncheck")) : s ? (h.verbose("Setting dropdown value", t, o), o.dropdown("set selected", t)) : (h.verbose("Setting field value", t, i), i.val(t)));
            });
          }
        },
        validate: {
          form: function (e, t) {
            var n = h.get.values();
            if (y) return !1;

            if (b = [], h.determine.isValid()) {
              if (h.debug("Form has no validation errors, submitting"), h.set.success(), !0 !== t) return d.onSuccess.call(v, e, n);
            } else if (h.debug("Form has errors"), h.set.error(), d.inline || h.add.errors(b), r.data("moduleApi") !== D && e.stopImmediatePropagation(), !0 !== t) return d.onFailure.call(v, b, n);
          },
          field: function (n, e, t) {
            t = t === D || t, "string" == typeof n && (h.verbose("Validating field", n), n = c[e = n]);
            var i = n.identifier || e,
                o = h.get.field(i),
                a = !!n.depends && h.get.field(n.depends),
                r = !0,
                s = [];
            return n.identifier || (h.debug("Using field name as identifier", i), n.identifier = i), o.prop("disabled") ? (h.debug("Field is disabled. Skipping", i), r = !0) : n.optional && h.is.blank(o) ? (h.debug("Field is optional and blank. Skipping", i), r = !0) : n.depends && h.is.empty(a) ? (h.debug("Field depends on another value that is not present or empty. Skipping", a), r = !0) : n.rules !== D && F.each(n.rules, function (e, t) {
              h.has.field(i) && !h.validate.rule(n, t) && (h.debug("Field is invalid", i, t.type), s.push(h.get.prompt(t, n)), r = !1);
            }), r ? (t && (h.remove.prompt(i, s), d.onValid.call(o)), !0) : (t && (b = b.concat(s), h.add.prompt(i, s), d.onInvalid.call(o, s)), !1);
          },
          rule: function (e, t) {
            var n = h.get.field(e.identifier),
                i = (t.type, n.val()),
                o = h.get.ancillaryValue(t),
                a = h.get.ruleName(t),
                r = d.rules[a];
            if (F.isFunction(r)) return i = i === D || "" === i || null === i ? "" : F.trim(i + ""), r.call(n, i, o);
            h.error(s.noRule, a);
          }
        },
        setting: function (e, t) {
          if (F.isPlainObject(e)) F.extend(!0, d, e);else {
            if (t === D) return d[e];
            d[e] = t;
          }
        },
        internal: function (e, t) {
          if (F.isPlainObject(e)) F.extend(!0, h, e);else {
            if (t === D) return h[e];
            h[e] = t;
          }
        },
        debug: function () {
          !d.silent && d.debug && (d.performance ? h.performance.log(arguments) : (h.debug = Function.prototype.bind.call(console.info, console, d.name + ":"), h.debug.apply(console, arguments)));
        },
        verbose: function () {
          !d.silent && d.verbose && d.debug && (d.performance ? h.performance.log(arguments) : (h.verbose = Function.prototype.bind.call(console.info, console, d.name + ":"), h.verbose.apply(console, arguments)));
        },
        error: function () {
          d.silent || (h.error = Function.prototype.bind.call(console.error, console, d.name + ":"), h.error.apply(console, arguments));
        },
        performance: {
          log: function (e) {
            var t, n;
            d.performance && (n = (t = new Date().getTime()) - (k || t), k = t, T.push({
              Name: e[0],
              Arguments: [].slice.call(e, 1) || "",
              Element: v,
              "Execution Time": n
            })), clearTimeout(h.performance.timer), h.performance.timer = setTimeout(h.performance.display, 500);
          },
          display: function () {
            var e = d.name + ":",
                n = 0;
            k = !1, clearTimeout(h.performance.timer), F.each(T, function (e, t) {
              n += t["Execution Time"];
            }), e += " " + n + "ms", S && (e += " '" + S + "'"), 1 < w.length && (e += " (" + w.length + ")"), (console.group !== D || console.table !== D) && 0 < T.length && (console.groupCollapsed(e), console.table ? console.table(T) : F.each(T, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), T = [];
          }
        },
        invoke: function (i, e, t) {
          var o,
              a,
              n,
              r = p;
          return e = e || E, t = v || t, "string" == typeof i && r !== D && (i = i.split(/[\. ]/), o = i.length - 1, F.each(i, function (e, t) {
            var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
            if (F.isPlainObject(r[n]) && e != o) r = r[n];else {
              if (r[n] !== D) return a = r[n], !1;
              if (!F.isPlainObject(r[t]) || e == o) return r[t] !== D && (a = r[t]), !1;
              r = r[t];
            }
          })), F.isFunction(a) ? n = a.apply(t, e) : a !== D && (n = a), F.isArray(C) ? C.push(n) : C !== D ? C = [C, n] : n !== D && (C = n), a;
        }
      }).initialize();
    }), C !== D ? C : this;
  }, F.fn.form.settings = {
    name: "Form",
    namespace: "form",
    debug: !1,
    verbose: !1,
    performance: !0,
    fields: !1,
    keyboardShortcuts: !0,
    on: "submit",
    inline: !1,
    delay: 200,
    revalidate: !0,
    transition: "scale",
    duration: 200,
    onValid: function () {},
    onInvalid: function () {},
    onSuccess: function () {
      return !0;
    },
    onFailure: function () {
      return !1;
    },
    metadata: {
      defaultValue: "default",
      validate: "validate"
    },
    regExp: {
      htmlID: /^[a-zA-Z][\w:.-]*$/g,
      bracket: /\[(.*)\]/i,
      decimal: /^\d+\.?\d*$/,
      email: /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
      escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
      flags: /^\/(.*)\/(.*)?/,
      integer: /^\-?\d+$/,
      number: /^\-?\d*(\.\d+)?$/,
      url: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i
    },
    text: {
      unspecifiedRule: "Please enter a valid value",
      unspecifiedField: "This field"
    },
    prompt: {
      empty: "{name} must have a value",
      checked: "{name} must be checked",
      email: "{name} must be a valid e-mail",
      url: "{name} must be a valid url",
      regExp: "{name} is not formatted correctly",
      integer: "{name} must be an integer",
      decimal: "{name} must be a decimal number",
      number: "{name} must be set to a number",
      is: '{name} must be "{ruleValue}"',
      isExactly: '{name} must be exactly "{ruleValue}"',
      not: '{name} cannot be set to "{ruleValue}"',
      notExactly: '{name} cannot be set to exactly "{ruleValue}"',
      contain: '{name} must contain "{ruleValue}"',
      containExactly: '{name} must contain exactly "{ruleValue}"',
      doesntContain: '{name} cannot contain  "{ruleValue}"',
      doesntContainExactly: '{name} cannot contain exactly "{ruleValue}"',
      minLength: "{name} must be at least {ruleValue} characters",
      length: "{name} must be at least {ruleValue} characters",
      exactLength: "{name} must be exactly {ruleValue} characters",
      maxLength: "{name} cannot be longer than {ruleValue} characters",
      match: "{name} must match {ruleValue} field",
      different: "{name} must have a different value than {ruleValue} field",
      creditCard: "{name} must be a valid credit card number",
      minCount: "{name} must have at least {ruleValue} choices",
      exactCount: "{name} must have exactly {ruleValue} choices",
      maxCount: "{name} must have {ruleValue} or less choices"
    },
    selector: {
      checkbox: 'input[type="checkbox"], input[type="radio"]',
      clear: ".clear",
      field: "input, textarea, select",
      group: ".field",
      input: "input",
      message: ".error.message",
      prompt: ".prompt.label",
      radio: 'input[type="radio"]',
      reset: '.reset:not([type="reset"])',
      submit: '.submit:not([type="submit"])',
      uiCheckbox: ".ui.checkbox",
      uiDropdown: ".ui.dropdown"
    },
    className: {
      error: "error",
      label: "ui prompt label",
      pressed: "down",
      success: "success"
    },
    error: {
      identifier: "You must specify a string identifier for each field",
      method: "The method you called is not defined.",
      noRule: "There is no rule matching the one you specified",
      oldSyntax: "Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically."
    },
    templates: {
      error: function (e) {
        var n = '<ul class="list">';
        return F.each(e, function (e, t) {
          n += "<li>" + t + "</li>";
        }), F(n += "</ul>");
      },
      prompt: function (e) {
        return F("<div/>").addClass("ui basic red pointing prompt label").html(e[0]);
      }
    },
    rules: {
      empty: function (e) {
        return !(e === D || "" === e || F.isArray(e) && 0 === e.length);
      },
      checked: function () {
        return 0 < F(this).filter(":checked").length;
      },
      email: function (e) {
        return F.fn.form.settings.regExp.email.test(e);
      },
      url: function (e) {
        return F.fn.form.settings.regExp.url.test(e);
      },
      regExp: function (e, t) {
        if (t instanceof RegExp) return e.match(t);
        var n,
            i = t.match(F.fn.form.settings.regExp.flags);
        return i && (t = 2 <= i.length ? i[1] : t, n = 3 <= i.length ? i[2] : ""), e.match(new RegExp(t, n));
      },
      integer: function (e, t) {
        var n,
            i,
            o,
            a = F.fn.form.settings.regExp.integer;
        return t && -1 === ["", ".."].indexOf(t) && (-1 == t.indexOf("..") ? a.test(t) && (n = i = t - 0) : (o = t.split("..", 2), a.test(o[0]) && (n = o[0] - 0), a.test(o[1]) && (i = o[1] - 0))), a.test(e) && (n === D || n <= e) && (i === D || e <= i);
      },
      decimal: function (e) {
        return F.fn.form.settings.regExp.decimal.test(e);
      },
      number: function (e) {
        return F.fn.form.settings.regExp.number.test(e);
      },
      is: function (e, t) {
        return t = "string" == typeof t ? t.toLowerCase() : t, (e = "string" == typeof e ? e.toLowerCase() : e) == t;
      },
      isExactly: function (e, t) {
        return e == t;
      },
      not: function (e, t) {
        return (e = "string" == typeof e ? e.toLowerCase() : e) != (t = "string" == typeof t ? t.toLowerCase() : t);
      },
      notExactly: function (e, t) {
        return e != t;
      },
      contains: function (e, t) {
        return t = t.replace(F.fn.form.settings.regExp.escape, "\\$&"), -1 !== e.search(new RegExp(t, "i"));
      },
      containsExactly: function (e, t) {
        return t = t.replace(F.fn.form.settings.regExp.escape, "\\$&"), -1 !== e.search(new RegExp(t));
      },
      doesntContain: function (e, t) {
        return t = t.replace(F.fn.form.settings.regExp.escape, "\\$&"), -1 === e.search(new RegExp(t, "i"));
      },
      doesntContainExactly: function (e, t) {
        return t = t.replace(F.fn.form.settings.regExp.escape, "\\$&"), -1 === e.search(new RegExp(t));
      },
      minLength: function (e, t) {
        return e !== D && e.length >= t;
      },
      length: function (e, t) {
        return e !== D && e.length >= t;
      },
      exactLength: function (e, t) {
        return e !== D && e.length == t;
      },
      maxLength: function (e, t) {
        return e !== D && e.length <= t;
      },
      match: function (e, t) {
        var n;
        F(this);
        return 0 < F('[data-validate="' + t + '"]').length ? n = F('[data-validate="' + t + '"]').val() : 0 < F("#" + t).length ? n = F("#" + t).val() : 0 < F('[name="' + t + '"]').length ? n = F('[name="' + t + '"]').val() : 0 < F('[name="' + t + '[]"]').length && (n = F('[name="' + t + '[]"]')), n !== D && e.toString() == n.toString();
      },
      different: function (e, t) {
        var n;
        F(this);
        return 0 < F('[data-validate="' + t + '"]').length ? n = F('[data-validate="' + t + '"]').val() : 0 < F("#" + t).length ? n = F("#" + t).val() : 0 < F('[name="' + t + '"]').length ? n = F('[name="' + t + '"]').val() : 0 < F('[name="' + t + '[]"]').length && (n = F('[name="' + t + '[]"]')), n !== D && e.toString() !== n.toString();
      },
      creditCard: function (n, e) {
        var t,
            i,
            o = {
          visa: {
            pattern: /^4/,
            length: [16]
          },
          amex: {
            pattern: /^3[47]/,
            length: [15]
          },
          mastercard: {
            pattern: /^5[1-5]/,
            length: [16]
          },
          discover: {
            pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
            length: [16]
          },
          unionPay: {
            pattern: /^(62|88)/,
            length: [16, 17, 18, 19]
          },
          jcb: {
            pattern: /^35(2[89]|[3-8][0-9])/,
            length: [16]
          },
          maestro: {
            pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
            length: [12, 13, 14, 15, 16, 17, 18, 19]
          },
          dinersClub: {
            pattern: /^(30[0-5]|^36)/,
            length: [14]
          },
          laser: {
            pattern: /^(6304|670[69]|6771)/,
            length: [16, 17, 18, 19]
          },
          visaElectron: {
            pattern: /^(4026|417500|4508|4844|491(3|7))/,
            length: [16]
          }
        },
            a = {},
            r = !1,
            s = "string" == typeof e && e.split(",");

        if ("string" == typeof n && 0 !== n.length) {
          if (n = n.replace(/[\-]/g, ""), s && (F.each(s, function (e, t) {
            (i = o[t]) && (a = {
              length: -1 !== F.inArray(n.length, i.length),
              pattern: -1 !== n.search(i.pattern)
            }).length && a.pattern && (r = !0);
          }), !r)) return !1;
          if ((t = {
            number: -1 !== F.inArray(n.length, o.unionPay.length),
            pattern: -1 !== n.search(o.unionPay.pattern)
          }).number && t.pattern) return !0;

          for (var l = n.length, c = 0, u = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]], d = 0; l--;) d += u[c][parseInt(n.charAt(l), 10)], c ^= 1;

          return d % 10 == 0 && 0 < d;
        }
      },
      minCount: function (e, t) {
        return 0 == t || (1 == t ? "" !== e : e.split(",").length >= t);
      },
      exactCount: function (e, t) {
        return 0 == t ? "" === e : 1 == t ? "" !== e && -1 === e.search(",") : e.split(",").length == t;
      },
      maxCount: function (e, t) {
        return 0 != t && (1 == t ? -1 === e.search(",") : e.split(",").length <= t);
      }
    }
  };
}(jQuery, window, document), function (S, k, e, T) {
  "use strict";

  k = void 0 !== k && k.Math == Math ? k : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), S.fn.accordion = function (a) {
    var v,
        r = S(this),
        b = new Date().getTime(),
        y = [],
        x = a,
        C = "string" == typeof x,
        w = [].slice.call(arguments, 1);
    k.requestAnimationFrame || k.mozRequestAnimationFrame || k.webkitRequestAnimationFrame || k.msRequestAnimationFrame;
    return r.each(function () {
      var e,
          c,
          u = S.isPlainObject(a) ? S.extend(!0, {}, S.fn.accordion.settings, a) : S.extend({}, S.fn.accordion.settings),
          d = u.className,
          t = u.namespace,
          f = u.selector,
          s = u.error,
          n = "." + t,
          i = "module-" + t,
          o = r.selector || "",
          m = S(this),
          g = m.find(f.title),
          p = m.find(f.content),
          l = this,
          h = m.data(i);
      c = {
        initialize: function () {
          c.debug("Initializing", m), c.bind.events(), u.observeChanges && c.observeChanges(), c.instantiate();
        },
        instantiate: function () {
          h = c, m.data(i, c);
        },
        destroy: function () {
          c.debug("Destroying previous instance", m), m.off(n).removeData(i);
        },
        refresh: function () {
          g = m.find(f.title), p = m.find(f.content);
        },
        observeChanges: function () {
          "MutationObserver" in k && ((e = new MutationObserver(function (e) {
            c.debug("DOM tree modified, updating selector cache"), c.refresh();
          })).observe(l, {
            childList: !0,
            subtree: !0
          }), c.debug("Setting up mutation observer", e));
        },
        bind: {
          events: function () {
            c.debug("Binding delegated events"), m.on(u.on + n, f.trigger, c.event.click);
          }
        },
        event: {
          click: function () {
            c.toggle.call(this);
          }
        },
        toggle: function (e) {
          var t = e !== T ? "number" == typeof e ? g.eq(e) : S(e).closest(f.title) : S(this).closest(f.title),
              n = t.next(p),
              i = n.hasClass(d.animating),
              o = n.hasClass(d.active),
              a = o && !i,
              r = !o && i;
          c.debug("Toggling visibility of content", t), a || r ? u.collapsible ? c.close.call(t) : c.debug("Cannot close accordion content collapsing is disabled") : c.open.call(t);
        },
        open: function (e) {
          var t = e !== T ? "number" == typeof e ? g.eq(e) : S(e).closest(f.title) : S(this).closest(f.title),
              n = t.next(p),
              i = n.hasClass(d.animating);
          n.hasClass(d.active) || i ? c.debug("Accordion already open, skipping", n) : (c.debug("Opening accordion content", t), u.onOpening.call(n), u.onChanging.call(n), u.exclusive && c.closeOthers.call(t), t.addClass(d.active), n.stop(!0, !0).addClass(d.animating), u.animateChildren && (S.fn.transition !== T && m.transition("is supported") ? n.children().transition({
            animation: "fade in",
            queue: !1,
            useFailSafe: !0,
            debug: u.debug,
            verbose: u.verbose,
            duration: u.duration
          }) : n.children().stop(!0, !0).animate({
            opacity: 1
          }, u.duration, c.resetOpacity)), n.slideDown(u.duration, u.easing, function () {
            n.removeClass(d.animating).addClass(d.active), c.reset.display.call(this), u.onOpen.call(this), u.onChange.call(this);
          }));
        },
        close: function (e) {
          var t = e !== T ? "number" == typeof e ? g.eq(e) : S(e).closest(f.title) : S(this).closest(f.title),
              n = t.next(p),
              i = n.hasClass(d.animating),
              o = n.hasClass(d.active);
          !o && !(!o && i) || o && i || (c.debug("Closing accordion content", n), u.onClosing.call(n), u.onChanging.call(n), t.removeClass(d.active), n.stop(!0, !0).addClass(d.animating), u.animateChildren && (S.fn.transition !== T && m.transition("is supported") ? n.children().transition({
            animation: "fade out",
            queue: !1,
            useFailSafe: !0,
            debug: u.debug,
            verbose: u.verbose,
            duration: u.duration
          }) : n.children().stop(!0, !0).animate({
            opacity: 0
          }, u.duration, c.resetOpacity)), n.slideUp(u.duration, u.easing, function () {
            n.removeClass(d.animating).removeClass(d.active), c.reset.display.call(this), u.onClose.call(this), u.onChange.call(this);
          }));
        },
        closeOthers: function (e) {
          var t,
              n,
              i,
              o = e !== T ? g.eq(e) : S(this).closest(f.title),
              a = o.parents(f.content).prev(f.title),
              r = o.closest(f.accordion),
              s = f.title + "." + d.active + ":visible",
              l = f.content + "." + d.active + ":visible";
          i = u.closeNested ? (t = r.find(s).not(a)).next(p) : (t = r.find(s).not(a), n = r.find(l).find(s).not(a), (t = t.not(n)).next(p)), 0 < t.length && (c.debug("Exclusive enabled, closing other content", t), t.removeClass(d.active), i.removeClass(d.animating).stop(!0, !0), u.animateChildren && (S.fn.transition !== T && m.transition("is supported") ? i.children().transition({
            animation: "fade out",
            useFailSafe: !0,
            debug: u.debug,
            verbose: u.verbose,
            duration: u.duration
          }) : i.children().stop(!0, !0).animate({
            opacity: 0
          }, u.duration, c.resetOpacity)), i.slideUp(u.duration, u.easing, function () {
            S(this).removeClass(d.active), c.reset.display.call(this);
          }));
        },
        reset: {
          display: function () {
            c.verbose("Removing inline display from element", this), S(this).css("display", ""), "" === S(this).attr("style") && S(this).attr("style", "").removeAttr("style");
          },
          opacity: function () {
            c.verbose("Removing inline opacity from element", this), S(this).css("opacity", ""), "" === S(this).attr("style") && S(this).attr("style", "").removeAttr("style");
          }
        },
        setting: function (e, t) {
          if (c.debug("Changing setting", e, t), S.isPlainObject(e)) S.extend(!0, u, e);else {
            if (t === T) return u[e];
            S.isPlainObject(u[e]) ? S.extend(!0, u[e], t) : u[e] = t;
          }
        },
        internal: function (e, t) {
          if (c.debug("Changing internal", e, t), t === T) return c[e];
          S.isPlainObject(e) ? S.extend(!0, c, e) : c[e] = t;
        },
        debug: function () {
          !u.silent && u.debug && (u.performance ? c.performance.log(arguments) : (c.debug = Function.prototype.bind.call(console.info, console, u.name + ":"), c.debug.apply(console, arguments)));
        },
        verbose: function () {
          !u.silent && u.verbose && u.debug && (u.performance ? c.performance.log(arguments) : (c.verbose = Function.prototype.bind.call(console.info, console, u.name + ":"), c.verbose.apply(console, arguments)));
        },
        error: function () {
          u.silent || (c.error = Function.prototype.bind.call(console.error, console, u.name + ":"), c.error.apply(console, arguments));
        },
        performance: {
          log: function (e) {
            var t, n;
            u.performance && (n = (t = new Date().getTime()) - (b || t), b = t, y.push({
              Name: e[0],
              Arguments: [].slice.call(e, 1) || "",
              Element: l,
              "Execution Time": n
            })), clearTimeout(c.performance.timer), c.performance.timer = setTimeout(c.performance.display, 500);
          },
          display: function () {
            var e = u.name + ":",
                n = 0;
            b = !1, clearTimeout(c.performance.timer), S.each(y, function (e, t) {
              n += t["Execution Time"];
            }), e += " " + n + "ms", o && (e += " '" + o + "'"), (console.group !== T || console.table !== T) && 0 < y.length && (console.groupCollapsed(e), console.table ? console.table(y) : S.each(y, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), y = [];
          }
        },
        invoke: function (i, e, t) {
          var o,
              a,
              n,
              r = h;
          return e = e || w, t = l || t, "string" == typeof i && r !== T && (i = i.split(/[\. ]/), o = i.length - 1, S.each(i, function (e, t) {
            var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
            if (S.isPlainObject(r[n]) && e != o) r = r[n];else {
              if (r[n] !== T) return a = r[n], !1;
              if (!S.isPlainObject(r[t]) || e == o) return r[t] !== T ? a = r[t] : c.error(s.method, i), !1;
              r = r[t];
            }
          })), S.isFunction(a) ? n = a.apply(t, e) : a !== T && (n = a), S.isArray(v) ? v.push(n) : v !== T ? v = [v, n] : n !== T && (v = n), a;
        }
      }, C ? (h === T && c.initialize(), c.invoke(x)) : (h !== T && h.invoke("destroy"), c.initialize());
    }), v !== T ? v : this;
  }, S.fn.accordion.settings = {
    name: "Accordion",
    namespace: "accordion",
    silent: !1,
    debug: !1,
    verbose: !1,
    performance: !0,
    on: "click",
    observeChanges: !0,
    exclusive: !0,
    collapsible: !0,
    closeNested: !1,
    animateChildren: !0,
    duration: 350,
    easing: "easeOutQuad",
    onOpening: function () {},
    onClosing: function () {},
    onChanging: function () {},
    onOpen: function () {},
    onClose: function () {},
    onChange: function () {},
    error: {
      method: "The method you called is not defined"
    },
    className: {
      active: "active",
      animating: "animating"
    },
    selector: {
      accordion: ".accordion",
      title: ".title",
      trigger: ".title",
      content: ".content"
    }
  }, S.extend(S.easing, {
    easeOutQuad: function (e, t, n, i, o) {
      return -i * (t /= o) * (t - 2) + n;
    }
  });
}(jQuery, window, document), function (T, A, R, P) {
  "use strict";

  A = void 0 !== A && A.Math == Math ? A : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), T.fn.checkbox = function (v) {
    var b,
        e = T(this),
        y = e.selector || "",
        x = new Date().getTime(),
        C = [],
        w = v,
        S = "string" == typeof w,
        k = [].slice.call(arguments, 1);
    return e.each(function () {
      var e,
          s,
          i = T.extend(!0, {}, T.fn.checkbox.settings, v),
          t = i.className,
          n = i.namespace,
          o = i.selector,
          l = i.error,
          a = "." + n,
          r = "module-" + n,
          c = T(this),
          u = T(this).children(o.label),
          d = T(this).children(o.input),
          f = d[0],
          m = !1,
          g = !1,
          p = c.data(r),
          h = this;
      s = {
        initialize: function () {
          s.verbose("Initializing checkbox", i), s.create.label(), s.bind.events(), s.set.tabbable(), s.hide.input(), s.observeChanges(), s.instantiate(), s.setup();
        },
        instantiate: function () {
          s.verbose("Storing instance of module", s), p = s, c.data(r, s);
        },
        destroy: function () {
          s.verbose("Destroying module"), s.unbind.events(), s.show.input(), c.removeData(r);
        },
        fix: {
          reference: function () {
            c.is(o.input) && (s.debug("Behavior called on <input> adjusting invoked element"), c = c.closest(o.checkbox), s.refresh());
          }
        },
        setup: function () {
          s.set.initialLoad(), s.is.indeterminate() ? (s.debug("Initial value is indeterminate"), s.indeterminate()) : s.is.checked() ? (s.debug("Initial value is checked"), s.check()) : (s.debug("Initial value is unchecked"), s.uncheck()), s.remove.initialLoad();
        },
        refresh: function () {
          u = c.children(o.label), d = c.children(o.input), f = d[0];
        },
        hide: {
          input: function () {
            s.verbose("Modifying <input> z-index to be unselectable"), d.addClass(t.hidden);
          }
        },
        show: {
          input: function () {
            s.verbose("Modifying <input> z-index to be selectable"), d.removeClass(t.hidden);
          }
        },
        observeChanges: function () {
          "MutationObserver" in A && ((e = new MutationObserver(function (e) {
            s.debug("DOM tree modified, updating selector cache"), s.refresh();
          })).observe(h, {
            childList: !0,
            subtree: !0
          }), s.debug("Setting up mutation observer", e));
        },
        attachEvents: function (e, t) {
          var n = T(e);
          t = T.isFunction(s[t]) ? s[t] : s.toggle, 0 < n.length ? (s.debug("Attaching checkbox events to element", e, t), n.on("click" + a, t)) : s.error(l.notFound);
        },
        event: {
          click: function (e) {
            var t = T(e.target);
            t.is(o.input) ? s.verbose("Using default check action on initialized checkbox") : t.is(o.link) ? s.debug("Clicking link inside checkbox, skipping toggle") : (s.toggle(), d.focus(), e.preventDefault());
          },
          keydown: function (e) {
            var t = e.which,
                n = 13,
                i = 32;
            g = t == 27 ? (s.verbose("Escape key pressed blurring field"), d.blur(), !0) : !(e.ctrlKey || t != i && t != n) && (s.verbose("Enter/space key pressed, toggling checkbox"), s.toggle(), !0);
          },
          keyup: function (e) {
            g && e.preventDefault();
          }
        },
        check: function () {
          s.should.allowCheck() && (s.debug("Checking checkbox", d), s.set.checked(), s.should.ignoreCallbacks() || (i.onChecked.call(f), i.onChange.call(f)));
        },
        uncheck: function () {
          s.should.allowUncheck() && (s.debug("Unchecking checkbox"), s.set.unchecked(), s.should.ignoreCallbacks() || (i.onUnchecked.call(f), i.onChange.call(f)));
        },
        indeterminate: function () {
          s.should.allowIndeterminate() ? s.debug("Checkbox is already indeterminate") : (s.debug("Making checkbox indeterminate"), s.set.indeterminate(), s.should.ignoreCallbacks() || (i.onIndeterminate.call(f), i.onChange.call(f)));
        },
        determinate: function () {
          s.should.allowDeterminate() ? s.debug("Checkbox is already determinate") : (s.debug("Making checkbox determinate"), s.set.determinate(), s.should.ignoreCallbacks() || (i.onDeterminate.call(f), i.onChange.call(f)));
        },
        enable: function () {
          s.is.enabled() ? s.debug("Checkbox is already enabled") : (s.debug("Enabling checkbox"), s.set.enabled(), i.onEnable.call(f), i.onEnabled.call(f));
        },
        disable: function () {
          s.is.disabled() ? s.debug("Checkbox is already disabled") : (s.debug("Disabling checkbox"), s.set.disabled(), i.onDisable.call(f), i.onDisabled.call(f));
        },
        get: {
          radios: function () {
            var e = s.get.name();
            return T('input[name="' + e + '"]').closest(o.checkbox);
          },
          otherRadios: function () {
            return s.get.radios().not(c);
          },
          name: function () {
            return d.attr("name");
          }
        },
        is: {
          initialLoad: function () {
            return m;
          },
          radio: function () {
            return d.hasClass(t.radio) || "radio" == d.attr("type");
          },
          indeterminate: function () {
            return d.prop("indeterminate") !== P && d.prop("indeterminate");
          },
          checked: function () {
            return d.prop("checked") !== P && d.prop("checked");
          },
          disabled: function () {
            return d.prop("disabled") !== P && d.prop("disabled");
          },
          enabled: function () {
            return !s.is.disabled();
          },
          determinate: function () {
            return !s.is.indeterminate();
          },
          unchecked: function () {
            return !s.is.checked();
          }
        },
        should: {
          allowCheck: function () {
            return s.is.determinate() && s.is.checked() && !s.should.forceCallbacks() ? (s.debug("Should not allow check, checkbox is already checked"), !1) : !1 !== i.beforeChecked.apply(f) || (s.debug("Should not allow check, beforeChecked cancelled"), !1);
          },
          allowUncheck: function () {
            return s.is.determinate() && s.is.unchecked() && !s.should.forceCallbacks() ? (s.debug("Should not allow uncheck, checkbox is already unchecked"), !1) : !1 !== i.beforeUnchecked.apply(f) || (s.debug("Should not allow uncheck, beforeUnchecked cancelled"), !1);
          },
          allowIndeterminate: function () {
            return s.is.indeterminate() && !s.should.forceCallbacks() ? (s.debug("Should not allow indeterminate, checkbox is already indeterminate"), !1) : !1 !== i.beforeIndeterminate.apply(f) || (s.debug("Should not allow indeterminate, beforeIndeterminate cancelled"), !1);
          },
          allowDeterminate: function () {
            return s.is.determinate() && !s.should.forceCallbacks() ? (s.debug("Should not allow determinate, checkbox is already determinate"), !1) : !1 !== i.beforeDeterminate.apply(f) || (s.debug("Should not allow determinate, beforeDeterminate cancelled"), !1);
          },
          forceCallbacks: function () {
            return s.is.initialLoad() && i.fireOnInit;
          },
          ignoreCallbacks: function () {
            return m && !i.fireOnInit;
          }
        },
        can: {
          change: function () {
            return !(c.hasClass(t.disabled) || c.hasClass(t.readOnly) || d.prop("disabled") || d.prop("readonly"));
          },
          uncheck: function () {
            return "boolean" == typeof i.uncheckable ? i.uncheckable : !s.is.radio();
          }
        },
        set: {
          initialLoad: function () {
            m = !0;
          },
          checked: function () {
            s.verbose("Setting class to checked"), c.removeClass(t.indeterminate).addClass(t.checked), s.is.radio() && s.uncheckOthers(), s.is.indeterminate() || !s.is.checked() ? (s.verbose("Setting state to checked", f), d.prop("indeterminate", !1).prop("checked", !0), s.trigger.change()) : s.debug("Input is already checked, skipping input property change");
          },
          unchecked: function () {
            s.verbose("Removing checked class"), c.removeClass(t.indeterminate).removeClass(t.checked), s.is.indeterminate() || !s.is.unchecked() ? (s.debug("Setting state to unchecked"), d.prop("indeterminate", !1).prop("checked", !1), s.trigger.change()) : s.debug("Input is already unchecked");
          },
          indeterminate: function () {
            s.verbose("Setting class to indeterminate"), c.addClass(t.indeterminate), s.is.indeterminate() ? s.debug("Input is already indeterminate, skipping input property change") : (s.debug("Setting state to indeterminate"), d.prop("indeterminate", !0), s.trigger.change());
          },
          determinate: function () {
            s.verbose("Removing indeterminate class"), c.removeClass(t.indeterminate), s.is.determinate() ? s.debug("Input is already determinate, skipping input property change") : (s.debug("Setting state to determinate"), d.prop("indeterminate", !1));
          },
          disabled: function () {
            s.verbose("Setting class to disabled"), c.addClass(t.disabled), s.is.disabled() ? s.debug("Input is already disabled, skipping input property change") : (s.debug("Setting state to disabled"), d.prop("disabled", "disabled"), s.trigger.change());
          },
          enabled: function () {
            s.verbose("Removing disabled class"), c.removeClass(t.disabled), s.is.enabled() ? s.debug("Input is already enabled, skipping input property change") : (s.debug("Setting state to enabled"), d.prop("disabled", !1), s.trigger.change());
          },
          tabbable: function () {
            s.verbose("Adding tabindex to checkbox"), d.attr("tabindex") === P && d.attr("tabindex", 0);
          }
        },
        remove: {
          initialLoad: function () {
            m = !1;
          }
        },
        trigger: {
          change: function () {
            var e = R.createEvent("HTMLEvents"),
                t = d[0];
            t && (s.verbose("Triggering native change event"), e.initEvent("change", !0, !1), t.dispatchEvent(e));
          }
        },
        create: {
          label: function () {
            0 < d.prevAll(o.label).length ? (d.prev(o.label).detach().insertAfter(d), s.debug("Moving existing label", u)) : s.has.label() || (u = T("<label>").insertAfter(d), s.debug("Creating label", u));
          }
        },
        has: {
          label: function () {
            return 0 < u.length;
          }
        },
        bind: {
          events: function () {
            s.verbose("Attaching checkbox events"), c.on("click" + a, s.event.click).on("keydown" + a, o.input, s.event.keydown).on("keyup" + a, o.input, s.event.keyup);
          }
        },
        unbind: {
          events: function () {
            s.debug("Removing events"), c.off(a);
          }
        },
        uncheckOthers: function () {
          var e = s.get.otherRadios();
          s.debug("Unchecking other radios", e), e.removeClass(t.checked);
        },
        toggle: function () {
          s.can.change() ? s.is.indeterminate() || s.is.unchecked() ? (s.debug("Currently unchecked"), s.check()) : s.is.checked() && s.can.uncheck() && (s.debug("Currently checked"), s.uncheck()) : s.is.radio() || s.debug("Checkbox is read-only or disabled, ignoring toggle");
        },
        setting: function (e, t) {
          if (s.debug("Changing setting", e, t), T.isPlainObject(e)) T.extend(!0, i, e);else {
            if (t === P) return i[e];
            T.isPlainObject(i[e]) ? T.extend(!0, i[e], t) : i[e] = t;
          }
        },
        internal: function (e, t) {
          if (T.isPlainObject(e)) T.extend(!0, s, e);else {
            if (t === P) return s[e];
            s[e] = t;
          }
        },
        debug: function () {
          !i.silent && i.debug && (i.performance ? s.performance.log(arguments) : (s.debug = Function.prototype.bind.call(console.info, console, i.name + ":"), s.debug.apply(console, arguments)));
        },
        verbose: function () {
          !i.silent && i.verbose && i.debug && (i.performance ? s.performance.log(arguments) : (s.verbose = Function.prototype.bind.call(console.info, console, i.name + ":"), s.verbose.apply(console, arguments)));
        },
        error: function () {
          i.silent || (s.error = Function.prototype.bind.call(console.error, console, i.name + ":"), s.error.apply(console, arguments));
        },
        performance: {
          log: function (e) {
            var t, n;
            i.performance && (n = (t = new Date().getTime()) - (x || t), x = t, C.push({
              Name: e[0],
              Arguments: [].slice.call(e, 1) || "",
              Element: h,
              "Execution Time": n
            })), clearTimeout(s.performance.timer), s.performance.timer = setTimeout(s.performance.display, 500);
          },
          display: function () {
            var e = i.name + ":",
                n = 0;
            x = !1, clearTimeout(s.performance.timer), T.each(C, function (e, t) {
              n += t["Execution Time"];
            }), e += " " + n + "ms", y && (e += " '" + y + "'"), (console.group !== P || console.table !== P) && 0 < C.length && (console.groupCollapsed(e), console.table ? console.table(C) : T.each(C, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), C = [];
          }
        },
        invoke: function (i, e, t) {
          var o,
              a,
              n,
              r = p;
          return e = e || k, t = h || t, "string" == typeof i && r !== P && (i = i.split(/[\. ]/), o = i.length - 1, T.each(i, function (e, t) {
            var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
            if (T.isPlainObject(r[n]) && e != o) r = r[n];else {
              if (r[n] !== P) return a = r[n], !1;
              if (!T.isPlainObject(r[t]) || e == o) return r[t] !== P ? a = r[t] : s.error(l.method, i), !1;
              r = r[t];
            }
          })), T.isFunction(a) ? n = a.apply(t, e) : a !== P && (n = a), T.isArray(b) ? b.push(n) : b !== P ? b = [b, n] : n !== P && (b = n), a;
        }
      }, S ? (p === P && s.initialize(), s.invoke(w)) : (p !== P && p.invoke("destroy"), s.initialize());
    }), b !== P ? b : this;
  }, T.fn.checkbox.settings = {
    name: "Checkbox",
    namespace: "checkbox",
    silent: !1,
    debug: !1,
    verbose: !0,
    performance: !0,
    uncheckable: "auto",
    fireOnInit: !1,
    onChange: function () {},
    beforeChecked: function () {},
    beforeUnchecked: function () {},
    beforeDeterminate: function () {},
    beforeIndeterminate: function () {},
    onChecked: function () {},
    onUnchecked: function () {},
    onDeterminate: function () {},
    onIndeterminate: function () {},
    onEnable: function () {},
    onDisable: function () {},
    onEnabled: function () {},
    onDisabled: function () {},
    className: {
      checked: "checked",
      indeterminate: "indeterminate",
      disabled: "disabled",
      hidden: "hidden",
      radio: "radio",
      readOnly: "read-only"
    },
    error: {
      method: "The method you called is not defined"
    },
    selector: {
      checkbox: ".ui.checkbox",
      label: "label, .box",
      input: 'input[type="checkbox"], input[type="radio"]',
      link: "a[href]"
    }
  };
}(jQuery, window, document), function (S, e, k, T) {
  "use strict";

  e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), S.fn.dimmer = function (p) {
    var h,
        v = S(this),
        b = new Date().getTime(),
        y = [],
        x = p,
        C = "string" == typeof x,
        w = [].slice.call(arguments, 1);
    return v.each(function () {
      var a,
          t,
          s,
          r = S.isPlainObject(p) ? S.extend(!0, {}, S.fn.dimmer.settings, p) : S.extend({}, S.fn.dimmer.settings),
          n = r.selector,
          e = r.namespace,
          i = r.className,
          l = r.error,
          o = "." + e,
          c = "module-" + e,
          u = v.selector || "",
          d = "ontouchstart" in k.documentElement ? "touchstart" : "click",
          f = S(this),
          m = this,
          g = f.data(c);
      (s = {
        preinitialize: function () {
          a = s.is.dimmer() ? (t = f.parent(), f) : (t = f, s.has.dimmer() ? r.dimmerName ? t.find(n.dimmer).filter("." + r.dimmerName) : t.find(n.dimmer) : s.create());
        },
        initialize: function () {
          s.debug("Initializing dimmer", r), s.bind.events(), s.set.dimmable(), s.instantiate();
        },
        instantiate: function () {
          s.verbose("Storing instance of module", s), g = s, f.data(c, g);
        },
        destroy: function () {
          s.verbose("Destroying previous module", a), s.unbind.events(), s.remove.variation(), t.off(o);
        },
        bind: {
          events: function () {
            "hover" == r.on ? t.on("mouseenter" + o, s.show).on("mouseleave" + o, s.hide) : "click" == r.on && t.on(d + o, s.toggle), s.is.page() && (s.debug("Setting as a page dimmer", t), s.set.pageDimmer()), s.is.closable() && (s.verbose("Adding dimmer close event", a), t.on(d + o, n.dimmer, s.event.click));
          }
        },
        unbind: {
          events: function () {
            f.removeData(c), t.off(o);
          }
        },
        event: {
          click: function (e) {
            s.verbose("Determining if event occured on dimmer", e), 0 !== a.find(e.target).length && !S(e.target).is(n.content) || (s.hide(), e.stopImmediatePropagation());
          }
        },
        addContent: function (e) {
          var t = S(e);
          s.debug("Add content to dimmer", t), t.parent()[0] !== a[0] && t.detach().appendTo(a);
        },
        create: function () {
          var e = S(r.template.dimmer());
          return r.dimmerName && (s.debug("Creating named dimmer", r.dimmerName), e.addClass(r.dimmerName)), e.appendTo(t), e;
        },
        show: function (e) {
          e = S.isFunction(e) ? e : function () {}, s.debug("Showing dimmer", a, r), s.set.variation(), s.is.dimmed() && !s.is.animating() || !s.is.enabled() ? s.debug("Dimmer is already shown or disabled") : (s.animate.show(e), r.onShow.call(m), r.onChange.call(m));
        },
        hide: function (e) {
          e = S.isFunction(e) ? e : function () {}, s.is.dimmed() || s.is.animating() ? (s.debug("Hiding dimmer", a), s.animate.hide(e), r.onHide.call(m), r.onChange.call(m)) : s.debug("Dimmer is not visible");
        },
        toggle: function () {
          s.verbose("Toggling dimmer visibility", a), s.is.dimmed() ? s.hide() : s.show();
        },
        animate: {
          show: function (e) {
            e = S.isFunction(e) ? e : function () {}, r.useCSS && S.fn.transition !== T && a.transition("is supported") ? (r.useFlex ? (s.debug("Using flex dimmer"), s.remove.legacy()) : (s.debug("Using legacy non-flex dimmer"), s.set.legacy()), "auto" !== r.opacity && s.set.opacity(), a.transition({
              displayType: r.useFlex ? "flex" : "block",
              animation: r.transition + " in",
              queue: !1,
              duration: s.get.duration(),
              useFailSafe: !0,
              onStart: function () {
                s.set.dimmed();
              },
              onComplete: function () {
                s.set.active(), e();
              }
            })) : (s.verbose("Showing dimmer animation with javascript"), s.set.dimmed(), "auto" == r.opacity && (r.opacity = .8), a.stop().css({
              opacity: 0,
              width: "100%",
              height: "100%"
            }).fadeTo(s.get.duration(), r.opacity, function () {
              a.removeAttr("style"), s.set.active(), e();
            }));
          },
          hide: function (e) {
            e = S.isFunction(e) ? e : function () {}, r.useCSS && S.fn.transition !== T && a.transition("is supported") ? (s.verbose("Hiding dimmer with css"), a.transition({
              displayType: r.useFlex ? "flex" : "block",
              animation: r.transition + " out",
              queue: !1,
              duration: s.get.duration(),
              useFailSafe: !0,
              onStart: function () {
                s.remove.dimmed();
              },
              onComplete: function () {
                s.remove.variation(), s.remove.active(), e();
              }
            })) : (s.verbose("Hiding dimmer with javascript"), s.remove.dimmed(), a.stop().fadeOut(s.get.duration(), function () {
              s.remove.active(), a.removeAttr("style"), e();
            }));
          }
        },
        get: {
          dimmer: function () {
            return a;
          },
          duration: function () {
            return "object" == typeof r.duration ? s.is.active() ? r.duration.hide : r.duration.show : r.duration;
          }
        },
        has: {
          dimmer: function () {
            return r.dimmerName ? 0 < f.find(n.dimmer).filter("." + r.dimmerName).length : 0 < f.find(n.dimmer).length;
          }
        },
        is: {
          active: function () {
            return a.hasClass(i.active);
          },
          animating: function () {
            return a.is(":animated") || a.hasClass(i.animating);
          },
          closable: function () {
            return "auto" == r.closable ? "hover" != r.on : r.closable;
          },
          dimmer: function () {
            return f.hasClass(i.dimmer);
          },
          dimmable: function () {
            return f.hasClass(i.dimmable);
          },
          dimmed: function () {
            return t.hasClass(i.dimmed);
          },
          disabled: function () {
            return t.hasClass(i.disabled);
          },
          enabled: function () {
            return !s.is.disabled();
          },
          page: function () {
            return t.is("body");
          },
          pageDimmer: function () {
            return a.hasClass(i.pageDimmer);
          }
        },
        can: {
          show: function () {
            return !a.hasClass(i.disabled);
          }
        },
        set: {
          opacity: function (e) {
            var t = a.css("background-color"),
                n = t.split(","),
                i = n && 3 == n.length,
                o = n && 4 == n.length;
            e = 0 === r.opacity ? 0 : r.opacity || e, t = i || o ? (n[3] = e + ")", n.join(",")) : "rgba(0, 0, 0, " + e + ")", s.debug("Setting opacity to", e), a.css("background-color", t);
          },
          legacy: function () {
            a.addClass(i.legacy);
          },
          active: function () {
            a.addClass(i.active);
          },
          dimmable: function () {
            t.addClass(i.dimmable);
          },
          dimmed: function () {
            t.addClass(i.dimmed);
          },
          pageDimmer: function () {
            a.addClass(i.pageDimmer);
          },
          disabled: function () {
            a.addClass(i.disabled);
          },
          variation: function (e) {
            (e = e || r.variation) && a.addClass(e);
          }
        },
        remove: {
          active: function () {
            a.removeClass(i.active);
          },
          legacy: function () {
            a.removeClass(i.legacy);
          },
          dimmed: function () {
            t.removeClass(i.dimmed);
          },
          disabled: function () {
            a.removeClass(i.disabled);
          },
          variation: function (e) {
            (e = e || r.variation) && a.removeClass(e);
          }
        },
        setting: function (e, t) {
          if (s.debug("Changing setting", e, t), S.isPlainObject(e)) S.extend(!0, r, e);else {
            if (t === T) return r[e];
            S.isPlainObject(r[e]) ? S.extend(!0, r[e], t) : r[e] = t;
          }
        },
        internal: function (e, t) {
          if (S.isPlainObject(e)) S.extend(!0, s, e);else {
            if (t === T) return s[e];
            s[e] = t;
          }
        },
        debug: function () {
          !r.silent && r.debug && (r.performance ? s.performance.log(arguments) : (s.debug = Function.prototype.bind.call(console.info, console, r.name + ":"), s.debug.apply(console, arguments)));
        },
        verbose: function () {
          !r.silent && r.verbose && r.debug && (r.performance ? s.performance.log(arguments) : (s.verbose = Function.prototype.bind.call(console.info, console, r.name + ":"), s.verbose.apply(console, arguments)));
        },
        error: function () {
          r.silent || (s.error = Function.prototype.bind.call(console.error, console, r.name + ":"), s.error.apply(console, arguments));
        },
        performance: {
          log: function (e) {
            var t, n;
            r.performance && (n = (t = new Date().getTime()) - (b || t), b = t, y.push({
              Name: e[0],
              Arguments: [].slice.call(e, 1) || "",
              Element: m,
              "Execution Time": n
            })), clearTimeout(s.performance.timer), s.performance.timer = setTimeout(s.performance.display, 500);
          },
          display: function () {
            var e = r.name + ":",
                n = 0;
            b = !1, clearTimeout(s.performance.timer), S.each(y, function (e, t) {
              n += t["Execution Time"];
            }), e += " " + n + "ms", u && (e += " '" + u + "'"), 1 < v.length && (e += " (" + v.length + ")"), (console.group !== T || console.table !== T) && 0 < y.length && (console.groupCollapsed(e), console.table ? console.table(y) : S.each(y, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), y = [];
          }
        },
        invoke: function (i, e, t) {
          var o,
              a,
              n,
              r = g;
          return e = e || w, t = m || t, "string" == typeof i && r !== T && (i = i.split(/[\. ]/), o = i.length - 1, S.each(i, function (e, t) {
            var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
            if (S.isPlainObject(r[n]) && e != o) r = r[n];else {
              if (r[n] !== T) return a = r[n], !1;
              if (!S.isPlainObject(r[t]) || e == o) return r[t] !== T ? a = r[t] : s.error(l.method, i), !1;
              r = r[t];
            }
          })), S.isFunction(a) ? n = a.apply(t, e) : a !== T && (n = a), S.isArray(h) ? h.push(n) : h !== T ? h = [h, n] : n !== T && (h = n), a;
        }
      }).preinitialize(), C ? (g === T && s.initialize(), s.invoke(x)) : (g !== T && g.invoke("destroy"), s.initialize());
    }), h !== T ? h : this;
  }, S.fn.dimmer.settings = {
    name: "Dimmer",
    namespace: "dimmer",
    silent: !1,
    debug: !1,
    verbose: !1,
    performance: !0,
    useFlex: !0,
    dimmerName: !1,
    variation: !1,
    closable: "auto",
    useCSS: !0,
    transition: "fade",
    on: !1,
    opacity: "auto",
    duration: {
      show: 500,
      hide: 500
    },
    onChange: function () {},
    onShow: function () {},
    onHide: function () {},
    error: {
      method: "The method you called is not defined."
    },
    className: {
      active: "active",
      animating: "animating",
      dimmable: "dimmable",
      dimmed: "dimmed",
      dimmer: "dimmer",
      disabled: "disabled",
      hide: "hide",
      legacy: "legacy",
      pageDimmer: "page",
      show: "show"
    },
    selector: {
      dimmer: "> .ui.dimmer",
      content: ".ui.dimmer > .content, .ui.dimmer > .content > .center"
    },
    template: {
      dimmer: function () {
        return S("<div />").attr("class", "ui dimmer");
      }
    }
  };
}(jQuery, window, document), function (Y, Z, K, J) {
  "use strict";

  Z = void 0 !== Z && Z.Math == Math ? Z : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), Y.fn.dropdown = function (M) {
    var L,
        V = Y(this),
        N = Y(K),
        H = V.selector || "",
        U = ("ontouchstart" in K.documentElement),
        W = new Date().getTime(),
        B = [],
        Q = M,
        X = "string" == typeof Q,
        $ = [].slice.call(arguments, 1);
    return V.each(function (n) {
      var e,
          t,
          i,
          o,
          a,
          r,
          s,
          g,
          p = Y.isPlainObject(M) ? Y.extend(!0, {}, Y.fn.dropdown.settings, M) : Y.extend({}, Y.fn.dropdown.settings),
          h = p.className,
          c = p.message,
          l = p.fields,
          v = p.keys,
          b = p.metadata,
          u = p.namespace,
          d = p.regExp,
          y = p.selector,
          f = p.error,
          m = p.templates,
          x = "." + u,
          C = "module-" + u,
          w = Y(this),
          S = Y(p.context),
          k = w.find(y.text),
          T = w.find(y.search),
          A = w.find(y.sizer),
          R = w.find(y.input),
          P = w.find(y.icon),
          E = 0 < w.prev().find(y.text).length ? w.prev().find(y.text) : w.prev(),
          F = w.children(y.menu),
          O = F.find(y.item),
          D = !1,
          q = !1,
          j = !1,
          z = this,
          I = w.data(C);
      g = {
        initialize: function () {
          g.debug("Initializing dropdown", p), g.is.alreadySetup() ? g.setup.reference() : (g.setup.layout(), p.values && g.change.values(p.values), g.refreshData(), g.save.defaults(), g.restore.selected(), g.create.id(), g.bind.events(), g.observeChanges(), g.instantiate());
        },
        instantiate: function () {
          g.verbose("Storing instance of dropdown", g), I = g, w.data(C, g);
        },
        destroy: function () {
          g.verbose("Destroying previous dropdown", w), g.remove.tabbable(), w.off(x).removeData(C), F.off(x), N.off(o), g.disconnect.menuObserver(), g.disconnect.selectObserver();
        },
        observeChanges: function () {
          "MutationObserver" in Z && (r = new MutationObserver(g.event.select.mutation), s = new MutationObserver(g.event.menu.mutation), g.debug("Setting up mutation observer", r, s), g.observe.select(), g.observe.menu());
        },
        disconnect: {
          menuObserver: function () {
            s && s.disconnect();
          },
          selectObserver: function () {
            r && r.disconnect();
          }
        },
        observe: {
          select: function () {
            g.has.input() && r.observe(w[0], {
              childList: !0,
              subtree: !0
            });
          },
          menu: function () {
            g.has.menu() && s.observe(F[0], {
              childList: !0,
              subtree: !0
            });
          }
        },
        create: {
          id: function () {
            a = (Math.random().toString(16) + "000000000").substr(2, 8), o = "." + a, g.verbose("Creating unique id for element", a);
          },
          userChoice: function (e) {
            var n, i, o;
            return !!(e = e || g.get.userValues()) && (e = Y.isArray(e) ? e : [e], Y.each(e, function (e, t) {
              !1 === g.get.item(t) && (o = p.templates.addition(g.add.variables(c.addResult, t)), i = Y("<div />").html(o).attr("data-" + b.value, t).attr("data-" + b.text, t).addClass(h.addition).addClass(h.item), p.hideAdditions && i.addClass(h.hidden), n = n === J ? i : n.add(i), g.verbose("Creating user choices for value", t, i));
            }), n);
          },
          userLabels: function (e) {
            var t = g.get.userValues();
            t && (g.debug("Adding user labels", t), Y.each(t, function (e, t) {
              g.verbose("Adding custom user value"), g.add.label(t, t);
            }));
          },
          menu: function () {
            F = Y("<div />").addClass(h.menu).appendTo(w);
          },
          sizer: function () {
            A = Y("<span />").addClass(h.sizer).insertAfter(T);
          }
        },
        search: function (e) {
          e = e !== J ? e : g.get.query(), g.verbose("Searching for query", e), g.has.minCharacters(e) ? g.filter(e) : g.hide();
        },
        select: {
          firstUnfiltered: function () {
            g.verbose("Selecting first non-filtered element"), g.remove.selectedItem(), O.not(y.unselectable).not(y.addition + y.hidden).eq(0).addClass(h.selected);
          },
          nextAvailable: function (e) {
            var t = (e = e.eq(0)).nextAll(y.item).not(y.unselectable).eq(0),
                n = e.prevAll(y.item).not(y.unselectable).eq(0);
            0 < t.length ? (g.verbose("Moving selection to", t), t.addClass(h.selected)) : (g.verbose("Moving selection to", n), n.addClass(h.selected));
          }
        },
        setup: {
          api: function () {
            var e = {
              debug: p.debug,
              urlData: {
                value: g.get.value(),
                query: g.get.query()
              },
              on: !1
            };
            g.verbose("First request, initializing API"), w.api(e);
          },
          layout: function () {
            w.is("select") && (g.setup.select(), g.setup.returnedObject()), g.has.menu() || g.create.menu(), g.is.search() && !g.has.search() && (g.verbose("Adding search input"), T = Y("<input />").addClass(h.search).prop("autocomplete", "off").insertBefore(k)), g.is.multiple() && g.is.searchSelection() && !g.has.sizer() && g.create.sizer(), p.allowTab && g.set.tabbable();
          },
          select: function () {
            var e = g.get.selectValues();
            g.debug("Dropdown initialized on a select", e), w.is("select") && (R = w), 0 < R.parent(y.dropdown).length ? (g.debug("UI dropdown already exists. Creating dropdown menu only"), w = R.closest(y.dropdown), g.has.menu() || g.create.menu(), F = w.children(y.menu), g.setup.menu(e)) : (g.debug("Creating entire dropdown from select"), w = Y("<div />").attr("class", R.attr("class")).addClass(h.selection).addClass(h.dropdown).html(m.dropdown(e)).insertBefore(R), R.hasClass(h.multiple) && !1 === R.prop("multiple") && (g.error(f.missingMultiple), R.prop("multiple", !0)), R.is("[multiple]") && g.set.multiple(), R.prop("disabled") && (g.debug("Disabling dropdown"), w.addClass(h.disabled)), R.removeAttr("class").detach().prependTo(w)), g.refresh();
          },
          menu: function (e) {
            F.html(m.menu(e, l)), O = F.find(y.item);
          },
          reference: function () {
            g.debug("Dropdown behavior was called on select, replacing with closest dropdown"), w = w.parent(y.dropdown), I = w.data(C), z = w.get(0), g.refresh(), g.setup.returnedObject();
          },
          returnedObject: function () {
            var e = V.slice(0, n),
                t = V.slice(n + 1);
            V = e.add(w).add(t);
          }
        },
        refresh: function () {
          g.refreshSelectors(), g.refreshData();
        },
        refreshItems: function () {
          O = F.find(y.item);
        },
        refreshSelectors: function () {
          g.verbose("Refreshing selector cache"), k = w.find(y.text), T = w.find(y.search), R = w.find(y.input), P = w.find(y.icon), E = 0 < w.prev().find(y.text).length ? w.prev().find(y.text) : w.prev(), F = w.children(y.menu), O = F.find(y.item);
        },
        refreshData: function () {
          g.verbose("Refreshing cached metadata"), O.removeData(b.text).removeData(b.value);
        },
        clearData: function () {
          g.verbose("Clearing metadata"), O.removeData(b.text).removeData(b.value), w.removeData(b.defaultText).removeData(b.defaultValue).removeData(b.placeholderText);
        },
        toggle: function () {
          g.verbose("Toggling menu visibility"), g.is.active() ? g.hide() : g.show();
        },
        show: function (e) {
          if (e = Y.isFunction(e) ? e : function () {}, !g.can.show() && g.is.remote() && (g.debug("No API results retrieved, searching before show"), g.queryRemote(g.get.query(), g.show)), g.can.show() && !g.is.active()) {
            if (g.debug("Showing dropdown"), !g.has.message() || g.has.maxSelections() || g.has.allResultsFiltered() || g.remove.message(), g.is.allFiltered()) return !0;
            !1 !== p.onShow.call(z) && g.animate.show(function () {
              g.can.click() && g.bind.intent(), g.has.menuSearch() && g.focusSearch(), g.set.visible(), e.call(z);
            });
          }
        },
        hide: function (e) {
          e = Y.isFunction(e) ? e : function () {}, g.is.active() && !g.is.animatingOutward() && (g.debug("Hiding dropdown"), !1 !== p.onHide.call(z) && g.animate.hide(function () {
            g.remove.visible(), e.call(z);
          }));
        },
        hideOthers: function () {
          g.verbose("Finding other dropdowns to hide"), V.not(w).has(y.menu + "." + h.visible).dropdown("hide");
        },
        hideMenu: function () {
          g.verbose("Hiding menu  instantaneously"), g.remove.active(), g.remove.visible(), F.transition("hide");
        },
        hideSubMenus: function () {
          var e = F.children(y.item).find(y.menu);
          g.verbose("Hiding sub menus", e), e.transition("hide");
        },
        bind: {
          events: function () {
            U && g.bind.touchEvents(), g.bind.keyboardEvents(), g.bind.inputEvents(), g.bind.mouseEvents();
          },
          touchEvents: function () {
            g.debug("Touch device detected binding additional touch events"), g.is.searchSelection() || g.is.single() && w.on("touchstart" + x, g.event.test.toggle), F.on("touchstart" + x, y.item, g.event.item.mouseenter);
          },
          keyboardEvents: function () {
            g.verbose("Binding keyboard events"), w.on("keydown" + x, g.event.keydown), g.has.search() && w.on(g.get.inputEvent() + x, y.search, g.event.input), g.is.multiple() && N.on("keydown" + o, g.event.document.keydown);
          },
          inputEvents: function () {
            g.verbose("Binding input change events"), w.on("change" + x, y.input, g.event.change);
          },
          mouseEvents: function () {
            g.verbose("Binding mouse events"), g.is.multiple() && w.on("click" + x, y.label, g.event.label.click).on("click" + x, y.remove, g.event.remove.click), g.is.searchSelection() ? (w.on("mousedown" + x, g.event.mousedown).on("mouseup" + x, g.event.mouseup).on("mousedown" + x, y.menu, g.event.menu.mousedown).on("mouseup" + x, y.menu, g.event.menu.mouseup).on("click" + x, y.icon, g.event.icon.click).on("focus" + x, y.search, g.event.search.focus).on("click" + x, y.search, g.event.search.focus).on("blur" + x, y.search, g.event.search.blur).on("click" + x, y.text, g.event.text.focus), g.is.multiple() && w.on("click" + x, g.event.click)) : ("click" == p.on ? w.on("click" + x, g.event.test.toggle) : "hover" == p.on ? w.on("mouseenter" + x, g.delay.show).on("mouseleave" + x, g.delay.hide) : w.on(p.on + x, g.toggle), w.on("click" + x, y.icon, g.event.icon.click).on("mousedown" + x, g.event.mousedown).on("mouseup" + x, g.event.mouseup).on("focus" + x, g.event.focus), g.has.menuSearch() ? w.on("blur" + x, y.search, g.event.search.blur) : w.on("blur" + x, g.event.blur)), F.on("mouseenter" + x, y.item, g.event.item.mouseenter).on("mouseleave" + x, y.item, g.event.item.mouseleave).on("click" + x, y.item, g.event.item.click);
          },
          intent: function () {
            g.verbose("Binding hide intent event to document"), U && N.on("touchstart" + o, g.event.test.touch).on("touchmove" + o, g.event.test.touch), N.on("click" + o, g.event.test.hide);
          }
        },
        unbind: {
          intent: function () {
            g.verbose("Removing hide intent event from document"), U && N.off("touchstart" + o).off("touchmove" + o), N.off("click" + o);
          }
        },
        filter: function (e) {
          function t() {
            g.is.multiple() && g.filterActive(), (e || !e && 0 == g.get.activeItem().length) && g.select.firstUnfiltered(), g.has.allResultsFiltered() ? p.onNoResults.call(z, n) ? p.allowAdditions ? p.hideAdditions && (g.verbose("User addition with no menu, setting empty style"), g.set.empty(), g.hideMenu()) : (g.verbose("All items filtered, showing message", n), g.add.message(c.noResults)) : (g.verbose("All items filtered, hiding dropdown", n), g.hideMenu()) : (g.remove.empty(), g.remove.message()), p.allowAdditions && g.add.userSuggestion(e), g.is.searchSelection() && g.can.show() && g.is.focusedOnSearch() && g.show();
          }

          var n = e !== J ? e : g.get.query();
          p.useLabels && g.has.maxSelections() || (p.apiSettings ? g.can.useAPI() ? g.queryRemote(n, function () {
            p.filterRemoteData && g.filterItems(n), t();
          }) : g.error(f.noAPI) : (g.filterItems(n), t()));
        },
        queryRemote: function (e, n) {
          var t = {
            errorDuration: !1,
            cache: "local",
            throttle: p.throttle,
            urlData: {
              query: e
            },
            onError: function () {
              g.add.message(c.serverError), n();
            },
            onFailure: function () {
              g.add.message(c.serverError), n();
            },
            onSuccess: function (e) {
              var t = e[l.remoteValues];
              Y.isArray(t) && 0 < t.length ? (g.remove.message(), g.setup.menu({
                values: e[l.remoteValues]
              })) : g.add.message(c.noResults), n();
            }
          };
          w.api("get request") || g.setup.api(), t = Y.extend(!0, {}, t, p.apiSettings), w.api("setting", t).api("query");
        },
        filterItems: function (e) {
          var i = e !== J ? e : g.get.query(),
              o = null,
              t = g.escape.string(i),
              a = new RegExp("^" + t, "igm");
          g.has.query() && (o = [], g.verbose("Searching for matching values", i), O.each(function () {
            var e,
                t,
                n = Y(this);

            if ("both" == p.match || "text" == p.match) {
              if (-1 !== (e = String(g.get.choiceText(n, !1))).search(a)) return o.push(this), !0;
              if ("exact" === p.fullTextSearch && g.exactSearch(i, e)) return o.push(this), !0;
              if (!0 === p.fullTextSearch && g.fuzzySearch(i, e)) return o.push(this), !0;
            }

            if ("both" == p.match || "value" == p.match) {
              if (-1 !== (t = String(g.get.choiceValue(n, e))).search(a)) return o.push(this), !0;
              if ("exact" === p.fullTextSearch && g.exactSearch(i, t)) return o.push(this), !0;
              if (!0 === p.fullTextSearch && g.fuzzySearch(i, t)) return o.push(this), !0;
            }
          })), g.debug("Showing only matched items", i), g.remove.filteredItem(), o && O.not(o).addClass(h.filtered);
        },
        fuzzySearch: function (e, t) {
          var n = t.length,
              i = e.length;
          if (e = e.toLowerCase(), t = t.toLowerCase(), n < i) return !1;
          if (i === n) return e === t;

          e: for (var o = 0, a = 0; o < i; o++) {
            for (var r = e.charCodeAt(o); a < n;) if (t.charCodeAt(a++) === r) continue e;

            return !1;
          }

          return !0;
        },
        exactSearch: function (e, t) {
          return e = e.toLowerCase(), -1 < (t = t.toLowerCase()).indexOf(e);
        },
        filterActive: function () {
          p.useLabels && O.filter("." + h.active).addClass(h.filtered);
        },
        focusSearch: function (e) {
          g.has.search() && !g.is.focusedOnSearch() && (e ? (w.off("focus" + x, y.search), T.focus(), w.on("focus" + x, y.search, g.event.search.focus)) : T.focus());
        },
        forceSelection: function () {
          var e = O.not(h.filtered).filter("." + h.selected).eq(0),
              t = O.not(h.filtered).filter("." + h.active).eq(0),
              n = 0 < e.length ? e : t;
          if (0 < n.length && !g.is.multiple()) return g.debug("Forcing partial selection to selected item", n), void g.event.item.click.call(n, {}, !0);
          p.allowAdditions && g.set.selected(g.get.query()), g.remove.searchTerm();
        },
        change: {
          values: function (e) {
            p.allowAdditions || g.clear(), g.debug("Creating dropdown with specified values", e), g.setup.menu({
              values: e
            }), Y.each(e, function (e, t) {
              if (1 == t.selected) return g.debug("Setting initial selection to", t.value), g.set.selected(t.value), !0;
            });
          }
        },
        event: {
          change: function () {
            j || (g.debug("Input changed, updating selection"), g.set.selected());
          },
          focus: function () {
            p.showOnFocus && !D && g.is.hidden() && !t && g.show();
          },
          blur: function (e) {
            t = K.activeElement === this, D || t || (g.remove.activeLabel(), g.hide());
          },
          mousedown: function () {
            g.is.searchSelection() ? i = !0 : D = !0;
          },
          mouseup: function () {
            g.is.searchSelection() ? i = !1 : D = !1;
          },
          click: function (e) {
            Y(e.target).is(w) && (g.is.focusedOnSearch() ? g.show() : g.focusSearch());
          },
          search: {
            focus: function () {
              D = !0, g.is.multiple() && g.remove.activeLabel(), p.showOnFocus && g.search();
            },
            blur: function (e) {
              t = K.activeElement === this, g.is.searchSelection() && !i && (q || t || (p.forceSelection && g.forceSelection(), g.hide())), i = !1;
            }
          },
          icon: {
            click: function (e) {
              P.hasClass(h.clear) ? g.clear() : g.can.click() && g.toggle();
            }
          },
          text: {
            focus: function (e) {
              D = !0, g.focusSearch();
            }
          },
          input: function (e) {
            (g.is.multiple() || g.is.searchSelection()) && g.set.filtered(), clearTimeout(g.timer), g.timer = setTimeout(g.search, p.delay.search);
          },
          label: {
            click: function (e) {
              var t = Y(this),
                  n = w.find(y.label),
                  i = n.filter("." + h.active),
                  o = t.nextAll("." + h.active),
                  a = t.prevAll("." + h.active),
                  r = 0 < o.length ? t.nextUntil(o).add(i).add(t) : t.prevUntil(a).add(i).add(t);
              e.shiftKey ? (i.removeClass(h.active), r.addClass(h.active)) : e.ctrlKey ? t.toggleClass(h.active) : (i.removeClass(h.active), t.addClass(h.active)), p.onLabelSelect.apply(this, n.filter("." + h.active));
            }
          },
          remove: {
            click: function () {
              var e = Y(this).parent();
              e.hasClass(h.active) ? g.remove.activeLabels() : g.remove.activeLabels(e);
            }
          },
          test: {
            toggle: function (e) {
              var t = g.is.multiple() ? g.show : g.toggle;
              g.is.bubbledLabelClick(e) || g.is.bubbledIconClick(e) || g.determine.eventOnElement(e, t) && e.preventDefault();
            },
            touch: function (e) {
              g.determine.eventOnElement(e, function () {
                "touchstart" == e.type ? g.timer = setTimeout(function () {
                  g.hide();
                }, p.delay.touch) : "touchmove" == e.type && clearTimeout(g.timer);
              }), e.stopPropagation();
            },
            hide: function (e) {
              g.determine.eventInModule(e, g.hide);
            }
          },
          select: {
            mutation: function (e) {
              g.debug("<select> modified, recreating menu");
              var n = !1;
              Y.each(e, function (e, t) {
                if (Y(t.target).is("select") || Y(t.addedNodes).is("select")) return n = !0;
              }), n && (g.disconnect.selectObserver(), g.refresh(), g.setup.select(), g.set.selected(), g.observe.select());
            }
          },
          menu: {
            mutation: function (e) {
              var t = e[0],
                  n = t.addedNodes ? Y(t.addedNodes[0]) : Y(!1),
                  i = t.removedNodes ? Y(t.removedNodes[0]) : Y(!1),
                  o = n.add(i),
                  a = o.is(y.addition) || 0 < o.closest(y.addition).length,
                  r = o.is(y.message) || 0 < o.closest(y.message).length;
              a || r ? (g.debug("Updating item selector cache"), g.refreshItems()) : (g.debug("Menu modified, updating selector cache"), g.refresh());
            },
            mousedown: function () {
              q = !0;
            },
            mouseup: function () {
              q = !1;
            }
          },
          item: {
            mouseenter: function (e) {
              var t = Y(e.target),
                  n = Y(this),
                  i = n.children(y.menu),
                  o = n.siblings(y.item).children(y.menu),
                  a = 0 < i.length;
              0 < i.find(t).length || !a || (clearTimeout(g.itemTimer), g.itemTimer = setTimeout(function () {
                g.verbose("Showing sub-menu", i), Y.each(o, function () {
                  g.animate.hide(!1, Y(this));
                }), g.animate.show(!1, i);
              }, p.delay.show), e.preventDefault());
            },
            mouseleave: function (e) {
              var t = Y(this).children(y.menu);
              0 < t.length && (clearTimeout(g.itemTimer), g.itemTimer = setTimeout(function () {
                g.verbose("Hiding sub-menu", t), g.animate.hide(!1, t);
              }, p.delay.hide));
            },
            click: function (e, t) {
              var n = Y(this),
                  i = Y(e ? e.target : ""),
                  o = n.find(y.menu),
                  a = g.get.choiceText(n),
                  r = g.get.choiceValue(n, a),
                  s = 0 < o.length,
                  l = 0 < o.find(i).length;
              g.has.menuSearch() && Y(K.activeElement).blur(), l || s && !p.allowCategorySelection || (g.is.searchSelection() && (p.allowAdditions && g.remove.userAddition(), g.remove.searchTerm(), g.is.focusedOnSearch() || 1 == t || g.focusSearch(!0)), p.useLabels || (g.remove.filteredItem(), g.set.scrollPosition(n)), g.determine.selectAction.call(this, a, r));
            }
          },
          document: {
            keydown: function (e) {
              var t = e.which;

              if (g.is.inObject(t, v)) {
                var n = w.find(y.label),
                    i = n.filter("." + h.active),
                    o = (i.data(b.value), n.index(i)),
                    a = n.length,
                    r = 0 < i.length,
                    s = 1 < i.length,
                    l = 0 === o,
                    c = o + 1 == a,
                    u = g.is.searchSelection(),
                    d = g.is.focusedOnSearch(),
                    f = g.is.focused(),
                    m = d && 0 === g.get.caretPosition();
                if (u && !r && !d) return;
                t == v.leftArrow ? !f && !m || r ? r && (e.shiftKey ? g.verbose("Adding previous label to selection") : (g.verbose("Selecting previous label"), n.removeClass(h.active)), l && !s ? i.addClass(h.active) : i.prev(y.siblingLabel).addClass(h.active).end(), e.preventDefault()) : (g.verbose("Selecting previous label"), n.last().addClass(h.active)) : t == v.rightArrow ? (f && !r && n.first().addClass(h.active), r && (e.shiftKey ? g.verbose("Adding next label to selection") : (g.verbose("Selecting next label"), n.removeClass(h.active)), c ? u ? d ? n.removeClass(h.active) : g.focusSearch() : s ? i.next(y.siblingLabel).addClass(h.active) : i.addClass(h.active) : i.next(y.siblingLabel).addClass(h.active), e.preventDefault())) : t == v.deleteKey || t == v.backspace ? r ? (g.verbose("Removing active labels"), c && u && !d && g.focusSearch(), i.last().next(y.siblingLabel).addClass(h.active), g.remove.activeLabels(i), e.preventDefault()) : m && !r && t == v.backspace && (g.verbose("Removing last label on input backspace"), i = n.last().addClass(h.active), g.remove.activeLabels(i)) : i.removeClass(h.active);
              }
            }
          },
          keydown: function (e) {
            var t = e.which;

            if (g.is.inObject(t, v)) {
              var n,
                  i = O.not(y.unselectable).filter("." + h.selected).eq(0),
                  o = F.children("." + h.active).eq(0),
                  a = 0 < i.length ? i : o,
                  r = 0 < a.length ? a.siblings(":not(." + h.filtered + ")").addBack() : F.children(":not(." + h.filtered + ")"),
                  s = a.children(y.menu),
                  l = a.closest(y.menu),
                  c = l.hasClass(h.visible) || l.hasClass(h.animating) || 0 < l.parent(y.menu).length,
                  u = 0 < s.length,
                  d = 0 < a.length,
                  f = 0 < a.not(y.unselectable).length,
                  m = t == v.delimiter && p.allowAdditions && g.is.multiple();

              if (p.allowAdditions && p.hideAdditions && (t == v.enter || m) && f && (g.verbose("Selecting item from keyboard shortcut", a), g.event.item.click.call(a, e), g.is.searchSelection() && g.remove.searchTerm()), g.is.visible()) {
                if (t != v.enter && !m || (t == v.enter && d && u && !p.allowCategorySelection ? (g.verbose("Pressed enter on unselectable category, opening sub menu"), t = v.rightArrow) : f && (g.verbose("Selecting item from keyboard shortcut", a), g.event.item.click.call(a, e), g.is.searchSelection() && g.remove.searchTerm()), e.preventDefault()), d && (t == v.leftArrow && l[0] !== F[0] && (g.verbose("Left key pressed, closing sub-menu"), g.animate.hide(!1, l), a.removeClass(h.selected), l.closest(y.item).addClass(h.selected), e.preventDefault()), t == v.rightArrow && u && (g.verbose("Right key pressed, opening sub-menu"), g.animate.show(!1, s), a.removeClass(h.selected), s.find(y.item).eq(0).addClass(h.selected), e.preventDefault())), t == v.upArrow) {
                  if (n = d && c ? a.prevAll(y.item + ":not(" + y.unselectable + ")").eq(0) : O.eq(0), r.index(n) < 0) return g.verbose("Up key pressed but reached top of current menu"), void e.preventDefault();
                  g.verbose("Up key pressed, changing active item"), a.removeClass(h.selected), n.addClass(h.selected), g.set.scrollPosition(n), p.selectOnKeydown && g.is.single() && g.set.selectedItem(n), e.preventDefault();
                }

                if (t == v.downArrow) {
                  if (0 === (n = d && c ? n = a.nextAll(y.item + ":not(" + y.unselectable + ")").eq(0) : O.eq(0)).length) return g.verbose("Down key pressed but reached bottom of current menu"), void e.preventDefault();
                  g.verbose("Down key pressed, changing active item"), O.removeClass(h.selected), n.addClass(h.selected), g.set.scrollPosition(n), p.selectOnKeydown && g.is.single() && g.set.selectedItem(n), e.preventDefault();
                }

                t == v.pageUp && (g.scrollPage("up"), e.preventDefault()), t == v.pageDown && (g.scrollPage("down"), e.preventDefault()), t == v.escape && (g.verbose("Escape key pressed, closing dropdown"), g.hide());
              } else m && e.preventDefault(), t != v.downArrow || g.is.visible() || (g.verbose("Down key pressed, showing dropdown"), g.show(), e.preventDefault());
            } else g.has.search() || g.set.selectedLetter(String.fromCharCode(t));
          }
        },
        trigger: {
          change: function () {
            var e = K.createEvent("HTMLEvents"),
                t = R[0];
            t && (g.verbose("Triggering native change event"), e.initEvent("change", !0, !1), t.dispatchEvent(e));
          }
        },
        determine: {
          selectAction: function (e, t) {
            g.verbose("Determining action", p.action), Y.isFunction(g.action[p.action]) ? (g.verbose("Triggering preset action", p.action, e, t), g.action[p.action].call(z, e, t, this)) : Y.isFunction(p.action) ? (g.verbose("Triggering user action", p.action, e, t), p.action.call(z, e, t, this)) : g.error(f.action, p.action);
          },
          eventInModule: function (e, t) {
            var n = Y(e.target),
                i = 0 < n.closest(K.documentElement).length,
                o = 0 < n.closest(w).length;
            return t = Y.isFunction(t) ? t : function () {}, i && !o ? (g.verbose("Triggering event", t), t(), !0) : (g.verbose("Event occurred in dropdown, canceling callback"), !1);
          },
          eventOnElement: function (e, t) {
            var n = Y(e.target),
                i = n.closest(y.siblingLabel),
                o = K.body.contains(e.target),
                a = 0 === w.find(i).length,
                r = 0 === n.closest(F).length;
            return t = Y.isFunction(t) ? t : function () {}, o && a && r ? (g.verbose("Triggering event", t), t(), !0) : (g.verbose("Event occurred in dropdown menu, canceling callback"), !1);
          }
        },
        action: {
          nothing: function () {},
          activate: function (e, t, n) {
            if (t = t !== J ? t : e, g.can.activate(Y(n))) {
              if (g.set.selected(t, Y(n)), g.is.multiple() && !g.is.allFiltered()) return;
              g.hideAndClear();
            }
          },
          select: function (e, t, n) {
            if (t = t !== J ? t : e, g.can.activate(Y(n))) {
              if (g.set.value(t, e, Y(n)), g.is.multiple() && !g.is.allFiltered()) return;
              g.hideAndClear();
            }
          },
          combo: function (e, t, n) {
            t = t !== J ? t : e, g.set.selected(t, Y(n)), g.hideAndClear();
          },
          hide: function (e, t, n) {
            g.set.value(t, e, Y(n)), g.hideAndClear();
          }
        },
        get: {
          id: function () {
            return a;
          },
          defaultText: function () {
            return w.data(b.defaultText);
          },
          defaultValue: function () {
            return w.data(b.defaultValue);
          },
          placeholderText: function () {
            return "auto" != p.placeholder && "string" == typeof p.placeholder ? p.placeholder : w.data(b.placeholderText) || "";
          },
          text: function () {
            return k.text();
          },
          query: function () {
            return Y.trim(T.val());
          },
          searchWidth: function (e) {
            return e = e !== J ? e : T.val(), A.text(e), Math.ceil(A.width() + 1);
          },
          selectionCount: function () {
            var e = g.get.values();
            return g.is.multiple() ? Y.isArray(e) ? e.length : 0 : "" !== g.get.value() ? 1 : 0;
          },
          transition: function (e) {
            return "auto" == p.transition ? g.is.upward(e) ? "slide up" : "slide down" : p.transition;
          },
          userValues: function () {
            var e = g.get.values();
            return !!e && (e = Y.isArray(e) ? e : [e], Y.grep(e, function (e) {
              return !1 === g.get.item(e);
            }));
          },
          uniqueArray: function (n) {
            return Y.grep(n, function (e, t) {
              return Y.inArray(e, n) === t;
            });
          },
          caretPosition: function () {
            var e,
                t,
                n = T.get(0);
            return "selectionStart" in n ? n.selectionStart : K.selection ? (n.focus(), t = (e = K.selection.createRange()).text.length, e.moveStart("character", -n.value.length), e.text.length - t) : void 0;
          },
          value: function () {
            var e = 0 < R.length ? R.val() : w.data(b.value),
                t = Y.isArray(e) && 1 === e.length && "" === e[0];
            return e === J || t ? "" : e;
          },
          values: function () {
            var e = g.get.value();
            return "" === e ? "" : !g.has.selectInput() && g.is.multiple() ? "string" == typeof e ? e.split(p.delimiter) : "" : e;
          },
          remoteValues: function () {
            var e = g.get.values(),
                i = !1;
            return e && ("string" == typeof e && (e = [e]), Y.each(e, function (e, t) {
              var n = g.read.remoteData(t);
              g.verbose("Restoring value from session data", n, t), n && (i || (i = {}), i[t] = n);
            })), i;
          },
          choiceText: function (e, t) {
            if (t = t !== J ? t : p.preserveHTML, e) return 0 < e.find(y.menu).length && (g.verbose("Retrieving text of element with sub-menu"), (e = e.clone()).find(y.menu).remove(), e.find(y.menuIcon).remove()), e.data(b.text) !== J ? e.data(b.text) : t ? Y.trim(e.html()) : Y.trim(e.text());
          },
          choiceValue: function (e, t) {
            return t = t || g.get.choiceText(e), !!e && (e.data(b.value) !== J ? String(e.data(b.value)) : "string" == typeof t ? Y.trim(t.toLowerCase()) : String(t));
          },
          inputEvent: function () {
            var e = T[0];
            return !!e && (e.oninput !== J ? "input" : e.onpropertychange !== J ? "propertychange" : "keyup");
          },
          selectValues: function () {
            var o = {
              values: []
            };
            return w.find("option").each(function () {
              var e = Y(this),
                  t = e.html(),
                  n = e.attr("disabled"),
                  i = e.attr("value") !== J ? e.attr("value") : t;
              "auto" === p.placeholder && "" === i ? o.placeholder = t : o.values.push({
                name: t,
                value: i,
                disabled: n
              });
            }), p.placeholder && "auto" !== p.placeholder && (g.debug("Setting placeholder value to", p.placeholder), o.placeholder = p.placeholder), p.sortSelect ? (o.values.sort(function (e, t) {
              return e.name > t.name ? 1 : -1;
            }), g.debug("Retrieved and sorted values from select", o)) : g.debug("Retrieved values from select", o), o;
          },
          activeItem: function () {
            return O.filter("." + h.active);
          },
          selectedItem: function () {
            var e = O.not(y.unselectable).filter("." + h.selected);
            return 0 < e.length ? e : O.eq(0);
          },
          itemWithAdditions: function (e) {
            var t = g.get.item(e),
                n = g.create.userChoice(e);
            return n && 0 < n.length && (t = 0 < t.length ? t.add(n) : n), t;
          },
          item: function (i, o) {
            var e,
                a,
                r = !1;
            return i = i !== J ? i : g.get.values() !== J ? g.get.values() : g.get.text(), e = a ? 0 < i.length : i !== J && null !== i, a = g.is.multiple() && Y.isArray(i), o = "" === i || 0 === i || o || !1, e && O.each(function () {
              var e = Y(this),
                  t = g.get.choiceText(e),
                  n = g.get.choiceValue(e, t);
              if (null !== n && n !== J) if (a) -1 === Y.inArray(String(n), i) && -1 === Y.inArray(t, i) || (r = r ? r.add(e) : e);else if (o) {
                if (g.verbose("Ambiguous dropdown value using strict type check", e, i), n === i || t === i) return r = e, !0;
              } else if (String(n) == String(i) || t == i) return g.verbose("Found select item by value", n, i), r = e, !0;
            }), r;
          }
        },
        check: {
          maxSelections: function (e) {
            return !p.maxSelections || ((e = e !== J ? e : g.get.selectionCount()) >= p.maxSelections ? (g.debug("Maximum selection count reached"), p.useLabels && (O.addClass(h.filtered), g.add.message(c.maxSelections)), !0) : (g.verbose("No longer at maximum selection count"), g.remove.message(), g.remove.filteredItem(), g.is.searchSelection() && g.filterItems(), !1));
          }
        },
        restore: {
          defaults: function () {
            g.clear(), g.restore.defaultText(), g.restore.defaultValue();
          },
          defaultText: function () {
            var e = g.get.defaultText();
            e === g.get.placeholderText ? (g.debug("Restoring default placeholder text", e), g.set.placeholderText(e)) : (g.debug("Restoring default text", e), g.set.text(e));
          },
          placeholderText: function () {
            g.set.placeholderText();
          },
          defaultValue: function () {
            var e = g.get.defaultValue();
            e !== J && (g.debug("Restoring default value", e), "" !== e ? (g.set.value(e), g.set.selected()) : (g.remove.activeItem(), g.remove.selectedItem()));
          },
          labels: function () {
            p.allowAdditions && (p.useLabels || (g.error(f.labels), p.useLabels = !0), g.debug("Restoring selected values"), g.create.userLabels()), g.check.maxSelections();
          },
          selected: function () {
            g.restore.values(), g.is.multiple() ? (g.debug("Restoring previously selected values and labels"), g.restore.labels()) : g.debug("Restoring previously selected values");
          },
          values: function () {
            g.set.initialLoad(), p.apiSettings && p.saveRemoteData && g.get.remoteValues() ? g.restore.remoteValues() : g.set.selected(), g.remove.initialLoad();
          },
          remoteValues: function () {
            var e = g.get.remoteValues();
            g.debug("Recreating selected from session data", e), e && (g.is.single() ? Y.each(e, function (e, t) {
              g.set.text(t);
            }) : Y.each(e, function (e, t) {
              g.add.label(e, t);
            }));
          }
        },
        read: {
          remoteData: function (e) {
            var t;
            if (Z.Storage !== J) return (t = sessionStorage.getItem(e)) !== J && t;
            g.error(f.noStorage);
          }
        },
        save: {
          defaults: function () {
            g.save.defaultText(), g.save.placeholderText(), g.save.defaultValue();
          },
          defaultValue: function () {
            var e = g.get.value();
            g.verbose("Saving default value as", e), w.data(b.defaultValue, e);
          },
          defaultText: function () {
            var e = g.get.text();
            g.verbose("Saving default text as", e), w.data(b.defaultText, e);
          },
          placeholderText: function () {
            var e;
            !1 !== p.placeholder && k.hasClass(h.placeholder) && (e = g.get.text(), g.verbose("Saving placeholder text as", e), w.data(b.placeholderText, e));
          },
          remoteData: function (e, t) {
            Z.Storage !== J ? (g.verbose("Saving remote data to session storage", t, e), sessionStorage.setItem(t, e)) : g.error(f.noStorage);
          }
        },
        clear: function () {
          g.is.multiple() && p.useLabels ? g.remove.labels() : (g.remove.activeItem(), g.remove.selectedItem()), g.set.placeholderText(), g.clearValue();
        },
        clearValue: function () {
          g.set.value("");
        },
        scrollPage: function (e, t) {
          var n,
              i,
              o = t || g.get.selectedItem(),
              a = o.closest(y.menu),
              r = a.outerHeight(),
              s = a.scrollTop(),
              l = O.eq(0).outerHeight(),
              c = Math.floor(r / l),
              u = (a.prop("scrollHeight"), "up" == e ? s - l * c : s + l * c),
              d = O.not(y.unselectable);
          i = "up" == e ? d.index(o) - c : d.index(o) + c, 0 < (n = ("up" == e ? 0 <= i : i < d.length) ? d.eq(i) : "up" == e ? d.first() : d.last()).length && (g.debug("Scrolling page", e, n), o.removeClass(h.selected), n.addClass(h.selected), p.selectOnKeydown && g.is.single() && g.set.selectedItem(n), a.scrollTop(u));
        },
        set: {
          filtered: function () {
            var e = g.is.multiple(),
                t = g.is.searchSelection(),
                n = e && t,
                i = t ? g.get.query() : "",
                o = "string" == typeof i && 0 < i.length,
                a = g.get.searchWidth(),
                r = "" !== i;
            e && o && (g.verbose("Adjusting input width", a, p.glyphWidth), T.css("width", a)), o || n && r ? (g.verbose("Hiding placeholder text"), k.addClass(h.filtered)) : e && (!n || r) || (g.verbose("Showing placeholder text"), k.removeClass(h.filtered));
          },
          empty: function () {
            w.addClass(h.empty);
          },
          loading: function () {
            w.addClass(h.loading);
          },
          placeholderText: function (e) {
            e = e || g.get.placeholderText(), g.debug("Setting placeholder text", e), g.set.text(e), k.addClass(h.placeholder);
          },
          tabbable: function () {
            g.is.searchSelection() ? (g.debug("Added tabindex to searchable dropdown"), T.val("").attr("tabindex", 0), F.attr("tabindex", -1)) : (g.debug("Added tabindex to dropdown"), w.attr("tabindex") === J && (w.attr("tabindex", 0), F.attr("tabindex", -1)));
          },
          initialLoad: function () {
            g.verbose("Setting initial load"), e = !0;
          },
          activeItem: function (e) {
            p.allowAdditions && 0 < e.filter(y.addition).length ? e.addClass(h.filtered) : e.addClass(h.active);
          },
          partialSearch: function (e) {
            var t = g.get.query().length;
            T.val(e.substr(0, t));
          },
          scrollPosition: function (e, t) {
            var n, i, o, a, r, s;
            n = (e = e || g.get.selectedItem()).closest(y.menu), i = e && 0 < e.length, t = t !== J && t, e && 0 < n.length && i && (e.position().top, n.addClass(h.loading), o = (a = n.scrollTop()) - n.offset().top + e.offset().top, t || (s = a + n.height() < o + 5, r = o - 5 < a), g.debug("Scrolling to active item", o), (t || r || s) && n.scrollTop(o), n.removeClass(h.loading));
          },
          text: function (e) {
            "select" !== p.action && ("combo" == p.action ? (g.debug("Changing combo button text", e, E), p.preserveHTML ? E.html(e) : E.text(e)) : (e !== g.get.placeholderText() && k.removeClass(h.placeholder), g.debug("Changing text", e, k), k.removeClass(h.filtered), p.preserveHTML ? k.html(e) : k.text(e)));
          },
          selectedItem: function (e) {
            var t = g.get.choiceValue(e),
                n = g.get.choiceText(e, !1),
                i = g.get.choiceText(e, !0);
            g.debug("Setting user selection to item", e), g.remove.activeItem(), g.set.partialSearch(n), g.set.activeItem(e), g.set.selected(t, e), g.set.text(i);
          },
          selectedLetter: function (e) {
            var t,
                n = O.filter("." + h.selected),
                i = 0 < n.length && g.has.firstLetter(n, e),
                o = !1;
            i && (t = n.nextAll(O).eq(0), g.has.firstLetter(t, e) && (o = t)), o || O.each(function () {
              if (g.has.firstLetter(Y(this), e)) return o = Y(this), !1;
            }), o && (g.verbose("Scrolling to next value with letter", e), g.set.scrollPosition(o), n.removeClass(h.selected), o.addClass(h.selected), p.selectOnKeydown && g.is.single() && g.set.selectedItem(o));
          },
          direction: function (e) {
            "auto" == p.direction ? (g.remove.upward(), g.can.openDownward(e) ? g.remove.upward(e) : g.set.upward(e), g.is.leftward(e) || g.can.openRightward(e) || g.set.leftward(e)) : "upward" == p.direction && g.set.upward(e);
          },
          upward: function (e) {
            (e || w).addClass(h.upward);
          },
          leftward: function (e) {
            (e || F).addClass(h.leftward);
          },
          value: function (e, t, n) {
            var i = g.escape.value(e),
                o = 0 < R.length,
                a = g.get.values(),
                r = e !== J ? String(e) : e;

            if (o) {
              if (!p.allowReselection && r == a && (g.verbose("Skipping value update already same value", e, a), !g.is.initialLoad())) return;
              g.is.single() && g.has.selectInput() && g.can.extendSelect() && (g.debug("Adding user option", e), g.add.optionValue(e)), g.debug("Updating input value", i, a), j = !0, R.val(i), !1 === p.fireOnInit && g.is.initialLoad() ? g.debug("Input native change event ignored on initial load") : g.trigger.change(), j = !1;
            } else g.verbose("Storing value in metadata", i, R), i !== a && w.data(b.value, r);

            g.is.single() && p.clearable && (i ? g.set.clearable() : g.remove.clearable()), !1 === p.fireOnInit && g.is.initialLoad() ? g.verbose("No callback on initial load", p.onChange) : p.onChange.call(z, e, t, n);
          },
          active: function () {
            w.addClass(h.active);
          },
          multiple: function () {
            w.addClass(h.multiple);
          },
          visible: function () {
            w.addClass(h.visible);
          },
          exactly: function (e, t) {
            g.debug("Setting selected to exact values"), g.clear(), g.set.selected(e, t);
          },
          selected: function (e, s) {
            var l = g.is.multiple();
            (s = p.allowAdditions ? s || g.get.itemWithAdditions(e) : s || g.get.item(e)) && (g.debug("Setting selected menu item to", s), g.is.multiple() && g.remove.searchWidth(), g.is.single() ? (g.remove.activeItem(), g.remove.selectedItem()) : p.useLabels && g.remove.selectedItem(), s.each(function () {
              var e = Y(this),
                  t = g.get.choiceText(e),
                  n = g.get.choiceValue(e, t),
                  i = e.hasClass(h.filtered),
                  o = e.hasClass(h.active),
                  a = e.hasClass(h.addition),
                  r = l && 1 == s.length;
              l ? !o || a ? (p.apiSettings && p.saveRemoteData && g.save.remoteData(t, n), p.useLabels ? (g.add.label(n, t, r), g.add.value(n, t, e), g.set.activeItem(e), g.filterActive(), g.select.nextAvailable(s)) : (g.add.value(n, t, e), g.set.text(g.add.variables(c.count)), g.set.activeItem(e))) : i || (g.debug("Selected active value, removing label"), g.remove.selected(n)) : (p.apiSettings && p.saveRemoteData && g.save.remoteData(t, n), g.set.text(t), g.set.value(n, t, e), e.addClass(h.active).addClass(h.selected));
            }));
          },
          clearable: function () {
            P.addClass(h.clear);
          }
        },
        add: {
          label: function (e, t, n) {
            var i,
                o = g.is.searchSelection() ? T : k,
                a = g.escape.value(e);
            p.ignoreCase && (a = a.toLowerCase()), i = Y("<a />").addClass(h.label).attr("data-" + b.value, a).html(m.label(a, t)), i = p.onLabelCreate.call(i, a, t), g.has.label(e) ? g.debug("User selection already exists, skipping", a) : (p.label.variation && i.addClass(p.label.variation), !0 === n ? (g.debug("Animating in label", i), i.addClass(h.hidden).insertBefore(o).transition(p.label.transition, p.label.duration)) : (g.debug("Adding selection label", i), i.insertBefore(o)));
          },
          message: function (e) {
            var t = F.children(y.message),
                n = p.templates.message(g.add.variables(e));
            0 < t.length ? t.html(n) : t = Y("<div/>").html(n).addClass(h.message).appendTo(F);
          },
          optionValue: function (e) {
            var t = g.escape.value(e);
            0 < R.find('option[value="' + g.escape.string(t) + '"]').length || (g.disconnect.selectObserver(), g.is.single() && (g.verbose("Removing previous user addition"), R.find("option." + h.addition).remove()), Y("<option/>").prop("value", t).addClass(h.addition).html(e).appendTo(R), g.verbose("Adding user addition as an <option>", e), g.observe.select());
          },
          userSuggestion: function (e) {
            var t,
                n = F.children(y.addition),
                i = g.get.item(e),
                o = i && i.not(y.addition).length,
                a = 0 < n.length;
            p.useLabels && g.has.maxSelections() || ("" === e || o ? n.remove() : (a ? (n.data(b.value, e).data(b.text, e).attr("data-" + b.value, e).attr("data-" + b.text, e).removeClass(h.filtered), p.hideAdditions || (t = p.templates.addition(g.add.variables(c.addResult, e)), n.html(t)), g.verbose("Replacing user suggestion with new value", n)) : ((n = g.create.userChoice(e)).prependTo(F), g.verbose("Adding item choice to menu corresponding with user choice addition", n)), p.hideAdditions && !g.is.allFiltered() || n.addClass(h.selected).siblings().removeClass(h.selected), g.refreshItems()));
          },
          variables: function (e, t) {
            var n,
                i,
                o = -1 !== e.search("{count}"),
                a = -1 !== e.search("{maxCount}"),
                r = -1 !== e.search("{term}");
            return g.verbose("Adding templated variables to message", e), o && (n = g.get.selectionCount(), e = e.replace("{count}", n)), a && (n = g.get.selectionCount(), e = e.replace("{maxCount}", p.maxSelections)), r && (i = t || g.get.query(), e = e.replace("{term}", i)), e;
          },
          value: function (e, t, n) {
            var i,
                o = g.get.values();
            g.has.value(e) ? g.debug("Value already selected") : "" !== e ? (i = Y.isArray(o) ? (i = o.concat([e]), g.get.uniqueArray(i)) : [e], g.has.selectInput() ? g.can.extendSelect() && (g.debug("Adding value to select", e, i, R), g.add.optionValue(e)) : (i = i.join(p.delimiter), g.debug("Setting hidden input to delimited value", i, R)), !1 === p.fireOnInit && g.is.initialLoad() ? g.verbose("Skipping onadd callback on initial load", p.onAdd) : p.onAdd.call(z, e, t, n), g.set.value(i, e, t, n), g.check.maxSelections()) : g.debug("Cannot select blank values from multiselect");
          }
        },
        remove: {
          active: function () {
            w.removeClass(h.active);
          },
          activeLabel: function () {
            w.find(y.label).removeClass(h.active);
          },
          empty: function () {
            w.removeClass(h.empty);
          },
          loading: function () {
            w.removeClass(h.loading);
          },
          initialLoad: function () {
            e = !1;
          },
          upward: function (e) {
            (e || w).removeClass(h.upward);
          },
          leftward: function (e) {
            (e || F).removeClass(h.leftward);
          },
          visible: function () {
            w.removeClass(h.visible);
          },
          activeItem: function () {
            O.removeClass(h.active);
          },
          filteredItem: function () {
            p.useLabels && g.has.maxSelections() || (p.useLabels && g.is.multiple() ? O.not("." + h.active).removeClass(h.filtered) : O.removeClass(h.filtered), g.remove.empty());
          },
          optionValue: function (e) {
            var t = g.escape.value(e),
                n = R.find('option[value="' + g.escape.string(t) + '"]');
            0 < n.length && n.hasClass(h.addition) && (r && (r.disconnect(), g.verbose("Temporarily disconnecting mutation observer")), n.remove(), g.verbose("Removing user addition as an <option>", t), r && r.observe(R[0], {
              childList: !0,
              subtree: !0
            }));
          },
          message: function () {
            F.children(y.message).remove();
          },
          searchWidth: function () {
            T.css("width", "");
          },
          searchTerm: function () {
            g.verbose("Cleared search term"), T.val(""), g.set.filtered();
          },
          userAddition: function () {
            O.filter(y.addition).remove();
          },
          selected: function (e, t) {
            if (!(t = p.allowAdditions ? t || g.get.itemWithAdditions(e) : t || g.get.item(e))) return !1;
            t.each(function () {
              var e = Y(this),
                  t = g.get.choiceText(e),
                  n = g.get.choiceValue(e, t);
              g.is.multiple() ? p.useLabels ? (g.remove.value(n, t, e), g.remove.label(n)) : (g.remove.value(n, t, e), 0 === g.get.selectionCount() ? g.set.placeholderText() : g.set.text(g.add.variables(c.count))) : g.remove.value(n, t, e), e.removeClass(h.filtered).removeClass(h.active), p.useLabels && e.removeClass(h.selected);
            });
          },
          selectedItem: function () {
            O.removeClass(h.selected);
          },
          value: function (e, t, n) {
            var i,
                o = g.get.values();
            g.has.selectInput() ? (g.verbose("Input is <select> removing selected option", e), i = g.remove.arrayValue(e, o), g.remove.optionValue(e)) : (g.verbose("Removing from delimited values", e), i = (i = g.remove.arrayValue(e, o)).join(p.delimiter)), !1 === p.fireOnInit && g.is.initialLoad() ? g.verbose("No callback on initial load", p.onRemove) : p.onRemove.call(z, e, t, n), g.set.value(i, t, n), g.check.maxSelections();
          },
          arrayValue: function (t, e) {
            return Y.isArray(e) || (e = [e]), e = Y.grep(e, function (e) {
              return t != e;
            }), g.verbose("Removed value from delimited string", t, e), e;
          },
          label: function (e, t) {
            var n = w.find(y.label).filter("[data-" + b.value + '="' + g.escape.string(e) + '"]');
            g.verbose("Removing label", n), n.remove();
          },
          activeLabels: function (e) {
            e = e || w.find(y.label).filter("." + h.active), g.verbose("Removing active label selections", e), g.remove.labels(e);
          },
          labels: function (e) {
            e = e || w.find(y.label), g.verbose("Removing labels", e), e.each(function () {
              var e = Y(this),
                  t = e.data(b.value),
                  n = t !== J ? String(t) : t,
                  i = g.is.userValue(n);
              !1 !== p.onLabelRemove.call(e, t) ? (g.remove.message(), i ? (g.remove.value(n), g.remove.label(n)) : g.remove.selected(n)) : g.debug("Label remove callback cancelled removal");
            });
          },
          tabbable: function () {
            g.is.searchSelection() ? (g.debug("Searchable dropdown initialized"), T.removeAttr("tabindex")) : (g.debug("Simple selection dropdown initialized"), w.removeAttr("tabindex")), F.removeAttr("tabindex");
          },
          clearable: function () {
            P.removeClass(h.clear);
          }
        },
        has: {
          menuSearch: function () {
            return g.has.search() && 0 < T.closest(F).length;
          },
          search: function () {
            return 0 < T.length;
          },
          sizer: function () {
            return 0 < A.length;
          },
          selectInput: function () {
            return R.is("select");
          },
          minCharacters: function (e) {
            return !p.minCharacters || (e = e !== J ? String(e) : String(g.get.query())).length >= p.minCharacters;
          },
          firstLetter: function (e, t) {
            var n;
            return !(!e || 0 === e.length || "string" != typeof t) && (n = g.get.choiceText(e, !1), (t = t.toLowerCase()) == String(n).charAt(0).toLowerCase());
          },
          input: function () {
            return 0 < R.length;
          },
          items: function () {
            return 0 < O.length;
          },
          menu: function () {
            return 0 < F.length;
          },
          message: function () {
            return 0 !== F.children(y.message).length;
          },
          label: function (e) {
            var t = g.escape.value(e),
                n = w.find(y.label);
            return p.ignoreCase && (t = t.toLowerCase()), 0 < n.filter("[data-" + b.value + '="' + g.escape.string(t) + '"]').length;
          },
          maxSelections: function () {
            return p.maxSelections && g.get.selectionCount() >= p.maxSelections;
          },
          allResultsFiltered: function () {
            var e = O.not(y.addition);
            return e.filter(y.unselectable).length === e.length;
          },
          userSuggestion: function () {
            return 0 < F.children(y.addition).length;
          },
          query: function () {
            return "" !== g.get.query();
          },
          value: function (e) {
            return p.ignoreCase ? g.has.valueIgnoringCase(e) : g.has.valueMatchingCase(e);
          },
          valueMatchingCase: function (e) {
            var t = g.get.values();
            return !!(Y.isArray(t) ? t && -1 !== Y.inArray(e, t) : t == e);
          },
          valueIgnoringCase: function (n) {
            var e = g.get.values(),
                i = !1;
            return Y.isArray(e) || (e = [e]), Y.each(e, function (e, t) {
              if (String(n).toLowerCase() == String(t).toLowerCase()) return !(i = !0);
            }), i;
          }
        },
        is: {
          active: function () {
            return w.hasClass(h.active);
          },
          animatingInward: function () {
            return F.transition("is inward");
          },
          animatingOutward: function () {
            return F.transition("is outward");
          },
          bubbledLabelClick: function (e) {
            return Y(e.target).is("select, input") && 0 < w.closest("label").length;
          },
          bubbledIconClick: function (e) {
            return 0 < Y(e.target).closest(P).length;
          },
          alreadySetup: function () {
            return w.is("select") && w.parent(y.dropdown).data(C) !== J && 0 === w.prev().length;
          },
          animating: function (e) {
            return e ? e.transition && e.transition("is animating") : F.transition && F.transition("is animating");
          },
          leftward: function (e) {
            return (e || F).hasClass(h.leftward);
          },
          disabled: function () {
            return w.hasClass(h.disabled);
          },
          focused: function () {
            return K.activeElement === w[0];
          },
          focusedOnSearch: function () {
            return K.activeElement === T[0];
          },
          allFiltered: function () {
            return (g.is.multiple() || g.has.search()) && !(0 == p.hideAdditions && g.has.userSuggestion()) && !g.has.message() && g.has.allResultsFiltered();
          },
          hidden: function (e) {
            return !g.is.visible(e);
          },
          initialLoad: function () {
            return e;
          },
          inObject: function (n, e) {
            var i = !1;
            return Y.each(e, function (e, t) {
              if (t == n) return i = !0;
            }), i;
          },
          multiple: function () {
            return w.hasClass(h.multiple);
          },
          remote: function () {
            return p.apiSettings && g.can.useAPI();
          },
          single: function () {
            return !g.is.multiple();
          },
          selectMutation: function (e) {
            var n = !1;
            return Y.each(e, function (e, t) {
              if (t.target && Y(t.target).is("select")) return n = !0;
            }), n;
          },
          search: function () {
            return w.hasClass(h.search);
          },
          searchSelection: function () {
            return g.has.search() && 1 === T.parent(y.dropdown).length;
          },
          selection: function () {
            return w.hasClass(h.selection);
          },
          userValue: function (e) {
            return -1 !== Y.inArray(e, g.get.userValues());
          },
          upward: function (e) {
            return (e || w).hasClass(h.upward);
          },
          visible: function (e) {
            return e ? e.hasClass(h.visible) : F.hasClass(h.visible);
          },
          verticallyScrollableContext: function () {
            var e = S.get(0) !== Z && S.css("overflow-y");
            return "auto" == e || "scroll" == e;
          },
          horizontallyScrollableContext: function () {
            var e = S.get(0) !== Z && S.css("overflow-X");
            return "auto" == e || "scroll" == e;
          }
        },
        can: {
          activate: function (e) {
            return !!p.useLabels || !g.has.maxSelections() || !(!g.has.maxSelections() || !e.hasClass(h.active));
          },
          openDownward: function (e) {
            var t,
                n,
                i = e || F,
                o = !0;
            return i.addClass(h.loading), n = {
              context: {
                offset: S.get(0) === Z ? {
                  top: 0,
                  left: 0
                } : S.offset(),
                scrollTop: S.scrollTop(),
                height: S.outerHeight()
              },
              menu: {
                offset: i.offset(),
                height: i.outerHeight()
              }
            }, g.is.verticallyScrollableContext() && (n.menu.offset.top += n.context.scrollTop), o = (t = {
              above: n.context.scrollTop <= n.menu.offset.top - n.context.offset.top - n.menu.height,
              below: n.context.scrollTop + n.context.height >= n.menu.offset.top - n.context.offset.top + n.menu.height
            }).below ? (g.verbose("Dropdown can fit in context downward", t), !0) : t.below || t.above ? (g.verbose("Dropdown cannot fit below, opening upward", t), !1) : (g.verbose("Dropdown cannot fit in either direction, favoring downward", t), !0), i.removeClass(h.loading), o;
          },
          openRightward: function (e) {
            var t,
                n,
                i = e || F,
                o = !0;
            return i.addClass(h.loading), n = {
              context: {
                offset: S.get(0) === Z ? {
                  top: 0,
                  left: 0
                } : S.offset(),
                scrollLeft: S.scrollLeft(),
                width: S.outerWidth()
              },
              menu: {
                offset: i.offset(),
                width: i.outerWidth()
              }
            }, g.is.horizontallyScrollableContext() && (n.menu.offset.left += n.context.scrollLeft), (t = n.menu.offset.left - n.context.offset.left + n.menu.width >= n.context.scrollLeft + n.context.width) && (g.verbose("Dropdown cannot fit in context rightward", t), o = !1), i.removeClass(h.loading), o;
          },
          click: function () {
            return U || "click" == p.on;
          },
          extendSelect: function () {
            return p.allowAdditions || p.apiSettings;
          },
          show: function () {
            return !g.is.disabled() && (g.has.items() || g.has.message());
          },
          useAPI: function () {
            return Y.fn.api !== J;
          }
        },
        animate: {
          show: function (e, t) {
            var n,
                i = t || F,
                o = t ? function () {} : function () {
              g.hideSubMenus(), g.hideOthers(), g.set.active();
            };
            e = Y.isFunction(e) ? e : function () {}, g.verbose("Doing menu show animation", i), g.set.direction(t), n = g.get.transition(t), g.is.selection() && g.set.scrollPosition(g.get.selectedItem(), !0), (g.is.hidden(i) || g.is.animating(i)) && ("none" == n ? (o(), i.transition("show"), e.call(z)) : Y.fn.transition !== J && w.transition("is supported") ? i.transition({
              animation: n + " in",
              debug: p.debug,
              verbose: p.verbose,
              duration: p.duration,
              queue: !0,
              onStart: o,
              onComplete: function () {
                e.call(z);
              }
            }) : g.error(f.noTransition, n));
          },
          hide: function (e, t) {
            var n = t || F,
                i = (t ? p.duration : p.duration, t ? function () {} : function () {
              g.can.click() && g.unbind.intent(), g.remove.active();
            }),
                o = g.get.transition(t);
            e = Y.isFunction(e) ? e : function () {}, (g.is.visible(n) || g.is.animating(n)) && (g.verbose("Doing menu hide animation", n), "none" == o ? (i(), n.transition("hide"), e.call(z)) : Y.fn.transition !== J && w.transition("is supported") ? n.transition({
              animation: o + " out",
              duration: p.duration,
              debug: p.debug,
              verbose: p.verbose,
              queue: !1,
              onStart: i,
              onComplete: function () {
                e.call(z);
              }
            }) : g.error(f.transition));
          }
        },
        hideAndClear: function () {
          g.remove.searchTerm(), g.has.maxSelections() || (g.has.search() ? g.hide(function () {
            g.remove.filteredItem();
          }) : g.hide());
        },
        delay: {
          show: function () {
            g.verbose("Delaying show event to ensure user intent"), clearTimeout(g.timer), g.timer = setTimeout(g.show, p.delay.show);
          },
          hide: function () {
            g.verbose("Delaying hide event to ensure user intent"), clearTimeout(g.timer), g.timer = setTimeout(g.hide, p.delay.hide);
          }
        },
        escape: {
          value: function (e) {
            var t = Y.isArray(e),
                n = "string" == typeof e,
                i = !n && !t,
                o = n && -1 !== e.search(d.quote),
                a = [];
            return i || !o ? e : (g.debug("Encoding quote values for use in select", e), t ? (Y.each(e, function (e, t) {
              a.push(t.replace(d.quote, "&quot;"));
            }), a) : e.replace(d.quote, "&quot;"));
          },
          string: function (e) {
            return (e = String(e)).replace(d.escape, "\\$&");
          }
        },
        setting: function (e, t) {
          if (g.debug("Changing setting", e, t), Y.isPlainObject(e)) Y.extend(!0, p, e);else {
            if (t === J) return p[e];
            Y.isPlainObject(p[e]) ? Y.extend(!0, p[e], t) : p[e] = t;
          }
        },
        internal: function (e, t) {
          if (Y.isPlainObject(e)) Y.extend(!0, g, e);else {
            if (t === J) return g[e];
            g[e] = t;
          }
        },
        debug: function () {
          !p.silent && p.debug && (p.performance ? g.performance.log(arguments) : (g.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), g.debug.apply(console, arguments)));
        },
        verbose: function () {
          !p.silent && p.verbose && p.debug && (p.performance ? g.performance.log(arguments) : (g.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), g.verbose.apply(console, arguments)));
        },
        error: function () {
          p.silent || (g.error = Function.prototype.bind.call(console.error, console, p.name + ":"), g.error.apply(console, arguments));
        },
        performance: {
          log: function (e) {
            var t, n;
            p.performance && (n = (t = new Date().getTime()) - (W || t), W = t, B.push({
              Name: e[0],
              Arguments: [].slice.call(e, 1) || "",
              Element: z,
              "Execution Time": n
            })), clearTimeout(g.performance.timer), g.performance.timer = setTimeout(g.performance.display, 500);
          },
          display: function () {
            var e = p.name + ":",
                n = 0;
            W = !1, clearTimeout(g.performance.timer), Y.each(B, function (e, t) {
              n += t["Execution Time"];
            }), e += " " + n + "ms", H && (e += " '" + H + "'"), (console.group !== J || console.table !== J) && 0 < B.length && (console.groupCollapsed(e), console.table ? console.table(B) : Y.each(B, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), B = [];
          }
        },
        invoke: function (i, e, t) {
          var o,
              a,
              n,
              r = I;
          return e = e || $, t = z || t, "string" == typeof i && r !== J && (i = i.split(/[\. ]/), o = i.length - 1, Y.each(i, function (e, t) {
            var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
            if (Y.isPlainObject(r[n]) && e != o) r = r[n];else {
              if (r[n] !== J) return a = r[n], !1;
              if (!Y.isPlainObject(r[t]) || e == o) return r[t] !== J ? a = r[t] : g.error(f.method, i), !1;
              r = r[t];
            }
          })), Y.isFunction(a) ? n = a.apply(t, e) : a !== J && (n = a), Y.isArray(L) ? L.push(n) : L !== J ? L = [L, n] : n !== J && (L = n), a;
        }
      }, X ? (I === J && g.initialize(), g.invoke(Q)) : (I !== J && I.invoke("destroy"), g.initialize());
    }), L !== J ? L : V;
  }, Y.fn.dropdown.settings = {
    silent: !1,
    debug: !1,
    verbose: !1,
    performance: !0,
    on: "click",
    action: "activate",
    values: !1,
    clearable: !1,
    apiSettings: !1,
    selectOnKeydown: !0,
    minCharacters: 0,
    filterRemoteData: !1,
    saveRemoteData: !0,
    throttle: 200,
    context: Z,
    direction: "auto",
    keepOnScreen: !0,
    match: "both",
    fullTextSearch: !1,
    placeholder: "auto",
    preserveHTML: !0,
    sortSelect: !1,
    forceSelection: !0,
    allowAdditions: !1,
    ignoreCase: !1,
    hideAdditions: !0,
    maxSelections: !1,
    useLabels: !0,
    delimiter: ",",
    showOnFocus: !0,
    allowReselection: !1,
    allowTab: !0,
    allowCategorySelection: !1,
    fireOnInit: !1,
    transition: "auto",
    duration: 200,
    glyphWidth: 1.037,
    label: {
      transition: "scale",
      duration: 200,
      variation: !1
    },
    delay: {
      hide: 300,
      show: 200,
      search: 20,
      touch: 50
    },
    onChange: function (e, t, n) {},
    onAdd: function (e, t, n) {},
    onRemove: function (e, t, n) {},
    onLabelSelect: function (e) {},
    onLabelCreate: function (e, t) {
      return Y(this);
    },
    onLabelRemove: function (e) {
      return !0;
    },
    onNoResults: function (e) {
      return !0;
    },
    onShow: function () {},
    onHide: function () {},
    name: "Dropdown",
    namespace: "dropdown",
    message: {
      addResult: "Add <b>{term}</b>",
      count: "{count} selected",
      maxSelections: "Max {maxCount} selections",
      noResults: "No results found.",
      serverError: "There was an error contacting the server"
    },
    error: {
      action: "You called a dropdown action that was not defined",
      alreadySetup: "Once a select has been initialized behaviors must be called on the created ui dropdown",
      labels: "Allowing user additions currently requires the use of labels.",
      missingMultiple: "<select> requires multiple property to be set to correctly preserve multiple values",
      method: "The method you called is not defined.",
      noAPI: "The API module is required to load resources remotely",
      noStorage: "Saving remote data requires session storage",
      noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>"
    },
    regExp: {
      escape: /[-[\]{}()*+?.,\\^$|#\s]/g,
      quote: /"/g
    },
    metadata: {
      defaultText: "defaultText",
      defaultValue: "defaultValue",
      placeholderText: "placeholder",
      text: "text",
      value: "value"
    },
    fields: {
      remoteValues: "results",
      values: "values",
      disabled: "disabled",
      name: "name",
      value: "value",
      text: "text"
    },
    keys: {
      backspace: 8,
      delimiter: 188,
      deleteKey: 46,
      enter: 13,
      escape: 27,
      pageUp: 33,
      pageDown: 34,
      leftArrow: 37,
      upArrow: 38,
      rightArrow: 39,
      downArrow: 40
    },
    selector: {
      addition: ".addition",
      dropdown: ".ui.dropdown",
      hidden: ".hidden",
      icon: "> .dropdown.icon",
      input: '> input[type="hidden"], > select',
      item: ".item",
      label: "> .label",
      remove: "> .label > .delete.icon",
      siblingLabel: ".label",
      menu: ".menu",
      message: ".message",
      menuIcon: ".dropdown.icon",
      search: "input.search, .menu > .search > input, .menu input.search",
      sizer: "> input.sizer",
      text: "> .text:not(.icon)",
      unselectable: ".disabled, .filtered"
    },
    className: {
      active: "active",
      addition: "addition",
      animating: "animating",
      clear: "clear",
      disabled: "disabled",
      empty: "empty",
      dropdown: "ui dropdown",
      filtered: "filtered",
      hidden: "hidden transition",
      item: "item",
      label: "ui label",
      loading: "loading",
      menu: "menu",
      message: "message",
      multiple: "multiple",
      placeholder: "default",
      sizer: "sizer",
      search: "search",
      selected: "selected",
      selection: "selection",
      upward: "upward",
      leftward: "left",
      visible: "visible"
    }
  }, Y.fn.dropdown.settings.templates = {
    dropdown: function (e) {
      var t = e.placeholder || !1,
          n = (e.values, "");
      return n += '<i class="dropdown icon"></i>', e.placeholder ? n += '<div class="default text">' + t + "</div>" : n += '<div class="text"></div>', n += '<div class="menu">', Y.each(e.values, function (e, t) {
        n += t.disabled ? '<div class="disabled item" data-value="' + t.value + '">' + t.name + "</div>" : '<div class="item" data-value="' + t.value + '">' + t.name + "</div>";
      }), n += "</div>";
    },
    menu: function (e, o) {
      var t = e[o.values] || {},
          a = "";
      return Y.each(t, function (e, t) {
        var n = t[o.text] ? 'data-text="' + t[o.text] + '"' : "",
            i = t[o.disabled] ? "disabled " : "";
        a += '<div class="' + i + 'item" data-value="' + t[o.value] + '"' + n + ">", a += t[o.name], a += "</div>";
      }), a;
    },
    label: function (e, t) {
      return t + '<i class="delete icon"></i>';
    },
    message: function (e) {
      return e;
    },
    addition: function (e) {
      return e;
    }
  };
}(jQuery, window, document), function (k, T, e, A) {
  "use strict";

  T = void 0 !== T && T.Math == Math ? T : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), k.fn.embed = function (p) {
    var h,
        v = k(this),
        b = v.selector || "",
        y = new Date().getTime(),
        x = [],
        C = p,
        w = "string" == typeof C,
        S = [].slice.call(arguments, 1);
    return v.each(function () {
      var s,
          i = k.isPlainObject(p) ? k.extend(!0, {}, k.fn.embed.settings, p) : k.extend({}, k.fn.embed.settings),
          e = i.selector,
          t = i.className,
          o = i.sources,
          l = i.error,
          a = i.metadata,
          n = i.namespace,
          r = i.templates,
          c = "." + n,
          u = "module-" + n,
          d = (k(T), k(this)),
          f = (d.find(e.placeholder), d.find(e.icon), d.find(e.embed)),
          m = this,
          g = d.data(u);
      s = {
        initialize: function () {
          s.debug("Initializing embed"), s.determine.autoplay(), s.create(), s.bind.events(), s.instantiate();
        },
        instantiate: function () {
          s.verbose("Storing instance of module", s), g = s, d.data(u, s);
        },
        destroy: function () {
          s.verbose("Destroying previous instance of embed"), s.reset(), d.removeData(u).off(c);
        },
        refresh: function () {
          s.verbose("Refreshing selector cache"), d.find(e.placeholder), d.find(e.icon), f = d.find(e.embed);
        },
        bind: {
          events: function () {
            s.has.placeholder() && (s.debug("Adding placeholder events"), d.on("click" + c, e.placeholder, s.createAndShow).on("click" + c, e.icon, s.createAndShow));
          }
        },
        create: function () {
          s.get.placeholder() ? s.createPlaceholder() : s.createAndShow();
        },
        createPlaceholder: function (e) {
          var t = s.get.icon(),
              n = s.get.url();
          s.generate.embed(n);
          e = e || s.get.placeholder(), d.html(r.placeholder(e, t)), s.debug("Creating placeholder for embed", e, t);
        },
        createEmbed: function (e) {
          s.refresh(), e = e || s.get.url(), f = k("<div/>").addClass(t.embed).html(s.generate.embed(e)).appendTo(d), i.onCreate.call(m, e), s.debug("Creating embed object", f);
        },
        changeEmbed: function (e) {
          f.html(s.generate.embed(e));
        },
        createAndShow: function () {
          s.createEmbed(), s.show();
        },
        change: function (e, t, n) {
          s.debug("Changing video to ", e, t, n), d.data(a.source, e).data(a.id, t), n ? d.data(a.url, n) : d.removeData(a.url), s.has.embed() ? s.changeEmbed() : s.create();
        },
        reset: function () {
          s.debug("Clearing embed and showing placeholder"), s.remove.data(), s.remove.active(), s.remove.embed(), s.showPlaceholder(), i.onReset.call(m);
        },
        show: function () {
          s.debug("Showing embed"), s.set.active(), i.onDisplay.call(m);
        },
        hide: function () {
          s.debug("Hiding embed"), s.showPlaceholder();
        },
        showPlaceholder: function () {
          s.debug("Showing placeholder image"), s.remove.active(), i.onPlaceholderDisplay.call(m);
        },
        get: {
          id: function () {
            return i.id || d.data(a.id);
          },
          placeholder: function () {
            return i.placeholder || d.data(a.placeholder);
          },
          icon: function () {
            return i.icon ? i.icon : d.data(a.icon) !== A ? d.data(a.icon) : s.determine.icon();
          },
          source: function (e) {
            return i.source ? i.source : d.data(a.source) !== A ? d.data(a.source) : s.determine.source();
          },
          type: function () {
            var e = s.get.source();
            return o[e] !== A && o[e].type;
          },
          url: function () {
            return i.url ? i.url : d.data(a.url) !== A ? d.data(a.url) : s.determine.url();
          }
        },
        determine: {
          autoplay: function () {
            s.should.autoplay() && (i.autoplay = !0);
          },
          source: function (n) {
            var i = !1;
            return (n = n || s.get.url()) && k.each(o, function (e, t) {
              if (-1 !== n.search(t.domain)) return i = e, !1;
            }), i;
          },
          icon: function () {
            var e = s.get.source();
            return o[e] !== A && o[e].icon;
          },
          url: function () {
            var e,
                t = i.id || d.data(a.id),
                n = i.source || d.data(a.source);
            return (e = o[n] !== A && o[n].url.replace("{id}", t)) && d.data(a.url, e), e;
          }
        },
        set: {
          active: function () {
            d.addClass(t.active);
          }
        },
        remove: {
          data: function () {
            d.removeData(a.id).removeData(a.icon).removeData(a.placeholder).removeData(a.source).removeData(a.url);
          },
          active: function () {
            d.removeClass(t.active);
          },
          embed: function () {
            f.empty();
          }
        },
        encode: {
          parameters: function (e) {
            var t,
                n = [];

            for (t in e) n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));

            return n.join("&amp;");
          }
        },
        generate: {
          embed: function (e) {
            s.debug("Generating embed html");
            var t,
                n,
                i = s.get.source();
            return (e = s.get.url(e)) ? (n = s.generate.parameters(i), t = r.iframe(e, n)) : s.error(l.noURL, d), t;
          },
          parameters: function (e, t) {
            var n = o[e] && o[e].parameters !== A ? o[e].parameters(i) : {};
            return (t = t || i.parameters) && (n = k.extend({}, n, t)), n = i.onEmbed(n), s.encode.parameters(n);
          }
        },
        has: {
          embed: function () {
            return 0 < f.length;
          },
          placeholder: function () {
            return i.placeholder || d.data(a.placeholder);
          }
        },
        should: {
          autoplay: function () {
            return "auto" === i.autoplay ? i.placeholder || d.data(a.placeholder) !== A : i.autoplay;
          }
        },
        is: {
          video: function () {
            return "video" == s.get.type();
          }
        },
        setting: function (e, t) {
          if (s.debug("Changing setting", e, t), k.isPlainObject(e)) k.extend(!0, i, e);else {
            if (t === A) return i[e];
            k.isPlainObject(i[e]) ? k.extend(!0, i[e], t) : i[e] = t;
          }
        },
        internal: function (e, t) {
          if (k.isPlainObject(e)) k.extend(!0, s, e);else {
            if (t === A) return s[e];
            s[e] = t;
          }
        },
        debug: function () {
          !i.silent && i.debug && (i.performance ? s.performance.log(arguments) : (s.debug = Function.prototype.bind.call(console.info, console, i.name + ":"), s.debug.apply(console, arguments)));
        },
        verbose: function () {
          !i.silent && i.verbose && i.debug && (i.performance ? s.performance.log(arguments) : (s.verbose = Function.prototype.bind.call(console.info, console, i.name + ":"), s.verbose.apply(console, arguments)));
        },
        error: function () {
          i.silent || (s.error = Function.prototype.bind.call(console.error, console, i.name + ":"), s.error.apply(console, arguments));
        },
        performance: {
          log: function (e) {
            var t, n;
            i.performance && (n = (t = new Date().getTime()) - (y || t), y = t, x.push({
              Name: e[0],
              Arguments: [].slice.call(e, 1) || "",
              Element: m,
              "Execution Time": n
            })), clearTimeout(s.performance.timer), s.performance.timer = setTimeout(s.performance.display, 500);
          },
          display: function () {
            var e = i.name + ":",
                n = 0;
            y = !1, clearTimeout(s.performance.timer), k.each(x, function (e, t) {
              n += t["Execution Time"];
            }), e += " " + n + "ms", b && (e += " '" + b + "'"), 1 < v.length && (e += " (" + v.length + ")"), (console.group !== A || console.table !== A) && 0 < x.length && (console.groupCollapsed(e), console.table ? console.table(x) : k.each(x, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), x = [];
          }
        },
        invoke: function (i, e, t) {
          var o,
              a,
              n,
              r = g;
          return e = e || S, t = m || t, "string" == typeof i && r !== A && (i = i.split(/[\. ]/), o = i.length - 1, k.each(i, function (e, t) {
            var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
            if (k.isPlainObject(r[n]) && e != o) r = r[n];else {
              if (r[n] !== A) return a = r[n], !1;
              if (!k.isPlainObject(r[t]) || e == o) return r[t] !== A ? a = r[t] : s.error(l.method, i), !1;
              r = r[t];
            }
          })), k.isFunction(a) ? n = a.apply(t, e) : a !== A && (n = a), k.isArray(h) ? h.push(n) : h !== A ? h = [h, n] : n !== A && (h = n), a;
        }
      }, w ? (g === A && s.initialize(), s.invoke(C)) : (g !== A && g.invoke("destroy"), s.initialize());
    }), h !== A ? h : this;
  }, k.fn.embed.settings = {
    name: "Embed",
    namespace: "embed",
    silent: !1,
    debug: !1,
    verbose: !1,
    performance: !0,
    icon: !1,
    source: !1,
    url: !1,
    id: !1,
    autoplay: "auto",
    color: "#444444",
    hd: !0,
    brandedUI: !1,
    parameters: !1,
    onDisplay: function () {},
    onPlaceholderDisplay: function () {},
    onReset: function () {},
    onCreate: function (e) {},
    onEmbed: function (e) {
      return e;
    },
    metadata: {
      id: "id",
      icon: "icon",
      placeholder: "placeholder",
      source: "source",
      url: "url"
    },
    error: {
      noURL: "No URL specified",
      method: "The method you called is not defined"
    },
    className: {
      active: "active",
      embed: "embed"
    },
    selector: {
      embed: ".embed",
      placeholder: ".placeholder",
      icon: ".icon"
    },
    sources: {
      youtube: {
        name: "youtube",
        type: "video",
        icon: "video play",
        domain: "youtube.com",
        url: "//www.youtube.com/embed/{id}",
        parameters: function (e) {
          return {
            autohide: !e.brandedUI,
            autoplay: e.autoplay,
            color: e.color || A,
            hq: e.hd,
            jsapi: e.api,
            modestbranding: !e.brandedUI
          };
        }
      },
      vimeo: {
        name: "vimeo",
        type: "video",
        icon: "video play",
        domain: "vimeo.com",
        url: "//player.vimeo.com/video/{id}",
        parameters: function (e) {
          return {
            api: e.api,
            autoplay: e.autoplay,
            byline: e.brandedUI,
            color: e.color || A,
            portrait: e.brandedUI,
            title: e.brandedUI
          };
        }
      }
    },
    templates: {
      iframe: function (e, t) {
        var n = e;
        return t && (n += "?" + t), '<iframe src="' + n + '" width="100%" height="100%" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
      },
      placeholder: function (e, t) {
        var n = "";
        return t && (n += '<i class="' + t + ' icon"></i>'), e && (n += '<img class="placeholder" src="' + e + '">'), n;
      }
    },
    api: !1,
    onPause: function () {},
    onPlay: function () {},
    onStop: function () {}
  };
}(jQuery, window, document), function (j, z, I, M) {
  "use strict";

  z = void 0 !== z && z.Math == Math ? z : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), j.fn.modal = function (w) {
    var S,
        e = j(this),
        k = j(z),
        T = j(I),
        A = j("body"),
        R = e.selector || "",
        P = new Date().getTime(),
        E = [],
        F = w,
        O = "string" == typeof F,
        D = [].slice.call(arguments, 1),
        q = z.requestAnimationFrame || z.mozRequestAnimationFrame || z.webkitRequestAnimationFrame || z.msRequestAnimationFrame || function (e) {
      setTimeout(e, 0);
    };

    return e.each(function () {
      var n,
          i,
          e,
          o,
          a,
          t,
          r,
          s,
          l,
          c = j.isPlainObject(w) ? j.extend(!0, {}, j.fn.modal.settings, w) : j.extend({}, j.fn.modal.settings),
          u = c.selector,
          d = c.className,
          f = c.namespace,
          m = c.error,
          g = "." + f,
          p = "module-" + f,
          h = j(this),
          v = j(c.context),
          b = h.find(u.close),
          y = this,
          x = h.data(p),
          C = !1;
      l = {
        initialize: function () {
          l.verbose("Initializing dimmer", v), l.create.id(), l.create.dimmer(), l.refreshModals(), l.bind.events(), c.observeChanges && l.observeChanges(), l.instantiate();
        },
        instantiate: function () {
          l.verbose("Storing instance of modal"), x = l, h.data(p, x);
        },
        create: {
          dimmer: function () {
            var e = {
              debug: c.debug,
              variation: !c.centered && "top aligned",
              dimmerName: "modals"
            },
                t = j.extend(!0, e, c.dimmerSettings);
            j.fn.dimmer !== M ? (l.debug("Creating dimmer"), o = v.dimmer(t), c.detachable ? (l.verbose("Modal is detachable, moving content into dimmer"), o.dimmer("add content", h)) : l.set.undetached(), a = o.dimmer("get dimmer")) : l.error(m.dimmer);
          },
          id: function () {
            r = (Math.random().toString(16) + "000000000").substr(2, 8), t = "." + r, l.verbose("Creating unique id for element", r);
          }
        },
        destroy: function () {
          l.verbose("Destroying previous modal"), h.removeData(p).off(g), k.off(t), a.off(t), b.off(g), v.dimmer("destroy");
        },
        observeChanges: function () {
          "MutationObserver" in z && ((s = new MutationObserver(function (e) {
            l.debug("DOM tree modified, refreshing"), l.refresh();
          })).observe(y, {
            childList: !0,
            subtree: !0
          }), l.debug("Setting up mutation observer", s));
        },
        refresh: function () {
          l.remove.scrolling(), l.cacheSizes(), l.can.useFlex() || l.set.modalOffset(), l.set.screenHeight(), l.set.type();
        },
        refreshModals: function () {
          i = h.siblings(u.modal), n = i.add(h);
        },
        attachEvents: function (e, t) {
          var n = j(e);
          t = j.isFunction(l[t]) ? l[t] : l.toggle, 0 < n.length ? (l.debug("Attaching modal events to element", e, t), n.off(g).on("click" + g, t)) : l.error(m.notFound, e);
        },
        bind: {
          events: function () {
            l.verbose("Attaching events"), h.on("click" + g, u.close, l.event.close).on("click" + g, u.approve, l.event.approve).on("click" + g, u.deny, l.event.deny), k.on("resize" + t, l.event.resize);
          },
          scrollLock: function () {
            o.get(0).addEventListener("touchmove", l.event.preventScroll, {
              passive: !1
            });
          }
        },
        unbind: {
          scrollLock: function () {
            o.get(0).removeEventListener("touchmove", l.event.preventScroll, {
              passive: !1
            });
          }
        },
        get: {
          id: function () {
            return (Math.random().toString(16) + "000000000").substr(2, 8);
          }
        },
        event: {
          approve: function () {
            C || !1 === c.onApprove.call(y, j(this)) ? l.verbose("Approve callback returned false cancelling hide") : (C = !0, l.hide(function () {
              C = !1;
            }));
          },
          preventScroll: function (e) {
            e.preventDefault();
          },
          deny: function () {
            C || !1 === c.onDeny.call(y, j(this)) ? l.verbose("Deny callback returned false cancelling hide") : (C = !0, l.hide(function () {
              C = !1;
            }));
          },
          close: function () {
            l.hide();
          },
          click: function (e) {
            if (c.closable) {
              var t = 0 < j(e.target).closest(u.modal).length,
                  n = j.contains(I.documentElement, e.target);
              !t && n && l.is.active() && (l.debug("Dimmer clicked, hiding all modals"), l.remove.clickaway(), c.allowMultiple ? l.hide() : l.hideAll());
            } else l.verbose("Dimmer clicked but closable setting is disabled");
          },
          debounce: function (e, t) {
            clearTimeout(l.timer), l.timer = setTimeout(e, t);
          },
          keyboard: function (e) {
            27 == e.which && (c.closable ? (l.debug("Escape key pressed hiding modal"), l.hide()) : l.debug("Escape key pressed, but closable is set to false"), e.preventDefault());
          },
          resize: function () {
            o.dimmer("is active") && (l.is.animating() || l.is.active()) && q(l.refresh);
          }
        },
        toggle: function () {
          l.is.active() || l.is.animating() ? l.hide() : l.show();
        },
        show: function (e) {
          e = j.isFunction(e) ? e : function () {}, l.refreshModals(), l.set.dimmerSettings(), l.set.dimmerStyles(), l.showModal(e);
        },
        hide: function (e) {
          e = j.isFunction(e) ? e : function () {}, l.refreshModals(), l.hideModal(e);
        },
        showModal: function (e) {
          e = j.isFunction(e) ? e : function () {}, l.is.animating() || !l.is.active() ? (l.showDimmer(), l.cacheSizes(), l.can.useFlex() ? l.remove.legacy() : (l.set.legacy(), l.set.modalOffset(), l.debug("Using non-flex legacy modal positioning.")), l.set.screenHeight(), l.set.type(), l.set.clickaway(), !c.allowMultiple && l.others.active() ? l.hideOthers(l.showModal) : (c.allowMultiple && c.detachable && h.detach().appendTo(a), c.onShow.call(y), c.transition && j.fn.transition !== M && h.transition("is supported") ? (l.debug("Showing modal with css animations"), h.transition({
            debug: c.debug,
            animation: c.transition + " in",
            queue: c.queue,
            duration: c.duration,
            useFailSafe: !0,
            onComplete: function () {
              c.onVisible.apply(y), c.keyboardShortcuts && l.add.keyboardShortcuts(), l.save.focus(), l.set.active(), c.autofocus && l.set.autofocus(), e();
            }
          })) : l.error(m.noTransition))) : l.debug("Modal is already visible");
        },
        hideModal: function (e, t) {
          e = j.isFunction(e) ? e : function () {}, l.debug("Hiding modal"), !1 !== c.onHide.call(y, j(this)) ? (l.is.animating() || l.is.active()) && (c.transition && j.fn.transition !== M && h.transition("is supported") ? (l.remove.active(), h.transition({
            debug: c.debug,
            animation: c.transition + " out",
            queue: c.queue,
            duration: c.duration,
            useFailSafe: !0,
            onStart: function () {
              l.others.active() || t || l.hideDimmer(), c.keyboardShortcuts && l.remove.keyboardShortcuts();
            },
            onComplete: function () {
              c.onHidden.call(y), l.remove.dimmerStyles(), l.restore.focus(), e();
            }
          })) : l.error(m.noTransition)) : l.verbose("Hide callback returned false cancelling hide");
        },
        showDimmer: function () {
          o.dimmer("is animating") || !o.dimmer("is active") ? (l.debug("Showing dimmer"), o.dimmer("show")) : l.debug("Dimmer already visible");
        },
        hideDimmer: function () {
          o.dimmer("is animating") || o.dimmer("is active") ? (l.unbind.scrollLock(), o.dimmer("hide", function () {
            l.remove.clickaway(), l.remove.screenHeight();
          })) : l.debug("Dimmer is not visible cannot hide");
        },
        hideAll: function (e) {
          var t = n.filter("." + d.active + ", ." + d.animating);
          e = j.isFunction(e) ? e : function () {}, 0 < t.length && (l.debug("Hiding all visible modals"), l.hideDimmer(), t.modal("hide modal", e));
        },
        hideOthers: function (e) {
          var t = i.filter("." + d.active + ", ." + d.animating);
          e = j.isFunction(e) ? e : function () {}, 0 < t.length && (l.debug("Hiding other modals", i), t.modal("hide modal", e, !0));
        },
        others: {
          active: function () {
            return 0 < i.filter("." + d.active).length;
          },
          animating: function () {
            return 0 < i.filter("." + d.animating).length;
          }
        },
        add: {
          keyboardShortcuts: function () {
            l.verbose("Adding keyboard shortcuts"), T.on("keyup" + g, l.event.keyboard);
          }
        },
        save: {
          focus: function () {
            0 < j(I.activeElement).closest(h).length || (e = j(I.activeElement).blur());
          }
        },
        restore: {
          focus: function () {
            e && 0 < e.length && e.focus();
          }
        },
        remove: {
          active: function () {
            h.removeClass(d.active);
          },
          legacy: function () {
            h.removeClass(d.legacy);
          },
          clickaway: function () {
            a.off("click" + t);
          },
          dimmerStyles: function () {
            a.removeClass(d.inverted), o.removeClass(d.blurring);
          },
          bodyStyle: function () {
            "" === A.attr("style") && (l.verbose("Removing style attribute"), A.removeAttr("style"));
          },
          screenHeight: function () {
            l.debug("Removing page height"), A.css("height", "");
          },
          keyboardShortcuts: function () {
            l.verbose("Removing keyboard shortcuts"), T.off("keyup" + g);
          },
          scrolling: function () {
            o.removeClass(d.scrolling), h.removeClass(d.scrolling);
          }
        },
        cacheSizes: function () {
          h.addClass(d.loading);
          var e = h.prop("scrollHeight"),
              t = h.outerWidth(),
              n = h.outerHeight();
          l.cache !== M && 0 === n || (l.cache = {
            pageHeight: j(I).outerHeight(),
            width: t,
            height: n + c.offset,
            scrollHeight: e + c.offset,
            contextHeight: "body" == c.context ? j(z).height() : o.height()
          }, l.cache.topOffset = -l.cache.height / 2), h.removeClass(d.loading), l.debug("Caching modal and container sizes", l.cache);
        },
        can: {
          useFlex: function () {
            return "auto" == c.useFlex ? c.detachable && !l.is.ie() : c.useFlex;
          },
          fit: function () {
            var e = l.cache.contextHeight,
                t = l.cache.contextHeight / 2,
                n = l.cache.topOffset,
                i = l.cache.scrollHeight,
                o = l.cache.height,
                a = c.padding;
            return o < i ? t + n + i + a < e : o + 2 * a < e;
          }
        },
        is: {
          active: function () {
            return h.hasClass(d.active);
          },
          ie: function () {
            return !z.ActiveXObject && "ActiveXObject" in z || "ActiveXObject" in z;
          },
          animating: function () {
            return h.transition("is supported") ? h.transition("is animating") : h.is(":visible");
          },
          scrolling: function () {
            return o.hasClass(d.scrolling);
          },
          modernBrowser: function () {
            return !(z.ActiveXObject || "ActiveXObject" in z);
          }
        },
        set: {
          autofocus: function () {
            var e = h.find("[tabindex], :input").filter(":visible"),
                t = e.filter("[autofocus]"),
                n = 0 < t.length ? t.first() : e.first();
            0 < n.length && n.focus();
          },
          clickaway: function () {
            a.on("click" + t, l.event.click);
          },
          dimmerSettings: function () {
            if (j.fn.dimmer !== M) {
              var e = {
                debug: c.debug,
                dimmerName: "modals",
                closable: "auto",
                useFlex: l.can.useFlex(),
                variation: !c.centered && "top aligned",
                duration: {
                  show: c.duration,
                  hide: c.duration
                }
              },
                  t = j.extend(!0, e, c.dimmerSettings);
              c.inverted && (t.variation = t.variation !== M ? t.variation + " inverted" : "inverted"), v.dimmer("setting", t);
            } else l.error(m.dimmer);
          },
          dimmerStyles: function () {
            c.inverted ? a.addClass(d.inverted) : a.removeClass(d.inverted), c.blurring ? o.addClass(d.blurring) : o.removeClass(d.blurring);
          },
          modalOffset: function () {
            var e = l.cache.width,
                t = l.cache.height;
            h.css({
              marginTop: c.centered && l.can.fit() ? -t / 2 : 0,
              marginLeft: -e / 2
            }), l.verbose("Setting modal offset for legacy mode");
          },
          screenHeight: function () {
            l.can.fit() ? A.css("height", "") : (l.debug("Modal is taller than page content, resizing page height"), A.css("height", l.cache.height + 2 * c.padding));
          },
          active: function () {
            h.addClass(d.active);
          },
          scrolling: function () {
            o.addClass(d.scrolling), h.addClass(d.scrolling), l.unbind.scrollLock();
          },
          legacy: function () {
            h.addClass(d.legacy);
          },
          type: function () {
            l.can.fit() ? (l.verbose("Modal fits on screen"), l.others.active() || l.others.animating() || (l.remove.scrolling(), l.bind.scrollLock())) : (l.verbose("Modal cannot fit on screen setting to scrolling"), l.set.scrolling());
          },
          undetached: function () {
            o.addClass(d.undetached);
          }
        },
        setting: function (e, t) {
          if (l.debug("Changing setting", e, t), j.isPlainObject(e)) j.extend(!0, c, e);else {
            if (t === M) return c[e];
            j.isPlainObject(c[e]) ? j.extend(!0, c[e], t) : c[e] = t;
          }
        },
        internal: function (e, t) {
          if (j.isPlainObject(e)) j.extend(!0, l, e);else {
            if (t === M) return l[e];
            l[e] = t;
          }
        },
        debug: function () {
          !c.silent && c.debug && (c.performance ? l.performance.log(arguments) : (l.debug = Function.prototype.bind.call(console.info, console, c.name + ":"), l.debug.apply(console, arguments)));
        },
        verbose: function () {
          !c.silent && c.verbose && c.debug && (c.performance ? l.performance.log(arguments) : (l.verbose = Function.prototype.bind.call(console.info, console, c.name + ":"), l.verbose.apply(console, arguments)));
        },
        error: function () {
          c.silent || (l.error = Function.prototype.bind.call(console.error, console, c.name + ":"), l.error.apply(console, arguments));
        },
        performance: {
          log: function (e) {
            var t, n;
            c.performance && (n = (t = new Date().getTime()) - (P || t), P = t, E.push({
              Name: e[0],
              Arguments: [].slice.call(e, 1) || "",
              Element: y,
              "Execution Time": n
            })), clearTimeout(l.performance.timer), l.performance.timer = setTimeout(l.performance.display, 500);
          },
          display: function () {
            var e = c.name + ":",
                n = 0;
            P = !1, clearTimeout(l.performance.timer), j.each(E, function (e, t) {
              n += t["Execution Time"];
            }), e += " " + n + "ms", R && (e += " '" + R + "'"), (console.group !== M || console.table !== M) && 0 < E.length && (console.groupCollapsed(e), console.table ? console.table(E) : j.each(E, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), E = [];
          }
        },
        invoke: function (i, e, t) {
          var o,
              a,
              n,
              r = x;
          return e = e || D, t = y || t, "string" == typeof i && r !== M && (i = i.split(/[\. ]/), o = i.length - 1, j.each(i, function (e, t) {
            var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
            if (j.isPlainObject(r[n]) && e != o) r = r[n];else {
              if (r[n] !== M) return a = r[n], !1;
              if (!j.isPlainObject(r[t]) || e == o) return r[t] !== M && (a = r[t]), !1;
              r = r[t];
            }
          })), j.isFunction(a) ? n = a.apply(t, e) : a !== M && (n = a), j.isArray(S) ? S.push(n) : S !== M ? S = [S, n] : n !== M && (S = n), a;
        }
      }, O ? (x === M && l.initialize(), l.invoke(F)) : (x !== M && x.invoke("destroy"), l.initialize());
    }), S !== M ? S : this;
  }, j.fn.modal.settings = {
    name: "Modal",
    namespace: "modal",
    useFlex: "auto",
    offset: 0,
    silent: !1,
    debug: !1,
    verbose: !1,
    performance: !0,
    observeChanges: !1,
    allowMultiple: !1,
    detachable: !0,
    closable: !0,
    autofocus: !0,
    inverted: !1,
    blurring: !1,
    centered: !0,
    dimmerSettings: {
      closable: !1,
      useCSS: !0
    },
    keyboardShortcuts: !0,
    context: "body",
    queue: !1,
    duration: 500,
    transition: "scale",
    padding: 50,
    onShow: function () {},
    onVisible: function () {},
    onHide: function () {
      return !0;
    },
    onHidden: function () {},
    onApprove: function () {
      return !0;
    },
    onDeny: function () {
      return !0;
    },
    selector: {
      close: "> .close",
      approve: ".actions .positive, .actions .approve, .actions .ok",
      deny: ".actions .negative, .actions .deny, .actions .cancel",
      modal: ".ui.modal"
    },
    error: {
      dimmer: "UI Dimmer, a required component is not included in this page",
      method: "The method you called is not defined.",
      notFound: "The element you specified could not be found"
    },
    className: {
      active: "active",
      animating: "animating",
      blurring: "blurring",
      inverted: "inverted",
      legacy: "legacy",
      loading: "loading",
      scrolling: "scrolling",
      undetached: "undetached"
    }
  };
}(jQuery, window, document), function (y, x, e, C) {
  "use strict";

  x = void 0 !== x && x.Math == Math ? x : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), y.fn.nag = function (d) {
    var f,
        e = y(this),
        m = e.selector || "",
        g = new Date().getTime(),
        p = [],
        h = d,
        v = "string" == typeof h,
        b = [].slice.call(arguments, 1);
    return e.each(function () {
      var s,
          i = y.isPlainObject(d) ? y.extend(!0, {}, y.fn.nag.settings, d) : y.extend({}, y.fn.nag.settings),
          e = (i.className, i.selector),
          l = i.error,
          t = i.namespace,
          n = "." + t,
          o = t + "-module",
          a = y(this),
          r = (a.find(e.close), i.context ? y(i.context) : y("body")),
          c = this,
          u = a.data(o);
      x.requestAnimationFrame || x.mozRequestAnimationFrame || x.webkitRequestAnimationFrame || x.msRequestAnimationFrame;
      s = {
        initialize: function () {
          s.verbose("Initializing element"), a.on("click" + n, e.close, s.dismiss).data(o, s), i.detachable && a.parent()[0] !== r[0] && a.detach().prependTo(r), 0 < i.displayTime && setTimeout(s.hide, i.displayTime), s.show();
        },
        destroy: function () {
          s.verbose("Destroying instance"), a.removeData(o).off(n);
        },
        show: function () {
          s.should.show() && !a.is(":visible") && (s.debug("Showing nag", i.animation.show), "fade" == i.animation.show ? a.fadeIn(i.duration, i.easing) : a.slideDown(i.duration, i.easing));
        },
        hide: function () {
          s.debug("Showing nag", i.animation.hide), "fade" == i.animation.show ? a.fadeIn(i.duration, i.easing) : a.slideUp(i.duration, i.easing);
        },
        onHide: function () {
          s.debug("Removing nag", i.animation.hide), a.remove(), i.onHide && i.onHide();
        },
        dismiss: function (e) {
          i.storageMethod && s.storage.set(i.key, i.value), s.hide(), e.stopImmediatePropagation(), e.preventDefault();
        },
        should: {
          show: function () {
            return i.persist ? (s.debug("Persistent nag is set, can show nag"), !0) : s.storage.get(i.key) != i.value.toString() ? (s.debug("Stored value is not set, can show nag", s.storage.get(i.key)), !0) : (s.debug("Stored value is set, cannot show nag", s.storage.get(i.key)), !1);
          }
        },
        get: {
          storageOptions: function () {
            var e = {};
            return i.expires && (e.expires = i.expires), i.domain && (e.domain = i.domain), i.path && (e.path = i.path), e;
          }
        },
        clear: function () {
          s.storage.remove(i.key);
        },
        storage: {
          set: function (e, t) {
            var n = s.get.storageOptions();
            if ("localstorage" == i.storageMethod && x.localStorage !== C) x.localStorage.setItem(e, t), s.debug("Value stored using local storage", e, t);else if ("sessionstorage" == i.storageMethod && x.sessionStorage !== C) x.sessionStorage.setItem(e, t), s.debug("Value stored using session storage", e, t);else {
              if (y.cookie === C) return void s.error(l.noCookieStorage);
              y.cookie(e, t, n), s.debug("Value stored using cookie", e, t, n);
            }
          },
          get: function (e, t) {
            var n;
            return "localstorage" == i.storageMethod && x.localStorage !== C ? n = x.localStorage.getItem(e) : "sessionstorage" == i.storageMethod && x.sessionStorage !== C ? n = x.sessionStorage.getItem(e) : y.cookie !== C ? n = y.cookie(e) : s.error(l.noCookieStorage), "undefined" != n && "null" != n && n !== C && null !== n || (n = C), n;
          },
          remove: function (e) {
            var t = s.get.storageOptions();
            "localstorage" == i.storageMethod && x.localStorage !== C ? x.localStorage.removeItem(e) : "sessionstorage" == i.storageMethod && x.sessionStorage !== C ? x.sessionStorage.removeItem(e) : y.cookie !== C ? y.removeCookie(e, t) : s.error(l.noStorage);
          }
        },
        setting: function (e, t) {
          if (s.debug("Changing setting", e, t), y.isPlainObject(e)) y.extend(!0, i, e);else {
            if (t === C) return i[e];
            y.isPlainObject(i[e]) ? y.extend(!0, i[e], t) : i[e] = t;
          }
        },
        internal: function (e, t) {
          if (y.isPlainObject(e)) y.extend(!0, s, e);else {
            if (t === C) return s[e];
            s[e] = t;
          }
        },
        debug: function () {
          !i.silent && i.debug && (i.performance ? s.performance.log(arguments) : (s.debug = Function.prototype.bind.call(console.info, console, i.name + ":"), s.debug.apply(console, arguments)));
        },
        verbose: function () {
          !i.silent && i.verbose && i.debug && (i.performance ? s.performance.log(arguments) : (s.verbose = Function.prototype.bind.call(console.info, console, i.name + ":"), s.verbose.apply(console, arguments)));
        },
        error: function () {
          i.silent || (s.error = Function.prototype.bind.call(console.error, console, i.name + ":"), s.error.apply(console, arguments));
        },
        performance: {
          log: function (e) {
            var t, n;
            i.performance && (n = (t = new Date().getTime()) - (g || t), g = t, p.push({
              Name: e[0],
              Arguments: [].slice.call(e, 1) || "",
              Element: c,
              "Execution Time": n
            })), clearTimeout(s.performance.timer), s.performance.timer = setTimeout(s.performance.display, 500);
          },
          display: function () {
            var e = i.name + ":",
                n = 0;
            g = !1, clearTimeout(s.performance.timer), y.each(p, function (e, t) {
              n += t["Execution Time"];
            }), e += " " + n + "ms", m && (e += " '" + m + "'"), (console.group !== C || console.table !== C) && 0 < p.length && (console.groupCollapsed(e), console.table ? console.table(p) : y.each(p, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), p = [];
          }
        },
        invoke: function (i, e, t) {
          var o,
              a,
              n,
              r = u;
          return e = e || b, t = c || t, "string" == typeof i && r !== C && (i = i.split(/[\. ]/), o = i.length - 1, y.each(i, function (e, t) {
            var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
            if (y.isPlainObject(r[n]) && e != o) r = r[n];else {
              if (r[n] !== C) return a = r[n], !1;
              if (!y.isPlainObject(r[t]) || e == o) return r[t] !== C ? a = r[t] : s.error(l.method, i), !1;
              r = r[t];
            }
          })), y.isFunction(a) ? n = a.apply(t, e) : a !== C && (n = a), y.isArray(f) ? f.push(n) : f !== C ? f = [f, n] : n !== C && (f = n), a;
        }
      }, v ? (u === C && s.initialize(), s.invoke(h)) : (u !== C && u.invoke("destroy"), s.initialize());
    }), f !== C ? f : this;
  }, y.fn.nag.settings = {
    name: "Nag",
    silent: !1,
    debug: !1,
    verbose: !1,
    performance: !0,
    namespace: "Nag",
    persist: !1,
    displayTime: 0,
    animation: {
      show: "slide",
      hide: "slide"
    },
    context: !1,
    detachable: !1,
    expires: 30,
    domain: !1,
    path: "/",
    storageMethod: "cookie",
    key: "nag",
    value: "dismiss",
    error: {
      noCookieStorage: "$.cookie is not included. A storage solution is required.",
      noStorage: "Neither $.cookie or store is defined. A storage solution is required for storing state",
      method: "The method you called is not defined."
    },
    className: {
      bottom: "bottom",
      fixed: "fixed"
    },
    selector: {
      close: ".close.icon"
    },
    speed: 500,
    easing: "easeOutQuad",
    onHide: function () {}
  }, y.extend(y.easing, {
    easeOutQuad: function (e, t, n, i, o) {
      return -i * (t /= o) * (t - 2) + n;
    }
  });
}(jQuery, window, document), function (z, I, M, L) {
  "use strict";

  I = void 0 !== I && I.Math == Math ? I : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), z.fn.popup = function (k) {
    var T,
        e = z(this),
        A = z(M),
        R = z(I),
        P = z("body"),
        E = e.selector || "",
        F = new Date().getTime(),
        O = [],
        D = k,
        q = "string" == typeof D,
        j = [].slice.call(arguments, 1);
    return e.each(function () {
      var u,
          c,
          e,
          t,
          n,
          d,
          f = z.isPlainObject(k) ? z.extend(!0, {}, z.fn.popup.settings, k) : z.extend({}, z.fn.popup.settings),
          o = f.selector,
          m = f.className,
          g = f.error,
          p = f.metadata,
          i = f.namespace,
          a = "." + f.namespace,
          r = "module-" + i,
          h = z(this),
          s = z(f.context),
          l = z(f.scrollContext),
          v = z(f.boundary),
          b = f.target ? z(f.target) : h,
          y = 0,
          x = !1,
          C = !1,
          w = this,
          S = h.data(r);
      d = {
        initialize: function () {
          d.debug("Initializing", h), d.createID(), d.bind.events(), !d.exists() && f.preserve && d.create(), f.observeChanges && d.observeChanges(), d.instantiate();
        },
        instantiate: function () {
          d.verbose("Storing instance", d), S = d, h.data(r, S);
        },
        observeChanges: function () {
          "MutationObserver" in I && ((e = new MutationObserver(d.event.documentChanged)).observe(M, {
            childList: !0,
            subtree: !0
          }), d.debug("Setting up mutation observer", e));
        },
        refresh: function () {
          f.popup ? u = z(f.popup).eq(0) : f.inline && (u = b.nextAll(o.popup).eq(0), f.popup = u), f.popup ? (u.addClass(m.loading), c = d.get.offsetParent(), u.removeClass(m.loading), f.movePopup && d.has.popup() && d.get.offsetParent(u)[0] !== c[0] && (d.debug("Moving popup to the same offset parent as target"), u.detach().appendTo(c))) : c = f.inline ? d.get.offsetParent(b) : d.has.popup() ? d.get.offsetParent(u) : P, c.is("html") && c[0] !== P[0] && (d.debug("Setting page as offset parent"), c = P), d.get.variation() && d.set.variation();
        },
        reposition: function () {
          d.refresh(), d.set.position();
        },
        destroy: function () {
          d.debug("Destroying previous module"), e && e.disconnect(), u && !f.preserve && d.removePopup(), clearTimeout(d.hideTimer), clearTimeout(d.showTimer), d.unbind.close(), d.unbind.events(), h.removeData(r);
        },
        event: {
          start: function (e) {
            var t = z.isPlainObject(f.delay) ? f.delay.show : f.delay;
            clearTimeout(d.hideTimer), C || (d.showTimer = setTimeout(d.show, t));
          },
          end: function () {
            var e = z.isPlainObject(f.delay) ? f.delay.hide : f.delay;
            clearTimeout(d.showTimer), d.hideTimer = setTimeout(d.hide, e);
          },
          touchstart: function (e) {
            C = !0, d.show();
          },
          resize: function () {
            d.is.visible() && d.set.position();
          },
          documentChanged: function (e) {
            [].forEach.call(e, function (e) {
              e.removedNodes && [].forEach.call(e.removedNodes, function (e) {
                (e == w || 0 < z(e).find(w).length) && (d.debug("Element removed from DOM, tearing down events"), d.destroy());
              });
            });
          },
          hideGracefully: function (e) {
            var t = z(e.target),
                n = z.contains(M.documentElement, e.target),
                i = 0 < t.closest(o.popup).length;
            e && !i && n ? (d.debug("Click occurred outside popup hiding popup"), d.hide()) : d.debug("Click was inside popup, keeping popup open");
          }
        },
        create: function () {
          var e = d.get.html(),
              t = d.get.title(),
              n = d.get.content();
          e || n || t ? (d.debug("Creating pop-up html"), e || (e = f.templates.popup({
            title: t,
            content: n
          })), u = z("<div/>").addClass(m.popup).data(p.activator, h).html(e), f.inline ? (d.verbose("Inserting popup element inline", u), u.insertAfter(h)) : (d.verbose("Appending popup element to body", u), u.appendTo(s)), d.refresh(), d.set.variation(), f.hoverable && d.bind.popup(), f.onCreate.call(u, w)) : 0 !== b.next(o.popup).length ? (d.verbose("Pre-existing popup found"), f.inline = !0, f.popup = b.next(o.popup).data(p.activator, h), d.refresh(), f.hoverable && d.bind.popup()) : f.popup ? (z(f.popup).data(p.activator, h), d.verbose("Used popup specified in settings"), d.refresh(), f.hoverable && d.bind.popup()) : d.debug("No content specified skipping display", w);
        },
        createID: function () {
          n = (Math.random().toString(16) + "000000000").substr(2, 8), t = "." + n, d.verbose("Creating unique id for element", n);
        },
        toggle: function () {
          d.debug("Toggling pop-up"), d.is.hidden() ? (d.debug("Popup is hidden, showing pop-up"), d.unbind.close(), d.show()) : (d.debug("Popup is visible, hiding pop-up"), d.hide());
        },
        show: function (e) {
          if (e = e || function () {}, d.debug("Showing pop-up", f.transition), d.is.hidden() && (!d.is.active() || !d.is.dropdown())) {
            if (d.exists() || d.create(), !1 === f.onShow.call(u, w)) return void d.debug("onShow callback returned false, cancelling popup animation");
            f.preserve || f.popup || d.refresh(), u && d.set.position() && (d.save.conditions(), f.exclusive && d.hideAll(), d.animate.show(e));
          }
        },
        hide: function (e) {
          if (e = e || function () {}, d.is.visible() || d.is.animating()) {
            if (!1 === f.onHide.call(u, w)) return void d.debug("onHide callback returned false, cancelling popup animation");
            d.remove.visible(), d.unbind.close(), d.restore.conditions(), d.animate.hide(e);
          }
        },
        hideAll: function () {
          z(o.popup).filter("." + m.popupVisible).each(function () {
            z(this).data(p.activator).popup("hide");
          });
        },
        exists: function () {
          return !!u && (f.inline || f.popup ? d.has.popup() : 1 <= u.closest(s).length);
        },
        removePopup: function () {
          d.has.popup() && !f.popup && (d.debug("Removing popup", u), u.remove(), u = L, f.onRemove.call(u, w));
        },
        save: {
          conditions: function () {
            d.cache = {
              title: h.attr("title")
            }, d.cache.title && h.removeAttr("title"), d.verbose("Saving original attributes", d.cache.title);
          }
        },
        restore: {
          conditions: function () {
            return d.cache && d.cache.title && (h.attr("title", d.cache.title), d.verbose("Restoring original attributes", d.cache.title)), !0;
          }
        },
        supports: {
          svg: function () {
            return "undefined" == typeof SVGGraphicsElement;
          }
        },
        animate: {
          show: function (e) {
            e = z.isFunction(e) ? e : function () {}, f.transition && z.fn.transition !== L && h.transition("is supported") ? (d.set.visible(), u.transition({
              animation: f.transition + " in",
              queue: !1,
              debug: f.debug,
              verbose: f.verbose,
              duration: f.duration,
              onComplete: function () {
                d.bind.close(), e.call(u, w), f.onVisible.call(u, w);
              }
            })) : d.error(g.noTransition);
          },
          hide: function (e) {
            e = z.isFunction(e) ? e : function () {}, d.debug("Hiding pop-up"), !1 !== f.onHide.call(u, w) ? f.transition && z.fn.transition !== L && h.transition("is supported") ? u.transition({
              animation: f.transition + " out",
              queue: !1,
              duration: f.duration,
              debug: f.debug,
              verbose: f.verbose,
              onComplete: function () {
                d.reset(), e.call(u, w), f.onHidden.call(u, w);
              }
            }) : d.error(g.noTransition) : d.debug("onHide callback returned false, cancelling popup animation");
          }
        },
        change: {
          content: function (e) {
            u.html(e);
          }
        },
        get: {
          html: function () {
            return h.removeData(p.html), h.data(p.html) || f.html;
          },
          title: function () {
            return h.removeData(p.title), h.data(p.title) || f.title;
          },
          content: function () {
            return h.removeData(p.content), h.data(p.content) || f.content || h.attr("title");
          },
          variation: function () {
            return h.removeData(p.variation), h.data(p.variation) || f.variation;
          },
          popup: function () {
            return u;
          },
          popupOffset: function () {
            return u.offset();
          },
          calculations: function () {
            var e,
                t = d.get.offsetParent(u),
                n = b[0],
                i = v[0] == I,
                o = f.inline || f.popup && f.movePopup ? b.position() : b.offset(),
                a = i ? {
              top: 0,
              left: 0
            } : v.offset(),
                r = {},
                s = i ? {
              top: R.scrollTop(),
              left: R.scrollLeft()
            } : {
              top: 0,
              left: 0
            };

            if (r = {
              target: {
                element: b[0],
                width: b.outerWidth(),
                height: b.outerHeight(),
                top: o.top,
                left: o.left,
                margin: {}
              },
              popup: {
                width: u.outerWidth(),
                height: u.outerHeight()
              },
              parent: {
                width: c.outerWidth(),
                height: c.outerHeight()
              },
              screen: {
                top: a.top,
                left: a.left,
                scroll: {
                  top: s.top,
                  left: s.left
                },
                width: v.width(),
                height: v.height()
              }
            }, t.get(0) !== c.get(0)) {
              var l = t.offset();
              r.target.top -= l.top, r.target.left -= l.left, r.parent.width = t.outerWidth(), r.parent.height = t.outerHeight();
            }

            return f.setFluidWidth && d.is.fluid() && (r.container = {
              width: u.parent().outerWidth()
            }, r.popup.width = r.container.width), r.target.margin.top = f.inline ? parseInt(I.getComputedStyle(n).getPropertyValue("margin-top"), 10) : 0, r.target.margin.left = f.inline ? d.is.rtl() ? parseInt(I.getComputedStyle(n).getPropertyValue("margin-right"), 10) : parseInt(I.getComputedStyle(n).getPropertyValue("margin-left"), 10) : 0, e = r.screen, r.boundary = {
              top: e.top + e.scroll.top,
              bottom: e.top + e.scroll.top + e.height,
              left: e.left + e.scroll.left,
              right: e.left + e.scroll.left + e.width
            }, r;
          },
          id: function () {
            return n;
          },
          startEvent: function () {
            return "hover" == f.on ? "mouseenter" : "focus" == f.on && "focus";
          },
          scrollEvent: function () {
            return "scroll";
          },
          endEvent: function () {
            return "hover" == f.on ? "mouseleave" : "focus" == f.on && "blur";
          },
          distanceFromBoundary: function (e, t) {
            var n,
                i,
                o = {};
            return n = (t = t || d.get.calculations()).popup, i = t.boundary, e && (o = {
              top: e.top - i.top,
              left: e.left - i.left,
              right: i.right - (e.left + n.width),
              bottom: i.bottom - (e.top + n.height)
            }, d.verbose("Distance from boundaries determined", e, o)), o;
          },
          offsetParent: function (e) {
            var t = (e !== L ? e[0] : b[0]).parentNode,
                n = z(t);
            if (t) for (var i = "none" === n.css("transform"), o = "static" === n.css("position"), a = n.is("body"); t && !a && o && i;) t = t.parentNode, i = "none" === (n = z(t)).css("transform"), o = "static" === n.css("position"), a = n.is("body");
            return n && 0 < n.length ? n : z();
          },
          positions: function () {
            return {
              "top left": !1,
              "top center": !1,
              "top right": !1,
              "bottom left": !1,
              "bottom center": !1,
              "bottom right": !1,
              "left center": !1,
              "right center": !1
            };
          },
          nextPosition: function (e) {
            var t = e.split(" "),
                n = t[0],
                i = t[1],
                o = "top" == n || "bottom" == n,
                a = !1,
                r = !1,
                s = !1;
            return x || (d.verbose("All available positions available"), x = d.get.positions()), d.debug("Recording last position tried", e), x[e] = !0, "opposite" === f.prefer && (s = (s = [{
              top: "bottom",
              bottom: "top",
              left: "right",
              right: "left"
            }[n], i]).join(" "), a = !0 === x[s], d.debug("Trying opposite strategy", s)), "adjacent" === f.prefer && o && (s = (s = [n, {
              left: "center",
              center: "right",
              right: "left"
            }[i]]).join(" "), r = !0 === x[s], d.debug("Trying adjacent strategy", s)), (r || a) && (d.debug("Using backup position", s), s = {
              "top left": "top center",
              "top center": "top right",
              "top right": "right center",
              "right center": "bottom right",
              "bottom right": "bottom center",
              "bottom center": "bottom left",
              "bottom left": "left center",
              "left center": "top left"
            }[e]), s;
          }
        },
        set: {
          position: function (e, t) {
            if (0 !== b.length && 0 !== u.length) {
              var n, i, o, a, r, s, l, c;
              if (t = t || d.get.calculations(), e = e || h.data(p.position) || f.position, n = h.data(p.offset) || f.offset, i = f.distanceAway, o = t.target, a = t.popup, r = t.parent, d.should.centerArrow(t) && (d.verbose("Adjusting offset to center arrow on small target element"), "top left" != e && "bottom left" != e || (n += o.width / 2, n -= f.arrowPixelsFromEdge), "top right" != e && "bottom right" != e || (n -= o.width / 2, n += f.arrowPixelsFromEdge)), 0 === o.width && 0 === o.height && !d.is.svg(o.element)) return d.debug("Popup target is hidden, no action taken"), !1;

              switch (f.inline && (d.debug("Adding margin to calculation", o.margin), "left center" == e || "right center" == e ? (n += o.margin.top, i += -o.margin.left) : "top left" == e || "top center" == e || "top right" == e ? (n += o.margin.left, i -= o.margin.top) : (n += o.margin.left, i += o.margin.top)), d.debug("Determining popup position from calculations", e, t), d.is.rtl() && (e = e.replace(/left|right/g, function (e) {
                return "left" == e ? "right" : "left";
              }), d.debug("RTL: Popup position updated", e)), y == f.maxSearchDepth && "string" == typeof f.lastResort && (e = f.lastResort), e) {
                case "top left":
                  s = {
                    top: "auto",
                    bottom: r.height - o.top + i,
                    left: o.left + n,
                    right: "auto"
                  };
                  break;

                case "top center":
                  s = {
                    bottom: r.height - o.top + i,
                    left: o.left + o.width / 2 - a.width / 2 + n,
                    top: "auto",
                    right: "auto"
                  };
                  break;

                case "top right":
                  s = {
                    bottom: r.height - o.top + i,
                    right: r.width - o.left - o.width - n,
                    top: "auto",
                    left: "auto"
                  };
                  break;

                case "left center":
                  s = {
                    top: o.top + o.height / 2 - a.height / 2 + n,
                    right: r.width - o.left + i,
                    left: "auto",
                    bottom: "auto"
                  };
                  break;

                case "right center":
                  s = {
                    top: o.top + o.height / 2 - a.height / 2 + n,
                    left: o.left + o.width + i,
                    bottom: "auto",
                    right: "auto"
                  };
                  break;

                case "bottom left":
                  s = {
                    top: o.top + o.height + i,
                    left: o.left + n,
                    bottom: "auto",
                    right: "auto"
                  };
                  break;

                case "bottom center":
                  s = {
                    top: o.top + o.height + i,
                    left: o.left + o.width / 2 - a.width / 2 + n,
                    bottom: "auto",
                    right: "auto"
                  };
                  break;

                case "bottom right":
                  s = {
                    top: o.top + o.height + i,
                    right: r.width - o.left - o.width - n,
                    left: "auto",
                    bottom: "auto"
                  };
              }

              if (s === L && d.error(g.invalidPosition, e), d.debug("Calculated popup positioning values", s), u.css(s).removeClass(m.position).addClass(e).addClass(m.loading), l = d.get.popupOffset(), c = d.get.distanceFromBoundary(l, t), d.is.offstage(c, e)) {
                if (d.debug("Position is outside viewport", e), y < f.maxSearchDepth) return y++, e = d.get.nextPosition(e), d.debug("Trying new position", e), !!u && d.set.position(e, t);
                if (!f.lastResort) return d.debug("Popup could not find a position to display", u), d.error(g.cannotPlace, w), d.remove.attempts(), d.remove.loading(), d.reset(), f.onUnplaceable.call(u, w), !1;
                d.debug("No position found, showing with last position");
              }

              return d.debug("Position is on stage", e), d.remove.attempts(), d.remove.loading(), f.setFluidWidth && d.is.fluid() && d.set.fluidWidth(t), !0;
            }

            d.error(g.notFound);
          },
          fluidWidth: function (e) {
            e = e || d.get.calculations(), d.debug("Automatically setting element width to parent width", e.parent.width), u.css("width", e.container.width);
          },
          variation: function (e) {
            (e = e || d.get.variation()) && d.has.popup() && (d.verbose("Adding variation to popup", e), u.addClass(e));
          },
          visible: function () {
            h.addClass(m.visible);
          }
        },
        remove: {
          loading: function () {
            u.removeClass(m.loading);
          },
          variation: function (e) {
            (e = e || d.get.variation()) && (d.verbose("Removing variation", e), u.removeClass(e));
          },
          visible: function () {
            h.removeClass(m.visible);
          },
          attempts: function () {
            d.verbose("Resetting all searched positions"), y = 0, x = !1;
          }
        },
        bind: {
          events: function () {
            d.debug("Binding popup events to module"), "click" == f.on && h.on("click" + a, d.toggle), "hover" == f.on && h.on("touchstart" + a, d.event.touchstart), d.get.startEvent() && h.on(d.get.startEvent() + a, d.event.start).on(d.get.endEvent() + a, d.event.end), f.target && d.debug("Target set to element", b), R.on("resize" + t, d.event.resize);
          },
          popup: function () {
            d.verbose("Allowing hover events on popup to prevent closing"), u && d.has.popup() && u.on("mouseenter" + a, d.event.start).on("mouseleave" + a, d.event.end);
          },
          close: function () {
            (!0 === f.hideOnScroll || "auto" == f.hideOnScroll && "click" != f.on) && d.bind.closeOnScroll(), d.is.closable() ? d.bind.clickaway() : "hover" == f.on && C && d.bind.touchClose();
          },
          closeOnScroll: function () {
            d.verbose("Binding scroll close event to document"), l.one(d.get.scrollEvent() + t, d.event.hideGracefully);
          },
          touchClose: function () {
            d.verbose("Binding popup touchclose event to document"), A.on("touchstart" + t, function (e) {
              d.verbose("Touched away from popup"), d.event.hideGracefully.call(w, e);
            });
          },
          clickaway: function () {
            d.verbose("Binding popup close event to document"), A.on("click" + t, function (e) {
              d.verbose("Clicked away from popup"), d.event.hideGracefully.call(w, e);
            });
          }
        },
        unbind: {
          events: function () {
            R.off(t), h.off(a);
          },
          close: function () {
            A.off(t), l.off(t);
          }
        },
        has: {
          popup: function () {
            return u && 0 < u.length;
          }
        },
        should: {
          centerArrow: function (e) {
            return !d.is.basic() && e.target.width <= 2 * f.arrowPixelsFromEdge;
          }
        },
        is: {
          closable: function () {
            return "auto" == f.closable ? "hover" != f.on : f.closable;
          },
          offstage: function (e, n) {
            var i = [];
            return z.each(e, function (e, t) {
              t < -f.jitter && (d.debug("Position exceeds allowable distance from edge", e, t, n), i.push(e));
            }), 0 < i.length;
          },
          svg: function (e) {
            return d.supports.svg() && e instanceof SVGGraphicsElement;
          },
          basic: function () {
            return h.hasClass(m.basic);
          },
          active: function () {
            return h.hasClass(m.active);
          },
          animating: function () {
            return u !== L && u.hasClass(m.animating);
          },
          fluid: function () {
            return u !== L && u.hasClass(m.fluid);
          },
          visible: function () {
            return u !== L && u.hasClass(m.popupVisible);
          },
          dropdown: function () {
            return h.hasClass(m.dropdown);
          },
          hidden: function () {
            return !d.is.visible();
          },
          rtl: function () {
            return "rtl" == h.css("direction");
          }
        },
        reset: function () {
          d.remove.visible(), f.preserve ? z.fn.transition !== L && u.transition("remove transition") : d.removePopup();
        },
        setting: function (e, t) {
          if (z.isPlainObject(e)) z.extend(!0, f, e);else {
            if (t === L) return f[e];
            f[e] = t;
          }
        },
        internal: function (e, t) {
          if (z.isPlainObject(e)) z.extend(!0, d, e);else {
            if (t === L) return d[e];
            d[e] = t;
          }
        },
        debug: function () {
          !f.silent && f.debug && (f.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), d.debug.apply(console, arguments)));
        },
        verbose: function () {
          !f.silent && f.verbose && f.debug && (f.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), d.verbose.apply(console, arguments)));
        },
        error: function () {
          f.silent || (d.error = Function.prototype.bind.call(console.error, console, f.name + ":"), d.error.apply(console, arguments));
        },
        performance: {
          log: function (e) {
            var t, n;
            f.performance && (n = (t = new Date().getTime()) - (F || t), F = t, O.push({
              Name: e[0],
              Arguments: [].slice.call(e, 1) || "",
              Element: w,
              "Execution Time": n
            })), clearTimeout(d.performance.timer), d.performance.timer = setTimeout(d.performance.display, 500);
          },
          display: function () {
            var e = f.name + ":",
                n = 0;
            F = !1, clearTimeout(d.performance.timer), z.each(O, function (e, t) {
              n += t["Execution Time"];
            }), e += " " + n + "ms", E && (e += " '" + E + "'"), (console.group !== L || console.table !== L) && 0 < O.length && (console.groupCollapsed(e), console.table ? console.table(O) : z.each(O, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), O = [];
          }
        },
        invoke: function (i, e, t) {
          var o,
              a,
              n,
              r = S;
          return e = e || j, t = w || t, "string" == typeof i && r !== L && (i = i.split(/[\. ]/), o = i.length - 1, z.each(i, function (e, t) {
            var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
            if (z.isPlainObject(r[n]) && e != o) r = r[n];else {
              if (r[n] !== L) return a = r[n], !1;
              if (!z.isPlainObject(r[t]) || e == o) return r[t] !== L && (a = r[t]), !1;
              r = r[t];
            }
          })), z.isFunction(a) ? n = a.apply(t, e) : a !== L && (n = a), z.isArray(T) ? T.push(n) : T !== L ? T = [T, n] : n !== L && (T = n), a;
        }
      }, q ? (S === L && d.initialize(), d.invoke(D)) : (S !== L && S.invoke("destroy"), d.initialize());
    }), T !== L ? T : this;
  }, z.fn.popup.settings = {
    name: "Popup",
    silent: !1,
    debug: !1,
    verbose: !1,
    performance: !0,
    namespace: "popup",
    observeChanges: !0,
    onCreate: function () {},
    onRemove: function () {},
    onShow: function () {},
    onVisible: function () {},
    onHide: function () {},
    onUnplaceable: function () {},
    onHidden: function () {},
    on: "hover",
    boundary: I,
    addTouchEvents: !0,
    position: "top left",
    variation: "",
    movePopup: !0,
    target: !1,
    popup: !1,
    inline: !1,
    preserve: !1,
    hoverable: !1,
    content: !1,
    html: !1,
    title: !1,
    closable: !0,
    hideOnScroll: "auto",
    exclusive: !1,
    context: "body",
    scrollContext: I,
    prefer: "opposite",
    lastResort: !1,
    arrowPixelsFromEdge: 20,
    delay: {
      show: 50,
      hide: 70
    },
    setFluidWidth: !0,
    duration: 200,
    transition: "scale",
    distanceAway: 0,
    jitter: 2,
    offset: 0,
    maxSearchDepth: 15,
    error: {
      invalidPosition: "The position you specified is not a valid position",
      cannotPlace: "Popup does not fit within the boundaries of the viewport",
      method: "The method you called is not defined.",
      noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",
      notFound: "The target or popup you specified does not exist on the page"
    },
    metadata: {
      activator: "activator",
      content: "content",
      html: "html",
      offset: "offset",
      position: "position",
      title: "title",
      variation: "variation"
    },
    className: {
      active: "active",
      basic: "basic",
      animating: "animating",
      dropdown: "dropdown",
      fluid: "fluid",
      loading: "loading",
      popup: "ui popup",
      position: "top left center bottom right",
      visible: "visible",
      popupVisible: "visible"
    },
    selector: {
      popup: ".ui.popup"
    },
    templates: {
      escape: function (e) {
        var t = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "`": "&#x60;"
        };
        return /[&<>"'`]/.test(e) ? e.replace(/[&<>"'`]/g, function (e) {
          return t[e];
        }) : e;
      },
      popup: function (e) {
        var t = "",
            n = z.fn.popup.settings.templates.escape;
        return typeof e !== L && (typeof e.title !== L && e.title && (e.title = n(e.title), t += '<div class="header">' + e.title + "</div>"), typeof e.content !== L && e.content && (e.content = n(e.content), t += '<div class="content">' + e.content + "</div>")), t;
      }
    }
  };
}(jQuery, window, document), function (k, e, T, A) {
  "use strict";

  void 0 !== (e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")()) && e.Math == Math || ("undefined" != typeof self && self.Math == Math ? self : Function("return this")());
  k.fn.progress = function (h) {
    var v,
        e = k(this),
        b = e.selector || "",
        y = new Date().getTime(),
        x = [],
        C = h,
        w = "string" == typeof C,
        S = [].slice.call(arguments, 1);
    return e.each(function () {
      var s,
          i = k.isPlainObject(h) ? k.extend(!0, {}, k.fn.progress.settings, h) : k.extend({}, k.fn.progress.settings),
          t = i.className,
          n = i.metadata,
          e = i.namespace,
          o = i.selector,
          l = i.error,
          a = "." + e,
          r = "module-" + e,
          c = k(this),
          u = k(this).find(o.bar),
          d = k(this).find(o.progress),
          f = k(this).find(o.label),
          m = this,
          g = c.data(r),
          p = !1;
      s = {
        initialize: function () {
          s.debug("Initializing progress bar", i), s.set.duration(), s.set.transitionEvent(), s.read.metadata(), s.read.settings(), s.instantiate();
        },
        instantiate: function () {
          s.verbose("Storing instance of progress", s), g = s, c.data(r, s);
        },
        destroy: function () {
          s.verbose("Destroying previous progress for", c), clearInterval(g.interval), s.remove.state(), c.removeData(r), g = A;
        },
        reset: function () {
          s.remove.nextValue(), s.update.progress(0);
        },
        complete: function () {
          (s.percent === A || s.percent < 100) && (s.remove.progressPoll(), s.set.percent(100));
        },
        read: {
          metadata: function () {
            var e = {
              percent: c.data(n.percent),
              total: c.data(n.total),
              value: c.data(n.value)
            };
            e.percent && (s.debug("Current percent value set from metadata", e.percent), s.set.percent(e.percent)), e.total && (s.debug("Total value set from metadata", e.total), s.set.total(e.total)), e.value && (s.debug("Current value set from metadata", e.value), s.set.value(e.value), s.set.progress(e.value));
          },
          settings: function () {
            !1 !== i.total && (s.debug("Current total set in settings", i.total), s.set.total(i.total)), !1 !== i.value && (s.debug("Current value set in settings", i.value), s.set.value(i.value), s.set.progress(s.value)), !1 !== i.percent && (s.debug("Current percent set in settings", i.percent), s.set.percent(i.percent));
          }
        },
        bind: {
          transitionEnd: function (t) {
            var e = s.get.transitionEnd();
            u.one(e + a, function (e) {
              clearTimeout(s.failSafeTimer), t.call(this, e);
            }), s.failSafeTimer = setTimeout(function () {
              u.triggerHandler(e);
            }, i.duration + i.failSafeDelay), s.verbose("Adding fail safe timer", s.timer);
          }
        },
        increment: function (e) {
          var t, n;
          s.has.total() ? n = (t = s.get.value()) + (e = e || 1) : (n = (t = s.get.percent()) + (e = e || s.get.randomValue()), s.debug("Incrementing percentage by", t, n)), n = s.get.normalizedValue(n), s.set.progress(n);
        },
        decrement: function (e) {
          var t, n;
          s.get.total() ? (n = (t = s.get.value()) - (e = e || 1), s.debug("Decrementing value by", e, t)) : (n = (t = s.get.percent()) - (e = e || s.get.randomValue()), s.debug("Decrementing percentage by", e, t)), n = s.get.normalizedValue(n), s.set.progress(n);
        },
        has: {
          progressPoll: function () {
            return s.progressPoll;
          },
          total: function () {
            return !1 !== s.get.total();
          }
        },
        get: {
          text: function (e) {
            var t = s.value || 0,
                n = s.total || 0,
                i = p ? s.get.displayPercent() : s.percent || 0,
                o = 0 < s.total ? n - t : 100 - i;
            return e = (e = e || "").replace("{value}", t).replace("{total}", n).replace("{left}", o).replace("{percent}", i), s.verbose("Adding variables to progress bar text", e), e;
          },
          normalizedValue: function (e) {
            if (e < 0) return s.debug("Value cannot decrement below 0"), 0;

            if (s.has.total()) {
              if (e > s.total) return s.debug("Value cannot increment above total", s.total), s.total;
            } else if (100 < e) return s.debug("Value cannot increment above 100 percent"), 100;

            return e;
          },
          updateInterval: function () {
            return "auto" == i.updateInterval ? i.duration : i.updateInterval;
          },
          randomValue: function () {
            return s.debug("Generating random increment percentage"), Math.floor(Math.random() * i.random.max + i.random.min);
          },
          numericValue: function (e) {
            return "string" == typeof e ? "" !== e.replace(/[^\d.]/g, "") && +e.replace(/[^\d.]/g, "") : e;
          },
          transitionEnd: function () {
            var e,
                t = T.createElement("element"),
                n = {
              transition: "transitionend",
              OTransition: "oTransitionEnd",
              MozTransition: "transitionend",
              WebkitTransition: "webkitTransitionEnd"
            };

            for (e in n) if (t.style[e] !== A) return n[e];
          },
          displayPercent: function () {
            var e = u.width(),
                t = c.width(),
                n = parseInt(u.css("min-width"), 10) < e ? e / t * 100 : s.percent;
            return 0 < i.precision ? Math.round(n * (10 * i.precision)) / (10 * i.precision) : Math.round(n);
          },
          percent: function () {
            return s.percent || 0;
          },
          value: function () {
            return s.nextValue || s.value || 0;
          },
          total: function () {
            return s.total || !1;
          }
        },
        create: {
          progressPoll: function () {
            s.progressPoll = setTimeout(function () {
              s.update.toNextValue(), s.remove.progressPoll();
            }, s.get.updateInterval());
          }
        },
        is: {
          complete: function () {
            return s.is.success() || s.is.warning() || s.is.error();
          },
          success: function () {
            return c.hasClass(t.success);
          },
          warning: function () {
            return c.hasClass(t.warning);
          },
          error: function () {
            return c.hasClass(t.error);
          },
          active: function () {
            return c.hasClass(t.active);
          },
          visible: function () {
            return c.is(":visible");
          }
        },
        remove: {
          progressPoll: function () {
            s.verbose("Removing progress poll timer"), s.progressPoll && (clearTimeout(s.progressPoll), delete s.progressPoll);
          },
          nextValue: function () {
            s.verbose("Removing progress value stored for next update"), delete s.nextValue;
          },
          state: function () {
            s.verbose("Removing stored state"), delete s.total, delete s.percent, delete s.value;
          },
          active: function () {
            s.verbose("Removing active state"), c.removeClass(t.active);
          },
          success: function () {
            s.verbose("Removing success state"), c.removeClass(t.success);
          },
          warning: function () {
            s.verbose("Removing warning state"), c.removeClass(t.warning);
          },
          error: function () {
            s.verbose("Removing error state"), c.removeClass(t.error);
          }
        },
        set: {
          barWidth: function (e) {
            100 < e ? s.error(l.tooHigh, e) : e < 0 ? s.error(l.tooLow, e) : (u.css("width", e + "%"), c.attr("data-percent", parseInt(e, 10)));
          },
          duration: function (e) {
            e = "number" == typeof (e = e || i.duration) ? e + "ms" : e, s.verbose("Setting progress bar transition duration", e), u.css({
              "transition-duration": e
            });
          },
          percent: function (e) {
            e = "string" == typeof e ? +e.replace("%", "") : e, e = 0 < i.precision ? Math.round(e * (10 * i.precision)) / (10 * i.precision) : Math.round(e), s.percent = e, s.has.total() || (s.value = 0 < i.precision ? Math.round(e / 100 * s.total * (10 * i.precision)) / (10 * i.precision) : Math.round(e / 100 * s.total * 10) / 10, i.limitValues && (s.value = 100 < s.value ? 100 : s.value < 0 ? 0 : s.value)), s.set.barWidth(e), s.set.labelInterval(), s.set.labels(), i.onChange.call(m, e, s.value, s.total);
          },
          labelInterval: function () {
            clearInterval(s.interval), s.bind.transitionEnd(function () {
              s.verbose("Bar finished animating, removing continuous label updates"), clearInterval(s.interval), p = !1, s.set.labels();
            }), p = !0, s.interval = setInterval(function () {
              k.contains(T.documentElement, m) || (clearInterval(s.interval), p = !1), s.set.labels();
            }, i.framerate);
          },
          labels: function () {
            s.verbose("Setting both bar progress and outer label text"), s.set.barLabel(), s.set.state();
          },
          label: function (e) {
            (e = e || "") && (e = s.get.text(e), s.verbose("Setting label to text", e), f.text(e));
          },
          state: function (e) {
            100 === (e = e !== A ? e : s.percent) ? i.autoSuccess && !(s.is.warning() || s.is.error() || s.is.success()) ? (s.set.success(), s.debug("Automatically triggering success at 100%")) : (s.verbose("Reached 100% removing active state"), s.remove.active(), s.remove.progressPoll()) : 0 < e ? (s.verbose("Adjusting active progress bar label", e), s.set.active()) : (s.remove.active(), s.set.label(i.text.active));
          },
          barLabel: function (e) {
            e !== A ? d.text(s.get.text(e)) : "ratio" == i.label && s.total ? (s.verbose("Adding ratio to bar label"), d.text(s.get.text(i.text.ratio))) : "percent" == i.label && (s.verbose("Adding percentage to bar label"), d.text(s.get.text(i.text.percent)));
          },
          active: function (e) {
            e = e || i.text.active, s.debug("Setting active state"), i.showActivity && !s.is.active() && c.addClass(t.active), s.remove.warning(), s.remove.error(), s.remove.success(), (e = i.onLabelUpdate("active", e, s.value, s.total)) && s.set.label(e), s.bind.transitionEnd(function () {
              i.onActive.call(m, s.value, s.total);
            });
          },
          success: function (e) {
            e = e || i.text.success || i.text.active, s.debug("Setting success state"), c.addClass(t.success), s.remove.active(), s.remove.warning(), s.remove.error(), s.complete(), e = i.text.success ? i.onLabelUpdate("success", e, s.value, s.total) : i.onLabelUpdate("active", e, s.value, s.total), s.set.label(e), s.bind.transitionEnd(function () {
              i.onSuccess.call(m, s.total);
            });
          },
          warning: function (e) {
            e = e || i.text.warning, s.debug("Setting warning state"), c.addClass(t.warning), s.remove.active(), s.remove.success(), s.remove.error(), s.complete(), (e = i.onLabelUpdate("warning", e, s.value, s.total)) && s.set.label(e), s.bind.transitionEnd(function () {
              i.onWarning.call(m, s.value, s.total);
            });
          },
          error: function (e) {
            e = e || i.text.error, s.debug("Setting error state"), c.addClass(t.error), s.remove.active(), s.remove.success(), s.remove.warning(), s.complete(), (e = i.onLabelUpdate("error", e, s.value, s.total)) && s.set.label(e), s.bind.transitionEnd(function () {
              i.onError.call(m, s.value, s.total);
            });
          },
          transitionEvent: function () {
            s.get.transitionEnd();
          },
          total: function (e) {
            s.total = e;
          },
          value: function (e) {
            s.value = e;
          },
          progress: function (e) {
            s.has.progressPoll() ? (s.debug("Updated within interval, setting next update to use new value", e), s.set.nextValue(e)) : (s.debug("First update in progress update interval, immediately updating", e), s.update.progress(e), s.create.progressPoll());
          },
          nextValue: function (e) {
            s.nextValue = e;
          }
        },
        update: {
          toNextValue: function () {
            var e = s.nextValue;
            e && (s.debug("Update interval complete using last updated value", e), s.update.progress(e), s.remove.nextValue());
          },
          progress: function (e) {
            var t;
            !1 === (e = s.get.numericValue(e)) && s.error(l.nonNumeric, e), e = s.get.normalizedValue(e), s.has.total() ? (s.set.value(e), t = e / s.total * 100, s.debug("Calculating percent complete from total", t)) : (t = e, s.debug("Setting value to exact percentage value", t)), s.set.percent(t);
          }
        },
        setting: function (e, t) {
          if (s.debug("Changing setting", e, t), k.isPlainObject(e)) k.extend(!0, i, e);else {
            if (t === A) return i[e];
            k.isPlainObject(i[e]) ? k.extend(!0, i[e], t) : i[e] = t;
          }
        },
        internal: function (e, t) {
          if (k.isPlainObject(e)) k.extend(!0, s, e);else {
            if (t === A) return s[e];
            s[e] = t;
          }
        },
        debug: function () {
          !i.silent && i.debug && (i.performance ? s.performance.log(arguments) : (s.debug = Function.prototype.bind.call(console.info, console, i.name + ":"), s.debug.apply(console, arguments)));
        },
        verbose: function () {
          !i.silent && i.verbose && i.debug && (i.performance ? s.performance.log(arguments) : (s.verbose = Function.prototype.bind.call(console.info, console, i.name + ":"), s.verbose.apply(console, arguments)));
        },
        error: function () {
          i.silent || (s.error = Function.prototype.bind.call(console.error, console, i.name + ":"), s.error.apply(console, arguments));
        },
        performance: {
          log: function (e) {
            var t, n;
            i.performance && (n = (t = new Date().getTime()) - (y || t), y = t, x.push({
              Name: e[0],
              Arguments: [].slice.call(e, 1) || "",
              Element: m,
              "Execution Time": n
            })), clearTimeout(s.performance.timer), s.performance.timer = setTimeout(s.performance.display, 500);
          },
          display: function () {
            var e = i.name + ":",
                n = 0;
            y = !1, clearTimeout(s.performance.timer), k.each(x, function (e, t) {
              n += t["Execution Time"];
            }), e += " " + n + "ms", b && (e += " '" + b + "'"), (console.group !== A || console.table !== A) && 0 < x.length && (console.groupCollapsed(e), console.table ? console.table(x) : k.each(x, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), x = [];
          }
        },
        invoke: function (i, e, t) {
          var o,
              a,
              n,
              r = g;
          return e = e || S, t = m || t, "string" == typeof i && r !== A && (i = i.split(/[\. ]/), o = i.length - 1, k.each(i, function (e, t) {
            var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
            if (k.isPlainObject(r[n]) && e != o) r = r[n];else {
              if (r[n] !== A) return a = r[n], !1;
              if (!k.isPlainObject(r[t]) || e == o) return r[t] !== A ? a = r[t] : s.error(l.method, i), !1;
              r = r[t];
            }
          })), k.isFunction(a) ? n = a.apply(t, e) : a !== A && (n = a), k.isArray(v) ? v.push(n) : v !== A ? v = [v, n] : n !== A && (v = n), a;
        }
      }, w ? (g === A && s.initialize(), s.invoke(C)) : (g !== A && g.invoke("destroy"), s.initialize());
    }), v !== A ? v : this;
  }, k.fn.progress.settings = {
    name: "Progress",
    namespace: "progress",
    silent: !1,
    debug: !1,
    verbose: !1,
    performance: !0,
    random: {
      min: 2,
      max: 5
    },
    duration: 300,
    updateInterval: "auto",
    autoSuccess: !0,
    showActivity: !0,
    limitValues: !0,
    label: "percent",
    precision: 0,
    framerate: 1e3 / 30,
    percent: !1,
    total: !1,
    value: !1,
    failSafeDelay: 100,
    onLabelUpdate: function (e, t, n, i) {
      return t;
    },
    onChange: function (e, t, n) {},
    onSuccess: function (e) {},
    onActive: function (e, t) {},
    onError: function (e, t) {},
    onWarning: function (e, t) {},
    error: {
      method: "The method you called is not defined.",
      nonNumeric: "Progress value is non numeric",
      tooHigh: "Value specified is above 100%",
      tooLow: "Value specified is below 0%"
    },
    regExp: {
      variable: /\{\$*[A-z0-9]+\}/g
    },
    metadata: {
      percent: "percent",
      total: "total",
      value: "value"
    },
    selector: {
      bar: "> .bar",
      label: "> .label",
      progress: ".bar > .progress"
    },
    text: {
      active: !1,
      error: !1,
      success: !1,
      warning: !1,
      percent: "{percent}%",
      ratio: "{value} of {total}"
    },
    className: {
      active: "active",
      error: "error",
      success: "success",
      warning: "warning"
    }
  };
}(jQuery, window, document), function (w, e, t, S) {
  "use strict";

  e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), w.fn.rating = function (m) {
    var g,
        p = w(this),
        h = p.selector || "",
        v = new Date().getTime(),
        b = [],
        y = m,
        x = "string" == typeof y,
        C = [].slice.call(arguments, 1);
    return p.each(function () {
      var e,
          i,
          o = w.isPlainObject(m) ? w.extend(!0, {}, w.fn.rating.settings, m) : w.extend({}, w.fn.rating.settings),
          t = o.namespace,
          a = o.className,
          n = o.metadata,
          r = o.selector,
          s = (o.error, "." + t),
          l = "module-" + t,
          c = this,
          u = w(this).data(l),
          d = w(this),
          f = d.find(r.icon);
      i = {
        initialize: function () {
          i.verbose("Initializing rating module", o), 0 === f.length && i.setup.layout(), o.interactive ? i.enable() : i.disable(), i.set.initialLoad(), i.set.rating(i.get.initialRating()), i.remove.initialLoad(), i.instantiate();
        },
        instantiate: function () {
          i.verbose("Instantiating module", o), u = i, d.data(l, i);
        },
        destroy: function () {
          i.verbose("Destroying previous instance", u), i.remove.events(), d.removeData(l);
        },
        refresh: function () {
          f = d.find(r.icon);
        },
        setup: {
          layout: function () {
            var e = i.get.maxRating(),
                t = w.fn.rating.settings.templates.icon(e);
            i.debug("Generating icon html dynamically"), d.html(t), i.refresh();
          }
        },
        event: {
          mouseenter: function () {
            var e = w(this);
            e.nextAll().removeClass(a.selected), d.addClass(a.selected), e.addClass(a.selected).prevAll().addClass(a.selected);
          },
          mouseleave: function () {
            d.removeClass(a.selected), f.removeClass(a.selected);
          },
          click: function () {
            var e = w(this),
                t = i.get.rating(),
                n = f.index(e) + 1;
            ("auto" == o.clearable ? 1 === f.length : o.clearable) && t == n ? i.clearRating() : i.set.rating(n);
          }
        },
        clearRating: function () {
          i.debug("Clearing current rating"), i.set.rating(0);
        },
        bind: {
          events: function () {
            i.verbose("Binding events"), d.on("mouseenter" + s, r.icon, i.event.mouseenter).on("mouseleave" + s, r.icon, i.event.mouseleave).on("click" + s, r.icon, i.event.click);
          }
        },
        remove: {
          events: function () {
            i.verbose("Removing events"), d.off(s);
          },
          initialLoad: function () {
            e = !1;
          }
        },
        enable: function () {
          i.debug("Setting rating to interactive mode"), i.bind.events(), d.removeClass(a.disabled);
        },
        disable: function () {
          i.debug("Setting rating to read-only mode"), i.remove.events(), d.addClass(a.disabled);
        },
        is: {
          initialLoad: function () {
            return e;
          }
        },
        get: {
          initialRating: function () {
            return d.data(n.rating) !== S ? (d.removeData(n.rating), d.data(n.rating)) : o.initialRating;
          },
          maxRating: function () {
            return d.data(n.maxRating) !== S ? (d.removeData(n.maxRating), d.data(n.maxRating)) : o.maxRating;
          },
          rating: function () {
            var e = f.filter("." + a.active).length;
            return i.verbose("Current rating retrieved", e), e;
          }
        },
        set: {
          rating: function (e) {
            var t = 0 <= e - 1 ? e - 1 : 0,
                n = f.eq(t);
            d.removeClass(a.selected), f.removeClass(a.selected).removeClass(a.active), 0 < e && (i.verbose("Setting current rating to", e), n.prevAll().addBack().addClass(a.active)), i.is.initialLoad() || o.onRate.call(c, e);
          },
          initialLoad: function () {
            e = !0;
          }
        },
        setting: function (e, t) {
          if (i.debug("Changing setting", e, t), w.isPlainObject(e)) w.extend(!0, o, e);else {
            if (t === S) return o[e];
            w.isPlainObject(o[e]) ? w.extend(!0, o[e], t) : o[e] = t;
          }
        },
        internal: function (e, t) {
          if (w.isPlainObject(e)) w.extend(!0, i, e);else {
            if (t === S) return i[e];
            i[e] = t;
          }
        },
        debug: function () {
          !o.silent && o.debug && (o.performance ? i.performance.log(arguments) : (i.debug = Function.prototype.bind.call(console.info, console, o.name + ":"), i.debug.apply(console, arguments)));
        },
        verbose: function () {
          !o.silent && o.verbose && o.debug && (o.performance ? i.performance.log(arguments) : (i.verbose = Function.prototype.bind.call(console.info, console, o.name + ":"), i.verbose.apply(console, arguments)));
        },
        error: function () {
          o.silent || (i.error = Function.prototype.bind.call(console.error, console, o.name + ":"), i.error.apply(console, arguments));
        },
        performance: {
          log: function (e) {
            var t, n;
            o.performance && (n = (t = new Date().getTime()) - (v || t), v = t, b.push({
              Name: e[0],
              Arguments: [].slice.call(e, 1) || "",
              Element: c,
              "Execution Time": n
            })), clearTimeout(i.performance.timer), i.performance.timer = setTimeout(i.performance.display, 500);
          },
          display: function () {
            var e = o.name + ":",
                n = 0;
            v = !1, clearTimeout(i.performance.timer), w.each(b, function (e, t) {
              n += t["Execution Time"];
            }), e += " " + n + "ms", h && (e += " '" + h + "'"), 1 < p.length && (e += " (" + p.length + ")"), (console.group !== S || console.table !== S) && 0 < b.length && (console.groupCollapsed(e), console.table ? console.table(b) : w.each(b, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), b = [];
          }
        },
        invoke: function (i, e, t) {
          var o,
              a,
              n,
              r = u;
          return e = e || C, t = c || t, "string" == typeof i && r !== S && (i = i.split(/[\. ]/), o = i.length - 1, w.each(i, function (e, t) {
            var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
            if (w.isPlainObject(r[n]) && e != o) r = r[n];else {
              if (r[n] !== S) return a = r[n], !1;
              if (!w.isPlainObject(r[t]) || e == o) return r[t] !== S && (a = r[t]), !1;
              r = r[t];
            }
          })), w.isFunction(a) ? n = a.apply(t, e) : a !== S && (n = a), w.isArray(g) ? g.push(n) : g !== S ? g = [g, n] : n !== S && (g = n), a;
        }
      }, x ? (u === S && i.initialize(), i.invoke(y)) : (u !== S && u.invoke("destroy"), i.initialize());
    }), g !== S ? g : this;
  }, w.fn.rating.settings = {
    name: "Rating",
    namespace: "rating",
    slent: !1,
    debug: !1,
    verbose: !1,
    performance: !0,
    initialRating: 0,
    interactive: !0,
    maxRating: 4,
    clearable: "auto",
    fireOnInit: !1,
    onRate: function (e) {},
    error: {
      method: "The method you called is not defined",
      noMaximum: "No maximum rating specified. Cannot generate HTML automatically"
    },
    metadata: {
      rating: "rating",
      maxRating: "maxRating"
    },
    className: {
      active: "active",
      disabled: "disabled",
      selected: "selected",
      loading: "loading"
    },
    selector: {
      icon: ".icon"
    },
    templates: {
      icon: function (e) {
        for (var t = 1, n = ""; t <= e;) n += '<i class="icon"></i>', t++;

        return n;
      }
    }
  };
}(jQuery, window, document), function (E, F, O, D) {
  "use strict";

  F = void 0 !== F && F.Math == Math ? F : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), E.fn.search = function (l) {
    var C,
        w = E(this),
        S = w.selector || "",
        k = new Date().getTime(),
        T = [],
        A = l,
        R = "string" == typeof A,
        P = [].slice.call(arguments, 1);
    return E(this).each(function () {
      var f,
          c = E.isPlainObject(l) ? E.extend(!0, {}, E.fn.search.settings, l) : E.extend({}, E.fn.search.settings),
          m = c.className,
          u = c.metadata,
          d = c.regExp,
          a = c.fields,
          g = c.selector,
          p = c.error,
          e = c.namespace,
          i = "." + e,
          t = e + "-module",
          h = E(this),
          v = h.find(g.prompt),
          n = h.find(g.searchButton),
          o = h.find(g.results),
          r = h.find(g.result),
          b = (h.find(g.category), this),
          s = h.data(t),
          y = !1,
          x = !1;
      f = {
        initialize: function () {
          f.verbose("Initializing module"), f.get.settings(), f.determine.searchFields(), f.bind.events(), f.set.type(), f.create.results(), f.instantiate();
        },
        instantiate: function () {
          f.verbose("Storing instance of module", f), s = f, h.data(t, f);
        },
        destroy: function () {
          f.verbose("Destroying instance"), h.off(i).removeData(t);
        },
        refresh: function () {
          f.debug("Refreshing selector cache"), v = h.find(g.prompt), n = h.find(g.searchButton), h.find(g.category), o = h.find(g.results), r = h.find(g.result);
        },
        refreshResults: function () {
          o = h.find(g.results), r = h.find(g.result);
        },
        bind: {
          events: function () {
            f.verbose("Binding events to search"), c.automatic && (h.on(f.get.inputEvent() + i, g.prompt, f.event.input), v.attr("autocomplete", "off")), h.on("focus" + i, g.prompt, f.event.focus).on("blur" + i, g.prompt, f.event.blur).on("keydown" + i, g.prompt, f.handleKeyboard).on("click" + i, g.searchButton, f.query).on("mousedown" + i, g.results, f.event.result.mousedown).on("mouseup" + i, g.results, f.event.result.mouseup).on("click" + i, g.result, f.event.result.click);
          }
        },
        determine: {
          searchFields: function () {
            l && l.searchFields !== D && (c.searchFields = l.searchFields);
          }
        },
        event: {
          input: function () {
            c.searchDelay ? (clearTimeout(f.timer), f.timer = setTimeout(function () {
              f.is.focused() && f.query();
            }, c.searchDelay)) : f.query();
          },
          focus: function () {
            f.set.focus(), c.searchOnFocus && f.has.minimumCharacters() && f.query(function () {
              f.can.show() && f.showResults();
            });
          },
          blur: function (e) {
            function t() {
              f.cancel.query(), f.remove.focus(), f.timer = setTimeout(f.hideResults, c.hideDelay);
            }

            var n = O.activeElement === this;
            n || (x = !1, f.resultsClicked ? (f.debug("Determining if user action caused search to close"), h.one("click.close" + i, g.results, function (e) {
              f.is.inMessage(e) || y ? v.focus() : (y = !1, f.is.animating() || f.is.hidden() || t());
            })) : (f.debug("Input blurred without user action, closing results"), t()));
          },
          result: {
            mousedown: function () {
              f.resultsClicked = !0;
            },
            mouseup: function () {
              f.resultsClicked = !1;
            },
            click: function (e) {
              f.debug("Search result selected");
              var t = E(this),
                  n = t.find(g.title).eq(0),
                  i = t.is("a[href]") ? t : t.find("a[href]").eq(0),
                  o = i.attr("href") || !1,
                  a = i.attr("target") || !1,
                  r = (n.html(), 0 < n.length && n.text()),
                  s = f.get.results(),
                  l = t.data(u.result) || f.get.result(r, s);
              if (E.isFunction(c.onSelect) && !1 === c.onSelect.call(b, l, s)) return f.debug("Custom onSelect callback cancelled default select action"), void (y = !0);
              f.hideResults(), r && f.set.value(r), o && (f.verbose("Opening search link found in result", i), "_blank" == a || e.ctrlKey ? F.open(o) : F.location.href = o);
            }
          }
        },
        handleKeyboard: function (e) {
          var t,
              n = h.find(g.result),
              i = h.find(g.category),
              o = n.filter("." + m.active),
              a = n.index(o),
              r = n.length,
              s = 0 < o.length,
              l = e.which,
              c = 13,
              u = 38,
              d = 40;
          if (l == 27 && (f.verbose("Escape key pressed, blurring search field"), f.hideResults(), x = !0), f.is.visible()) {
            if (l == c) {
              if (f.verbose("Enter key pressed, selecting active result"), 0 < n.filter("." + m.active).length) return f.event.result.click.call(n.filter("." + m.active), e), e.preventDefault(), !1;
            } else l == u && s ? (f.verbose("Up key pressed, changing active result"), t = a - 1 < 0 ? a : a - 1, i.removeClass(m.active), n.removeClass(m.active).eq(t).addClass(m.active).closest(i).addClass(m.active), e.preventDefault()) : l == d && (f.verbose("Down key pressed, changing active result"), t = r <= a + 1 ? a : a + 1, i.removeClass(m.active), n.removeClass(m.active).eq(t).addClass(m.active).closest(i).addClass(m.active), e.preventDefault());
          } else l == c && (f.verbose("Enter key pressed, executing query"), f.query(), f.set.buttonPressed(), v.one("keyup", f.remove.buttonFocus));
        },
        setup: {
          api: function (t, n) {
            var e = {
              debug: c.debug,
              on: !1,
              cache: c.cache,
              action: "search",
              urlData: {
                query: t
              },
              onSuccess: function (e) {
                f.parse.response.call(b, e, t), n();
              },
              onFailure: function () {
                f.displayMessage(p.serverError), n();
              },
              onAbort: function (e) {},
              onError: f.error
            };
            E.extend(!0, e, c.apiSettings), f.verbose("Setting up API request", e), h.api(e);
          }
        },
        can: {
          useAPI: function () {
            return E.fn.api !== D;
          },
          show: function () {
            return f.is.focused() && !f.is.visible() && !f.is.empty();
          },
          transition: function () {
            return c.transition && E.fn.transition !== D && h.transition("is supported");
          }
        },
        is: {
          animating: function () {
            return o.hasClass(m.animating);
          },
          hidden: function () {
            return o.hasClass(m.hidden);
          },
          inMessage: function (e) {
            if (e.target) {
              var t = E(e.target);
              return E.contains(O.documentElement, e.target) && 0 < t.closest(g.message).length;
            }
          },
          empty: function () {
            return "" === o.html();
          },
          visible: function () {
            return 0 < o.filter(":visible").length;
          },
          focused: function () {
            return 0 < v.filter(":focus").length;
          }
        },
        get: {
          settings: function () {
            E.isPlainObject(l) && l.searchFullText && (c.fullTextSearch = l.searchFullText, f.error(c.error.oldSearchSyntax, b));
          },
          inputEvent: function () {
            var e = v[0];
            return e !== D && e.oninput !== D ? "input" : e !== D && e.onpropertychange !== D ? "propertychange" : "keyup";
          },
          value: function () {
            return v.val();
          },
          results: function () {
            return h.data(u.results);
          },
          result: function (n, e) {
            var i = ["title", "id"],
                o = !1;
            return n = n !== D ? n : f.get.value(), e = e !== D ? e : f.get.results(), "category" === c.type ? (f.debug("Finding result that matches", n), E.each(e, function (e, t) {
              if (E.isArray(t.results) && (o = f.search.object(n, t.results, i)[0])) return !1;
            })) : (f.debug("Finding result in results object", n), o = f.search.object(n, e, i)[0]), o || !1;
          }
        },
        select: {
          firstResult: function () {
            f.verbose("Selecting first result"), r.first().addClass(m.active);
          }
        },
        set: {
          focus: function () {
            h.addClass(m.focus);
          },
          loading: function () {
            h.addClass(m.loading);
          },
          value: function (e) {
            f.verbose("Setting search input value", e), v.val(e);
          },
          type: function (e) {
            e = e || c.type, "category" == c.type && h.addClass(c.type);
          },
          buttonPressed: function () {
            n.addClass(m.pressed);
          }
        },
        remove: {
          loading: function () {
            h.removeClass(m.loading);
          },
          focus: function () {
            h.removeClass(m.focus);
          },
          buttonPressed: function () {
            n.removeClass(m.pressed);
          }
        },
        query: function (e) {
          e = E.isFunction(e) ? e : function () {};
          var t = f.get.value(),
              n = f.read.cache(t);
          e = e || function () {}, f.has.minimumCharacters() ? (n ? (f.debug("Reading result from cache", t), f.save.results(n.results), f.addResults(n.html), f.inject.id(n.results), e()) : (f.debug("Querying for", t), E.isPlainObject(c.source) || E.isArray(c.source) ? (f.search.local(t), e()) : f.can.useAPI() ? f.search.remote(t, e) : (f.error(p.source), e())), c.onSearchQuery.call(b, t)) : f.hideResults();
        },
        search: {
          local: function (e) {
            var t,
                n = f.search.object(e, c.content);
            f.set.loading(), f.save.results(n), f.debug("Returned full local search results", n), 0 < c.maxResults && (f.debug("Using specified max results", n), n = n.slice(0, c.maxResults)), "category" == c.type && (n = f.create.categoryResults(n)), t = f.generateResults({
              results: n
            }), f.remove.loading(), f.addResults(t), f.inject.id(n), f.write.cache(e, {
              html: t,
              results: n
            });
          },
          remote: function (e, t) {
            t = E.isFunction(t) ? t : function () {}, h.api("is loading") && h.api("abort"), f.setup.api(e, t), h.api("query");
          },
          object: function (i, t, e) {
            function o(e, t) {
              var n = -1 == E.inArray(t, a),
                  i = -1 == E.inArray(t, s),
                  o = -1 == E.inArray(t, r);
              n && i && o && e.push(t);
            }

            var a = [],
                r = [],
                s = [],
                n = i.toString().replace(d.escape, "\\$&"),
                l = new RegExp(d.beginsWith + n, "i");
            return t = t || c.source, e = e !== D ? e : c.searchFields, E.isArray(e) || (e = [e]), t === D || !1 === t ? (f.error(p.source), []) : (E.each(e, function (e, n) {
              E.each(t, function (e, t) {
                "string" == typeof t[n] && (-1 !== t[n].search(l) ? o(a, t) : "exact" === c.fullTextSearch && f.exactSearch(i, t[n]) ? o(r, t) : 1 == c.fullTextSearch && f.fuzzySearch(i, t[n]) && o(s, t));
              });
            }), E.merge(r, s), E.merge(a, r), a);
          }
        },
        exactSearch: function (e, t) {
          return e = e.toLowerCase(), -1 < (t = t.toLowerCase()).indexOf(e);
        },
        fuzzySearch: function (e, t) {
          var n = t.length,
              i = e.length;
          if ("string" != typeof e) return !1;
          if (e = e.toLowerCase(), t = t.toLowerCase(), n < i) return !1;
          if (i === n) return e === t;

          e: for (var o = 0, a = 0; o < i; o++) {
            for (var r = e.charCodeAt(o); a < n;) if (t.charCodeAt(a++) === r) continue e;

            return !1;
          }

          return !0;
        },
        parse: {
          response: function (e, t) {
            var n = f.generateResults(e);
            f.verbose("Parsing server response", e), e !== D && t !== D && e[a.results] !== D && (f.addResults(n), f.inject.id(e[a.results]), f.write.cache(t, {
              html: n,
              results: e[a.results]
            }), f.save.results(e[a.results]));
          }
        },
        cancel: {
          query: function () {
            f.can.useAPI() && h.api("abort");
          }
        },
        has: {
          minimumCharacters: function () {
            return f.get.value().length >= c.minCharacters;
          },
          results: function () {
            return 0 !== o.length && "" != o.html();
          }
        },
        clear: {
          cache: function (e) {
            var t = h.data(u.cache);
            e ? e && t && t[e] && (f.debug("Removing value from cache", e), delete t[e], h.data(u.cache, t)) : (f.debug("Clearing cache", e), h.removeData(u.cache));
          }
        },
        read: {
          cache: function (e) {
            var t = h.data(u.cache);
            return !!c.cache && (f.verbose("Checking cache for generated html for query", e), "object" == typeof t && t[e] !== D && t[e]);
          }
        },
        create: {
          categoryResults: function (e) {
            var n = {};
            return E.each(e, function (e, t) {
              t.category && (n[t.category] === D ? (f.verbose("Creating new category of results", t.category), n[t.category] = {
                name: t.category,
                results: [t]
              }) : n[t.category].results.push(t));
            }), n;
          },
          id: function (e, t) {
            var n,
                i = e + 1;
            return t !== D ? (n = String.fromCharCode(97 + t) + i, f.verbose("Creating category result id", n)) : (n = i, f.verbose("Creating result id", n)), n;
          },
          results: function () {
            0 === o.length && (o = E("<div />").addClass(m.results).appendTo(h));
          }
        },
        inject: {
          result: function (e, t, n) {
            f.verbose("Injecting result into results");
            var i = n !== D ? o.children().eq(n).children(g.results).first().children(g.result).eq(t) : o.children(g.result).eq(t);
            f.verbose("Injecting results metadata", i), i.data(u.result, e);
          },
          id: function (i) {
            f.debug("Injecting unique ids into results");
            var o = 0,
                a = 0;
            return "category" === c.type ? E.each(i, function (e, i) {
              a = 0, E.each(i.results, function (e, t) {
                var n = i.results[e];
                n.id === D && (n.id = f.create.id(a, o)), f.inject.result(n, a, o), a++;
              }), o++;
            }) : E.each(i, function (e, t) {
              var n = i[e];
              n.id === D && (n.id = f.create.id(a)), f.inject.result(n, a), a++;
            }), i;
          }
        },
        save: {
          results: function (e) {
            f.verbose("Saving current search results to metadata", e), h.data(u.results, e);
          }
        },
        write: {
          cache: function (e, t) {
            var n = h.data(u.cache) !== D ? h.data(u.cache) : {};
            c.cache && (f.verbose("Writing generated html to cache", e, t), n[e] = t, h.data(u.cache, n));
          }
        },
        addResults: function (e) {
          if (E.isFunction(c.onResultsAdd) && !1 === c.onResultsAdd.call(o, e)) return f.debug("onResultsAdd callback cancelled default action"), !1;
          e ? (o.html(e), f.refreshResults(), c.selectFirstResult && f.select.firstResult(), f.showResults()) : f.hideResults(function () {
            o.empty();
          });
        },
        showResults: function (e) {
          e = E.isFunction(e) ? e : function () {}, x || !f.is.visible() && f.has.results() && (f.can.transition() ? (f.debug("Showing results with css animations"), o.transition({
            animation: c.transition + " in",
            debug: c.debug,
            verbose: c.verbose,
            duration: c.duration,
            onComplete: function () {
              e();
            },
            queue: !0
          })) : (f.debug("Showing results with javascript"), o.stop().fadeIn(c.duration, c.easing)), c.onResultsOpen.call(o));
        },
        hideResults: function (e) {
          e = E.isFunction(e) ? e : function () {}, f.is.visible() && (f.can.transition() ? (f.debug("Hiding results with css animations"), o.transition({
            animation: c.transition + " out",
            debug: c.debug,
            verbose: c.verbose,
            duration: c.duration,
            onComplete: function () {
              e();
            },
            queue: !0
          })) : (f.debug("Hiding results with javascript"), o.stop().fadeOut(c.duration, c.easing)), c.onResultsClose.call(o));
        },
        generateResults: function (e) {
          f.debug("Generating html from response", e);
          var t = c.templates[c.type],
              n = E.isPlainObject(e[a.results]) && !E.isEmptyObject(e[a.results]),
              i = E.isArray(e[a.results]) && 0 < e[a.results].length,
              o = "";
          return n || i ? (0 < c.maxResults && (n ? "standard" == c.type && f.error(p.maxResults) : e[a.results] = e[a.results].slice(0, c.maxResults)), E.isFunction(t) ? o = t(e, a) : f.error(p.noTemplate, !1)) : c.showNoResults && (o = f.displayMessage(p.noResults, "empty")), c.onResults.call(b, e), o;
        },
        displayMessage: function (e, t) {
          return t = t || "standard", f.debug("Displaying message", e, t), f.addResults(c.templates.message(e, t)), c.templates.message(e, t);
        },
        setting: function (e, t) {
          if (E.isPlainObject(e)) E.extend(!0, c, e);else {
            if (t === D) return c[e];
            c[e] = t;
          }
        },
        internal: function (e, t) {
          if (E.isPlainObject(e)) E.extend(!0, f, e);else {
            if (t === D) return f[e];
            f[e] = t;
          }
        },
        debug: function () {
          !c.silent && c.debug && (c.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, c.name + ":"), f.debug.apply(console, arguments)));
        },
        verbose: function () {
          !c.silent && c.verbose && c.debug && (c.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, c.name + ":"), f.verbose.apply(console, arguments)));
        },
        error: function () {
          c.silent || (f.error = Function.prototype.bind.call(console.error, console, c.name + ":"), f.error.apply(console, arguments));
        },
        performance: {
          log: function (e) {
            var t, n;
            c.performance && (n = (t = new Date().getTime()) - (k || t), k = t, T.push({
              Name: e[0],
              Arguments: [].slice.call(e, 1) || "",
              Element: b,
              "Execution Time": n
            })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500);
          },
          display: function () {
            var e = c.name + ":",
                n = 0;
            k = !1, clearTimeout(f.performance.timer), E.each(T, function (e, t) {
              n += t["Execution Time"];
            }), e += " " + n + "ms", S && (e += " '" + S + "'"), 1 < w.length && (e += " (" + w.length + ")"), (console.group !== D || console.table !== D) && 0 < T.length && (console.groupCollapsed(e), console.table ? console.table(T) : E.each(T, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), T = [];
          }
        },
        invoke: function (i, e, t) {
          var o,
              a,
              n,
              r = s;
          return e = e || P, t = b || t, "string" == typeof i && r !== D && (i = i.split(/[\. ]/), o = i.length - 1, E.each(i, function (e, t) {
            var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
            if (E.isPlainObject(r[n]) && e != o) r = r[n];else {
              if (r[n] !== D) return a = r[n], !1;
              if (!E.isPlainObject(r[t]) || e == o) return r[t] !== D && (a = r[t]), !1;
              r = r[t];
            }
          })), E.isFunction(a) ? n = a.apply(t, e) : a !== D && (n = a), E.isArray(C) ? C.push(n) : C !== D ? C = [C, n] : n !== D && (C = n), a;
        }
      }, R ? (s === D && f.initialize(), f.invoke(A)) : (s !== D && s.invoke("destroy"), f.initialize());
    }), C !== D ? C : this;
  }, E.fn.search.settings = {
    name: "Search",
    namespace: "search",
    silent: !1,
    debug: !1,
    verbose: !1,
    performance: !0,
    type: "standard",
    minCharacters: 1,
    selectFirstResult: !1,
    apiSettings: !1,
    source: !1,
    searchOnFocus: !0,
    searchFields: ["title", "description"],
    displayField: "",
    fullTextSearch: "exact",
    automatic: !0,
    hideDelay: 0,
    searchDelay: 200,
    maxResults: 7,
    cache: !0,
    showNoResults: !0,
    transition: "scale",
    duration: 200,
    easing: "easeOutExpo",
    onSelect: !1,
    onResultsAdd: !1,
    onSearchQuery: function (e) {},
    onResults: function (e) {},
    onResultsOpen: function () {},
    onResultsClose: function () {},
    className: {
      animating: "animating",
      active: "active",
      empty: "empty",
      focus: "focus",
      hidden: "hidden",
      loading: "loading",
      results: "results",
      pressed: "down"
    },
    error: {
      source: "Cannot search. No source used, and Semantic API module was not included",
      noResults: "Your search returned no results",
      logging: "Error in debug logging, exiting.",
      noEndpoint: "No search endpoint was specified",
      noTemplate: "A valid template name was not specified.",
      oldSearchSyntax: "searchFullText setting has been renamed fullTextSearch for consistency, please adjust your settings.",
      serverError: "There was an issue querying the server.",
      maxResults: "Results must be an array to use maxResults setting",
      method: "The method you called is not defined."
    },
    metadata: {
      cache: "cache",
      results: "results",
      result: "result"
    },
    regExp: {
      escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
      beginsWith: "(?:s|^)"
    },
    fields: {
      categories: "results",
      categoryName: "name",
      categoryResults: "results",
      description: "description",
      image: "image",
      price: "price",
      results: "results",
      title: "title",
      url: "url",
      action: "action",
      actionText: "text",
      actionURL: "url"
    },
    selector: {
      prompt: ".prompt",
      searchButton: ".search.button",
      results: ".results",
      message: ".results > .message",
      category: ".category",
      result: ".result",
      title: ".title, .name"
    },
    templates: {
      escape: function (e) {
        var t = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "`": "&#x60;"
        };
        return /[&<>"'`]/.test(e) ? e.replace(/[&<>"'`]/g, function (e) {
          return t[e];
        }) : e;
      },
      message: function (e, t) {
        var n = "";
        return e !== D && t !== D && (n += '<div class="message ' + t + '">', n += "empty" == t ? '<div class="header">No Results</div class="header"><div class="description">' + e + '</div class="description">' : ' <div class="description">' + e + "</div>", n += "</div>"), n;
      },
      category: function (e, n) {
        var i = "";
        E.fn.search.settings.templates.escape;
        return e[n.categoryResults] !== D && (E.each(e[n.categoryResults], function (e, t) {
          t[n.results] !== D && 0 < t.results.length && (i += '<div class="category">', t[n.categoryName] !== D && (i += '<div class="name">' + t[n.categoryName] + "</div>"), i += '<div class="results">', E.each(t.results, function (e, t) {
            t[n.url] ? i += '<a class="result" href="' + t[n.url] + '">' : i += '<a class="result">', t[n.image] !== D && (i += '<div class="image"> <img src="' + t[n.image] + '"></div>'), i += '<div class="content">', t[n.price] !== D && (i += '<div class="price">' + t[n.price] + "</div>"), t[n.title] !== D && (i += '<div class="title">' + t[n.title] + "</div>"), t[n.description] !== D && (i += '<div class="description">' + t[n.description] + "</div>"), i += "</div>", i += "</a>";
          }), i += "</div>", i += "</div>");
        }), e[n.action] && (i += '<a href="' + e[n.action][n.actionURL] + '" class="action">' + e[n.action][n.actionText] + "</a>"), i);
      },
      standard: function (e, n) {
        var i = "";
        return e[n.results] !== D && (E.each(e[n.results], function (e, t) {
          t[n.url] ? i += '<a class="result" href="' + t[n.url] + '">' : i += '<a class="result">', t[n.image] !== D && (i += '<div class="image"> <img src="' + t[n.image] + '"></div>'), i += '<div class="content">', t[n.price] !== D && (i += '<div class="price">' + t[n.price] + "</div>"), t[n.title] !== D && (i += '<div class="title">' + t[n.title] + "</div>"), t[n.description] !== D && (i += '<div class="description">' + t[n.description] + "</div>"), i += "</div>", i += "</a>";
        }), e[n.action] && (i += '<a href="' + e[n.action][n.actionURL] + '" class="action">' + e[n.action][n.actionText] + "</a>"), i);
      }
    }
  };
}(jQuery, window, document), function (A, e, R, P) {
  "use strict";

  e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), A.fn.shape = function (v) {
    var b,
        y = A(this),
        x = (A("body"), new Date().getTime()),
        C = [],
        w = v,
        S = "string" == typeof w,
        k = [].slice.call(arguments, 1),
        T = e.requestAnimationFrame || e.mozRequestAnimationFrame || e.webkitRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {
      setTimeout(e, 0);
    };

    return y.each(function () {
      var i,
          o,
          a,
          t = y.selector || "",
          r = A.isPlainObject(v) ? A.extend(!0, {}, A.fn.shape.settings, v) : A.extend({}, A.fn.shape.settings),
          e = r.namespace,
          s = r.selector,
          n = r.error,
          l = r.className,
          c = "." + e,
          u = "module-" + e,
          d = A(this),
          f = d.find(s.sides),
          m = d.find(s.side),
          g = !1,
          p = this,
          h = d.data(u);
      a = {
        initialize: function () {
          a.verbose("Initializing module for", p), a.set.defaultSide(), a.instantiate();
        },
        instantiate: function () {
          a.verbose("Storing instance of module", a), h = a, d.data(u, h);
        },
        destroy: function () {
          a.verbose("Destroying previous module for", p), d.removeData(u).off(c);
        },
        refresh: function () {
          a.verbose("Refreshing selector cache for", p), d = A(p), f = A(this).find(s.shape), m = A(this).find(s.side);
        },
        repaint: function () {
          a.verbose("Forcing repaint event");
          (f[0] || R.createElement("div")).offsetWidth;
        },
        animate: function (e, t) {
          a.verbose("Animating box with properties", e), t = t || function (e) {
            a.verbose("Executing animation callback"), e !== P && e.stopPropagation(), a.reset(), a.set.active();
          }, r.beforeChange.call(o[0]), a.get.transitionEvent() ? (a.verbose("Starting CSS animation"), d.addClass(l.animating), f.css(e).one(a.get.transitionEvent(), t), a.set.duration(r.duration), T(function () {
            d.addClass(l.animating), i.addClass(l.hidden);
          })) : t();
        },
        queue: function (e) {
          a.debug("Queueing animation of", e), f.one(a.get.transitionEvent(), function () {
            a.debug("Executing queued animation"), setTimeout(function () {
              d.shape(e);
            }, 0);
          });
        },
        reset: function () {
          a.verbose("Animating states reset"), d.removeClass(l.animating).attr("style", "").removeAttr("style"), f.attr("style", "").removeAttr("style"), m.attr("style", "").removeAttr("style").removeClass(l.hidden), o.removeClass(l.animating).attr("style", "").removeAttr("style");
        },
        is: {
          complete: function () {
            return m.filter("." + l.active)[0] == o[0];
          },
          animating: function () {
            return d.hasClass(l.animating);
          }
        },
        set: {
          defaultSide: function () {
            i = d.find("." + r.className.active), o = 0 < i.next(s.side).length ? i.next(s.side) : d.find(s.side).first(), g = !1, a.verbose("Active side set to", i), a.verbose("Next side set to", o);
          },
          duration: function (e) {
            e = "number" == typeof (e = e || r.duration) ? e + "ms" : e, a.verbose("Setting animation duration", e), !r.duration && 0 !== r.duration || f.add(m).css({
              "-webkit-transition-duration": e,
              "-moz-transition-duration": e,
              "-ms-transition-duration": e,
              "-o-transition-duration": e,
              "transition-duration": e
            });
          },
          currentStageSize: function () {
            var e = d.find("." + r.className.active),
                t = e.outerWidth(!0),
                n = e.outerHeight(!0);
            d.css({
              width: t,
              height: n
            });
          },
          stageSize: function () {
            var e = d.clone().addClass(l.loading),
                t = e.find("." + r.className.active),
                n = g ? e.find(s.side).eq(g) : 0 < t.next(s.side).length ? t.next(s.side) : e.find(s.side).first(),
                i = "next" == r.width ? n.outerWidth(!0) : "initial" == r.width ? d.width() : r.width,
                o = "next" == r.height ? n.outerHeight(!0) : "initial" == r.height ? d.height() : r.height;
            t.removeClass(l.active), n.addClass(l.active), e.insertAfter(d), e.remove(), "auto" != r.width && (d.css("width", i + r.jitter), a.verbose("Specifying width during animation", i)), "auto" != r.height && (d.css("height", o + r.jitter), a.verbose("Specifying height during animation", o));
          },
          nextSide: function (e) {
            g = e, o = m.filter(e), g = m.index(o), 0 === o.length && (a.set.defaultSide(), a.error(n.side)), a.verbose("Next side manually set to", o);
          },
          active: function () {
            a.verbose("Setting new side to active", o), m.removeClass(l.active), o.addClass(l.active), r.onChange.call(o[0]), a.set.defaultSide();
          }
        },
        flip: {
          up: function () {
            if (!a.is.complete() || a.is.animating() || r.allowRepeats) {
              if (a.is.animating()) a.queue("flip up");else {
                a.debug("Flipping up", o);
                var e = a.get.transform.up();
                a.set.stageSize(), a.stage.above(), a.animate(e);
              }
            } else a.debug("Side already visible", o);
          },
          down: function () {
            if (!a.is.complete() || a.is.animating() || r.allowRepeats) {
              if (a.is.animating()) a.queue("flip down");else {
                a.debug("Flipping down", o);
                var e = a.get.transform.down();
                a.set.stageSize(), a.stage.below(), a.animate(e);
              }
            } else a.debug("Side already visible", o);
          },
          left: function () {
            if (!a.is.complete() || a.is.animating() || r.allowRepeats) {
              if (a.is.animating()) a.queue("flip left");else {
                a.debug("Flipping left", o);
                var e = a.get.transform.left();
                a.set.stageSize(), a.stage.left(), a.animate(e);
              }
            } else a.debug("Side already visible", o);
          },
          right: function () {
            if (!a.is.complete() || a.is.animating() || r.allowRepeats) {
              if (a.is.animating()) a.queue("flip right");else {
                a.debug("Flipping right", o);
                var e = a.get.transform.right();
                a.set.stageSize(), a.stage.right(), a.animate(e);
              }
            } else a.debug("Side already visible", o);
          },
          over: function () {
            !a.is.complete() || a.is.animating() || r.allowRepeats ? a.is.animating() ? a.queue("flip over") : (a.debug("Flipping over", o), a.set.stageSize(), a.stage.behind(), a.animate(a.get.transform.over())) : a.debug("Side already visible", o);
          },
          back: function () {
            !a.is.complete() || a.is.animating() || r.allowRepeats ? a.is.animating() ? a.queue("flip back") : (a.debug("Flipping back", o), a.set.stageSize(), a.stage.behind(), a.animate(a.get.transform.back())) : a.debug("Side already visible", o);
          }
        },
        get: {
          transform: {
            up: function () {
              return {
                transform: "translateY(" + -(i.outerHeight(!0) - o.outerHeight(!0)) / 2 + "px) translateZ(" + -i.outerHeight(!0) / 2 + "px) rotateX(-90deg)"
              };
            },
            down: function () {
              return {
                transform: "translateY(" + -(i.outerHeight(!0) - o.outerHeight(!0)) / 2 + "px) translateZ(" + -i.outerHeight(!0) / 2 + "px) rotateX(90deg)"
              };
            },
            left: function () {
              return {
                transform: "translateX(" + -(i.outerWidth(!0) - o.outerWidth(!0)) / 2 + "px) translateZ(" + -i.outerWidth(!0) / 2 + "px) rotateY(90deg)"
              };
            },
            right: function () {
              return {
                transform: "translateX(" + -(i.outerWidth(!0) - o.outerWidth(!0)) / 2 + "px) translateZ(" + -i.outerWidth(!0) / 2 + "px) rotateY(-90deg)"
              };
            },
            over: function () {
              return {
                transform: "translateX(" + -(i.outerWidth(!0) - o.outerWidth(!0)) / 2 + "px) rotateY(180deg)"
              };
            },
            back: function () {
              return {
                transform: "translateX(" + -(i.outerWidth(!0) - o.outerWidth(!0)) / 2 + "px) rotateY(-180deg)"
              };
            }
          },
          transitionEvent: function () {
            var e,
                t = R.createElement("element"),
                n = {
              transition: "transitionend",
              OTransition: "oTransitionEnd",
              MozTransition: "transitionend",
              WebkitTransition: "webkitTransitionEnd"
            };

            for (e in n) if (t.style[e] !== P) return n[e];
          },
          nextSide: function () {
            return 0 < i.next(s.side).length ? i.next(s.side) : d.find(s.side).first();
          }
        },
        stage: {
          above: function () {
            var e = {
              origin: (i.outerHeight(!0) - o.outerHeight(!0)) / 2,
              depth: {
                active: o.outerHeight(!0) / 2,
                next: i.outerHeight(!0) / 2
              }
            };
            a.verbose("Setting the initial animation position as above", o, e), f.css({
              transform: "translateZ(-" + e.depth.active + "px)"
            }), i.css({
              transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
            }), o.addClass(l.animating).css({
              top: e.origin + "px",
              transform: "rotateX(90deg) translateZ(" + e.depth.next + "px)"
            });
          },
          below: function () {
            var e = {
              origin: (i.outerHeight(!0) - o.outerHeight(!0)) / 2,
              depth: {
                active: o.outerHeight(!0) / 2,
                next: i.outerHeight(!0) / 2
              }
            };
            a.verbose("Setting the initial animation position as below", o, e), f.css({
              transform: "translateZ(-" + e.depth.active + "px)"
            }), i.css({
              transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
            }), o.addClass(l.animating).css({
              top: e.origin + "px",
              transform: "rotateX(-90deg) translateZ(" + e.depth.next + "px)"
            });
          },
          left: function () {
            var e = i.outerWidth(!0),
                t = o.outerWidth(!0),
                n = {
              origin: (e - t) / 2,
              depth: {
                active: t / 2,
                next: e / 2
              }
            };
            a.verbose("Setting the initial animation position as left", o, n), f.css({
              transform: "translateZ(-" + n.depth.active + "px)"
            }), i.css({
              transform: "rotateY(0deg) translateZ(" + n.depth.active + "px)"
            }), o.addClass(l.animating).css({
              left: n.origin + "px",
              transform: "rotateY(-90deg) translateZ(" + n.depth.next + "px)"
            });
          },
          right: function () {
            var e = i.outerWidth(!0),
                t = o.outerWidth(!0),
                n = {
              origin: (e - t) / 2,
              depth: {
                active: t / 2,
                next: e / 2
              }
            };
            a.verbose("Setting the initial animation position as left", o, n), f.css({
              transform: "translateZ(-" + n.depth.active + "px)"
            }), i.css({
              transform: "rotateY(0deg) translateZ(" + n.depth.active + "px)"
            }), o.addClass(l.animating).css({
              left: n.origin + "px",
              transform: "rotateY(90deg) translateZ(" + n.depth.next + "px)"
            });
          },
          behind: function () {
            var e = i.outerWidth(!0),
                t = o.outerWidth(!0),
                n = {
              origin: (e - t) / 2,
              depth: {
                active: t / 2,
                next: e / 2
              }
            };
            a.verbose("Setting the initial animation position as behind", o, n), i.css({
              transform: "rotateY(0deg)"
            }), o.addClass(l.animating).css({
              left: n.origin + "px",
              transform: "rotateY(-180deg)"
            });
          }
        },
        setting: function (e, t) {
          if (a.debug("Changing setting", e, t), A.isPlainObject(e)) A.extend(!0, r, e);else {
            if (t === P) return r[e];
            A.isPlainObject(r[e]) ? A.extend(!0, r[e], t) : r[e] = t;
          }
        },
        internal: function (e, t) {
          if (A.isPlainObject(e)) A.extend(!0, a, e);else {
            if (t === P) return a[e];
            a[e] = t;
          }
        },
        debug: function () {
          !r.silent && r.debug && (r.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, r.name + ":"), a.debug.apply(console, arguments)));
        },
        verbose: function () {
          !r.silent && r.verbose && r.debug && (r.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, r.name + ":"), a.verbose.apply(console, arguments)));
        },
        error: function () {
          r.silent || (a.error = Function.prototype.bind.call(console.error, console, r.name + ":"), a.error.apply(console, arguments));
        },
        performance: {
          log: function (e) {
            var t, n;
            r.performance && (n = (t = new Date().getTime()) - (x || t), x = t, C.push({
              Name: e[0],
              Arguments: [].slice.call(e, 1) || "",
              Element: p,
              "Execution Time": n
            })), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 500);
          },
          display: function () {
            var e = r.name + ":",
                n = 0;
            x = !1, clearTimeout(a.performance.timer), A.each(C, function (e, t) {
              n += t["Execution Time"];
            }), e += " " + n + "ms", t && (e += " '" + t + "'"), 1 < y.length && (e += " (" + y.length + ")"), (console.group !== P || console.table !== P) && 0 < C.length && (console.groupCollapsed(e), console.table ? console.table(C) : A.each(C, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), C = [];
          }
        },
        invoke: function (i, e, t) {
          var o,
              a,
              n,
              r = h;
          return e = e || k, t = p || t, "string" == typeof i && r !== P && (i = i.split(/[\. ]/), o = i.length - 1, A.each(i, function (e, t) {
            var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
            if (A.isPlainObject(r[n]) && e != o) r = r[n];else {
              if (r[n] !== P) return a = r[n], !1;
              if (!A.isPlainObject(r[t]) || e == o) return r[t] !== P && (a = r[t]), !1;
              r = r[t];
            }
          })), A.isFunction(a) ? n = a.apply(t, e) : a !== P && (n = a), A.isArray(b) ? b.push(n) : b !== P ? b = [b, n] : n !== P && (b = n), a;
        }
      }, S ? (h === P && a.initialize(), a.invoke(w)) : (h !== P && h.invoke("destroy"), a.initialize());
    }), b !== P ? b : this;
  }, A.fn.shape.settings = {
    name: "Shape",
    silent: !1,
    debug: !1,
    verbose: !1,
    jitter: 0,
    performance: !0,
    namespace: "shape",
    width: "initial",
    height: "initial",
    beforeChange: function () {},
    onChange: function () {},
    allowRepeats: !1,
    duration: !1,
    error: {
      side: "You tried to switch to a side that does not exist.",
      method: "The method you called is not defined"
    },
    className: {
      animating: "animating",
      hidden: "hidden",
      loading: "loading",
      active: "active"
    },
    selector: {
      sides: ".sides",
      side: ".side"
    }
  };
}(jQuery, window, document), function (q, j, z, I) {
  "use strict";

  j = void 0 !== j && j.Math == Math ? j : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), q.fn.sidebar = function (x) {
    var C,
        e = q(this),
        w = q(j),
        S = q(z),
        k = q("html"),
        T = q("head"),
        A = e.selector || "",
        R = new Date().getTime(),
        P = [],
        E = x,
        F = "string" == typeof E,
        O = [].slice.call(arguments, 1),
        D = j.requestAnimationFrame || j.mozRequestAnimationFrame || j.webkitRequestAnimationFrame || j.msRequestAnimationFrame || function (e) {
      setTimeout(e, 0);
    };

    return e.each(function () {
      var r,
          s,
          e,
          t,
          l,
          c,
          u = q.isPlainObject(x) ? q.extend(!0, {}, q.fn.sidebar.settings, x) : q.extend({}, q.fn.sidebar.settings),
          n = u.selector,
          a = u.className,
          i = u.namespace,
          o = u.regExp,
          d = u.error,
          f = "." + i,
          m = "module-" + i,
          g = q(this),
          p = q(u.context),
          h = g.children(n.sidebar),
          v = (p.children(n.fixed), p.children(n.pusher)),
          b = this,
          y = g.data(m);
      c = {
        initialize: function () {
          c.debug("Initializing sidebar", x), c.create.id(), l = c.get.transitionEvent(), u.delaySetup ? D(c.setup.layout) : c.setup.layout(), D(function () {
            c.setup.cache();
          }), c.instantiate();
        },
        instantiate: function () {
          c.verbose("Storing instance of module", c), y = c, g.data(m, c);
        },
        create: {
          id: function () {
            e = (Math.random().toString(16) + "000000000").substr(2, 8), s = "." + e, c.verbose("Creating unique id for element", e);
          }
        },
        destroy: function () {
          c.verbose("Destroying previous module for", g), g.off(f).removeData(m), c.is.ios() && c.remove.ios(), p.off(s), w.off(s), S.off(s);
        },
        event: {
          clickaway: function (e) {
            var t = 0 < v.find(e.target).length || v.is(e.target),
                n = p.is(e.target);
            t && (c.verbose("User clicked on dimmed page"), c.hide()), n && (c.verbose("User clicked on dimmable context (scaled out page)"), c.hide());
          },
          touch: function (e) {},
          containScroll: function (e) {
            b.scrollTop <= 0 && (b.scrollTop = 1), b.scrollTop + b.offsetHeight >= b.scrollHeight && (b.scrollTop = b.scrollHeight - b.offsetHeight - 1);
          },
          scroll: function (e) {
            0 === q(e.target).closest(n.sidebar).length && e.preventDefault();
          }
        },
        bind: {
          clickaway: function () {
            c.verbose("Adding clickaway events to context", p), u.closable && p.on("click" + s, c.event.clickaway).on("touchend" + s, c.event.clickaway);
          },
          scrollLock: function () {
            u.scrollLock && (c.debug("Disabling page scroll"), w.on("DOMMouseScroll" + s, c.event.scroll)), c.verbose("Adding events to contain sidebar scroll"), S.on("touchmove" + s, c.event.touch), g.on("scroll" + f, c.event.containScroll);
          }
        },
        unbind: {
          clickaway: function () {
            c.verbose("Removing clickaway events from context", p), p.off(s);
          },
          scrollLock: function () {
            c.verbose("Removing scroll lock from page"), S.off(s), w.off(s), g.off("scroll" + f);
          }
        },
        add: {
          inlineCSS: function () {
            var e,
                t = c.cache.width || g.outerWidth(),
                n = c.cache.height || g.outerHeight(),
                i = c.is.rtl(),
                o = c.get.direction(),
                a = {
              left: t,
              right: -t,
              top: n,
              bottom: -n
            };
            i && (c.verbose("RTL detected, flipping widths"), a.left = -t, a.right = t), e = "<style>", "left" === o || "right" === o ? (c.debug("Adding CSS rules for animation distance", t), e += " .ui.visible." + o + ".sidebar ~ .fixed, .ui.visible." + o + ".sidebar ~ .pusher {   -webkit-transform: translate3d(" + a[o] + "px, 0, 0);           transform: translate3d(" + a[o] + "px, 0, 0); }") : "top" !== o && "bottom" != o || (e += " .ui.visible." + o + ".sidebar ~ .fixed, .ui.visible." + o + ".sidebar ~ .pusher {   -webkit-transform: translate3d(0, " + a[o] + "px, 0);           transform: translate3d(0, " + a[o] + "px, 0); }"), c.is.ie() && ("left" === o || "right" === o ? (c.debug("Adding CSS rules for animation distance", t), e += " body.pushable > .ui.visible." + o + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(" + a[o] + "px, 0, 0);           transform: translate3d(" + a[o] + "px, 0, 0); }") : "top" !== o && "bottom" != o || (e += " body.pushable > .ui.visible." + o + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, " + a[o] + "px, 0);           transform: translate3d(0, " + a[o] + "px, 0); }"), e += " body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }"), r = q(e += "</style>").appendTo(T), c.debug("Adding sizing css to head", r);
          }
        },
        refresh: function () {
          c.verbose("Refreshing selector cache"), p = q(u.context), h = p.children(n.sidebar), v = p.children(n.pusher), p.children(n.fixed), c.clear.cache();
        },
        refreshSidebars: function () {
          c.verbose("Refreshing other sidebars"), h = p.children(n.sidebar);
        },
        repaint: function () {
          c.verbose("Forcing repaint event"), b.style.display = "none";
          b.offsetHeight;
          b.scrollTop = b.scrollTop, b.style.display = "";
        },
        setup: {
          cache: function () {
            c.cache = {
              width: g.outerWidth(),
              height: g.outerHeight(),
              rtl: "rtl" == g.css("direction")
            };
          },
          layout: function () {
            0 === p.children(n.pusher).length && (c.debug("Adding wrapper element for sidebar"), c.error(d.pusher), v = q('<div class="pusher" />'), p.children().not(n.omitted).not(h).wrapAll(v), c.refresh()), 0 !== g.nextAll(n.pusher).length && g.nextAll(n.pusher)[0] === v[0] || (c.debug("Moved sidebar to correct parent element"), c.error(d.movedSidebar, b), g.detach().prependTo(p), c.refresh()), c.clear.cache(), c.set.pushable(), c.set.direction();
          }
        },
        attachEvents: function (e, t) {
          var n = q(e);
          t = q.isFunction(c[t]) ? c[t] : c.toggle, 0 < n.length ? (c.debug("Attaching sidebar events to element", e, t), n.on("click" + f, t)) : c.error(d.notFound, e);
        },
        show: function (e) {
          if (e = q.isFunction(e) ? e : function () {}, c.is.hidden()) {
            if (c.refreshSidebars(), u.overlay && (c.error(d.overlay), u.transition = "overlay"), c.refresh(), c.othersActive()) if (c.debug("Other sidebars currently visible"), u.exclusive) {
              if ("overlay" != u.transition) return void c.hideOthers(c.show);
              c.hideOthers();
            } else u.transition = "overlay";
            c.pushPage(function () {
              e.call(b), u.onShow.call(b);
            }), u.onChange.call(b), u.onVisible.call(b);
          } else c.debug("Sidebar is already visible");
        },
        hide: function (e) {
          e = q.isFunction(e) ? e : function () {}, (c.is.visible() || c.is.animating()) && (c.debug("Hiding sidebar", e), c.refreshSidebars(), c.pullPage(function () {
            e.call(b), u.onHidden.call(b);
          }), u.onChange.call(b), u.onHide.call(b));
        },
        othersAnimating: function () {
          return 0 < h.not(g).filter("." + a.animating).length;
        },
        othersVisible: function () {
          return 0 < h.not(g).filter("." + a.visible).length;
        },
        othersActive: function () {
          return c.othersVisible() || c.othersAnimating();
        },
        hideOthers: function (e) {
          var t = h.not(g).filter("." + a.visible),
              n = t.length,
              i = 0;
          e = e || function () {}, t.sidebar("hide", function () {
            ++i == n && e();
          });
        },
        toggle: function () {
          c.verbose("Determining toggled direction"), c.is.hidden() ? c.show() : c.hide();
        },
        pushPage: function (t) {
          var e,
              n,
              i,
              o = c.get.transition(),
              a = "overlay" === o || c.othersActive() ? g : v;
          t = q.isFunction(t) ? t : function () {}, "scale down" == u.transition && c.scrollToTop(), c.set.transition(o), c.repaint(), e = function () {
            c.bind.clickaway(), c.add.inlineCSS(), c.set.animating(), c.set.visible();
          }, n = function () {
            c.set.dimmed();
          }, i = function (e) {
            e.target == a[0] && (a.off(l + s, i), c.remove.animating(), c.bind.scrollLock(), t.call(b));
          }, a.off(l + s), a.on(l + s, i), D(e), u.dimPage && !c.othersVisible() && D(n);
        },
        pullPage: function (t) {
          var e,
              n,
              i = c.get.transition(),
              o = "overlay" == i || c.othersActive() ? g : v;
          t = q.isFunction(t) ? t : function () {}, c.verbose("Removing context push state", c.get.direction()), c.unbind.clickaway(), c.unbind.scrollLock(), e = function () {
            c.set.transition(i), c.set.animating(), c.remove.visible(), u.dimPage && !c.othersVisible() && v.removeClass(a.dimmed);
          }, n = function (e) {
            e.target == o[0] && (o.off(l + s, n), c.remove.animating(), c.remove.transition(), c.remove.inlineCSS(), ("scale down" == i || u.returnScroll && c.is.mobile()) && c.scrollBack(), t.call(b));
          }, o.off(l + s), o.on(l + s, n), D(e);
        },
        scrollToTop: function () {
          c.verbose("Scrolling to top of page to avoid animation issues"), t = q(j).scrollTop(), g.scrollTop(0), j.scrollTo(0, 0);
        },
        scrollBack: function () {
          c.verbose("Scrolling back to original page position"), j.scrollTo(0, t);
        },
        clear: {
          cache: function () {
            c.verbose("Clearing cached dimensions"), c.cache = {};
          }
        },
        set: {
          ios: function () {
            k.addClass(a.ios);
          },
          pushed: function () {
            p.addClass(a.pushed);
          },
          pushable: function () {
            p.addClass(a.pushable);
          },
          dimmed: function () {
            v.addClass(a.dimmed);
          },
          active: function () {
            g.addClass(a.active);
          },
          animating: function () {
            g.addClass(a.animating);
          },
          transition: function (e) {
            e = e || c.get.transition(), g.addClass(e);
          },
          direction: function (e) {
            e = e || c.get.direction(), g.addClass(a[e]);
          },
          visible: function () {
            g.addClass(a.visible);
          },
          overlay: function () {
            g.addClass(a.overlay);
          }
        },
        remove: {
          inlineCSS: function () {
            c.debug("Removing inline css styles", r), r && 0 < r.length && r.remove();
          },
          ios: function () {
            k.removeClass(a.ios);
          },
          pushed: function () {
            p.removeClass(a.pushed);
          },
          pushable: function () {
            p.removeClass(a.pushable);
          },
          active: function () {
            g.removeClass(a.active);
          },
          animating: function () {
            g.removeClass(a.animating);
          },
          transition: function (e) {
            e = e || c.get.transition(), g.removeClass(e);
          },
          direction: function (e) {
            e = e || c.get.direction(), g.removeClass(a[e]);
          },
          visible: function () {
            g.removeClass(a.visible);
          },
          overlay: function () {
            g.removeClass(a.overlay);
          }
        },
        get: {
          direction: function () {
            return g.hasClass(a.top) ? a.top : g.hasClass(a.right) ? a.right : g.hasClass(a.bottom) ? a.bottom : a.left;
          },
          transition: function () {
            var e,
                t = c.get.direction();
            return e = c.is.mobile() ? "auto" == u.mobileTransition ? u.defaultTransition.mobile[t] : u.mobileTransition : "auto" == u.transition ? u.defaultTransition.computer[t] : u.transition, c.verbose("Determined transition", e), e;
          },
          transitionEvent: function () {
            var e,
                t = z.createElement("element"),
                n = {
              transition: "transitionend",
              OTransition: "oTransitionEnd",
              MozTransition: "transitionend",
              WebkitTransition: "webkitTransitionEnd"
            };

            for (e in n) if (t.style[e] !== I) return n[e];
          }
        },
        is: {
          ie: function () {
            return !j.ActiveXObject && "ActiveXObject" in j || "ActiveXObject" in j;
          },
          ios: function () {
            var e = navigator.userAgent,
                t = e.match(o.ios),
                n = e.match(o.mobileChrome);
            return !(!t || n) && (c.verbose("Browser was found to be iOS", e), !0);
          },
          mobile: function () {
            var e = navigator.userAgent;
            return e.match(o.mobile) ? (c.verbose("Browser was found to be mobile", e), !0) : (c.verbose("Browser is not mobile, using regular transition", e), !1);
          },
          hidden: function () {
            return !c.is.visible();
          },
          visible: function () {
            return g.hasClass(a.visible);
          },
          open: function () {
            return c.is.visible();
          },
          closed: function () {
            return c.is.hidden();
          },
          vertical: function () {
            return g.hasClass(a.top);
          },
          animating: function () {
            return p.hasClass(a.animating);
          },
          rtl: function () {
            return c.cache.rtl === I && (c.cache.rtl = "rtl" == g.css("direction")), c.cache.rtl;
          }
        },
        setting: function (e, t) {
          if (c.debug("Changing setting", e, t), q.isPlainObject(e)) q.extend(!0, u, e);else {
            if (t === I) return u[e];
            q.isPlainObject(u[e]) ? q.extend(!0, u[e], t) : u[e] = t;
          }
        },
        internal: function (e, t) {
          if (q.isPlainObject(e)) q.extend(!0, c, e);else {
            if (t === I) return c[e];
            c[e] = t;
          }
        },
        debug: function () {
          !u.silent && u.debug && (u.performance ? c.performance.log(arguments) : (c.debug = Function.prototype.bind.call(console.info, console, u.name + ":"), c.debug.apply(console, arguments)));
        },
        verbose: function () {
          !u.silent && u.verbose && u.debug && (u.performance ? c.performance.log(arguments) : (c.verbose = Function.prototype.bind.call(console.info, console, u.name + ":"), c.verbose.apply(console, arguments)));
        },
        error: function () {
          u.silent || (c.error = Function.prototype.bind.call(console.error, console, u.name + ":"), c.error.apply(console, arguments));
        },
        performance: {
          log: function (e) {
            var t, n;
            u.performance && (n = (t = new Date().getTime()) - (R || t), R = t, P.push({
              Name: e[0],
              Arguments: [].slice.call(e, 1) || "",
              Element: b,
              "Execution Time": n
            })), clearTimeout(c.performance.timer), c.performance.timer = setTimeout(c.performance.display, 500);
          },
          display: function () {
            var e = u.name + ":",
                n = 0;
            R = !1, clearTimeout(c.performance.timer), q.each(P, function (e, t) {
              n += t["Execution Time"];
            }), e += " " + n + "ms", A && (e += " '" + A + "'"), (console.group !== I || console.table !== I) && 0 < P.length && (console.groupCollapsed(e), console.table ? console.table(P) : q.each(P, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), P = [];
          }
        },
        invoke: function (i, e, t) {
          var o,
              a,
              n,
              r = y;
          return e = e || O, t = b || t, "string" == typeof i && r !== I && (i = i.split(/[\. ]/), o = i.length - 1, q.each(i, function (e, t) {
            var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
            if (q.isPlainObject(r[n]) && e != o) r = r[n];else {
              if (r[n] !== I) return a = r[n], !1;
              if (!q.isPlainObject(r[t]) || e == o) return r[t] !== I ? a = r[t] : c.error(d.method, i), !1;
              r = r[t];
            }
          })), q.isFunction(a) ? n = a.apply(t, e) : a !== I && (n = a), q.isArray(C) ? C.push(n) : C !== I ? C = [C, n] : n !== I && (C = n), a;
        }
      }, F ? (y === I && c.initialize(), c.invoke(E)) : (y !== I && c.invoke("destroy"), c.initialize());
    }), C !== I ? C : this;
  }, q.fn.sidebar.settings = {
    name: "Sidebar",
    namespace: "sidebar",
    silent: !1,
    debug: !1,
    verbose: !1,
    performance: !0,
    transition: "auto",
    mobileTransition: "auto",
    defaultTransition: {
      computer: {
        left: "uncover",
        right: "uncover",
        top: "overlay",
        bottom: "overlay"
      },
      mobile: {
        left: "uncover",
        right: "uncover",
        top: "overlay",
        bottom: "overlay"
      }
    },
    context: "body",
    exclusive: !1,
    closable: !0,
    dimPage: !0,
    scrollLock: !1,
    returnScroll: !1,
    delaySetup: !1,
    duration: 500,
    onChange: function () {},
    onShow: function () {},
    onHide: function () {},
    onHidden: function () {},
    onVisible: function () {},
    className: {
      active: "active",
      animating: "animating",
      dimmed: "dimmed",
      ios: "ios",
      pushable: "pushable",
      pushed: "pushed",
      right: "right",
      top: "top",
      left: "left",
      bottom: "bottom",
      visible: "visible"
    },
    selector: {
      fixed: ".fixed",
      omitted: "script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",
      pusher: ".pusher",
      sidebar: ".ui.sidebar"
    },
    regExp: {
      ios: /(iPad|iPhone|iPod)/g,
      mobileChrome: /(CriOS)/g,
      mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g
    },
    error: {
      method: "The method you called is not defined.",
      pusher: "Had to add pusher element. For optimal performance make sure body content is inside a pusher element",
      movedSidebar: "Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",
      overlay: "The overlay setting is no longer supported, use animation: overlay",
      notFound: "There were no elements that matched the specified selector"
    }
  };
}(jQuery, window, document), function (T, A, R, P) {
  "use strict";

  A = void 0 !== A && A.Math == Math ? A : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), T.fn.sticky = function (v) {
    var b,
        e = T(this),
        y = e.selector || "",
        x = new Date().getTime(),
        C = [],
        w = v,
        S = "string" == typeof w,
        k = [].slice.call(arguments, 1);
    return e.each(function () {
      var i,
          o,
          e,
          t,
          d,
          f = T.isPlainObject(v) ? T.extend(!0, {}, T.fn.sticky.settings, v) : T.extend({}, T.fn.sticky.settings),
          n = f.className,
          a = f.namespace,
          r = f.error,
          s = "." + a,
          l = "module-" + a,
          c = T(this),
          u = T(A),
          m = T(f.scrollContext),
          g = (c.selector, c.data(l)),
          p = A.requestAnimationFrame || A.mozRequestAnimationFrame || A.webkitRequestAnimationFrame || A.msRequestAnimationFrame || function (e) {
        setTimeout(e, 0);
      },
          h = this;

      d = {
        initialize: function () {
          d.determineContainer(), d.determineContext(), d.verbose("Initializing sticky", f, i), d.save.positions(), d.checkErrors(), d.bind.events(), f.observeChanges && d.observeChanges(), d.instantiate();
        },
        instantiate: function () {
          d.verbose("Storing instance of module", d), g = d, c.data(l, d);
        },
        destroy: function () {
          d.verbose("Destroying previous instance"), d.reset(), e && e.disconnect(), t && t.disconnect(), u.off("load" + s, d.event.load).off("resize" + s, d.event.resize), m.off("scrollchange" + s, d.event.scrollchange), c.removeData(l);
        },
        observeChanges: function () {
          "MutationObserver" in A && (e = new MutationObserver(d.event.documentChanged), t = new MutationObserver(d.event.changed), e.observe(R, {
            childList: !0,
            subtree: !0
          }), t.observe(h, {
            childList: !0,
            subtree: !0
          }), t.observe(o[0], {
            childList: !0,
            subtree: !0
          }), d.debug("Setting up mutation observer", t));
        },
        determineContainer: function () {
          i = f.container ? T(f.container) : c.offsetParent();
        },
        determineContext: function () {
          0 !== (o = f.context ? T(f.context) : i).length || d.error(r.invalidContext, f.context, c);
        },
        checkErrors: function () {
          if (d.is.hidden() && d.error(r.visible, c), d.cache.element.height > d.cache.context.height) return d.reset(), void d.error(r.elementSize, c);
        },
        bind: {
          events: function () {
            u.on("load" + s, d.event.load).on("resize" + s, d.event.resize), m.off("scroll" + s).on("scroll" + s, d.event.scroll).on("scrollchange" + s, d.event.scrollchange);
          }
        },
        event: {
          changed: function (e) {
            clearTimeout(d.timer), d.timer = setTimeout(function () {
              d.verbose("DOM tree modified, updating sticky menu", e), d.refresh();
            }, 100);
          },
          documentChanged: function (e) {
            [].forEach.call(e, function (e) {
              e.removedNodes && [].forEach.call(e.removedNodes, function (e) {
                (e == h || 0 < T(e).find(h).length) && (d.debug("Element removed from DOM, tearing down events"), d.destroy());
              });
            });
          },
          load: function () {
            d.verbose("Page contents finished loading"), p(d.refresh);
          },
          resize: function () {
            d.verbose("Window resized"), p(d.refresh);
          },
          scroll: function () {
            p(function () {
              m.triggerHandler("scrollchange" + s, m.scrollTop());
            });
          },
          scrollchange: function (e, t) {
            d.stick(t), f.onScroll.call(h);
          }
        },
        refresh: function (e) {
          d.reset(), f.context || d.determineContext(), e && d.determineContainer(), d.save.positions(), d.stick(), f.onReposition.call(h);
        },
        supports: {
          sticky: function () {
            var e = T("<div/>");
            e[0];
            return e.addClass(n.supported), e.css("position").match("sticky");
          }
        },
        save: {
          lastScroll: function (e) {
            d.lastScroll = e;
          },
          elementScroll: function (e) {
            d.elementScroll = e;
          },
          positions: function () {
            var e = {
              height: m.height()
            },
                t = {
              margin: {
                top: parseInt(c.css("margin-top"), 10),
                bottom: parseInt(c.css("margin-bottom"), 10)
              },
              offset: c.offset(),
              width: c.outerWidth(),
              height: c.outerHeight()
            },
                n = {
              offset: o.offset(),
              height: o.outerHeight()
            };
            i.outerHeight();
            d.is.standardScroll() || (d.debug("Non-standard scroll. Removing scroll offset from element offset"), e.top = m.scrollTop(), e.left = m.scrollLeft(), t.offset.top += e.top, n.offset.top += e.top, t.offset.left += e.left, n.offset.left += e.left), d.cache = {
              fits: t.height + f.offset <= e.height,
              sameHeight: t.height == n.height,
              scrollContext: {
                height: e.height
              },
              element: {
                margin: t.margin,
                top: t.offset.top - t.margin.top,
                left: t.offset.left,
                width: t.width,
                height: t.height,
                bottom: t.offset.top + t.height
              },
              context: {
                top: n.offset.top,
                height: n.height,
                bottom: n.offset.top + n.height
              }
            }, d.set.containerSize(), d.stick(), d.debug("Caching element positions", d.cache);
          }
        },
        get: {
          direction: function (e) {
            var t = "down";
            return e = e || m.scrollTop(), d.lastScroll !== P && (d.lastScroll < e ? t = "down" : d.lastScroll > e && (t = "up")), t;
          },
          scrollChange: function (e) {
            return e = e || m.scrollTop(), d.lastScroll ? e - d.lastScroll : 0;
          },
          currentElementScroll: function () {
            return d.elementScroll ? d.elementScroll : d.is.top() ? Math.abs(parseInt(c.css("top"), 10)) || 0 : Math.abs(parseInt(c.css("bottom"), 10)) || 0;
          },
          elementScroll: function (e) {
            e = e || m.scrollTop();
            var t = d.cache.element,
                n = d.cache.scrollContext,
                i = d.get.scrollChange(e),
                o = t.height - n.height + f.offset,
                a = d.get.currentElementScroll(),
                r = a + i;
            return a = d.cache.fits || r < 0 ? 0 : o < r ? o : r;
          }
        },
        remove: {
          lastScroll: function () {
            delete d.lastScroll;
          },
          elementScroll: function (e) {
            delete d.elementScroll;
          },
          minimumSize: function () {
            i.css("min-height", "");
          },
          offset: function () {
            c.css("margin-top", "");
          }
        },
        set: {
          offset: function () {
            d.verbose("Setting offset on element", f.offset), c.css("margin-top", f.offset);
          },
          containerSize: function () {
            var e = i.get(0).tagName;
            "HTML" === e || "body" == e ? d.determineContainer() : Math.abs(i.outerHeight() - d.cache.context.height) > f.jitter && (d.debug("Context has padding, specifying exact height for container", d.cache.context.height), i.css({
              height: d.cache.context.height
            }));
          },
          minimumSize: function () {
            var e = d.cache.element;
            i.css("min-height", e.height);
          },
          scroll: function (e) {
            d.debug("Setting scroll on element", e), d.elementScroll != e && (d.is.top() && c.css("bottom", "").css("top", -e), d.is.bottom() && c.css("top", "").css("bottom", e));
          },
          size: function () {
            0 !== d.cache.element.height && 0 !== d.cache.element.width && (h.style.setProperty("width", d.cache.element.width + "px", "important"), h.style.setProperty("height", d.cache.element.height + "px", "important"));
          }
        },
        is: {
          standardScroll: function () {
            return m[0] == A;
          },
          top: function () {
            return c.hasClass(n.top);
          },
          bottom: function () {
            return c.hasClass(n.bottom);
          },
          initialPosition: function () {
            return !d.is.fixed() && !d.is.bound();
          },
          hidden: function () {
            return !c.is(":visible");
          },
          bound: function () {
            return c.hasClass(n.bound);
          },
          fixed: function () {
            return c.hasClass(n.fixed);
          }
        },
        stick: function (e) {
          var t = e || m.scrollTop(),
              n = d.cache,
              i = n.fits,
              o = n.sameHeight,
              a = n.element,
              r = n.scrollContext,
              s = n.context,
              l = d.is.bottom() && f.pushing ? f.bottomOffset : f.offset,
              c = (e = {
            top: t + l,
            bottom: t + l + r.height
          }, d.get.direction(e.top), i ? 0 : d.get.elementScroll(e.top)),
              u = !i;
          0 === a.height || o || (d.is.initialPosition() ? e.top >= s.bottom ? (d.debug("Initial element position is bottom of container"), d.bindBottom()) : e.top > a.top && (a.height + e.top - c >= s.bottom ? (d.debug("Initial element position is bottom of container"), d.bindBottom()) : (d.debug("Initial element position is fixed"), d.fixTop())) : d.is.fixed() ? d.is.top() ? e.top <= a.top ? (d.debug("Fixed element reached top of container"), d.setInitialPosition()) : a.height + e.top - c >= s.bottom ? (d.debug("Fixed element reached bottom of container"), d.bindBottom()) : u && (d.set.scroll(c), d.save.lastScroll(e.top), d.save.elementScroll(c)) : d.is.bottom() && (e.bottom - a.height <= a.top ? (d.debug("Bottom fixed rail has reached top of container"), d.setInitialPosition()) : e.bottom >= s.bottom ? (d.debug("Bottom fixed rail has reached bottom of container"), d.bindBottom()) : u && (d.set.scroll(c), d.save.lastScroll(e.top), d.save.elementScroll(c))) : d.is.bottom() && (e.top <= a.top ? (d.debug("Jumped from bottom fixed to top fixed, most likely used home/end button"), d.setInitialPosition()) : f.pushing ? d.is.bound() && e.bottom <= s.bottom && (d.debug("Fixing bottom attached element to bottom of browser."), d.fixBottom()) : d.is.bound() && e.top <= s.bottom - a.height && (d.debug("Fixing bottom attached element to top of browser."), d.fixTop())));
        },
        bindTop: function () {
          d.debug("Binding element to top of parent container"), d.remove.offset(), c.css({
            left: "",
            top: "",
            marginBottom: ""
          }).removeClass(n.fixed).removeClass(n.bottom).addClass(n.bound).addClass(n.top), f.onTop.call(h), f.onUnstick.call(h);
        },
        bindBottom: function () {
          d.debug("Binding element to bottom of parent container"), d.remove.offset(), c.css({
            left: "",
            top: ""
          }).removeClass(n.fixed).removeClass(n.top).addClass(n.bound).addClass(n.bottom), f.onBottom.call(h), f.onUnstick.call(h);
        },
        setInitialPosition: function () {
          d.debug("Returning to initial position"), d.unfix(), d.unbind();
        },
        fixTop: function () {
          d.debug("Fixing element to top of page"), f.setSize && d.set.size(), d.set.minimumSize(), d.set.offset(), c.css({
            left: d.cache.element.left,
            bottom: "",
            marginBottom: ""
          }).removeClass(n.bound).removeClass(n.bottom).addClass(n.fixed).addClass(n.top), f.onStick.call(h);
        },
        fixBottom: function () {
          d.debug("Sticking element to bottom of page"), f.setSize && d.set.size(), d.set.minimumSize(), d.set.offset(), c.css({
            left: d.cache.element.left,
            bottom: "",
            marginBottom: ""
          }).removeClass(n.bound).removeClass(n.top).addClass(n.fixed).addClass(n.bottom), f.onStick.call(h);
        },
        unbind: function () {
          d.is.bound() && (d.debug("Removing container bound position on element"), d.remove.offset(), c.removeClass(n.bound).removeClass(n.top).removeClass(n.bottom));
        },
        unfix: function () {
          d.is.fixed() && (d.debug("Removing fixed position on element"), d.remove.minimumSize(), d.remove.offset(), c.removeClass(n.fixed).removeClass(n.top).removeClass(n.bottom), f.onUnstick.call(h));
        },
        reset: function () {
          d.debug("Resetting elements position"), d.unbind(), d.unfix(), d.resetCSS(), d.remove.offset(), d.remove.lastScroll();
        },
        resetCSS: function () {
          c.css({
            width: "",
            height: ""
          }), i.css({
            height: ""
          });
        },
        setting: function (e, t) {
          if (T.isPlainObject(e)) T.extend(!0, f, e);else {
            if (t === P) return f[e];
            f[e] = t;
          }
        },
        internal: function (e, t) {
          if (T.isPlainObject(e)) T.extend(!0, d, e);else {
            if (t === P) return d[e];
            d[e] = t;
          }
        },
        debug: function () {
          !f.silent && f.debug && (f.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), d.debug.apply(console, arguments)));
        },
        verbose: function () {
          !f.silent && f.verbose && f.debug && (f.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), d.verbose.apply(console, arguments)));
        },
        error: function () {
          f.silent || (d.error = Function.prototype.bind.call(console.error, console, f.name + ":"), d.error.apply(console, arguments));
        },
        performance: {
          log: function (e) {
            var t, n;
            f.performance && (n = (t = new Date().getTime()) - (x || t), x = t, C.push({
              Name: e[0],
              Arguments: [].slice.call(e, 1) || "",
              Element: h,
              "Execution Time": n
            })), clearTimeout(d.performance.timer), d.performance.timer = setTimeout(d.performance.display, 0);
          },
          display: function () {
            var e = f.name + ":",
                n = 0;
            x = !1, clearTimeout(d.performance.timer), T.each(C, function (e, t) {
              n += t["Execution Time"];
            }), e += " " + n + "ms", y && (e += " '" + y + "'"), (console.group !== P || console.table !== P) && 0 < C.length && (console.groupCollapsed(e), console.table ? console.table(C) : T.each(C, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), C = [];
          }
        },
        invoke: function (i, e, t) {
          var o,
              a,
              n,
              r = g;
          return e = e || k, t = h || t, "string" == typeof i && r !== P && (i = i.split(/[\. ]/), o = i.length - 1, T.each(i, function (e, t) {
            var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
            if (T.isPlainObject(r[n]) && e != o) r = r[n];else {
              if (r[n] !== P) return a = r[n], !1;
              if (!T.isPlainObject(r[t]) || e == o) return r[t] !== P && (a = r[t]), !1;
              r = r[t];
            }
          })), T.isFunction(a) ? n = a.apply(t, e) : a !== P && (n = a), T.isArray(b) ? b.push(n) : b !== P ? b = [b, n] : n !== P && (b = n), a;
        }
      }, S ? (g === P && d.initialize(), d.invoke(w)) : (g !== P && g.invoke("destroy"), d.initialize());
    }), b !== P ? b : this;
  }, T.fn.sticky.settings = {
    name: "Sticky",
    namespace: "sticky",
    silent: !1,
    debug: !1,
    verbose: !0,
    performance: !0,
    pushing: !1,
    context: !1,
    container: !1,
    scrollContext: A,
    offset: 0,
    bottomOffset: 0,
    jitter: 5,
    setSize: !0,
    observeChanges: !1,
    onReposition: function () {},
    onScroll: function () {},
    onStick: function () {},
    onUnstick: function () {},
    onTop: function () {},
    onBottom: function () {},
    error: {
      container: "Sticky element must be inside a relative container",
      visible: "Element is hidden, you must call refresh after element becomes visible. Use silent setting to surpress this warning in production.",
      method: "The method you called is not defined.",
      invalidContext: "Context specified does not exist",
      elementSize: "Sticky element is larger than its container, cannot create sticky."
    },
    className: {
      bound: "bound",
      fixed: "fixed",
      supported: "native",
      top: "top",
      bottom: "bottom"
    }
  };
}(jQuery, window, document), function (E, F, O, D) {
  "use strict";

  F = void 0 !== F && F.Math == Math ? F : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), E.fn.tab = function (r) {
    var c,
        u = E.isFunction(this) ? E(F) : E(this),
        d = u.selector || "",
        f = new Date().getTime(),
        m = [],
        g = r,
        A = "string" == typeof g,
        R = [].slice.call(arguments, 1),
        P = !1;
    return u.each(function () {
      var p,
          a,
          h,
          v,
          b,
          y,
          x = E.isPlainObject(r) ? E.extend(!0, {}, E.fn.tab.settings, r) : E.extend({}, E.fn.tab.settings),
          C = x.className,
          w = x.metadata,
          t = x.selector,
          S = x.error,
          e = "." + x.namespace,
          n = "module-" + x.namespace,
          k = E(this),
          i = {},
          T = !0,
          o = 0,
          s = this,
          l = k.data(n);
      b = {
        initialize: function () {
          b.debug("Initializing tab menu item", k), b.fix.callbacks(), b.determineTabs(), b.debug("Determining tabs", x.context, a), x.auto && b.set.auto(), b.bind.events(), x.history && !P && (b.initializeHistory(), P = !0), b.instantiate();
        },
        instantiate: function () {
          b.verbose("Storing instance of module", b), l = b, k.data(n, b);
        },
        destroy: function () {
          b.debug("Destroying tabs", k), k.removeData(n).off(e);
        },
        bind: {
          events: function () {
            E.isWindow(s) || (b.debug("Attaching tab activation events to element", k), k.on("click" + e, b.event.click));
          }
        },
        determineTabs: function () {
          var e;
          "parent" === x.context ? (0 < k.closest(t.ui).length ? (e = k.closest(t.ui), b.verbose("Using closest UI element as parent", e)) : e = k, p = e.parent(), b.verbose("Determined parent element for creating context", p)) : x.context ? (p = E(x.context), b.verbose("Using selector for tab context", x.context, p)) : p = E("body"), x.childrenOnly ? (a = p.children(t.tabs), b.debug("Searching tab context children for tabs", p, a)) : (a = p.find(t.tabs), b.debug("Searching tab context for tabs", p, a));
        },
        fix: {
          callbacks: function () {
            E.isPlainObject(r) && (r.onTabLoad || r.onTabInit) && (r.onTabLoad && (r.onLoad = r.onTabLoad, delete r.onTabLoad, b.error(S.legacyLoad, r.onLoad)), r.onTabInit && (r.onFirstLoad = r.onTabInit, delete r.onTabInit, b.error(S.legacyInit, r.onFirstLoad)), x = E.extend(!0, {}, E.fn.tab.settings, r));
          }
        },
        initializeHistory: function () {
          if (b.debug("Initializing page state"), E.address === D) return b.error(S.state), !1;

          if ("state" == x.historyType) {
            if (b.debug("Using HTML5 to manage state"), !1 === x.path) return b.error(S.path), !1;
            E.address.history(!0).state(x.path);
          }

          E.address.bind("change", b.event.history.change);
        },
        event: {
          click: function (e) {
            var t = E(this).data(w.tab);
            t !== D ? (x.history ? (b.verbose("Updating page state", e), E.address.value(t)) : (b.verbose("Changing tab", e), b.changeTab(t)), e.preventDefault()) : b.debug("No tab specified");
          },
          history: {
            change: function (e) {
              var t = e.pathNames.join("/") || b.get.initialPath(),
                  n = x.templates.determineTitle(t) || !1;
              b.performance.display(), b.debug("History change event", t, e), y = e, t !== D && b.changeTab(t), n && E.address.title(n);
            }
          }
        },
        refresh: function () {
          h && (b.debug("Refreshing tab", h), b.changeTab(h));
        },
        cache: {
          read: function (e) {
            return e !== D && i[e];
          },
          add: function (e, t) {
            e = e || h, b.debug("Adding cached content for", e), i[e] = t;
          },
          remove: function (e) {
            e = e || h, b.debug("Removing cached content for", e), delete i[e];
          }
        },
        set: {
          auto: function () {
            var e = "string" == typeof x.path ? x.path.replace(/\/$/, "") + "/{$tab}" : "/{$tab}";
            b.verbose("Setting up automatic tab retrieval from server", e), E.isPlainObject(x.apiSettings) ? x.apiSettings.url = e : x.apiSettings = {
              url: e
            };
          },
          loading: function (e) {
            var t = b.get.tabElement(e);
            t.hasClass(C.loading) || (b.verbose("Setting loading state for", t), t.addClass(C.loading).siblings(a).removeClass(C.active + " " + C.loading), 0 < t.length && x.onRequest.call(t[0], e));
          },
          state: function (e) {
            E.address.value(e);
          }
        },
        changeTab: function (d) {
          var f = F.history && F.history.pushState && x.ignoreFirstLoad && T,
              m = x.auto || E.isPlainObject(x.apiSettings),
              g = m && !f ? b.utilities.pathToArray(d) : b.get.defaultPathArray(d);
          d = b.utilities.arrayToPath(g), E.each(g, function (e, t) {
            var n,
                i,
                o,
                a,
                r = g.slice(0, e + 1),
                s = b.utilities.arrayToPath(r),
                l = b.is.tab(s),
                c = e + 1 == g.length,
                u = b.get.tabElement(s);

            if (b.verbose("Looking for tab", t), l) {
              if (b.verbose("Tab was found", t), h = s, v = b.utilities.filterArray(g, r), c ? a = !0 : (i = g.slice(0, e + 2), o = b.utilities.arrayToPath(i), (a = !b.is.tab(o)) && b.verbose("Tab parameters found", i)), a && m) return f ? (b.debug("Ignoring remote content on first tab load", s), T = !1, b.cache.add(d, u.html()), b.activate.all(s), x.onFirstLoad.call(u[0], s, v, y), x.onLoad.call(u[0], s, v, y)) : (b.activate.navigation(s), b.fetch.content(s, d)), !1;
              b.debug("Opened local tab", s), b.activate.all(s), b.cache.read(s) || (b.cache.add(s, !0), b.debug("First time tab loaded calling tab init"), x.onFirstLoad.call(u[0], s, v, y)), x.onLoad.call(u[0], s, v, y);
            } else {
              if (-1 != d.search("/") || "" === d) return b.error(S.missingTab, k, p, s), !1;
              if (s = (n = E("#" + d + ', a[name="' + d + '"]')).closest("[data-tab]").data(w.tab), u = b.get.tabElement(s), n && 0 < n.length && s) return b.debug("Anchor link used, opening parent tab", u, n), u.hasClass(C.active) || setTimeout(function () {
                b.scrollTo(n);
              }, 0), b.activate.all(s), b.cache.read(s) || (b.cache.add(s, !0), b.debug("First time tab loaded calling tab init"), x.onFirstLoad.call(u[0], s, v, y)), x.onLoad.call(u[0], s, v, y), !1;
            }
          });
        },
        scrollTo: function (e) {
          var t = !!(e && 0 < e.length) && e.offset().top;
          !1 !== t && (b.debug("Forcing scroll to an in-page link in a hidden tab", t, e), E(O).scrollTop(t));
        },
        update: {
          content: function (e, t, n) {
            var i = b.get.tabElement(e),
                o = i[0];
            n = n !== D ? n : x.evaluateScripts, "string" == typeof x.cacheType && "dom" == x.cacheType.toLowerCase() && "string" != typeof t ? i.empty().append(E(t).clone(!0)) : n ? (b.debug("Updating HTML and evaluating inline scripts", e, t), i.html(t)) : (b.debug("Updating HTML", e, t), o.innerHTML = t);
          }
        },
        fetch: {
          content: function (t, n) {
            var e,
                i,
                o = b.get.tabElement(t),
                a = {
              dataType: "html",
              encodeParameters: !1,
              on: "now",
              cache: x.alwaysRefresh,
              headers: {
                "X-Remote": !0
              },
              onSuccess: function (e) {
                "response" == x.cacheType && b.cache.add(n, e), b.update.content(t, e), t == h ? (b.debug("Content loaded", t), b.activate.tab(t)) : b.debug("Content loaded in background", t), x.onFirstLoad.call(o[0], t, v, y), x.onLoad.call(o[0], t, v, y), x.loadOnce ? b.cache.add(n, !0) : "string" == typeof x.cacheType && "dom" == x.cacheType.toLowerCase() && 0 < o.children().length ? setTimeout(function () {
                  var e = o.children().clone(!0);
                  e = e.not("script"), b.cache.add(n, e);
                }, 0) : b.cache.add(n, o.html());
              },
              urlData: {
                tab: n
              }
            },
                r = o.api("get request") || !1,
                s = r && "pending" === r.state();
            n = n || t, i = b.cache.read(n), x.cache && i ? (b.activate.tab(t), b.debug("Adding cached content", n), x.loadOnce || ("once" == x.evaluateScripts ? b.update.content(t, i, !1) : b.update.content(t, i)), x.onLoad.call(o[0], t, v, y)) : s ? (b.set.loading(t), b.debug("Content is already loading", n)) : E.api !== D ? (e = E.extend(!0, {}, x.apiSettings, a), b.debug("Retrieving remote content", n, e), b.set.loading(t), o.api(e)) : b.error(S.api);
          }
        },
        activate: {
          all: function (e) {
            b.activate.tab(e), b.activate.navigation(e);
          },
          tab: function (e) {
            var t = b.get.tabElement(e),
                n = "siblings" == x.deactivate ? t.siblings(a) : a.not(t),
                i = t.hasClass(C.active);
            b.verbose("Showing tab content for", t), i || (t.addClass(C.active), n.removeClass(C.active + " " + C.loading), 0 < t.length && x.onVisible.call(t[0], e));
          },
          navigation: function (e) {
            var t = b.get.navElement(e),
                n = "siblings" == x.deactivate ? t.siblings(u) : u.not(t),
                i = t.hasClass(C.active);
            b.verbose("Activating tab navigation for", t, e), i || (t.addClass(C.active), n.removeClass(C.active + " " + C.loading));
          }
        },
        deactivate: {
          all: function () {
            b.deactivate.navigation(), b.deactivate.tabs();
          },
          navigation: function () {
            u.removeClass(C.active);
          },
          tabs: function () {
            a.removeClass(C.active + " " + C.loading);
          }
        },
        is: {
          tab: function (e) {
            return e !== D && 0 < b.get.tabElement(e).length;
          }
        },
        get: {
          initialPath: function () {
            return u.eq(0).data(w.tab) || a.eq(0).data(w.tab);
          },
          path: function () {
            return E.address.value();
          },
          defaultPathArray: function (e) {
            return b.utilities.pathToArray(b.get.defaultPath(e));
          },
          defaultPath: function (e) {
            var t = u.filter("[data-" + w.tab + '^="' + e + '/"]').eq(0).data(w.tab) || !1;

            if (t) {
              if (b.debug("Found default tab", t), o < x.maxDepth) return o++, b.get.defaultPath(t);
              b.error(S.recursion);
            } else b.debug("No default tabs found for", e, a);

            return o = 0, e;
          },
          navElement: function (e) {
            return e = e || h, u.filter("[data-" + w.tab + '="' + e + '"]');
          },
          tabElement: function (e) {
            var t, n, i, o;
            return e = e || h, i = b.utilities.pathToArray(e), o = b.utilities.last(i), t = a.filter("[data-" + w.tab + '="' + e + '"]'), n = a.filter("[data-" + w.tab + '="' + o + '"]'), 0 < t.length ? t : n;
          },
          tab: function () {
            return h;
          }
        },
        utilities: {
          filterArray: function (e, t) {
            return E.grep(e, function (e) {
              return -1 == E.inArray(e, t);
            });
          },
          last: function (e) {
            return !!E.isArray(e) && e[e.length - 1];
          },
          pathToArray: function (e) {
            return e === D && (e = h), "string" == typeof e ? e.split("/") : [e];
          },
          arrayToPath: function (e) {
            return !!E.isArray(e) && e.join("/");
          }
        },
        setting: function (e, t) {
          if (b.debug("Changing setting", e, t), E.isPlainObject(e)) E.extend(!0, x, e);else {
            if (t === D) return x[e];
            E.isPlainObject(x[e]) ? E.extend(!0, x[e], t) : x[e] = t;
          }
        },
        internal: function (e, t) {
          if (E.isPlainObject(e)) E.extend(!0, b, e);else {
            if (t === D) return b[e];
            b[e] = t;
          }
        },
        debug: function () {
          !x.silent && x.debug && (x.performance ? b.performance.log(arguments) : (b.debug = Function.prototype.bind.call(console.info, console, x.name + ":"), b.debug.apply(console, arguments)));
        },
        verbose: function () {
          !x.silent && x.verbose && x.debug && (x.performance ? b.performance.log(arguments) : (b.verbose = Function.prototype.bind.call(console.info, console, x.name + ":"), b.verbose.apply(console, arguments)));
        },
        error: function () {
          x.silent || (b.error = Function.prototype.bind.call(console.error, console, x.name + ":"), b.error.apply(console, arguments));
        },
        performance: {
          log: function (e) {
            var t, n;
            x.performance && (n = (t = new Date().getTime()) - (f || t), f = t, m.push({
              Name: e[0],
              Arguments: [].slice.call(e, 1) || "",
              Element: s,
              "Execution Time": n
            })), clearTimeout(b.performance.timer), b.performance.timer = setTimeout(b.performance.display, 500);
          },
          display: function () {
            var e = x.name + ":",
                n = 0;
            f = !1, clearTimeout(b.performance.timer), E.each(m, function (e, t) {
              n += t["Execution Time"];
            }), e += " " + n + "ms", d && (e += " '" + d + "'"), (console.group !== D || console.table !== D) && 0 < m.length && (console.groupCollapsed(e), console.table ? console.table(m) : E.each(m, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), m = [];
          }
        },
        invoke: function (i, e, t) {
          var o,
              a,
              n,
              r = l;
          return e = e || R, t = s || t, "string" == typeof i && r !== D && (i = i.split(/[\. ]/), o = i.length - 1, E.each(i, function (e, t) {
            var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
            if (E.isPlainObject(r[n]) && e != o) r = r[n];else {
              if (r[n] !== D) return a = r[n], !1;
              if (!E.isPlainObject(r[t]) || e == o) return r[t] !== D ? a = r[t] : b.error(S.method, i), !1;
              r = r[t];
            }
          })), E.isFunction(a) ? n = a.apply(t, e) : a !== D && (n = a), E.isArray(c) ? c.push(n) : c !== D ? c = [c, n] : n !== D && (c = n), a;
        }
      }, A ? (l === D && b.initialize(), b.invoke(g)) : (l !== D && l.invoke("destroy"), b.initialize());
    }), c !== D ? c : this;
  }, E.tab = function () {
    E(F).tab.apply(this, arguments);
  }, E.fn.tab.settings = {
    name: "Tab",
    namespace: "tab",
    silent: !1,
    debug: !1,
    verbose: !1,
    performance: !0,
    auto: !1,
    history: !1,
    historyType: "hash",
    path: !1,
    context: !1,
    childrenOnly: !1,
    maxDepth: 25,
    deactivate: "siblings",
    alwaysRefresh: !1,
    cache: !0,
    loadOnce: !1,
    cacheType: "response",
    ignoreFirstLoad: !1,
    apiSettings: !1,
    evaluateScripts: "once",
    onFirstLoad: function (e, t, n) {},
    onLoad: function (e, t, n) {},
    onVisible: function (e, t, n) {},
    onRequest: function (e, t, n) {},
    templates: {
      determineTitle: function (e) {}
    },
    error: {
      api: "You attempted to load content without API module",
      method: "The method you called is not defined",
      missingTab: "Activated tab cannot be found. Tabs are case-sensitive.",
      noContent: "The tab you specified is missing a content url.",
      path: "History enabled, but no path was specified",
      recursion: "Max recursive depth reached",
      legacyInit: "onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.",
      legacyLoad: "onTabLoad has been renamed to onLoad in 2.0. Please adjust your code",
      state: "History requires Asual's Address library <https://github.com/asual/jquery-address>"
    },
    metadata: {
      tab: "tab",
      loaded: "loaded",
      promise: "promise"
    },
    className: {
      loading: "loading",
      active: "active"
    },
    selector: {
      tabs: ".ui.tab",
      ui: ".ui"
    }
  };
}(jQuery, window, document), function (C, e, w, S) {
  "use strict";

  e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), C.fn.transition = function () {
    var c,
        r = C(this),
        g = r.selector || "",
        p = new Date().getTime(),
        h = [],
        v = arguments,
        b = v[0],
        y = [].slice.call(arguments, 1),
        x = "string" == typeof b;
    e.requestAnimationFrame || e.mozRequestAnimationFrame || e.webkitRequestAnimationFrame || e.msRequestAnimationFrame;
    return r.each(function (i) {
      var u,
          s,
          t,
          d,
          n,
          o,
          e,
          a,
          f,
          m = C(this),
          l = this;
      (f = {
        initialize: function () {
          u = f.get.settings.apply(l, v), d = u.className, t = u.error, n = u.metadata, a = "." + u.namespace, e = "module-" + u.namespace, s = m.data(e) || f, o = f.get.animationEndEvent(), x && (x = f.invoke(b)), !1 === x && (f.verbose("Converted arguments into settings object", u), u.interval ? f.delay(u.animate) : f.animate(), f.instantiate());
        },
        instantiate: function () {
          f.verbose("Storing instance of module", f), s = f, m.data(e, s);
        },
        destroy: function () {
          f.verbose("Destroying previous module for", l), m.removeData(e);
        },
        refresh: function () {
          f.verbose("Refreshing display type on next animation"), delete f.displayType;
        },
        forceRepaint: function () {
          f.verbose("Forcing element repaint");
          var e = m.parent(),
              t = m.next();
          0 === t.length ? m.detach().appendTo(e) : m.detach().insertBefore(t);
        },
        repaint: function () {
          f.verbose("Repainting element");
          l.offsetWidth;
        },
        delay: function (e) {
          var t,
              n = f.get.animationDirection();
          n || (n = f.can.transition() ? f.get.direction() : "static"), e = e !== S ? e : u.interval, t = "auto" == u.reverse && n == d.outward || 1 == u.reverse ? (r.length - i) * u.interval : i * u.interval, f.debug("Delaying animation by", t), setTimeout(f.animate, t);
        },
        animate: function (e) {
          if (u = e || u, !f.is.supported()) return f.error(t.support), !1;

          if (f.debug("Preparing animation", u.animation), f.is.animating()) {
            if (u.queue) return !u.allowRepeats && f.has.direction() && f.is.occurring() && !0 !== f.queuing ? f.debug("Animation is currently occurring, preventing queueing same animation", u.animation) : f.queue(u.animation), !1;
            if (!u.allowRepeats && f.is.occurring()) return f.debug("Animation is already occurring, will not execute repeated animation", u.animation), !1;
            f.debug("New animation started, completing previous early", u.animation), s.complete();
          }

          f.can.animate() ? f.set.animating(u.animation) : f.error(t.noAnimation, u.animation, l);
        },
        reset: function () {
          f.debug("Resetting animation to beginning conditions"), f.remove.animationCallbacks(), f.restore.conditions(), f.remove.animating();
        },
        queue: function (e) {
          f.debug("Queueing animation of", e), f.queuing = !0, m.one(o + ".queue" + a, function () {
            f.queuing = !1, f.repaint(), f.animate.apply(this, u);
          });
        },
        complete: function (e) {
          f.debug("Animation complete", u.animation), f.remove.completeCallback(), f.remove.failSafe(), f.is.looping() || (f.is.outward() ? (f.verbose("Animation is outward, hiding element"), f.restore.conditions(), f.hide()) : f.is.inward() ? (f.verbose("Animation is outward, showing element"), f.restore.conditions(), f.show()) : (f.verbose("Static animation completed"), f.restore.conditions(), u.onComplete.call(l)));
        },
        force: {
          visible: function () {
            var e = m.attr("style"),
                t = f.get.userStyle(),
                n = f.get.displayType(),
                i = t + "display: " + n + " !important;",
                o = m.css("display"),
                a = e === S || "" === e;
            o !== n ? (f.verbose("Overriding default display to show element", n), m.attr("style", i)) : a && m.removeAttr("style");
          },
          hidden: function () {
            var e = m.attr("style"),
                t = m.css("display"),
                n = e === S || "" === e;
            "none" === t || f.is.hidden() ? n && m.removeAttr("style") : (f.verbose("Overriding default display to hide element"), m.css("display", "none"));
          }
        },
        has: {
          direction: function (e) {
            var n = !1;
            return "string" == typeof (e = e || u.animation) && (e = e.split(" "), C.each(e, function (e, t) {
              t !== d.inward && t !== d.outward || (n = !0);
            })), n;
          },
          inlineDisplay: function () {
            var e = m.attr("style") || "";
            return C.isArray(e.match(/display.*?;/, ""));
          }
        },
        set: {
          animating: function (e) {
            var t;
            f.remove.completeCallback(), e = e || u.animation, t = f.get.animationClass(e), f.save.animation(t), f.force.visible(), f.remove.hidden(), f.remove.direction(), f.start.animation(t);
          },
          duration: function (e, t) {
            !(t = "number" == typeof (t = t || u.duration) ? t + "ms" : t) && 0 !== t || (f.verbose("Setting animation duration", t), m.css({
              "animation-duration": t
            }));
          },
          direction: function (e) {
            (e = e || f.get.direction()) == d.inward ? f.set.inward() : f.set.outward();
          },
          looping: function () {
            f.debug("Transition set to loop"), m.addClass(d.looping);
          },
          hidden: function () {
            m.addClass(d.transition).addClass(d.hidden);
          },
          inward: function () {
            f.debug("Setting direction to inward"), m.removeClass(d.outward).addClass(d.inward);
          },
          outward: function () {
            f.debug("Setting direction to outward"), m.removeClass(d.inward).addClass(d.outward);
          },
          visible: function () {
            m.addClass(d.transition).addClass(d.visible);
          }
        },
        start: {
          animation: function (e) {
            e = e || f.get.animationClass(), f.debug("Starting tween", e), m.addClass(e).one(o + ".complete" + a, f.complete), u.useFailSafe && f.add.failSafe(), f.set.duration(u.duration), u.onStart.call(l);
          }
        },
        save: {
          animation: function (e) {
            f.cache || (f.cache = {}), f.cache.animation = e;
          },
          displayType: function (e) {
            "none" !== e && m.data(n.displayType, e);
          },
          transitionExists: function (e, t) {
            C.fn.transition.exists[e] = t, f.verbose("Saving existence of transition", e, t);
          }
        },
        restore: {
          conditions: function () {
            var e = f.get.currentAnimation();
            e && (m.removeClass(e), f.verbose("Removing animation class", f.cache)), f.remove.duration();
          }
        },
        add: {
          failSafe: function () {
            var e = f.get.duration();
            f.timer = setTimeout(function () {
              m.triggerHandler(o);
            }, e + u.failSafeDelay), f.verbose("Adding fail safe timer", f.timer);
          }
        },
        remove: {
          animating: function () {
            m.removeClass(d.animating);
          },
          animationCallbacks: function () {
            f.remove.queueCallback(), f.remove.completeCallback();
          },
          queueCallback: function () {
            m.off(".queue" + a);
          },
          completeCallback: function () {
            m.off(".complete" + a);
          },
          display: function () {
            m.css("display", "");
          },
          direction: function () {
            m.removeClass(d.inward).removeClass(d.outward);
          },
          duration: function () {
            m.css("animation-duration", "");
          },
          failSafe: function () {
            f.verbose("Removing fail safe timer", f.timer), f.timer && clearTimeout(f.timer);
          },
          hidden: function () {
            m.removeClass(d.hidden);
          },
          visible: function () {
            m.removeClass(d.visible);
          },
          looping: function () {
            f.debug("Transitions are no longer looping"), f.is.looping() && (f.reset(), m.removeClass(d.looping));
          },
          transition: function () {
            m.removeClass(d.visible).removeClass(d.hidden);
          }
        },
        get: {
          settings: function (e, t, n) {
            return "object" == typeof e ? C.extend(!0, {}, C.fn.transition.settings, e) : "function" == typeof n ? C.extend({}, C.fn.transition.settings, {
              animation: e,
              onComplete: n,
              duration: t
            }) : "string" == typeof t || "number" == typeof t ? C.extend({}, C.fn.transition.settings, {
              animation: e,
              duration: t
            }) : "object" == typeof t ? C.extend({}, C.fn.transition.settings, t, {
              animation: e
            }) : "function" == typeof t ? C.extend({}, C.fn.transition.settings, {
              animation: e,
              onComplete: t
            }) : C.extend({}, C.fn.transition.settings, {
              animation: e
            });
          },
          animationClass: function (e) {
            var t = e || u.animation,
                n = f.can.transition() && !f.has.direction() ? f.get.direction() + " " : "";
            return d.animating + " " + d.transition + " " + n + t;
          },
          currentAnimation: function () {
            return !(!f.cache || f.cache.animation === S) && f.cache.animation;
          },
          currentDirection: function () {
            return f.is.inward() ? d.inward : d.outward;
          },
          direction: function () {
            return f.is.hidden() || !f.is.visible() ? d.inward : d.outward;
          },
          animationDirection: function (e) {
            var n;
            return "string" == typeof (e = e || u.animation) && (e = e.split(" "), C.each(e, function (e, t) {
              t === d.inward ? n = d.inward : t === d.outward && (n = d.outward);
            })), n || !1;
          },
          duration: function (e) {
            return !1 === (e = e || u.duration) && (e = m.css("animation-duration") || 0), "string" == typeof e ? -1 < e.indexOf("ms") ? parseFloat(e) : 1e3 * parseFloat(e) : e;
          },
          displayType: function (e) {
            return e = e === S || e, u.displayType ? u.displayType : (e && m.data(n.displayType) === S && f.can.transition(!0), m.data(n.displayType));
          },
          userStyle: function (e) {
            return (e = e || m.attr("style") || "").replace(/display.*?;/, "");
          },
          transitionExists: function (e) {
            return C.fn.transition.exists[e];
          },
          animationStartEvent: function () {
            var e,
                t = w.createElement("div"),
                n = {
              animation: "animationstart",
              OAnimation: "oAnimationStart",
              MozAnimation: "mozAnimationStart",
              WebkitAnimation: "webkitAnimationStart"
            };

            for (e in n) if (t.style[e] !== S) return n[e];

            return !1;
          },
          animationEndEvent: function () {
            var e,
                t = w.createElement("div"),
                n = {
              animation: "animationend",
              OAnimation: "oAnimationEnd",
              MozAnimation: "mozAnimationEnd",
              WebkitAnimation: "webkitAnimationEnd"
            };

            for (e in n) if (t.style[e] !== S) return n[e];

            return !1;
          }
        },
        can: {
          transition: function (e) {
            var t,
                n,
                i,
                o,
                a,
                r,
                s = u.animation,
                l = f.get.transitionExists(s),
                c = f.get.displayType(!1);

            if (l === S || e) {
              if (f.verbose("Determining whether animation exists"), t = m.attr("class"), n = m.prop("tagName"), o = (i = C("<" + n + " />").addClass(t).insertAfter(m)).addClass(s).removeClass(d.inward).removeClass(d.outward).addClass(d.animating).addClass(d.transition).css("animationName"), a = i.addClass(d.inward).css("animationName"), c || (c = i.attr("class", t).removeAttr("style").removeClass(d.hidden).removeClass(d.visible).show().css("display"), f.verbose("Determining final display state", c), f.save.displayType(c)), i.remove(), o != a) f.debug("Direction exists for animation", s), r = !0;else {
                if ("none" == o || !o) return void f.debug("No animation defined in css", s);
                f.debug("Static animation found", s, c), r = !1;
              }
              f.save.transitionExists(s, r);
            }

            return l !== S ? l : r;
          },
          animate: function () {
            return f.can.transition() !== S;
          }
        },
        is: {
          animating: function () {
            return m.hasClass(d.animating);
          },
          inward: function () {
            return m.hasClass(d.inward);
          },
          outward: function () {
            return m.hasClass(d.outward);
          },
          looping: function () {
            return m.hasClass(d.looping);
          },
          occurring: function (e) {
            return e = "." + (e = e || u.animation).replace(" ", "."), 0 < m.filter(e).length;
          },
          visible: function () {
            return m.is(":visible");
          },
          hidden: function () {
            return "hidden" === m.css("visibility");
          },
          supported: function () {
            return !1 !== o;
          }
        },
        hide: function () {
          f.verbose("Hiding element"), f.is.animating() && f.reset(), l.blur(), f.remove.display(), f.remove.visible(), f.set.hidden(), f.force.hidden(), u.onHide.call(l), u.onComplete.call(l);
        },
        show: function (e) {
          f.verbose("Showing element", e), f.remove.hidden(), f.set.visible(), f.force.visible(), u.onShow.call(l), u.onComplete.call(l);
        },
        toggle: function () {
          f.is.visible() ? f.hide() : f.show();
        },
        stop: function () {
          f.debug("Stopping current animation"), m.triggerHandler(o);
        },
        stopAll: function () {
          f.debug("Stopping all animation"), f.remove.queueCallback(), m.triggerHandler(o);
        },
        clear: {
          queue: function () {
            f.debug("Clearing animation queue"), f.remove.queueCallback();
          }
        },
        enable: function () {
          f.verbose("Starting animation"), m.removeClass(d.disabled);
        },
        disable: function () {
          f.debug("Stopping animation"), m.addClass(d.disabled);
        },
        setting: function (e, t) {
          if (f.debug("Changing setting", e, t), C.isPlainObject(e)) C.extend(!0, u, e);else {
            if (t === S) return u[e];
            C.isPlainObject(u[e]) ? C.extend(!0, u[e], t) : u[e] = t;
          }
        },
        internal: function (e, t) {
          if (C.isPlainObject(e)) C.extend(!0, f, e);else {
            if (t === S) return f[e];
            f[e] = t;
          }
        },
        debug: function () {
          !u.silent && u.debug && (u.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, u.name + ":"), f.debug.apply(console, arguments)));
        },
        verbose: function () {
          !u.silent && u.verbose && u.debug && (u.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, u.name + ":"), f.verbose.apply(console, arguments)));
        },
        error: function () {
          u.silent || (f.error = Function.prototype.bind.call(console.error, console, u.name + ":"), f.error.apply(console, arguments));
        },
        performance: {
          log: function (e) {
            var t, n;
            u.performance && (n = (t = new Date().getTime()) - (p || t), p = t, h.push({
              Name: e[0],
              Arguments: [].slice.call(e, 1) || "",
              Element: l,
              "Execution Time": n
            })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500);
          },
          display: function () {
            var e = u.name + ":",
                n = 0;
            p = !1, clearTimeout(f.performance.timer), C.each(h, function (e, t) {
              n += t["Execution Time"];
            }), e += " " + n + "ms", g && (e += " '" + g + "'"), 1 < r.length && (e += " (" + r.length + ")"), (console.group !== S || console.table !== S) && 0 < h.length && (console.groupCollapsed(e), console.table ? console.table(h) : C.each(h, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), h = [];
          }
        },
        invoke: function (i, e, t) {
          var o,
              a,
              n,
              r = s;
          return e = e || y, t = l || t, "string" == typeof i && r !== S && (i = i.split(/[\. ]/), o = i.length - 1, C.each(i, function (e, t) {
            var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
            if (C.isPlainObject(r[n]) && e != o) r = r[n];else {
              if (r[n] !== S) return a = r[n], !1;
              if (!C.isPlainObject(r[t]) || e == o) return r[t] !== S && (a = r[t]), !1;
              r = r[t];
            }
          })), C.isFunction(a) ? n = a.apply(t, e) : a !== S && (n = a), C.isArray(c) ? c.push(n) : c !== S ? c = [c, n] : n !== S && (c = n), a !== S && a;
        }
      }).initialize();
    }), c !== S ? c : this;
  }, C.fn.transition.exists = {}, C.fn.transition.settings = {
    name: "Transition",
    silent: !1,
    debug: !1,
    verbose: !1,
    performance: !0,
    namespace: "transition",
    interval: 0,
    reverse: "auto",
    onStart: function () {},
    onComplete: function () {},
    onShow: function () {},
    onHide: function () {},
    useFailSafe: !0,
    failSafeDelay: 100,
    allowRepeats: !1,
    displayType: !1,
    animation: "fade",
    duration: !1,
    queue: !0,
    metadata: {
      displayType: "display"
    },
    className: {
      animating: "animating",
      disabled: "disabled",
      hidden: "hidden",
      inward: "in",
      loading: "loading",
      looping: "looping",
      outward: "out",
      transition: "transition",
      visible: "visible"
    },
    error: {
      noAnimation: "Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.",
      repeated: "That animation is already occurring, cancelling repeated animation",
      method: "The method you called is not defined",
      support: "This browser does not support CSS animations"
    }
  };
}(jQuery, window, document), function (P, E, e, F) {
  "use strict";

  E = void 0 !== E && E.Math == Math ? E : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
  P.api = P.fn.api = function (x) {
    var C,
        e = P.isFunction(this) ? P(E) : P(this),
        w = e.selector || "",
        S = new Date().getTime(),
        k = [],
        T = x,
        A = "string" == typeof T,
        R = [].slice.call(arguments, 1);
    return e.each(function () {
      var a,
          r,
          n,
          e,
          s,
          l,
          c = P.isPlainObject(x) ? P.extend(!0, {}, P.fn.api.settings, x) : P.extend({}, P.fn.api.settings),
          t = c.namespace,
          i = c.metadata,
          o = c.selector,
          u = c.error,
          d = c.className,
          f = "." + t,
          m = "module-" + t,
          g = P(this),
          p = g.closest(o.form),
          h = c.stateContext ? P(c.stateContext) : g,
          v = this,
          b = h[0],
          y = g.data(m);
      l = {
        initialize: function () {
          A || l.bind.events(), l.instantiate();
        },
        instantiate: function () {
          l.verbose("Storing instance of module", l), y = l, g.data(m, y);
        },
        destroy: function () {
          l.verbose("Destroying previous module for", v), g.removeData(m).off(f);
        },
        bind: {
          events: function () {
            var e = l.get.event();
            e ? (l.verbose("Attaching API events to element", e), g.on(e + f, l.event.trigger)) : "now" == c.on && (l.debug("Querying API endpoint immediately"), l.query());
          }
        },
        decode: {
          json: function (e) {
            if (e !== F && "string" == typeof e) try {
              e = JSON.parse(e);
            } catch (e) {}
            return e;
          }
        },
        read: {
          cachedResponse: function (e) {
            var t;
            if (E.Storage !== F) return t = sessionStorage.getItem(e), l.debug("Using cached response", e, t), t = l.decode.json(t);
            l.error(u.noStorage);
          }
        },
        write: {
          cachedResponse: function (e, t) {
            t && "" === t ? l.debug("Response empty, not caching", t) : E.Storage !== F ? (P.isPlainObject(t) && (t = JSON.stringify(t)), sessionStorage.setItem(e, t), l.verbose("Storing cached response for url", e, t)) : l.error(u.noStorage);
          }
        },
        query: function () {
          if (l.is.disabled()) l.debug("Element is disabled API request aborted");else {
            if (l.is.loading()) {
              if (!c.interruptRequests) return void l.debug("Cancelling request, previous request is still pending");
              l.debug("Interrupting previous request"), l.abort();
            }

            if (c.defaultData && P.extend(!0, c.urlData, l.get.defaultData()), c.serializeForm && (c.data = l.add.formData(c.data)), !1 === (r = l.get.settings())) return l.cancelled = !0, void l.error(u.beforeSend);

            if (l.cancelled = !1, (n = l.get.templatedURL()) || l.is.mocked()) {
              if ((n = l.add.urlData(n)) || l.is.mocked()) {
                if (r.url = c.base + n, a = P.extend(!0, {}, c, {
                  type: c.method || c.type,
                  data: e,
                  url: c.base + n,
                  beforeSend: c.beforeXHR,
                  success: function () {},
                  failure: function () {},
                  complete: function () {}
                }), l.debug("Querying URL", a.url), l.verbose("Using AJAX settings", a), "local" === c.cache && l.read.cachedResponse(n)) return l.debug("Response returned from local cache"), l.request = l.create.request(), void l.request.resolveWith(b, [l.read.cachedResponse(n)]);
                c.throttle ? c.throttleFirstRequest || l.timer ? (l.debug("Throttling request", c.throttle), clearTimeout(l.timer), l.timer = setTimeout(function () {
                  l.timer && delete l.timer, l.debug("Sending throttled request", e, a.method), l.send.request();
                }, c.throttle)) : (l.debug("Sending request", e, a.method), l.send.request(), l.timer = setTimeout(function () {}, c.throttle)) : (l.debug("Sending request", e, a.method), l.send.request());
              }
            } else l.error(u.missingURL);
          }
        },
        should: {
          removeError: function () {
            return !0 === c.hideError || "auto" === c.hideError && !l.is.form();
          }
        },
        is: {
          disabled: function () {
            return 0 < g.filter(o.disabled).length;
          },
          expectingJSON: function () {
            return "json" === c.dataType || "jsonp" === c.dataType;
          },
          form: function () {
            return g.is("form") || h.is("form");
          },
          mocked: function () {
            return c.mockResponse || c.mockResponseAsync || c.response || c.responseAsync;
          },
          input: function () {
            return g.is("input");
          },
          loading: function () {
            return !!l.request && "pending" == l.request.state();
          },
          abortedRequest: function (e) {
            return e && e.readyState !== F && 0 === e.readyState ? (l.verbose("XHR request determined to be aborted"), !0) : (l.verbose("XHR request was not aborted"), !1);
          },
          validResponse: function (e) {
            return l.is.expectingJSON() && P.isFunction(c.successTest) ? (l.debug("Checking JSON returned success", c.successTest, e), c.successTest(e) ? (l.debug("Response passed success test", e), !0) : (l.debug("Response failed success test", e), !1)) : (l.verbose("Response is not JSON, skipping validation", c.successTest, e), !0);
          }
        },
        was: {
          cancelled: function () {
            return l.cancelled || !1;
          },
          succesful: function () {
            return l.request && "resolved" == l.request.state();
          },
          failure: function () {
            return l.request && "rejected" == l.request.state();
          },
          complete: function () {
            return l.request && ("resolved" == l.request.state() || "rejected" == l.request.state());
          }
        },
        add: {
          urlData: function (o, a) {
            var e, t;
            return o && (e = o.match(c.regExp.required), t = o.match(c.regExp.optional), a = a || c.urlData, e && (l.debug("Looking for required URL variables", e), P.each(e, function (e, t) {
              var n = -1 !== t.indexOf("$") ? t.substr(2, t.length - 3) : t.substr(1, t.length - 2),
                  i = P.isPlainObject(a) && a[n] !== F ? a[n] : g.data(n) !== F ? g.data(n) : h.data(n) !== F ? h.data(n) : a[n];
              if (i === F) return l.error(u.requiredParameter, n, o), o = !1;
              l.verbose("Found required variable", n, i), i = c.encodeParameters ? l.get.urlEncodedValue(i) : i, o = o.replace(t, i);
            })), t && (l.debug("Looking for optional URL variables", e), P.each(t, function (e, t) {
              var n = -1 !== t.indexOf("$") ? t.substr(3, t.length - 4) : t.substr(2, t.length - 3),
                  i = P.isPlainObject(a) && a[n] !== F ? a[n] : g.data(n) !== F ? g.data(n) : h.data(n) !== F ? h.data(n) : a[n];
              o = i !== F ? (l.verbose("Optional variable Found", n, i), o.replace(t, i)) : (l.verbose("Optional variable not found", n), -1 !== o.indexOf("/" + t) ? o.replace("/" + t, "") : o.replace(t, ""));
            }))), o;
          },
          formData: function (e) {
            var t = P.fn.serializeObject !== F,
                n = t ? p.serializeObject() : p.serialize();
            return e = e || c.data, e = P.isPlainObject(e) ? t ? (l.debug("Extending existing data with form data", e, n), P.extend(!0, {}, e, n)) : (l.error(u.missingSerialize), l.debug("Cant extend data. Replacing data with form data", e, n), n) : (l.debug("Adding form data", n), n);
          }
        },
        send: {
          request: function () {
            l.set.loading(), l.request = l.create.request(), l.is.mocked() ? l.mockedXHR = l.create.mockedXHR() : l.xhr = l.create.xhr(), c.onRequest.call(b, l.request, l.xhr);
          }
        },
        event: {
          trigger: function (e) {
            l.query(), "submit" != e.type && "click" != e.type || e.preventDefault();
          },
          xhr: {
            always: function () {},
            done: function (e, t, n) {
              var i = this,
                  o = new Date().getTime() - s,
                  a = c.loadingDuration - o,
                  r = !!P.isFunction(c.onResponse) && (l.is.expectingJSON() ? c.onResponse.call(i, P.extend(!0, {}, e)) : c.onResponse.call(i, e));
              a = 0 < a ? a : 0, r && (l.debug("Modified API response in onResponse callback", c.onResponse, r, e), e = r), 0 < a && l.debug("Response completed early delaying state change by", a), setTimeout(function () {
                l.is.validResponse(e) ? l.request.resolveWith(i, [e, n]) : l.request.rejectWith(i, [n, "invalid"]);
              }, a);
            },
            fail: function (e, t, n) {
              var i = this,
                  o = new Date().getTime() - s,
                  a = c.loadingDuration - o;
              0 < (a = 0 < a ? a : 0) && l.debug("Response completed early delaying state change by", a), setTimeout(function () {
                l.is.abortedRequest(e) ? l.request.rejectWith(i, [e, "aborted", n]) : l.request.rejectWith(i, [e, "error", t, n]);
              }, a);
            }
          },
          request: {
            done: function (e, t) {
              l.debug("Successful API Response", e), "local" === c.cache && n && (l.write.cachedResponse(n, e), l.debug("Saving server response locally", l.cache)), c.onSuccess.call(b, e, g, t);
            },
            complete: function (e, t) {
              var n, i;
              l.was.succesful() ? (i = e, n = t) : (n = e, i = l.get.responseFromXHR(n)), l.remove.loading(), c.onComplete.call(b, i, g, n);
            },
            fail: function (e, t, n) {
              var i = l.get.responseFromXHR(e),
                  o = l.get.errorFromRequest(i, t, n);
              if ("aborted" == t) return l.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)", t, n), c.onAbort.call(b, t, g, e), !0;
              "invalid" == t ? l.debug("JSON did not pass success test. A server-side error has most likely occurred", i) : "error" == t && e !== F && (l.debug("XHR produced a server error", t, n), 200 != e.status && n !== F && "" !== n && l.error(u.statusMessage + n, a.url), c.onError.call(b, o, g, e)), c.errorDuration && "aborted" !== t && (l.debug("Adding error state"), l.set.error(), l.should.removeError() && setTimeout(l.remove.error, c.errorDuration)), l.debug("API Request failed", o, e), c.onFailure.call(b, i, g, e);
            }
          }
        },
        create: {
          request: function () {
            return P.Deferred().always(l.event.request.complete).done(l.event.request.done).fail(l.event.request.fail);
          },
          mockedXHR: function () {
            var e,
                t,
                n,
                i = c.mockResponse || c.response,
                o = c.mockResponseAsync || c.responseAsync;
            return n = P.Deferred().always(l.event.xhr.complete).done(l.event.xhr.done).fail(l.event.xhr.fail), i ? (t = P.isFunction(i) ? (l.debug("Using specified synchronous callback", i), i.call(b, r)) : (l.debug("Using settings specified response", i), i), n.resolveWith(b, [t, !1, {
              responseText: t
            }])) : P.isFunction(o) && (e = function (e) {
              l.debug("Async callback returned response", e), e ? n.resolveWith(b, [e, !1, {
                responseText: e
              }]) : n.rejectWith(b, [{
                responseText: e
              }, !1, !1]);
            }, l.debug("Using specified async response callback", o), o.call(b, r, e)), n;
          },
          xhr: function () {
            var e;
            return e = P.ajax(a).always(l.event.xhr.always).done(l.event.xhr.done).fail(l.event.xhr.fail), l.verbose("Created server request", e, a), e;
          }
        },
        set: {
          error: function () {
            l.verbose("Adding error state to element", h), h.addClass(d.error);
          },
          loading: function () {
            l.verbose("Adding loading state to element", h), h.addClass(d.loading), s = new Date().getTime();
          }
        },
        remove: {
          error: function () {
            l.verbose("Removing error state from element", h), h.removeClass(d.error);
          },
          loading: function () {
            l.verbose("Removing loading state from element", h), h.removeClass(d.loading);
          }
        },
        get: {
          responseFromXHR: function (e) {
            return !!P.isPlainObject(e) && (l.is.expectingJSON() ? l.decode.json(e.responseText) : e.responseText);
          },
          errorFromRequest: function (e, t, n) {
            return P.isPlainObject(e) && e.error !== F ? e.error : c.error[t] !== F ? c.error[t] : n;
          },
          request: function () {
            return l.request || !1;
          },
          xhr: function () {
            return l.xhr || !1;
          },
          settings: function () {
            var e;
            return (e = c.beforeSend.call(b, c)) && (e.success !== F && (l.debug("Legacy success callback detected", e), l.error(u.legacyParameters, e.success), e.onSuccess = e.success), e.failure !== F && (l.debug("Legacy failure callback detected", e), l.error(u.legacyParameters, e.failure), e.onFailure = e.failure), e.complete !== F && (l.debug("Legacy complete callback detected", e), l.error(u.legacyParameters, e.complete), e.onComplete = e.complete)), e === F && l.error(u.noReturnedValue), !1 === e ? e : e !== F ? P.extend(!0, {}, e) : P.extend(!0, {}, c);
          },
          urlEncodedValue: function (e) {
            var t = E.decodeURIComponent(e),
                n = E.encodeURIComponent(e);
            return t !== e ? (l.debug("URL value is already encoded, avoiding double encoding", e), e) : (l.verbose("Encoding value using encodeURIComponent", e, n), n);
          },
          defaultData: function () {
            var e = {};
            return P.isWindow(v) || (l.is.input() ? e.value = g.val() : l.is.form() || (e.text = g.text())), e;
          },
          event: function () {
            return P.isWindow(v) || "now" == c.on ? (l.debug("API called without element, no events attached"), !1) : "auto" == c.on ? g.is("input") ? v.oninput !== F ? "input" : v.onpropertychange !== F ? "propertychange" : "keyup" : g.is("form") ? "submit" : "click" : c.on;
          },
          templatedURL: function (e) {
            if (e = e || g.data(i.action) || c.action || !1, n = g.data(i.url) || c.url || !1) return l.debug("Using specified url", n), n;

            if (e) {
              if (l.debug("Looking up url for action", e, c.api), c.api[e] === F && !l.is.mocked()) return void l.error(u.missingAction, c.action, c.api);
              n = c.api[e];
            } else l.is.form() && (n = g.attr("action") || h.attr("action") || !1, l.debug("No url or action specified, defaulting to form action", n));

            return n;
          }
        },
        abort: function () {
          var e = l.get.xhr();
          e && "resolved" !== e.state() && (l.debug("Cancelling API request"), e.abort());
        },
        reset: function () {
          l.remove.error(), l.remove.loading();
        },
        setting: function (e, t) {
          if (l.debug("Changing setting", e, t), P.isPlainObject(e)) P.extend(!0, c, e);else {
            if (t === F) return c[e];
            P.isPlainObject(c[e]) ? P.extend(!0, c[e], t) : c[e] = t;
          }
        },
        internal: function (e, t) {
          if (P.isPlainObject(e)) P.extend(!0, l, e);else {
            if (t === F) return l[e];
            l[e] = t;
          }
        },
        debug: function () {
          !c.silent && c.debug && (c.performance ? l.performance.log(arguments) : (l.debug = Function.prototype.bind.call(console.info, console, c.name + ":"), l.debug.apply(console, arguments)));
        },
        verbose: function () {
          !c.silent && c.verbose && c.debug && (c.performance ? l.performance.log(arguments) : (l.verbose = Function.prototype.bind.call(console.info, console, c.name + ":"), l.verbose.apply(console, arguments)));
        },
        error: function () {
          c.silent || (l.error = Function.prototype.bind.call(console.error, console, c.name + ":"), l.error.apply(console, arguments));
        },
        performance: {
          log: function (e) {
            var t, n;
            c.performance && (n = (t = new Date().getTime()) - (S || t), S = t, k.push({
              Name: e[0],
              Arguments: [].slice.call(e, 1) || "",
              "Execution Time": n
            })), clearTimeout(l.performance.timer), l.performance.timer = setTimeout(l.performance.display, 500);
          },
          display: function () {
            var e = c.name + ":",
                n = 0;
            S = !1, clearTimeout(l.performance.timer), P.each(k, function (e, t) {
              n += t["Execution Time"];
            }), e += " " + n + "ms", w && (e += " '" + w + "'"), (console.group !== F || console.table !== F) && 0 < k.length && (console.groupCollapsed(e), console.table ? console.table(k) : P.each(k, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), k = [];
          }
        },
        invoke: function (i, e, t) {
          var o,
              a,
              n,
              r = y;
          return e = e || R, t = v || t, "string" == typeof i && r !== F && (i = i.split(/[\. ]/), o = i.length - 1, P.each(i, function (e, t) {
            var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
            if (P.isPlainObject(r[n]) && e != o) r = r[n];else {
              if (r[n] !== F) return a = r[n], !1;
              if (!P.isPlainObject(r[t]) || e == o) return r[t] !== F ? a = r[t] : l.error(u.method, i), !1;
              r = r[t];
            }
          })), P.isFunction(a) ? n = a.apply(t, e) : a !== F && (n = a), P.isArray(C) ? C.push(n) : C !== F ? C = [C, n] : n !== F && (C = n), a;
        }
      }, A ? (y === F && l.initialize(), l.invoke(T)) : (y !== F && y.invoke("destroy"), l.initialize());
    }), C !== F ? C : this;
  }, P.api.settings = {
    name: "API",
    namespace: "api",
    debug: !1,
    verbose: !1,
    performance: !0,
    api: {},
    cache: !0,
    interruptRequests: !0,
    on: "auto",
    stateContext: !1,
    loadingDuration: 0,
    hideError: "auto",
    errorDuration: 2e3,
    encodeParameters: !0,
    action: !1,
    url: !1,
    base: "",
    urlData: {},
    defaultData: !0,
    serializeForm: !1,
    throttle: 0,
    throttleFirstRequest: !0,
    method: "get",
    data: {},
    dataType: "json",
    mockResponse: !1,
    mockResponseAsync: !1,
    response: !1,
    responseAsync: !1,
    beforeSend: function (e) {
      return e;
    },
    beforeXHR: function (e) {},
    onRequest: function (e, t) {},
    onResponse: !1,
    onSuccess: function (e, t) {},
    onComplete: function (e, t) {},
    onFailure: function (e, t) {},
    onError: function (e, t) {},
    onAbort: function (e, t) {},
    successTest: !1,
    error: {
      beforeSend: "The before send function has aborted the request",
      error: "There was an error with your request",
      exitConditions: "API Request Aborted. Exit conditions met",
      JSONParse: "JSON could not be parsed during error handling",
      legacyParameters: "You are using legacy API success callback names",
      method: "The method you called is not defined",
      missingAction: "API action used but no url was defined",
      missingSerialize: "jquery-serialize-object is required to add form data to an existing data object",
      missingURL: "No URL specified for api event",
      noReturnedValue: "The beforeSend callback must return a settings object, beforeSend ignored.",
      noStorage: "Caching responses locally requires session storage",
      parseError: "There was an error parsing your request",
      requiredParameter: "Missing a required URL parameter: ",
      statusMessage: "Server gave an error: ",
      timeout: "Your request timed out"
    },
    regExp: {
      required: /\{\$*[A-z0-9]+\}/g,
      optional: /\{\/\$*[A-z0-9]+\}/g
    },
    className: {
      loading: "loading",
      error: "error"
    },
    selector: {
      disabled: ".disabled",
      form: "form"
    },
    metadata: {
      action: "action",
      url: "url"
    }
  };
}(jQuery, window, document), function (P, E, F, O) {
  "use strict";

  E = void 0 !== E && E.Math == Math ? E : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), P.fn.visibility = function (b) {
    var y,
        e = P(this),
        x = e.selector || "",
        C = new Date().getTime(),
        w = [],
        S = b,
        k = "string" == typeof S,
        T = [].slice.call(arguments, 1),
        A = e.length,
        R = 0;
    return e.each(function () {
      var e,
          t,
          n,
          s,
          o = P.isPlainObject(b) ? P.extend(!0, {}, P.fn.visibility.settings, b) : P.extend({}, P.fn.visibility.settings),
          i = o.className,
          a = o.namespace,
          l = o.error,
          r = o.metadata,
          c = "." + a,
          u = "module-" + a,
          d = P(E),
          f = P(this),
          m = P(o.context),
          g = (f.selector, f.data(u)),
          p = E.requestAnimationFrame || E.mozRequestAnimationFrame || E.webkitRequestAnimationFrame || E.msRequestAnimationFrame || function (e) {
        setTimeout(e, 0);
      },
          h = this,
          v = !1;

      s = {
        initialize: function () {
          s.debug("Initializing", o), s.setup.cache(), s.should.trackChanges() && ("image" == o.type && s.setup.image(), "fixed" == o.type && s.setup.fixed(), o.observeChanges && s.observeChanges(), s.bind.events()), s.save.position(), s.is.visible() || s.error(l.visible, f), o.initialCheck && s.checkVisibility(), s.instantiate();
        },
        instantiate: function () {
          s.debug("Storing instance", s), f.data(u, s), g = s;
        },
        destroy: function () {
          s.verbose("Destroying previous module"), n && n.disconnect(), t && t.disconnect(), d.off("load" + c, s.event.load).off("resize" + c, s.event.resize), m.off("scroll" + c, s.event.scroll).off("scrollchange" + c, s.event.scrollchange), "fixed" == o.type && (s.resetFixed(), s.remove.placeholder()), f.off(c).removeData(u);
        },
        observeChanges: function () {
          "MutationObserver" in E && (t = new MutationObserver(s.event.contextChanged), n = new MutationObserver(s.event.changed), t.observe(F, {
            childList: !0,
            subtree: !0
          }), n.observe(h, {
            childList: !0,
            subtree: !0
          }), s.debug("Setting up mutation observer", n));
        },
        bind: {
          events: function () {
            s.verbose("Binding visibility events to scroll and resize"), o.refreshOnLoad && d.on("load" + c, s.event.load), d.on("resize" + c, s.event.resize), m.off("scroll" + c).on("scroll" + c, s.event.scroll).on("scrollchange" + c, s.event.scrollchange);
          }
        },
        event: {
          changed: function (e) {
            s.verbose("DOM tree modified, updating visibility calculations"), s.timer = setTimeout(function () {
              s.verbose("DOM tree modified, updating sticky menu"), s.refresh();
            }, 100);
          },
          contextChanged: function (e) {
            [].forEach.call(e, function (e) {
              e.removedNodes && [].forEach.call(e.removedNodes, function (e) {
                (e == h || 0 < P(e).find(h).length) && (s.debug("Element removed from DOM, tearing down events"), s.destroy());
              });
            });
          },
          resize: function () {
            s.debug("Window resized"), o.refreshOnResize && p(s.refresh);
          },
          load: function () {
            s.debug("Page finished loading"), p(s.refresh);
          },
          scroll: function () {
            o.throttle ? (clearTimeout(s.timer), s.timer = setTimeout(function () {
              m.triggerHandler("scrollchange" + c, [m.scrollTop()]);
            }, o.throttle)) : p(function () {
              m.triggerHandler("scrollchange" + c, [m.scrollTop()]);
            });
          },
          scrollchange: function (e, t) {
            s.checkVisibility(t);
          }
        },
        precache: function (e, t) {
          e instanceof Array || (e = [e]);

          for (var n = e.length, i = 0, o = [], a = F.createElement("img"), r = function () {
            ++i >= e.length && P.isFunction(t) && t();
          }; n--;) (a = F.createElement("img")).onload = r, a.onerror = r, a.src = e[n], o.push(a);
        },
        enableCallbacks: function () {
          s.debug("Allowing callbacks to occur"), v = !1;
        },
        disableCallbacks: function () {
          s.debug("Disabling all callbacks temporarily"), v = !0;
        },
        should: {
          trackChanges: function () {
            return k ? (s.debug("One time query, no need to bind events"), !1) : (s.debug("Callbacks being attached"), !0);
          }
        },
        setup: {
          cache: function () {
            s.cache = {
              occurred: {},
              screen: {},
              element: {}
            };
          },
          image: function () {
            var e = f.data(r.src);
            e && (s.verbose("Lazy loading image", e), o.once = !0, o.observeChanges = !1, o.onOnScreen = function () {
              s.debug("Image on screen", h), s.precache(e, function () {
                s.set.image(e, function () {
                  ++R == A && o.onAllLoaded.call(this), o.onLoad.call(this);
                });
              });
            });
          },
          fixed: function () {
            s.debug("Setting up fixed"), o.once = !1, o.observeChanges = !1, o.initialCheck = !0, o.refreshOnLoad = !0, b.transition || (o.transition = !1), s.create.placeholder(), s.debug("Added placeholder", e), o.onTopPassed = function () {
              s.debug("Element passed, adding fixed position", f), s.show.placeholder(), s.set.fixed(), o.transition && P.fn.transition !== O && f.transition(o.transition, o.duration);
            }, o.onTopPassedReverse = function () {
              s.debug("Element returned to position, removing fixed", f), s.hide.placeholder(), s.remove.fixed();
            };
          }
        },
        create: {
          placeholder: function () {
            s.verbose("Creating fixed position placeholder"), e = f.clone(!1).css("display", "none").addClass(i.placeholder).insertAfter(f);
          }
        },
        show: {
          placeholder: function () {
            s.verbose("Showing placeholder"), e.css("display", "block").css("visibility", "hidden");
          }
        },
        hide: {
          placeholder: function () {
            s.verbose("Hiding placeholder"), e.css("display", "none").css("visibility", "");
          }
        },
        set: {
          fixed: function () {
            s.verbose("Setting element to fixed position"), f.addClass(i.fixed).css({
              position: "fixed",
              top: o.offset + "px",
              left: "auto",
              zIndex: o.zIndex
            }), o.onFixed.call(h);
          },
          image: function (e, t) {
            if (f.attr("src", e), o.transition) {
              if (P.fn.transition !== O) {
                if (f.hasClass(i.visible)) return void s.debug("Transition already occurred on this image, skipping animation");
                f.transition(o.transition, o.duration, t);
              } else f.fadeIn(o.duration, t);
            } else f.show();
          }
        },
        is: {
          onScreen: function () {
            return s.get.elementCalculations().onScreen;
          },
          offScreen: function () {
            return s.get.elementCalculations().offScreen;
          },
          visible: function () {
            return !(!s.cache || !s.cache.element) && !(0 === s.cache.element.width && 0 === s.cache.element.offset.top);
          },
          verticallyScrollableContext: function () {
            var e = m.get(0) !== E && m.css("overflow-y");
            return "auto" == e || "scroll" == e;
          },
          horizontallyScrollableContext: function () {
            var e = m.get(0) !== E && m.css("overflow-x");
            return "auto" == e || "scroll" == e;
          }
        },
        refresh: function () {
          s.debug("Refreshing constants (width/height)"), "fixed" == o.type && s.resetFixed(), s.reset(), s.save.position(), o.checkOnRefresh && s.checkVisibility(), o.onRefresh.call(h);
        },
        resetFixed: function () {
          s.remove.fixed(), s.remove.occurred();
        },
        reset: function () {
          s.verbose("Resetting all cached values"), P.isPlainObject(s.cache) && (s.cache.screen = {}, s.cache.element = {});
        },
        checkVisibility: function (e) {
          s.verbose("Checking visibility of element", s.cache.element), !v && s.is.visible() && (s.save.scroll(e), s.save.calculations(), s.passed(), s.passingReverse(), s.topVisibleReverse(), s.bottomVisibleReverse(), s.topPassedReverse(), s.bottomPassedReverse(), s.onScreen(), s.offScreen(), s.passing(), s.topVisible(), s.bottomVisible(), s.topPassed(), s.bottomPassed(), o.onUpdate && o.onUpdate.call(h, s.get.elementCalculations()));
        },
        passed: function (e, t) {
          var n = s.get.elementCalculations();
          if (e && t) o.onPassed[e] = t;else {
            if (e !== O) return s.get.pixelsPassed(e) > n.pixelsPassed;
            n.passing && P.each(o.onPassed, function (e, t) {
              n.bottomVisible || n.pixelsPassed > s.get.pixelsPassed(e) ? s.execute(t, e) : o.once || s.remove.occurred(t);
            });
          }
        },
        onScreen: function (e) {
          var t = s.get.elementCalculations(),
              n = e || o.onOnScreen,
              i = "onScreen";
          if (e && (s.debug("Adding callback for onScreen", e), o.onOnScreen = e), t.onScreen ? s.execute(n, i) : o.once || s.remove.occurred(i), e !== O) return t.onOnScreen;
        },
        offScreen: function (e) {
          var t = s.get.elementCalculations(),
              n = e || o.onOffScreen,
              i = "offScreen";
          if (e && (s.debug("Adding callback for offScreen", e), o.onOffScreen = e), t.offScreen ? s.execute(n, i) : o.once || s.remove.occurred(i), e !== O) return t.onOffScreen;
        },
        passing: function (e) {
          var t = s.get.elementCalculations(),
              n = e || o.onPassing,
              i = "passing";
          if (e && (s.debug("Adding callback for passing", e), o.onPassing = e), t.passing ? s.execute(n, i) : o.once || s.remove.occurred(i), e !== O) return t.passing;
        },
        topVisible: function (e) {
          var t = s.get.elementCalculations(),
              n = e || o.onTopVisible,
              i = "topVisible";
          if (e && (s.debug("Adding callback for top visible", e), o.onTopVisible = e), t.topVisible ? s.execute(n, i) : o.once || s.remove.occurred(i), e === O) return t.topVisible;
        },
        bottomVisible: function (e) {
          var t = s.get.elementCalculations(),
              n = e || o.onBottomVisible,
              i = "bottomVisible";
          if (e && (s.debug("Adding callback for bottom visible", e), o.onBottomVisible = e), t.bottomVisible ? s.execute(n, i) : o.once || s.remove.occurred(i), e === O) return t.bottomVisible;
        },
        topPassed: function (e) {
          var t = s.get.elementCalculations(),
              n = e || o.onTopPassed,
              i = "topPassed";
          if (e && (s.debug("Adding callback for top passed", e), o.onTopPassed = e), t.topPassed ? s.execute(n, i) : o.once || s.remove.occurred(i), e === O) return t.topPassed;
        },
        bottomPassed: function (e) {
          var t = s.get.elementCalculations(),
              n = e || o.onBottomPassed,
              i = "bottomPassed";
          if (e && (s.debug("Adding callback for bottom passed", e), o.onBottomPassed = e), t.bottomPassed ? s.execute(n, i) : o.once || s.remove.occurred(i), e === O) return t.bottomPassed;
        },
        passingReverse: function (e) {
          var t = s.get.elementCalculations(),
              n = e || o.onPassingReverse,
              i = "passingReverse";
          if (e && (s.debug("Adding callback for passing reverse", e), o.onPassingReverse = e), t.passing ? o.once || s.remove.occurred(i) : s.get.occurred("passing") && s.execute(n, i), e !== O) return !t.passing;
        },
        topVisibleReverse: function (e) {
          var t = s.get.elementCalculations(),
              n = e || o.onTopVisibleReverse,
              i = "topVisibleReverse";
          if (e && (s.debug("Adding callback for top visible reverse", e), o.onTopVisibleReverse = e), t.topVisible ? o.once || s.remove.occurred(i) : s.get.occurred("topVisible") && s.execute(n, i), e === O) return !t.topVisible;
        },
        bottomVisibleReverse: function (e) {
          var t = s.get.elementCalculations(),
              n = e || o.onBottomVisibleReverse,
              i = "bottomVisibleReverse";
          if (e && (s.debug("Adding callback for bottom visible reverse", e), o.onBottomVisibleReverse = e), t.bottomVisible ? o.once || s.remove.occurred(i) : s.get.occurred("bottomVisible") && s.execute(n, i), e === O) return !t.bottomVisible;
        },
        topPassedReverse: function (e) {
          var t = s.get.elementCalculations(),
              n = e || o.onTopPassedReverse,
              i = "topPassedReverse";
          if (e && (s.debug("Adding callback for top passed reverse", e), o.onTopPassedReverse = e), t.topPassed ? o.once || s.remove.occurred(i) : s.get.occurred("topPassed") && s.execute(n, i), e === O) return !t.onTopPassed;
        },
        bottomPassedReverse: function (e) {
          var t = s.get.elementCalculations(),
              n = e || o.onBottomPassedReverse,
              i = "bottomPassedReverse";
          if (e && (s.debug("Adding callback for bottom passed reverse", e), o.onBottomPassedReverse = e), t.bottomPassed ? o.once || s.remove.occurred(i) : s.get.occurred("bottomPassed") && s.execute(n, i), e === O) return !t.bottomPassed;
        },
        execute: function (e, t) {
          var n = s.get.elementCalculations(),
              i = s.get.screenCalculations();
          (e = e || !1) && (o.continuous ? (s.debug("Callback being called continuously", t, n), e.call(h, n, i)) : s.get.occurred(t) || (s.debug("Conditions met", t, n), e.call(h, n, i))), s.save.occurred(t);
        },
        remove: {
          fixed: function () {
            s.debug("Removing fixed position"), f.removeClass(i.fixed).css({
              position: "",
              top: "",
              left: "",
              zIndex: ""
            }), o.onUnfixed.call(h);
          },
          placeholder: function () {
            s.debug("Removing placeholder content"), e && e.remove();
          },
          occurred: function (e) {
            if (e) {
              var t = s.cache.occurred;
              t[e] !== O && !0 === t[e] && (s.debug("Callback can now be called again", e), s.cache.occurred[e] = !1);
            } else s.cache.occurred = {};
          }
        },
        save: {
          calculations: function () {
            s.verbose("Saving all calculations necessary to determine positioning"), s.save.direction(), s.save.screenCalculations(), s.save.elementCalculations();
          },
          occurred: function (e) {
            e && (s.cache.occurred[e] !== O && !0 === s.cache.occurred[e] || (s.verbose("Saving callback occurred", e), s.cache.occurred[e] = !0));
          },
          scroll: function (e) {
            e = e + o.offset || m.scrollTop() + o.offset, s.cache.scroll = e;
          },
          direction: function () {
            var e,
                t = s.get.scroll(),
                n = s.get.lastScroll();
            return e = n < t && n ? "down" : t < n && n ? "up" : "static", s.cache.direction = e, s.cache.direction;
          },
          elementPosition: function () {
            var e = s.cache.element,
                t = s.get.screenSize();
            return s.verbose("Saving element position"), e.fits = e.height < t.height, e.offset = f.offset(), e.width = f.outerWidth(), e.height = f.outerHeight(), s.is.verticallyScrollableContext() && (e.offset.top += m.scrollTop() - m.offset().top), s.is.horizontallyScrollableContext() && (e.offset.left += m.scrollLeft - m.offset().left), s.cache.element = e;
          },
          elementCalculations: function () {
            var e = s.get.screenCalculations(),
                t = s.get.elementPosition();
            return o.includeMargin ? (t.margin = {}, t.margin.top = parseInt(f.css("margin-top"), 10), t.margin.bottom = parseInt(f.css("margin-bottom"), 10), t.top = t.offset.top - t.margin.top, t.bottom = t.offset.top + t.height + t.margin.bottom) : (t.top = t.offset.top, t.bottom = t.offset.top + t.height), t.topPassed = e.top >= t.top, t.bottomPassed = e.top >= t.bottom, t.topVisible = e.bottom >= t.top && !t.topPassed, t.bottomVisible = e.bottom >= t.bottom && !t.bottomPassed, t.pixelsPassed = 0, t.percentagePassed = 0, t.onScreen = (t.topVisible || t.passing) && !t.bottomPassed, t.passing = t.topPassed && !t.bottomPassed, t.offScreen = !t.onScreen, t.passing && (t.pixelsPassed = e.top - t.top, t.percentagePassed = (e.top - t.top) / t.height), s.cache.element = t, s.verbose("Updated element calculations", t), t;
          },
          screenCalculations: function () {
            var e = s.get.scroll();
            return s.save.direction(), s.cache.screen.top = e, s.cache.screen.bottom = e + s.cache.screen.height, s.cache.screen;
          },
          screenSize: function () {
            s.verbose("Saving window position"), s.cache.screen = {
              height: m.height()
            };
          },
          position: function () {
            s.save.screenSize(), s.save.elementPosition();
          }
        },
        get: {
          pixelsPassed: function (e) {
            var t = s.get.elementCalculations();
            return -1 < e.search("%") ? t.height * (parseInt(e, 10) / 100) : parseInt(e, 10);
          },
          occurred: function (e) {
            return s.cache.occurred !== O && s.cache.occurred[e] || !1;
          },
          direction: function () {
            return s.cache.direction === O && s.save.direction(), s.cache.direction;
          },
          elementPosition: function () {
            return s.cache.element === O && s.save.elementPosition(), s.cache.element;
          },
          elementCalculations: function () {
            return s.cache.element === O && s.save.elementCalculations(), s.cache.element;
          },
          screenCalculations: function () {
            return s.cache.screen === O && s.save.screenCalculations(), s.cache.screen;
          },
          screenSize: function () {
            return s.cache.screen === O && s.save.screenSize(), s.cache.screen;
          },
          scroll: function () {
            return s.cache.scroll === O && s.save.scroll(), s.cache.scroll;
          },
          lastScroll: function () {
            return s.cache.screen === O ? (s.debug("First scroll event, no last scroll could be found"), !1) : s.cache.screen.top;
          }
        },
        setting: function (e, t) {
          if (P.isPlainObject(e)) P.extend(!0, o, e);else {
            if (t === O) return o[e];
            o[e] = t;
          }
        },
        internal: function (e, t) {
          if (P.isPlainObject(e)) P.extend(!0, s, e);else {
            if (t === O) return s[e];
            s[e] = t;
          }
        },
        debug: function () {
          !o.silent && o.debug && (o.performance ? s.performance.log(arguments) : (s.debug = Function.prototype.bind.call(console.info, console, o.name + ":"), s.debug.apply(console, arguments)));
        },
        verbose: function () {
          !o.silent && o.verbose && o.debug && (o.performance ? s.performance.log(arguments) : (s.verbose = Function.prototype.bind.call(console.info, console, o.name + ":"), s.verbose.apply(console, arguments)));
        },
        error: function () {
          o.silent || (s.error = Function.prototype.bind.call(console.error, console, o.name + ":"), s.error.apply(console, arguments));
        },
        performance: {
          log: function (e) {
            var t, n;
            o.performance && (n = (t = new Date().getTime()) - (C || t), C = t, w.push({
              Name: e[0],
              Arguments: [].slice.call(e, 1) || "",
              Element: h,
              "Execution Time": n
            })), clearTimeout(s.performance.timer), s.performance.timer = setTimeout(s.performance.display, 500);
          },
          display: function () {
            var e = o.name + ":",
                n = 0;
            C = !1, clearTimeout(s.performance.timer), P.each(w, function (e, t) {
              n += t["Execution Time"];
            }), e += " " + n + "ms", x && (e += " '" + x + "'"), (console.group !== O || console.table !== O) && 0 < w.length && (console.groupCollapsed(e), console.table ? console.table(w) : P.each(w, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), w = [];
          }
        },
        invoke: function (i, e, t) {
          var o,
              a,
              n,
              r = g;
          return e = e || T, t = h || t, "string" == typeof i && r !== O && (i = i.split(/[\. ]/), o = i.length - 1, P.each(i, function (e, t) {
            var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
            if (P.isPlainObject(r[n]) && e != o) r = r[n];else {
              if (r[n] !== O) return a = r[n], !1;
              if (!P.isPlainObject(r[t]) || e == o) return r[t] !== O ? a = r[t] : s.error(l.method, i), !1;
              r = r[t];
            }
          })), P.isFunction(a) ? n = a.apply(t, e) : a !== O && (n = a), P.isArray(y) ? y.push(n) : y !== O ? y = [y, n] : n !== O && (y = n), a;
        }
      }, k ? (g === O && s.initialize(), g.save.scroll(), g.save.calculations(), s.invoke(S)) : (g !== O && g.invoke("destroy"), s.initialize());
    }), y !== O ? y : this;
  }, P.fn.visibility.settings = {
    name: "Visibility",
    namespace: "visibility",
    debug: !1,
    verbose: !1,
    performance: !0,
    observeChanges: !0,
    initialCheck: !0,
    refreshOnLoad: !0,
    refreshOnResize: !0,
    checkOnRefresh: !0,
    once: !0,
    continuous: !1,
    offset: 0,
    includeMargin: !1,
    context: E,
    throttle: !1,
    type: !1,
    zIndex: "10",
    transition: "fade in",
    duration: 1e3,
    onPassed: {},
    onOnScreen: !1,
    onOffScreen: !1,
    onPassing: !1,
    onTopVisible: !1,
    onBottomVisible: !1,
    onTopPassed: !1,
    onBottomPassed: !1,
    onPassingReverse: !1,
    onTopVisibleReverse: !1,
    onBottomVisibleReverse: !1,
    onTopPassedReverse: !1,
    onBottomPassedReverse: !1,
    onLoad: function () {},
    onAllLoaded: function () {},
    onFixed: function () {},
    onUnfixed: function () {},
    onUpdate: !1,
    onRefresh: function () {},
    metadata: {
      src: "src"
    },
    className: {
      fixed: "fixed",
      placeholder: "placeholder",
      visible: "visible"
    },
    error: {
      method: "The method you called is not defined.",
      visible: "Element is hidden, you must call refresh after element becomes visible"
    }
  };
}(jQuery, window, document);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _jquery_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(744);
/* harmony import */ var _jquery_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jquery_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _semantic_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(940);
/* harmony import */ var _semantic_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_semantic_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modernizr_2_6_2_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(819);
/* harmony import */ var _modernizr_2_6_2_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modernizr_2_6_2_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jquery_zoomslider_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(275);
/* harmony import */ var _jquery_zoomslider_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jquery_zoomslider_min_js__WEBPACK_IMPORTED_MODULE_3__);




})();

/******/ })()
;