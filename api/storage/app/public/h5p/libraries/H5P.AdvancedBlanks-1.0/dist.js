! function(e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var r = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
  }
  n.m = e, n.c = t, n.d = function(e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    })
  }, n.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function(e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var r in e) n.d(i, r, function(t) {
        return e[t]
      }.bind(null, r));
    return i
  }, n.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 7)
}([function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i = n(3),
    r = n(14),
    o = n(4),
    s = function() {
      function e(e, t, n, i) {
        this.settings = e, this.localization = t, this.jquery = n, this.messageService = i
      }
      return e.initialize = function(t, n, i, r) {
        return this._instance = new e(t, n, i, r), this._instance
      }, Object.defineProperty(e, "instance", {
        get: function() {
          if (this._instance) return this._instance;
          throw "BlankLoader must be initialized before use."
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.decodeHtml = function(e) {
        var t = document.createElement("textarea");
        return t.innerHTML = e, t.value
      }, e.prototype.createBlank = function(e, t, n, s) {
        var a = new r.Blank(this.settings, this.localization, this.jquery, this.messageService, e);
        if (t && (t = this.decodeHtml(t), a.addCorrectAnswer(new i.Answer(t, "", !1, 0, this.settings))), a.setHint(new o.Message(n || "", !1, 0)), s)
          for (var l = 0, c = s; l < c.length; l++) {
            var h = c[l];
            a.addIncorrectAnswer(this.decodeHtml(h.incorrectAnswerText), h.incorrectAnswerFeedback, h.showHighlight, h.highlight)
          }
        return a
      }, e.prototype.replaceSnippets = function(e, t) {
        var n = this;
        e.correctAnswers.concat(e.incorrectAnswers).forEach(function(e) {
          return e.message.text = n.getStringWithSnippets(e.message.text, t)
        }), e.hint.text = this.getStringWithSnippets(e.hint.text, t)
      }, e.prototype.getStringWithSnippets = function(e, t) {
        if (!e || void 0 === e) return "";
        if (!t) return e;
        for (var n = 0, i = t; n < i.length; n++) {
          var r = i[n];
          void 0 !== r.name && "" !== r.name && void 0 !== r.text && "" !== r.text && (e = e.replace("@" + r.name, r.text))
        }
        return e
      }, e.prototype.linkHighlightIdToObject = function(e, t, n) {
        for (var i = 0, r = e.correctAnswers; i < r.length; i++) {
          r[i].linkHighlightIdToObject(t, n)
        }
        for (var o = 0, s = e.incorrectAnswers; o < s.length; o++) {
          s[o].linkHighlightIdToObject(t, n)
        }
        e.hint.linkHighlight(t, n)
      }, e
    }();
  t.BlankLoader = s
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
    }),
    function(e) {
      e[e.Error = 0] = "Error", e[e.Correct = 1] = "Correct", e[e.Retry = 2] = "Retry", e[e.ShowSolution = 3] = "ShowSolution", e[e.None = 4] = "None"
    }(t.MessageType || (t.MessageType = {})),
    function(e) {
      e[e.Type = 0] = "Type", e[e.Select = 1] = "Select"
    }(t.ClozeType || (t.ClozeType = {})),
    function(e) {
      e[e.Alternatives = 0] = "Alternatives", e[e.All = 1] = "All"
    }(t.SelectAlternatives || (t.SelectAlternatives = {}))
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
    }),
    function(e) {
      e[e.Blank = 0] = "Blank", e[e.Highlight = 1] = "Highlight"
    }(t.ClozeElementType || (t.ClozeElementType = {}));
  var i = function() {
    return function() {}
  }();
  t.ClozeElement = i
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i, r = n(4),
    o = n(5);
  ! function(e) {
    e[e.ExactMatch = 0] = "ExactMatch", e[e.CloseMatch = 1] = "CloseMatch", e[e.NoMatch = 2] = "NoMatch"
  }(i = t.Correctness || (t.Correctness = {}));
  var s = function() {
    return function(e) {
      this.usedAnswer = e, this.correctness = i.NoMatch, this.characterDifferenceCount = 0, this.usedAlternative = ""
    }
  }();
  t.Evaluation = s;
  var a = function() {
    function e(e, t, n, i, o) {
      this.settings = o, this.alternatives = e.split(/\//).map(function(e) {
        return e.trim()
      }), this.message = new r.Message(t, n, i), "" === e.trim() ? this.appliesAlways = !0 : this.appliesAlways = !1
    }
    return e.prototype.linkHighlightIdToObject = function(e, t) {
      this.message.linkHighlight(e, t)
    }, e.prototype.activateHighlight = function() {
      this.message.highlightedElement && (this.message.highlightedElement.isHighlighted = !0)
    }, e.prototype.cleanString = function(e) {
      return (e = e.trim()).replace(/\s{2,}/g, " ")
    }, e.prototype.getChangesCountFromDiff = function(e) {
      for (var t = 0, n = "", i = 0, r = 0, o = e; r < o.length; r++) {
        var s = o[r];
        s.removed ? (t += s.value.length, n = "removed") : s.added ? ("removed" === n ? i < s.value.length && (t += s.value.length - i) : t += s.value.length, n = "added") : n = "same", i = s.value.length
      }
      return t
    }, e.prototype.getAcceptableSpellingMistakes = function(e) {
      return this.settings.warnSpellingErrors || this.settings.acceptSpellingErrors ? Math.floor(e.length / 10) + 1 : 0
    }, e.prototype.evaluateAttempt = function(e) {
      for (var t = this.cleanString(e), n = new s(this), r = 0, a = this.alternatives; r < a.length; r++) {
        var l = a[r],
          c = this.cleanString(l),
          h = o.diffChars(c, t, {
            ignoreCase: !this.settings.caseSensitive
          }),
          u = this.getChangesCountFromDiff(h);
        if (0 === u) return n.usedAlternative = c, n.correctness = i.ExactMatch, n;
        u <= this.getAcceptableSpellingMistakes(l) && (0 === n.characterDifferenceCount || u < n.characterDifferenceCount) && (n.usedAlternative = c, n.correctness = i.CloseMatch, n.characterDifferenceCount = u)
      }
      return n
    }, e
  }();
  t.Answer = a
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i = function() {
    return function(e, t, n) {
      var i = this;
      this.text = e, this.relativeHighlightPosition = n, this.linkHighlight = function(e, t) {
        i.relativeHighlightPosition && (i.relativeHighlightPosition < 0 && 0 - i.relativeHighlightPosition - 1 < e.length ? i.highlightedElement = e[0 - i.relativeHighlightPosition - 1] : i.relativeHighlightPosition > 0 && i.relativeHighlightPosition - 1 < t.length && (i.highlightedElement = t[i.relativeHighlightPosition - 1]))
      }, t || (this.relativeHighlightPosition = void 0)
    }
  }();
  t.Message = i
}, function(e, t, n) {
  /*!

   diff v4.0.1

  Software License Agreement (BSD License)

  Copyright (c) 2009-2015, Kevin Decker <kpdecker@gmail.com>

  All rights reserved.

  Redistribution and use of this software in source and binary forms, with or without modification,
  are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above
    copyright notice, this list of conditions and the
    following disclaimer.

  * Redistributions in binary form must reproduce the above
    copyright notice, this list of conditions and the
    following disclaimer in the documentation and/or other
    materials provided with the distribution.

  * Neither the name of Kevin Decker nor the names of its
    contributors may be used to endorse or promote products
    derived from this software without specific prior
    written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
  IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
  FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
  DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
  DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
  IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
  OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  @license
  */
  ! function(e) {
    "use strict";

    function t() {}

    function n(e, t, n, i, r) {
      for (var o = 0, s = t.length, a = 0, l = 0; o < s; o++) {
        var c = t[o];
        if (c.removed) {
          if (c.value = e.join(i.slice(l, l + c.count)), l += c.count, o && t[o - 1].added) {
            var h = t[o - 1];
            t[o - 1] = t[o], t[o] = h
          }
        } else {
          if (!c.added && r) {
            var u = n.slice(a, a + c.count);
            u = u.map(function(e, t) {
              var n = i[l + t];
              return n.length > e.length ? n : e
            }), c.value = e.join(u)
          } else c.value = e.join(n.slice(a, a + c.count));
          a += c.count, c.added || (l += c.count)
        }
      }
      var p = t[s - 1];
      return s > 1 && "string" == typeof p.value && (p.added || p.removed) && e.equals("", p.value) && (t[s - 2].value += p.value, t.pop()), t
    }
    t.prototype = {
      diff: function(e, t) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = i.callback;
        "function" == typeof i && (r = i, i = {}), this.options = i;
        var o = this;

        function s(e) {
          return r ? (setTimeout(function() {
            r(void 0, e)
          }, 0), !0) : e
        }
        e = this.castInput(e), t = this.castInput(t), e = this.removeEmpty(this.tokenize(e));
        var a = (t = this.removeEmpty(this.tokenize(t))).length,
          l = e.length,
          c = 1,
          h = a + l,
          u = [{
            newPos: -1,
            components: []
          }],
          p = this.extractCommon(u[0], t, e, 0);
        if (u[0].newPos + 1 >= a && p + 1 >= l) return s([{
          value: this.join(t),
          count: t.length
        }]);

        function f() {
          for (var i = -1 * c; i <= c; i += 2) {
            var r = void 0,
              h = u[i - 1],
              p = u[i + 1],
              f = (p ? p.newPos : 0) - i;
            h && (u[i - 1] = void 0);
            var d = h && h.newPos + 1 < a,
              g = p && 0 <= f && f < l;
            if (d || g) {
              if (!d || g && h.newPos < p.newPos ? (r = {
                  newPos: (v = p).newPos,
                  components: v.components.slice(0)
                }, o.pushComponent(r.components, void 0, !0)) : ((r = h).newPos++, o.pushComponent(r.components, !0, void 0)), f = o.extractCommon(r, t, e, i), r.newPos + 1 >= a && f + 1 >= l) return s(n(o, r.components, t, e, o.useLongestToken));
              u[i] = r
            } else u[i] = void 0
          }
          var v;
          c++
        }
        if (r) ! function e() {
          setTimeout(function() {
            if (c > h) return r();
            f() || e()
          }, 0)
        }();
        else
          for (; c <= h;) {
            var d = f();
            if (d) return d
          }
      },
      pushComponent: function(e, t, n) {
        var i = e[e.length - 1];
        i && i.added === t && i.removed === n ? e[e.length - 1] = {
          count: i.count + 1,
          added: t,
          removed: n
        } : e.push({
          count: 1,
          added: t,
          removed: n
        })
      },
      extractCommon: function(e, t, n, i) {
        for (var r = t.length, o = n.length, s = e.newPos, a = s - i, l = 0; s + 1 < r && a + 1 < o && this.equals(t[s + 1], n[a + 1]);) s++, a++, l++;
        return l && e.components.push({
          count: l
        }), e.newPos = s, a
      },
      equals: function(e, t) {
        return this.options.comparator ? this.options.comparator(e, t) : e === t || this.options.ignoreCase && e.toLowerCase() === t.toLowerCase()
      },
      removeEmpty: function(e) {
        for (var t = [], n = 0; n < e.length; n++) e[n] && t.push(e[n]);
        return t
      },
      castInput: function(e) {
        return e
      },
      tokenize: function(e) {
        return e.split("")
      },
      join: function(e) {
        return e.join("")
      }
    };
    var i = new t;

    function r(e, t) {
      if ("function" == typeof e) t.callback = e;
      else if (e)
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      return t
    }
    var o = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,
      s = /\S/,
      a = new t;
    a.equals = function(e, t) {
      return this.options.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase()), e === t || this.options.ignoreWhitespace && !s.test(e) && !s.test(t)
    }, a.tokenize = function(e) {
      for (var t = e.split(/(\s+|[()[\]{}'"]|\b)/), n = 0; n < t.length - 1; n++) !t[n + 1] && t[n + 2] && o.test(t[n]) && o.test(t[n + 2]) && (t[n] += t[n + 2], t.splice(n + 1, 2), n--);
      return t
    };
    var l = new t;

    function c(e, t, n) {
      return l.diff(e, t, n)
    }
    l.tokenize = function(e) {
      var t = [],
        n = e.split(/(\n|\r\n)/);
      n[n.length - 1] || n.pop();
      for (var i = 0; i < n.length; i++) {
        var r = n[i];
        i % 2 && !this.options.newlineIsToken ? t[t.length - 1] += r : (this.options.ignoreWhitespace && (r = r.trim()), t.push(r))
      }
      return t
    };
    var h = new t;
    h.tokenize = function(e) {
      return e.split(/(\S.+?[.!?])(?=\s+|$)/)
    };
    var u = new t;

    function p(e) {
      return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function f(e) {
      return function(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
          return n
        }
      }(e) || function(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
      }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }
    u.tokenize = function(e) {
      return e.split(/([{}:;,]|\s+)/)
    };
    var d = Object.prototype.toString,
      g = new t;

    function v(e, t, n, i, r) {
      var o, s;
      for (t = t || [], n = n || [], i && (e = i(r, e)), o = 0; o < t.length; o += 1)
        if (t[o] === e) return n[o];
      if ("[object Array]" === d.call(e)) {
        for (t.push(e), s = new Array(e.length), n.push(s), o = 0; o < e.length; o += 1) s[o] = v(e[o], t, n, i, r);
        return t.pop(), n.pop(), s
      }
      if (e && e.toJSON && (e = e.toJSON()), "object" === p(e) && null !== e) {
        t.push(e), s = {}, n.push(s);
        var a, l = [];
        for (a in e) e.hasOwnProperty(a) && l.push(a);
        for (l.sort(), o = 0; o < l.length; o += 1) a = l[o], s[a] = v(e[a], t, n, i, a);
        t.pop(), n.pop()
      } else s = e;
      return s
    }
    g.useLongestToken = !0, g.tokenize = l.tokenize, g.castInput = function(e) {
      var t = this.options,
        n = t.undefinedReplacement,
        i = t.stringifyReplacer,
        r = void 0 === i ? function(e, t) {
          return void 0 === t ? n : t
        } : i;
      return "string" == typeof e ? e : JSON.stringify(v(e, null, null, r), r, "  ")
    }, g.equals = function(e, n) {
      return t.prototype.equals.call(g, e.replace(/,([\r\n])/g, "$1"), n.replace(/,([\r\n])/g, "$1"))
    };
    var b = new t;

    function m(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = e.split(/\r\n|[\n\v\f\r\x85]/),
        i = e.match(/\r\n|[\n\v\f\r\x85]/g) || [],
        r = [],
        o = 0;

      function s() {
        var e = {};
        for (r.push(e); o < n.length;) {
          var i = n[o];
          if (/^(\-\-\-|\+\+\+|@@)\s/.test(i)) break;
          var s = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(i);
          s && (e.index = s[1]), o++
        }
        for (a(e), a(e), e.hunks = []; o < n.length;) {
          var c = n[o];
          if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(c)) break;
          if (/^@@/.test(c)) e.hunks.push(l());
          else {
            if (c && t.strict) throw new Error("Unknown line " + (o + 1) + " " + JSON.stringify(c));
            o++
          }
        }
      }

      function a(e) {
        var t = /^(---|\+\+\+)\s+(.*)$/.exec(n[o]);
        if (t) {
          var i = "---" === t[1] ? "old" : "new",
            r = t[2].split("\t", 2),
            s = r[0].replace(/\\\\/g, "\\");
          /^".*"$/.test(s) && (s = s.substr(1, s.length - 2)), e[i + "FileName"] = s, e[i + "Header"] = (r[1] || "").trim(), o++
        }
      }

      function l() {
        for (var e = o, r = n[o++], s = r.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/), a = {
            oldStart: +s[1],
            oldLines: +s[2] || 1,
            newStart: +s[3],
            newLines: +s[4] || 1,
            lines: [],
            linedelimiters: []
          }, l = 0, c = 0; o < n.length && !(0 === n[o].indexOf("--- ") && o + 2 < n.length && 0 === n[o + 1].indexOf("+++ ") && 0 === n[o + 2].indexOf("@@")); o++) {
          var h = 0 == n[o].length && o != n.length - 1 ? " " : n[o][0];
          if ("+" !== h && "-" !== h && " " !== h && "\\" !== h) break;
          a.lines.push(n[o]), a.linedelimiters.push(i[o] || "\n"), "+" === h ? l++ : "-" === h ? c++ : " " === h && (l++, c++)
        }
        if (l || 1 !== a.newLines || (a.newLines = 0), c || 1 !== a.oldLines || (a.oldLines = 0), t.strict) {
          if (l !== a.newLines) throw new Error("Added line count did not match for hunk at line " + (e + 1));
          if (c !== a.oldLines) throw new Error("Removed line count did not match for hunk at line " + (e + 1))
        }
        return a
      }
      for (; o < n.length;) s();
      return r
    }

    function y(e, t, n) {
      var i = !0,
        r = !1,
        o = !1,
        s = 1;
      return function a() {
        if (i && !o) {
          if (r ? s++ : i = !1, e + s <= n) return s;
          o = !0
        }
        if (!r) return o || (i = !0), t <= e - s ? -s++ : (r = !0, a())
      }
    }

    function k(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" == typeof t && (t = m(t)), Array.isArray(t)) {
        if (t.length > 1) throw new Error("applyPatch only works with a single input.");
        t = t[0]
      }
      var i, r, o = e.split(/\r\n|[\n\v\f\r\x85]/),
        s = e.match(/\r\n|[\n\v\f\r\x85]/g) || [],
        a = t.hunks,
        l = n.compareLine || function(e, t, n, i) {
          return t === i
        },
        c = 0,
        h = n.fuzzFactor || 0,
        u = 0,
        p = 0;

      function f(e, t) {
        for (var n = 0; n < e.lines.length; n++) {
          var i = e.lines[n],
            r = i.length > 0 ? i[0] : " ",
            s = i.length > 0 ? i.substr(1) : i;
          if (" " === r || "-" === r) {
            if (!l(t + 1, o[t], r, s) && ++c > h) return !1;
            t++
          }
        }
        return !0
      }
      for (var d = 0; d < a.length; d++) {
        for (var g = a[d], v = o.length - g.oldLines, b = 0, k = p + g.oldStart - 1, w = y(k, u, v); void 0 !== b; b = w())
          if (f(g, k + b)) {
            g.offset = p += b;
            break
          } if (void 0 === b) return !1;
        u = g.offset + g.oldStart + g.oldLines
      }
      for (var S = 0, x = 0; x < a.length; x++) {
        var C = a[x],
          A = C.oldStart + C.offset + S - 1;
        S += C.newLines - C.oldLines, A < 0 && (A = 0);
        for (var z = 0; z < C.lines.length; z++) {
          var T = C.lines[z],
            L = T.length > 0 ? T[0] : " ",
            j = T.length > 0 ? T.substr(1) : T,
            P = C.linedelimiters[z];
          if (" " === L) A++;
          else if ("-" === L) o.splice(A, 1), s.splice(A, 1);
          else if ("+" === L) o.splice(A, 0, j), s.splice(A, 0, P), A++;
          else if ("\\" === L) {
            var M = C.lines[z - 1] ? C.lines[z - 1][0] : null;
            "+" === M ? i = !0 : "-" === M && (r = !0)
          }
        }
      }
      if (i)
        for (; !o[o.length - 1];) o.pop(), s.pop();
      else r && (o.push(""), s.push("\n"));
      for (var H = 0; H < o.length - 1; H++) o[H] = o[H] + s[H];
      return o.join("")
    }

    function w(e, t, n, i, r, o, s) {
      s || (s = {}), void 0 === s.context && (s.context = 4);
      var a = c(n, i, s);

      function l(e) {
        return e.map(function(e) {
          return " " + e
        })
      }
      a.push({
        value: "",
        lines: []
      });
      for (var h = [], u = 0, p = 0, d = [], g = 1, v = 1, b = function(e) {
          var t = a[e],
            r = t.lines || t.value.replace(/\n$/, "").split("\n");
          if (t.lines = r, t.added || t.removed) {
            var o;
            if (!u) {
              var c = a[e - 1];
              u = g, p = v, c && (d = s.context > 0 ? l(c.lines.slice(-s.context)) : [], u -= d.length, p -= d.length)
            }(o = d).push.apply(o, f(r.map(function(e) {
              return (t.added ? "+" : "-") + e
            }))), t.added ? v += r.length : g += r.length
          } else {
            if (u)
              if (r.length <= 2 * s.context && e < a.length - 2) {
                var b;
                (b = d).push.apply(b, f(l(r)))
              } else {
                var m, y = Math.min(r.length, s.context);
                (m = d).push.apply(m, f(l(r.slice(0, y))));
                var k = {
                  oldStart: u,
                  oldLines: g - u + y,
                  newStart: p,
                  newLines: v - p + y,
                  lines: d
                };
                if (e >= a.length - 2 && r.length <= s.context) {
                  var w = /\n$/.test(n),
                    S = /\n$/.test(i),
                    x = 0 == r.length && d.length > k.oldLines;
                  !w && x && d.splice(k.oldLines, 0, "\\ No newline at end of file"), (w || x) && S || d.push("\\ No newline at end of file")
                }
                h.push(k), u = 0, p = 0, d = []
              } g += r.length, v += r.length
          }
        }, m = 0; m < a.length; m++) b(m);
      return {
        oldFileName: e,
        newFileName: t,
        oldHeader: r,
        newHeader: o,
        hunks: h
      }
    }

    function S(e, t, n, i, r, o, s) {
      var a = w(e, t, n, i, r, o, s),
        l = [];
      e == t && l.push("Index: " + e), l.push("==================================================================="), l.push("--- " + a.oldFileName + (void 0 === a.oldHeader ? "" : "\t" + a.oldHeader)), l.push("+++ " + a.newFileName + (void 0 === a.newHeader ? "" : "\t" + a.newHeader));
      for (var c = 0; c < a.hunks.length; c++) {
        var h = a.hunks[c];
        l.push("@@ -" + h.oldStart + "," + h.oldLines + " +" + h.newStart + "," + h.newLines + " @@"), l.push.apply(l, h.lines)
      }
      return l.join("\n") + "\n"
    }

    function x(e, t) {
      if (t.length > e.length) return !1;
      for (var n = 0; n < t.length; n++)
        if (t[n] !== e[n]) return !1;
      return !0
    }

    function C(e) {
      var t = function e(t) {
          var n = 0,
            i = 0;
          return t.forEach(function(t) {
            if ("string" != typeof t) {
              var r = e(t.mine),
                o = e(t.theirs);
              void 0 !== n && (r.oldLines === o.oldLines ? n += r.oldLines : n = void 0), void 0 !== i && (r.newLines === o.newLines ? i += r.newLines : i = void 0)
            } else void 0 === i || "+" !== t[0] && " " !== t[0] || i++, void 0 === n || "-" !== t[0] && " " !== t[0] || n++
          }), {
            oldLines: n,
            newLines: i
          }
        }(e.lines),
        n = t.oldLines,
        i = t.newLines;
      void 0 !== n ? e.oldLines = n : delete e.oldLines, void 0 !== i ? e.newLines = i : delete e.newLines
    }

    function A(e, t) {
      if ("string" == typeof e) {
        if (/^@@/m.test(e) || /^Index:/m.test(e)) return m(e)[0];
        if (!t) throw new Error("Must provide a base reference or pass in a patch");
        return w(void 0, void 0, t, e)
      }
      return e
    }

    function z(e) {
      return e.newFileName && e.newFileName !== e.oldFileName
    }

    function T(e, t, n) {
      return t === n ? t : (e.conflict = !0, {
        mine: t,
        theirs: n
      })
    }

    function L(e, t) {
      return e.oldStart < t.oldStart && e.oldStart + e.oldLines < t.oldStart
    }

    function j(e, t) {
      return {
        oldStart: e.oldStart,
        oldLines: e.oldLines,
        newStart: e.newStart + t,
        newLines: e.newLines,
        lines: e.lines
      }
    }

    function P(e, t, n, i, r) {
      var o = {
          offset: t,
          lines: n,
          index: 0
        },
        s = {
          offset: i,
          lines: r,
          index: 0
        };
      for (B(e, o, s), B(e, s, o); o.index < o.lines.length && s.index < s.lines.length;) {
        var a = o.lines[o.index],
          l = s.lines[s.index];
        if ("-" !== a[0] && "+" !== a[0] || "-" !== l[0] && "+" !== l[0])
          if ("+" === a[0] && " " === l[0]) {
            var c;
            (c = e.lines).push.apply(c, f(_(o)))
          } else if ("+" === l[0] && " " === a[0]) {
          var h;
          (h = e.lines).push.apply(h, f(_(s)))
        } else "-" === a[0] && " " === l[0] ? H(e, o, s) : "-" === l[0] && " " === a[0] ? H(e, s, o, !0) : a === l ? (e.lines.push(a), o.index++, s.index++) : O(e, _(o), _(s));
        else M(e, o, s)
      }
      F(e, o), F(e, s), C(e)
    }

    function M(e, t, n) {
      var i, r, o = _(t),
        s = _(n);
      if (E(o) && E(s)) {
        var a, l;
        if (x(o, s) && R(n, o, o.length - s.length)) return void(a = e.lines).push.apply(a, f(o));
        if (x(s, o) && R(t, s, s.length - o.length)) return void(l = e.lines).push.apply(l, f(s))
      } else if (r = s, (i = o).length === r.length && x(i, r)) {
        var c;
        return void(c = e.lines).push.apply(c, f(o))
      }
      O(e, o, s)
    }

    function H(e, t, n, i) {
      var r, o = _(t),
        s = function(e, t) {
          for (var n = [], i = [], r = 0, o = !1, s = !1; r < t.length && e.index < e.lines.length;) {
            var a = e.lines[e.index],
              l = t[r];
            if ("+" === l[0]) break;
            if (o = o || " " !== a[0], i.push(l), r++, "+" === a[0])
              for (s = !0;
                "+" === a[0];) n.push(a), a = e.lines[++e.index];
            l.substr(1) === a.substr(1) ? (n.push(a), e.index++) : s = !0
          }
          if ("+" === (t[r] || "")[0] && o && (s = !0), s) return n;
          for (; r < t.length;) i.push(t[r++]);
          return {
            merged: i,
            changes: n
          }
        }(n, o);
      s.merged ? (r = e.lines).push.apply(r, f(s.merged)) : O(e, i ? s : o, i ? o : s)
    }

    function O(e, t, n) {
      e.conflict = !0, e.lines.push({
        conflict: !0,
        mine: t,
        theirs: n
      })
    }

    function B(e, t, n) {
      for (; t.offset < n.offset && t.index < t.lines.length;) {
        var i = t.lines[t.index++];
        e.lines.push(i), t.offset++
      }
    }

    function F(e, t) {
      for (; t.index < t.lines.length;) {
        var n = t.lines[t.index++];
        e.lines.push(n)
      }
    }

    function _(e) {
      for (var t = [], n = e.lines[e.index][0]; e.index < e.lines.length;) {
        var i = e.lines[e.index];
        if ("-" === n && "+" === i[0] && (n = "+"), n !== i[0]) break;
        t.push(i), e.index++
      }
      return t
    }

    function E(e) {
      return e.reduce(function(e, t) {
        return e && "-" === t[0]
      }, !0)
    }

    function R(e, t, n) {
      for (var i = 0; i < n; i++) {
        var r = t[t.length - n + i].substr(1);
        if (e.lines[e.index + i] !== " " + r) return !1
      }
      return e.index += n, !0
    }
    b.tokenize = function(e) {
      return e.slice()
    }, b.join = b.removeEmpty = function(e) {
      return e
    }, e.Diff = t, e.diffChars = function(e, t, n) {
      return i.diff(e, t, n)
    }, e.diffWords = function(e, t, n) {
      return n = r(n, {
        ignoreWhitespace: !0
      }), a.diff(e, t, n)
    }, e.diffWordsWithSpace = function(e, t, n) {
      return a.diff(e, t, n)
    }, e.diffLines = c, e.diffTrimmedLines = function(e, t, n) {
      var i = r(n, {
        ignoreWhitespace: !0
      });
      return l.diff(e, t, i)
    }, e.diffSentences = function(e, t, n) {
      return h.diff(e, t, n)
    }, e.diffCss = function(e, t, n) {
      return u.diff(e, t, n)
    }, e.diffJson = function(e, t, n) {
      return g.diff(e, t, n)
    }, e.diffArrays = function(e, t, n) {
      return b.diff(e, t, n)
    }, e.structuredPatch = w, e.createTwoFilesPatch = S, e.createPatch = function(e, t, n, i, r, o) {
      return S(e, e, t, n, i, r, o)
    }, e.applyPatch = k, e.applyPatches = function(e, t) {
      "string" == typeof e && (e = m(e));
      var n = 0;
      ! function i() {
        var r = e[n++];
        if (!r) return t.complete();
        t.loadFile(r, function(e, n) {
          if (e) return t.complete(e);
          var o = k(n, r, t);
          t.patched(r, o, function(e) {
            if (e) return t.complete(e);
            i()
          })
        })
      }()
    }, e.parsePatch = m, e.merge = function(e, t, n) {
      e = A(e, n), t = A(t, n);
      var i = {};
      (e.index || t.index) && (i.index = e.index || t.index), (e.newFileName || t.newFileName) && (z(e) ? z(t) ? (i.oldFileName = T(i, e.oldFileName, t.oldFileName), i.newFileName = T(i, e.newFileName, t.newFileName), i.oldHeader = T(i, e.oldHeader, t.oldHeader), i.newHeader = T(i, e.newHeader, t.newHeader)) : (i.oldFileName = e.oldFileName, i.newFileName = e.newFileName, i.oldHeader = e.oldHeader, i.newHeader = e.newHeader) : (i.oldFileName = t.oldFileName || e.oldFileName, i.newFileName = t.newFileName || e.newFileName, i.oldHeader = t.oldHeader || e.oldHeader, i.newHeader = t.newHeader || e.newHeader)), i.hunks = [];
      for (var r = 0, o = 0, s = 0, a = 0; r < e.hunks.length || o < t.hunks.length;) {
        var l = e.hunks[r] || {
            oldStart: 1 / 0
          },
          c = t.hunks[o] || {
            oldStart: 1 / 0
          };
        if (L(l, c)) i.hunks.push(j(l, s)), r++, a += l.newLines - l.oldLines;
        else if (L(c, l)) i.hunks.push(j(c, a)), o++, s += c.newLines - c.oldLines;
        else {
          var h = {
            oldStart: Math.min(l.oldStart, c.oldStart),
            oldLines: 0,
            newStart: Math.min(l.newStart + s, c.oldStart + a),
            newLines: 0,
            lines: []
          };
          P(h, l.oldStart, l.lines, c.oldStart, c.lines), o++, r++, i.hunks.push(h)
        }
      }
      return i
    }, e.convertChangesToDMP = function(e) {
      for (var t, n, i = [], r = 0; r < e.length; r++) t = e[r], n = t.added ? 1 : t.removed ? -1 : 0, i.push([n, t.value]);
      return i
    }, e.convertChangesToXML = function(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var i = e[n];
        i.added ? t.push("<ins>") : i.removed && t.push("<del>"), t.push((r = i.value, void 0, r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))), i.added ? t.push("</ins>") : i.removed && t.push("</del>")
      }
      var r;
      return t.join("")
    }, e.canonicalize = v, Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }(t)
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
    }),
    function(e) {
      e.showSolutionButton = "showSolutions", e.retryButton = "tryAgain", e.checkAllButton = "checkAnswer", e.notFilledOutWarning = "notFilledOut", e.tipButton = "tipLabel", e.typoMessage = "spellingMistakeWarning", e.scoreBarLabel = "scoreBarLabel"
    }(t.LocalizationLabels || (t.LocalizationLabels = {})),
    function(e) {
      e.confirmCheck = "confirmCheck", e.confirmRetry = "confirmRetry", e.overallFeedback = "overallFeedback"
    }(t.LocalizationStructures || (t.LocalizationStructures = {}));
  var i = function() {
    function e(e) {
      this.h5pConfiguration = e
    }
    return e.prototype.getText = function(e) {
      return this.h5pConfiguration[e]
    }, e.prototype.labelToString = function(e) {
      return e.toString()
    }, e.prototype.getTextFromLabel = function(e) {
      return this.getText(this.labelToString(e))
    }, e.prototype.getObjectForStructure = function(e) {
      return this.h5pConfiguration[e.toString()]
    }, e
  }();
  t.H5PLocalization = i
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), n(8);
  var i = n(13);
  H5P = H5P || {}, H5P.AdvancedBlanks = i.default
}, function(e, t, n) {
  var i = n(9);
  "string" == typeof i && (i = [
    [e.i, i, ""]
  ]);
  var r = {
    hmr: !0,
    transform: void 0,
    insertInto: void 0
  };
  n(11)(i, r);
  i.locals && (e.exports = i.locals)
}, function(e, t, n) {
  (e.exports = n(10)(!1)).push([e.i, ".h5p-advanced-blanks {\n    position: relative;\n}\n\n\n/* Text */\n\n.h5p-advanced-blanks #h5p-cloze-container p,\n.h5p-advanced-blanks #h5p-cloze-container div {\n    line-height: 1.8em;\n    margin: 0 0 1em;\n    text-align: justify;\n}\n\n@media only screen and (min-width: 480px) {\n    .h5p-advanced-blanks #h5p-cloze-container p,\n    .h5p-advanced-blanks #h5p-cloze-container div {\n        text-align: unset;\n    }\n}\n\n\n/* Input */\n\n.h5p-advanced-blanks .h5p-input-wrapper {\n    display: inline-block;\n    position: relative;\n}\n\n.h5p-advanced-blanks .blank .h5p-text-input {\n    font-family: H5PDroidSans, sans-serif;\n    font-size: 1em;\n    border-radius: 0.25em;\n    border: 1px solid #a0a0a0;\n    padding: 0.1875em 1.5em 0.1875em 0.5em;\n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n\n.h5p-advanced-blanks .blank input.h5p-text-input {\n  max-width: calc(100vw - 64px);\n}\n\n.h5p-advanced-blanks .blank select.h5p-text-input {\n  max-width: calc(100vw - 36px);\n}\n\n/* IE + Chrome specific fixes */\n\n.h5p-text-input::-ms-clear {\n    display: none;\n}\n\n:not(.correct).blank.has-tip button {\n    cursor: pointer;\n}\n\n\n/* Select mode */\n\nselect.h5p-text-input {\n    appearance: button;\n    -moz-appearance: none;\n    -webkit-appearance: button;\n}\n\n\n/* Showing solution input */\n\n.h5p-advanced-blanks .blank.showing-solution .h5p-text-input {\n    border: 1px dashed #9dd8bb;\n    color: #255c41;\n    background: #FFFFFF;\n}\n\n\n/* Focussed input */\n\n.h5p-advanced-blanks .blank .h5p-text-input:focus {\n    outline: none;\n    box-shadow: 0 0 0.5em 0 #7fb8ff;\n    border-color: #7fb8ff;\n}\n\n\n/* Correctly answered input */\n\n.h5p-advanced-blanks .blank.correct .h5p-text-input {\n    background: #9dd8bb;\n    border: 1px solid #9dd8bb;\n    color: #255c41;\n}\n\n.h5p-advanced-blanks .blank.correct .h5p-input-wrapper:after {\n    position: absolute;\n    right: 0.5em;    \n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    text-decoration: none;\n    content: \"\\f00c\";\n    font-family: 'H5PFontAwesome4';\n    color: #255c41;\n}\n\n\n/* Incorrect answers */\n\n.h5p-advanced-blanks .blank.error .h5p-text-input {\n    background-color: #f7d0d0;\n    border: 1px solid #f7d0d0;\n    color: #b71c1c;\n    text-decoration: line-through;\n}\n\n.h5p-advanced-blanks .blank.error .h5p-input-wrapper:after {\n    position: absolute;\n    right: 0.5em;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    font-family: 'H5PFontAwesome4';\n    text-decoration: none;\n    content: \"\\f00d\";\n    color: #b71c1c;\n}\n\n\n/* Spelling errors */\n\n.h5p-advanced-blanks .blank.retry .h5p-text-input {\n    background-color: #ffff99;\n    border: 1px solid #ffff99;\n    color: black;\n}\n\n.h5p-advanced-blanks .blank.retry .h5p-input-wrapper:after {\n    position: absolute;\n    right: 0.5em;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    font-family: 'H5PFontAwesome4';\n    text-decoration: none;\n    content: \"\\f00d\";\n    color: #b71c1c;\n}\n\n\n/* Buttons */\n\n.h5p-advanced-blanks .blank button {\n    padding-left: 5px;\n    padding-right: 5px;\n    border: none;\n    background: none;\n}\n\n\n/* Highlight in spelling mistake marker */\n\n.spelling-mistake .missing-character,\n.spelling-mistake .mistaken-character {\n    color: red;\n    font-weight: bold;\n    -webkit-animation-duration: 500ms;\n            animation-duration: 500ms;\n    -webkit-animation-name: blink-color;\n            animation-name: blink-color;\n    -webkit-animation-iteration-count: 13;\n            animation-iteration-count: 13;\n    -webkit-animation-direction: alternate;\n            animation-direction: alternate;\n}\n\n@-webkit-keyframes blink-color {\n    from {\n        color: initial;\n    }\n    to {\n        color: red;\n    }\n}\n\n@keyframes blink-color {\n    from {\n        color: initial;\n    }\n    to {\n        color: red;\n    }\n}\n\n.spelling-mistake .mistaken-character {\n    text-decoration: line-through;\n}\n\n\n/* Highlights in text */\n\n.h5p-advanced-blanks .highlighted {\n    background-color: rgba(255, 0, 0, 0.2);\n    padding: 0.4em;\n    margin: -0.4em;\n    -webkit-animation-duration: 1000ms;\n            animation-duration: 1000ms;\n    -webkit-animation-name: blink-background-color;\n            animation-name: blink-background-color;\n    -webkit-animation-iteration-count: 3;\n            animation-iteration-count: 3;\n    -webkit-animation-direction: alternate;\n            animation-direction: alternate;\n}\n\n@-webkit-keyframes blink-background-color {\n    from {\n        background-color: initial;\n    }\n    to {\n        background-color: rgba(255, 0, 0, 0.2);\n    }\n}\n\n@keyframes blink-background-color {\n    from {\n        background-color: initial;\n    }\n    to {\n        background-color: rgba(255, 0, 0, 0.2);\n    }\n}\n\n\n/* Others */\n\n.h5p-advanced-blanks .invisible {\n    visibility: collapse;\n}\n\n\n/* Tips */\n\n.h5p-advanced-blanks .h5p-tip-container {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  right: 0.4em;\n  font-size: 1em;\n}\n\n.h5p-advanced-blanks .blank.has-tip:not(.correct):not(.error):not(.retry) .h5p-text-input {\n    padding-right: 2.25em;\n}\n\n.h5p-advanced-blanks .blank.has-tip.correct .h5p-input-wrapper:after,\n.h5p-advanced-blanks .blank.has-tip.error .h5p-input-wrapper:after,\n.h5p-advanced-blanks .blank.has-tip.retry .h5p-input-wrapper:after {\n    right: 2.25em;\n}\n\n.h5p-advanced-blanks .blank.correct.has-tip .h5p-text-input,\n.h5p-advanced-blanks .blank.error.has-tip .h5p-text-input,\n.h5p-advanced-blanks .blank.retry.has-tip .h5p-text-input {\n    padding-right: 3.5em;\n}\n\n/* improves appearance of h5p tip shadows */\n.h5p-advanced-blanks .joubel-icon-tip-normal .h5p-icon-shadow:before {\n  color: black;\n  opacity: 0.13;\n}\n\n/* pending feedback marker */\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank:not(.has-pending-feedback) button.h5p-notification {\n    display: none;\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.has-pending-feedback button.h5p-notification {\n    font-size: large;    \n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.has-pending-feedback button.h5p-notification,\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.has-pending-feedback .h5p-input-wrapper:before {\n    font-family: 'H5PFontAwesome4';\n    text-decoration: none;\n    animation: shake 3s cubic-bezier(.36, .07, .19, .97) reverse;\n    -webkit-animation-iteration-count: 2;\n            animation-iteration-count: 2;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-perspective: 1000px;\n            perspective: 1000px;\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.has-pending-feedback .h5p-input-wrapper:before {\n    position: absolute;\n    left: -0.4em;\n    top: -0.7em;\n    content: \"\\f05a\";\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.error.has-pending-feedback button.h5p-notification,\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.error.has-pending-feedback .h5p-input-wrapper:before {\n    color: #b71c1c;\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.retry.has-pending-feedback button.h5p-notification,\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.retry.has-pending-feedback .h5p-input-wrapper:before {\n    color: #ffff00;\n    text-shadow: 0px 0px 0.5em black;\n}\n\n@-webkit-keyframes shake {\n    2%,\n    20% {\n        -webkit-transform: translate3d(-0.5px, 0, 0);\n                transform: translate3d(-0.5px, 0, 0);\n    }\n    4%,\n    17% {\n        -webkit-transform: translate3d(1px, 0, 0);\n                transform: translate3d(1px, 0, 0);\n    }\n    6%,\n    10%,\n    15% {\n        -webkit-transform: translate3d(-2px, 0, 0);\n                transform: translate3d(-2px, 0, 0);\n    }\n    9%,\n    13% {\n        -webkit-transform: translate3d(2px, 0, 0);\n                transform: translate3d(2px, 0, 0);\n    }\n}\n\n@keyframes shake {\n    2%,\n    20% {\n        -webkit-transform: translate3d(-0.5px, 0, 0);\n                transform: translate3d(-0.5px, 0, 0);\n    }\n    4%,\n    17% {\n        -webkit-transform: translate3d(1px, 0, 0);\n                transform: translate3d(1px, 0, 0);\n    }\n    6%,\n    10%,\n    15% {\n        -webkit-transform: translate3d(-2px, 0, 0);\n                transform: translate3d(-2px, 0, 0);\n    }\n    9%,\n    13% {\n        -webkit-transform: translate3d(2px, 0, 0);\n                transform: translate3d(2px, 0, 0);\n    }\n}", ""])
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    var t = [];
    return t.toString = function() {
      return this.map(function(t) {
        var n = function(e, t) {
          var n = e[1] || "",
            i = e[3];
          if (!i) return n;
          if (t && "function" == typeof btoa) {
            var r = (s = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"),
              o = i.sources.map(function(e) {
                return "/*# sourceURL=" + i.sourceRoot + e + " */"
              });
            return [n].concat(o).concat([r]).join("\n")
          }
          var s;
          return [n].join("\n")
        }(t, e);
        return t[2] ? "@media " + t[2] + "{" + n + "}" : n
      }).join("")
    }, t.i = function(e, n) {
      "string" == typeof e && (e = [
        [null, e, ""]
      ]);
      for (var i = {}, r = 0; r < this.length; r++) {
        var o = this[r][0];
        null != o && (i[o] = !0)
      }
      for (r = 0; r < e.length; r++) {
        var s = e[r];
        null != s[0] && i[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), t.push(s))
      }
    }, t
  }
}, function(e, t, n) {
  var i, r, o = {},
    s = (i = function() {
      return window && document && document.all && !window.atob
    }, function() {
      return void 0 === r && (r = i.apply(this, arguments)), r
    }),
    a = function(e) {
      var t = {};
      return function(e, n) {
        if ("function" == typeof e) return e();
        if (void 0 === t[e]) {
          var i = function(e, t) {
            return t ? t.querySelector(e) : document.querySelector(e)
          }.call(this, e, n);
          if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
            i = i.contentDocument.head
          } catch (e) {
            i = null
          }
          t[e] = i
        }
        return t[e]
      }
    }(),
    l = null,
    c = 0,
    h = [],
    u = n(12);

  function p(e, t) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n],
        r = o[i.id];
      if (r) {
        r.refs++;
        for (var s = 0; s < r.parts.length; s++) r.parts[s](i.parts[s]);
        for (; s < i.parts.length; s++) r.parts.push(m(i.parts[s], t))
      } else {
        var a = [];
        for (s = 0; s < i.parts.length; s++) a.push(m(i.parts[s], t));
        o[i.id] = {
          id: i.id,
          refs: 1,
          parts: a
        }
      }
    }
  }

  function f(e, t) {
    for (var n = [], i = {}, r = 0; r < e.length; r++) {
      var o = e[r],
        s = t.base ? o[0] + t.base : o[0],
        a = {
          css: o[1],
          media: o[2],
          sourceMap: o[3]
        };
      i[s] ? i[s].parts.push(a) : n.push(i[s] = {
        id: s,
        parts: [a]
      })
    }
    return n
  }

  function d(e, t) {
    var n = a(e.insertInto);
    if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
    var i = h[h.length - 1];
    if ("top" === e.insertAt) i ? i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), h.push(t);
    else if ("bottom" === e.insertAt) n.appendChild(t);
    else {
      if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
      var r = a(e.insertAt.before, n);
      n.insertBefore(t, r)
    }
  }

  function g(e) {
    if (null === e.parentNode) return !1;
    e.parentNode.removeChild(e);
    var t = h.indexOf(e);
    t >= 0 && h.splice(t, 1)
  }

  function v(e) {
    var t = document.createElement("style");
    if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
      var i = function() {
        0;
        return n.nc
      }();
      i && (e.attrs.nonce = i)
    }
    return b(t, e.attrs), d(e, t), t
  }

  function b(e, t) {
    Object.keys(t).forEach(function(n) {
      e.setAttribute(n, t[n])
    })
  }

  function m(e, t) {
    var n, i, r, o;
    if (t.transform && e.css) {
      if (!(o = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css))) return function() {};
      e.css = o
    }
    if (t.singleton) {
      var s = c++;
      n = l || (l = v(t)), i = w.bind(null, n, s, !1), r = w.bind(null, n, s, !0)
    } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
      var t = document.createElement("link");
      return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", b(t, e.attrs), d(e, t), t
    }(t), i = function(e, t, n) {
      var i = n.css,
        r = n.sourceMap,
        o = void 0 === t.convertToAbsoluteUrls && r;
      (t.convertToAbsoluteUrls || o) && (i = u(i));
      r && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
      var s = new Blob([i], {
          type: "text/css"
        }),
        a = e.href;
      e.href = URL.createObjectURL(s), a && URL.revokeObjectURL(a)
    }.bind(null, n, t), r = function() {
      g(n), n.href && URL.revokeObjectURL(n.href)
    }) : (n = v(t), i = function(e, t) {
      var n = t.css,
        i = t.media;
      i && e.setAttribute("media", i);
      if (e.styleSheet) e.styleSheet.cssText = n;
      else {
        for (; e.firstChild;) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(n))
      }
    }.bind(null, n), r = function() {
      g(n)
    });
    return i(e),
      function(t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
          i(e = t)
        } else r()
      }
  }
  e.exports = function(e, t) {
    if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
    (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = s()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
    var n = f(e, t);
    return p(n, t),
      function(e) {
        for (var i = [], r = 0; r < n.length; r++) {
          var s = n[r];
          (a = o[s.id]).refs--, i.push(a)
        }
        e && p(f(e, t), t);
        for (r = 0; r < i.length; r++) {
          var a;
          if (0 === (a = i[r]).refs) {
            for (var l = 0; l < a.parts.length; l++) a.parts[l]();
            delete o[a.id]
          }
        }
      }
  };
  var y, k = (y = [], function(e, t) {
    return y[e] = t, y.filter(Boolean).join("\n")
  });

  function w(e, t, n, i) {
    var r = n ? "" : i.css;
    if (e.styleSheet) e.styleSheet.cssText = k(t, r);
    else {
      var o = document.createTextNode(r),
        s = e.childNodes;
      s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(o, s[t]) : e.appendChild(o)
    }
  }
}, function(e, t) {
  e.exports = function(e) {
    var t = "undefined" != typeof window && window.location;
    if (!t) throw new Error("fixUrls requires window.location");
    if (!e || "string" != typeof e) return e;
    var n = t.protocol + "//" + t.host,
      i = n + t.pathname.replace(/\/[^\/]*$/, "/");
    return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
      var r, o = t.trim().replace(/^"(.*)"$/, function(e, t) {
        return t
      }).replace(/^'(.*)'$/, function(e, t) {
        return t
      });
      return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? e : (r = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : i + o.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")")
    })
  }
}, function(e, t, n) {
  "use strict";
  var i, r = this && this.__extends || (i = function(e, t) {
    return (i = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(e, t) {
        e.__proto__ = t
      } || function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
      })(e, t)
  }, function(e, t) {
    function n() {
      this.constructor = e
    }
    i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  });
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o, s = n(0),
    a = n(16),
    l = n(18),
    c = n(6),
    h = n(25),
    u = n(26),
    p = n(27),
    f = n(28),
    d = n(29);
  ! function(e) {
    e.ongoing = "ongoing", e.checking = "checking", e.showingSolutions = "showing-solution", e.finished = "finished", e.showingSolutionsEmbedded = "showing-solution-embedded"
  }(o || (o = {}));
  var g = function(e) {
    function t(t, n, i) {
      void 0 === i && (i = {});
      var r, g = e.call(this) || this;
      g.answered = !1, g.onScoreChanged = function(e, t) {
        g.clozeController.isFullyFilledOut ? (g.transitionState(), g.state !== o.finished && (g.state = o.checking), g.showFeedback()) : g.setFeedback("", e, t), g.transitionState(), g.toggleButtonVisibility(g.state)
      }, g.onTyped = function() {
        g.state === o.checking && (g.state = o.ongoing, g.toggleButtonVisibility(g.state)), g.triggerXAPI("interacted"), g.answered = !0
      }, g.onAutoChecked = function() {
        g.triggerXAPI("interacted"), g.triggerXAPIAnswered()
      }, g.attach = (r = g.attach, function(e) { 
        r(e), g.clozeController.initialize(g.container.get(0), e), g.clozeController.deserializeCloze(g.previousState) && (g.answered = g.clozeController.isFilledOut, g.settings.autoCheck && g.onCheckAnswer(), g.toggleButtonVisibility(g.state))
      }), g.registerDomElements = function() {
        this.registerMedia(), this.setIntroduction(this.repository.getTaskDescription()), this.container = this.jQuery("<div/>", {
          class: "h5p-advanced-blanks"
        }), this.setContent(this.container), this.registerButtons(), this.moveToState(o.ongoing)
      }, g.onCheckAnswer = function() {
        g.clozeController.checkAll(), g.triggerXAPI("interacted"), g.triggerXAPIAnswered(), g.transitionState(), g.state !== o.finished && (g.state = o.checking), g.showFeedback(),g.triggerXAPIScored(0, 1, "submitted-curriki"), g.toggleButtonVisibility(g.state)
      }, g.transitionState = function() {
        g.clozeController.isSolved && g.moveToState(o.finished)
      }, g.onShowSolution = function() {
        g.moveToState(o.showingSolutions), g.clozeController.showSolutions(), g.showFeedback()
      }, g.onRetry = function() {
        g.removeFeedback(), g.clozeController.reset(), g.answered = !1, g.moveToState(o.ongoing)
      }, g.getCurrentState = function() {
        return g.clozeController.serializeCloze()
      }, g.getAnswerGiven = function() {
        return g.answered || 0 === g.clozeController.maxScore
      }, g.getScore = function() {
        return g.onCheckAnswer(), g.clozeController.currentScore
      }, g.getMaxScore = function() {
        return g.clozeController.maxScore
      }, g.showSolutions = function() {
        g.onCheckAnswer(), g.onShowSolution(), g.moveToState(o.showingSolutionsEmbedded)
      }, g.resetTask = function() {
        g.onRetry()
      }, g.triggerXAPIAnswered = function() {
        g.answered = !0;
        var e = g.createXAPIEventTemplate("answered");
        g.addQuestionToXAPI(e), g.addResponseToXAPI(e), g.trigger(e)
      }, g.getXAPIData = function() {
        var e = g.createXAPIEventTemplate("answered");
        return g.addQuestionToXAPI(e), g.addResponseToXAPI(e), {
          statement: e.data.statement
        }
      }, g.getxAPIDefinition = function() {
        var e = new f.XAPIActivityDefinition;
        e.description = {
          "en-US": "<p>" + g.repository.getTaskDescription() + "</p>" + g.repository.getClozeText()
        }, e.type = "http://adlnet.gov/expapi/activities/cmi.interaction", e.interactionType = "fill-in", e.correctResponsesPattern = [];
        for (var t = "{case_matters=" + g.settings.caseSensitive + "}", n = 0, i = d.createPermutations(g.clozeController.getCorrectAnswerList()); n < i.length; n++) {
          var r = i[n];
          e.correctResponsesPattern.push(t + r.join("[,]"))
        }
        return e
      }, g.addQuestionToXAPI = function(e) {
        var t = e.getVerifiedStatementValue(["object", "definition"]);
        g.jQuery.extend(t, g.getxAPIDefinition())
      }, g.addResponseToXAPI = function(e) {
        e.setScoredResult(g.clozeController.currentScore, g.clozeController.maxScore, g), e.data.statement.result.response = g.getxAPIResponse()
      }, g.getxAPIResponse = function() {
        return g.getCurrentState().join("[,]")
      }, g.jQuery = H5P.jQuery, g.contentId = n;
      var v = new p.Unrwapper(g.jQuery);
      return g.settings = new h.H5PSettings(t), g.localization = new c.H5PLocalization(t), g.repository = new a.H5PDataRepository(t, g.settings, g.localization, g.jQuery, v), g.messageService = new u.MessageService(g.jQuery), s.BlankLoader.initialize(g.settings, g.localization, g.jQuery, g.messageService), g.clozeController = new l.ClozeController(g.repository, g.settings, g.localization, g.messageService), g.clozeController.onScoreChanged = g.onScoreChanged, g.clozeController.onSolved = g.onSolved, g.clozeController.onAutoChecked = g.onAutoChecked, g.clozeController.onTyped = g.onTyped, i && i.previousState && (g.previousState = i.previousState), g
    }
    return r(t, e), t.prototype.onSolved = function() {}, t.prototype.getH5pContainer = function() {
      var e = this.jQuery('[data-content-id="' + this.contentId + '"].h5p-content'),
        t = e.parents(".h5p-container");
      return 0 !== t.length ? t.last() : 0 !== e.length ? e : this.jQuery(document.body)
    }, t.prototype.registerMedia = function() {
      var e = this.repository.getMedia();
      if (e && e.library) {
        var t = e.library.split(" ")[0];
        "H5P.Image" === t ? e.params.file && this.setImage(e.params.file.path, {
          disableImageZooming: this.settings.disableImageZooming,
          alt: e.params.alt
        }) : "H5P.Video" === t && e.params.sources && this.setVideo(e)
      }
    }, t.prototype.registerButtons = function() {
      var e = this.getH5pContainer();
      var custom_current_obj = this;
      this.settings.autoCheck || this.addButton("check-answer", "Submit Answers", this.onCheckAnswer, !0, {}, {
        confirmationDialog: {
          enable: this.settings.confirmCheckDialog,
          l10n: this.localization.getObjectForStructure(c.LocalizationStructures.confirmCheck),
          instance: this,
          $parentElement: e
        }
      })/*,this.addButton("show-summary", "View summary", function () {
        var obj_xapi_rst = custom_current_obj.createXAPIEventTemplate("answered");
        custom_current_obj.addQuestionToXAPI(obj_xapi_rst)
        custom_current_obj.addResponseToXAPI(obj_xapi_rst)
        custom_current_obj.trigger(obj_xapi_rst)
        // console.log(obj_xapi_rst);

        var correct_response = obj_xapi_rst.data.statement.object.definition.correctResponsesPattern;
        var response_rst = obj_xapi_rst.data.statement.result.response;
        var maxScore = custom_current_obj.getMaxScore();
        var userScore = custom_current_obj.getScore();

        var confirmationDialog = new H5P.ConfirmationDialog({
            headerText: 'Advanced Fill in the blanks summary',
            dialogText: custom_current_obj.showSummary(userScore,maxScore,correct_response,response_rst,obj_xapi_rst),
            cancelText: 'Cancel',
            confirmText: "Submit Answers",
            instance: this,
            $parentElement: e
          });
          confirmationDialog.on('confirmed', function () {
              // console.log("testing");
              // self.triggerXAPIScored(0, 1, 'submitted-curriki');
          });
          confirmationDialog.appendTo(parent.document.body);
          confirmationDialog.show();
    
      })*/,this.addButton("show-solution",this.localization.getTextFromLabel(c.LocalizationLabels.showSolutionButton), this.onShowSolution, this.settings.enableSolutionsButton), !0 === this.settings.enableRetry && this.addButton("try-again", this.localization.getTextFromLabel(c.LocalizationLabels.retryButton), this.onRetry, !0, {}, {
        confirmationDialog: {
          enable: this.settings.confirmRetryDialog,
          l10n: this.localization.getObjectForStructure(c.LocalizationStructures.confirmRetry),
          instance: this,
          $parentElement: e
        }
      })
    }, t.prototype.showSummary = function(userScore,maxScore,correct_response,response_rst,obj_xapi_rst) {
        var user_ans = false;
        var res = response_rst.split("[,]");
        for (var m =0; m < res.length; m++){
            if(res[m].length > 0){
               var user_ans = true;
               break;
            }
        }  
        if(user_ans == true){
          var table_content = '<tbody>';
          // var res = response_rst.split("[,]");
          for (var m =0; m < res.length; m++){
            if(res[m].length > 0){
              table_content += '<tr>'
              var correct_response_data = correct_response[0];
              var correct_response_data = correct_response_data.replace("{case_matters=false}", "");
              var correct_response_ary = correct_response_data.split("[,]"); 
              for (var n =0; n < correct_response_ary.length; n++){
                if(res[m] == correct_response_ary[m]){
                  var is_correct = 'Correct';
                  var ans_score = 1;
                }else{
                  var is_correct = 'InCorrect';
                  var ans_score = 0;
                }
              }
              table_content += '<td>'+res[m]+'</td>';
              table_content += '<td>'+is_correct+'</td>';
              table_content += '<td>'+ans_score+'</td>';
              table_content += '</tr>';
            }
          }  
          var correct_option_list_html = '<div class="custom-correct-sec"><b>Correct Words: </b>';
            var correct_response_data = correct_response[0];
            var correct_response_data = correct_response_data.replace("{case_matters=false}", "");
            var correct_response_ary = correct_response_data.split("[,]"); 
              for (var n =0; n < correct_response_ary.length; n++){
                if(n == 0){
                 correct_option_list_html += correct_response_ary[n];
                }else{
                  correct_option_list_html += ','+correct_response_ary[n];
                }
              }
          correct_option_list_html += '</div><br>';
          var summary_html = '<div class="custom-summary-section"><div class="h5p-summary-table-pages"><table class="h5p-score-table-custom" style="min-height:100px;width:100%"><thead><tr><th>Ans</th><th>Correct</th><th>Score</th></tr></thead>'+table_content+'</table></div></div>';
          var score_result = '<div class="custom-score-section"><b>Overall Score: </b>You got '+userScore+" of "+maxScore+' points.</div>';
          var summary_html = summary_html.concat(correct_option_list_html);  
          var summary_html = summary_html.concat(score_result); 
        }else{
          var summary_html = "You did not attempt activity yet.";
        }  
        return summary_html;
    }, t.prototype.showFeedback = function() {
      var e = H5P.Question.determineOverallFeedback(this.localization.getObjectForStructure(c.LocalizationStructures.overallFeedback), this.clozeController.currentScore / this.clozeController.maxScore).replace("@score", this.clozeController.currentScore).replace("@total", this.clozeController.maxScore);
      this.setFeedback(e, this.clozeController.currentScore, this.clozeController.maxScore, this.localization.getTextFromLabel(c.LocalizationLabels.scoreBarLabel))
    }, t.prototype.moveToState = function(e) {
      this.state = e, this.toggleButtonVisibility(e)
    }, t.prototype.toggleButtonVisibility = function(e) {
      this.settings.enableSolutionsButton && (!(e === o.checking || this.settings.autoCheck && e === o.ongoing) || this.settings.showSolutionsRequiresInput && !this.clozeController.allBlanksEntered ? this.hideButton("show-solution") : this.showButton("show-solution")), !this.settings.enableRetry || e !== o.checking && e !== o.finished && e !== o.showingSolutions ? this.hideButton("try-again") : this.showButton("try-again"), e === o.ongoing && this.settings.enableCheckButton ? this.showButton("check-answer") : this.hideButton("check-answer"), e === o.showingSolutionsEmbedded && (this.hideButton("check-answer"), this.hideButton("try-again"), this.hideButton("show-solution")), this.trigger("resize")
    }, t
  }(H5P.Question);
  t.default = g
}, function(e, t, n) {
  "use strict";
  var i, r = this && this.__extends || (i = function(e, t) {
    return (i = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(e, t) {
        e.__proto__ = t
      } || function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
      })(e, t)
  }, function(e, t) {
    function n() {
      this.constructor = e
    }
    i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  });
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(2),
    s = n(3),
    a = n(1),
    l = n(6),
    c = n(15),
    h = n(5),
    u = function(e) {
      function t(t, n, i, r, s) {
        var a = e.call(this) || this;
        return a.settings = t, a.localization = n, a.jquery = i, a.messageService = r, a.enteredText = "", a.correctAnswers = new Array, a.incorrectAnswers = new Array, a.choices = new Array, a.type = o.ClozeElementType.Blank, a.id = s, a
      }
      return r(t, e), t.prototype.finishInitialization = function() {
        this.settings.clozeType === a.ClozeType.Select && this.settings.selectAlternatives === a.SelectAlternatives.Alternatives && this.loadChoicesFromOwnAlternatives(), this.calculateMinTextLength()
      }, t.prototype.addCorrectAnswer = function(e) {
        this.correctAnswers.push(e)
      }, t.prototype.getCorrectAnswers = function() {
        for (var e = [], t = 0, n = this.correctAnswers; t < n.length; t++) {
          var i = n[t];
          e = e.concat(i.alternatives)
        }
        return e
      }, t.prototype.setHint = function(e) {
        this.hint = e, this.hasHint = "" !== this.hint.text
      }, t.prototype.addIncorrectAnswer = function(e, t, n, i) {
        this.incorrectAnswers.push(new s.Answer(e, t, n, i, this.settings))
      }, t.prototype.calculateMinTextLength = function() {
        for (var e = new Array, t = 0, n = this.correctAnswers; t < n.length; t++) {
          var i = n[t];
          e.push(c.getLongestString(i.alternatives))
        }
        if (this.settings.clozeType === a.ClozeType.Select)
          for (var r = 0, o = this.incorrectAnswers; r < o.length; r++) {
            var s = o[r];
            e.push(c.getLongestString(s.alternatives))
          }
        var l = c.getLongestString(e).length;
        this.minTextLength = Math.max(10, l - l % 10 + 10)
      }, t.prototype.loadChoicesFromOwnAlternatives = function() {
        this.choices = new Array;
        for (var e = 0, t = this.correctAnswers; e < t.length; e++)
          for (var n = 0, i = t[e].alternatives; n < i.length; n++) {
            var r = i[n];
            this.choices.push(r)
          }
        for (var o = 0, s = this.incorrectAnswers; o < s.length; o++)
          for (var a = 0, l = s[o].alternatives; a < l.length; a++) {
            r = l[a];
            this.choices.push(r)
          }
        return this.choices = c.shuffleArray(this.choices), this.choices.unshift(""), this.choices
      }, t.prototype.loadChoicesFromOtherBlanks = function(e) {
        for (var t = new Array, n = 0, i = this.correctAnswers; n < i.length; n++)
          for (var r = 0, o = i[n].alternatives; r < o.length; r++) {
            var s = o[r];
            t.push(s)
          }
        for (var a = new Array, l = 0, h = e; l < h.length; l++)
          for (var u = 0, p = h[l].correctAnswers; u < p.length; u++)
            for (var f = 0, d = p[u].alternatives; f < d.length; f++) {
              s = d[f];
              a.push(s)
            }
        a = c.shuffleArray(a);
        var g = this.settings.selectAlternativeRestriction;
        void 0 !== g && 0 !== g || (g = t.length + a.length);
        for (var v = g - t.length, b = 0; b < v && b < a.length; b++) t.indexOf(a[b]) >= 0 ? v++ : t.push(a[b]);
        return this.choices = c.shuffleArray(t), this.choices.unshift(""), this.choices
      }, t.prototype.reset = function() {
        this.enteredText = "", this.lastCheckedText = "", this.removeTooltip(), this.setAnswerState(a.MessageType.None), this.hasPendingFeedback = !1
      }, t.prototype.showSolution = function() {
        this.evaluateAttempt(!0), this.removeTooltip(), this.isCorrect || (this.enteredText = this.correctAnswers[0].alternatives[0], this.setAnswerState(a.MessageType.ShowSolution))
      }, t.prototype.onFocussed = function() {
        this.hasPendingFeedback && this.evaluateAttempt(!1), this.settings.clozeType === a.ClozeType.Select && (this.setAnswerState(a.MessageType.None), this.lastCheckedText = "")
      }, t.prototype.onDisplayFeedback = function() {
        this.hasPendingFeedback && this.evaluateAttempt(!1)
      }, t.prototype.displayTooltip = function(e, t, n, i) {
        n ? this.hasPendingFeedback = !0 : this.messageService.show(i || this.id, e, this, t)
      }, t.prototype.removeTooltip = function() {
        this.messageService.hide()
      }, t.prototype.setTooltipErrorText = function(e, t) {
        e.highlightedElement ? this.displayTooltip(e.text, a.MessageType.Error, t, e.highlightedElement.id) : this.displayTooltip(e.text, a.MessageType.Error, t)
      }, t.prototype.getSpellingMistakeMessage = function(e, t) {
        for (var n = this.localization.getTextFromLabel(l.LocalizationLabels.typoMessage), i = h.diffChars(e, t, {
            ignoreCase: !this.settings.caseSensitive
          }), r = this.jquery("<span/>", {
            class: "spelling-mistake"
          }), o = 0; o < i.length; o++) {
          var s = i[o],
            a = "";
          if (s.removed) {
            if (o !== i.length - 1 && i[o + 1].added) continue;
            s.value = s.value.replace(/./g, "_"), a = "missing-character"
          }
          s.added && (a = "mistaken-character");
          var c = this.jquery("<span/>", {
            class: a,
            html: s.value.replace(" ", "&nbsp;")
          });
          r.append(c)
        }
        return n = n.replace("@mistake", this.jquery("<span/>").append(r).html())
      }, t.prototype.evaluateAttempt = function(e, t) {
        var n = this;
        if (this.hasPendingFeedback || this.lastCheckedText !== this.enteredText || t) {
          this.lastCheckedText = this.enteredText.toString(), this.hasPendingFeedback = !1, this.removeTooltip();
          var i = this.correctAnswers.map(function(e) {
              return e.evaluateAttempt(n.enteredText)
            }).filter(function(e) {
              return e.correctness === s.Correctness.ExactMatch
            }).sort(function(e) {
              return e.characterDifferenceCount
            }),
            r = this.correctAnswers.map(function(e) {
              return e.evaluateAttempt(n.enteredText)
            }).filter(function(e) {
              return e.correctness === s.Correctness.CloseMatch
            }).sort(function(e) {
              return e.characterDifferenceCount
            }),
            o = this.incorrectAnswers.map(function(e) {
              return e.evaluateAttempt(n.enteredText)
            }).filter(function(e) {
              return e.correctness === s.Correctness.ExactMatch
            }).sort(function(e) {
              return e.characterDifferenceCount
            }),
            l = this.incorrectAnswers.map(function(e) {
              return e.evaluateAttempt(n.enteredText)
            }).filter(function(e) {
              return e.correctness === s.Correctness.CloseMatch
            }).sort(function(e) {
              return e.characterDifferenceCount
            });
          if (i.length > 0) return this.setAnswerState(a.MessageType.Correct), void(this.settings.caseSensitive || (this.enteredText = i[0].usedAlternative));
          if (o.length > 0) return this.setAnswerState(a.MessageType.Error), void this.showErrorTooltip(o[0].usedAnswer, e);
          if (r.length > 0) {
            if (this.settings.warnSpellingErrors) return this.displayTooltip(this.getSpellingMistakeMessage(r[0].usedAlternative, this.enteredText), a.MessageType.Retry, e), void this.setAnswerState(a.MessageType.Retry);
            if (this.settings.acceptSpellingErrors) return this.setAnswerState(a.MessageType.Correct), void(this.enteredText = r[0].usedAlternative)
          }
          if (l.length > 0) return this.setAnswerState(a.MessageType.Error), void this.showErrorTooltip(l[0].usedAnswer, e);
          var c = this.incorrectAnswers.filter(function(e) {
            return e.appliesAlways
          });
          c && c.length > 0 && this.showErrorTooltip(c[0], e), this.setAnswerState(a.MessageType.Error)
        }
      }, t.prototype.onTyped = function() {
        this.setAnswerState(a.MessageType.None), this.lastCheckedText = "", this.removeTooltip()
      }, t.prototype.lostFocus = function() {
        this.messageService.isActive(this) && this.messageService.hide()
      }, t.prototype.setAnswerState = function(e) {
        switch (this.isCorrect = !1, this.isError = !1, this.isRetry = !1, this.isShowingSolution = !1, e) {
          case a.MessageType.Correct:
            this.isCorrect = !0;
            break;
          case a.MessageType.Error:
            this.isError = !0;
            break;
          case a.MessageType.Retry:
            this.isRetry = !0;
            break;
          case a.MessageType.ShowSolution:
            this.isShowingSolution = !0
        }
      }, t.prototype.showErrorTooltip = function(e, t) {
        e.message && e.message.text && this.setTooltipErrorText(e.message, t), t || e.activateHighlight()
      }, t.prototype.showHint = function() {
        this.isShowingSolution || this.isCorrect || (this.removeTooltip(), this.hint && "" !== this.hint.text && (this.displayTooltip(this.hint.text, a.MessageType.Retry, !1), this.hint.highlightedElement && (this.hint.highlightedElement.isHighlighted = !0)))
      }, t.prototype.serialize = function() {
        return this.enteredText
      }, t.prototype.deserialize = function(e) {
        this.enteredText = e
      }, t
    }(o.ClozeElement);
  t.Blank = u
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getLongestString = function(e) {
    return e.reduce(function(e, t) {
      return t.length > e.length ? t : e
    }, "")
  }, t.shuffleArray = function(e) {
    for (var t = e.length - 1; t > 0; t--) {
      var n = Math.floor(Math.random() * (t + 1)),
        i = e[t];
      e[t] = e[n], e[n] = i
    }
    return e
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i = n(0),
    r = n(17),
    o = function() {
      function e(e, t, n, i, r) {
        this.h5pConfigData = e, this.settings = t, this.localization = n, this.jquery = i, this.unwrapper = r
      }
      return e.prototype.getClozeText = function() {
        return this.h5pConfigData.content.blanksText
      }, e.prototype.getFeedbackText = function() {
        return ""
      }, e.prototype.getMedia = function() {
        return this.h5pConfigData.media
      }, e.prototype.getTaskDescription = function() {
        return this.h5pConfigData.content.task
      }, e.prototype.getBlanks = function() {
        var e = new Array;
        if (!this.h5pConfigData.content.blanksList) return e;
        for (var t = 0; t < this.h5pConfigData.content.blanksList.length; t++) {
          var n = this.h5pConfigData.content.blanksList[t],
            r = n.correctAnswerText;
          if ("" !== r && void 0 !== r) {
            var o = i.BlankLoader.instance.createBlank("cloze" + t, r, n.hint, n.incorrectAnswersList);
            o.finishInitialization(), e.push(o)
          }
        }
        return e
      }, e.prototype.getSnippets = function() {
        var e = new Array;
        if (!this.h5pConfigData.snippets) return e;
        for (var t = 0; t < this.h5pConfigData.snippets.length; t++) {
          var n = this.h5pConfigData.snippets[t],
            i = new r.Snippet(n.snippetName, this.unwrapper.unwrap(n.snippetText));
          e.push(i)
        }
        return e
      }, e
    }();
  t.H5PDataRepository = o
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i = function() {
    return function(e, t) {
      this.name = e, this.text = t
    }
  }();
  t.Snippet = i
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i = n(0),
    r = n(19),
    o = n(1),
    s = n(22),
    a = function() {
      function e(e, t, n, i) {
        var r = this;
        this.repository = e, this.settings = t, this.localization = n, this.MessageService = i, this.highlightRactives = {}, this.blankRactives = {}, this.checkAll = function() {
          r.cloze.hideAllHighlights();
          for (var e = 0, t = r.cloze.blanks; e < t.length; e++) {
            var n = t[e];
            n.isCorrect || "" === n.enteredText || n.evaluateAttempt(!0, !0)
          }
          r.refreshCloze(), r.checkAndNotifyCompleteness()
        }, this.textTyped = function(e) {
          e.onTyped(), r.onTyped && r.onTyped(), r.refreshCloze()
        }, this.focus = function(e) {
          e.onFocussed(), r.refreshCloze()
        }, this.displayFeedback = function(e) {
          e.onDisplayFeedback(), r.refreshCloze()
        }, this.showHint = function(e) {
          r.cloze.hideAllHighlights(), e.showHint(), r.refreshCloze()
        }, this.requestCloseTooltip = function(e) {
          e.removeTooltip(), r.refreshCloze(), r.jquery.find("#" + e.id).focus()
        }, this.checkBlank = function(e, t) {
          if ("blur" !== t && "change" !== t || e.lostFocus(), "change" === t && r.onTyped && r.onTyped(), r.settings.autoCheck) {
            if (!e.enteredText || "" === e.enteredText) return;
            r.cloze.hideAllHighlights(), e.evaluateAttempt(!1), r.checkAndNotifyCompleteness(), r.refreshCloze(), r.onAutoChecked()
          }
          if ("enter" === t && (r.settings.autoCheck && e.isCorrect && !r.isSolved || !r.settings.autoCheck)) {
            for (var n, i = r.cloze.blanks.indexOf(e); i < r.cloze.blanks.length - 1 && !n;) i++, r.cloze.blanks[i].isCorrect || (n = r.cloze.blanks[i].id);
            n && r.jquery.find("#" + n).focus()
          }
        }, this.reset = function() {
          r.cloze.reset(), r.refreshCloze()
        }, this.showSolutions = function() {
          r.cloze.showSolutions(), r.refreshCloze()
        }, this.checkAndNotifyCompleteness = function() {
          return r.onScoreChanged && r.onScoreChanged(r.currentScore, r.maxScore), !!r.cloze.isSolved && (r.onSolved && r.onSolved(), !0)
        }
      }
      return Object.defineProperty(e.prototype, "maxScore", {
        get: function() {
          return this.cloze.blanks.length
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "currentScore", {
        get: function() {
          var e = this.cloze.blanks.filter(function(e) {
            return e.isCorrect
          }).length;
          return Math.max(0, e)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "allBlanksEntered", {
        get: function() {
          return !!this.cloze && this.cloze.blanks.every(function(e) {
            return e.isError || e.isCorrect || e.isRetry
          })
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "isSolved", {
        get: function() {
          return this.cloze.isSolved
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "isFilledOut", {
        get: function() {
          return !this.cloze || 0 === this.cloze.blanks.length || this.cloze.blanks.some(function(e) {
            return "" !== e.enteredText
          })
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "isFullyFilledOut", {
        get: function() {
          return !this.cloze || 0 === this.cloze.blanks.length || this.cloze.blanks.every(function(e) {
            return "" !== e.enteredText
          })
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.initialize = function(e, t) {
        this.jquery = t, this.isSelectCloze = this.settings.clozeType === o.ClozeType.Select;
        var n = this.repository.getBlanks();
        if (this.isSelectCloze && this.settings.selectAlternatives === o.SelectAlternatives.All)
          for (var s = 0, a = n; s < a.length; s++) {
            var l = a[s],
              c = n.filter(function(e) {
                return e !== l
              });
            l.loadChoicesFromOtherBlanks(c)
          }
        var h = this.repository.getSnippets();
        n.forEach(function(e) {
          return i.BlankLoader.instance.replaceSnippets(e, h)
        }), this.cloze = r.ClozeLoader.createCloze(this.repository.getClozeText(), n), this.createAndAddContainers(e).cloze.innerHTML = this.cloze.html, this.createRactiveBindings()
      }, e.prototype.createAndAddContainers = function(e) {
        var t = document.createElement("div");
        return t.id = "h5p-cloze-container", this.settings.clozeType === o.ClozeType.Select ? t.className = "h5p-advanced-blanks-select-mode" : t.className = "h5p-advanced-blanks-type-mode", e.appendChild(t), {
          cloze: t
        }
      }, e.prototype.createHighlightBinding = function(e) {
        this.highlightRactives[e.id] = new Ractive({
          el: "#container_" + e.id,
          template: n(23),
          data: {
            object: e
          }
        })
      }, e.prototype.createBlankBinding = function(e) {
        var t = new Ractive({
          el: "#container_" + e.id,
          template: n(24),
          data: {
            isSelectCloze: this.isSelectCloze,
            blank: e
          },
          events: {
            enter: s.enter,
            escape: s.escape,
            anykey: s.anykey
          }
        });
        t.on("checkBlank", this.checkBlank), t.on("showHint", this.showHint), t.on("textTyped", this.textTyped), t.on("closeMessage", this.requestCloseTooltip), t.on("focus", this.focus), t.on("displayFeedback", this.displayFeedback), this.blankRactives[e.id] = t
      }, e.prototype.createRactiveBindings = function() {
        for (var e = 0, t = this.cloze.highlights; e < t.length; e++) {
          var n = t[e];
          this.createHighlightBinding(n)
        }
        for (var i = 0, r = this.cloze.blanks; i < r.length; i++) {
          var o = r[i];
          this.createBlankBinding(o)
        }
      }, e.prototype.refreshCloze = function() {
        for (var e = 0, t = this.cloze.highlights; e < t.length; e++) {
          var n = t[e];
          this.highlightRactives[n.id].set("object", n)
        }
        for (var i = 0, r = this.cloze.blanks; i < r.length; i++) {
          var o = r[i];
          this.blankRactives[o.id].set("blank", o)
        }
      }, e.prototype.serializeCloze = function() {
        return this.cloze.serialize()
      }, e.prototype.deserializeCloze = function(e) {
        return !(!this.cloze || !e) && (this.cloze.deserialize(e), this.refreshCloze(), !0)
      }, e.prototype.getCorrectAnswerList = function() {
        if (!this.cloze || 0 === this.cloze.blanks.length) return [
          []
        ];
        for (var e = [], t = 0, n = this.cloze.blanks; t < n.length; t++) {
          var i = n[t];
          e.push(i.getCorrectAnswers())
        }
        return e
      }, e
    }();
  t.ClozeController = a
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i = n(0),
    r = n(2),
    o = n(20),
    s = n(21),
    a = function() {
      function e() {}
      return e.createCloze = function(t, n) {
        var i = new Array,
          r = new Array,
          o = new Array;
        t = e.normalizeBlankMarkings(t);
        var a = e.convertMarkupToSpans(t, n);
        t = a.html, i = a.orderedAllElementsList, r = a.highlightInstances, o = a.blanksInstances, e.linkHighlightsObjects(i, r, o);
        var l = new s.Cloze;
        return l.html = t, l.blanks = o, l.highlights = r, l
      }, e.convertMarkupToSpans = function(t, n) {
        var i = new Array,
          r = new Array,
          s = new Array,
          a = /!!(.{1,40}?)!!/i,
          l = 0,
          c = 0;
        do {
          var h = t.match(a),
            u = t.indexOf(e.normalizedBlankMarker);
          if (h && (h.index < u || u < 0)) {
            var p = new o.Highlight(h[1], "highlight_" + l);
            r.push(p), i.push(p), t = t.replace(a, "<span id='container_highlight_" + l + "'></span>"), l++
          } else if (u >= 0)
            if (c >= n.length) t = t.replace(e.normalizedBlankMarker, "<span></span>");
            else {
              var f = n[c];
              s.push(f), i.push(f), t = t.replace(e.normalizedBlankMarker, "<span id='container_" + f.id + "'></span>"), c++
            }
        } while (h || u >= 0);
        return {
          html: t,
          orderedAllElementsList: i,
          highlightInstances: r,
          blanksInstances: s
        }
      }, e.normalizeBlankMarkings = function(t) {
        return t = t.replace(/_{3,}/g, e.normalizedBlankMarker)
      }, e.linkHighlightsObjects = function(e, t, n) {
        for (var o = 0, s = n; o < s.length; o++) {
          var a = s[o],
            l = e.indexOf(a),
            c = e.slice(0, l).filter(function(e) {
              return e.type === r.ClozeElementType.Highlight
            }).map(function(e) {
              return e
            }).reverse(),
            h = e.slice(l + 1).filter(function(e) {
              return e.type === r.ClozeElementType.Highlight
            }).map(function(e) {
              return e
            });
          i.BlankLoader.instance.linkHighlightIdToObject(a, c, h)
        }
      }, e.normalizedBlankMarker = "___", e
    }();
  t.ClozeLoader = a
}, function(e, t, n) {
  "use strict";
  var i, r = this && this.__extends || (i = function(e, t) {
    return (i = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(e, t) {
        e.__proto__ = t
      } || function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
      })(e, t)
  }, function(e, t) {
    function n() {
      this.constructor = e
    }
    i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  });
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(2),
    s = function(e) {
      function t(t, n) {
        var i = e.call(this) || this;
        return i.type = o.ClozeElementType.Highlight, i.text = t, i.id = n, i.isHighlighted = !1, i
      }
      return r(t, e), t
    }(o.ClozeElement);
  t.Highlight = s
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i = function() {
    function e() {}
    return Object.defineProperty(e.prototype, "isSolved", {
      get: function() {
        return this.blanks.every(function(e) {
          return !0 === e.isCorrect
        })
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.hideAllHighlights = function() {
      for (var e = 0, t = this.highlights; e < t.length; e++) {
        t[e].isHighlighted = !1
      }
    }, e.prototype.reset = function() {
      this.hideAllHighlights();
      for (var e = 0, t = this.blanks; e < t.length; e++) {
        t[e].reset()
      }
    }, e.prototype.showSolutions = function() {
      for (var e = 0, t = this.blanks; e < t.length; e++) {
        t[e].showSolution()
      }
      this.hideAllHighlights()
    }, e.prototype.serialize = function() {
      for (var e = [], t = 0, n = this.blanks; t < n.length; t++) {
        var i = n[t];
        e.push(i.serialize())
      }
      return e
    }, e.prototype.deserialize = function(e) {
      for (var t = 0; t < e.length; t++) {
        if (t >= this.blanks.length) return;
        this.blanks[t].deserialize(e[t])
      }
    }, e
  }();
  t.Cloze = i
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return function(t, n) {
      function i(i) {
        var r = i.which || i.keyCode;
        e && r === e ? (i.preventDefault(), n({
          node: t,
          original: i
        })) : e || 0 !== [16, 17, 18, 35, 36, 13, 9, 27, 32, 37, 39, 40, 38].filter(function(e) {
          return e === r
        }).length || n({
          node: t,
          original: i
        })
      }
      return t.addEventListener("keydown", i, !1), {
        teardown: function() {
          t.removeEventListener("keydown", i, !1)
        }
      }
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.enter = i(13), t.tab = i(9), t.escape = i(27), t.space = i(32), t.leftarrow = i(37), t.rightarrow = i(39), t.downarrow = i(40), t.uparrow = i(38), t.anykey = i()
}, function(e, t) {
  e.exports = '<span {{#object.isHighlighted}}class="highlighted"{{/if}} id="{{object.id}}">{{{object.text}}}</span>'
}, function(e, t) {
  e.exports = '<span id="container{{id}}" class="blank {{#blank.hasPendingFeedback}}has-pending-feedback{{/if}} {{#blank.hasHint}}has-tip{{/if}} {{#blank.isCorrect}}correct{{/if}} {{#blank.isError}}error{{/if}} {{#blank.isRetry}}retry{{/if}} {{#blank.isShowingSolution}}showing-solution{{/if}}">\n  {{#unless isSelectCloze}}\n    <span class="h5p-input-wrapper">\n      <input id="{{blank.id}}" type="text" value="{{blank.enteredText}}" \n             size="{{blank.minTextLength}}" on-escape="@this.fire(\'closeMessage\', blank)" \n             on-enter="@this.fire(\'checkBlank\', blank, \'enter\')" \n             on-blur="@this.fire(\'checkBlank\', blank, \'blur\')" \n             on-focus="@this.fire(\'focus\', blank)"\n             on-anykey="@this.fire(\'textTyped\', blank)"\n             {{#(blank.isCorrect || blank.isShowingSolution)}}disabled="disabled"{{/if}}\n             class="h5p-text-input"\n             autocomplete="off"\n             autocapitalize="off"/>\n      {{#blank.hasHint}}\n        <span class="h5p-tip-container">\n          <button on-click="@this.fire(\'showHint\', blank)" {{#(blank.isCorrect || blank.isShowingSolution)}}disabled="disabled" {{/if}}>\n            <span class="joubel-tip-container" title="Tip" aria-label="Tip" aria-expanded="true" role="button" tabindex="0"><span class="joubel-icon-tip-normal "><span class="h5p-icon-shadow"></span><span class="h5p-icon-speech-bubble"></span><span class="h5p-icon-info"></span></span></span>\n          </button>\n        </span>\n        {{/if}}\n    </span>    \n  {{/unless}}\n  {{#if isSelectCloze}}\n      <button class="h5p-notification" on-click="@this.fire(\'displayFeedback\', blank)">\n        &#xf05a;\n      </button>\n      <span class="h5p-input-wrapper">      \n      <select id="{{blank.id}}" type="text" value="{{blank.enteredText}}"\n              on-enter="@this.fire(\'checkBlank\', blank, \'enter\')" \n              on-change="@this.fire(\'checkBlank\', blank, \'change\')"\n              on-focus="@this.fire(\'focus\', blank)"              \n              {{#(blank.isCorrect || blank.isShowingSolution)}}disabled="disabled"{{/if}} \n              size="1"\n              class="h5p-text-input">\n        {{#each blank.choices}}\n          <option>{{this}}</option>\n        {{/each}}\n      </select>                     \n      {{#blank.hasHint}}\n        <span class="h5p-tip-container">\n          <button on-click="@this.fire(\'showHint\', blank)" {{#(blank.isCorrect || blank.isShowingSolution)}}disabled="disabled"{{/if}}>\n            <span class="joubel-tip-container" title="Tip" aria-label="Tip" aria-expanded="true" role="button" tabindex="0"><span class="joubel-icon-tip-normal "><span class="h5p-icon-shadow"></span><span class="h5p-icon-speech-bubble"></span><span class="h5p-icon-info"></span></span></span>\n          </button>\n        </span>\n      {{/if}}     \n    </span>\n  {{/if}}\n</span>'
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i = n(1),
    r = function() {
      function e(e) {
        this.clozeType = i.ClozeType.Type, this.selectAlternatives = i.SelectAlternatives.Alternatives, this.selectAlternativeRestriction = 5, this.enableRetry = !0, this.enableSolutionsButton = !0, this.enableCheckButton = !0, this.autoCheck = !1, this.caseSensitive = !1, this.warnSpellingErrors = !0, this.acceptSpellingErrors = !1, this.showSolutionsRequiresInput = !0, this.confirmCheckDialog = !1, this.confirmRetryDialog = !1, this.disableImageZooming = !1, "selection" === e.behaviour.mode ? this.clozeType = i.ClozeType.Select : this.clozeType = i.ClozeType.Type, "all" === e.behaviour.selectAlternatives ? this.selectAlternatives = i.SelectAlternatives.All : "alternatives" === e.behaviour.selectAlternatives ? this.selectAlternatives = i.SelectAlternatives.Alternatives : this.selectAlternatives = i.SelectAlternatives.All, this.selectAlternativeRestriction = e.behaviour.selectAlternativeRestriction, this.enableRetry = e.behaviour.enableRetry, this.enableSolutionsButton = e.behaviour.enableSolutionsButton, this.enableCheckButton = e.behaviour.enableCheckButton, this.autoCheck = e.behaviour.autoCheck, this.caseSensitive = e.behaviour.caseSensitive, this.warnSpellingErrors = "warn" === e.behaviour.spellingErrorBehaviour, this.acceptSpellingErrors = "accept" === e.behaviour.spellingErrorBehaviour, this.showSolutionsRequiresInput = e.behaviour.showSolutionsRequiresInput, this.confirmCheckDialog = e.behaviour.confirmCheckDialog, this.confirmRetryDialog = e.behaviour.confirmRetryDialog, this.disableImageZooming = e.behaviour.disableImageZooming, this.enforceLogic()
      }
      return e.prototype.enforceLogic = function() {
        this.clozeType === i.ClozeType.Type ? (this.selectAlternatives = i.SelectAlternatives.All, this.selectAlternativeRestriction = 0) : (this.selectAlternativeRestriction === i.SelectAlternatives.Alternatives && (this.selectAlternativeRestriction = 0), this.warnSpellingErrors = !1, this.acceptSpellingErrors = !1, this.caseSensitive = !1)
      }, e
    }();
  t.H5PSettings = r
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i = n(1),
    r = function() {
      function e(e) {
        this.jQuery = e
      }
      return e.prototype.show = function(e, t, n, r) {
        r || (r = i.MessageType.None);
        var o = this.jQuery("#" + e);
        o.length > 0 && (this.speechBubble = new H5P.JoubelSpeechBubble(o, t), this.associatedBlank = n)
      }, e.prototype.hide = function() {
        if (this.speechBubble) try {
          this.speechBubble.remove()
        } catch (e) {}
        this.speechBubble = void 0, this.associatedBlank = void 0
      }, e.prototype.isActive = function(e) {
        return this.associatedBlank === e
      }, e
    }();
  t.MessageService = r
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i = function() {
    function e(e) {
      this.jquery = e
    }
    return e.prototype.unwrap = function(e) {
      var t = this.jquery(e);
      return 1 !== t.length ? e : t.unwrap().html()
    }, e
  }();
  t.Unrwapper = i
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i = function() {
    return function() {}
  }();
  t.XAPIActivityDefinition = i
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.createPermutations = function(e) {
    for (var t = [
        []
      ], n = 0, i = e; n < i.length; n++) {
      for (var r = [], o = 0, s = i[n]; o < s.length; o++)
        for (var a = s[o], l = 0, c = t; l < c.length; l++) {
          var h = c[l].slice();
          h.push(a), r.push(h)
        }
      t = r
    }
    return t
  }
}]);
