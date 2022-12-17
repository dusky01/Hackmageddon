(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [function(require, module, exports) {
        ! function(t, e) {
            "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Scrollbar = e() : t.Scrollbar = e()
        }(this, function() {
            return function(t) {
                function e(r) {
                    if (n[r]) return n[r].exports;
                    var o = n[r] = {
                        exports: {},
                        id: r,
                        loaded: !1
                    };
                    return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
                }
                var n = {};
                return e.m = t, e.c = n, e.p = "", e(0)
            }([function(t, e, n) {
                t.exports = n(1)
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function o(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                        return n
                    }
                    return (0, u.default)(t)
                }
                var i = n(2),
                    u = r(i),
                    a = n(55),
                    c = r(a),
                    l = n(62),
                    f = r(l);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var s = "function" == typeof f.default && "symbol" == typeof c.default ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof f.default && t.constructor === f.default && t !== f.default.prototype ? "symbol" : typeof t
                    },
                    d = n(77),
                    h = n(88);
                n(133), n(150), n(163), n(178), n(193), e.default = d.SmoothScrollbar, d.SmoothScrollbar.version = "7.3.1", d.SmoothScrollbar.init = function(t, e) {
                    if (!t || 1 !== t.nodeType) throw new TypeError("expect element to be DOM Element, but got " + ("undefined" == typeof t ? "undefined" : s(t)));
                    if (h.sbList.has(t)) return h.sbList.get(t);
                    t.setAttribute("data-scrollbar", "");
                    var n = [].concat(o(t.childNodes)),
                        r = document.createElement("div");
                    r.innerHTML = '\n        <article class="scroll-content"></article>\n        <aside class="scrollbar-track scrollbar-track-x">\n            <div class="scrollbar-thumb scrollbar-thumb-x"></div>\n        </aside>\n        <aside class="scrollbar-track scrollbar-track-y">\n            <div class="scrollbar-thumb scrollbar-thumb-y"></div>\n        </aside>\n        <canvas class="overscroll-glow"></canvas>\n    ';
                    var i = r.querySelector(".scroll-content");
                    return [].concat(o(r.childNodes)).forEach(function(e) {
                        return t.appendChild(e)
                    }), n.forEach(function(t) {
                        return i.appendChild(t)
                    }), new d.SmoothScrollbar(t, e)
                }, d.SmoothScrollbar.initAll = function(t) {
                    return [].concat(o(document.querySelectorAll(h.selectors))).map(function(e) {
                        return d.SmoothScrollbar.init(e, t)
                    })
                }, d.SmoothScrollbar.has = function(t) {
                    return h.sbList.has(t)
                }, d.SmoothScrollbar.get = function(t) {
                    return h.sbList.get(t)
                }, d.SmoothScrollbar.getAll = function() {
                    return [].concat(o(h.sbList.values()))
                }, d.SmoothScrollbar.destroy = function(t, e) {
                    return d.SmoothScrollbar.has(t) && d.SmoothScrollbar.get(t).destroy(e)
                }, d.SmoothScrollbar.destroyAll = function(t) {
                    h.sbList.forEach(function(e) {
                        e.destroy(t)
                    })
                }, t.exports = e.default
            }, function(t, e, n) {
                t.exports = {
                    default: n(3),
                    __esModule: !0
                }
            }, function(t, e, n) {
                n(4), n(48), t.exports = n(12).Array.from
            }, function(t, e, n) {
                "use strict";
                var r = n(5)(!0);
                n(8)(String, "String", function(t) {
                    this._t = String(t), this._i = 0
                }, function() {
                    var t, e = this._t,
                        n = this._i;
                    return n >= e.length ? {
                        value: void 0,
                        done: !0
                    } : (t = r(e, n), this._i += t.length, {
                        value: t,
                        done: !1
                    })
                })
            }, function(t, e, n) {
                var r = n(6),
                    o = n(7);
                t.exports = function(t) {
                    return function(e, n) {
                        var i, u, a = String(o(e)),
                            c = r(n),
                            l = a.length;
                        return c < 0 || c >= l ? t ? "" : void 0 : (i = a.charCodeAt(c), i < 55296 || i > 56319 || c + 1 === l || (u = a.charCodeAt(c + 1)) < 56320 || u > 57343 ? t ? a.charAt(c) : i : t ? a.slice(c, c + 2) : (i - 55296 << 10) + (u - 56320) + 65536)
                    }
                }
            }, function(t, e) {
                var n = Math.ceil,
                    r = Math.floor;
                t.exports = function(t) {
                    return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
                }
            }, function(t, e) {
                t.exports = function(t) {
                    if (void 0 == t) throw TypeError("Can't call method on  " + t);
                    return t
                }
            }, function(t, e, n) {
                "use strict";
                var r = n(9),
                    o = n(10),
                    i = n(26),
                    u = n(15),
                    a = n(27),
                    c = n(28),
                    l = n(44),
                    f = n(46),
                    s = n(45)("iterator"),
                    d = !([].keys && "next" in [].keys()),
                    h = "@@iterator",
                    v = "keys",
                    _ = "values",
                    p = function() {
                        return this
                    };
                t.exports = function(t, e, n, y, b, g, m) {
                    c(n, e, y);
                    var x, S, E, M = function(t) {
                            if (!d && t in T) return T[t];
                            switch (t) {
                                case v:
                                    return function() {
                                        return new n(this, t)
                                    };
                                case _:
                                    return function() {
                                        return new n(this, t)
                                    }
                            }
                            return function() {
                                return new n(this, t)
                            }
                        },
                        O = e + " Iterator",
                        w = b == _,
                        P = !1,
                        T = t.prototype,
                        k = T[s] || T[h] || b && T[b],
                        j = k || M(b),
                        A = b ? w ? M("entries") : j : void 0,
                        L = "Array" == e ? T.entries || k : k;
                    if (L && (E = f(L.call(new t)), E !== Object.prototype && E.next && (l(E, O, !0), r || "function" == typeof E[s] || u(E, s, p))), w && k && k.name !== _ && (P = !0, j = function() {
                            return k.call(this)
                        }), r && !m || !d && !P && T[s] || u(T, s, j), a[e] = j, a[O] = p, b)
                        if (x = {
                                values: w ? j : M(_),
                                keys: g ? j : M(v),
                                entries: A
                            }, m)
                            for (S in x) S in T || i(T, S, x[S]);
                        else o(o.P + o.F * (d || P), e, x);
                    return x
                }
            }, function(t, e) {
                t.exports = !0
            }, function(t, e, n) {
                var r = n(11),
                    o = n(12),
                    i = n(13),
                    u = n(15),
                    a = n(25),
                    c = "prototype",
                    l = function(t, e, n) {
                        var f, s, d, h = t & l.F,
                            v = t & l.G,
                            _ = t & l.S,
                            p = t & l.P,
                            y = t & l.B,
                            b = t & l.W,
                            g = v ? o : o[e] || (o[e] = {}),
                            m = g[c],
                            x = v ? r : _ ? r[e] : (r[e] || {})[c];
                        v && (n = e);
                        for (f in n) s = !h && x && void 0 !== x[f], s && a(g, f) || (d = s ? x[f] : n[f], g[f] = v && "function" != typeof x[f] ? n[f] : y && s ? i(d, r) : b && x[f] == d ? function(t) {
                            var e = function(e, n, r) {
                                if (this instanceof t) {
                                    switch (arguments.length) {
                                        case 0:
                                            return new t;
                                        case 1:
                                            return new t(e);
                                        case 2:
                                            return new t(e, n)
                                    }
                                    return new t(e, n, r)
                                }
                                return t.apply(this, arguments)
                            };
                            return e[c] = t[c], e
                        }(d) : p && "function" == typeof d ? i(Function.call, d) : d, p && ((g.virtual || (g.virtual = {}))[f] = d, t & l.R && m && !m[f] && u(m, f, d)))
                    };
                l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, t.exports = l
            }, function(t, e) {
                var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                "number" == typeof __g && (__g = n)
            }, function(t, e) {
                var n = t.exports = {
                    version: "2.5.7"
                };
                "number" == typeof __e && (__e = n)
            }, function(t, e, n) {
                var r = n(14);
                t.exports = function(t, e, n) {
                    if (r(t), void 0 === e) return t;
                    switch (n) {
                        case 1:
                            return function(n) {
                                return t.call(e, n)
                            };
                        case 2:
                            return function(n, r) {
                                return t.call(e, n, r)
                            };
                        case 3:
                            return function(n, r, o) {
                                return t.call(e, n, r, o)
                            }
                    }
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
            }, function(t, e) {
                t.exports = function(t) {
                    if ("function" != typeof t) throw TypeError(t + " is not a function!");
                    return t
                }
            }, function(t, e, n) {
                var r = n(16),
                    o = n(24);
                t.exports = n(20) ? function(t, e, n) {
                    return r.f(t, e, o(1, n))
                } : function(t, e, n) {
                    return t[e] = n, t
                }
            }, function(t, e, n) {
                var r = n(17),
                    o = n(19),
                    i = n(23),
                    u = Object.defineProperty;
                e.f = n(20) ? Object.defineProperty : function(t, e, n) {
                    if (r(t), e = i(e, !0), r(n), o) try {
                        return u(t, e, n)
                    } catch (t) {}
                    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                    return "value" in n && (t[e] = n.value), t
                }
            }, function(t, e, n) {
                var r = n(18);
                t.exports = function(t) {
                    if (!r(t)) throw TypeError(t + " is not an object!");
                    return t
                }
            }, function(t, e) {
                t.exports = function(t) {
                    return "object" == typeof t ? null !== t : "function" == typeof t
                }
            }, function(t, e, n) {
                t.exports = !n(20) && !n(21)(function() {
                    return 7 != Object.defineProperty(n(22)("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                })
            }, function(t, e, n) {
                t.exports = !n(21)(function() {
                    return 7 != Object.defineProperty({}, "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                })
            }, function(t, e) {
                t.exports = function(t) {
                    try {
                        return !!t()
                    } catch (t) {
                        return !0
                    }
                }
            }, function(t, e, n) {
                var r = n(18),
                    o = n(11).document,
                    i = r(o) && r(o.createElement);
                t.exports = function(t) {
                    return i ? o.createElement(t) : {}
                }
            }, function(t, e, n) {
                var r = n(18);
                t.exports = function(t, e) {
                    if (!r(t)) return t;
                    var n, o;
                    if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
                    if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
                    if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
                    throw TypeError("Can't convert object to primitive value")
                }
            }, function(t, e) {
                t.exports = function(t, e) {
                    return {
                        enumerable: !(1 & t),
                        configurable: !(2 & t),
                        writable: !(4 & t),
                        value: e
                    }
                }
            }, function(t, e) {
                var n = {}.hasOwnProperty;
                t.exports = function(t, e) {
                    return n.call(t, e)
                }
            }, function(t, e, n) {
                t.exports = n(15)
            }, function(t, e) {
                t.exports = {}
            }, function(t, e, n) {
                "use strict";
                var r = n(29),
                    o = n(24),
                    i = n(44),
                    u = {};
                n(15)(u, n(45)("iterator"), function() {
                    return this
                }), t.exports = function(t, e, n) {
                    t.prototype = r(u, {
                        next: o(1, n)
                    }), i(t, e + " Iterator")
                }
            }, function(t, e, n) {
                var r = n(17),
                    o = n(30),
                    i = n(42),
                    u = n(39)("IE_PROTO"),
                    a = function() {},
                    c = "prototype",
                    l = function() {
                        var t, e = n(22)("iframe"),
                            r = i.length,
                            o = "<",
                            u = ">";
                        for (e.style.display = "none", n(43).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(o + "script" + u + "document.F=Object" + o + "/script" + u), t.close(), l = t.F; r--;) delete l[c][i[r]];
                        return l()
                    };
                t.exports = Object.create || function(t, e) {
                    var n;
                    return null !== t ? (a[c] = r(t), n = new a, a[c] = null, n[u] = t) : n = l(), void 0 === e ? n : o(n, e)
                }
            }, function(t, e, n) {
                var r = n(16),
                    o = n(17),
                    i = n(31);
                t.exports = n(20) ? Object.defineProperties : function(t, e) {
                    o(t);
                    for (var n, u = i(e), a = u.length, c = 0; a > c;) r.f(t, n = u[c++], e[n]);
                    return t
                }
            }, function(t, e, n) {
                var r = n(32),
                    o = n(42);
                t.exports = Object.keys || function(t) {
                    return r(t, o)
                }
            }, function(t, e, n) {
                var r = n(25),
                    o = n(33),
                    i = n(36)(!1),
                    u = n(39)("IE_PROTO");
                t.exports = function(t, e) {
                    var n, a = o(t),
                        c = 0,
                        l = [];
                    for (n in a) n != u && r(a, n) && l.push(n);
                    for (; e.length > c;) r(a, n = e[c++]) && (~i(l, n) || l.push(n));
                    return l
                }
            }, function(t, e, n) {
                var r = n(34),
                    o = n(7);
                t.exports = function(t) {
                    return r(o(t))
                }
            }, function(t, e, n) {
                var r = n(35);
                t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                    return "String" == r(t) ? t.split("") : Object(t)
                }
            }, function(t, e) {
                var n = {}.toString;
                t.exports = function(t) {
                    return n.call(t).slice(8, -1)
                }
            }, function(t, e, n) {
                var r = n(33),
                    o = n(37),
                    i = n(38);
                t.exports = function(t) {
                    return function(e, n, u) {
                        var a, c = r(e),
                            l = o(c.length),
                            f = i(u, l);
                        if (t && n != n) {
                            for (; l > f;)
                                if (a = c[f++], a != a) return !0
                        } else
                            for (; l > f; f++)
                                if ((t || f in c) && c[f] === n) return t || f || 0;
                        return !t && -1
                    }
                }
            }, function(t, e, n) {
                var r = n(6),
                    o = Math.min;
                t.exports = function(t) {
                    return t > 0 ? o(r(t), 9007199254740991) : 0
                }
            }, function(t, e, n) {
                var r = n(6),
                    o = Math.max,
                    i = Math.min;
                t.exports = function(t, e) {
                    return t = r(t), t < 0 ? o(t + e, 0) : i(t, e)
                }
            }, function(t, e, n) {
                var r = n(40)("keys"),
                    o = n(41);
                t.exports = function(t) {
                    return r[t] || (r[t] = o(t))
                }
            }, function(t, e, n) {
                var r = n(12),
                    o = n(11),
                    i = "__core-js_shared__",
                    u = o[i] || (o[i] = {});
                (t.exports = function(t, e) {
                    return u[t] || (u[t] = void 0 !== e ? e : {})
                })("versions", []).push({
                    version: r.version,
                    mode: n(9) ? "pure" : "global",
                    copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
                })
            }, function(t, e) {
                var n = 0,
                    r = Math.random();
                t.exports = function(t) {
                    return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
                }
            }, function(t, e) {
                t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
            }, function(t, e, n) {
                var r = n(11).document;
                t.exports = r && r.documentElement
            }, function(t, e, n) {
                var r = n(16).f,
                    o = n(25),
                    i = n(45)("toStringTag");
                t.exports = function(t, e, n) {
                    t && !o(t = n ? t : t.prototype, i) && r(t, i, {
                        configurable: !0,
                        value: e
                    })
                }
            }, function(t, e, n) {
                var r = n(40)("wks"),
                    o = n(41),
                    i = n(11).Symbol,
                    u = "function" == typeof i,
                    a = t.exports = function(t) {
                        return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t))
                    };
                a.store = r
            }, function(t, e, n) {
                var r = n(25),
                    o = n(47),
                    i = n(39)("IE_PROTO"),
                    u = Object.prototype;
                t.exports = Object.getPrototypeOf || function(t) {
                    return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
                }
            }, function(t, e, n) {
                var r = n(7);
                t.exports = function(t) {
                    return Object(r(t))
                }
            }, function(t, e, n) {
                "use strict";
                var r = n(13),
                    o = n(10),
                    i = n(47),
                    u = n(49),
                    a = n(50),
                    c = n(37),
                    l = n(51),
                    f = n(52);
                o(o.S + o.F * !n(54)(function(t) {
                    Array.from(t)
                }), "Array", {
                    from: function(t) {
                        var e, n, o, s, d = i(t),
                            h = "function" == typeof this ? this : Array,
                            v = arguments.length,
                            _ = v > 1 ? arguments[1] : void 0,
                            p = void 0 !== _,
                            y = 0,
                            b = f(d);
                        if (p && (_ = r(_, v > 2 ? arguments[2] : void 0, 2)), void 0 == b || h == Array && a(b))
                            for (e = c(d.length), n = new h(e); e > y; y++) l(n, y, p ? _(d[y], y) : d[y]);
                        else
                            for (s = b.call(d), n = new h; !(o = s.next()).done; y++) l(n, y, p ? u(s, _, [o.value, y], !0) : o.value);
                        return n.length = y, n
                    }
                })
            }, function(t, e, n) {
                var r = n(17);
                t.exports = function(t, e, n, o) {
                    try {
                        return o ? e(r(n)[0], n[1]) : e(n)
                    } catch (e) {
                        var i = t.return;
                        throw void 0 !== i && r(i.call(t)), e
                    }
                }
            }, function(t, e, n) {
                var r = n(27),
                    o = n(45)("iterator"),
                    i = Array.prototype;
                t.exports = function(t) {
                    return void 0 !== t && (r.Array === t || i[o] === t)
                }
            }, function(t, e, n) {
                "use strict";
                var r = n(16),
                    o = n(24);
                t.exports = function(t, e, n) {
                    e in t ? r.f(t, e, o(0, n)) : t[e] = n
                }
            }, function(t, e, n) {
                var r = n(53),
                    o = n(45)("iterator"),
                    i = n(27);
                t.exports = n(12).getIteratorMethod = function(t) {
                    if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)]
                }
            }, function(t, e, n) {
                var r = n(35),
                    o = n(45)("toStringTag"),
                    i = "Arguments" == r(function() {
                        return arguments
                    }()),
                    u = function(t, e) {
                        try {
                            return t[e]
                        } catch (t) {}
                    };
                t.exports = function(t) {
                    var e, n, a;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = u(e = Object(t), o)) ? n : i ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a
                }
            }, function(t, e, n) {
                var r = n(45)("iterator"),
                    o = !1;
                try {
                    var i = [7][r]();
                    i.return = function() {
                        o = !0
                    }, Array.from(i, function() {
                        throw 2
                    })
                } catch (t) {}
                t.exports = function(t, e) {
                    if (!e && !o) return !1;
                    var n = !1;
                    try {
                        var i = [7],
                            u = i[r]();
                        u.next = function() {
                            return {
                                done: n = !0
                            }
                        }, i[r] = function() {
                            return u
                        }, t(i)
                    } catch (t) {}
                    return n
                }
            }, function(t, e, n) {
                t.exports = {
                    default: n(56),
                    __esModule: !0
                }
            }, function(t, e, n) {
                n(4), n(57), t.exports = n(61).f("iterator")
            }, function(t, e, n) {
                n(58);
                for (var r = n(11), o = n(15), i = n(27), u = n(45)("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < a.length; c++) {
                    var l = a[c],
                        f = r[l],
                        s = f && f.prototype;
                    s && !s[u] && o(s, u, l), i[l] = i.Array
                }
            }, function(t, e, n) {
                "use strict";
                var r = n(59),
                    o = n(60),
                    i = n(27),
                    u = n(33);
                t.exports = n(8)(Array, "Array", function(t, e) {
                    this._t = u(t), this._i = 0, this._k = e
                }, function() {
                    var t = this._t,
                        e = this._k,
                        n = this._i++;
                    return !t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]])
                }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
            }, function(t, e) {
                t.exports = function() {}
            }, function(t, e) {
                t.exports = function(t, e) {
                    return {
                        value: e,
                        done: !!t
                    }
                }
            }, function(t, e, n) {
                e.f = n(45)
            }, function(t, e, n) {
                t.exports = {
                    default: n(63),
                    __esModule: !0
                }
            }, function(t, e, n) {
                n(64), n(74), n(75), n(76), t.exports = n(12).Symbol
            }, function(t, e, n) {
                "use strict";
                var r = n(11),
                    o = n(25),
                    i = n(20),
                    u = n(10),
                    a = n(26),
                    c = n(65).KEY,
                    l = n(21),
                    f = n(40),
                    s = n(44),
                    d = n(41),
                    h = n(45),
                    v = n(61),
                    _ = n(66),
                    p = n(67),
                    y = n(70),
                    b = n(17),
                    g = n(18),
                    m = n(33),
                    x = n(23),
                    S = n(24),
                    E = n(29),
                    M = n(71),
                    O = n(73),
                    w = n(16),
                    P = n(31),
                    T = O.f,
                    k = w.f,
                    j = M.f,
                    A = r.Symbol,
                    L = r.JSON,
                    R = L && L.stringify,
                    C = "prototype",
                    D = h("_hidden"),
                    I = h("toPrimitive"),
                    N = {}.propertyIsEnumerable,
                    F = f("symbol-registry"),
                    H = f("symbols"),
                    z = f("op-symbols"),
                    B = Object[C],
                    G = "function" == typeof A,
                    V = r.QObject,
                    W = !V || !V[C] || !V[C].findChild,
                    K = i && l(function() {
                        return 7 != E(k({}, "a", {
                            get: function() {
                                return k(this, "a", {
                                    value: 7
                                }).a
                            }
                        })).a
                    }) ? function(t, e, n) {
                        var r = T(B, e);
                        r && delete B[e], k(t, e, n), r && t !== B && k(B, e, r)
                    } : k,
                    U = function(t) {
                        var e = H[t] = E(A[C]);
                        return e._k = t, e
                    },
                    Y = G && "symbol" == typeof A.iterator ? function(t) {
                        return "symbol" == typeof t
                    } : function(t) {
                        return t instanceof A
                    },
                    q = function(t, e, n) {
                        return t === B && q(z, e, n), b(t), e = x(e, !0), b(n), o(H, e) ? (n.enumerable ? (o(t, D) && t[D][e] && (t[D][e] = !1), n = E(n, {
                            enumerable: S(0, !1)
                        })) : (o(t, D) || k(t, D, S(1, {})), t[D][e] = !0), K(t, e, n)) : k(t, e, n)
                    },
                    X = function(t, e) {
                        b(t);
                        for (var n, r = p(e = m(e)), o = 0, i = r.length; i > o;) q(t, n = r[o++], e[n]);
                        return t
                    },
                    J = function(t, e) {
                        return void 0 === e ? E(t) : X(E(t), e)
                    },
                    Q = function(t) {
                        var e = N.call(this, t = x(t, !0));
                        return !(this === B && o(H, t) && !o(z, t)) && (!(e || !o(this, t) || !o(H, t) || o(this, D) && this[D][t]) || e)
                    },
                    Z = function(t, e) {
                        if (t = m(t), e = x(e, !0), t !== B || !o(H, e) || o(z, e)) {
                            var n = T(t, e);
                            return !n || !o(H, e) || o(t, D) && t[D][e] || (n.enumerable = !0), n
                        }
                    },
                    $ = function(t) {
                        for (var e, n = j(m(t)), r = [], i = 0; n.length > i;) o(H, e = n[i++]) || e == D || e == c || r.push(e);
                        return r
                    },
                    tt = function(t) {
                        for (var e, n = t === B, r = j(n ? z : m(t)), i = [], u = 0; r.length > u;) !o(H, e = r[u++]) || n && !o(B, e) || i.push(H[e]);
                        return i
                    };
                G || (A = function() {
                    if (this instanceof A) throw TypeError("Symbol is not a constructor!");
                    var t = d(arguments.length > 0 ? arguments[0] : void 0),
                        e = function(n) {
                            this === B && e.call(z, n), o(this, D) && o(this[D], t) && (this[D][t] = !1), K(this, t, S(1, n))
                        };
                    return i && W && K(B, t, {
                        configurable: !0,
                        set: e
                    }), U(t)
                }, a(A[C], "toString", function() {
                    return this._k
                }), O.f = Z, w.f = q, n(72).f = M.f = $, n(69).f = Q, n(68).f = tt, i && !n(9) && a(B, "propertyIsEnumerable", Q, !0), v.f = function(t) {
                    return U(h(t))
                }), u(u.G + u.W + u.F * !G, {
                    Symbol: A
                });
                for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) h(et[nt++]);
                for (var rt = P(h.store), ot = 0; rt.length > ot;) _(rt[ot++]);
                u(u.S + u.F * !G, "Symbol", {
                    for: function(t) {
                        return o(F, t += "") ? F[t] : F[t] = A(t)
                    },
                    keyFor: function(t) {
                        if (!Y(t)) throw TypeError(t + " is not a symbol!");
                        for (var e in F)
                            if (F[e] === t) return e
                    },
                    useSetter: function() {
                        W = !0
                    },
                    useSimple: function() {
                        W = !1
                    }
                }), u(u.S + u.F * !G, "Object", {
                    create: J,
                    defineProperty: q,
                    defineProperties: X,
                    getOwnPropertyDescriptor: Z,
                    getOwnPropertyNames: $,
                    getOwnPropertySymbols: tt
                }), L && u(u.S + u.F * (!G || l(function() {
                    var t = A();
                    return "[null]" != R([t]) || "{}" != R({
                        a: t
                    }) || "{}" != R(Object(t))
                })), "JSON", {
                    stringify: function(t) {
                        for (var e, n, r = [t], o = 1; arguments.length > o;) r.push(arguments[o++]);
                        if (n = e = r[1], (g(e) || void 0 !== t) && !Y(t)) return y(e) || (e = function(t, e) {
                            if ("function" == typeof n && (e = n.call(this, t, e)), !Y(e)) return e
                        }), r[1] = e, R.apply(L, r)
                    }
                }), A[C][I] || n(15)(A[C], I, A[C].valueOf), s(A, "Symbol"), s(Math, "Math", !0), s(r.JSON, "JSON", !0)
            }, function(t, e, n) {
                var r = n(41)("meta"),
                    o = n(18),
                    i = n(25),
                    u = n(16).f,
                    a = 0,
                    c = Object.isExtensible || function() {
                        return !0
                    },
                    l = !n(21)(function() {
                        return c(Object.preventExtensions({}))
                    }),
                    f = function(t) {
                        u(t, r, {
                            value: {
                                i: "O" + ++a,
                                w: {}
                            }
                        })
                    },
                    s = function(t, e) {
                        if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                        if (!i(t, r)) {
                            if (!c(t)) return "F";
                            if (!e) return "E";
                            f(t)
                        }
                        return t[r].i
                    },
                    d = function(t, e) {
                        if (!i(t, r)) {
                            if (!c(t)) return !0;
                            if (!e) return !1;
                            f(t)
                        }
                        return t[r].w
                    },
                    h = function(t) {
                        return l && v.NEED && c(t) && !i(t, r) && f(t), t
                    },
                    v = t.exports = {
                        KEY: r,
                        NEED: !1,
                        fastKey: s,
                        getWeak: d,
                        onFreeze: h
                    }
            }, function(t, e, n) {
                var r = n(11),
                    o = n(12),
                    i = n(9),
                    u = n(61),
                    a = n(16).f;
                t.exports = function(t) {
                    var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
                    "_" == t.charAt(0) || t in e || a(e, t, {
                        value: u.f(t)
                    })
                }
            }, function(t, e, n) {
                var r = n(31),
                    o = n(68),
                    i = n(69);
                t.exports = function(t) {
                    var e = r(t),
                        n = o.f;
                    if (n)
                        for (var u, a = n(t), c = i.f, l = 0; a.length > l;) c.call(t, u = a[l++]) && e.push(u);
                    return e
                }
            }, function(t, e) {
                e.f = Object.getOwnPropertySymbols
            }, function(t, e) {
                e.f = {}.propertyIsEnumerable
            }, function(t, e, n) {
                var r = n(35);
                t.exports = Array.isArray || function(t) {
                    return "Array" == r(t)
                }
            }, function(t, e, n) {
                var r = n(33),
                    o = n(72).f,
                    i = {}.toString,
                    u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
                    a = function(t) {
                        try {
                            return o(t)
                        } catch (t) {
                            return u.slice()
                        }
                    };
                t.exports.f = function(t) {
                    return u && "[object Window]" == i.call(t) ? a(t) : o(r(t))
                }
            }, function(t, e, n) {
                var r = n(32),
                    o = n(42).concat("length", "prototype");
                e.f = Object.getOwnPropertyNames || function(t) {
                    return r(t, o)
                }
            }, function(t, e, n) {
                var r = n(69),
                    o = n(24),
                    i = n(33),
                    u = n(23),
                    a = n(25),
                    c = n(19),
                    l = Object.getOwnPropertyDescriptor;
                e.f = n(20) ? l : function(t, e) {
                    if (t = i(t), e = u(e, !0), c) try {
                        return l(t, e)
                    } catch (t) {}
                    if (a(t, e)) return o(!r.f.call(t, e), t[e])
                }
            }, function(t, e) {}, function(t, e, n) {
                n(66)("asyncIterator")
            }, function(t, e, n) {
                n(66)("observable")
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                var i = n(78),
                    u = r(i),
                    a = n(81),
                    c = r(a),
                    l = n(85),
                    f = r(l);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.SmoothScrollbar = void 0;
                var s = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, f.default)(t, r.key, r)
                            }
                        }
                        return function(e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    d = n(88),
                    h = n(116);
                e.SmoothScrollbar = function() {
                    function t(e) {
                        var n = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        o(this, t), e.setAttribute("tabindex", "1"), e.scrollTop = e.scrollLeft = 0;
                        var i = (0, h.findChild)(e, "scroll-content"),
                            a = (0, h.findChild)(e, "overscroll-glow"),
                            l = (0, h.findChild)(e, "scrollbar-track-x"),
                            f = (0, h.findChild)(e, "scrollbar-track-y");
                        if ((0, h.setStyle)(e, {
                                overflow: "hidden",
                                outline: "none"
                            }), (0, h.setStyle)(a, {
                                display: "none",
                                "pointer-events": "none"
                            }), this.__readonly("targets", (0, c.default)({
                                container: e,
                                content: i,
                                canvas: {
                                    elem: a,
                                    context: a.getContext("2d")
                                },
                                xAxis: (0, c.default)({
                                    track: l,
                                    thumb: (0, h.findChild)(l, "scrollbar-thumb-x")
                                }),
                                yAxis: (0, c.default)({
                                    track: f,
                                    thumb: (0, h.findChild)(f, "scrollbar-thumb-y")
                                })
                            })).__readonly("offset", {
                                x: 0,
                                y: 0
                            }).__readonly("thumbOffset", {
                                x: 0,
                                y: 0
                            }).__readonly("limit", {
                                x: 1 / 0,
                                y: 1 / 0
                            }).__readonly("movement", {
                                x: 0,
                                y: 0
                            }).__readonly("movementLocked", {
                                x: !1,
                                y: !1
                            }).__readonly("overscrollRendered", {
                                x: 0,
                                y: 0
                            }).__readonly("overscrollBack", !1).__readonly("thumbSize", {
                                x: 0,
                                y: 0,
                                realX: 0,
                                realY: 0
                            }).__readonly("bounding", {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            }).__readonly("children", []).__readonly("parents", []).__readonly("size", this.getSize()).__readonly("isNestedScrollbar", !1), (0, u.default)(this, {
                                __hideTrackThrottle: {
                                    value: (0, h.debounce)(this.hideTrack.bind(this), 1e3, !1)
                                },
                                __updateThrottle: {
                                    value: (0, h.debounce)(this.update.bind(this))
                                },
                                __touchRecord: {
                                    value: new h.TouchRecord
                                },
                                __listeners: {
                                    value: []
                                },
                                __handlers: {
                                    value: []
                                },
                                __children: {
                                    value: []
                                },
                                __timerID: {
                                    value: {}
                                }
                            }), this.__initOptions(r), this.__initReverseWheel(), this.__initScrollbar(), d.sbList.set(e, this), "function" == typeof d.GLOBAL_ENV.MutationObserver) {
                            var s = new d.GLOBAL_ENV.MutationObserver(function() {
                                n.update(!0)
                            });
                            s.observe(i, {
                                childList: !0
                            }), Object.defineProperty(this, "__observer", {
                                value: s
                            })
                        }
                    }
                    return s(t, [{
                        key: "MAX_OVERSCROLL",
                        get: function() {
                            var t = this.options,
                                e = this.size;
                            switch (t.overscrollEffect) {
                                case "bounce":
                                    var n = Math.floor(Math.sqrt(Math.pow(e.container.width, 2) + Math.pow(e.container.height, 2))),
                                        r = this.__isMovementLocked() ? 2 : 10;
                                    return d.GLOBAL_ENV.TOUCH_SUPPORTED ? (0, h.pickInRange)(n / r, 100, 1e3) : (0, h.pickInRange)(n / 10, 25, 50);
                                case "glow":
                                    return 150;
                                default:
                                    return 0
                            }
                        }
                    }, {
                        key: "scrollTop",
                        get: function() {
                            return this.offset.y
                        }
                    }, {
                        key: "scrollLeft",
                        get: function() {
                            return this.offset.x
                        }
                    }]), t
                }()
            }, function(t, e, n) {
                t.exports = {
                    default: n(79),
                    __esModule: !0
                }
            }, function(t, e, n) {
                n(80);
                var r = n(12).Object;
                t.exports = function(t, e) {
                    return r.defineProperties(t, e)
                }
            }, function(t, e, n) {
                var r = n(10);
                r(r.S + r.F * !n(20), "Object", {
                    defineProperties: n(30)
                })
            }, function(t, e, n) {
                t.exports = {
                    default: n(82),
                    __esModule: !0
                }
            }, function(t, e, n) {
                n(83), t.exports = n(12).Object.freeze
            }, function(t, e, n) {
                var r = n(18),
                    o = n(65).onFreeze;
                n(84)("freeze", function(t) {
                    return function(e) {
                        return t && r(e) ? t(o(e)) : e
                    }
                })
            }, function(t, e, n) {
                var r = n(10),
                    o = n(12),
                    i = n(21);
                t.exports = function(t, e) {
                    var n = (o.Object || {})[t] || Object[t],
                        u = {};
                    u[t] = e(n), r(r.S + r.F * i(function() {
                        n(1)
                    }), "Object", u)
                }
            }, function(t, e, n) {
                t.exports = {
                    default: n(86),
                    __esModule: !0
                }
            }, function(t, e, n) {
                n(87);
                var r = n(12).Object;
                t.exports = function(t, e, n) {
                    return r.defineProperty(t, e, n)
                }
            }, function(t, e, n) {
                var r = n(10);
                r(r.S + r.F * !n(20), "Object", {
                    defineProperty: n(16).f
                })
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var o = n(85),
                    i = r(o),
                    u = n(89),
                    a = r(u);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var c = n(92);
                (0, a.default)(c).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return c[t]
                        }
                    })
                })
            }, function(t, e, n) {
                t.exports = {
                    default: n(90),
                    __esModule: !0
                }
            }, function(t, e, n) {
                n(91), t.exports = n(12).Object.keys
            }, function(t, e, n) {
                var r = n(47),
                    o = n(31);
                n(84)("keys", function() {
                    return function(t) {
                        return o(r(t))
                    }
                })
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var o = n(85),
                    i = r(o),
                    u = n(89),
                    a = r(u);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var c = n(93);
                (0, a.default)(c).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return c[t]
                        }
                    })
                });
                var l = n(94);
                (0, a.default)(l).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return l[t]
                        }
                    })
                });
                var f = n(115);
                (0, a.default)(f).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return f[t]
                        }
                    })
                })
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var o = n(85),
                    i = r(o),
                    u = n(89),
                    a = r(u);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var c = function(t) {
                        var e = {},
                            n = {};
                        return (0, a.default)(t).forEach(function(r) {
                            (0, i.default)(e, r, {
                                get: function() {
                                    if (!n.hasOwnProperty(r)) {
                                        var e = t[r];
                                        n[r] = e()
                                    }
                                    return n[r]
                                }
                            })
                        }), e
                    },
                    l = {
                        MutationObserver: function() {
                            return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
                        },
                        TOUCH_SUPPORTED: function() {
                            return "ontouchstart" in document
                        },
                        EASING_MULTIPLIER: function() {
                            return navigator.userAgent.match(/Android/) ? .5 : .25
                        },
                        WHEEL_EVENT: function() {
                            return "onwheel" in window ? "wheel" : "mousewheel"
                        }
                    };
                e.GLOBAL_ENV = c(l)
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var o = n(95),
                    i = r(o);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var u = new i.default,
                    a = u.set.bind(u),
                    c = u.delete.bind(u);
                u.update = function() {
                    u.forEach(function(t) {
                        t.__updateTree()
                    })
                }, u.delete = function() {
                    var t = c.apply(void 0, arguments);
                    return u.update(), t
                }, u.set = function() {
                    var t = a.apply(void 0, arguments);
                    return u.update(), t
                }, e.sbList = u
            }, function(t, e, n) {
                t.exports = {
                    default: n(96),
                    __esModule: !0
                }
            }, function(t, e, n) {
                n(74), n(4), n(57), n(97), n(108), n(111), n(113), t.exports = n(12).Map
            }, function(t, e, n) {
                "use strict";
                var r = n(98),
                    o = n(103),
                    i = "Map";
                t.exports = n(104)(i, function(t) {
                    return function() {
                        return t(this, arguments.length > 0 ? arguments[0] : void 0)
                    }
                }, {
                    get: function(t) {
                        var e = r.getEntry(o(this, i), t);
                        return e && e.v
                    },
                    set: function(t, e) {
                        return r.def(o(this, i), 0 === t ? 0 : t, e)
                    }
                }, r, !0)
            }, function(t, e, n) {
                "use strict";
                var r = n(16).f,
                    o = n(29),
                    i = n(99),
                    u = n(13),
                    a = n(100),
                    c = n(101),
                    l = n(8),
                    f = n(60),
                    s = n(102),
                    d = n(20),
                    h = n(65).fastKey,
                    v = n(103),
                    _ = d ? "_s" : "size",
                    p = function(t, e) {
                        var n, r = h(e);
                        if ("F" !== r) return t._i[r];
                        for (n = t._f; n; n = n.n)
                            if (n.k == e) return n
                    };
                t.exports = {
                    getConstructor: function(t, e, n, l) {
                        var f = t(function(t, r) {
                            a(t, f, e, "_i"), t._t = e, t._i = o(null), t._f = void 0, t._l = void 0, t[_] = 0, void 0 != r && c(r, n, t[l], t)
                        });
                        return i(f.prototype, {
                            clear: function() {
                                for (var t = v(this, e), n = t._i, r = t._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                                t._f = t._l = void 0, t[_] = 0
                            },
                            delete: function(t) {
                                var n = v(this, e),
                                    r = p(n, t);
                                if (r) {
                                    var o = r.n,
                                        i = r.p;
                                    delete n._i[r.i], r.r = !0, i && (i.n = o), o && (o.p = i), n._f == r && (n._f = o), n._l == r && (n._l = i), n[_]--
                                }
                                return !!r
                            },
                            forEach: function(t) {
                                v(this, e);
                                for (var n, r = u(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                                    for (r(n.v, n.k, this); n && n.r;) n = n.p
                            },
                            has: function(t) {
                                return !!p(v(this, e), t)
                            }
                        }), d && r(f.prototype, "size", {
                            get: function() {
                                return v(this, e)[_]
                            }
                        }), f
                    },
                    def: function(t, e, n) {
                        var r, o, i = p(t, e);
                        return i ? i.v = n : (t._l = i = {
                            i: o = h(e, !0),
                            k: e,
                            v: n,
                            p: r = t._l,
                            n: void 0,
                            r: !1
                        }, t._f || (t._f = i), r && (r.n = i), t[_]++, "F" !== o && (t._i[o] = i)), t
                    },
                    getEntry: p,
                    setStrong: function(t, e, n) {
                        l(t, e, function(t, n) {
                            this._t = v(t, e), this._k = n, this._l = void 0
                        }, function() {
                            for (var t = this, e = t._k, n = t._l; n && n.r;) n = n.p;
                            return t._t && (t._l = n = n ? n.n : t._t._f) ? "keys" == e ? f(0, n.k) : "values" == e ? f(0, n.v) : f(0, [n.k, n.v]) : (t._t = void 0, f(1))
                        }, n ? "entries" : "values", !n, !0), s(e)
                    }
                }
            }, function(t, e, n) {
                var r = n(15);
                t.exports = function(t, e, n) {
                    for (var o in e) n && t[o] ? t[o] = e[o] : r(t, o, e[o]);
                    return t
                }
            }, function(t, e) {
                t.exports = function(t, e, n, r) {
                    if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
                    return t
                }
            }, function(t, e, n) {
                var r = n(13),
                    o = n(49),
                    i = n(50),
                    u = n(17),
                    a = n(37),
                    c = n(52),
                    l = {},
                    f = {},
                    e = t.exports = function(t, e, n, s, d) {
                        var h, v, _, p, y = d ? function() {
                                return t
                            } : c(t),
                            b = r(n, s, e ? 2 : 1),
                            g = 0;
                        if ("function" != typeof y) throw TypeError(t + " is not iterable!");
                        if (i(y)) {
                            for (h = a(t.length); h > g; g++)
                                if (p = e ? b(u(v = t[g])[0], v[1]) : b(t[g]), p === l || p === f) return p
                        } else
                            for (_ = y.call(t); !(v = _.next()).done;)
                                if (p = o(_, b, v.value, e), p === l || p === f) return p
                    };
                e.BREAK = l, e.RETURN = f
            }, function(t, e, n) {
                "use strict";
                var r = n(11),
                    o = n(12),
                    i = n(16),
                    u = n(20),
                    a = n(45)("species");
                t.exports = function(t) {
                    var e = "function" == typeof o[t] ? o[t] : r[t];
                    u && e && !e[a] && i.f(e, a, {
                        configurable: !0,
                        get: function() {
                            return this
                        }
                    })
                }
            }, function(t, e, n) {
                var r = n(18);
                t.exports = function(t, e) {
                    if (!r(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
                    return t
                }
            }, function(t, e, n) {
                "use strict";
                var r = n(11),
                    o = n(10),
                    i = n(65),
                    u = n(21),
                    a = n(15),
                    c = n(99),
                    l = n(101),
                    f = n(100),
                    s = n(18),
                    d = n(44),
                    h = n(16).f,
                    v = n(105)(0),
                    _ = n(20);
                t.exports = function(t, e, n, p, y, b) {
                    var g = r[t],
                        m = g,
                        x = y ? "set" : "add",
                        S = m && m.prototype,
                        E = {};
                    return _ && "function" == typeof m && (b || S.forEach && !u(function() {
                        (new m).entries().next()
                    })) ? (m = e(function(e, n) {
                        f(e, m, t, "_c"), e._c = new g, void 0 != n && l(n, y, e[x], e)
                    }), v("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(t) {
                        var e = "add" == t || "set" == t;
                        t in S && (!b || "clear" != t) && a(m.prototype, t, function(n, r) {
                            if (f(this, m, t), !e && b && !s(n)) return "get" == t && void 0;
                            var o = this._c[t](0 === n ? 0 : n, r);
                            return e ? this : o
                        })
                    }), b || h(m.prototype, "size", {
                        get: function() {
                            return this._c.size
                        }
                    })) : (m = p.getConstructor(e, t, y, x), c(m.prototype, n), i.NEED = !0), d(m, t), E[t] = m, o(o.G + o.W + o.F, E), b || p.setStrong(m, t, y), m
                }
            }, function(t, e, n) {
                var r = n(13),
                    o = n(34),
                    i = n(47),
                    u = n(37),
                    a = n(106);
                t.exports = function(t, e) {
                    var n = 1 == t,
                        c = 2 == t,
                        l = 3 == t,
                        f = 4 == t,
                        s = 6 == t,
                        d = 5 == t || s,
                        h = e || a;
                    return function(e, a, v) {
                        for (var _, p, y = i(e), b = o(y), g = r(a, v, 3), m = u(b.length), x = 0, S = n ? h(e, m) : c ? h(e, 0) : void 0; m > x; x++)
                            if ((d || x in b) && (_ = b[x], p = g(_, x, y), t))
                                if (n) S[x] = p;
                                else if (p) switch (t) {
                            case 3:
                                return !0;
                            case 5:
                                return _;
                            case 6:
                                return x;
                            case 2:
                                S.push(_)
                        } else if (f) return !1;
                        return s ? -1 : l || f ? f : S
                    }
                }
            }, function(t, e, n) {
                var r = n(107);
                t.exports = function(t, e) {
                    return new(r(t))(e)
                }
            }, function(t, e, n) {
                var r = n(18),
                    o = n(70),
                    i = n(45)("species");
                t.exports = function(t) {
                    var e;
                    return o(t) && (e = t.constructor, "function" != typeof e || e !== Array && !o(e.prototype) || (e = void 0), r(e) && (e = e[i], null === e && (e = void 0))), void 0 === e ? Array : e
                }
            }, function(t, e, n) {
                var r = n(10);
                r(r.P + r.R, "Map", {
                    toJSON: n(109)("Map")
                })
            }, function(t, e, n) {
                var r = n(53),
                    o = n(110);
                t.exports = function(t) {
                    return function() {
                        if (r(this) != t) throw TypeError(t + "#toJSON isn't generic");
                        return o(this)
                    }
                }
            }, function(t, e, n) {
                var r = n(101);
                t.exports = function(t, e) {
                    var n = [];
                    return r(t, !1, n.push, n, e), n
                }
            }, function(t, e, n) {
                n(112)("Map")
            }, function(t, e, n) {
                "use strict";
                var r = n(10);
                t.exports = function(t) {
                    r(r.S, t, {
                        of: function() {
                            for (var t = arguments.length, e = new Array(t); t--;) e[t] = arguments[t];
                            return new this(e)
                        }
                    })
                }
            }, function(t, e, n) {
                n(114)("Map")
            }, function(t, e, n) {
                "use strict";
                var r = n(10),
                    o = n(14),
                    i = n(13),
                    u = n(101);
                t.exports = function(t) {
                    r(r.S, t, {
                        from: function(t) {
                            var e, n, r, a, c = arguments[1];
                            return o(this), e = void 0 !== c, e && o(c), void 0 == t ? new this : (n = [], e ? (r = 0, a = i(c, arguments[2], 2), u(t, !1, function(t) {
                                n.push(a(t, r++))
                            })) : u(t, !1, n.push, n), new this(n))
                        }
                    })
                }
            }, function(t, e) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                e.selectors = "scrollbar, [scrollbar], [data-scrollbar]"
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var o = n(85),
                    i = r(o),
                    u = n(89),
                    a = r(u);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var c = n(117);
                (0, a.default)(c).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return c[t]
                        }
                    })
                })
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var o = n(85),
                    i = r(o),
                    u = n(89),
                    a = r(u);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var c = n(118);
                (0, a.default)(c).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return c[t]
                        }
                    })
                });
                var l = n(119);
                (0, a.default)(l).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return l[t]
                        }
                    })
                });
                var f = n(120);
                (0, a.default)(f).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return f[t]
                        }
                    })
                });
                var s = n(121);
                (0, a.default)(s).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return s[t]
                        }
                    })
                });
                var d = n(122);
                (0, a.default)(d).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return d[t]
                        }
                    })
                });
                var h = n(123);
                (0, a.default)(h).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return h[t]
                        }
                    })
                });
                var v = n(124);
                (0, a.default)(v).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return v[t]
                        }
                    })
                });
                var _ = n(125);
                (0, a.default)(_).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return _[t]
                        }
                    })
                });
                var p = n(126);
                (0, a.default)(p).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return p[t]
                        }
                    })
                });
                var y = n(127);
                (0, a.default)(y).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return y[t]
                        }
                    })
                });
                var b = n(128);
                (0, a.default)(b).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return b[t]
                        }
                    })
                })
            }, function(t, e) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                e.buildCurve = function(t, e) {
                    var n = [];
                    if (e <= 0) return n;
                    for (var r = Math.round(e / 1e3 * 60) - 1, o = t ? Math.pow(1 / Math.abs(t), 1 / r) : 0, i = 1; i <= r; i++) n.push(t - t * Math.pow(o, i));
                    return n.push(t), n
                }
            }, function(t, e) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var n = 100;
                e.debounce = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n,
                        r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    if ("function" == typeof t) {
                        var o = void 0;
                        return function() {
                            for (var n = arguments.length, i = Array(n), u = 0; u < n; u++) i[u] = arguments[u];
                            !o && r && setTimeout(function() {
                                return t.apply(void 0, i)
                            }), clearTimeout(o), o = setTimeout(function() {
                                o = void 0, t.apply(void 0, i)
                            }, e)
                        }
                    }
                }
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function o(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                        return n
                    }
                    return (0, u.default)(t)
                }
                var i = n(2),
                    u = r(i);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                e.findChild = function(t, e) {
                    var n = t.children,
                        r = null;
                    return n && [].concat(o(n)).some(function(t) {
                        if (t.className.match(e)) return r = t, !0
                    }), r
                }
            }, function(t, e) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var n = {
                        STANDARD: 1,
                        OTHERS: -3
                    },
                    r = [1, 28, 500],
                    o = function(t) {
                        return r[t] || r[0]
                    };
                e.getDelta = function(t) {
                    if ("deltaX" in t) {
                        var e = o(t.deltaMode);
                        return {
                            x: t.deltaX / n.STANDARD * e,
                            y: t.deltaY / n.STANDARD * e
                        }
                    }
                    return "wheelDeltaX" in t ? {
                        x: t.wheelDeltaX / n.OTHERS,
                        y: t.wheelDeltaY / n.OTHERS
                    } : {
                        x: 0,
                        y: t.wheelDelta / n.OTHERS
                    }
                }
            }, function(t, e) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                e.getPointerData = function(t) {
                    return t.touches ? t.touches[t.touches.length - 1] : t
                }
            }, function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.getPosition = void 0;
                var r = n(122);
                e.getPosition = function(t) {
                    var e = (0, r.getPointerData)(t);
                    return {
                        x: e.clientX,
                        y: e.clientY
                    }
                }
            }, function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.getTouchID = void 0;
                var r = n(122);
                e.getTouchID = function(t) {
                    var e = (0, r.getPointerData)(t);
                    return e.identifier
                }
            }, function(t, e) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                e.isOneOf = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return e.some(function(e) {
                        return t === e
                    })
                }
            }, function(t, e) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                e.pickInRange = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -(1 / 0),
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0;
                    return Math.max(e, Math.min(t, n))
                }
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var o = n(89),
                    i = r(o);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var u = ["webkit", "moz", "ms", "o"],
                    a = new RegExp("^-(?!(?:" + u.join("|") + ")-)"),
                    c = function(t) {
                        var e = {};
                        return (0, i.default)(t).forEach(function(n) {
                            if (!a.test(n)) return void(e[n] = t[n]);
                            var r = t[n];
                            n = n.replace(/^-/, ""), e[n] = r, u.forEach(function(t) {
                                e["-" + t + "-" + n] = r
                            })
                        }), e
                    };
                e.setStyle = function(t, e) {
                    e = c(e), (0, i.default)(e).forEach(function(n) {
                        var r = n.replace(/^-/, "").replace(/-([a-z])/g, function(t, e) {
                            return e.toUpperCase()
                        });
                        t.style[r] = e[n]
                    })
                }
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function o(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                        return n
                    }
                    return (0, a.default)(t)
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                var u = n(2),
                    a = r(u),
                    c = n(85),
                    l = r(c),
                    f = n(129),
                    s = r(f);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.TouchRecord = void 0;
                var d = s.default || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                        }
                        return t
                    },
                    h = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, l.default)(t, r.key, r)
                            }
                        }
                        return function(e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    v = n(123),
                    _ = function() {
                        function t(e) {
                            i(this, t), this.updateTime = Date.now(), this.delta = {
                                x: 0,
                                y: 0
                            }, this.velocity = {
                                x: 0,
                                y: 0
                            }, this.lastPosition = (0, v.getPosition)(e)
                        }
                        return h(t, [{
                            key: "update",
                            value: function(t) {
                                var e = this.velocity,
                                    n = this.updateTime,
                                    r = this.lastPosition,
                                    o = Date.now(),
                                    i = (0, v.getPosition)(t),
                                    u = {
                                        x: -(i.x - r.x),
                                        y: -(i.y - r.y)
                                    },
                                    a = o - n || 16,
                                    c = u.x / a * 1e3,
                                    l = u.y / a * 1e3;
                                e.x = .8 * c + .2 * e.x, e.y = .8 * l + .2 * e.y, this.delta = u, this.updateTime = o, this.lastPosition = i
                            }
                        }]), t
                    }();
                e.TouchRecord = function() {
                    function t() {
                        i(this, t), this.touchList = {}, this.lastTouch = null, this.activeTouchID = void 0
                    }
                    return h(t, [{
                        key: "__add",
                        value: function(t) {
                            if (this.__has(t)) return null;
                            var e = new _(t);
                            return this.touchList[t.identifier] = e, e
                        }
                    }, {
                        key: "__renew",
                        value: function(t) {
                            if (!this.__has(t)) return null;
                            var e = this.touchList[t.identifier];
                            return e.update(t), e
                        }
                    }, {
                        key: "__delete",
                        value: function(t) {
                            return delete this.touchList[t.identifier]
                        }
                    }, {
                        key: "__has",
                        value: function(t) {
                            return this.touchList.hasOwnProperty(t.identifier)
                        }
                    }, {
                        key: "__setActiveID",
                        value: function(t) {
                            this.activeTouchID = t[t.length - 1].identifier, this.lastTouch = this.touchList[this.activeTouchID]
                        }
                    }, {
                        key: "__getActiveTracker",
                        value: function() {
                            var t = this.touchList,
                                e = this.activeTouchID;
                            return t[e]
                        }
                    }, {
                        key: "isActive",
                        value: function() {
                            return void 0 !== this.activeTouchID
                        }
                    }, {
                        key: "getDelta",
                        value: function() {
                            var t = this.__getActiveTracker();
                            return t ? d({}, t.delta) : this.__primitiveValue
                        }
                    }, {
                        key: "getVelocity",
                        value: function() {
                            var t = this.__getActiveTracker();
                            return t ? d({}, t.velocity) : this.__primitiveValue
                        }
                    }, {
                        key: "getLastPosition",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                e = this.__getActiveTracker() || this.lastTouch,
                                n = e ? e.lastPosition : this.__primitiveValue;
                            return t ? n.hasOwnProperty(t) ? n[t] : 0 : d({}, n)
                        }
                    }, {
                        key: "updatedRecently",
                        value: function() {
                            var t = this.__getActiveTracker();
                            return t && Date.now() - t.updateTime < 30
                        }
                    }, {
                        key: "track",
                        value: function(t) {
                            var e = this,
                                n = t.targetTouches;
                            return [].concat(o(n)).forEach(function(t) {
                                e.__add(t)
                            }), this.touchList
                        }
                    }, {
                        key: "update",
                        value: function(t) {
                            var e = this,
                                n = t.touches,
                                r = t.changedTouches;
                            return [].concat(o(n)).forEach(function(t) {
                                e.__renew(t)
                            }), this.__setActiveID(r), this.touchList
                        }
                    }, {
                        key: "release",
                        value: function(t) {
                            var e = this;
                            return this.activeTouchID = void 0, [].concat(o(t.changedTouches)).forEach(function(t) {
                                e.__delete(t)
                            }), this.touchList
                        }
                    }, {
                        key: "__primitiveValue",
                        get: function() {
                            return {
                                x: 0,
                                y: 0
                            }
                        }
                    }]), t
                }()
            }, function(t, e, n) {
                t.exports = {
                    default: n(130),
                    __esModule: !0
                }
            }, function(t, e, n) {
                n(131), t.exports = n(12).Object.assign
            }, function(t, e, n) {
                var r = n(10);
                r(r.S + r.F, "Object", {
                    assign: n(132)
                })
            }, function(t, e, n) {
                "use strict";
                var r = n(31),
                    o = n(68),
                    i = n(69),
                    u = n(47),
                    a = n(34),
                    c = Object.assign;
                t.exports = !c || n(21)(function() {
                    var t = {},
                        e = {},
                        n = Symbol(),
                        r = "abcdefghijklmnopqrst";
                    return t[n] = 7, r.split("").forEach(function(t) {
                        e[t] = t
                    }), 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != r
                }) ? function(t, e) {
                    for (var n = u(t), c = arguments.length, l = 1, f = o.f, s = i.f; c > l;)
                        for (var d, h = a(arguments[l++]), v = f ? r(h).concat(f(h)) : r(h), _ = v.length, p = 0; _ > p;) s.call(h, d = v[p++]) && (n[d] = h[d]);
                    return n
                } : c
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var o = n(85),
                    i = r(o),
                    u = n(89),
                    a = r(u);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var c = n(134);
                (0, a.default)(c).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return c[t]
                        }
                    })
                })
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var o = n(85),
                    i = r(o),
                    u = n(89),
                    a = r(u);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var c = n(135);
                (0, a.default)(c).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return c[t]
                        }
                    })
                });
                var l = n(136);
                (0, a.default)(l).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return l[t]
                        }
                    })
                });
                var f = n(137);
                (0, a.default)(f).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return f[t]
                        }
                    })
                });
                var s = n(138);
                (0, a.default)(s).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return s[t]
                        }
                    })
                });
                var d = n(139);
                (0, a.default)(d).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return d[t]
                        }
                    })
                });
                var h = n(140);
                (0, a.default)(h).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return h[t]
                        }
                    })
                });
                var v = n(141);
                (0, a.default)(v).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return v[t]
                        }
                    })
                });
                var _ = n(142);
                (0, a.default)(_).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return _[t]
                        }
                    })
                });
                var p = n(143);
                (0, a.default)(p).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return p[t]
                        }
                    })
                });
                var y = n(144);
                (0, a.default)(y).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return y[t]
                        }
                    })
                });
                var b = n(145);
                (0, a.default)(b).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return b[t]
                        }
                    })
                });
                var g = n(146);
                (0, a.default)(g).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return g[t]
                        }
                    })
                });
                var m = n(147);
                (0, a.default)(m).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return m[t]
                        }
                    })
                });
                var x = n(148);
                (0, a.default)(x).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return x[t]
                        }
                    })
                });
                var S = n(149);
                (0, a.default)(S).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return S[t]
                        }
                    })
                })
            }, function(t, e, n) {
                "use strict";
                var r = n(77);
                r.SmoothScrollbar.prototype.clearMovement = r.SmoothScrollbar.prototype.stop = function() {
                    this.movement.x = this.movement.y = 0, cancelAnimationFrame(this.__timerID.scrollTo)
                }
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function o(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                        return n
                    }
                    return (0, u.default)(t)
                }
                var i = n(2),
                    u = r(i),
                    a = n(77),
                    c = n(116),
                    l = n(88);
                a.SmoothScrollbar.prototype.destroy = function(t) {
                    var e = this.__listeners,
                        n = this.__handlers,
                        r = this.__observer,
                        i = this.targets,
                        u = i.container,
                        a = i.content;
                    n.forEach(function(t) {
                        var e = t.evt,
                            n = t.elem,
                            r = t.fn;
                        n.removeEventListener(e, r)
                    }), n.length = e.length = 0, this.stop(), cancelAnimationFrame(this.__timerID.render), r && r.disconnect(), l.sbList.delete(u), t || this.scrollTo(0, 0, 300, function() {
                        if (u.parentNode) {
                            (0, c.setStyle)(u, {
                                overflow: ""
                            }), u.scrollTop = u.scrollLeft = 0;
                            for (var t = [].concat(o(a.childNodes)); u.firstChild;) u.removeChild(u.firstChild);
                            t.forEach(function(t) {
                                return u.appendChild(t)
                            })
                        }
                    })
                }
            }, function(t, e, n) {
                "use strict";
                var r = n(77);
                r.SmoothScrollbar.prototype.getContentElem = function() {
                    return this.targets.content
                }
            }, function(t, e, n) {
                "use strict";
                var r = n(77);
                r.SmoothScrollbar.prototype.getSize = function() {
                    var t = this.targets.container,
                        e = this.targets.content;
                    return {
                        container: {
                            width: t.clientWidth,
                            height: t.clientHeight
                        },
                        content: {
                            width: e.offsetWidth - e.clientWidth + e.scrollWidth,
                            height: e.offsetHeight - e.clientHeight + e.scrollHeight
                        }
                    }
                }
            }, function(t, e, n) {
                "use strict";
                var r = n(77);
                r.SmoothScrollbar.prototype.infiniteScroll = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50;
                    if ("function" == typeof t) {
                        var n = {
                                x: 0,
                                y: 0
                            },
                            r = !1;
                        this.addListener(function(o) {
                            var i = o.offset,
                                u = o.limit;
                            u.y - i.y <= e && i.y > n.y && !r && (r = !0, setTimeout(function() {
                                return t(o)
                            })), u.y - i.y > e && (r = !1), n = i
                        })
                    }
                }
            }, function(t, e, n) {
                "use strict";
                var r = n(77);
                r.SmoothScrollbar.prototype.isVisible = function(t) {
                    var e = this.bounding,
                        n = t.getBoundingClientRect(),
                        r = Math.max(e.top, n.top),
                        o = Math.max(e.left, n.left),
                        i = Math.min(e.right, n.right),
                        u = Math.min(e.bottom, n.bottom);
                    return r < u && o < i
                }
            }, function(t, e, n) {
                "use strict";
                var r = n(77);
                r.SmoothScrollbar.prototype.addListener = function(t) {
                    "function" == typeof t && this.__listeners.push(t)
                }, r.SmoothScrollbar.prototype.removeListener = function(t) {
                    "function" == typeof t && this.__listeners.some(function(e, n, r) {
                        return e === t && r.splice(n, 1)
                    })
                }
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function o(t, e, n) {
                    return e in t ? (0, l.default)(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }

                function i(t, e) {
                    return !!e.length && e.some(function(e) {
                        return t.match(e)
                    })
                }

                function u() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.REGIESTER,
                        e = d[t];
                    return function(n) {
                        for (var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++) o[u - 1] = arguments[u];
                        this.__handlers.forEach(function(r) {
                            var u = r.elem,
                                a = r.evt,
                                c = r.fn,
                                l = r.hasRegistered;
                            l && t === n.REGIESTER || !l && t === n.UNREGIESTER || i(a, o) && (u[e](a, c), r.hasRegistered = !l)
                        })
                    }
                }
                var a, c = n(85),
                    l = r(c),
                    f = n(77),
                    s = {
                        REGIESTER: 0,
                        UNREGIESTER: 1
                    },
                    d = (a = {}, o(a, s.REGIESTER, "addEventListener"), o(a, s.UNREGIESTER, "removeEventListener"), a);
                f.SmoothScrollbar.prototype.registerEvents = u(s.REGIESTER), f.SmoothScrollbar.prototype.unregisterEvents = u(s.UNREGIESTER)
            }, function(t, e, n) {
                "use strict";
                var r = n(77);
                r.SmoothScrollbar.prototype.reverseWheel = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.wheelReversed = "boolean" == typeof t && t, this.__readonly("wheelReversed", this.wheelReversed)
                }
            }, function(t, e, n) {
                "use strict";
                var r = n(77);
                r.SmoothScrollbar.prototype.scrollIntoView = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = e.alignToTop,
                        r = void 0 === n || n,
                        o = e.onlyScrollIfNeeded,
                        i = void 0 !== o && o,
                        u = e.offsetTop,
                        a = void 0 === u ? 0 : u,
                        c = e.offsetLeft,
                        l = void 0 === c ? 0 : c,
                        f = e.offsetBottom,
                        s = void 0 === f ? 0 : f,
                        d = this.targets,
                        h = this.bounding;
                    if (t && d.container.contains(t)) {
                        var v = t.getBoundingClientRect();
                        i && this.isVisible(t) || this.__setMovement(v.left - h.left - l, r ? v.top - h.top - a : v.bottom - h.bottom - s)
                    }
                }
            }, function(t, e, n) {
                "use strict";
                var r = n(116),
                    o = n(77);
                o.SmoothScrollbar.prototype.scrollTo = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.offset.x,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.offset.y,
                        n = this,
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        u = this.options,
                        a = this.offset,
                        c = this.limit,
                        l = this.__timerID;
                    cancelAnimationFrame(l.scrollTo), i = "function" == typeof i ? i : function() {}, u.renderByPixels && (t = Math.round(t), e = Math.round(e));
                    var f = a.x,
                        s = a.y,
                        d = (0, r.pickInRange)(t, 0, c.x) - f,
                        h = (0, r.pickInRange)(e, 0, c.y) - s,
                        v = (0, r.buildCurve)(d, o),
                        _ = (0, r.buildCurve)(h, o),
                        p = v.length,
                        y = 0,
                        b = function t() {
                            n.setPosition(f + v[y], s + _[y]), y++, y === p ? requestAnimationFrame(function() {
                                i(n)
                            }) : l.scrollTo = requestAnimationFrame(t)
                        };
                    b()
                }
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var o = n(89),
                    i = r(o),
                    u = n(77);
                u.SmoothScrollbar.prototype.setOptions = function() {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    (0, i.default)(e).forEach(function(n) {
                        t.options.hasOwnProperty(n) && void 0 !== e[n] && (t.options[n] = e[n])
                    })
                }
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var o = n(129),
                    i = r(o),
                    u = i.default || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                        }
                        return t
                    },
                    a = n(116),
                    c = n(77);
                c.SmoothScrollbar.prototype.setPosition = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.offset.x,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.offset.y,
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    this.__hideTrackThrottle();
                    var r = {},
                        o = this.options,
                        i = this.offset,
                        c = this.limit,
                        l = this.targets,
                        f = this.__listeners;
                    o.renderByPixels && (t = Math.round(t), e = Math.round(e)), t !== i.x && this.showTrack("x"), e !== i.y && this.showTrack("y"), t = (0, a.pickInRange)(t, 0, c.x), e = (0, a.pickInRange)(e, 0, c.y), t === i.x && e === i.y || (r.direction = {
                        x: t === i.x ? "none" : t > i.x ? "right" : "left",
                        y: e === i.y ? "none" : e > i.y ? "down" : "up"
                    }, this.__readonly("offset", {
                        x: t,
                        y: e
                    }), r.limit = u({}, c), r.offset = u({}, this.offset), this.__setThumbPosition(), (0, a.setStyle)(l.content, {
                        "-transform": "translate3d(" + -t + "px, " + -e + "px, 0)"
                    }), n || f.forEach(function(t) {
                        o.syncCallbacks ? t(r) : requestAnimationFrame(function() {
                            t(r)
                        })
                    }))
                }
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function o(t, e, n) {
                    return e in t ? (0, c.default)(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }

                function i() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.SHOW,
                        e = s[t],
                        n = {
                            ACTIONS: f
                        };
                    return function() {
                        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "both",
                            o = {
                                TRACK: "show",
                                CONTAINER: "scrolling"
                            },
                            i = this.options,
                            u = this.movement,
                            a = this.targets,
                            c = a.container,
                            l = a.xAxis,
                            f = a.yAxis;
                        u.x || u.y ? c.classList.add(o.CONTAINER) : c.classList.remove(o.CONTAINER), i.alwaysShowTracks && t === n.ACTIONS.HIDE || (r = r.toLowerCase(), "both" === r && (l.track.classList[e](o.TRACK), f.track.classList[e](o.TRACK)), "x" === r && l.track.classList[e](o.TRACK), "y" === r && f.track.classList[e](o.TRACK))
                    }
                }
                var u, a = n(85),
                    c = r(a),
                    l = n(77),
                    f = {
                        SHOW: 0,
                        HIDE: 1
                    },
                    s = (u = {}, o(u, f.SHOW, "add"), o(u, f.HIDE, "remove"), u);
                l.SmoothScrollbar.prototype.showTrack = i(f.SHOW), l.SmoothScrollbar.prototype.hideTrack = i(f.HIDE)
            }, function(t, e, n) {
                "use strict";

                function r() {
                    if ("glow" === this.options.overscrollEffect) {
                        var t = this.targets,
                            e = this.size,
                            n = t.canvas,
                            r = n.elem,
                            o = n.context,
                            i = window.devicePixelRatio || 1,
                            u = e.container.width * i,
                            a = e.container.height * i;
                        u === r.width && a === r.height || (r.width = u, r.height = a, o.scale(i, i))
                    }
                }

                function o() {
                    var t = this.size,
                        e = this.thumbSize,
                        n = this.targets,
                        r = n.xAxis,
                        o = n.yAxis;
                    (0, u.setStyle)(r.track, {
                        display: t.content.width <= t.container.width ? "none" : "block"
                    }), (0, u.setStyle)(o.track, {
                        display: t.content.height <= t.container.height ? "none" : "block"
                    }), (0, u.setStyle)(r.thumb, {
                        width: e.x + "px"
                    }), (0, u.setStyle)(o.thumb, {
                        height: e.y + "px"
                    })
                }

                function i() {
                    var t = this.options;
                    this.__updateBounding();
                    var e = this.getSize(),
                        n = {
                            x: Math.max(e.content.width - e.container.width, 0),
                            y: Math.max(e.content.height - e.container.height, 0)
                        },
                        i = {
                            realX: e.container.width / e.content.width * e.container.width,
                            realY: e.container.height / e.content.height * e.container.height
                        };
                    i.x = Math.max(i.realX, t.thumbMinSize), i.y = Math.max(i.realY, t.thumbMinSize), this.__readonly("size", e).__readonly("limit", n).__readonly("thumbSize", i), o.call(this), r.call(this), this.setPosition(), this.__setThumbPosition()
                }
                var u = n(116),
                    a = n(77);
                a.SmoothScrollbar.prototype.update = function(t) {
                    t ? requestAnimationFrame(i.bind(this)) : i.call(this)
                }
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var o = n(85),
                    i = r(o),
                    u = n(89),
                    a = r(u);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var c = n(151);
                (0, a.default)(c).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return c[t]
                        }
                    })
                })
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var o = n(85),
                    i = r(o),
                    u = n(89),
                    a = r(u);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var c = n(152);
                (0, a.default)(c).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return c[t]
                        }
                    })
                });
                var l = n(153);
                (0, a.default)(l).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return l[t]
                        }
                    })
                });
                var f = n(154);
                (0, a.default)(f).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return f[t]
                        }
                    })
                });
                var s = n(159);
                (0, a.default)(s).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return s[t]
                        }
                    })
                });
                var d = n(160);
                (0, a.default)(d).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return d[t]
                        }
                    })
                });
                var h = n(161);
                (0, a.default)(h).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return h[t]
                        }
                    })
                });
                var v = n(162);
                (0, a.default)(v).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return v[t]
                        }
                    })
                })
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function o(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                        return n
                    }
                    return (0, a.default)(t)
                }

                function i() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = this.limit,
                        i = this.options,
                        u = this.movement;
                    this.__updateThrottle(), i.renderByPixels && (t = Math.round(t), e = Math.round(e));
                    var a = u.x + t,
                        l = u.y + e;
                    0 === r.x && (a = 0), 0 === r.y && (l = 0);
                    var f = this.__getDeltaLimit(n);
                    u.x = c.pickInRange.apply(void 0, [a].concat(o(f.x))), u.y = c.pickInRange.apply(void 0, [l].concat(o(f.y)))
                }
                var u = n(2),
                    a = r(u),
                    c = n(116),
                    l = n(77);
                Object.defineProperty(l.SmoothScrollbar.prototype, "__addMovement", {
                    value: i,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                "use strict";

                function r() {
                    var t = this,
                        e = this.movement,
                        n = this.movementLocked;
                    a.forEach(function(r) {
                        n[r] = e[r] && t.__willOverscroll(r, e[r])
                    })
                }

                function o() {
                    var t = this.movementLocked;
                    a.forEach(function(e) {
                        t[e] = !1
                    })
                }

                function i() {
                    var t = this.movementLocked;
                    return t.x || t.y
                }
                var u = n(77),
                    a = ["x", "y"];
                Object.defineProperty(u.SmoothScrollbar.prototype, "__autoLockMovement", {
                    value: r,
                    writable: !0,
                    configurable: !0
                }), Object.defineProperty(u.SmoothScrollbar.prototype, "__unlockMovement", {
                    value: o,
                    writable: !0,
                    configurable: !0
                }), Object.defineProperty(u.SmoothScrollbar.prototype, "__isMovementLocked", {
                    value: i,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function o() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    if (t) {
                        var e = this.options,
                            n = this.movement,
                            r = this.overscrollRendered,
                            o = this.MAX_OVERSCROLL,
                            i = n[t] = (0, h.pickInRange)(n[t], -o, o),
                            u = e.overscrollDamping,
                            a = r[t] + (i - r[t]) * u;
                        e.renderByPixels && (a |= 0), !this.__isMovementLocked() && Math.abs(a - r[t]) < .1 && (a -= i / Math.abs(i || 1)), Math.abs(a) < Math.abs(r[t]) && this.__readonly("overscrollBack", !0), (a * r[t] < 0 || Math.abs(a) <= 1) && (a = 0, this.__readonly("overscrollBack", !1)), r[t] = a
                    }
                }

                function i(t) {
                    var e = this.__touchRecord,
                        n = this.overscrollRendered;
                    return n.x !== t.x || n.y !== t.y || !(!d.GLOBAL_ENV.TOUCH_SUPPORTED || !e.updatedRecently())
                }

                function u() {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    if (e.length && this.options.overscrollEffect) {
                        var n = this.options,
                            r = this.overscrollRendered,
                            u = l({}, r);
                        if (e.forEach(function(e) {
                                return o.call(t, e)
                            }), i.call(this, u)) switch (n.overscrollEffect) {
                            case "bounce":
                                return s.overscrollBounce.call(this, r.x, r.y);
                            case "glow":
                                return s.overscrollGlow.call(this, r.x, r.y);
                            default:
                                return
                        }
                    }
                }
                var a = n(129),
                    c = r(a),
                    l = c.default || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                        }
                        return t
                    },
                    f = n(77),
                    s = n(155),
                    d = n(88),
                    h = n(116);
                Object.defineProperty(f.SmoothScrollbar.prototype, "__renderOverscroll", {
                    value: u,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var o = n(85),
                    i = r(o),
                    u = n(89),
                    a = r(u);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var c = n(156);
                (0, a.default)(c).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return c[t]
                        }
                    })
                })
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var o = n(85),
                    i = r(o),
                    u = n(89),
                    a = r(u);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var c = n(157);
                (0, a.default)(c).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return c[t]
                        }
                    })
                });
                var l = n(158);
                (0, a.default)(l).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return l[t]
                        }
                    })
                })
            }, function(t, e, n) {
                "use strict";

                function r(t, e) {
                    var n = this.size,
                        r = this.offset,
                        i = this.targets,
                        u = this.thumbOffset,
                        a = i.xAxis,
                        c = i.yAxis,
                        l = i.content;
                    if ((0, o.setStyle)(l, {
                            "-transform": "translate3d(" + -(r.x + t) + "px, " + -(r.y + e) + "px, 0)"
                        }), t) {
                        var f = n.container.width / (n.container.width + Math.abs(t));
                        (0, o.setStyle)(a.thumb, {
                            "-transform": "translate3d(" + u.x + "px, 0, 0) scale3d(" + f + ", 1, 1)",
                            "-transform-origin": t < 0 ? "left" : "right"
                        })
                    }
                    if (e) {
                        var s = n.container.height / (n.container.height + Math.abs(e));
                        (0, o.setStyle)(c.thumb, {
                            "-transform": "translate3d(0, " + u.y + "px, 0) scale3d(1, " + s + ", 1)",
                            "-transform-origin": e < 0 ? "top" : "bottom"
                        })
                    }
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.overscrollBounce = r;
                var o = n(116)
            }, function(t, e, n) {
                "use strict";

                function r(t, e) {
                    var n = this.size,
                        r = this.targets,
                        a = this.options,
                        c = r.canvas,
                        l = c.elem,
                        f = c.context;
                    return t || e ? ((0, u.setStyle)(l, {
                        display: "block"
                    }), f.clearRect(0, 0, n.content.width, n.container.height), f.fillStyle = a.overscrollEffectColor, o.call(this, t), void i.call(this, e)) : (0, u.setStyle)(l, {
                        display: "none"
                    })
                }

                function o(t) {
                    var e = this.size,
                        n = this.targets,
                        r = this.__touchRecord,
                        o = this.MAX_OVERSCROLL,
                        i = e.container,
                        l = i.width,
                        f = i.height,
                        s = n.canvas.context;
                    s.save(), t > 0 && s.transform(-1, 0, 0, 1, l, 0);
                    var d = (0, u.pickInRange)(Math.abs(t) / o, 0, a),
                        h = (0, u.pickInRange)(d, 0, c) * l,
                        v = Math.abs(t),
                        _ = r.getLastPosition("y") || f / 2;
                    s.globalAlpha = d, s.beginPath(), s.moveTo(0, -h), s.quadraticCurveTo(v, _, 0, f + h), s.fill(), s.closePath(), s.restore()
                }

                function i(t) {
                    var e = this.size,
                        n = this.targets,
                        r = this.__touchRecord,
                        o = this.MAX_OVERSCROLL,
                        i = e.container,
                        l = i.width,
                        f = i.height,
                        s = n.canvas.context;
                    s.save(), t > 0 && s.transform(1, 0, 0, -1, 0, f);
                    var d = (0, u.pickInRange)(Math.abs(t) / o, 0, a),
                        h = (0, u.pickInRange)(d, 0, c) * l,
                        v = r.getLastPosition("x") || l / 2,
                        _ = Math.abs(t);
                    s.globalAlpha = d, s.beginPath(), s.moveTo(-h, 0), s.quadraticCurveTo(v, _, l + h, 0), s.fill(), s.closePath(), s.restore()
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.overscrollGlow = r;
                var u = n(116),
                    a = .75,
                    c = .25
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    var e = this.options,
                        n = this.offset,
                        r = this.movement,
                        o = this.__touchRecord,
                        i = e.damping,
                        u = e.renderByPixels,
                        a = e.overscrollDamping,
                        c = n[t],
                        l = r[t],
                        f = i;
                    if (this.__willOverscroll(t, l) ? f = a : o.isActive() && (f = .5), Math.abs(l) < 1) {
                        var s = c + l;
                        return {
                            movement: 0,
                            position: l > 0 ? Math.ceil(s) : Math.floor(s)
                        }
                    }
                    var d = l * (1 - f);
                    return u && (d |= 0), {
                        movement: d,
                        position: c + l - d
                    }
                }

                function o() {
                    var t = this.options,
                        e = this.offset,
                        n = this.limit,
                        i = this.movement,
                        a = this.overscrollRendered,
                        c = this.__timerID;
                    if (i.x || i.y || a.x || a.y) {
                        var l = r.call(this, "x"),
                            f = r.call(this, "y"),
                            s = [];
                        if (t.overscrollEffect) {
                            var d = (0, u.pickInRange)(l.position, 0, n.x),
                                h = (0, u.pickInRange)(f.position, 0, n.y);
                            (a.x || d === e.x && i.x) && s.push("x"), (a.y || h === e.y && i.y) && s.push("y")
                        }
                        this.movementLocked.x || (i.x = l.movement), this.movementLocked.y || (i.y = f.movement), this.setPosition(l.position, f.position), this.__renderOverscroll(s)
                    }
                    c.render = requestAnimationFrame(o.bind(this))
                }
                var i = n(77),
                    u = n(116);
                Object.defineProperty(i.SmoothScrollbar.prototype, "__render", {
                    value: o,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function o(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                        return n
                    }
                    return (0, a.default)(t)
                }

                function i() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = this.options,
                        i = this.movement;
                    this.__updateThrottle();
                    var u = this.__getDeltaLimit(n);
                    r.renderByPixels && (t = Math.round(t), e = Math.round(e)), i.x = c.pickInRange.apply(void 0, [t].concat(o(u.x))), i.y = c.pickInRange.apply(void 0, [e].concat(o(u.y)))
                }
                var u = n(2),
                    a = r(u),
                    c = n(116),
                    l = n(77);
                Object.defineProperty(l.SmoothScrollbar.prototype, "__setMovement", {
                    value: i,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                "use strict";

                function r() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = this.options,
                        r = this.offset,
                        o = this.limit;
                    if (!n.continuousScrolling) return !1;
                    var u = (0, i.pickInRange)(t + r.x, 0, o.x),
                        a = (0, i.pickInRange)(e + r.y, 0, o.y),
                        c = !0;
                    return c &= u === r.x, c &= a === r.y, c &= u === o.x || 0 === u || a === o.y || 0 === a
                }
                var o = n(77),
                    i = n(116);
                Object.defineProperty(o.SmoothScrollbar.prototype, "__shouldPropagateMovement", {
                    value: r,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                "use strict";

                function r() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    if (!t) return !1;
                    var n = this.offset,
                        r = this.limit,
                        o = n[t];
                    return (0, i.pickInRange)(e + o, 0, r[t]) === o && (0 === o || o === r[t])
                }
                var o = n(77),
                    i = n(116);
                Object.defineProperty(o.SmoothScrollbar.prototype, "__willOverscroll", {
                    value: r,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var o = n(85),
                    i = r(o),
                    u = n(89),
                    a = r(u);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var c = n(164);
                (0, a.default)(c).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return c[t]
                        }
                    })
                })
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var o = n(85),
                    i = r(o),
                    u = n(89),
                    a = r(u);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var c = n(165);
                (0, a.default)(c).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return c[t]
                        }
                    })
                });
                var l = n(166);
                (0, a.default)(l).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return l[t]
                        }
                    })
                });
                var f = n(173);
                (0, a.default)(f).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return f[t]
                        }
                    })
                });
                var s = n(174);
                (0, a.default)(s).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return s[t]
                        }
                    })
                });
                var d = n(175);
                (0, a.default)(d).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return d[t]
                        }
                    })
                });
                var h = n(176);
                (0, a.default)(h).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return h[t]
                        }
                    })
                });
                var v = n(177);
                (0, a.default)(v).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return v[t]
                        }
                    })
                })
            }, function(t, e, n) {
                "use strict";

                function r() {
                    var t = this,
                        e = this.targets,
                        n = e.container,
                        r = e.content,
                        o = !1,
                        u = void 0,
                        a = void 0;
                    Object.defineProperty(this, "__isDrag", {
                        get: function() {
                            return o
                        },
                        enumerable: !1
                    });
                    var c = function e(n) {
                        var r = n.x,
                            o = n.y;
                        if (r || o) {
                            var i = t.options.speed;
                            t.__setMovement(r * i, o * i), u = requestAnimationFrame(function() {
                                e({
                                    x: r,
                                    y: o
                                })
                            })
                        }
                    };
                    this.__addEvent(n, "dragstart", function(e) {
                        t.__eventFromChildScrollbar(e) || (o = !0, a = e.target.clientHeight, (0, i.setStyle)(r, {
                            "pointer-events": "auto"
                        }), cancelAnimationFrame(u), t.__updateBounding())
                    }), this.__addEvent(document, "dragover mousemove touchmove", function(e) {
                        if (o && !t.__eventFromChildScrollbar(e)) {
                            cancelAnimationFrame(u), e.preventDefault();
                            var n = t.__getPointerTrend(e, a);
                            c(n)
                        }
                    }), this.__addEvent(document, "dragend mouseup touchend blur", function() {
                        cancelAnimationFrame(u), o = !1
                    })
                }
                var o = n(77),
                    i = n(116);
                Object.defineProperty(o.SmoothScrollbar.prototype, "__dragHandler", {
                    value: r,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function o() {
                    var t = this,
                        e = this.targets,
                        n = function(e) {
                            var n = t.size,
                                r = t.offset,
                                o = t.limit,
                                i = t.movement,
                                u = {
                                    KEY_CODE: s
                                };
                            switch (e) {
                                case u.KEY_CODE.SPACE:
                                    return [0, 200];
                                case u.KEY_CODE.PAGE_UP:
                                    return [0, -n.container.height + 40];
                                case u.KEY_CODE.PAGE_DOWN:
                                    return [0, n.container.height - 40];
                                case u.KEY_CODE.END:
                                    return [0, Math.abs(i.y) + o.y - r.y];
                                case u.KEY_CODE.HOME:
                                    return [0, -Math.abs(i.y) - r.y];
                                case u.KEY_CODE.LEFT:
                                    return [-40, 0];
                                case u.KEY_CODE.UP:
                                    return [0, -40];
                                case u.KEY_CODE.RIGHT:
                                    return [40, 0];
                                case u.KEY_CODE.DOWN:
                                    return [0, 40];
                                default:
                                    return null
                            }
                        },
                        r = e.container;
                    this.__addEvent(r, "keydown", function(e) {
                        if (document.activeElement === r) {
                            var o = t.options,
                                i = t.parents,
                                u = t.movementLocked,
                                a = n(e.keyCode || e.which);
                            if (a) {
                                var c = l(a, 2),
                                    f = c[0],
                                    s = c[1];
                                if (t.__shouldPropagateMovement(f, s)) return r.blur(), i.length && i[0].focus(), t.__updateThrottle();
                                e.preventDefault(), t.__unlockMovement(), f && t.__willOverscroll("x", f) && (u.x = !0), s && t.__willOverscroll("y", s) && (u.y = !0);
                                var d = o.speed;
                                t.__addMovement(f * d, s * d)
                            }
                        }
                    }), this.__addEvent(r, "keyup", function() {
                        t.__unlockMovement()
                    })
                }
                var i = n(167),
                    u = r(i),
                    a = n(170),
                    c = r(a),
                    l = function() {
                        function t(t, e) {
                            var n = [],
                                r = !0,
                                o = !1,
                                i = void 0;
                            try {
                                for (var u, a = (0, c.default)(t); !(r = (u = a.next()).done) && (n.push(u.value), !e || n.length !== e); r = !0);
                            } catch (t) {
                                o = !0, i = t
                            } finally {
                                try {
                                    !r && a.return && a.return()
                                } finally {
                                    if (o) throw i
                                }
                            }
                            return n
                        }
                        return function(e, n) {
                            if (Array.isArray(e)) return e;
                            if ((0, u.default)(Object(e))) return t(e, n);
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }
                    }(),
                    f = n(77),
                    s = {
                        SPACE: 32,
                        PAGE_UP: 33,
                        PAGE_DOWN: 34,
                        END: 35,
                        HOME: 36,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40
                    };
                Object.defineProperty(f.SmoothScrollbar.prototype, "__keyboardHandler", {
                    value: o,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                t.exports = {
                    default: n(168),
                    __esModule: !0
                }
            }, function(t, e, n) {
                n(57), n(4), t.exports = n(169)
            }, function(t, e, n) {
                var r = n(53),
                    o = n(45)("iterator"),
                    i = n(27);
                t.exports = n(12).isIterable = function(t) {
                    var e = Object(t);
                    return void 0 !== e[o] || "@@iterator" in e || i.hasOwnProperty(r(e))
                }
            }, function(t, e, n) {
                t.exports = {
                    default: n(171),
                    __esModule: !0
                }
            }, function(t, e, n) {
                n(57), n(4), t.exports = n(172)
            }, function(t, e, n) {
                var r = n(17),
                    o = n(52);
                t.exports = n(12).getIterator = function(t) {
                    var e = o(t);
                    if ("function" != typeof e) throw TypeError(t + " is not iterable!");
                    return r(e.call(t))
                }
            }, function(t, e, n) {
                "use strict";

                function r() {
                    var t = this,
                        e = this.targets,
                        n = e.container,
                        r = e.xAxis,
                        o = e.yAxis,
                        u = function(e, n) {
                            var r = t.size,
                                o = t.thumbSize;
                            if ("x" === e) {
                                var i = r.container.width - (o.x - o.realX);
                                return n / i * r.content.width
                            }
                            if ("y" === e) {
                                var u = r.container.height - (o.y - o.realY);
                                return n / u * r.content.height
                            }
                            return 0
                        },
                        a = function(t) {
                            return (0, i.isOneOf)(t, [r.track, r.thumb]) ? "x" : (0, i.isOneOf)(t, [o.track, o.thumb]) ? "y" : void 0
                        },
                        c = void 0,
                        l = void 0,
                        f = void 0,
                        s = void 0,
                        d = void 0;
                    this.__addEvent(n, "click", function(e) {
                        if (!l && (0, i.isOneOf)(e.target, [r.track, o.track])) {
                            var n = e.target,
                                c = a(n),
                                f = n.getBoundingClientRect(),
                                s = (0, i.getPosition)(e),
                                d = t.offset,
                                h = t.thumbSize;
                            if ("x" === c) {
                                var v = s.x - f.left - h.x / 2;
                                t.__setMovement(u(c, v) - d.x, 0)
                            } else {
                                var _ = s.y - f.top - h.y / 2;
                                t.__setMovement(0, u(c, _) - d.y)
                            }
                        }
                    }), this.__addEvent(n, "mousedown", function(e) {
                        if ((0, i.isOneOf)(e.target, [r.thumb, o.thumb])) {
                            c = !0;
                            var n = (0, i.getPosition)(e),
                                u = e.target.getBoundingClientRect();
                            s = a(e.target), f = {
                                x: n.x - u.left,
                                y: n.y - u.top
                            }, d = t.targets.container.getBoundingClientRect()
                        }
                    }), this.__addEvent(window, "mousemove", function(e) {
                        if (c) {
                            e.preventDefault(), l = !0;
                            var n = t.offset,
                                r = (0, i.getPosition)(e);
                            if ("x" === s) {
                                var o = r.x - f.x - d.left;
                                t.setPosition(u(s, o), n.y)
                            }
                            if ("y" === s) {
                                var a = r.y - f.y - d.top;
                                t.setPosition(n.x, u(s, a))
                            }
                        }
                    }), this.__addEvent(window, "mouseup blur", function() {
                        c = l = !1
                    })
                }
                var o = n(77),
                    i = n(116);
                Object.defineProperty(o.SmoothScrollbar.prototype, "__mouseHandler", {
                    value: r,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                "use strict";

                function r() {
                    this.__addEvent(window, "resize", this.__updateThrottle)
                }
                var o = n(77);
                Object.defineProperty(o.SmoothScrollbar.prototype, "__resizeHandler", {
                    value: r,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                "use strict";

                function r() {
                    var t = this,
                        e = !1,
                        n = void 0,
                        r = this.targets,
                        o = r.container,
                        u = r.content,
                        a = function e(r) {
                            var o = r.x,
                                i = r.y;
                            if (o || i) {
                                var u = t.options.speed;
                                t.__setMovement(o * u, i * u), n = requestAnimationFrame(function() {
                                    e({
                                        x: o,
                                        y: i
                                    })
                                })
                            }
                        },
                        c = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            (0, i.setStyle)(o, {
                                "-user-select": t
                            })
                        };
                    this.__addEvent(window, "mousemove", function(r) {
                        if (e) {
                            cancelAnimationFrame(n);
                            var o = t.__getPointerTrend(r);
                            a(o)
                        }
                    }), this.__addEvent(u, "selectstart", function(r) {
                        return t.__eventFromChildScrollbar(r) ? c("none") : (cancelAnimationFrame(n), t.__updateBounding(), void(e = !0))
                    }), this.__addEvent(window, "mouseup blur", function() {
                        cancelAnimationFrame(n), c(), e = !1
                    }), this.__addEvent(o, "scroll", function(t) {
                        t.preventDefault(), o.scrollTop = o.scrollLeft = 0
                    })
                }
                var o = n(77),
                    i = n(116);
                Object.defineProperty(o.SmoothScrollbar.prototype, "__selectHandler", {
                    value: r,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function o() {
                    var t = this,
                        e = this.targets,
                        n = this.__touchRecord,
                        r = e.container;
                    this.__addEvent(r, "touchstart", function(e) {
                        if (!t.__isDrag) {
                            var r = t.__timerID,
                                o = t.movement;
                            cancelAnimationFrame(r.scrollTo), t.__willOverscroll("x") || (o.x = 0), t.__willOverscroll("y") || (o.y = 0), n.track(e), t.__autoLockMovement()
                        }
                    }), this.__addEvent(r, "touchmove", function(e) {
                        if (!(t.__isDrag || s && s !== t)) {
                            n.update(e);
                            var r = n.getDelta(),
                                o = r.x,
                                i = r.y;
                            if (t.__shouldPropagateMovement(o, i)) return t.__updateThrottle();
                            var u = t.movement,
                                a = t.MAX_OVERSCROLL,
                                c = t.options;
                            if (u.x && t.__willOverscroll("x", o)) {
                                var l = 2;
                                "bounce" === c.overscrollEffect && (l += Math.abs(10 * u.x / a)), Math.abs(u.x) >= a ? o = 0 : o /= l
                            }
                            if (u.y && t.__willOverscroll("y", i)) {
                                var f = 2;
                                "bounce" === c.overscrollEffect && (f += Math.abs(10 * u.y / a)), Math.abs(u.y) >= a ? i = 0 : i /= f
                            }
                            t.__autoLockMovement(), e.preventDefault(), t.__addMovement(o, i, !0), s = t
                        }
                    }), this.__addEvent(r, "touchcancel touchend", function(e) {
                        if (!t.__isDrag) {
                            var r = t.options.speed,
                                o = n.getVelocity(),
                                i = {};
                            (0, u.default)(o).forEach(function(t) {
                                var e = (0, l.pickInRange)(o[t] * c.GLOBAL_ENV.EASING_MULTIPLIER, -1e3, 1e3);
                                i[t] = Math.abs(e) > f ? e * r : 0
                            }), t.__addMovement(i.x, i.y, !0), t.__unlockMovement(), n.release(e), s = null
                        }
                    })
                }
                var i = n(89),
                    u = r(i),
                    a = n(77),
                    c = n(88),
                    l = n(116),
                    f = 100,
                    s = null;
                Object.defineProperty(a.SmoothScrollbar.prototype, "__touchHandler", {
                    value: o,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                "use strict";

                function r() {
                    var t = this,
                        e = this.targets.container,
                        n = !1,
                        r = (0, i.debounce)(function() {
                            n = !1
                        }, 30, !1);
                    this.__addEvent(e, u.GLOBAL_ENV.WHEEL_EVENT, function(e) {
                        var o = t.options,
                            u = t.wheelReversed,
                            a = (0, i.getDelta)(e),
                            c = a.x,
                            l = a.y;
                        return c *= o.speed, l *= o.speed, t.__shouldPropagateMovement(c, l) ? t.__updateThrottle() : (e.preventDefault(), r(), t.overscrollBack && (n = !0), n && (t.__willOverscroll("x", c) && (c = 0), t.__willOverscroll("y", l) && (l = 0)), void(u ? t.__addMovement(l, c, !0) : t.__addMovement(c, l, !0)))
                    })
                }
                var o = n(77),
                    i = n(116),
                    u = n(88);
                Object.defineProperty(o.SmoothScrollbar.prototype, "__wheelHandler", {
                    value: r,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var o = n(85),
                    i = r(o),
                    u = n(89),
                    a = r(u);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var c = n(179);
                (0, a.default)(c).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return c[t]
                        }
                    })
                })
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var o = n(85),
                    i = r(o),
                    u = n(89),
                    a = r(u);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var c = n(180);
                (0, a.default)(c).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return c[t]
                        }
                    })
                });
                var l = n(181);
                (0, a.default)(l).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return l[t]
                        }
                    })
                });
                var f = n(182);
                (0, a.default)(f).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return f[t]
                        }
                    })
                });
                var s = n(183);
                (0, a.default)(s).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return s[t]
                        }
                    })
                });
                var d = n(184);
                (0, a.default)(d).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return d[t]
                        }
                    })
                });
                var h = n(187);
                (0, a.default)(h).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return h[t]
                        }
                    })
                });
                var v = n(188);
                (0, a.default)(v).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return v[t]
                        }
                    })
                });
                var _ = n(189);
                (0, a.default)(_).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return _[t]
                        }
                    })
                });
                var p = n(190);
                (0, a.default)(p).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return p[t]
                        }
                    })
                });
                var y = n(191);
                (0, a.default)(y).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return y[t]
                        }
                    })
                });
                var b = n(192);
                (0, a.default)(b).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                        enumerable: !0,
                        get: function() {
                            return b[t]
                        }
                    })
                })
            }, function(t, e, n) {
                "use strict";

                function r(t, e, n) {
                    var r = this;
                    if (!t || "function" != typeof t.addEventListener) throw new TypeError("expect elem to be a DOM element, but got " + t);
                    var o = function(t) {
                        for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) r[o - 1] = arguments[o];
                        !t.type.match(/drag/) && t.defaultPrevented || n.apply(void 0, [t].concat(r))
                    };
                    e.split(/\s+/g).forEach(function(e) {
                        r.__handlers.push({
                            evt: e,
                            elem: t,
                            fn: o,
                            hasRegistered: !0
                        }), t.addEventListener(e, o)
                    })
                }
                var o = n(77);
                Object.defineProperty(o.SmoothScrollbar.prototype, "__addEvent", {
                    value: r,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                "use strict";

                function r() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.target;
                    return this.children.some(function(t) {
                        return t.contains(e)
                    })
                }
                var o = n(77);
                Object.defineProperty(o.SmoothScrollbar.prototype, "__eventFromChildScrollbar", {
                    value: r,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                "use strict";

                function r() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        e = this.options,
                        n = this.offset,
                        r = this.limit;
                    return t && (e.continuousScrolling || e.overscrollEffect) ? {
                        x: [-(1 / 0), 1 / 0],
                        y: [-(1 / 0), 1 / 0]
                    } : {
                        x: [-n.x, r.x - n.x],
                        y: [-n.y, r.y - n.y]
                    }
                }
                var o = n(77);
                Object.defineProperty(o.SmoothScrollbar.prototype, "__getDeltaLimit", {
                    value: r,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = this.bounding,
                        r = n.top,
                        o = n.right,
                        u = n.bottom,
                        a = n.left,
                        c = (0, i.getPosition)(t),
                        l = c.x,
                        f = c.y,
                        s = {
                            x: 0,
                            y: 0
                        };
                    return 0 === l && 0 === f ? s : (l > o - e ? s.x = l - o + e : l < a + e && (s.x = l - a - e), f > u - e ? s.y = f - u + e : f < r + e && (s.y = f - r - e), s)
                }
                var o = n(77),
                    i = n(116);
                Object.defineProperty(o.SmoothScrollbar.prototype, "__getPointerTrend", {
                    value: r,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function o(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                        return n
                    }
                    return (0, h.default)(t)
                }

                function i(t) {
                    var e = this,
                        n = {
                            speed: 1,
                            damping: .1,
                            thumbMinSize: 20,
                            syncCallbacks: !1,
                            renderByPixels: !0,
                            alwaysShowTracks: !1,
                            continuousScrolling: "auto",
                            overscrollEffect: !1,
                            overscrollEffectColor: "#87ceeb",
                            overscrollDamping: .2
                        },
                        r = {
                            damping: [0, 1],
                            speed: [0, 1 / 0],
                            thumbMinSize: [0, 1 / 0],
                            overscrollEffect: [!1, "bounce", "glow"],
                            overscrollDamping: [0, 1]
                        },
                        i = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "auto";
                            if (n.overscrollEffect !== !1) return !1;
                            switch (t) {
                                case "auto":
                                    return e.isNestedScrollbar;
                                default:
                                    return !!t
                            }
                        },
                        u = {
                            set ignoreEvents(t) {
                                console.warn("`options.ignoreEvents` parameter is deprecated, use `instance#unregisterEvents()` method instead. https://github.com/idiotWu/smooth-scrollbar/wiki/Instance-Methods#instanceunregisterevents-regex--regex-regex--")
                            },
                            set friction(t) {
                                console.warn("`options.friction=" + t + "` is deprecated, use `options.damping=" + t / 100 + "` instead."), this.damping = t / 100
                            },
                            get syncCallbacks() {
                                return n.syncCallbacks
                            },
                            set syncCallbacks(t) {
                                n.syncCallbacks = !!t
                            },
                            get renderByPixels() {
                                return n.renderByPixels
                            },
                            set renderByPixels(t) {
                                n.renderByPixels = !!t
                            },
                            get alwaysShowTracks() {
                                return n.alwaysShowTracks
                            },
                            set alwaysShowTracks(t) {
                                t = !!t, n.alwaysShowTracks = t;
                                var r = e.targets.container;
                                t ? (e.showTrack(), r.classList.add("sticky")) : (e.hideTrack(), r.classList.remove("sticky"))
                            },
                            get continuousScrolling() {
                                return i(n.continuousScrolling)
                            },
                            set continuousScrolling(t) {
                                "auto" === t ? n.continuousScrolling = t : n.continuousScrolling = !!t
                            },
                            get overscrollEffect() {
                                return n.overscrollEffect
                            },
                            set overscrollEffect(t) {
                                t && !~r.overscrollEffect.indexOf(t) && (console.warn("`overscrollEffect` should be one of " + (0, s.default)(r.overscrollEffect) + ", but got " + (0, s.default)(t) + ". It will be set to `false` now."), t = !1), n.overscrollEffect = t
                            },
                            get overscrollEffectColor() {
                                return n.overscrollEffectColor
                            },
                            set overscrollEffectColor(t) {
                                n.overscrollEffectColor = t
                            }
                        };
                    (0, l.default)(n).filter(function(t) {
                        return !u.hasOwnProperty(t)
                    }).forEach(function(t) {
                        (0, a.default)(u, t, {
                            enumerable: !0,
                            get: function() {
                                return n[t]
                            },
                            set: function(e) {
                                if (isNaN(parseFloat(e))) throw new TypeError("expect `options." + t + "` to be a number, but got " + ("undefined" == typeof e ? "undefined" : b(e)));
                                n[t] = g.pickInRange.apply(void 0, [e].concat(o(r[t])))
                            }
                        })
                    }), this.__readonly("options", u), this.setOptions(t)
                }
                var u = n(85),
                    a = r(u),
                    c = n(89),
                    l = r(c),
                    f = n(185),
                    s = r(f),
                    d = n(2),
                    h = r(d),
                    v = n(55),
                    _ = r(v),
                    p = n(62),
                    y = r(p),
                    b = "function" == typeof y.default && "symbol" == typeof _.default ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof y.default && t.constructor === y.default && t !== y.default.prototype ? "symbol" : typeof t
                    },
                    g = n(116),
                    m = n(77);
                Object.defineProperty(m.SmoothScrollbar.prototype, "__initOptions", {
                    value: i,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                t.exports = {
                    default: n(186),
                    __esModule: !0
                }
            }, function(t, e, n) {
                var r = n(12),
                    o = r.JSON || (r.JSON = {
                        stringify: JSON.stringify
                    });
                t.exports = function(t) {
                    return o.stringify.apply(o, arguments)
                }
            }, function(t, e, n) {
                "use strict";

                function r() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.reverseWheel(t)
                }
                var o = n(77);
                Object.defineProperty(o.SmoothScrollbar.prototype, "__initReverseWheel", {
                    value: r,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                "use strict";

                function r() {
                    this.update(), this.__keyboardHandler(), this.__resizeHandler(), this.__selectHandler(), this.__mouseHandler(), this.__touchHandler(), this.__wheelHandler(), this.__dragHandler(), this.__render()
                }
                var o = n(77);
                Object.defineProperty(o.SmoothScrollbar.prototype, "__initScrollbar", {
                    value: r,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function o(t, e) {
                    return (0, u.default)(this, t, {
                        value: e,
                        enumerable: !0,
                        configurable: !0
                    })
                }
                var i = n(85),
                    u = r(i),
                    a = n(77);
                Object.defineProperty(a.SmoothScrollbar.prototype, "__readonly", {
                    value: o,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                "use strict";

                function r() {
                    var t = this.targets,
                        e = this.size,
                        n = this.offset,
                        r = this.thumbOffset,
                        i = this.thumbSize;
                    r.x = n.x / e.content.width * (e.container.width - (i.x - i.realX)), r.y = n.y / e.content.height * (e.container.height - (i.y - i.realY)), (0, o.setStyle)(t.xAxis.thumb, {
                        "-transform": "translate3d(" + r.x + "px, 0, 0)"
                    }), (0, o.setStyle)(t.yAxis.thumb, {
                        "-transform": "translate3d(0, " + r.y + "px, 0)"
                    })
                }
                var o = n(116),
                    i = n(77);
                Object.defineProperty(i.SmoothScrollbar.prototype, "__setThumbPosition", {
                    value: r,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                "use strict";

                function r() {
                    var t = this.targets.container,
                        e = t.getBoundingClientRect(),
                        n = e.top,
                        r = e.right,
                        o = e.bottom,
                        i = e.left,
                        u = window,
                        a = u.innerHeight,
                        c = u.innerWidth;
                    this.__readonly("bounding", {
                        top: Math.max(n, 0),
                        right: Math.min(r, c),
                        bottom: Math.min(o, a),
                        left: Math.max(i, 0)
                    })
                }
                var o = n(77);
                Object.defineProperty(o.SmoothScrollbar.prototype, "__updateBounding", {
                    value: r,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function o(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                        return n
                    }
                    return (0, a.default)(t)
                }

                function i() {
                    var t = this.targets,
                        e = t.container,
                        n = t.content;
                    this.__readonly("children", [].concat(o(n.querySelectorAll(l.selectors)))), this.__readonly("isNestedScrollbar", !1);
                    for (var r = [], i = e; i = i.parentElement;) l.sbList.has(i) && (this.__readonly("isNestedScrollbar", !0), r.push(i));
                    this.__readonly("parents", r)
                }
                var u = n(2),
                    a = r(u),
                    c = n(77),
                    l = n(88);
                Object.defineProperty(c.SmoothScrollbar.prototype, "__updateTree", {
                    value: i,
                    writable: !0,
                    configurable: !0
                })
            }, function(t, e) {}])
        });
    }, {}],
    2: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.EVENT = undefined;

        var _environment = require('./utils/environment');

        var _globals = require('./globals');

        var _globals2 = _interopRequireDefault(_globals);

        var _array = require('./utils/array');

        var _html = require('./utils/html');

        var _is = require('./utils/is');

        var _modules = require('./modules');

        var modules = _interopRequireWildcard(_modules);

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
                return obj;
            } else {
                var newObj = {};
                if (obj != null) {
                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                }
                newObj.default = obj;
                return newObj;
            }
        }

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        } /* jshint esnext: true */


        // Basic modules


        var MODULE_NAME = 'App';
        var EVENT_NAMESPACE = _environment.APP_NAME + '.' + MODULE_NAME;

        var EVENT = exports.EVENT = {
            INIT_MODULES: 'initModules.' + EVENT_NAMESPACE,
            INIT_SOME_MODULES: 'initSomeModules.' + EVENT_NAMESPACE,
            INIT_SCOPED_MODULES: 'initScopedModules.' + EVENT_NAMESPACE,
            DELETE_SCOPED_MODULES: 'deleteScopedModules.' + EVENT_NAMESPACE
        };

        var App = function() {
            function App() {
                var _this = this;

                _classCallCheck(this, App);

                this.modules = modules;
                this.currentModules = [];

                _environment.$document.on(EVENT.INIT_MODULES, function(event) {
                    _this.initGlobals(event.firstBlood).deleteModules(event).initModules(event);
                    //onsole.log('listen INIT_MODULES');
                });

                _environment.$document.on(EVENT.INIT_SOME_MODULES, function(event) {
                    _this.initModules(event);
                    //console.log('listen INIT_SOME_MODULES');
                });

                _environment.$document.on(EVENT.INIT_SCOPED_MODULES, function(event) {
                    //console.log('listen INIT_SCOPED_MODULES');
                    _this.initModules(event);
                });

                _environment.$document.on(EVENT.DELETE_SCOPED_MODULES, function(event) {
                    //console.log('listen DELETE_SCOPED_MODULES');
                    _this.deleteModules(event);
                });
            }

            /**
             * Destroy all existing modules or a specific scope of modules
             * @param  {Object} event The event being triggered.
             * @return {Object}       Self (allows chaining)
             */


            App.prototype.deleteModules = function deleteModules(event) {
                var destroyAll = true;
                var moduleIds = [];

                //console.log('delete modules');

                // Check for scope first
                if (event.$scope instanceof jQuery && event.$scope.length > 0) {
                    // Modules within scope
                    var $modules = event.$scope.find('[data-module]');

                    // Determine their uids
                    moduleIds = $.makeArray($modules.map(function(index) {
                        return $modules.eq(index).data('uid');
                    }));

                    if (moduleIds.length > 0) {
                        destroyAll = false;
                    }
                }

                // Loop modules and destroying all of them, or specific ones
                var i = this.currentModules.length;

                while (i--) {
                    if (destroyAll || (0, _array.arrayContains)(moduleIds, this.currentModules[i].uid)) {
                        (0, _array.removeFromArray)(moduleIds, this.currentModules[i].uid);
                        this.currentModules[i].destroy();
                        this.currentModules.splice(i);
                    }
                }

                return this;
            };

            /**
             * Execute global functions and settings
             * Allows you to initialize global modules only once if you need
             * (ex.: when using Barba.js or SmoothState.js)
             * @return {Object} Self (allows chaining)
             */


            App.prototype.initGlobals = function initGlobals(firstBlood) {
                (0, _globals2.default)(firstBlood);
                return this;
            };

            /**
             * Find modules and initialize them
             * @param  {Object} event The event being triggered.
             * @return {Object}       Self (allows chaining)
             */


            App.prototype.initModules = function initModules(event) {
                // Elements with module
                var $moduleEls = [];
                // If first blood, load all modules in the DOM
                // If scoped, render elements with modules
                // If Barba, load modules contained in Barba container
                if (event.firstBlood) {
                    $moduleEls = _environment.$document.find('[data-module]');
                } else if (event.$scope instanceof jQuery && event.$scope.length > 0) {
                    $moduleEls = event.$scope.find('[data-module]');
                } else if (event.isBarba) {
                    $moduleEls = $('#barba-wrapper').find('[data-module]');
                }

                // Loop through elements
                var i = 0;
                var elsLen = $moduleEls.length;

                for (; i < elsLen; i++) {

                    // Current element
                    var el = $moduleEls[i];

                    // All data- attributes considered as options
                    var options = (0, _html.getNodeData)(el);

                    // Add current DOM element and jQuery element
                    options.el = el;
                    options.$el = $moduleEls.eq(i);

                    // Module does exist at this point
                    var attr = options.module;

                    // Splitting modules found in the data-attribute
                    var moduleIdents = attr.split(/[,\s]+/g);

                    // Loop modules
                    var j = 0;
                    var modulesLen = moduleIdents.length;

                    for (; j < modulesLen; j++) {
                        var moduleAttr = moduleIdents[j];

                        if (typeof this.modules[moduleAttr] === 'function') {
                            var module = new this.modules[moduleAttr](options);
                            this.currentModules.push(module);
                            module.init();
                        }
                    }
                }

                return this;
            };

            return App;
        }();

        // IIFE for loading the application
        // ==========================================================================


        (function() {
            new App();
            _environment.$document.triggerHandler({
                type: EVENT.INIT_MODULES,
                firstBlood: true
            });
        })();

    }, {
        "./globals": 3,
        "./modules": 4,
        "./utils/array": 28,
        "./utils/environment": 30,
        "./utils/html": 31,
        "./utils/is": 32
    }],
    3: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        exports.default = function(firstBlood) {

            // if (firstBlood) {
            //     if (is.ios() && is.chrome()) {} else {
            //         $('body').on('click', function() {
            //             if ($('body').hasClass('theme-1')) {
            //                 $('body').addClass('theme-2');
            //                 $('body').removeClass('theme-1');
            //             } else if ($('body').hasClass('theme-2')) {
            //                 $('body').addClass('theme-3');
            //                 $('body').removeClass('theme-2');
            //             } else if ($('body').hasClass('theme-3')) {
            //                 $('body').addClass('theme-4');
            //                 $('body').removeClass('theme-3');
            //             } else if ($('body').hasClass('theme-4')) {
            //                 $('body').addClass('theme-5');
            //                 $('body').removeClass('theme-4');
            //             } else if ($('body').hasClass('theme-5')) {
            //                 $('body').addClass('theme-1');
            //                 $('body').removeClass('theme-5');
            //             }
            //         });
            //     }
            // }

            svg4everybody();

            setTimeout(function() {
                $('.js-video-home').each(function() {
                    $(this).append('<video muted playsinline autoplay loop src="' + $(this).data('src') + '"></video>');
                });
            }, 1200);

            if (is.desktop()) {
                $('.c-work__link').mouseenter(function() {
                    if ($(this).find('video').length == 0) {
                        var video = $(this).find('.js-video');
                        video.append('<video muted loop src="' + video.data('src') + '"></video>');
                    }
                    $(this).find('video').get(0).play();
                });

                $('.c-work__link').mouseleave(function() {
                    $(this).find('video').get(0).pause();
                });
            }

            //setTimeout(function() {
            //$('.js-video-home').append('<video autoplay muted playsinline loop src="/app/themes/baserock/assets/video/SampleVideo_1280x720_1mb.mp4"></video>');
            //},10);
            //Init Locomotive Scroll
            // window.scroller = new LocomotiveScroll({
            //     container: $('#js-scroll'),
            //     selector: '.js-animate',
            //     smooth: true,
            //     smoothMobile: false,
            //     mobileContainer: $(document)
            // });
            setTimeout(function() {
                if (firstBlood) {
                    var transitionManager = new _TransitionManager2.default();
                }
            }, 1200);

            try {
                wpcf7.initForm(jQuery('.wpcf7-form'));
            } catch (e) {};

            $(document).on('mousemove', function(e) {
                $('.js-follow').css({
                    'transform': 'translate3d(' + e.pageX + 'px,' + e.pageY + 'px,0)'
                });
            });

            $('*').click(function() {
                $(".js-follow").addClass("is-clicking");
                setTimeout(function() {
                    $(".js-follow").removeClass("is-clicking");
                }, 500);
            });

            //globals exec (old app.js)
            if (is.desktop()) {
                $('html').addClass('is-desktop');
            }
            if (is.mobile()) {
                $('html').addClass('is-mobile');
            }
            if (is.tablet()) {
                $('html').addClass('is-mobile');
            }
            if (is.ie()) {
                $('html').addClass('is-ie');
            }
            if (is.safari()) {
                $('html').addClass('is-safari');
            }
            if (is.ios()) {
                $('html').addClass('is-safari');
            }
            if (is.windows()) {
                $('html').addClass('is-windows');
            }

            //     var path = document.querySelector('.o-button__circle path');
            // var length = path.getTotalLength();
            // console.log(length);

            $('.js-toggle-nav:not(.-inited)').on('click', function() {
                _environment.$body.toggleClass('has-nav-open');
                return false;
            }).addClass("-inited");

            $('.js-toggle-contact:not(.-inited)').on('click', function() {
                _environment.$body.toggleClass('has-contact-open');
                return false;
            }).addClass("-inited");

            $('.js-toggle-project:not(.-inited)').on('click', function() {
                _environment.$body.toggleClass('has-project-open');
                return false;
            }).addClass("-inited");

            $('.js-toggle-share:not(.-inited)').on('click', function() {
                $('.c-box-share__wrap').toggleClass('has-share-open');
                return false;
            }).addClass("-inited");

            $('.c-nav-main a, .c-nav-main-small a').removeClass('is-active');
            if (location.pathname != '/') {
                $('.c-nav-main a[href$="' + location.pathname + '"], .c-nav-main-small a[href$="' + location.pathname + '"]').addClass('is-active');
            }

            $('a[href*="#"]:not(.-inited):not(.js-scrollto)').on('click', function() {
                window.tempHash = $(this).attr('href').split('#')[1];

                if ($(this).attr('href').split('#')[0] != location.pathname && $(this).attr('href').split('#')[0] != "") {
                    Barba.Pjax.goTo($(this).attr('href').split('#')[0]);
                } else {
                    _environment.$document.triggerHandler({
                        type: 'scrollTo',
                        options: {
                            targetElem: $('#' + window.tempHash)
                        }
                    });
                    //$('body').removeClass('has-nav-open');
                    delete window.tempHash;
                }
                return false;
            }).addClass("-inited");;

            // if ((location.hash && $(location.hash).length) || (window.tempHash && $('#' + window.tempHash).length) ) {
            //     let string = location.hash ? location.hash : '#' + window.tempHash;
            //     if (window.tempHash) delete window.tempHash;
            //     setTimeout(function() {
            //         $document.triggerHandler({
            //             type: 'scrollTo',
            //             options: {
            //                 targetElem: $(string)
            //             }
            //         });
            //         $('body').removeClass('has-nav-open');
            //     },2000);
            // }
        };

        var _environment = require('./utils/environment');

        var _TransitionManager = require('./transitions/TransitionManager');

        var _TransitionManager2 = _interopRequireDefault(_TransitionManager);

        var _DefaultView = require('./views/DefaultView');

        var _DefaultView2 = _interopRequireDefault(_DefaultView);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

    }, {
        "./transitions/TransitionManager": 27,
        "./utils/environment": 30,
        "./views/DefaultView": 33
    }],
    4: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _Scroll = require('./modules/Scroll');

        Object.defineProperty(exports, 'Scroll', {
            enumerable: true,
            get: function get() {
                return _interopRequireDefault(_Scroll).default;
            }
        });

        var _Accordions = require('./modules/Accordions');

        Object.defineProperty(exports, 'Accordions', {
            enumerable: true,
            get: function get() {
                return _interopRequireDefault(_Accordions).default;
            }
        });

        var _Autoplay = require('./modules/Autoplay');

        Object.defineProperty(exports, 'Autoplay', {
            enumerable: true,
            get: function get() {
                return _interopRequireDefault(_Autoplay).default;
            }
        });

        var _Sharing = require('./modules/Sharing');

        Object.defineProperty(exports, 'Sharing', {
            enumerable: true,
            get: function get() {
                return _interopRequireDefault(_Sharing).default;
            }
        });

        var _SplitTextWords = require('./modules/SplitTextWords');

        Object.defineProperty(exports, 'SplitTextWords', {
            enumerable: true,
            get: function get() {
                return _interopRequireDefault(_SplitTextWords).default;
            }
        });

        var _SplitTextLines = require('./modules/SplitTextLines');

        Object.defineProperty(exports, 'SplitTextLines', {
            enumerable: true,
            get: function get() {
                return _interopRequireDefault(_SplitTextLines).default;
            }
        });

        var _OverlayOpen = require('./modules/OverlayOpen');

        Object.defineProperty(exports, 'OverlayOpen', {
            enumerable: true,
            get: function get() {
                return _interopRequireDefault(_OverlayOpen).default;
            }
        });

        var _OverlayClose = require('./modules/OverlayClose');

        Object.defineProperty(exports, 'OverlayClose', {
            enumerable: true,
            get: function get() {
                return _interopRequireDefault(_OverlayClose).default;
            }
        });

        var _Overlay = require('./modules/Overlay');

        Object.defineProperty(exports, 'Overlay', {
            enumerable: true,
            get: function get() {
                return _interopRequireDefault(_Overlay).default;
            }
        });

        var _Marquee = require('./modules/Marquee');

        Object.defineProperty(exports, 'Marquee', {
            enumerable: true,
            get: function get() {
                return _interopRequireDefault(_Marquee).default;
            }
        });

        var _LangSwitcher = require('./modules/LangSwitcher');

        Object.defineProperty(exports, 'LangSwitcher', {
            enumerable: true,
            get: function get() {
                return _interopRequireDefault(_LangSwitcher).default;
            }
        });

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

    }, {
        "./modules/Accordions": 6,
        "./modules/Autoplay": 7,
        "./modules/LangSwitcher": 8,
        "./modules/Marquee": 10,
        "./modules/Overlay": 11,
        "./modules/OverlayClose": 12,
        "./modules/OverlayOpen": 13,
        "./modules/Scroll": 14,
        "./modules/Sharing": 17,
        "./modules/SplitTextLines": 19,
        "./modules/SplitTextWords": 20
    }],
    5: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        /* jshint esnext: true */
        var uid = 0;

        /**
         * Abstract Module
         */

        var _class = function() {
            function _class(options) {
                _classCallCheck(this, _class);

                this.$el = options.$el || null;
                this.el = options.el || null;

                // Generate a unique module identifier
                this.uid = 'm-' + uid++;
                // Use jQuery's data API to "store it in the DOM"
                this.$el.data('uid', this.uid);
            }

            _class.prototype.init = function init() {};

            _class.prototype.destroy = function destroy() {
                if (this.$el) {
                    this.$el.removeData('uid');
                }
            };

            return _class;
        }();

        exports.default = _class;

    }, {}],
    6: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _environment = require('../utils/environment');

        var _AbstractModule2 = require('./AbstractModule');

        var _AbstractModule3 = _interopRequireDefault(_AbstractModule2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        } /* jshint esnext: true */


        var DATA_KEY = _environment.APP_NAME + '.Accordion';
        var EVENT_KEY = '.' + DATA_KEY;

        var Event = {
            CLICK: 'click' + EVENT_KEY
        };

        var _class = function(_AbstractModule) {
            _inherits(_class, _AbstractModule);

            function _class(options) {
                _classCallCheck(this, _class);

                var _this = _possibleConstructorReturn(this, _AbstractModule.call(this, options));

                _this.scrollto = true;

                setTimeout(function() {
                    _environment.$document.trigger({
                        type: 'updateSticky.LocomotiveScroll'
                    });
                }, 3000);

                if (typeof options.noscrollto === 'string') {
                    _this.scrollto = false;
                }

                _this.$el.on(Event.CLICK, '.js-accordion-header', function(event) {
                    return _this.toggle(event);
                });

                var $currentItem = _this.$el.find('.js-current-item').first();

                if ($currentItem.length) {
                    setTimeout(function() {
                        $currentItem.addClass('is-open');
                        $currentItem.find('.js-accordion-content').stop().slideDown();
                        if (_this.scrollto) {
                            _environment.$document.trigger({
                                type: 'scrollTo.LocomotiveScroll',
                                target: $currentItem
                            });
                        }
                    }, 2600);
                }
                return _this;
            }

            _class.prototype.toggle = function toggle(event) {
                var _this2 = this;

                event.preventDefault();

                var $this = $(event.currentTarget);

                var delay = 0;

                if ($this.parents('.js-accordion-item').hasClass('is-open')) {
                    $this.parents('.js-accordion-item').removeClass('is-open');
                    $this.siblings('.js-accordion-content').stop().slideUp();

                    setTimeout(function() {
                        _environment.$document.trigger({
                            type: 'updateSticky.LocomotiveScroll'
                        });
                    }, 800);
                } else {
                    if ($('.js-accordion-item.is-open').length > 0) {
                        delay = 300;
                    }
                    $('.js-accordion-item.is-open', this.$el).removeClass('is-open');

                    $('.js-accordion-content').stop().slideUp();

                    $this.siblings('.js-accordion-content').stop().slideDown(300);

                    $this.parents('.js-accordion-item').addClass('is-open');

                    if (this.scrollToTimeout != undefined) {
                        clearTimeout(this.scrollToTimeout);
                    }
                    if (this.scrollto) {
                        this.scrollToTimeout = setTimeout(function() {
                            var $currentItem = _this2.$el.find('.js-accordion-item.is-open').first();

                            if ($currentItem.length) {
                                _environment.$document.trigger({
                                    type: 'scrollTo.LocomotiveScroll',
                                    options: {
                                        targetElem: $currentItem
                                    }
                                });

                                setTimeout(function() {
                                    _environment.$document.trigger({
                                        type: 'updateSticky.LocomotiveScroll'
                                    });
                                }, 800);
                            }
                        }, delay);
                    }
                }
            };

            _class.prototype.destroy = function destroy() {
                this.$el.off(EVENT_KEY);

                if (this.scrollToTimeout != undefined) {
                    clearTimeout(this.scrollToTimeout);
                }
            };

            return _class;
        }(_AbstractModule3.default);

        exports.default = _class;

    }, {
        "../utils/environment": 30,
        "./AbstractModule": 5
    }],
    7: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _environment = require('../utils/environment');

        var _AbstractModule2 = require('./AbstractModule');

        var _AbstractModule3 = _interopRequireDefault(_AbstractModule2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        } /* jshint esnext: true */


        var MODULE_NAME = 'Autoplay';
        var EVENT_NAMESPACE = _environment.APP_NAME + '.' + MODULE_NAME;

        var _class = function(_AbstractModule) {
            _inherits(_class, _AbstractModule);

            function _class(options) {
                _classCallCheck(this, _class);

                return _possibleConstructorReturn(this, _AbstractModule.call(this, options));
            }

            _class.prototype.init = function init() {
                var that = this;
                setTimeout(function() {
                    that.el.play();
                }, 1300);
            };

            _class.prototype.destroy = function destroy() {
                _AbstractModule.prototype.destroy.call(this);
                this.$el.off('.' + EVENT_NAMESPACE);
            };

            return _class;
        }(_AbstractModule3.default);

        exports.default = _class;

    }, {
        "../utils/environment": 30,
        "./AbstractModule": 5
    }],
    8: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _environment = require('../utils/environment');

        var _AbstractModule2 = require('./AbstractModule');

        var _AbstractModule3 = _interopRequireDefault(_AbstractModule2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        } /* jshint esnext: true */


        var MODULE_NAME = 'LangSwitcher';
        var EVENT_NAMESPACE = _environment.APP_NAME + '.' + MODULE_NAME;

        var _class = function(_AbstractModule) {
            _inherits(_class, _AbstractModule);

            function _class(options) {
                _classCallCheck(this, _class);

                return _possibleConstructorReturn(this, _AbstractModule.call(this, options));
            }

            _class.prototype.init = function init() {
                //console.log('yes')
                var that = this;
                $('.js-nav-lang').html(this.$el.html());
            };

            _class.prototype.destroy = function destroy() {
                _AbstractModule.prototype.destroy.call(this);
                this.$el.off('.' + EVENT_NAMESPACE);
            };

            return _class;
        }(_AbstractModule3.default);

        exports.default = _class;

    }, {
        "../utils/environment": 30,
        "./AbstractModule": 5
    }],
    9: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.EVENT = undefined;

        var _environment = require('../utils/environment');

        var _AbstractModule2 = require('./AbstractModule');

        var _AbstractModule3 = _interopRequireDefault(_AbstractModule2);

        var _ScrollManager = require('./ScrollManager');

        var _ScrollManager2 = _interopRequireDefault(_ScrollManager);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var MODULE_NAME = 'LocomotiveScroll';
        var EVENT_NAMESPACE = _environment.APP_NAME + '.' + MODULE_NAME;

        var EVENT = exports.EVENT = {
            CLICK: 'click.' + EVENT_NAMESPACE,
            SCROLL: 'scrolling.' + EVENT_NAMESPACE
        };

        var _class = function(_AbstractModule) {
            _inherits(_class, _AbstractModule);

            function _class(options) {
                _classCallCheck(this, _class);

                var _this = _possibleConstructorReturn(this, _AbstractModule.call(this, options));

                _this.modalScroll = typeof options['modal-scroll'] === 'string';
                return _this;
            }

            _class.prototype.init = function init() {
                var _this2 = this;

                // Set events and such
                this.scrollManager = new _ScrollManager2.default({
                    container: this.$el,
                    selector: '.js-animate',
                    smooth: true,
                    smoothMobile: false,
                    mobileContainer: _environment.$document,
                    getWay: false,
                    getSpeed: false,
                    onScroll: function onScroll(scroll, $container) {
                        if (!_this2.modalScroll) {
                            _environment.$html.toggleClass('is-top', scroll.y < 100);
                            _environment.$html.toggleClass('is-not-top', scroll.y >= 100);

                            scroll.$container = $container;
                            _environment.$document.trigger({
                                type: EVENT.SCROLL,
                                options: scroll
                            });
                        }
                    }
                });
            };

            _class.prototype.destroy = function destroy() {
                this.scrollManager.destroy();

                _AbstractModule.prototype.destroy.call(this);
                this.$el.off('.' + EVENT_NAMESPACE);
            };

            return _class;
        }(_AbstractModule3.default);

        exports.default = _class;

    }, {
        "../utils/environment": 30,
        "./AbstractModule": 5,
        "./ScrollManager": 15
    }],
    10: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _environment = require('../utils/environment');

        var _AbstractModule2 = require('./AbstractModule');

        var _AbstractModule3 = _interopRequireDefault(_AbstractModule2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        } /* jshint esnext: true */


        var MODULE_NAME = 'Marquee';
        var EVENT_NAMESPACE = _environment.APP_NAME + '.' + MODULE_NAME;

        var _class = function(_AbstractModule) {
            _inherits(_class, _AbstractModule);

            function _class(options) {
                _classCallCheck(this, _class);

                return _possibleConstructorReturn(this, _AbstractModule.call(this, options));
            }

            _class.prototype.init = function init() {
                var that = this;
                $(that.el).find('.js-marquee-item').each(function() {
                    var animationSpeed = this.offsetWidth / 60;
                    this.style.animationDuration = animationSpeed + 's';
                });
            };

            _class.prototype.destroy = function destroy() {
                _AbstractModule.prototype.destroy.call(this);
                this.$el.off('.' + EVENT_NAMESPACE);
            };

            return _class;
        }(_AbstractModule3.default);

        exports.default = _class;

    }, {
        "../utils/environment": 30,
        "./AbstractModule": 5
    }],
    11: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _environment = require('../utils/environment');

        var _AbstractModule2 = require('./AbstractModule');

        var _AbstractModule3 = _interopRequireDefault(_AbstractModule2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        } /* jshint esnext: true */


        var DATA_KEY = _environment.APP_NAME + '.Overlay';
        var EVENT_KEY = '.' + DATA_KEY;

        var Event = {
            CLICK: 'click' + EVENT_KEY
        };

        var _class = function(_AbstractModule) {
            _inherits(_class, _AbstractModule);

            function _class(options) {
                _classCallCheck(this, _class);

                return _possibleConstructorReturn(this, _AbstractModule.call(this, options));
            }

            _class.prototype.init = function init(event) {
                var _this2 = this;

                this.$el.on('click.' + DATA_KEY, function() {
                    $('.c-overlay').removeClass('remove-video');
                    $('.c-overlay-embed').removeClass('is-minimized hide-minimized');
                    $('.c-overlay-embed .c-embed').remove();
                    var $copyNode = $('<iframe class="c-iframe" width="560" height="315" src="' + _this2.$el.attr('href') + '?autoplay=1&auto_play=false" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
                    $('.js-overlay-embed .js-overlay__inner ').html('');
                    $copyNode.appendTo('.js-overlay-embed .js-overlay__inner');
                    $('.js-overlay-content').removeClass('is-active');
                    $('.js-overlay-embed').addClass('is-active');
                    $('body').addClass('has-overlay-open');

                    /*if(this.$el.data('hideminimize')){
                        $('.c-overlay-embed').addClass('hide-minimized');
                    }*/

                    return false;
                });
            };

            _class.prototype.destroy = function destroy() {
                this.$el.off(EVENT_KEY);
            };

            return _class;
        }(_AbstractModule3.default);

        exports.default = _class;

    }, {
        "../utils/environment": 30,
        "./AbstractModule": 5
    }],
    12: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _environment = require('../utils/environment');

        var _AbstractModule2 = require('./AbstractModule');

        var _AbstractModule3 = _interopRequireDefault(_AbstractModule2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        } /* jshint esnext: true */


        var DATA_KEY = _environment.APP_NAME + '.OverlayClose';
        var EVENT_KEY = '.' + DATA_KEY;

        var Event = {
            CLICK: 'click' + EVENT_KEY
        };

        var _class = function(_AbstractModule) {
            _inherits(_class, _AbstractModule);

            function _class(options) {
                _classCallCheck(this, _class);

                return _possibleConstructorReturn(this, _AbstractModule.call(this, options));
            }

            _class.prototype.init = function init(event) {
                this.$el.on('click.' + DATA_KEY, function() {
                    _environment.$body.removeClass('has-overlay-open');

                    setTimeout(function() {
                        $('.js-overlay__inner .c-iframe').remove();
                    }, 1300);
                    return false;
                });
            };

            _class.prototype.destroy = function destroy() {
                this.$el.off(EVENT_KEY);

                if (this.scrollToTimeout != undefined) {
                    clearTimeout(this.scrollToTimeout);
                }
            };

            return _class;
        }(_AbstractModule3.default);

        exports.default = _class;

    }, {
        "../utils/environment": 30,
        "./AbstractModule": 5
    }],
    13: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _environment = require('../utils/environment');

        var _AbstractModule2 = require('./AbstractModule');

        var _AbstractModule3 = _interopRequireDefault(_AbstractModule2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        } /* jshint esnext: true */


        var DATA_KEY = _environment.APP_NAME + '.OverlayOpen';
        var EVENT_KEY = '.' + DATA_KEY;

        var Event = {
            CLICK: 'click' + EVENT_KEY
        };

        var _class = function(_AbstractModule) {
            _inherits(_class, _AbstractModule);

            function _class(options) {
                _classCallCheck(this, _class);

                return _possibleConstructorReturn(this, _AbstractModule.call(this, options));
            }

            _class.prototype.init = function init(event) {
                this.$el.on('click.' + DATA_KEY, function() {
                    $('.c-overlay').removeClass('remove-video');
                    _environment.$body.addClass('has-overlay-open');
                    return false;
                });
            };

            _class.prototype.destroy = function destroy() {
                this.$el.off(EVENT_KEY);

                if (this.scrollToTimeout != undefined) {
                    clearTimeout(this.scrollToTimeout);
                }
            };

            return _class;
        }(_AbstractModule3.default);

        exports.default = _class;

    }, {
        "../utils/environment": 30,
        "./AbstractModule": 5
    }],
    14: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _environment = require('../utils/environment');

        var _AbstractModule2 = require('./AbstractModule');

        var _AbstractModule3 = _interopRequireDefault(_AbstractModule2);

        var _ScrollManager = require('../scroll/vendors/ScrollManager');

        var _ScrollManager2 = _interopRequireDefault(_ScrollManager);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var MODULE_NAME = 'Scroll';
        var EVENT_NAMESPACE = _environment.APP_NAME + '.' + MODULE_NAME;

        var _class = function(_AbstractModule) {
            _inherits(_class, _AbstractModule);

            function _class(options) {
                _classCallCheck(this, _class);

                return _possibleConstructorReturn(this, _AbstractModule.call(this, options));
            }

            _class.prototype.init = function init() {
                var _this2 = this;

                setTimeout(function() {
                    _this2.scrollManager = new _ScrollManager2.default({
                        container: _this2.$el,
                        selector: '.js-animate',
                        smooth: true,
                        smoothMobile: false,
                        mobileContainer: _environment.$document,
                        getWay: false,
                        getSpeed: false
                    });
                }, 500);
            };

            _class.prototype.destroy = function destroy() {
                _AbstractModule.prototype.destroy.call(this);
                this.scrollManager.destroy();
            };

            return _class;
        }(_AbstractModule3.default);

        exports.default = _class;

    }, {
        "../scroll/vendors/ScrollManager": 24,
        "../utils/environment": 30,
        "./AbstractModule": 5
    }],
    15: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _environment = require('../utils/environment');

        var _Scroll = require('./Scroll');

        var _Scroll2 = _interopRequireDefault(_Scroll);

        var _SmoothScroll = require('./SmoothScroll');

        var _SmoothScroll2 = _interopRequireDefault(_SmoothScroll);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        } // ==========================================================================
        // Locomotive Scroll Manager
        // ==========================================================================
        /* jshint esnext: true */


        /**
         * Basic module that detects which scrolling module we'll be using
         */
        var _class = function() {
            function _class(options) {
                _classCallCheck(this, _class);

                this.options = options;
                this.smooth = options.smooth || _Scroll.Defaults.smooth;
                this.smoothMobile = options.smoothMobile || _Scroll.Defaults.smoothMobile;
                this.mobileContainer = options.mobileContainer || _Scroll.Defaults.mobileContainer;
                this.isMobile = false;

                this.init();

                // Add a callback when reaching top or bottom
                // options.onScroll = function(scrollStatus) {
                //     $html.toggleClass('has-scrolled', (scrollStatus.y > 0));
                // };
            }

            _class.prototype.init = function init() {
                var _this = this;

                _environment.$html[0].scrollTop = 0;
                _environment.$body[0].scrollTop = 0;

                if (!this.smoothMobile) {
                    this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                }

                this.instance = function() {
                    if (_this.smooth === true && !_this.isMobile) {
                        return new _SmoothScroll2.default(_this.options);
                    } else {
                        if (_this.mobileContainer) {
                            _this.options.container = _this.mobileContainer;
                        }
                        return new _Scroll2.default(_this.options);
                    }
                }();

                this.instance.init();

                var $scrollToOnLoadEl = $('.js-scrollto-on-load').first();

                if ($scrollToOnLoadEl.length === 1) {
                    _environment.$document.triggerHandler({
                        type: 'Event.SCROLLTO',
                        options: {
                            targetElem: $scrollToOnLoadEl
                        }
                    });
                }
            };

            _class.prototype.destroy = function destroy() {
                this.instance.destroy();
            };

            return _class;
        }();

        exports.default = _class;

    }, {
        "../utils/environment": 30,
        "./Scroll": 14,
        "./SmoothScroll": 18
    }],
    16: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.Defaults = exports.Event = exports.EVENT_KEY = undefined;

        var _environment = require('../utils/environment');

        var _debounce = require('../utils/debounce');

        var _debounce2 = _interopRequireDefault(_debounce);

        var _is = require('../utils/is');

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        } // ==========================================================================
        // Locomotive Scroll
        // ==========================================================================
        /* jshint esnext: true */


        var EVENT_KEY = exports.EVENT_KEY = '.LocomotiveScroll';

        var Event = exports.Event = {
            CLICK: 'click' + EVENT_KEY,
            ISREADY: 'isReady' + EVENT_KEY,
            REBUILD: 'rebuild' + EVENT_KEY,
            RENDER: 'render' + EVENT_KEY,
            RESIZE: 'resize' + EVENT_KEY,
            SCROLL: 'scroll' + EVENT_KEY,
            SCROLLTO: 'scrollTo' + EVENT_KEY,
            UPDATE: 'update' + EVENT_KEY
        };

        var Defaults = exports.Defaults = {
            container: _environment.$document,
            mobileContainer: _environment.$document,
            onScroll: function onScroll() {},
            selector: '.js-animate',
            smooth: false,
            smoothMobile: false,
            reversed: false,
            getWay: false,
            getSpeed: false
        };

        /**
         * Manage animation of elements on the page according to scroll position.
         *
         * @todo  Manage some options (normally from data attributes) with constructor options (ex.: set repeat for all)
         * @todo  Method to get the distance (as percentage) of an element in the viewport
         */

        var _class = function() {
            function _class(options) {
                _classCallCheck(this, _class);

                this.$container = options.container ? options.container : Defaults.container;
                this.selector = options.selector ? options.selector : Defaults.selector;

                this.callbacks = {
                    onScroll: typeof options.onScroll === 'function' ? options.onScroll : Defaults.onScroll
                };

                this.scroll = {
                    x: 0,
                    y: 0,
                    direction: ''
                };

                this.windowHeight = _environment.$window.height();
                this.windowMiddle = this.windowHeight / 2;

                this.animatedElements = [];

                this.requestId = undefined;
            }

            /**
             * Initialize scrolling animations
             */


            _class.prototype.init = function init() {
                var _this = this;

                this.addElements();

                this.renderAnimations();

                // On scroll
                this.$container.on(Event.SCROLL, (0, _debounce2.default)(function() {
                    _this.renderAnimations();
                }, 10));

                // Rebuild event
                this.$container.on(Event.REBUILD, function() {
                    _this.scrollTo({
                        targetOffset: 0
                    });
                    _this.updateElements();
                });

                // Update event
                this.$container.on(Event.UPDATE, function(event, options) {
                    return _this.updateElements(options);
                });

                // Render event
                this.$container.on(Event.RENDER, function() {
                    return _this.renderAnimations();
                });

                // Scrollto button event
                this.$container.on(Event.CLICK, '.js-scrollto', function(event) {
                    event.preventDefault();

                    var $target = $(event.currentTarget);
                    var offset = $target.data('offset');

                    _this.scrollTo({
                        sourceElem: $target,
                        offsetElem: offset
                    });
                });
                this.$container.on(Event.SCROLLTO, function(event) {
                    return _this.scrollTo(event.options);
                });

                // Setup done
                _environment.$document.triggerHandler({
                    type: Event.ISREADY
                });

                // Resize event
                _environment.$window.on(Event.RESIZE, (0, _debounce2.default)(function() {
                    _this.updateElements();
                }, 20));
            };

            /**
             * Find all animatable elements.
             * Called on page load and any subsequent updates.
             */


            _class.prototype.addElements = function addElements() {
                this.animatedElements = [];

                var $elements = $(this.selector);
                var len = $elements.length;
                var i = 0;

                for (; i < len; i++) {
                    var $element = $elements.eq(i);
                    var elementTarget = $element.attr('data-target');
                    var elementPosition = $element.attr('data-position');
                    var $target = elementTarget && $(elementTarget).length ? $(elementTarget) : $element;
                    var elementOffset = $target.offset().top;
                    var elementLimit = elementOffset + $target.outerHeight();
                    var elementSticky = typeof $element.attr('data-sticky') === 'string';
                    var elementStickyTarget = $element.attr('data-sticky-target');

                    var elementViewportOffset = null;
                    if (typeof $element.attr('data-viewport-offset') === 'string') {
                        elementViewportOffset = $element.attr('data-viewport-offset').split(',');
                    }
                    //Manage callback
                    var elementCallbackString = typeof $element.attr('data-callback') === 'string' ? $element.attr('data-callback') : null;
                    var elementCallback = null;

                    if (elementCallbackString != null) {
                        var event = elementCallbackString.substr(0, elementCallbackString.indexOf('('));
                        var optionsString = elementCallbackString.substr(elementCallbackString.indexOf('('), elementCallbackString.length - event.length);

                        optionsString = optionsString.replace('(', '');
                        optionsString = optionsString.replace(')', '');

                        var options = optionsString.split('|');

                        var obj = {};

                        for (var j = 0; j < options.length; j++) {

                            var option = options[j].split(':');
                            option[0] = option[0].replace(' ', '');

                            var val = void 0;
                            //check if value is a boolean
                            if (option[1] === "true") {
                                val = true;
                            } else if (option[1] === "false") {
                                val = false;
                            }
                            //check if value is numeric
                            else if (/^\d+$/.test(option[1])) {
                                val = parseInt(option[1]);
                            }
                            //check if value is a String
                            else {
                                val = option[1];
                            }
                            obj[option[0]] = val;
                        }

                        elementCallback = {
                            event: event,
                            options: obj
                        };
                    }

                    // If elements loses its animation after scrolling past it
                    var elementRepeat = typeof $element.attr('data-repeat') === 'string';

                    var elementInViewClass = $element.attr('data-inview-class');
                    if (typeof elementInViewClass === 'undefined') {
                        elementInViewClass = 'is-show';
                    }

                    if (elementSticky) {
                        if (typeof elementStickyTarget === 'undefined') {
                            elementLimit = this.$container.height();
                        } else {
                            elementLimit = $(elementStickyTarget).offset().top - $element.height();
                        }

                        // Reset offset
                        $element.removeClass(elementInViewClass);
                        $element.removeClass('is-unstuck');

                        $element.css({
                            '-webkit-transform': 'translate3d(0, 0, 0)',
                            '-ms-transform': 'translate3d(0, 0, 0)',
                            'transform': 'translate3d(0, 0, 0)'
                        });
                    }

                    // Don't add element if it already has its inview class and doesn't repeat
                    if (elementRepeat || !$element.hasClass(elementInViewClass)) {
                        this.animatedElements[i] = {
                            $element: $element,
                            offset: Math.round(elementOffset),
                            repeat: elementRepeat,
                            position: elementPosition,
                            limit: elementLimit,
                            inViewClass: elementInViewClass,
                            sticky: elementSticky,
                            callback: elementCallback,
                            viewportOffset: elementViewportOffset
                        };
                    }
                };
            };

            /**
             * Loop through all animatable elements and apply animation method(s).
             */


            _class.prototype.animateElements = function animateElements() {
                var len = this.animatedElements.length;
                var removeIndexes = [];
                var i = 0;
                for (; i < len; i++) {
                    var element = this.animatedElements[i];

                    // If the element's visibility must not be manipulated any further, remove it from the list
                    if (this.toggleElement(element, i)) {
                        removeIndexes.push(i);
                    }
                }

                // Remove animated elements after looping through elements
                i = removeIndexes.length;
                while (i--) {
                    this.animatedElements.splice(removeIndexes[i], 1);
                }
            };

            /**
             * Render the class animations, and update the global scroll positionning.
             */


            _class.prototype.renderAnimations = function renderAnimations() {
                // if (window.pageYOffset > this.scroll.y) {
                //     if (this.scroll.direction !== 'down') {
                //         this.scroll.direction = 'down';
                //     }
                // } else if (window.pageYOffset < this.scroll.y) {
                //     if (this.scroll.direction !== 'up') {
                //         this.scroll.direction = 'up';
                //     }
                // }

                if (this.scroll.y !== window.pageYOffset) {
                    this.scroll.y = window.pageYOffset;
                }
                if (this.scroll.x !== window.pageXOffset) {
                    this.scroll.x = window.pageXOffset;
                }

                this.callbacks.onScroll(this.scroll);

                this.animateElements();
            };

            /**
             * Toggle classes on an element if it's visible.
             *
             * @param  {object}      element Current element to test
             * @param  {int}         index   Index of the element within it's container
             * @return {boolean}             Wether the item must be removed from its container
             */


            _class.prototype.toggleElement = function toggleElement(element, index) {
                var removeFromContainer = false;

                if (typeof element !== 'undefined') {
                    // Find the bottom edge of the scroll container
                    var scrollTop = this.scroll.y;
                    var scrollBottom = scrollTop + this.windowHeight;

                    // Define if the element is inView
                    var inView = false;

                    if (element.position === 'top') {
                        inView = scrollTop >= element.offset && scrollTop <= element.limit;
                    } else if (element.position === 'below') {
                        inView = scrollTop > element.limit;
                    } else if (element.sticky) {
                        inView = scrollTop >= element.offset && scrollTop <= element.limit;
                    } else if (element.viewportOffset != undefined) {
                        if (element.viewportOffset.length > 1) {
                            var scrollViewportOffsetTop = scrollTop + this.windowHeight * element.viewportOffset[1];
                            var scrollViewportOffsetBottom = scrollBottom - this.windowHeight * element.viewportOffset[0];
                            inView = scrollViewportOffsetBottom > element.offset && scrollViewportOffsetTop < element.limit;
                        } else {
                            var scrollViewportOffset = scrollBottom - this.windowHeight * element.viewportOffset[0];
                            inView = scrollViewportOffset > element.offset && scrollViewportOffset < element.limit;
                        }
                    } else {
                        inView = scrollBottom >= element.offset && scrollTop <= element.limit;
                    }

                    if (element.sticky) {
                        if (scrollTop > element.limit) {
                            element.$element.addClass('is-unstuck');
                        } else {
                            element.$element.removeClass('is-unstuck');
                        }

                        if (scrollTop < element.offset) {
                            element.$element.removeClass(element.inViewClass);
                        }
                    }

                    // Add class if inView, remove if not
                    if (inView) {
                        if (!element.$element.hasClass(element.inViewClass)) {
                            element.$element.addClass(element.inViewClass);
                            this.triggerCallback(element, 'enter');
                        }

                        if (!element.repeat && !element.sticky) {
                            removeFromContainer = true;
                        }

                        if (element.sticky) {
                            var y = this.scroll.y - element.offset;

                            element.$element.css({
                                '-webkit-transform': 'translate3d(0, ' + y + 'px, 0)',
                                '-ms-transform': 'translate3d(0, ' + y + 'px, 0)',
                                'transform': 'translate3d(0, ' + y + 'px, 0)'
                            });
                        }
                    } else {
                        if (element.repeat) {
                            if (element.$element.hasClass(element.inViewClass)) {
                                element.$element.removeClass(element.inViewClass);
                                this.triggerCallback(element, 'leave');
                            }
                        }
                    }
                }

                return removeFromContainer;
            };

            /**
             * check if the element have a callback, and trigger the event set in the data-callback
             *
             * @param  {object}      element Current element to test
             * @return void
             */


            _class.prototype.triggerCallback = function triggerCallback(element, way) {

                if (element.callback != undefined) {
                    element.$element.trigger({
                        type: element.callback.event,
                        options: element.callback.options,
                        way: way
                    });
                    //add this where you want dude (in your module btw)
                    // $document.on(eventName.Namespace,(e)=>{
                    //     console.log(e.options, e.way);
                    // });
                    /////////////////////////////////////////////
                }
            };

            /**
             * Scroll to a desired target.
             *
             * @param  {object} options
             * @return {void}
             */


            _class.prototype.scrollTo = function scrollTo(options) {
                var $targetElem = options.targetElem;
                var $sourceElem = options.sourceElem;
                var offsetElem = options.offsetElem;
                var targetOffset = (0, _is.isNumeric)(options.targetOffset) ? parseInt(options.targetOffset) : 0;
                var speed = (0, _is.isNumeric)(options.speed) ? parseInt(options.speed) : 800;
                var delay = (0, _is.isNumeric)(options.delay) ? parseInt(options.delay) : 0;
                var toTop = options.toTop;
                var toBottom = options.toBottom;
                var offset = 0;

                if (typeof $targetElem === 'undefined' && typeof $sourceElem === 'undefined' && typeof targetOffset === 'undefined') {
                    console.warn('You must specify at least one parameter.');
                    return false;
                }

                if (typeof $targetElem !== 'undefined' && $targetElem instanceof jQuery && $targetElem.length > 0) {
                    targetOffset = $targetElem.offset().top + targetOffset;
                }

                if (typeof $sourceElem !== 'undefined' && $sourceElem instanceof jQuery && $sourceElem.length > 0) {
                    var targetData = '';

                    if ($sourceElem.attr('data-target')) {
                        targetData = $sourceElem.attr('data-target');
                    } else {
                        targetData = $sourceElem.attr('href');
                    }

                    targetOffset = $(targetData).offset().top + targetOffset;
                }

                if (typeof offsetElem !== 'undefined') {
                    offset = $(offsetElem).outerHeight();
                    targetOffset = targetOffset - offset;
                }

                if (toTop === true) {
                    targetOffset = 0;
                } else if (toBottom === true) {
                    targetOffset = _environment.$document.height();
                }

                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: targetOffset
                    }, speed);
                }, delay);
            };

            /**
             * Update elements and recalculate all the positions on the page
             */


            _class.prototype.updateElements = function updateElements() {
                this.addElements();
                this.animateElements();

                this.windowHeight = _environment.$window.height();
                this.windowMiddle = this.windowHeight / 2;
            };

            /**
             * Destroy
             */


            _class.prototype.destroy = function destroy() {
                _environment.$window.off(EVENT_KEY);
                this.$container.off(EVENT_KEY);
                window.cancelAnimationFrame(this.requestId);
                this.requestId = undefined;
                this.animatedElements = undefined;
            };

            return _class;
        }();

        exports.default = _class;

    }, {
        "../utils/debounce": 29,
        "../utils/environment": 30,
        "../utils/is": 32
    }],
    17: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _environment = require('../utils/environment');

        var _AbstractModule2 = require('./AbstractModule');

        var _AbstractModule3 = _interopRequireDefault(_AbstractModule2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        } /* jshint esnext: true */


        var MODULE_NAME = 'Sharing';
        var EVENT_NAMESPACE = _environment.APP_NAME + '.' + MODULE_NAME;

        var _class = function(_AbstractModule) {
            _inherits(_class, _AbstractModule);

            function _class(options) {
                _classCallCheck(this, _class);

                return _possibleConstructorReturn(this, _AbstractModule.call(this, options));
            }

            _class.prototype.init = function init() {
                if (!this.$el.hasClass('-inited')) {
                    this.$el.removeClass('js-to-remove');
                    this.$el.addClass('js-toggle-share -inited');

                    var link = this.$el.data('link');
                    var box = $('.js-share-template').clone();

                    box.removeClass('js-share-template').find('a').each(function() {
                        $(this).attr('href', $(this).attr('href') + link);
                    });
                    this.$el.after(box);

                    this.$el.on('click.' + EVENT_NAMESPACE, function() {
                        if ($(this).hasClass('is-open')) {
                            $(this).removeClass('is-open').next().slideUp(300);
                        } else {
                            if ($('.js-toggle-share.is-open').length) {
                                $('.js-toggle-share.is-open').removeClass('is-open').next().slideUp(300);
                            }
                            $(this).addClass('is-open').next().slideDown(300);
                        }
                        return false;
                    });
                }
            };

            return _class;
        }(_AbstractModule3.default);

        exports.default = _class;

    }, {
        "../utils/environment": 30,
        "./AbstractModule": 5
    }],
    18: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };

        var _environment = require('../utils/environment');

        var _Scroll2 = require('./Scroll');

        var _Scroll3 = _interopRequireDefault(_Scroll2);

        var _debounce = require('../utils/debounce');

        var _debounce2 = _interopRequireDefault(_debounce);

        var _smoothScrollbar = require('smooth-scrollbar');

        var _smoothScrollbar2 = _interopRequireDefault(_smoothScrollbar);

        var _is = require('../utils/is');

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        } // ==========================================================================
        // Locomotive Smooth Scroll
        // ==========================================================================
        /* jshint esnext: true */


        /**
         * Smooth scrolling using `smooth-scrollbar`.
         * Based on `Scroll` class, which allows animations of elements on the page
         * according to scroll position.
         *
         * @todo  Method to get the distance (as percentage) of an element in the viewport
         */
        var _class = function(_Scroll) {
            _inherits(_class, _Scroll);

            function _class(options) {
                _classCallCheck(this, _class);

                var _this = _possibleConstructorReturn(this, _Scroll.call(this, options));

                _this.isReversed = options.reversed || _Scroll2.Defaults.reversed;
                _this.getWay = options.getWay || _Scroll2.Defaults.getWay;
                _this.getSpeed = options.getSpeed || _Scroll2.Defaults.getSpeed;

                _this.parallaxElements = [];

                if (_this.getSpeed) {
                    _this.scroll.speed = 0;
                }

                return _this;
            }

            /**
             * Initialize scrolling animations
             */


            _class.prototype.init = function init() {
                var _this2 = this;

                setTimeout(function() {
                    // Add class to the document to know if SmoothScroll is initialized (to manage overflow on containers)
                    _environment.$html.addClass('has-smooth-scroll');

                    _this2.scrollbar = _smoothScrollbar2.default.init(_this2.$container[0], {
                        syncCallbacks: true
                    });

                    _this2.scrollbarStatus = undefined;

                    _this2.setScrollbarLimit();

                    _this2.setWheelDirection(_this2.isReversed);

                    _this2.addElements();

                    _this2.renderAnimations(true);

                    // On scroll
                    _this2.scrollbar.addListener(function(status) {
                        return _this2.renderAnimations(false, status);
                    });

                    // Rebuild event
                    _this2.$container.on(_Scroll2.Event.REBUILD, function() {
                        _this2.scrollbar.scrollTo(0, 0, 0);
                        _this2.updateElements();
                    });

                    // Update event
                    _this2.$container.on(_Scroll2.Event.UPDATE, function(event, options) {
                        return _this2.updateElements(options);
                    });

                    // Render event
                    _this2.$container.on(_Scroll2.Event.RENDER, function() {
                        return _this2.renderAnimations(false);
                    });

                    // Scrollto button event
                    _this2.$container.on(_Scroll2.Event.CLICK, '.js-scrollto', function(event) {
                        event.preventDefault();

                        var $target = $(event.currentTarget);
                        var offset = $target.data('offset');

                        _this2.scrollTo({
                            sourceElem: $target,
                            offsetElem: offset
                        });
                    });

                    _this2.$container.on(_Scroll2.Event.SCROLLTO, function(event) {
                        return _this2.scrollTo(event.options);
                    });

                    // Setup done
                    _environment.$document.triggerHandler({
                        type: _Scroll2.Event.ISREADY
                    });
                }, 500);
                // Resize event
                _environment.$window.on(_Scroll2.Event.RESIZE, (0, _debounce2.default)(function() {
                    _this2.updateElements();
                }, 20));
            };

            /**
             * Reset existing elements and find all animatable elements.
             * Called on page load and any subsequent updates.
             */


            _class.prototype.addElements = function addElements() {
                this.animatedElements = [];
                this.parallaxElements = [];

                var $elements = $(this.selector);
                var len = $elements.length;
                var i = 0;

                for (; i < len; i++) {
                    var $element = $elements.eq(i);
                    var elementSpeed = (0, _is.isNumeric)($element.attr('data-speed')) ? $element.attr('data-speed') / 10 : false;
                    var elementPosition = $element.attr('data-position');
                    var elementTarget = $element.attr('data-target');
                    var elementHorizontal = $element.attr('data-horizontal');
                    var elementSticky = typeof $element.attr('data-sticky') === 'string';
                    var elementStickyTarget = $element.attr('data-sticky-target');
                    var $target = elementTarget && $(elementTarget).length ? $(elementTarget) : $element;
                    var elementOffset = $target.offset().top + this.scrollbar.scrollTop;
                    var elementLimit = elementOffset + $target.outerHeight();

                    var elementViewportOffset = null;
                    if (typeof $element.attr('data-viewport-offset') === 'string') {
                        elementViewportOffset = $element.attr('data-viewport-offset').split(',');
                    }

                    //Manage callback
                    var elementCallbackString = typeof $element.attr('data-callback') === 'string' ? $element.attr('data-callback') : null;
                    var elementCallback = null;

                    if (elementCallbackString != null) {
                        var event = elementCallbackString.substr(0, elementCallbackString.indexOf('('));
                        var optionsString = elementCallbackString.substr(elementCallbackString.indexOf('('), elementCallbackString.length - event.length);

                        optionsString = optionsString.replace('(', '');
                        optionsString = optionsString.replace(')', '');

                        var options = optionsString.split('|');

                        var obj = {};

                        for (var j = 0; j < options.length; j++) {

                            var option = options[j].split(':');
                            option[0] = option[0].replace(' ', '');

                            var val = void 0;
                            //check if value is a boolean
                            if (option[1] === "true") {
                                val = true;
                            } else if (option[1] === "false") {
                                val = false;
                            }
                            //check if value is numeric
                            else if (/^\d+$/.test(option[1])) {
                                val = parseInt(option[1]);
                            }
                            //check if value is a String
                            else {
                                val = option[1];
                            }
                            obj[option[0]] = val;
                        }

                        elementCallback = {
                            event: event,
                            options: obj
                        };
                    }

                    // If elements stays visible after scrolling past it
                    var elementRepeat = typeof $element.attr('data-repeat') === 'string';

                    var elementInViewClass = $element.attr('data-inview-class');
                    if (typeof elementInViewClass === 'undefined') {
                        elementInViewClass = 'is-show';
                    }

                    if (!elementTarget && $element.attr('data-transform')) {
                        elementOffset -= parseFloat($element.attr('data-transform').y);
                    }

                    if (elementSticky) {
                        if (typeof elementStickyTarget === 'undefined') {
                            elementLimit = Infinity;
                        } else {
                            elementLimit = $(elementStickyTarget).offset().top - $element.height() + this.scrollbar.scrollTop;
                        }
                    }

                    var newElement = {
                        $element: $element,
                        inViewClass: elementInViewClass,
                        limit: elementLimit,
                        offset: Math.round(elementOffset),
                        repeat: elementRepeat,
                        callback: elementCallback,
                        viewportOffset: elementViewportOffset
                    };

                    // For parallax animated elements
                    if (elementSpeed !== false) {
                        var _elementPosition = $element.attr('data-position');
                        var _elementHorizontal = $element.attr('data-horizontal');
                        var elementMiddle = (elementLimit - elementOffset) / 2 + elementOffset;

                        newElement.horizontal = _elementHorizontal;
                        newElement.middle = elementMiddle;
                        newElement.offset = elementOffset;
                        newElement.position = _elementPosition;
                        newElement.speed = elementSpeed;

                        this.parallaxElements.push(newElement);
                    } else {
                        newElement.sticky = elementSticky;

                        this.animatedElements.push(newElement);

                        // @todo Useful?
                        // Don't add element if it already has its in view class and doesn't repeat
                        // if (elementRepeat || !$element.hasClass(elementInViewClass)) {
                        //     this.animatedElements.push(newElement);
                        // }

                        if (elementSticky) {
                            //launch the toggle function to set the position of the sticky element
                            this.toggleElement(newElement);
                        }
                    }
                };
            };

            /**
             * Render the class/transform animations, and update the global scroll positionning.
             *
             * @param  {boolean} isFirstCall Determines if this is the first occurence of method being called
             * @param  {object}  status      Optional status object received when method is
             *                               called by smooth-scrollbar instance listener.
             * @return {void}
             */


            _class.prototype.renderAnimations = function renderAnimations(isFirstCall, status) {
                if ((typeof status === 'undefined' ? 'undefined' : _typeof(status)) === 'object') {
                    this.scrollbarStatus = status;
                }

                var scrollbarTop = this.scrollbar.scrollTop;

                if (this.getWay) {
                    if (scrollbarTop > this.scroll.y) {
                        if (this.scroll.direction !== 'down') {
                            this.scroll.direction = 'down';
                        }
                    } else if (scrollbarTop < this.scroll.y) {
                        if (this.scroll.direction !== 'up') {
                            this.scroll.direction = 'up';
                        }
                    }
                }

                if (this.getSpeed) {
                    if (this.scroll.y !== scrollbarTop) {
                        this.scroll.speed = this.scrollbar.movement.y;
                        this.scroll.y = scrollbarTop;
                    } else {
                        this.scroll.speed = 0;
                    }
                }

                if (this.scroll.y !== scrollbarTop) {
                    this.scroll.y = scrollbarTop;
                }

                this.transformElements(isFirstCall);
                this.animateElements();
            };

            /**
             * Scroll to a desired target.
             *
             * @param  {object} options
             * @return {void}
             */


            _class.prototype.scrollTo = function scrollTo(options) {
                var _this3 = this;

                var $targetElem = options.targetElem;
                var $sourceElem = options.sourceElem;
                var offsetElem = options.offsetElem;
                var targetOffset = (0, _is.isNumeric)(options.targetOffset) ? parseInt(options.targetOffset) : 0;
                var delay = (0, _is.isNumeric)(options.delay) ? parseInt(options.delay) : 0;
                var speed = (0, _is.isNumeric)(options.speed) ? parseInt(options.speed) : 900;
                var toTop = options.toTop;
                var toBottom = options.toBottom;
                var offset = 0;

                if (typeof $targetElem === 'undefined' && typeof $sourceElem === 'undefined' && typeof targetOffset === 'undefined') {
                    console.warn('You must specify at least one parameter.');
                    return false;
                }

                if (typeof $targetElem !== 'undefined' && $targetElem instanceof jQuery && $targetElem.length > 0) {
                    targetOffset = $targetElem.offset().top + this.scrollbar.scrollTop + targetOffset;
                }

                if (typeof $sourceElem !== 'undefined' && $sourceElem instanceof jQuery && $sourceElem.length > 0) {
                    var targetData = '';

                    if ($sourceElem.attr('data-target')) {
                        targetData = $sourceElem.attr('data-target');
                    } else {
                        targetData = $sourceElem.attr('href');
                    }

                    targetOffset = $(targetData).offset().top + this.scrollbar.scrollTop + targetOffset;
                }

                if (typeof offsetElem !== 'undefined') {
                    offset = $(offsetElem).outerHeight();
                    targetOffset = targetOffset - offset;
                }

                if (toTop === true) {
                    targetOffset = 0;
                } else if (toBottom === true) {
                    targetOffset = this.scrollbar.limit.y;
                }

                setTimeout(function() {
                    _this3.scrollbar.scrollTo(0, targetOffset, speed);
                }, delay);
            };

            /**
             * Set the scroll bar limit
             */


            _class.prototype.setScrollbarLimit = function setScrollbarLimit() {
                this.scrollbarLimit = this.scrollbar.limit.y + this.windowHeight;
            };

            /**
             * Apply CSS transform properties on an element.
             *
             * @param  {object}  $element Targetted jQuery element
             * @param  {int}     x        Translate value
             * @param  {int}     y        Translate value
             * @param  {int}     z        Translate value
             * @return {void}
             */


            _class.prototype.transformElement = function transformElement($element, x, y, z) {
                // Defaults
                x = x || 0;
                y = y || 0;
                z = z || 0;

                // Translate and store the positionning as `data`
                $element.css({
                    '-webkit-transform': 'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)',
                    '-ms-transform': 'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)',
                    'transform': 'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)'
                }).data('transform', {
                    x: x,
                    y: y,
                    z: z
                });

                // Affect child elements with the same positionning
                // const children = $element.find(this.selector);
                // const len = children.length;
                // let i = 0;
                // for (; i < len; i++) {
                //     let $child = $(children[i]);
                //     if (!$child.data('transform')) {
                //         $child.data('transform', {
                //             x: x,
                //             y: y,
                //             z: z
                //         })
                //     }
                // };
            };

            /**
             * Loop through all parallax-able elements and apply transform method(s).
             *
             * @param  {boolean} isFirstCall Determines if this is the first occurence of method being called
             * @return {void}
             */


            _class.prototype.transformElements = function transformElements(isFirstCall) {
                if (this.parallaxElements.length > 0) {
                    var scrollbarBottom = this.scrollbar.scrollTop + this.windowHeight;
                    var scrollbarMiddle = this.scrollbar.scrollTop + this.windowMiddle;

                    var i = 0;
                    var len = this.parallaxElements.length;
                    var removeIndexes = [];

                    for (; i < len; i++) {
                        var curEl = this.parallaxElements[i];
                        // Old
                        var scrollBottom = scrollbarBottom;
                        // New
                        // let scrollBottom = (curEl.position === 'top') ? this.scrollbar.scrollTop : scrollbarBottom;

                        var transformDistance = false;

                        // Define if the element is in view
                        // Old
                        var inView = scrollBottom >= curEl.offset && this.scroll.y <= curEl.limit;
                        // New
                        // let inView = (scrollBottom >= curEl.offset && this.scrollbar.scrollTop <= curEl.limit);

                        this.toggleElement(curEl, i);

                        if (isFirstCall && !inView && curEl.speed) {
                            // Different calculations if it is the first call and the item is not in the view
                            if (curEl.position !== 'top') {
                                transformDistance = (curEl.offset - this.windowMiddle - curEl.middle) * -curEl.speed;
                            }
                        }

                        // If element is in view
                        if (inView && curEl.speed) {
                            switch (curEl.position) {
                                case 'top':
                                    // Old
                                    transformDistance = this.scrollbar.scrollTop * -curEl.speed;
                                    // New
                                    // transformDistance = (this.scrollbar.scrollTop - curEl.offset) * -curEl.speed;
                                    break;

                                case 'bottom':
                                    transformDistance = (this.scrollbarLimit - scrollBottom) * curEl.speed;
                                    break;

                                default:
                                    transformDistance = (scrollbarMiddle - curEl.middle) * -curEl.speed;
                                    break;
                            }
                        }

                        // Transform horizontal OR vertical. Defaults to vertical
                        if ((0, _is.isNumeric)(transformDistance)) {
                            curEl.horizontal ? this.transformElement(curEl.$element, transformDistance) : this.transformElement(curEl.$element, 0, transformDistance);
                        }
                    }
                }
            };

            /**
             * Update elements and recalculate all the positions on the page
             *
             * @param {object} options
             */


            _class.prototype.updateElements = function updateElements(options) {
                options = options || {};

                this.scrollbar.update();
                this.windowHeight = _environment.$window.height();
                this.windowMiddle = this.windowHeight / 2;
                this.setScrollbarLimit();
                this.setWheelDirection(this.isReversed);
                this.addElements();
                this.transformElements(true);

                if (typeof options.callback === 'function') {
                    options.callback();
                }

                this.renderAnimations(false, status);
            };

            /**
             * Set smooth-scrollbar scrolling direction for wheel event
             * @param {Boolean} isReversed
             */


            _class.prototype.setWheelDirection = function setWheelDirection(isReversed) {}
            //this.scrollbar.reverseWheel(isReversed);


            /**
             * Destroy
             */
            ;

            _class.prototype.destroy = function destroy() {
                _Scroll.prototype.destroy.call(this);
                _environment.$html.removeClass('has-smooth-scroll');
                this.parallaxElements = [];
                this.scrollbar.destroy();
            };

            return _class;
        }(_Scroll3.default);

        exports.default = _class;

    }, {
        "../utils/debounce": 29,
        "../utils/environment": 30,
        "../utils/is": 32,
        "./Scroll": 14,
        "smooth-scrollbar": 1
    }],
    19: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _environment = require('../utils/environment');

        var _AbstractModule2 = require('./AbstractModule');

        var _AbstractModule3 = _interopRequireDefault(_AbstractModule2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        } /* jshint esnext: true */


        var DATA_KEY = _environment.APP_NAME + '.SplitTextLines';
        var EVENT_KEY = '.' + DATA_KEY;

        var Event = {
            CLICK: 'click' + EVENT_KEY
        };

        var _class = function(_AbstractModule) {
            _inherits(_class, _AbstractModule);

            function _class(options) {
                _classCallCheck(this, _class);

                return _possibleConstructorReturn(this, _AbstractModule.call(this, options));
            }

            _class.prototype.init = function init() {
                var _this2 = this;

                setTimeout(function() {
                    _this2.splitLine = new SplitText(_this2.el, {
                        type: 'lines'
                    });
                }, 1000);
            };

            _class.prototype.destroy = function destroy() {
                //this.$el.off(EVENT_KEY);
            };

            return _class;
        }(_AbstractModule3.default);

        exports.default = _class;

    }, {
        "../utils/environment": 30,
        "./AbstractModule": 5
    }],
    20: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _environment = require('../utils/environment');

        var _AbstractModule2 = require('./AbstractModule');

        var _AbstractModule3 = _interopRequireDefault(_AbstractModule2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        } /* jshint esnext: true */


        var DATA_KEY = _environment.APP_NAME + '.SplitTextWords';
        var EVENT_KEY = '.' + DATA_KEY;

        var Event = {
            CLICK: 'click' + EVENT_KEY
        };

        var _class = function(_AbstractModule) {
            _inherits(_class, _AbstractModule);

            function _class(options) {
                _classCallCheck(this, _class);

                return _possibleConstructorReturn(this, _AbstractModule.call(this, options));
            }

            _class.prototype.init = function init() {
                this.splitLine = new SplitText(this.el, {
                    type: 'words'
                });
            };

            _class.prototype.destroy = function destroy() {
                //this.$el.off(EVENT_KEY);
            };

            return _class;
        }(_AbstractModule3.default);

        exports.default = _class;

    }, {
        "../utils/environment": 30,
        "./AbstractModule": 5
    }],
    21: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.DEFAULTS = exports.EVENT = exports.EVENT_KEY = undefined;

        var _Scroll2 = require('./vendors/Scroll');

        var _Scroll3 = _interopRequireDefault(_Scroll2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        } // ==========================================================================
        // Extended Locomotive Scroll
        // ==========================================================================
        /* jshint esnext: true */


        /**
         * UNCOMMENT ONLY THE LINES YOU NEED
         */
        // import { $window, $document } from '../../utils/environment';
        // import debounce from '../../utils/debounce';
        // import { isNumeric } from '../../utils/is';

        var EVENT_KEY = exports.EVENT_KEY = _Scroll2.EVENT_KEY;

        var EVENT = exports.EVENT = Object.assign(_Scroll2.EVENT, {
            // TEST: `test.${EVENT_KEY}`
        });

        var DEFAULTS = exports.DEFAULTS = Object.assign(_Scroll2.DEFAULTS, {
            getWay: true
        });

        var _class = function(_Scroll) {
            _inherits(_class, _Scroll);

            function _class(options) {
                _classCallCheck(this, _class);

                var _this = _possibleConstructorReturn(this, _Scroll.call(this, options));

                _this.$timelineValue = $('.js-timeline-value');
                return _this;
            }

            return _class;
        }(_Scroll3.default);

        exports.default = _class;

    }, {
        "./vendors/Scroll": 23
    }],
    22: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };

        var _environment = require('../utils/environment');

        var _SmoothScroll2 = require('./vendors/SmoothScroll');

        var _SmoothScroll3 = _interopRequireDefault(_SmoothScroll2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        } // ==========================================================================
        // Extended Locomotive Smooth Scroll
        // ==========================================================================
        /* jshint esnext: true */


        /**
         * UNCOMMENT ONLY THE LINES YOU NEED
         */
        // import { $window, $document, $html } from '../utils/environment';
        // import Scroll, { DEFAULTS, EVENT } from './Scroll';

        // import debounce from '../utils/debounce';
        // import Scrollbar from 'smooth-scrollbar';
        // import { isNumeric } from '../utils/is';

        var _class = function(_SmoothScroll) {
            _inherits(_class, _SmoothScroll);

            function _class(options) {
                _classCallCheck(this, _class);

                return _possibleConstructorReturn(this, _SmoothScroll.call(this, options));
            }

            _class.prototype.renderAnimations = function renderAnimations(isFirstCall, status) {
                if ((typeof status === 'undefined' ? 'undefined' : _typeof(status)) === 'object') {
                    this.scrollbarStatus = status;
                }

                var scrollbarTop = this.scrollbar.scrollTop;

                if (this.getWay) {
                    if (scrollbarTop > this.scroll.y) {
                        if (this.scroll.direction !== 'down') {
                            this.scroll.direction = 'down';
                        }
                    } else if (scrollbarTop < this.scroll.y) {
                        if (this.scroll.direction !== 'up') {
                            this.scroll.direction = 'up';
                        }
                    }
                    _environment.$html.attr('data-way', this.scroll.direction);
                }

                if (this.getSpeed) {
                    if (this.scroll.y !== scrollbarTop) {
                        this.scroll.speed = this.scrollbar.movement.y;
                        this.scroll.y = scrollbarTop;
                    } else {
                        this.scroll.speed = 0;
                    }
                }

                if (this.scroll.y !== scrollbarTop) {
                    this.scroll.y = scrollbarTop;
                }

                this.$timelineValue.css({
                    'height': 100 * this.scroll.y / this.scrollbar.limit.y + '%'
                });

                this.transformElements(isFirstCall);
                this.animateElements();
            };

            return _class;
        }(_SmoothScroll3.default);

        exports.default = _class;

    }, {
        "../utils/environment": 30,
        "./vendors/SmoothScroll": 25
    }],
    23: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.DEFAULTS = exports.EVENT = exports.EVENT_KEY = undefined;

        var _environment = require('../../utils/environment');

        var _debounce = require('../../utils/debounce');

        var _debounce2 = _interopRequireDefault(_debounce);

        var _is = require('../../utils/is');

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        } // ==========================================================================
        // Locomotive Scroll
        // ==========================================================================
        /* jshint esnext: true */


        var EVENT_KEY = exports.EVENT_KEY = 'LocomotiveScroll';

        var EVENT = exports.EVENT = {
            CLICK: 'click.' + EVENT_KEY,
            ISREADY: 'isReady.' + EVENT_KEY,
            REBUILD: 'rebuild.' + EVENT_KEY,
            RENDER: 'render.' + EVENT_KEY,
            RESIZE: 'resize.' + EVENT_KEY,
            SCROLL: 'scroll.' + EVENT_KEY,
            SCROLLTO: 'scrollTo.' + EVENT_KEY,
            UPDATE: 'update.' + EVENT_KEY
        };

        var DEFAULTS = exports.DEFAULTS = {
            container: _environment.$document,
            mobileContainer: _environment.$document,
            onScroll: function onScroll() {},
            selector: '.js-animate',
            smooth: false,
            smoothMobile: false,
            reversed: false,
            getWay: false,
            getSpeed: false
        };

        /**
         * Manage animation of elements on the page according to scroll position.
         *
         * @todo  Manage some options (normally from data attributes) with constructor options (ex.: set repeat for all)
         * @todo  Method to get the distance (as percentage) of an element in the viewport
         */

        var _class = function() {
            function _class(options) {
                _classCallCheck(this, _class);

                this.$container = options.container ? options.container : DEFAULTS.container;
                this.selector = options.selector ? options.selector : DEFAULTS.selector;

                this.callbacks = {
                    onScroll: typeof options.onScroll === 'function' ? options.onScroll : DEFAULTS.onScroll
                };

                this.scroll = {
                    x: 0,
                    y: 0,
                    direction: ''
                };

                this.windowHeight = _environment.$window.height();
                this.windowMiddle = this.windowHeight / 2;

                this.animatedElements = [];

                this.requestId = undefined;
            }

            /**
             * Initialize scrolling animations
             */


            _class.prototype.init = function init() {
                var _this = this;

                this.addElements();

                this.renderAnimations();

                // On scroll
                this.$container.on(EVENT.SCROLL, function() {
                    _this.renderAnimations();
                });

                // Rebuild event
                this.$container.on(EVENT.REBUILD, function() {
                    _this.scrollTo({
                        targetOffset: 0
                    });
                    _this.updateElements();
                });

                // Update event
                this.$container.on(EVENT.UPDATE, function(event, options) {
                    return _this.updateElements(options);
                });

                // Render event
                this.$container.on(EVENT.RENDER, function() {
                    return _this.renderAnimations();
                });

                // Scrollto button event
                this.$container.on(EVENT.CLICK, '.js-scrollto', function(event) {
                    event.preventDefault();

                    var $target = $(event.currentTarget);
                    var offset = $target.data('offset');

                    _this.scrollTo({
                        sourceElem: $target,
                        offsetElem: offset
                    });
                });
                this.$container.on(EVENT.SCROLLTO, function(event) {
                    return _this.scrollTo(event.options);
                });

                // Setup done
                _environment.$document.triggerHandler({
                    type: EVENT.ISREADY
                });

                // Resize event
                _environment.$window.on(EVENT.RESIZE, (0, _debounce2.default)(function() {
                    _this.updateElements();
                }, 20));
            };

            /**
             * Find all animatable elements.
             * Called on page load and any subsequent updates.
             */


            _class.prototype.addElements = function addElements() {
                this.animatedElements = [];

                var $elements = $(this.selector);
                var len = $elements.length;
                var i = 0;

                for (; i < len; i++) {
                    var $element = $elements.eq(i);
                    var elementTarget = $element.attr('data-target');
                    var elementPosition = $element.attr('data-position');
                    var $target = elementTarget && $(elementTarget).length ? $(elementTarget) : $element;
                    var elementOffset = $target.offset().top;
                    var elementLimit = elementOffset + $target.outerHeight();
                    var elementSticky = typeof $element.attr('data-sticky') === 'string';
                    var elementStickyTarget = $element.attr('data-sticky-target');

                    var elementViewportOffset = null;
                    if (typeof $element.attr('data-viewport-offset') === 'string') {
                        elementViewportOffset = $element.attr('data-viewport-offset').split(',');
                    }
                    //Manage callback
                    var elementCallbackString = typeof $element.attr('data-callback') === 'string' ? $element.attr('data-callback') : null;
                    var elementCallback = null;

                    if (elementCallbackString != null) {
                        var event = elementCallbackString.substr(0, elementCallbackString.indexOf('('));
                        var optionsString = elementCallbackString.substr(elementCallbackString.indexOf('('), elementCallbackString.length - event.length);

                        optionsString = optionsString.replace('(', '');
                        optionsString = optionsString.replace(')', '');

                        var options = optionsString.split('|');

                        var obj = {};

                        for (var j = 0; j < options.length; j++) {

                            var option = options[j].split(':');
                            option[0] = option[0].replace(' ', '');

                            var val = void 0;
                            //check if value is a boolean
                            if (option[1] === "true") {
                                val = true;
                            } else if (option[1] === "false") {
                                val = false;
                            }
                            //check if value is numeric
                            else if (/^\d+$/.test(option[1])) {
                                val = parseInt(option[1]);
                            }
                            //check if value is a String
                            else {
                                val = option[1];
                            }
                            obj[option[0]] = val;
                        }

                        elementCallback = {
                            event: event,
                            options: obj
                        };
                    }

                    // If elements loses its animation after scrolling past it
                    var elementRepeat = typeof $element.attr('data-repeat') === 'string';

                    var elementInViewClass = $element.attr('data-inview-class');
                    if (typeof elementInViewClass === 'undefined') {
                        elementInViewClass = 'is-show';
                    }

                    if (elementSticky) {
                        if (typeof elementStickyTarget === 'undefined') {
                            elementLimit = this.$container.height();
                        } else {
                            elementLimit = $(elementStickyTarget).offset().top - $element.height();
                        }

                        // Reset offset
                        $element.removeClass(elementInViewClass);
                        $element.removeClass('is-unstuck');

                        $element.css({
                            '-webkit-transform': 'translate3d(0, 0, 0)',
                            '-ms-transform': 'translate3d(0, 0, 0)',
                            'transform': 'translate3d(0, 0, 0)'
                        });
                    }

                    // Don't add element if it already has its inview class and doesn't repeat
                    if (elementRepeat || !$element.hasClass(elementInViewClass)) {
                        this.animatedElements[i] = {
                            $element: $element,
                            offset: Math.round(elementOffset),
                            repeat: elementRepeat,
                            position: elementPosition,
                            limit: elementLimit,
                            inViewClass: elementInViewClass,
                            sticky: elementSticky,
                            callback: elementCallback,
                            viewportOffset: elementViewportOffset
                        };
                    }
                };
            };

            /**
             * Loop through all animatable elements and apply animation method(s).
             */


            _class.prototype.animateElements = function animateElements() {
                var len = this.animatedElements.length;
                var removeIndexes = [];
                var i = 0;
                for (; i < len; i++) {
                    var element = this.animatedElements[i];

                    // If the element's visibility must not be manipulated any further, remove it from the list
                    if (this.toggleElement(element, i)) {
                        removeIndexes.push(i);
                    }
                }

                // Remove animated elements after looping through elements
                i = removeIndexes.length;
                while (i--) {
                    this.animatedElements.splice(removeIndexes[i], 1);
                }
            };

            /**
             * Render the class animations, and update the global scroll positionning.
             */


            _class.prototype.renderAnimations = function renderAnimations() {
                // if (window.pageYOffset > this.scroll.y) {
                //     if (this.scroll.direction !== 'down') {
                //         this.scroll.direction = 'down';
                //     }
                // } else if (window.pageYOffset < this.scroll.y) {
                //     if (this.scroll.direction !== 'up') {
                //         this.scroll.direction = 'up';
                //     }
                // }

                if (this.scroll.y !== window.pageYOffset) {
                    this.scroll.y = window.pageYOffset;
                }
                if (this.scroll.x !== window.pageXOffset) {
                    this.scroll.x = window.pageXOffset;
                }

                this.callbacks.onScroll(this.scroll);

                this.animateElements();
            };

            /**
             * Toggle classes on an element if it's visible.
             *
             * @param  {object}      element Current element to test
             * @param  {int}         index   Index of the element within it's container
             * @return {boolean}             Wether the item must be removed from its container
             */


            _class.prototype.toggleElement = function toggleElement(element, index) {
                var removeFromContainer = false;

                if (typeof element !== 'undefined') {
                    // Find the bottom edge of the scroll container
                    var scrollTop = this.scroll.y;
                    var scrollBottom = scrollTop + this.windowHeight;

                    // Define if the element is inView
                    var inView = false;

                    if (element.position === 'top') {
                        inView = scrollTop >= element.offset && scrollTop <= element.limit;
                    } else if (element.position === 'below') {
                        inView = scrollTop > element.limit;
                    } else if (element.sticky) {
                        inView = scrollTop >= element.offset && scrollTop <= element.limit;
                    } else if (element.viewportOffset != undefined) {
                        if (element.viewportOffset.length > 1) {
                            var scrollViewportOffsetTop = scrollTop + this.windowHeight * element.viewportOffset[1];
                            var scrollViewportOffsetBottom = scrollBottom - this.windowHeight * element.viewportOffset[0];
                            inView = scrollViewportOffsetBottom > element.offset && scrollViewportOffsetTop < element.limit;
                        } else {
                            var scrollViewportOffset = scrollBottom - this.windowHeight * element.viewportOffset[0];
                            inView = scrollViewportOffset > element.offset && scrollViewportOffset < element.limit;
                        }
                    } else {
                        inView = scrollBottom >= element.offset && scrollTop <= element.limit;
                    }

                    if (element.sticky) {
                        if (scrollTop > element.limit) {
                            element.$element.addClass('is-unstuck');
                        } else {
                            element.$element.removeClass('is-unstuck');
                        }

                        if (scrollTop < element.offset) {
                            element.$element.removeClass(element.inViewClass);
                        }
                    }

                    // Add class if inView, remove if not
                    if (inView) {
                        if (!element.$element.hasClass(element.inViewClass)) {
                            element.$element.addClass(element.inViewClass);
                            this.triggerCallback(element, 'enter');
                        }

                        if (!element.repeat && !element.sticky) {
                            removeFromContainer = true;
                        }

                        if (element.sticky) {
                            var y = this.scroll.y - element.offset;

                            element.$element.css({
                                '-webkit-transform': 'translate3d(0, ' + y + 'px, 0)',
                                '-ms-transform': 'translate3d(0, ' + y + 'px, 0)',
                                'transform': 'translate3d(0, ' + y + 'px, 0)'
                            });
                        }
                    } else {
                        if (element.repeat) {
                            if (element.$element.hasClass(element.inViewClass)) {
                                element.$element.removeClass(element.inViewClass);
                                this.triggerCallback(element, 'leave');
                            }
                        }
                    }
                }

                return removeFromContainer;
            };

            /**
             * check if the element have a callback, and trigger the event set in the data-callback
             *
             * @param  {object}      element Current element to test
             * @return void
             */


            _class.prototype.triggerCallback = function triggerCallback(element, way) {

                if (element.callback != undefined) {
                    element.$element.trigger({
                        type: element.callback.event,
                        options: element.callback.options,
                        way: way
                    });
                    //add this where you want dude (in your module btw)
                    // $document.on(eventName.Namespace,(e)=>{
                    //     console.log(e.options, e.way);
                    // });
                    /////////////////////////////////////////////
                }
            };

            /**
             * Scroll to a desired target.
             *
             * @param  {object} options
             * @return {void}
             */


            _class.prototype.scrollTo = function scrollTo(options) {
                var $targetElem = options.targetElem;
                var $sourceElem = options.sourceElem;
                var offsetElem = options.offsetElem;
                var targetOffset = (0, _is.isNumeric)(options.targetOffset) ? parseInt(options.targetOffset) : 0;
                var speed = (0, _is.isNumeric)(options.speed) ? parseInt(options.speed) : 800;
                var delay = (0, _is.isNumeric)(options.delay) ? parseInt(options.delay) : 0;
                var toTop = options.toTop;
                var toBottom = options.toBottom;
                var offset = 0;

                if (typeof $targetElem === 'undefined' && typeof $sourceElem === 'undefined' && typeof targetOffset === 'undefined') {
                    console.warn('You must specify at least one parameter.');
                    return false;
                }

                if (typeof $targetElem !== 'undefined' && $targetElem instanceof jQuery && $targetElem.length > 0) {
                    targetOffset = $targetElem.offset().top + targetOffset;
                }

                if (typeof $sourceElem !== 'undefined' && $sourceElem instanceof jQuery && $sourceElem.length > 0) {
                    var targetData = '';

                    if ($sourceElem.attr('data-target')) {
                        targetData = $sourceElem.attr('data-target');
                    } else {
                        targetData = $sourceElem.attr('href');
                    }

                    targetOffset = $(targetData).offset().top + targetOffset;
                }

                if (typeof offsetElem !== 'undefined') {
                    offset = $(offsetElem).outerHeight();
                    targetOffset = targetOffset - offset;
                }

                if (toTop === true) {
                    targetOffset = 0;
                } else if (toBottom === true) {
                    targetOffset = _environment.$document.height();
                }

                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: targetOffset
                    }, speed);
                }, delay);
            };

            /**
             * Update elements and recalculate all the positions on the page
             */


            _class.prototype.updateElements = function updateElements() {
                this.addElements();
                this.animateElements();

                this.windowHeight = _environment.$window.height();
                this.windowMiddle = this.windowHeight / 2;
            };

            /**
             * Destroy
             */


            _class.prototype.destroy = function destroy() {
                _environment.$window.off('.' + EVENT_KEY);
                this.$container.off('.' + EVENT_KEY);
                window.cancelAnimationFrame(this.requestId);
                this.requestId = undefined;
                this.animatedElements = undefined;
            };

            return _class;
        }();

        exports.default = _class;

    }, {
        "../../utils/debounce": 29,
        "../../utils/environment": 30,
        "../../utils/is": 32
    }],
    24: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _environment = require('../../utils/environment');

        var _Scroll = require('../Scroll');

        var _Scroll2 = _interopRequireDefault(_Scroll);

        var _SmoothScroll = require('../SmoothScroll');

        var _SmoothScroll2 = _interopRequireDefault(_SmoothScroll);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        } // ==========================================================================
        // Locomotive Scroll Manager
        // ==========================================================================
        /* jshint esnext: true */


        /**
         * Basic module that detects which scrolling module we'll be using
         */
        var _class = function() {
            function _class(options) {
                _classCallCheck(this, _class);

                this.options = options;
                this.smooth = options.smooth || _Scroll.DEFAULTS.smooth;
                this.smoothMobile = options.smoothMobile || _Scroll.DEFAULTS.smoothMobile;
                this.mobileContainer = options.mobileContainer || _Scroll.DEFAULTS.mobileContainer;
                this.isMobile = false;

                this.init();
            }

            _class.prototype.init = function init() {
                var _this = this;

                _environment.$html[0].scrollTop = 0;
                _environment.$body[0].scrollTop = 0;

                if (!this.smoothMobile) {
                    this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                }

                this.instance = function() {
                    if (_this.smooth === true && !_this.isMobile) {
                        return new _SmoothScroll2.default(_this.options);
                    } else {
                        if (_this.mobileContainer) {
                            _this.options.container = _this.mobileContainer;
                        }
                        return new _Scroll2.default(_this.options);
                    }
                }();

                this.instance.init();

                var $scrollToOnLoadEl = $('.js-scrollto-on-load').first();

                if ($scrollToOnLoadEl.length === 1) {
                    _environment.$document.triggerHandler({
                        type: 'Event.SCROLLTO',
                        options: {
                            targetElem: $scrollToOnLoadEl
                        }
                    });
                }
            };

            _class.prototype.destroy = function destroy() {
                this.instance.destroy();
            };

            return _class;
        }();

        exports.default = _class;

    }, {
        "../../utils/environment": 30,
        "../Scroll": 21,
        "../SmoothScroll": 22
    }],
    25: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };

        var _environment = require('../../utils/environment');

        var _Scroll2 = require('../Scroll');

        var _Scroll3 = _interopRequireDefault(_Scroll2);

        var _debounce = require('../../utils/debounce');

        var _debounce2 = _interopRequireDefault(_debounce);

        var _smoothScrollbar = require('smooth-scrollbar');

        var _smoothScrollbar2 = _interopRequireDefault(_smoothScrollbar);

        var _is = require('../../utils/is');

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        } // ==========================================================================
        // Locomotive Smooth Scroll
        // ==========================================================================
        /* jshint esnext: true */


        /**
         * Smooth scrolling using `smooth-scrollbar`.
         * Based on `Scroll` class, which allows animations of elements on the page
         * according to scroll position.
         *
         * @todo  Method to get the distance (as percentage) of an element in the viewport
         */
        var _class = function(_Scroll) {
            _inherits(_class, _Scroll);

            function _class(options) {
                _classCallCheck(this, _class);

                var _this = _possibleConstructorReturn(this, _Scroll.call(this, options));

                _this.isReversed = options.reversed || _Scroll2.DEFAULTS.reversed;
                _this.getWay = options.getWay || _Scroll2.DEFAULTS.getWay;
                _this.getSpeed = options.getSpeed || _Scroll2.DEFAULTS.getSpeed;

                _this.parallaxElements = [];

                if (_this.getSpeed) {
                    _this.scroll.speed = 0;
                }

                return _this;
            }

            /**
             * Initialize scrolling animations
             */


            _class.prototype.init = function init() {
                var _this2 = this;

                // Add class to the document to know if SmoothScroll is initialized (to manage overflow on containers)
                _environment.$html.addClass('has-smooth-scroll');

                this.scrollbar = _smoothScrollbar2.default.init(this.$container[0], {
                    syncCallbacks: true
                });

                this.scrollbarStatus = undefined;

                this.setScrollbarLimit();

                this.setWheelDirection(this.isReversed);

                this.addElements();

                this.renderAnimations(true);

                // On scroll
                this.scrollbar.addListener(function(status) {
                    return _this2.renderAnimations(false, status);
                });

                // Rebuild event
                this.$container.on(_Scroll2.EVENT.REBUILD, function() {
                    _this2.scrollbar.scrollTo(0, 0, 1);
                    _this2.updateElements();
                });

                // Update event
                this.$container.on(_Scroll2.EVENT.UPDATE, function(event, options) {
                    return _this2.updateElements(options);
                });

                // Render event
                this.$container.on(_Scroll2.EVENT.RENDER, function() {
                    return _this2.renderAnimations(false);
                });

                // Scrollto button event
                this.$container.on(_Scroll2.EVENT.CLICK, '.js-scrollto', function(event) {
                    event.preventDefault();

                    var $target = $(event.currentTarget);
                    var offset = $target.data('offset');

                    _this2.scrollTo({
                        sourceElem: $target,
                        offsetElem: offset
                    });
                });

                this.$container.on(_Scroll2.EVENT.SCROLLTO, function(event) {
                    return _this2.scrollTo(event.options);
                });

                // Setup done
                _environment.$document.triggerHandler({
                    type: _Scroll2.EVENT.ISREADY
                });

                // Resize event
                _environment.$window.on(_Scroll2.EVENT.RESIZE, (0, _debounce2.default)(function() {
                    _this2.updateElements();
                }, 20));
            };

            /**
             * Reset existing elements and find all animatable elements.
             * Called on page load and any subsequent updates.
             */


            _class.prototype.addElements = function addElements() {
                this.animatedElements = [];
                this.parallaxElements = [];

                var $elements = $(this.selector);
                var len = $elements.length;
                var i = 0;

                for (; i < len; i++) {
                    var $element = $elements.eq(i);
                    var elementSpeed = (0, _is.isNumeric)($element.attr('data-speed')) ? $element.attr('data-speed') / 10 : false;
                    var elementPosition = $element.attr('data-position');
                    var elementTarget = $element.attr('data-target');
                    var elementHorizontal = $element.attr('data-horizontal');
                    var elementSticky = typeof $element.attr('data-sticky') === 'string';
                    var elementStickyTarget = $element.attr('data-sticky-target');
                    var $target = elementTarget && $(elementTarget).length ? $(elementTarget) : $element;
                    var elementOffset = $target.offset().top + this.scrollbar.scrollTop;
                    var elementLimit = elementOffset + $target.outerHeight();

                    var elementViewportOffset = null;
                    if (typeof $element.attr('data-viewport-offset') === 'string') {
                        elementViewportOffset = $element.attr('data-viewport-offset').split(',');
                    }

                    //Manage callback
                    var elementCallbackString = typeof $element.attr('data-callback') === 'string' ? $element.attr('data-callback') : null;
                    var elementCallback = null;

                    if (elementCallbackString != null) {
                        var event = elementCallbackString.substr(0, elementCallbackString.indexOf('('));
                        var optionsString = elementCallbackString.substr(elementCallbackString.indexOf('('), elementCallbackString.length - event.length);

                        optionsString = optionsString.replace('(', '');
                        optionsString = optionsString.replace(')', '');

                        var options = optionsString.split('|');

                        var obj = {};

                        for (var j = 0; j < options.length; j++) {

                            var option = options[j].split(':');
                            option[0] = option[0].replace(' ', '');

                            var val = void 0;
                            //check if value is a boolean
                            if (option[1] === "true") {
                                val = true;
                            } else if (option[1] === "false") {
                                val = false;
                            }
                            //check if value is numeric
                            else if (/^\d+$/.test(option[1])) {
                                val = parseInt(option[1]);
                            }
                            //check if value is a String
                            else {
                                val = option[1];
                            }
                            obj[option[0]] = val;
                        }

                        elementCallback = {
                            event: event,
                            options: obj
                        };
                    }

                    // If elements stays visible after scrolling past it
                    var elementRepeat = typeof $element.attr('data-repeat') === 'string';

                    var elementInViewClass = $element.attr('data-inview-class');
                    if (typeof elementInViewClass === 'undefined') {
                        elementInViewClass = 'is-show';
                    }

                    if (!elementTarget && $element.attr('data-transform')) {
                        elementOffset -= parseFloat($element.attr('data-transform').y);
                    }

                    if (elementSticky) {
                        if (typeof elementStickyTarget === 'undefined') {
                            elementLimit = Infinity;
                        } else {
                            elementLimit = $(elementStickyTarget).offset().top - $element.height() + this.scrollbar.scrollTop;
                        }
                    }

                    var newElement = {
                        $element: $element,
                        inViewClass: elementInViewClass,
                        limit: elementLimit,
                        offset: Math.round(elementOffset),
                        repeat: elementRepeat,
                        callback: elementCallback,
                        viewportOffset: elementViewportOffset
                    };

                    // For parallax animated elements
                    if (elementSpeed !== false) {
                        var _elementPosition = $element.attr('data-position');
                        var _elementHorizontal = $element.attr('data-horizontal');
                        var elementMiddle = (elementLimit - elementOffset) / 2 + elementOffset;

                        newElement.horizontal = _elementHorizontal;
                        newElement.middle = elementMiddle;
                        newElement.offset = elementOffset;
                        newElement.position = _elementPosition;
                        newElement.speed = elementSpeed;

                        this.parallaxElements.push(newElement);
                    } else {
                        newElement.sticky = elementSticky;

                        this.animatedElements.push(newElement);

                        // @todo Useful?
                        // Don't add element if it already has its in view class and doesn't repeat
                        // if (elementRepeat || !$element.hasClass(elementInViewClass)) {
                        //     this.animatedElements.push(newElement);
                        // }

                        if (elementSticky) {
                            //launch the toggle function to set the position of the sticky element
                            this.toggleElement(newElement);
                        }
                    }
                };
            };

            /**
             * Render the class/transform animations, and update the global scroll positionning.
             *
             * @param  {boolean} isFirstCall Determines if this is the first occurence of method being called
             * @param  {object}  status      Optional status object received when method is
             *                               called by smooth-scrollbar instance listener.
             * @return {void}
             */


            _class.prototype.renderAnimations = function renderAnimations(isFirstCall, status) {
                if ((typeof status === 'undefined' ? 'undefined' : _typeof(status)) === 'object') {
                    this.scrollbarStatus = status;
                }

                var scrollbarTop = this.scrollbar.scrollTop;

                if (this.getWay) {
                    if (scrollbarTop > this.scroll.y) {
                        if (this.scroll.direction !== 'down') {
                            this.scroll.direction = 'down';
                        }
                    } else if (scrollbarTop < this.scroll.y) {
                        if (this.scroll.direction !== 'up') {
                            this.scroll.direction = 'up';
                        }
                    }
                }

                if (this.getSpeed) {
                    if (this.scroll.y !== scrollbarTop) {
                        this.scroll.speed = this.scrollbar.movement.y;
                        this.scroll.y = scrollbarTop;
                    } else {
                        this.scroll.speed = 0;
                    }
                }

                if (this.scroll.y !== scrollbarTop) {
                    this.scroll.y = scrollbarTop;
                }

                this.transformElements(isFirstCall);
                this.animateElements();
            };

            /**
             * Scroll to a desired target.
             *
             * @param  {object} options
             * @return {void}
             */


            _class.prototype.scrollTo = function scrollTo(options) {
                var _this3 = this;

                var $targetElem = options.targetElem;
                var $sourceElem = options.sourceElem;
                var offsetElem = options.offsetElem;
                var targetOffset = (0, _is.isNumeric)(options.targetOffset) ? parseInt(options.targetOffset) : 0;
                var delay = (0, _is.isNumeric)(options.delay) ? parseInt(options.delay) : 0;
                var speed = (0, _is.isNumeric)(options.speed) ? parseInt(options.speed) : 900;
                var toTop = options.toTop;
                var toBottom = options.toBottom;
                var offset = 0;

                if (typeof $targetElem === 'undefined' && typeof $sourceElem === 'undefined' && typeof targetOffset === 'undefined') {
                    console.warn('You must specify at least one parameter.');
                    return false;
                }

                if (typeof $targetElem !== 'undefined' && $targetElem instanceof jQuery && $targetElem.length > 0) {
                    targetOffset = $targetElem.offset().top + this.scrollbar.scrollTop + targetOffset;
                }

                if (typeof $sourceElem !== 'undefined' && $sourceElem instanceof jQuery && $sourceElem.length > 0) {
                    var targetData = '';

                    if ($sourceElem.attr('data-target')) {
                        targetData = $sourceElem.attr('data-target');
                    } else {
                        targetData = $sourceElem.attr('href');
                    }

                    targetOffset = $(targetData).offset().top + this.scrollbar.scrollTop + targetOffset;
                }

                if (typeof offsetElem !== 'undefined') {
                    offset = $(offsetElem).outerHeight();
                    targetOffset = targetOffset - offset;
                }

                if (toTop === true) {
                    targetOffset = 0;
                } else if (toBottom === true) {
                    targetOffset = this.scrollbar.limit.y;
                }

                setTimeout(function() {
                    _this3.scrollbar.scrollTo(0, targetOffset, speed);
                }, delay);
            };

            /**
             * Set the scroll bar limit
             */


            _class.prototype.setScrollbarLimit = function setScrollbarLimit() {
                this.scrollbarLimit = this.scrollbar.limit.y + this.windowHeight;
            };

            /**
             * Apply CSS transform properties on an element.
             *
             * @param  {object}  $element Targetted jQuery element
             * @param  {int}     x        Translate value
             * @param  {int}     y        Translate value
             * @param  {int}     z        Translate value
             * @return {void}
             */


            _class.prototype.transformElement = function transformElement($element, x, y, z) {
                // Defaults
                x = x || 0;
                y = y || 0;
                z = z || 0;

                // Translate and store the positionning as `data`
                $element.css({
                    '-webkit-transform': 'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)',
                    '-ms-transform': 'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)',
                    'transform': 'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)'
                }).data('transform', {
                    x: x,
                    y: y,
                    z: z
                });

                // Affect child elements with the same positionning
                // const children = $element.find(this.selector);
                // const len = children.length;
                // let i = 0;
                // for (; i < len; i++) {
                //     let $child = $(children[i]);
                //     if (!$child.data('transform')) {
                //         $child.data('transform', {
                //             x: x,
                //             y: y,
                //             z: z
                //         })
                //     }
                // };
            };

            /**
             * Loop through all parallax-able elements and apply transform method(s).
             *
             * @param  {boolean} isFirstCall Determines if this is the first occurence of method being called
             * @return {void}
             */


            _class.prototype.transformElements = function transformElements(isFirstCall) {
                if (this.parallaxElements.length > 0) {
                    var scrollbarBottom = this.scrollbar.scrollTop + this.windowHeight;
                    var scrollbarMiddle = this.scrollbar.scrollTop + this.windowMiddle;

                    var i = 0;
                    var len = this.parallaxElements.length;
                    var removeIndexes = [];

                    for (; i < len; i++) {
                        var curEl = this.parallaxElements[i];
                        // Old
                        var scrollBottom = scrollbarBottom;
                        // New
                        // let scrollBottom = (curEl.position === 'top') ? this.scrollbar.scrollTop : scrollbarBottom;

                        var transformDistance = false;

                        // Define if the element is in view
                        // Old
                        var inView = scrollBottom >= curEl.offset && this.scroll.y <= curEl.limit;
                        // New
                        // let inView = (scrollBottom >= curEl.offset && this.scrollbar.scrollTop <= curEl.limit);

                        this.toggleElement(curEl, i);

                        if (isFirstCall && !inView && curEl.speed) {
                            // Different calculations if it is the first call and the item is not in the view
                            if (curEl.position !== 'top') {
                                transformDistance = (curEl.offset - this.windowMiddle - curEl.middle) * -curEl.speed;
                            }
                        }

                        // If element is in view
                        if (inView && curEl.speed) {
                            switch (curEl.position) {
                                case 'top':
                                    // Old
                                    transformDistance = this.scrollbar.scrollTop * -curEl.speed;
                                    // New
                                    // transformDistance = (this.scrollbar.scrollTop - curEl.offset) * -curEl.speed;
                                    break;

                                case 'bottom':
                                    transformDistance = (this.scrollbarLimit - scrollBottom) * curEl.speed;
                                    break;

                                default:
                                    transformDistance = (scrollbarMiddle - curEl.middle) * -curEl.speed;
                                    break;
                            }
                        }

                        // Transform horizontal OR vertical. Defaults to vertical
                        if ((0, _is.isNumeric)(transformDistance)) {
                            curEl.horizontal ? this.transformElement(curEl.$element, transformDistance) : this.transformElement(curEl.$element, 0, transformDistance);
                        }
                    }
                }
            };

            /**
             * Update elements and recalculate all the positions on the page
             *
             * @param {object} options
             */


            _class.prototype.updateElements = function updateElements(options) {
                options = options || {};

                this.scrollbar.update();
                this.windowHeight = _environment.$window.height();
                this.windowMiddle = this.windowHeight / 2;
                this.setScrollbarLimit();
                this.setWheelDirection(this.isReversed);
                this.addElements();
                this.transformElements(true);

                if (typeof options.callback === 'function') {
                    options.callback();
                }

                this.renderAnimations(false, status);
            };

            /**
             * Set smooth-scrollbar scrolling direction for wheel event
             * @param {Boolean} isReversed
             */


            _class.prototype.setWheelDirection = function setWheelDirection(isReversed) {
                this.scrollbar.reverseWheel(isReversed);
            };

            /**
             * Destroy
             */


            _class.prototype.destroy = function destroy() {
                _Scroll.prototype.destroy.call(this);
                _environment.$html.removeClass('has-smooth-scroll');
                this.parallaxElements = [];
                this.scrollbar.destroy();
            };

            return _class;
        }(_Scroll3.default);

        exports.default = _class;

    }, {
        "../../utils/debounce": 29,
        "../../utils/environment": 30,
        "../../utils/is": 32,
        "../Scroll": 21,
        "smooth-scrollbar": 1
    }],
    26: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _environment = require('../utils/environment');

        var _App = require('../App');

        /* jshint esnext: true */
        function DefaultTransition(options) {
            options = options || {};
            var startCallback = typeof options.startCallback === 'function' ? options.startCallback : function() {};
            var overrideClass = typeof options.overrideClass === 'string' ? options.overrideClass : '';

            return Barba.BaseTransition.extend({
                start: function start() {
                    Promise.all([this.newContainerLoading, this.transitionOut()]).then(this.transitionIn.bind(this));
                },
                transitionOut: function transitionOut() {
                    $('.c-loading').addClass('is-loading');

                    setTimeout(function() {
                        $('.c-header__logo__anim').removeClass('is-show');
                        $('.c-header').removeClass('is-show');
                        $('body').removeClass('has-nav-open');
                        $('body').removeClass('has-search-open');
                        $('body').removeClass('has-overlay-open');
                    }, 400);

                    return $(this.oldContainer).addClass('is-changing-page').delay(1600).promise();
                },
                transitionIn: function transitionIn() {
                    _environment.$document.triggerHandler({
                        type: _App.EVENT.DELETE_SCOPED_MODULES,
                        $scope: _environment.$barba
                    });

                    if (is.ios() && is.chrome()) {
                        //$('body').on('click', function() {
                        if ($('body').hasClass('theme-1')) {
                            $('body').addClass('theme-2');
                            $('body').removeClass('theme-1');
                        } else if ($('body').hasClass('theme-2')) {
                            $('body').addClass('theme-3');
                            $('body').removeClass('theme-2');
                        } else if ($('body').hasClass('theme-3')) {
                            $('body').addClass('theme-4');
                            $('body').removeClass('theme-3');
                        } else if ($('body').hasClass('theme-4')) {
                            $('body').addClass('theme-5');
                            $('body').removeClass('theme-4');
                        } else if ($('body').hasClass('theme-5')) {
                            $('body').addClass('theme-1');
                            $('body').removeClass('theme-5');
                        }
                        //});
                    } else {}

                    $('html,body').animate({
                        scrollTop: 0
                    }, 0);
                    // $('body').removeClass('has-overlay-active');

                    $('.js-transition-overlay, .c-loading-logo').removeClass('is-active');

                    setTimeout(function() {
                        $('.c-loading').removeClass('is-loading');
                    }, 600);

                    this.done();
                    var $el = $(this.newContainer).addClass('is-loaded');

                    _environment.$document.triggerHandler({
                        type: _App.EVENT.INIT_MODULES,
                        isBarba: true
                    });
                }
            });
        }

        exports.default = DefaultTransition;

    }, {
        "../App": 2,
        "../utils/environment": 30
    }],
    27: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _environment = require('../utils/environment');

        var _DefaultTransition = require('./DefaultTransition');

        var _DefaultTransition2 = _interopRequireDefault(_DefaultTransition);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        } /* jshint esnext: true */


        var MODULE_NAME = 'TransitionManager';
        var EVENT_NAMESPACE = _environment.APP_NAME + '.' + MODULE_NAME;

        var EVENT = {
            GOTO: 'goto.' + EVENT_NAMESPACE
        };

        var _class = function() {
            function _class() {
                var _this = this;

                _classCallCheck(this, _class);

                var clickedLink = undefined;
                var transition = '';

                // jQuery ondomready
                $(function() {
                    _environment.$html.addClass('dom-is-first-loading');
                    _this.load();
                });

                _environment.$document.on(EVENT.GOTO, function(event) {
                    if (!window.history.pushState) {
                        window.location = event.options.location;
                    } else {
                        transition = event.options.transition;
                        Barba.Pjax.goTo(event.options.location);
                    }
                });

                // Define different page transitions
                Barba.Pjax.getTransition = function() {
                    transition = clickedLink instanceof Node ? clickedLink.getAttribute('data-transition') : typeof transition === 'string' ? transition : '';

                    var TransitionObject = void 0;

                    switch (transition) {
                        default:
                            TransitionObject = (0, _DefaultTransition2.default)();
                    }

                    clickedLink = undefined;
                    transition = '';

                    return TransitionObject;
                };

                Barba.Dispatcher.on('linkClicked', function(HTMLElement, MouseEvent) {
                    clickedLink = HTMLElement;
                });

                Barba.Dispatcher.on('newPageReady', function(currentStatus, prevStatus, container, currentHTML) {
                    // Fetch any inline script elements.
                    var scripts = container.querySelectorAll('script.js-inline');

                    if (scripts instanceof window.NodeList) {
                        var i = 0;
                        var len = scripts.length;
                        for (; i < len; i++) {
                            eval(scripts[i].innerHTML);
                        }
                    }

                    /**
                     * Execute any third party features.
                     */

                    // Google Analytics
                    if (window.ga && !_environment.isDebug) {
                        ga('send', 'pageview');
                    }
                });

                Barba.Pjax.Dom.containerClass = 'barba-container';
                Barba.Pjax.Dom.wrapperId = 'barba-wrapper';

                Barba.Pjax.start();
            }

            /**
             * DOM is loaded
             *
             * @return {void}
             */


            _class.prototype.load = function load() {
                setTimeout(function() {
                    _environment.$body.removeClass('is-loading');
                    _environment.$body.addClass('dom-is-loaded');
                    $('.barba-container').addClass('is-loaded');
                }, 700);
            };

            return _class;
        }();

        exports.default = _class;

    }, {
        "../utils/environment": 30,
        "./DefaultTransition": 26
    }],
    28: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.addToArray = addToArray;
        exports.arrayContains = arrayContains;
        exports.arrayContentsMatch = arrayContentsMatch;
        exports.ensureArray = ensureArray;
        exports.lastItem = lastItem;
        exports.removeFromArray = removeFromArray;
        exports.toArray = toArray;
        exports.findByKeyValue = findByKeyValue;

        var _is = require('./is');

        function addToArray(array, value) {
            var index = array.indexOf(value);

            if (index === -1) {
                array.push(value);
            }
        }

        function arrayContains(array, value) {
            for (var i = 0, c = array.length; i < c; i++) {
                if (array[i] == value) {
                    return true;
                }
            }

            return false;
        }

        function arrayContentsMatch(a, b) {
            var i = void 0;

            if (!(0, _is.isArray)(a) || !(0, _is.isArray)(b)) {
                return false;
            }

            if (a.length !== b.length) {
                return false;
            }

            i = a.length;
            while (i--) {
                if (a[i] !== b[i]) {
                    return false;
                }
            }

            return true;
        }

        function ensureArray(x) {
            if (typeof x === 'string') {
                return [x];
            }

            if (x === undefined) {
                return [];
            }

            return x;
        }

        function lastItem(array) {
            return array[array.length - 1];
        }

        function removeFromArray(array, member) {
            if (!array) {
                return;
            }

            var index = array.indexOf(member);

            if (index !== -1) {
                array.splice(index, 1);
            }
        }

        function toArray(arrayLike) {
            var array = [];
            var i = arrayLike.length;
            while (i--) {
                array[i] = arrayLike[i];
            }

            return array;
        }

        function findByKeyValue(array, key, value) {
            return array.filter(function(obj) {
                return obj[key] === value;
            });
        }

    }, {
        "./is": 32
    }],
    29: [function(require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        exports.default = function(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this,
                    args = arguments;
                var later = function later() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        };

    }, {}],
    30: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var APP_NAME = 'Erable';
        var DATA_API_KEY = '.data-api';

        var $document = $(document);
        var $window = $(window);
        var $html = $(document.documentElement).removeClass('has-no-js').addClass('has-js');
        var $body = $(document.body);
        var $barba = $('#barba-wrapper');

        var isDebug = !!$html.data('debug');

        exports.APP_NAME = APP_NAME;
        exports.DATA_API_KEY = DATA_API_KEY;
        exports.$document = $document;
        exports.$window = $window;
        exports.$html = $html;
        exports.$body = $body;
        exports.isDebug = isDebug;
        exports.$barba = $barba;

    }, {}],
    31: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.escapeHtml = escapeHtml;
        exports.unescapeHtml = unescapeHtml;
        exports.getNodeData = getNodeData;
        /**
         * @see  https://github.com/ractivejs/ractive/blob/dev/src/utils/html.js
         */
        function escapeHtml(str) {
            return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }

        /**
         * Prepare HTML content that contains mustache characters for use with Ractive
         * @param  {string} str
         * @return {string}
         */
        function unescapeHtml(str) {
            return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
        }

        /**
         * Get element data attributes
         * @param   {DOMElement}  node
         * @return  {Array}       data
         */
        function getNodeData(node) {
            // All attributes
            var attributes = node.attributes;

            // Regex Pattern
            var pattern = /^data\-(.+)$/;

            // Output
            var data = {};

            for (var i in attributes) {
                if (!attributes[i]) {
                    continue;
                }

                // Attributes name (ex: data-module)
                var name = attributes[i].name;

                // This happens.
                if (!name) {
                    continue;
                }

                var match = name.match(pattern);
                if (!match) {
                    continue;
                }

                // If this throws an error, you have some
                // serious problems in your HTML.
                data[match[1]] = node.getAttribute(name);
            }

            return data;
        }

    }, {}],
    32: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };

        exports.isArray = isArray;
        exports.isArrayLike = isArrayLike;
        exports.isEqual = isEqual;
        exports.isNumeric = isNumeric;
        exports.isObject = isObject;
        exports.isFunction = isFunction;
        var toString = Object.prototype.toString,
            arrayLikePattern = /^\[object (?:Array|FileList)\]$/;

        // thanks, http://perfectionkills.com/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/
        function isArray(thing) {
            return toString.call(thing) === '[object Array]';
        }

        function isArrayLike(obj) {
            return arrayLikePattern.test(toString.call(obj));
        }

        function isEqual(a, b) {
            if (a === null && b === null) {
                return true;
            }

            if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') {
                return false;
            }

            return a === b;
        }

        // http://stackoverflow.com/questions/18082/validate-numbers-in-javascript-isnumeric
        function isNumeric(thing) {
            return !isNaN(parseFloat(thing)) && isFinite(thing);
        }

        function isObject(thing) {
            return thing && toString.call(thing) === '[object Object]';
        }

        function isFunction(thing) {
            var getType = {};
            return thing && getType.toString.call(thing) === '[object Function]';
        }

    }, {}],
    33: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _environment = require('../utils/environment');

        var _App = require('../App');

        /* jshint esnext: true */
        function DefaultView(options) {
            options = options || {};

            var home = Barba.BaseView.extend({
                namespace: 'home',
                onEnter: function onEnter() {
                    // The new Container is ready and attached to the DOM.
                    $('body').addClass('theme-home');
                },
                onEnterCompleted: function onEnterCompleted() {
                    // The Transition has just finished.
                },
                onLeave: function onLeave() {
                    // A new Transition toward a new page has just started.
                },
                onLeaveCompleted: function onLeaveCompleted() {
                    // The Container has just been removed from the DOM.
                    $('body').removeClass('theme-home');
                }
            });

            home.init();
        }
        new DefaultView();

        exports.default = DefaultView;

    }, {
        "../App": 2,
        "../utils/environment": 30
    }]
}, {}, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvc21vb3RoLXNjcm9sbGJhci9kaXN0L3Ntb290aC1zY3JvbGxiYXIuanMiLCJzcmMvanMvQXBwLmpzIiwic3JjL2pzL2dsb2JhbHMuanMiLCJzcmMvanMvbW9kdWxlcy5qcyIsInNyYy9qcy9tb2R1bGVzL0Fic3RyYWN0TW9kdWxlLmpzIiwic3JjL2pzL21vZHVsZXMvQWNjb3JkaW9ucy5qcyIsInNyYy9qcy9tb2R1bGVzL0F1dG9wbGF5LmpzIiwic3JjL2pzL21vZHVsZXMvTGFuZ1N3aXRjaGVyLmpzIiwic3JjL2pzL21vZHVsZXMvTG9jb21vdGl2ZVNjcm9sbC5qcyIsInNyYy9qcy9tb2R1bGVzL01hcnF1ZWUuanMiLCJzcmMvanMvbW9kdWxlcy9PdmVybGF5LmpzIiwic3JjL2pzL21vZHVsZXMvT3ZlcmxheUNsb3NlLmpzIiwic3JjL2pzL21vZHVsZXMvT3ZlcmxheU9wZW4uanMiLCJzcmMvanMvbW9kdWxlcy9TY3JvbGwuanMiLCJzcmMvanMvbW9kdWxlcy9TY3JvbGxNYW5hZ2VyLmpzIiwic3JjL2pzL21vZHVsZXMvU2Nyb2xsYmNrLmpzIiwic3JjL2pzL21vZHVsZXMvU2hhcmluZy5qcyIsInNyYy9qcy9tb2R1bGVzL1Ntb290aFNjcm9sbC5qcyIsInNyYy9qcy9tb2R1bGVzL1NwbGl0VGV4dExpbmVzLmpzIiwic3JjL2pzL21vZHVsZXMvU3BsaXRUZXh0V29yZHMuanMiLCJzcmMvanMvc2Nyb2xsL1Njcm9sbC5qcyIsInNyYy9qcy9zY3JvbGwvU21vb3RoU2Nyb2xsLmpzIiwic3JjL2pzL3Njcm9sbC92ZW5kb3JzL1Njcm9sbC5qcyIsInNyYy9qcy9zY3JvbGwvdmVuZG9ycy9TY3JvbGxNYW5hZ2VyLmpzIiwic3JjL2pzL3Njcm9sbC92ZW5kb3JzL1Ntb290aFNjcm9sbC5qcyIsInNyYy9qcy90cmFuc2l0aW9ucy9EZWZhdWx0VHJhbnNpdGlvbi5qcyIsInNyYy9qcy90cmFuc2l0aW9ucy9UcmFuc2l0aW9uTWFuYWdlci5qcyIsInNyYy9qcy91dGlscy9hcnJheS5qcyIsInNyYy9qcy91dGlscy9kZWJvdW5jZS5qcyIsInNyYy9qcy91dGlscy9lbnZpcm9ubWVudC5qcyIsInNyYy9qcy91dGlscy9odG1sLmpzIiwic3JjL2pzL3V0aWxzL2lzLmpzIiwic3JjL2pzL3ZpZXdzL0RlZmF1bHRWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNEQTs7QUFFQTs7OztBQUVBOztBQUNBOztBQUNBOztBQUdBOztJQUFZLE87Ozs7OzswSkFWWjs7O0FBU0E7OztBQUdBLElBQU0sY0FBYyxLQUFwQjtBQUNBLElBQU0sZ0RBQWlDLFdBQXZDOztBQUVPLElBQU0sd0JBQVE7QUFDakIsbUNBQTZCLGVBRFo7QUFFakIsNENBQXNDLGVBRnJCO0FBR2pCLGdEQUEwQyxlQUh6QjtBQUlqQixvREFBOEM7QUFKN0IsQ0FBZDs7SUFPRCxHO0FBQ0YsbUJBQWM7QUFBQTs7QUFBQTs7QUFDVixhQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EsYUFBSyxjQUFMLEdBQXNCLEVBQXRCOztBQUVBLCtCQUFVLEVBQVYsQ0FBYSxNQUFNLFlBQW5CLEVBQWlDLFVBQUMsS0FBRCxFQUFXO0FBQ3hDLGtCQUFLLFdBQUwsQ0FBaUIsTUFBTSxVQUF2QixFQUNLLGFBREwsQ0FDbUIsS0FEbkIsRUFFSyxXQUZMLENBRWlCLEtBRmpCO0FBR0E7QUFFSCxTQU5EOztBQVFBLCtCQUFVLEVBQVYsQ0FBYSxNQUFNLGlCQUFuQixFQUFzQyxVQUFDLEtBQUQsRUFBVztBQUM3QyxrQkFBSyxXQUFMLENBQWlCLEtBQWpCO0FBQ0E7QUFFSCxTQUpEOztBQU1BLCtCQUFVLEVBQVYsQ0FBYSxNQUFNLG1CQUFuQixFQUF3QyxVQUFDLEtBQUQsRUFBVztBQUMvQztBQUNBLGtCQUFLLFdBQUwsQ0FBaUIsS0FBakI7QUFDSCxTQUhEOztBQUtBLCtCQUFVLEVBQVYs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LDBCQUFrQiw0QkFBVztBQUN6QjtBQUNBLGNBQUUsTUFBRixFQUFVLFdBQVYsQ0FBc0IsWUFBdEI7QUFDSDtBQWY0QixLQUF0QixDQUFYOztBQWtCQSxTQUFLLElBQUw7QUFDSDtBQUNELElBQUksV0FBSjs7a0JBRWUsVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlNjcm9sbGJhcj1lKCk6dC5TY3JvbGxiYXI9ZSgpfSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUocil7aWYobltyXSlyZXR1cm4gbltyXS5leHBvcnRzO3ZhciBvPW5bcl09e2V4cG9ydHM6e30saWQ6cixsb2FkZWQ6ITF9O3JldHVybiB0W3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLGUpLG8ubG9hZGVkPSEwLG8uZXhwb3J0c312YXIgbj17fTtyZXR1cm4gZS5tPXQsZS5jPW4sZS5wPVwiXCIsZSgwKX0oW2Z1bmN0aW9uKHQsZSxuKXt0LmV4cG9ydHM9bigxKX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fWZ1bmN0aW9uIG8odCl7aWYoQXJyYXkuaXNBcnJheSh0KSl7Zm9yKHZhciBlPTAsbj1BcnJheSh0Lmxlbmd0aCk7ZTx0Lmxlbmd0aDtlKyspbltlXT10W2VdO3JldHVybiBufXJldHVybigwLHUuZGVmYXVsdCkodCl9dmFyIGk9bigyKSx1PXIoaSksYT1uKDU1KSxjPXIoYSksbD1uKDYyKSxmPXIobCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHM9XCJmdW5jdGlvblwiPT10eXBlb2YgZi5kZWZhdWx0JiZcInN5bWJvbFwiPT10eXBlb2YgYy5kZWZhdWx0P2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGYuZGVmYXVsdCYmdC5jb25zdHJ1Y3Rvcj09PWYuZGVmYXVsdCYmdCE9PWYuZGVmYXVsdC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0sZD1uKDc3KSxoPW4oODgpO24oMTMzKSxuKDE1MCksbigxNjMpLG4oMTc4KSxuKDE5MyksZS5kZWZhdWx0PWQuU21vb3RoU2Nyb2xsYmFyLGQuU21vb3RoU2Nyb2xsYmFyLnZlcnNpb249XCI3LjMuMVwiLGQuU21vb3RoU2Nyb2xsYmFyLmluaXQ9ZnVuY3Rpb24odCxlKXtpZighdHx8MSE9PXQubm9kZVR5cGUpdGhyb3cgbmV3IFR5cGVFcnJvcihcImV4cGVjdCBlbGVtZW50IHRvIGJlIERPTSBFbGVtZW50LCBidXQgZ290IFwiKyhcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOnModCkpKTtpZihoLnNiTGlzdC5oYXModCkpcmV0dXJuIGguc2JMaXN0LmdldCh0KTt0LnNldEF0dHJpYnV0ZShcImRhdGEtc2Nyb2xsYmFyXCIsXCJcIik7dmFyIG49W10uY29uY2F0KG8odC5jaGlsZE5vZGVzKSkscj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3IuaW5uZXJIVE1MPSdcXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwic2Nyb2xsLWNvbnRlbnRcIj48L2FydGljbGU+XFxuICAgICAgICA8YXNpZGUgY2xhc3M9XCJzY3JvbGxiYXItdHJhY2sgc2Nyb2xsYmFyLXRyYWNrLXhcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Nyb2xsYmFyLXRodW1iIHNjcm9sbGJhci10aHVtYi14XCI+PC9kaXY+XFxuICAgICAgICA8L2FzaWRlPlxcbiAgICAgICAgPGFzaWRlIGNsYXNzPVwic2Nyb2xsYmFyLXRyYWNrIHNjcm9sbGJhci10cmFjay15XCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNjcm9sbGJhci10aHVtYiBzY3JvbGxiYXItdGh1bWIteVwiPjwvZGl2PlxcbiAgICAgICAgPC9hc2lkZT5cXG4gICAgICAgIDxjYW52YXMgY2xhc3M9XCJvdmVyc2Nyb2xsLWdsb3dcIj48L2NhbnZhcz5cXG4gICAgJzt2YXIgaT1yLnF1ZXJ5U2VsZWN0b3IoXCIuc2Nyb2xsLWNvbnRlbnRcIik7cmV0dXJuW10uY29uY2F0KG8oci5jaGlsZE5vZGVzKSkuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gdC5hcHBlbmRDaGlsZChlKX0pLG4uZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gaS5hcHBlbmRDaGlsZCh0KX0pLG5ldyBkLlNtb290aFNjcm9sbGJhcih0LGUpfSxkLlNtb290aFNjcm9sbGJhci5pbml0QWxsPWZ1bmN0aW9uKHQpe3JldHVybltdLmNvbmNhdChvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaC5zZWxlY3RvcnMpKSkubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBkLlNtb290aFNjcm9sbGJhci5pbml0KGUsdCl9KX0sZC5TbW9vdGhTY3JvbGxiYXIuaGFzPWZ1bmN0aW9uKHQpe3JldHVybiBoLnNiTGlzdC5oYXModCl9LGQuU21vb3RoU2Nyb2xsYmFyLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gaC5zYkxpc3QuZ2V0KHQpfSxkLlNtb290aFNjcm9sbGJhci5nZXRBbGw9ZnVuY3Rpb24oKXtyZXR1cm5bXS5jb25jYXQobyhoLnNiTGlzdC52YWx1ZXMoKSkpfSxkLlNtb290aFNjcm9sbGJhci5kZXN0cm95PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGQuU21vb3RoU2Nyb2xsYmFyLmhhcyh0KSYmZC5TbW9vdGhTY3JvbGxiYXIuZ2V0KHQpLmRlc3Ryb3koZSl9LGQuU21vb3RoU2Nyb2xsYmFyLmRlc3Ryb3lBbGw9ZnVuY3Rpb24odCl7aC5zYkxpc3QuZm9yRWFjaChmdW5jdGlvbihlKXtlLmRlc3Ryb3kodCl9KX0sdC5leHBvcnRzPWUuZGVmYXVsdH0sZnVuY3Rpb24odCxlLG4pe3QuZXhwb3J0cz17ZGVmYXVsdDpuKDMpLF9fZXNNb2R1bGU6ITB9fSxmdW5jdGlvbih0LGUsbil7big0KSxuKDQ4KSx0LmV4cG9ydHM9bigxMikuQXJyYXkuZnJvbX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oNSkoITApO24oOCkoU3RyaW5nLFwiU3RyaW5nXCIsZnVuY3Rpb24odCl7dGhpcy5fdD1TdHJpbmcodCksdGhpcy5faT0wfSxmdW5jdGlvbigpe3ZhciB0LGU9dGhpcy5fdCxuPXRoaXMuX2k7cmV0dXJuIG4+PWUubGVuZ3RoP3t2YWx1ZTp2b2lkIDAsZG9uZTohMH06KHQ9cihlLG4pLHRoaXMuX2krPXQubGVuZ3RoLHt2YWx1ZTp0LGRvbmU6ITF9KX0pfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big2KSxvPW4oNyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLG4pe3ZhciBpLHUsYT1TdHJpbmcobyhlKSksYz1yKG4pLGw9YS5sZW5ndGg7cmV0dXJuIGM8MHx8Yz49bD90P1wiXCI6dm9pZCAwOihpPWEuY2hhckNvZGVBdChjKSxpPDU1Mjk2fHxpPjU2MzE5fHxjKzE9PT1sfHwodT1hLmNoYXJDb2RlQXQoYysxKSk8NTYzMjB8fHU+NTczNDM/dD9hLmNoYXJBdChjKTppOnQ/YS5zbGljZShjLGMrMik6KGktNTUyOTY8PDEwKSsodS01NjMyMCkrNjU1MzYpfX19LGZ1bmN0aW9uKHQsZSl7dmFyIG49TWF0aC5jZWlsLHI9TWF0aC5mbG9vcjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGlzTmFOKHQ9K3QpPzA6KHQ+MD9yOm4pKHQpfX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7aWYodm9pZCAwPT10KXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIit0KTtyZXR1cm4gdH19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDkpLG89bigxMCksaT1uKDI2KSx1PW4oMTUpLGE9bigyNyksYz1uKDI4KSxsPW4oNDQpLGY9big0Nikscz1uKDQ1KShcIml0ZXJhdG9yXCIpLGQ9IShbXS5rZXlzJiZcIm5leHRcImluW10ua2V5cygpKSxoPVwiQEBpdGVyYXRvclwiLHY9XCJrZXlzXCIsXz1cInZhbHVlc1wiLHA9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuLHksYixnLG0pe2MobixlLHkpO3ZhciB4LFMsRSxNPWZ1bmN0aW9uKHQpe2lmKCFkJiZ0IGluIFQpcmV0dXJuIFRbdF07c3dpdGNoKHQpe2Nhc2UgdjpyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IG4odGhpcyx0KX07Y2FzZSBfOnJldHVybiBmdW5jdGlvbigpe3JldHVybiBuZXcgbih0aGlzLHQpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IG4odGhpcyx0KX19LE89ZStcIiBJdGVyYXRvclwiLHc9Yj09XyxQPSExLFQ9dC5wcm90b3R5cGUsaz1UW3NdfHxUW2hdfHxiJiZUW2JdLGo9a3x8TShiKSxBPWI/dz9NKFwiZW50cmllc1wiKTpqOnZvaWQgMCxMPVwiQXJyYXlcIj09ZT9ULmVudHJpZXN8fGs6aztpZihMJiYoRT1mKEwuY2FsbChuZXcgdCkpLEUhPT1PYmplY3QucHJvdG90eXBlJiZFLm5leHQmJihsKEUsTywhMCkscnx8XCJmdW5jdGlvblwiPT10eXBlb2YgRVtzXXx8dShFLHMscCkpKSx3JiZrJiZrLm5hbWUhPT1fJiYoUD0hMCxqPWZ1bmN0aW9uKCl7cmV0dXJuIGsuY2FsbCh0aGlzKX0pLHImJiFtfHwhZCYmIVAmJlRbc118fHUoVCxzLGopLGFbZV09aixhW09dPXAsYilpZih4PXt2YWx1ZXM6dz9qOk0oXyksa2V5czpnP2o6TSh2KSxlbnRyaWVzOkF9LG0pZm9yKFMgaW4geClTIGluIFR8fGkoVCxTLHhbU10pO2Vsc2UgbyhvLlArby5GKihkfHxQKSxlLHgpO3JldHVybiB4fX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ITB9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDExKSxvPW4oMTIpLGk9bigxMyksdT1uKDE1KSxhPW4oMjUpLGM9XCJwcm90b3R5cGVcIixsPWZ1bmN0aW9uKHQsZSxuKXt2YXIgZixzLGQsaD10JmwuRix2PXQmbC5HLF89dCZsLlMscD10JmwuUCx5PXQmbC5CLGI9dCZsLlcsZz12P286b1tlXXx8KG9bZV09e30pLG09Z1tjXSx4PXY/cjpfP3JbZV06KHJbZV18fHt9KVtjXTt2JiYobj1lKTtmb3IoZiBpbiBuKXM9IWgmJngmJnZvaWQgMCE9PXhbZl0scyYmYShnLGYpfHwoZD1zP3hbZl06bltmXSxnW2ZdPXYmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHhbZl0/bltmXTp5JiZzP2koZCxyKTpiJiZ4W2ZdPT1kP2Z1bmN0aW9uKHQpe3ZhciBlPWZ1bmN0aW9uKGUsbixyKXtpZih0aGlzIGluc3RhbmNlb2YgdCl7c3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gbmV3IHQ7Y2FzZSAxOnJldHVybiBuZXcgdChlKTtjYXNlIDI6cmV0dXJuIG5ldyB0KGUsbil9cmV0dXJuIG5ldyB0KGUsbixyKX1yZXR1cm4gdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O3JldHVybiBlW2NdPXRbY10sZX0oZCk6cCYmXCJmdW5jdGlvblwiPT10eXBlb2YgZD9pKEZ1bmN0aW9uLmNhbGwsZCk6ZCxwJiYoKGcudmlydHVhbHx8KGcudmlydHVhbD17fSkpW2ZdPWQsdCZsLlImJm0mJiFtW2ZdJiZ1KG0sZixkKSkpfTtsLkY9MSxsLkc9MixsLlM9NCxsLlA9OCxsLkI9MTYsbC5XPTMyLGwuVT02NCxsLlI9MTI4LHQuZXhwb3J0cz1sfSxmdW5jdGlvbih0LGUpe3ZhciBuPXQuZXhwb3J0cz1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuTWF0aD09TWF0aD93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYuTWF0aD09TWF0aD9zZWxmOkZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcIm51bWJlclwiPT10eXBlb2YgX19nJiYoX19nPW4pfSxmdW5jdGlvbih0LGUpe3ZhciBuPXQuZXhwb3J0cz17dmVyc2lvbjpcIjIuNS43XCJ9O1wibnVtYmVyXCI9PXR5cGVvZiBfX2UmJihfX2U9bil9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDE0KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4pe2lmKHIodCksdm9pZCAwPT09ZSlyZXR1cm4gdDtzd2l0Y2gobil7Y2FzZSAxOnJldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gdC5jYWxsKGUsbil9O2Nhc2UgMjpyZXR1cm4gZnVuY3Rpb24obixyKXtyZXR1cm4gdC5jYWxsKGUsbixyKX07Y2FzZSAzOnJldHVybiBmdW5jdGlvbihuLHIsbyl7cmV0dXJuIHQuY2FsbChlLG4scixvKX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHQuYXBwbHkoZSxhcmd1bWVudHMpfX19LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGEgZnVuY3Rpb24hXCIpO3JldHVybiB0fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTYpLG89bigyNCk7dC5leHBvcnRzPW4oMjApP2Z1bmN0aW9uKHQsZSxuKXtyZXR1cm4gci5mKHQsZSxvKDEsbikpfTpmdW5jdGlvbih0LGUsbil7cmV0dXJuIHRbZV09bix0fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTcpLG89bigxOSksaT1uKDIzKSx1PU9iamVjdC5kZWZpbmVQcm9wZXJ0eTtlLmY9bigyMCk/T2JqZWN0LmRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKHQsZSxuKXtpZihyKHQpLGU9aShlLCEwKSxyKG4pLG8pdHJ5e3JldHVybiB1KHQsZSxuKX1jYXRjaCh0KXt9aWYoXCJnZXRcImluIG58fFwic2V0XCJpbiBuKXRocm93IFR5cGVFcnJvcihcIkFjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIVwiKTtyZXR1cm5cInZhbHVlXCJpbiBuJiYodFtlXT1uLnZhbHVlKSx0fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTgpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtpZighcih0KSl0aHJvdyBUeXBlRXJyb3IodCtcIiBpcyBub3QgYW4gb2JqZWN0IVwiKTtyZXR1cm4gdH19LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiB0P251bGwhPT10OlwiZnVuY3Rpb25cIj09dHlwZW9mIHR9fSxmdW5jdGlvbih0LGUsbil7dC5leHBvcnRzPSFuKDIwKSYmIW4oMjEpKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU9iamVjdC5kZWZpbmVQcm9wZXJ0eShuKDIyKShcImRpdlwiKSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYX0pfSxmdW5jdGlvbih0LGUsbil7dC5leHBvcnRzPSFuKDIxKShmdW5jdGlvbigpe3JldHVybiA3IT1PYmplY3QuZGVmaW5lUHJvcGVydHkoe30sXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiA3fX0pLmF9KX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dHJ5e3JldHVybiEhdCgpfWNhdGNoKHQpe3JldHVybiEwfX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDE4KSxvPW4oMTEpLmRvY3VtZW50LGk9cihvKSYmcihvLmNyZWF0ZUVsZW1lbnQpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gaT9vLmNyZWF0ZUVsZW1lbnQodCk6e319fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxOCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7aWYoIXIodCkpcmV0dXJuIHQ7dmFyIG4sbztpZihlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZihuPXQudG9TdHJpbmcpJiYhcihvPW4uY2FsbCh0KSkpcmV0dXJuIG87aWYoXCJmdW5jdGlvblwiPT10eXBlb2Yobj10LnZhbHVlT2YpJiYhcihvPW4uY2FsbCh0KSkpcmV0dXJuIG87aWYoIWUmJlwiZnVuY3Rpb25cIj09dHlwZW9mKG49dC50b1N0cmluZykmJiFyKG89bi5jYWxsKHQpKSlyZXR1cm4gbzt0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIil9fSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3JldHVybntlbnVtZXJhYmxlOiEoMSZ0KSxjb25maWd1cmFibGU6ISgyJnQpLHdyaXRhYmxlOiEoNCZ0KSx2YWx1ZTplfX19LGZ1bmN0aW9uKHQsZSl7dmFyIG49e30uaGFzT3duUHJvcGVydHk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIG4uY2FsbCh0LGUpfX0sZnVuY3Rpb24odCxlLG4pe3QuZXhwb3J0cz1uKDE1KX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9e319LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDI5KSxvPW4oMjQpLGk9big0NCksdT17fTtuKDE1KSh1LG4oNDUpKFwiaXRlcmF0b3JcIiksZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pLHQuZXhwb3J0cz1mdW5jdGlvbih0LGUsbil7dC5wcm90b3R5cGU9cih1LHtuZXh0Om8oMSxuKX0pLGkodCxlK1wiIEl0ZXJhdG9yXCIpfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTcpLG89bigzMCksaT1uKDQyKSx1PW4oMzkpKFwiSUVfUFJPVE9cIiksYT1mdW5jdGlvbigpe30sYz1cInByb3RvdHlwZVwiLGw9ZnVuY3Rpb24oKXt2YXIgdCxlPW4oMjIpKFwiaWZyYW1lXCIpLHI9aS5sZW5ndGgsbz1cIjxcIix1PVwiPlwiO2ZvcihlLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsbig0MykuYXBwZW5kQ2hpbGQoZSksZS5zcmM9XCJqYXZhc2NyaXB0OlwiLHQ9ZS5jb250ZW50V2luZG93LmRvY3VtZW50LHQub3BlbigpLHQud3JpdGUobytcInNjcmlwdFwiK3UrXCJkb2N1bWVudC5GPU9iamVjdFwiK28rXCIvc2NyaXB0XCIrdSksdC5jbG9zZSgpLGw9dC5GO3ItLTspZGVsZXRlIGxbY11baVtyXV07cmV0dXJuIGwoKX07dC5leHBvcnRzPU9iamVjdC5jcmVhdGV8fGZ1bmN0aW9uKHQsZSl7dmFyIG47cmV0dXJuIG51bGwhPT10PyhhW2NdPXIodCksbj1uZXcgYSxhW2NdPW51bGwsblt1XT10KTpuPWwoKSx2b2lkIDA9PT1lP246byhuLGUpfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTYpLG89bigxNyksaT1uKDMxKTt0LmV4cG9ydHM9bigyMCk/T2JqZWN0LmRlZmluZVByb3BlcnRpZXM6ZnVuY3Rpb24odCxlKXtvKHQpO2Zvcih2YXIgbix1PWkoZSksYT11Lmxlbmd0aCxjPTA7YT5jOylyLmYodCxuPXVbYysrXSxlW25dKTtyZXR1cm4gdH19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDMyKSxvPW4oNDIpO3QuZXhwb3J0cz1PYmplY3Qua2V5c3x8ZnVuY3Rpb24odCl7cmV0dXJuIHIodCxvKX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDI1KSxvPW4oMzMpLGk9bigzNikoITEpLHU9bigzOSkoXCJJRV9QUk9UT1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXt2YXIgbixhPW8odCksYz0wLGw9W107Zm9yKG4gaW4gYSluIT11JiZyKGEsbikmJmwucHVzaChuKTtmb3IoO2UubGVuZ3RoPmM7KXIoYSxuPWVbYysrXSkmJih+aShsLG4pfHxsLnB1c2gobikpO3JldHVybiBsfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMzQpLG89big3KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHIobyh0KSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigzNSk7dC5leHBvcnRzPU9iamVjdChcInpcIikucHJvcGVydHlJc0VudW1lcmFibGUoMCk/T2JqZWN0OmZ1bmN0aW9uKHQpe3JldHVyblwiU3RyaW5nXCI9PXIodCk/dC5zcGxpdChcIlwiKTpPYmplY3QodCl9fSxmdW5jdGlvbih0LGUpe3ZhciBuPXt9LnRvU3RyaW5nO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gbi5jYWxsKHQpLnNsaWNlKDgsLTEpfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMzMpLG89bigzNyksaT1uKDM4KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUsbix1KXt2YXIgYSxjPXIoZSksbD1vKGMubGVuZ3RoKSxmPWkodSxsKTtpZih0JiZuIT1uKXtmb3IoO2w+ZjspaWYoYT1jW2YrK10sYSE9YSlyZXR1cm4hMH1lbHNlIGZvcig7bD5mO2YrKylpZigodHx8ZiBpbiBjKSYmY1tmXT09PW4pcmV0dXJuIHR8fGZ8fDA7cmV0dXJuIXQmJi0xfX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDYpLG89TWF0aC5taW47dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiB0PjA/byhyKHQpLDkwMDcxOTkyNTQ3NDA5OTEpOjB9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big2KSxvPU1hdGgubWF4LGk9TWF0aC5taW47dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQ9cih0KSx0PDA/byh0K2UsMCk6aSh0LGUpfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNDApKFwia2V5c1wiKSxvPW4oNDEpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gclt0XXx8KHJbdF09byh0KSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxMiksbz1uKDExKSxpPVwiX19jb3JlLWpzX3NoYXJlZF9fXCIsdT1vW2ldfHwob1tpXT17fSk7KHQuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3JldHVybiB1W3RdfHwodVt0XT12b2lkIDAhPT1lP2U6e30pfSkoXCJ2ZXJzaW9uc1wiLFtdKS5wdXNoKHt2ZXJzaW9uOnIudmVyc2lvbixtb2RlOm4oOSk/XCJwdXJlXCI6XCJnbG9iYWxcIixjb3B5cmlnaHQ6XCLCqSAyMDE4IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpXCJ9KX0sZnVuY3Rpb24odCxlKXt2YXIgbj0wLHI9TWF0aC5yYW5kb20oKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuXCJTeW1ib2woXCIuY29uY2F0KHZvaWQgMD09PXQ/XCJcIjp0LFwiKV9cIiwoKytuK3IpLnRvU3RyaW5nKDM2KSl9fSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1cImNvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZlwiLnNwbGl0KFwiLFwiKX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTEpLmRvY3VtZW50O3QuZXhwb3J0cz1yJiZyLmRvY3VtZW50RWxlbWVudH0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTYpLmYsbz1uKDI1KSxpPW4oNDUpKFwidG9TdHJpbmdUYWdcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXt0JiYhbyh0PW4/dDp0LnByb3RvdHlwZSxpKSYmcih0LGkse2NvbmZpZ3VyYWJsZTohMCx2YWx1ZTplfSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big0MCkoXCJ3a3NcIiksbz1uKDQxKSxpPW4oMTEpLlN5bWJvbCx1PVwiZnVuY3Rpb25cIj09dHlwZW9mIGksYT10LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHJbdF18fChyW3RdPXUmJmlbdF18fCh1P2k6bykoXCJTeW1ib2wuXCIrdCkpfTthLnN0b3JlPXJ9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDI1KSxvPW4oNDcpLGk9bigzOSkoXCJJRV9QUk9UT1wiKSx1PU9iamVjdC5wcm90b3R5cGU7dC5leHBvcnRzPU9iamVjdC5nZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24odCl7cmV0dXJuIHQ9byh0KSxyKHQsaSk/dFtpXTpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmNvbnN0cnVjdG9yJiZ0IGluc3RhbmNlb2YgdC5jb25zdHJ1Y3Rvcj90LmNvbnN0cnVjdG9yLnByb3RvdHlwZTp0IGluc3RhbmNlb2YgT2JqZWN0P3U6bnVsbH19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDcpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0KHIodCkpfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMTMpLG89bigxMCksaT1uKDQ3KSx1PW4oNDkpLGE9big1MCksYz1uKDM3KSxsPW4oNTEpLGY9big1Mik7byhvLlMrby5GKiFuKDU0KShmdW5jdGlvbih0KXtBcnJheS5mcm9tKHQpfSksXCJBcnJheVwiLHtmcm9tOmZ1bmN0aW9uKHQpe3ZhciBlLG4sbyxzLGQ9aSh0KSxoPVwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXM/dGhpczpBcnJheSx2PWFyZ3VtZW50cy5sZW5ndGgsXz12PjE/YXJndW1lbnRzWzFdOnZvaWQgMCxwPXZvaWQgMCE9PV8seT0wLGI9ZihkKTtpZihwJiYoXz1yKF8sdj4yP2FyZ3VtZW50c1syXTp2b2lkIDAsMikpLHZvaWQgMD09Ynx8aD09QXJyYXkmJmEoYikpZm9yKGU9YyhkLmxlbmd0aCksbj1uZXcgaChlKTtlPnk7eSsrKWwobix5LHA/XyhkW3ldLHkpOmRbeV0pO2Vsc2UgZm9yKHM9Yi5jYWxsKGQpLG49bmV3IGg7IShvPXMubmV4dCgpKS5kb25lO3krKylsKG4seSxwP3UocyxfLFtvLnZhbHVlLHldLCEwKTpvLnZhbHVlKTtyZXR1cm4gbi5sZW5ndGg9eSxufX0pfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxNyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuLG8pe3RyeXtyZXR1cm4gbz9lKHIobilbMF0sblsxXSk6ZShuKX1jYXRjaChlKXt2YXIgaT10LnJldHVybjt0aHJvdyB2b2lkIDAhPT1pJiZyKGkuY2FsbCh0KSksZX19fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigyNyksbz1uKDQ1KShcIml0ZXJhdG9yXCIpLGk9QXJyYXkucHJvdG90eXBlO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwIT09dCYmKHIuQXJyYXk9PT10fHxpW29dPT09dCl9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigxNiksbz1uKDI0KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4pe2UgaW4gdD9yLmYodCxlLG8oMCxuKSk6dFtlXT1ufX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNTMpLG89big0NSkoXCJpdGVyYXRvclwiKSxpPW4oMjcpO3QuZXhwb3J0cz1uKDEyKS5nZXRJdGVyYXRvck1ldGhvZD1mdW5jdGlvbih0KXtpZih2b2lkIDAhPXQpcmV0dXJuIHRbb118fHRbXCJAQGl0ZXJhdG9yXCJdfHxpW3IodCldfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMzUpLG89big0NSkoXCJ0b1N0cmluZ1RhZ1wiKSxpPVwiQXJndW1lbnRzXCI9PXIoZnVuY3Rpb24oKXtyZXR1cm4gYXJndW1lbnRzfSgpKSx1PWZ1bmN0aW9uKHQsZSl7dHJ5e3JldHVybiB0W2VdfWNhdGNoKHQpe319O3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZSxuLGE7cmV0dXJuIHZvaWQgMD09PXQ/XCJVbmRlZmluZWRcIjpudWxsPT09dD9cIk51bGxcIjpcInN0cmluZ1wiPT10eXBlb2Yobj11KGU9T2JqZWN0KHQpLG8pKT9uOmk/cihlKTpcIk9iamVjdFwiPT0oYT1yKGUpKSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5jYWxsZWU/XCJBcmd1bWVudHNcIjphfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNDUpKFwiaXRlcmF0b3JcIiksbz0hMTt0cnl7dmFyIGk9WzddW3JdKCk7aS5yZXR1cm49ZnVuY3Rpb24oKXtvPSEwfSxBcnJheS5mcm9tKGksZnVuY3Rpb24oKXt0aHJvdyAyfSl9Y2F0Y2godCl7fXQuZXhwb3J0cz1mdW5jdGlvbih0LGUpe2lmKCFlJiYhbylyZXR1cm4hMTt2YXIgbj0hMTt0cnl7dmFyIGk9WzddLHU9aVtyXSgpO3UubmV4dD1mdW5jdGlvbigpe3JldHVybntkb25lOm49ITB9fSxpW3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHV9LHQoaSl9Y2F0Y2godCl7fXJldHVybiBufX0sZnVuY3Rpb24odCxlLG4pe3QuZXhwb3J0cz17ZGVmYXVsdDpuKDU2KSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24odCxlLG4pe24oNCksbig1NyksdC5leHBvcnRzPW4oNjEpLmYoXCJpdGVyYXRvclwiKX0sZnVuY3Rpb24odCxlLG4pe24oNTgpO2Zvcih2YXIgcj1uKDExKSxvPW4oMTUpLGk9bigyNyksdT1uKDQ1KShcInRvU3RyaW5nVGFnXCIpLGE9XCJDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LERPTVRva2VuTGlzdCxEYXRhVHJhbnNmZXJJdGVtTGlzdCxGaWxlTGlzdCxIVE1MQWxsQ29sbGVjdGlvbixIVE1MQ29sbGVjdGlvbixIVE1MRm9ybUVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCxTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCxUZXh0VHJhY2tMaXN0LFRvdWNoTGlzdFwiLnNwbGl0KFwiLFwiKSxjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBsPWFbY10sZj1yW2xdLHM9ZiYmZi5wcm90b3R5cGU7cyYmIXNbdV0mJm8ocyx1LGwpLGlbbF09aS5BcnJheX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDU5KSxvPW4oNjApLGk9bigyNyksdT1uKDMzKTt0LmV4cG9ydHM9big4KShBcnJheSxcIkFycmF5XCIsZnVuY3Rpb24odCxlKXt0aGlzLl90PXUodCksdGhpcy5faT0wLHRoaXMuX2s9ZX0sZnVuY3Rpb24oKXt2YXIgdD10aGlzLl90LGU9dGhpcy5fayxuPXRoaXMuX2krKztyZXR1cm4hdHx8bj49dC5sZW5ndGg/KHRoaXMuX3Q9dm9pZCAwLG8oMSkpOlwia2V5c1wiPT1lP28oMCxuKTpcInZhbHVlc1wiPT1lP28oMCx0W25dKTpvKDAsW24sdFtuXV0pfSxcInZhbHVlc1wiKSxpLkFyZ3VtZW50cz1pLkFycmF5LHIoXCJrZXlzXCIpLHIoXCJ2YWx1ZXNcIikscihcImVudHJpZXNcIil9LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKCl7fX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtyZXR1cm57dmFsdWU6ZSxkb25lOiEhdH19fSxmdW5jdGlvbih0LGUsbil7ZS5mPW4oNDUpfSxmdW5jdGlvbih0LGUsbil7dC5leHBvcnRzPXtkZWZhdWx0Om4oNjMpLF9fZXNNb2R1bGU6ITB9fSxmdW5jdGlvbih0LGUsbil7big2NCksbig3NCksbig3NSksbig3NiksdC5leHBvcnRzPW4oMTIpLlN5bWJvbH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMTEpLG89bigyNSksaT1uKDIwKSx1PW4oMTApLGE9bigyNiksYz1uKDY1KS5LRVksbD1uKDIxKSxmPW4oNDApLHM9big0NCksZD1uKDQxKSxoPW4oNDUpLHY9big2MSksXz1uKDY2KSxwPW4oNjcpLHk9big3MCksYj1uKDE3KSxnPW4oMTgpLG09bigzMykseD1uKDIzKSxTPW4oMjQpLEU9bigyOSksTT1uKDcxKSxPPW4oNzMpLHc9bigxNiksUD1uKDMxKSxUPU8uZixrPXcuZixqPU0uZixBPXIuU3ltYm9sLEw9ci5KU09OLFI9TCYmTC5zdHJpbmdpZnksQz1cInByb3RvdHlwZVwiLEQ9aChcIl9oaWRkZW5cIiksST1oKFwidG9QcmltaXRpdmVcIiksTj17fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxGPWYoXCJzeW1ib2wtcmVnaXN0cnlcIiksSD1mKFwic3ltYm9sc1wiKSx6PWYoXCJvcC1zeW1ib2xzXCIpLEI9T2JqZWN0W0NdLEc9XCJmdW5jdGlvblwiPT10eXBlb2YgQSxWPXIuUU9iamVjdCxXPSFWfHwhVltDXXx8IVZbQ10uZmluZENoaWxkLEs9aSYmbChmdW5jdGlvbigpe3JldHVybiA3IT1FKGsoe30sXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBrKHRoaXMsXCJhXCIse3ZhbHVlOjd9KS5hfX0pKS5hfSk/ZnVuY3Rpb24odCxlLG4pe3ZhciByPVQoQixlKTtyJiZkZWxldGUgQltlXSxrKHQsZSxuKSxyJiZ0IT09QiYmayhCLGUscil9OmssVT1mdW5jdGlvbih0KXt2YXIgZT1IW3RdPUUoQVtDXSk7cmV0dXJuIGUuX2s9dCxlfSxZPUcmJlwic3ltYm9sXCI9PXR5cGVvZiBBLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIEF9LHE9ZnVuY3Rpb24odCxlLG4pe3JldHVybiB0PT09QiYmcSh6LGUsbiksYih0KSxlPXgoZSwhMCksYihuKSxvKEgsZSk/KG4uZW51bWVyYWJsZT8obyh0LEQpJiZ0W0RdW2VdJiYodFtEXVtlXT0hMSksbj1FKG4se2VudW1lcmFibGU6UygwLCExKX0pKToobyh0LEQpfHxrKHQsRCxTKDEse30pKSx0W0RdW2VdPSEwKSxLKHQsZSxuKSk6ayh0LGUsbil9LFg9ZnVuY3Rpb24odCxlKXtiKHQpO2Zvcih2YXIgbixyPXAoZT1tKGUpKSxvPTAsaT1yLmxlbmd0aDtpPm87KXEodCxuPXJbbysrXSxlW25dKTtyZXR1cm4gdH0sSj1mdW5jdGlvbih0LGUpe3JldHVybiB2b2lkIDA9PT1lP0UodCk6WChFKHQpLGUpfSxRPWZ1bmN0aW9uKHQpe3ZhciBlPU4uY2FsbCh0aGlzLHQ9eCh0LCEwKSk7cmV0dXJuISh0aGlzPT09QiYmbyhILHQpJiYhbyh6LHQpKSYmKCEoZXx8IW8odGhpcyx0KXx8IW8oSCx0KXx8byh0aGlzLEQpJiZ0aGlzW0RdW3RdKXx8ZSl9LFo9ZnVuY3Rpb24odCxlKXtpZih0PW0odCksZT14KGUsITApLHQhPT1CfHwhbyhILGUpfHxvKHosZSkpe3ZhciBuPVQodCxlKTtyZXR1cm4hbnx8IW8oSCxlKXx8byh0LEQpJiZ0W0RdW2VdfHwobi5lbnVtZXJhYmxlPSEwKSxufX0sJD1mdW5jdGlvbih0KXtmb3IodmFyIGUsbj1qKG0odCkpLHI9W10saT0wO24ubGVuZ3RoPmk7KW8oSCxlPW5baSsrXSl8fGU9PUR8fGU9PWN8fHIucHVzaChlKTtyZXR1cm4gcn0sdHQ9ZnVuY3Rpb24odCl7Zm9yKHZhciBlLG49dD09PUIscj1qKG4/ejptKHQpKSxpPVtdLHU9MDtyLmxlbmd0aD51OykhbyhILGU9clt1KytdKXx8biYmIW8oQixlKXx8aS5wdXNoKEhbZV0pO3JldHVybiBpfTtHfHwoQT1mdW5jdGlvbigpe2lmKHRoaXMgaW5zdGFuY2VvZiBBKXRocm93IFR5cGVFcnJvcihcIlN5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciFcIik7dmFyIHQ9ZChhcmd1bWVudHMubGVuZ3RoPjA/YXJndW1lbnRzWzBdOnZvaWQgMCksZT1mdW5jdGlvbihuKXt0aGlzPT09QiYmZS5jYWxsKHosbiksbyh0aGlzLEQpJiZvKHRoaXNbRF0sdCkmJih0aGlzW0RdW3RdPSExKSxLKHRoaXMsdCxTKDEsbikpfTtyZXR1cm4gaSYmVyYmSyhCLHQse2NvbmZpZ3VyYWJsZTohMCxzZXQ6ZX0pLFUodCl9LGEoQVtDXSxcInRvU3RyaW5nXCIsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fa30pLE8uZj1aLHcuZj1xLG4oNzIpLmY9TS5mPSQsbig2OSkuZj1RLG4oNjgpLmY9dHQsaSYmIW4oOSkmJmEoQixcInByb3BlcnR5SXNFbnVtZXJhYmxlXCIsUSwhMCksdi5mPWZ1bmN0aW9uKHQpe3JldHVybiBVKGgodCkpfSksdSh1LkcrdS5XK3UuRiohRyx7U3ltYm9sOkF9KTtmb3IodmFyIGV0PVwiaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXNcIi5zcGxpdChcIixcIiksbnQ9MDtldC5sZW5ndGg+bnQ7KWgoZXRbbnQrK10pO2Zvcih2YXIgcnQ9UChoLnN0b3JlKSxvdD0wO3J0Lmxlbmd0aD5vdDspXyhydFtvdCsrXSk7dSh1LlMrdS5GKiFHLFwiU3ltYm9sXCIse2ZvcjpmdW5jdGlvbih0KXtyZXR1cm4gbyhGLHQrPVwiXCIpP0ZbdF06Rlt0XT1BKHQpfSxrZXlGb3I6ZnVuY3Rpb24odCl7aWYoIVkodCkpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGEgc3ltYm9sIVwiKTtmb3IodmFyIGUgaW4gRilpZihGW2VdPT09dClyZXR1cm4gZX0sdXNlU2V0dGVyOmZ1bmN0aW9uKCl7Vz0hMH0sdXNlU2ltcGxlOmZ1bmN0aW9uKCl7Vz0hMX19KSx1KHUuUyt1LkYqIUcsXCJPYmplY3RcIix7Y3JlYXRlOkosZGVmaW5lUHJvcGVydHk6cSxkZWZpbmVQcm9wZXJ0aWVzOlgsZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOlosZ2V0T3duUHJvcGVydHlOYW1lczokLGdldE93blByb3BlcnR5U3ltYm9sczp0dH0pLEwmJnUodS5TK3UuRiooIUd8fGwoZnVuY3Rpb24oKXt2YXIgdD1BKCk7cmV0dXJuXCJbbnVsbF1cIiE9UihbdF0pfHxcInt9XCIhPVIoe2E6dH0pfHxcInt9XCIhPVIoT2JqZWN0KHQpKX0pKSxcIkpTT05cIix7c3RyaW5naWZ5OmZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxuLHI9W3RdLG89MTthcmd1bWVudHMubGVuZ3RoPm87KXIucHVzaChhcmd1bWVudHNbbysrXSk7aWYobj1lPXJbMV0sKGcoZSl8fHZvaWQgMCE9PXQpJiYhWSh0KSlyZXR1cm4geShlKXx8KGU9ZnVuY3Rpb24odCxlKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYoZT1uLmNhbGwodGhpcyx0LGUpKSwhWShlKSlyZXR1cm4gZX0pLHJbMV09ZSxSLmFwcGx5KEwscil9fSksQVtDXVtJXXx8bigxNSkoQVtDXSxJLEFbQ10udmFsdWVPZikscyhBLFwiU3ltYm9sXCIpLHMoTWF0aCxcIk1hdGhcIiwhMCkscyhyLkpTT04sXCJKU09OXCIsITApfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big0MSkoXCJtZXRhXCIpLG89bigxOCksaT1uKDI1KSx1PW4oMTYpLmYsYT0wLGM9T2JqZWN0LmlzRXh0ZW5zaWJsZXx8ZnVuY3Rpb24oKXtyZXR1cm4hMH0sbD0hbigyMSkoZnVuY3Rpb24oKXtyZXR1cm4gYyhPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKX0pLGY9ZnVuY3Rpb24odCl7dSh0LHIse3ZhbHVlOntpOlwiT1wiKyArK2Esdzp7fX19KX0scz1mdW5jdGlvbih0LGUpe2lmKCFvKHQpKXJldHVyblwic3ltYm9sXCI9PXR5cGVvZiB0P3Q6KFwic3RyaW5nXCI9PXR5cGVvZiB0P1wiU1wiOlwiUFwiKSt0O2lmKCFpKHQscikpe2lmKCFjKHQpKXJldHVyblwiRlwiO2lmKCFlKXJldHVyblwiRVwiO2YodCl9cmV0dXJuIHRbcl0uaX0sZD1mdW5jdGlvbih0LGUpe2lmKCFpKHQscikpe2lmKCFjKHQpKXJldHVybiEwO2lmKCFlKXJldHVybiExO2YodCl9cmV0dXJuIHRbcl0ud30saD1mdW5jdGlvbih0KXtyZXR1cm4gbCYmdi5ORUVEJiZjKHQpJiYhaSh0LHIpJiZmKHQpLHR9LHY9dC5leHBvcnRzPXtLRVk6cixORUVEOiExLGZhc3RLZXk6cyxnZXRXZWFrOmQsb25GcmVlemU6aH19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDExKSxvPW4oMTIpLGk9big5KSx1PW4oNjEpLGE9bigxNikuZjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9by5TeW1ib2x8fChvLlN5bWJvbD1pP3t9OnIuU3ltYm9sfHx7fSk7XCJfXCI9PXQuY2hhckF0KDApfHx0IGluIGV8fGEoZSx0LHt2YWx1ZTp1LmYodCl9KX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDMxKSxvPW4oNjgpLGk9big2OSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXIodCksbj1vLmY7aWYobilmb3IodmFyIHUsYT1uKHQpLGM9aS5mLGw9MDthLmxlbmd0aD5sOyljLmNhbGwodCx1PWFbbCsrXSkmJmUucHVzaCh1KTtyZXR1cm4gZX19LGZ1bmN0aW9uKHQsZSl7ZS5mPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHN9LGZ1bmN0aW9uKHQsZSl7ZS5mPXt9LnByb3BlcnR5SXNFbnVtZXJhYmxlfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigzNSk7dC5leHBvcnRzPUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKHQpe3JldHVyblwiQXJyYXlcIj09cih0KX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDMzKSxvPW4oNzIpLmYsaT17fS50b1N0cmluZyx1PVwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvdyYmT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM/T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KTpbXSxhPWZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4gbyh0KX1jYXRjaCh0KXtyZXR1cm4gdS5zbGljZSgpfX07dC5leHBvcnRzLmY9ZnVuY3Rpb24odCl7cmV0dXJuIHUmJlwiW29iamVjdCBXaW5kb3ddXCI9PWkuY2FsbCh0KT9hKHQpOm8ocih0KSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigzMiksbz1uKDQyKS5jb25jYXQoXCJsZW5ndGhcIixcInByb3RvdHlwZVwiKTtlLmY9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXN8fGZ1bmN0aW9uKHQpe3JldHVybiByKHQsbyl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big2OSksbz1uKDI0KSxpPW4oMzMpLHU9bigyMyksYT1uKDI1KSxjPW4oMTkpLGw9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtlLmY9bigyMCk/bDpmdW5jdGlvbih0LGUpe2lmKHQ9aSh0KSxlPXUoZSwhMCksYyl0cnl7cmV0dXJuIGwodCxlKX1jYXRjaCh0KXt9aWYoYSh0LGUpKXJldHVybiBvKCFyLmYuY2FsbCh0LGUpLHRbZV0pfX0sZnVuY3Rpb24odCxlKXt9LGZ1bmN0aW9uKHQsZSxuKXtuKDY2KShcImFzeW5jSXRlcmF0b3JcIil9LGZ1bmN0aW9uKHQsZSxuKXtuKDY2KShcIm9ic2VydmFibGVcIil9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX1mdW5jdGlvbiBvKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX12YXIgaT1uKDc4KSx1PXIoaSksYT1uKDgxKSxjPXIoYSksbD1uKDg1KSxmPXIobCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5TbW9vdGhTY3JvbGxiYXI9dm9pZCAwO3ZhciBzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lW25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSwoMCxmLmRlZmF1bHQpKHQsci5rZXkscil9fXJldHVybiBmdW5jdGlvbihlLG4scil7cmV0dXJuIG4mJnQoZS5wcm90b3R5cGUsbiksciYmdChlLHIpLGV9fSgpLGQ9big4OCksaD1uKDExNik7ZS5TbW9vdGhTY3JvbGxiYXI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGUpe3ZhciBuPXRoaXMscj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e307byh0aGlzLHQpLGUuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIixcIjFcIiksZS5zY3JvbGxUb3A9ZS5zY3JvbGxMZWZ0PTA7dmFyIGk9KDAsaC5maW5kQ2hpbGQpKGUsXCJzY3JvbGwtY29udGVudFwiKSxhPSgwLGguZmluZENoaWxkKShlLFwib3ZlcnNjcm9sbC1nbG93XCIpLGw9KDAsaC5maW5kQ2hpbGQpKGUsXCJzY3JvbGxiYXItdHJhY2steFwiKSxmPSgwLGguZmluZENoaWxkKShlLFwic2Nyb2xsYmFyLXRyYWNrLXlcIik7aWYoKDAsaC5zZXRTdHlsZSkoZSx7b3ZlcmZsb3c6XCJoaWRkZW5cIixvdXRsaW5lOlwibm9uZVwifSksKDAsaC5zZXRTdHlsZSkoYSx7ZGlzcGxheTpcIm5vbmVcIixcInBvaW50ZXItZXZlbnRzXCI6XCJub25lXCJ9KSx0aGlzLl9fcmVhZG9ubHkoXCJ0YXJnZXRzXCIsKDAsYy5kZWZhdWx0KSh7Y29udGFpbmVyOmUsY29udGVudDppLGNhbnZhczp7ZWxlbTphLGNvbnRleHQ6YS5nZXRDb250ZXh0KFwiMmRcIil9LHhBeGlzOigwLGMuZGVmYXVsdCkoe3RyYWNrOmwsdGh1bWI6KDAsaC5maW5kQ2hpbGQpKGwsXCJzY3JvbGxiYXItdGh1bWIteFwiKX0pLHlBeGlzOigwLGMuZGVmYXVsdCkoe3RyYWNrOmYsdGh1bWI6KDAsaC5maW5kQ2hpbGQpKGYsXCJzY3JvbGxiYXItdGh1bWIteVwiKX0pfSkpLl9fcmVhZG9ubHkoXCJvZmZzZXRcIix7eDowLHk6MH0pLl9fcmVhZG9ubHkoXCJ0aHVtYk9mZnNldFwiLHt4OjAseTowfSkuX19yZWFkb25seShcImxpbWl0XCIse3g6MS8wLHk6MS8wfSkuX19yZWFkb25seShcIm1vdmVtZW50XCIse3g6MCx5OjB9KS5fX3JlYWRvbmx5KFwibW92ZW1lbnRMb2NrZWRcIix7eDohMSx5OiExfSkuX19yZWFkb25seShcIm92ZXJzY3JvbGxSZW5kZXJlZFwiLHt4OjAseTowfSkuX19yZWFkb25seShcIm92ZXJzY3JvbGxCYWNrXCIsITEpLl9fcmVhZG9ubHkoXCJ0aHVtYlNpemVcIix7eDowLHk6MCxyZWFsWDowLHJlYWxZOjB9KS5fX3JlYWRvbmx5KFwiYm91bmRpbmdcIix7dG9wOjAscmlnaHQ6MCxib3R0b206MCxsZWZ0OjB9KS5fX3JlYWRvbmx5KFwiY2hpbGRyZW5cIixbXSkuX19yZWFkb25seShcInBhcmVudHNcIixbXSkuX19yZWFkb25seShcInNpemVcIix0aGlzLmdldFNpemUoKSkuX19yZWFkb25seShcImlzTmVzdGVkU2Nyb2xsYmFyXCIsITEpLCgwLHUuZGVmYXVsdCkodGhpcyx7X19oaWRlVHJhY2tUaHJvdHRsZTp7dmFsdWU6KDAsaC5kZWJvdW5jZSkodGhpcy5oaWRlVHJhY2suYmluZCh0aGlzKSwxZTMsITEpfSxfX3VwZGF0ZVRocm90dGxlOnt2YWx1ZTooMCxoLmRlYm91bmNlKSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKX0sX190b3VjaFJlY29yZDp7dmFsdWU6bmV3IGguVG91Y2hSZWNvcmR9LF9fbGlzdGVuZXJzOnt2YWx1ZTpbXX0sX19oYW5kbGVyczp7dmFsdWU6W119LF9fY2hpbGRyZW46e3ZhbHVlOltdfSxfX3RpbWVySUQ6e3ZhbHVlOnt9fX0pLHRoaXMuX19pbml0T3B0aW9ucyhyKSx0aGlzLl9faW5pdFJldmVyc2VXaGVlbCgpLHRoaXMuX19pbml0U2Nyb2xsYmFyKCksZC5zYkxpc3Quc2V0KGUsdGhpcyksXCJmdW5jdGlvblwiPT10eXBlb2YgZC5HTE9CQUxfRU5WLk11dGF0aW9uT2JzZXJ2ZXIpe3ZhciBzPW5ldyBkLkdMT0JBTF9FTlYuTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbigpe24udXBkYXRlKCEwKX0pO3Mub2JzZXJ2ZShpLHtjaGlsZExpc3Q6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcIl9fb2JzZXJ2ZXJcIix7dmFsdWU6c30pfX1yZXR1cm4gcyh0LFt7a2V5OlwiTUFYX09WRVJTQ1JPTExcIixnZXQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLm9wdGlvbnMsZT10aGlzLnNpemU7c3dpdGNoKHQub3ZlcnNjcm9sbEVmZmVjdCl7Y2FzZVwiYm91bmNlXCI6dmFyIG49TWF0aC5mbG9vcihNYXRoLnNxcnQoTWF0aC5wb3coZS5jb250YWluZXIud2lkdGgsMikrTWF0aC5wb3coZS5jb250YWluZXIuaGVpZ2h0LDIpKSkscj10aGlzLl9faXNNb3ZlbWVudExvY2tlZCgpPzI6MTA7cmV0dXJuIGQuR0xPQkFMX0VOVi5UT1VDSF9TVVBQT1JURUQ/KDAsaC5waWNrSW5SYW5nZSkobi9yLDEwMCwxZTMpOigwLGgucGlja0luUmFuZ2UpKG4vMTAsMjUsNTApO2Nhc2VcImdsb3dcIjpyZXR1cm4gMTUwO2RlZmF1bHQ6cmV0dXJuIDB9fX0se2tleTpcInNjcm9sbFRvcFwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm9mZnNldC55fX0se2tleTpcInNjcm9sbExlZnRcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vZmZzZXQueH19XSksdH0oKX0sZnVuY3Rpb24odCxlLG4pe3QuZXhwb3J0cz17ZGVmYXVsdDpuKDc5KSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24odCxlLG4pe24oODApO3ZhciByPW4oMTIpLk9iamVjdDt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gci5kZWZpbmVQcm9wZXJ0aWVzKHQsZSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxMCk7cihyLlMrci5GKiFuKDIwKSxcIk9iamVjdFwiLHtkZWZpbmVQcm9wZXJ0aWVzOm4oMzApfSl9LGZ1bmN0aW9uKHQsZSxuKXt0LmV4cG9ydHM9e2RlZmF1bHQ6big4MiksX19lc01vZHVsZTohMH19LGZ1bmN0aW9uKHQsZSxuKXtuKDgzKSx0LmV4cG9ydHM9bigxMikuT2JqZWN0LmZyZWV6ZX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTgpLG89big2NSkub25GcmVlemU7big4NCkoXCJmcmVlemVcIixmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIHQmJnIoZSk/dChvKGUpKTplfX0pfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxMCksbz1uKDEyKSxpPW4oMjEpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3ZhciBuPShvLk9iamVjdHx8e30pW3RdfHxPYmplY3RbdF0sdT17fTt1W3RdPWUobikscihyLlMrci5GKmkoZnVuY3Rpb24oKXtuKDEpfSksXCJPYmplY3RcIix1KX19LGZ1bmN0aW9uKHQsZSxuKXt0LmV4cG9ydHM9e2RlZmF1bHQ6big4NiksX19lc01vZHVsZTohMH19LGZ1bmN0aW9uKHQsZSxuKXtuKDg3KTt2YXIgcj1uKDEyKS5PYmplY3Q7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gci5kZWZpbmVQcm9wZXJ0eSh0LGUsbil9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxMCk7cihyLlMrci5GKiFuKDIwKSxcIk9iamVjdFwiLHtkZWZpbmVQcm9wZXJ0eTpuKDE2KS5mfSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX12YXIgbz1uKDg1KSxpPXIobyksdT1uKDg5KSxhPXIodSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGM9big5Mik7KDAsYS5kZWZhdWx0KShjKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wiZGVmYXVsdFwiIT09dCYmXCJfX2VzTW9kdWxlXCIhPT10JiYoMCxpLmRlZmF1bHQpKGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gY1t0XX19KX0pfSxmdW5jdGlvbih0LGUsbil7dC5leHBvcnRzPXtkZWZhdWx0Om4oOTApLF9fZXNNb2R1bGU6ITB9fSxmdW5jdGlvbih0LGUsbil7big5MSksdC5leHBvcnRzPW4oMTIpLk9iamVjdC5rZXlzfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big0Nyksbz1uKDMxKTtuKDg0KShcImtleXNcIixmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gbyhyKHQpKX19KX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fXZhciBvPW4oODUpLGk9cihvKSx1PW4oODkpLGE9cih1KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYz1uKDkzKTsoMCxhLmRlZmF1bHQpKGMpLmZvckVhY2goZnVuY3Rpb24odCl7XCJkZWZhdWx0XCIhPT10JiZcIl9fZXNNb2R1bGVcIiE9PXQmJigwLGkuZGVmYXVsdCkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBjW3RdfX0pfSk7dmFyIGw9big5NCk7KDAsYS5kZWZhdWx0KShsKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wiZGVmYXVsdFwiIT09dCYmXCJfX2VzTW9kdWxlXCIhPT10JiYoMCxpLmRlZmF1bHQpKGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbFt0XX19KX0pO3ZhciBmPW4oMTE1KTsoMCxhLmRlZmF1bHQpKGYpLmZvckVhY2goZnVuY3Rpb24odCl7XCJkZWZhdWx0XCIhPT10JiZcIl9fZXNNb2R1bGVcIiE9PXQmJigwLGkuZGVmYXVsdCkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBmW3RdfX0pfSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX12YXIgbz1uKDg1KSxpPXIobyksdT1uKDg5KSxhPXIodSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGM9ZnVuY3Rpb24odCl7dmFyIGU9e30sbj17fTtyZXR1cm4oMCxhLmRlZmF1bHQpKHQpLmZvckVhY2goZnVuY3Rpb24ocil7KDAsaS5kZWZhdWx0KShlLHIse2dldDpmdW5jdGlvbigpe2lmKCFuLmhhc093blByb3BlcnR5KHIpKXt2YXIgZT10W3JdO25bcl09ZSgpfXJldHVybiBuW3JdfX0pfSksZX0sbD17TXV0YXRpb25PYnNlcnZlcjpmdW5jdGlvbigpe3JldHVybiB3aW5kb3cuTXV0YXRpb25PYnNlcnZlcnx8d2luZG93LldlYktpdE11dGF0aW9uT2JzZXJ2ZXJ8fHdpbmRvdy5Nb3pNdXRhdGlvbk9ic2VydmVyfSxUT1VDSF9TVVBQT1JURUQ6ZnVuY3Rpb24oKXtyZXR1cm5cIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnR9LEVBU0lOR19NVUxUSVBMSUVSOmZ1bmN0aW9uKCl7cmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvKT8uNTouMjV9LFdIRUVMX0VWRU5UOmZ1bmN0aW9uKCl7cmV0dXJuXCJvbndoZWVsXCJpbiB3aW5kb3c/XCJ3aGVlbFwiOlwibW91c2V3aGVlbFwifX07ZS5HTE9CQUxfRU5WPWMobCl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX12YXIgbz1uKDk1KSxpPXIobyk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHU9bmV3IGkuZGVmYXVsdCxhPXUuc2V0LmJpbmQodSksYz11LmRlbGV0ZS5iaW5kKHUpO3UudXBkYXRlPWZ1bmN0aW9uKCl7dS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QuX191cGRhdGVUcmVlKCl9KX0sdS5kZWxldGU9ZnVuY3Rpb24oKXt2YXIgdD1jLmFwcGx5KHZvaWQgMCxhcmd1bWVudHMpO3JldHVybiB1LnVwZGF0ZSgpLHR9LHUuc2V0PWZ1bmN0aW9uKCl7dmFyIHQ9YS5hcHBseSh2b2lkIDAsYXJndW1lbnRzKTtyZXR1cm4gdS51cGRhdGUoKSx0fSxlLnNiTGlzdD11fSxmdW5jdGlvbih0LGUsbil7dC5leHBvcnRzPXtkZWZhdWx0Om4oOTYpLF9fZXNNb2R1bGU6ITB9fSxmdW5jdGlvbih0LGUsbil7big3NCksbig0KSxuKDU3KSxuKDk3KSxuKDEwOCksbigxMTEpLG4oMTEzKSx0LmV4cG9ydHM9bigxMikuTWFwfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9big5OCksbz1uKDEwMyksaT1cIk1hcFwiO3QuZXhwb3J0cz1uKDEwNCkoaSxmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdCh0aGlzLGFyZ3VtZW50cy5sZW5ndGg+MD9hcmd1bWVudHNbMF06dm9pZCAwKX19LHtnZXQ6ZnVuY3Rpb24odCl7dmFyIGU9ci5nZXRFbnRyeShvKHRoaXMsaSksdCk7cmV0dXJuIGUmJmUudn0sc2V0OmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHIuZGVmKG8odGhpcyxpKSwwPT09dD8wOnQsZSl9fSxyLCEwKX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMTYpLmYsbz1uKDI5KSxpPW4oOTkpLHU9bigxMyksYT1uKDEwMCksYz1uKDEwMSksbD1uKDgpLGY9big2MCkscz1uKDEwMiksZD1uKDIwKSxoPW4oNjUpLmZhc3RLZXksdj1uKDEwMyksXz1kP1wiX3NcIjpcInNpemVcIixwPWZ1bmN0aW9uKHQsZSl7dmFyIG4scj1oKGUpO2lmKFwiRlwiIT09cilyZXR1cm4gdC5faVtyXTtmb3Iobj10Ll9mO247bj1uLm4paWYobi5rPT1lKXJldHVybiBufTt0LmV4cG9ydHM9e2dldENvbnN0cnVjdG9yOmZ1bmN0aW9uKHQsZSxuLGwpe3ZhciBmPXQoZnVuY3Rpb24odCxyKXthKHQsZixlLFwiX2lcIiksdC5fdD1lLHQuX2k9byhudWxsKSx0Ll9mPXZvaWQgMCx0Ll9sPXZvaWQgMCx0W19dPTAsdm9pZCAwIT1yJiZjKHIsbix0W2xdLHQpfSk7cmV0dXJuIGkoZi5wcm90b3R5cGUse2NsZWFyOmZ1bmN0aW9uKCl7Zm9yKHZhciB0PXYodGhpcyxlKSxuPXQuX2kscj10Ll9mO3I7cj1yLm4pci5yPSEwLHIucCYmKHIucD1yLnAubj12b2lkIDApLGRlbGV0ZSBuW3IuaV07dC5fZj10Ll9sPXZvaWQgMCx0W19dPTB9LGRlbGV0ZTpmdW5jdGlvbih0KXt2YXIgbj12KHRoaXMsZSkscj1wKG4sdCk7aWYocil7dmFyIG89ci5uLGk9ci5wO2RlbGV0ZSBuLl9pW3IuaV0sci5yPSEwLGkmJihpLm49byksbyYmKG8ucD1pKSxuLl9mPT1yJiYobi5fZj1vKSxuLl9sPT1yJiYobi5fbD1pKSxuW19dLS19cmV0dXJuISFyfSxmb3JFYWNoOmZ1bmN0aW9uKHQpe3YodGhpcyxlKTtmb3IodmFyIG4scj11KHQsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsMyk7bj1uP24ubjp0aGlzLl9mOylmb3IocihuLnYsbi5rLHRoaXMpO24mJm4ucjspbj1uLnB9LGhhczpmdW5jdGlvbih0KXtyZXR1cm4hIXAodih0aGlzLGUpLHQpfX0pLGQmJnIoZi5wcm90b3R5cGUsXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB2KHRoaXMsZSlbX119fSksZn0sZGVmOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcixvLGk9cCh0LGUpO3JldHVybiBpP2kudj1uOih0Ll9sPWk9e2k6bz1oKGUsITApLGs6ZSx2Om4scDpyPXQuX2wsbjp2b2lkIDAscjohMX0sdC5fZnx8KHQuX2Y9aSksciYmKHIubj1pKSx0W19dKyssXCJGXCIhPT1vJiYodC5faVtvXT1pKSksdH0sZ2V0RW50cnk6cCxzZXRTdHJvbmc6ZnVuY3Rpb24odCxlLG4pe2wodCxlLGZ1bmN0aW9uKHQsbil7dGhpcy5fdD12KHQsZSksdGhpcy5faz1uLHRoaXMuX2w9dm9pZCAwfSxmdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLGU9dC5fayxuPXQuX2w7biYmbi5yOyluPW4ucDtyZXR1cm4gdC5fdCYmKHQuX2w9bj1uP24ubjp0Ll90Ll9mKT9cImtleXNcIj09ZT9mKDAsbi5rKTpcInZhbHVlc1wiPT1lP2YoMCxuLnYpOmYoMCxbbi5rLG4udl0pOih0Ll90PXZvaWQgMCxmKDEpKX0sbj9cImVudHJpZXNcIjpcInZhbHVlc1wiLCFuLCEwKSxzKGUpfX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDE1KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4pe2Zvcih2YXIgbyBpbiBlKW4mJnRbb10/dFtvXT1lW29dOnIodCxvLGVbb10pO3JldHVybiB0fX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4scil7aWYoISh0IGluc3RhbmNlb2YgZSl8fHZvaWQgMCE9PXImJnIgaW4gdCl0aHJvdyBUeXBlRXJyb3IobitcIjogaW5jb3JyZWN0IGludm9jYXRpb24hXCIpO3JldHVybiB0fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTMpLG89big0OSksaT1uKDUwKSx1PW4oMTcpLGE9bigzNyksYz1uKDUyKSxsPXt9LGY9e30sZT10LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4scyxkKXt2YXIgaCx2LF8scCx5PWQ/ZnVuY3Rpb24oKXtyZXR1cm4gdH06Yyh0KSxiPXIobixzLGU/MjoxKSxnPTA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgeSl0aHJvdyBUeXBlRXJyb3IodCtcIiBpcyBub3QgaXRlcmFibGUhXCIpO2lmKGkoeSkpe2ZvcihoPWEodC5sZW5ndGgpO2g+ZztnKyspaWYocD1lP2IodSh2PXRbZ10pWzBdLHZbMV0pOmIodFtnXSkscD09PWx8fHA9PT1mKXJldHVybiBwfWVsc2UgZm9yKF89eS5jYWxsKHQpOyEodj1fLm5leHQoKSkuZG9uZTspaWYocD1vKF8sYix2LnZhbHVlLGUpLHA9PT1sfHxwPT09ZilyZXR1cm4gcH07ZS5CUkVBSz1sLGUuUkVUVVJOPWZ9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDExKSxvPW4oMTIpLGk9bigxNiksdT1uKDIwKSxhPW4oNDUpKFwic3BlY2llc1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9XCJmdW5jdGlvblwiPT10eXBlb2Ygb1t0XT9vW3RdOnJbdF07dSYmZSYmIWVbYV0mJmkuZihlLGEse2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc319KX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDE4KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtpZighcih0KXx8dC5fdCE9PWUpdGhyb3cgVHlwZUVycm9yKFwiSW5jb21wYXRpYmxlIHJlY2VpdmVyLCBcIitlK1wiIHJlcXVpcmVkIVwiKTtyZXR1cm4gdH19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDExKSxvPW4oMTApLGk9big2NSksdT1uKDIxKSxhPW4oMTUpLGM9big5OSksbD1uKDEwMSksZj1uKDEwMCkscz1uKDE4KSxkPW4oNDQpLGg9bigxNikuZix2PW4oMTA1KSgwKSxfPW4oMjApO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUsbixwLHksYil7dmFyIGc9clt0XSxtPWcseD15P1wic2V0XCI6XCJhZGRcIixTPW0mJm0ucHJvdG90eXBlLEU9e307cmV0dXJuIF8mJlwiZnVuY3Rpb25cIj09dHlwZW9mIG0mJihifHxTLmZvckVhY2gmJiF1KGZ1bmN0aW9uKCl7KG5ldyBtKS5lbnRyaWVzKCkubmV4dCgpfSkpPyhtPWUoZnVuY3Rpb24oZSxuKXtmKGUsbSx0LFwiX2NcIiksZS5fYz1uZXcgZyx2b2lkIDAhPW4mJmwobix5LGVbeF0sZSl9KSx2KFwiYWRkLGNsZWFyLGRlbGV0ZSxmb3JFYWNoLGdldCxoYXMsc2V0LGtleXMsdmFsdWVzLGVudHJpZXMsdG9KU09OXCIuc3BsaXQoXCIsXCIpLGZ1bmN0aW9uKHQpe3ZhciBlPVwiYWRkXCI9PXR8fFwic2V0XCI9PXQ7dCBpbiBTJiYoIWJ8fFwiY2xlYXJcIiE9dCkmJmEobS5wcm90b3R5cGUsdCxmdW5jdGlvbihuLHIpe2lmKGYodGhpcyxtLHQpLCFlJiZiJiYhcyhuKSlyZXR1cm5cImdldFwiPT10JiZ2b2lkIDA7dmFyIG89dGhpcy5fY1t0XSgwPT09bj8wOm4scik7cmV0dXJuIGU/dGhpczpvfSl9KSxifHxoKG0ucHJvdG90eXBlLFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYy5zaXplfX0pKToobT1wLmdldENvbnN0cnVjdG9yKGUsdCx5LHgpLGMobS5wcm90b3R5cGUsbiksaS5ORUVEPSEwKSxkKG0sdCksRVt0XT1tLG8oby5HK28uVytvLkYsRSksYnx8cC5zZXRTdHJvbmcobSx0LHkpLG19fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxMyksbz1uKDM0KSxpPW4oNDcpLHU9bigzNyksYT1uKDEwNik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7dmFyIG49MT09dCxjPTI9PXQsbD0zPT10LGY9ND09dCxzPTY9PXQsZD01PT10fHxzLGg9ZXx8YTtyZXR1cm4gZnVuY3Rpb24oZSxhLHYpe2Zvcih2YXIgXyxwLHk9aShlKSxiPW8oeSksZz1yKGEsdiwzKSxtPXUoYi5sZW5ndGgpLHg9MCxTPW4/aChlLG0pOmM/aChlLDApOnZvaWQgMDttPng7eCsrKWlmKChkfHx4IGluIGIpJiYoXz1iW3hdLHA9ZyhfLHgseSksdCkpaWYobilTW3hdPXA7ZWxzZSBpZihwKXN3aXRjaCh0KXtjYXNlIDM6cmV0dXJuITA7Y2FzZSA1OnJldHVybiBfO2Nhc2UgNjpyZXR1cm4geDtjYXNlIDI6Uy5wdXNoKF8pfWVsc2UgaWYoZilyZXR1cm4hMTtyZXR1cm4gcz8tMTpsfHxmP2Y6U319fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxMDcpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3JldHVybiBuZXcocih0KSkoZSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxOCksbz1uKDcwKSxpPW4oNDUpKFwic3BlY2llc1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU7cmV0dXJuIG8odCkmJihlPXQuY29uc3RydWN0b3IsXCJmdW5jdGlvblwiIT10eXBlb2YgZXx8ZSE9PUFycmF5JiYhbyhlLnByb3RvdHlwZSl8fChlPXZvaWQgMCkscihlKSYmKGU9ZVtpXSxudWxsPT09ZSYmKGU9dm9pZCAwKSkpLHZvaWQgMD09PWU/QXJyYXk6ZX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDEwKTtyKHIuUCtyLlIsXCJNYXBcIix7dG9KU09OOm4oMTA5KShcIk1hcFwiKX0pfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big1Myksbz1uKDExMCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbigpe2lmKHIodGhpcykhPXQpdGhyb3cgVHlwZUVycm9yKHQrXCIjdG9KU09OIGlzbid0IGdlbmVyaWNcIik7cmV0dXJuIG8odGhpcyl9fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTAxKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXt2YXIgbj1bXTtyZXR1cm4gcih0LCExLG4ucHVzaCxuLGUpLG59fSxmdW5jdGlvbih0LGUsbil7bigxMTIpKFwiTWFwXCIpfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigxMCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3Ioci5TLHQse29mOmZ1bmN0aW9uKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsZT1uZXcgQXJyYXkodCk7dC0tOyllW3RdPWFyZ3VtZW50c1t0XTtyZXR1cm4gbmV3IHRoaXMoZSl9fSl9fSxmdW5jdGlvbih0LGUsbil7bigxMTQpKFwiTWFwXCIpfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigxMCksbz1uKDE0KSxpPW4oMTMpLHU9bigxMDEpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyKHIuUyx0LHtmcm9tOmZ1bmN0aW9uKHQpe3ZhciBlLG4scixhLGM9YXJndW1lbnRzWzFdO3JldHVybiBvKHRoaXMpLGU9dm9pZCAwIT09YyxlJiZvKGMpLHZvaWQgMD09dD9uZXcgdGhpczoobj1bXSxlPyhyPTAsYT1pKGMsYXJndW1lbnRzWzJdLDIpLHUodCwhMSxmdW5jdGlvbih0KXtuLnB1c2goYSh0LHIrKykpfSkpOnUodCwhMSxuLnB1c2gsbiksbmV3IHRoaXMobikpfX0pfX0sZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtlLnNlbGVjdG9ycz1cInNjcm9sbGJhciwgW3Njcm9sbGJhcl0sIFtkYXRhLXNjcm9sbGJhcl1cIn0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fXZhciBvPW4oODUpLGk9cihvKSx1PW4oODkpLGE9cih1KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYz1uKDExNyk7KDAsYS5kZWZhdWx0KShjKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wiZGVmYXVsdFwiIT09dCYmXCJfX2VzTW9kdWxlXCIhPT10JiYoMCxpLmRlZmF1bHQpKGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gY1t0XX19KX0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19dmFyIG89big4NSksaT1yKG8pLHU9big4OSksYT1yKHUpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBjPW4oMTE4KTsoMCxhLmRlZmF1bHQpKGMpLmZvckVhY2goZnVuY3Rpb24odCl7XCJkZWZhdWx0XCIhPT10JiZcIl9fZXNNb2R1bGVcIiE9PXQmJigwLGkuZGVmYXVsdCkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBjW3RdfX0pfSk7dmFyIGw9bigxMTkpOygwLGEuZGVmYXVsdCkobCkuZm9yRWFjaChmdW5jdGlvbih0KXtcImRlZmF1bHRcIiE9PXQmJlwiX19lc01vZHVsZVwiIT09dCYmKDAsaS5kZWZhdWx0KShlLHQse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGxbdF19fSl9KTt2YXIgZj1uKDEyMCk7KDAsYS5kZWZhdWx0KShmKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wiZGVmYXVsdFwiIT09dCYmXCJfX2VzTW9kdWxlXCIhPT10JiYoMCxpLmRlZmF1bHQpKGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZlt0XX19KX0pO3ZhciBzPW4oMTIxKTsoMCxhLmRlZmF1bHQpKHMpLmZvckVhY2goZnVuY3Rpb24odCl7XCJkZWZhdWx0XCIhPT10JiZcIl9fZXNNb2R1bGVcIiE9PXQmJigwLGkuZGVmYXVsdCkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBzW3RdfX0pfSk7dmFyIGQ9bigxMjIpOygwLGEuZGVmYXVsdCkoZCkuZm9yRWFjaChmdW5jdGlvbih0KXtcImRlZmF1bHRcIiE9PXQmJlwiX19lc01vZHVsZVwiIT09dCYmKDAsaS5kZWZhdWx0KShlLHQse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGRbdF19fSl9KTt2YXIgaD1uKDEyMyk7KDAsYS5kZWZhdWx0KShoKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wiZGVmYXVsdFwiIT09dCYmXCJfX2VzTW9kdWxlXCIhPT10JiYoMCxpLmRlZmF1bHQpKGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gaFt0XX19KX0pO3ZhciB2PW4oMTI0KTsoMCxhLmRlZmF1bHQpKHYpLmZvckVhY2goZnVuY3Rpb24odCl7XCJkZWZhdWx0XCIhPT10JiZcIl9fZXNNb2R1bGVcIiE9PXQmJigwLGkuZGVmYXVsdCkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB2W3RdfX0pfSk7dmFyIF89bigxMjUpOygwLGEuZGVmYXVsdCkoXykuZm9yRWFjaChmdW5jdGlvbih0KXtcImRlZmF1bHRcIiE9PXQmJlwiX19lc01vZHVsZVwiIT09dCYmKDAsaS5kZWZhdWx0KShlLHQse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIF9bdF19fSl9KTt2YXIgcD1uKDEyNik7KDAsYS5kZWZhdWx0KShwKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wiZGVmYXVsdFwiIT09dCYmXCJfX2VzTW9kdWxlXCIhPT10JiYoMCxpLmRlZmF1bHQpKGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcFt0XX19KX0pO3ZhciB5PW4oMTI3KTsoMCxhLmRlZmF1bHQpKHkpLmZvckVhY2goZnVuY3Rpb24odCl7XCJkZWZhdWx0XCIhPT10JiZcIl9fZXNNb2R1bGVcIiE9PXQmJigwLGkuZGVmYXVsdCkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB5W3RdfX0pfSk7dmFyIGI9bigxMjgpO1xuKDAsYS5kZWZhdWx0KShiKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wiZGVmYXVsdFwiIT09dCYmXCJfX2VzTW9kdWxlXCIhPT10JiYoMCxpLmRlZmF1bHQpKGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYlt0XX19KX0pfSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2UuYnVpbGRDdXJ2ZT1mdW5jdGlvbih0LGUpe3ZhciBuPVtdO2lmKGU8PTApcmV0dXJuIG47Zm9yKHZhciByPU1hdGgucm91bmQoZS8xZTMqNjApLTEsbz10P01hdGgucG93KDEvTWF0aC5hYnModCksMS9yKTowLGk9MTtpPD1yO2krKyluLnB1c2godC10Kk1hdGgucG93KG8saSkpO3JldHVybiBuLnB1c2godCksbn19LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49MTAwO2UuZGVib3VuY2U9ZnVuY3Rpb24odCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOm4scj0hKGFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdKXx8YXJndW1lbnRzWzJdO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQpe3ZhciBvPXZvaWQgMDtyZXR1cm4gZnVuY3Rpb24oKXtmb3IodmFyIG49YXJndW1lbnRzLmxlbmd0aCxpPUFycmF5KG4pLHU9MDt1PG47dSsrKWlbdV09YXJndW1lbnRzW3VdOyFvJiZyJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIHQuYXBwbHkodm9pZCAwLGkpfSksY2xlYXJUaW1lb3V0KG8pLG89c2V0VGltZW91dChmdW5jdGlvbigpe289dm9pZCAwLHQuYXBwbHkodm9pZCAwLGkpfSxlKX19fX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fWZ1bmN0aW9uIG8odCl7aWYoQXJyYXkuaXNBcnJheSh0KSl7Zm9yKHZhciBlPTAsbj1BcnJheSh0Lmxlbmd0aCk7ZTx0Lmxlbmd0aDtlKyspbltlXT10W2VdO3JldHVybiBufXJldHVybigwLHUuZGVmYXVsdCkodCl9dmFyIGk9bigyKSx1PXIoaSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7ZS5maW5kQ2hpbGQ9ZnVuY3Rpb24odCxlKXt2YXIgbj10LmNoaWxkcmVuLHI9bnVsbDtyZXR1cm4gbiYmW10uY29uY2F0KG8obikpLnNvbWUoZnVuY3Rpb24odCl7aWYodC5jbGFzc05hbWUubWF0Y2goZSkpcmV0dXJuIHI9dCwhMH0pLHJ9fSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPXtTVEFOREFSRDoxLE9USEVSUzotM30scj1bMSwyOCw1MDBdLG89ZnVuY3Rpb24odCl7cmV0dXJuIHJbdF18fHJbMF19O2UuZ2V0RGVsdGE9ZnVuY3Rpb24odCl7aWYoXCJkZWx0YVhcImluIHQpe3ZhciBlPW8odC5kZWx0YU1vZGUpO3JldHVybnt4OnQuZGVsdGFYL24uU1RBTkRBUkQqZSx5OnQuZGVsdGFZL24uU1RBTkRBUkQqZX19cmV0dXJuXCJ3aGVlbERlbHRhWFwiaW4gdD97eDp0LndoZWVsRGVsdGFYL24uT1RIRVJTLHk6dC53aGVlbERlbHRhWS9uLk9USEVSU306e3g6MCx5OnQud2hlZWxEZWx0YS9uLk9USEVSU319fSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2UuZ2V0UG9pbnRlckRhdGE9ZnVuY3Rpb24odCl7cmV0dXJuIHQudG91Y2hlcz90LnRvdWNoZXNbdC50b3VjaGVzLmxlbmd0aC0xXTp0fX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuZ2V0UG9zaXRpb249dm9pZCAwO3ZhciByPW4oMTIyKTtlLmdldFBvc2l0aW9uPWZ1bmN0aW9uKHQpe3ZhciBlPSgwLHIuZ2V0UG9pbnRlckRhdGEpKHQpO3JldHVybnt4OmUuY2xpZW50WCx5OmUuY2xpZW50WX19fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5nZXRUb3VjaElEPXZvaWQgMDt2YXIgcj1uKDEyMik7ZS5nZXRUb3VjaElEPWZ1bmN0aW9uKHQpe3ZhciBlPSgwLHIuZ2V0UG9pbnRlckRhdGEpKHQpO3JldHVybiBlLmlkZW50aWZpZXJ9fSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2UuaXNPbmVPZj1mdW5jdGlvbih0KXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06W107cmV0dXJuIGUuc29tZShmdW5jdGlvbihlKXtyZXR1cm4gdD09PWV9KX19LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7ZS5waWNrSW5SYW5nZT1mdW5jdGlvbih0KXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06LSgxLzApLG49YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOjEvMDtyZXR1cm4gTWF0aC5tYXgoZSxNYXRoLm1pbih0LG4pKX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX12YXIgbz1uKDg5KSxpPXIobyk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHU9W1wid2Via2l0XCIsXCJtb3pcIixcIm1zXCIsXCJvXCJdLGE9bmV3IFJlZ0V4cChcIl4tKD8hKD86XCIrdS5qb2luKFwifFwiKStcIiktKVwiKSxjPWZ1bmN0aW9uKHQpe3ZhciBlPXt9O3JldHVybigwLGkuZGVmYXVsdCkodCkuZm9yRWFjaChmdW5jdGlvbihuKXtpZighYS50ZXN0KG4pKXJldHVybiB2b2lkKGVbbl09dFtuXSk7dmFyIHI9dFtuXTtuPW4ucmVwbGFjZSgvXi0vLFwiXCIpLGVbbl09cix1LmZvckVhY2goZnVuY3Rpb24odCl7ZVtcIi1cIit0K1wiLVwiK25dPXJ9KX0pLGV9O2Uuc2V0U3R5bGU9ZnVuY3Rpb24odCxlKXtlPWMoZSksKDAsaS5kZWZhdWx0KShlKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciByPW4ucmVwbGFjZSgvXi0vLFwiXCIpLnJlcGxhY2UoLy0oW2Etel0pL2csZnVuY3Rpb24odCxlKXtyZXR1cm4gZS50b1VwcGVyQ2FzZSgpfSk7dC5zdHlsZVtyXT1lW25dfSl9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19ZnVuY3Rpb24gbyh0KXtpZihBcnJheS5pc0FycmF5KHQpKXtmb3IodmFyIGU9MCxuPUFycmF5KHQubGVuZ3RoKTtlPHQubGVuZ3RoO2UrKyluW2VdPXRbZV07cmV0dXJuIG59cmV0dXJuKDAsYS5kZWZhdWx0KSh0KX1mdW5jdGlvbiBpKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX12YXIgdT1uKDIpLGE9cih1KSxjPW4oODUpLGw9cihjKSxmPW4oMTI5KSxzPXIoZik7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5Ub3VjaFJlY29yZD12b2lkIDA7dmFyIGQ9cy5kZWZhdWx0fHxmdW5jdGlvbih0KXtmb3IodmFyIGU9MTtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXt2YXIgbj1hcmd1bWVudHNbZV07Zm9yKHZhciByIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4scikmJih0W3JdPW5bcl0pfXJldHVybiB0fSxoPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lW25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSwoMCxsLmRlZmF1bHQpKHQsci5rZXkscil9fXJldHVybiBmdW5jdGlvbihlLG4scil7cmV0dXJuIG4mJnQoZS5wcm90b3R5cGUsbiksciYmdChlLHIpLGV9fSgpLHY9bigxMjMpLF89ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGUpe2kodGhpcyx0KSx0aGlzLnVwZGF0ZVRpbWU9RGF0ZS5ub3coKSx0aGlzLmRlbHRhPXt4OjAseTowfSx0aGlzLnZlbG9jaXR5PXt4OjAseTowfSx0aGlzLmxhc3RQb3NpdGlvbj0oMCx2LmdldFBvc2l0aW9uKShlKX1yZXR1cm4gaCh0LFt7a2V5OlwidXBkYXRlXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy52ZWxvY2l0eSxuPXRoaXMudXBkYXRlVGltZSxyPXRoaXMubGFzdFBvc2l0aW9uLG89RGF0ZS5ub3coKSxpPSgwLHYuZ2V0UG9zaXRpb24pKHQpLHU9e3g6LShpLngtci54KSx5Oi0oaS55LXIueSl9LGE9by1ufHwxNixjPXUueC9hKjFlMyxsPXUueS9hKjFlMztlLng9LjgqYysuMiplLngsZS55PS44KmwrLjIqZS55LHRoaXMuZGVsdGE9dSx0aGlzLnVwZGF0ZVRpbWU9byx0aGlzLmxhc3RQb3NpdGlvbj1pfX1dKSx0fSgpO2UuVG91Y2hSZWNvcmQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7aSh0aGlzLHQpLHRoaXMudG91Y2hMaXN0PXt9LHRoaXMubGFzdFRvdWNoPW51bGwsdGhpcy5hY3RpdmVUb3VjaElEPXZvaWQgMH1yZXR1cm4gaCh0LFt7a2V5OlwiX19hZGRcIix2YWx1ZTpmdW5jdGlvbih0KXtpZih0aGlzLl9faGFzKHQpKXJldHVybiBudWxsO3ZhciBlPW5ldyBfKHQpO3JldHVybiB0aGlzLnRvdWNoTGlzdFt0LmlkZW50aWZpZXJdPWUsZX19LHtrZXk6XCJfX3JlbmV3XCIsdmFsdWU6ZnVuY3Rpb24odCl7aWYoIXRoaXMuX19oYXModCkpcmV0dXJuIG51bGw7dmFyIGU9dGhpcy50b3VjaExpc3RbdC5pZGVudGlmaWVyXTtyZXR1cm4gZS51cGRhdGUodCksZX19LHtrZXk6XCJfX2RlbGV0ZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiBkZWxldGUgdGhpcy50b3VjaExpc3RbdC5pZGVudGlmaWVyXX19LHtrZXk6XCJfX2hhc1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRvdWNoTGlzdC5oYXNPd25Qcm9wZXJ0eSh0LmlkZW50aWZpZXIpfX0se2tleTpcIl9fc2V0QWN0aXZlSURcIix2YWx1ZTpmdW5jdGlvbih0KXt0aGlzLmFjdGl2ZVRvdWNoSUQ9dFt0Lmxlbmd0aC0xXS5pZGVudGlmaWVyLHRoaXMubGFzdFRvdWNoPXRoaXMudG91Y2hMaXN0W3RoaXMuYWN0aXZlVG91Y2hJRF19fSx7a2V5OlwiX19nZXRBY3RpdmVUcmFja2VyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnRvdWNoTGlzdCxlPXRoaXMuYWN0aXZlVG91Y2hJRDtyZXR1cm4gdFtlXX19LHtrZXk6XCJpc0FjdGl2ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMCE9PXRoaXMuYWN0aXZlVG91Y2hJRH19LHtrZXk6XCJnZXREZWx0YVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fX2dldEFjdGl2ZVRyYWNrZXIoKTtyZXR1cm4gdD9kKHt9LHQuZGVsdGEpOnRoaXMuX19wcmltaXRpdmVWYWx1ZX19LHtrZXk6XCJnZXRWZWxvY2l0eVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fX2dldEFjdGl2ZVRyYWNrZXIoKTtyZXR1cm4gdD9kKHt9LHQudmVsb2NpdHkpOnRoaXMuX19wcmltaXRpdmVWYWx1ZX19LHtrZXk6XCJnZXRMYXN0UG9zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpcIlwiLGU9dGhpcy5fX2dldEFjdGl2ZVRyYWNrZXIoKXx8dGhpcy5sYXN0VG91Y2gsbj1lP2UubGFzdFBvc2l0aW9uOnRoaXMuX19wcmltaXRpdmVWYWx1ZTtyZXR1cm4gdD9uLmhhc093blByb3BlcnR5KHQpP25bdF06MDpkKHt9LG4pfX0se2tleTpcInVwZGF0ZWRSZWNlbnRseVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fX2dldEFjdGl2ZVRyYWNrZXIoKTtyZXR1cm4gdCYmRGF0ZS5ub3coKS10LnVwZGF0ZVRpbWU8MzB9fSx7a2V5OlwidHJhY2tcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLG49dC50YXJnZXRUb3VjaGVzO3JldHVybltdLmNvbmNhdChvKG4pKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2UuX19hZGQodCl9KSx0aGlzLnRvdWNoTGlzdH19LHtrZXk6XCJ1cGRhdGVcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLG49dC50b3VjaGVzLHI9dC5jaGFuZ2VkVG91Y2hlcztyZXR1cm5bXS5jb25jYXQobyhuKSkuZm9yRWFjaChmdW5jdGlvbih0KXtlLl9fcmVuZXcodCl9KSx0aGlzLl9fc2V0QWN0aXZlSUQociksdGhpcy50b3VjaExpc3R9fSx7a2V5OlwicmVsZWFzZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7cmV0dXJuIHRoaXMuYWN0aXZlVG91Y2hJRD12b2lkIDAsW10uY29uY2F0KG8odC5jaGFuZ2VkVG91Y2hlcykpLmZvckVhY2goZnVuY3Rpb24odCl7ZS5fX2RlbGV0ZSh0KX0pLHRoaXMudG91Y2hMaXN0fX0se2tleTpcIl9fcHJpbWl0aXZlVmFsdWVcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm57eDowLHk6MH19fV0pLHR9KCl9LGZ1bmN0aW9uKHQsZSxuKXt0LmV4cG9ydHM9e2RlZmF1bHQ6bigxMzApLF9fZXNNb2R1bGU6ITB9fSxmdW5jdGlvbih0LGUsbil7bigxMzEpLHQuZXhwb3J0cz1uKDEyKS5PYmplY3QuYXNzaWdufSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxMCk7cihyLlMrci5GLFwiT2JqZWN0XCIse2Fzc2lnbjpuKDEzMil9KX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMzEpLG89big2OCksaT1uKDY5KSx1PW4oNDcpLGE9bigzNCksYz1PYmplY3QuYXNzaWduO3QuZXhwb3J0cz0hY3x8bigyMSkoZnVuY3Rpb24oKXt2YXIgdD17fSxlPXt9LG49U3ltYm9sKCkscj1cImFiY2RlZmdoaWprbG1ub3BxcnN0XCI7cmV0dXJuIHRbbl09NyxyLnNwbGl0KFwiXCIpLmZvckVhY2goZnVuY3Rpb24odCl7ZVt0XT10fSksNyE9Yyh7fSx0KVtuXXx8T2JqZWN0LmtleXMoYyh7fSxlKSkuam9pbihcIlwiKSE9cn0pP2Z1bmN0aW9uKHQsZSl7Zm9yKHZhciBuPXUodCksYz1hcmd1bWVudHMubGVuZ3RoLGw9MSxmPW8uZixzPWkuZjtjPmw7KWZvcih2YXIgZCxoPWEoYXJndW1lbnRzW2wrK10pLHY9Zj9yKGgpLmNvbmNhdChmKGgpKTpyKGgpLF89di5sZW5ndGgscD0wO18+cDspcy5jYWxsKGgsZD12W3ArK10pJiYobltkXT1oW2RdKTtyZXR1cm4gbn06Y30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fXZhciBvPW4oODUpLGk9cihvKSx1PW4oODkpLGE9cih1KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYz1uKDEzNCk7KDAsYS5kZWZhdWx0KShjKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wiZGVmYXVsdFwiIT09dCYmXCJfX2VzTW9kdWxlXCIhPT10JiYoMCxpLmRlZmF1bHQpKGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gY1t0XX19KX0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19dmFyIG89big4NSksaT1yKG8pLHU9big4OSksYT1yKHUpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBjPW4oMTM1KTsoMCxhLmRlZmF1bHQpKGMpLmZvckVhY2goZnVuY3Rpb24odCl7XCJkZWZhdWx0XCIhPT10JiZcIl9fZXNNb2R1bGVcIiE9PXQmJigwLGkuZGVmYXVsdCkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBjW3RdfX0pfSk7dmFyIGw9bigxMzYpOygwLGEuZGVmYXVsdCkobCkuZm9yRWFjaChmdW5jdGlvbih0KXtcImRlZmF1bHRcIiE9PXQmJlwiX19lc01vZHVsZVwiIT09dCYmKDAsaS5kZWZhdWx0KShlLHQse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGxbdF19fSl9KTt2YXIgZj1uKDEzNyk7KDAsYS5kZWZhdWx0KShmKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wiZGVmYXVsdFwiIT09dCYmXCJfX2VzTW9kdWxlXCIhPT10JiYoMCxpLmRlZmF1bHQpKGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZlt0XX19KX0pO3ZhciBzPW4oMTM4KTsoMCxhLmRlZmF1bHQpKHMpLmZvckVhY2goZnVuY3Rpb24odCl7XCJkZWZhdWx0XCIhPT10JiZcIl9fZXNNb2R1bGVcIiE9PXQmJigwLGkuZGVmYXVsdCkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBzW3RdfX0pfSk7dmFyIGQ9bigxMzkpOygwLGEuZGVmYXVsdCkoZCkuZm9yRWFjaChmdW5jdGlvbih0KXtcImRlZmF1bHRcIiE9PXQmJlwiX19lc01vZHVsZVwiIT09dCYmKDAsaS5kZWZhdWx0KShlLHQse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGRbdF19fSl9KTt2YXIgaD1uKDE0MCk7KDAsYS5kZWZhdWx0KShoKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wiZGVmYXVsdFwiIT09dCYmXCJfX2VzTW9kdWxlXCIhPT10JiYoMCxpLmRlZmF1bHQpKGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gaFt0XX19KX0pO3ZhciB2PW4oMTQxKTsoMCxhLmRlZmF1bHQpKHYpLmZvckVhY2goZnVuY3Rpb24odCl7XCJkZWZhdWx0XCIhPT10JiZcIl9fZXNNb2R1bGVcIiE9PXQmJigwLGkuZGVmYXVsdCkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB2W3RdfX0pfSk7dmFyIF89bigxNDIpOygwLGEuZGVmYXVsdCkoXykuZm9yRWFjaChmdW5jdGlvbih0KXtcImRlZmF1bHRcIiE9PXQmJlwiX19lc01vZHVsZVwiIT09dCYmKDAsaS5kZWZhdWx0KShlLHQse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIF9bdF19fSl9KTt2YXIgcD1uKDE0Myk7KDAsYS5kZWZhdWx0KShwKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wiZGVmYXVsdFwiIT09dCYmXCJfX2VzTW9kdWxlXCIhPT10JiYoMCxpLmRlZmF1bHQpKGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcFt0XX19KX0pO3ZhciB5PW4oMTQ0KTsoMCxhLmRlZmF1bHQpKHkpLmZvckVhY2goZnVuY3Rpb24odCl7XCJkZWZhdWx0XCIhPT10JiZcIl9fZXNNb2R1bGVcIiE9PXQmJigwLGkuZGVmYXVsdCkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB5W3RdfX0pfSk7dmFyIGI9bigxNDUpOygwLGEuZGVmYXVsdCkoYikuZm9yRWFjaChmdW5jdGlvbih0KXtcImRlZmF1bHRcIiE9PXQmJlwiX19lc01vZHVsZVwiIT09dCYmKDAsaS5kZWZhdWx0KShlLHQse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGJbdF19fSl9KTt2YXIgZz1uKDE0Nik7KDAsYS5kZWZhdWx0KShnKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wiZGVmYXVsdFwiIT09dCYmXCJfX2VzTW9kdWxlXCIhPT10JiYoMCxpLmRlZmF1bHQpKGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZ1t0XX19KX0pO3ZhciBtPW4oMTQ3KTsoMCxhLmRlZmF1bHQpKG0pLmZvckVhY2goZnVuY3Rpb24odCl7XCJkZWZhdWx0XCIhPT10JiZcIl9fZXNNb2R1bGVcIiE9PXQmJigwLGkuZGVmYXVsdCkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBtW3RdfX0pfSk7dmFyIHg9bigxNDgpOygwLGEuZGVmYXVsdCkoeCkuZm9yRWFjaChmdW5jdGlvbih0KXtcImRlZmF1bHRcIiE9PXQmJlwiX19lc01vZHVsZVwiIT09dCYmKDAsaS5kZWZhdWx0KShlLHQse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHhbdF19fSl9KTt2YXIgUz1uKDE0OSk7KDAsYS5kZWZhdWx0KShTKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wiZGVmYXVsdFwiIT09dCYmXCJfX2VzTW9kdWxlXCIhPT10JiYoMCxpLmRlZmF1bHQpKGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gU1t0XX19KX0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9big3Nyk7ci5TbW9vdGhTY3JvbGxiYXIucHJvdG90eXBlLmNsZWFyTW92ZW1lbnQ9ci5TbW9vdGhTY3JvbGxiYXIucHJvdG90eXBlLnN0b3A9ZnVuY3Rpb24oKXt0aGlzLm1vdmVtZW50Lng9dGhpcy5tb3ZlbWVudC55PTAsY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fX3RpbWVySUQuc2Nyb2xsVG8pfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fWZ1bmN0aW9uIG8odCl7aWYoQXJyYXkuaXNBcnJheSh0KSl7Zm9yKHZhciBlPTAsbj1BcnJheSh0Lmxlbmd0aCk7ZTx0Lmxlbmd0aDtlKyspbltlXT10W2VdO3JldHVybiBufXJldHVybigwLHUuZGVmYXVsdCkodCl9dmFyIGk9bigyKSx1PXIoaSksYT1uKDc3KSxjPW4oMTE2KSxsPW4oODgpO2EuU21vb3RoU2Nyb2xsYmFyLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX19saXN0ZW5lcnMsbj10aGlzLl9faGFuZGxlcnMscj10aGlzLl9fb2JzZXJ2ZXIsaT10aGlzLnRhcmdldHMsdT1pLmNvbnRhaW5lcixhPWkuY29udGVudDtuLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGU9dC5ldnQsbj10LmVsZW0scj10LmZuO24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLHIpfSksbi5sZW5ndGg9ZS5sZW5ndGg9MCx0aGlzLnN0b3AoKSxjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9fdGltZXJJRC5yZW5kZXIpLHImJnIuZGlzY29ubmVjdCgpLGwuc2JMaXN0LmRlbGV0ZSh1KSx0fHx0aGlzLnNjcm9sbFRvKDAsMCwzMDAsZnVuY3Rpb24oKXtpZih1LnBhcmVudE5vZGUpeygwLGMuc2V0U3R5bGUpKHUse292ZXJmbG93OlwiXCJ9KSx1LnNjcm9sbFRvcD11LnNjcm9sbExlZnQ9MDtmb3IodmFyIHQ9W10uY29uY2F0KG8oYS5jaGlsZE5vZGVzKSk7dS5maXJzdENoaWxkOyl1LnJlbW92ZUNoaWxkKHUuZmlyc3RDaGlsZCk7dC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiB1LmFwcGVuZENoaWxkKHQpfSl9fSl9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9big3Nyk7ci5TbW9vdGhTY3JvbGxiYXIucHJvdG90eXBlLmdldENvbnRlbnRFbGVtPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudGFyZ2V0cy5jb250ZW50fX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oNzcpO3IuU21vb3RoU2Nyb2xsYmFyLnByb3RvdHlwZS5nZXRTaXplPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy50YXJnZXRzLmNvbnRhaW5lcixlPXRoaXMudGFyZ2V0cy5jb250ZW50O3JldHVybntjb250YWluZXI6e3dpZHRoOnQuY2xpZW50V2lkdGgsaGVpZ2h0OnQuY2xpZW50SGVpZ2h0fSxjb250ZW50Ont3aWR0aDplLm9mZnNldFdpZHRoLWUuY2xpZW50V2lkdGgrZS5zY3JvbGxXaWR0aCxoZWlnaHQ6ZS5vZmZzZXRIZWlnaHQtZS5jbGllbnRIZWlnaHQrZS5zY3JvbGxIZWlnaHR9fX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDc3KTtyLlNtb290aFNjcm9sbGJhci5wcm90b3R5cGUuaW5maW5pdGVTY3JvbGw9ZnVuY3Rpb24odCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOjUwO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQpe3ZhciBuPXt4OjAseTowfSxyPSExO3RoaXMuYWRkTGlzdGVuZXIoZnVuY3Rpb24obyl7dmFyIGk9by5vZmZzZXQsdT1vLmxpbWl0O3UueS1pLnk8PWUmJmkueT5uLnkmJiFyJiYocj0hMCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIHQobyl9KSksdS55LWkueT5lJiYocj0hMSksbj1pfSl9fX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oNzcpO3IuU21vb3RoU2Nyb2xsYmFyLnByb3RvdHlwZS5pc1Zpc2libGU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5ib3VuZGluZyxuPXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkscj1NYXRoLm1heChlLnRvcCxuLnRvcCksbz1NYXRoLm1heChlLmxlZnQsbi5sZWZ0KSxpPU1hdGgubWluKGUucmlnaHQsbi5yaWdodCksdT1NYXRoLm1pbihlLmJvdHRvbSxuLmJvdHRvbSk7cmV0dXJuIHI8dSYmbzxpfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oNzcpO3IuU21vb3RoU2Nyb2xsYmFyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcj1mdW5jdGlvbih0KXtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiZ0aGlzLl9fbGlzdGVuZXJzLnB1c2godCl9LHIuU21vb3RoU2Nyb2xsYmFyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcj1mdW5jdGlvbih0KXtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiZ0aGlzLl9fbGlzdGVuZXJzLnNvbWUoZnVuY3Rpb24oZSxuLHIpe3JldHVybiBlPT09dCYmci5zcGxpY2UobiwxKX0pfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fWZ1bmN0aW9uIG8odCxlLG4pe3JldHVybiBlIGluIHQ/KDAsbC5kZWZhdWx0KSh0LGUse3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2VdPW4sdH1mdW5jdGlvbiBpKHQsZSl7cmV0dXJuISFlLmxlbmd0aCYmZS5zb21lKGZ1bmN0aW9uKGUpe3JldHVybiB0Lm1hdGNoKGUpfSl9ZnVuY3Rpb24gdSgpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpzLlJFR0lFU1RFUixlPWRbdF07cmV0dXJuIGZ1bmN0aW9uKG4pe2Zvcih2YXIgcj1hcmd1bWVudHMubGVuZ3RoLG89QXJyYXkocj4xP3ItMTowKSx1PTE7dTxyO3UrKylvW3UtMV09YXJndW1lbnRzW3VdO3RoaXMuX19oYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3ZhciB1PXIuZWxlbSxhPXIuZXZ0LGM9ci5mbixsPXIuaGFzUmVnaXN0ZXJlZDtsJiZ0PT09bi5SRUdJRVNURVJ8fCFsJiZ0PT09bi5VTlJFR0lFU1RFUnx8aShhLG8pJiYodVtlXShhLGMpLHIuaGFzUmVnaXN0ZXJlZD0hbCl9KX19dmFyIGEsYz1uKDg1KSxsPXIoYyksZj1uKDc3KSxzPXtSRUdJRVNURVI6MCxVTlJFR0lFU1RFUjoxfSxkPShhPXt9LG8oYSxzLlJFR0lFU1RFUixcImFkZEV2ZW50TGlzdGVuZXJcIiksbyhhLHMuVU5SRUdJRVNURVIsXCJyZW1vdmVFdmVudExpc3RlbmVyXCIpLGEpO2YuU21vb3RoU2Nyb2xsYmFyLnByb3RvdHlwZS5yZWdpc3RlckV2ZW50cz11KHMuUkVHSUVTVEVSKSxmLlNtb290aFNjcm9sbGJhci5wcm90b3R5cGUudW5yZWdpc3RlckV2ZW50cz11KHMuVU5SRUdJRVNURVIpfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9big3Nyk7ci5TbW9vdGhTY3JvbGxiYXIucHJvdG90eXBlLnJldmVyc2VXaGVlbD1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF07dGhpcy53aGVlbFJldmVyc2VkPVwiYm9vbGVhblwiPT10eXBlb2YgdCYmdCx0aGlzLl9fcmVhZG9ubHkoXCJ3aGVlbFJldmVyc2VkXCIsdGhpcy53aGVlbFJldmVyc2VkKX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDc3KTtyLlNtb290aFNjcm9sbGJhci5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXc9ZnVuY3Rpb24odCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LG49ZS5hbGlnblRvVG9wLHI9dm9pZCAwPT09bnx8bixvPWUub25seVNjcm9sbElmTmVlZGVkLGk9dm9pZCAwIT09byYmbyx1PWUub2Zmc2V0VG9wLGE9dm9pZCAwPT09dT8wOnUsYz1lLm9mZnNldExlZnQsbD12b2lkIDA9PT1jPzA6YyxmPWUub2Zmc2V0Qm90dG9tLHM9dm9pZCAwPT09Zj8wOmYsZD10aGlzLnRhcmdldHMsaD10aGlzLmJvdW5kaW5nO2lmKHQmJmQuY29udGFpbmVyLmNvbnRhaW5zKHQpKXt2YXIgdj10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2kmJnRoaXMuaXNWaXNpYmxlKHQpfHx0aGlzLl9fc2V0TW92ZW1lbnQodi5sZWZ0LWgubGVmdC1sLHI/di50b3AtaC50b3AtYTp2LmJvdHRvbS1oLmJvdHRvbS1zKX19fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigxMTYpLG89big3Nyk7by5TbW9vdGhTY3JvbGxiYXIucHJvdG90eXBlLnNjcm9sbFRvPWZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnRoaXMub2Zmc2V0LngsZT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06dGhpcy5vZmZzZXQueSxuPXRoaXMsbz1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06MCxpPWFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTpudWxsLHU9dGhpcy5vcHRpb25zLGE9dGhpcy5vZmZzZXQsYz10aGlzLmxpbWl0LGw9dGhpcy5fX3RpbWVySUQ7Y2FuY2VsQW5pbWF0aW9uRnJhbWUobC5zY3JvbGxUbyksaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2k6ZnVuY3Rpb24oKXt9LHUucmVuZGVyQnlQaXhlbHMmJih0PU1hdGgucm91bmQodCksZT1NYXRoLnJvdW5kKGUpKTt2YXIgZj1hLngscz1hLnksZD0oMCxyLnBpY2tJblJhbmdlKSh0LDAsYy54KS1mLGg9KDAsci5waWNrSW5SYW5nZSkoZSwwLGMueSktcyx2PSgwLHIuYnVpbGRDdXJ2ZSkoZCxvKSxfPSgwLHIuYnVpbGRDdXJ2ZSkoaCxvKSxwPXYubGVuZ3RoLHk9MCxiPWZ1bmN0aW9uIHQoKXtuLnNldFBvc2l0aW9uKGYrdlt5XSxzK19beV0pLHkrKyx5PT09cD9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtpKG4pfSk6bC5zY3JvbGxUbz1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodCl9O2IoKX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX12YXIgbz1uKDg5KSxpPXIobyksdT1uKDc3KTt1LlNtb290aFNjcm9sbGJhci5wcm90b3R5cGUuc2V0T3B0aW9ucz1mdW5jdGlvbigpe3ZhciB0PXRoaXMsZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307KDAsaS5kZWZhdWx0KShlKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3Qub3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuKSYmdm9pZCAwIT09ZVtuXSYmKHQub3B0aW9uc1tuXT1lW25dKX0pfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fXZhciBvPW4oMTI5KSxpPXIobyksdT1pLmRlZmF1bHR8fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspe3ZhciBuPWFyZ3VtZW50c1tlXTtmb3IodmFyIHIgaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixyKSYmKHRbcl09bltyXSl9cmV0dXJuIHR9LGE9bigxMTYpLGM9big3Nyk7Yy5TbW9vdGhTY3JvbGxiYXIucHJvdG90eXBlLnNldFBvc2l0aW9uPWZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnRoaXMub2Zmc2V0LngsZT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06dGhpcy5vZmZzZXQueSxuPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdJiZhcmd1bWVudHNbMl07dGhpcy5fX2hpZGVUcmFja1Rocm90dGxlKCk7dmFyIHI9e30sbz10aGlzLm9wdGlvbnMsaT10aGlzLm9mZnNldCxjPXRoaXMubGltaXQsbD10aGlzLnRhcmdldHMsZj10aGlzLl9fbGlzdGVuZXJzO28ucmVuZGVyQnlQaXhlbHMmJih0PU1hdGgucm91bmQodCksZT1NYXRoLnJvdW5kKGUpKSx0IT09aS54JiZ0aGlzLnNob3dUcmFjayhcInhcIiksZSE9PWkueSYmdGhpcy5zaG93VHJhY2soXCJ5XCIpLHQ9KDAsYS5waWNrSW5SYW5nZSkodCwwLGMueCksZT0oMCxhLnBpY2tJblJhbmdlKShlLDAsYy55KSx0PT09aS54JiZlPT09aS55fHwoci5kaXJlY3Rpb249e3g6dD09PWkueD9cIm5vbmVcIjp0PmkueD9cInJpZ2h0XCI6XCJsZWZ0XCIseTplPT09aS55P1wibm9uZVwiOmU+aS55P1wiZG93blwiOlwidXBcIn0sdGhpcy5fX3JlYWRvbmx5KFwib2Zmc2V0XCIse3g6dCx5OmV9KSxyLmxpbWl0PXUoe30sYyksci5vZmZzZXQ9dSh7fSx0aGlzLm9mZnNldCksdGhpcy5fX3NldFRodW1iUG9zaXRpb24oKSwoMCxhLnNldFN0eWxlKShsLmNvbnRlbnQse1wiLXRyYW5zZm9ybVwiOlwidHJhbnNsYXRlM2QoXCIrLXQrXCJweCwgXCIrLWUrXCJweCwgMClcIn0pLG58fGYuZm9yRWFjaChmdW5jdGlvbih0KXtvLnN5bmNDYWxsYmFja3M/dChyKTpyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0KHIpfSl9KSl9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19ZnVuY3Rpb24gbyh0LGUsbil7cmV0dXJuIGUgaW4gdD8oMCxjLmRlZmF1bHQpKHQsZSx7dmFsdWU6bixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbZV09bix0fWZ1bmN0aW9uIGkoKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06Zi5TSE9XLGU9c1t0XSxuPXtBQ1RJT05TOmZ9O3JldHVybiBmdW5jdGlvbigpe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpcImJvdGhcIixvPXtUUkFDSzpcInNob3dcIixDT05UQUlORVI6XCJzY3JvbGxpbmdcIn0saT10aGlzLm9wdGlvbnMsdT10aGlzLm1vdmVtZW50LGE9dGhpcy50YXJnZXRzLGM9YS5jb250YWluZXIsbD1hLnhBeGlzLGY9YS55QXhpczt1Lnh8fHUueT9jLmNsYXNzTGlzdC5hZGQoby5DT05UQUlORVIpOmMuY2xhc3NMaXN0LnJlbW92ZShvLkNPTlRBSU5FUiksaS5hbHdheXNTaG93VHJhY2tzJiZ0PT09bi5BQ1RJT05TLkhJREV8fChyPXIudG9Mb3dlckNhc2UoKSxcImJvdGhcIj09PXImJihsLnRyYWNrLmNsYXNzTGlzdFtlXShvLlRSQUNLKSxmLnRyYWNrLmNsYXNzTGlzdFtlXShvLlRSQUNLKSksXCJ4XCI9PT1yJiZsLnRyYWNrLmNsYXNzTGlzdFtlXShvLlRSQUNLKSxcInlcIj09PXImJmYudHJhY2suY2xhc3NMaXN0W2VdKG8uVFJBQ0spKX19dmFyIHUsYT1uKDg1KSxjPXIoYSksbD1uKDc3KSxmPXtTSE9XOjAsSElERToxfSxzPSh1PXt9LG8odSxmLlNIT1csXCJhZGRcIiksbyh1LGYuSElERSxcInJlbW92ZVwiKSx1KTtsLlNtb290aFNjcm9sbGJhci5wcm90b3R5cGUuc2hvd1RyYWNrPWkoZi5TSE9XKSxsLlNtb290aFNjcm9sbGJhci5wcm90b3R5cGUuaGlkZVRyYWNrPWkoZi5ISURFKX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoKXtpZihcImdsb3dcIj09PXRoaXMub3B0aW9ucy5vdmVyc2Nyb2xsRWZmZWN0KXt2YXIgdD10aGlzLnRhcmdldHMsZT10aGlzLnNpemUsbj10LmNhbnZhcyxyPW4uZWxlbSxvPW4uY29udGV4dCxpPXdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxLHU9ZS5jb250YWluZXIud2lkdGgqaSxhPWUuY29udGFpbmVyLmhlaWdodCppO3U9PT1yLndpZHRoJiZhPT09ci5oZWlnaHR8fChyLndpZHRoPXUsci5oZWlnaHQ9YSxvLnNjYWxlKGksaSkpfX1mdW5jdGlvbiBvKCl7dmFyIHQ9dGhpcy5zaXplLGU9dGhpcy50aHVtYlNpemUsbj10aGlzLnRhcmdldHMscj1uLnhBeGlzLG89bi55QXhpczsoMCx1LnNldFN0eWxlKShyLnRyYWNrLHtkaXNwbGF5OnQuY29udGVudC53aWR0aDw9dC5jb250YWluZXIud2lkdGg/XCJub25lXCI6XCJibG9ja1wifSksKDAsdS5zZXRTdHlsZSkoby50cmFjayx7ZGlzcGxheTp0LmNvbnRlbnQuaGVpZ2h0PD10LmNvbnRhaW5lci5oZWlnaHQ/XCJub25lXCI6XCJibG9ja1wifSksKDAsdS5zZXRTdHlsZSkoci50aHVtYix7d2lkdGg6ZS54K1wicHhcIn0pLCgwLHUuc2V0U3R5bGUpKG8udGh1bWIse2hlaWdodDplLnkrXCJweFwifSl9ZnVuY3Rpb24gaSgpe3ZhciB0PXRoaXMub3B0aW9uczt0aGlzLl9fdXBkYXRlQm91bmRpbmcoKTt2YXIgZT10aGlzLmdldFNpemUoKSxuPXt4Ok1hdGgubWF4KGUuY29udGVudC53aWR0aC1lLmNvbnRhaW5lci53aWR0aCwwKSx5Ok1hdGgubWF4KGUuY29udGVudC5oZWlnaHQtZS5jb250YWluZXIuaGVpZ2h0LDApfSxpPXtyZWFsWDplLmNvbnRhaW5lci53aWR0aC9lLmNvbnRlbnQud2lkdGgqZS5jb250YWluZXIud2lkdGgscmVhbFk6ZS5jb250YWluZXIuaGVpZ2h0L2UuY29udGVudC5oZWlnaHQqZS5jb250YWluZXIuaGVpZ2h0fTtpLng9TWF0aC5tYXgoaS5yZWFsWCx0LnRodW1iTWluU2l6ZSksaS55PU1hdGgubWF4KGkucmVhbFksdC50aHVtYk1pblNpemUpLHRoaXMuX19yZWFkb25seShcInNpemVcIixlKS5fX3JlYWRvbmx5KFwibGltaXRcIixuKS5fX3JlYWRvbmx5KFwidGh1bWJTaXplXCIsaSksby5jYWxsKHRoaXMpLHIuY2FsbCh0aGlzKSx0aGlzLnNldFBvc2l0aW9uKCksdGhpcy5fX3NldFRodW1iUG9zaXRpb24oKX12YXIgdT1uKDExNiksYT1uKDc3KTthLlNtb290aFNjcm9sbGJhci5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKHQpe3Q/cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGkuYmluZCh0aGlzKSk6aS5jYWxsKHRoaXMpfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fXZhciBvPW4oODUpLGk9cihvKSx1PW4oODkpLGE9cih1KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYz1uKDE1MSk7KDAsYS5kZWZhdWx0KShjKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wiZGVmYXVsdFwiIT09dCYmXCJfX2VzTW9kdWxlXCIhPT10JiYoMCxpLmRlZmF1bHQpKGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gY1t0XX19KX0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19dmFyIG89big4NSksaT1yKG8pLHU9big4OSksYT1yKHUpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBjPW4oMTUyKTsoMCxhLmRlZmF1bHQpKGMpLmZvckVhY2goZnVuY3Rpb24odCl7XCJkZWZhdWx0XCIhPT10JiZcIl9fZXNNb2R1bGVcIiE9PXQmJigwLGkuZGVmYXVsdCkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBjW3RdfX0pfSk7dmFyIGw9bigxNTMpOygwLGEuZGVmYXVsdCkobCkuZm9yRWFjaChmdW5jdGlvbih0KXtcImRlZmF1bHRcIiE9PXQmJlwiX19lc01vZHVsZVwiIT09dCYmKDAsaS5kZWZhdWx0KShlLHQse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGxbdF19fSl9KTt2YXIgZj1uKDE1NCk7KDAsYS5kZWZhdWx0KShmKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wiZGVmYXVsdFwiIT09dCYmXCJfX2VzTW9kdWxlXCIhPT10JiYoMCxpLmRlZmF1bHQpKGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZlt0XX19KX0pO3ZhciBzPW4oMTU5KTsoMCxhLmRlZmF1bHQpKHMpLmZvckVhY2goZnVuY3Rpb24odCl7XCJkZWZhdWx0XCIhPT10JiZcIl9fZXNNb2R1bGVcIiE9PXQmJigwLGkuZGVmYXVsdCkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBzW3RdfX0pfSk7dmFyIGQ9bigxNjApOygwLGEuZGVmYXVsdCkoZCkuZm9yRWFjaChmdW5jdGlvbih0KXtcImRlZmF1bHRcIiE9PXQmJlwiX19lc01vZHVsZVwiIT09dCYmKDAsaS5kZWZhdWx0KShlLHQse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGRbdF19fSl9KTt2YXIgaD1uKDE2MSk7KDAsYS5kZWZhdWx0KShoKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wiZGVmYXVsdFwiIT09dCYmXCJfX2VzTW9kdWxlXCIhPT10JiYoMCxpLmRlZmF1bHQpKGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gaFt0XX19KX0pO3ZhciB2PW4oMTYyKTsoMCxhLmRlZmF1bHQpKHYpLmZvckVhY2goZnVuY3Rpb24odCl7XCJkZWZhdWx0XCIhPT10JiZcIl9fZXNNb2R1bGVcIiE9PXQmJigwLGkuZGVmYXVsdCkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB2W3RdfX0pfSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX1mdW5jdGlvbiBvKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpe2Zvcih2YXIgZT0wLG49QXJyYXkodC5sZW5ndGgpO2U8dC5sZW5ndGg7ZSsrKW5bZV09dFtlXTtyZXR1cm4gbn1yZXR1cm4oMCxhLmRlZmF1bHQpKHQpfWZ1bmN0aW9uIGkoKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MCxlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTowLG49YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXSxyPXRoaXMubGltaXQsaT10aGlzLm9wdGlvbnMsdT10aGlzLm1vdmVtZW50O3RoaXMuX191cGRhdGVUaHJvdHRsZSgpLGkucmVuZGVyQnlQaXhlbHMmJih0PU1hdGgucm91bmQodCksZT1NYXRoLnJvdW5kKGUpKTt2YXIgYT11LngrdCxsPXUueStlOzA9PT1yLngmJihhPTApLDA9PT1yLnkmJihsPTApO3ZhciBmPXRoaXMuX19nZXREZWx0YUxpbWl0KG4pO3UueD1jLnBpY2tJblJhbmdlLmFwcGx5KHZvaWQgMCxbYV0uY29uY2F0KG8oZi54KSkpLHUueT1jLnBpY2tJblJhbmdlLmFwcGx5KHZvaWQgMCxbbF0uY29uY2F0KG8oZi55KSkpfXZhciB1PW4oMiksYT1yKHUpLGM9bigxMTYpLGw9big3Nyk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGwuU21vb3RoU2Nyb2xsYmFyLnByb3RvdHlwZSxcIl9fYWRkTW92ZW1lbnRcIix7dmFsdWU6aSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9KX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoKXt2YXIgdD10aGlzLGU9dGhpcy5tb3ZlbWVudCxuPXRoaXMubW92ZW1lbnRMb2NrZWQ7YS5mb3JFYWNoKGZ1bmN0aW9uKHIpe25bcl09ZVtyXSYmdC5fX3dpbGxPdmVyc2Nyb2xsKHIsZVtyXSl9KX1mdW5jdGlvbiBvKCl7dmFyIHQ9dGhpcy5tb3ZlbWVudExvY2tlZDthLmZvckVhY2goZnVuY3Rpb24oZSl7dFtlXT0hMX0pfWZ1bmN0aW9uIGkoKXt2YXIgdD10aGlzLm1vdmVtZW50TG9ja2VkO3JldHVybiB0Lnh8fHQueX12YXIgdT1uKDc3KSxhPVtcInhcIixcInlcIl07T2JqZWN0LmRlZmluZVByb3BlcnR5KHUuU21vb3RoU2Nyb2xsYmFyLnByb3RvdHlwZSxcIl9fYXV0b0xvY2tNb3ZlbWVudFwiLHt2YWx1ZTpyLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh1LlNtb290aFNjcm9sbGJhci5wcm90b3R5cGUsXCJfX3VubG9ja01vdmVtZW50XCIse3ZhbHVlOm8sd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHUuU21vb3RoU2Nyb2xsYmFyLnByb3RvdHlwZSxcIl9faXNNb3ZlbWVudExvY2tlZFwiLHt2YWx1ZTppLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19ZnVuY3Rpb24gbygpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpcIlwiO2lmKHQpe3ZhciBlPXRoaXMub3B0aW9ucyxuPXRoaXMubW92ZW1lbnQscj10aGlzLm92ZXJzY3JvbGxSZW5kZXJlZCxvPXRoaXMuTUFYX09WRVJTQ1JPTEwsaT1uW3RdPSgwLGgucGlja0luUmFuZ2UpKG5bdF0sLW8sbyksdT1lLm92ZXJzY3JvbGxEYW1waW5nLGE9clt0XSsoaS1yW3RdKSp1O2UucmVuZGVyQnlQaXhlbHMmJihhfD0wKSwhdGhpcy5fX2lzTW92ZW1lbnRMb2NrZWQoKSYmTWF0aC5hYnMoYS1yW3RdKTwuMSYmKGEtPWkvTWF0aC5hYnMoaXx8MSkpLE1hdGguYWJzKGEpPE1hdGguYWJzKHJbdF0pJiZ0aGlzLl9fcmVhZG9ubHkoXCJvdmVyc2Nyb2xsQmFja1wiLCEwKSwoYSpyW3RdPDB8fE1hdGguYWJzKGEpPD0xKSYmKGE9MCx0aGlzLl9fcmVhZG9ubHkoXCJvdmVyc2Nyb2xsQmFja1wiLCExKSksclt0XT1hfX1mdW5jdGlvbiBpKHQpe3ZhciBlPXRoaXMuX190b3VjaFJlY29yZCxuPXRoaXMub3ZlcnNjcm9sbFJlbmRlcmVkO3JldHVybiBuLnghPT10Lnh8fG4ueSE9PXQueXx8ISghZC5HTE9CQUxfRU5WLlRPVUNIX1NVUFBPUlRFRHx8IWUudXBkYXRlZFJlY2VudGx5KCkpfWZ1bmN0aW9uIHUoKXt2YXIgdD10aGlzLGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOltdO2lmKGUubGVuZ3RoJiZ0aGlzLm9wdGlvbnMub3ZlcnNjcm9sbEVmZmVjdCl7dmFyIG49dGhpcy5vcHRpb25zLHI9dGhpcy5vdmVyc2Nyb2xsUmVuZGVyZWQsdT1sKHt9LHIpO2lmKGUuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gby5jYWxsKHQsZSl9KSxpLmNhbGwodGhpcyx1KSlzd2l0Y2gobi5vdmVyc2Nyb2xsRWZmZWN0KXtjYXNlXCJib3VuY2VcIjpyZXR1cm4gcy5vdmVyc2Nyb2xsQm91bmNlLmNhbGwodGhpcyxyLngsci55KTtjYXNlXCJnbG93XCI6cmV0dXJuIHMub3ZlcnNjcm9sbEdsb3cuY2FsbCh0aGlzLHIueCxyLnkpO2RlZmF1bHQ6cmV0dXJufX19dmFyIGE9bigxMjkpLGM9cihhKSxsPWMuZGVmYXVsdHx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7dmFyIG49YXJndW1lbnRzW2VdO2Zvcih2YXIgciBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHIpJiYodFtyXT1uW3JdKX1yZXR1cm4gdH0sZj1uKDc3KSxzPW4oMTU1KSxkPW4oODgpLGg9bigxMTYpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShmLlNtb290aFNjcm9sbGJhci5wcm90b3R5cGUsXCJfX3JlbmRlck92ZXJzY3JvbGxcIix7dmFsdWU6dSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9KX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fXZhciBvPW4oODUpLGk9cihvKSx1PW4oODkpLGE9cih1KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYz1uKDE1Nik7KDAsYS5kZWZhdWx0KShjKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wiZGVmYXVsdFwiIT09dCYmXCJfX2VzTW9kdWxlXCIhPT10JiYoMCxpLmRlZmF1bHQpKGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gY1t0XX19KX0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19dmFyIG89big4NSksaT1yKG8pLHU9big4OSksYT1yKHUpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBjPW4oMTU3KTsoMCxhLmRlZmF1bHQpKGMpLmZvckVhY2goZnVuY3Rpb24odCl7XCJkZWZhdWx0XCIhPT10JiZcIl9fZXNNb2R1bGVcIiE9PXQmJigwLGkuZGVmYXVsdCkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBjW3RdfX0pfSk7dmFyIGw9bigxNTgpOygwLGEuZGVmYXVsdCkobCkuZm9yRWFjaChmdW5jdGlvbih0KXtcImRlZmF1bHRcIiE9PXQmJlwiX19lc01vZHVsZVwiIT09dCYmKDAsaS5kZWZhdWx0KShlLHQse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGxbdF19fSl9KX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCxlKXt2YXIgbj10aGlzLnNpemUscj10aGlzLm9mZnNldCxpPXRoaXMudGFyZ2V0cyx1PXRoaXMudGh1bWJPZmZzZXQsYT1pLnhBeGlzLGM9aS55QXhpcyxsPWkuY29udGVudDtpZigoMCxvLnNldFN0eWxlKShsLHtcIi10cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZTNkKFwiKy0oci54K3QpK1wicHgsIFwiKy0oci55K2UpK1wicHgsIDApXCJ9KSx0KXt2YXIgZj1uLmNvbnRhaW5lci53aWR0aC8obi5jb250YWluZXIud2lkdGgrTWF0aC5hYnModCkpOygwLG8uc2V0U3R5bGUpKGEudGh1bWIse1wiLXRyYW5zZm9ybVwiOlwidHJhbnNsYXRlM2QoXCIrdS54K1wicHgsIDAsIDApIHNjYWxlM2QoXCIrZitcIiwgMSwgMSlcIixcIi10cmFuc2Zvcm0tb3JpZ2luXCI6dDwwP1wibGVmdFwiOlwicmlnaHRcIn0pfWlmKGUpe3ZhciBzPW4uY29udGFpbmVyLmhlaWdodC8obi5jb250YWluZXIuaGVpZ2h0K01hdGguYWJzKGUpKTsoMCxvLnNldFN0eWxlKShjLnRodW1iLHtcIi10cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZTNkKDAsIFwiK3UueStcInB4LCAwKSBzY2FsZTNkKDEsIFwiK3MrXCIsIDEpXCIsXCItdHJhbnNmb3JtLW9yaWdpblwiOmU8MD9cInRvcFwiOlwiYm90dG9tXCJ9KX19T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5vdmVyc2Nyb2xsQm91bmNlPXI7dmFyIG89bigxMTYpfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0LGUpe3ZhciBuPXRoaXMuc2l6ZSxyPXRoaXMudGFyZ2V0cyxhPXRoaXMub3B0aW9ucyxjPXIuY2FudmFzLGw9Yy5lbGVtLGY9Yy5jb250ZXh0O3JldHVybiB0fHxlPygoMCx1LnNldFN0eWxlKShsLHtkaXNwbGF5OlwiYmxvY2tcIn0pLGYuY2xlYXJSZWN0KDAsMCxuLmNvbnRlbnQud2lkdGgsbi5jb250YWluZXIuaGVpZ2h0KSxmLmZpbGxTdHlsZT1hLm92ZXJzY3JvbGxFZmZlY3RDb2xvcixvLmNhbGwodGhpcyx0KSx2b2lkIGkuY2FsbCh0aGlzLGUpKTooMCx1LnNldFN0eWxlKShsLHtkaXNwbGF5Olwibm9uZVwifSl9ZnVuY3Rpb24gbyh0KXt2YXIgZT10aGlzLnNpemUsbj10aGlzLnRhcmdldHMscj10aGlzLl9fdG91Y2hSZWNvcmQsbz10aGlzLk1BWF9PVkVSU0NST0xMLGk9ZS5jb250YWluZXIsbD1pLndpZHRoLGY9aS5oZWlnaHQscz1uLmNhbnZhcy5jb250ZXh0O3Muc2F2ZSgpLHQ+MCYmcy50cmFuc2Zvcm0oLTEsMCwwLDEsbCwwKTt2YXIgZD0oMCx1LnBpY2tJblJhbmdlKShNYXRoLmFicyh0KS9vLDAsYSksaD0oMCx1LnBpY2tJblJhbmdlKShkLDAsYykqbCx2PU1hdGguYWJzKHQpLF89ci5nZXRMYXN0UG9zaXRpb24oXCJ5XCIpfHxmLzI7cy5nbG9iYWxBbHBoYT1kLHMuYmVnaW5QYXRoKCkscy5tb3ZlVG8oMCwtaCkscy5xdWFkcmF0aWNDdXJ2ZVRvKHYsXywwLGYraCkscy5maWxsKCkscy5jbG9zZVBhdGgoKSxzLnJlc3RvcmUoKX1mdW5jdGlvbiBpKHQpe3ZhciBlPXRoaXMuc2l6ZSxuPXRoaXMudGFyZ2V0cyxyPXRoaXMuX190b3VjaFJlY29yZCxvPXRoaXMuTUFYX09WRVJTQ1JPTEwsaT1lLmNvbnRhaW5lcixsPWkud2lkdGgsZj1pLmhlaWdodCxzPW4uY2FudmFzLmNvbnRleHQ7cy5zYXZlKCksdD4wJiZzLnRyYW5zZm9ybSgxLDAsMCwtMSwwLGYpO3ZhciBkPSgwLHUucGlja0luUmFuZ2UpKE1hdGguYWJzKHQpL28sMCxhKSxoPSgwLHUucGlja0luUmFuZ2UpKGQsMCxjKSpsLHY9ci5nZXRMYXN0UG9zaXRpb24oXCJ4XCIpfHxsLzIsXz1NYXRoLmFicyh0KTtzLmdsb2JhbEFscGhhPWQscy5iZWdpblBhdGgoKSxzLm1vdmVUbygtaCwwKSxzLnF1YWRyYXRpY0N1cnZlVG8odixfLGwraCwwKSxzLmZpbGwoKSxzLmNsb3NlUGF0aCgpLHMucmVzdG9yZSgpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUub3ZlcnNjcm9sbEdsb3c9cjt2YXIgdT1uKDExNiksYT0uNzUsYz0uMjV9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3ZhciBlPXRoaXMub3B0aW9ucyxuPXRoaXMub2Zmc2V0LHI9dGhpcy5tb3ZlbWVudCxvPXRoaXMuX190b3VjaFJlY29yZCxpPWUuZGFtcGluZyx1PWUucmVuZGVyQnlQaXhlbHMsYT1lLm92ZXJzY3JvbGxEYW1waW5nLGM9blt0XSxsPXJbdF0sZj1pO2lmKHRoaXMuX193aWxsT3ZlcnNjcm9sbCh0LGwpP2Y9YTpvLmlzQWN0aXZlKCkmJihmPS41KSxNYXRoLmFicyhsKTwxKXt2YXIgcz1jK2w7cmV0dXJue21vdmVtZW50OjAscG9zaXRpb246bD4wP01hdGguY2VpbChzKTpNYXRoLmZsb29yKHMpfX12YXIgZD1sKigxLWYpO3JldHVybiB1JiYoZHw9MCkse21vdmVtZW50OmQscG9zaXRpb246YytsLWR9fWZ1bmN0aW9uIG8oKXt2YXIgdD10aGlzLm9wdGlvbnMsZT10aGlzLm9mZnNldCxuPXRoaXMubGltaXQsaT10aGlzLm1vdmVtZW50LGE9dGhpcy5vdmVyc2Nyb2xsUmVuZGVyZWQsYz10aGlzLl9fdGltZXJJRDtpZihpLnh8fGkueXx8YS54fHxhLnkpe3ZhciBsPXIuY2FsbCh0aGlzLFwieFwiKSxmPXIuY2FsbCh0aGlzLFwieVwiKSxzPVtdO2lmKHQub3ZlcnNjcm9sbEVmZmVjdCl7dmFyIGQ9KDAsdS5waWNrSW5SYW5nZSkobC5wb3NpdGlvbiwwLG4ueCksaD0oMCx1LnBpY2tJblJhbmdlKShmLnBvc2l0aW9uLDAsbi55KTsoYS54fHxkPT09ZS54JiZpLngpJiZzLnB1c2goXCJ4XCIpLChhLnl8fGg9PT1lLnkmJmkueSkmJnMucHVzaChcInlcIil9dGhpcy5tb3ZlbWVudExvY2tlZC54fHwoaS54PWwubW92ZW1lbnQpLHRoaXMubW92ZW1lbnRMb2NrZWQueXx8KGkueT1mLm1vdmVtZW50KSx0aGlzLnNldFBvc2l0aW9uKGwucG9zaXRpb24sZi5wb3NpdGlvbiksdGhpcy5fX3JlbmRlck92ZXJzY3JvbGwocyl9Yy5yZW5kZXI9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKG8uYmluZCh0aGlzKSl9dmFyIGk9big3NyksdT1uKDExNik7T2JqZWN0LmRlZmluZVByb3BlcnR5KGkuU21vb3RoU2Nyb2xsYmFyLnByb3RvdHlwZSxcIl9fcmVuZGVyXCIse3ZhbHVlOm8sd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX1mdW5jdGlvbiBvKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpe2Zvcih2YXIgZT0wLG49QXJyYXkodC5sZW5ndGgpO2U8dC5sZW5ndGg7ZSsrKW5bZV09dFtlXTtyZXR1cm4gbn1yZXR1cm4oMCxhLmRlZmF1bHQpKHQpfWZ1bmN0aW9uIGkoKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MCxlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTowLG49YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXSxyPXRoaXMub3B0aW9ucyxpPXRoaXMubW92ZW1lbnQ7dGhpcy5fX3VwZGF0ZVRocm90dGxlKCk7dmFyIHU9dGhpcy5fX2dldERlbHRhTGltaXQobik7ci5yZW5kZXJCeVBpeGVscyYmKHQ9TWF0aC5yb3VuZCh0KSxlPU1hdGgucm91bmQoZSkpLGkueD1jLnBpY2tJblJhbmdlLmFwcGx5KHZvaWQgMCxbdF0uY29uY2F0KG8odS54KSkpLGkueT1jLnBpY2tJblJhbmdlLmFwcGx5KHZvaWQgMCxbZV0uY29uY2F0KG8odS55KSkpfXZhciB1PW4oMiksYT1yKHUpLGM9bigxMTYpLGw9big3Nyk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGwuU21vb3RoU2Nyb2xsYmFyLnByb3RvdHlwZSxcIl9fc2V0TW92ZW1lbnRcIix7dmFsdWU6aSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9KX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MCxlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTowLG49dGhpcy5vcHRpb25zLHI9dGhpcy5vZmZzZXQsbz10aGlzLmxpbWl0O2lmKCFuLmNvbnRpbnVvdXNTY3JvbGxpbmcpcmV0dXJuITE7dmFyIHU9KDAsaS5waWNrSW5SYW5nZSkodCtyLngsMCxvLngpLGE9KDAsaS5waWNrSW5SYW5nZSkoZStyLnksMCxvLnkpLGM9ITA7cmV0dXJuIGMmPXU9PT1yLngsYyY9YT09PXIueSxjJj11PT09by54fHwwPT09dXx8YT09PW8ueXx8MD09PWF9dmFyIG89big3NyksaT1uKDExNik7T2JqZWN0LmRlZmluZVByb3BlcnR5KG8uU21vb3RoU2Nyb2xsYmFyLnByb3RvdHlwZSxcIl9fc2hvdWxkUHJvcGFnYXRlTW92ZW1lbnRcIix7dmFsdWU6cix3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9KX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06XCJcIixlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTowO2lmKCF0KXJldHVybiExO3ZhciBuPXRoaXMub2Zmc2V0LHI9dGhpcy5saW1pdCxvPW5bdF07cmV0dXJuKDAsaS5waWNrSW5SYW5nZSkoZStvLDAsclt0XSk9PT1vJiYoMD09PW98fG89PT1yW3RdKX12YXIgbz1uKDc3KSxpPW4oMTE2KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoby5TbW9vdGhTY3JvbGxiYXIucHJvdG90eXBlLFwiX193aWxsT3ZlcnNjcm9sbFwiLHt2YWx1ZTpyLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19dmFyIG89big4NSksaT1yKG8pLHU9big4OSksYT1yKHUpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBjPW4oMTY0KTsoMCxhLmRlZmF1bHQpKGMpLmZvckVhY2goZnVuY3Rpb24odCl7XCJkZWZhdWx0XCIhPT10JiZcIl9fZXNNb2R1bGVcIiE9PXQmJigwLGkuZGVmYXVsdCkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBjW3RdfX0pfSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX12YXIgbz1uKDg1KSxpPXIobyksdT1uKDg5KSxhPXIodSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGM9bigxNjUpOygwLGEuZGVmYXVsdCkoYykuZm9yRWFjaChmdW5jdGlvbih0KXtcImRlZmF1bHRcIiE9PXQmJlwiX19lc01vZHVsZVwiIT09dCYmKDAsaS5kZWZhdWx0KShlLHQse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGNbdF19fSl9KTt2YXIgbD1uKDE2Nik7KDAsYS5kZWZhdWx0KShsKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wiZGVmYXVsdFwiIT09dCYmXCJfX2VzTW9kdWxlXCIhPT10JiYoMCxpLmRlZmF1bHQpKGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbFt0XX19KX0pO3ZhciBmPW4oMTczKTsoMCxhLmRlZmF1bHQpKGYpLmZvckVhY2goZnVuY3Rpb24odCl7XCJkZWZhdWx0XCIhPT10JiZcIl9fZXNNb2R1bGVcIiE9PXQmJigwLGkuZGVmYXVsdCkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBmW3RdfX0pfSk7dmFyIHM9bigxNzQpOygwLGEuZGVmYXVsdCkocykuZm9yRWFjaChmdW5jdGlvbih0KXtcImRlZmF1bHRcIiE9PXQmJlwiX19lc01vZHVsZVwiIT09dCYmKDAsaS5kZWZhdWx0KShlLHQse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHNbdF19fSl9KTt2YXIgZD1uKDE3NSk7KDAsYS5kZWZhdWx0KShkKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wiZGVmYXVsdFwiIT09dCYmXCJfX2VzTW9kdWxlXCIhPT10JiYoMCxpLmRlZmF1bHQpKGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZFt0XX19KX0pO3ZhciBoPW4oMTc2KTsoMCxhLmRlZmF1bHQpKGgpLmZvckVhY2goZnVuY3Rpb24odCl7XCJkZWZhdWx0XCIhPT10JiZcIl9fZXNNb2R1bGVcIiE9PXQmJigwLGkuZGVmYXVsdCkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBoW3RdfX0pfSk7dmFyIHY9bigxNzcpOygwLGEuZGVmYXVsdCkodikuZm9yRWFjaChmdW5jdGlvbih0KXtcImRlZmF1bHRcIiE9PXQmJlwiX19lc01vZHVsZVwiIT09dCYmKDAsaS5kZWZhdWx0KShlLHQse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHZbdF19fSl9KX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoKXt2YXIgdD10aGlzLGU9dGhpcy50YXJnZXRzLG49ZS5jb250YWluZXIscj1lLmNvbnRlbnQsbz0hMSx1PXZvaWQgMCxhPXZvaWQgMDtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcIl9faXNEcmFnXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBvfSxlbnVtZXJhYmxlOiExfSk7dmFyIGM9ZnVuY3Rpb24gZShuKXt2YXIgcj1uLngsbz1uLnk7aWYocnx8byl7dmFyIGk9dC5vcHRpb25zLnNwZWVkO3QuX19zZXRNb3ZlbWVudChyKmksbyppKSx1PXJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe2Uoe3g6cix5Om99KX0pfX07dGhpcy5fX2FkZEV2ZW50KG4sXCJkcmFnc3RhcnRcIixmdW5jdGlvbihlKXt0Ll9fZXZlbnRGcm9tQ2hpbGRTY3JvbGxiYXIoZSl8fChvPSEwLGE9ZS50YXJnZXQuY2xpZW50SGVpZ2h0LCgwLGkuc2V0U3R5bGUpKHIse1wicG9pbnRlci1ldmVudHNcIjpcImF1dG9cIn0pLGNhbmNlbEFuaW1hdGlvbkZyYW1lKHUpLHQuX191cGRhdGVCb3VuZGluZygpKX0pLHRoaXMuX19hZGRFdmVudChkb2N1bWVudCxcImRyYWdvdmVyIG1vdXNlbW92ZSB0b3VjaG1vdmVcIixmdW5jdGlvbihlKXtpZihvJiYhdC5fX2V2ZW50RnJvbUNoaWxkU2Nyb2xsYmFyKGUpKXtjYW5jZWxBbmltYXRpb25GcmFtZSh1KSxlLnByZXZlbnREZWZhdWx0KCk7dmFyIG49dC5fX2dldFBvaW50ZXJUcmVuZChlLGEpO2Mobil9fSksdGhpcy5fX2FkZEV2ZW50KGRvY3VtZW50LFwiZHJhZ2VuZCBtb3VzZXVwIHRvdWNoZW5kIGJsdXJcIixmdW5jdGlvbigpe2NhbmNlbEFuaW1hdGlvbkZyYW1lKHUpLG89ITF9KX12YXIgbz1uKDc3KSxpPW4oMTE2KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoby5TbW9vdGhTY3JvbGxiYXIucHJvdG90eXBlLFwiX19kcmFnSGFuZGxlclwiLHt2YWx1ZTpyLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19ZnVuY3Rpb24gbygpe3ZhciB0PXRoaXMsZT10aGlzLnRhcmdldHMsbj1mdW5jdGlvbihlKXt2YXIgbj10LnNpemUscj10Lm9mZnNldCxvPXQubGltaXQsaT10Lm1vdmVtZW50LHU9e0tFWV9DT0RFOnN9O3N3aXRjaChlKXtjYXNlIHUuS0VZX0NPREUuU1BBQ0U6cmV0dXJuWzAsMjAwXTtjYXNlIHUuS0VZX0NPREUuUEFHRV9VUDpyZXR1cm5bMCwtbi5jb250YWluZXIuaGVpZ2h0KzQwXTtjYXNlIHUuS0VZX0NPREUuUEFHRV9ET1dOOnJldHVyblswLG4uY29udGFpbmVyLmhlaWdodC00MF07Y2FzZSB1LktFWV9DT0RFLkVORDpyZXR1cm5bMCxNYXRoLmFicyhpLnkpK28ueS1yLnldO2Nhc2UgdS5LRVlfQ09ERS5IT01FOnJldHVyblswLC1NYXRoLmFicyhpLnkpLXIueV07Y2FzZSB1LktFWV9DT0RFLkxFRlQ6cmV0dXJuWy00MCwwXTtjYXNlIHUuS0VZX0NPREUuVVA6cmV0dXJuWzAsLTQwXTtjYXNlIHUuS0VZX0NPREUuUklHSFQ6cmV0dXJuWzQwLDBdO2Nhc2UgdS5LRVlfQ09ERS5ET1dOOnJldHVyblswLDQwXTtkZWZhdWx0OnJldHVybiBudWxsfX0scj1lLmNvbnRhaW5lcjt0aGlzLl9fYWRkRXZlbnQocixcImtleWRvd25cIixmdW5jdGlvbihlKXtpZihkb2N1bWVudC5hY3RpdmVFbGVtZW50PT09cil7dmFyIG89dC5vcHRpb25zLGk9dC5wYXJlbnRzLHU9dC5tb3ZlbWVudExvY2tlZCxhPW4oZS5rZXlDb2RlfHxlLndoaWNoKTtpZihhKXt2YXIgYz1sKGEsMiksZj1jWzBdLHM9Y1sxXTtpZih0Ll9fc2hvdWxkUHJvcGFnYXRlTW92ZW1lbnQoZixzKSlyZXR1cm4gci5ibHVyKCksaS5sZW5ndGgmJmlbMF0uZm9jdXMoKSx0Ll9fdXBkYXRlVGhyb3R0bGUoKTtlLnByZXZlbnREZWZhdWx0KCksdC5fX3VubG9ja01vdmVtZW50KCksZiYmdC5fX3dpbGxPdmVyc2Nyb2xsKFwieFwiLGYpJiYodS54PSEwKSxzJiZ0Ll9fd2lsbE92ZXJzY3JvbGwoXCJ5XCIscykmJih1Lnk9ITApO3ZhciBkPW8uc3BlZWQ7dC5fX2FkZE1vdmVtZW50KGYqZCxzKmQpfX19KSx0aGlzLl9fYWRkRXZlbnQocixcImtleXVwXCIsZnVuY3Rpb24oKXt0Ll9fdW5sb2NrTW92ZW1lbnQoKX0pfXZhciBpPW4oMTY3KSx1PXIoaSksYT1uKDE3MCksYz1yKGEpLGw9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSl7dmFyIG49W10scj0hMCxvPSExLGk9dm9pZCAwO3RyeXtcbmZvcih2YXIgdSxhPSgwLGMuZGVmYXVsdCkodCk7IShyPSh1PWEubmV4dCgpKS5kb25lKSYmKG4ucHVzaCh1LnZhbHVlKSwhZXx8bi5sZW5ndGghPT1lKTtyPSEwKTt9Y2F0Y2godCl7bz0hMCxpPXR9ZmluYWxseXt0cnl7IXImJmEucmV0dXJuJiZhLnJldHVybigpfWZpbmFsbHl7aWYobyl0aHJvdyBpfX1yZXR1cm4gbn1yZXR1cm4gZnVuY3Rpb24oZSxuKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBlO2lmKCgwLHUuZGVmYXVsdCkoT2JqZWN0KGUpKSlyZXR1cm4gdChlLG4pO3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpfX0oKSxmPW4oNzcpLHM9e1NQQUNFOjMyLFBBR0VfVVA6MzMsUEFHRV9ET1dOOjM0LEVORDozNSxIT01FOjM2LExFRlQ6MzcsVVA6MzgsUklHSFQ6MzksRE9XTjo0MH07T2JqZWN0LmRlZmluZVByb3BlcnR5KGYuU21vb3RoU2Nyb2xsYmFyLnByb3RvdHlwZSxcIl9fa2V5Ym9hcmRIYW5kbGVyXCIse3ZhbHVlOm8sd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9LGZ1bmN0aW9uKHQsZSxuKXt0LmV4cG9ydHM9e2RlZmF1bHQ6bigxNjgpLF9fZXNNb2R1bGU6ITB9fSxmdW5jdGlvbih0LGUsbil7big1Nyksbig0KSx0LmV4cG9ydHM9bigxNjkpfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big1Myksbz1uKDQ1KShcIml0ZXJhdG9yXCIpLGk9bigyNyk7dC5leHBvcnRzPW4oMTIpLmlzSXRlcmFibGU9ZnVuY3Rpb24odCl7dmFyIGU9T2JqZWN0KHQpO3JldHVybiB2b2lkIDAhPT1lW29dfHxcIkBAaXRlcmF0b3JcImluIGV8fGkuaGFzT3duUHJvcGVydHkocihlKSl9fSxmdW5jdGlvbih0LGUsbil7dC5leHBvcnRzPXtkZWZhdWx0Om4oMTcxKSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24odCxlLG4pe24oNTcpLG4oNCksdC5leHBvcnRzPW4oMTcyKX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTcpLG89big1Mik7dC5leHBvcnRzPW4oMTIpLmdldEl0ZXJhdG9yPWZ1bmN0aW9uKHQpe3ZhciBlPW8odCk7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBUeXBlRXJyb3IodCtcIiBpcyBub3QgaXRlcmFibGUhXCIpO3JldHVybiByKGUuY2FsbCh0KSl9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcigpe3ZhciB0PXRoaXMsZT10aGlzLnRhcmdldHMsbj1lLmNvbnRhaW5lcixyPWUueEF4aXMsbz1lLnlBeGlzLHU9ZnVuY3Rpb24oZSxuKXt2YXIgcj10LnNpemUsbz10LnRodW1iU2l6ZTtpZihcInhcIj09PWUpe3ZhciBpPXIuY29udGFpbmVyLndpZHRoLShvLngtby5yZWFsWCk7cmV0dXJuIG4vaSpyLmNvbnRlbnQud2lkdGh9aWYoXCJ5XCI9PT1lKXt2YXIgdT1yLmNvbnRhaW5lci5oZWlnaHQtKG8ueS1vLnJlYWxZKTtyZXR1cm4gbi91KnIuY29udGVudC5oZWlnaHR9cmV0dXJuIDB9LGE9ZnVuY3Rpb24odCl7cmV0dXJuKDAsaS5pc09uZU9mKSh0LFtyLnRyYWNrLHIudGh1bWJdKT9cInhcIjooMCxpLmlzT25lT2YpKHQsW28udHJhY2ssby50aHVtYl0pP1wieVwiOnZvaWQgMH0sYz12b2lkIDAsbD12b2lkIDAsZj12b2lkIDAscz12b2lkIDAsZD12b2lkIDA7dGhpcy5fX2FkZEV2ZW50KG4sXCJjbGlja1wiLGZ1bmN0aW9uKGUpe2lmKCFsJiYoMCxpLmlzT25lT2YpKGUudGFyZ2V0LFtyLnRyYWNrLG8udHJhY2tdKSl7dmFyIG49ZS50YXJnZXQsYz1hKG4pLGY9bi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxzPSgwLGkuZ2V0UG9zaXRpb24pKGUpLGQ9dC5vZmZzZXQsaD10LnRodW1iU2l6ZTtpZihcInhcIj09PWMpe3ZhciB2PXMueC1mLmxlZnQtaC54LzI7dC5fX3NldE1vdmVtZW50KHUoYyx2KS1kLngsMCl9ZWxzZXt2YXIgXz1zLnktZi50b3AtaC55LzI7dC5fX3NldE1vdmVtZW50KDAsdShjLF8pLWQueSl9fX0pLHRoaXMuX19hZGRFdmVudChuLFwibW91c2Vkb3duXCIsZnVuY3Rpb24oZSl7aWYoKDAsaS5pc09uZU9mKShlLnRhcmdldCxbci50aHVtYixvLnRodW1iXSkpe2M9ITA7dmFyIG49KDAsaS5nZXRQb3NpdGlvbikoZSksdT1lLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtzPWEoZS50YXJnZXQpLGY9e3g6bi54LXUubGVmdCx5Om4ueS11LnRvcH0sZD10LnRhcmdldHMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpfX0pLHRoaXMuX19hZGRFdmVudCh3aW5kb3csXCJtb3VzZW1vdmVcIixmdW5jdGlvbihlKXtpZihjKXtlLnByZXZlbnREZWZhdWx0KCksbD0hMDt2YXIgbj10Lm9mZnNldCxyPSgwLGkuZ2V0UG9zaXRpb24pKGUpO2lmKFwieFwiPT09cyl7dmFyIG89ci54LWYueC1kLmxlZnQ7dC5zZXRQb3NpdGlvbih1KHMsbyksbi55KX1pZihcInlcIj09PXMpe3ZhciBhPXIueS1mLnktZC50b3A7dC5zZXRQb3NpdGlvbihuLngsdShzLGEpKX19fSksdGhpcy5fX2FkZEV2ZW50KHdpbmRvdyxcIm1vdXNldXAgYmx1clwiLGZ1bmN0aW9uKCl7Yz1sPSExfSl9dmFyIG89big3NyksaT1uKDExNik7T2JqZWN0LmRlZmluZVByb3BlcnR5KG8uU21vb3RoU2Nyb2xsYmFyLnByb3RvdHlwZSxcIl9fbW91c2VIYW5kbGVyXCIse3ZhbHVlOnIsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKCl7dGhpcy5fX2FkZEV2ZW50KHdpbmRvdyxcInJlc2l6ZVwiLHRoaXMuX191cGRhdGVUaHJvdHRsZSl9dmFyIG89big3Nyk7T2JqZWN0LmRlZmluZVByb3BlcnR5KG8uU21vb3RoU2Nyb2xsYmFyLnByb3RvdHlwZSxcIl9fcmVzaXplSGFuZGxlclwiLHt2YWx1ZTpyLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcigpe3ZhciB0PXRoaXMsZT0hMSxuPXZvaWQgMCxyPXRoaXMudGFyZ2V0cyxvPXIuY29udGFpbmVyLHU9ci5jb250ZW50LGE9ZnVuY3Rpb24gZShyKXt2YXIgbz1yLngsaT1yLnk7aWYob3x8aSl7dmFyIHU9dC5vcHRpb25zLnNwZWVkO3QuX19zZXRNb3ZlbWVudChvKnUsaSp1KSxuPXJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe2Uoe3g6byx5Oml9KX0pfX0sYz1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpcIlwiOygwLGkuc2V0U3R5bGUpKG8se1wiLXVzZXItc2VsZWN0XCI6dH0pfTt0aGlzLl9fYWRkRXZlbnQod2luZG93LFwibW91c2Vtb3ZlXCIsZnVuY3Rpb24ocil7aWYoZSl7Y2FuY2VsQW5pbWF0aW9uRnJhbWUobik7dmFyIG89dC5fX2dldFBvaW50ZXJUcmVuZChyKTthKG8pfX0pLHRoaXMuX19hZGRFdmVudCh1LFwic2VsZWN0c3RhcnRcIixmdW5jdGlvbihyKXtyZXR1cm4gdC5fX2V2ZW50RnJvbUNoaWxkU2Nyb2xsYmFyKHIpP2MoXCJub25lXCIpOihjYW5jZWxBbmltYXRpb25GcmFtZShuKSx0Ll9fdXBkYXRlQm91bmRpbmcoKSx2b2lkKGU9ITApKX0pLHRoaXMuX19hZGRFdmVudCh3aW5kb3csXCJtb3VzZXVwIGJsdXJcIixmdW5jdGlvbigpe2NhbmNlbEFuaW1hdGlvbkZyYW1lKG4pLGMoKSxlPSExfSksdGhpcy5fX2FkZEV2ZW50KG8sXCJzY3JvbGxcIixmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCksby5zY3JvbGxUb3A9by5zY3JvbGxMZWZ0PTB9KX12YXIgbz1uKDc3KSxpPW4oMTE2KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoby5TbW9vdGhTY3JvbGxiYXIucHJvdG90eXBlLFwiX19zZWxlY3RIYW5kbGVyXCIse3ZhbHVlOnIsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX1mdW5jdGlvbiBvKCl7dmFyIHQ9dGhpcyxlPXRoaXMudGFyZ2V0cyxuPXRoaXMuX190b3VjaFJlY29yZCxyPWUuY29udGFpbmVyO3RoaXMuX19hZGRFdmVudChyLFwidG91Y2hzdGFydFwiLGZ1bmN0aW9uKGUpe2lmKCF0Ll9faXNEcmFnKXt2YXIgcj10Ll9fdGltZXJJRCxvPXQubW92ZW1lbnQ7Y2FuY2VsQW5pbWF0aW9uRnJhbWUoci5zY3JvbGxUbyksdC5fX3dpbGxPdmVyc2Nyb2xsKFwieFwiKXx8KG8ueD0wKSx0Ll9fd2lsbE92ZXJzY3JvbGwoXCJ5XCIpfHwoby55PTApLG4udHJhY2soZSksdC5fX2F1dG9Mb2NrTW92ZW1lbnQoKX19KSx0aGlzLl9fYWRkRXZlbnQocixcInRvdWNobW92ZVwiLGZ1bmN0aW9uKGUpe2lmKCEodC5fX2lzRHJhZ3x8cyYmcyE9PXQpKXtuLnVwZGF0ZShlKTt2YXIgcj1uLmdldERlbHRhKCksbz1yLngsaT1yLnk7aWYodC5fX3Nob3VsZFByb3BhZ2F0ZU1vdmVtZW50KG8saSkpcmV0dXJuIHQuX191cGRhdGVUaHJvdHRsZSgpO3ZhciB1PXQubW92ZW1lbnQsYT10Lk1BWF9PVkVSU0NST0xMLGM9dC5vcHRpb25zO2lmKHUueCYmdC5fX3dpbGxPdmVyc2Nyb2xsKFwieFwiLG8pKXt2YXIgbD0yO1wiYm91bmNlXCI9PT1jLm92ZXJzY3JvbGxFZmZlY3QmJihsKz1NYXRoLmFicygxMCp1LngvYSkpLE1hdGguYWJzKHUueCk+PWE/bz0wOm8vPWx9aWYodS55JiZ0Ll9fd2lsbE92ZXJzY3JvbGwoXCJ5XCIsaSkpe3ZhciBmPTI7XCJib3VuY2VcIj09PWMub3ZlcnNjcm9sbEVmZmVjdCYmKGYrPU1hdGguYWJzKDEwKnUueS9hKSksTWF0aC5hYnModS55KT49YT9pPTA6aS89Zn10Ll9fYXV0b0xvY2tNb3ZlbWVudCgpLGUucHJldmVudERlZmF1bHQoKSx0Ll9fYWRkTW92ZW1lbnQobyxpLCEwKSxzPXR9fSksdGhpcy5fX2FkZEV2ZW50KHIsXCJ0b3VjaGNhbmNlbCB0b3VjaGVuZFwiLGZ1bmN0aW9uKGUpe2lmKCF0Ll9faXNEcmFnKXt2YXIgcj10Lm9wdGlvbnMuc3BlZWQsbz1uLmdldFZlbG9jaXR5KCksaT17fTsoMCx1LmRlZmF1bHQpKG8pLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGU9KDAsbC5waWNrSW5SYW5nZSkob1t0XSpjLkdMT0JBTF9FTlYuRUFTSU5HX01VTFRJUExJRVIsLTFlMywxZTMpO2lbdF09TWF0aC5hYnMoZSk+Zj9lKnI6MH0pLHQuX19hZGRNb3ZlbWVudChpLngsaS55LCEwKSx0Ll9fdW5sb2NrTW92ZW1lbnQoKSxuLnJlbGVhc2UoZSkscz1udWxsfX0pfXZhciBpPW4oODkpLHU9cihpKSxhPW4oNzcpLGM9big4OCksbD1uKDExNiksZj0xMDAscz1udWxsO09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLlNtb290aFNjcm9sbGJhci5wcm90b3R5cGUsXCJfX3RvdWNoSGFuZGxlclwiLHt2YWx1ZTpvLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcigpe3ZhciB0PXRoaXMsZT10aGlzLnRhcmdldHMuY29udGFpbmVyLG49ITEscj0oMCxpLmRlYm91bmNlKShmdW5jdGlvbigpe249ITF9LDMwLCExKTt0aGlzLl9fYWRkRXZlbnQoZSx1LkdMT0JBTF9FTlYuV0hFRUxfRVZFTlQsZnVuY3Rpb24oZSl7dmFyIG89dC5vcHRpb25zLHU9dC53aGVlbFJldmVyc2VkLGE9KDAsaS5nZXREZWx0YSkoZSksYz1hLngsbD1hLnk7cmV0dXJuIGMqPW8uc3BlZWQsbCo9by5zcGVlZCx0Ll9fc2hvdWxkUHJvcGFnYXRlTW92ZW1lbnQoYyxsKT90Ll9fdXBkYXRlVGhyb3R0bGUoKTooZS5wcmV2ZW50RGVmYXVsdCgpLHIoKSx0Lm92ZXJzY3JvbGxCYWNrJiYobj0hMCksbiYmKHQuX193aWxsT3ZlcnNjcm9sbChcInhcIixjKSYmKGM9MCksdC5fX3dpbGxPdmVyc2Nyb2xsKFwieVwiLGwpJiYobD0wKSksdm9pZCh1P3QuX19hZGRNb3ZlbWVudChsLGMsITApOnQuX19hZGRNb3ZlbWVudChjLGwsITApKSl9KX12YXIgbz1uKDc3KSxpPW4oMTE2KSx1PW4oODgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShvLlNtb290aFNjcm9sbGJhci5wcm90b3R5cGUsXCJfX3doZWVsSGFuZGxlclwiLHt2YWx1ZTpyLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19dmFyIG89big4NSksaT1yKG8pLHU9big4OSksYT1yKHUpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBjPW4oMTc5KTsoMCxhLmRlZmF1bHQpKGMpLmZvckVhY2goZnVuY3Rpb24odCl7XCJkZWZhdWx0XCIhPT10JiZcIl9fZXNNb2R1bGVcIiE9PXQmJigwLGkuZGVmYXVsdCkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBjW3RdfX0pfSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX12YXIgbz1uKDg1KSxpPXIobyksdT1uKDg5KSxhPXIodSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGM9bigxODApOygwLGEuZGVmYXVsdCkoYykuZm9yRWFjaChmdW5jdGlvbih0KXtcImRlZmF1bHRcIiE9PXQmJlwiX19lc01vZHVsZVwiIT09dCYmKDAsaS5kZWZhdWx0KShlLHQse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGNbdF19fSl9KTt2YXIgbD1uKDE4MSk7KDAsYS5kZWZhdWx0KShsKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wiZGVmYXVsdFwiIT09dCYmXCJfX2VzTW9kdWxlXCIhPT10JiYoMCxpLmRlZmF1bHQpKGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbFt0XX19KX0pO3ZhciBmPW4oMTgyKTsoMCxhLmRlZmF1bHQpKGYpLmZvckVhY2goZnVuY3Rpb24odCl7XCJkZWZhdWx0XCIhPT10JiZcIl9fZXNNb2R1bGVcIiE9PXQmJigwLGkuZGVmYXVsdCkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBmW3RdfX0pfSk7dmFyIHM9bigxODMpOygwLGEuZGVmYXVsdCkocykuZm9yRWFjaChmdW5jdGlvbih0KXtcImRlZmF1bHRcIiE9PXQmJlwiX19lc01vZHVsZVwiIT09dCYmKDAsaS5kZWZhdWx0KShlLHQse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHNbdF19fSl9KTt2YXIgZD1uKDE4NCk7KDAsYS5kZWZhdWx0KShkKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wiZGVmYXVsdFwiIT09dCYmXCJfX2VzTW9kdWxlXCIhPT10JiYoMCxpLmRlZmF1bHQpKGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZFt0XX19KX0pO3ZhciBoPW4oMTg3KTsoMCxhLmRlZmF1bHQpKGgpLmZvckVhY2goZnVuY3Rpb24odCl7XCJkZWZhdWx0XCIhPT10JiZcIl9fZXNNb2R1bGVcIiE9PXQmJigwLGkuZGVmYXVsdCkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBoW3RdfX0pfSk7dmFyIHY9bigxODgpOygwLGEuZGVmYXVsdCkodikuZm9yRWFjaChmdW5jdGlvbih0KXtcImRlZmF1bHRcIiE9PXQmJlwiX19lc01vZHVsZVwiIT09dCYmKDAsaS5kZWZhdWx0KShlLHQse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHZbdF19fSl9KTt2YXIgXz1uKDE4OSk7KDAsYS5kZWZhdWx0KShfKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wiZGVmYXVsdFwiIT09dCYmXCJfX2VzTW9kdWxlXCIhPT10JiYoMCxpLmRlZmF1bHQpKGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gX1t0XX19KX0pO3ZhciBwPW4oMTkwKTsoMCxhLmRlZmF1bHQpKHApLmZvckVhY2goZnVuY3Rpb24odCl7XCJkZWZhdWx0XCIhPT10JiZcIl9fZXNNb2R1bGVcIiE9PXQmJigwLGkuZGVmYXVsdCkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBwW3RdfX0pfSk7dmFyIHk9bigxOTEpOygwLGEuZGVmYXVsdCkoeSkuZm9yRWFjaChmdW5jdGlvbih0KXtcImRlZmF1bHRcIiE9PXQmJlwiX19lc01vZHVsZVwiIT09dCYmKDAsaS5kZWZhdWx0KShlLHQse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHlbdF19fSl9KTt2YXIgYj1uKDE5Mik7KDAsYS5kZWZhdWx0KShiKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1wiZGVmYXVsdFwiIT09dCYmXCJfX2VzTW9kdWxlXCIhPT10JiYoMCxpLmRlZmF1bHQpKGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYlt0XX19KX0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0LGUsbil7dmFyIHI9dGhpcztpZighdHx8XCJmdW5jdGlvblwiIT10eXBlb2YgdC5hZGRFdmVudExpc3RlbmVyKXRocm93IG5ldyBUeXBlRXJyb3IoXCJleHBlY3QgZWxlbSB0byBiZSBhIERPTSBlbGVtZW50LCBidXQgZ290IFwiK3QpO3ZhciBvPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoLHI9QXJyYXkoZT4xP2UtMTowKSxvPTE7bzxlO28rKylyW28tMV09YXJndW1lbnRzW29dOyF0LnR5cGUubWF0Y2goL2RyYWcvKSYmdC5kZWZhdWx0UHJldmVudGVkfHxuLmFwcGx5KHZvaWQgMCxbdF0uY29uY2F0KHIpKX07ZS5zcGxpdCgvXFxzKy9nKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3IuX19oYW5kbGVycy5wdXNoKHtldnQ6ZSxlbGVtOnQsZm46byxoYXNSZWdpc3RlcmVkOiEwfSksdC5hZGRFdmVudExpc3RlbmVyKGUsbyl9KX12YXIgbz1uKDc3KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoby5TbW9vdGhTY3JvbGxiYXIucHJvdG90eXBlLFwiX19hZGRFdmVudFwiLHt2YWx1ZTpyLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fSxlPXQudGFyZ2V0O3JldHVybiB0aGlzLmNoaWxkcmVuLnNvbWUoZnVuY3Rpb24odCl7cmV0dXJuIHQuY29udGFpbnMoZSl9KX12YXIgbz1uKDc3KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoby5TbW9vdGhTY3JvbGxiYXIucHJvdG90eXBlLFwiX19ldmVudEZyb21DaGlsZFNjcm9sbGJhclwiLHt2YWx1ZTpyLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF0sZT10aGlzLm9wdGlvbnMsbj10aGlzLm9mZnNldCxyPXRoaXMubGltaXQ7cmV0dXJuIHQmJihlLmNvbnRpbnVvdXNTY3JvbGxpbmd8fGUub3ZlcnNjcm9sbEVmZmVjdCk/e3g6Wy0oMS8wKSwxLzBdLHk6Wy0oMS8wKSwxLzBdfTp7eDpbLW4ueCxyLngtbi54XSx5Olstbi55LHIueS1uLnldfX12YXIgbz1uKDc3KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoby5TbW9vdGhTY3JvbGxiYXIucHJvdG90eXBlLFwiX19nZXREZWx0YUxpbWl0XCIse3ZhbHVlOnIsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTowLG49dGhpcy5ib3VuZGluZyxyPW4udG9wLG89bi5yaWdodCx1PW4uYm90dG9tLGE9bi5sZWZ0LGM9KDAsaS5nZXRQb3NpdGlvbikodCksbD1jLngsZj1jLnkscz17eDowLHk6MH07cmV0dXJuIDA9PT1sJiYwPT09Zj9zOihsPm8tZT9zLng9bC1vK2U6bDxhK2UmJihzLng9bC1hLWUpLGY+dS1lP3MueT1mLXUrZTpmPHIrZSYmKHMueT1mLXItZSkscyl9dmFyIG89big3NyksaT1uKDExNik7T2JqZWN0LmRlZmluZVByb3BlcnR5KG8uU21vb3RoU2Nyb2xsYmFyLnByb3RvdHlwZSxcIl9fZ2V0UG9pbnRlclRyZW5kXCIse3ZhbHVlOnIsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX1mdW5jdGlvbiBvKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpe2Zvcih2YXIgZT0wLG49QXJyYXkodC5sZW5ndGgpO2U8dC5sZW5ndGg7ZSsrKW5bZV09dFtlXTtyZXR1cm4gbn1yZXR1cm4oMCxoLmRlZmF1bHQpKHQpfWZ1bmN0aW9uIGkodCl7dmFyIGU9dGhpcyxuPXtzcGVlZDoxLGRhbXBpbmc6LjEsdGh1bWJNaW5TaXplOjIwLHN5bmNDYWxsYmFja3M6ITEscmVuZGVyQnlQaXhlbHM6ITAsYWx3YXlzU2hvd1RyYWNrczohMSxjb250aW51b3VzU2Nyb2xsaW5nOlwiYXV0b1wiLG92ZXJzY3JvbGxFZmZlY3Q6ITEsb3ZlcnNjcm9sbEVmZmVjdENvbG9yOlwiIzg3Y2VlYlwiLG92ZXJzY3JvbGxEYW1waW5nOi4yfSxyPXtkYW1waW5nOlswLDFdLHNwZWVkOlswLDEvMF0sdGh1bWJNaW5TaXplOlswLDEvMF0sb3ZlcnNjcm9sbEVmZmVjdDpbITEsXCJib3VuY2VcIixcImdsb3dcIl0sb3ZlcnNjcm9sbERhbXBpbmc6WzAsMV19LGk9ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06XCJhdXRvXCI7aWYobi5vdmVyc2Nyb2xsRWZmZWN0IT09ITEpcmV0dXJuITE7c3dpdGNoKHQpe2Nhc2VcImF1dG9cIjpyZXR1cm4gZS5pc05lc3RlZFNjcm9sbGJhcjtkZWZhdWx0OnJldHVybiEhdH19LHU9e3NldCBpZ25vcmVFdmVudHModCl7Y29uc29sZS53YXJuKFwiYG9wdGlvbnMuaWdub3JlRXZlbnRzYCBwYXJhbWV0ZXIgaXMgZGVwcmVjYXRlZCwgdXNlIGBpbnN0YW5jZSN1bnJlZ2lzdGVyRXZlbnRzKClgIG1ldGhvZCBpbnN0ZWFkLiBodHRwczovL2dpdGh1Yi5jb20vaWRpb3RXdS9zbW9vdGgtc2Nyb2xsYmFyL3dpa2kvSW5zdGFuY2UtTWV0aG9kcyNpbnN0YW5jZXVucmVnaXN0ZXJldmVudHMtcmVnZXgtLXJlZ2V4LXJlZ2V4LS1cIil9LHNldCBmcmljdGlvbih0KXtjb25zb2xlLndhcm4oXCJgb3B0aW9ucy5mcmljdGlvbj1cIit0K1wiYCBpcyBkZXByZWNhdGVkLCB1c2UgYG9wdGlvbnMuZGFtcGluZz1cIit0LzEwMCtcImAgaW5zdGVhZC5cIiksdGhpcy5kYW1waW5nPXQvMTAwfSxnZXQgc3luY0NhbGxiYWNrcygpe3JldHVybiBuLnN5bmNDYWxsYmFja3N9LHNldCBzeW5jQ2FsbGJhY2tzKHQpe24uc3luY0NhbGxiYWNrcz0hIXR9LGdldCByZW5kZXJCeVBpeGVscygpe3JldHVybiBuLnJlbmRlckJ5UGl4ZWxzfSxzZXQgcmVuZGVyQnlQaXhlbHModCl7bi5yZW5kZXJCeVBpeGVscz0hIXR9LGdldCBhbHdheXNTaG93VHJhY2tzKCl7cmV0dXJuIG4uYWx3YXlzU2hvd1RyYWNrc30sc2V0IGFsd2F5c1Nob3dUcmFja3ModCl7dD0hIXQsbi5hbHdheXNTaG93VHJhY2tzPXQ7dmFyIHI9ZS50YXJnZXRzLmNvbnRhaW5lcjt0PyhlLnNob3dUcmFjaygpLHIuY2xhc3NMaXN0LmFkZChcInN0aWNreVwiKSk6KGUuaGlkZVRyYWNrKCksci5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5XCIpKX0sZ2V0IGNvbnRpbnVvdXNTY3JvbGxpbmcoKXtyZXR1cm4gaShuLmNvbnRpbnVvdXNTY3JvbGxpbmcpfSxzZXQgY29udGludW91c1Njcm9sbGluZyh0KXtcImF1dG9cIj09PXQ/bi5jb250aW51b3VzU2Nyb2xsaW5nPXQ6bi5jb250aW51b3VzU2Nyb2xsaW5nPSEhdH0sZ2V0IG92ZXJzY3JvbGxFZmZlY3QoKXtyZXR1cm4gbi5vdmVyc2Nyb2xsRWZmZWN0fSxzZXQgb3ZlcnNjcm9sbEVmZmVjdCh0KXt0JiYhfnIub3ZlcnNjcm9sbEVmZmVjdC5pbmRleE9mKHQpJiYoY29uc29sZS53YXJuKFwiYG92ZXJzY3JvbGxFZmZlY3RgIHNob3VsZCBiZSBvbmUgb2YgXCIrKDAscy5kZWZhdWx0KShyLm92ZXJzY3JvbGxFZmZlY3QpK1wiLCBidXQgZ290IFwiKygwLHMuZGVmYXVsdCkodCkrXCIuIEl0IHdpbGwgYmUgc2V0IHRvIGBmYWxzZWAgbm93LlwiKSx0PSExKSxuLm92ZXJzY3JvbGxFZmZlY3Q9dH0sZ2V0IG92ZXJzY3JvbGxFZmZlY3RDb2xvcigpe3JldHVybiBuLm92ZXJzY3JvbGxFZmZlY3RDb2xvcn0sc2V0IG92ZXJzY3JvbGxFZmZlY3RDb2xvcih0KXtuLm92ZXJzY3JvbGxFZmZlY3RDb2xvcj10fX07KDAsbC5kZWZhdWx0KShuKS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIXUuaGFzT3duUHJvcGVydHkodCl9KS5mb3JFYWNoKGZ1bmN0aW9uKHQpeygwLGEuZGVmYXVsdCkodSx0LHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBuW3RdfSxzZXQ6ZnVuY3Rpb24oZSl7aWYoaXNOYU4ocGFyc2VGbG9hdChlKSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcImV4cGVjdCBgb3B0aW9ucy5cIit0K1wiYCB0byBiZSBhIG51bWJlciwgYnV0IGdvdCBcIisoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpiKGUpKSk7blt0XT1nLnBpY2tJblJhbmdlLmFwcGx5KHZvaWQgMCxbZV0uY29uY2F0KG8oclt0XSkpKX19KX0pLHRoaXMuX19yZWFkb25seShcIm9wdGlvbnNcIix1KSx0aGlzLnNldE9wdGlvbnModCl9dmFyIHU9big4NSksYT1yKHUpLGM9big4OSksbD1yKGMpLGY9bigxODUpLHM9cihmKSxkPW4oMiksaD1yKGQpLHY9big1NSksXz1yKHYpLHA9big2MikseT1yKHApLGI9XCJmdW5jdGlvblwiPT10eXBlb2YgeS5kZWZhdWx0JiZcInN5bWJvbFwiPT10eXBlb2YgXy5kZWZhdWx0P2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHkuZGVmYXVsdCYmdC5jb25zdHJ1Y3Rvcj09PXkuZGVmYXVsdCYmdCE9PXkuZGVmYXVsdC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0sZz1uKDExNiksbT1uKDc3KTtPYmplY3QuZGVmaW5lUHJvcGVydHkobS5TbW9vdGhTY3JvbGxiYXIucHJvdG90eXBlLFwiX19pbml0T3B0aW9uc1wiLHt2YWx1ZTppLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfSxmdW5jdGlvbih0LGUsbil7dC5leHBvcnRzPXtkZWZhdWx0Om4oMTg2KSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTIpLG89ci5KU09OfHwoci5KU09OPXtzdHJpbmdpZnk6SlNPTi5zdHJpbmdpZnl9KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIG8uc3RyaW5naWZ5LmFwcGx5KG8sYXJndW1lbnRzKX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXTt0aGlzLnJldmVyc2VXaGVlbCh0KX12YXIgbz1uKDc3KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoby5TbW9vdGhTY3JvbGxiYXIucHJvdG90eXBlLFwiX19pbml0UmV2ZXJzZVdoZWVsXCIse3ZhbHVlOnIsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKCl7dGhpcy51cGRhdGUoKSx0aGlzLl9fa2V5Ym9hcmRIYW5kbGVyKCksdGhpcy5fX3Jlc2l6ZUhhbmRsZXIoKSx0aGlzLl9fc2VsZWN0SGFuZGxlcigpLHRoaXMuX19tb3VzZUhhbmRsZXIoKSx0aGlzLl9fdG91Y2hIYW5kbGVyKCksdGhpcy5fX3doZWVsSGFuZGxlcigpLHRoaXMuX19kcmFnSGFuZGxlcigpLHRoaXMuX19yZW5kZXIoKX12YXIgbz1uKDc3KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoby5TbW9vdGhTY3JvbGxiYXIucHJvdG90eXBlLFwiX19pbml0U2Nyb2xsYmFyXCIse3ZhbHVlOnIsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX1mdW5jdGlvbiBvKHQsZSl7cmV0dXJuKDAsdS5kZWZhdWx0KSh0aGlzLHQse3ZhbHVlOmUsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KX12YXIgaT1uKDg1KSx1PXIoaSksYT1uKDc3KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoYS5TbW9vdGhTY3JvbGxiYXIucHJvdG90eXBlLFwiX19yZWFkb25seVwiLHt2YWx1ZTpvLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcigpe3ZhciB0PXRoaXMudGFyZ2V0cyxlPXRoaXMuc2l6ZSxuPXRoaXMub2Zmc2V0LHI9dGhpcy50aHVtYk9mZnNldCxpPXRoaXMudGh1bWJTaXplO3IueD1uLngvZS5jb250ZW50LndpZHRoKihlLmNvbnRhaW5lci53aWR0aC0oaS54LWkucmVhbFgpKSxyLnk9bi55L2UuY29udGVudC5oZWlnaHQqKGUuY29udGFpbmVyLmhlaWdodC0oaS55LWkucmVhbFkpKSwoMCxvLnNldFN0eWxlKSh0LnhBeGlzLnRodW1iLHtcIi10cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZTNkKFwiK3IueCtcInB4LCAwLCAwKVwifSksKDAsby5zZXRTdHlsZSkodC55QXhpcy50aHVtYix7XCItdHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGUzZCgwLCBcIityLnkrXCJweCwgMClcIn0pfXZhciBvPW4oMTE2KSxpPW4oNzcpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShpLlNtb290aFNjcm9sbGJhci5wcm90b3R5cGUsXCJfX3NldFRodW1iUG9zaXRpb25cIix7dmFsdWU6cix3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9KX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoKXt2YXIgdD10aGlzLnRhcmdldHMuY29udGFpbmVyLGU9dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxuPWUudG9wLHI9ZS5yaWdodCxvPWUuYm90dG9tLGk9ZS5sZWZ0LHU9d2luZG93LGE9dS5pbm5lckhlaWdodCxjPXUuaW5uZXJXaWR0aDt0aGlzLl9fcmVhZG9ubHkoXCJib3VuZGluZ1wiLHt0b3A6TWF0aC5tYXgobiwwKSxyaWdodDpNYXRoLm1pbihyLGMpLGJvdHRvbTpNYXRoLm1pbihvLGEpLGxlZnQ6TWF0aC5tYXgoaSwwKX0pfXZhciBvPW4oNzcpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShvLlNtb290aFNjcm9sbGJhci5wcm90b3R5cGUsXCJfX3VwZGF0ZUJvdW5kaW5nXCIse3ZhbHVlOnIsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX1mdW5jdGlvbiBvKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpe2Zvcih2YXIgZT0wLG49QXJyYXkodC5sZW5ndGgpO2U8dC5sZW5ndGg7ZSsrKW5bZV09dFtlXTtyZXR1cm4gbn1yZXR1cm4oMCxhLmRlZmF1bHQpKHQpfWZ1bmN0aW9uIGkoKXt2YXIgdD10aGlzLnRhcmdldHMsZT10LmNvbnRhaW5lcixuPXQuY29udGVudDt0aGlzLl9fcmVhZG9ubHkoXCJjaGlsZHJlblwiLFtdLmNvbmNhdChvKG4ucXVlcnlTZWxlY3RvckFsbChsLnNlbGVjdG9ycykpKSksdGhpcy5fX3JlYWRvbmx5KFwiaXNOZXN0ZWRTY3JvbGxiYXJcIiwhMSk7Zm9yKHZhciByPVtdLGk9ZTtpPWkucGFyZW50RWxlbWVudDspbC5zYkxpc3QuaGFzKGkpJiYodGhpcy5fX3JlYWRvbmx5KFwiaXNOZXN0ZWRTY3JvbGxiYXJcIiwhMCksci5wdXNoKGkpKTt0aGlzLl9fcmVhZG9ubHkoXCJwYXJlbnRzXCIscil9dmFyIHU9bigyKSxhPXIodSksYz1uKDc3KSxsPW4oODgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShjLlNtb290aFNjcm9sbGJhci5wcm90b3R5cGUsXCJfX3VwZGF0ZVRyZWVcIix7dmFsdWU6aSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9KX0sZnVuY3Rpb24odCxlKXt9XSl9KTsiLCIvKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgeyBBUFBfTkFNRSwgJGRvY3VtZW50IH0gZnJvbSAnLi91dGlscy9lbnZpcm9ubWVudCc7XG5cbmltcG9ydCBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscyc7XG5cbmltcG9ydCB7IGFycmF5Q29udGFpbnMsIHJlbW92ZUZyb21BcnJheSB9IGZyb20gJy4vdXRpbHMvYXJyYXknO1xuaW1wb3J0IHsgZ2V0Tm9kZURhdGEgfSBmcm9tICcuL3V0aWxzL2h0bWwnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdXRpbHMvaXMnO1xuXG4vLyBCYXNpYyBtb2R1bGVzXG5pbXBvcnQgKiBhcyBtb2R1bGVzIGZyb20gJy4vbW9kdWxlcyc7XG5cbmNvbnN0IE1PRFVMRV9OQU1FID0gJ0FwcCc7XG5jb25zdCBFVkVOVF9OQU1FU1BBQ0UgPSBgJHtBUFBfTkFNRX0uJHtNT0RVTEVfTkFNRX1gO1xuXG5leHBvcnQgY29uc3QgRVZFTlQgPSB7XG4gICAgSU5JVF9NT0RVTEVTOiBgaW5pdE1vZHVsZXMuJHtFVkVOVF9OQU1FU1BBQ0V9YCxcbiAgICBJTklUX1NPTUVfTU9EVUxFUzogYGluaXRTb21lTW9kdWxlcy4ke0VWRU5UX05BTUVTUEFDRX1gLFxuICAgIElOSVRfU0NPUEVEX01PRFVMRVM6IGBpbml0U2NvcGVkTW9kdWxlcy4ke0VWRU5UX05BTUVTUEFDRX1gLFxuICAgIERFTEVURV9TQ09QRURfTU9EVUxFUzogYGRlbGV0ZVNjb3BlZE1vZHVsZXMuJHtFVkVOVF9OQU1FU1BBQ0V9YFxufTtcblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzID0gbW9kdWxlcztcbiAgICAgICAgdGhpcy5jdXJyZW50TW9kdWxlcyA9IFtdO1xuXG4gICAgICAgICRkb2N1bWVudC5vbihFVkVOVC5JTklUX01PRFVMRVMsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0R2xvYmFscyhldmVudC5maXJzdEJsb29kKVxuICAgICAgICAgICAgICAgIC5kZWxldGVNb2R1bGVzKGV2ZW50KVxuICAgICAgICAgICAgICAgIC5pbml0TW9kdWxlcyhldmVudCk7XG4gICAgICAgICAgICAvL29uc29sZS5sb2coJ2xpc3RlbiBJTklUX01PRFVMRVMnKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICAkZG9jdW1lbnQub24oRVZFTlQuSU5JVF9TT01FX01PRFVMRVMsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0TW9kdWxlcyhldmVudCk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdsaXN0ZW4gSU5JVF9TT01FX01PRFVMRVMnKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICAkZG9jdW1lbnQub24oRVZFTlQuSU5JVF9TQ09QRURfTU9EVUxFUywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdsaXN0ZW4gSU5JVF9TQ09QRURfTU9EVUxFUycpO1xuICAgICAgICAgICAgdGhpcy5pbml0TW9kdWxlcyhldmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRkb2N1bWVudC5vbihFVkVOVC5ERUxFVEVfU0NPUEVEX01PRFVMRVMsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnbGlzdGVuIERFTEVURV9TQ09QRURfTU9EVUxFUycpO1xuICAgICAgICAgICAgdGhpcy5kZWxldGVNb2R1bGVzKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveSBhbGwgZXhpc3RpbmcgbW9kdWxlcyBvciBhIHNwZWNpZmljIHNjb3BlIG9mIG1vZHVsZXNcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50IFRoZSBldmVudCBiZWluZyB0cmlnZ2VyZWQuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICBTZWxmIChhbGxvd3MgY2hhaW5pbmcpXG4gICAgICovXG4gICAgZGVsZXRlTW9kdWxlcyhldmVudCkge1xuICAgICAgICBsZXQgZGVzdHJveUFsbCA9IHRydWU7XG4gICAgICAgIGxldCBtb2R1bGVJZHMgPSBbXTtcblxuICAgICAgICAvL2NvbnNvbGUubG9nKCdkZWxldGUgbW9kdWxlcycpO1xuXG4gICAgICAgIC8vIENoZWNrIGZvciBzY29wZSBmaXJzdFxuICAgICAgICBpZiAoZXZlbnQuJHNjb3BlIGluc3RhbmNlb2YgalF1ZXJ5ICYmIGV2ZW50LiRzY29wZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBNb2R1bGVzIHdpdGhpbiBzY29wZVxuICAgICAgICAgICAgY29uc3QgJG1vZHVsZXMgPSBldmVudC4kc2NvcGUuZmluZCgnW2RhdGEtbW9kdWxlXScpO1xuXG4gICAgICAgICAgICAvLyBEZXRlcm1pbmUgdGhlaXIgdWlkc1xuICAgICAgICAgICAgbW9kdWxlSWRzID0gJC5tYWtlQXJyYXkoJG1vZHVsZXMubWFwKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRtb2R1bGVzLmVxKGluZGV4KS5kYXRhKCd1aWQnKTtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgaWYgKG1vZHVsZUlkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZGVzdHJveUFsbCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTG9vcCBtb2R1bGVzIGFuZCBkZXN0cm95aW5nIGFsbCBvZiB0aGVtLCBvciBzcGVjaWZpYyBvbmVzXG4gICAgICAgIGxldCBpID0gdGhpcy5jdXJyZW50TW9kdWxlcy5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgaWYgKGRlc3Ryb3lBbGwgfHwgYXJyYXlDb250YWlucyhtb2R1bGVJZHMsIHRoaXMuY3VycmVudE1vZHVsZXNbaV0udWlkKSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUZyb21BcnJheShtb2R1bGVJZHMsIHRoaXMuY3VycmVudE1vZHVsZXNbaV0udWlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb2R1bGVzW2ldLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb2R1bGVzLnNwbGljZShpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGUgZ2xvYmFsIGZ1bmN0aW9ucyBhbmQgc2V0dGluZ3NcbiAgICAgKiBBbGxvd3MgeW91IHRvIGluaXRpYWxpemUgZ2xvYmFsIG1vZHVsZXMgb25seSBvbmNlIGlmIHlvdSBuZWVkXG4gICAgICogKGV4Ljogd2hlbiB1c2luZyBCYXJiYS5qcyBvciBTbW9vdGhTdGF0ZS5qcylcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFNlbGYgKGFsbG93cyBjaGFpbmluZylcbiAgICAgKi9cbiAgICBpbml0R2xvYmFscyhmaXJzdEJsb29kKSB7XG4gICAgICAgIGdsb2JhbHMoZmlyc3RCbG9vZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgbW9kdWxlcyBhbmQgaW5pdGlhbGl6ZSB0aGVtXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudCBUaGUgZXZlbnQgYmVpbmcgdHJpZ2dlcmVkLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgU2VsZiAoYWxsb3dzIGNoYWluaW5nKVxuICAgICAqL1xuICAgIGluaXRNb2R1bGVzKGV2ZW50KSB7XG4gICAgICAgIC8vIEVsZW1lbnRzIHdpdGggbW9kdWxlXG4gICAgICAgIGxldCAkbW9kdWxlRWxzID0gW107XG4gICAgICAgIC8vIElmIGZpcnN0IGJsb29kLCBsb2FkIGFsbCBtb2R1bGVzIGluIHRoZSBET01cbiAgICAgICAgLy8gSWYgc2NvcGVkLCByZW5kZXIgZWxlbWVudHMgd2l0aCBtb2R1bGVzXG4gICAgICAgIC8vIElmIEJhcmJhLCBsb2FkIG1vZHVsZXMgY29udGFpbmVkIGluIEJhcmJhIGNvbnRhaW5lclxuICAgICAgICBpZiAoZXZlbnQuZmlyc3RCbG9vZCkge1xuICAgICAgICAgICAgJG1vZHVsZUVscyA9ICRkb2N1bWVudC5maW5kKCdbZGF0YS1tb2R1bGVdJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuJHNjb3BlIGluc3RhbmNlb2YgalF1ZXJ5ICYmIGV2ZW50LiRzY29wZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkbW9kdWxlRWxzID0gZXZlbnQuJHNjb3BlLmZpbmQoJ1tkYXRhLW1vZHVsZV0nKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5pc0JhcmJhKSB7XG4gICAgICAgICAgICAkbW9kdWxlRWxzID0gJCgnI2JhcmJhLXdyYXBwZXInKS5maW5kKCdbZGF0YS1tb2R1bGVdJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggZWxlbWVudHNcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCBlbHNMZW4gPSAkbW9kdWxlRWxzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKDsgaSA8IGVsc0xlbjsgaSsrKSB7XG5cbiAgICAgICAgICAgIC8vIEN1cnJlbnQgZWxlbWVudFxuICAgICAgICAgICAgbGV0IGVsID0gJG1vZHVsZUVsc1tpXTtcblxuICAgICAgICAgICAgLy8gQWxsIGRhdGEtIGF0dHJpYnV0ZXMgY29uc2lkZXJlZCBhcyBvcHRpb25zXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IGdldE5vZGVEYXRhKGVsKTtcblxuICAgICAgICAgICAgLy8gQWRkIGN1cnJlbnQgRE9NIGVsZW1lbnQgYW5kIGpRdWVyeSBlbGVtZW50XG4gICAgICAgICAgICBvcHRpb25zLmVsID0gZWw7XG4gICAgICAgICAgICBvcHRpb25zLiRlbCA9ICRtb2R1bGVFbHMuZXEoaSk7XG5cbiAgICAgICAgICAgIC8vIE1vZHVsZSBkb2VzIGV4aXN0IGF0IHRoaXMgcG9pbnRcbiAgICAgICAgICAgIGxldCBhdHRyID0gb3B0aW9ucy5tb2R1bGU7XG5cbiAgICAgICAgICAgIC8vIFNwbGl0dGluZyBtb2R1bGVzIGZvdW5kIGluIHRoZSBkYXRhLWF0dHJpYnV0ZVxuICAgICAgICAgICAgbGV0IG1vZHVsZUlkZW50cyA9IGF0dHIuc3BsaXQoL1ssXFxzXSsvZyk7XG5cbiAgICAgICAgICAgIC8vIExvb3AgbW9kdWxlc1xuICAgICAgICAgICAgbGV0IGogPSAwO1xuICAgICAgICAgICAgbGV0IG1vZHVsZXNMZW4gPSBtb2R1bGVJZGVudHMubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKDsgaiA8IG1vZHVsZXNMZW47IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBtb2R1bGVBdHRyID0gbW9kdWxlSWRlbnRzW2pdO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm1vZHVsZXNbbW9kdWxlQXR0cl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vZHVsZSA9IG5ldyB0aGlzLm1vZHVsZXNbbW9kdWxlQXR0cl0ob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vZHVsZXMucHVzaChtb2R1bGUpO1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUuaW5pdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxuLy8gSUlGRSBmb3IgbG9hZGluZyB0aGUgYXBwbGljYXRpb25cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4oZnVuY3Rpb24oKSB7XG4gICAgbmV3IEFwcCgpO1xuICAgICRkb2N1bWVudC50cmlnZ2VySGFuZGxlcih7XG4gICAgICAgIHR5cGU6IEVWRU5ULklOSVRfTU9EVUxFUyxcbiAgICAgICAgZmlyc3RCbG9vZDogdHJ1ZVxuICAgIH0pO1xufSkoKTtcbiIsIi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbmltcG9ydCB7IEFQUF9OQU1FLCAkYm9keSwgJGRvY3VtZW50IH0gZnJvbSAnLi91dGlscy9lbnZpcm9ubWVudCc7XG5cbmltcG9ydCBUcmFuc2l0aW9uTWFuYWdlciBmcm9tICcuL3RyYW5zaXRpb25zL1RyYW5zaXRpb25NYW5hZ2VyJztcbmltcG9ydCBEZWZhdWx0VmlldyBmcm9tICcuL3ZpZXdzL0RlZmF1bHRWaWV3JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZmlyc3RCbG9vZCkge1xuXG4gICAgaWYoZmlyc3RCbG9vZCl7XG4gICAgICAgIGlmIChpcy5pb3MoKSAmJiBpcy5jaHJvbWUoKSl7XG5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygndGhlbWUtMScpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygndGhlbWUtMicpO1xuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3RoZW1lLTEnKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZigkKCdib2R5JykuaGFzQ2xhc3MoJ3RoZW1lLTInKSl7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygndGhlbWUtMycpO1xuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3RoZW1lLTInKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZigkKCdib2R5JykuaGFzQ2xhc3MoJ3RoZW1lLTMnKSl7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygndGhlbWUtNCcpO1xuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3RoZW1lLTMnKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZigkKCdib2R5JykuaGFzQ2xhc3MoJ3RoZW1lLTQnKSl7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygndGhlbWUtNScpO1xuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3RoZW1lLTQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZigkKCdib2R5JykuaGFzQ2xhc3MoJ3RoZW1lLTUnKSl7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygndGhlbWUtMScpO1xuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3RoZW1lLTUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN2ZzRldmVyeWJvZHkoKTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5qcy12aWRlby1ob21lJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykuYXBwZW5kKCc8dmlkZW8gbXV0ZWQgcGxheXNpbmxpbmUgYXV0b3BsYXkgbG9vcCBzcmM9XCInICsgJCh0aGlzKS5kYXRhKCdzcmMnKSArICdcIj48L3ZpZGVvPicpO1xuICAgICAgICB9KTtcbiAgICB9LDEyMDApO1xuXG4gICAgaWYgKGlzLmRlc2t0b3AoKSl7XG4gICAgICAgICQoJy5jLXdvcmtfX2xpbmsnKS5tb3VzZWVudGVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCQodGhpcykuZmluZCgndmlkZW8nKS5sZW5ndGg9PTApe1xuICAgICAgICAgICAgICAgIGxldCB2aWRlbyA9ICQodGhpcykuZmluZCgnLmpzLXZpZGVvJyk7XG4gICAgICAgICAgICAgICAgdmlkZW8uYXBwZW5kKCc8dmlkZW8gbXV0ZWQgbG9vcCBzcmM9XCInICsgdmlkZW8uZGF0YSgnc3JjJykgKyAnXCI+PC92aWRlbz4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQodGhpcykuZmluZCgndmlkZW8nKS5nZXQoMCkucGxheSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuYy13b3JrX19saW5rJykubW91c2VsZWF2ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgndmlkZW8nKS5nZXQoMCkucGF1c2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvL3NldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vJCgnLmpzLXZpZGVvLWhvbWUnKS5hcHBlbmQoJzx2aWRlbyBhdXRvcGxheSBtdXRlZCBwbGF5c2lubGluZSBsb29wIHNyYz1cIi9hcHAvdGhlbWVzL2Jhc2Vyb2NrL2Fzc2V0cy92aWRlby9TYW1wbGVWaWRlb18xMjgweDcyMF8xbWIubXA0XCI+PC92aWRlbz4nKTtcbiAgICAvL30sMTApO1xuICAgIC8vSW5pdCBMb2NvbW90aXZlIFNjcm9sbFxuICAgIC8vIHdpbmRvdy5zY3JvbGxlciA9IG5ldyBMb2NvbW90aXZlU2Nyb2xsKHtcbiAgICAvLyAgICAgY29udGFpbmVyOiAkKCcjanMtc2Nyb2xsJyksXG4gICAgLy8gICAgIHNlbGVjdG9yOiAnLmpzLWFuaW1hdGUnLFxuICAgIC8vICAgICBzbW9vdGg6IHRydWUsXG4gICAgLy8gICAgIHNtb290aE1vYmlsZTogZmFsc2UsXG4gICAgLy8gICAgIG1vYmlsZUNvbnRhaW5lcjogJChkb2N1bWVudClcbiAgICAvLyB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGZpcnN0Qmxvb2QpIHtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zaXRpb25NYW5hZ2VyID0gbmV3IFRyYW5zaXRpb25NYW5hZ2VyKCk7XG4gICAgICAgIH1cbiAgICB9LDEyMDApO1xuXG4gICAgdHJ5IHt3cGNmNy5pbml0Rm9ybSggalF1ZXJ5KCcud3BjZjctZm9ybScpICk7fWNhdGNoKGUpe307XG5cbiAgICAkKGRvY3VtZW50KS5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICQoJy5qcy1mb2xsb3cnKS5jc3Moe1xuICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgnICsgZS5wYWdlWCArICdweCwnICsgZS5wYWdlWSArICdweCwwKSdcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKCcqJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAkKFwiLmpzLWZvbGxvd1wiKS5hZGRDbGFzcyhcImlzLWNsaWNraW5nXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICQoXCIuanMtZm9sbG93XCIpLnJlbW92ZUNsYXNzKFwiaXMtY2xpY2tpbmdcIik7XG4gICAgICAgIH0sNTAwKTtcbiAgICB9KTtcblxuICAgIC8vZ2xvYmFscyBleGVjIChvbGQgYXBwLmpzKVxuICAgIGlmIChpcy5kZXNrdG9wKCkpe1xuICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ2lzLWRlc2t0b3AnKTtcbiAgICB9XG4gICAgaWYgKGlzLm1vYmlsZSgpKXtcbiAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKCdpcy1tb2JpbGUnKTtcbiAgICB9XG4gICAgaWYgKGlzLnRhYmxldCgpKXtcbiAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKCdpcy1tb2JpbGUnKTtcbiAgICB9XG4gICAgaWYgKGlzLmllKCkpe1xuICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ2lzLWllJyk7XG4gICAgfVxuICAgIGlmIChpcy5zYWZhcmkoKSl7XG4gICAgICAgICQoJ2h0bWwnKS5hZGRDbGFzcygnaXMtc2FmYXJpJyk7XG4gICAgfVxuICAgIGlmIChpcy5pb3MoKSl7XG4gICAgICAgICQoJ2h0bWwnKS5hZGRDbGFzcygnaXMtc2FmYXJpJyk7XG4gICAgfVxuICAgIGlmIChpcy53aW5kb3dzKCkpe1xuICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ2lzLXdpbmRvd3MnKTtcbiAgICB9XG5cbi8vICAgICB2YXIgcGF0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vLWJ1dHRvbl9fY2lyY2xlIHBhdGgnKTtcbi8vIHZhciBsZW5ndGggPSBwYXRoLmdldFRvdGFsTGVuZ3RoKCk7XG4vLyBjb25zb2xlLmxvZyhsZW5ndGgpO1xuXG4gICAgJCgnLmpzLXRvZ2dsZS1uYXY6bm90KC4taW5pdGVkKScpLm9uKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAkYm9keS50b2dnbGVDbGFzcygnaGFzLW5hdi1vcGVuJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KS5hZGRDbGFzcyhcIi1pbml0ZWRcIik7XG5cbiAgICAkKCcuanMtdG9nZ2xlLWNvbnRhY3Q6bm90KC4taW5pdGVkKScpLm9uKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAkYm9keS50b2dnbGVDbGFzcygnaGFzLWNvbnRhY3Qtb3BlbicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSkuYWRkQ2xhc3MoXCItaW5pdGVkXCIpO1xuXG4gICAgJCgnLmpzLXRvZ2dsZS1wcm9qZWN0Om5vdCguLWluaXRlZCknKS5vbignY2xpY2snLCgpID0+IHtcbiAgICAgICAgJGJvZHkudG9nZ2xlQ2xhc3MoJ2hhcy1wcm9qZWN0LW9wZW4nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pLmFkZENsYXNzKFwiLWluaXRlZFwiKTtcblxuICAgICQoJy5qcy10b2dnbGUtc2hhcmU6bm90KC4taW5pdGVkKScpLm9uKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAkKCcuYy1ib3gtc2hhcmVfX3dyYXAnKS50b2dnbGVDbGFzcygnaGFzLXNoYXJlLW9wZW4nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pLmFkZENsYXNzKFwiLWluaXRlZFwiKTtcblxuICAgICQoJy5jLW5hdi1tYWluIGEsIC5jLW5hdi1tYWluLXNtYWxsIGEnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lICE9ICcvJykge1xuICAgICAgICAkKCcuYy1uYXYtbWFpbiBhW2hyZWYkPVwiJytsb2NhdGlvbi5wYXRobmFtZSsnXCJdLCAuYy1uYXYtbWFpbi1zbWFsbCBhW2hyZWYkPVwiJytsb2NhdGlvbi5wYXRobmFtZSsnXCJdJykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuXG4gICAgJCgnYVtocmVmKj1cIiNcIl06bm90KC4taW5pdGVkKTpub3QoLmpzLXNjcm9sbHRvKScpLm9uKCdjbGljaycsZnVuY3Rpb24oKSB7XG4gICAgICAgIHdpbmRvdy50ZW1wSGFzaCA9ICQodGhpcykuYXR0cignaHJlZicpLnNwbGl0KCcjJylbMV07XG5cbiAgICAgICAgaWYgKCQodGhpcykuYXR0cignaHJlZicpLnNwbGl0KCcjJylbMF0hPWxvY2F0aW9uLnBhdGhuYW1lICYmICQodGhpcykuYXR0cignaHJlZicpLnNwbGl0KCcjJylbMF0gIT0gXCJcIikge1xuICAgICAgICAgICAgQmFyYmEuUGpheC5nb1RvKCQodGhpcykuYXR0cignaHJlZicpLnNwbGl0KCcjJylbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGRvY3VtZW50LnRyaWdnZXJIYW5kbGVyKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2Nyb2xsVG8nLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RWxlbTogJCgnIycrd2luZG93LnRlbXBIYXNoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8kKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2hhcy1uYXYtb3BlbicpO1xuICAgICAgICAgICAgZGVsZXRlIHdpbmRvdy50ZW1wSGFzaDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSkuYWRkQ2xhc3MoXCItaW5pdGVkXCIpOztcblxuICAgIC8vIGlmICgobG9jYXRpb24uaGFzaCAmJiAkKGxvY2F0aW9uLmhhc2gpLmxlbmd0aCkgfHwgKHdpbmRvdy50ZW1wSGFzaCAmJiAkKCcjJyArIHdpbmRvdy50ZW1wSGFzaCkubGVuZ3RoKSApIHtcbiAgICAvLyAgICAgbGV0IHN0cmluZyA9IGxvY2F0aW9uLmhhc2ggPyBsb2NhdGlvbi5oYXNoIDogJyMnICsgd2luZG93LnRlbXBIYXNoO1xuICAgIC8vICAgICBpZiAod2luZG93LnRlbXBIYXNoKSBkZWxldGUgd2luZG93LnRlbXBIYXNoO1xuICAgIC8vICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICAgICAgJGRvY3VtZW50LnRyaWdnZXJIYW5kbGVyKHtcbiAgICAvLyAgICAgICAgICAgICB0eXBlOiAnc2Nyb2xsVG8nLFxuICAgIC8vICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGFyZ2V0RWxlbTogJChzdHJpbmcpXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2hhcy1uYXYtb3BlbicpO1xuICAgIC8vICAgICB9LDIwMDApO1xuICAgIC8vIH1cbn1cbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBTY3JvbGx9IGZyb20gJy4vbW9kdWxlcy9TY3JvbGwnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEFjY29yZGlvbnN9IGZyb20gJy4vbW9kdWxlcy9BY2NvcmRpb25zJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBBdXRvcGxheX0gZnJvbSAnLi9tb2R1bGVzL0F1dG9wbGF5JztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBTaGFyaW5nfSBmcm9tICcuL21vZHVsZXMvU2hhcmluZyc7XG5leHBvcnQge2RlZmF1bHQgYXMgU3BsaXRUZXh0V29yZHN9IGZyb20gJy4vbW9kdWxlcy9TcGxpdFRleHRXb3Jkcyc7XG5leHBvcnQge2RlZmF1bHQgYXMgU3BsaXRUZXh0TGluZXN9IGZyb20gJy4vbW9kdWxlcy9TcGxpdFRleHRMaW5lcyc7XG5leHBvcnQge2RlZmF1bHQgYXMgT3ZlcmxheU9wZW59IGZyb20gJy4vbW9kdWxlcy9PdmVybGF5T3Blbic7XG5leHBvcnQge2RlZmF1bHQgYXMgT3ZlcmxheUNsb3NlfSBmcm9tICcuL21vZHVsZXMvT3ZlcmxheUNsb3NlJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBPdmVybGF5fSBmcm9tICcuL21vZHVsZXMvT3ZlcmxheSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hcnF1ZWUgfSBmcm9tICcuL21vZHVsZXMvTWFycXVlZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExhbmdTd2l0Y2hlciB9IGZyb20gJy4vbW9kdWxlcy9MYW5nU3dpdGNoZXInO1xuIiwiLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xubGV0IHVpZCA9IDA7XG5cbi8qKlxuICogQWJzdHJhY3QgTW9kdWxlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuJGVsID0gb3B0aW9ucy4kZWwgfHwgbnVsbDsgXG4gICAgICAgIHRoaXMuZWwgID0gb3B0aW9ucy5lbCAgfHwgbnVsbDtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBtb2R1bGUgaWRlbnRpZmllclxuICAgICAgICB0aGlzLnVpZCA9ICdtLScgKyB1aWQrKztcbiAgICAgICAgLy8gVXNlIGpRdWVyeSdzIGRhdGEgQVBJIHRvIFwic3RvcmUgaXQgaW4gdGhlIERPTVwiXG4gICAgICAgIHRoaXMuJGVsLmRhdGEoJ3VpZCcsIHRoaXMudWlkKTtcbiAgICB9XG5cbiAgICBpbml0KCkge31cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLiRlbCkge1xuICAgICAgICAgICAgdGhpcy4kZWwucmVtb3ZlRGF0YSgndWlkJylcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbmltcG9ydCB7ICRkb2N1bWVudCwgQVBQX05BTUUgfSBmcm9tICcuLi91dGlscy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgQWJzdHJhY3RNb2R1bGUgZnJvbSAnLi9BYnN0cmFjdE1vZHVsZSc7XG5cbmNvbnN0IERBVEFfS0VZICA9IGAke0FQUF9OQU1FfS5BY2NvcmRpb25gO1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWA7XG5cbmNvbnN0IEV2ZW50ID0ge1xuICAgIENMSUNLOiBgY2xpY2ske0VWRU5UX0tFWX1gXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEFic3RyYWN0TW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcblxuICAgICAgICB0aGlzLnNjcm9sbHRvID0gdHJ1ZTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICRkb2N1bWVudC50cmlnZ2VyKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndXBkYXRlU3RpY2t5LkxvY29tb3RpdmVTY3JvbGwnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwzMDAwKTtcblxuICAgICAgICBpZih0eXBlb2Ygb3B0aW9ucy5ub3Njcm9sbHRvID09PSAnc3RyaW5nJyl7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbHRvID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRlbC5vbihFdmVudC5DTElDSywgJy5qcy1hY2NvcmRpb24taGVhZGVyJywgKGV2ZW50KSA9PiB0aGlzLnRvZ2dsZShldmVudCkpO1xuXG4gICAgICAgIHZhciAkY3VycmVudEl0ZW0gPSB0aGlzLiRlbC5maW5kKCcuanMtY3VycmVudC1pdGVtJykuZmlyc3QoKTtcblxuICAgICAgICBpZiAoJGN1cnJlbnRJdGVtLmxlbmd0aCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICRjdXJyZW50SXRlbS5hZGRDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgICAgICRjdXJyZW50SXRlbS5maW5kKCcuanMtYWNjb3JkaW9uLWNvbnRlbnQnKVxuICAgICAgICAgICAgICAgICAgICAgLnN0b3AoKVxuICAgICAgICAgICAgICAgICAgICAgLnNsaWRlRG93bigpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2Nyb2xsdG8pe1xuICAgICAgICAgICAgICAgICAgICAkZG9jdW1lbnQudHJpZ2dlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2Nyb2xsVG8uTG9jb21vdGl2ZVNjcm9sbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6ICRjdXJyZW50SXRlbVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LDI2MDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlKGV2ZW50KSB7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgJHRoaXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgIGxldCBkZWxheSA9IDA7XG5cbiAgICAgICAgaWYgKCR0aGlzLnBhcmVudHMoJy5qcy1hY2NvcmRpb24taXRlbScpLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICR0aGlzLnBhcmVudHMoJy5qcy1hY2NvcmRpb24taXRlbScpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAkdGhpcy5zaWJsaW5ncygnLmpzLWFjY29yZGlvbi1jb250ZW50JylcbiAgICAgICAgICAgICAgICAgLnN0b3AoKVxuICAgICAgICAgICAgICAgICAuc2xpZGVVcCgpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAkZG9jdW1lbnQudHJpZ2dlcih7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd1cGRhdGVTdGlja3kuTG9jb21vdGl2ZVNjcm9sbCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sODAwKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYoJCgnLmpzLWFjY29yZGlvbi1pdGVtLmlzLW9wZW4nKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBkZWxheSA9IDMwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQoJy5qcy1hY2NvcmRpb24taXRlbS5pcy1vcGVuJywgdGhpcy4kZWwpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG5cbiAgICAgICAgICAgICQoJy5qcy1hY2NvcmRpb24tY29udGVudCcpLnN0b3AoKS5zbGlkZVVwKCk7XG5cbiAgICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCcuanMtYWNjb3JkaW9uLWNvbnRlbnQnKVxuICAgICAgICAgICAgICAgICAuc3RvcCgpXG4gICAgICAgICAgICAgICAgIC5zbGlkZURvd24oMzAwKTtcblxuICAgICAgICAgICAgJHRoaXMucGFyZW50cygnLmpzLWFjY29yZGlvbi1pdGVtJykuYWRkQ2xhc3MoJ2lzLW9wZW4nKTtcblxuICAgICAgICAgICAgaWYodGhpcy5zY3JvbGxUb1RpbWVvdXQgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zY3JvbGxUb1RpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5zY3JvbGx0byl7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCAkY3VycmVudEl0ZW0gPSB0aGlzLiRlbC5maW5kKCcuanMtYWNjb3JkaW9uLWl0ZW0uaXMtb3BlbicpLmZpcnN0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRjdXJyZW50SXRlbS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRkb2N1bWVudC50cmlnZ2VyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2Nyb2xsVG8uTG9jb21vdGl2ZVNjcm9sbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbGVtOiAkY3VycmVudEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGRvY3VtZW50LnRyaWdnZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndXBkYXRlU3RpY2t5LkxvY29tb3RpdmVTY3JvbGwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LDgwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0sZGVsYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy4kZWwub2ZmKEVWRU5UX0tFWSk7XG5cbiAgICAgICAgaWYodGhpcy5zY3JvbGxUb1RpbWVvdXQgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNjcm9sbFRvVGltZW91dCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgeyBBUFBfTkFNRSB9IGZyb20gJy4uL3V0aWxzL2Vudmlyb25tZW50JztcbmltcG9ydCBBYnN0cmFjdE1vZHVsZSBmcm9tICcuL0Fic3RyYWN0TW9kdWxlJztcblxuY29uc3QgTU9EVUxFX05BTUUgPSAnQXV0b3BsYXknO1xuY29uc3QgRVZFTlRfTkFNRVNQQUNFID0gYCR7QVBQX05BTUV9LiR7TU9EVUxFX05BTUV9YDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdE1vZHVsZSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhhdC5lbC5wbGF5KCk7XG4gICAgICAgIH0sMTMwMCk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLiRlbC5vZmYoYC4ke0VWRU5UX05BTUVTUEFDRX1gKTtcbiAgICB9XG59XG4iLCIvKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgeyBBUFBfTkFNRSB9IGZyb20gJy4uL3V0aWxzL2Vudmlyb25tZW50JztcbmltcG9ydCBBYnN0cmFjdE1vZHVsZSBmcm9tICcuL0Fic3RyYWN0TW9kdWxlJztcblxuY29uc3QgTU9EVUxFX05BTUUgPSAnTGFuZ1N3aXRjaGVyJztcbmNvbnN0IEVWRU5UX05BTUVTUEFDRSA9IGAke0FQUF9OQU1FfS4ke01PRFVMRV9OQU1FfWA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygneWVzJylcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAkKCcuanMtbmF2LWxhbmcnKS5odG1sKHRoaXMuJGVsLmh0bWwoKSlcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuJGVsLm9mZihgLiR7RVZFTlRfTkFNRVNQQUNFfWApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEFQUF9OQU1FLCAkZG9jdW1lbnQsICRodG1sIH0gZnJvbSAnLi4vdXRpbHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IEFic3RyYWN0TW9kdWxlIGZyb20gJy4vQWJzdHJhY3RNb2R1bGUnO1xuaW1wb3J0IFNjcm9sbE1hbmFnZXIgZnJvbSAnLi9TY3JvbGxNYW5hZ2VyJztcblxuY29uc3QgTU9EVUxFX05BTUUgPSAnTG9jb21vdGl2ZVNjcm9sbCc7XG5jb25zdCBFVkVOVF9OQU1FU1BBQ0UgPSBgJHtBUFBfTkFNRX0uJHtNT0RVTEVfTkFNRX1gO1xuXG5leHBvcnQgY29uc3QgRVZFTlQgPSB7XG4gICAgQ0xJQ0s6IGBjbGljay4ke0VWRU5UX05BTUVTUEFDRX1gLFxuICAgIFNDUk9MTDogYHNjcm9sbGluZy4ke0VWRU5UX05BTUVTUEFDRX1gXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEFic3RyYWN0TW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMubW9kYWxTY3JvbGwgPSB0eXBlb2Ygb3B0aW9uc1snbW9kYWwtc2Nyb2xsJ10gPT09ICdzdHJpbmcnO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIFNldCBldmVudHMgYW5kIHN1Y2hcbiAgICAgICAgdGhpcy5zY3JvbGxNYW5hZ2VyID0gbmV3IFNjcm9sbE1hbmFnZXIoe1xuICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRlbCxcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLmpzLWFuaW1hdGUnLFxuICAgICAgICAgICAgc21vb3RoOiB0cnVlLFxuICAgICAgICAgICAgc21vb3RoTW9iaWxlOiBmYWxzZSxcbiAgICAgICAgICAgIG1vYmlsZUNvbnRhaW5lcjogJGRvY3VtZW50LFxuICAgICAgICAgICAgZ2V0V2F5OiBmYWxzZSxcbiAgICAgICAgICAgIGdldFNwZWVkOiBmYWxzZSxcbiAgICAgICAgICAgIG9uU2Nyb2xsOiAoc2Nyb2xsLCAkY29udGFpbmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMubW9kYWxTY3JvbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgJGh0bWwudG9nZ2xlQ2xhc3MoJ2lzLXRvcCcsIHNjcm9sbC55IDwgMTAwKVxuICAgICAgICAgICAgICAgICAgICAkaHRtbC50b2dnbGVDbGFzcygnaXMtbm90LXRvcCcsIHNjcm9sbC55ID49IDEwMClcblxuICAgICAgICAgICAgICAgICAgICBzY3JvbGwuJGNvbnRhaW5lciA9ICRjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgJGRvY3VtZW50LnRyaWdnZXIoeyB0eXBlOiBFVkVOVC5TQ1JPTEwsIG9wdGlvbnM6IHNjcm9sbCwgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsTWFuYWdlci5kZXN0cm95KClcblxuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuJGVsLm9mZihgLiR7RVZFTlRfTkFNRVNQQUNFfWApO1xuICAgIH1cbn1cbiIsIi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbmltcG9ydCB7IEFQUF9OQU1FIH0gZnJvbSAnLi4vdXRpbHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IEFic3RyYWN0TW9kdWxlIGZyb20gJy4vQWJzdHJhY3RNb2R1bGUnO1xuXG5jb25zdCBNT0RVTEVfTkFNRSA9ICdNYXJxdWVlJztcbmNvbnN0IEVWRU5UX05BTUVTUEFDRSA9IGAke0FQUF9OQU1FfS4ke01PRFVMRV9OQU1FfWA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAkKHRoYXQuZWwpLmZpbmQoJy5qcy1tYXJxdWVlLWl0ZW0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGFuaW1hdGlvblNwZWVkID0gdGhpcy5vZmZzZXRXaWR0aCAvIDYwO1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IGFuaW1hdGlvblNwZWVkICsgJ3MnO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuJGVsLm9mZihgLiR7RVZFTlRfTkFNRVNQQUNFfWApO1xuICAgIH1cbn1cbiIsIi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbmltcG9ydCB7ICRkb2N1bWVudCwgQVBQX05BTUUsICRiYXJiYSB9IGZyb20gJy4uL3V0aWxzL2Vudmlyb25tZW50JztcbmltcG9ydCBBYnN0cmFjdE1vZHVsZSBmcm9tICcuL0Fic3RyYWN0TW9kdWxlJztcblxuY29uc3QgREFUQV9LRVkgID0gYCR7QVBQX05BTUV9Lk92ZXJsYXlgO1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWA7XG5cbmNvbnN0IEV2ZW50ID0ge1xuICAgIENMSUNLOiBgY2xpY2ske0VWRU5UX0tFWX1gXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEFic3RyYWN0TW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKVxuICAgIH1cblxuICAgIGluaXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy4kZWwub24oYGNsaWNrLiR7REFUQV9LRVl9YCwoKSA9PiB7XG4gICAgICAgICAgICAkKCcuYy1vdmVybGF5JykucmVtb3ZlQ2xhc3MoJ3JlbW92ZS12aWRlbycpO1xuICAgICAgICAgICAgJCgnLmMtb3ZlcmxheS1lbWJlZCcpLnJlbW92ZUNsYXNzKCdpcy1taW5pbWl6ZWQgaGlkZS1taW5pbWl6ZWQnKTtcbiAgICAgICAgICAgICQoJy5jLW92ZXJsYXktZW1iZWQgLmMtZW1iZWQnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGxldCAkY29weU5vZGUgPSAkKCc8aWZyYW1lIGNsYXNzPVwiYy1pZnJhbWVcIiB3aWR0aD1cIjU2MFwiIGhlaWdodD1cIjMxNVwiIHNyYz1cIicrdGhpcy4kZWwuYXR0cignaHJlZicpKyc/YXV0b3BsYXk9MSZhdXRvX3BsYXk9ZmFsc2VcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWFcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JylcbiAgICAgICAgICAgICQoJy5qcy1vdmVybGF5LWVtYmVkIC5qcy1vdmVybGF5X19pbm5lciAnKS5odG1sKCcnKVxuICAgICAgICAgICAgJGNvcHlOb2RlLmFwcGVuZFRvKCcuanMtb3ZlcmxheS1lbWJlZCAuanMtb3ZlcmxheV9faW5uZXInKTtcbiAgICAgICAgICAgICQoJy5qcy1vdmVybGF5LWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcuanMtb3ZlcmxheS1lbWJlZCcpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaGFzLW92ZXJsYXktb3BlbicpO1xuXG4gICAgICAgICAgICAvKmlmKHRoaXMuJGVsLmRhdGEoJ2hpZGVtaW5pbWl6ZScpKXtcbiAgICAgICAgICAgICAgICAkKCcuYy1vdmVybGF5LWVtYmVkJykuYWRkQ2xhc3MoJ2hpZGUtbWluaW1pemVkJyk7XG4gICAgICAgICAgICB9Ki9cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLiRlbC5vZmYoRVZFTlRfS0VZKTtcbiAgICB9XG59XG4iLCIvKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgeyAkZG9jdW1lbnQsICRib2R5LCBBUFBfTkFNRSwgJGJhcmJhIH0gZnJvbSAnLi4vdXRpbHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IEFic3RyYWN0TW9kdWxlIGZyb20gJy4vQWJzdHJhY3RNb2R1bGUnO1xuXG5jb25zdCBEQVRBX0tFWSAgPSBgJHtBUFBfTkFNRX0uT3ZlcmxheUNsb3NlYDtcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gO1xuXG5jb25zdCBFdmVudCA9IHtcbiAgICBDTElDSzogYGNsaWNrJHtFVkVOVF9LRVl9YFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdE1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucylcbiAgICB9XG5cbiAgICBpbml0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuJGVsLm9uKGBjbGljay4ke0RBVEFfS0VZfWAsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdoYXMtb3ZlcmxheS1vcGVuJyk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5qcy1vdmVybGF5X19pbm5lciAuYy1pZnJhbWUnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0sIDEzMDApOyAgICBcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy4kZWwub2ZmKEVWRU5UX0tFWSk7XG5cbiAgICAgICAgaWYodGhpcy5zY3JvbGxUb1RpbWVvdXQgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNjcm9sbFRvVGltZW91dCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgeyAkZG9jdW1lbnQsICRib2R5LCBBUFBfTkFNRSwgJGJhcmJhIH0gZnJvbSAnLi4vdXRpbHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IEFic3RyYWN0TW9kdWxlIGZyb20gJy4vQWJzdHJhY3RNb2R1bGUnO1xuXG5jb25zdCBEQVRBX0tFWSAgPSBgJHtBUFBfTkFNRX0uT3ZlcmxheU9wZW5gO1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWA7XG5cbmNvbnN0IEV2ZW50ID0ge1xuICAgIENMSUNLOiBgY2xpY2ske0VWRU5UX0tFWX1gXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEFic3RyYWN0TW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKVxuICAgIH1cblxuICAgIGluaXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy4kZWwub24oYGNsaWNrLiR7REFUQV9LRVl9YCxmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCgnLmMtb3ZlcmxheScpLnJlbW92ZUNsYXNzKCdyZW1vdmUtdmlkZW8nKTtcbiAgICAgICAgICAgICRib2R5LmFkZENsYXNzKCdoYXMtb3ZlcmxheS1vcGVuJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuJGVsLm9mZihFVkVOVF9LRVkpO1xuXG4gICAgICAgIGlmKHRoaXMuc2Nyb2xsVG9UaW1lb3V0ICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zY3JvbGxUb1RpbWVvdXQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQVBQX05BTUUsICRkb2N1bWVudCB9IGZyb20gJy4uL3V0aWxzL2Vudmlyb25tZW50JztcbmltcG9ydCBBYnN0cmFjdE1vZHVsZSBmcm9tICcuL0Fic3RyYWN0TW9kdWxlJztcbmltcG9ydCBTY3JvbGxNYW5hZ2VyIGZyb20gJy4uL3Njcm9sbC92ZW5kb3JzL1Njcm9sbE1hbmFnZXInO1xuXG5jb25zdCBNT0RVTEVfTkFNRSA9ICdTY3JvbGwnO1xuY29uc3QgRVZFTlRfTkFNRVNQQUNFID0gYCR7QVBQX05BTUV9LiR7TU9EVUxFX05BTUV9YDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdE1vZHVsZSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsTWFuYWdlciA9IG5ldyBTY3JvbGxNYW5hZ2VyKHtcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJGVsLFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLmpzLWFuaW1hdGUnLFxuICAgICAgICAgICAgICAgIHNtb290aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbW9vdGhNb2JpbGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1vYmlsZUNvbnRhaW5lcjogJGRvY3VtZW50LFxuICAgICAgICAgICAgICAgIGdldFdheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZ2V0U3BlZWQ6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsTWFuYWdlci5kZXN0cm95KCk7XG4gICAgfVxufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvY29tb3RpdmUgU2Nyb2xsIE1hbmFnZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgeyAkZG9jdW1lbnQsICR3aW5kb3csICRodG1sLCAkYm9keSB9IGZyb20gJy4uL3V0aWxzL2Vudmlyb25tZW50JztcbmltcG9ydCBTY3JvbGwsIHsgRGVmYXVsdHMsIEV2ZW50IH0gZnJvbSAnLi9TY3JvbGwnO1xuaW1wb3J0IFNtb290aFNjcm9sbCBmcm9tICcuL1Ntb290aFNjcm9sbCc7XG5cbi8qKlxuICogQmFzaWMgbW9kdWxlIHRoYXQgZGV0ZWN0cyB3aGljaCBzY3JvbGxpbmcgbW9kdWxlIHdlJ2xsIGJlIHVzaW5nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuc21vb3RoID0gb3B0aW9ucy5zbW9vdGggfHwgRGVmYXVsdHMuc21vb3RoO1xuICAgICAgICB0aGlzLnNtb290aE1vYmlsZSA9IG9wdGlvbnMuc21vb3RoTW9iaWxlIHx8IERlZmF1bHRzLnNtb290aE1vYmlsZTtcbiAgICAgICAgdGhpcy5tb2JpbGVDb250YWluZXIgPSBvcHRpb25zLm1vYmlsZUNvbnRhaW5lciB8fCBEZWZhdWx0cy5tb2JpbGVDb250YWluZXI7XG4gICAgICAgIHRoaXMuaXNNb2JpbGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcblxuICAgICAgICAvLyBBZGQgYSBjYWxsYmFjayB3aGVuIHJlYWNoaW5nIHRvcCBvciBib3R0b21cbiAgICAgICAgLy8gb3B0aW9ucy5vblNjcm9sbCA9IGZ1bmN0aW9uKHNjcm9sbFN0YXR1cykge1xuICAgICAgICAvLyAgICAgJGh0bWwudG9nZ2xlQ2xhc3MoJ2hhcy1zY3JvbGxlZCcsIChzY3JvbGxTdGF0dXMueSA+IDApKTtcbiAgICAgICAgLy8gfTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICAkaHRtbFswXS5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAkYm9keVswXS5zY3JvbGxUb3AgPSAwO1xuXG4gICAgICAgIGlmICghdGhpcy5zbW9vdGhNb2JpbGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNNb2JpbGUgPSAoL0FuZHJvaWR8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSAoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc21vb3RoID09PSB0cnVlICYmICF0aGlzLmlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTbW9vdGhTY3JvbGwodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW9iaWxlQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jb250YWluZXIgPSB0aGlzLm1vYmlsZUNvbnRhaW5lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNjcm9sbCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuaW5pdCgpO1xuXG4gICAgICAgIGNvbnN0ICRzY3JvbGxUb09uTG9hZEVsID0gJCgnLmpzLXNjcm9sbHRvLW9uLWxvYWQnKS5maXJzdCgpO1xuXG4gICAgICAgIGlmICgkc2Nyb2xsVG9PbkxvYWRFbC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICRkb2N1bWVudC50cmlnZ2VySGFuZGxlcih7XG4gICAgICAgICAgICAgICAgdHlwZTogJ0V2ZW50LlNDUk9MTFRPJyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEVsZW06ICRzY3JvbGxUb09uTG9hZEVsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9jb21vdGl2ZSBTY3JvbGxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgeyAkd2luZG93LCAkZG9jdW1lbnQgfSBmcm9tICcuLi91dGlscy9lbnZpcm9ubWVudCc7XG5cbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi91dGlscy9kZWJvdW5jZSc7XG5pbXBvcnQgeyBpc051bWVyaWMgfSBmcm9tICcuLi91dGlscy9pcyc7XG5cbmV4cG9ydCBjb25zdCBFVkVOVF9LRVkgPSBgLkxvY29tb3RpdmVTY3JvbGxgO1xuXG5leHBvcnQgY29uc3QgRXZlbnQgPSB7XG4gICAgQ0xJQ0s6IGBjbGljayR7RVZFTlRfS0VZfWAsXG4gICAgSVNSRUFEWTogYGlzUmVhZHkke0VWRU5UX0tFWX1gLFxuICAgIFJFQlVJTEQ6IGByZWJ1aWxkJHtFVkVOVF9LRVl9YCxcbiAgICBSRU5ERVI6IGByZW5kZXIke0VWRU5UX0tFWX1gLFxuICAgIFJFU0laRTogYHJlc2l6ZSR7RVZFTlRfS0VZfWAsXG4gICAgU0NST0xMOiBgc2Nyb2xsJHtFVkVOVF9LRVl9YCxcbiAgICBTQ1JPTExUTzogYHNjcm9sbFRvJHtFVkVOVF9LRVl9YCxcbiAgICBVUERBVEU6IGB1cGRhdGUke0VWRU5UX0tFWX1gXG59O1xuXG5leHBvcnQgY29uc3QgRGVmYXVsdHMgPSB7XG4gICAgY29udGFpbmVyOiAkZG9jdW1lbnQsXG4gICAgbW9iaWxlQ29udGFpbmVyOiAkZG9jdW1lbnQsXG4gICAgb25TY3JvbGw6IGZ1bmN0aW9uKCl7fSxcbiAgICBzZWxlY3RvcjogJy5qcy1hbmltYXRlJyxcbiAgICBzbW9vdGg6IGZhbHNlLFxuICAgIHNtb290aE1vYmlsZTogZmFsc2UsXG4gICAgcmV2ZXJzZWQ6IGZhbHNlLFxuICAgIGdldFdheTogZmFsc2UsXG4gICAgZ2V0U3BlZWQ6IGZhbHNlXG59O1xuXG4vKipcbiAqIE1hbmFnZSBhbmltYXRpb24gb2YgZWxlbWVudHMgb24gdGhlIHBhZ2UgYWNjb3JkaW5nIHRvIHNjcm9sbCBwb3NpdGlvbi5cbiAqXG4gKiBAdG9kbyAgTWFuYWdlIHNvbWUgb3B0aW9ucyAobm9ybWFsbHkgZnJvbSBkYXRhIGF0dHJpYnV0ZXMpIHdpdGggY29uc3RydWN0b3Igb3B0aW9ucyAoZXguOiBzZXQgcmVwZWF0IGZvciBhbGwpXG4gKiBAdG9kbyAgTWV0aG9kIHRvIGdldCB0aGUgZGlzdGFuY2UgKGFzIHBlcmNlbnRhZ2UpIG9mIGFuIGVsZW1lbnQgaW4gdGhlIHZpZXdwb3J0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cbiAgICAgICAgdGhpcy4kY29udGFpbmVyID0gKG9wdGlvbnMuY29udGFpbmVyKSA/IG9wdGlvbnMuY29udGFpbmVyIDogRGVmYXVsdHMuY29udGFpbmVyO1xuICAgICAgICB0aGlzLnNlbGVjdG9yID0gKG9wdGlvbnMuc2VsZWN0b3IpID8gb3B0aW9ucy5zZWxlY3RvciA6IERlZmF1bHRzLnNlbGVjdG9yO1xuXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0ge1xuICAgICAgICAgICAgb25TY3JvbGw6IHR5cGVvZiBvcHRpb25zLm9uU2Nyb2xsID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5vblNjcm9sbCA6IERlZmF1bHRzLm9uU2Nyb2xsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJydcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gJHdpbmRvdy5oZWlnaHQoKTtcbiAgICAgICAgdGhpcy53aW5kb3dNaWRkbGUgPSB0aGlzLndpbmRvd0hlaWdodCAvIDI7XG5cbiAgICAgICAgdGhpcy5hbmltYXRlZEVsZW1lbnRzID0gW107XG5cbiAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBzY3JvbGxpbmcgYW5pbWF0aW9uc1xuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcblxuICAgICAgICB0aGlzLnJlbmRlckFuaW1hdGlvbnMoKTtcblxuICAgICAgICAvLyBPbiBzY3JvbGxcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEV2ZW50LlNDUk9MTCwgZGVib3VuY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJBbmltYXRpb25zKCk7XG4gICAgICAgIH0sIDEwKSk7XG5cbiAgICAgICAgLy8gUmVidWlsZCBldmVudFxuICAgICAgICB0aGlzLiRjb250YWluZXIub24oRXZlbnQuUkVCVUlMRCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0OiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRWxlbWVudHMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIGV2ZW50XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFdmVudC5VUERBVEUsIChldmVudCwgb3B0aW9ucykgPT4gdGhpcy51cGRhdGVFbGVtZW50cyhvcHRpb25zKSk7XG5cbiAgICAgICAgLy8gUmVuZGVyIGV2ZW50XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFdmVudC5SRU5ERVIsICgpID0+IHRoaXMucmVuZGVyQW5pbWF0aW9ucygpKTtcblxuICAgICAgICAvLyBTY3JvbGx0byBidXR0b24gZXZlbnRcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEV2ZW50LkNMSUNLLCAnLmpzLXNjcm9sbHRvJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBsZXQgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gJHRhcmdldC5kYXRhKCdvZmZzZXQnKTtcblxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgc291cmNlRWxlbTogJHRhcmdldCxcbiAgICAgICAgICAgICAgICBvZmZzZXRFbGVtOiBvZmZzZXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEV2ZW50LlNDUk9MTFRPLCAoZXZlbnQpID0+IHRoaXMuc2Nyb2xsVG8oZXZlbnQub3B0aW9ucykpO1xuXG4gICAgICAgIC8vIFNldHVwIGRvbmVcbiAgICAgICAgJGRvY3VtZW50LnRyaWdnZXJIYW5kbGVyKHtcbiAgICAgICAgICAgIHR5cGU6IEV2ZW50LklTUkVBRFlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVzaXplIGV2ZW50XG4gICAgICAgICR3aW5kb3cub24oRXZlbnQuUkVTSVpFLCBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUVsZW1lbnRzKClcbiAgICAgICAgfSwgMjApKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIGFsbCBhbmltYXRhYmxlIGVsZW1lbnRzLlxuICAgICAqIENhbGxlZCBvbiBwYWdlIGxvYWQgYW5kIGFueSBzdWJzZXF1ZW50IHVwZGF0ZXMuXG4gICAgICovXG4gICAgYWRkRWxlbWVudHMoKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZWRFbGVtZW50cyA9IFtdO1xuXG4gICAgICAgIGNvbnN0ICRlbGVtZW50cyA9ICQodGhpcy5zZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IGxlbiA9ICRlbGVtZW50cy5sZW5ndGg7XG4gICAgICAgIGxldCBpID0gMDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSArKykge1xuICAgICAgICAgICAgbGV0ICRlbGVtZW50ID0gJGVsZW1lbnRzLmVxKGkpO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYXJnZXQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLXRhcmdldCcpO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRQb3NpdGlvbiA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtcG9zaXRpb24nKTtcbiAgICAgICAgICAgIGxldCAkdGFyZ2V0ID0gKGVsZW1lbnRUYXJnZXQgJiYgJChlbGVtZW50VGFyZ2V0KS5sZW5ndGgpID8gJChlbGVtZW50VGFyZ2V0KSA6ICRlbGVtZW50O1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRPZmZzZXQgPSAkdGFyZ2V0Lm9mZnNldCgpLnRvcDtcbiAgICAgICAgICAgIGxldCBlbGVtZW50TGltaXQgPSBlbGVtZW50T2Zmc2V0ICsgJHRhcmdldC5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRTdGlja3kgPSAodHlwZW9mICRlbGVtZW50LmF0dHIoJ2RhdGEtc3RpY2t5JykgPT09ICdzdHJpbmcnKTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50U3RpY2t5VGFyZ2V0ID0gJGVsZW1lbnQuYXR0cignZGF0YS1zdGlja3ktdGFyZ2V0Jyk7XG5cbiAgICAgICAgICAgIGxldCBlbGVtZW50Vmlld3BvcnRPZmZzZXQgPSBudWxsO1xuICAgICAgICAgICAgaWYodHlwZW9mICRlbGVtZW50LmF0dHIoJ2RhdGEtdmlld3BvcnQtb2Zmc2V0JykgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICBlbGVtZW50Vmlld3BvcnRPZmZzZXQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLXZpZXdwb3J0LW9mZnNldCcpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL01hbmFnZSBjYWxsYmFja1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRDYWxsYmFja1N0cmluZyA9ICh0eXBlb2YgJGVsZW1lbnQuYXR0cignZGF0YS1jYWxsYmFjaycpID09PSAnc3RyaW5nJykgPyAkZWxlbWVudC5hdHRyKCdkYXRhLWNhbGxiYWNrJykgOiBudWxsO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRDYWxsYmFjayA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmKGVsZW1lbnRDYWxsYmFja1N0cmluZyAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBsZXQgZXZlbnQgPSBlbGVtZW50Q2FsbGJhY2tTdHJpbmcuc3Vic3RyKDAsIGVsZW1lbnRDYWxsYmFja1N0cmluZy5pbmRleE9mKCcoJykpO1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb25zU3RyaW5nID0gZWxlbWVudENhbGxiYWNrU3RyaW5nLnN1YnN0cihlbGVtZW50Q2FsbGJhY2tTdHJpbmcuaW5kZXhPZignKCcpLGVsZW1lbnRDYWxsYmFja1N0cmluZy5sZW5ndGggLSBldmVudC5sZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgb3B0aW9uc1N0cmluZyA9IG9wdGlvbnNTdHJpbmcucmVwbGFjZSgnKCcsJycpO1xuICAgICAgICAgICAgICAgIG9wdGlvbnNTdHJpbmcgPSBvcHRpb25zU3RyaW5nLnJlcGxhY2UoJyknLCcnKTtcblxuICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0gb3B0aW9uc1N0cmluZy5zcGxpdCgnfCcpO1xuXG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHt9O1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvcHRpb25zLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbnNbal0uc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uWzBdID0gb3B0aW9uWzBdLnJlcGxhY2UoJyAnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsO1xuICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHZhbHVlIGlzIGEgYm9vbGVhblxuICAgICAgICAgICAgICAgICAgICBpZihvcHRpb25bMV0gPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYob3B0aW9uWzFdID09PSBcImZhbHNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgdmFsdWUgaXMgbnVtZXJpY1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKC9eXFxkKyQvLnRlc3Qob3B0aW9uWzFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gcGFyc2VJbnQob3B0aW9uWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHZhbHVlIGlzIGEgU3RyaW5nXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gb3B0aW9uWzFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9ialtvcHRpb25bMF1dID0gdmFsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsZW1lbnRDYWxsYmFjayA9IHtldmVudDpldmVudCwgb3B0aW9uczpvYmp9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBlbGVtZW50cyBsb3NlcyBpdHMgYW5pbWF0aW9uIGFmdGVyIHNjcm9sbGluZyBwYXN0IGl0XG4gICAgICAgICAgICBsZXQgZWxlbWVudFJlcGVhdCA9ICh0eXBlb2YgJGVsZW1lbnQuYXR0cignZGF0YS1yZXBlYXQnKSA9PT0gJ3N0cmluZycpO1xuXG4gICAgICAgICAgICBsZXQgZWxlbWVudEluVmlld0NsYXNzID0gJGVsZW1lbnQuYXR0cignZGF0YS1pbnZpZXctY2xhc3MnKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudEluVmlld0NsYXNzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRJblZpZXdDbGFzcyA9ICdpcy1zaG93JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRTdGlja3kpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnRTdGlja3lUYXJnZXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRMaW1pdCA9IHRoaXMuJGNvbnRhaW5lci5oZWlnaHQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50TGltaXQgPSAkKGVsZW1lbnRTdGlja3lUYXJnZXQpLm9mZnNldCgpLnRvcCAtICRlbGVtZW50LmhlaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFJlc2V0IG9mZnNldFxuICAgICAgICAgICAgICAgICRlbGVtZW50LnJlbW92ZUNsYXNzKGVsZW1lbnRJblZpZXdDbGFzcyk7XG4gICAgICAgICAgICAgICAgJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2lzLXVuc3R1Y2snKTtcblxuICAgICAgICAgICAgICAgICRlbGVtZW50LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsXG4gICAgICAgICAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgwLCAwLCAwKSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRG9uJ3QgYWRkIGVsZW1lbnQgaWYgaXQgYWxyZWFkeSBoYXMgaXRzIGludmlldyBjbGFzcyBhbmQgZG9lc24ndCByZXBlYXRcbiAgICAgICAgICAgIGlmIChlbGVtZW50UmVwZWF0IHx8ICEkZWxlbWVudC5oYXNDbGFzcyhlbGVtZW50SW5WaWV3Q2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlZEVsZW1lbnRzW2ldID0ge1xuICAgICAgICAgICAgICAgICAgICAkZWxlbWVudDogJGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldDogTWF0aC5yb3VuZChlbGVtZW50T2Zmc2V0KSxcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0OiBlbGVtZW50UmVwZWF0LFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZWxlbWVudFBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICBsaW1pdDogZWxlbWVudExpbWl0LFxuICAgICAgICAgICAgICAgICAgICBpblZpZXdDbGFzczogZWxlbWVudEluVmlld0NsYXNzLFxuICAgICAgICAgICAgICAgICAgICBzdGlja3k6IGVsZW1lbnRTdGlja3ksXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBlbGVtZW50Q2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgICAgIHZpZXdwb3J0T2Zmc2V0OiBlbGVtZW50Vmlld3BvcnRPZmZzZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9vcCB0aHJvdWdoIGFsbCBhbmltYXRhYmxlIGVsZW1lbnRzIGFuZCBhcHBseSBhbmltYXRpb24gbWV0aG9kKHMpLlxuICAgICAqL1xuICAgIGFuaW1hdGVFbGVtZW50cygpIHtcbiAgICAgICAgY29uc3QgbGVuID0gdGhpcy5hbmltYXRlZEVsZW1lbnRzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgcmVtb3ZlSW5kZXhlcyA9IFtdO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5hbmltYXRlZEVsZW1lbnRzW2ldO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZWxlbWVudCdzIHZpc2liaWxpdHkgbXVzdCBub3QgYmUgbWFuaXB1bGF0ZWQgYW55IGZ1cnRoZXIsIHJlbW92ZSBpdCBmcm9tIHRoZSBsaXN0XG4gICAgICAgICAgICBpZiAodGhpcy50b2dnbGVFbGVtZW50KGVsZW1lbnQsIGkpKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlSW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFuaW1hdGVkIGVsZW1lbnRzIGFmdGVyIGxvb3BpbmcgdGhyb3VnaCBlbGVtZW50c1xuICAgICAgICBpID0gcmVtb3ZlSW5kZXhlcy5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZWRFbGVtZW50cy5zcGxpY2UocmVtb3ZlSW5kZXhlc1tpXSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGNsYXNzIGFuaW1hdGlvbnMsIGFuZCB1cGRhdGUgdGhlIGdsb2JhbCBzY3JvbGwgcG9zaXRpb25uaW5nLlxuICAgICAqL1xuICAgIHJlbmRlckFuaW1hdGlvbnMoKSB7XG4gICAgICAgIC8vIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiB0aGlzLnNjcm9sbC55KSB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5zY3JvbGwuZGlyZWN0aW9uICE9PSAnZG93bicpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0gZWxzZSBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDwgdGhpcy5zY3JvbGwueSkge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiAhPT0gJ3VwJykge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICd1cCc7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICBpZiAodGhpcy5zY3JvbGwueSAhPT0gd2luZG93LnBhZ2VZT2Zmc2V0KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbC55ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbC54ICE9PSB3aW5kb3cucGFnZVhPZmZzZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnggPSB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhbGxiYWNrcy5vblNjcm9sbCh0aGlzLnNjcm9sbClcblxuICAgICAgICB0aGlzLmFuaW1hdGVFbGVtZW50cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBjbGFzc2VzIG9uIGFuIGVsZW1lbnQgaWYgaXQncyB2aXNpYmxlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSAgICAgIGVsZW1lbnQgQ3VycmVudCBlbGVtZW50IHRvIHRlc3RcbiAgICAgKiBAcGFyYW0gIHtpbnR9ICAgICAgICAgaW5kZXggICBJbmRleCBvZiB0aGUgZWxlbWVudCB3aXRoaW4gaXQncyBjb250YWluZXJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAgICAgICAgICAgICBXZXRoZXIgdGhlIGl0ZW0gbXVzdCBiZSByZW1vdmVkIGZyb20gaXRzIGNvbnRhaW5lclxuICAgICAqL1xuICAgIHRvZ2dsZUVsZW1lbnQoZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IHJlbW92ZUZyb21Db250YWluZXIgPSBmYWxzZTtcblxuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBib3R0b20gZWRnZSBvZiB0aGUgc2Nyb2xsIGNvbnRhaW5lclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGwueTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEJvdHRvbSA9IHNjcm9sbFRvcCArIHRoaXMud2luZG93SGVpZ2h0O1xuXG4gICAgICAgICAgICAvLyBEZWZpbmUgaWYgdGhlIGVsZW1lbnQgaXMgaW5WaWV3XG4gICAgICAgICAgICBsZXQgaW5WaWV3ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50LnBvc2l0aW9uID09PSAndG9wJykge1xuICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxUb3AgPj0gZWxlbWVudC5vZmZzZXQgJiYgc2Nyb2xsVG9wIDw9IGVsZW1lbnQubGltaXQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnBvc2l0aW9uID09PSAnYmVsb3cnKSB7XG4gICAgICAgICAgICAgICAgaW5WaWV3ID0gKHNjcm9sbFRvcCA+IGVsZW1lbnQubGltaXQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnN0aWNreSkge1xuICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxUb3AgPj0gZWxlbWVudC5vZmZzZXQgJiYgc2Nyb2xsVG9wIDw9IGVsZW1lbnQubGltaXQpO1xuICAgICAgICAgICAgfWVsc2UgaWYoZWxlbWVudC52aWV3cG9ydE9mZnNldCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50LnZpZXdwb3J0T2Zmc2V0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbFZpZXdwb3J0T2Zmc2V0VG9wID0gc2Nyb2xsVG9wICsgKHRoaXMud2luZG93SGVpZ2h0ICogZWxlbWVudC52aWV3cG9ydE9mZnNldFsxXSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxWaWV3cG9ydE9mZnNldEJvdHRvbSA9IHNjcm9sbEJvdHRvbSAtICh0aGlzLndpbmRvd0hlaWdodCAqIGVsZW1lbnQudmlld3BvcnRPZmZzZXRbMF0pO1xuICAgICAgICAgICAgICAgICAgICBpblZpZXcgPSAoc2Nyb2xsVmlld3BvcnRPZmZzZXRCb3R0b20gPiBlbGVtZW50Lm9mZnNldCAmJiBzY3JvbGxWaWV3cG9ydE9mZnNldFRvcCA8IGVsZW1lbnQubGltaXQpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbFZpZXdwb3J0T2Zmc2V0ID0gc2Nyb2xsQm90dG9tIC0gKHRoaXMud2luZG93SGVpZ2h0ICogZWxlbWVudC52aWV3cG9ydE9mZnNldFswXSk7XG4gICAgICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxWaWV3cG9ydE9mZnNldCA+IGVsZW1lbnQub2Zmc2V0ICYmIHNjcm9sbFZpZXdwb3J0T2Zmc2V0IDwgZWxlbWVudC5saW1pdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxCb3R0b20gPj0gZWxlbWVudC5vZmZzZXQgJiYgc2Nyb2xsVG9wIDw9IGVsZW1lbnQubGltaXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5zdGlja3kpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wID4gZWxlbWVudC5saW1pdCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LiRlbGVtZW50LmFkZENsYXNzKCdpcy11bnN0dWNrJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kZWxlbWVudC5yZW1vdmVDbGFzcygnaXMtdW5zdHVjaycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPCBlbGVtZW50Lm9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LiRlbGVtZW50LnJlbW92ZUNsYXNzKGVsZW1lbnQuaW5WaWV3Q2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWRkIGNsYXNzIGlmIGluVmlldywgcmVtb3ZlIGlmIG5vdFxuICAgICAgICAgICAgaWYgKGluVmlldykge1xuICAgICAgICAgICAgICAgIGlmKCFlbGVtZW50LiRlbGVtZW50Lmhhc0NsYXNzKGVsZW1lbnQuaW5WaWV3Q2xhc3MpKXtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kZWxlbWVudC5hZGRDbGFzcyhlbGVtZW50LmluVmlld0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyQ2FsbGJhY2soZWxlbWVudCwnZW50ZXInKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQucmVwZWF0ICYmICFlbGVtZW50LnN0aWNreSkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVGcm9tQ29udGFpbmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5zdGlja3kpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSB0aGlzLnNjcm9sbC55IC0gZWxlbWVudC5vZmZzZXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kZWxlbWVudC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogYHRyYW5zbGF0ZTNkKDAsICR7eX1weCwgMClgLFxuICAgICAgICAgICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiBgdHJhbnNsYXRlM2QoMCwgJHt5fXB4LCAwKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogYHRyYW5zbGF0ZTNkKDAsICR7eX1weCwgMClgXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuJGVsZW1lbnQuaGFzQ2xhc3MoZWxlbWVudC5pblZpZXdDbGFzcykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC4kZWxlbWVudC5yZW1vdmVDbGFzcyhlbGVtZW50LmluVmlld0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckNhbGxiYWNrKGVsZW1lbnQsJ2xlYXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVtb3ZlRnJvbUNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjaGVjayBpZiB0aGUgZWxlbWVudCBoYXZlIGEgY2FsbGJhY2ssIGFuZCB0cmlnZ2VyIHRoZSBldmVudCBzZXQgaW4gdGhlIGRhdGEtY2FsbGJhY2tcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge29iamVjdH0gICAgICBlbGVtZW50IEN1cnJlbnQgZWxlbWVudCB0byB0ZXN0XG4gICAgICogQHJldHVybiB2b2lkXG4gICAgICovXG4gICAgdHJpZ2dlckNhbGxiYWNrKGVsZW1lbnQsd2F5KXtcblxuICAgICAgICBpZihlbGVtZW50LmNhbGxiYWNrICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBlbGVtZW50LiRlbGVtZW50LnRyaWdnZXIoe1xuICAgICAgICAgICAgICAgIHR5cGU6IGVsZW1lbnQuY2FsbGJhY2suZXZlbnQsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZWxlbWVudC5jYWxsYmFjay5vcHRpb25zLFxuICAgICAgICAgICAgICAgIHdheTogd2F5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vYWRkIHRoaXMgd2hlcmUgeW91IHdhbnQgZHVkZSAoaW4geW91ciBtb2R1bGUgYnR3KVxuICAgICAgICAgICAgLy8gJGRvY3VtZW50Lm9uKGV2ZW50TmFtZS5OYW1lc3BhY2UsKGUpPT57XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZS5vcHRpb25zLCBlLndheSk7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRvIGEgZGVzaXJlZCB0YXJnZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNjcm9sbFRvKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgJHRhcmdldEVsZW0gPSBvcHRpb25zLnRhcmdldEVsZW07XG4gICAgICAgIGNvbnN0ICRzb3VyY2VFbGVtID0gb3B0aW9ucy5zb3VyY2VFbGVtO1xuICAgICAgICBjb25zdCBvZmZzZXRFbGVtID0gb3B0aW9ucy5vZmZzZXRFbGVtO1xuICAgICAgICBsZXQgdGFyZ2V0T2Zmc2V0ID0gaXNOdW1lcmljKG9wdGlvbnMudGFyZ2V0T2Zmc2V0KSA/IHBhcnNlSW50KG9wdGlvbnMudGFyZ2V0T2Zmc2V0KSA6IDA7XG4gICAgICAgIGNvbnN0IHNwZWVkID0gaXNOdW1lcmljKG9wdGlvbnMuc3BlZWQpID8gcGFyc2VJbnQob3B0aW9ucy5zcGVlZCkgOiA4MDA7XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gaXNOdW1lcmljKG9wdGlvbnMuZGVsYXkpID8gcGFyc2VJbnQob3B0aW9ucy5kZWxheSkgOiAwO1xuICAgICAgICBjb25zdCB0b1RvcCA9IG9wdGlvbnMudG9Ub3A7XG4gICAgICAgIGNvbnN0IHRvQm90dG9tID0gb3B0aW9ucy50b0JvdHRvbTtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkdGFyZ2V0RWxlbSA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mICRzb3VyY2VFbGVtID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGFyZ2V0T2Zmc2V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdZb3UgbXVzdCBzcGVjaWZ5IGF0IGxlYXN0IG9uZSBwYXJhbWV0ZXIuJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgJHRhcmdldEVsZW0gIT09ICd1bmRlZmluZWQnICYmICR0YXJnZXRFbGVtIGluc3RhbmNlb2YgalF1ZXJ5ICYmICR0YXJnZXRFbGVtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9ICR0YXJnZXRFbGVtLm9mZnNldCgpLnRvcCArIHRhcmdldE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgJHNvdXJjZUVsZW0gIT09ICd1bmRlZmluZWQnICYmICRzb3VyY2VFbGVtIGluc3RhbmNlb2YgalF1ZXJ5ICYmICRzb3VyY2VFbGVtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXREYXRhID0gJyc7XG5cbiAgICAgICAgICAgIGlmICgkc291cmNlRWxlbS5hdHRyKCdkYXRhLXRhcmdldCcpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0RGF0YSA9ICRzb3VyY2VFbGVtLmF0dHIoJ2RhdGEtdGFyZ2V0Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldERhdGEgPSAkc291cmNlRWxlbS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9ICQodGFyZ2V0RGF0YSkub2Zmc2V0KCkudG9wICsgdGFyZ2V0T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXRFbGVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb2Zmc2V0ID0gJChvZmZzZXRFbGVtKS5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gdGFyZ2V0T2Zmc2V0IC0gb2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvVG9wID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRvQm90dG9tID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSAkZG9jdW1lbnQuaGVpZ2h0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldE9mZnNldFxuICAgICAgICAgICAgfSwgc3BlZWQpO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGVsZW1lbnRzIGFuZCByZWNhbGN1bGF0ZSBhbGwgdGhlIHBvc2l0aW9ucyBvbiB0aGUgcGFnZVxuICAgICAqL1xuICAgIHVwZGF0ZUVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZUVsZW1lbnRzKCk7XG5cbiAgICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSAkd2luZG93LmhlaWdodCgpO1xuICAgICAgICB0aGlzLndpbmRvd01pZGRsZSA9IHRoaXMud2luZG93SGVpZ2h0IC8gMjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95XG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgJHdpbmRvdy5vZmYoRVZFTlRfS0VZKTtcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9mZihFVkVOVF9LRVkpO1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yZXF1ZXN0SWQpO1xuICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5hbmltYXRlZEVsZW1lbnRzID0gdW5kZWZpbmVkO1xuICAgIH1cbn1cbiIsIi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbmltcG9ydCB7IEFQUF9OQU1FIH0gZnJvbSAnLi4vdXRpbHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IEFic3RyYWN0TW9kdWxlIGZyb20gJy4vQWJzdHJhY3RNb2R1bGUnO1xuXG5jb25zdCBNT0RVTEVfTkFNRSA9ICdTaGFyaW5nJztcbmNvbnN0IEVWRU5UX05BTUVTUEFDRSA9IGAke0FQUF9OQU1FfS4ke01PRFVMRV9OQU1FfWA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLiRlbC5oYXNDbGFzcygnLWluaXRlZCcpKSB7XG4gICAgICAgICAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcygnanMtdG8tcmVtb3ZlJyk7XG4gICAgICAgICAgICB0aGlzLiRlbC5hZGRDbGFzcygnanMtdG9nZ2xlLXNoYXJlIC1pbml0ZWQnKTtcblxuICAgICAgICAgICAgbGV0IGxpbmsgPSB0aGlzLiRlbC5kYXRhKCdsaW5rJyk7XG4gICAgICAgICAgICBsZXQgYm94ID0gJCgnLmpzLXNoYXJlLXRlbXBsYXRlJykuY2xvbmUoKTtcblxuICAgICAgICAgICAgYm94LnJlbW92ZUNsYXNzKCdqcy1zaGFyZS10ZW1wbGF0ZScpLmZpbmQoJ2EnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdocmVmJywgJCh0aGlzKS5hdHRyKCdocmVmJykgKyBsaW5rKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kZWwuYWZ0ZXIoYm94KTtcblxuICAgICAgICAgICAgdGhpcy4kZWwub24oYGNsaWNrLiR7RVZFTlRfTkFNRVNQQUNFfWAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpLm5leHQoKS5zbGlkZVVwKDMwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy5qcy10b2dnbGUtc2hhcmUuaXMtb3BlbicpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAkKCcuanMtdG9nZ2xlLXNoYXJlLmlzLW9wZW4nKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpLm5leHQoKS5zbGlkZVVwKDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtb3BlbicpLm5leHQoKS5zbGlkZURvd24oMzAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9jb21vdGl2ZSBTbW9vdGggU2Nyb2xsXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuaW1wb3J0IHsgJHdpbmRvdywgJGRvY3VtZW50LCAkaHRtbCB9IGZyb20gJy4uL3V0aWxzL2Vudmlyb25tZW50JztcbmltcG9ydCBTY3JvbGwsIHsgRGVmYXVsdHMsIEV2ZW50IH0gZnJvbSAnLi9TY3JvbGwnO1xuXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vdXRpbHMvZGVib3VuY2UnO1xuaW1wb3J0IFNjcm9sbGJhciBmcm9tICdzbW9vdGgtc2Nyb2xsYmFyJztcbmltcG9ydCB7IGlzTnVtZXJpYyB9IGZyb20gJy4uL3V0aWxzL2lzJztcblxuLyoqXG4gKiBTbW9vdGggc2Nyb2xsaW5nIHVzaW5nIGBzbW9vdGgtc2Nyb2xsYmFyYC5cbiAqIEJhc2VkIG9uIGBTY3JvbGxgIGNsYXNzLCB3aGljaCBhbGxvd3MgYW5pbWF0aW9ucyBvZiBlbGVtZW50cyBvbiB0aGUgcGFnZVxuICogYWNjb3JkaW5nIHRvIHNjcm9sbCBwb3NpdGlvbi5cbiAqXG4gKiBAdG9kbyAgTWV0aG9kIHRvIGdldCB0aGUgZGlzdGFuY2UgKGFzIHBlcmNlbnRhZ2UpIG9mIGFuIGVsZW1lbnQgaW4gdGhlIHZpZXdwb3J0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgU2Nyb2xsIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuaXNSZXZlcnNlZCA9IG9wdGlvbnMucmV2ZXJzZWQgfHwgRGVmYXVsdHMucmV2ZXJzZWQ7XG4gICAgICAgIHRoaXMuZ2V0V2F5ID0gb3B0aW9ucy5nZXRXYXkgfHwgRGVmYXVsdHMuZ2V0V2F5O1xuICAgICAgICB0aGlzLmdldFNwZWVkID0gb3B0aW9ucy5nZXRTcGVlZCB8fCBEZWZhdWx0cy5nZXRTcGVlZDtcblxuICAgICAgICB0aGlzLnBhcmFsbGF4RWxlbWVudHMgPSBbXTtcblxuXG4gICAgICAgIGlmKHRoaXMuZ2V0U3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnNwZWVkID0gMDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBzY3JvbGxpbmcgYW5pbWF0aW9uc1xuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gQWRkIGNsYXNzIHRvIHRoZSBkb2N1bWVudCB0byBrbm93IGlmIFNtb290aFNjcm9sbCBpcyBpbml0aWFsaXplZCAodG8gbWFuYWdlIG92ZXJmbG93IG9uIGNvbnRhaW5lcnMpXG4gICAgICAgICAgICAkaHRtbC5hZGRDbGFzcygnaGFzLXNtb290aC1zY3JvbGwnKTtcblxuICAgICAgICAgICAgdGhpcy5zY3JvbGxiYXIgPSBTY3JvbGxiYXIuaW5pdCh0aGlzLiRjb250YWluZXJbMF0se1xuICAgICAgICAgICAgICAgIHN5bmNDYWxsYmFja3M6IHRydWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnNjcm9sbGJhclN0YXR1cyA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgdGhpcy5zZXRTY3JvbGxiYXJMaW1pdCgpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFdoZWVsRGlyZWN0aW9uKHRoaXMuaXNSZXZlcnNlZCk7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcblxuICAgICAgICAgICAgdGhpcy5yZW5kZXJBbmltYXRpb25zKHRydWUpO1xuXG4gICAgICAgICAgICAvLyBPbiBzY3JvbGxcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsYmFyLmFkZExpc3RlbmVyKChzdGF0dXMpID0+IHRoaXMucmVuZGVyQW5pbWF0aW9ucyhmYWxzZSwgc3RhdHVzKSk7XG5cbiAgICAgICAgICAgIC8vIFJlYnVpbGQgZXZlbnRcbiAgICAgICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFdmVudC5SRUJVSUxELCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxiYXIuc2Nyb2xsVG8oMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVFbGVtZW50cygpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBldmVudFxuICAgICAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEV2ZW50LlVQREFURSwgKGV2ZW50LCBvcHRpb25zKSA9PiB0aGlzLnVwZGF0ZUVsZW1lbnRzKG9wdGlvbnMpKTtcblxuICAgICAgICAgICAgLy8gUmVuZGVyIGV2ZW50XG4gICAgICAgICAgICB0aGlzLiRjb250YWluZXIub24oRXZlbnQuUkVOREVSLCAoKSA9PiB0aGlzLnJlbmRlckFuaW1hdGlvbnMoZmFsc2UpKTtcblxuICAgICAgICAgICAgLy8gU2Nyb2xsdG8gYnV0dG9uIGV2ZW50XG4gICAgICAgICAgICB0aGlzLiRjb250YWluZXIub24oRXZlbnQuQ0xJQ0ssICcuanMtc2Nyb2xsdG8nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgbGV0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSAkdGFyZ2V0LmRhdGEoJ29mZnNldCcpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZUVsZW06ICR0YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldEVsZW06IG9mZnNldFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFdmVudC5TQ1JPTExUTywgKGV2ZW50KSA9PiB0aGlzLnNjcm9sbFRvKGV2ZW50Lm9wdGlvbnMpKTtcblxuICAgICAgICAgICAgLy8gU2V0dXAgZG9uZVxuICAgICAgICAgICAgJGRvY3VtZW50LnRyaWdnZXJIYW5kbGVyKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBFdmVudC5JU1JFQURZXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgLy8gUmVzaXplIGV2ZW50XG4gICAgICAgICR3aW5kb3cub24oRXZlbnQuUkVTSVpFLCBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUVsZW1lbnRzKClcbiAgICAgICAgfSwgMjApKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBleGlzdGluZyBlbGVtZW50cyBhbmQgZmluZCBhbGwgYW5pbWF0YWJsZSBlbGVtZW50cy5cbiAgICAgKiBDYWxsZWQgb24gcGFnZSBsb2FkIGFuZCBhbnkgc3Vic2VxdWVudCB1cGRhdGVzLlxuICAgICAqL1xuICAgIGFkZEVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzID0gW107XG5cbiAgICAgICAgY29uc3QgJGVsZW1lbnRzID0gJCh0aGlzLnNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgbGVuID0gJGVsZW1lbnRzLmxlbmd0aDtcbiAgICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpICsrKSB7XG4gICAgICAgICAgICBsZXQgJGVsZW1lbnQgPSAkZWxlbWVudHMuZXEoaSk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFNwZWVkID0gaXNOdW1lcmljKCRlbGVtZW50LmF0dHIoJ2RhdGEtc3BlZWQnKSkgPyAkZWxlbWVudC5hdHRyKCdkYXRhLXNwZWVkJykgLyAxMCA6IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRQb3NpdGlvbiA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtcG9zaXRpb24nKTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VGFyZ2V0ID0gJGVsZW1lbnQuYXR0cignZGF0YS10YXJnZXQnKTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50SG9yaXpvbnRhbCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtaG9yaXpvbnRhbCcpO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRTdGlja3kgPSAodHlwZW9mICRlbGVtZW50LmF0dHIoJ2RhdGEtc3RpY2t5JykgPT09ICdzdHJpbmcnKTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50U3RpY2t5VGFyZ2V0ID0gJGVsZW1lbnQuYXR0cignZGF0YS1zdGlja3ktdGFyZ2V0Jyk7XG4gICAgICAgICAgICBsZXQgJHRhcmdldCA9IChlbGVtZW50VGFyZ2V0ICYmICQoZWxlbWVudFRhcmdldCkubGVuZ3RoKSA/ICQoZWxlbWVudFRhcmdldCkgOiAkZWxlbWVudDtcbiAgICAgICAgICAgIGxldCBlbGVtZW50T2Zmc2V0ID0gJHRhcmdldC5vZmZzZXQoKS50b3AgKyB0aGlzLnNjcm9sbGJhci5zY3JvbGxUb3A7XG4gICAgICAgICAgICBsZXQgZWxlbWVudExpbWl0ID0gZWxlbWVudE9mZnNldCArICR0YXJnZXQub3V0ZXJIZWlnaHQoKTtcblxuICAgICAgICAgICAgbGV0IGVsZW1lbnRWaWV3cG9ydE9mZnNldCA9IG51bGw7XG4gICAgICAgICAgICBpZih0eXBlb2YgJGVsZW1lbnQuYXR0cignZGF0YS12aWV3cG9ydC1vZmZzZXQnKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgIGVsZW1lbnRWaWV3cG9ydE9mZnNldCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtdmlld3BvcnQtb2Zmc2V0Jykuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9NYW5hZ2UgY2FsbGJhY2tcbiAgICAgICAgICAgIGxldCBlbGVtZW50Q2FsbGJhY2tTdHJpbmcgPSAodHlwZW9mICRlbGVtZW50LmF0dHIoJ2RhdGEtY2FsbGJhY2snKSA9PT0gJ3N0cmluZycpID8gJGVsZW1lbnQuYXR0cignZGF0YS1jYWxsYmFjaycpIDogbnVsbDtcbiAgICAgICAgICAgIGxldCBlbGVtZW50Q2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICAgICAgICBpZihlbGVtZW50Q2FsbGJhY2tTdHJpbmcgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0gZWxlbWVudENhbGxiYWNrU3RyaW5nLnN1YnN0cigwLCBlbGVtZW50Q2FsbGJhY2tTdHJpbmcuaW5kZXhPZignKCcpKTtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uc1N0cmluZyA9IGVsZW1lbnRDYWxsYmFja1N0cmluZy5zdWJzdHIoZWxlbWVudENhbGxiYWNrU3RyaW5nLmluZGV4T2YoJygnKSxlbGVtZW50Q2FsbGJhY2tTdHJpbmcubGVuZ3RoIC0gZXZlbnQubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIG9wdGlvbnNTdHJpbmcgPSBvcHRpb25zU3RyaW5nLnJlcGxhY2UoJygnLCcnKTtcbiAgICAgICAgICAgICAgICBvcHRpb25zU3RyaW5nID0gb3B0aW9uc1N0cmluZy5yZXBsYWNlKCcpJywnJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IG9wdGlvbnNTdHJpbmcuc3BsaXQoJ3wnKTtcblxuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7fTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgb3B0aW9ucy5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBvcHRpb25zW2pdLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvblswXSA9IG9wdGlvblswXS5yZXBsYWNlKCcgJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YWx1ZSBpcyBhIGJvb2xlYW5cbiAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9uWzFdID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKG9wdGlvblsxXSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHZhbHVlIGlzIG51bWVyaWNcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZigvXlxcZCskLy50ZXN0KG9wdGlvblsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHBhcnNlSW50KG9wdGlvblsxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YWx1ZSBpcyBhIFN0cmluZ1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IG9wdGlvblsxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvYmpbb3B0aW9uWzBdXSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50Q2FsbGJhY2sgPSB7ZXZlbnQ6ZXZlbnQsIG9wdGlvbnM6b2JqfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgZWxlbWVudHMgc3RheXMgdmlzaWJsZSBhZnRlciBzY3JvbGxpbmcgcGFzdCBpdFxuICAgICAgICAgICAgbGV0IGVsZW1lbnRSZXBlYXQgPSAodHlwZW9mICRlbGVtZW50LmF0dHIoJ2RhdGEtcmVwZWF0JykgPT09ICdzdHJpbmcnKTtcblxuICAgICAgICAgICAgbGV0IGVsZW1lbnRJblZpZXdDbGFzcyA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtaW52aWV3LWNsYXNzJyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnRJblZpZXdDbGFzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50SW5WaWV3Q2xhc3MgPSAnaXMtc2hvdyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZWxlbWVudFRhcmdldCAmJiAkZWxlbWVudC5hdHRyKCdkYXRhLXRyYW5zZm9ybScpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudE9mZnNldCAtPSBwYXJzZUZsb2F0KCRlbGVtZW50LmF0dHIoJ2RhdGEtdHJhbnNmb3JtJykueSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50U3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50U3RpY2t5VGFyZ2V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50TGltaXQgPSBJbmZpbml0eTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50TGltaXQgPSAkKGVsZW1lbnRTdGlja3lUYXJnZXQpLm9mZnNldCgpLnRvcCAtICRlbGVtZW50LmhlaWdodCgpICsgdGhpcy5zY3JvbGxiYXIuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IHtcbiAgICAgICAgICAgICAgICAkZWxlbWVudDogJGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgaW5WaWV3Q2xhc3M6IGVsZW1lbnRJblZpZXdDbGFzcyxcbiAgICAgICAgICAgICAgICBsaW1pdDogZWxlbWVudExpbWl0LFxuICAgICAgICAgICAgICAgIG9mZnNldDogTWF0aC5yb3VuZChlbGVtZW50T2Zmc2V0KSxcbiAgICAgICAgICAgICAgICByZXBlYXQ6IGVsZW1lbnRSZXBlYXQsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGVsZW1lbnRDYWxsYmFjayxcbiAgICAgICAgICAgICAgICB2aWV3cG9ydE9mZnNldDogZWxlbWVudFZpZXdwb3J0T2Zmc2V0XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBGb3IgcGFyYWxsYXggYW5pbWF0ZWQgZWxlbWVudHNcbiAgICAgICAgICAgIGlmIChlbGVtZW50U3BlZWQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRQb3NpdGlvbiA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtcG9zaXRpb24nKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudEhvcml6b250YWwgPSAkZWxlbWVudC5hdHRyKCdkYXRhLWhvcml6b250YWwnKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudE1pZGRsZSA9ICgoZWxlbWVudExpbWl0IC0gZWxlbWVudE9mZnNldCkgLyAyKSArIGVsZW1lbnRPZmZzZXQ7XG5cbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50Lmhvcml6b250YWwgPSBlbGVtZW50SG9yaXpvbnRhbDtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50Lm1pZGRsZSA9IGVsZW1lbnRNaWRkbGU7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5vZmZzZXQgPSBlbGVtZW50T2Zmc2V0O1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQucG9zaXRpb24gPSBlbGVtZW50UG9zaXRpb247XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5zcGVlZCA9IGVsZW1lbnRTcGVlZFxuXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzLnB1c2gobmV3RWxlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuc3RpY2t5ID0gZWxlbWVudFN0aWNreTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZWRFbGVtZW50cy5wdXNoKG5ld0VsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gQHRvZG8gVXNlZnVsP1xuICAgICAgICAgICAgICAgIC8vIERvbid0IGFkZCBlbGVtZW50IGlmIGl0IGFscmVhZHkgaGFzIGl0cyBpbiB2aWV3IGNsYXNzIGFuZCBkb2Vzbid0IHJlcGVhdFxuICAgICAgICAgICAgICAgIC8vIGlmIChlbGVtZW50UmVwZWF0IHx8ICEkZWxlbWVudC5oYXNDbGFzcyhlbGVtZW50SW5WaWV3Q2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuYW5pbWF0ZWRFbGVtZW50cy5wdXNoKG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50U3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vbGF1bmNoIHRoZSB0b2dnbGUgZnVuY3Rpb24gdG8gc2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgc3RpY2t5IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVFbGVtZW50KG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGNsYXNzL3RyYW5zZm9ybSBhbmltYXRpb25zLCBhbmQgdXBkYXRlIHRoZSBnbG9iYWwgc2Nyb2xsIHBvc2l0aW9ubmluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IGlzRmlyc3RDYWxsIERldGVybWluZXMgaWYgdGhpcyBpcyB0aGUgZmlyc3Qgb2NjdXJlbmNlIG9mIG1ldGhvZCBiZWluZyBjYWxsZWRcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9ICBzdGF0dXMgICAgICBPcHRpb25hbCBzdGF0dXMgb2JqZWN0IHJlY2VpdmVkIHdoZW4gbWV0aG9kIGlzXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGVkIGJ5IHNtb290aC1zY3JvbGxiYXIgaW5zdGFuY2UgbGlzdGVuZXIuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICByZW5kZXJBbmltYXRpb25zKGlzRmlyc3RDYWxsLCBzdGF0dXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdGF0dXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbGJhclN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNjcm9sbGJhclRvcCA9IHRoaXMuc2Nyb2xsYmFyLnNjcm9sbFRvcDtcblxuICAgICAgICBpZih0aGlzLmdldFdheSl7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsYmFyVG9wID4gdGhpcy5zY3JvbGwueSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbC5kaXJlY3Rpb24gIT09ICdkb3duJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxiYXJUb3AgPCB0aGlzLnNjcm9sbC55KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiAhPT0gJ3VwJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAndXAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuZ2V0U3BlZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbC55ICE9PSBzY3JvbGxiYXJUb3ApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbC5zcGVlZCA9IHRoaXMuc2Nyb2xsYmFyLm1vdmVtZW50Lnk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGwueSA9IHNjcm9sbGJhclRvcDtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbC5zcGVlZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zY3JvbGwueSAhPT0gc2Nyb2xsYmFyVG9wKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbC55ID0gc2Nyb2xsYmFyVG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50cyhpc0ZpcnN0Q2FsbCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZUVsZW1lbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRvIGEgZGVzaXJlZCB0YXJnZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNjcm9sbFRvKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgJHRhcmdldEVsZW0gPSBvcHRpb25zLnRhcmdldEVsZW07XG4gICAgICAgIGNvbnN0ICRzb3VyY2VFbGVtID0gb3B0aW9ucy5zb3VyY2VFbGVtO1xuICAgICAgICBjb25zdCBvZmZzZXRFbGVtID0gb3B0aW9ucy5vZmZzZXRFbGVtO1xuICAgICAgICBsZXQgdGFyZ2V0T2Zmc2V0ID0gaXNOdW1lcmljKG9wdGlvbnMudGFyZ2V0T2Zmc2V0KSA/IHBhcnNlSW50KG9wdGlvbnMudGFyZ2V0T2Zmc2V0KSA6IDA7XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gaXNOdW1lcmljKG9wdGlvbnMuZGVsYXkpID8gcGFyc2VJbnQob3B0aW9ucy5kZWxheSkgOiAwO1xuICAgICAgICBjb25zdCBzcGVlZCA9IGlzTnVtZXJpYyhvcHRpb25zLnNwZWVkKSA/IHBhcnNlSW50KG9wdGlvbnMuc3BlZWQpIDogOTAwO1xuICAgICAgICBjb25zdCB0b1RvcCA9IG9wdGlvbnMudG9Ub3A7XG4gICAgICAgIGNvbnN0IHRvQm90dG9tID0gb3B0aW9ucy50b0JvdHRvbTtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkdGFyZ2V0RWxlbSA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mICRzb3VyY2VFbGVtID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGFyZ2V0T2Zmc2V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdZb3UgbXVzdCBzcGVjaWZ5IGF0IGxlYXN0IG9uZSBwYXJhbWV0ZXIuJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgJHRhcmdldEVsZW0gIT09ICd1bmRlZmluZWQnICYmICR0YXJnZXRFbGVtIGluc3RhbmNlb2YgalF1ZXJ5ICYmICR0YXJnZXRFbGVtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9ICR0YXJnZXRFbGVtLm9mZnNldCgpLnRvcCArIHRoaXMuc2Nyb2xsYmFyLnNjcm9sbFRvcCArIHRhcmdldE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgJHNvdXJjZUVsZW0gIT09ICd1bmRlZmluZWQnICYmICRzb3VyY2VFbGVtIGluc3RhbmNlb2YgalF1ZXJ5ICYmICRzb3VyY2VFbGVtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXREYXRhID0gJyc7XG5cbiAgICAgICAgICAgIGlmICgkc291cmNlRWxlbS5hdHRyKCdkYXRhLXRhcmdldCcpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0RGF0YSA9ICRzb3VyY2VFbGVtLmF0dHIoJ2RhdGEtdGFyZ2V0Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldERhdGEgPSAkc291cmNlRWxlbS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9ICQodGFyZ2V0RGF0YSkub2Zmc2V0KCkudG9wICsgdGhpcy5zY3JvbGxiYXIuc2Nyb2xsVG9wICsgdGFyZ2V0T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXRFbGVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb2Zmc2V0ID0gJChvZmZzZXRFbGVtKS5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gdGFyZ2V0T2Zmc2V0IC0gb2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvVG9wID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRvQm90dG9tID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSB0aGlzLnNjcm9sbGJhci5saW1pdC55O1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbGJhci5zY3JvbGxUbygwLCB0YXJnZXRPZmZzZXQsIHNwZWVkKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgc2Nyb2xsIGJhciBsaW1pdFxuICAgICAqL1xuICAgIHNldFNjcm9sbGJhckxpbWl0KCkge1xuICAgICAgICB0aGlzLnNjcm9sbGJhckxpbWl0ID0gdGhpcy5zY3JvbGxiYXIubGltaXQueSArIHRoaXMud2luZG93SGVpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGx5IENTUyB0cmFuc2Zvcm0gcHJvcGVydGllcyBvbiBhbiBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSAgJGVsZW1lbnQgVGFyZ2V0dGVkIGpRdWVyeSBlbGVtZW50XG4gICAgICogQHBhcmFtICB7aW50fSAgICAgeCAgICAgICAgVHJhbnNsYXRlIHZhbHVlXG4gICAgICogQHBhcmFtICB7aW50fSAgICAgeSAgICAgICAgVHJhbnNsYXRlIHZhbHVlXG4gICAgICogQHBhcmFtICB7aW50fSAgICAgeiAgICAgICAgVHJhbnNsYXRlIHZhbHVlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICB0cmFuc2Zvcm1FbGVtZW50KCRlbGVtZW50LCB4LCB5LCB6KSB7XG4gICAgICAgIC8vIERlZmF1bHRzXG4gICAgICAgIHggPSB4IHx8IDA7XG4gICAgICAgIHkgPSB5IHx8IDA7XG4gICAgICAgIHogPSB6IHx8IDA7XG5cbiAgICAgICAgLy8gVHJhbnNsYXRlIGFuZCBzdG9yZSB0aGUgcG9zaXRpb25uaW5nIGFzIGBkYXRhYFxuICAgICAgICAkZWxlbWVudC5jc3Moe1xuICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogYHRyYW5zbGF0ZTNkKCR7eH1weCwgJHt5fXB4LCAke3p9cHgpYCxcbiAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogYHRyYW5zbGF0ZTNkKCR7eH1weCwgJHt5fXB4LCAke3p9cHgpYCxcbiAgICAgICAgICAgICd0cmFuc2Zvcm0nOiBgdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsICR7en1weClgXG4gICAgICAgIH0pLmRhdGEoJ3RyYW5zZm9ybScse1xuICAgICAgICAgICAgeCA6IHgsXG4gICAgICAgICAgICB5IDogeSxcbiAgICAgICAgICAgIHogOiB6XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFmZmVjdCBjaGlsZCBlbGVtZW50cyB3aXRoIHRoZSBzYW1lIHBvc2l0aW9ubmluZ1xuICAgICAgICAvLyBjb25zdCBjaGlsZHJlbiA9ICRlbGVtZW50LmZpbmQodGhpcy5zZWxlY3Rvcik7XG4gICAgICAgIC8vIGNvbnN0IGxlbiA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgLy8gbGV0IGkgPSAwO1xuICAgICAgICAvLyBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIC8vICAgICBsZXQgJGNoaWxkID0gJChjaGlsZHJlbltpXSk7XG4gICAgICAgIC8vICAgICBpZiAoISRjaGlsZC5kYXRhKCd0cmFuc2Zvcm0nKSkge1xuICAgICAgICAvLyAgICAgICAgICRjaGlsZC5kYXRhKCd0cmFuc2Zvcm0nLCB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHg6IHgsXG4gICAgICAgIC8vICAgICAgICAgICAgIHk6IHksXG4gICAgICAgIC8vICAgICAgICAgICAgIHo6IHpcbiAgICAgICAgLy8gICAgICAgICB9KVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvb3AgdGhyb3VnaCBhbGwgcGFyYWxsYXgtYWJsZSBlbGVtZW50cyBhbmQgYXBwbHkgdHJhbnNmb3JtIG1ldGhvZChzKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IGlzRmlyc3RDYWxsIERldGVybWluZXMgaWYgdGhpcyBpcyB0aGUgZmlyc3Qgb2NjdXJlbmNlIG9mIG1ldGhvZCBiZWluZyBjYWxsZWRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHRyYW5zZm9ybUVsZW1lbnRzKGlzRmlyc3RDYWxsKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmFsbGF4RWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYmFyQm90dG9tID0gdGhpcy5zY3JvbGxiYXIuc2Nyb2xsVG9wICsgdGhpcy53aW5kb3dIZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxiYXJNaWRkbGUgPSB0aGlzLnNjcm9sbGJhci5zY3JvbGxUb3AgKyB0aGlzLndpbmRvd01pZGRsZTtcblxuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgY29uc3QgbGVuID0gdGhpcy5wYXJhbGxheEVsZW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZUluZGV4ZXMgPSBbXTtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJFbCA9IHRoaXMucGFyYWxsYXhFbGVtZW50c1tpXTtcbiAgICAgICAgICAgICAgICAvLyBPbGRcbiAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsQm90dG9tID0gc2Nyb2xsYmFyQm90dG9tO1xuICAgICAgICAgICAgICAgIC8vIE5ld1xuICAgICAgICAgICAgICAgIC8vIGxldCBzY3JvbGxCb3R0b20gPSAoY3VyRWwucG9zaXRpb24gPT09ICd0b3AnKSA/IHRoaXMuc2Nyb2xsYmFyLnNjcm9sbFRvcCA6IHNjcm9sbGJhckJvdHRvbTtcblxuICAgICAgICAgICAgICAgIGxldCB0cmFuc2Zvcm1EaXN0YW5jZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgLy8gRGVmaW5lIGlmIHRoZSBlbGVtZW50IGlzIGluIHZpZXdcbiAgICAgICAgICAgICAgICAvLyBPbGRcbiAgICAgICAgICAgICAgICBsZXQgaW5WaWV3ID0gKHNjcm9sbEJvdHRvbSA+PSBjdXJFbC5vZmZzZXQgJiYgdGhpcy5zY3JvbGwueSA8PSBjdXJFbC5saW1pdCk7XG4gICAgICAgICAgICAgICAgLy8gTmV3XG4gICAgICAgICAgICAgICAgLy8gbGV0IGluVmlldyA9IChzY3JvbGxCb3R0b20gPj0gY3VyRWwub2Zmc2V0ICYmIHRoaXMuc2Nyb2xsYmFyLnNjcm9sbFRvcCA8PSBjdXJFbC5saW1pdCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUVsZW1lbnQoY3VyRWwsIGkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzRmlyc3RDYWxsICYmICFpblZpZXcgJiYgY3VyRWwuc3BlZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRGlmZmVyZW50IGNhbGN1bGF0aW9ucyBpZiBpdCBpcyB0aGUgZmlyc3QgY2FsbCBhbmQgdGhlIGl0ZW0gaXMgbm90IGluIHRoZSB2aWV3XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJFbC5wb3NpdGlvbiAhPT0gJ3RvcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gKGN1ckVsLm9mZnNldCAtIHRoaXMud2luZG93TWlkZGxlIC0gY3VyRWwubWlkZGxlKSAqIC1jdXJFbC5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIGVsZW1lbnQgaXMgaW4gdmlld1xuICAgICAgICAgICAgICAgIGlmIChpblZpZXcgJiYgY3VyRWwuc3BlZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjdXJFbC5wb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IHRoaXMuc2Nyb2xsYmFyLnNjcm9sbFRvcCAqIC1jdXJFbC5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm1EaXN0YW5jZSA9ICh0aGlzLnNjcm9sbGJhci5zY3JvbGxUb3AgLSBjdXJFbC5vZmZzZXQpICogLWN1ckVsLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAodGhpcy5zY3JvbGxiYXJMaW1pdCAtIHNjcm9sbEJvdHRvbSkgKiBjdXJFbC5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gKHNjcm9sbGJhck1pZGRsZSAtIGN1ckVsLm1pZGRsZSkgKiAtY3VyRWwuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFRyYW5zZm9ybSBob3Jpem9udGFsIE9SIHZlcnRpY2FsLiBEZWZhdWx0cyB0byB2ZXJ0aWNhbFxuICAgICAgICAgICAgICAgIGlmIChpc051bWVyaWModHJhbnNmb3JtRGlzdGFuY2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIChjdXJFbC5ob3Jpem9udGFsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnQoY3VyRWwuJGVsZW1lbnQsIHRyYW5zZm9ybURpc3RhbmNlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnQoY3VyRWwuJGVsZW1lbnQsIDAsIHRyYW5zZm9ybURpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgZWxlbWVudHMgYW5kIHJlY2FsY3VsYXRlIGFsbCB0aGUgcG9zaXRpb25zIG9uIHRoZSBwYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIHVwZGF0ZUVsZW1lbnRzKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgdGhpcy5zY3JvbGxiYXIudXBkYXRlKCk7XG4gICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gJHdpbmRvdy5oZWlnaHQoKTtcbiAgICAgICAgdGhpcy53aW5kb3dNaWRkbGUgPSB0aGlzLndpbmRvd0hlaWdodCAvIDI7XG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsYmFyTGltaXQoKTtcbiAgICAgICAgdGhpcy5zZXRXaGVlbERpcmVjdGlvbih0aGlzLmlzUmV2ZXJzZWQpO1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudHModHJ1ZSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBvcHRpb25zLmNhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlckFuaW1hdGlvbnMoZmFsc2UsIHN0YXR1cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHNtb290aC1zY3JvbGxiYXIgc2Nyb2xsaW5nIGRpcmVjdGlvbiBmb3Igd2hlZWwgZXZlbnRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlzUmV2ZXJzZWRcbiAgICAgKi9cbiAgICBzZXRXaGVlbERpcmVjdGlvbihpc1JldmVyc2VkKXtcbiAgICAgICAgLy90aGlzLnNjcm9sbGJhci5yZXZlcnNlV2hlZWwoaXNSZXZlcnNlZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICAgICAgJGh0bWwucmVtb3ZlQ2xhc3MoJ2hhcy1zbW9vdGgtc2Nyb2xsJyk7XG4gICAgICAgIHRoaXMucGFyYWxsYXhFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLnNjcm9sbGJhci5kZXN0cm95KCk7XG4gICAgfVxufVxuIiwiLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuaW1wb3J0IHsgJGRvY3VtZW50LCBBUFBfTkFNRSB9IGZyb20gJy4uL3V0aWxzL2Vudmlyb25tZW50JztcbmltcG9ydCBBYnN0cmFjdE1vZHVsZSBmcm9tICcuL0Fic3RyYWN0TW9kdWxlJztcblxuY29uc3QgREFUQV9LRVkgID0gYCR7QVBQX05BTUV9LlNwbGl0VGV4dExpbmVzYDtcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gO1xuXG5jb25zdCBFdmVudCA9IHtcbiAgICBDTElDSzogYGNsaWNrJHtFVkVOVF9LRVl9YFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdE1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucylcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3BsaXRMaW5lID0gbmV3IFNwbGl0VGV4dCh0aGlzLmVsLCB7dHlwZTogJ2xpbmVzJ30pO1xuICAgICAgICB9LDEwMDApO1xuICAgIH1cblxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgLy90aGlzLiRlbC5vZmYoRVZFTlRfS0VZKTtcbiAgICB9XG59XG4iLCIvKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgeyAkZG9jdW1lbnQsIEFQUF9OQU1FIH0gZnJvbSAnLi4vdXRpbHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IEFic3RyYWN0TW9kdWxlIGZyb20gJy4vQWJzdHJhY3RNb2R1bGUnO1xuXG5jb25zdCBEQVRBX0tFWSAgPSBgJHtBUFBfTkFNRX0uU3BsaXRUZXh0V29yZHNgO1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWA7XG5cbmNvbnN0IEV2ZW50ID0ge1xuICAgIENMSUNLOiBgY2xpY2ske0VWRU5UX0tFWX1gXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEFic3RyYWN0TW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc3BsaXRMaW5lID0gbmV3IFNwbGl0VGV4dCh0aGlzLmVsLCB7dHlwZTogJ3dvcmRzJ30pO1xuICAgIH1cblxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgLy90aGlzLiRlbC5vZmYoRVZFTlRfS0VZKTtcbiAgICB9XG59XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRXh0ZW5kZWQgTG9jb21vdGl2ZSBTY3JvbGxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgU2Nyb2xsLCB7IEVWRU5UX0tFWSBhcyBWRU5ET1JfRVZFTlRfS0VZLCBFVkVOVCBhcyBWRU5ET1JfRVZFTlRTLCBERUZBVUxUUyBhcyBWRU5ET1JfREVGQVVMVFMgfSBmcm9tICcuL3ZlbmRvcnMvU2Nyb2xsJ1xuXG4vKipcbiAqIFVOQ09NTUVOVCBPTkxZIFRIRSBMSU5FUyBZT1UgTkVFRFxuICovXG4vLyBpbXBvcnQgeyAkd2luZG93LCAkZG9jdW1lbnQgfSBmcm9tICcuLi8uLi91dGlscy9lbnZpcm9ubWVudCc7XG4vLyBpbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vLi4vdXRpbHMvZGVib3VuY2UnO1xuLy8gaW1wb3J0IHsgaXNOdW1lcmljIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMnO1xuXG5leHBvcnQgY29uc3QgRVZFTlRfS0VZID0gVkVORE9SX0VWRU5UX0tFWTtcblxuZXhwb3J0IGNvbnN0IEVWRU5UID0gT2JqZWN0LmFzc2lnbihWRU5ET1JfRVZFTlRTLCB7XG4gICAgLy8gVEVTVDogYHRlc3QuJHtFVkVOVF9LRVl9YFxufSk7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUUyA9IE9iamVjdC5hc3NpZ24oVkVORE9SX0RFRkFVTFRTLCB7Z2V0V2F5OnRydWV9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBTY3JvbGwge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucylcbiAgICAgICAgdGhpcy4kdGltZWxpbmVWYWx1ZSA9ICQoJy5qcy10aW1lbGluZS12YWx1ZScpO1xuICAgIH1cbn1cbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFeHRlbmRlZCBMb2NvbW90aXZlIFNtb290aCBTY3JvbGxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgeyAkaHRtbCB9IGZyb20gJy4uL3V0aWxzL2Vudmlyb25tZW50JztcbmltcG9ydCBTbW9vdGhTY3JvbGwgZnJvbSAnLi92ZW5kb3JzL1Ntb290aFNjcm9sbCdcblxuLyoqXG4gKiBVTkNPTU1FTlQgT05MWSBUSEUgTElORVMgWU9VIE5FRURcbiAqL1xuLy8gaW1wb3J0IHsgJHdpbmRvdywgJGRvY3VtZW50LCAkaHRtbCB9IGZyb20gJy4uL3V0aWxzL2Vudmlyb25tZW50Jztcbi8vIGltcG9ydCBTY3JvbGwsIHsgREVGQVVMVFMsIEVWRU5UIH0gZnJvbSAnLi9TY3JvbGwnO1xuXG4vLyBpbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vdXRpbHMvZGVib3VuY2UnO1xuLy8gaW1wb3J0IFNjcm9sbGJhciBmcm9tICdzbW9vdGgtc2Nyb2xsYmFyJztcbi8vIGltcG9ydCB7IGlzTnVtZXJpYyB9IGZyb20gJy4uL3V0aWxzL2lzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBTbW9vdGhTY3JvbGwge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucylcbiAgICB9XG5cbiAgICByZW5kZXJBbmltYXRpb25zKGlzRmlyc3RDYWxsLCBzdGF0dXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdGF0dXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbGJhclN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNjcm9sbGJhclRvcCA9IHRoaXMuc2Nyb2xsYmFyLnNjcm9sbFRvcDtcblxuICAgICAgICBpZih0aGlzLmdldFdheSl7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsYmFyVG9wID4gdGhpcy5zY3JvbGwueSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbC5kaXJlY3Rpb24gIT09ICdkb3duJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxiYXJUb3AgPCB0aGlzLnNjcm9sbC55KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiAhPT0gJ3VwJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAndXAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICRodG1sLmF0dHIoJ2RhdGEtd2F5JywgdGhpcy5zY3JvbGwuZGlyZWN0aW9uKVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmdldFNwZWVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGwueSAhPT0gc2Nyb2xsYmFyVG9wKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGwuc3BlZWQgPSB0aGlzLnNjcm9sbGJhci5tb3ZlbWVudC55O1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnkgPSBzY3JvbGxiYXJUb3A7XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGwuc3BlZWQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsLnkgIT09IHNjcm9sbGJhclRvcCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGwueSA9IHNjcm9sbGJhclRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHRpbWVsaW5lVmFsdWUuY3NzKHtcbiAgICAgICAgICAgICdoZWlnaHQnOmAkeygxMDAqdGhpcy5zY3JvbGwueS90aGlzLnNjcm9sbGJhci5saW1pdC55KX0lYFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnRzKGlzRmlyc3RDYWxsKTtcbiAgICAgICAgdGhpcy5hbmltYXRlRWxlbWVudHMoKTtcbiAgICB9XG59XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9jb21vdGl2ZSBTY3JvbGxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgeyAkd2luZG93LCAkZG9jdW1lbnQgfSBmcm9tICcuLi8uLi91dGlscy9lbnZpcm9ubWVudCc7XG5cbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi91dGlscy9kZWJvdW5jZSc7XG5pbXBvcnQgeyBpc051bWVyaWMgfSBmcm9tICcuLi8uLi91dGlscy9pcyc7XG5cbmV4cG9ydCBjb25zdCBFVkVOVF9LRVkgPSBgTG9jb21vdGl2ZVNjcm9sbGA7XG5cbmV4cG9ydCBjb25zdCBFVkVOVCA9IHtcbiAgICBDTElDSzogYGNsaWNrLiR7RVZFTlRfS0VZfWAsXG4gICAgSVNSRUFEWTogYGlzUmVhZHkuJHtFVkVOVF9LRVl9YCxcbiAgICBSRUJVSUxEOiBgcmVidWlsZC4ke0VWRU5UX0tFWX1gLFxuICAgIFJFTkRFUjogYHJlbmRlci4ke0VWRU5UX0tFWX1gLFxuICAgIFJFU0laRTogYHJlc2l6ZS4ke0VWRU5UX0tFWX1gLFxuICAgIFNDUk9MTDogYHNjcm9sbC4ke0VWRU5UX0tFWX1gLFxuICAgIFNDUk9MTFRPOiBgc2Nyb2xsVG8uJHtFVkVOVF9LRVl9YCxcbiAgICBVUERBVEU6IGB1cGRhdGUuJHtFVkVOVF9LRVl9YFxufTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRTID0ge1xuICAgIGNvbnRhaW5lcjogJGRvY3VtZW50LFxuICAgIG1vYmlsZUNvbnRhaW5lcjogJGRvY3VtZW50LFxuICAgIG9uU2Nyb2xsOiBmdW5jdGlvbigpe30sXG4gICAgc2VsZWN0b3I6ICcuanMtYW5pbWF0ZScsXG4gICAgc21vb3RoOiBmYWxzZSxcbiAgICBzbW9vdGhNb2JpbGU6IGZhbHNlLFxuICAgIHJldmVyc2VkOiBmYWxzZSxcbiAgICBnZXRXYXk6IGZhbHNlLFxuICAgIGdldFNwZWVkOiBmYWxzZVxufTtcblxuLyoqXG4gKiBNYW5hZ2UgYW5pbWF0aW9uIG9mIGVsZW1lbnRzIG9uIHRoZSBwYWdlIGFjY29yZGluZyB0byBzY3JvbGwgcG9zaXRpb24uXG4gKlxuICogQHRvZG8gIE1hbmFnZSBzb21lIG9wdGlvbnMgKG5vcm1hbGx5IGZyb20gZGF0YSBhdHRyaWJ1dGVzKSB3aXRoIGNvbnN0cnVjdG9yIG9wdGlvbnMgKGV4Ljogc2V0IHJlcGVhdCBmb3IgYWxsKVxuICogQHRvZG8gIE1ldGhvZCB0byBnZXQgdGhlIGRpc3RhbmNlIChhcyBwZXJjZW50YWdlKSBvZiBhbiBlbGVtZW50IGluIHRoZSB2aWV3cG9ydFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuXG4gICAgICAgIHRoaXMuJGNvbnRhaW5lciA9IChvcHRpb25zLmNvbnRhaW5lcikgPyBvcHRpb25zLmNvbnRhaW5lciA6IERFRkFVTFRTLmNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IChvcHRpb25zLnNlbGVjdG9yKSA/IG9wdGlvbnMuc2VsZWN0b3IgOiBERUZBVUxUUy5zZWxlY3RvcjtcblxuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IHtcbiAgICAgICAgICAgIG9uU2Nyb2xsOiB0eXBlb2Ygb3B0aW9ucy5vblNjcm9sbCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMub25TY3JvbGwgOiBERUZBVUxUUy5vblNjcm9sbFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICBkaXJlY3Rpb246ICcnXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndpbmRvd0hlaWdodCA9ICR3aW5kb3cuaGVpZ2h0KCk7XG4gICAgICAgIHRoaXMud2luZG93TWlkZGxlID0gdGhpcy53aW5kb3dIZWlnaHQgLyAyO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0ZWRFbGVtZW50cyA9IFtdO1xuXG4gICAgICAgIHRoaXMucmVxdWVzdElkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgc2Nyb2xsaW5nIGFuaW1hdGlvbnNcbiAgICAgKi9cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJBbmltYXRpb25zKCk7XG5cbiAgICAgICAgLy8gT24gc2Nyb2xsXG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFVkVOVC5TQ1JPTEwsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQW5pbWF0aW9ucygpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZWJ1aWxkIGV2ZW50XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFVkVOVC5SRUJVSUxELCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICB0YXJnZXRPZmZzZXQ6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVFbGVtZW50cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgZXZlbnRcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEVWRU5ULlVQREFURSwgKGV2ZW50LCBvcHRpb25zKSA9PiB0aGlzLnVwZGF0ZUVsZW1lbnRzKG9wdGlvbnMpKTtcblxuICAgICAgICAvLyBSZW5kZXIgZXZlbnRcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEVWRU5ULlJFTkRFUiwgKCkgPT4gdGhpcy5yZW5kZXJBbmltYXRpb25zKCkpO1xuXG4gICAgICAgIC8vIFNjcm9sbHRvIGJ1dHRvbiBldmVudFxuICAgICAgICB0aGlzLiRjb250YWluZXIub24oRVZFTlQuQ0xJQ0ssICcuanMtc2Nyb2xsdG8nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGxldCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSAkdGFyZ2V0LmRhdGEoJ29mZnNldCcpO1xuXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICBzb3VyY2VFbGVtOiAkdGFyZ2V0LFxuICAgICAgICAgICAgICAgIG9mZnNldEVsZW06IG9mZnNldFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiRjb250YWluZXIub24oRVZFTlQuU0NST0xMVE8sIChldmVudCkgPT4gdGhpcy5zY3JvbGxUbyhldmVudC5vcHRpb25zKSk7XG5cbiAgICAgICAgLy8gU2V0dXAgZG9uZVxuICAgICAgICAkZG9jdW1lbnQudHJpZ2dlckhhbmRsZXIoe1xuICAgICAgICAgICAgdHlwZTogRVZFTlQuSVNSRUFEWVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZXNpemUgZXZlbnRcbiAgICAgICAgJHdpbmRvdy5vbihFVkVOVC5SRVNJWkUsIGRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRWxlbWVudHMoKVxuICAgICAgICB9LCAyMCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgYWxsIGFuaW1hdGFibGUgZWxlbWVudHMuXG4gICAgICogQ2FsbGVkIG9uIHBhZ2UgbG9hZCBhbmQgYW55IHN1YnNlcXVlbnQgdXBkYXRlcy5cbiAgICAgKi9cbiAgICBhZGRFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy5hbmltYXRlZEVsZW1lbnRzID0gW107XG5cbiAgICAgICAgY29uc3QgJGVsZW1lbnRzID0gJCh0aGlzLnNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgbGVuID0gJGVsZW1lbnRzLmxlbmd0aDtcbiAgICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpICsrKSB7XG4gICAgICAgICAgICBsZXQgJGVsZW1lbnQgPSAkZWxlbWVudHMuZXEoaSk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFRhcmdldCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtdGFyZ2V0Jyk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFBvc2l0aW9uID0gJGVsZW1lbnQuYXR0cignZGF0YS1wb3NpdGlvbicpO1xuICAgICAgICAgICAgbGV0ICR0YXJnZXQgPSAoZWxlbWVudFRhcmdldCAmJiAkKGVsZW1lbnRUYXJnZXQpLmxlbmd0aCkgPyAkKGVsZW1lbnRUYXJnZXQpIDogJGVsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgZWxlbWVudE9mZnNldCA9ICR0YXJnZXQub2Zmc2V0KCkudG9wO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRMaW1pdCA9IGVsZW1lbnRPZmZzZXQgKyAkdGFyZ2V0Lm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFN0aWNreSA9ICh0eXBlb2YgJGVsZW1lbnQuYXR0cignZGF0YS1zdGlja3knKSA9PT0gJ3N0cmluZycpO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRTdGlja3lUYXJnZXQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLXN0aWNreS10YXJnZXQnKTtcblxuICAgICAgICAgICAgbGV0IGVsZW1lbnRWaWV3cG9ydE9mZnNldCA9IG51bGw7XG4gICAgICAgICAgICBpZih0eXBlb2YgJGVsZW1lbnQuYXR0cignZGF0YS12aWV3cG9ydC1vZmZzZXQnKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgIGVsZW1lbnRWaWV3cG9ydE9mZnNldCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtdmlld3BvcnQtb2Zmc2V0Jykuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vTWFuYWdlIGNhbGxiYWNrXG4gICAgICAgICAgICBsZXQgZWxlbWVudENhbGxiYWNrU3RyaW5nID0gKHR5cGVvZiAkZWxlbWVudC5hdHRyKCdkYXRhLWNhbGxiYWNrJykgPT09ICdzdHJpbmcnKSA/ICRlbGVtZW50LmF0dHIoJ2RhdGEtY2FsbGJhY2snKSA6IG51bGw7XG4gICAgICAgICAgICBsZXQgZWxlbWVudENhbGxiYWNrID0gbnVsbDtcblxuICAgICAgICAgICAgaWYoZWxlbWVudENhbGxiYWNrU3RyaW5nICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGxldCBldmVudCA9IGVsZW1lbnRDYWxsYmFja1N0cmluZy5zdWJzdHIoMCwgZWxlbWVudENhbGxiYWNrU3RyaW5nLmluZGV4T2YoJygnKSk7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnNTdHJpbmcgPSBlbGVtZW50Q2FsbGJhY2tTdHJpbmcuc3Vic3RyKGVsZW1lbnRDYWxsYmFja1N0cmluZy5pbmRleE9mKCcoJyksZWxlbWVudENhbGxiYWNrU3RyaW5nLmxlbmd0aCAtIGV2ZW50Lmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICBvcHRpb25zU3RyaW5nID0gb3B0aW9uc1N0cmluZy5yZXBsYWNlKCcoJywnJyk7XG4gICAgICAgICAgICAgICAgb3B0aW9uc1N0cmluZyA9IG9wdGlvbnNTdHJpbmcucmVwbGFjZSgnKScsJycpO1xuXG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSBvcHRpb25zU3RyaW5nLnNwbGl0KCd8Jyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge307XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG9wdGlvbnMubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gb3B0aW9uc1tqXS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25bMF0gPSBvcHRpb25bMF0ucmVwbGFjZSgnICcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWw7XG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgdmFsdWUgaXMgYSBib29sZWFuXG4gICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvblsxXSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihvcHRpb25bMV0gPT09IFwiZmFsc2VcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YWx1ZSBpcyBudW1lcmljXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoL15cXGQrJC8udGVzdChvcHRpb25bMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBwYXJzZUludChvcHRpb25bMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgdmFsdWUgaXMgYSBTdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBvcHRpb25bMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb2JqW29wdGlvblswXV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxlbWVudENhbGxiYWNrID0ge2V2ZW50OmV2ZW50LCBvcHRpb25zOm9ian07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGVsZW1lbnRzIGxvc2VzIGl0cyBhbmltYXRpb24gYWZ0ZXIgc2Nyb2xsaW5nIHBhc3QgaXRcbiAgICAgICAgICAgIGxldCBlbGVtZW50UmVwZWF0ID0gKHR5cGVvZiAkZWxlbWVudC5hdHRyKCdkYXRhLXJlcGVhdCcpID09PSAnc3RyaW5nJyk7XG5cbiAgICAgICAgICAgIGxldCBlbGVtZW50SW5WaWV3Q2xhc3MgPSAkZWxlbWVudC5hdHRyKCdkYXRhLWludmlldy1jbGFzcycpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50SW5WaWV3Q2xhc3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudEluVmlld0NsYXNzID0gJ2lzLXNob3cnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudFN0aWNreSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudFN0aWNreVRhcmdldCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudExpbWl0ID0gdGhpcy4kY29udGFpbmVyLmhlaWdodCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRMaW1pdCA9ICQoZWxlbWVudFN0aWNreVRhcmdldCkub2Zmc2V0KCkudG9wIC0gJGVsZW1lbnQuaGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgb2Zmc2V0XG4gICAgICAgICAgICAgICAgJGVsZW1lbnQucmVtb3ZlQ2xhc3MoZWxlbWVudEluVmlld0NsYXNzKTtcbiAgICAgICAgICAgICAgICAkZWxlbWVudC5yZW1vdmVDbGFzcygnaXMtdW5zdHVjaycpO1xuXG4gICAgICAgICAgICAgICAgJGVsZW1lbnQuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyxcbiAgICAgICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEb24ndCBhZGQgZWxlbWVudCBpZiBpdCBhbHJlYWR5IGhhcyBpdHMgaW52aWV3IGNsYXNzIGFuZCBkb2Vzbid0IHJlcGVhdFxuICAgICAgICAgICAgaWYgKGVsZW1lbnRSZXBlYXQgfHwgISRlbGVtZW50Lmhhc0NsYXNzKGVsZW1lbnRJblZpZXdDbGFzcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHNbaV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICRlbGVtZW50OiAkZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBNYXRoLnJvdW5kKGVsZW1lbnRPZmZzZXQpLFxuICAgICAgICAgICAgICAgICAgICByZXBlYXQ6IGVsZW1lbnRSZXBlYXQsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBlbGVtZW50UG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiBlbGVtZW50TGltaXQsXG4gICAgICAgICAgICAgICAgICAgIGluVmlld0NsYXNzOiBlbGVtZW50SW5WaWV3Q2xhc3MsXG4gICAgICAgICAgICAgICAgICAgIHN0aWNreTogZWxlbWVudFN0aWNreSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGVsZW1lbnRDYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnRPZmZzZXQ6IGVsZW1lbnRWaWV3cG9ydE9mZnNldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb29wIHRocm91Z2ggYWxsIGFuaW1hdGFibGUgZWxlbWVudHMgYW5kIGFwcGx5IGFuaW1hdGlvbiBtZXRob2QocykuXG4gICAgICovXG4gICAgYW5pbWF0ZUVsZW1lbnRzKCkge1xuICAgICAgICBjb25zdCBsZW4gPSB0aGlzLmFuaW1hdGVkRWxlbWVudHMubGVuZ3RoO1xuICAgICAgICBjb25zdCByZW1vdmVJbmRleGVzID0gW107XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmFuaW1hdGVkRWxlbWVudHNbaV07XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBlbGVtZW50J3MgdmlzaWJpbGl0eSBtdXN0IG5vdCBiZSBtYW5pcHVsYXRlZCBhbnkgZnVydGhlciwgcmVtb3ZlIGl0IGZyb20gdGhlIGxpc3RcbiAgICAgICAgICAgIGlmICh0aGlzLnRvZ2dsZUVsZW1lbnQoZWxlbWVudCwgaSkpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVJbmRleGVzLnB1c2goaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgYW5pbWF0ZWQgZWxlbWVudHMgYWZ0ZXIgbG9vcGluZyB0aHJvdWdoIGVsZW1lbnRzXG4gICAgICAgIGkgPSByZW1vdmVJbmRleGVzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlZEVsZW1lbnRzLnNwbGljZShyZW1vdmVJbmRleGVzW2ldLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgY2xhc3MgYW5pbWF0aW9ucywgYW5kIHVwZGF0ZSB0aGUgZ2xvYmFsIHNjcm9sbCBwb3NpdGlvbm5pbmcuXG4gICAgICovXG4gICAgcmVuZGVyQW5pbWF0aW9ucygpIHtcbiAgICAgICAgLy8gaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IHRoaXMuc2Nyb2xsLnkpIHtcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnNjcm9sbC5kaXJlY3Rpb24gIT09ICdkb3duJykge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICdkb3duJztcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSBlbHNlIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPCB0aGlzLnNjcm9sbC55KSB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5zY3JvbGwuZGlyZWN0aW9uICE9PSAndXAnKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ3VwJztcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbC55ICE9PSB3aW5kb3cucGFnZVlPZmZzZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnkgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsLnggIT09IHdpbmRvdy5wYWdlWE9mZnNldCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGwueCA9IHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLm9uU2Nyb2xsKHRoaXMuc2Nyb2xsKVxuXG4gICAgICAgIHRoaXMuYW5pbWF0ZUVsZW1lbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGNsYXNzZXMgb24gYW4gZWxlbWVudCBpZiBpdCdzIHZpc2libGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9ICAgICAgZWxlbWVudCBDdXJyZW50IGVsZW1lbnQgdG8gdGVzdFxuICAgICAqIEBwYXJhbSAge2ludH0gICAgICAgICBpbmRleCAgIEluZGV4IG9mIHRoZSBlbGVtZW50IHdpdGhpbiBpdCdzIGNvbnRhaW5lclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59ICAgICAgICAgICAgIFdldGhlciB0aGUgaXRlbSBtdXN0IGJlIHJlbW92ZWQgZnJvbSBpdHMgY29udGFpbmVyXG4gICAgICovXG4gICAgdG9nZ2xlRWxlbWVudChlbGVtZW50LCBpbmRleCkge1xuICAgICAgICBsZXQgcmVtb3ZlRnJvbUNvbnRhaW5lciA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGJvdHRvbSBlZGdlIG9mIHRoZSBzY3JvbGwgY29udGFpbmVyXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLnNjcm9sbC55O1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsQm90dG9tID0gc2Nyb2xsVG9wICsgdGhpcy53aW5kb3dIZWlnaHQ7XG5cbiAgICAgICAgICAgIC8vIERlZmluZSBpZiB0aGUgZWxlbWVudCBpcyBpblZpZXdcbiAgICAgICAgICAgIGxldCBpblZpZXcgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQucG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICAgICAgICAgICAgaW5WaWV3ID0gKHNjcm9sbFRvcCA+PSBlbGVtZW50Lm9mZnNldCAmJiBzY3JvbGxUb3AgPD0gZWxlbWVudC5saW1pdCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQucG9zaXRpb24gPT09ICdiZWxvdycpIHtcbiAgICAgICAgICAgICAgICBpblZpZXcgPSAoc2Nyb2xsVG9wID4gZWxlbWVudC5saW1pdCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuc3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgaW5WaWV3ID0gKHNjcm9sbFRvcCA+PSBlbGVtZW50Lm9mZnNldCAmJiBzY3JvbGxUb3AgPD0gZWxlbWVudC5saW1pdCk7XG4gICAgICAgICAgICB9ZWxzZSBpZihlbGVtZW50LnZpZXdwb3J0T2Zmc2V0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQudmlld3BvcnRPZmZzZXQubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsVmlld3BvcnRPZmZzZXRUb3AgPSBzY3JvbGxUb3AgKyAodGhpcy53aW5kb3dIZWlnaHQgKiBlbGVtZW50LnZpZXdwb3J0T2Zmc2V0WzFdKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbFZpZXdwb3J0T2Zmc2V0Qm90dG9tID0gc2Nyb2xsQm90dG9tIC0gKHRoaXMud2luZG93SGVpZ2h0ICogZWxlbWVudC52aWV3cG9ydE9mZnNldFswXSk7XG4gICAgICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxWaWV3cG9ydE9mZnNldEJvdHRvbSA+IGVsZW1lbnQub2Zmc2V0ICYmIHNjcm9sbFZpZXdwb3J0T2Zmc2V0VG9wIDwgZWxlbWVudC5saW1pdCk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsVmlld3BvcnRPZmZzZXQgPSBzY3JvbGxCb3R0b20gLSAodGhpcy53aW5kb3dIZWlnaHQgKiBlbGVtZW50LnZpZXdwb3J0T2Zmc2V0WzBdKTtcbiAgICAgICAgICAgICAgICAgICAgaW5WaWV3ID0gKHNjcm9sbFZpZXdwb3J0T2Zmc2V0ID4gZWxlbWVudC5vZmZzZXQgJiYgc2Nyb2xsVmlld3BvcnRPZmZzZXQgPCBlbGVtZW50LmxpbWl0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5WaWV3ID0gKHNjcm9sbEJvdHRvbSA+PSBlbGVtZW50Lm9mZnNldCAmJiBzY3JvbGxUb3AgPD0gZWxlbWVudC5saW1pdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50LnN0aWNreSkge1xuICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPiBlbGVtZW50LmxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuJGVsZW1lbnQuYWRkQ2xhc3MoJ2lzLXVuc3R1Y2snKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LiRlbGVtZW50LnJlbW92ZUNsYXNzKCdpcy11bnN0dWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8IGVsZW1lbnQub2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoZWxlbWVudC5pblZpZXdDbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBZGQgY2xhc3MgaWYgaW5WaWV3LCByZW1vdmUgaWYgbm90XG4gICAgICAgICAgICBpZiAoaW5WaWV3KSB7XG4gICAgICAgICAgICAgICAgaWYoIWVsZW1lbnQuJGVsZW1lbnQuaGFzQ2xhc3MoZWxlbWVudC5pblZpZXdDbGFzcykpe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LiRlbGVtZW50LmFkZENsYXNzKGVsZW1lbnQuaW5WaWV3Q2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJDYWxsYmFjayhlbGVtZW50LCdlbnRlcicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghZWxlbWVudC5yZXBlYXQgJiYgIWVsZW1lbnQuc3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUZyb21Db250YWluZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnN0aWNreSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IHRoaXMuc2Nyb2xsLnkgLSBlbGVtZW50Lm9mZnNldDtcblxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LiRlbGVtZW50LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiBgdHJhbnNsYXRlM2QoMCwgJHt5fXB4LCAwKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IGB0cmFuc2xhdGUzZCgwLCAke3l9cHgsIDApYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiBgdHJhbnNsYXRlM2QoMCwgJHt5fXB4LCAwKWBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5yZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC4kZWxlbWVudC5oYXNDbGFzcyhlbGVtZW50LmluVmlld0NsYXNzKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LiRlbGVtZW50LnJlbW92ZUNsYXNzKGVsZW1lbnQuaW5WaWV3Q2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyQ2FsbGJhY2soZWxlbWVudCwnbGVhdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZW1vdmVGcm9tQ29udGFpbmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNoZWNrIGlmIHRoZSBlbGVtZW50IGhhdmUgYSBjYWxsYmFjaywgYW5kIHRyaWdnZXIgdGhlIGV2ZW50IHNldCBpbiB0aGUgZGF0YS1jYWxsYmFja1xuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSAgICAgIGVsZW1lbnQgQ3VycmVudCBlbGVtZW50IHRvIHRlc3RcbiAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgKi9cbiAgICB0cmlnZ2VyQ2FsbGJhY2soZWxlbWVudCx3YXkpe1xuXG4gICAgICAgIGlmKGVsZW1lbnQuY2FsbGJhY2sgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGVsZW1lbnQuJGVsZW1lbnQudHJpZ2dlcih7XG4gICAgICAgICAgICAgICAgdHlwZTogZWxlbWVudC5jYWxsYmFjay5ldmVudCxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBlbGVtZW50LmNhbGxiYWNrLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgd2F5OiB3YXlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9hZGQgdGhpcyB3aGVyZSB5b3Ugd2FudCBkdWRlIChpbiB5b3VyIG1vZHVsZSBidHcpXG4gICAgICAgICAgICAvLyAkZG9jdW1lbnQub24oZXZlbnROYW1lLk5hbWVzcGFjZSwoZSk9PntcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlLm9wdGlvbnMsIGUud2F5KTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdG8gYSBkZXNpcmVkIHRhcmdldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2Nyb2xsVG8ob3B0aW9ucykge1xuICAgICAgICBjb25zdCAkdGFyZ2V0RWxlbSA9IG9wdGlvbnMudGFyZ2V0RWxlbTtcbiAgICAgICAgY29uc3QgJHNvdXJjZUVsZW0gPSBvcHRpb25zLnNvdXJjZUVsZW07XG4gICAgICAgIGNvbnN0IG9mZnNldEVsZW0gPSBvcHRpb25zLm9mZnNldEVsZW07XG4gICAgICAgIGxldCB0YXJnZXRPZmZzZXQgPSBpc051bWVyaWMob3B0aW9ucy50YXJnZXRPZmZzZXQpID8gcGFyc2VJbnQob3B0aW9ucy50YXJnZXRPZmZzZXQpIDogMDtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBpc051bWVyaWMob3B0aW9ucy5zcGVlZCkgPyBwYXJzZUludChvcHRpb25zLnNwZWVkKSA6IDgwMDtcbiAgICAgICAgY29uc3QgZGVsYXkgPSBpc051bWVyaWMob3B0aW9ucy5kZWxheSkgPyBwYXJzZUludChvcHRpb25zLmRlbGF5KSA6IDA7XG4gICAgICAgIGNvbnN0IHRvVG9wID0gb3B0aW9ucy50b1RvcDtcbiAgICAgICAgY29uc3QgdG9Cb3R0b20gPSBvcHRpb25zLnRvQm90dG9tO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcblxuICAgICAgICBpZiAodHlwZW9mICR0YXJnZXRFbGVtID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgJHNvdXJjZUVsZW0gPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0YXJnZXRPZmZzZXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1lvdSBtdXN0IHNwZWNpZnkgYXQgbGVhc3Qgb25lIHBhcmFtZXRlci4nKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkdGFyZ2V0RWxlbSAhPT0gJ3VuZGVmaW5lZCcgJiYgJHRhcmdldEVsZW0gaW5zdGFuY2VvZiBqUXVlcnkgJiYgJHRhcmdldEVsZW0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gJHRhcmdldEVsZW0ub2Zmc2V0KCkudG9wICsgdGFyZ2V0T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkc291cmNlRWxlbSAhPT0gJ3VuZGVmaW5lZCcgJiYgJHNvdXJjZUVsZW0gaW5zdGFuY2VvZiBqUXVlcnkgJiYgJHNvdXJjZUVsZW0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHRhcmdldERhdGEgPSAnJztcblxuICAgICAgICAgICAgaWYgKCRzb3VyY2VFbGVtLmF0dHIoJ2RhdGEtdGFyZ2V0JykpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXREYXRhID0gJHNvdXJjZUVsZW0uYXR0cignZGF0YS10YXJnZXQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0RGF0YSA9ICRzb3VyY2VFbGVtLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gJCh0YXJnZXREYXRhKS5vZmZzZXQoKS50b3AgKyB0YXJnZXRPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIG9mZnNldEVsZW0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAkKG9mZnNldEVsZW0pLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSB0YXJnZXRPZmZzZXQgLSBvZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9Ub3AgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAodG9Cb3R0b20gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9ICRkb2N1bWVudC5oZWlnaHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0T2Zmc2V0XG4gICAgICAgICAgICB9LCBzcGVlZCk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgZWxlbWVudHMgYW5kIHJlY2FsY3VsYXRlIGFsbCB0aGUgcG9zaXRpb25zIG9uIHRoZSBwYWdlXG4gICAgICovXG4gICAgdXBkYXRlRWxlbWVudHMoKSB7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy5hbmltYXRlRWxlbWVudHMoKTtcblxuICAgICAgICB0aGlzLndpbmRvd0hlaWdodCA9ICR3aW5kb3cuaGVpZ2h0KCk7XG4gICAgICAgIHRoaXMud2luZG93TWlkZGxlID0gdGhpcy53aW5kb3dIZWlnaHQgLyAyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3lcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICAkd2luZG93Lm9mZihgLiR7RVZFTlRfS0VZfWApO1xuICAgICAgICB0aGlzLiRjb250YWluZXIub2ZmKGAuJHtFVkVOVF9LRVl9YCk7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJlcXVlc3RJZCk7XG4gICAgICAgIHRoaXMucmVxdWVzdElkID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMgPSB1bmRlZmluZWQ7XG4gICAgfVxufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvY29tb3RpdmUgU2Nyb2xsIE1hbmFnZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgeyAkZG9jdW1lbnQsICR3aW5kb3csICRodG1sLCAkYm9keSB9IGZyb20gJy4uLy4uL3V0aWxzL2Vudmlyb25tZW50JztcbmltcG9ydCBTY3JvbGwsIHsgREVGQVVMVFMsIEVWRU5UIH0gZnJvbSAnLi4vU2Nyb2xsJztcbmltcG9ydCBTbW9vdGhTY3JvbGwgZnJvbSAnLi4vU21vb3RoU2Nyb2xsJztcblxuLyoqXG4gKiBCYXNpYyBtb2R1bGUgdGhhdCBkZXRlY3RzIHdoaWNoIHNjcm9sbGluZyBtb2R1bGUgd2UnbGwgYmUgdXNpbmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5zbW9vdGggPSBvcHRpb25zLnNtb290aCB8fCBERUZBVUxUUy5zbW9vdGg7XG4gICAgICAgIHRoaXMuc21vb3RoTW9iaWxlID0gb3B0aW9ucy5zbW9vdGhNb2JpbGUgfHwgREVGQVVMVFMuc21vb3RoTW9iaWxlO1xuICAgICAgICB0aGlzLm1vYmlsZUNvbnRhaW5lciA9IG9wdGlvbnMubW9iaWxlQ29udGFpbmVyIHx8IERFRkFVTFRTLm1vYmlsZUNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5pc01vYmlsZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgICRodG1sWzBdLnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICRib2R5WzBdLnNjcm9sbFRvcCA9IDA7XG5cbiAgICAgICAgaWYgKCF0aGlzLnNtb290aE1vYmlsZSkge1xuICAgICAgICAgICAgdGhpcy5pc01vYmlsZSA9ICgvQW5kcm9pZHxpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9ICgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zbW9vdGggPT09IHRydWUgJiYgIXRoaXMuaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNtb290aFNjcm9sbCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb2JpbGVDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNvbnRhaW5lciA9IHRoaXMubW9iaWxlQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU2Nyb2xsKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZS5pbml0KCk7XG5cbiAgICAgICAgY29uc3QgJHNjcm9sbFRvT25Mb2FkRWwgPSAkKCcuanMtc2Nyb2xsdG8tb24tbG9hZCcpLmZpcnN0KCk7XG5cbiAgICAgICAgaWYgKCRzY3JvbGxUb09uTG9hZEVsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgJGRvY3VtZW50LnRyaWdnZXJIYW5kbGVyKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnRXZlbnQuU0NST0xMVE8nLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RWxlbTogJHNjcm9sbFRvT25Mb2FkRWxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH1cbn1cbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2NvbW90aXZlIFNtb290aCBTY3JvbGxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgeyAkd2luZG93LCAkZG9jdW1lbnQsICRodG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IFNjcm9sbCwgeyBERUZBVUxUUywgRVZFTlQgfSBmcm9tICcuLi9TY3JvbGwnO1xuXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vLi4vdXRpbHMvZGVib3VuY2UnO1xuaW1wb3J0IFNjcm9sbGJhciBmcm9tICdzbW9vdGgtc2Nyb2xsYmFyJztcbmltcG9ydCB7IGlzTnVtZXJpYyB9IGZyb20gJy4uLy4uL3V0aWxzL2lzJztcblxuLyoqXG4gKiBTbW9vdGggc2Nyb2xsaW5nIHVzaW5nIGBzbW9vdGgtc2Nyb2xsYmFyYC5cbiAqIEJhc2VkIG9uIGBTY3JvbGxgIGNsYXNzLCB3aGljaCBhbGxvd3MgYW5pbWF0aW9ucyBvZiBlbGVtZW50cyBvbiB0aGUgcGFnZVxuICogYWNjb3JkaW5nIHRvIHNjcm9sbCBwb3NpdGlvbi5cbiAqXG4gKiBAdG9kbyAgTWV0aG9kIHRvIGdldCB0aGUgZGlzdGFuY2UgKGFzIHBlcmNlbnRhZ2UpIG9mIGFuIGVsZW1lbnQgaW4gdGhlIHZpZXdwb3J0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgU2Nyb2xsIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuaXNSZXZlcnNlZCA9IG9wdGlvbnMucmV2ZXJzZWQgfHwgREVGQVVMVFMucmV2ZXJzZWQ7XG4gICAgICAgIHRoaXMuZ2V0V2F5ID0gb3B0aW9ucy5nZXRXYXkgfHwgREVGQVVMVFMuZ2V0V2F5O1xuICAgICAgICB0aGlzLmdldFNwZWVkID0gb3B0aW9ucy5nZXRTcGVlZCB8fCBERUZBVUxUUy5nZXRTcGVlZDtcblxuICAgICAgICB0aGlzLnBhcmFsbGF4RWxlbWVudHMgPSBbXTtcblxuXG4gICAgICAgIGlmKHRoaXMuZ2V0U3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnNwZWVkID0gMDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBzY3JvbGxpbmcgYW5pbWF0aW9uc1xuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIEFkZCBjbGFzcyB0byB0aGUgZG9jdW1lbnQgdG8ga25vdyBpZiBTbW9vdGhTY3JvbGwgaXMgaW5pdGlhbGl6ZWQgKHRvIG1hbmFnZSBvdmVyZmxvdyBvbiBjb250YWluZXJzKVxuICAgICAgICAkaHRtbC5hZGRDbGFzcygnaGFzLXNtb290aC1zY3JvbGwnKTtcblxuICAgICAgICB0aGlzLnNjcm9sbGJhciA9IFNjcm9sbGJhci5pbml0KHRoaXMuJGNvbnRhaW5lclswXSx7XG4gICAgICAgICAgICBzeW5jQ2FsbGJhY2tzOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyU3RhdHVzID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsYmFyTGltaXQoKTtcblxuICAgICAgICB0aGlzLnNldFdoZWVsRGlyZWN0aW9uKHRoaXMuaXNSZXZlcnNlZCk7XG5cbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyQW5pbWF0aW9ucyh0cnVlKTtcblxuICAgICAgICAvLyBPbiBzY3JvbGxcbiAgICAgICAgdGhpcy5zY3JvbGxiYXIuYWRkTGlzdGVuZXIoKHN0YXR1cykgPT4gdGhpcy5yZW5kZXJBbmltYXRpb25zKGZhbHNlLCBzdGF0dXMpKTtcblxuICAgICAgICAvLyBSZWJ1aWxkIGV2ZW50XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFVkVOVC5SRUJVSUxELCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbGJhci5zY3JvbGxUbygwLCAwLCAxKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRWxlbWVudHMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIGV2ZW50XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFVkVOVC5VUERBVEUsIChldmVudCwgb3B0aW9ucykgPT4gdGhpcy51cGRhdGVFbGVtZW50cyhvcHRpb25zKSk7XG5cbiAgICAgICAgLy8gUmVuZGVyIGV2ZW50XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFVkVOVC5SRU5ERVIsICgpID0+IHRoaXMucmVuZGVyQW5pbWF0aW9ucyhmYWxzZSkpO1xuXG4gICAgICAgIC8vIFNjcm9sbHRvIGJ1dHRvbiBldmVudFxuICAgICAgICB0aGlzLiRjb250YWluZXIub24oRVZFTlQuQ0xJQ0ssICcuanMtc2Nyb2xsdG8nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGxldCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSAkdGFyZ2V0LmRhdGEoJ29mZnNldCcpO1xuXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICBzb3VyY2VFbGVtOiAkdGFyZ2V0LFxuICAgICAgICAgICAgICAgIG9mZnNldEVsZW06IG9mZnNldFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFVkVOVC5TQ1JPTExUTywgKGV2ZW50KSA9PiB0aGlzLnNjcm9sbFRvKGV2ZW50Lm9wdGlvbnMpKTtcblxuICAgICAgICAvLyBTZXR1cCBkb25lXG4gICAgICAgICRkb2N1bWVudC50cmlnZ2VySGFuZGxlcih7XG4gICAgICAgICAgICB0eXBlOiBFVkVOVC5JU1JFQURZXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJlc2l6ZSBldmVudFxuICAgICAgICAkd2luZG93Lm9uKEVWRU5ULlJFU0laRSwgZGVib3VuY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVFbGVtZW50cygpXG4gICAgICAgIH0sIDIwKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgZXhpc3RpbmcgZWxlbWVudHMgYW5kIGZpbmQgYWxsIGFuaW1hdGFibGUgZWxlbWVudHMuXG4gICAgICogQ2FsbGVkIG9uIHBhZ2UgbG9hZCBhbmQgYW55IHN1YnNlcXVlbnQgdXBkYXRlcy5cbiAgICAgKi9cbiAgICBhZGRFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy5hbmltYXRlZEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMucGFyYWxsYXhFbGVtZW50cyA9IFtdO1xuXG4gICAgICAgIGNvbnN0ICRlbGVtZW50cyA9ICQodGhpcy5zZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IGxlbiA9ICRlbGVtZW50cy5sZW5ndGg7XG4gICAgICAgIGxldCBpID0gMDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSArKykge1xuICAgICAgICAgICAgbGV0ICRlbGVtZW50ID0gJGVsZW1lbnRzLmVxKGkpO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRTcGVlZCA9IGlzTnVtZXJpYygkZWxlbWVudC5hdHRyKCdkYXRhLXNwZWVkJykpID8gJGVsZW1lbnQuYXR0cignZGF0YS1zcGVlZCcpIC8gMTAgOiBmYWxzZTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50UG9zaXRpb24gPSAkZWxlbWVudC5hdHRyKCdkYXRhLXBvc2l0aW9uJyk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFRhcmdldCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtdGFyZ2V0Jyk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudEhvcml6b250YWwgPSAkZWxlbWVudC5hdHRyKCdkYXRhLWhvcml6b250YWwnKTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50U3RpY2t5ID0gKHR5cGVvZiAkZWxlbWVudC5hdHRyKCdkYXRhLXN0aWNreScpID09PSAnc3RyaW5nJyk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFN0aWNreVRhcmdldCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtc3RpY2t5LXRhcmdldCcpO1xuICAgICAgICAgICAgbGV0ICR0YXJnZXQgPSAoZWxlbWVudFRhcmdldCAmJiAkKGVsZW1lbnRUYXJnZXQpLmxlbmd0aCkgPyAkKGVsZW1lbnRUYXJnZXQpIDogJGVsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgZWxlbWVudE9mZnNldCA9ICR0YXJnZXQub2Zmc2V0KCkudG9wICsgdGhpcy5zY3JvbGxiYXIuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRMaW1pdCA9IGVsZW1lbnRPZmZzZXQgKyAkdGFyZ2V0Lm91dGVySGVpZ2h0KCk7XG5cbiAgICAgICAgICAgIGxldCBlbGVtZW50Vmlld3BvcnRPZmZzZXQgPSBudWxsO1xuICAgICAgICAgICAgaWYodHlwZW9mICRlbGVtZW50LmF0dHIoJ2RhdGEtdmlld3BvcnQtb2Zmc2V0JykgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICBlbGVtZW50Vmlld3BvcnRPZmZzZXQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLXZpZXdwb3J0LW9mZnNldCcpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vTWFuYWdlIGNhbGxiYWNrXG4gICAgICAgICAgICBsZXQgZWxlbWVudENhbGxiYWNrU3RyaW5nID0gKHR5cGVvZiAkZWxlbWVudC5hdHRyKCdkYXRhLWNhbGxiYWNrJykgPT09ICdzdHJpbmcnKSA/ICRlbGVtZW50LmF0dHIoJ2RhdGEtY2FsbGJhY2snKSA6IG51bGw7XG4gICAgICAgICAgICBsZXQgZWxlbWVudENhbGxiYWNrID0gbnVsbDtcblxuICAgICAgICAgICAgaWYoZWxlbWVudENhbGxiYWNrU3RyaW5nICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGxldCBldmVudCA9IGVsZW1lbnRDYWxsYmFja1N0cmluZy5zdWJzdHIoMCwgZWxlbWVudENhbGxiYWNrU3RyaW5nLmluZGV4T2YoJygnKSk7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnNTdHJpbmcgPSBlbGVtZW50Q2FsbGJhY2tTdHJpbmcuc3Vic3RyKGVsZW1lbnRDYWxsYmFja1N0cmluZy5pbmRleE9mKCcoJyksZWxlbWVudENhbGxiYWNrU3RyaW5nLmxlbmd0aCAtIGV2ZW50Lmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICBvcHRpb25zU3RyaW5nID0gb3B0aW9uc1N0cmluZy5yZXBsYWNlKCcoJywnJyk7XG4gICAgICAgICAgICAgICAgb3B0aW9uc1N0cmluZyA9IG9wdGlvbnNTdHJpbmcucmVwbGFjZSgnKScsJycpO1xuXG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSBvcHRpb25zU3RyaW5nLnNwbGl0KCd8Jyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge307XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG9wdGlvbnMubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gb3B0aW9uc1tqXS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25bMF0gPSBvcHRpb25bMF0ucmVwbGFjZSgnICcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWw7XG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgdmFsdWUgaXMgYSBib29sZWFuXG4gICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvblsxXSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihvcHRpb25bMV0gPT09IFwiZmFsc2VcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YWx1ZSBpcyBudW1lcmljXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoL15cXGQrJC8udGVzdChvcHRpb25bMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBwYXJzZUludChvcHRpb25bMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgdmFsdWUgaXMgYSBTdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBvcHRpb25bMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb2JqW29wdGlvblswXV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxlbWVudENhbGxiYWNrID0ge2V2ZW50OmV2ZW50LCBvcHRpb25zOm9ian07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGVsZW1lbnRzIHN0YXlzIHZpc2libGUgYWZ0ZXIgc2Nyb2xsaW5nIHBhc3QgaXRcbiAgICAgICAgICAgIGxldCBlbGVtZW50UmVwZWF0ID0gKHR5cGVvZiAkZWxlbWVudC5hdHRyKCdkYXRhLXJlcGVhdCcpID09PSAnc3RyaW5nJyk7XG5cbiAgICAgICAgICAgIGxldCBlbGVtZW50SW5WaWV3Q2xhc3MgPSAkZWxlbWVudC5hdHRyKCdkYXRhLWludmlldy1jbGFzcycpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50SW5WaWV3Q2xhc3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudEluVmlld0NsYXNzID0gJ2lzLXNob3cnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnRUYXJnZXQgJiYgJGVsZW1lbnQuYXR0cignZGF0YS10cmFuc2Zvcm0nKSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRPZmZzZXQgLT0gcGFyc2VGbG9hdCgkZWxlbWVudC5hdHRyKCdkYXRhLXRyYW5zZm9ybScpLnkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudFN0aWNreSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudFN0aWNreVRhcmdldCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudExpbWl0ID0gSW5maW5pdHk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudExpbWl0ID0gJChlbGVtZW50U3RpY2t5VGFyZ2V0KS5vZmZzZXQoKS50b3AgLSAkZWxlbWVudC5oZWlnaHQoKSArIHRoaXMuc2Nyb2xsYmFyLnNjcm9sbFRvcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSB7XG4gICAgICAgICAgICAgICAgJGVsZW1lbnQ6ICRlbGVtZW50LFxuICAgICAgICAgICAgICAgIGluVmlld0NsYXNzOiBlbGVtZW50SW5WaWV3Q2xhc3MsXG4gICAgICAgICAgICAgICAgbGltaXQ6IGVsZW1lbnRMaW1pdCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IE1hdGgucm91bmQoZWxlbWVudE9mZnNldCksXG4gICAgICAgICAgICAgICAgcmVwZWF0OiBlbGVtZW50UmVwZWF0LFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBlbGVtZW50Q2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgdmlld3BvcnRPZmZzZXQ6IGVsZW1lbnRWaWV3cG9ydE9mZnNldFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gRm9yIHBhcmFsbGF4IGFuaW1hdGVkIGVsZW1lbnRzXG4gICAgICAgICAgICBpZiAoZWxlbWVudFNwZWVkICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50UG9zaXRpb24gPSAkZWxlbWVudC5hdHRyKCdkYXRhLXBvc2l0aW9uJyk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRIb3Jpem9udGFsID0gJGVsZW1lbnQuYXR0cignZGF0YS1ob3Jpem9udGFsJyk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRNaWRkbGUgPSAoKGVsZW1lbnRMaW1pdCAtIGVsZW1lbnRPZmZzZXQpIC8gMikgKyBlbGVtZW50T2Zmc2V0O1xuXG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5ob3Jpem9udGFsID0gZWxlbWVudEhvcml6b250YWw7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5taWRkbGUgPSBlbGVtZW50TWlkZGxlO1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQub2Zmc2V0ID0gZWxlbWVudE9mZnNldDtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnBvc2l0aW9uID0gZWxlbWVudFBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuc3BlZWQgPSBlbGVtZW50U3BlZWRcblxuICAgICAgICAgICAgICAgIHRoaXMucGFyYWxsYXhFbGVtZW50cy5wdXNoKG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnN0aWNreSA9IGVsZW1lbnRTdGlja3k7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMucHVzaChuZXdFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIC8vIEB0b2RvIFVzZWZ1bD9cbiAgICAgICAgICAgICAgICAvLyBEb24ndCBhZGQgZWxlbWVudCBpZiBpdCBhbHJlYWR5IGhhcyBpdHMgaW4gdmlldyBjbGFzcyBhbmQgZG9lc24ndCByZXBlYXRcbiAgICAgICAgICAgICAgICAvLyBpZiAoZWxlbWVudFJlcGVhdCB8fCAhJGVsZW1lbnQuaGFzQ2xhc3MoZWxlbWVudEluVmlld0NsYXNzKSkge1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMucHVzaChuZXdFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFN0aWNreSkge1xuICAgICAgICAgICAgICAgICAgICAvL2xhdW5jaCB0aGUgdG9nZ2xlIGZ1bmN0aW9uIHRvIHNldCB0aGUgcG9zaXRpb24gb2YgdGhlIHN0aWNreSBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlRWxlbWVudChuZXdFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBjbGFzcy90cmFuc2Zvcm0gYW5pbWF0aW9ucywgYW5kIHVwZGF0ZSB0aGUgZ2xvYmFsIHNjcm9sbCBwb3NpdGlvbm5pbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSBpc0ZpcnN0Q2FsbCBEZXRlcm1pbmVzIGlmIHRoaXMgaXMgdGhlIGZpcnN0IG9jY3VyZW5jZSBvZiBtZXRob2QgYmVpbmcgY2FsbGVkXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSAgc3RhdHVzICAgICAgT3B0aW9uYWwgc3RhdHVzIG9iamVjdCByZWNlaXZlZCB3aGVuIG1ldGhvZCBpc1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxlZCBieSBzbW9vdGgtc2Nyb2xsYmFyIGluc3RhbmNlIGxpc3RlbmVyLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgcmVuZGVyQW5pbWF0aW9ucyhpc0ZpcnN0Q2FsbCwgc3RhdHVzKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdHVzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxiYXJTdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzY3JvbGxiYXJUb3AgPSB0aGlzLnNjcm9sbGJhci5zY3JvbGxUb3A7XG5cbiAgICAgICAgaWYodGhpcy5nZXRXYXkpe1xuICAgICAgICAgICAgaWYgKHNjcm9sbGJhclRvcCA+IHRoaXMuc2Nyb2xsLnkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGwuZGlyZWN0aW9uICE9PSAnZG93bicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ2Rvd24nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsYmFyVG9wIDwgdGhpcy5zY3JvbGwueSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbC5kaXJlY3Rpb24gIT09ICd1cCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ3VwJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmdldFNwZWVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGwueSAhPT0gc2Nyb2xsYmFyVG9wKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGwuc3BlZWQgPSB0aGlzLnNjcm9sbGJhci5tb3ZlbWVudC55O1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnkgPSBzY3JvbGxiYXJUb3A7XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGwuc3BlZWQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsLnkgIT09IHNjcm9sbGJhclRvcCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGwueSA9IHNjcm9sbGJhclRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudHMoaXNGaXJzdENhbGwpO1xuICAgICAgICB0aGlzLmFuaW1hdGVFbGVtZW50cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0byBhIGRlc2lyZWQgdGFyZ2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzY3JvbGxUbyhvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0ICR0YXJnZXRFbGVtID0gb3B0aW9ucy50YXJnZXRFbGVtO1xuICAgICAgICBjb25zdCAkc291cmNlRWxlbSA9IG9wdGlvbnMuc291cmNlRWxlbTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0RWxlbSA9IG9wdGlvbnMub2Zmc2V0RWxlbTtcbiAgICAgICAgbGV0IHRhcmdldE9mZnNldCA9IGlzTnVtZXJpYyhvcHRpb25zLnRhcmdldE9mZnNldCkgPyBwYXJzZUludChvcHRpb25zLnRhcmdldE9mZnNldCkgOiAwO1xuICAgICAgICBjb25zdCBkZWxheSA9IGlzTnVtZXJpYyhvcHRpb25zLmRlbGF5KSA/IHBhcnNlSW50KG9wdGlvbnMuZGVsYXkpIDogMDtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBpc051bWVyaWMob3B0aW9ucy5zcGVlZCkgPyBwYXJzZUludChvcHRpb25zLnNwZWVkKSA6IDkwMDtcbiAgICAgICAgY29uc3QgdG9Ub3AgPSBvcHRpb25zLnRvVG9wO1xuICAgICAgICBjb25zdCB0b0JvdHRvbSA9IG9wdGlvbnMudG9Cb3R0b207XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgICAgIGlmICh0eXBlb2YgJHRhcmdldEVsZW0gPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiAkc291cmNlRWxlbSA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRhcmdldE9mZnNldCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignWW91IG11c3Qgc3BlY2lmeSBhdCBsZWFzdCBvbmUgcGFyYW1ldGVyLicpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mICR0YXJnZXRFbGVtICE9PSAndW5kZWZpbmVkJyAmJiAkdGFyZ2V0RWxlbSBpbnN0YW5jZW9mIGpRdWVyeSAmJiAkdGFyZ2V0RWxlbS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSAkdGFyZ2V0RWxlbS5vZmZzZXQoKS50b3AgKyB0aGlzLnNjcm9sbGJhci5zY3JvbGxUb3AgKyB0YXJnZXRPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mICRzb3VyY2VFbGVtICE9PSAndW5kZWZpbmVkJyAmJiAkc291cmNlRWxlbSBpbnN0YW5jZW9mIGpRdWVyeSAmJiAkc291cmNlRWxlbS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0RGF0YSA9ICcnO1xuXG4gICAgICAgICAgICBpZiAoJHNvdXJjZUVsZW0uYXR0cignZGF0YS10YXJnZXQnKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldERhdGEgPSAkc291cmNlRWxlbS5hdHRyKCdkYXRhLXRhcmdldCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXREYXRhID0gJHNvdXJjZUVsZW0uYXR0cignaHJlZicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSAkKHRhcmdldERhdGEpLm9mZnNldCgpLnRvcCArIHRoaXMuc2Nyb2xsYmFyLnNjcm9sbFRvcCArIHRhcmdldE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0RWxlbSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9mZnNldCA9ICQob2Zmc2V0RWxlbSkub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9IHRhcmdldE9mZnNldCAtIG9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b1RvcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh0b0JvdHRvbSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gdGhpcy5zY3JvbGxiYXIubGltaXQueTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxiYXIuc2Nyb2xsVG8oMCwgdGFyZ2V0T2Zmc2V0LCBzcGVlZCk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHNjcm9sbCBiYXIgbGltaXRcbiAgICAgKi9cbiAgICBzZXRTY3JvbGxiYXJMaW1pdCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJMaW1pdCA9IHRoaXMuc2Nyb2xsYmFyLmxpbWl0LnkgKyB0aGlzLndpbmRvd0hlaWdodDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBDU1MgdHJhbnNmb3JtIHByb3BlcnRpZXMgb24gYW4gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge29iamVjdH0gICRlbGVtZW50IFRhcmdldHRlZCBqUXVlcnkgZWxlbWVudFxuICAgICAqIEBwYXJhbSAge2ludH0gICAgIHggICAgICAgIFRyYW5zbGF0ZSB2YWx1ZVxuICAgICAqIEBwYXJhbSAge2ludH0gICAgIHkgICAgICAgIFRyYW5zbGF0ZSB2YWx1ZVxuICAgICAqIEBwYXJhbSAge2ludH0gICAgIHogICAgICAgIFRyYW5zbGF0ZSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdHJhbnNmb3JtRWxlbWVudCgkZWxlbWVudCwgeCwgeSwgeikge1xuICAgICAgICAvLyBEZWZhdWx0c1xuICAgICAgICB4ID0geCB8fCAwO1xuICAgICAgICB5ID0geSB8fCAwO1xuICAgICAgICB6ID0geiB8fCAwO1xuXG4gICAgICAgIC8vIFRyYW5zbGF0ZSBhbmQgc3RvcmUgdGhlIHBvc2l0aW9ubmluZyBhcyBgZGF0YWBcbiAgICAgICAgJGVsZW1lbnQuY3NzKHtcbiAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IGB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgJHt6fXB4KWAsXG4gICAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IGB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgJHt6fXB4KWAsXG4gICAgICAgICAgICAndHJhbnNmb3JtJzogYHRyYW5zbGF0ZTNkKCR7eH1weCwgJHt5fXB4LCAke3p9cHgpYFxuICAgICAgICB9KS5kYXRhKCd0cmFuc2Zvcm0nLHtcbiAgICAgICAgICAgIHggOiB4LFxuICAgICAgICAgICAgeSA6IHksXG4gICAgICAgICAgICB6IDogelxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZmZlY3QgY2hpbGQgZWxlbWVudHMgd2l0aCB0aGUgc2FtZSBwb3NpdGlvbm5pbmdcbiAgICAgICAgLy8gY29uc3QgY2hpbGRyZW4gPSAkZWxlbWVudC5maW5kKHRoaXMuc2VsZWN0b3IpO1xuICAgICAgICAvLyBjb25zdCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIC8vIGxldCBpID0gMDtcbiAgICAgICAgLy8gZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAvLyAgICAgbGV0ICRjaGlsZCA9ICQoY2hpbGRyZW5baV0pO1xuICAgICAgICAvLyAgICAgaWYgKCEkY2hpbGQuZGF0YSgndHJhbnNmb3JtJykpIHtcbiAgICAgICAgLy8gICAgICAgICAkY2hpbGQuZGF0YSgndHJhbnNmb3JtJywge1xuICAgICAgICAvLyAgICAgICAgICAgICB4OiB4LFxuICAgICAgICAvLyAgICAgICAgICAgICB5OiB5LFxuICAgICAgICAvLyAgICAgICAgICAgICB6OiB6XG4gICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb29wIHRocm91Z2ggYWxsIHBhcmFsbGF4LWFibGUgZWxlbWVudHMgYW5kIGFwcGx5IHRyYW5zZm9ybSBtZXRob2QocykuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSBpc0ZpcnN0Q2FsbCBEZXRlcm1pbmVzIGlmIHRoaXMgaXMgdGhlIGZpcnN0IG9jY3VyZW5jZSBvZiBtZXRob2QgYmVpbmcgY2FsbGVkXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICB0cmFuc2Zvcm1FbGVtZW50cyhpc0ZpcnN0Q2FsbCkge1xuICAgICAgICBpZiAodGhpcy5wYXJhbGxheEVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhckJvdHRvbSA9IHRoaXMuc2Nyb2xsYmFyLnNjcm9sbFRvcCArIHRoaXMud2luZG93SGVpZ2h0O1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYmFyTWlkZGxlID0gdGhpcy5zY3JvbGxiYXIuc2Nyb2xsVG9wICsgdGhpcy53aW5kb3dNaWRkbGU7XG5cbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IHRoaXMucGFyYWxsYXhFbGVtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCByZW1vdmVJbmRleGVzID0gW107XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VyRWwgPSB0aGlzLnBhcmFsbGF4RWxlbWVudHNbaV07XG4gICAgICAgICAgICAgICAgLy8gT2xkXG4gICAgICAgICAgICAgICAgbGV0IHNjcm9sbEJvdHRvbSA9IHNjcm9sbGJhckJvdHRvbTtcbiAgICAgICAgICAgICAgICAvLyBOZXdcbiAgICAgICAgICAgICAgICAvLyBsZXQgc2Nyb2xsQm90dG9tID0gKGN1ckVsLnBvc2l0aW9uID09PSAndG9wJykgPyB0aGlzLnNjcm9sbGJhci5zY3JvbGxUb3AgOiBzY3JvbGxiYXJCb3R0b207XG5cbiAgICAgICAgICAgICAgICBsZXQgdHJhbnNmb3JtRGlzdGFuY2UgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIC8vIERlZmluZSBpZiB0aGUgZWxlbWVudCBpcyBpbiB2aWV3XG4gICAgICAgICAgICAgICAgLy8gT2xkXG4gICAgICAgICAgICAgICAgbGV0IGluVmlldyA9IChzY3JvbGxCb3R0b20gPj0gY3VyRWwub2Zmc2V0ICYmIHRoaXMuc2Nyb2xsLnkgPD0gY3VyRWwubGltaXQpO1xuICAgICAgICAgICAgICAgIC8vIE5ld1xuICAgICAgICAgICAgICAgIC8vIGxldCBpblZpZXcgPSAoc2Nyb2xsQm90dG9tID49IGN1ckVsLm9mZnNldCAmJiB0aGlzLnNjcm9sbGJhci5zY3JvbGxUb3AgPD0gY3VyRWwubGltaXQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVFbGVtZW50KGN1ckVsLCBpKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc0ZpcnN0Q2FsbCAmJiAhaW5WaWV3ICYmIGN1ckVsLnNwZWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIERpZmZlcmVudCBjYWxjdWxhdGlvbnMgaWYgaXQgaXMgdGhlIGZpcnN0IGNhbGwgYW5kIHRoZSBpdGVtIGlzIG5vdCBpbiB0aGUgdmlld1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyRWwucG9zaXRpb24gIT09ICd0b3AnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IChjdXJFbC5vZmZzZXQgLSB0aGlzLndpbmRvd01pZGRsZSAtIGN1ckVsLm1pZGRsZSkgKiAtY3VyRWwuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBlbGVtZW50IGlzIGluIHZpZXdcbiAgICAgICAgICAgICAgICBpZiAoaW5WaWV3ICYmIGN1ckVsLnNwZWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY3VyRWwucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT2xkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSB0aGlzLnNjcm9sbGJhci5zY3JvbGxUb3AgKiAtY3VyRWwuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtRGlzdGFuY2UgPSAodGhpcy5zY3JvbGxiYXIuc2Nyb2xsVG9wIC0gY3VyRWwub2Zmc2V0KSAqIC1jdXJFbC5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gKHRoaXMuc2Nyb2xsYmFyTGltaXQgLSBzY3JvbGxCb3R0b20pICogY3VyRWwuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IChzY3JvbGxiYXJNaWRkbGUgLSBjdXJFbC5taWRkbGUpICogLWN1ckVsLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBUcmFuc2Zvcm0gaG9yaXpvbnRhbCBPUiB2ZXJ0aWNhbC4gRGVmYXVsdHMgdG8gdmVydGljYWxcbiAgICAgICAgICAgICAgICBpZiAoaXNOdW1lcmljKHRyYW5zZm9ybURpc3RhbmNlKSkge1xuICAgICAgICAgICAgICAgICAgICAoY3VyRWwuaG9yaXpvbnRhbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50KGN1ckVsLiRlbGVtZW50LCB0cmFuc2Zvcm1EaXN0YW5jZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50KGN1ckVsLiRlbGVtZW50LCAwLCB0cmFuc2Zvcm1EaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGVsZW1lbnRzIGFuZCByZWNhbGN1bGF0ZSBhbGwgdGhlIHBvc2l0aW9ucyBvbiB0aGUgcGFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICB1cGRhdGVFbGVtZW50cyhvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLndpbmRvd0hlaWdodCA9ICR3aW5kb3cuaGVpZ2h0KCk7XG4gICAgICAgIHRoaXMud2luZG93TWlkZGxlID0gdGhpcy53aW5kb3dIZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLnNldFNjcm9sbGJhckxpbWl0KCk7XG4gICAgICAgIHRoaXMuc2V0V2hlZWxEaXJlY3Rpb24odGhpcy5pc1JldmVyc2VkKTtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnRzKHRydWUpO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgb3B0aW9ucy5jYWxsYmFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXJBbmltYXRpb25zKGZhbHNlLCBzdGF0dXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBzbW9vdGgtc2Nyb2xsYmFyIHNjcm9sbGluZyBkaXJlY3Rpb24gZm9yIHdoZWVsIGV2ZW50XG4gICAgICogQHBhcmFtIHtCb29sZWFufSBpc1JldmVyc2VkXG4gICAgICovXG4gICAgc2V0V2hlZWxEaXJlY3Rpb24oaXNSZXZlcnNlZCl7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyLnJldmVyc2VXaGVlbChpc1JldmVyc2VkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95XG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgICAgICAkaHRtbC5yZW1vdmVDbGFzcygnaGFzLXNtb290aC1zY3JvbGwnKTtcbiAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iLCIvKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgeyBBUFBfTkFNRSwgJGRvY3VtZW50LCAkaHRtbCwgJGJhcmJhLCAkYm9keSB9IGZyb20gJy4uL3V0aWxzL2Vudmlyb25tZW50JztcbmltcG9ydCB7IEVWRU5UIGFzIEFQUF9FVkVOVCB9IGZyb20gJy4uL0FwcCc7XG5cbmZ1bmN0aW9uIERlZmF1bHRUcmFuc2l0aW9uKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBjb25zdCBzdGFydENhbGxiYWNrID0gKHR5cGVvZiBvcHRpb25zLnN0YXJ0Q2FsbGJhY2sgPT09ICdmdW5jdGlvbicpID8gb3B0aW9ucy5zdGFydENhbGxiYWNrIDogZnVuY3Rpb24oKXt9O1xuICAgIGNvbnN0IG92ZXJyaWRlQ2xhc3MgPSAodHlwZW9mIG9wdGlvbnMub3ZlcnJpZGVDbGFzcyA9PT0gJ3N0cmluZycpID8gb3B0aW9ucy5vdmVycmlkZUNsYXNzIDogJyc7XG5cbiAgICByZXR1cm4gQmFyYmEuQmFzZVRyYW5zaXRpb24uZXh0ZW5kKHtcbiAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgUHJvbWlzZVxuICAgICAgICAgICAgICAgIC5hbGwoW3RoaXMubmV3Q29udGFpbmVyTG9hZGluZywgdGhpcy50cmFuc2l0aW9uT3V0KCldKVxuICAgICAgICAgICAgICAgIC50aGVuKHRoaXMudHJhbnNpdGlvbkluLmJpbmQodGhpcykpO1xuICAgICAgICB9LFxuICAgICAgICB0cmFuc2l0aW9uT3V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5jLWxvYWRpbmcnKS5hZGRDbGFzcygnaXMtbG9hZGluZycpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgJCgnLmMtaGVhZGVyX19sb2dvX19hbmltJykucmVtb3ZlQ2xhc3MoJ2lzLXNob3cnKTtcbiAgICAgICAgICAgICAgICAkKCcuYy1oZWFkZXInKS5yZW1vdmVDbGFzcygnaXMtc2hvdycpO1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaGFzLW5hdi1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdoYXMtc2VhcmNoLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2hhcy1vdmVybGF5LW9wZW4nKTtcbiAgICAgICAgICAgIH0sNDAwKTtcblxuICAgICAgICAgICAgcmV0dXJuICQodGhpcy5vbGRDb250YWluZXIpLmFkZENsYXNzKCdpcy1jaGFuZ2luZy1wYWdlJykuZGVsYXkoMTYwMCkucHJvbWlzZSgpO1xuICAgICAgICB9LFxuICAgICAgICB0cmFuc2l0aW9uSW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJGRvY3VtZW50LnRyaWdnZXJIYW5kbGVyKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAgIEFQUF9FVkVOVC5ERUxFVEVfU0NPUEVEX01PRFVMRVMsXG4gICAgICAgICAgICAgICAgJHNjb3BlOiAkYmFyYmFcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoaXMuaW9zKCkgJiYgaXMuY2hyb21lKCkpe1xuICAgICAgICAgICAgICAgIC8vJCgnYm9keScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCd0aGVtZS0xJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygndGhlbWUtMicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCd0aGVtZS0xJyk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKCQoJ2JvZHknKS5oYXNDbGFzcygndGhlbWUtMicpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygndGhlbWUtMycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCd0aGVtZS0yJyk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKCQoJ2JvZHknKS5oYXNDbGFzcygndGhlbWUtMycpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygndGhlbWUtNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCd0aGVtZS0zJyk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKCQoJ2JvZHknKS5oYXNDbGFzcygndGhlbWUtNCcpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygndGhlbWUtNScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCd0aGVtZS00Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZigkKCdib2R5JykuaGFzQ2xhc3MoJ3RoZW1lLTUnKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3RoZW1lLTEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygndGhlbWUtNScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy99KTtcbiAgICAgICAgICAgIH1lbHNle31cblxuICAgICAgICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOjB9LDApO1xuICAgICAgICAgICAgLy8gJCgnYm9keScpLnJlbW92ZUNsYXNzKCdoYXMtb3ZlcmxheS1hY3RpdmUnKTtcblxuICAgICAgICAgICAgJCgnLmpzLXRyYW5zaXRpb24tb3ZlcmxheSwgLmMtbG9hZGluZy1sb2dvJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgJCgnLmMtbG9hZGluZycpLnJlbW92ZUNsYXNzKCdpcy1sb2FkaW5nJyk7XG4gICAgICAgICAgICB9LDYwMCk7XG5cblxuICAgICAgICAgICAgdGhpcy5kb25lKCk7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKHRoaXMubmV3Q29udGFpbmVyKS5hZGRDbGFzcygnaXMtbG9hZGVkJyk7XG5cbiAgICAgICAgICAgICRkb2N1bWVudC50cmlnZ2VySGFuZGxlcih7XG4gICAgICAgICAgICAgICAgdHlwZTogQVBQX0VWRU5ULklOSVRfTU9EVUxFUyxcbiAgICAgICAgICAgICAgICBpc0JhcmJhOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0VHJhbnNpdGlvbjtcbiIsIi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbmltcG9ydCB7IEFQUF9OQU1FLCAkZG9jdW1lbnQsICRodG1sLCAkYm9keSwgaXNEZWJ1ZyB9IGZyb20gJy4uL3V0aWxzL2Vudmlyb25tZW50JztcblxuaW1wb3J0IERlZmF1bHRUcmFuc2l0aW9uIGZyb20gJy4vRGVmYXVsdFRyYW5zaXRpb24nO1xuXG5jb25zdCBNT0RVTEVfTkFNRSA9ICdUcmFuc2l0aW9uTWFuYWdlcic7XG5jb25zdCBFVkVOVF9OQU1FU1BBQ0UgPSBgJHtBUFBfTkFNRX0uJHtNT0RVTEVfTkFNRX1gO1xuXG5jb25zdCBFVkVOVCA9IHtcbiAgICBHT1RPOiBgZ290by4ke0VWRU5UX05BTUVTUEFDRX1gXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCBjbGlja2VkTGluayA9IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IHRyYW5zaXRpb24gPSAnJztcblxuICAgICAgICAvLyBqUXVlcnkgb25kb21yZWFkeVxuICAgICAgICAkKCgpID0+IHtcbiAgICAgICAgICAgICRodG1sLmFkZENsYXNzKCdkb20taXMtZmlyc3QtbG9hZGluZycpO1xuICAgICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRkb2N1bWVudC5vbihFVkVOVC5HT1RPLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gZXZlbnQub3B0aW9ucy5sb2NhdGlvbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbiA9IGV2ZW50Lm9wdGlvbnMudHJhbnNpdGlvbjtcbiAgICAgICAgICAgICAgICBCYXJiYS5QamF4LmdvVG8oZXZlbnQub3B0aW9ucy5sb2NhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIERlZmluZSBkaWZmZXJlbnQgcGFnZSB0cmFuc2l0aW9uc1xuICAgICAgICBCYXJiYS5QamF4LmdldFRyYW5zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSAoY2xpY2tlZExpbmsgaW5zdGFuY2VvZiBOb2RlKSA/IGNsaWNrZWRMaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2l0aW9uJykgOiAodHlwZW9mIHRyYW5zaXRpb24gPT09ICdzdHJpbmcnID8gdHJhbnNpdGlvbiA6ICcnKTtcblxuICAgICAgICAgICAgbGV0IFRyYW5zaXRpb25PYmplY3Q7XG5cbiAgICAgICAgICAgIHN3aXRjaCAodHJhbnNpdGlvbikge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIFRyYW5zaXRpb25PYmplY3QgPSBEZWZhdWx0VHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbGlja2VkTGluayA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSAnJztcblxuICAgICAgICAgICAgcmV0dXJuIFRyYW5zaXRpb25PYmplY3Q7XG4gICAgICAgIH1cblxuICAgICAgICBCYXJiYS5EaXNwYXRjaGVyLm9uKCdsaW5rQ2xpY2tlZCcsIChIVE1MRWxlbWVudCwgTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgY2xpY2tlZExpbmsgPSBIVE1MRWxlbWVudDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgQmFyYmEuRGlzcGF0Y2hlci5vbignbmV3UGFnZVJlYWR5JywgKGN1cnJlbnRTdGF0dXMsIHByZXZTdGF0dXMsIGNvbnRhaW5lciwgY3VycmVudEhUTUwpID0+IHtcbiAgICAgICAgICAgIC8vIEZldGNoIGFueSBpbmxpbmUgc2NyaXB0IGVsZW1lbnRzLlxuICAgICAgICAgICAgY29uc3Qgc2NyaXB0cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQuanMtaW5saW5lJyk7XG5cbiAgICAgICAgICAgIGlmIChzY3JpcHRzIGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0KSB7XG4gICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBsZW4gPSBzY3JpcHRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2YWwoc2NyaXB0c1tpXS5pbm5lckhUTUwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFeGVjdXRlIGFueSB0aGlyZCBwYXJ0eSBmZWF0dXJlcy5cbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAvLyBHb29nbGUgQW5hbHl0aWNzXG4gICAgICAgICAgICBpZiAod2luZG93LmdhICYmICFpc0RlYnVnKSB7XG4gICAgICAgICAgICAgICAgZ2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgQmFyYmEuUGpheC5Eb20uY29udGFpbmVyQ2xhc3MgPSAnYmFyYmEtY29udGFpbmVyJztcbiAgICAgICAgQmFyYmEuUGpheC5Eb20ud3JhcHBlcklkID0gJ2JhcmJhLXdyYXBwZXInO1xuXG4gICAgICAgIEJhcmJhLlBqYXguc3RhcnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBET00gaXMgbG9hZGVkXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGxvYWQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoJ2lzLWxvYWRpbmcnKTtcbiAgICAgICAgICAgICRib2R5LmFkZENsYXNzKCdkb20taXMtbG9hZGVkJyk7XG4gICAgICAgICAgICAkKCcuYmFyYmEtY29udGFpbmVyJykuYWRkQ2xhc3MoJ2lzLWxvYWRlZCcpO1xuICAgICAgICB9LDcwMCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4vaXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9BcnJheSAoIGFycmF5LCB2YWx1ZSApIHtcbiAgICBjb25zdCBpbmRleCA9IGFycmF5LmluZGV4T2YoIHZhbHVlICk7XG5cbiAgICBpZiAoIGluZGV4ID09PSAtMSApIHtcbiAgICAgICAgYXJyYXkucHVzaCggdmFsdWUgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUNvbnRhaW5zICggYXJyYXksIHZhbHVlICkge1xuICAgIGZvciAoIGxldCBpID0gMCwgYyA9IGFycmF5Lmxlbmd0aDsgaSA8IGM7IGkrKyApIHtcbiAgICAgICAgaWYgKCBhcnJheVtpXSA9PSB2YWx1ZSApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlDb250ZW50c01hdGNoICggYSwgYiApIHtcbiAgICBsZXQgaTtcblxuICAgIGlmICggIWlzQXJyYXkoIGEgKSB8fCAhaXNBcnJheSggYiApICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCBhLmxlbmd0aCAhPT0gYi5sZW5ndGggKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpID0gYS5sZW5ndGg7XG4gICAgd2hpbGUgKCBpLS0gKSB7XG4gICAgICAgIGlmICggYVtpXSAhPT0gYltpXSApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlQXJyYXkgKCB4ICkge1xuICAgIGlmICggdHlwZW9mIHggPT09ICdzdHJpbmcnICkge1xuICAgICAgICByZXR1cm4gWyB4IF07XG4gICAgfVxuXG4gICAgaWYgKCB4ID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3RJdGVtICggYXJyYXkgKSB7XG4gICAgcmV0dXJuIGFycmF5WyBhcnJheS5sZW5ndGggLSAxIF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGcm9tQXJyYXkgKCBhcnJheSwgbWVtYmVyICkge1xuICAgIGlmICggIWFycmF5ICkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXggPSBhcnJheS5pbmRleE9mKCBtZW1iZXIgKTtcblxuICAgIGlmICggaW5kZXggIT09IC0xICkge1xuICAgICAgICBhcnJheS5zcGxpY2UoIGluZGV4LCAxICk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9BcnJheSAoIGFycmF5TGlrZSApIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGxldCBpID0gYXJyYXlMaWtlLmxlbmd0aDtcbiAgICB3aGlsZSAoIGktLSApIHtcbiAgICAgICAgYXJyYXlbaV0gPSBhcnJheUxpa2VbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEJ5S2V5VmFsdWUoIGFycmF5LCBrZXksIHZhbHVlICkge1xuICAgIHJldHVybiBhcnJheS5maWx0ZXIoZnVuY3Rpb24oIG9iaiApIHtcbiAgICAgICAgcmV0dXJuIG9ialtrZXldID09PSB2YWx1ZTtcbiAgICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgIHZhciB0aW1lb3V0O1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfTtcbn1cbiIsImNvbnN0IEFQUF9OQU1FICAgICA9ICdFcmFibGUnO1xuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSc7XG5cbmNvbnN0ICRkb2N1bWVudCAgICA9ICQoZG9jdW1lbnQpO1xuY29uc3QgJHdpbmRvdyAgICAgID0gJCh3aW5kb3cpO1xuY29uc3QgJGh0bWwgICAgICAgID0gJChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLnJlbW92ZUNsYXNzKCdoYXMtbm8tanMnKS5hZGRDbGFzcygnaGFzLWpzJyk7XG5jb25zdCAkYm9keSAgICAgICAgPSAkKGRvY3VtZW50LmJvZHkpO1xuY29uc3QgJGJhcmJhICAgICAgID0gJCgnI2JhcmJhLXdyYXBwZXInKTtcblxuY29uc3QgaXNEZWJ1ZyAgICAgID0gISEkaHRtbC5kYXRhKCdkZWJ1ZycpO1xuXG5leHBvcnQgeyBBUFBfTkFNRSwgREFUQV9BUElfS0VZLCAkZG9jdW1lbnQsICR3aW5kb3csICRodG1sLCAkYm9keSwgaXNEZWJ1ZywgJGJhcmJhIH07XG4iLCIvKipcbiAqIEBzZWUgIGh0dHBzOi8vZ2l0aHViLmNvbS9yYWN0aXZlanMvcmFjdGl2ZS9ibG9iL2Rldi9zcmMvdXRpbHMvaHRtbC5qc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlSHRtbChzdHIpIHtcbiAgICByZXR1cm4gc3RyXG4gICAgICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbn1cblxuLyoqXG4gKiBQcmVwYXJlIEhUTUwgY29udGVudCB0aGF0IGNvbnRhaW5zIG11c3RhY2hlIGNoYXJhY3RlcnMgZm9yIHVzZSB3aXRoIFJhY3RpdmVcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmVzY2FwZUh0bWwoc3RyKSB7XG4gICAgcmV0dXJuIHN0clxuICAgICAgICAucmVwbGFjZSgvJmx0Oy9nLCAnPCcpXG4gICAgICAgIC5yZXBsYWNlKC8mZ3Q7L2csICc+JylcbiAgICAgICAgLnJlcGxhY2UoLyZhbXA7L2csICcmJyk7XG59XG5cbi8qKlxuICogR2V0IGVsZW1lbnQgZGF0YSBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0gICB7RE9NRWxlbWVudH0gIG5vZGVcbiAqIEByZXR1cm4gIHtBcnJheX0gICAgICAgZGF0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZURhdGEobm9kZSkge1xuICAgIC8vIEFsbCBhdHRyaWJ1dGVzXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBub2RlLmF0dHJpYnV0ZXM7XG5cbiAgICAvLyBSZWdleCBQYXR0ZXJuXG4gICAgdmFyIHBhdHRlcm4gPSAvXmRhdGFcXC0oLispJC87XG5cbiAgICAvLyBPdXRwdXRcbiAgICB2YXIgZGF0YSA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmICghYXR0cmlidXRlc1tpXSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBdHRyaWJ1dGVzIG5hbWUgKGV4OiBkYXRhLW1vZHVsZSlcbiAgICAgICAgbGV0IG5hbWUgPSBhdHRyaWJ1dGVzW2ldLm5hbWU7XG5cbiAgICAgICAgLy8gVGhpcyBoYXBwZW5zLlxuICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1hdGNoID0gbmFtZS5tYXRjaChwYXR0ZXJuKTtcbiAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGlzIHRocm93cyBhbiBlcnJvciwgeW91IGhhdmUgc29tZVxuICAgICAgICAvLyBzZXJpb3VzIHByb2JsZW1zIGluIHlvdXIgSFRNTC5cbiAgICAgICAgZGF0YVttYXRjaFsxXV0gPSBub2RlLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbn1cbiIsInZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG4gICAgYXJyYXlMaWtlUGF0dGVybiA9IC9eXFxbb2JqZWN0ICg/OkFycmF5fEZpbGVMaXN0KVxcXSQvO1xuXG4vLyB0aGFua3MsIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2luc3RhbmNlb2YtY29uc2lkZXJlZC1oYXJtZnVsLW9yLWhvdy10by13cml0ZS1hLXJvYnVzdC1pc2FycmF5L1xuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkgKCB0aGluZyApIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCggdGhpbmcgKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlMaWtlICggb2JqICkge1xuICAgIHJldHVybiBhcnJheUxpa2VQYXR0ZXJuLnRlc3QoIHRvU3RyaW5nLmNhbGwoIG9iaiApICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VxdWFsICggYSwgYiApIHtcbiAgICBpZiAoIGEgPT09IG51bGwgJiYgYiA9PT0gbnVsbCApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCB0eXBlb2YgYSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIGIgPT09ICdvYmplY3QnICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGEgPT09IGI7XG59XG5cbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTgwODIvdmFsaWRhdGUtbnVtYmVycy1pbi1qYXZhc2NyaXB0LWlzbnVtZXJpY1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtZXJpYyAoIHRoaW5nICkge1xuICAgIHJldHVybiAhaXNOYU4oIHBhcnNlRmxvYXQoIHRoaW5nICkgKSAmJiBpc0Zpbml0ZSggdGhpbmcgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0ICggdGhpbmcgKSB7XG4gICAgcmV0dXJuICggdGhpbmcgJiYgdG9TdHJpbmcuY2FsbCggdGhpbmcgKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24oIHRoaW5nICkge1xuICAgIHZhciBnZXRUeXBlID0ge307XG4gICAgcmV0dXJuIHRoaW5nICYmIGdldFR5cGUudG9TdHJpbmcuY2FsbCh0aGluZykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG4iLCIvKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgeyBBUFBfTkFNRSwgJGRvY3VtZW50LCAkaHRtbCwgJGJhcmJhLCAkYm9keSB9IGZyb20gJy4uL3V0aWxzL2Vudmlyb25tZW50JztcbmltcG9ydCB7IEVWRU5UIGFzIEFQUF9FVkVOVCB9IGZyb20gJy4uL0FwcCc7XG5cbmZ1bmN0aW9uIERlZmF1bHRWaWV3KG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIHZhciBob21lID0gQmFyYmEuQmFzZVZpZXcuZXh0ZW5kKHtcbiAgICAgICAgbmFtZXNwYWNlOiAnaG9tZScsXG4gICAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gVGhlIG5ldyBDb250YWluZXIgaXMgcmVhZHkgYW5kIGF0dGFjaGVkIHRvIHRoZSBET00uXG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3RoZW1lLWhvbWUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FbnRlckNvbXBsZXRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBUaGUgVHJhbnNpdGlvbiBoYXMganVzdCBmaW5pc2hlZC5cbiAgICAgICAgfSxcbiAgICAgICAgb25MZWF2ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBBIG5ldyBUcmFuc2l0aW9uIHRvd2FyZCBhIG5ldyBwYWdlIGhhcyBqdXN0IHN0YXJ0ZWQuXG4gICAgICAgIH0sXG4gICAgICAgIG9uTGVhdmVDb21wbGV0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gVGhlIENvbnRhaW5lciBoYXMganVzdCBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgRE9NLlxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCd0aGVtZS1ob21lJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGhvbWUuaW5pdCgpO1xufVxubmV3IERlZmF1bHRWaWV3KCk7XG5cbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRWaWV3O1xuIl19