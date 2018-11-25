(function e(t, n) {
  if (typeof exports === "object" && typeof module === "object") module.exports = n();
  else if (typeof define === "function" && define.amd) define([], n);
  else if (typeof exports === "object") exports["utils"] = n();
  else t["utils"] = n()
})(window, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) {
        return t[r].exports
      }
      var i = t[r] = {
        i: r,
        l: false,
        exports: {}
      };
      e[r].call(i.exports, i, i.exports, n);
      i.l = true;
      return i.exports
    }``
    n.m = e;
    n.c = t;
    n.d = function (e, t, r) {
      if (!n.o(e, t)) {
        Object.defineProperty(e, t, {
          configurable: false,
          enumerable: true,
          get: r
        })
      }
    };
    n.r = function (e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      })
    };
    n.n = function (e) {
      var t = e && e.__esModule ? function t() {
        return e["default"]
      } : function t() {
        return e
      };
      n.d(t, "a", t);
      return t
    };
    n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    };
    n.p = "";
    return n(n.s = 14)
  }([function (e, t) {
    var n = "dd";
    var r = "hh";
    var i = "mm";
    var a = "ss";
    var o = "hh:mm:ss";
    var s = "dd：hh:mm:ss";
    var u = "mm:ss";
    var f = Date.now();

    function l() {
      return Date.now() - f
    }
    t.getTimer = l;

    function c() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      var t = new Date;
      var n = t.getTime().toString();
      n = n.substr(0, e);
      return Number(n)
    }
    t.getNowStamp = c;

    function h(e, t) {
      return m(e, t) + " " + g(e, t)
    }
    t.getFullDate = h;

    function v(e, t) {
      return L(e, t).concat(d(e, t))
    }
    t.getFullDateArray = v;

    function g(e, t) {
      return d(e, t).join(":")
    }
    t.getTime = g;

    function d() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (e == 0) {
        return D(new Date, t)
      } else if (e.toString().length == 10) {
        return D(new Date(e * 1e3), t)
      } else {
        return D(new Date(e), t)
      }
    }
    t.getTimeArray = d;

    function m(e, t) {
      return L(e, t).join("-")
    }
    t.getDate = m;

    function h(e, t) {
      return m(e, t) + " " + g(e, t)
    }
    t.getFullDate = h;

    function v(e, t) {
      return L(e, t).concat(d(e, t))
    }
    t.getFullDateArray = v;

    function p(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : o;
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var u = [];
      var f = e;
      var l;
      if (t.indexOf(a) >= 0) {
        l = e % 60;
        l = s && l < 10 ? "0" + l : l;
        u.push(l)
      }
      if (t.indexOf(i) >= 0) {
        l = Math.floor(Number(e % 3600 / 60));
        l = s && l < 10 ? "0" + l : l;
        u.unshift(l)
      }
      if (t.indexOf(r) >= 0) {
        if (t == o) {
          l = Math.floor(e / 3600);
          l = s && l < 10 ? "0" + l : l;
          u.unshift(l)
        } else {
          l = Math.floor(e % 86400 / 3600);
          l = s && l < 10 ? "0" + l : l;
          u.unshift(l)
        }
      }
      if (t.indexOf(n) >= 0) {
        l = Math.floor(e / 86400);
        l = s && l < 10 ? "0" + l : l;
        u.unshift(l)
      }
      return u
    }
    t.getCountDown = p;

    function w() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = d(e);
      return Math.floor(Number(t[0])) * 3600 + Math.floor(Number(t[1])) * 60 + Math.floor(Number(t[2]))
    }
    t.getPastSecond = w;

    function d() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (e == 0) {
        return D(new Date, t)
      } else if (e.toString().length == 10) {
        return D(new Date(e * 1e3), t)
      } else {
        return D(new Date(e), t)
      }
    }
    t.getTimeArray = d;

    function D(e, t) {
      return [t ? e.getHours() < 10 ? "0" + e.getHours() : e.getHours().toString() : e.getHours(), t ? e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes().toString() : e.getMinutes(), t ? e.getSeconds() < 10 ? "0" + e.getSeconds() : e.getSeconds().toString() : e.getSeconds()]
    }
    t.getBasicTimeArray = D;

    function L() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (e == 0) {
        return y(new Date, t)
      } else {
        if (e.toString().length == 10) {
          return y(new Date(e * 1e3), t)
        } else {
          return y(new Date(e), t)
        }
      }
    }
    t.getDateArray = L;

    function y(e, t) {
      return [t ? e.getFullYear() < 10 ? "0" + e.getFullYear() : e.getFullYear().toString() : e.getFullYear(), t ? e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : (e.getMonth() + 1).toString() : e.getMonth() + 1, t ? e.getDate() < 10 ? "0" + e.getDate() : e.getDate().toString() : e.getDate()]
    }
    t.getBasicDateArray = y;

    function x() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var n = [];
      var r = new Date;
      var i = r.getFullYear();
      var a = r.getMonth();
      var o = r.getDate() + e * 7;
      var s = r.getDay();
      if (!t) {
        s--;
        s == -1 && (s = 6)
      }
      for (var u = 0; u < 7; u++) {
        var f = new Date(i, a, o - s + u);
        n.push([f.getTime(), f.getTime() + 864e5, f.getFullYear(), f.getMonth(), f.getDate()])
      }
      return n
    }
    t.getWeek = x;

    function _() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var n = [];
      var r = new Date;
      var i = r.getFullYear();
      var a = r.getMonth();
      var o = i;
      var s = a + e;
      var u = new Date(o, s, 1);
      var f = new Date(o, s + 1, 0);
      o = u.getFullYear();
      s = u.getMonth();
      var l = f.getDate();
      for (var c = 1; c <= f.getDate(); c++) {
        n.push([o, s, c])
      }
      var h = new Date(o, s, 1).getDay();
      for (var v = 0; v < h; v++) {
        var g = new Date(o, s, -v);
        n.unshift([g.getFullYear(), g.getMonth(), g.getDate()])
      }
      h = f.getDay();
      for (var d = 1; d < 7 - h; d++) {
        var g = new Date(o, s, d + l);
        n.push([g.getFullYear(), g.getMonth(), g.getDate()])
      }
      var m = Object.create(null);
      m.nowYear = i;
      m.nowMonth = a;
      m.year = o;
      m.month = s;
      m.nowDate = r.getDate();
      var p = n[0];
      var w = n[n.length - 1];
      m.startTime = new Date(p[0], p[1], p[2]).getTime() / 1e3;
      m.endTime = new Date(w[0], w[1], w[2]).getTime() / 1e3 + 86400;
      m.list = n;
      return m
    }
    t.getMonthByOffset = _;

    function O() {
      var e;
      var t;
      var n;
      var r;
      var i;
      var a;
      var o = true;
      var s = 0;
      for (var u = arguments.length, f = Array(u), l = 0; l < u; l++) {
        f[l] = arguments[l]
      }
      if (f.length <= 2) {
        i = f[0];
        if (Array.isArray(f[0])) {
          r = new Date(f[0][0], f[0][1], f[0][2])
        } else {
          if ((i + "").length == 10) {
            i = i * 1e3
          }
          r = new Date(i)
        }
        if (f.length == 2 && f[2] == false) {
          o = false
        }
      } else {
        r = new Date(f[0], f[1], f[2])
      }
      i = r.getTime();
      a = r.getDay();
      e = new Date(r.getFullYear(), 0, 1);
      t = e.getTime();
      n = e.getDay();
      var c = int((i - t) / 1e3 / 86400) + 1;
      if (o) {
        c = n == 0 ? c - 1 : c - (7 - n)
      } else {
        c = c - (8 - n)
      }
      return Math.ceil(c / 7) + 1
    }
    t.getWeekNum = O;

    function M(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = _(t);
      var r = e(n.year, n.month);
      var i = r.lObj.filter(function (e) {
        return e != ""
      });
      if (n.list[0][2] != 1) {
        var a = new Date(n.year, n.month, -1);
        r = e(a.getFullYear(), a.getMonth());
        r = r.lObj.filter(function (e) {
          return e != ""
        });
        var o = 0;
        while (n.list[o][2] != 1) {
          i.unshift(r[r.length - 1 - o]);
          o++
        }
      }
      if (n.list[n.list.length - 1][2] < 10) {
        var s = new Date(n.year, n.month + 1, 1);
        r = e(s.getFullYear(), s.getMonth());
        r = r.lObj.filter(function (e) {
          return e != ""
        });
        var o = 0;
        while (n.list[n.list.length - o - 1][2] < 10) {
          i.push(r[o]);
          o++
        }
      }
      for (var o = 0; o < n.list.length; o++) {
        n.list[o].push(i[o])
      }
      return n
    }
  }, function (e, t) {
    function n(e) {
      return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(e)
    }
    e.exports = n
  }, function (e, t) {
    function n(e) {
      return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(e)
    }
    e.exports = n
  }, function (e, t) {
    function n(e) {
      return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(e)
    }
    e.exports = n
  }, function (e, t) {
    function n(e) {
      return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(e)
    }
    e.exports = n
  }, function (e, t) {
    function n(e, t) {
      return Math.floor(Math.random() * (t - e + 1)) + e
    }
    e.exports = n
  }, function (e, t) {
    function n() {
      return "#" + ("00000" + (Math.random() * 16777216 << 0).toString(16)).slice(-6)
    }
    e.exports = n
  }, function (e, t) {
    var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (e) {
      return typeof e
    } : function (e) {
      return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };

    function r(e, t, r) {
      if (t) {
        for (var i in t) {
          if (n(t[i]) == "object" && (!e[i] || n(e[i]) == "object")) {
            if (Array.isArray(t[i])) {
              e[i] = e[i] || []
            } else {
              e[i] = e[i] || {}
            }
            __merge(e[i], t[i], r)
          } else {
            !(!r && e.hasOwnProperty(i)) && (e[i] = t[i])
          }
        }
      }
      return e
    }
    e.exports = r
  }, function (e, t) {
    var n = "SCENE_READY";
    var r;

    function i(e, t, n, i) {
      if (n === void 0) {
        n = null
      }
      if (i === void 0) {
        i = false
      }
      r.addEventListenerOnce(e, t, n, i)
    }
    t.addEventListenerOnce = i;

    function a(e, t, n, i) {
      if (n === void 0) {
        n = null
      }
      if (i === void 0) {
        i = false
      }
      r.addEventListener(e, t, n, i)
    }
    t.addEventListener = a;

    function o(e, t, n, i) {
      if (n === void 0) {
        n = null
      }
      if (i === void 0) {
        i = false
      }
      r.removeEventListener(e, t, n, i)
    }
    t.removeEventListener = o;

    function s(e, t, n) {
      if (t === void 0) {
        t = null
      }
      if (n === void 0) {
        n = false
      }
      r.dispatchEvent(e, t, n)
    }
    t.dispatchEvent = s;

    function u(e) {
      r.removeAllListener(e)
    }
    t.removeAllListener = u;
    var f = function () {
      function e() {
        this._hash = [];
        this._matchHash = [];
        this._matchList = []
      }
      var t = e.prototype;
      t.addEventListenerOnce = function (e, t, n, r) {
        this.addEventListener(e, t, n, r, true)
      };
      t.addEventListener = function (e, t, n, r, i) {
        void 0 === n && (n = null);
        void 0 === r && (r = !1);
        void 0 === i && (i = false);
        var a = this.getHash(r);
        if (n == null) {
          n = t
        }
        var o = a[e];
        if (o == null) {
          o = {
            thisList: [],
            callList: [],
            onceList: []
          };
          a[e] = o
        }
        if (this._matchList == null) {
          this._matchList = []
        }
        if (r && this._matchList.indexOf(e) < 0) {
          this._matchList.push(e)
        }
        o.callList.push(t);
        o.thisList.push(n);
        o.onceList.push(i)
      };
      t.removeEventListener = function (e, t, n, r) {
        void 0 === r && (r = !1);
        var i = this.getHash(r);
        var a = i[e];
        if (a != null && a.callList.length > 0) {
          if (a.callList.indexOf(t) >= 0) {
            var o = a.callList.indexOf(t);
            a.callList.splice(o, 1);
            a.thisList.splice(o, 1);
            a.onceList.splice(o, 1)
          }
        }
        if (r && a.callList.length == 0 && this._matchList.indexOf(e) >= 0) {
          if (this._matchList.indexOf(e) >= 0) {
            this._matchList.splice(this._matchList.indexOf(e), 1)
          }
        }
      };
      t.removeAllListener = function (e) {
        e = this.getHash(false)[e];
        if (e && e.callList.length > 0) {
          while (e.callList.length > 0) {
            e.callList.shift();
            e.thisList.shift();
            e.onceList.shift()
          }
        }
      };
      t.dispatchEvent = function (e, t, n) {
        void 0 === t && (t = null);
        void 0 === n && (n = !1);
        if (!n) {
          this.doEventCallBack(this.getHash(n), e, e, t)
        } else {
          if (this._matchList == null) {
            this._matchList = []
          }
          for (var r = 0; r < this._matchList.length; r++) {
            var i = this._matchList[r];
            if (i.indexOf("*") >= 0) {
              i = i.replace(/\*/g, "[^_.]+");
              var a = e.match(i);
              if (a && a.length > 0) {
                this.doEventCallBack(this.getHash(n), e, this._matchList[r], t)
              }
            } else if (i == e) {
              this.doEventCallBack(this.getHash(n), e, this._matchList[r], t)
            }
          }
        }
      };
      t.doEventCallBack = function (e, t, n, r) {
        void 0 === r && (r = null);
        var i = e[n];
        if (i != null && i.callList.length > 0) {
          var a = i.callList.concat();
          var o = i.thisList.concat();
          var s = i.onceList.concat();
          for (var u = 0; u < a.length; u++) {
            var f = a[u];
            var l = o[u];
            var c = s[u];
            if (r == null) {
              f.call(l, t)
            } else {
              f.call(l, t, r)
            }
            if (c) {
              i.callList.splice(u, 1);
              i.thisList.splice(u, 1);
              i.onceList.splice(u, 1)
            }
          }
          a = null;
          o = null
        }
      };
      t.getHash = function (e) {
        void 0 === e && (e = false);
        return e ? this._matchHash : this._hash
      };
      return e
    }();
    r = new f
  }, function (e, t) {
    function n() {
      var e = "navigator" in window && "userAgent" in navigator && navigator.userAgent.toLowerCase() || "";
      var t = "navigator" in window && "vendor" in navigator && navigator.vendor.toLowerCase() || "";
      var n = "navigator" in window && "appVersion" in navigator && navigator.appVersion.toLowerCase() || "";
      if (/iphone/i.test(e) || /ipad/i.test(e) || /ipod/i.test(e)) return "ios";
      if (/android/i.test(e)) return "android";
      if (/win/i.test(n) && /phone/i.test(e)) return "windowsPhone";
      if (/mac/i.test(n)) return "MacOSX";
      if (/win/i.test(n)) return "windows";
      if (/linux/i.test(n)) return "linux"
    }
    e.exports = n
  }, function (e, t) {
    function n() {
      var e = {},
        t = navigator.userAgent.toLowerCase(),
        n;
      (n = t.match(/rv:([\d.]+)\) like gecko/)) ? e.ie = n[1]: (n = t.match(/msie ([\d\.]+)/)) ? e.ie = n[1] : (n = t.match(/edge\/([\d\.]+)/)) ? e.edge = n[1] : (n = t.match(/firefox\/([\d\.]+)/)) ? e.firefox = n[1] : (n = t.match(/(?:opera|opr).([\d\.]+)/)) ? e.opera = n[1] : (n = t.match(/chrome\/([\d\.]+)/)) ? e.chrome = n[1] : (n = t.match(/version\/([\d\.]+).*safari/)) ? e.safari = n[1] : 0;
      if (e.ie) return "IE: " + e.ie;
      if (e.edge) return "EDGE: " + e.edge;
      if (e.firefox) return "Firefox: " + e.firefox;
      if (e.chrome) return "Chrome: " + e.chrome;
      if (e.opera) return "Opera: " + e.opera;
      if (e.safari) return "Safari: " + e.safari;
      return "Unkonwn"
    }
    e.exports = n
  }, function (e, t) {
    var n, r;
    try {
      n = window.localStorage
    } catch (e) {
      i()
    }
    try {
      r = window.sessionStorage
    } catch (e) {
      a()
    }

    function i() {
      n = {
        _hash: {}
      };
      n.setItem = function (e, t) {
        n._hash[e] = t
      };
      n.getItem = function (e) {
        return n._hash[e]
      };
      n.removeItem = function (e) {
        delete n._hash[e]
      }
    }

    function a() {
      r = {
        _hash: {}
      };
      r.setItem = function (e, t) {
        r._hash[e] = t
      };
      r.getItem = function (e) {
        return r._hash[e]
      };
      r.removeItem = function (e) {
        delete r._hash[e]
      }
    }

    function o(e) {
      return e == "ses" ? r : n
    }

    function s(e, t, n) {
      o(n).setItem(e, JSON.stringify(t))
    }
    t.setData = s;

    function u(e, t) {
      var n = o(t).getItem(e);
      if (n == null || n == undefined || n == "null" || n == "undefined") {
        n = "";
        return n
      }
      return JSON.parse(n)
    }
    t.getData = u;

    function f(e, t) {
      o(t).removeItem(e)
    }
    t.delData = f;

    function l(e) {
      var t = o(e);
      while (t.length > 0) {
        t.removeItem(t.key(0))
      }
    }
    t.delAllData = l
  }, function (e, t) {
    function n(e, t) {
      if (e === t) {
        return true
      }
      if (e.length != t.length) {
        return false
      }
      for (var n = 0; n < e.length; ++n) {
        if (e[n] !== t[n]) {
          return false
        }
      }
      return true
    }
    e.exports = n
  }, function (e, t, n) {
    var r = {
      "./array/arrayEqual.js": 12,
      "./data/data.js": 11,
      "./device/getExplore.js": 10,
      "./device/getOS.js": 9,
      "./event/event.js": 8,
      "./merge/merge.js": 7,
      "./random/randomColor.js": 6,
      "./random/randomNum.js": 5,
      "./regexp/isEmail.js": 4,
      "./regexp/isIdCard.js": 3,
      "./regexp/isPhoneNum.js": 2,
      "./regexp/isUrl.js": 1,
      "./time/time.js": 0
    };

    function i(e) {
      var t = a(e);
      var r = n(t);
      return r
    }

    function a(e) {
      var t = r[e];
      if (!(t + 1)) {
        var n = new Error('Cannot find module "' + e + '".');
        n.code = "MODULE_NOT_FOUND";
        throw n
      }
      return t
    }
    i.keys = function e() {
      return Object.keys(r)
    };
    i.resolve = a;
    e.exports = i;
    i.id = 13
  }, function (e, t, n) {
    var r = {};
    var i = n(13);
    i.keys().forEach(function (e) {
      var t = e.substring(e.lastIndexOf("/") + 1, e.lastIndexOf("."));
      r[t] = i(e)
    });
    e.exports = r
  }])
});
