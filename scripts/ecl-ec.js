/* @ecl/preset-ec - 3.13.0 Built on 2024-01-10T11:24:35.166Z */
var ECL = function(e, moment) {
  "use strict";

  function n(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var i = 0, s = new Array(t); i < t; i++) s[i] = e[i];
    return s
  }

  function w(e, t) {
    var i, s = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (s) return (s = s.call(e)).next.bind(s);
    if (Array.isArray(e) || (s = function(e, t) {
        var i;
        if (e) return "string" == typeof e ? n(e, t) : "Map" === (i = "Object" === (i = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : i) || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? n(e, t) : void 0
      }(e)) || t && e && "number" == typeof e.length) return s && (e = s), i = 0,
      function() {
        return i >= e.length ? {
          done: !0
        } : {
          done: !1,
          value: e[i++]
        }
      };
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }
  Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
    for (var t = this; t;) {
      if (t.matches(e)) return t;
      t = t.parentElement
    }
    return null
  });

  function a(e, t) {
    return void 0 === t && (t = document), [].slice.call(t.querySelectorAll(e))
  }

  function o(e, t) {
    return (t = void 0 === t ? document : t).querySelector(e)
  }
  var k = ["root"];
  var F = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

  function t(e, t) {
    return e(t = {
      exports: {}
    }, t.exports), t.exports
  }
  var z = t(function(e, t) {
    var i;
    try {
      i = moment
    } catch (e) {}
    e.exports = function(moment) {
      var o = typeof moment === "function",
        l = !!window.addEventListener,
        p = window.document,
        c = window.setTimeout,
        a = function e(t, i, s, n) {
          if (l) t.addEventListener(i, s, !!n);
          else t.attachEvent("on" + i, s)
        },
        i = function e(t, i, s, n) {
          if (l) t.removeEventListener(i, s, !!n);
          else t.detachEvent("on" + i, s)
        },
        s = function e(t) {
          return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
        },
        r = function e(t, i) {
          return (" " + t.className + " ").indexOf(" " + i + " ") !== -1
        },
        m = function e(t, i) {
          if (!r(t, i)) t.className = t.className === "" ? i : t.className + " " + i
        },
        g = function e(t, i) {
          t.className = s((" " + t.className + " ").replace(" " + i + " ", " "))
        },
        f = function e(t) {
          return /Array/.test(Object.prototype.toString.call(t))
        },
        D = function e(t) {
          return /Date/.test(Object.prototype.toString.call(t)) && !isNaN(t.getTime())
        },
        N = function e(t) {
          var i = t.getDay();
          return i === 0 || i === 6
        },
        n = function e(t) {
          return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
        },
        P = function e(t, i) {
          return [31, n(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][i]
        },
        B = function e(t) {
          if (D(t)) t.setHours(0, 0, 0, 0)
        },
        R = function e(t, i) {
          return t.getTime() === i.getTime()
        },
        h = function e(t, i, s) {
          var n, l;
          for (n in i) {
            l = t[n] !== undefined;
            if (l && typeof i[n] === "object" && i[n] !== null && i[n].nodeName === undefined)
              if (D(i[n])) {
                if (s) t[n] = new Date(i[n].getTime())
              } else if (f(i[n])) {
              if (s) t[n] = i[n].slice(0)
            } else t[n] = e({}, i[n], s);
            else if (s || !l) t[n] = i[n]
          }
          return t
        },
        d = function e(t, i, s) {
          var n;
          if (p.createEvent) {
            n = p.createEvent("HTMLEvents");
            n.initEvent(i, true, false);
            n = h(n, s);
            t.dispatchEvent(n)
          } else if (p.createEventObject) {
            n = p.createEventObject();
            n = h(n, s);
            t.fireEvent("on" + i, n)
          }
        },
        u = function e(t) {
          if (t.month < 0) {
            t.year -= Math.ceil(Math.abs(t.month) / 12);
            t.month += 12
          }
          if (t.month > 11) {
            t.year += Math.floor(Math.abs(t.month) / 12);
            t.month -= 12
          }
          return t
        },
        v = {
          field: null,
          bound: undefined,
          ariaLabel: "Use the arrow keys to pick a date",
          position: "bottom left",
          reposition: true,
          format: "YYYY-MM-DD",
          toString: null,
          parse: null,
          defaultDate: null,
          setDefaultDate: false,
          firstDay: 0,
          firstWeekOfYearMinDays: 4,
          formatStrict: false,
          minDate: null,
          maxDate: null,
          yearRange: 10,
          showWeekNumber: false,
          pickWholeWeek: false,
          minYear: 0,
          maxYear: 9999,
          minMonth: undefined,
          maxMonth: undefined,
          startRange: null,
          endRange: null,
          isRTL: false,
          yearSuffix: "",
          showMonthAfterYear: false,
          showDaysInNextAndPreviousMonths: false,
          enableSelectionDaysInNextAndPreviousMonths: false,
          numberOfMonths: 1,
          mainCalendar: "left",
          container: undefined,
          blurFieldOnSelect: true,
          i18n: {
            previousMonth: "Previous Month",
            nextMonth: "Next Month",
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
          },
          theme: null,
          events: [],
          onSelect: null,
          onOpen: null,
          onClose: null,
          onDraw: null,
          keyboardInput: true
        },
        b = function e(t, i, s) {
          i += t.firstDay;
          while (i >= 7) i -= 7;
          return s ? t.i18n.weekdaysShort[i] : t.i18n.weekdays[i]
        },
        F = function e(t) {
          var i = [];
          var s = "false";
          if (t.isEmpty)
            if (t.showDaysInNextAndPreviousMonths) {
              i.push("is-outside-current-month");
              if (!t.enableSelectionDaysInNextAndPreviousMonths) i.push("is-selection-disabled")
            } else return '<td class="is-empty"></td>';
          if (t.isDisabled) i.push("is-disabled");
          if (t.isToday) i.push("is-today");
          if (t.isSelected) {
            i.push("is-selected");
            s = "true"
          }
          if (t.hasEvent) i.push("has-event");
          if (t.isInRange) i.push("is-inrange");
          if (t.isStartRange) i.push("is-startrange");
          if (t.isEndRange) i.push("is-endrange");
          return '<td data-day="' + t.day + '" class="' + i.join(" ") + '" aria-selected="' + s + '">' + '<button class="pika-button pika-day" type="button" ' + 'data-pika-year="' + t.year + '" data-pika-month="' + t.month + '" data-pika-day="' + t.day + '">' + t.day + "</button>" + "</td>"
        },
        y = function e(t, i) {
          t.setHours(0, 0, 0, 0);
          var s = t.getDate(),
            n = t.getDay(),
            l = i,
            a = l - 1,
            o = 7,
            r = function e(t) {
              return (t + o - 1) % o
            };
          t.setDate(s + a - r(n));
          var h = new Date(t.getFullYear(), 0, l),
            c = 24 * 60 * 60 * 1e3,
            d = (t.getTime() - h.getTime()) / c,
            u = 1 + Math.round((d - a + r(h.getDay())) / o);
          return u
        },
        z = function e(t, i, s, n) {
          var l = new Date(s, i, t),
            a = o ? moment(l).isoWeek() : y(l, n);
          return '<td class="pika-week">' + a + "</td>"
        },
        K = function e(t, i, s, n) {
          return '<tr class="pika-row' + (s ? " pick-whole-week" : "") + (n ? " is-selected" : "") + '">' + (i ? t.reverse() : t).join("") + "</tr>"
        },
        E = function e(t) {
          return "<tbody>" + t.join("") + "</tbody>"
        },
        L = function e(t) {
          var i, s = [];
          if (t.showWeekNumber) s.push("<th></th>");
          for (i = 0; i < 7; i++) s.push('<th scope="col"><abbr title="' + b(t, i) + '">' + b(t, i, true) + "</abbr></th>");
          return "<thead><tr>" + (t.isRTL ? s.reverse() : s).join("") + "</tr></thead>"
        },
        C = function e(t, i, s, n, l, a) {
          var o, r, h, c = t._o,
            d = s === c.minYear,
            u = s === c.maxYear,
            p = '<div id="' + a + '" class="pika-title" role="heading" aria-live="assertive">',
            m, g, v = true,
            b = true;
          for (h = [], o = 0; o < 12; o++) h.push('<option value="' + (s === l ? o - i : 12 + o - i) + '"' + (o === n ? ' selected="selected"' : "") + (d && o < c.minMonth || u && o > c.maxMonth ? ' disabled="disabled"' : "") + ">" + c.i18n.months[o] + "</option>");
          m = '<div class="pika-label">' + c.i18n.months[n] + '<select class="pika-select pika-select-month" tabindex="-1">' + h.join("") + "</select></div>";
          if (f(c.yearRange)) {
            o = c.yearRange[0];
            r = c.yearRange[1] + 1
          } else {
            o = s - c.yearRange;
            r = 1 + s + c.yearRange
          }
          for (h = []; o < r && o <= c.maxYear; o++)
            if (o >= c.minYear) h.push('<option value="' + o + '"' + (o === s ? ' selected="selected"' : "") + ">" + o + "</option>");
          g = '<div class="pika-label">' + s + c.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + h.join("") + "</select></div>";
          if (c.showMonthAfterYear) p += g + m;
          else p += m + g;
          if (d && (n === 0 || c.minMonth >= n)) v = false;
          if (u && (n === 11 || c.maxMonth <= n)) b = false;
          if (i === 0) p += '<button class="pika-prev' + (v ? "" : " is-disabled") + '" type="button">' + c.i18n.previousMonth + "</button>";
          if (i === t._o.numberOfMonths - 1) p += '<button class="pika-next' + (b ? "" : " is-disabled") + '" type="button">' + c.i18n.nextMonth + "</button>";
          return p += "</div>"
        },
        H = function e(t, i, s) {
          return '<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="' + s + '">' + L(t) + E(i) + "</table>"
        },
        e = function e(t) {
          var s = this,
            n = s.config(t);
          s._onMouseDown = function(e) {
            if (!s._v) return;
            e = e || window.event;
            var t = e.target || e.srcElement;
            if (!t) return;
            if (!r(t, "is-disabled"))
              if (r(t, "pika-button") && !r(t, "is-empty") && !r(t.parentNode, "is-disabled")) {
                s.setDate(new Date(t.getAttribute("data-pika-year"), t.getAttribute("data-pika-month"), t.getAttribute("data-pika-day")));
                if (n.bound) c(function() {
                  s.hide();
                  if (n.blurFieldOnSelect && n.field) n.field.blur()
                }, 100)
              } else if (r(t, "pika-prev")) s.prevMonth();
            else if (r(t, "pika-next")) s.nextMonth();
            if (!r(t, "pika-select"))
              if (e.preventDefault) e.preventDefault();
              else {
                e.returnValue = false;
                return false
              }
            else s._c = true
          };
          s._onChange = function(e) {
            e = e || window.event;
            var t = e.target || e.srcElement;
            if (!t) return;
            if (r(t, "pika-select-month")) s.gotoMonth(t.value);
            else if (r(t, "pika-select-year")) s.gotoYear(t.value)
          };
          s._onKeyChange = function(e) {
            e = e || window.event;
            if (s.isVisible()) switch (e.keyCode) {
              case 13:
              case 27:
                if (n.field) n.field.blur();
                break;
              case 37:
                s.adjustDate("subtract", 1);
                break;
              case 38:
                s.adjustDate("subtract", 7);
                break;
              case 39:
                s.adjustDate("add", 1);
                break;
              case 40:
                s.adjustDate("add", 7);
                break;
              case 8:
              case 46:
                s.setDate(null);
                break
            }
          };
          s._parseFieldValue = function() {
            if (n.parse) return n.parse(n.field.value, n.format);
            else if (o) {
              var e = moment(n.field.value, n.format, n.formatStrict);
              return e && e.isValid() ? e.toDate() : null
            } else return new Date(Date.parse(n.field.value))
          };
          s._onInputChange = function(e) {
            var t;
            if (e.firedBy === s) return;
            t = s._parseFieldValue();
            if (D(t)) s.setDate(t);
            if (!s._v) s.show()
          };
          s._onInputFocus = function() {
            s.show()
          };
          s._onInputClick = function() {
            s.show()
          };
          s._onInputBlur = function() {
            var e = p.activeElement;
            do {
              if (r(e, "pika-single")) return
            } while (e = e.parentNode);
            if (!s._c) s._b = c(function() {
              s.hide()
            }, 50);
            s._c = false
          };
          s._onClick = function(e) {
            e = e || window.event;
            var t = e.target || e.srcElement,
              i = t;
            if (!t) return;
            if (!l && r(t, "pika-select"))
              if (!t.onchange) {
                t.setAttribute("onchange", "return;");
                a(t, "change", s._onChange)
              } do {
              if (r(i, "pika-single") || i === n.trigger) return
            } while (i = i.parentNode);
            if (s._v && t !== n.trigger && i !== n.trigger) s.hide()
          };
          s.el = p.createElement("div");
          s.el.className = "pika-single" + (n.isRTL ? " is-rtl" : "") + (n.theme ? " " + n.theme : "");
          a(s.el, "mousedown", s._onMouseDown, true);
          a(s.el, "touchend", s._onMouseDown, true);
          a(s.el, "change", s._onChange);
          if (n.keyboardInput) a(p, "keydown", s._onKeyChange);
          if (n.field) {
            if (n.container) n.container.appendChild(s.el);
            else if (n.bound) p.body.appendChild(s.el);
            else n.field.parentNode.insertBefore(s.el, n.field.nextSibling);
            a(n.field, "change", s._onInputChange);
            if (!n.defaultDate) {
              n.defaultDate = s._parseFieldValue();
              n.setDefaultDate = true
            }
          }
          var i = n.defaultDate;
          if (D(i))
            if (n.setDefaultDate) s.setDate(i, true);
            else s.gotoDate(i);
          else s.gotoDate(new Date);
          if (n.bound) {
            this.hide();
            s.el.className += " is-bound";
            a(n.trigger, "click", s._onInputClick);
            a(n.trigger, "focus", s._onInputFocus);
            a(n.trigger, "blur", s._onInputBlur)
          } else this.show()
        };
      return e.prototype = {
        config: function e(t) {
          if (!this._o) this._o = h({}, v, true);
          var i = h(this._o, t, true);
          i.isRTL = !!i.isRTL;
          i.field = i.field && i.field.nodeName ? i.field : null;
          i.theme = typeof i.theme === "string" && i.theme ? i.theme : null;
          i.bound = !!(i.bound !== undefined ? i.field && i.bound : i.field);
          i.trigger = i.trigger && i.trigger.nodeName ? i.trigger : i.field;
          i.disableWeekends = !!i.disableWeekends;
          i.disableDayFn = typeof i.disableDayFn === "function" ? i.disableDayFn : null;
          var s = parseInt(i.numberOfMonths, 10) || 1;
          i.numberOfMonths = s > 4 ? 4 : s;
          if (!D(i.minDate)) i.minDate = false;
          if (!D(i.maxDate)) i.maxDate = false;
          if (i.minDate && i.maxDate && i.maxDate < i.minDate) i.maxDate = i.minDate = false;
          if (i.minDate) this.setMinDate(i.minDate);
          if (i.maxDate) this.setMaxDate(i.maxDate);
          if (f(i.yearRange)) {
            var n = (new Date).getFullYear() - 10;
            i.yearRange[0] = parseInt(i.yearRange[0], 10) || n;
            i.yearRange[1] = parseInt(i.yearRange[1], 10) || n
          } else {
            i.yearRange = Math.abs(parseInt(i.yearRange, 10)) || v.yearRange;
            if (i.yearRange > 100) i.yearRange = 100
          }
          return i
        },
        toString: function e(t) {
          t = t || this._o.format;
          if (!D(this._d)) return "";
          if (this._o.toString) return this._o.toString(this._d, t);
          if (o) return moment(this._d).format(t);
          return this._d.toDateString()
        },
        getMoment: function e() {
          return o ? moment(this._d) : null
        },
        setMoment: function e(t, i) {
          if (o && moment.isMoment(t)) this.setDate(t.toDate(), i)
        },
        getDate: function e() {
          return D(this._d) ? new Date(this._d.getTime()) : null
        },
        setDate: function e(t, i) {
          if (!t) {
            this._d = null;
            if (this._o.field) {
              this._o.field.value = "";
              d(this._o.field, "change", {
                firedBy: this
              })
            }
            return this.draw()
          }
          if (typeof t === "string") t = new Date(Date.parse(t));
          if (!D(t)) return;
          var s = this._o.minDate,
            n = this._o.maxDate;
          if (D(s) && t < s) t = s;
          else if (D(n) && t > n) t = n;
          this._d = new Date(t.getTime());
          B(this._d);
          this.gotoDate(this._d);
          if (this._o.field) {
            this._o.field.value = this.toString();
            d(this._o.field, "change", {
              firedBy: this
            })
          }
          if (!i && typeof this._o.onSelect === "function") this._o.onSelect.call(this, this.getDate())
        },
        clear: function e() {
          this.setDate(null)
        },
        gotoDate: function e(t) {
          var i = true;
          if (!D(t)) return;
          if (this.calendars) {
            var s = new Date(this.calendars[0].year, this.calendars[0].month, 1),
              n = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1),
              l = t.getTime();
            n.setMonth(n.getMonth() + 1);
            n.setDate(n.getDate() - 1);
            i = l < s.getTime() || n.getTime() < l
          }
          if (i) {
            this.calendars = [{
              month: t.getMonth(),
              year: t.getFullYear()
            }];
            if (this._o.mainCalendar === "right") this.calendars[0].month += 1 - this._o.numberOfMonths
          }
          this.adjustCalendars()
        },
        adjustDate: function e(t, i) {
          var s = this.getDate() || new Date;
          var n = parseInt(i) * 24 * 60 * 60 * 1e3;
          var l;
          if (t === "add") l = new Date(s.valueOf() + n);
          else if (t === "subtract") l = new Date(s.valueOf() - n);
          this.setDate(l)
        },
        adjustCalendars: function e() {
          this.calendars[0] = u(this.calendars[0]);
          for (var t = 1; t < this._o.numberOfMonths; t++) this.calendars[t] = u({
            month: this.calendars[0].month + t,
            year: this.calendars[0].year
          });
          this.draw()
        },
        gotoToday: function e() {
          this.gotoDate(new Date)
        },
        gotoMonth: function e(t) {
          if (!isNaN(t)) {
            this.calendars[0].month = parseInt(t, 10);
            this.adjustCalendars()
          }
        },
        nextMonth: function e() {
          this.calendars[0].month++;
          this.adjustCalendars()
        },
        prevMonth: function e() {
          this.calendars[0].month--;
          this.adjustCalendars()
        },
        gotoYear: function e(t) {
          if (!isNaN(t)) {
            this.calendars[0].year = parseInt(t, 10);
            this.adjustCalendars()
          }
        },
        setMinDate: function e(t) {
          if (t instanceof Date) {
            B(t);
            this._o.minDate = t;
            this._o.minYear = t.getFullYear();
            this._o.minMonth = t.getMonth()
          } else {
            this._o.minDate = v.minDate;
            this._o.minYear = v.minYear;
            this._o.minMonth = v.minMonth;
            this._o.startRange = v.startRange
          }
          this.draw()
        },
        setMaxDate: function e(t) {
          if (t instanceof Date) {
            B(t);
            this._o.maxDate = t;
            this._o.maxYear = t.getFullYear();
            this._o.maxMonth = t.getMonth()
          } else {
            this._o.maxDate = v.maxDate;
            this._o.maxYear = v.maxYear;
            this._o.maxMonth = v.maxMonth;
            this._o.endRange = v.endRange
          }
          this.draw()
        },
        setStartRange: function e(t) {
          this._o.startRange = t
        },
        setEndRange: function e(t) {
          this._o.endRange = t
        },
        draw: function e(t) {
          if (!this._v && !t) return;
          var i = this._o,
            s = i.minYear,
            n = i.maxYear,
            l = i.minMonth,
            a = i.maxMonth,
            o = "",
            r;
          if (this._y <= s) {
            this._y = s;
            if (!isNaN(l) && this._m < l) this._m = l
          }
          if (this._y >= n) {
            this._y = n;
            if (!isNaN(a) && this._m > a) this._m = a
          }
          for (var h = 0; h < i.numberOfMonths; h++) {
            r = "pika-title-" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 2);
            o += '<div class="pika-lendar">' + C(this, h, this.calendars[h].year, this.calendars[h].month, this.calendars[0].year, r) + this.render(this.calendars[h].year, this.calendars[h].month, r) + "</div>"
          }
          this.el.innerHTML = o;
          if (i.bound)
            if (i.field.type !== "hidden") c(function() {
              i.trigger.focus()
            }, 1);
          if (typeof this._o.onDraw === "function") this._o.onDraw(this);
          if (i.bound) i.field.setAttribute("aria-label", i.ariaLabel)
        },
        adjustPosition: function e() {
          var t, i, s, n, l, a, o, r, h, c, d, u;
          if (this._o.container) return;
          this.el.style.position = "absolute";
          t = this._o.trigger;
          i = t;
          s = this.el.offsetWidth;
          n = this.el.offsetHeight;
          l = window.innerWidth || p.documentElement.clientWidth;
          a = window.innerHeight || p.documentElement.clientHeight;
          o = window.pageYOffset || p.body.scrollTop || p.documentElement.scrollTop;
          d = true;
          u = true;
          if (typeof t.getBoundingClientRect === "function") {
            c = t.getBoundingClientRect();
            r = c.left + window.pageXOffset;
            h = c.bottom + window.pageYOffset
          } else {
            r = i.offsetLeft;
            h = i.offsetTop + i.offsetHeight;
            while (i = i.offsetParent) {
              r += i.offsetLeft;
              h += i.offsetTop
            }
          }
          if (this._o.reposition && r + s > l || this._o.position.indexOf("right") > -1 && r - s + t.offsetWidth > 0) {
            r = r - s + t.offsetWidth;
            d = false
          }
          if (this._o.reposition && h + n > a + o || this._o.position.indexOf("top") > -1 && h - n - t.offsetHeight > 0) {
            h = h - n - t.offsetHeight;
            u = false
          }
          this.el.style.left = r + "px";
          this.el.style.top = h + "px";
          m(this.el, d ? "left-aligned" : "right-aligned");
          m(this.el, u ? "bottom-aligned" : "top-aligned");
          g(this.el, !d ? "left-aligned" : "right-aligned");
          g(this.el, !u ? "bottom-aligned" : "top-aligned")
        },
        render: function e(t, i, s) {
          var n = this._o,
            l = new Date,
            a = P(t, i),
            o = new Date(t, i, 1).getDay(),
            r = [],
            h = [];
          B(l);
          if (n.firstDay > 0) {
            o -= n.firstDay;
            if (o < 0) o += 7
          }
          var c = i === 0 ? 11 : i - 1,
            d = i === 11 ? 0 : i + 1,
            u = i === 0 ? t - 1 : t,
            p = i === 11 ? t + 1 : t,
            m = P(u, c);
          var g = a + o,
            v = g;
          while (v > 7) v -= 7;
          g += 7 - v;
          var b = false;
          for (var f = 0, y = 0; f < g; f++) {
            var E = new Date(t, i, 1 + (f - o)),
              L = D(this._d) ? R(E, this._d) : false,
              C = R(E, l),
              w = n.events.indexOf(E.toDateString()) !== -1 ? true : false,
              k = f < o || f >= a + o,
              S = 1 + (f - o),
              x = i,
              A = t,
              O = n.startRange && R(n.startRange, E),
              T = n.endRange && R(n.endRange, E),
              _ = n.startRange && n.endRange && n.startRange < E && E < n.endRange,
              I = n.minDate && E < n.minDate || n.maxDate && E > n.maxDate || n.disableWeekends && N(E) || n.disableDayFn && n.disableDayFn(E);
            if (k)
              if (f < o) {
                S = m + S;
                x = c;
                A = u
              } else {
                S = S - a;
                x = d;
                A = p
              } var M = {
              day: S,
              month: x,
              year: A,
              hasEvent: w,
              isSelected: L,
              isToday: C,
              isDisabled: I,
              isEmpty: k,
              isStartRange: O,
              isEndRange: T,
              isInRange: _,
              showDaysInNextAndPreviousMonths: n.showDaysInNextAndPreviousMonths,
              enableSelectionDaysInNextAndPreviousMonths: n.enableSelectionDaysInNextAndPreviousMonths
            };
            if (n.pickWholeWeek && L) b = true;
            h.push(F(M));
            if (++y === 7) {
              if (n.showWeekNumber) h.unshift(z(f - o, i, t, n.firstWeekOfYearMinDays));
              r.push(K(h, n.isRTL, n.pickWholeWeek, b));
              h = [];
              y = 0;
              b = false
            }
          }
          return H(n, r, s)
        },
        isVisible: function e() {
          return this._v
        },
        show: function e() {
          if (!this.isVisible()) {
            this._v = true;
            this.draw();
            g(this.el, "is-hidden");
            if (this._o.bound) {
              a(p, "click", this._onClick);
              this.adjustPosition()
            }
            if (typeof this._o.onOpen === "function") this._o.onOpen.call(this)
          }
        },
        hide: function e() {
          var t = this._v;
          if (t !== false) {
            if (this._o.bound) i(p, "click", this._onClick);
            if (!this._o.container) {
              this.el.style.position = "static";
              this.el.style.left = "auto";
              this.el.style.top = "auto"
            }
            m(this.el, "is-hidden");
            this._v = false;
            if (t !== undefined && typeof this._o.onClose === "function") this._o.onClose.call(this)
          }
        },
        destroy: function e() {
          var t = this._o;
          this.hide();
          i(this.el, "mousedown", this._onMouseDown, true);
          i(this.el, "touchend", this._onMouseDown, true);
          i(this.el, "change", this._onChange);
          if (t.keyboardInput) i(p, "keydown", this._onKeyChange);
          if (t.field) {
            i(t.field, "change", this._onInputChange);
            if (t.bound) {
              i(t.trigger, "click", this._onInputClick);
              i(t.trigger, "focus", this._onInputFocus);
              i(t.trigger, "blur", this._onInputBlur)
            }
          }
          if (this.el.parentNode) this.el.parentNode.removeChild(this.el)
        }
      }, e
    }(i)
  });

  function h(e, t) {
    void 0 === t && (t = !0);
    var i = null == e || null == (i = e.getAttribute) ? void 0 : i.call(e, "inert");
    return "" === i || "true" === i || t && e && h(e.parentNode)
  }

  function S(e) {
    if (e) return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || G(e)) && !p(e) ? 0 : e.tabIndex;
    throw new Error("No node provided")
  }

  function K(e, t) {
    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
  }

  function s(e) {
    return "INPUT" === e.tagName
  }

  function H(e) {
    if (!e.name) return 1;

    function t(e) {
      return i.querySelectorAll('input[type="radio"][name="' + e + '"]')
    }
    var i = e.form || u(e);
    if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) s = t(window.CSS.escape(e.name));
    else try {
      s = t(e.name)
    } catch (e) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), 0
    }
    var s = function(e, t) {
      for (var i = 0; i < e.length; i++)
        if (e[i].checked && e[i].form === t) return e[i]
    }(s, e.form);
    return !s || s === e
  }

  function V(e) {
    return s(t = e) && "radio" === t.type && !H(e);
    var t
  }

  function r(e) {
    var t = (e = e.getBoundingClientRect()).width,
      e = e.height;
    return 0 === t && 0 === e
  }

  function W(e, t) {
    var i = t.displayCheck,
      s = t.getShadowRoot;
    if ("hidden" === getComputedStyle(e).visibility) return 1;
    if (t = d.call(e, "details>summary:first-of-type") ? e.parentElement : e, d.call(t, "details:not([open]) *")) return 1;
    if (i && "full" !== i && "legacy-full" !== i) {
      if ("non-zero-area" === i) return r(e)
    } else {
      if ("function" == typeof s) {
        for (t = e; e;) {
          var n = e.parentElement,
            l = u(e);
          if (n && !n.shadowRoot && !0 === s(n)) return r(e);
          e = e.assignedSlot || (n || l === e.ownerDocument ? n : l.host)
        }
        e = t
      }
      if (function(e) {
          var t, i = e && u(e),
            s = null == (t = i) ? void 0 : t.host,
            n = !1;
          if (i && i !== e)
            for (n = !!(null != (t = s) && null != (t = t.ownerDocument) && t.contains(s) || null != e && null != (t = e.ownerDocument) && t.contains(e)); !n && s;) var l, n = !(null == (l = s = null == (l = i = u(s)) ? void 0 : l.host) || null == (l = l.ownerDocument) || !l.contains(s));
          return n
        }(e)) return !e.getClientRects().length;
      if ("legacy-full" !== i) return 1
    }
  }

  function x(e, t) {
    if (t = t || {}, e) return !1 !== d.call(e, c) && I(t, e);
    throw new Error("No node provided")
  }

  function A(e, t) {
    if (t = t || {}, e) return !1 !== d.call(e, Y) && _(t, e);
    throw new Error("No node provided")
  }
  var i = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"],
    c = i.join(","),
    l = "undefined" == typeof Element,
    d = l ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
    u = !l && Element.prototype.getRootNode ? function(e) {
      var t;
      return null == e || null == (t = e.getRootNode) ? void 0 : t.call(e)
    } : function(e) {
      return null == e ? void 0 : e.ownerDocument
    },
    G = function(e) {
      var t = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, "contenteditable");
      return "" === t || "true" === t
    },
    O = function(e, t, i) {
      var s;
      return h(e) ? [] : (s = Array.prototype.slice.apply(e.querySelectorAll(c)), t && d.call(e, c) && s.unshift(e), s.filter(i))
    },
    T = function e(t, i, s) {
      for (var n = [], l = Array.from(t); l.length;) {
        var a, o, r = l.shift();
        h(r, !1) || ("SLOT" === r.tagName ? (a = e((a = r.assignedElements()).length ? a : r.children, !0, s), s.flatten ? n.push.apply(n, a) : n.push({
          scopeParent: r,
          candidates: a
        })) : (d.call(r, c) && s.filter(r) && (i || !t.includes(r)) && n.push(r), a = r.shadowRoot || "function" == typeof s.getShadowRoot && s.getShadowRoot(r), o = !h(a, !1) && (!s.shadowRootFilter || s.shadowRootFilter(r)), a && o ? (o = e((!0 === a ? r : a).children, !0, s), s.flatten ? n.push.apply(n, o) : n.push({
          scopeParent: r,
          candidates: o
        })) : l.unshift.apply(l, r.children)))
      }
      return n
    },
    p = function(e) {
      return !isNaN(parseInt(e.getAttribute("tabindex"), 10))
    },
    _ = function(e, t) {
      var i;
      return !(t.disabled || h(t) || s(i = t) && "hidden" === i.type || W(t, e) || "DETAILS" === (i = t).tagName && Array.prototype.slice.apply(i.children).some(function(e) {
        return "SUMMARY" === e.tagName
      }) || function(e) {
        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
          for (var t = e.parentElement; t;) {
            if ("FIELDSET" === t.tagName && t.disabled) {
              for (var i = 0; i < t.children.length; i++) {
                var s = t.children.item(i);
                if ("LEGEND" === s.tagName) return !!d.call(t, "fieldset[disabled] *") || !s.contains(e)
              }
              return !0
            }
            t = t.parentElement
          }
        return !1
      }(t))
    },
    I = function(e, t) {
      return !(V(t) || S(t) < 0 || !_(e, t))
    },
    U = function(e) {
      e = parseInt(e.getAttribute("tabindex"), 10);
      return !!(isNaN(e) || 0 <= e)
    },
    j = function o(e) {
      var r = [],
        h = [];
      return e.forEach(function(e, t) {
        var i, s = !!e.scopeParent,
          n = s ? e.scopeParent : e,
          l = (l = s, (i = S(a = n)) < 0 && l && !p(a) ? 0 : i),
          a = s ? o(e.candidates) : n;
        0 === l ? s ? r.push.apply(r, a) : r.push(n) : h.push({
          documentOrder: t,
          tabIndex: l,
          item: e,
          isScope: s,
          content: a
        })
      }), h.sort(K).reduce(function(e, t) {
        return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
      }, []).concat(r)
    },
    Y = i.concat("iframe").join(",");

  function m(t, e) {
    var i, s = Object.keys(t);
    return Object.getOwnPropertySymbols && (i = Object.getOwnPropertySymbols(t), e && (i = i.filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    })), s.push.apply(s, i)), s
  }

  function M(s) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2 ? m(Object(n), !0).forEach(function(e) {
        var t, i;
        t = s, i = n[e = e], (e = function(e) {
          e = function(e, t) {
            if ("object" != typeof e || null === e) return e;
            var i = e[Symbol.toPrimitive];
            if (void 0 === i) return ("string" === t ? String : Number)(e);
            i = i.call(e, t || "default");
            if ("object" != typeof i) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }(e, "string");
          return "symbol" == typeof e ? e : String(e)
        }(e)) in t ? Object.defineProperty(t, e, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = i
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach(function(e) {
        Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(n, e))
      })
    }
    return s
  }

  function q(e) {
    return R(e) && !e.shiftKey
  }

  function X(e) {
    return R(e) && e.shiftKey
  }

  function D(e) {
    return setTimeout(e, 0)
  }

  function N(e, i) {
    var s = -1;
    return e.every(function(e, t) {
      return !i(e) || (s = t, !1)
    }), s
  }

  function P(e) {
    for (var t = arguments.length, i = new Array(1 < t ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
    return "function" == typeof e ? e.apply(void 0, i) : e
  }

  function B(e) {
    return e.target.shadowRoot && "function" == typeof e.composedPath ? e.composedPath()[0] : e.target
  }

  function g(e, t) {
    function l(e, t, i) {
      return e && void 0 !== e[t] ? e[t] : u[i || t]
    }

    function a() {
      if (p.containerGroups = p.containers.map(function(e) {
          var s = function(e, t) {
              e = (t = t || {}).getShadowRoot ? T([e], t.includeContainer, {
                filter: I.bind(null, t),
                flatten: !1,
                getShadowRoot: t.getShadowRoot,
                shadowRootFilter: U
              }) : O(e, t.includeContainer, I.bind(null, t));
              return j(e)
            }(e, u.tabbableOptions),
            n = (t = e, (i = (i = u.tabbableOptions) || {}).getShadowRoot ? T([t], i.includeContainer, {
              filter: _.bind(null, i),
              flatten: !0,
              getShadowRoot: i.getShadowRoot
            }) : O(t, i.includeContainer, _.bind(null, i))),
            t = 0 < s.length ? s[0] : void 0,
            i = 0 < s.length ? s[s.length - 1] : void 0,
            l = n.find(function(e) {
              return x(e)
            }),
            a = n.slice().reverse().find(function(e) {
              return x(e)
            }),
            o = !!s.find(function(e) {
              return 0 < S(e)
            });
          return {
            container: e,
            tabbableNodes: s,
            focusableNodes: n,
            posTabIndexesFound: o,
            firstTabbableNode: t,
            lastTabbableNode: i,
            firstDomTabbableNode: l,
            lastDomTabbableNode: a,
            nextTabbableNode: function(e) {
              var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                i = s.indexOf(e);
              return i < 0 ? t ? n.slice(n.indexOf(e) + 1).find(function(e) {
                return x(e)
              }) : n.slice(0, n.indexOf(e)).reverse().find(function(e) {
                return x(e)
              }) : s[i + (t ? 1 : -1)]
            }
          }
        }), p.tabbableGroups = p.containerGroups.filter(function(e) {
          return 0 < e.tabbableNodes.length
        }), p.tabbableGroups.length <= 0 && !g("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
      if (p.containerGroups.find(function(e) {
          return e.posTabIndexesFound
        }) && 1 < p.containerGroups.length) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
    }

    function o(e) {
      var t = g("setReturnFocus", e);
      return t || !1 !== t && e
    }

    function n() {
      if (p.active) $(d, k), p.delayInitialFocusTimer = u.delayInitialFocus ? D(function() {
        b(v())
      }) : b(v()), c.addEventListener("focusin", y, !0), c.addEventListener("mousedown", i, {
        capture: !0,
        passive: !1
      }), c.addEventListener("touchstart", i, {
        capture: !0,
        passive: !1
      }), c.addEventListener("click", C, {
        capture: !0,
        passive: !1
      }), c.addEventListener("keydown", L, {
        capture: !0,
        passive: !1
      })
    }

    function r() {
      if (p.active) c.removeEventListener("focusin", y, !0), c.removeEventListener("mousedown", i, !0), c.removeEventListener("touchstart", i, !0), c.removeEventListener("click", C, !0), c.removeEventListener("keydown", L, !0)
    }

    function h() {
      w && (w.disconnect(), p.active) && !p.paused && p.containers.map(function(e) {
        w.observe(e, {
          subtree: !0,
          childList: !0
        })
      })
    }
    var c = (null == t ? void 0 : t.document) || document,
      d = (null == t ? void 0 : t.trapStack) || Q,
      u = M({
        returnFocusOnDeactivate: !0,
        escapeDeactivates: !0,
        delayInitialFocus: !0,
        isKeyForward: q,
        isKeyBackward: X
      }, t),
      p = {
        containers: [],
        containerGroups: [],
        tabbableGroups: [],
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: !1,
        paused: !1,
        delayInitialFocusTimer: void 0,
        recentNavEvent: void 0
      },
      m = function(i, e) {
        var s = "function" == typeof(null == e ? void 0 : e.composedPath) ? e.composedPath() : void 0;
        return p.containerGroups.findIndex(function(e) {
          var t = e.container,
            e = e.tabbableNodes;
          return t.contains(i) || (null == s ? void 0 : s.includes(t)) || e.find(function(e) {
            return e === i
          })
        })
      },
      g = function(e) {
        var t = u[e];
        if ("function" == typeof t) {
          for (var i = arguments.length, s = new Array(1 < i ? i - 1 : 0), n = 1; n < i; n++) s[n - 1] = arguments[n];
          t = t.apply(void 0, s)
        }
        if (!(t = !0 === t ? void 0 : t)) {
          if (void 0 === t || !1 === t) return t;
          throw new Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
        }
        var l = t;
        if ("string" != typeof t || (l = c.querySelector(t))) return l;
        throw new Error("`".concat(e, "` as selector refers to no known node"))
      },
      v = function() {
        var e, t = g("initialFocus");
        if (!1 === t) return !1;
        if (t = void 0 !== t && A(t, u.tabbableOptions) ? t : 0 <= m(c.activeElement) ? c.activeElement : (e = p.tabbableGroups[0]) && e.firstTabbableNode || g("fallbackFocus")) return t;
        throw new Error("Your focus-trap needs to have at least one focusable element")
      },
      s = function e(t) {
        t = t.activeElement;
        if (t) return t.shadowRoot && null !== t.shadowRoot.activeElement ? e(t.shadowRoot) : t
      },
      b = function e(t) {
        var i;
        !1 !== t && t !== s(document) && (t && t.focus ? (t.focus({
          preventScroll: !!u.preventScroll
        }), p.mostRecentlyFocusedNode = t, (i = t).tagName && "input" === i.tagName.toLowerCase() && "function" == typeof i.select && t.select()) : e(v()))
      },
      f = function(e) {
        var t, i, s = e.target,
          n = e.event,
          e = e.isBackward,
          e = void 0 !== e && e,
          s = s || B(n),
          l = (a(), null);
        return 0 < p.tabbableGroups.length ? (t = 0 <= (i = m(s, n)) ? p.containerGroups[i] : void 0, i < 0 ? l = e ? p.tabbableGroups[p.tabbableGroups.length - 1].lastTabbableNode : p.tabbableGroups[0].firstTabbableNode : e ? 0 <= (e = (e = N(p.tabbableGroups, function(e) {
          e = e.firstTabbableNode;
          return s === e
        })) < 0 && (t.container === s || A(s, u.tabbableOptions) && !x(s, u.tabbableOptions) && !t.nextTabbableNode(s, !1)) ? i : e) ? (e = 0 === e ? p.tabbableGroups.length - 1 : e - 1, e = p.tabbableGroups[e], l = 0 <= S(s) ? e.lastTabbableNode : e.lastDomTabbableNode) : R(n) || (l = t.nextTabbableNode(s, !1)) : 0 <= (e = (e = N(p.tabbableGroups, function(e) {
          e = e.lastTabbableNode;
          return s === e
        })) < 0 && (t.container === s || A(s, u.tabbableOptions) && !x(s, u.tabbableOptions) && !t.nextTabbableNode(s)) ? i : e) ? (i = e === p.tabbableGroups.length - 1 ? 0 : e + 1, e = p.tabbableGroups[i], l = 0 <= S(s) ? e.firstTabbableNode : e.firstDomTabbableNode) : R(n) || (l = t.nextTabbableNode(s))) : l = g("fallbackFocus"), l
      },
      i = function(e) {
        var t = B(e);
        0 <= m(t, e) || (P(u.clickOutsideDeactivates, e) ? k.deactivate({
          returnFocus: u.returnFocusOnDeactivate
        }) : P(u.allowOutsideClick, e) || e.preventDefault())
      },
      y = function(e) {
        var t, i = B(e),
          s = 0 <= m(i, e);
        s || i instanceof Document ? s && (p.mostRecentlyFocusedNode = i) : (e.stopImmediatePropagation(), s = !0, p.mostRecentlyFocusedNode ? 0 < S(p.mostRecentlyFocusedNode) ? (i = m(p.mostRecentlyFocusedNode), 0 < (e = p.containerGroups[i].tabbableNodes).length && 0 <= (i = e.findIndex(function(e) {
          return e === p.mostRecentlyFocusedNode
        })) && (u.isKeyForward(p.recentNavEvent) ? i + 1 < e.length && (t = e[i + 1], s = !1) : 0 <= i - 1 && (t = e[i - 1], s = !1))) : p.containerGroups.some(function(e) {
          return e.tabbableNodes.some(function(e) {
            return 0 < S(e)
          })
        }) || (s = !1) : s = !1, s && (t = f({
          target: p.mostRecentlyFocusedNode,
          isBackward: u.isKeyBackward(p.recentNavEvent)
        })), b(t || p.mostRecentlyFocusedNode || v())), p.recentNavEvent = void 0
      },
      E = function(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          t = (p.recentNavEvent = e, f({
            event: e,
            isBackward: t
          }));
        t && (R(e) && e.preventDefault(), b(t))
      },
      L = function(e) {
        var t;
        "Escape" !== (null == (t = e) ? void 0 : t.key) && "Esc" !== (null == t ? void 0 : t.key) && 27 !== (null == t ? void 0 : t.keyCode) || !1 === P(u.escapeDeactivates, e) ? (u.isKeyForward(e) || u.isKeyBackward(e)) && E(e, u.isKeyBackward(e)) : (e.preventDefault(), k.deactivate())
      },
      C = function(e) {
        var t = B(e);
        0 <= m(t, e) || P(u.clickOutsideDeactivates, e) || P(u.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation())
      },
      w = "undefined" != typeof window && "MutationObserver" in window ? new MutationObserver(function(e) {
        e.some(function(e) {
          return Array.from(e.removedNodes).some(function(e) {
            return e === p.mostRecentlyFocusedNode
          })
        }) && b(v())
      }) : void 0,
      k = {
        get active() {
          return p.active
        },
        get paused() {
          return p.paused
        },
        activate: function(e) {
          var t, i, s;
          return p.active || (t = l(e, "onActivate"), i = l(e, "onPostActivate"), (s = l(e, "checkCanFocusTrap")) || a(), p.active = !0, p.paused = !1, p.nodeFocusedBeforeActivation = c.activeElement, null != t && t(), e = function() {
            s && a(), n(), h(), null != i && i()
          }, s ? s(p.containers.concat()).then(e, e) : e()), this
        },
        deactivate: function(e) {
          var t, i, s, n;
          return p.active && (e = M({
            onDeactivate: u.onDeactivate,
            onPostDeactivate: u.onPostDeactivate,
            checkCanReturnFocus: u.checkCanReturnFocus
          }, e), clearTimeout(p.delayInitialFocusTimer), p.delayInitialFocusTimer = void 0, r(), p.active = !1, p.paused = !1, h(), J(d, k), t = l(e, "onDeactivate"), i = l(e, "onPostDeactivate"), s = l(e, "checkCanReturnFocus"), n = l(e, "returnFocus", "returnFocusOnDeactivate"), null != t && t(), e = function() {
            D(function() {
              n && b(o(p.nodeFocusedBeforeActivation)), null != i && i()
            })
          }, n && s ? s(o(p.nodeFocusedBeforeActivation)).then(e, e) : e()), this
        },
        pause: function(e) {
          var t;
          return !p.paused && p.active && (t = l(e, "onPause"), e = l(e, "onPostPause"), p.paused = !0, null != t && t(), r(), h(), null != e) && e(), this
        },
        unpause: function(e) {
          var t;
          return p.paused && p.active && (t = l(e, "onUnpause"), e = l(e, "onPostUnpause"), p.paused = !1, null != t && t(), a(), n(), h(), null != e) && e(), this
        },
        updateContainerElements: function(e) {
          e = [].concat(e).filter(Boolean);
          return p.containers = e.map(function(e) {
            return "string" == typeof e ? c.querySelector(e) : e
          }), p.active && a(), h(), this
        }
      };
    return k.updateContainerElements(e), k
  }
  var $ = function(e, t) {
      0 < e.length && (i = e[e.length - 1]) !== t && i.pause();
      var i = e.indexOf(t); - 1 !== i && e.splice(i, 1), e.push(t)
    },
    J = function(e, t) {
      t = e.indexOf(t); - 1 !== t && e.splice(t, 1), 0 < e.length && e[e.length - 1].unpause()
    },
    R = function(e) {
      return "Tab" === (null == e ? void 0 : e.key) || 9 === (null == e ? void 0 : e.keyCode)
    },
    Q = [];
  var v = t(function(e) {
      function s(e, t) {
        for (var i = 0; i < t.length; i++) {
          var s = t[i];
          s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
      }

      function r(e, t) {
        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
      }

      function h(e) {
        return parseFloat(e) || 0
      }

      function c(e) {
        for (var t = 0; e;) t += e.offsetTop, e = e.offsetParent;
        return t
      }

      function i(t) {
        if (!(this instanceof i)) throw new TypeError("Cannot call a class as a function");
        if (!(t instanceof HTMLElement)) throw new Error("First argument must be HTMLElement");
        if (v.some(function(e) {
            return e._node === t
          })) throw new Error("Stickyfill is already applied to this node");
        this._node = t, this._stickyMode = null, this._active = !1, v.push(this), this.refresh()
      }

      function t() {
        var e, t, i;

        function s() {
          d.pageXOffset != g.left ? (g.top = d.pageYOffset, g.left = d.pageXOffset, f.refreshAll()) : d.pageYOffset != g.top && (g.top = d.pageYOffset, g.left = d.pageXOffset, v.forEach(function(e) {
            return e._recalcPosition()
          }))
        }

        function n() {
          e = setInterval(function() {
            v.forEach(function(e) {
              return e._fastCheck()
            })
          }, 500)
        }
        o || (o = !0, s(), d.addEventListener("scroll", s), d.addEventListener("resize", f.refreshAll), d.addEventListener("orientationchange", f.refreshAll), i = t = e = void 0, "hidden" in u ? (t = "hidden", i = "visibilitychange") : "webkitHidden" in u && (t = "webkitHidden", i = "webkitvisibilitychange"), i ? (u[t] || n(), u.addEventListener(i, function() {
          u[t] ? clearInterval(e) : n()
        })) : n())
      }
      var d, u, n, l, p, a, o, m, g, v, b, f;
      d = window, u = document, p = !(n = function(e, t, i) {
        return t && s(e.prototype, t), i && s(e, i), e
      }), (a = void 0 !== d) && d.getComputedStyle && (l = u.createElement("div"), !["", "-webkit-", "-moz-", "-ms-"].some(function(e) {
        try {
          l.style.position = e + "sticky"
        } catch (e) {}
        return "" != l.style.position
      })) || (p = !0), o = !1, m = "undefined" != typeof ShadowRoot, g = {
        top: null,
        left: null
      }, v = [], n(i, [{
        key: "refresh",
        value: function() {
          var e, t, i, s, n, l, a, o;
          p || this._removed || (this._active && this._deactivate(), e = this._node, t = {
            position: (i = getComputedStyle(e)).position,
            top: i.top,
            display: i.display,
            marginTop: i.marginTop,
            marginBottom: i.marginBottom,
            marginLeft: i.marginLeft,
            marginRight: i.marginRight,
            cssFloat: i.cssFloat
          }, isNaN(parseFloat(t.top))) || "table-cell" == t.display || "none" == t.display || (this._active = !0, o = e.style.position, "sticky" != i.position && "-webkit-sticky" != i.position || (e.style.position = "static"), i = e.parentNode, s = m && i instanceof ShadowRoot ? i.host : i, n = e.getBoundingClientRect(), a = s.getBoundingClientRect(), l = getComputedStyle(s), this._parent = {
            node: s,
            styles: {
              position: s.style.position
            },
            offsetHeight: s.offsetHeight
          }, this._offsetToWindow = {
            left: n.left,
            right: u.documentElement.clientWidth - n.right
          }, this._offsetToParent = {
            top: n.top - a.top - h(l.borderTopWidth),
            left: n.left - a.left - h(l.borderLeftWidth),
            right: -n.right + a.right - h(l.borderRightWidth)
          }, this._styles = {
            position: o,
            top: e.style.top,
            bottom: e.style.bottom,
            left: e.style.left,
            right: e.style.right,
            width: e.style.width,
            marginTop: e.style.marginTop,
            marginLeft: e.style.marginLeft,
            marginRight: e.style.marginRight
          }, o = h(t.top), this._limits = {
            start: n.top + d.pageYOffset - o,
            end: a.top + d.pageYOffset + s.offsetHeight - h(l.borderBottomWidth) - e.offsetHeight - o - h(t.marginBottom)
          }, "absolute" != (a = l.position) && "relative" != a && (s.style.position = "relative"), this._recalcPosition(), (o = this._clone = {}).node = u.createElement("div"), r(o.node.style, {
            width: n.right - n.left + "px",
            height: n.bottom - n.top + "px",
            marginTop: t.marginTop,
            marginBottom: t.marginBottom,
            marginLeft: t.marginLeft,
            marginRight: t.marginRight,
            cssFloat: t.cssFloat,
            padding: 0,
            border: 0,
            borderSpacing: 0,
            fontSize: "1em",
            position: "static"
          }), i.insertBefore(o.node, e), o.docOffsetTop = c(o.node))
        }
      }, {
        key: "_recalcPosition",
        value: function() {
          if (this._active && !this._removed) {
            var e = g.top <= this._limits.start ? "start" : g.top >= this._limits.end ? "end" : "middle";
            if (this._stickyMode != e) {
              switch (e) {
                case "start":
                  r(this._node.style, {
                    position: "absolute",
                    left: this._offsetToParent.left + "px",
                    right: this._offsetToParent.right + "px",
                    top: this._offsetToParent.top + "px",
                    bottom: "auto",
                    width: "auto",
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0
                  });
                  break;
                case "middle":
                  r(this._node.style, {
                    position: "fixed",
                    left: this._offsetToWindow.left + "px",
                    right: this._offsetToWindow.right + "px",
                    top: this._styles.top,
                    bottom: "auto",
                    width: "auto",
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0
                  });
                  break;
                case "end":
                  r(this._node.style, {
                    position: "absolute",
                    left: this._offsetToParent.left + "px",
                    right: this._offsetToParent.right + "px",
                    top: "auto",
                    bottom: 0,
                    width: "auto",
                    marginLeft: 0,
                    marginRight: 0
                  })
              }
              this._stickyMode = e
            }
          }
        }
      }, {
        key: "_fastCheck",
        value: function() {
          this._active && !this._removed && (1 < Math.abs(c(this._clone.node) - this._clone.docOffsetTop) || 1 < Math.abs(this._parent.node.offsetHeight - this._parent.offsetHeight)) && this.refresh()
        }
      }, {
        key: "_deactivate",
        value: function() {
          var t = this;
          this._active && !this._removed && (this._clone.node.parentNode.removeChild(this._clone.node), delete this._clone, r(this._node.style, this._styles), delete this._styles, v.some(function(e) {
            return e !== t && e._parent && e._parent.node === t._parent.node
          }) || r(this._parent.node.style, this._parent.styles), delete this._parent, this._stickyMode = null, this._active = !1, delete this._offsetToWindow, delete this._offsetToParent, delete this._limits)
        }
      }, {
        key: "remove",
        value: function() {
          var i = this;
          this._deactivate(), v.some(function(e, t) {
            if (e._node === i._node) return v.splice(t, 1), !0
          }), this._removed = !0
        }
      }]), f = {
        stickies: v,
        Sticky: b = i,
        forceSticky: function() {
          p = !1, t(), this.refreshAll()
        },
        addOne: function(e) {
          if (!(e instanceof HTMLElement)) {
            if (!e.length || !e[0]) return;
            e = e[0]
          }
          for (var t = 0; t < v.length; t++)
            if (v[t]._node === e) return v[t];
          return new b(e)
        },
        add: function(i) {
          if ((i = i instanceof HTMLElement ? [i] : i).length) {
            for (var s = [], e = 0; e < i.length; e++)(function(e) {
              var t = i[e];
              t instanceof HTMLElement ? v.some(function(e) {
                if (e._node === t) return s.push(e), !0
              }) || s.push(new b(t)) : s.push(void 0)
            })(e);
            return s
          }
        },
        refreshAll: function() {
          v.forEach(function(e) {
            return e.refresh()
          })
        },
        removeOne: function(t) {
          if (!(t instanceof HTMLElement)) {
            if (!t.length || !t[0]) return;
            t = t[0]
          }
          v.some(function(e) {
            if (e._node === t) return e.remove(), !0
          })
        },
        remove: function(i) {
          if ((i = i instanceof HTMLElement ? [i] : i).length)
            for (var e = 0; e < i.length; e++) ! function(e) {
              var t = i[e];
              v.some(function(e) {
                if (e._node === t) return e.remove(), !0
              })
            }(e)
        },
        removeAll: function() {
          for (; v.length;) v[0].remove()
        }
      }, p || t(), e.exports ? e.exports = f : a && (d.Stickyfill = f)
    }),
    Z = t(function(e, t) {
      function i(e, t) {
        t = t || {
          bubbles: !1,
          cancelable: !1,
          detail: void 0
        };
        var i = document.createEvent("CustomEvent");
        return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
      }
      var s, c, d, u, n, p, m, l, g, a, v, b;
      Element.prototype.closest || (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest = function(e) {
        var t = this;
        if (document.documentElement.contains(this))
          do {
            if (t.matches(e)) return t
          } while (null !== (t = t.parentElement));
        return null
      }), "function" != typeof window.CustomEvent && (i.prototype = window.Event.prototype, window.CustomEvent = i), s = 0 ? window : F, e.exports = (c = s, d = {
        navClass: "active",
        contentClass: "active",
        nested: !1,
        nestedClass: "active",
        offset: 0,
        reflow: !1,
        events: !0
      }, u = function(e, t, i) {
        i.settings.events && (e = new CustomEvent(e, {
          bubbles: !0,
          cancelable: !0,
          detail: i
        }), t.dispatchEvent(e))
      }, n = function(e) {
        var t = 0;
        if (e.offsetParent)
          for (; e;) t += e.offsetTop, e = e.offsetParent;
        return 0 <= t ? t : 0
      }, p = function(e) {
        e && e.sort(function(e, t) {
          return n(e.content) < n(t.content) ? -1 : 1
        })
      }, m = function(e, t, i) {
        e = e.getBoundingClientRect(), t = "function" == typeof(t = t).offset ? parseFloat(t.offset()) : parseFloat(t.offset);
        return i ? parseInt(e.bottom, 10) < (c.innerHeight || document.documentElement.clientHeight) : parseInt(e.top, 10) <= t
      }, l = function() {
        return c.innerHeight + c.pageYOffset >= Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
      }, g = function(e, t) {
        return !(!l() || !m(e.content, t, !0))
      }, a = function e(t, i) {
        i.nested && t.parentNode && (t = t.parentNode.closest("li")) && (t.classList.remove(i.nestedClass), e(t, i))
      }, v = function(e, t) {
        var i;
        e && (i = e.nav.closest("li")) && (i.classList.remove(t.navClass), e.content.classList.remove(t.contentClass), a(i, t), u("gumshoeDeactivate", i, {
          link: e.nav,
          content: e.content,
          settings: t
        }))
      }, b = function e(t, i) {
        i.nested && (t = t.parentNode.closest("li")) && (t.classList.add(i.nestedClass), e(t, i))
      }, function(e, t) {
        function i(e) {
          o && c.cancelAnimationFrame(o), o = c.requestAnimationFrame(h.detect)
        }

        function s(e) {
          o && c.cancelAnimationFrame(o), o = c.requestAnimationFrame(function() {
            p(l), h.detect()
          })
        }
        var n, l, a, o, r, h = {
          setup: function() {
            n = document.querySelectorAll(e), l = [], Array.prototype.forEach.call(n, function(e) {
              var t = document.getElementById(decodeURIComponent(e.hash.substr(1)));
              t && l.push({
                nav: e,
                content: t
              })
            }), p(l)
          }
        };
        h.detect = function() {
          var e, t, i, s = function(e, t) {
            var i = e[e.length - 1];
            if (g(i, t)) return i;
            for (var s = e.length - 1; 0 <= s; s--)
              if (m(e[s].content, t)) return e[s]
          }(l, r);
          s ? a && s.content === a.content || (v(a, r), t = r, (e = s) && (i = e.nav.closest("li")) && (i.classList.add(t.navClass), e.content.classList.add(t.contentClass), b(i, t), u("gumshoeActivate", i, {
            link: e.nav,
            content: e.content,
            settings: t
          })), a = s) : a && (v(a, r), a = null)
        }, h.destroy = function() {
          a && v(a, r), c.removeEventListener("scroll", i, !1), r.reflow && c.removeEventListener("resize", s, !1), r = o = a = n = l = null
        };
        return r = function() {
          var i = {};
          return Array.prototype.forEach.call(arguments, function(e) {
            for (var t in e) {
              if (!e.hasOwnProperty(t)) return;
              i[t] = e[t]
            }
          }), i
        }(d, t || {}), h.setup(), h.detect(), c.addEventListener("scroll", i, !1), r.reflow && c.addEventListener("resize", s, !1), h
      })
    });
  var l = t(function(e) {
      function s(e) {
        var t;
        return (n[e] || (t = n[e] = {
          i: e,
          l: !1,
          exports: {}
        }, i[e].call(t.exports, t, t.exports, s), t.l = !0, t)).exports
      }
      var i, n;
      e.exports = (i = [function(e, t, i) {
        e.exports = {
          BROWSER_TYPES: {
            CHROME: "Chrome",
            FIREFOX: "Firefox",
            OPERA: "Opera",
            YANDEX: "Yandex",
            SAFARI: "Safari",
            INTERNET_EXPLORER: "Internet Explorer",
            EDGE: "Edge",
            CHROMIUM: "Chromium",
            IE: "IE",
            MOBILE_SAFARI: "Mobile Safari",
            EDGE_CHROMIUM: "Edge Chromium"
          },
          DEVICE_TYPES: {
            MOBILE: "mobile",
            TABLET: "tablet",
            SMART_TV: "smarttv",
            CONSOLE: "console",
            WEARABLE: "wearable",
            BROWSER: void 0
          },
          OS_TYPES: {
            IOS: "iOS",
            ANDROID: "Android",
            WINDOWS_PHONE: "Windows Phone",
            WINDOWS: "Windows",
            MAC_OS: "Mac OS"
          },
          defaultData: {
            isMobile: !1,
            isTablet: !1,
            isBrowser: !1,
            isSmartTV: !1,
            isConsole: !1,
            isWearable: !1
          }
        }
      }, function(e, B, t) {
        function i() {
          return v.name === r.WINDOWS && "10" === v.version && "string" == typeof b && -1 !== b.indexOf("Edg/")
        }

        function s() {
          return p.name === H
        }

        function n() {
          return u("iPad")
        }
        var l = t(2),
          a = t(0),
          o = a.BROWSER_TYPES,
          r = a.OS_TYPES,
          a = a.DEVICE_TYPES,
          t = t(4),
          h = t.checkType,
          c = t.broPayload,
          R = t.mobilePayload,
          F = t.wearPayload,
          z = t.consolePayload,
          K = t.stvPayload,
          d = t.getNavigatorInstance,
          u = t.isIOS13Check,
          t = new l,
          p = t.getBrowser(),
          m = t.getDevice(),
          g = t.getEngine(),
          v = t.getOS(),
          b = t.getUA(),
          l = o.CHROME,
          t = o.CHROMIUM,
          f = o.IE,
          y = o.INTERNET_EXPLORER,
          E = o.OPERA,
          L = o.FIREFOX,
          C = o.SAFARI,
          H = o.EDGE,
          w = o.YANDEX,
          o = o.MOBILE_SAFARI,
          k = a.MOBILE,
          S = a.TABLET,
          x = a.SMART_TV,
          A = a.BROWSER,
          O = a.WEARABLE,
          a = a.CONSOLE,
          T = r.ANDROID,
          _ = r.WINDOWS_PHONE,
          I = r.IOS,
          M = r.WINDOWS,
          D = r.MAC_OS,
          x = m.type === x,
          a = m.type === a,
          O = m.type === O,
          V = p.name === o || n(),
          t = p.name === t,
          W = function() {
            switch (m.type) {
              case k:
              case S:
                return !0;
              default:
                return !1
            }
          }() || n(),
          G = m.type === k,
          U = m.type === S || n(),
          A = m.type === A,
          T = v.name === T,
          _ = v.name === _,
          I = v.name === I || n(),
          l = p.name === l,
          L = p.name === L,
          C = p.name === C || p.name === o,
          o = p.name === E,
          E = p.name === y || p.name === f,
          y = v.version || "none",
          f = v.name || "none",
          j = p.major,
          Y = p.version,
          q = p.name,
          X = m.vendor || "none",
          $ = m.model || "none",
          J = g.name,
          Q = g.version,
          Z = b,
          ee = s() || i(),
          w = p.name === w,
          te = m.type,
          N = (N = d()) && (/iPad|iPhone|iPod/.test(N.platform) || "MacIntel" === N.platform && 1 < N.maxTouchPoints) && !window.MSStream,
          ie = n(),
          se = u("iPhone"),
          ne = u("iPod"),
          d = "string" == typeof(d = (d = d()) && d.userAgent.toLowerCase()) && /electron/.test(d),
          le = i(),
          ae = s(),
          M = v.name === M,
          D = v.name === D,
          P = h(m.type);
        e.exports = {
          deviceDetect: function() {
            var e = P.isBrowser,
              t = P.isMobile,
              i = P.isTablet,
              s = P.isSmartTV,
              n = P.isConsole,
              l = P.isWearable;
            return e ? c(e, p, g, v, b) : s ? K(s, g, v, b) : n ? z(n, g, v, b) : t || i ? R(P, m, v, b) : l ? F(l, g, v, b) : void 0
          },
          isSmartTV: x,
          isConsole: a,
          isWearable: O,
          isMobileSafari: V,
          isChromium: t,
          isMobile: W,
          isMobileOnly: G,
          isTablet: U,
          isBrowser: A,
          isAndroid: T,
          isWinPhone: _,
          isIOS: I,
          isChrome: l,
          isFirefox: L,
          isSafari: C,
          isOpera: o,
          isIE: E,
          osVersion: y,
          osName: f,
          fullBrowserVersion: j,
          browserVersion: Y,
          browserName: q,
          mobileVendor: X,
          mobileModel: $,
          engineName: J,
          engineVersion: Q,
          getUA: Z,
          isEdge: ee,
          isYandex: w,
          deviceType: te,
          isIOS13: N,
          isIPad13: ie,
          isIPhone13: se,
          isIPod13: ne,
          isElectron: d,
          isEdgeChromium: le,
          isLegacyEdge: ae,
          isWindows: M,
          isMacOs: D
        }
      }, function(e, t, i) {
        var n, d, s, u, l, a, o, r, h, c, p, m, g, v, b, f, y, E, L, C, w;

        function k(e, t) {
          var i, s;
          return "object" == typeof e && (t = e, e = d), this instanceof k ? (i = e || (n && n.navigator && n.navigator.userAgent ? n.navigator.userAgent : ""), s = t ? y.extend(C, t) : C, this.getBrowser = function() {
            var e = {
              name: d,
              version: d
            };
            return E.rgx.call(e, i, s.browser), e.major = y.major(e.version), e
          }, this.getCPU = function() {
            var e = {
              architecture: d
            };
            return E.rgx.call(e, i, s.cpu), e
          }, this.getDevice = function() {
            var e = {
              vendor: d,
              model: d,
              type: d
            };
            return E.rgx.call(e, i, s.device), e
          }, this.getEngine = function() {
            var e = {
              name: d,
              version: d
            };
            return E.rgx.call(e, i, s.engine), e
          }, this.getOS = function() {
            var e = {
              name: d,
              version: d
            };
            return E.rgx.call(e, i, s.os), e
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.getEngine(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return i
          }, this.setUA = function(e) {
            return i = e, this
          }, this) : new k(e, t).getResult()
        }
        n = "object" == typeof window ? window : this, u = "function", l = "undefined", a = "model", r = "type", h = "vendor", p = "architecture", m = "console", g = "mobile", v = "tablet", b = "smarttv", f = "wearable", y = {
          extend: function(e, t) {
            var i, s = {};
            for (i in e) t[i] && t[i].length % 2 == 0 ? s[i] = t[i].concat(e[i]) : s[i] = e[i];
            return s
          },
          has: function(e, t) {
            return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
          },
          lowerize: function(e) {
            return e.toLowerCase()
          },
          major: function(e) {
            return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : d
          },
          trim: function(e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
          }
        }, C = {
          browser: [
            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
            [o = "name", c = "version"],
            [/(opios)[\/\s]+([\w\.]+)/i],
            [
              [o, "Opera Mini"], c
            ],
            [/\s(opr)\/([\w\.]+)/i],
            [
              [o, "Opera"], c
            ],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],
            [o, c],
            [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
            [
              [o, "IE"], c
            ],
            [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],
            [
              [o, "Edge"], c
            ],
            [/(yabrowser)\/([\w\.]+)/i],
            [
              [o, "Yandex"], c
            ],
            [/(puffin)\/([\w\.]+)/i],
            [
              [o, "Puffin"], c
            ],
            [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
            [
              [o, "UCBrowser"], c
            ],
            [/(comodo_dragon)\/([\w\.]+)/i],
            [
              [o, /_/g, " "], c
            ],
            [/(micromessenger)\/([\w\.]+)/i],
            [
              [o, "WeChat"], c
            ],
            [/(qqbrowserlite)\/([\w\.]+)/i],
            [o, c],
            [/(QQ)\/([\d\.]+)/i],
            [o, c],
            [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
            [o, c],
            [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
            [o, c],
            [/(2345Explorer)[\/\s]?([\w\.]+)/i],
            [o, c],
            [/(MetaSr)[\/\s]?([\w\.]+)/i],
            [o],
            [/(LBBROWSER)/i],
            [o],
            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
            [c, [o, "MIUI Browser"]],
            [/;fbav\/([\w\.]+);/i],
            [c, [o, "Facebook"]],
            [/headlesschrome(?:\/([\w\.]+)|\s)/i],
            [c, [o, "Chrome Headless"]],
            [/\swv\).+(chrome)\/([\w\.]+)/i],
            [
              [o, /(.+)/, "$1 WebView"], c
            ],
            [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
            [
              [o, /(.+(?:g|us))(.+)/, "$1 $2"], c
            ],
            [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
            [c, [o, "Android Browser"]],
            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
            [o, c],
            [/(dolfin)\/([\w\.]+)/i],
            [
              [o, "Dolphin"], c
            ],
            [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
            [
              [o, "Chrome"], c
            ],
            [/(coast)\/([\w\.]+)/i],
            [
              [o, "Opera Coast"], c
            ],
            [/fxios\/([\w\.-]+)/i],
            [c, [o, "Firefox"]],
            [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
            [c, [o, "Mobile Safari"]],
            [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
            [c, o],
            [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
            [
              [o, "GSA"], c
            ],
            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
            [o, [c, (E = {
              rgx: function(e, t) {
                for (var i, s, n, l, a, o = 0; o < t.length && !l;) {
                  for (var r = t[o], h = t[o + 1], c = i = 0; c < r.length && !l;)
                    if (l = r[c++].exec(e))
                      for (s = 0; s < h.length; s++) a = l[++i], "object" == typeof(n = h[s]) && 0 < n.length ? 2 == n.length ? typeof n[1] == u ? this[n[0]] = n[1].call(this, a) : this[n[0]] = n[1] : 3 == n.length ? typeof n[1] != u || n[1].exec && n[1].test ? this[n[0]] = a ? a.replace(n[1], n[2]) : d : this[n[0]] = a ? n[1].call(this, a, n[2]) : d : 4 == n.length && (this[n[0]] = a ? n[3].call(this, a.replace(n[1], n[2])) : d) : this[n] = a || d;
                  o += 2
                }
              },
              str: function(e, t) {
                for (var i in t)
                  if ("object" == typeof t[i] && 0 < t[i].length) {
                    for (var s = 0; s < t[i].length; s++)
                      if (y.has(t[i][s], e)) return "?" === i ? d : i
                  } else if (y.has(t[i], e)) return "?" === i ? d : i;
                return e
              }
            }).str, (L = {
              browser: {
                oldsafari: {
                  version: {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                  }
                }
              },
              device: {
                amazon: {
                  model: {
                    "Fire Phone": ["SD", "KF"]
                  }
                },
                sprint: {
                  model: {
                    "Evo Shift 4G": "7373KT"
                  },
                  vendor: {
                    HTC: "APA",
                    Sprint: "Sprint"
                  }
                }
              },
              os: {
                windows: {
                  version: {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2e3: "NT 5.0",
                    XP: ["NT 5.1", "NT 5.2"],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: ["NT 6.4", "NT 10.0"],
                    RT: "ARM"
                  }
                }
              }
            }).browser.oldsafari.version]],
            [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
            [o, c],
            [/(navigator|netscape)\/([\w\.-]+)/i],
            [
              [o, "Netscape"], c
            ],
            [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
            [o, c]
          ],
          cpu: [
            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
            [
              [p, "amd64"]
            ],
            [/(ia32(?=;))/i],
            [
              [p, y.lowerize]
            ],
            [/((?:i[346]|x)86)[;\)]/i],
            [
              [p, "ia32"]
            ],
            [/windows\s(ce|mobile);\sppc;/i],
            [
              [p, "arm"]
            ],
            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
            [
              [p, /ower/, "", y.lowerize]
            ],
            [/(sun4\w)[;\)]/i],
            [
              [p, "sparc"]
            ],
            [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
            [
              [p, y.lowerize]
            ]
          ],
          device: [
            [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
            [a, h, [r, v]],
            [/applecoremedia\/[\w\.]+ \((ipad)/],
            [a, [h, "Apple"],
              [r, v]
            ],
            [/(apple\s{0,1}tv)/i],
            [
              [a, "Apple TV"],
              [h, "Apple"]
            ],
            [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
            [h, a, [r, v]],
            [/(kf[A-z]+)\sbuild\/.+silk\//i],
            [a, [h, "Amazon"],
              [r, v]
            ],
            [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
            [
              [a, E.str, L.device.amazon.model],
              [h, "Amazon"],
              [r, g]
            ],
            [/\((ip[honed|\s\w*]+);.+(apple)/i],
            [a, h, [r, g]],
            [/\((ip[honed|\s\w*]+);/i],
            [a, [h, "Apple"],
              [r, g]
            ],
            [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
            [h, a, [r, g]],
            [/\(bb10;\s(\w+)/i],
            [a, [h, "BlackBerry"],
              [r, g]
            ],
            [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
            [a, [h, "Asus"],
              [r, v]
            ],
            [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
            [
              [h, "Sony"],
              [a, "Xperia Tablet"],
              [r, v]
            ],
            [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
            [a, [h, "Sony"],
              [r, g]
            ],
            [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
            [h, a, [r, m]],
            [/android.+;\s(shield)\sbuild/i],
            [a, [h, "Nvidia"],
              [r, m]
            ],
            [/(playstation\s[34portablevi]+)/i],
            [a, [h, "Sony"],
              [r, m]
            ],
            [/(sprint\s(\w+))/i],
            [
              [h, E.str, L.device.sprint.vendor],
              [a, E.str, L.device.sprint.model],
              [r, g]
            ],
            [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
            [h, a, [r, v]],
            [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
            [h, [a, /_/g, " "],
              [r, g]
            ],
            [/(nexus\s9)/i],
            [a, [h, "HTC"],
              [r, v]
            ],
            [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
            [a, [h, "Huawei"],
              [r, g]
            ],
            [/(microsoft);\s(lumia[\s\w]+)/i],
            [h, a, [r, g]],
            [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
            [a, [h, "Microsoft"],
              [r, m]
            ],
            [/(kin\.[onetw]{3})/i],
            [
              [a, /\./g, " "],
              [h, "Microsoft"],
              [r, g]
            ],
            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
            [a, [h, "Motorola"],
              [r, g]
            ],
            [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
            [a, [h, "Motorola"],
              [r, v]
            ],
            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
            [
              [h, y.trim],
              [a, y.trim],
              [r, b]
            ],
            [/hbbtv.+maple;(\d+)/i],
            [
              [a, /^/, "SmartTV"],
              [h, "Samsung"],
              [r, b]
            ],
            [/\(dtv[\);].+(aquos)/i],
            [a, [h, "Sharp"],
              [r, b]
            ],
            [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
            [
              [h, "Samsung"], a, [r, v]
            ],
            [/smart-tv.+(samsung)/i],
            [h, [r, b], a],
            [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
            [
              [h, "Samsung"], a, [r, g]
            ],
            [/sie-(\w*)/i],
            [a, [h, "Siemens"],
              [r, g]
            ],
            [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
            [
              [h, "Nokia"], a, [r, g]
            ],
            [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
            [a, [h, "Acer"],
              [r, v]
            ],
            [/android.+([vl]k\-?\d{3})\s+build/i],
            [a, [h, "LG"],
              [r, v]
            ],
            [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
            [
              [h, "LG"], a, [r, v]
            ],
            [/(lg) netcast\.tv/i],
            [h, a, [r, b]],
            [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
            [a, [h, "LG"],
              [r, g]
            ],
            [/android.+(ideatab[a-z0-9\-\s]+)/i],
            [a, [h, "Lenovo"],
              [r, v]
            ],
            [/linux;.+((jolla));/i],
            [h, a, [r, g]],
            [/((pebble))app\/[\d\.]+\s/i],
            [h, a, [r, f]],
            [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
            [h, a, [r, g]],
            [/crkey/i],
            [
              [a, "Chromecast"],
              [h, "Google"]
            ],
            [/android.+;\s(glass)\s\d/i],
            [a, [h, "Google"],
              [r, f]
            ],
            [/android.+;\s(pixel c)\s/i],
            [a, [h, "Google"],
              [r, v]
            ],
            [/android.+;\s(pixel xl|pixel)\s/i],
            [a, [h, "Google"],
              [r, g]
            ],
            [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
            [
              [a, /_/g, " "],
              [h, "Xiaomi"],
              [r, g]
            ],
            [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
            [
              [a, /_/g, " "],
              [h, "Xiaomi"],
              [r, v]
            ],
            [/android.+;\s(m[1-5]\snote)\sbuild/i],
            [a, [h, "Meizu"],
              [r, v]
            ],
            [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
            [a, [h, "OnePlus"],
              [r, g]
            ],
            [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
            [a, [h, "RCA"],
              [r, v]
            ],
            [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
            [a, [h, "Dell"],
              [r, v]
            ],
            [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
            [a, [h, "Verizon"],
              [r, v]
            ],
            [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
            [
              [h, "Barnes & Noble"], a, [r, v]
            ],
            [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
            [a, [h, "NuVision"],
              [r, v]
            ],
            [/android.+;\s(k88)\sbuild/i],
            [a, [h, "ZTE"],
              [r, v]
            ],
            [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
            [a, [h, "Swiss"],
              [r, g]
            ],
            [/android.+[;\/]\s*(zur\d{3})\s+build/i],
            [a, [h, "Swiss"],
              [r, v]
            ],
            [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
            [a, [h, "Zeki"],
              [r, v]
            ],
            [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
            [
              [h, "Dragon Touch"], a, [r, v]
            ],
            [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
            [a, [h, "Insignia"],
              [r, v]
            ],
            [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
            [a, [h, "NextBook"],
              [r, v]
            ],
            [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
            [
              [h, "Voice"], a, [r, g]
            ],
            [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
            [
              [h, "LvTel"], a, [r, g]
            ],
            [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
            [a, [h, "Envizen"],
              [r, v]
            ],
            [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
            [h, a, [r, v]],
            [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
            [a, [h, "MachSpeed"],
              [r, v]
            ],
            [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
            [h, a, [r, v]],
            [/android.+[;\/]\s*TU_(1491)\s+build/i],
            [a, [h, "Rotor"],
              [r, v]
            ],
            [/android.+(KS(.+))\s+build/i],
            [a, [h, "Amazon"],
              [r, v]
            ],
            [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
            [h, a, [r, v]],
            [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
            [
              [r, y.lowerize], h, a
            ],
            [/(android[\w\.\s\-]{0,9});.+build/i],
            [a, [h, "Generic"]]
          ],
          engine: [
            [/windows.+\sedge\/([\w\.]+)/i],
            [c, [o, "EdgeHTML"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
            [o, c],
            [/rv\:([\w\.]{1,9}).+(gecko)/i],
            [c, o]
          ],
          os: [
            [/microsoft\s(windows)\s(vista|xp)/i],
            [o, c],
            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
            [o, [c, E.str, L.os.windows.version]],
            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
            [
              [o, "Windows"],
              [c, E.str, L.os.windows.version]
            ],
            [/\((bb)(10);/i],
            [
              [o, "BlackBerry"], c
            ],
            [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i],
            [o, c],
            [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
            [
              [o, "Symbian"], c
            ],
            [/\((series40);/i],
            [o],
            [/mozilla.+\(mobile;.+gecko.+firefox/i],
            [
              [o, "Firefox OS"], c
            ],
            [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
            [o, c],
            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
            [
              [o, "Chromium OS"], c
            ],
            [/(sunos)\s?([\w\.\d]*)/i],
            [
              [o, "Solaris"], c
            ],
            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
            [o, c],
            [/(haiku)\s(\w+)/i],
            [o, c],
            [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
            [
              [c, /_/g, "."],
              [o, "iOS"]
            ],
            [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
            [
              [o, "Mac OS"],
              [c, /_/g, "."]
            ],
            [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]*)/i],
            [o, c]
          ]
        }, k.VERSION = "0.7.18", k.BROWSER = {
          NAME: o,
          MAJOR: "major",
          VERSION: c
        }, k.CPU = {
          ARCHITECTURE: p
        }, k.DEVICE = {
          MODEL: a,
          VENDOR: h,
          TYPE: r,
          CONSOLE: m,
          MOBILE: g,
          SMARTTV: b,
          TABLET: v,
          WEARABLE: f,
          EMBEDDED: "embedded"
        }, k.ENGINE = {
          NAME: o,
          VERSION: c
        }, k.OS = {
          NAME: o,
          VERSION: c
        }, typeof t != l ? (t = typeof e != l && e.exports ? e.exports = k : t).UAParser = k : i(3) ? (L = function() {
          return k
        }.call(t, i, t, e)) !== d && (e.exports = L) : n && (n.UAParser = k), typeof(w = n && (n.jQuery || n.Zepto)) != l && (s = new k, w.ua = s.getResult(), w.ua.get = function() {
          return s.getUA()
        }, w.ua.set = function(e) {
          s.setUA(e);
          var t, i = s.getResult();
          for (t in i) w.ua[t] = i[t]
        })
      }, function(t, e) {
        ! function(e) {
          t.exports = e
        }.call(e, {})
      }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var i, s = arguments[t];
              for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
            }
            return e
          },
          i = i(0),
          s = i.DEVICE_TYPES,
          l = i.defaultData,
          a = t.getNavigatorInstance = function() {
            return !("undefined" == typeof window || !window.navigator && !navigator) && (window.navigator || navigator)
          },
          i = t.isIOS13Check = function(e) {
            var t = a();
            return t && t.platform && (-1 !== t.platform.indexOf(e) || "MacIntel" === t.platform && 1 < t.maxTouchPoints && !window.MSStream)
          };
        e.exports = {
          checkType: function(e) {
            switch (e) {
              case s.MOBILE:
                return {
                  isMobile: !0
                };
              case s.TABLET:
                return {
                  isTablet: !0
                };
              case s.SMART_TV:
                return {
                  isSmartTV: !0
                };
              case s.CONSOLE:
                return {
                  isConsole: !0
                };
              case s.WEARABLE:
                return {
                  isWearable: !0
                };
              case s.BROWSER:
                return {
                  isBrowser: !0
                };
              default:
                return l
            }
          },
          broPayload: function(e, t, i, s, n) {
            return {
              isBrowser: e,
              browserMajorVersion: t.major,
              browserFullVersion: t.version,
              browserName: t.name,
              engineName: i.name || !1,
              engineVersion: i.version,
              osName: s.name,
              osVersion: s.version,
              userAgent: n
            }
          },
          mobilePayload: function(e, t, i, s) {
            return n({}, e, {
              vendor: t.vendor,
              model: t.model,
              os: i.name,
              osVersion: i.version,
              ua: s
            })
          },
          stvPayload: function(e, t, i, s) {
            return {
              isSmartTV: e,
              engineName: t.name,
              engineVersion: t.version,
              osName: i.name,
              osVersion: i.version,
              userAgent: s
            }
          },
          consolePayload: function(e, t, i, s) {
            return {
              isConsole: e,
              engineName: t.name,
              engineVersion: t.version,
              osName: i.name,
              osVersion: i.version,
              userAgent: s
            }
          },
          wearPayload: function(e, t, i, s) {
            return {
              isWearable: e,
              engineName: t.name,
              engineVersion: t.version,
              osName: i.name,
              osVersion: i.version,
              userAgent: s
            }
          },
          getNavigatorInstance: a,
          isIOS13Check: i
        }
      }], n = {}, s.m = i, s.c = n, s.d = function(e, t, i) {
        s.o(e, t) || Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: i
        })
      }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
          return e.default
        } : function() {
          return e
        };
        return s.d(t, "a", t), t
      }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }, s.p = "", s(s.s = 1))
    }),
    b = (i = l) && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
  class f {
    static autoInit(e, t) {
      void 0 === t && (t = {});
      t = new f(e, t);
      return t.init(), e.ECLSelect = t
    }
    constructor(e, t) {
      var t = void 0 === t ? {} : t,
        i = t.defaultText,
        i = void 0 === i ? "" : i,
        s = t.searchText,
        s = void 0 === s ? "" : s,
        n = t.selectAllText,
        n = void 0 === n ? "" : n,
        l = t.noResultsText,
        l = void 0 === l ? "" : l,
        a = t.selectMultipleSelector,
        a = void 0 === a ? "[data-ecl-select-multiple]" : a,
        o = t.defaultTextAttribute,
        o = void 0 === o ? "data-ecl-select-default" : o,
        r = t.searchTextAttribute,
        r = void 0 === r ? "data-ecl-select-search" : r,
        h = t.selectAllTextAttribute,
        h = void 0 === h ? "data-ecl-select-all" : h,
        c = t.noResultsTextAttribute,
        c = void 0 === c ? "data-ecl-select-no-results" : c,
        d = t.closeLabelAttribute,
        d = void 0 === d ? "data-ecl-select-close" : d,
        u = t.clearAllLabelAttribute,
        u = void 0 === u ? "data-ecl-select-clear-all" : u,
        p = t.selectMultiplesSelectionCountSelector,
        p = void 0 === p ? "ecl-select-multiple-selections-counter" : p,
        m = t.closeButtonLabel,
        m = void 0 === m ? "" : m,
        t = t.clearAllButtonLabel,
        t = void 0 === t ? "" : t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.selectMultipleSelector = a, this.selectMultiplesSelectionCountSelector = p, this.defaultTextAttribute = o, this.searchTextAttribute = r, this.selectAllTextAttribute = h, this.noResultsTextAttribute = c, this.defaultText = i, this.searchText = s, this.selectAllText = n, this.noResultsText = l, this.clearAllButtonLabel = t, this.closeButtonLabel = m, this.closeLabelAttribute = d, this.clearAllLabelAttribute = u, this.input = null, this.search = null, this.checkboxes = null, this.select = null, this.selectAll = null, this.selectIcon = null, this.textDefault = null, this.textSearch = null, this.textSelectAll = null, this.textNoResults = null, this.selectMultiple = null, this.inputContainer = null, this.optionsContainer = null, this.visibleOptions = null, this.searchContainer = null, this.countSelections = null, this.form = null, this.formGroup = null, this.label = null, this.helper = null, this.selectMultipleId = null, this.updateCurrentValue = this.updateCurrentValue.bind(this), this.handleToggle = this.handleToggle.bind(this), this.handleClickOption = this.handleClickOption.bind(this), this.handleClickSelectAll = this.handleClickSelectAll.bind(this), this.handleEsc = this.handleEsc.bind(this), this.handleFocusout = this.handleFocusout.bind(this), this.handleSearch = this.handleSearch.bind(this), this.handleClickOutside = this.handleClickOutside.bind(this), this.moveFocus = this.moveFocus.bind(this), this.resetForm = this.resetForm.bind(this), this.handleClickOnClearAll = this.handleClickOnClearAll.bind(this), this.handleKeyboardOnSelect = this.handleKeyboardOnSelect.bind(this), this.handleKeyboardOnSelectAll = this.handleKeyboardOnSelectAll.bind(this), this.handleKeyboardOnSearch = this.handleKeyboardOnSearch.bind(this), this.handleKeyboardOnOptions = this.handleKeyboardOnOptions.bind(this), this.handleKeyboardOnOption = this.handleKeyboardOnOption.bind(this), this.handleKeyboardOnClearAll = this.handleKeyboardOnClearAll.bind(this), this.handleKeyboardOnClose = this.handleKeyboardOnClose.bind(this), this.updateSelectionsCount = this.updateSelectionsCount.bind(this)
    }
    static createSvgIcon(e, t) {
      var i = document.createElement("div"),
        e = (i.innerHTML = e, i.children[0]);
      return e.removeAttribute("height"), e.removeAttribute("width"), e.setAttribute("focusable", !1), e.setAttribute("aria-hidden", !0), e.setAttribute("class", t), e
    }
    static createCheckbox(e, t) {
      var i, s, n, l, a, o, r, h, c;
      return e && t && (i = e.id, s = e.text, n = e.disabled, l = e.selected, e = e.extraClass, i) && s ? (a = document.createElement("div"), o = document.createElement("input"), r = document.createElement("label"), h = document.createElement("span"), c = document.createElement("span"), e && a.classList.add(e), l && o.setAttribute("checked", !0), n && (a.classList.add("ecl-checkbox--disabled"), o.setAttribute("disabled", n)), a.classList.add("ecl-checkbox"), a.setAttribute("data-select-multiple-value", s), o.classList.add("ecl-checkbox__input"), o.setAttribute("type", "checkbox"), o.setAttribute("id", t + "-" + i), o.setAttribute("name", t + "-" + i), a.appendChild(o), r.classList.add("ecl-checkbox__label"), r.setAttribute("for", t + "-" + i), h.classList.add("ecl-checkbox__box"), h.setAttribute("aria-hidden", !0), h.appendChild(f.createSvgIcon('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="m20 28 16-16 4 4-20 20L8 24l4-4z" fill-rule="evenodd"/></svg>', "ecl-icon ecl-icon--s ecl-checkbox__icon")), r.appendChild(h), c.classList.add("ecl-checkbox__label-text"), c.innerHTML = s, r.appendChild(c), a.appendChild(r), a) : ""
    }
    static createSelectIcon() {
      var e = document.createElement("div"),
        t = (e.classList.add("ecl-select__icon"), f.createSvgIcon('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M0 0h48v48H0z" fill="none"/><path d="M40 39 24 21 8 39l-6-6L24 9l22 24z" fill-rule="evenodd"/></svg>', "ecl-icon ecl-icon--s ecl-select__icon-shape ecl-icon--rotate-180"));
      return e.appendChild(t), e
    }
    static checkCheckbox(e) {
      e = e.target.closest(".ecl-checkbox").querySelector("input");
      return e.checked = !e.checked, e.checked
    }
    static generateRandomId(e) {
      return Math.random().toString(36).substr(2, e)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map, this.select = this.element;
      var e = Array.from(this.select.parentElement.classList);
      this.textDefault = this.defaultText || this.element.getAttribute(this.defaultTextAttribute), this.textSearch = this.searchText || this.element.getAttribute(this.searchTextAttribute), this.textSelectAll = this.selectAllText || this.element.getAttribute(this.selectAllTextAttribute), this.textNoResults = this.noResultsText || this.element.getAttribute(this.noResultsTextAttribute), this.closeButtonLabel = this.closeButtonLabel || this.element.getAttribute(this.closeLabelAttribute), this.clearAllButtonLabel = this.clearAllButtonLabel || this.element.getAttribute(this.clearAllLabelAttribute), this.selectMultipleId = this.element.id || "select-multiple-" + f.generateRandomId(4), this.element.id = this.selectMultipleId, this.formGroup = this.element.closest(".ecl-form-group"), this.formGroup && (this.label = o(".ecl-form-label", this.formGroup), this.helper = o(".ecl-help-block", this.formGroup)), this.select.setAttribute("tabindex", "-1"), this.selectMultiple = document.createElement("div"), this.selectMultiple.classList.add("ecl-select__multiple"), this.selectMultiple.addEventListener("focusout", this.handleFocusout), this.inputContainer = document.createElement("div"), this.inputContainer.classList.add(...e), this.selectMultiple.appendChild(this.inputContainer), this.input = document.createElement("button"), this.input.classList.add("ecl-select", "ecl-select__multiple-toggle"), this.input.setAttribute("type", "button"), this.input.setAttribute("aria-controls", this.selectMultipleId + "-dropdown"), this.input.setAttribute("id", this.selectMultipleId + "-toggle"), this.input.setAttribute("aria-expanded", !1), e.find(e => e.includes("disabled")) && this.input.setAttribute("disabled", !0), this.label && (this.label.setAttribute("for", this.selectMultipleId + "-toggle"), this.input.setAttribute("aria-labelledby", this.selectMultipleId + "-label")), this.helper && this.input.setAttribute("aria-describedby", this.selectMultipleId + "-helper"), this.input.addEventListener("keydown", this.handleKeyboardOnSelect), this.input.addEventListener("click", this.handleToggle), this.selectionCount = document.createElement("div"), this.selectionCount.classList.add(this.selectMultiplesSelectionCountSelector), this.selectionCountText = document.createElement("span"), this.selectionCount.appendChild(this.selectionCountText), this.inputContainer.appendChild(this.selectionCount), this.inputContainer.appendChild(this.input), this.inputContainer.appendChild(f.createSelectIcon()), this.searchContainer = document.createElement("div"), this.searchContainer.style.display = "none", this.searchContainer.classList.add("ecl-select__multiple-dropdown", ...e), this.searchContainer.setAttribute("id", this.selectMultipleId + "-dropdown"), this.selectMultiple.appendChild(this.searchContainer), this.search = document.createElement("input"), this.search.classList.add("ecl-text-input"), this.search.setAttribute("type", "search"), this.search.setAttribute("placeholder", this.textSearch || ""), this.search.addEventListener("keyup", this.handleSearch), this.search.addEventListener("search", this.handleSearch), this.searchContainer.appendChild(this.search), this.textSelectAll && (e = Array.from(this.select.options).filter(e => !e.disabled).length, this.selectAll = f.createCheckbox({
        id: "all-" + f.generateRandomId(4),
        text: this.textSelectAll + " (" + e + ")",
        extraClass: "ecl-select__multiple-all"
      }, this.selectMultipleId), this.selectAll.addEventListener("click", this.handleClickSelectAll), this.selectAll.addEventListener("keypress", this.handleClickSelectAll), this.selectAll.addEventListener("change", this.handleClickSelectAll), this.searchContainer.appendChild(this.selectAll)), this.search.addEventListener("keydown", this.handleKeyboardOnSearch), this.optionsContainer = document.createElement("div"), this.optionsContainer.classList.add("ecl-select__multiple-options"), this.searchContainer.appendChild(this.optionsContainer), (this.clearAllButtonLabel || this.closeButtonLabel) && (this.dropDownToolbar = document.createElement("div"), this.dropDownToolbar.classList.add("ecl-select-multiple-toolbar"), this.clearAllButtonLabel && (this.clearAllButton = document.createElement("button"), this.clearAllButton.textContent = this.clearAllButtonLabel, this.clearAllButton.classList.add("ecl-button", "ecl-button--ghost"), this.clearAllButton.addEventListener("click", this.handleClickOnClearAll), this.clearAllButton.addEventListener("keydown", this.handleKeyboardOnClearAll), this.dropDownToolbar.appendChild(this.clearAllButton)), this.closeButtonLabel) && (this.closeButton = document.createElement("button"), this.closeButton.textContent = this.closeButtonLabel, this.closeButton.classList.add("ecl-button", "ecl-button--primary"), this.closeButton.addEventListener("click", this.handleEsc), this.closeButton.addEventListener("keydown", this.handleKeyboardOnClose), this.dropDownToolbar) && (this.dropDownToolbar.appendChild(this.closeButton), this.searchContainer.appendChild(this.dropDownToolbar), this.dropDownToolbar.style.display = "none"), this.selectAll.addEventListener("keydown", this.handleKeyboardOnSelectAll), this.optionsContainer.addEventListener("keydown", this.handleKeyboardOnOptions), this.select.options && 0 < this.select.options.length ? this.checkboxes = Array.from(this.select.options).map(e => {
        var t, i = "",
          s = "";
        return "OPTGROUP" === e.parentNode.tagName && (this.optionsContainer.querySelector('fieldset[data-ecl-multiple-group="' + e.parentNode.getAttribute("label") + '"]') ? i = this.optionsContainer.querySelector('fieldset[data-ecl-multiple-group="' + e.parentNode.getAttribute("label") + '"]') : (i = document.createElement("fieldset"), (t = document.createElement("legend")).classList.add("ecl-select__multiple-group__title"), t.innerHTML = e.parentNode.getAttribute("label"), i.appendChild(t), i.setAttribute("data-ecl-multiple-group", e.parentNode.getAttribute("label")), i.classList.add("ecl-select__multiple-group"), this.optionsContainer.appendChild(i))), e.selected && (this.updateSelectionsCount(1), this.dropDownToolbar) && (this.dropDownToolbar.style.display = "flex"), (s = f.createCheckbox({
          id: e.value,
          text: e.text,
          disabled: e.disabled,
          selected: e.selected
        }, this.selectMultipleId)).setAttribute("data-visible", !0), s.classList.contains("ecl-checkbox--disabled") || (s.addEventListener("click", this.handleClickOption), s.addEventListener("keydown", this.handleKeyboardOnOption)), (i || this.optionsContainer).appendChild(s), s
      }) : this.checkboxes = [], this.visibleOptions = this.checkboxes, this.select.parentNode.parentNode.insertBefore(this.selectMultiple, this.select.parentNode.nextSibling), document.addEventListener("click", this.handleClickOutside), this.select.parentNode.classList.add("ecl-select__container--hidden"), this.updateCurrentValue(), this.form = this.element.closest("form"), this.form && this.form.addEventListener("reset", this.resetForm), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.selectMultiple.removeEventListener("focusout", this.handleFocusout), this.input.removeEventListener("keydown", this.handleKeyboardOnSelect), this.input.removeEventListener("click", this.handleToggle), this.search.removeEventListener("keyup", this.handleSearch), this.search.removeEventListener("keydown", this.handleKeyboardOnSearch), this.selectAll.removeEventListener("click", this.handleClickSelectAll), this.selectAll.removeEventListener("keypress", this.handleClickSelectAll), this.selectAll.removeEventListener("keydown", this.handleKeyboardOnSelectAll), this.optionsContainer.removeEventListener("keydown", this.handleKeyboardOnOptions), this.checkboxes.forEach(e => {
        e.removeEventListener("click", this.handleClickSelectAll), e.removeEventListener("click", this.handleClickOption), e.removeEventListener("keydown", this.handleKeyboardOnOption)
      }), document.removeEventListener("click", this.handleClickOutside), this.closeButton && (this.closeButton.removeEventListener("click", this.handleEsc), this.closeButton.removeEventListener("keydown", this.handleKeyboardOnClose)), this.clearAllButton && (this.clearAllButton.removeEventListener("click", this.handleClickOnClearAll), this.clearAllButton.removeEventListener("keydown", this.handleKeyboardOnClearAll)), this.selectMultiple && this.selectMultiple.remove(), this.select.parentNode.classList.remove("ecl-select__container--hidden"), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    update() {
      this.updateCurrentValue(), this.updateSelectionsCount()
    }
    updateSelectionsCount(e) {
      var t = 0;
      0 < e ? this.selectionCount.querySelector("span").innerHTML += e : t = Array.from(this.select.options).filter(e => e.selected).length, 0 < t ? (this.selectionCount.querySelector("span").innerHTML = t, this.selectionCount.classList.add("ecl-select-multiple-selections-counter--visible"), this.dropDownToolbar && (this.dropDownToolbar.style.display = "flex")) : (this.selectionCount.classList.remove("ecl-select-multiple-selections-counter--visible"), this.dropDownToolbar && (this.dropDownToolbar.style.display = "none")), 100 <= t && this.selectionCount.classList.add("ecl-select-multiple-selections-counter--xxl")
    }
    updateCurrentValue() {
      var e = Array.from(this.select.options).filter(e => e.selected).map(e => e.text).join(", ");
      this.input.innerHTML = e || this.textDefault || "", "" !== e && this.label ? this.label.setAttribute("aria-label", this.label.innerText + " " + e) : "" === e && this.label && this.label.removeAttribute("aria-label"), this.select.dispatchEvent(new window.Event("change", {
        bubbles: !0
      }))
    }
    handleToggle(e) {
      e.preventDefault(), "none" === this.searchContainer.style.display ? (this.searchContainer.style.display = "block", this.input.setAttribute("aria-expanded", !0)) : (this.searchContainer.style.display = "none", this.input.setAttribute("aria-expanded", !1))
    }
    handleClickOption(e) {
      e.preventDefault(), f.checkCheckbox(e);
      var t = e.target.closest(".ecl-checkbox");
      Array.from(this.select.options).forEach(e => {
        e.text === t.getAttribute("data-select-multiple-value") && (e.getAttribute("selected") || e.selected ? (e.selected = !1, this.selectAll.querySelector("input").checked = !1) : e.selected = !0)
      }), this.updateCurrentValue(), this.updateSelectionsCount()
    }
    handleClickSelectAll(e) {
      var i, s;
      e.preventDefault(), this.selectAll.querySelector("input").disabled || (i = f.checkCheckbox(e), s = Array.from(this.select.options).filter(e => !e.disabled), Array.from(this.searchContainer.querySelectorAll('[data-visible="true"]')).filter(e => !e.querySelector("input").disabled).forEach(t => {
        t.querySelector("input").checked = i;
        var e = s.find(e => e.text === t.getAttribute("data-select-multiple-value"));
        e && (e.selected = !!i)
      }), this.updateCurrentValue(), this.updateSelectionsCount())
    }
    handleFocusout(e) {
      e.relatedTarget && this.selectMultiple && !this.selectMultiple.contains(e.relatedTarget) && "block" === this.searchContainer.style.display && (this.searchContainer.style.display = "none", this.input.setAttribute("aria-expanded", !1))
    }
    handleSearch(e) {
      for (var t = this.optionsContainer.offsetHeight, i = (this.visibleOptions = [], e.target.value.toLowerCase()), e = (0 < t && (this.optionsContainer.style.height = t + "px"), this.checkboxes.forEach(e => {
          var t;
          e.getAttribute("data-select-multiple-value").toLocaleLowerCase().includes(i) ? (e.setAttribute("data-visible", !0), e.style.display = "flex", (t = e.querySelector(".ecl-checkbox__label-text")).textContent = t.textContent.replace(".cls-1{fill:none}", ""), i && (t.innerHTML = t.textContent.replace(new RegExp(i + "(?!([^<]+)?<)", "gi"), "<b>$&</b>")), this.visibleOptions.push(e)) : (e.removeAttribute("data-visible"), e.style.display = "none")
        }), this.visibleOptions.filter(e => e.querySelector("input").checked)), t = (0 === this.visibleOptions.length || this.visibleOptions.length !== e.length ? this.selectAll.querySelector("input").checked = !1 : this.selectAll.querySelector("input").checked = !0, this.searchContainer.querySelector(".ecl-select__multiple-no-results")), s = w(this.optionsContainer.getElementsByClassName("ecl-select__multiple-group")); !(n = s()).done;) {
        var n = n.value;
        n.style.display = "none", [...n.children].filter(e => e.classList.contains("ecl-checkbox")).forEach(e => {
          e.hasAttribute("data-visible") && (e.closest(".ecl-select__multiple-group").style.display = "block")
        })
      }
      0 !== this.visibleOptions.length || t ? 0 < this.visibleOptions.length && null !== t && t.parentNode.removeChild(t) : (e = document.createElement("div"), t = document.createElement("span"), e.classList.add("ecl-select__multiple-no-results"), t.innerHTML = this.textNoResults, e.appendChild(t), this.optionsContainer.appendChild(e)), 0 === i.length ? (this.checkboxes.forEach(e => {
        e.setAttribute("data-visible", !0), e.style.display = "flex"
      }), this.selectAll.classList.remove("ecl-checkbox--disabled"), this.selectAll.querySelector("input").disabled = !1) : (this.selectAll.classList.add("ecl-checkbox--disabled"), this.selectAll.querySelector("input").disabled = !0)
    }
    handleClickOutside(e) {
      e.target && this.selectMultiple && !this.selectMultiple.contains(e.target) && "block" === this.searchContainer.style.display && (this.searchContainer.style.display = "none", this.input.setAttribute("aria-expanded", !1))
    }
    handleKeyboardOnSelect(e) {
      switch (e.key) {
        case "Escape":
          e.preventDefault(), this.handleEsc(e);
          break;
        case " ":
        case "ArrowDown":
          e.preventDefault(), this.handleToggle(e), this.search.focus()
      }
    }
    handleKeyboardOnSelectAll(e) {
      switch (e.key) {
        case "Escape":
          e.preventDefault(), this.handleEsc(e);
          break;
        case "ArrowDown":
          e.preventDefault(), (0 < this.visibleOptions.length ? this.visibleOptions[0].querySelector("input") : this.input).focus();
          break;
        case "ArrowUp":
          e.preventDefault(), this.search.focus();
          break;
        case "Tab":
          e.preventDefault(), (e.shiftKey ? this.search : 0 < this.visibleOptions.length ? this.visibleOptions[0].querySelector("input") : this.input).focus()
      }
    }
    handleKeyboardOnOptions(e) {
      switch (e.key) {
        case "Escape":
          e.preventDefault(), this.handleEsc(e);
          break;
        case "ArrowDown":
          e.preventDefault(), this.moveFocus("down");
          break;
        case "ArrowUp":
          e.preventDefault(), this.moveFocus("up");
          break;
        case "Tab":
          e.preventDefault(), e.shiftKey ? this.moveFocus("up") : this.moveFocus("down")
      }
    }
    handleKeyboardOnSearch(e) {
      switch (e.key) {
        case "Escape":
          e.preventDefault(), this.handleEsc(e);
          break;
        case "ArrowDown":
          e.preventDefault(), (this.selectAll.querySelector("input").disabled ? 0 < this.visibleOptions.length ? this.visibleOptions[0].querySelector("input") : this.input : this.selectAll.querySelector("input")).focus();
          break;
        case "ArrowUp":
          e.preventDefault(), this.input.focus(), this.handleToggle(e)
      }
    }
    handleKeyboardOnOption(e) {
      "Enter" !== e.key && " " !== e.key || (e.preventDefault(), this.handleClickOption(e))
    }
    handleKeyboardOnClearAll(e) {
      switch (e.key) {
        case "Enter":
        case " ":
          e.preventDefault(), this.handleClickOnClearAll(e), this.input.focus();
          break;
        case "ArrowDown":
          e.preventDefault(), (this.closeButton || this.input).focus();
          break;
        case "ArrowUp":
          e.preventDefault(), (0 < this.visibleOptions.length ? this.visibleOptions[this.visibleOptions.length - 1].querySelector("input") : this.search).focus();
          break;
        case "Tab":
          e.preventDefault(), (e.shiftKey ? 0 < this.visibleOptions.length ? this.visibleOptions[this.visibleOptions.length - 1].querySelector("input") : this.search : this.closeButton || this.input).focus()
      }
    }
    handleKeyboardOnClose(e) {
      switch (e.key) {
        case "Enter":
        case " ":
          e.preventDefault(), this.handleEsc(e), this.input.focus();
          break;
        case "ArrowUp":
          e.preventDefault(), (this.clearAllButton || this.input).focus();
          break;
        case "ArrowDown":
          e.preventDefault(), this.input.focus();
          break;
        case "Tab":
          e.preventDefault(), (e.shiftKey && this.clearAllButton || this.input).focus()
      }
    }
    handleEsc(e) {
      e.preventDefault(), "block" === this.searchContainer.style.display && (this.searchContainer.style.display = "none", this.input.setAttribute("aria-expanded", !1))
    }
    moveFocus(e) {
      var t = document.activeElement,
        i = t.parentElement.parentElement.classList.contains("ecl-select__multiple-group") ? Array.from(t.parentElement.parentElement.parentElement.querySelectorAll(".ecl-checkbox__input")) : Array.from(t.parentElement.parentElement.querySelectorAll(".ecl-checkbox__input")),
        t = i.indexOf(t);
      ("down" === e ? 0 < (e = i.splice(t + 1, i.length).filter(e => !e.disabled && "none" !== e.parentElement.style.display)).length ? e[0] : this.dropDownToolbar && "flex" === this.dropDownToolbar.style.display ? this.dropDownToolbar.firstChild : this.input : 0 < (e = i.splice(0, t).filter(e => !e.disabled && "none" !== e.parentElement.style.display)).length ? e.pop() : (this.optionsContainer.scrollTop = 0, this.selectAll.querySelector("input").disabled ? this.search : this.selectAll.querySelector("input"))).focus()
    }
    handleClickOnClearAll(e) {
      e.preventDefault(), Array.from(this.select.options).forEach(e => {
        this.selectMultiple.querySelector('[data-select-multiple-value="' + e.text + '"]').querySelector(".ecl-checkbox__input").checked = !1, e.selected = !1
      }), this.selectAll.querySelector(".ecl-checkbox__input").checked = !1, this.updateCurrentValue(), this.updateSelectionsCount(0)
    }
    resetForm() {
      setTimeout(() => {
        Array.from(this.select.options).forEach(e => {
          this.selectMultiple.querySelector('[data-select-multiple-value="' + e.text + '"]').querySelector(".ecl-checkbox__input").checked ? e.selected = !0 : e.selected = !1
        }), this.updateCurrentValue(), this.updateSelectionsCount(0)
      }, 10)
    }
  }
  class y {
    static autoInit(e, t) {
      t = (void 0 === t ? {} : t).TABLE, t = void 0 === t ? {} : t, t = new y(e, t);
      return t.init(), e.ECLTable = t
    }
    constructor(e, t) {
      t = (void 0 === t ? {} : t).sortSelector, t = void 0 === t ? "[data-ecl-table-sort-toggle]" : t;
      if (this.handleClickOnSort = l => e => {
          e.preventDefault();
          for (var e = l.closest("table"), i = o("tbody", e), t = l.getAttribute("aria-sort"), s = 0, n = l.previousElementSibling; n;) s += n.getAttribute("colspan") ? Number(n.getAttribute("colspan")) : 1, n = n.previousElementSibling;
          e = (s, n) => (e, t) => {
            return i = (n ? e : t).children[s].textContent, t = (n ? t : e).children[s].textContent, "" === i || "" === t || Number.isNaN(+i) || Number.isNaN(+t) ? i.toString().localeCompare(t) : i - t;
            var i
          }, t = "descending" === t ? ([...a("tr", i)].forEach((e, t) => {
            t = o("[data-ecl-table-order='" + t + "']");
            i.appendChild(t)
          }), null) : ([...a("tr", i)].sort(e(s, "ascending" !== t)).forEach(e => i.appendChild(e)), "ascending" === t ? "descending" : "ascending");
          this.sortHeadings.forEach(e => {
            t && e === l ? e.setAttribute("aria-sort", t) : e.removeAttribute("aria-sort")
          })
        }, !e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.sortSelector = t, this.sortHeadings = null, this.handleClickOnSort = this.handleClickOnSort.bind(this)
    }
    static createSortIcon(e) {
      var t = document.createElement("span"),
        t = (t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="m32 30.5-8-13-8 13z" fill-rule="evenodd"/></svg>', t.children[0]);
      return t.removeAttribute("height"), t.removeAttribute("width"), t.setAttribute("focusable", !1), t.setAttribute("aria-hidden", !0), t.setAttribute("class", "ecl-table__icon ecl-icon ecl-icon--l " + e), t
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map, this.sortHeadings = a(this.sortSelector, this.element), this.sortHeadings && this.sortHeadings.forEach(t => {
        var e = document.createElement("button");
        e.classList.add("ecl-table__arrow"), e.appendChild(y.createSortIcon("ecl-table__icon-up")), e.appendChild(y.createSortIcon("ecl-table__icon-down")), t.appendChild(e), t.addEventListener("click", e => this.handleClickOnSort(t)(e))
      });
      var e = o("tbody", this.element);
      [...a("tr", e)].forEach((e, t) => {
        e.setAttribute("data-ecl-table-order", t)
      }), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.sortHeadings && this.sortHeadings.forEach(t => {
        t.removeEventListener("click", e => this.handleClickOnSort(t)(e))
      }), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
  }
  return e.Accordion = class E {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).ACCORDION) ? {} : t, (t = new E(e, t)).init(), e.ECLAccordion = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).toggleSelector) ? "[data-ecl-accordion-toggle]" : i,
        s = void 0 === (s = t.iconSelector) ? "[data-ecl-accordion-icon]" : s,
        n = void 0 === (n = t.labelExpanded) ? "data-ecl-label-expanded" : n,
        l = void 0 === (l = t.labelCollapsed) ? "data-ecl-label-collapsed" : l,
        t = void 0 === (t = t.attachClickListener) || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.toggleSelector = i, this.iconSelector = s, this.attachClickListener = t, this.labelExpanded = n, this.labelCollapsed = l, this.toggles = null, this.forceClose = !1, this.target = null, this.label = null, this.handleClickOnToggle = this.handleClickOnToggle.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map, this.toggles = a(this.toggleSelector, this.element), this.label = o(this.labelSelector, this.element), this.attachClickListener && this.toggles && this.toggles.forEach(e => {
        e.addEventListener("click", this.handleClickOnToggle.bind(this, e))
      }), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.attachClickListener && this.toggles && this.toggles.forEach(e => {
        e.replaceWith(e.cloneNode(!0))
      }), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    handleClickOnToggle(e) {
      var t, i, s, n = o("#" + e.getAttribute("aria-controls"), this.element);
      if (n) return t = !0 === this.forceClose || "true" === e.getAttribute("aria-expanded"), e.setAttribute("aria-expanded", t ? "false" : "true"), n.hidden = t, (n = (n = o(this.iconSelector, e)) && o("use", n)) && (s = n.getAttribute("xlink:href"), i = "", i = t ? s.replace("minus", "plus") : s.replace("plus", "minus"), n.setAttribute("xlink:href", i)), (s = o(".ecl-accordion__toggle-label", e)) && (s.textContent = t ? e.getAttribute(this.labelCollapsed) : e.getAttribute(this.labelExpanded)), this;
      throw new TypeError("Target has to be provided for accordion (aria-controls)")
    }
  }, e.Breadcrumb = class L {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).BREADCRUMB) ? {} : t, (t = new L(e, t)).init(), e.ECLBreadcrumb = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).ellipsisButtonSelector) ? "[data-ecl-breadcrumb-ellipsis-button]" : i,
        s = void 0 === (s = t.ellipsisSelector) ? "[data-ecl-breadcrumb-ellipsis]" : s,
        n = void 0 === (n = t.segmentSelector) ? "[data-ecl-breadcrumb-item]" : n,
        l = void 0 === (l = t.expandableItemsSelector) ? '[data-ecl-breadcrumb-item="expandable"]' : l,
        a = void 0 === (a = t.staticItemsSelector) ? '[data-ecl-breadcrumb-item="static"]' : a,
        o = void 0 === (o = t.onPartialExpand) ? null : o,
        r = void 0 === (r = t.onFullExpand) ? null : r,
        t = void 0 === (t = t.attachClickListener) || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.ellipsisButtonSelector = i, this.ellipsisSelector = s, this.segmentSelector = n, this.expandableItemsSelector = l, this.staticItemsSelector = a, this.onPartialExpand = o, this.onFullExpand = r, this.attachClickListener = t, this.ellipsisButton = null, this.itemsElements = null, this.staticElements = null, this.expandableElements = null, this.handleClickOnEllipsis = this.handleClickOnEllipsis.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map, this.ellipsisButton = o(this.ellipsisButtonSelector, this.element), this.attachClickListener && this.ellipsisButton && this.ellipsisButton.addEventListener("click", this.handleClickOnEllipsis), this.itemsElements = a(this.segmentSelector, this.element), this.staticElements = a(this.staticItemsSelector, this.element), this.expandableElements = a(this.expandableItemsSelector, this.element), this.check(), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.attachClickListener && this.ellipsisButton && this.ellipsisButton.removeEventListener("click", this.handleClickOnEllipsis), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    handleClickOnEllipsis() {
      return this.handleFullExpand()
    }
    check() {
      var e = this.computeVisibilityMap();
      e && (!0 === e.expanded ? this.handleFullExpand() : this.handlePartialExpand(e))
    }
    hideEllipsis() {
      var e = o(this.ellipsisSelector, this.element);
      e && e.setAttribute("aria-hidden", "true"), this.attachClickListener && this.ellipsisButton && this.ellipsisButton.removeEventListener("click", this.handleClickOnEllipsis)
    }
    showAllItems() {
      this.expandableElements.forEach(e => e.setAttribute("aria-hidden", "false"))
    }
    handlePartialExpand(e) {
      var i;
      e && (i = e.isItemVisible) && Array.isArray(i) && (this.onPartialExpand ? this.onPartialExpand(i) : this.expandableElements.forEach((e, t) => {
        e.setAttribute("aria-hidden", i[t] ? "false" : "true")
      }))
    }
    handleFullExpand() {
      this.onFullExpand ? this.onFullExpand() : (this.hideEllipsis(), this.showAllItems())
    }
    computeVisibilityMap() {
      var t, i, s, n;
      return !this.expandableElements || 0 === this.expandableElements.length || (t = Math.floor(this.element.getBoundingClientRect().width), this.itemsElements.map(e => e.getBoundingClientRect().width).reduce((e, t) => e + t) <= t) ? {
        expanded: !0
      } : (i = o(this.ellipsisSelector, this.element).getBoundingClientRect().width + this.staticElements.reduce((e, t) => e + t.getBoundingClientRect().width, 0), t <= i ? {
        expanded: !1,
        isItemVisible: [...this.expandableElements.map(() => !1)]
      } : {
        expanded: !(n = !(s = 0)),
        isItemVisible: [...this.expandableElements].reverse().map(e => !!n && ((e = (s += e.getBoundingClientRect().width) + i <= t) || (n = !1), e)).reverse()
      })
    }
  }, e.BreadcrumbCore = class C {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).BREADCRUMB_CORE) ? {} : t, (t = new C(e, t)).init(), e.ECLBreadcrumbCore = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).ellipsisButtonSelector) ? "[data-ecl-breadcrumb-core-ellipsis-button]" : i,
        s = void 0 === (s = t.ellipsisSelector) ? "[data-ecl-breadcrumb-core-ellipsis]" : s,
        n = void 0 === (n = t.segmentSelector) ? "[data-ecl-breadcrumb-core-item]" : n,
        l = void 0 === (l = t.expandableItemsSelector) ? '[data-ecl-breadcrumb-core-item="expandable"]' : l,
        a = void 0 === (a = t.staticItemsSelector) ? '[data-ecl-breadcrumb-core-item="static"]' : a,
        o = void 0 === (o = t.onPartialExpand) ? null : o,
        r = void 0 === (r = t.onFullExpand) ? null : r,
        t = void 0 === (t = t.attachClickListener) || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.ellipsisButtonSelector = i, this.ellipsisSelector = s, this.segmentSelector = n, this.expandableItemsSelector = l, this.staticItemsSelector = a, this.onPartialExpand = o, this.onFullExpand = r, this.attachClickListener = t, this.ellipsisButton = null, this.itemsElements = null, this.staticElements = null, this.expandableElements = null, this.handleClickOnEllipsis = this.handleClickOnEllipsis.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map, this.ellipsisButton = o(this.ellipsisButtonSelector, this.element), this.attachClickListener && this.ellipsisButton && this.ellipsisButton.addEventListener("click", this.handleClickOnEllipsis), this.itemsElements = a(this.segmentSelector, this.element), this.staticElements = a(this.staticItemsSelector, this.element), this.expandableElements = a(this.expandableItemsSelector, this.element), this.check(), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.attachClickListener && this.ellipsisButton && this.ellipsisButton.removeEventListener("click", this.handleClickOnEllipsis), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    handleClickOnEllipsis() {
      return this.handleFullExpand()
    }
    check() {
      var e = this.computeVisibilityMap();
      e && (!0 === e.expanded ? this.handleFullExpand() : this.handlePartialExpand(e))
    }
    hideEllipsis() {
      var e = o(this.ellipsisSelector, this.element);
      e && e.setAttribute("aria-hidden", "true"), this.attachClickListener && this.ellipsisButton && this.ellipsisButton.removeEventListener("click", this.handleClickOnEllipsis)
    }
    showAllItems() {
      this.expandableElements.forEach(e => e.setAttribute("aria-hidden", "false"))
    }
    handlePartialExpand(e) {
      var i;
      e && (i = e.isItemVisible) && Array.isArray(i) && (this.onPartialExpand ? this.onPartialExpand(i) : this.expandableElements.forEach((e, t) => {
        e.setAttribute("aria-hidden", i[t] ? "false" : "true")
      }))
    }
    handleFullExpand() {
      this.onFullExpand ? this.onFullExpand() : (this.hideEllipsis(), this.showAllItems())
    }
    computeVisibilityMap() {
      var t, i, s, n;
      return !this.expandableElements || 0 === this.expandableElements.length || (t = Math.floor(this.element.getBoundingClientRect().width), this.itemsElements.map(e => e.getBoundingClientRect().width).reduce((e, t) => e + t) <= t) ? {
        expanded: !0
      } : (i = o(this.ellipsisSelector, this.element).getBoundingClientRect().width + this.staticElements.reduce((e, t) => e + t.getBoundingClientRect().width, 0), t <= i ? {
        expanded: !1,
        isItemVisible: [...this.expandableElements.map(() => !1)]
      } : {
        expanded: !(n = !(s = 0)),
        isItemVisible: [...this.expandableElements].reverse().map(e => !!n && ((e = (s += e.getBoundingClientRect().width) + i <= t) || (n = !1), e)).reverse()
      })
    }
  }, e.BreadcrumbHarmonised = class ee {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).BREADCRUMB_HARMONISED) ? {} : t, (t = new ee(e, t)).init(), e.ECLBreadcrumbHarmonised = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).ellipsisButtonSelector) ? "[data-ecl-breadcrumb-harmonised-ellipsis-button]" : i,
        s = void 0 === (s = t.ellipsisSelector) ? "[data-ecl-breadcrumb-harmonised-ellipsis]" : s,
        n = void 0 === (n = t.segmentSelector) ? "[data-ecl-breadcrumb-harmonised-item]" : n,
        l = void 0 === (l = t.expandableItemsSelector) ? '[data-ecl-breadcrumb-harmonised-item="expandable"]' : l,
        a = void 0 === (a = t.staticItemsSelector) ? '[data-ecl-breadcrumb-harmonised-item="static"]' : a,
        o = void 0 === (o = t.onPartialExpand) ? null : o,
        r = void 0 === (r = t.onFullExpand) ? null : r,
        t = void 0 === (t = t.attachClickListener) || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.ellipsisButtonSelector = i, this.ellipsisSelector = s, this.segmentSelector = n, this.expandableItemsSelector = l, this.staticItemsSelector = a, this.onPartialExpand = o, this.onFullExpand = r, this.attachClickListener = t, this.ellipsisButton = null, this.itemsElements = null, this.staticElements = null, this.expandableElements = null, this.handleClickOnEllipsis = this.handleClickOnEllipsis.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map, this.ellipsisButton = o(this.ellipsisButtonSelector, this.element), this.attachClickListener && this.ellipsisButton && this.ellipsisButton.addEventListener("click", this.handleClickOnEllipsis), this.itemsElements = a(this.segmentSelector, this.element), this.staticElements = a(this.staticItemsSelector, this.element), this.expandableElements = a(this.expandableItemsSelector, this.element), this.check(), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.attachClickListener && this.ellipsisButton && this.ellipsisButton.removeEventListener("click", this.handleClickOnEllipsis), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    handleClickOnEllipsis() {
      return this.handleFullExpand()
    }
    check() {
      var e = this.computeVisibilityMap();
      e && (!0 === e.expanded ? this.handleFullExpand() : this.handlePartialExpand(e))
    }
    hideEllipsis() {
      var e = o(this.ellipsisSelector, this.element);
      e && e.setAttribute("aria-hidden", "true"), this.attachClickListener && this.ellipsisButton && this.ellipsisButton.removeEventListener("click", this.handleClickOnEllipsis)
    }
    showAllItems() {
      this.expandableElements.forEach(e => e.setAttribute("aria-hidden", "false"))
    }
    handlePartialExpand(e) {
      var i;
      e && (i = e.isItemVisible) && Array.isArray(i) && (this.onPartialExpand ? this.onPartialExpand(i) : this.expandableElements.forEach((e, t) => {
        e.setAttribute("aria-hidden", i[t] ? "false" : "true")
      }))
    }
    handleFullExpand() {
      this.onFullExpand ? this.onFullExpand() : (this.hideEllipsis(), this.showAllItems())
    }
    computeVisibilityMap() {
      var t, i, s, n;
      return !this.expandableElements || 0 === this.expandableElements.length || (t = Math.floor(this.element.getBoundingClientRect().width), this.itemsElements.map(e => e.getBoundingClientRect().width).reduce((e, t) => e + t) <= t) ? {
        expanded: !0
      } : (i = o(this.ellipsisSelector, this.element).getBoundingClientRect().width + this.staticElements.reduce((e, t) => e + t.getBoundingClientRect().width, 0), t <= i ? {
        expanded: !1,
        isItemVisible: [...this.expandableElements.map(() => !1)]
      } : {
        expanded: !(n = !(s = 0)),
        isItemVisible: [...this.expandableElements].reverse().map(e => !!n && ((e = (s += e.getBoundingClientRect().width) + i <= t) || (n = !1), e)).reverse()
      })
    }
  }, e.BreadcrumbStandardised = class te {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).BREADCRUMB_STANDARDISED) ? {} : t, (t = new te(e, t)).init(), e.ECLBreadcrumbStandardised = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).ellipsisButtonSelector) ? "[data-ecl-breadcrumb-standardised-ellipsis-button]" : i,
        s = void 0 === (s = t.ellipsisSelector) ? "[data-ecl-breadcrumb-standardised-ellipsis]" : s,
        n = void 0 === (n = t.segmentSelector) ? "[data-ecl-breadcrumb-standardised-item]" : n,
        l = void 0 === (l = t.expandableItemsSelector) ? '[data-ecl-breadcrumb-standardised-item="expandable"]' : l,
        a = void 0 === (a = t.staticItemsSelector) ? '[data-ecl-breadcrumb-standardised-item="static"]' : a,
        o = void 0 === (o = t.onPartialExpand) ? null : o,
        r = void 0 === (r = t.onFullExpand) ? null : r,
        t = void 0 === (t = t.attachClickListener) || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.ellipsisButtonSelector = i, this.ellipsisSelector = s, this.segmentSelector = n, this.expandableItemsSelector = l, this.staticItemsSelector = a, this.onPartialExpand = o, this.onFullExpand = r, this.attachClickListener = t, this.ellipsisButton = null, this.itemsElements = null, this.staticElements = null, this.expandableElements = null, this.handleClickOnEllipsis = this.handleClickOnEllipsis.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map, this.ellipsisButton = o(this.ellipsisButtonSelector, this.element), this.attachClickListener && this.ellipsisButton && this.ellipsisButton.addEventListener("click", this.handleClickOnEllipsis), this.itemsElements = a(this.segmentSelector, this.element), this.staticElements = a(this.staticItemsSelector, this.element), this.expandableElements = a(this.expandableItemsSelector, this.element), this.check(), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.attachClickListener && this.ellipsisButton && this.ellipsisButton.removeEventListener("click", this.handleClickOnEllipsis), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    handleClickOnEllipsis() {
      return this.handleFullExpand()
    }
    check() {
      var e = this.computeVisibilityMap();
      e && (!0 === e.expanded ? this.handleFullExpand() : this.handlePartialExpand(e))
    }
    hideEllipsis() {
      var e = o(this.ellipsisSelector, this.element);
      e && e.setAttribute("aria-hidden", "true"), this.attachClickListener && this.ellipsisButton && this.ellipsisButton.removeEventListener("click", this.handleClickOnEllipsis)
    }
    showAllItems() {
      this.expandableElements.forEach(e => e.setAttribute("aria-hidden", "false"))
    }
    handlePartialExpand(e) {
      var i;
      e && (i = e.isItemVisible) && Array.isArray(i) && (this.onPartialExpand ? this.onPartialExpand(i) : this.expandableElements.forEach((e, t) => {
        e.setAttribute("aria-hidden", i[t] ? "false" : "true")
      }))
    }
    handleFullExpand() {
      this.onFullExpand ? this.onFullExpand() : (this.hideEllipsis(), this.showAllItems())
    }
    computeVisibilityMap() {
      var t, i, s, n;
      return !this.expandableElements || 0 === this.expandableElements.length || (t = Math.floor(this.element.getBoundingClientRect().width), this.itemsElements.map(e => e.getBoundingClientRect().width).reduce((e, t) => e + t) <= t) ? {
        expanded: !0
      } : (i = o(this.ellipsisSelector, this.element).getBoundingClientRect().width + this.staticElements.reduce((e, t) => e + t.getBoundingClientRect().width, 0), t <= i ? {
        expanded: !1,
        isItemVisible: [...this.expandableElements.map(() => !1)]
      } : {
        expanded: !(n = !(s = 0)),
        isItemVisible: [...this.expandableElements].reverse().map(e => !!n && ((e = (s += e.getBoundingClientRect().width) + i <= t) || (n = !1), e)).reverse()
      })
    }
  }, e.Carousel = class ie {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).CAROUSEL) ? {} : t, (t = new ie(e, t)).init(), e.ECLCarousel = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).playSelector) ? ".ecl-carousel__play" : i,
        s = void 0 === (s = t.pauseSelector) ? ".ecl-carousel__pause" : s,
        n = void 0 === (n = t.prevSelector) ? ".ecl-carousel__prev" : n,
        l = void 0 === (l = t.nextSelector) ? ".ecl-carousel__next" : l,
        a = void 0 === (a = t.containerClass) ? ".ecl-carousel__container" : a,
        o = void 0 === (o = t.slidesClass) ? ".ecl-carousel__slides" : o,
        r = void 0 === (r = t.slideClass) ? ".ecl-carousel__slide" : r,
        h = void 0 === (h = t.currentSlideClass) ? ".ecl-carousel__current" : h,
        c = void 0 === (c = t.navigationItemsClass) ? ".ecl-carousel__navigation-item" : c,
        d = void 0 === (d = t.controlsClass) ? ".ecl-carousel__controls" : d,
        u = void 0 === (u = t.paginationClass) ? ".ecl-carousel__pagination" : u,
        p = void 0 === (p = t.attachClickListener) || p,
        t = void 0 === (t = t.attachResizeListener) || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.playSelector = i, this.pauseSelector = s, this.prevSelector = n, this.nextSelector = l, this.containerClass = a, this.slidesClass = o, this.slideClass = r, this.currentSlideClass = h, this.navigationItemsClass = c, this.controlsClass = d, this.paginationClass = u, this.attachClickListener = p, this.attachResizeListener = t, this.container = null, this.slides = null, this.btnPlay = null, this.btnPause = null, this.btnPrev = null, this.btnNext = null, this.index = 1, this.total = 0, this.allowShift = !0, this.activeNav = null, this.autoPlay = null, this.autoPlayInterval = null, this.hoverAutoPlay = null, this.resizeTimer = null, this.posX1 = 0, this.posX2 = 0, this.posInitial = 0, this.posFinal = 0, this.threshold = 80, this.navigationItems = null, this.navigation = null, this.controls = null, this.direction = "ltr", this.cloneFirstSLide = null, this.cloneLastSLide = null, this.handleAutoPlay = this.handleAutoPlay.bind(this), this.handleMouseOver = this.handleMouseOver.bind(this), this.handleMouseOut = this.handleMouseOut.bind(this), this.shiftSlide = this.shiftSlide.bind(this), this.checkIndex = this.checkIndex.bind(this), this.moveSlides = this.moveSlides.bind(this), this.handleResize = this.handleResize.bind(this), this.dragStart = this.dragStart.bind(this), this.dragEnd = this.dragEnd.bind(this), this.dragAction = this.dragAction.bind(this), this.handleFocus = this.handleFocus.bind(this), this.handleKeyboardOnPlay = this.handleKeyboardOnPlay.bind(this), this.handleKeyboardOnBullets = this.handleKeyboardOnBullets.bind(this)
    }
    init() {
      var e, t;
      if (ECL) return ECL.components = ECL.components || new Map, this.btnPlay = o(this.playSelector, this.element), this.btnPause = o(this.pauseSelector, this.element), this.btnPrev = o(this.prevSelector, this.element), this.btnNext = o(this.nextSelector, this.element), this.slidesContainer = o(this.slidesClass, this.element), this.container = o(this.containerClass, this.element), this.navigation = o(".ecl-carousel__navigation", this.element), this.navigationItems = a(this.navigationItemsClass, this.element), this.pagination = o(this.paginationClass, this.element), this.controls = o(this.controlsClass, this.element), this.currentSlide = o(this.currentSlideClass, this.element), this.direction = getComputedStyle(this.element).direction, this.slides = a(this.slideClass, this.element), this.total = this.slides.length, this.total <= 1 ? (this.btnNext && (this.btnNext.style.display = "none"), this.btnPrev && (this.btnPrev.style.display = "none"), this.controls && (this.controls.style.display = "none"), this.slidesContainer && (this.slidesContainer.style.display = "block"), !1) : (e = this.slides[0], t = this.slides[this.slides.length - 1], this.cloneFirstSLide = e.cloneNode(!0), this.cloneLastSLide = t.cloneNode(!0), this.slidesContainer.appendChild(this.cloneFirstSLide), this.slidesContainer.insertBefore(this.cloneLastSLide, e), this.slides = a(this.slideClass, this.element), this.slides.forEach(e => {
        e.style.width = 100 / this.slides.length + "%"
      }), this.handleResize(), this.checkIndex(), this.navigationItems && this.navigationItems.forEach((e, t) => {
        e.addEventListener("click", this.shiftSlide.bind(this, t + 1, !0))
      }), this.navigation && this.navigation.addEventListener("keydown", this.handleKeyboardOnBullets), this.attachClickListener && this.btnPlay && this.btnPause && (this.btnPlay.addEventListener("click", this.handleAutoPlay), this.btnPause.addEventListener("click", this.handleAutoPlay)), this.btnPlay && this.btnPlay.addEventListener("keydown", this.handleKeyboardOnPlay), this.attachClickListener && this.btnNext && this.btnNext.addEventListener("click", this.shiftSlide.bind(this, "next", !0)), this.attachClickListener && this.btnPrev && this.btnPrev.addEventListener("click", this.shiftSlide.bind(this, "prev", !0)), this.slidesContainer && (this.slidesContainer.addEventListener("mouseover", this.handleMouseOver), this.slidesContainer.addEventListener("mouseout", this.handleMouseOut), this.slidesContainer.addEventListener("touchstart", this.dragStart), this.slidesContainer.addEventListener("touchend", this.dragEnd), this.slidesContainer.addEventListener("touchmove", this.dragAction), this.slidesContainer.addEventListener("transitionend", this.checkIndex)), this.container && this.container.addEventListener("focus", this.handleFocus, !0), this.attachResizeListener && window.addEventListener("resize", this.handleResize), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this), this);
      throw new TypeError("Called init but ECL is not present")
    }
    destroy() {
      this.cloneFirstSLide && this.cloneLastSLide && (this.cloneFirstSLide.remove(), this.cloneLastSLide.remove()), this.btnPlay && this.btnPlay.replaceWith(this.btnPlay.cloneNode(!0)), this.btnPause && this.btnPause.replaceWith(this.btnPause.cloneNode(!0)), this.btnNext && this.btnNext.replaceWith(this.btnNext.cloneNode(!0)), this.btnPrev && this.btnPrev.replaceWith(this.btnPrev.cloneNode(!0)), this.slidesContainer && (this.slidesContainer.removeEventListener("mouseover", this.handleMouseOver), this.slidesContainer.removeEventListener("mouseout", this.handleMouseOut), this.slidesContainer.removeEventListener("touchstart", this.dragStart), this.slidesContainer.removeEventListener("touchend", this.dragEnd), this.slidesContainer.removeEventListener("touchmove", this.dragAction), this.slidesContainer.removeEventListener("transitionend", this.checkIndex)), this.container && this.container.removeEventListener("focus", this.handleFocus, !0), this.navigationItems && this.navigationItems.forEach(e => {
        e.replaceWith(e.cloneNode(!0))
      }), this.attachResizeListener && window.removeEventListener("resize", this.handleResize), this.autoPlayInterval && (clearInterval(this.autoPlayInterval), this.autoPlay = null), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    dragStart(e) {
      e = e || window.event, this.posInitial = this.slidesContainer.offsetLeft, "touchstart" === e.type && (this.posX1 = e.touches[0].clientX)
    }
    dragAction(e) {
      "touchmove" === (e = e || window.event).type && (e.preventDefault(), this.posX2 = this.posX1 - e.touches[0].clientX, this.posX1 = e.touches[0].clientX), this.slidesContainer.style.left = this.slidesContainer.offsetLeft - this.posX2 + "px"
    }
    dragEnd() {
      this.posFinal = this.slidesContainer.offsetLeft, this.posFinal - this.posInitial < -this.threshold ? this.shiftSlide("next", !0) : this.posFinal - this.posInitial > this.threshold ? this.shiftSlide("prev", !0) : this.slidesContainer.style.left = this.posInitial + "px"
    }
    shiftSlide(e, t) {
      this.allowShift && (this.index = "number" == typeof e ? e : "next" === e ? this.index + 1 : this.index - 1, this.moveSlides(!0)), t && this.autoPlay && this.handleAutoPlay(), this.allowShift = !1
    }
    moveSlides(e) {
      var t = this.container.offsetWidth * this.index;
      this.slidesContainer.style.transitionDuration = e ? "0.4s" : "0s", "rtl" === this.direction ? this.slidesContainer.style.right = "-" + t + "px" : this.slidesContainer.style.left = "-" + t + "px"
    }
    checkIndex() {
      0 === this.index && (this.index = this.total), this.index === this.total + 1 && (this.index = 1), this.moveSlides(!1), this.currentSlide && (this.currentSlide.textContent = this.index), this.slides && this.slides.forEach((e, t) => {
        var i = o(".ecl-link--cta", e);
        this.index === t ? (e.removeAttribute("inert", "true"), i && i.removeAttribute("tabindex", -1)) : (e.setAttribute("inert", "true"), i && i.setAttribute("tabindex", -1))
      }), this.navigationItems && this.navigationItems.forEach((e, t) => {
        this.index === t + 1 ? e.setAttribute("aria-current", "true") : e.removeAttribute("aria-current", "true")
      }), this.allowShift = !0
    }
    handleAutoPlay() {
      var e;
      this.autoPlay ? (clearInterval(this.autoPlayInterval), this.autoPlay = !1, e = document.activeElement === this.btnPause, this.btnPlay.style.display = "flex", this.btnPause.style.display = "none", e && this.btnPlay.focus()) : (this.autoPlayInterval = setInterval(() => {
        this.shiftSlide("next")
      }, 5e3), this.autoPlay = !0, e = document.activeElement === this.btnPlay, this.btnPlay.style.display = "none", this.btnPause.style.display = "flex", e && this.btnPause.focus())
    }
    handleMouseOver() {
      return this.hoverAutoPlay = this.autoPlay, this.hoverAutoPlay && this.handleAutoPlay(), this
    }
    handleMouseOut() {
      return this.hoverAutoPlay && this.handleAutoPlay(), this
    }
    handleResize() {
      var e = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
        t = this.container.offsetWidth;
      this.slidesContainer.style.width = t * this.slides.length + "px", this.moveSlides(!1), 1140 <= e && e <= 1260 ? this.container.classList.add("ecl-carousel-container--padded") : this.container.classList.remove("ecl-carousel-container--padded"), e < 1140 ? (this.pagination.parentNode.insertBefore(this.btnPrev, this.pagination), this.pagination.parentNode.insertBefore(this.btnNext, this.pagination.nextSibling)) : (this.container.insertBefore(this.btnPrev, this.slidesContainer.nextSibling), this.container.insertBefore(this.btnNext, this.btnPrev.nextSibling)), (e <= 768 && this.autoPlay || 768 < e && null === this.autoPlay) && this.handleAutoPlay()
    }
    handleKeyboardOnPlay(e) {
      if ("Tab" !== e.key || !e.shiftKey) switch (e.key) {
        case "Tab":
        case "ArrowRight":
          e.preventDefault(), this.activeNav = o(this.navigationItemsClass + '[aria-current="true"]'), this.activeNav && this.activeNav.focus(), this.autoPlay && this.handleAutoPlay()
      }
    }
    handleKeyboardOnBullets(e) {
      var t = document.activeElement;
      switch (e.key) {
        case "Tab":
          e.shiftKey ? (e.preventDefault(), t.previousSibling ? (this.shiftSlide("prev", !0), setTimeout(() => t.previousSibling.focus(), 400)) : this.btnPlay.focus()) : t.nextSibling && (e.preventDefault(), this.shiftSlide("next", !0), setTimeout(() => t.nextSibling.focus(), 400));
          break;
        case "ArrowRight":
          t.nextSibling && (e.preventDefault(), this.shiftSlide("next", !0), setTimeout(() => t.nextSibling.focus(), 400));
          break;
        case "ArrowLeft":
          t.previousSibling ? (this.shiftSlide("prev", !0), setTimeout(() => t.previousSibling.focus(), 400)) : this.btnPlay.focus()
      }
    }
    handleFocus(e) {
      return (e = e.target) && e.contains(document.activeElement) && this.autoPlay && this.handleAutoPlay(), this
    }
  }, e.CategoryFilter = class se {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).CATEGORY_FILTER) ? {} : t, (t = new se(e, t)).init(), e.ECLCategoryFilter = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).itemSelector) ? ".ecl-category-filter__item--has-children" : i,
        t = void 0 === (t = t.attachClickListener) || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.itemSelector = i, this.attachClickListener = t, this.items = null, this.handleClickExpand = this.handleClickExpand.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map, this.items = a(this.itemSelector, this.element), this.attachClickListener && this.items && this.items.forEach(e => e.addEventListener("click", this.handleClickExpand)), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.attachClickListener && this.items && this.items.forEach(e => {
        e.removeEventListener("click", this.handleClickExpand, !1)
      }), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    handleClickExpand(e) {
      e.preventDefault();
      var t = e.target.closest(".ecl-category-filter__item");
      t.classList.contains("ecl-category-filter__item--level-1") && (this.items.forEach(e => {
        e !== t && e.parentElement.setAttribute("aria-expanded", "false")
      }), "true" === t.parentElement.getAttribute("aria-expanded")) ? (t.parentElement.setAttribute("aria-expanded", "false"), t.classList.remove("ecl-category-filter__item--current")) : (this.items.forEach(e => {
        e === t ? e.classList.add("ecl-category-filter__item--current") : e.classList.remove("ecl-category-filter__item--current")
      }), e = t.parentElement.getAttribute("aria-expanded"), t.parentElement.setAttribute("aria-expanded", "false" === e ? "true" : "false"))
    }
  }, e.ContentBlock = class ne {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).CONTENT_BLOCK) ? {} : t, (t = new ne(e, t)).init(), e.ECLContentBlock = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).targetSelector) ? "[data-ecl-picture-link]" : i,
        s = void 0 === (s = t.titleSelector) ? "[data-ecl-title-link]" : s,
        n = void 0 === (n = t.attachClickListener) || n,
        l = void 0 === (l = t.maxIterations) ? 2 : l,
        t = void 0 !== (t = t.withTitleAttr) && t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.targetSelector = i, this.titleSelector = s, this.attachClickListener = n, this.maxIterations = l, this.withTitleAttr = t, this.linkTo = this.linkTo.bind(this), this.findElementInCommonAncestor = this.findElementInCommonAncestor.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      var e;
      ECL.components = ECL.components || new Map, this.picture = this.findElementInCommonAncestor(this.element, this.targetSelector, this.maxIterations), this.picture && (this.title = o(this.titleSelector, this.element), this.linkEl = !!this.title && o("a", this.title), this.linkEl && (this.picture.style.cursor = "pointer", (e = o("img", this.picture)) && this.withTitleAttr && (e.title = this.constructor.convertToFullURL(this.linkEl.getAttribute("href"))), this.attachClickListener) && this.picture.addEventListener("click", this.linkTo), this.element.setAttribute("data-ecl-auto-initialized", !0), ECL.components.set(this.element, this))
    }
    linkTo() {
      this.linkEl && this.linkEl.click()
    }
    findElementInCommonAncestor(e, t, i) {
      var s = o(t, e);
      return s || (e === document.documentElement || i <= 0 ? null : this.findElementInCommonAncestor(e.parentElement, t, i - 1))
    }
    static convertToFullURL(e) {
      var t;
      return e.startsWith("http://") || e.startsWith("https://") ? e : (t = new URL(window.location.href), new URL(e, t).href)
    }
    destroy() {
      this.attachClickListener && this.picture && this.picture.removeEventListener("click", this.linkto), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
  }, e.Datepicker = class le {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).DATEPICKER) ? {} : t, (t = new le(e, t)).init(), e.ECLDatepicker = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).format) ? "DD-MM-YYYY" : i,
        s = void 0 === (s = t.theme) ? "ecl-datepicker-theme" : s,
        n = void 0 === (n = t.yearRange) ? 40 : n,
        l = void 0 !== (l = t.reposition) && l,
        a = void 0 === (a = t.i18n) ? {
          previousMonth: "Previous Month",
          nextMonth: "Next Month",
          months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        } : a,
        o = void 0 === (o = t.showDaysInNextAndPreviousMonths) || o,
        t = void 0 === (t = t.enableSelectionDaysInNextAndPreviousMonths) || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.picker = null, this.format = i, this.theme = s, this.yearRange = n, this.i18n = a, this.showDaysInNextAndPreviousMonths = o, this.enableSelectionDaysInNextAndPreviousMonths = t, this.reposition = l, this.direction = "ltr"
    }
    init() {
      if (ECL) return ECL.components = ECL.components || new Map, this.direction = getComputedStyle(this.element).direction, this.picker = new z({
        field: this.element,
        format: this.format,
        yearRange: this.yearRange,
        firstDay: 1,
        i18n: this.i18n,
        theme: this.theme,
        reposition: this.reposition,
        isRTL: "rtl" === this.direction,
        position: "rtl" === this.direction ? "bottom right" : "bottom left",
        showDaysInNextAndPreviousMonths: this.showDaysInNextAndPreviousMonths,
        enableSelectionDaysInNextAndPreviousMonths: this.enableSelectionDaysInNextAndPreviousMonths,
        onOpen() {
          this.direction = getComputedStyle(this.el).direction;
          var e = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
            t = this.el.getBoundingClientRect(),
            t = "rtl" === this.direction ? e - t.right : t.left;
          e < 768 && (this.el.style.width = "auto", this.el.style.left = t + "px", this.el.style.right = t + "px")
        }
      }), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this), this.picker;
      throw new TypeError("Called init but ECL is not present")
    }
    destroy() {
      this.picker && (this.picker.destroy(), this.picker = null), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
  }, e.DescriptionList = class ae {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).DESCRIPTION_LIST) ? {} : t, (t = new ae(e, t)).init(), e.ECLDescriptionList = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).listsSelector) ? "[data-ecl-description-list-collapsible]" : i,
        s = void 0 === (s = t.visibleItemsSelector) ? "data-ecl-description-list-visible-items" : s,
        n = void 0 === (n = t.moreItemLabelSelector) ? "data-ecl-description-list-more-label" : n,
        t = void 0 === (t = t.attachClickListener) || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.moreItemLabelSelector = n, this.listsSelector = i, this.attachClickListener = t, this.visibleItemsSelector = s, this.moreItemLabel = null, this.lists = null, this.handleClickOnMore = this.handleClickOnMore.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map, this.moreItemLabel = this.element.getAttribute(this.moreItemLabelSelector), this.visibleItems = this.element.getAttribute(this.visibleItemsSelector), this.lists = a(this.listsSelector, this.element), this.lists[0] && 0 < this.visibleItems && this.moreItemLabel && (this.lists.forEach(e => {
        var t;
        e.children && e.children.length > this.visibleItems && ((t = document.createElement("a")).classList.add("ecl-link", "ecl-description-list__see_more"), t.href = "#", t.innerHTML = this.moreItemLabel, e.appendChild(t), this.showHide(a(".ecl-description-list__definition-item", e)), this.attachClickListener) && t.addEventListener("click", this.handleClickOnMore)
      }), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this))
    }
    showHide(e) {
      if (e)
        for (var t = Array.from(e), i = (e = "ecl-description-list__definition-item") + "--hidden", s = e + "--last-visible", n = 0; n < t.length; n += 1) {
          var l = t[n];
          n < this.visibleItems ? (l.classList.remove(i), l.classList.remove(s)) : n >= this.visibleItems && l.classList.add(i), n === this.visibleItems - 1 ? l.classList.add(s) : l.classList.remove(s)
        }
    }
    destroy() {
      var e;
      this.attachClickListener && 0 < this.visibleItems && (e = a(".ecl-description-list__see_more"))[0] && e.forEach(e => {
        e.removeEventListener("click", this.handleClickOnMore)
      }), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    handleClickOnMore(e) {
      e.preventDefault();
      var t = e.target.parentNode;
      this.element.contains(t) && (Array.from(t.children).forEach(e => {
        e.classList.remove("ecl-description-list__definition-item--hidden"), e.classList.remove("ecl-description-list__definition-item--last-visible")
      }), e.target.remove())
    }
  }, e.Expandable = class oe {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).EXPANDABLE) ? {} : t, (t = new oe(e, t)).init(), e.ECLExpandable = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).toggleSelector) ? "[data-ecl-expandable-toggle]" : i,
        s = void 0 === (s = t.labelSelector) ? "[data-ecl-label]" : s,
        n = void 0 === (n = t.labelExpanded) ? "data-ecl-label-expanded" : n,
        l = void 0 === (l = t.labelCollapsed) ? "data-ecl-label-collapsed" : l,
        t = void 0 === (t = t.attachClickListener) || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.toggleSelector = i, this.labelSelector = s, this.labelExpanded = n, this.labelCollapsed = l, this.attachClickListener = t, this.toggle = null, this.forceClose = !1, this.target = null, this.label = null, this.handleClickOnToggle = this.handleClickOnToggle.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      if (ECL.components = ECL.components || new Map, this.toggle = o(this.toggleSelector, this.element), this.target = document.querySelector("#" + this.toggle.getAttribute("aria-controls")), this.label = o(this.labelSelector, this.element), !this.target) throw new TypeError("Target has to be provided for expandable (aria-controls)");
      this.attachClickListener && this.toggle && this.toggle.addEventListener("click", this.handleClickOnToggle), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.attachClickListener && this.toggle && this.toggle.removeEventListener("click", this.handleClickOnToggle), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    handleClickOnToggle() {
      var e = !0 === this.forceClose || "true" === this.toggle.getAttribute("aria-expanded");
      return this.toggle.setAttribute("aria-expanded", e ? "false" : "true"), this.target.hidden = e, this.label && !e && this.toggle.hasAttribute(this.labelExpanded) ? this.label.innerHTML = this.toggle.getAttribute(this.labelExpanded) : this.label && e && this.toggle.hasAttribute(this.labelCollapsed) && (this.label.innerHTML = this.toggle.getAttribute(this.labelCollapsed)), this
    }
  }, e.FileDownload = class re {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).FILE_DOWNLOAD) ? {} : t, (t = new re(e, t)).init(), e.ECLFileDownload = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).translationToggleSelector) ? "[data-ecl-file-translation-toggle]" : i,
        s = void 0 === (s = t.translationContainerSelector) ? "[data-ecl-file-translation-container]" : s,
        t = void 0 === (t = t.attachClickListener) || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.translationToggleSelector = i, this.translationContainerSelector = s, this.attachClickListener = t, this.translationToggle = null, this.translationContainer = null, this.handleClickOnToggle = this.handleClickOnToggle.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map, this.translationToggle = o(this.translationToggleSelector, this.element), this.translationContainer = o(this.translationContainerSelector, this.element), this.attachClickListener && this.translationToggle && this.translationToggle.addEventListener("click", this.handleClickOnToggle), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.attachClickListener && this.translationToggle && this.translationToggle.removeEventListener("click", this.handleClickOnToggle), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    handleClickOnToggle(e) {
      return e.preventDefault(), "true" === this.translationContainer.getAttribute("aria-expanded") ? this.translationContainer.setAttribute("aria-expanded", "false") : this.translationContainer.setAttribute("aria-expanded", "true"), this
    }
  }, e.FileUpload = class he {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).FILE_UPLOAD) ? {} : t, (t = new he(e, t)).init(), e.ECLFileUpload = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).groupSelector) ? "[data-ecl-file-upload-group]" : i,
        s = void 0 === (s = t.buttonSelector) ? "[data-ecl-file-upload-button]" : s,
        n = void 0 === (n = t.listSelector) ? "[data-ecl-file-upload-list]" : n,
        l = void 0 === (l = t.labelChoose) ? "data-ecl-file-upload-label-choose" : l,
        a = void 0 === (a = t.labelReplace) ? "data-ecl-file-upload-label-replace" : a,
        t = void 0 === (t = t.attachChangeListener) || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.groupSelector = i, this.buttonSelector = s, this.listSelector = n, this.labelChoose = l, this.labelReplace = a, this.attachChangeListener = t, this.fileUploadGroup = null, this.fileUploadInput = null, this.fileUploadButton = null, this.fileUploadList = null, this.handleChange = this.handleChange.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map, this.fileUploadGroup = this.element.closest(this.groupSelector), this.fileUploadInput = this.element, this.fileUploadButton = o(this.buttonSelector, this.fileUploadGroup), this.fileUploadList = o(this.listSelector, this.fileUploadGroup), this.attachChangeListener && this.fileUploadInput && this.fileUploadInput.addEventListener("change", this.handleChange), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.attachChangeListener && this.fileUploadInput && this.fileUploadInput.removeEventListener("change", this.handleChange), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    handleChange(e) {
      var n;
      "files" in e.target ? (n = "", Array.prototype.forEach.call(e.target.files, e => {
        i = e.size, s = 1;
        var t, i = 0 === i ? "0 Bytes" : (s = s < 0 ? 0 : s, t = Math.floor(Math.log(i) / Math.log(1024)), parseFloat((i / Math.pow(1024, t)).toFixed(s)) + " " + ["Bytes", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][t]),
          s = e.name.split(".").pop();
        n += '<li class="ecl-file-upload__item">\n      <span class="ecl-file-upload__item-name">' + e.name + '</span>\n      <span class="ecl-file-upload__item-meta">(' + i + " - " + s + ")</span>\n      </li>"
      }), this.fileUploadList.innerHTML = n, this.fileUploadButton.hasAttribute(this.labelReplace) && (this.fileUploadButton.innerHTML = this.fileUploadButton.getAttribute(this.labelReplace))) : this.fileUploadButton.hasAttribute(this.labelChoose) && (this.fileUploadButton.innerHTML = this.fileUploadButton.getAttribute(this.labelChoose))
    }
  }, e.Gallery = class ce {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).GALLERY) ? {} : t, (t = new ce(e, t)).init(), e.ECLGallery = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).expandableSelector) ? "data-ecl-gallery-not-expandable" : i,
        s = void 0 === (s = t.galleryItemSelector) ? "[data-ecl-gallery-item]" : s,
        n = void 0 === (n = t.descriptionSelector) ? "[data-ecl-gallery-description]" : n,
        l = void 0 === (l = t.noOverlaySelector) ? "data-ecl-gallery-no-overlay" : l,
        a = void 0 === (a = t.metaSelector) ? "[data-ecl-gallery-meta]" : a,
        o = void 0 === (o = t.itemsLimitSelector) ? "data-ecl-gallery-visible-items" : o,
        r = void 0 === (r = t.closeButtonSelector) ? "[data-ecl-gallery-close]" : r,
        h = void 0 === (h = t.viewAllSelector) ? "[data-ecl-gallery-all]" : h,
        c = void 0 === (c = t.viewAllLabelSelector) ? "data-ecl-gallery-collapsed-label" : c,
        d = void 0 === (d = t.viewAllExpandedLabelSelector) ? "data-ecl-gallery-expanded-label" : d,
        u = void 0 === (u = t.countSelector) ? "[data-ecl-gallery-count]" : u,
        p = void 0 === (p = t.overlaySelector) ? "[data-ecl-gallery-overlay]" : p,
        m = void 0 === (m = t.overlayHeaderSelector) ? "[data-ecl-gallery-overlay-header]" : m,
        g = void 0 === (g = t.overlayFooterSelector) ? "[data-ecl-gallery-overlay-footer]" : g,
        v = void 0 === (v = t.overlayMediaSelector) ? "[data-ecl-gallery-overlay-media]" : v,
        b = void 0 === (b = t.overlayCounterCurrentSelector) ? "[data-ecl-gallery-overlay-counter-current]" : b,
        f = void 0 === (f = t.overlayCounterMaxSelector) ? "[data-ecl-gallery-overlay-counter-max]" : f,
        y = void 0 === (y = t.overlayDownloadSelector) ? "[data-ecl-gallery-overlay-download]" : y,
        E = void 0 === (E = t.overlayShareSelector) ? "[data-ecl-gallery-overlay-share]" : E,
        L = void 0 === (L = t.overlayDescriptionSelector) ? "[data-ecl-gallery-overlay-description]" : L,
        C = void 0 === (C = t.overlayMetaSelector) ? "[data-ecl-gallery-overlay-meta]" : C,
        w = void 0 === (w = t.overlayPreviousSelector) ? "[data-ecl-gallery-overlay-previous]" : w,
        k = void 0 === (k = t.overlayNextSelector) ? "[data-ecl-gallery-overlay-next]" : k,
        S = void 0 === (S = t.attachClickListener) || S,
        x = void 0 === (x = t.attachKeyListener) || x,
        t = void 0 === (t = t.attachResizeListener) || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.galleryItemSelector = s, this.descriptionSelector = n, this.metaSelector = a, this.closeButtonSelector = r, this.viewAllSelector = h, this.countSelector = u, this.itemsLimitSelector = o, this.overlaySelector = p, this.noOverlaySelector = l, this.overlayHeaderSelector = m, this.overlayFooterSelector = g, this.overlayMediaSelector = v, this.overlayCounterCurrentSelector = b, this.overlayCounterMaxSelector = f, this.overlayDownloadSelector = y, this.overlayShareSelector = E, this.overlayDescriptionSelector = L, this.overlayMetaSelector = C, this.overlayPreviousSelector = w, this.overlayNextSelector = k, this.attachClickListener = S, this.attachKeyListener = x, this.attachResizeListener = t, this.viewAllLabelSelector = c, this.viewAllExpandedLabelSelector = d, this.expandableSelector = i, this.galleryItems = null, this.meta = null, this.closeButton = null, this.viewAll = null, this.count = null, this.overlay = null, this.overlayHeader = null, this.overlayFooter = null, this.overlayMedia = null, this.overlayCounterCurrent = null, this.overlayCounterMax = null, this.overlayDownload = null, this.overlayShare = null, this.overlayDescription = null, this.overlayMeta = null, this.overlayPrevious = null, this.overlayNext = null, this.selectedItem = null, this.focusTrap = null, this.isDesktop = !1, this.resizeTimer = null, this.visibleItems = 0, this.breakpointMd = 768, this.breakpointLg = 996, this.imageHeight = 185, this.imageHeightBig = 260, this.iframeResize = this.iframeResize.bind(this), this.handleClickOnCloseButton = this.handleClickOnCloseButton.bind(this), this.handleClickOnViewAll = this.handleClickOnViewAll.bind(this), this.handleClickOnItem = this.handleClickOnItem.bind(this), this.preventClickOnItem = this.preventClickOnItem.bind(this), this.handleKeyPressOnItem = this.handleKeyPressOnItem.bind(this), this.handleClickOnPreviousButton = this.handleClickOnPreviousButton.bind(this), this.handleClickOnNextButton = this.handleClickOnNextButton.bind(this), this.handleKeyboard = this.handleKeyboard.bind(this), this.handleResize = this.handleResize.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map, this.expandable = !this.element.hasAttribute(this.expandableSelector), this.visibleItems = this.element.getAttribute(this.itemsLimitSelector), this.galleryItems = a(this.galleryItemSelector, this.element), this.closeButton = o(this.closeButtonSelector, this.element), this.noOverlay = this.element.hasAttribute(this.noOverlaySelector), this.expandable && (this.viewAll = o(this.viewAllSelector, this.element), this.viewAllLabel = this.viewAll.getAttribute(this.viewAllLabelSelector) || this.viewAll.innerText, this.viewAllLabelExpanded = this.viewAll.getAttribute(this.viewAllExpandedLabelSelector) || this.viewAllLabel), this.count = o(this.countSelector, this.element), this.attachClickListener && this.viewAll && this.viewAll.addEventListener("click", this.handleClickOnViewAll), this.noOverlay ? this.galleryItems.forEach(e => {
        e.classList.add("ecl-gallery__item__link--frozen"), e.addEventListener("click", this.preventClickOnItem)
      }) : (this.overlay = o(this.overlaySelector, this.element), this.overlayHeader = o(this.overlayHeaderSelector, this.overlay), this.overlayFooter = o(this.overlayFooterSelector, this.overlay), this.overlayMedia = o(this.overlayMediaSelector, this.overlay), this.overlayCounterCurrent = o(this.overlayCounterCurrentSelector, this.overlay), this.overlayCounterMax = o(this.overlayCounterMaxSelector, this.overlay), this.overlayDownload = o(this.overlayDownloadSelector, this.overlay), this.overlayShare = o(this.overlayShareSelector, this.overlay), this.overlayDescription = o(this.overlayDescriptionSelector, this.overlay), this.overlayMeta = o(this.overlayMetaSelector, this.overlay), this.overlayPrevious = o(this.overlayPreviousSelector, this.overlay), this.overlayNext = o(this.overlayNextSelector, this.overlay), this.focusTrap = g(this.overlay, {
        escapeDeactivates: !1,
        returnFocusOnDeactivate: !1
      }), this.isDialogSupported = !0, window.HTMLDialogElement || (this.isDialogSupported = !1), this.attachClickListener && this.closeButton && this.closeButton.addEventListener("click", this.handleClickOnCloseButton), this.attachClickListener && this.galleryItems && this.galleryItems.forEach(e => {
        this.attachClickListener && e.addEventListener("click", this.handleClickOnItem), this.attachKeyListener && e.addEventListener("keyup", this.handleKeyPressOnItem)
      }), this.attachClickListener && this.overlayPrevious && this.overlayPrevious.addEventListener("click", this.handleClickOnPreviousButton), this.attachClickListener && this.overlayNext && this.overlayNext.addEventListener("click", this.handleClickOnNextButton), !this.isDialogSupported && this.attachKeyListener && this.overlay && this.overlay.addEventListener("keyup", this.handleKeyboard), this.isDialogSupported && this.overlay && this.overlay.addEventListener("close", this.handleClickOnCloseButton)), this.attachResizeListener && window.addEventListener("resize", this.handleResize), this.expandable && (this.checkScreen(), this.hideItems()), this.galleryItems.forEach((e, t) => {
        e.setAttribute("data-ecl-gallery-item-id", t)
      }), this.count && (this.count.innerHTML = this.galleryItems.length), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.attachClickListener && this.closeButton && this.closeButton.removeEventListener("click", this.handleClickOnCloseButton), this.attachClickListener && this.viewAll && this.viewAll.removeEventListener("click", this.handleClickOnViewAll), this.attachClickListener && this.galleryItems && this.galleryItems.forEach(e => {
        e.removeEventListener("click", this.handleClickOnItem)
      }), this.attachClickListener && this.overlayPrevious && this.overlayPrevious.removeEventListener("click", this.handleClickOnPreviousButton), this.attachClickListener && this.overlayNext && this.overlayNext.removeEventListener("click", this.handleClickOnNextButton), !this.isDialogSupported && this.attachKeyListener && this.overlay && this.overlay.removeEventListener("keyup", this.handleKeyboard), this.isDialogSupported && this.overlay && this.overlay.removeEventListener("close", this.handleClickOnCloseButton), this.attachResizeListener && window.removeEventListener("resize", this.handleResize), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    checkScreen() {
      window.innerWidth > this.breakpointMd ? this.isDesktop = !0 : this.isDesktop = !1, window.innerWidth > this.breakpointLg && (this.isLarge = !0)
    }
    iframeResize(t) {
      var i;
      (t = !t && this.overlay ? o("iframe", this.overlay) : t) && (i = window.innerWidth, setTimeout(() => {
        var e = this.overlay.clientHeight - this.overlayHeader.clientHeight - this.overlayFooter.clientHeight;
        e < i ? (t.setAttribute("height", e + "px"), i < 16 * e / 9 ? t.setAttribute("width", i - .05 * i + "px") : t.setAttribute("width", 16 * e / 9 + "px")) : (t.setAttribute("width", i + "px"), e < 4 * i / 3 ? t.setAttribute("height", e - .05 * e + "px") : t.setAttribute("height", 4 * i / 3 + "px"))
      }, 0))
    }
    hideItems(i) {
      var s;
      void 0 === i && (i = 0), this.viewAll && !this.viewAll.expanded && (this.isDesktop ? (s = [], this.galleryItems.forEach((e, t) => {
        e.parentNode.classList.remove("ecl-gallery__item--hidden"), t >= Number(this.visibleItems) + Number(i) && (s = [...s, t])
      }), s.forEach(e => {
        this.galleryItems[e].parentNode.classList.add("ecl-gallery__item--hidden")
      })) : this.galleryItems.forEach((e, t) => {
        t > 2 + Number(i) ? e.parentNode.classList.add("ecl-gallery__item--hidden") : e.parentNode.classList.remove("ecl-gallery__item--hidden")
      }))
    }
    handleResize() {
      clearTimeout(this.resizeTimer), this.resizeTimer = setTimeout(() => {
        this.checkScreen(), this.hideItems(), this.iframeResize()
      }, 200)
    }
    updateOverlay(e) {
      var t = (this.selectedItem = e).getAttribute("data-ecl-gallery-item-embed-src"),
        i = o("video", e),
        s = null;
      null != t ? ((s = document.createElement("div")).classList.add("ecl-gallery__slider-embed"), (n = document.createElement("iframe")).setAttribute("src", t), n.setAttribute("frameBorder", "0"), this.overlayMedia && (s.appendChild(n), this.overlayMedia.innerHTML = "", this.overlayMedia.appendChild(s)), this.iframeResize(n)) : null != i ? ((s = document.createElement("video")).setAttribute("poster", i.poster), s.setAttribute("controls", "controls"), s.classList.add("ecl-gallery__slider-video"), this.overlayMedia && (this.overlayMedia.innerHTML = "", this.overlayMedia.appendChild(s)), a("source", i).forEach(e => {
        var t = document.createElement("source");
        t.setAttribute("src", e.getAttribute("src")), t.setAttribute("type", e.getAttribute("type")), s.appendChild(t)
      }), a("track", i).forEach(e => {
        var t = document.createElement("track");
        t.setAttribute("src", e.getAttribute("src")), t.setAttribute("kind", e.getAttribute("kind")), t.setAttribute("srclang", e.getAttribute("srcLang")), t.setAttribute("label", e.getAttribute("label")), s.appendChild(t)
      }), s.load()) : (n = o("img", e), (i = o("picture", e)) ? (n.classList.remove("ecl-gallery__image"), s = i.cloneNode(!0)) : ((s = document.createElement("img")).setAttribute("src", n.getAttribute("src")), s.setAttribute("alt", n.getAttribute("alt"))), s.classList.add("ecl-gallery__slider-image"), this.overlayMedia && (this.overlayMedia.innerHTML = "", this.overlayMedia.appendChild(s))), this.overlayCounterCurrent.innerHTML = +e.getAttribute("data-ecl-gallery-item-id") + 1, this.overlayCounterMax.innerHTML = this.galleryItems.length;
      null != (i = this.selectedItem.getAttribute("data-ecl-gallery-item-share")) ? (this.overlayShare.href = i, this.overlayShare.hidden = !1) : this.overlayShare.hidden = !0, null !== this.overlayDownload && null === t ? (this.overlayDownload.href = this.selectedItem.href, this.overlayDownload.hidden = !1) : null !== this.overlayDownload && (this.overlayDownload.hidden = !0);
      var n = o(this.metaSelector, e),
        i = (this.overlayMeta.innerHTML = n.innerHTML, o(this.descriptionSelector, e));
      this.overlayDescription.innerHTML = i.innerHTML
    }
    handleKeyboard(e) {
      "Escape" !== e.key && "Esc" !== e.key || this.handleClickOnCloseButton()
    }
    handleClickOnCloseButton() {
      this.isDialogSupported ? this.overlay.close() : this.overlay.removeAttribute("open");
      var e = o("iframe", this.overlayMedia);
      e && e.remove(), (e = o("video", this.overlayMedia)) && e.pause(), this.focusTrap.deactivate(), this.selectedItem.focus(), document.body.classList.remove("ecl-u-disablescroll")
    }
    handleKeyPressOnItem(e) {
      32 === e.keyCode && this.handleClickOnItem(e)
    }
    handleClickOnViewAll(e) {
      e.preventDefault(), this.viewAll && (this.viewAll.expanded ? (delete this.viewAll.expanded, this.checkScreen(), this.hideItems(), this.viewAll.textContent = this.viewAllLabel) : this.galleryItems.forEach(e => {
        this.viewAll.expanded = !0, e.parentNode.classList.remove("ecl-gallery__item--hidden"), this.viewAll.textContent = this.viewAllLabelExpanded
      }))
    }
    handleClickOnItem(e) {
      e.preventDefault(), document.body.classList.add("ecl-u-disablescroll"), this.isDialogSupported ? this.overlay.showModal() : this.overlay.setAttribute("open", ""), this.updateOverlay(e.currentTarget), this.focusTrap.activate()
    }
    preventClickOnItem(e) {
      e.preventDefault(), e.stopPropagation()
    }
    handleClickOnPreviousButton() {
      var e = +this.selectedItem.getAttribute("data-ecl-gallery-item-id") - 1,
        t = (e < 0 && (e = this.galleryItems.length - 1), o("video", this.selectedItem));
      return t && t.pause(), this.updateOverlay(this.galleryItems[e]), this.selectedItem = this.galleryItems[e], this
    }
    handleClickOnNextButton() {
      var e = +this.selectedItem.getAttribute("data-ecl-gallery-item-id") + 1,
        t = (e >= this.galleryItems.length && (e = 0), o("video", this.selectedItem));
      return t && t.pause(), this.updateOverlay(this.galleryItems[e]), this.selectedItem = this.galleryItems[e], this
    }
  }, e.InpageNavigation = class de {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).INPAGE_NAVIGATION) ? {} : t, (t = new de(e, t)).init(), e.ECLInpageNavigation = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).stickySelector) ? "[data-ecl-inpage-navigation]" : i,
        s = void 0 === (s = t.containerSelector) ? "[data-ecl-inpage-navigation-container]" : s,
        n = void 0 === (n = t.inPageList) ? "[data-ecl-inpage-navigation-list]" : n,
        l = void 0 === (l = t.spySelector) ? "[data-ecl-inpage-navigation-link]" : l,
        a = void 0 === (a = t.toggleSelector) ? "[data-ecl-inpage-navigation-trigger]" : a,
        o = void 0 === (o = t.linksSelector) ? "[data-ecl-inpage-navigation-link]" : o,
        r = void 0 === (r = t.spyActiveContainer) ? "ecl-inpage-navigation--visible" : r,
        h = void 0 === (h = t.spyOffset) ? 20 : h,
        c = void 0 === (c = t.spyClass) ? "ecl-inpage-navigation__item--active" : c,
        d = void 0 === (d = t.spyTrigger) ? "[data-ecl-inpage-navigation-trigger-current]" : d,
        u = void 0 === (u = t.attachClickListener) || u,
        t = void 0 === (t = t.contentClass) ? "ecl-inpage-navigation__heading--active" : t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.attachClickListener = u, this.stickySelector = i, this.containerSelector = s, this.toggleSelector = a, this.linksSelector = o, this.inPageList = n, this.spyActiveContainer = r, this.spySelector = l, this.spyOffset = h, this.spyClass = c, this.spyTrigger = d, this.contentClass = t, this.gumshoe = null, this.observer = null, this.stickyObserver = null, this.handleClickOnToggler = this.handleClickOnToggler.bind(this), this.handleClickOnLink = this.handleClickOnLink.bind(this), this.initScrollSpy = this.initScrollSpy.bind(this), this.initObserver = this.initObserver.bind(this), this.activateScrollSpy = this.activateScrollSpy.bind(this), this.deactivateScrollSpy = this.deactivateScrollSpy.bind(this), this.destroySticky = this.destroySticky.bind(this), this.destroyScrollSpy = this.destroyScrollSpy.bind(this), this.destroyObserver = this.destroyObserver.bind(this)
    }
    initSticky() {
      this.stickyInstance = new v.Sticky(this.element)
    }
    destroySticky() {
      this.stickyInstance && this.stickyInstance.remove()
    }
    initScrollSpy() {
      var e, s, n, l;
      this.gumshoe = new Z(this.spySelector, {
        navClass: this.spyClass,
        contentClass: this.contentClass,
        offset: this.spyOffset,
        reflow: !0
      }), document.addEventListener("gumshoeActivate", this.activateScrollSpy, !1), document.addEventListener("gumshoeDeactivate", this.deactivateScrollSpy, !1), "IntersectionObserver" in window && (e = o(this.containerSelector)) && (n = s = 0, l = !1, this.stickyObserver = new IntersectionObserver(e => {
        var t, i;
        e && e[0] && (t = (e = e[0]).boundingClientRect.y, i = e.intersectionRatio, e = e.isIntersecting, l ? t < s ? n < i && e || this.element.classList.remove(this.spyActiveContainer) : s < t && e && n < i && this.element.classList.add(this.spyActiveContainer) : l = !0, s = t, n = i)
      }, {
        root: null
      }), this.stickyObserver.observe(e))
    }
    activateScrollSpy(e) {
      var t = o(this.spyTrigger);
      this.element.classList.add(this.spyActiveContainer), t.textContent = e.detail.content.textContent
    }
    deactivateScrollSpy() {
      var e = o(this.spyTrigger);
      this.element.classList.remove(this.spyActiveContainer), e.innerHTML = ""
    }
    destroyScrollSpy() {
      this.stickyObserver && this.stickyObserver.disconnect(), document.removeEventListener("gumshoeActivate", this.activateScrollSpy, !1), document.removeEventListener("gumshoeDeactivate", this.deactivateScrollSpy, !1), this.gumshoe.destroy()
    }
    initObserver() {
      var t;
      "MutationObserver" in window && ((t = this).observer = new MutationObserver(e => {
        var s = o(".ecl-col-l-9"),
          n = o("[data-ecl-inpage-navigation-list]");
        e.forEach(e => {
          e && e.target && e.target.classList && !e.target.classList.contains("ecl-inpage-navigation__trigger-current") && (0 < e.addedNodes.length && [].slice.call(e.addedNodes).forEach(t => {
            var e, i;
            "H2" === t.tagName && t.id && (e = a("h2[id]", s).findIndex(e => e.id === t.id), (i = n.childNodes[e - 1].cloneNode(!0)).childNodes[0].textContent = t.textContent, i.childNodes[0].href = "#" + t.id, n.childNodes[e - 1].after(i))
          }), 0 < e.removedNodes.length && [].slice.call(e.removedNodes).forEach(t => {
            "H2" === t.tagName && t.id && n.childNodes.forEach(e => {
              -1 !== e.childNodes[0].href.indexOf(t.id) && e.remove()
            })
          }), t.update())
        })
      }), this.observer.observe(document, {
        subtree: !0,
        childList: !0
      }))
    }
    destroyObserver() {
      this.observer && this.observer.disconnect()
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map;
      var e = o(this.toggleSelector, this.element),
        t = a(this.linksSelector, this.element);
      this.initSticky(this.element), this.initScrollSpy(), this.initObserver(), this.attachClickListener && e && e.addEventListener("click", this.handleClickOnToggler), this.attachClickListener && t && (t.forEach(e => e.addEventListener("click", this.handleClickOnLink)), e.addEventListener("click", this.handleClickOnToggler)), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    update() {
      this.gumshoe.setup()
    }
    handleClickOnToggler(e) {
      var t = o(this.inPageList, this.element),
        i = o(this.toggleSelector, this.element),
        e = (e.preventDefault(), "true" === i.getAttribute("aria-expanded"));
      i.setAttribute("aria-expanded", e ? "false" : "true"), e ? t.classList.remove("ecl-inpage-navigation__list--visible") : t.classList.add("ecl-inpage-navigation__list--visible")
    }
    handleClickOnLink() {
      var e = o(this.inPageList, this.element),
        t = o(this.toggleSelector, this.element);
      e.classList.remove("ecl-inpage-navigation__list--visible"), t.setAttribute("aria-expanded", "false")
    }
    destroy() {
      this.attachClickListener && this.toggleElement && this.toggleElement.removeEventListener("click", this.handleClickOnToggler), this.attachClickListener && this.navLinks && this.navLinks.forEach(e => e.removeEventListener("click", this.handleClickOnLink)), this.destroyScrollSpy(), this.destroySticky(), this.destroyObserver(), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
  }, e.MediaContainer = class ue {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).MEDIA_CONTAINER) ? {} : t, (t = new ue(e, t)).init(), e.ECLMediaContainer = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).iframeSelector) ? "iframe" : i,
        t = void 0 === (t = t.useAutomaticRatio) || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.iframeSelector = i, this.useAutomaticRatio = t, this.iframe = null, this.calculateRatio = this.calculateRatio.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map;
      var e = o(".ecl-media-container__media", this.element);
      e && !/ecl-media-container__media--ratio/.test(e.className) && (this.iframe = o(this.iframeSelector, this.element), this.iframe) && this.useAutomaticRatio && this.calculateRatio(), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    calculateRatio() {
      var e = this.iframe.width,
        t = this.iframe.height;
      e && t || (e = this.iframe.offsetWidth, t = this.iframe.offsetHeight), this.iframe.style.aspectRatio = e + "/" + t
    }
  }, e.Menu = class pe {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).MENU) ? {} : t, (t = new pe(e, t)).init(), e.ECLMenu = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).openSelector) ? "[data-ecl-menu-open]" : i,
        s = void 0 === (s = t.closeSelector) ? "[data-ecl-menu-close]" : s,
        n = void 0 === (n = t.backSelector) ? "[data-ecl-menu-back]" : n,
        l = void 0 === (l = t.overlaySelector) ? "[data-ecl-menu-overlay]" : l,
        a = void 0 === (a = t.innerSelector) ? "[data-ecl-menu-inner]" : a,
        o = void 0 === (o = t.listSelector) ? "[data-ecl-menu-list]" : o,
        r = void 0 === (r = t.itemSelector) ? "[data-ecl-menu-item]" : r,
        h = void 0 === (h = t.linkSelector) ? "[data-ecl-menu-link]" : h,
        c = void 0 === (c = t.buttonPreviousSelector) ? "[data-ecl-menu-items-previous]" : c,
        d = void 0 === (d = t.buttonNextSelector) ? "[data-ecl-menu-items-next]" : d,
        u = void 0 === (u = t.caretSelector) ? "[data-ecl-menu-caret]" : u,
        p = void 0 === (p = t.megaSelector) ? "[data-ecl-menu-mega]" : p,
        m = void 0 === (m = t.subItemSelector) ? "[data-ecl-menu-subitem]" : m,
        g = void 0 === (g = t.maxLines) ? 2 : g,
        v = void 0 === (v = t.maxLinesAttribute) ? "data-ecl-menu-max-lines" : v,
        b = void 0 === (b = t.attachClickListener) || b,
        f = void 0 === (f = t.attachHoverListener) || f,
        y = void 0 === (y = t.attachFocusListener) || y,
        E = void 0 === (E = t.attachKeyListener) || E,
        t = void 0 === (t = t.attachResizeListener) || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.openSelector = i, this.closeSelector = s, this.backSelector = n, this.overlaySelector = l, this.innerSelector = a, this.listSelector = o, this.itemSelector = r, this.linkSelector = h, this.buttonPreviousSelector = c, this.buttonNextSelector = d, this.caretSelector = u, this.megaSelector = p, this.subItemSelector = m, this.maxLines = g, this.maxLinesAttribute = v, this.attachClickListener = b, this.attachHoverListener = f, this.attachFocusListener = y, this.attachKeyListener = E, this.attachResizeListener = t, this.direction = "ltr", this.open = null, this.close = null, this.back = null, this.overlay = null, this.inner = null, this.itemsList = null, this.items = null, this.links = null, this.btnPrevious = null, this.btnNext = null, this.isOpen = !1, this.resizeTimer = null, this.isKeyEvent = !1, this.isDesktop = !1, this.hasOverflow = !1, this.offsetLeft = 0, this.lastVisibleItem = null, this.currentItem = null, this.totalItemsWidth = 0, this.breakpointL = 996, this.handleClickOnOpen = this.handleClickOnOpen.bind(this), this.handleClickOnClose = this.handleClickOnClose.bind(this), this.handleClickOnBack = this.handleClickOnBack.bind(this), this.handleClickOnNextItems = this.handleClickOnNextItems.bind(this), this.handleClickOnPreviousItems = this.handleClickOnPreviousItems.bind(this), this.handleClickOnCaret = this.handleClickOnCaret.bind(this), this.handleHoverOnItem = this.handleHoverOnItem.bind(this), this.handleHoverOffItem = this.handleHoverOffItem.bind(this), this.handleFocusIn = this.handleFocusIn.bind(this), this.handleFocusOut = this.handleFocusOut.bind(this), this.handleKeyboard = this.handleKeyboard.bind(this), this.handleKeyboardGlobal = this.handleKeyboardGlobal.bind(this), this.handleResize = this.handleResize.bind(this), this.useDesktopDisplay = this.useDesktopDisplay.bind(this), this.checkMenuOverflow = this.checkMenuOverflow.bind(this), this.checkMenuItem = this.checkMenuItem.bind(this), this.checkMegaMenu = this.checkMegaMenu.bind(this), this.closeOpenDropdown = this.closeOpenDropdown.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map, this.direction = getComputedStyle(this.element).direction, this.open = o(this.openSelector, this.element), this.close = o(this.closeSelector, this.element), this.back = o(this.backSelector, this.element), this.overlay = o(this.overlaySelector, this.element), this.inner = o(this.innerSelector, this.element), this.itemsList = o(this.listSelector, this.element), this.btnPrevious = o(this.buttonPreviousSelector, this.element), this.btnNext = o(this.buttonNextSelector, this.element), this.items = a(this.itemSelector, this.element), this.subItems = a(this.subItemSelector, this.element), this.links = a(this.linkSelector, this.element), this.carets = a(this.caretSelector, this.element);
      var e = this.element.getAttribute(this.maxLinesAttribute);
      e && (this.maxLines = e), this.isDesktop = this.useDesktopDisplay(), this.attachClickListener && (this.open && this.open.addEventListener("click", this.handleClickOnOpen), this.close && this.close.addEventListener("click", this.handleClickOnClose), this.back && this.back.addEventListener("click", this.handleClickOnBack), this.btnPrevious && this.btnPrevious.addEventListener("click", this.handleClickOnPreviousItems), this.btnNext && this.btnNext.addEventListener("click", this.handleClickOnNextItems), this.overlay) && this.overlay.addEventListener("click", this.handleClickOnClose), this.links && this.links.forEach(e => {
        this.attachFocusListener && (e.addEventListener("focusin", this.closeOpenDropdown), e.addEventListener("focusin", this.handleFocusIn), e.addEventListener("focusout", this.handleFocusOut)), this.attachKeyListener && e.addEventListener("keyup", this.handleKeyboard)
      }), this.carets && this.carets.forEach(e => {
        this.attachFocusListener && (e.addEventListener("focusin", this.handleFocusIn), e.addEventListener("focusout", this.handleFocusOut)), this.attachKeyListener && e.addEventListener("keyup", this.handleKeyboard), this.attachClickListener && e.addEventListener("click", this.handleClickOnCaret)
      }), this.subItems && this.subItems.forEach(e => {
        e = o(".ecl-menu__sublink", e), this.attachKeyListener && e && e.addEventListener("keyup", this.handleKeyboard), this.attachFocusListener && e && e.addEventListener("focusout", this.handleFocusOut)
      }), this.attachKeyListener && document.addEventListener("keyup", this.handleKeyboardGlobal), this.attachResizeListener && window.addEventListener("resize", this.handleResize), this.items && this.items.forEach(e => {
        this.checkMenuItem(e), this.totalItemsWidth += e.offsetWidth, e.hasAttribute("data-ecl-has-children") && this.attachHoverListener && (e.addEventListener("mouseover", this.handleHoverOnItem), e.addEventListener("mouseout", this.handleHoverOffItem))
      }), this.checkMenuOverflow(), this.currentItem && ("false" === this.currentItem.getAttribute("data-ecl-menu-item-visible") ? this.btnNext : this.btnPrevious).classList.add("ecl-menu__item--current"), this.stickyInstance = new v.Sticky(this.element), setTimeout(() => {
        this.element.classList.add("ecl-menu--transition")
      }, 500), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.stickyInstance && this.stickyInstance.remove(), this.attachClickListener && (this.open && this.open.removeEventListener("click", this.handleClickOnOpen), this.close && this.close.removeEventListener("click", this.handleClickOnClose), this.back && this.back.removeEventListener("click", this.handleClickOnBack), this.btnPrevious && this.btnPrevious.removeEventListener("click", this.handleClickOnPreviousItems), this.btnNext && this.btnNext.removeEventListener("click", this.handleClickOnNextItems), this.overlay) && this.overlay.removeEventListener("click", this.handleClickOnClose), this.attachKeyListener && this.carets && this.carets.forEach(e => {
        e.removeEventListener("keyup", this.handleKeyboard)
      }), this.items && this.isDesktop && this.items.forEach(e => {
        e.hasAttribute("data-ecl-has-children") && this.attachHoverListener && (e.removeEventListener("mouseover", this.handleHoverOnItem), e.removeEventListener("mouseout", this.handleHoverOffItem))
      }), this.links && this.links.forEach(e => {
        this.attachFocusListener && (e.removeEventListener("focusin", this.closeOpenDropdown), e.removeEventListener("focusin", this.handleFocusIn), e.removeEventListener("focusout", this.handleFocusOut)), this.attachKeyListener && e.removeEventListener("keyup", this.handleKeyboard)
      }), this.carets && this.carets.forEach(e => {
        this.attachFocusListener && (e.removeEventListener("focusin", this.handleFocusIn), e.removeEventListener("focusout", this.handleFocusOut)), this.attachKeyListener && e.removeEventListener("keyup", this.handleKeyboard), this.attachClickListener && e.removeEventListener("click", this.handleClickOnCaret)
      }), this.subItems && this.subItems.forEach(e => {
        e = o(".ecl-menu__sublink", e), this.attachKeyListener && e && e.removeEventListener("keyup", this.handleKeyboard), this.attachFocusListener && e && e.removeEventListener("focusout", this.handleFocusOut)
      }), this.attachKeyListener && document.removeEventListener("keyup", this.handleKeyboardGlobal), this.attachResizeListener && window.removeEventListener("resize", this.handleResize), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    useDesktopDisplay() {
      return !(b.isMobileOnly || (b.isTablet ? (this.element.classList.add("ecl-menu--forced-mobile"), 1) : window.innerWidth < this.breakpointL || (this.element.classList.remove("ecl-menu--forced-mobile"), 0)))
    }
    handleResize() {
      return this.element.classList.remove("ecl-menu--transition"), clearTimeout(this.resizeTimer), this.resizeTimer = setTimeout(() => {
        this.element.classList.remove("ecl-menu--forced-mobile"), this.isDesktop = this.useDesktopDisplay(), this.totalItemsWidth = 0, this.items && this.items.forEach(e => {
          this.checkMenuItem(e), this.totalItemsWidth += e.offsetWidth
        }), this.checkMenuOverflow(), this.element.classList.add("ecl-menu--transition")
      }, 200), this
    }
    checkMenuOverflow() {
      this.itemsList || (this.itemsList = o(".ecl-menu__list", this.element)), this.itemsList && this.inner && this.btnNext && this.btnPrevious && this.items && (this.hasOverflow = this.totalItemsWidth > this.inner.offsetWidth, this.hasOverflow && this.isDesktop ? (this.inner && this.inner.classList.add("ecl-menu__inner--has-overflow"), this.items && this.items.forEach(e => {
        e.removeAttribute("data-ecl-menu-item-visible")
      }), 0 === this.offsetLeft ? (this.btnNext.style.display = "block", "rtl" === this.direction ? this.items.every(e => e.getBoundingClientRect().left < this.itemsList.getBoundingClientRect().left ? (this.lastVisibleItem = e, !1) : (e.setAttribute("data-ecl-menu-item-visible", !0), !0)) : this.items.every(e => e.getBoundingClientRect().right > this.itemsList.getBoundingClientRect().right ? (this.lastVisibleItem = e, !1) : (e.setAttribute("data-ecl-menu-item-visible", !0), !0))) : "rtl" === this.direction ? this.items.forEach(e => {
        e.getBoundingClientRect().right <= this.inner.getBoundingClientRect().right && e.setAttribute("data-ecl-menu-item-visible", !0)
      }) : this.items.forEach(e => {
        e.getBoundingClientRect().left >= this.inner.getBoundingClientRect().left && e.setAttribute("data-ecl-menu-item-visible", !0)
      })) : (this.btnPrevious && (this.btnPrevious.style.display = "none"), this.btnNext && (this.btnNext.style.display = "none"), this.itemsList && (this.itemsList.style.left = "0"), this.inner && this.inner.classList.remove("ecl-menu__inner--has-overflow"), this.offsetLeft = 0, this.totalItemsWidth = 0, this.lastVisibleItem = null))
    }
    checkMenuItem(e) {
      var t = o(this.linkSelector, e);
      if (e.classList.contains("ecl-menu__item--current") && (this.currentItem = e), this.isDesktop) {
        if (!(this.maxLines < 1)) {
          e.style.alignItems = "flex-start";
          for (var i = t.offsetWidth, s = window.getComputedStyle(t), n = parseInt(s.lineHeight, 10) * this.maxLines + parseInt(s.paddingTop, 10) + parseInt(s.paddingBottom, 10); t.offsetHeight > n && (t.style.width = (i += 1) + "px", !(1e3 < i)););
          e.style.alignItems = "unset"
        }
      } else t.style.width = "100%"
    }
    checkMegaMenu(e) {
      var t = o(this.megaSelector, e);
      if (t && this.inner) {
        if ((i = a(this.subItemSelector, t)).length < 5) e.classList.add("ecl-menu__item--col1");
        else if (i.length < 9) e.classList.add("ecl-menu__item--col2");
        else {
          if (!(i.length < 13)) return e.classList.add("ecl-menu__item--full"), void("rtl" === this.direction ? t.style.right = this.offsetLeft + "px" : t.style.left = this.offsetLeft + "px");
          e.classList.add("ecl-menu__item--col3")
        }
        var i = t.getBoundingClientRect(),
          s = this.inner.getBoundingClientRect(),
          e = e.getBoundingClientRect(),
          i = i.width;
        s.width < e.left - s.left + i ? t.classList.add("ecl-menu__mega--rtl") : t.classList.remove("ecl-menu__mega--rtl")
      }
    }
    handleKeyboard(e) {
      var t = e.target,
        i = t.classList,
        s = this.element.getAttribute("aria-expanded"),
        n = t.closest(this.itemSelector);
      if ("Escape" === e.key || "Esc" === e.key) document.activeElement === t && t.blur(), "false" === s && ((l = o(".ecl-menu__button-caret", n)) && l.focus(), this.closeOpenDropdown());
      else {
        if (i.contains("ecl-menu__button-caret") && "false" === s) {
          if (32 === e.keyCode || "Enter" === e.key) return void("true" === n.getAttribute("aria-expanded") ? this.handleHoverOffItem(e) : this.handleHoverOnItem(e));
          if ("ArrowDown" === e.key)
            if (e.preventDefault(), l = o(".ecl-menu__sublink:first-of-type", n)) return this.handleHoverOnItem(e), void l.focus()
        }
        if (i.contains("ecl-menu__link") || i.contains("ecl-menu__button-caret")) {
          if ("ArrowLeft" === e.key || "ArrowUp" === e.key) {
            if (e.preventDefault(), (s = t.previousSibling) && s.classList.contains("ecl-menu__link")) return void s.focus();
            if (s = t.parentElement.previousSibling) {
              var l, n = s.classList.contains("ecl-menu__item--has-children") ? ".ecl-menu__button-caret" : ".ecl-menu__link";
              if (l = o(n, s)) return void l.focus()
            }
          }
          if ("ArrowRight" === e.key || "ArrowDown" === e.key) {
            if (e.preventDefault(), (n = t.nextSibling) && n.classList.contains("ecl-menu__button-caret")) return void n.focus();
            (n = t.parentElement.nextSibling) && (s = o(".ecl-menu__link", n)) && s.focus()
          }
          this.closeOpenDropdown()
        }
        i.contains("ecl-menu__sublink") && ("ArrowDown" === e.key && (l = t.parentElement.nextSibling) && (n = o(".ecl-menu__sublink", l)) ? n.focus() : "ArrowUp" === e.key && ((s = t.parentElement.previousSibling) ? (i = o(".ecl-menu__sublink", s)) && i.focus() : (l = o(this.itemSelector + '[aria-expanded="true"] ' + this.caretSelector, this.element)) && l.focus()))
      }
    }
    handleKeyboardGlobal(e) {
      var t = this.element.getAttribute("aria-expanded");
      "Escape" !== e.key && "Esc" !== e.key || ("true" === t && this.handleClickOnClose(), this.items.forEach(e => {
        e.setAttribute("aria-expanded", "false")
      }), this.carets.forEach(e => {
        e.setAttribute("aria-expanded", "false")
      }))
    }
    handleClickOnOpen(e) {
      return e.preventDefault(), this.element.setAttribute("aria-expanded", "true"), this.inner.setAttribute("aria-hidden", "false"), this.isOpen = !0, this
    }
    handleClickOnClose() {
      return this.element.setAttribute("aria-expanded", "false"), this.inner.classList.remove("ecl-menu__inner--expanded"), this.inner.setAttribute("aria-hidden", "true"), this.items.forEach(e => {
        e.classList.remove("ecl-menu__item--expanded"), e.setAttribute("aria-expanded", "false")
      }), this.open && this.open.focus(), this.isOpen = !1, this
    }
    handleClickOnBack() {
      return this.inner.classList.remove("ecl-menu__inner--expanded"), this.items.forEach(e => {
        e.classList.remove("ecl-menu__item--expanded"), e.setAttribute("aria-expanded", "false")
      }), this
    }
    handleClickOnPreviousItems() {
      this.itemsList && this.btnNext && (this.offsetLeft = 0, "rtl" === this.direction ? (this.itemsList.style.right = "0", this.itemsList.style.left = "auto") : (this.itemsList.style.left = "0", this.itemsList.style.right = "auto"), this.btnPrevious.style.display = "none", this.btnNext.style.display = "block", this.items) && this.items.forEach(e => {
        this.checkMenuItem(e), e.toggleAttribute("data-ecl-menu-item-visible")
      })
    }
    handleClickOnNextItems() {
      this.itemsList && this.items && this.btnPrevious && this.lastVisibleItem && (this.btnPrevious.style.display = "block", this.btnNext.style.display = "none", "rtl" === this.direction ? (this.offsetLeft = this.itemsList.getBoundingClientRect().right - this.lastVisibleItem.getBoundingClientRect().right - this.btnPrevious.offsetWidth, this.itemsList.style.right = "-" + this.offsetLeft + "px", this.itemsList.style.left = "auto") : (this.offsetLeft = this.lastVisibleItem.getBoundingClientRect().left - this.itemsList.getBoundingClientRect().left - this.btnPrevious.offsetWidth, this.itemsList.style.left = "-" + this.offsetLeft + "px", this.itemsList.style.right = "auto"), this.items) && this.items.forEach(e => {
        this.checkMenuItem(e), e.toggleAttribute("data-ecl-menu-item-visible")
      })
    }
    handleClickOnCaret(e) {
      var t;
      "false" !== this.element.getAttribute("aria-expanded") && (this.inner.classList.add("ecl-menu__inner--expanded"), t = e.target.closest(this.itemSelector), this.items.forEach(e => {
        e === t ? (e.classList.add("ecl-menu__item--expanded"), e.setAttribute("aria-expanded", "true")) : (e.classList.remove("ecl-menu__item--expanded"), e.setAttribute("aria-expanded", "false"))
      }), this.checkMegaMenu(t))
    }
    handleHoverOnItem(e) {
      var i = e.target.closest(this.itemSelector);
      this.hasOverflow && !i.hasAttribute("data-ecl-menu-item-visible") || (this.items.forEach(e => {
        var t = o(this.caretSelector, e);
        e === i ? (e.setAttribute("aria-expanded", "true"), t && t.setAttribute("aria-expanded", "true")) : (e.setAttribute("aria-expanded", "false"), t && (t.setAttribute("aria-expanded", "false"), t.blur()))
      }), this.checkMegaMenu(i))
    }
    handleHoverOffItem(e) {
      return (e = e.target.closest(this.itemSelector)).setAttribute("aria-expanded", "false"), (e = o(this.caretSelector, e)) && e.setAttribute("aria-expanded", "false"), this
    }
    closeOpenDropdown() {
      var e = o(this.itemSelector + "[aria-expanded='true']", this.element);
      e && (e.setAttribute("aria-expanded", "false"), e = o(this.caretSelector, e)) && e.setAttribute("aria-expanded", "false")
    }
    handleFocusIn(e) {
      e = e.target, this.isDesktop && this.hasOverflow && (e.closest("[data-ecl-menu-item]").hasAttribute("data-ecl-menu-item-visible") || (0 === this.offsetLeft ? this.handleClickOnNextItems() : this.handleClickOnPreviousItems()))
    }
    handleFocusOut(e) {
      var t, e = e.target;
      "true" !== this.element.getAttribute("aria-expanded") || e.parentElement.nextSibling || (t = o(".ecl-menu__button-caret", e.parentElement)) && e !== t || this.close.focus()
    }
  }, e.Message = class me {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).MESSAGE) ? {} : t, (t = new me(e, t)).init(), e.ECLMessage = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).closeSelector) ? "[data-ecl-message-close]" : i,
        t = void 0 === (t = t.attachClickListener) || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.closeSelector = i, this.attachClickListener = t, this.close = null, this.handleClickOnClose = this.handleClickOnClose.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map, this.close = o(this.closeSelector, this.element), this.attachClickListener && this.close && this.close.addEventListener("click", this.handleClickOnClose), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.attachClickListener && this.close && this.close.removeEventListener("click", this.handleClickOnClose), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    handleClickOnClose() {
      return this.element.parentNode && this.element.parentNode.removeChild(this.element), this
    }
  }, e.Modal = class ge {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).MODAL) ? {} : t, (t = new ge(e, t)).init(), e.ECLModal = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).toggleSelector) ? "" : i,
        s = void 0 === (s = t.closeSelector) ? "[data-ecl-modal-close]" : s,
        n = void 0 === (n = t.scrollSelector) ? "[data-ecl-modal-scroll]" : n,
        l = void 0 === (l = t.attachClickListener) || l,
        t = void 0 === (t = t.attachKeyListener) || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.toggleSelector = i, this.closeSelector = s, this.scrollSelector = n, this.attachClickListener = l, this.attachKeyListener = t, this.toggle = null, this.close = null, this.scroll = null, this.focusTrap = null, this.openModal = this.openModal.bind(this), this.closeModal = this.closeModal.bind(this), this.handleClickOnToggle = this.handleClickOnToggle.bind(this), this.handleKeyboardGlobal = this.handleKeyboardGlobal.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map, this.attachKeyListener && document.addEventListener("keyup", this.handleKeyboardGlobal), "" === this.toggleSelector && (this.toggleSelector = "#" + this.element.getAttribute("data-ecl-modal-toggle")), this.toggle = document.querySelector(this.toggleSelector), this.toggle && (this.toggle.setAttribute("aria-controls", this.element.id), this.toggle.getAttribute("aria-haspopup") || this.toggle.setAttribute("aria-haspopup", "dialog")), this.close = a(this.closeSelector, this.element), this.scroll = o(this.scrollSelector, this.element), this.focusTrap = g(this.element), this.isDialogSupported = !0, window.HTMLDialogElement || (this.isDialogSupported = !1), this.toggle && this.attachClickListener && this.toggle.addEventListener("click", this.handleClickOnToggle), this.close && this.attachClickListener && this.close.forEach(e => {
        e.addEventListener("click", this.closeModal)
      }), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.toggle && this.attachClickListener && this.toggle.removeEventListener("click", this.handleClickOnToggle), this.attachKeyListener && document.removeEventListener("keyup", this.handleKeyboardGlobal), this.close && this.attachClickListener && this.close.forEach(e => {
        e.removeEventListener("click", this.closeModal)
      }), this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element)
    }
    checkScroll() {
      this.scroll && (this.scroll.parentNode.classList.remove("ecl-modal__body--has-scroll"), this.scroll.scrollHeight > this.scroll.clientHeight) && this.scroll.parentNode.classList.add("ecl-modal__body--has-scroll")
    }
    handleClickOnToggle(e) {
      e.preventDefault(), "true" === this.toggle.getAttribute("aria-expanded") ? this.closeModal() : this.openModal()
    }
    openModal() {
      this.isDialogSupported ? this.element.showModal() : this.element.setAttribute("open", ""), this.checkScroll(), this.focusTrap.activate()
    }
    closeModal() {
      this.isDialogSupported ? this.element.close() : this.element.removeAttribute("open"), this.focusTrap.active && this.focusTrap.deactivate()
    }
    handleKeyboardGlobal(e) {
      "Escape" !== e.key && "Esc" !== e.key || this.closeModal()
    }
  }, e.NewsTicker = class ve {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).NEWS_TICKER) ? {} : t, (t = new ve(e, t)).init(), e.ECLNewsTicker = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).playSelector) ? "[data-ecl-news-ticker-play]" : i,
        s = void 0 === (s = t.pauseSelector) ? "[data-ecl-news-ticker-pause]" : s,
        n = void 0 === (n = t.prevSelector) ? "[data-ecl-news-ticker-prev]" : n,
        l = void 0 === (l = t.nextSelector) ? "[data-ecl-news-ticker-next]" : l,
        a = void 0 === (a = t.containerClass) ? ".ecl-news-ticker__container" : a,
        o = void 0 === (o = t.contentClass) ? ".ecl-news-ticker__content" : o,
        r = void 0 === (r = t.slidesClass) ? ".ecl-news-ticker__slides" : r,
        h = void 0 === (h = t.slideClass) ? ".ecl-news-ticker__slide" : h,
        c = void 0 === (c = t.currentSlideClass) ? ".ecl-news-ticker__counter--current" : c,
        d = void 0 === (d = t.controlsClass) ? ".ecl-news-ticker__controls" : d,
        u = void 0 === (u = t.attachClickListener) || u,
        t = void 0 === (t = t.attachResizeListener) || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.playSelector = i, this.pauseSelector = s, this.prevSelector = n, this.nextSelector = l, this.containerClass = a, this.contentClass = o, this.slidesClass = r, this.slideClass = h, this.currentSlideClass = c, this.controlsClass = d, this.attachClickListener = u, this.attachResizeListener = t, this.container = null, this.content = null, this.slides = null, this.btnPlay = null, this.btnPause = null, this.btnPrev = null, this.btnNext = null, this.index = 1, this.total = 0, this.allowShift = !0, this.autoPlay = null, this.autoPlayInterval = null, this.hoverAutoPlay = null, this.resizeTimer = null, this.cloneFirstSLide = null, this.cloneLastSLide = null, this.handleAutoPlay = this.handleAutoPlay.bind(this), this.handleMouseOver = this.handleMouseOver.bind(this), this.handleMouseOut = this.handleMouseOut.bind(this), this.shiftSlide = this.shiftSlide.bind(this), this.checkIndex = this.checkIndex.bind(this), this.moveSlides = this.moveSlides.bind(this), this.handleResize = this.handleResize.bind(this), this.handleFocus = this.handleFocus.bind(this)
    }
    init() {
      var e, t;
      if (ECL) return ECL.components = ECL.components || new Map, this.btnPlay = o(this.playSelector, this.element), this.btnPause = o(this.pauseSelector, this.element), this.btnPrev = o(this.prevSelector, this.element), this.btnNext = o(this.nextSelector, this.element), this.slidesContainer = o(this.slidesClass, this.element), this.container = o(this.containerClass, this.element), this.content = o(this.contentClass, this.element), this.controls = o(this.controlsClass, this.element), this.slides = a(this.slideClass, this.element), this.total = this.slides.length, this.total <= 1 && this.controls ? (this.content.style.height = "auto", !(this.controls.style.display = "none")) : (e = this.slides[0], t = this.slides[this.slides.length - 1], this.cloneFirstSLide = e.cloneNode(!0), this.cloneLastSLide = t.cloneNode(!0), this.slidesContainer.appendChild(this.cloneFirstSLide), this.slidesContainer.insertBefore(this.cloneLastSLide, e), this.slides = a(this.slideClass, this.element), this.handleResize(), this.handleAutoPlay(), this.attachClickListener && this.btnPlay && this.btnPause && (this.btnPlay.addEventListener("click", this.handleAutoPlay), this.btnPause.addEventListener("click", this.handleAutoPlay)), this.attachClickListener && this.btnNext && this.btnNext.addEventListener("click", this.shiftSlide.bind(this, 1, !0)), this.attachClickListener && this.btnPrev && this.btnPrev.addEventListener("click", this.shiftSlide.bind(this, -1, !0)), this.slidesContainer && (this.slidesContainer.addEventListener("transitionend", this.checkIndex), this.slidesContainer.addEventListener("mouseover", this.handleMouseOver), this.slidesContainer.addEventListener("mouseout", this.handleMouseOut)), this.container && this.container.addEventListener("focus", this.handleFocus, !0), this.attachResizeListener && window.addEventListener("resize", this.handleResize), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this), this);
      throw new TypeError("Called init but ECL is not present")
    }
    destroy() {
      this.cloneFirstSLide && this.cloneLastSLide && (this.cloneFirstSLide.remove(), this.cloneLastSLide.remove()), this.btnPlay && this.btnPlay.replaceWith(this.btnPlay.cloneNode(!0)), this.btnPause && this.btnPause.replaceWith(this.btnPause.cloneNode(!0)), this.btnNext && this.btnNext.replaceWith(this.btnNext.cloneNode(!0)), this.btnPrev && this.btnPrev.replaceWith(this.btnPrev.cloneNode(!0)), this.slidesContainer && (this.slidesContainer.removeEventListener("transitionend", this.checkIndex), this.slidesContainer.removeEventListener("mouseover", this.handleMouseOver), this.slidesContainer.removeEventListener("mouseout", this.handleMouseOut)), this.container && this.container.removeEventListener("focus", this.handleFocus, !0), this.attachResizeListener && window.removeEventListener("resize", this.handleResize), this.autoPlayInterval && (clearInterval(this.autoPlayInterval), this.autoPlay = null), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    shiftSlide(e, t) {
      this.allowShift && (this.index = 1 === e ? this.index + 1 : this.index - 1, this.moveSlides(!0)), t && this.autoPlay && this.handleAutoPlay(), this.allowShift = !1
    }
    moveSlides(e) {
      var t = this.slides[this.index].offsetTop,
        i = this.slides[this.index].offsetHeight;
      this.content.style.height = i + "px", this.slidesContainer.style.transitionDuration = e ? "0.4s" : "1ms", this.slidesContainer.style.transform = "translate3d(0px, -" + t + "px, 0px)"
    }
    checkIndex() {
      0 === this.index && (this.index = this.total, this.moveSlides(!1)), this.index === this.total + 1 && (this.index = 1, this.moveSlides(!1)), o(this.currentSlideClass, this.element).textContent = this.index, this.slides && this.slides.forEach((e, t) => {
        var i = o(".ecl-link", e);
        this.index === t ? (e.removeAttribute("inert", "true"), i && i.removeAttribute("tabindex", -1)) : (e.setAttribute("inert", "true"), i && i.setAttribute("tabindex", -1))
      }), this.allowShift = !0
    }
    handleAutoPlay() {
      var e;
      this.autoPlay ? (clearInterval(this.autoPlayInterval), this.autoPlay = !1, e = document.activeElement === this.btnPause, this.btnPlay.style.display = "flex", this.btnPause.style.display = "none", e && this.btnPlay.focus()) : (this.autoPlayInterval = setInterval(() => {
        this.shiftSlide(1)
      }, 5e3), this.autoPlay = !0, e = document.activeElement === this.btnPlay, this.btnPlay.style.display = "none", this.btnPause.style.display = "flex", e && this.btnPause.focus())
    }
    handleMouseOver() {
      return this.hoverAutoPlay = this.autoPlay, this.hoverAutoPlay && this.handleAutoPlay(), this
    }
    handleMouseOut() {
      return this.hoverAutoPlay && this.handleAutoPlay(), this
    }
    handleResize() {
      var t = 0;
      this.slides.forEach(e => {
        e = e.offsetHeight, t = t < e ? e : t
      }), t = t < 58 ? 58 : t, this.container.style.height = t + 10 + "px", this.moveSlides(!1)
    }
    handleFocus(e) {
      return (e = e.target) && e.contains(document.activeElement) && this.autoPlay && this.handleAutoPlay(), this
    }
  }, e.Popover = class be {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).POPOVER) ? {} : t, (t = new be(e, t)).init(), e.ECLPopover = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).toggleSelector) ? "[data-ecl-popover-toggle]" : i,
        s = void 0 === (s = t.attachClickListener) || s,
        t = void 0 === (t = t.attachKeyListener) || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.toggleSelector = i, this.attachClickListener = s, this.attachKeyListener = t, this.toggle = null, this.target = null, this.openPopover = this.openPopover.bind(this), this.closePopover = this.closePopover.bind(this), this.positionPopover = this.positionPopover.bind(this), this.handleClickOnToggle = this.handleClickOnToggle.bind(this), this.handleKeyboardGlobal = this.handleKeyboardGlobal.bind(this), this.handleClickGlobal = this.handleClickGlobal.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      if (ECL.components = ECL.components || new Map, this.toggle = o(this.toggleSelector, this.element), this.attachKeyListener && document.addEventListener("keyup", this.handleKeyboardGlobal), this.attachClickListener && document.addEventListener("click", this.handleClickGlobal), this.target = document.querySelector("#" + this.toggle.getAttribute("aria-controls")), !this.target) throw new TypeError("Target has to be provided for popover (aria-controls)");
      this.attachClickListener && this.toggle && this.toggle.addEventListener("click", this.handleClickOnToggle), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.attachClickListener && this.toggle && this.toggle.removeEventListener("click", this.handleClickOnToggle), this.attachKeyListener && document.removeEventListener("keyup", this.handleKeyboardGlobal), this.attachClickListener && document.removeEventListener("click", this.handleClickGlobal), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    handleClickOnToggle(e) {
      e.preventDefault(), "true" === this.toggle.getAttribute("aria-expanded") ? this.closePopover() : (this.openPopover(), this.positionPopover())
    }
    openPopover() {
      this.toggle.setAttribute("aria-expanded", "true"), this.target.hidden = !1
    }
    closePopover() {
      this.toggle.setAttribute("aria-expanded", "false"), this.target.hidden = !0
    }
    positionPopover() {
      this.element.classList.remove("ecl-popover--top"), this.element.classList.remove("ecl-popover--push-left"), this.element.classList.remove("ecl-popover--push-right");
      var e = this.toggle.getBoundingClientRect(),
        t = this.target.getBoundingClientRect(),
        i = this.target.clientHeight,
        s = window.innerHeight,
        n = window.innerWidth;
      0 < i && s - e.top < i && this.element.classList.add("ecl-popover--top"), t.left < 0 && (this.element.classList.add("ecl-popover--push-left"), this.target.style.setProperty("--ecl-popover-position", e.width / 2 + "px")), t.right > n && (this.element.classList.add("ecl-popover--push-right"), this.target.style.setProperty("--ecl-popover-position", "calc(" + e.width / 2 + "px - 0.5rem)"))
    }
    handleKeyboardGlobal(e) {
      !this.target || "Escape" !== e.key && "Esc" !== e.key || this.closePopover()
    }
    handleClickGlobal(e) {
      !this.target || "true" !== this.toggle.getAttribute("aria-expanded") || this.target.contains(e.target) || this.toggle.contains(e.target) || this.closePopover()
    }
  }, e.Range = class fe {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).RANGE) ? {} : t, (t = new fe(e, t)).init(), e.ECLRange = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).rangeInputSelector) ? "[data-ecl-range-input]" : i,
        s = void 0 === (s = t.currentValueSelector) ? "[data-ecl-range-value-current]" : s,
        t = void 0 === (t = t.attachChangeListener) || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.rangeInputSelector = i, this.currentValueSelector = s, this.attachChangeListener = t, this.rangeInput = null, this.currentValue = null, this.handleChange = this.handleChange.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map, this.rangeInput = o(this.rangeInputSelector, this.element), this.currentValue = o(this.currentValueSelector, this.element), this.rangeInput && this.currentValue && (this.currentValue.innerHTML = this.rangeInput.value, this.attachChangeListener) && this.rangeInput.addEventListener("input", this.handleChange), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.attachChangeListener && this.rangeInput && this.currentValue && this.rangeInput.removeEventListener("input", this.handleChange), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    handleChange() {
      this.currentValue.innerHTML = this.rangeInput.value
    }
  }, e.Select = f, e.SiteHeader = class ye {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).SITE_HEADER_CORE) ? {} : t, (t = new ye(e, t)).init(), e.ECLSiteHeader = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).containerSelector) ? "[data-ecl-site-header-top]" : i,
        s = void 0 === (s = t.languageLinkSelector) ? "[data-ecl-language-selector]" : s,
        n = void 0 === (n = t.languageListOverlaySelector) ? "[data-ecl-language-list-overlay]" : n,
        l = void 0 === (l = t.languageListEuSelector) ? "[data-ecl-language-list-eu]" : l,
        a = void 0 === (a = t.languageListNonEuSelector) ? "[data-ecl-language-list-non-eu]" : a,
        o = void 0 === (o = t.closeOverlaySelector) ? "[data-ecl-language-list-close]" : o,
        r = void 0 === (r = t.searchToggleSelector) ? "[data-ecl-search-toggle]" : r,
        h = void 0 === (h = t.searchFormSelector) ? "[data-ecl-search-form]" : h,
        c = void 0 === (c = t.loginToggleSelector) ? "[data-ecl-login-toggle]" : c,
        d = void 0 === (d = t.loginBoxSelector) ? "[data-ecl-login-box]" : d,
        u = void 0 === (u = t.attachClickListener) || u,
        p = void 0 === (p = t.attachKeyListener) || p,
        t = void 0 === (t = t.attachResizeListener) || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.containerSelector = i, this.languageLinkSelector = s, this.languageListOverlaySelector = n, this.languageListEuSelector = l, this.languageListNonEuSelector = a, this.closeOverlaySelector = o, this.searchToggleSelector = r, this.searchFormSelector = h, this.loginToggleSelector = c, this.loginBoxSelector = d, this.attachClickListener = u, this.attachKeyListener = p, this.attachResizeListener = t, this.languageMaxColumnItems = 8, this.languageLink = null, this.languageListOverlay = null, this.languageListEu = null, this.languageListNonEu = null, this.close = null, this.focusTrap = null, this.searchToggle = null, this.searchForm = null, this.loginToggle = null, this.loginBox = null, this.resizeTimer = null, this.openOverlay = this.openOverlay.bind(this), this.closeOverlay = this.closeOverlay.bind(this), this.toggleOverlay = this.toggleOverlay.bind(this), this.toggleSearch = this.toggleSearch.bind(this), this.toggleLogin = this.toggleLogin.bind(this), this.handleKeyboardLanguage = this.handleKeyboardLanguage.bind(this), this.handleKeyboardGlobal = this.handleKeyboardGlobal.bind(this), this.handleClickGlobal = this.handleClickGlobal.bind(this), this.handleResize = this.handleResize.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map, this.attachKeyListener && document.addEventListener("keyup", this.handleKeyboardGlobal), this.attachClickListener && document.addEventListener("click", this.handleClickGlobal), this.attachResizeListener && window.addEventListener("resize", this.handleResize), this.container = o(this.containerSelector), this.languageLink = o(this.languageLinkSelector), this.languageListOverlay = o(this.languageListOverlaySelector), this.languageListEu = o(this.languageListEuSelector), this.languageListNonEu = o(this.languageListNonEuSelector), this.close = o(this.closeOverlaySelector), this.focusTrap = g(this.languageListOverlay, {
        onDeactivate: this.closeOverlay,
        allowOutsideClick: !0
      }), this.attachClickListener && this.languageLink && this.languageLink.addEventListener("click", this.toggleOverlay), this.attachClickListener && this.close && this.close.addEventListener("click", this.toggleOverlay), this.attachKeyListener && this.languageLink && this.languageLink.addEventListener("keydown", this.handleKeyboardLanguage), this.searchToggle = o(this.searchToggleSelector), this.searchForm = o(this.searchFormSelector), this.attachClickListener && this.searchToggle && this.searchToggle.addEventListener("click", this.toggleSearch), this.loginToggle = o(this.loginToggleSelector), this.loginBox = o(this.loginBoxSelector), this.attachClickListener && this.loginToggle && this.loginToggle.addEventListener("click", this.toggleLogin), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.attachClickListener && this.languageLink && this.languageLink.removeEventListener("click", this.toggleOverlay), this.focusTrap && this.focusTrap.deactivate(), this.attachKeyListener && this.languageLink && this.languageLink.removeEventListener("keydown", this.handleKeyboardLanguage), this.attachClickListener && this.close && this.close.removeEventListener("click", this.toggleOverlay), this.attachClickListener && this.searchToggle && this.searchToggle.removeEventListener("click", this.toggleSearch), this.attachClickListener && this.loginToggle && this.loginToggle.removeEventListener("click", this.toggleLogin), this.attachKeyListener && document.removeEventListener("keyup", this.handleKeyboardGlobal), this.attachClickListener && document.removeEventListener("click", this.handleClickGlobal), this.attachResizeListener && window.removeEventListener("resize", this.handleResize), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    updateOverlay() {
      var e = 1,
        t = 1,
        i = (this.languageListEu && (i = a(".ecl-site-header__language-item", this.languageListEu), 1 < (e = Math.ceil(i.length / this.languageMaxColumnItems))) && this.languageListEu.classList.add("ecl-site-header__language-category--" + e + "-col"), this.languageListNonEu && (i = a(".ecl-site-header__language-item", this.languageListNonEu), 1 < (t = Math.ceil(i.length / this.languageMaxColumnItems))) && this.languageListNonEu.classList.add("ecl-site-header__language-category--" + t + "-col"), this.languageListEu ? this.languageListEu.parentNode.classList.remove("ecl-site-header__language-content--stack") : this.languageListNonEu && this.languageListNonEu.parentNode.classList.remove("ecl-site-header__language-content--stack"), this.languageListOverlay.getBoundingClientRect()),
        s = this.container.getBoundingClientRect(),
        e = (i.width > s.width && (this.languageListEu ? this.languageListEu.parentNode.classList.add("ecl-site-header__language-content--stack") : this.languageListNonEu && this.languageListNonEu.parentNode.classList.add("ecl-site-header__language-content--stack"), this.languageListNonEu) && (this.languageListNonEu.classList.remove("ecl-site-header__language-category--" + t + "-col"), this.languageListNonEu.classList.add("ecl-site-header__language-category--" + Math.max(e, t) + "-col")), this.languageListOverlay.classList.remove("ecl-site-header__language-container--push-right"), this.languageListOverlay.classList.remove("ecl-site-header__language-container--full"), this.languageListOverlay.style.removeProperty("--ecl-language-arrow-position"), this.languageListOverlay.style.removeProperty("right"), i = this.languageListOverlay.getBoundingClientRect(), window.innerWidth);
      i.right > e && (t = this.languageLink.getBoundingClientRect(), this.languageListOverlay.classList.add("ecl-site-header__language-container--push-right"), this.languageListOverlay.style.setProperty("right", "-" + (s.right - t.right) + "px"), e = s.right - t.right + t.width / 2, this.languageListOverlay.style.setProperty("--ecl-language-arrow-position", "calc(" + e + "px - 0.5rem)")), 0 === i.left && (s = this.languageLink.getBoundingClientRect(), this.languageListOverlay.classList.add("ecl-site-header__language-container--full"), this.languageListOverlay.style.removeProperty("right"), t = i.right - s.right + s.width / 2, this.languageListOverlay.style.setProperty("--ecl-language-arrow-position", "calc(" + t + "px - 0.5rem)"))
    }
    openOverlay() {
      this.languageListOverlay.hidden = !1, this.languageListOverlay.setAttribute("aria-modal", "true"), this.languageLink.setAttribute("aria-expanded", "true")
    }
    closeOverlay() {
      this.languageListOverlay.hidden = !0, this.languageListOverlay.removeAttribute("aria-modal"), this.languageLink.setAttribute("aria-expanded", "false")
    }
    toggleOverlay(e) {
      this.languageListOverlay && this.focusTrap && (e.preventDefault(), this.languageListOverlay.hasAttribute("hidden") ? (this.openOverlay(), this.updateOverlay(), this.focusTrap.activate()) : this.focusTrap.deactivate())
    }
    handleResize() {
      this.languageListOverlay && !this.languageListOverlay.hasAttribute("hidden") && (clearTimeout(this.resizeTimer), this.resizeTimer = setTimeout(() => {
        this.updateOverlay()
      }, 200))
    }
    handleKeyboardLanguage(e) {
      32 !== e.keyCode && "Enter" !== e.key || this.toggleOverlay(e)
    }
    toggleSearch(e) {
      var t;
      this.searchForm && (e.preventDefault(), t = "true" === this.searchToggle.getAttribute("aria-expanded"), this.loginToggle && "true" === this.loginToggle.getAttribute("aria-expanded") && this.toggleLogin(e), this.searchToggle.setAttribute("aria-expanded", t ? "false" : "true"), t ? this.searchForm.classList.remove("ecl-site-header__search--active") : this.searchForm.classList.add("ecl-site-header__search--active"))
    }
    toggleLogin(e) {
      var t;
      this.loginBox && (e.preventDefault(), t = "true" === this.loginToggle.getAttribute("aria-expanded"), this.searchToggle && "true" === this.searchToggle.getAttribute("aria-expanded") && this.toggleSearch(e), this.loginToggle.setAttribute("aria-expanded", t ? "false" : "true"), t ? this.loginBox.classList.remove("ecl-site-header__login-box--active") : this.loginBox.classList.add("ecl-site-header__login-box--active"))
    }
    handleKeyboardGlobal(e) {
      var t;
      this.languageLink && (t = this.languageLink.getAttribute("aria-expanded"), "Escape" !== e.key && "Esc" !== e.key || "true" === t && this.toggleOverlay(e))
    }
    handleClickGlobal(e) {
      !this.languageLink || "true" !== this.languageLink.getAttribute("aria-expanded") || this.languageListOverlay.contains(e.target) || this.languageLink.contains(e.target) || this.toggleOverlay(e)
    }
  }, e.SiteHeaderCore = class Ee {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).SITE_HEADER_CORE) ? {} : t, (t = new Ee(e, t)).init(), e.ECLSiteHeaderCore = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).languageLinkSelector) ? "[data-ecl-language-selector]" : i,
        s = void 0 === (s = t.languageListOverlaySelector) ? "[data-ecl-language-list-overlay]" : s,
        n = void 0 === (n = t.closeOverlaySelector) ? "[data-ecl-language-list-close]" : n,
        l = void 0 === (l = t.searchToggleSelector) ? "[data-ecl-search-toggle]" : l,
        a = void 0 === (a = t.searchFormSelector) ? "[data-ecl-search-form]" : a,
        o = void 0 === (o = t.loginToggleSelector) ? "[data-ecl-login-toggle]" : o,
        t = void 0 === (t = t.loginBoxSelector) ? "[data-ecl-login-box]" : t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.languageLinkSelector = i, this.languageListOverlaySelector = s, this.closeOverlaySelector = n, this.searchToggleSelector = l, this.searchFormSelector = a, this.loginToggleSelector = o, this.loginBoxSelector = t, this.languageSelector = null, this.languageListOverlay = null, this.close = null, this.focusTrap = null, this.searchToggle = null, this.searchForm = null, this.loginToggle = null, this.loginBox = null, this.openOverlay = this.openOverlay.bind(this), this.closeOverlay = this.closeOverlay.bind(this), this.toggleOverlay = this.toggleOverlay.bind(this), this.toggleSearch = this.toggleSearch.bind(this), this.toggleLogin = this.toggleLogin.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map, this.languageSelector = o(this.languageLinkSelector), this.languageListOverlay = o(this.languageListOverlaySelector), this.close = o(this.closeOverlaySelector), this.focusTrap = g(this.languageListOverlay, {
        onDeactivate: this.closeOverlay
      }), this.languageSelector && this.languageSelector.addEventListener("click", this.toggleOverlay), this.close && this.close.addEventListener("click", this.toggleOverlay), this.searchToggle = o(this.searchToggleSelector), this.searchForm = o(this.searchFormSelector), this.searchToggle && this.searchToggle.addEventListener("click", this.toggleSearch), this.loginToggle = o(this.loginToggleSelector), this.loginBox = o(this.loginBoxSelector), this.loginToggle && this.loginToggle.addEventListener("click", this.toggleLogin), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.languageSelector && this.languageSelector.removeEventListener("click", this.toggleOverlay), this.focusTrap && this.focusTrap.deactivate(), this.close && this.close.removeEventListener("click", this.toggleOverlay), this.searchToggle && this.searchToggle.removeEventListener("click", this.toggleSearch), this.loginToggle && this.loginToggle.removeEventListener("click", this.toggleLogin), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    openOverlay() {
      this.languageListOverlay.hidden = !1, this.languageListOverlay.setAttribute("aria-modal", "true"), this.languageSelector.setAttribute("aria-expanded", "true")
    }
    closeOverlay() {
      this.languageListOverlay.hidden = !0, this.languageListOverlay.removeAttribute("aria-modal"), this.languageSelector.setAttribute("aria-expanded", "false")
    }
    toggleOverlay(e) {
      this.languageListOverlay && this.focusTrap && (e.preventDefault(), this.languageListOverlay.hasAttribute("hidden") ? (this.openOverlay(), this.focusTrap.activate()) : this.focusTrap.deactivate())
    }
    toggleSearch(e) {
      var t;
      this.searchForm && (e.preventDefault(), t = "true" === this.searchToggle.getAttribute("aria-expanded"), this.loginToggle && "true" === this.loginToggle.getAttribute("aria-expanded") && this.toggleLogin(e), this.searchToggle.setAttribute("aria-expanded", t ? "false" : "true"), t ? this.searchForm.classList.remove("ecl-site-header-core__search--active") : this.searchForm.classList.add("ecl-site-header-core__search--active"))
    }
    toggleLogin(e) {
      var t;
      this.loginBox && (e.preventDefault(), t = "true" === this.loginToggle.getAttribute("aria-expanded"), this.searchToggle && "true" === this.searchToggle.getAttribute("aria-expanded") && this.toggleSearch(e), this.loginToggle.setAttribute("aria-expanded", t ? "false" : "true"), t ? this.loginBox.classList.remove("ecl-site-header-core__login-box--active") : this.loginBox.classList.add("ecl-site-header-core__login-box--active"))
    }
  }, e.SiteHeaderHarmonised = class Le {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).SITE_HEADER_CORE) ? {} : t, (t = new Le(e, t)).init(), e.ECLSiteHeaderHarmonised = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).languageLinkSelector) ? "[data-ecl-language-selector]" : i,
        s = void 0 === (s = t.languageListOverlaySelector) ? "[data-ecl-language-list-overlay]" : s,
        n = void 0 === (n = t.closeOverlaySelector) ? "[data-ecl-language-list-close]" : n,
        l = void 0 === (l = t.searchToggleSelector) ? "[data-ecl-search-toggle]" : l,
        a = void 0 === (a = t.searchFormSelector) ? "[data-ecl-search-form]" : a,
        o = void 0 === (o = t.loginToggleSelector) ? "[data-ecl-login-toggle]" : o,
        t = void 0 === (t = t.loginBoxSelector) ? "[data-ecl-login-box]" : t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.languageLinkSelector = i, this.languageListOverlaySelector = s, this.closeOverlaySelector = n, this.searchToggleSelector = l, this.searchFormSelector = a, this.loginToggleSelector = o, this.loginBoxSelector = t, this.languageSelector = null, this.languageListOverlay = null, this.close = null, this.focusTrap = null, this.searchToggle = null, this.searchForm = null, this.loginToggle = null, this.loginBox = null, this.openOverlay = this.openOverlay.bind(this), this.closeOverlay = this.closeOverlay.bind(this), this.toggleOverlay = this.toggleOverlay.bind(this), this.toggleSearch = this.toggleSearch.bind(this), this.toggleLogin = this.toggleLogin.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map, this.languageSelector = o(this.languageLinkSelector), this.languageListOverlay = o(this.languageListOverlaySelector), this.close = o(this.closeOverlaySelector), this.focusTrap = g(this.languageListOverlay, {
        onDeactivate: this.closeOverlay
      }), this.languageSelector && this.languageSelector.addEventListener("click", this.toggleOverlay), this.close && this.close.addEventListener("click", this.toggleOverlay), this.searchToggle = o(this.searchToggleSelector), this.searchForm = o(this.searchFormSelector), this.searchToggle && this.searchToggle.addEventListener("click", this.toggleSearch), this.loginToggle = o(this.loginToggleSelector), this.loginBox = o(this.loginBoxSelector), this.loginToggle && this.loginToggle.addEventListener("click", this.toggleLogin), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.languageSelector && this.languageSelector.removeEventListener("click", this.toggleOverlay), this.focusTrap && this.focusTrap.deactivate(), this.close && this.close.removeEventListener("click", this.toggleOverlay), this.searchToggle && this.searchToggle.removeEventListener("click", this.toggleSearch), this.loginToggle && this.loginToggle.removeEventListener("click", this.toggleLogin), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    openOverlay() {
      this.languageListOverlay.hidden = !1, this.languageListOverlay.setAttribute("aria-modal", "true"), this.languageSelector.setAttribute("aria-expanded", "true")
    }
    closeOverlay() {
      this.languageListOverlay.hidden = !0, this.languageListOverlay.removeAttribute("aria-modal"), this.languageSelector.setAttribute("aria-expanded", "false")
    }
    toggleOverlay(e) {
      this.languageListOverlay && this.focusTrap && (e.preventDefault(), this.languageListOverlay.hasAttribute("hidden") ? (this.openOverlay(), this.focusTrap.activate()) : this.focusTrap.deactivate())
    }
    toggleSearch(e) {
      var t;
      this.searchForm && (e.preventDefault(), t = "true" === this.searchToggle.getAttribute("aria-expanded"), this.loginToggle && "true" === this.loginToggle.getAttribute("aria-expanded") && this.toggleLogin(e), this.searchToggle.setAttribute("aria-expanded", t ? "false" : "true"), t ? this.searchForm.classList.remove("ecl-site-header-harmonised__search--active") : this.searchForm.classList.add("ecl-site-header-harmonised__search--active"))
    }
    toggleLogin(e) {
      var t;
      this.loginBox && (e.preventDefault(), t = "true" === this.loginToggle.getAttribute("aria-expanded"), this.searchToggle && "true" === this.searchToggle.getAttribute("aria-expanded") && this.toggleSearch(e), this.loginToggle.setAttribute("aria-expanded", t ? "false" : "true"), t ? this.loginBox.classList.remove("ecl-site-header-harmonised__login-box--active") : this.loginBox.classList.add("ecl-site-header-harmonised__login-box--active"))
    }
  }, e.SiteHeaderStandardised = class Ce {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).SITE_HEADER_CORE) ? {} : t, (t = new Ce(e, t)).init(), e.ECLSiteHeaderStandardised = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).languageLinkSelector) ? "[data-ecl-language-selector]" : i,
        s = void 0 === (s = t.languageListOverlaySelector) ? "[data-ecl-language-list-overlay]" : s,
        n = void 0 === (n = t.closeOverlaySelector) ? "[data-ecl-language-list-close]" : n,
        l = void 0 === (l = t.searchToggleSelector) ? "[data-ecl-search-toggle]" : l,
        a = void 0 === (a = t.searchFormSelector) ? "[data-ecl-search-form]" : a,
        o = void 0 === (o = t.loginToggleSelector) ? "[data-ecl-login-toggle]" : o,
        t = void 0 === (t = t.loginBoxSelector) ? "[data-ecl-login-box]" : t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.languageLinkSelector = i, this.languageListOverlaySelector = s, this.closeOverlaySelector = n, this.searchToggleSelector = l, this.searchFormSelector = a, this.loginToggleSelector = o, this.loginBoxSelector = t, this.languageSelector = null, this.languageListOverlay = null, this.close = null, this.focusTrap = null, this.searchToggle = null, this.searchForm = null, this.loginToggle = null, this.loginBox = null, this.openOverlay = this.openOverlay.bind(this), this.closeOverlay = this.closeOverlay.bind(this), this.toggleOverlay = this.toggleOverlay.bind(this), this.toggleSearch = this.toggleSearch.bind(this), this.toggleLogin = this.toggleLogin.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map, this.languageSelector = o(this.languageLinkSelector), this.languageListOverlay = o(this.languageListOverlaySelector), this.close = o(this.closeOverlaySelector), this.focusTrap = g(this.languageListOverlay, {
        onDeactivate: this.closeOverlay
      }), this.languageSelector && this.languageSelector.addEventListener("click", this.toggleOverlay), this.close && this.close.addEventListener("click", this.toggleOverlay), this.searchToggle = o(this.searchToggleSelector), this.searchForm = o(this.searchFormSelector), this.searchToggle && this.searchToggle.addEventListener("click", this.toggleSearch), this.loginToggle = o(this.loginToggleSelector), this.loginBox = o(this.loginBoxSelector), this.loginToggle && this.loginToggle.addEventListener("click", this.toggleLogin), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.languageSelector && this.languageSelector.removeEventListener("click", this.toggleOverlay), this.focusTrap && this.focusTrap.deactivate(), this.close && this.close.removeEventListener("click", this.toggleOverlay), this.searchToggle && this.searchToggle.removeEventListener("click", this.toggleSearch), this.loginToggle && this.loginToggle.removeEventListener("click", this.toggleLogin), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    openOverlay() {
      this.languageListOverlay.hidden = !1, this.languageListOverlay.setAttribute("aria-modal", "true"), this.languageSelector.setAttribute("aria-expanded", "true")
    }
    closeOverlay() {
      this.languageListOverlay.hidden = !0, this.languageListOverlay.removeAttribute("aria-modal"), this.languageSelector.setAttribute("aria-expanded", "false")
    }
    toggleOverlay(e) {
      this.languageListOverlay && this.focusTrap && (e.preventDefault(), this.languageListOverlay.hasAttribute("hidden") ? (this.openOverlay(), this.focusTrap.activate()) : this.focusTrap.deactivate())
    }
    toggleSearch(e) {
      var t;
      this.searchForm && (e.preventDefault(), t = "true" === this.searchToggle.getAttribute("aria-expanded"), this.loginToggle && "true" === this.loginToggle.getAttribute("aria-expanded") && this.toggleLogin(e), this.searchToggle.setAttribute("aria-expanded", t ? "false" : "true"), t ? this.searchForm.classList.remove("ecl-site-header-standardised__search--active") : this.searchForm.classList.add("ecl-site-header-standardised__search--active"))
    }
    toggleLogin(e) {
      var t;
      this.loginBox && (e.preventDefault(), t = "true" === this.loginToggle.getAttribute("aria-expanded"), this.searchToggle && "true" === this.searchToggle.getAttribute("aria-expanded") && this.toggleSearch(e), this.loginToggle.setAttribute("aria-expanded", t ? "false" : "true"), t ? this.loginBox.classList.remove("ecl-site-header-standardised__login-box--active") : this.loginBox.classList.add("ecl-site-header-standardised__login-box--active"))
    }
  }, e.Table = y, e.Tabs = class we {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).TABS) ? {} : t, (t = new we(e, t)).init(), e.ECLTabs = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).listSelector) ? ".ecl-tabs__list" : i,
        s = void 0 === (s = t.listItemsSelector) ? ".ecl-tabs__item:not(.ecl-tabs__item--more)" : s,
        n = void 0 === (n = t.moreItemSelector) ? ".ecl-tabs__item--more" : n,
        l = void 0 === (l = t.moreButtonSelector) ? ".ecl-tabs__toggle" : l,
        a = void 0 === (a = t.moreLabelSelector) ? ".ecl-tabs__toggle .ecl-button__label" : a,
        o = void 0 === (o = t.prevSelector) ? ".ecl-tabs__prev" : o,
        r = void 0 === (r = t.nextSelector) ? ".ecl-tabs__next" : r,
        h = void 0 === (h = t.attachClickListener) || h,
        t = void 0 === (t = t.attachResizeListener) || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.listSelector = i, this.listItemsSelector = s, this.moreItemSelector = n, this.moreButtonSelector = l, this.moreLabelSelector = a, this.prevSelector = o, this.nextSelector = r, this.attachClickListener = h, this.attachResizeListener = t, this.list = null, this.listItems = null, this.moreItem = null, this.moreButton = null, this.moreButtonActive = !1, this.moreLabel = null, this.moreLabelValue = null, this.dropdown = null, this.dropdownItems = null, this.allowShift = !0, this.buttonNextSize = 0, this.index = 0, this.total = 0, this.tabsKey = [], this.firstTab = null, this.lastTab = null, this.direction = "ltr", this.isMobile = !1, this.handleClickOnToggle = this.handleClickOnToggle.bind(this), this.handleResize = this.handleResize.bind(this), this.closeMoreDropdown = this.closeMoreDropdown.bind(this), this.shiftTabs = this.shiftTabs.bind(this), this.handleKeyboardOnTabs = this.handleKeyboardOnTabs.bind(this), this.moveFocus = this.moveFocus.bind(this), this.arrowFocusToTab = this.arrowFocusToTab.bind(this), this.tabsKeyEvents = this.tabsKeyEvents.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map, this.list = o(this.listSelector, this.element), this.listItems = a(this.listItemsSelector, this.element), this.moreItem = o(this.moreItemSelector, this.element), this.moreButton = o(this.moreButtonSelector, this.element), this.moreLabel = o(this.moreLabelSelector, this.element), this.moreLabelValue = this.moreLabel.innerText, this.btnPrev = o(this.prevSelector, this.element), this.btnNext = o(this.nextSelector, this.element), this.total = this.listItems.length, this.moreButton && (this.dropdown = document.createElement("ul"), this.dropdown.classList.add("ecl-tabs__dropdown"), this.listItems.forEach(e => {
        this.dropdown.appendChild(e.cloneNode(!0))
      }), this.moreItem.appendChild(this.dropdown), this.dropdownItems = a(".ecl-tabs__dropdown .ecl-tabs__item", this.element)), this.btnNext && (this.buttonNextSize = this.btnNext.getBoundingClientRect().width), this.handleResize(), this.attachClickListener && this.moreButton && this.moreButton.addEventListener("click", this.handleClickOnToggle), this.attachClickListener && document && this.moreButton && document.addEventListener("click", this.closeMoreDropdown), this.attachClickListener && this.btnNext && this.btnNext.addEventListener("click", this.shiftTabs.bind(this, "next", !0)), this.attachClickListener && this.btnPrev && this.btnPrev.addEventListener("click", this.shiftTabs.bind(this, "prev", !0)), this.attachResizeListener && window.addEventListener("resize", this.handleResize), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.dropdown && this.dropdown.remove(), this.moreButton && (this.moreLabel.textContent = this.moreLabelValue, this.moreButton.replaceWith(this.moreButton.cloneNode(!0))), this.btnNext && this.btnNext.replaceWith(this.btnNext.cloneNode(!0)), this.btnPrev && this.btnPrev.replaceWith(this.btnPrev.cloneNode(!0)), this.attachClickListener && document && this.moreButton && document.removeEventListener("click", this.closeMoreDropdown), this.attachResizeListener && window.removeEventListener("resize", this.handleResize), this.tabsKey && this.tabsKey.forEach(e => {
        e.addEventListener("keydown", this.handleKeyboardOnTabs)
      }), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    shiftTabs(e) {
      this.index = "next" === e ? this.index + 1 : this.index - 1, this.btnPrev.style.display = 1 <= this.index ? "block" : "none", this.btnNext.style.display = this.index >= this.total - 1 ? "none" : "block";
      var e = 0 === this.index ? 0 : this.btnPrev.getBoundingClientRect().width + 13,
        t = 0;
      this.direction = getComputedStyle(this.element).direction, t = "rtl" === this.direction ? Math.ceil(this.list.offsetWidth - this.listItems[this.index].offsetLeft - this.listItems[this.index].offsetWidth - e) : Math.ceil(this.listItems[this.index].offsetLeft - e), (e = Math.ceil(this.list.getBoundingClientRect().width - this.element.getBoundingClientRect().width)) < t && (this.btnNext.style.display = "none", t = e), this.list.style.transitionDuration = "0.4s", "rtl" === this.direction ? this.list.style.transform = "translate3d(" + t + "px, 0px, 0px)" : this.list.style.transform = "translate3d(-" + t + "px, 0px, 0px)"
    }
    handleClickOnToggle() {
      this.dropdown.classList.toggle("ecl-tabs__dropdown--show"), this.moreButton.setAttribute("aria-expanded", this.dropdown.classList.contains("ecl-tabs__dropdown--show"))
    }
    handleResize() {
      var t, i, s, n;
      "none" === window.getComputedStyle(this.moreButton).display && this.closeMoreDropdown(this), this.list.style.transform = "translate3d(0px, 0px, 0px)", Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) <= 480 ? (this.isMobile = !0, this.index = 1, this.list.style.transitionDuration = "0.4s", this.shiftTabs(this.index), this.moreItem && this.moreItem.setAttribute("aria-hidden", "true"), t = 0, this.listItems.forEach(e => {
        e.setAttribute("aria-hidden", "false"), t += Math.ceil(e.getBoundingClientRect().width)
      }), this.list.style.width = t + "px", this.btnNext.style.display = "block", this.btnPrev.style.display = "none") : (this.isMobile = !1, this.btnNext.style.display = "none", this.btnPrev.style.display = "none", this.list.style.width = "auto", i = this.moreButton.getBoundingClientRect().width + 25, s = [], n = this.list.getBoundingClientRect().width, this.moreButtonActive = !1, this.listItems.forEach((e, t) => {
        e.setAttribute("aria-hidden", "false"), n >= i + e.getBoundingClientRect().width && !s.includes(t - 1) ? i += e.getBoundingClientRect().width : (e.setAttribute("aria-hidden", "true"), e.childNodes[0].classList.contains("ecl-tabs__link--active") && (this.moreButtonActive = !0), s.push(t))
      }), this.moreButtonActive ? this.moreButton.classList.add("ecl-tabs__toggle--active") : this.moreButton.classList.remove("ecl-tabs__toggle--active"), s.length ? (this.moreItem.setAttribute("aria-hidden", "false"), this.moreLabel.textContent = this.moreLabelValue.replace("%d", s.length), this.dropdownItems.forEach((e, t) => {
        s.includes(t) ? e.setAttribute("aria-hidden", "false") : e.setAttribute("aria-hidden", "true")
      })) : this.moreItem.setAttribute("aria-hidden", "true")), this.tabsKeyEvents()
    }
    tabsKeyEvents() {
      this.tabsKey = [], this.listItems.forEach((e, t, i) => {
        var s = null;
        "false" !== e.getAttribute("aria-hidden") && (e = this.dropdownItems[t]), (s = o(".ecl-tabs__link", e)).addEventListener("keydown", this.handleKeyboardOnTabs), this.tabsKey.push(s), 0 === t && (this.firstTab = s), t === i.length - 1 && (this.lastTab = s)
      })
    }
    closeMoreDropdown(e) {
      for (var t = e.target; t;) {
        if (t === this.moreButton) return;
        t = t.parentNode
      }
      this.moreButton.setAttribute("aria-expanded", !1), this.dropdown.classList.remove("ecl-tabs__dropdown--show")
    }
    handleKeyboardOnTabs(e) {
      var t = e.currentTarget;
      switch (e.key) {
        case "ArrowLeft":
          this.arrowFocusToTab(t, "prev");
          break;
        case "ArrowRight":
          this.arrowFocusToTab(t, "next");
          break;
        case "Home":
          this.moveFocus(this.firstTab);
          break;
        case "End":
          this.moveFocus(this.lastTab)
      }
    }
    moveFocus(e) {
      e.closest(".ecl-tabs__dropdown") ? (this.moreButton.setAttribute("aria-expanded", !0), this.dropdown.classList.add("ecl-tabs__dropdown--show")) : (this.moreButton.setAttribute("aria-expanded", !1), this.dropdown.classList.remove("ecl-tabs__dropdown--show")), e.focus()
    }
    arrowFocusToTab(e, t) {
      var i = this.tabsKey.indexOf(e),
        i = "next" === t ? i + 1 : i - 1,
        s = "next" === t ? this.firstTab : this.lastTab,
        n = "next" === t ? this.lastTab : this.firstTab;
      this.isMobile ? e !== n && (this.moveFocus(this.tabsKey[i]), this.shiftTabs(t)) : e === n ? this.moveFocus(s) : this.moveFocus(this.tabsKey[i])
    }
  }, e.Timeline = class ke {
    static autoInit(e, t) {
      return t = void 0 === (t = (void 0 === t ? {} : t).TIMELINE) ? {} : t, (t = new ke(e, t)).init(), e.ECLTimeline = t
    }
    constructor(e, t) {
      var i = void 0 === (i = (t = void 0 === t ? {} : t).buttonSelector) ? "[data-ecl-timeline-button]" : i,
        s = void 0 === (s = t.labelSelector) ? "[data-ecl-label]" : s,
        n = void 0 === (n = t.labelExpanded) ? "data-ecl-label-expanded" : n,
        l = void 0 === (l = t.labelCollapsed) ? "data-ecl-label-collapsed" : l,
        t = void 0 === (t = t.attachClickListener) || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new TypeError("DOM element should be given to initialize this widget.");
      this.element = e, this.buttonSelector = i, this.labelSelector = s, this.labelExpanded = n, this.labelCollapsed = l, this.attachClickListener = t, this.button = null, this.label = null, this.handleClickOnButton = this.handleClickOnButton.bind(this)
    }
    init() {
      if (!ECL) throw new TypeError("Called init but ECL is not present");
      ECL.components = ECL.components || new Map, this.button = o(this.buttonSelector, this.element), this.label = o(this.labelSelector, this.element), this.attachClickListener && this.button && this.button.addEventListener("click", this.handleClickOnButton), this.element.setAttribute("data-ecl-auto-initialized", "true"), ECL.components.set(this.element, this)
    }
    destroy() {
      this.attachClickListener && this.button && this.button.removeEventListener("click", this.handleClickOnButton), this.element && (this.element.removeAttribute("data-ecl-auto-initialized"), ECL.components.delete(this.element))
    }
    handleClickOnButton() {
      var e = "true" === this.button.getAttribute("aria-expanded");
      return this.button.setAttribute("aria-expanded", e ? "false" : "true"), e ? (this.element.removeAttribute("data-ecl-timeline-expanded"), this.button.blur(), this.button.focus()) : this.element.setAttribute("data-ecl-timeline-expanded", "true"), this.label && !e && this.button.hasAttribute(this.labelExpanded) ? this.label.innerHTML = this.button.getAttribute(this.labelExpanded) : this.label && e && this.button.hasAttribute(this.labelCollapsed) && (this.label.innerHTML = this.button.getAttribute(this.labelCollapsed)), this
    }
  }, e.autoInit = function(e) {
    var t, i, e = void 0 === e ? {} : e,
      s = e.root,
      s = void 0 === s ? document : s,
      n = function(e, t) {
        if (null == e) return {};
        for (var i, s = {}, n = Object.keys(e), l = 0; l < n.length; l++) i = n[l], 0 <= t.indexOf(i) || (s[i] = e[i]);
        return s
      }(e, k);
    if (ECL) return t = a("[data-ecl-auto-init]", s), (i = () => {
      t.filter(e => "true" !== e.getAttribute("data-ecl-auto-initialized")).forEach(e => {
        var t = e.getAttribute("data-ecl-auto-init");
        if (!t) throw new TypeError("(ecl-auto-init) " + t + " data-ecl-auto-init is empty");
        var i = ECL[t];
        if ("function" != typeof i) throw new TypeError("(ecl-auto-init) Could not find '" + t + "'");
        if ("function" != typeof i.autoInit) throw new TypeError("(ecl-auto-init) Could not find autoInit for '" + t + "'");
        i.autoInit(e, n)
      })
    })(), {
      update: () => i(),
      destroy: () => {
        ECL.components && ECL.components.forEach((e, t) => {
          e.destroy && (e.destroy(), ECL.components.delete(t))
        })
      }
    };
    throw new TypeError("Called autoInit but ECL is not present")
  }, e
}({}, moment);