// ==UserScript==
// @name          bilibili视频下载_悬浮面板版
// @version       3.7.0
// @description   悬浮面板版：支持Web、RPC、Blob、Aria等下载方式；支持下载flv、dash、mp4视频格式；支持下载港区番剧；支持选集/分P批量推送下载
// @license       MIT
// @match         *://www.bilibili.com/video/av*
// @match         *://www.bilibili.com/video/BV*
// @match         *://www.bilibili.com/list/*
// @match         *://www.bilibili.com/festival/*
// @match         *://www.bilibili.com/bangumi/play/ep*
// @match         *://www.bilibili.com/bangumi/play/ss*
// @match         *://www.bilibili.com/cheese/play/ep*
// @match         *://www.bilibili.com/cheese/play/ss*
// @icon          https://static.hdslb.com/images/favicon.ico
// @compatible    chrome
// @compatible    firefox
// @grant         GM_xmlhttpRequest
// @grant         unsafeWindow
// @connect       localhost
// @connect       127.0.0.1
// @connect       api.bilibili.com
// @connect       *
// @downloadURL TODO:请替换为自有 .user.js 地址
// @updateURL TODO:请替换为自有 .meta.js 地址
// ==/UserScript==
!function () {
  "use strict";

  /**
   * 原生 DOM 适配层 —— 提供极简 $() 包装，替代 jQuery DOM 部分。
   * 仅实现本脚本实际用到的 API；$.ajax 用 fetch 实现。
   * 设计目标：保持 jQuery 链式语义与返回值类型（jq 对象 / 原生 DOM / 字符串）。
   */
  (function installDomAdapter(global) {
    "use strict";

    function isJq(v) {
      return !!(v && v.__bpJq === true);
    }

    function toNodes(input, context) {
      // 字符串（必须在 length 分支之前判断，字符串也有 length）
      if (typeof input === "string") {
        var s = input.trim();
        if (!s) return [];
        // HTML 片段：形如 "<div ...>" 或 "<a ...>"
        if (/^<[\s\S]*>$/.test(s)) {
          var tpl = document.createElement("template");
          tpl.innerHTML = s;
          return Array.prototype.slice.call(tpl.content.childNodes).filter(function (n) { return n.nodeType === 1; });
        }
        var root = context ? (isJq(context) ? (context.nodes[0] || document) : (context.nodeType === 1 ? context : document)) : document;
        // jQuery 专有选择器 [attr!=value] → :not([attr="value"])
        s = s.replace(/\[([\w-]+)!=(["'])(.*?)\2\]/g, function (_, attr, q, val) {
          return ':not([' + attr + '="' + val + '"])';
        });
        try {
          return Array.prototype.slice.call(root.querySelectorAll(s));
        } catch (e) {
          return [];
        }
      }
      // 已是 jq 对象
      if (isJq(input)) return input.nodes.slice();
      // 原生 DOM 元素
      if (input && input.nodeType === 1) return [input];
      // 文档节点
      if (input && input.nodeType === 9) return [input.documentElement];
      // NodeList / HTMLCollection / 类数组（非字符串）
      if (input && typeof input.length === "number") {
        return Array.prototype.slice.call(input).filter(function (n) { return n && n.nodeType; });
      }
      if (input == null) return [];
      return [];
    }

    function JQ(nodes) {
      this.nodes = nodes;
      this.length = nodes.length;
      this.__bpJq = true;
      for (var i = 0; i < nodes.length; i++) this[i] = nodes[i];
    }

    function wrap(nodes) { return new JQ(nodes); }

    // ---- 属性 / 样式 / 值 ----
    JQ.prototype.attr = function (name, value) {
      if (arguments.length === 1) {
        if (!this.nodes.length) return undefined;
        return this.nodes[0].getAttribute(name);
      }
      this.nodes.forEach(function (n) {
        if (value === null || value === undefined) n.removeAttribute(name);
        else n.setAttribute(name, String(value));
      });
      return this;
    };
    JQ.prototype.removeAttr = function (name) {
      this.nodes.forEach(function (n) { n.removeAttribute(name); });
      return this;
    };
    JQ.prototype.prop = function (name, value) {
      if (arguments.length === 1) {
        if (!this.nodes.length) return undefined;
        return this.nodes[0][name];
      }
      this.nodes.forEach(function (n) { n[name] = value; });
      return this;
    };
    JQ.prototype.css = function (name, value) {
      if (typeof name === "object" && name !== null) {
        var obj = name;
        this.nodes.forEach(function (n) {
          Object.keys(obj).forEach(function (k) { n.style[k] = obj[k]; });
        });
        return this;
      }
      if (arguments.length === 1) {
        if (!this.nodes.length) return "";
        return window.getComputedStyle(this.nodes[0])[name];
      }
      this.nodes.forEach(function (n) { n.style[name] = value; });
      return this;
    };
    JQ.prototype.val = function (value) {
      if (arguments.length === 0) {
        if (!this.nodes.length) return undefined;
        return this.nodes[0].value;
      }
      this.nodes.forEach(function (n) {
        if ("value" in n) n.value = value;
        else n.setAttribute("value", value);
      });
      return this;
    };
    JQ.prototype.text = function (value) {
      if (arguments.length === 0) {
        return this.nodes.map(function (n) { return n.textContent || ""; }).join("");
      }
      this.nodes.forEach(function (n) { n.textContent = value == null ? "" : String(value); });
      return this;
    };
    JQ.prototype.html = function (value) {
      if (arguments.length === 0) {
        if (!this.nodes.length) return undefined;
        return this.nodes[0].innerHTML;
      }
      var html = value == null ? "" : String(value);
      this.nodes.forEach(function (n) { n.innerHTML = html; });
      return this;
    };
    JQ.prototype.addClass = function (cls) {
      this.nodes.forEach(function (n) {
        String(cls).split(/\s+/).filter(Boolean).forEach(function (c) { n.classList.add(c); });
      });
      return this;
    };
    JQ.prototype.removeClass = function (cls) {
      this.nodes.forEach(function (n) {
        if (cls === undefined) { n.className = ""; return; }
        String(cls).split(/\s+/).filter(Boolean).forEach(function (c) { n.classList.remove(c); });
      });
      return this;
    };
    JQ.prototype.hasClass = function (cls) {
      return !!this.nodes.length && this.nodes[0].classList.contains(cls);
    };

    // ---- DOM 结构 ----
    JQ.prototype.append = function (child) {
      var self = this;
      var htmls = [];
      var nodes = [];
      if (isJq(child)) nodes = child.nodes.slice();
      else if (child && child.nodeType === 1) nodes = [child];
      else if (typeof child === "string") htmls.push(child);
      else if (child && typeof child.length === "number") {
        Array.prototype.slice.call(child).forEach(function (c) {
          if (c && c.nodeType === 1) nodes.push(c);
          else if (typeof c === "string") htmls.push(c);
        });
      }
      self.nodes.forEach(function (n) {
        htmls.forEach(function (h) { n.insertAdjacentHTML("beforeend", h); });
        nodes.forEach(function (c) { n.appendChild(c); });
      });
      return self;
    };
    JQ.prototype.before = function (content) {
      var self = this;
      self.nodes.forEach(function (n) {
        if (isJq(content)) content.nodes.forEach(function (c) { n.parentNode && n.parentNode.insertBefore(c, n); });
        else if (content && content.nodeType === 1) n.parentNode && n.parentNode.insertBefore(content, n);
        else if (typeof content === "string") n.insertAdjacentHTML("beforebegin", content);
      });
      return self;
    };
    JQ.prototype.after = function (content) {
      var self = this;
      self.nodes.forEach(function (n) {
        if (isJq(content)) content.nodes.forEach(function (c) { n.parentNode && n.parentNode.insertBefore(c, n.nextSibling); });
        else if (content && content.nodeType === 1) n.parentNode && n.parentNode.insertBefore(content, n.nextSibling);
        else if (typeof content === "string") n.insertAdjacentHTML("afterend", content);
      });
      return self;
    };
    JQ.prototype.remove = function () {
      this.nodes.forEach(function (n) { n.parentNode && n.parentNode.removeChild(n); });
      return this;
    };
    JQ.prototype.empty = function () {
      this.nodes.forEach(function (n) { n.innerHTML = ""; });
      return this;
    };
    JQ.prototype.clone = function () {
      return wrap(this.nodes.map(function (n) { return n.cloneNode(true); }));
    };
    JQ.prototype.parent = function () {
      var out = [];
      this.nodes.forEach(function (n) { if (n.parentNode && out.indexOf(n.parentNode) < 0) out.push(n.parentNode); });
      return wrap(out);
    };
    JQ.prototype.children = function (selector) {
      var out = [];
      this.nodes.forEach(function (n) {
        Array.prototype.slice.call(n.children).forEach(function (c) {
          if (!selector || (c.matches && c.matches(selector))) out.push(c);
        });
      });
      return wrap(out);
    };
    JQ.prototype.find = function (selector) {
      var out = [];
      this.nodes.forEach(function (n) {
        Array.prototype.slice.call(n.querySelectorAll(selector)).forEach(function (c) { if (out.indexOf(c) < 0) out.push(c); });
      });
      return wrap(out);
    };
    JQ.prototype.eq = function (i) {
      return wrap(i < 0 ? (this.nodes[this.nodes.length + i] ? [this.nodes[this.nodes.length + i]] : []) : (this.nodes[i] ? [this.nodes[i]] : []));
    };
    JQ.prototype.filter = function (selector) {
      if (typeof selector === "function") {
        return wrap(this.nodes.filter(function (n, i) { return selector.call(n, i, n); }));
      }
      return wrap(this.nodes.filter(function (n) { return n.matches && n.matches(selector); }));
    };
    JQ.prototype.get = function (i) {
      if (i === undefined) return this.nodes.slice();
      return this.nodes[i < 0 ? this.nodes.length + i : i];
    };
    JQ.prototype.each = function (cb) {
      this.nodes.forEach(function (n, i) { cb.call(n, i, n); });
      return this;
    };
    // jQuery.map 语义：回调返回值若为数组则扁平化，null/undefined 丢弃
    JQ.prototype.map = function (cb) {
      var out = [];
      this.nodes.forEach(function (n, i) {
        var r = cb.call(n, i, n);
        if (r == null) return;
        if (Array.isArray(r)) out = out.concat(r);
        else out.push(r);
      });
      return wrap(out);
    };
    JQ.prototype.index = function () {
      if (!this.nodes.length || !this.nodes[0].parentNode) return -1;
      return Array.prototype.slice.call(this.nodes[0].parentNode.children).indexOf(this.nodes[0]);
    };

    // ---- 显隐 / 动画 ----
    JQ.prototype.show = function () {
      this.nodes.forEach(function (n) { n.style.display = ""; });
      return this;
    };
    JQ.prototype.hide = function () {
      this.nodes.forEach(function (n) { n.style.display = "none"; });
      return this;
    };
    function parseAnimProps(style, props) {
      var changes = [];
      Object.keys(props).forEach(function (k) {
        var target = props[k];
        var start = parseFloat(style[k]) || 0;
        var end = target, unit = "";
        if (typeof target === "string") {
          var mm = /^([+-])=(.+)$/.exec(target.trim());
          if (mm) { end = start + parseFloat(mm[1] + mm[2].replace(/[a-z%]+$/i, "")); unit = (mm[2].match(/[a-z%]+$/i) || [""])[0]; }
          else { end = parseFloat(target); unit = (target.match(/[a-z%]+$/i) || [""])[0]; }
        }
        if (!isNaN(end)) changes.push({ key: k, start: start, end: end, unit: unit });
      });
      return changes;
    }
    JQ.prototype.animate = function (props, duration, cb) {
      if (typeof duration === "function") { cb = duration; duration = undefined; }
      duration = duration == null ? 400 : (Number(duration) || 0);
      if (duration < 0) duration = 0;
      var nodes = this.nodes.slice();
      var self = this;
      // 先按最终值同步写入，保证阻塞式代码（如回调里读取样式）立即生效
      nodes.forEach(function (n) {
        var changes = parseAnimProps(window.getComputedStyle(n), props);
        changes.forEach(function (c) { n.style[c.key] = c.end + (c.unit || (c.key === "opacity" ? "" : "px")); });
      });
      if (typeof cb === "function") {
        if (duration <= 0) cb.call(self);
        else setTimeout(function () { cb.call(self); }, duration);
      }
      return this;
    };
    JQ.prototype.stop = function () { return this; };

    // ---- 事件 ----
    JQ.prototype.on = function (eventName, selectorOrHandler, handler) {
      var self = this;
      var delegated = typeof selectorOrHandler === "string";
      var realHandler = delegated ? handler : selectorOrHandler;
      if (typeof realHandler !== "function") return self;
      var events = String(eventName).split(/\s+/).filter(Boolean);
      self.nodes.forEach(function (n) {
        events.forEach(function (ev) {
          n.addEventListener(ev, function (e) {
            if (!delegated) {
              e.delegateTarget = n;
              try { realHandler.call(n, e); } catch (err) { console.error("[dom-adapter] handler error", err); }
              return;
            }
            var target = e.target;
            // 选择器可为逗号分隔
            var matched = null;
            var sels = selectorOrHandler.split(",");
            while (target && target !== n) {
              if (target.nodeType === 1) {
                for (var i = 0; i < sels.length; i++) {
                  var s = sels[i].trim();
                  if (s && target.matches && target.matches(s)) { matched = target; break; }
                }
              }
              if (matched) break;
              target = target.parentNode;
            }
            if (matched) {
              e.delegateTarget = n;
              try { realHandler.call(matched, e); } catch (err) { console.error("[dom-adapter] delegated handler error", err); }
            }
          });
        });
      });
      return self;
    };
    JQ.prototype.off = function (eventName, handler) {
      // 本脚本未使用 off；保留空实现避免报错
      return this;
    };
    JQ.prototype.click = function (handler) {
      if (typeof handler === "function") return this.on("click", handler);
      this.nodes.forEach(function (n) { n.click(); });
      return this;
    };
    JQ.prototype.focus = function () { this.nodes.forEach(function (n) { n.focus(); }); return this; };
    JQ.prototype.trigger = function (ev) {
      this.nodes.forEach(function (n) { n.dispatchEvent(new Event(ev, { bubbles: true })); });
      return this;
    };
    JQ.prototype.scrollTop = function (v) {
      if (arguments.length === 0) return this.nodes.length ? this.nodes[0].scrollTop : 0;
      this.nodes.forEach(function (n) { n.scrollTop = v; });
      return this;
    };

    // ---- 判定 ----
    JQ.prototype.is = function (selector) {
      if (!this.nodes.length) return false;
      var n = this.nodes[0];
      if (selector === ":hidden") {
        var st = window.getComputedStyle(n);
        return st.display === "none" || st.visibility === "hidden" || n.offsetWidth === 0 && n.offsetHeight === 0;
      }
      if (selector === ":visible") return !this.is(":hidden");
      if (selector === ":checked") return !!n.checked;
      if (typeof selector === "function") return this.nodes.some(function (x) { return selector.call(x); });
      if (isJq(selector)) return this.nodes.some(function (x) { return selector.nodes.indexOf(x) >= 0; });
      return !!(n.matches && n.matches(selector));
    };

    // ---- 静态 $ ----
    function $(input, context) { return wrap(toNodes(input, context)); }

    // ---- $.ajax：用 fetch 实现 ----
    $.ajax = function (opts) {
      opts = opts || {};
      var url = opts.url || "";
      var method = String(opts.type || opts.method || "GET").toUpperCase();
      var dataType = opts.dataType || "";
      var headers = Object.assign({}, opts.headers || {});
      if (opts.contentType && !headers["Content-Type"]) headers["Content-Type"] = opts.contentType;
      var reqBody;
      if (opts.data !== undefined && method !== "GET") reqBody = typeof opts.data === "string" ? opts.data : JSON.stringify(opts.data);
      var done = function (text) {
        var res;
        var lower = dataType.toLowerCase();
        if (lower === "json") {
          try { res = text ? JSON.parse(text) : null; }
          catch (e) { res = null; }
        } else if (lower === "text" || lower === "html") res = text;
        else {
          // 未指定 dataType 时按内容类型猜测，兼容原脚本返回 JSON 的场景
          try { res = text ? JSON.parse(text) : null; } catch (e) { res = text; }
        }
        if (typeof opts.success === "function") opts.success(res, "success", { status: 200 });
        if (typeof opts.complete === "function") opts.complete({ status: 200 }, "success");
      };
      var fail = function (err) {
        if (typeof opts.error === "function") {
          var xhr = { status: err && err.status || 0, responseText: "", statusText: err && err.message || "error" };
          opts.error(xhr, "error", err);
        }
        if (typeof opts.complete === "function") opts.complete({ status: 0 }, "error");
      };
      // 优先走 GM_xmlhttpRequest：它不受 CORS / 混合内容限制。
      // 否则从 https://www.bilibili.com 请求 http://localhost 的 aria2/Motrix RPC 会被浏览器直接拦掉，
      // 表现就是「点了下载，下载器里什么都没有」。
      var gmXhr = typeof GM_xmlhttpRequest === "function" ? GM_xmlhttpRequest :
        (typeof GM !== "undefined" && GM && typeof GM.xmlHttpRequest === "function" ? GM.xmlHttpRequest : null);
      if (gmXhr) {
        // GM 请求不带页面 Referer，B 站接口对来源敏感的端点会 403，这里补一个
        if (/^https?:\/\/([a-z0-9-]+\.)*bilibili\.com/i.test(url) && !headers["Referer"]) headers["Referer"] = "https://www.bilibili.com/";
        var gHandle = gmXhr({
          method: method,
          url: url,
          headers: headers,
          data: reqBody,
          timeout: opts.timeout || 30000,
          onload: function (r) {
            if (r.status >= 200 && r.status < 400) done(r.responseText);
            else fail({ status: r.status, message: "HTTP " + r.status });
          },
          onerror: function () { fail({ status: 0, message: "network" }); },
          ontimeout: function () { fail({ status: 0, message: "timeout" }); },
          onabort: function () { fail({ status: 0, message: "abort" }); }
        });
        return { abort: function () { try { gHandle && gHandle.abort && gHandle.abort(); } catch (e) {} } };
      }
      var init = {
        method: method,
        headers: headers,
        credentials: opts.xhrFields && opts.xhrFields.withCredentials ? "include" : "same-origin",
        cache: opts.cache === undefined ? true : !!opts.cache
      };
      if (reqBody !== undefined) init.body = reqBody;
      fetch(url, init).then(function (resp) {
        if (!resp.ok) {
          var e = new Error("HTTP " + resp.status);
          e.status = resp.status;
          throw e;
        }
        return resp.text();
      }).then(done).catch(fail);
      // 返回一个带 abort 的伪对象（本脚本未依赖 jqXHR 的 then）
      return { abort: function () {} };
    };

    // 挂载到全局
    global.$ = $;
  })(typeof window !== "undefined" ? window : globalThis);
  // 显式取一次：@grant 非 none 时脚本在沙箱里跑，裸 $ 未必能取到挂在 window 上的版本
  var $ = (typeof window !== "undefined" ? window : globalThis).$;

  /* ---------- 页面级 window ----------
     用 @grant 之后脚本跑在油猴沙箱里，这里的 window 是「沙箱 window」，
     页面上的全局变量（__INITIAL_STATE__ / __BILI_USER_INFO__）在沙箱里读不到。
     直接读会让 video.base() 抛错，面板就显示「当前页面无分P信息」。
     所以统一经 unsafeWindow（Firefox 为 wrappedJSObject）读取页面全局。 */
  var PAGE_WIN = (function () {
    try { if (typeof unsafeWindow !== "undefined" && unsafeWindow && unsafeWindow.document) return unsafeWindow; } catch (e) {}
    try { if (window && window.wrappedJSObject && window.wrappedJSObject.document) return window.wrappedJSObject; } catch (e) {}
    return window;
  })();
  var __bpStateWarned = false;
  function getPageState() {
    var s = null;
    try { s = PAGE_WIN && PAGE_WIN.__INITIAL_STATE__; } catch (e) {}
    if (!s) { try { s = window.__INITIAL_STATE__; } catch (e) {} }
    if (!s) {
      try { /* 兜底：少数页面把初始状态写进 script 标签 */
        var el = document.querySelector("script#__INITIAL_STATE__");
        if (el && el.textContent) s = JSON.parse(el.textContent);
      } catch (e) {}
    }
    if (!s && !__bpStateWarned) {
      __bpStateWarned = true;
      console.warn("[悬浮面板] 读不到页面 __INITIAL_STATE__（视频信息/分P 将不可用）。" +
        "请确认油猴已授予 unsafeWindow，或站点已改版。");
    }
    return s;
  }
  function getPageGlobal(name) {
    var v;
    try { v = PAGE_WIN ? PAGE_WIN[name] : undefined; } catch (e) {}
    if (v === undefined) { try { v = window[name]; } catch (e) {} }
    return v;
  }


  function _typeof(o) {
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _toPropertyKey(t) {
    var i = function _toPrimitive(t, r) {
      if ("object" != _typeof(t) || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t);
    }(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
  }
  var user = new (function () {
    function User() {
      !function cache_classCallCheck(a, n) {
        if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
      }(this, User), this.is_login = !1, this.vip_status = 0, this.mid = "", this.uname = "", this.has_init = !1, this.lazyInit();
    }
    return function cache_createClass(e, r, t) {
      return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
      }), e;
    }(User, [{
      key: "needReplace",
      value: function needReplace() {
        return !this.is_login || !this.vip_status && video.base().needVip();
      }
    }, {
      key: "isVIP",
      value: function isVIP() {
        return 1 === this.vip_status;
      }
    }, {
      key: "lazyInit",
      value: function lazyInit(last_init) {
        this.has_init || (getPageGlobal("__BILI_USER_INFO__") ? (this.is_login = getPageGlobal("__BILI_USER_INFO__").isLogin, this.vip_status = getPageGlobal("__BILI_USER_INFO__").vipStatus, this.mid = getPageGlobal("__BILI_USER_INFO__").mid || "", this.uname = getPageGlobal("__BILI_USER_INFO__").uname || "") : window.__BiliUser__ && (this.is_login = window.__BiliUser__.isLogin, window.__BiliUser__.cache ? (this.vip_status = window.__BiliUser__.cache.data.vipStatus, this.mid = window.__BiliUser__.cache.data.mid || "", this.uname = window.__BiliUser__.cache.data.uname || "") : (this.vip_status = 0, this.mid = "", this.uname = "")), this.has_init = last_init);
      }
    }]), User;
  }())();
  function _slicedToArray(r, e) {
    return function _arrayWithHoles(r) {
      if (Array.isArray(r)) return r;
    }(r) || function _iterableToArrayLimit(r, l) {
      var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
      if (null != t) {
        var e,
          n,
          i,
          u,
          a = [],
          f = !0,
          o = !1;
        try {
          if (i = (t = t.call(r)).next, 0 === l) {
            if (Object(t) !== t) return;
            f = !1;
          } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
          o = !0, n = r;
        } finally {
          try {
            if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
          } finally {
            if (o) throw n;
          }
        }
        return a;
      }
    }(r, e) || function api_unsupportedIterableToArray(r, a) {
      if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = {}.toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
      }
    }(r, e) || function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function cache_classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function cache_createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  var CacheFactory = class CacheFactory {
    constructor() {
      ;
    }
    static get() {
      var name = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default",
        cache = new Cache();
      return CacheFactory.map[name] instanceof Cache ? cache = CacheFactory.map[name] : CacheFactory.map[name] = cache, cache;
    }
    static setValue() {
      var value = arguments.length > 1 ? arguments[1] : void 0,
        _key$split2 = _slicedToArray((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").split(".", 2), 2),
        cacheName = _key$split2[0],
        cacheKey = _key$split2[1];
      if (cacheName && cacheKey) {
        var cache = CacheFactory.get(cacheName);
        cache instanceof Cache && cache.set(cacheKey, value);
      }
    }
    static getValue() {
      var _key$split4 = _slicedToArray((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").split(".", 2), 2),
        cacheName = _key$split4[0],
        cacheKey = _key$split4[1];
      if (!cacheName || !cacheKey) return null;
      var cache = CacheFactory.get(cacheName);
      return cache instanceof Cache ? cache.get(cacheKey) : void 0;
    }
    static clear(name) {
      if (name) {
        var cache = CacheFactory.map[name];
        cache && cache.clear();
      } else CacheFactory.map = {};
    }
  };
  !function auth_defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }(CacheFactory, "map", {});
  var Cache = class Cache {
      constructor() {
        this.data = {};
      }
      get() {
        var key = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return this.data[key];
      }
      set() {
        var key = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          value = arguments.length > 1 ? arguments[1] : void 0;
        this.data[key] = value;
      }
      clear() {
        this.data = {};
      }
    },
    cache = CacheFactory;
  var scroll_scroll = {
      show: function show_scroll() {
        $("div#bp_config").is(":hidden") && $("div#message_box").is(":hidden") && $("body").css("overflow", "auto");
      },
      hide: function hide_scroll() {
        $("body").css("overflow", "hidden");
      }
    },
    message = "<div class=\"message-bg\"></div> <div id=\"message_box\"> <div class=\"message-box-mark\"></div> <div class=\"message-box-bg\"> <span style=\"font-size:20px\"><b>提示：</b></span> <div id=\"message_box_context\" style=\"margin:2% 0\">...</div><br/><br/> <div class=\"message-box-btn\"> <button name=\"affirm\">确定</button> <button name=\"cancel\">取消</button> </div> </div> </div> <style>.message-bg{position:fixed;float:right;right:0;top:2%;z-index:30000}.message{margin-bottom:15px;padding:2% 2%;width:300px;display:flex;margin-top:-70px;opacity:0}.message-success{background-color:#dfd;border-left:6px solid #4caf50}.message-error{background-color:#fdd;border-left:6px solid #f44336}.message-info{background-color:#e7f3fe;border-left:6px solid #0c86de}.message-warning{background-color:#ffc;border-left:6px solid #ffeb3b}.message-context{font-size:21px;word-wrap:break-word;word-break:break-all}.message-context p{margin:0}#message_box{opacity:0;display:none;position:fixed;inset:0px;top:0;left:0;width:100%;height:100%;z-index:20000}.message-box-bg{position:absolute;background:#fff;border-radius:10px;padding:20px;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;z-index:20001}.message-box-mark{width:100%;height:100%;position:fixed;top:0;left:0;background:rgba(0,0,0,.5);z-index:20000}.message-box-btn{text-align:right}.message-box-btn button{margin:0 5px;width:120px;height:40px;border-width:0;border-radius:3px;background:#1e90ff;cursor:pointer;outline:0;color:#fff;font-size:17px}.message-box-btn button:hover{background:#59f}</style> ";
  function sanitize_html(html) {
    var s = String(null == html ? "" : html);
    s = s.replace(/<\s*\/?\s*script\b[^>]*>[\s\S]*?<\s*\/\s*script\s*>/gi, "");
    s = s.replace(/<\s*script\b[^>]*\/?>/gi, "");
    s = s.replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "");
    s = s.replace(/\s(?:href|src|srcdoc|data)\s*=\s*(?:"\s*javascript:[^"]*"|'\s*javascript:[^']*'|[^\s>]*javascript:[^\s>]*)/gi, "");
    return s;
  }
  function messageBox(ctx, type) {
    "confirm" === type ? $(".message-box-btn button[name=\"cancel\"]").show() : "alert" === type && $(".message-box-btn button[name=\"cancel\"]").hide(), ctx.html ? $("#message_box_context").html("<div style=\"font-size:18px\">".concat(sanitize_html(ctx.html), "</div>")) : $("#message_box_context").html("<div style=\"font-size:18px\">╰(￣▽￣)╮</div>"), scroll_scroll.hide(), $("#message_box").show(), $("#message_box").animate({
      opacity: "1"
    }, 300);
    var option = {
      affirm: function affirm() {
        $("#message_box").hide(), $("#message_box").css("opacity", 0), scroll_scroll.show(), ctx.callback && ctx.callback.affirm && ctx.callback.affirm();
      },
      cancel: function cancel() {
        $("#message_box").hide(), $("#message_box").css("opacity", 0), scroll_scroll.show(), ctx.callback && ctx.callback.cancel && ctx.callback.cancel();
      }
    };
    return $(".message-box-btn button[name=\"affirm\"]")[0].onclick = option.affirm, $(".message-box-btn button[name=\"cancel\"]")[0].onclick = option.cancel, option;
  }
  var id = 0;
  function message_message(html, type) {
    console.info("[Message] ".concat(type, " : ").concat(html)), function messageEnQueue(message, id) {
      $(".message-bg").append(message), $("#message_".concat(id)).animate({
        "margin-top": "+=70px",
        opacity: "1"
      }, 300);
    }("<div id=\"message_".concat(id += 1, "\" class=\"message message-").concat(type, "\"><div class=\"message-context\"><p><strong>").concat(type, "：</strong></p><p>").concat(html, "</p></div></div>"), id), function messageDeQueue(id) {
      var time = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      setTimeout(function () {
        var e = "div#message_".concat(id);
        $(e).animate({
          "margin-top": "-=70px",
          opacity: "0"
        }, 300, function () {
          $(e).remove();
        });
      }, 1000 * time);
    }(id, 3);
  }
  var message_Message_success = function success(html) {
      return message_message(html, "success");
    },
    message_Message_warning = function warning(html) {
      return message_message(html, "warning");
    },
    message_Message_error = function error(html) {
      return message_message(html, "error");
    },
    message_Message_info = function info(html) {
      return message_message(html, "info");
    },
    MessageBox_alert = function alert(html, affirm) {
      return messageBox({
        html: html,
        callback: {
          affirm: affirm
        }
      }, "alert");
    },
    MessageBox_confirm = function confirm(html, affirm, cancel) {
      return messageBox({
        html: html,
        callback: {
          affirm: affirm,
          cancel: cancel
        }
      }, "confirm");
    };
  function ajax(obj) {
    return new Promise(function (resolve, reject) {
      obj.success = function (res) {
        res && "undefined" != typeof res.code && 0 != res.code && message_Message_warning("".concat(res.message || "CODE:".concat(res.code))), resolve(res);
      }, obj.error = function (err) {
        // 自动模式本地请求失败时先静默，交由上层回退远程接口，避免误报"网络异常"
        obj.silentError !== !0 && message_Message_error("网络异常"), reject(err);
      }, $.ajax(obj);
    });
  }
  function _ajax(obj) {
    return new Promise(function (resolve, reject) {
      var _success = obj.success;
      obj.success = function (res) {
        resolve(_success ? _success(res) : res);
      };
      var _error = obj.error;
      obj.error = function (res) {
        reject(_error ? _error(res) : res);
      }, $.ajax(obj);
    });
  }
  function _toConsumableArray(r) {
    return function _arrayWithoutHoles(r) {
      if (Array.isArray(r)) return _arrayLikeToArray(r);
    }(r) || function _iterableToArray(r) {
      if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
    }(r) || api_unsupportedIterableToArray(r) || function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = api_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
        t && (r = t);
        var _n = 0,
          F = function F() {};
        return {
          s: F,
          n: function n() {
            return _n >= r.length ? {
              done: !0
            } : {
              done: !1,
              value: r[_n++]
            };
          },
          e: function e(r) {
            throw r;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = !0,
      u = !1;
    return {
      s: function s() {
        t = t.call(r);
      },
      n: function n() {
        var r = t.next();
        return a = r.done, r;
      },
      e: function e(r) {
        u = !0, o = r;
      },
      f: function f() {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      }
    };
  }
  function _get() {
    return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
      var p = function _superPropBase(t, o) {
        for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
        return t;
      }(e, t);
      if (p) {
        var n = Object.getOwnPropertyDescriptor(p, t);
        return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
      }
    }, _get.apply(null, arguments);
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && _setPrototypeOf(t, e);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _createSuper(t) {
    var r = _isNativeReflectConstruct();
    return function () {
      var e,
        o = _getPrototypeOf(t);
      if (r) {
        var s = _getPrototypeOf(this).constructor;
        e = Reflect.construct(o, arguments, s);
      } else e = o.apply(this, arguments);
      return _possibleConstructorReturn(this, e);
    };
  }
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return function _assertThisInitialized(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }(t);
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return !!t;
    })();
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        auth_defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  var clazzMap = {},
    VideoBase = class VideoBase {
      constructor(video_type, main_title, state) {
        this.constructor.name in clazzMap || (clazzMap[this.constructor.name] = this.constructor), this.video_type = video_type || "video", this.main_title = main_title || "", this.state = state, this.page = state && parseInt(state.p) || 1;
      }
      getVideo(p) {
        var _this = this,
          prop = {
            p: p,
            id: 0,
            title: "",
            filename: "",
            aid: 0,
            bvid: "",
            cid: 0,
            epid: 0,
            needVip: !1,
            vipNeedPay: !1,
            isLimited: !1
          },
          clazz = clazzMap[this.constructor.name];
        return prop = _objectSpread(_objectSpread({}, prop), Object.fromEntries(Object.getOwnPropertyNames(VideoBase.prototype).filter(function (key) {
          return key in prop;
        }).map(function (key) {
          return [key, clazz.prototype[key].call(_this, p)];
        })));
      }
      type() {
        return this.video_type;
      }
      getName() {
        return this.main_title || "";
      }
      getFilename() {
        return this.getName().replace(/[\/\\:*?"<>|]+/g, "");
      }
      p(_p) {
        return (_p = parseInt(_p) || 0) > 0 && _p <= this.total() ? _p : this.page;
      }
      id(p) {
        return this.p(p) - 1;
      }
      total() {
        return 0;
      }
      title(p) {
        return "";
      }
      filename(p) {
        return "";
      }
      aid(p) {
        return 0;
      }
      bvid(p) {
        return "";
      }
      cid(p) {
        return 0;
      }
      epid(p) {
        return "";
      }
      needVip(p) {
        return !1;
      }
      vipNeedPay(p) {
        return !1;
      }
      isLimited(p) {
        return !1;
      }
    },
    Video = class Video extends VideoBase {
      constructor(main_title, state) {
        var _state$sectionsInfo;
        (super("video", main_title, state), this).video_list = [], this.epList = [];
        var sections = state.sections || (null === (_state$sectionsInfo = state.sectionsInfo) || void 0 === _state$sectionsInfo ? void 0 : _state$sectionsInfo.sections) || [];
        if (!sections.length) return this;
        var _step,
          _iterator = _createForOfIteratorHelper(sections);
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step2,
              _iterator2 = _createForOfIteratorHelper(_step.value.episodes || []);
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                for (var video = _step2.value, i = 0, length = video.pages && video.pages.length || 0; i < length;) {
                  var _video = Object.assign({}, video);
                  _video.title = video.title + (length > 1 ? " P".concat(i + 1, " ").concat(video.pages[i].part) : ""), _video.cid = video.pages[i].cid || 0, this.video_list.push(_video), i++;
                }
                this.epList.push(video);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return this;
      }
      total() {
        return this.epList.length ? this.video_list.length : this.state.videoData.pages.length;
      }
      title(p) {
        return this.epList.length && p ? this.video_list[this.id(p)].title : this.state.videoData.pages[this.id(p)].part;
      }
      filename(p) {
        if (this.epList.length && p) return this.title(p).replace(/[\/\\:*?"<>|]+/g, "");
        var id = this.id(p),
          pages = this.state.videoData.pages;
        return (this.main_title + (pages && pages.length > 1 ? " P".concat(id + 1, " ").concat(pages[id].part || "") : "")).replace(/[\/\\:*?"<>|]+/g, "");
      }
      getName() {
        return this.epList.length ? this.state.sectionsInfo.title : super.getName();
      }
      aid(p) {
        return this.epList.length && p ? this.video_list[this.id(p)].aid : this.state.aid || this.state.videoData.aid;
      }
      bvid(p) {
        return this.epList.length && p ? this.video_list[this.id(p)].bvid : this.state.bvid || this.state.videoData.bvid;
      }
      cid(p) {
        if (this.epList.length && p) return this.video_list[this.id(p)].cid;
        // 多P 时必须先取 pages[该P].cid：state.cid 是「当前播放页」的 cid，
        // 放在前面会让「批量下载」全都下成当前这一P。
        var pages = this.state.videoData && this.state.videoData.pages,
          page = pages && pages[this.id(p)];
        return page && page.cid || this.state.cid || 0;
      }
    },
    VideoList = class VideoList extends VideoBase {
      constructor(main_title, state) {
        (super("video", main_title, state), this).video = new Video(state.videoData.title, state);
        var _step3,
          video_list = [],
          _iterator3 = _createForOfIteratorHelper(state.resourceList || []);
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) for (var video = _step3.value, i = 0, length = video.pages && video.pages.length || 0; i < length;) {
            var _video = Object.assign({}, video);
            _video.title = video.title + (length > 1 ? " P".concat(i + 1, " ").concat(video.pages[i].title) : ""), _video.cid = video.pages[i].cid || 0, video_list.push(_video), i++;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        return this.video_list = video_list, this;
      }
      total() {
        return this.video_list.length;
      }
      title(p) {
        return p ? this.video_list[this.id(p)].title : this.video.title();
      }
      filename(p) {
        if (!p) return this.video.filename();
        var id = this.id(p);
        return (this.main_title + (this.total() > 1 ? " P".concat(id + 1, " ").concat(this.video_list[id].title) : "")).replace(/[\/\\:*?"<>|]+/g, "");
      }
      aid(p) {
        return p ? this.video_list[this.id(p)].aid : this.video.aid();
      }
      bvid(p) {
        return p ? this.video_list[this.id(p)].bvid : this.video.bvid();
      }
      cid(p) {
        return p ? this.video_list[this.id(p)].cid : this.video.cid();
      }
      static build() {
        return new VideoBase("video", "", {});
      }
    },
    VideoFestival = class VideoFestival extends VideoBase {
      constructor(main_title, state) {
        return (super("video", main_title, state), this).video_info = state.videoInfo, this.video_list = state.sectionEpisodes || [], this;
      }
      total() {
        return this.video_list.length;
      }
      title(p) {
        return p ? this.video_list[this.id(p)].title : this.video_info.title;
      }
      filename(p) {
        var title;
        if (p) {
          var id = this.id(p);
          title = this.main_title + (this.total() > 1 ? " P".concat(id + 1, " ").concat(this.video_list[id].title) : "");
        } else title = this.video_info.title;
        return title.replace(/[\/\\:*?"<>|]+/g, "");
      }
      aid(p) {
        return p ? this.video_list[this.id(p)].id : this.video_info.aid;
      }
      bvid(p) {
        return p ? this.video_list[this.id(p)].bvid : this.video_info.bvid;
      }
      cid(p) {
        return p ? this.video_list[this.id(p)].cid : this.video_info.cid;
      }
    },
    Bangumi = class Bangumi extends VideoBase {
      constructor(main_title, state) {
        return (super("bangumi", main_title, state), this).epInfo = state.epInfo, this.epList = state.epList, this.epId = state.epId, this.epMap = state.epMap, this.isEpMap = state.isEpMap, this;
      }
      total() {
        return this.epList.length;
      }
      getEpisode(p) {
        return p ? this.epList[this.id(p)] : this.epMap[this.epId] || this.epInfo || {};
      }
      getEpPadLen() {
        for (var n = Object.keys(this.isEpMap).length, len = n < 10 ? 1 : 0; n >= 1;) n /= 10, len++;
        return len;
      }
      title(p) {
        var ep = this.getEpisode(p),
          title = "";
        if (this.isEpMap[ep.id]) {
          var epNum = Object.keys(this.isEpMap).length > 1 ? "EP".concat(("" + this.p(p)).padStart(this.getEpPadLen(), "0")) : "";
          title = "".concat(this.main_title, " ").concat(epNum, " ").concat(ep.long_title);
        } else if (ep.share_copy) {
          var index = ep.share_copy.indexOf("》");
          index > 0 ? (title = ep.share_copy.substring(index + 1), title = "".concat(this.main_title, " ").concat(title)) : title = "".concat(this.main_title, " ").concat(ep.title, " ").concat(ep.long_title);
        } else title = "".concat(ep.title, " ").concat(ep.long_title);
        return title.replaceAll("undefined", "").replaceAll("  ", " ").trim();
      }
      filename(p) {
        return this.title(p).replace(/[\/\\:*?"<>|]+/g, "");
      }
      aid(p) {
        return this.getEpisode(p).aid;
      }
      bvid(p) {
        return this.getEpisode(p).bvid;
      }
      cid(p) {
        return this.getEpisode(p).cid;
      }
      epid(p) {
        return this.getEpisode(p).id;
      }
      needVip(p) {
        return "会员" === this.getEpisode(p).badge;
      }
      vipNeedPay(p) {
        return "付费" === this.getEpisode(p).badge;
      }
      isLimited() {
        return !1;
      }
      static build() {
        var bangumiCache = cache.get("Bangumi");
        if (location.href == bangumiCache.get("href") && bangumiCache.get("build")) return bangumiCache.get("build");
        bangumiCache.set("build", null);
        var main_title,
          sid,
          epid,
          epMap = {},
          pathname = location.pathname.toLowerCase();
        pathname.startsWith("/bangumi/play/ss") ? (sid = pathname.match(/ss(\d+)/), sid = parseInt(sid[1])) : pathname.startsWith("/bangumi/play/ep") && (epid = pathname.match(/ep(\d+)/), epid = parseInt(epid[1]));
        try {
          console.log("location sid:", sid, "epid:", epid);
          var page_data = JSON.parse($(".toolbar").attr("mr-show"));
          main_title = page_data.msg.title, sid = sid || page_data.msg.season_id, epid = epid || page_data.msg.ep_id, console.log("mr-show get sid:", sid, "epid:", epid);
        } catch (_unused) {
          console.warn("mr-show get err");
        }
        if (sid != bangumiCache.get("sid") && (bangumiCache.set("sid", sid), bangumiCache.set("epid", ""), bangumiCache.set("hasData", !1)), sid && !epid && _ajax({
          type: "GET",
          url: "https://api.bilibili.com/pgc/player/web/v2/playurl?support_multi_audio=true&qn=80&fnver=0&fnval=4048&fourk=1&gaia_source=&from_client=BROWSER&is_main_page=true&need_fragment=true&season_id=".concat(sid, "&isGaiaAvoided=false&voice_balance=1&drm_tech_type=2"),
          dataType: "json",
          xhrFields: {
            withCredentials: !0
          }
        }).then(function (res) {
          res && !res.code && bangumiCache.set("epid", res.result.view_info.report.ep_id);
        }), bangumiCache.get("lock")) throw "bangumiCache request waiting !";
        if (bangumiCache.set("lock", !0), epid = epid || "", _ajax({
          type: "GET",
          url: "https://api.bilibili.com/pgc/view/web/ep/list?season_id=".concat(sid = sid || "", "&ep_id=").concat(epid),
          dataType: "json",
          cache: !0
        }).then(function (res) {
          res && !res.code && (bangumiCache.set("hasData", !0), bangumiCache.set("episodes", res.result.episodes || []), bangumiCache.set("section", res.result.section || []));
        }).finally(function () {
          bangumiCache.set("lock", !1);
        }), bangumiCache.set("href", location.href), !epid && !bangumiCache.get("epid")) throw "epid not found !";
        if (!bangumiCache.get("hasData")) throw "bangumiCache no data !";
        var _step4,
          episodes = bangumiCache.get("episodes") || [],
          isEpMap = {},
          _iterator4 = _createForOfIteratorHelper(episodes = [].concat(_toConsumableArray(episodes.filter(function (a) {
            return 1 != a.badge_type;
          })), _toConsumableArray(episodes.filter(function (a) {
            return 1 == a.badge_type;
          }))));
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var ep = _step4.value;
            [0, 2, 3].includes(ep.badge_type) && (isEpMap[ep.id] = !0);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        var _step5,
          _iterator5 = _createForOfIteratorHelper(bangumiCache.get("section") || []);
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var item = _step5.value;
            if (item.episodes) {
              var _step6,
                _iterator6 = _createForOfIteratorHelper(item.episodes);
              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var _ep = _step6.value;
                  episodes.push(_ep);
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        epid = epid || bangumiCache.get("epid");
        for (var _id = 0, i = 0; i < episodes.length; i++) epMap[episodes[i].id] = episodes[i], episodes[i].id == epid && (_id = i);
        var bangumi = new Bangumi(main_title, {
          p: _id + 1,
          epId: epid,
          epList: episodes,
          isEpMap: isEpMap,
          epMap: epMap,
          epInfo: epMap[epid]
        });
        return bangumiCache.set("build", bangumi), bangumi;
      }
    },
    Cheese = class Cheese extends VideoBase {
      constructor(main_title, state) {
        return (super("cheese", main_title, state), this).episodes = state.episodes, this;
      }
      total() {
        return this.episodes.length;
      }
      title(p) {
        return this.episodes[this.id(p)].title;
      }
      filename(p) {
        return "".concat(this.main_title, " EP").concat(this.p(p), " ").concat(this.title(p)).replace(/[\/\\:*?"<>|]+/g, "");
      }
      aid(p) {
        return this.episodes[this.id(p)].aid;
      }
      cid(p) {
        return this.episodes[this.id(p)].cid;
      }
      epid(p) {
        return this.episodes[this.id(p)].id;
      }
      static build() {
        var epid,
          cheeseCache = cache.get("Cheese"),
          sid = (location.href.match(/\/cheese\/play\/ss(\d+)/i) || ["", ""])[1];
        if (sid || (epid = (location.href.match(/\/cheese\/play\/ep(\d+)/i) || ["", ""])[1]), epid || (epid = parseInt($(".bpx-state-active").eq(0).attr("data-episodeid"))), sid && sid != cheeseCache.get("sid") && (cheeseCache.set("sid", sid), cheeseCache.set("episodes", null)), !cheeseCache.get("episodes")) {
          if (cheeseCache.get("lock")) throw "cheese request waiting !";
          if (cheeseCache.set("lock", !0), !sid && !epid) return void console.log("get_season error");
          _ajax({
            url: "https://api.bilibili.com/pugv/view/web/season?season_id=".concat(sid || "", "&ep_id=").concat(epid || ""),
            xhrFields: {
              withCredentials: !0
            },
            dataType: "json"
          }).then(function (res) {
            res.code ? Message.warning("获取剧集信息失败") : cheeseCache.set("episodes", res.data.episodes);
          }).finally(function () {
            cheeseCache.set("lock", !1);
          });
        }
        var episodes = cheeseCache.get("episodes");
        if (!episodes) throw "cheese has not data !";
        for (var _id = -1, i = 0; i < episodes.length; i++) {
          if (!epid) {
            epid = episodes[i].id, _id = 0;
            break;
          }
          if (episodes[i].id == epid) {
            _id = i;
            break;
          }
        }
        if (_id < 0) throw cheeseCache.set("episodes", null), "episodes need reload !";
        return new Cheese(($("div.archive-title-box").text() || "unknown").replace(/[\/\\:*?"<>|]+/g, ""), {
          p: _id + 1,
          episodes: episodes
        });
      }
    };
  function type() {
    var routerMap = {
      video: "/video/",
      list: "/list/",
      festival: "/festival/",
      bangumi: "/bangumi/play/",
      cheese: "/cheese/play/"
    };
    for (var key in routerMap) if (location.pathname.startsWith(routerMap[key])) return key;
    return "?";
  }
  var q_map = {
    "8K 超高清": 127,
    "4K 超高清": 120,
    "1080P 60帧": 116,
    "1080P 高码率": 112,
    "1080P 高清": 80,
    "720P 准高清": 64,
    "480P 清晰": 32,
    "360P 流畅": 16,
    "自动": 32
  };
  var video = {
    type: type,
    base: function base() {
      var _type = type(),
        vb = new VideoBase();
      if ("video" === _type) {
        var state = getPageState(),
          main_title = state.videoData && state.videoData.title;
        vb = new Video(main_title, state);
      } else if ("list" === _type) {
        var _state = getPageState();
        if (_state && _state.mediaListInfo) {
          var _main_title = _state.mediaListInfo && _state.mediaListInfo.upper.name + "-" + _state.mediaListInfo.title;
          vb = new VideoList(_main_title, _state);
        } else vb = VideoList.build();
      } else if ("festival" === _type) {
        var _state2 = getPageState(),
          _main_title2 = _state2.title;
        vb = new VideoFestival(_main_title2, _state2);
      } else "bangumi" === _type ? vb = Bangumi.build() : "cheese" === _type && (vb = Cheese.build());
      return vb;
    },
    get_quality: function get_quality() {
      var _q = 0,
        _q_max = 0,
        _type = type();
      if ("cheese" === _type) {
        var q = $("div.edu-player-quality-item.active span").text(),
          q_max = $($("div.edu-player-quality-item span").get(0)).text();
        _q = q in q_map ? q_map[q] : 0, _q_max = q_max in q_map ? q_map[q_max] : 0;
      } else {
        var keys = Object.keys(videoQualityMap),
          _q2 = parseInt(("video" === _type ? $("li.bpx-player-ctrl-quality-menu-item.bpx-state-active") : $("li.squirtle-select-item.active")).attr("data-value")),
          _q_max2 = parseInt($(("video" === _type ? $("li.bpx-player-ctrl-quality-menu-item") : $("li.squirtle-select-item")).get(0)).attr("data-value"));
        _q = keys.indexOf("".concat(_q2)) > -1 ? _q2 : 0, _q_max = keys.indexOf("".concat(_q_max2)) > -1 ? _q_max2 : 0;
      }
      return _q || (_q = parseInt($("li.bpx-player-ctrl-quality-menu-item.bpx-state-active").attr("data-value") || _q)), _q_max || (_q_max = parseInt($("li.bpx-player-ctrl-quality-menu-item").attr("data-value") || _q_max)), !_q_max && (_q_max = 80) && console.error("video get quality max error"), !_q && (_q = _q_max < 80 ? _q_max : 80), user.isVIP() || (_q = _q > 80 ? 80 : _q), {
        q: _q,
        q_max: _q_max
      };
    },
    get_quality_support: function get_quality_support() {
      var list,
        quality_list = [],
        _type = type();
      if ("cheese" === _type) (list = $("div.edu-player-quality-item span")).each(function () {
        var k = $(this).text();
        q_map[k] && quality_list.push(q_map[k]);
      });else {
        var keys = Object.keys(videoQualityMap);
        (list = ["video", "list"].includes(_type) ? $("li.bpx-player-ctrl-quality-menu-item") : $("li.squirtle-select-item"))[0] || (list = $("li.bpx-player-ctrl-quality-menu-item")), list && list.length && list.each(function () {
          var q = "".concat(parseInt($(this).attr("data-value")));
          keys.indexOf(q) > -1 && quality_list.push(q);
        });
      }
      return quality_list.length ? quality_list : ["80", "64", "32", "16"];
    }
  };
  var Store = class Store {
      constructor() {
        this.prefix = "bp_";
      }
      get() {
        var key = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return localStorage.getItem(this.prefix + key) || "";
      }
      set() {
        var key = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          value = arguments.length > 1 ? arguments[1] : void 0;
        localStorage.setItem(this.prefix + key, value);
      }
    },
    store = new Store();
  function api_unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }
  function _regeneratorRuntime() {
    var r = _regenerator(),
      e = r.m(_regeneratorRuntime),
      t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;
    function n(r) {
      var e = "function" == typeof r && r.constructor;
      return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name));
    }
    var o = {
      throw: 1,
      return: 2,
      break: 3,
      continue: 3
    };
    function a(r) {
      var e, t;
      return function (n) {
        e || (e = {
          stop: function stop() {
            return t(n.a, 2);
          },
          catch: function _catch() {
            return n.v;
          },
          abrupt: function abrupt(r, e) {
            return t(n.a, o[r], e);
          },
          delegateYield: function delegateYield(r, o, a) {
            return e.resultName = o, t(n.d, _regeneratorValues(r), a);
          },
          finish: function finish(r) {
            return t(n.f, r);
          }
        }, t = function t(r, _t, o) {
          n.p = e.prev, n.n = e.next;
          try {
            return r(_t, o);
          } finally {
            e.next = n.n;
          }
        }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;
        try {
          return r.call(this, e);
        } finally {
          n.p = e.prev, n.n = e.next;
        }
      };
    }
    return (_regeneratorRuntime = function _regeneratorRuntime() {
      return {
        wrap: function wrap(e, t, n, o) {
          return r.w(a(e), t, n, o && o.reverse());
        },
        isGeneratorFunction: n,
        mark: r.m,
        awrap: function awrap(r, e) {
          return new _OverloadYield(r, e);
        },
        AsyncIterator: _regeneratorAsyncIterator,
        async: function async(r, e, t, o, u) {
          return (n(e) ? _regeneratorAsyncGen : _regeneratorAsync)(a(r), e, t, o, u);
        },
        keys: _regeneratorKeys,
        values: _regeneratorValues
      };
    })();
  }
  function _regeneratorValues(e) {
    if (null != e) {
      var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"],
        r = 0;
      if (t) return t.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) return {
        next: function next() {
          return e && r >= e.length && (e = void 0), {
            value: e && e[r++],
            done: !e
          };
        }
      };
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  function _regeneratorKeys(e) {
    var n = Object(e),
      r = [];
    for (var t in n) r.unshift(t);
    return function e() {
      for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e;
      return e.done = !0, e;
    };
  }
  function _regeneratorAsync(n, e, r, t, o) {
    var a = _regeneratorAsyncGen(n, e, r, t, o);
    return a.next().then(function (n) {
      return n.done ? n.value : a.next();
    });
  }
  function _regeneratorAsyncGen(r, e, t, o, n) {
    return new _regeneratorAsyncIterator(_regenerator().w(r, e, t, o), n || Promise);
  }
  function _regeneratorAsyncIterator(t, e) {
    function n(r, o, i, f) {
      try {
        var c = t[r](o),
          u = c.value;
        return u instanceof _OverloadYield ? e.resolve(u.v).then(function (t) {
          n("next", t, i, f);
        }, function (t) {
          n("throw", t, i, f);
        }) : e.resolve(u).then(function (t) {
          c.value = t, i(c);
        }, function (t) {
          return n("throw", t, i, f);
        });
      } catch (t) {
        f(t);
      }
    }
    var r;
    this.next || (_regeneratorDefine2(_regeneratorAsyncIterator.prototype), _regeneratorDefine2(_regeneratorAsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () {
      return this;
    })), _regeneratorDefine2(this, "_invoke", function (t, o, i) {
      function f() {
        return new e(function (e, r) {
          n(t, i, e, r);
        });
      }
      return r = r ? r.then(f, f) : f();
    }, !0);
  }
  function _regenerator() {
    var e,
      t,
      r = "function" == typeof Symbol ? Symbol : {},
      n = r.iterator || "@@iterator",
      o = r.toStringTag || "@@toStringTag";
    function i(r, n, o, i) {
      var c = n && n.prototype instanceof Generator ? n : Generator,
        u = Object.create(c.prototype);
      return _regeneratorDefine2(u, "_invoke", function (r, n, o) {
        var i,
          c,
          u,
          f = 0,
          p = o || [],
          y = !1,
          G = {
            p: 0,
            n: 0,
            v: e,
            a: d,
            f: d.bind(e, 4),
            d: function d(t, r) {
              return i = t, c = 0, u = e, G.n = r, a;
            }
          };
        function d(r, n) {
          for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
            var o,
              i = p[t],
              d = G.p,
              l = i[2];
            r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
          }
          if (o || r > 1) return a;
          throw y = !0, n;
        }
        return function (o, p, l) {
          if (f > 1) throw TypeError("Generator is already running");
          for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
            i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
            try {
              if (f = 2, i) {
                if (c || (o = "next"), t = i[o]) {
                  if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                  if (!t.done) return t;
                  u = t.value, c < 2 && (c = 0);
                } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
                i = e;
              } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
            } catch (t) {
              i = e, c = 1, u = t;
            } finally {
              f = 1;
            }
          }
          return {
            value: t,
            done: y
          };
        };
      }(r, o, i), !0), u;
    }
    var a = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    t = Object.getPrototypeOf;
    var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () {
        return this;
      }), t),
      u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
    function f(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () {
      return this;
    }), _regeneratorDefine2(u, "toString", function () {
      return "[object Generator]";
    }), (_regenerator = function _regenerator() {
      return {
        w: i,
        m: f
      };
    })();
  }
  function _regeneratorDefine2(e, r, n, t) {
    var i = Object.defineProperty;
    try {
      i({}, "", {});
    } catch (e) {
      i = 0;
    }
    _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) {
      function o(r, n) {
        _regeneratorDefine2(e, r, function (e) {
          return this._invoke(r, n, e);
        });
      }
      r ? i ? i(e, r, {
        value: n,
        enumerable: !t,
        configurable: !t,
        writable: !t
      }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
    }, _regeneratorDefine2(e, r, n, t);
  }
  function _OverloadYield(e, d) {
    this.v = e, this.k = d;
  }
  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function get_url_base(page, quality, video_format, success, error, request_type, _retryLevel) {
    _retryLevel = _retryLevel || 0;
    var _success, _error;
    _success = "function" == typeof success ? function _success(e) {
      success(e);
    } : function _success(res) {
      return console.log(res);
    }, _error = "function" == typeof error ? function _error(e) {
      message_Message_error("请求失败"), error(e);
    } : function _error(err) {
      return console.error(err);
    };
    var vb = video.base(),
      _ref = [vb.aid(page), vb.bvid(page), vb.cid(page), vb.epid(page), quality || video.get_quality().q, vb.type()],
      aid = _ref[0],
      bvid = _ref[1],
      cid = _ref[2],
      epid = _ref[3],
      q = _ref[4],
      type = _ref[5],
      format = video_format || config_config.format;
    // 路由决策：自动模式默认走本地官方接口（普通视频无需登录即可解析）。
    // 仅当「大会员/VIP 受限内容且当前用户无权访问」时才直连远程代理。
    // 原逻辑「未登录即强制远程」会让普通视频也走依赖第三方代理的通道，
    // 一旦代理失效/被墙就报"网络异常/请求失败"，且拿不到下载链接。
    var useRemote = "remote" === request_type;
    if ("auto" === request_type) {
      var _vipBlocked = !1;
      try { _vipBlocked = !0 === vb.needVip() && !user.isVIP(); } catch (e) { _vipBlocked = !1; }
      useRemote = _vipBlocked;
    }
    var base_api,
      url_replace_cdn = function url_replace_cdn(url) {
        if ("0" === config_config.host_key) return url;
        var url_tmp = url.split("/"),
          mapping = hostMap[config_config.host_key];
        return "string" == typeof mapping && mapping.length ? mapping.at(0).match(/[a-z]/) && (url_tmp[2] = mapping) : "function" == typeof mapping && (url_tmp[2] = mapping()), url = url_tmp.join("/");
      },
      ajax_obj = {
        type: "GET",
        dataType: "json"
      };
    if (!useRemote) {
      var fnver, fnval;
      "cheese" === type ? (base_api = "https://api.bilibili.com/pugv/player/web/playurl", fnver = "mp4" === format ? 1 : 0, fnval = 80) : (base_api = "video" === type ? "https://api.bilibili.com/x/player/playurl" : "https://api.bilibili.com/pgc/player/web/playurl", fnver = 0, fnval = {
        dash: 4048,
        flv: 4049,
        mp4: 0
      }[format] || 0), base_api += "?avid=".concat(aid, "&bvid=").concat(bvid, "&cid=").concat(cid, "&qn=").concat(q, "&fnver=").concat(fnver, "&fnval=").concat(fnval, "&fourk=1&ep_id=").concat(epid, "&type=").concat(format, "&otype=json"), base_api += "mp4" === format ? "&platform=html5&high_quality=1" : "", ajax_obj.xhrFields = {
        withCredentials: !0
      };
      // 本地接口失败时静默（由上层回退远程），避免先弹一次"网络异常"
      if (!useRemote) ajax_obj.silentError = !0;
    } else {
      base_api = config_config.base_api, base_api += "?av=".concat(aid, "&bv=").concat(bvid, "&cid=").concat(cid, "&ep=").concat(epid, "&q=").concat(q, "&type=").concat(type, "&format=").concat(format, "&otype=json"), page && (base_api += "&s");
      var _ref2 = [store.get("auth_id"), store.get("auth_sec")],
        auth_id = _ref2[0],
        auth_sec = _ref2[1];
      auth_id && auth_sec && (base_api += "&auth_id=".concat(auth_id, "&auth_sec=").concat(auth_sec));
    }
    var resultConvertor = function resultConvertor(data, _success) {
      var checkTask = function checkTask(key, backup_key) {
        return data[backup_key] ? _ajax({
          type: "GET",
          url: data[key],
          cache: !1,
          timeout: 1000,
          success: function success(res) {
            return key;
          },
          error: function error(res) {
            return "timeout" == res.statusText ? key : backup_key;
          }
        }) : Promise.resolve(key);
      };
      new Promise(function (resolve, reject) {
        var promiseList = [],
          valueList = [];
        data.url ? promiseList.push(checkTask("url", "backup_url")) : (promiseList.push(checkTask("video", "backup_video")), promiseList.push(checkTask("audio", "backup_audio")));
        var timer = setTimeout(function () {
            resolve(valueList);
          }, 1500),
          index = 0;
        promiseList.forEach(function () {
          var _ref3 = function common_asyncToGenerator(n) {
            return function () {
              var t = this,
                e = arguments;
              return new Promise(function (r, o) {
                var a = n.apply(t, e);
                function _next(n) {
                  asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
                }
                function _throw(n) {
                  asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
                }
                _next(void 0);
              });
            };
          }(_regeneratorRuntime().mark(function _callee(promise) {
            var result;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              for (;;) switch (_context.prev = _context.next) {
                case 0:
                  return _context.prev = 0, _context.next = 3, promise;
                case 3:
                  result = _context.sent, _context.next = 9;
                  break;
                case 6:
                  _context.prev = 6, _context.t0 = _context.catch(0), result = _context.t0;
                case 9:
                  console.log("use " + result), valueList[index++] = result, index == promiseList.length && (clearInterval(timer), resolve(valueList));
                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[0, 6]]);
          }));
          return function (_x) {
            return _ref3.apply(this, arguments);
          };
        }());
      }).then(function (resList) {
        if (console.log("use data key: ", resList), resList) {
          var _step,
            _iterator = _createForOfIteratorHelper(resList = _toConsumableArray(resList));
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var key = _step.value;
              data[key] && (["url", "backup_url"].includes(key) ? data.url = data[key] : ["video", "backup_video"].includes(key) ? data.video = data[key] : ["audio", "backup_audio"].includes(key) && (data.audio = data[key]));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }).finally(function () {
        _success(data);
      });
    };
    ajax_obj.url = base_api, ajax(ajax_obj).then(function (res) {
      var data;
      if (res.code || (data = res.result || res.data), !data) {
        // 部分代理会在顶层直接返回 url/video/audio，先按数据解析
        if (res.url || res.video || res.audio) {
          res.url && (res.url = url_replace_cdn(res.url));
          res.video && (res.video = url_replace_cdn(res.video));
          res.audio && (res.audio = url_replace_cdn(res.audio));
          return void resultConvertor(res, _success);
        }
        // 无有效数据：本地↔远程各回退一次，仍失败才报错
        if (_retryLevel < 1) {
          var _next = useRemote ? "local" : "remote";
          console.warn("[get_url_base] " + (useRemote ? "远程" : "本地") + "接口无有效数据，回退" + ("remote" === _next ? "远程" : "本地") + "接口");
          return get_url_base(page, quality, video_format, success, error, _next, _retryLevel + 1);
        }
        return _error(res);
      }
      if (data.dash) {
        for (var result = {
            code: 0,
            quality: data.quality,
            accept_quality: data.accept_quality,
            video: "",
            audio: ""
          }, videos = data.dash.video, i = 0; i < videos.length; i++) {
          var _video = videos[i];
          if (_video.id <= q) {
            var audio0 = data.dash.audio && data.dash.audio[0];
            result.video = url_replace_cdn(_video.base_url), result.audio = audio0 ? url_replace_cdn(audio0.base_url) : "", result.backup_video = _video.backup_url && url_replace_cdn(_video.backup_url[0]), result.backup_audio = audio0 && audio0.backup_url && url_replace_cdn(audio0.backup_url[0]);
            break;
          }
        }
        resultConvertor(result, _success);
      } else resultConvertor({
        code: 0,
        quality: data.quality,
        accept_quality: data.accept_quality,
        url: data.durl && data.durl[0] ? url_replace_cdn(data.durl[0].url) : "",
        backup_url: data.durl && data.durl[0] && data.durl[0].backup_url && url_replace_cdn(data.durl[0].backup_url[0])
      }, _success);
    }).catch(function (err) {
      // 网络层失败：本地↔远程各回退一次（带 _retryLevel 防止无限递归），仍失败才真正报错
      if (_retryLevel < 1) {
        var _next = useRemote ? "local" : "remote";
        console.warn("[get_url_base] 接口请求失败，回退" + ("remote" === _next ? "远程" : "本地") + "接口", err);
        return get_url_base(page, quality, video_format, success, error, _next, _retryLevel + 1);
      }
      return _error(err);
    });
  }
  var api = {
    get_urls: function get_urls(page, quality, format, success, error, request_type) {
      get_url_base(page, quality, format, success, error, request_type || config_config.request_type);
    }
  };
  var RuntimeLib = class RuntimeLib {
      constructor(config) {
        this.config = config, this.moduleAsync, this.anyResolved = !1;
      }
      getModulePromise() {
        var _this = this,
          _this$config = this.config,
          urls = _this$config.urls,
          errs = (_this$config.getModule, []);
        return urls && urls.length ? new Promise(function (resolve, reject) {
          var i = 0;
          urls.forEach(function (url) {
            setTimeout(async function () {
              try {
                if (_this.anyResolved) return;
                console.log("[Runtime Library] Start download from ".concat(url));
                var code = await _ajax({
                  url: url,
                  type: "GET",
                  dataType: "text",
                  cache: !0
                });
                if (_this.anyResolved) return;
                console.log("[Runtime Library] Downloaded from ".concat(url, " , length = ").concat(code.length)), _this.anyResolved = !0, resolve(code);
              } catch (e) {
                if (_this.anyResolved) return;
                errs.push({
                  url: url,
                  err: e
                }), 0 === --i && (console.error(errs), reject(errs));
              }
            }, 1000 * i++);
          });
        }) : Promise.reject(new Error("No urls provided"));
      }
    },
    cdn_supports_mapping = {
      "@ffmpeg/ffmpeg": ["unpkg", "jsdelivr"]
    },
    cdn_map = {
      cloudflare: function cloudflare(name, ver, filename) {
        return "https://cdnjs.cloudflare.com/ajax/libs/".concat(name, "/").concat(ver, "/").concat(filename);
      },
      unpkg: function unpkg(name, ver, filename) {
        return "https://unpkg.com/".concat(name, "@").concat(ver, "/").concat(filename);
      },
      jsdelivr: function jsdelivr(name, ver, filename) {
        return "https://cdn.jsdelivr.net/npm/".concat(name, "@").concat(ver, "/").concat(filename);
      },
      staticfile: function staticfile(name, ver, filename) {
        return "https://cdn.staticfile.org/".concat(name, "/").concat(ver, "/").concat(filename);
      },
      bootcdn: function bootcdn(name, ver, filename) {
        return "https://cdn.bootcdn.net/ajax/libs/".concat(name, "/").concat(ver, "/").concat(filename);
      }
    },
    urls = function urls(_ref2) {
      var name = _ref2.name,
        ver = _ref2.ver,
        filename = _ref2.filename,
        cdn_keys = _ref2.cdn_keys,
        supports = cdn_supports_mapping[name];
      return (cdn_keys = supports ? cdn_keys ? cdn_keys.filter(function (key) {
        return key in cdn_map && supports.includes(key);
      }) : supports.filter(function (key) {
        return key in cdn_map;
      }) : cdn_keys ? cdn_keys.filter(function (key) {
        return key in cdn_map;
      }) : Object.keys(cdn_map)).map(function (k) {
        return cdn_map[k](name, ver, filename);
      });
    },
    runtime_div = document.createElement("div");
  runtime_div.id = "bp_runtime_div", runtime_div.style.display = "none", document.getElementById(runtime_div.id) || document.body.appendChild(runtime_div);
  var QRCode,
    md5,
    FFmpegWASM,
    initLocal = function initLocal(name, ver, filename, getModule, handleScript) {
      handleScript = handleScript || function (script) {
        return script;
      };
      try {
        (async function () {
          var script = await new RuntimeLib({
            urls: urls({
              name: name,
              ver: ver,
              filename: filename
            }),
            getModule: getModule
          }).getModulePromise();
          script = await handleScript(script);
          var blob = new Blob([script], {
            type: "text/javascript"
          }),
            blob_url = URL.createObjectURL(blob),
            script_tag = document.createElement("script");
          script_tag.src = blob_url, script_tag.onload = function () {
            console.log("[Runtime Library] Loaded ".concat(name, " from local")), getModule(window), URL.revokeObjectURL(blob_url);
          }, script_tag.onerror = function () {
            console.error("[Runtime Library] Failed to load ".concat(name, " from local")), URL.revokeObjectURL(blob_url);
          }, runtime_div.appendChild(script_tag);
        })();
      } catch (err) {
        console.error("[Runtime Library] Failed to load ".concat(name, " from local"), err);
      }
    };
  initLocal("qrcodejs", "1.0.0", "qrcode.min.js", function (w) {
    return QRCode = w.QRCode;
  }), initLocal("blueimp-md5", "2.19.0", "js/md5.min.js", function (w) {
    return md5 = w.md5;
  }), initLocal("@ffmpeg/ffmpeg", "0.12.15", "dist/umd/ffmpeg.js", function (w) {
    return FFmpegWASM = w.FFmpegWASM;
  }, function (script) {
    return script.replace("new URL(e.p+e.u(814),e.b)", "r.workerLoadURL");
  });
  var check = new (function () {
    function Check() {
      !function cache_classCallCheck(a, n) {
        if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
      }(this, Check), this.href = "", this.aid = "", this.cid = "", this.q = "", this.epid = "", this.locked = !1;
    }
    return function cache_createClass(e, r, t) {
      return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
      }), e;
    }(Check, [{
      key: "refresh",
      value: function refresh() {
        if (!this.locked) {
          this.locked = !0, console.log("refresh...");
          try {
            this.href = location.href;
            var vb = video.base();
            this.aid = vb.aid(), this.cid = vb.cid(), this.epid = vb.epid(), this.q = video.get_quality().q;
          } catch (err) {
            console.log(err);
          } finally {
            this.locked = !1;
          }
        }
      }
    }]), Check;
  }())();
  function common_asyncToGenerator(n) {
    return function () {
      var t = this,
        e = arguments;
      return new Promise(function (r, o) {
        var a = n.apply(t, e);
        function _next(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
        }
        function _throw(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
        }
        _next(void 0);
      });
    };
  }
  async function toBlobURL(url, mimeType) {
    console.log("toBlobURL: Fetching ".concat(url));
    var response = await fetch(url);
    if (!response.ok) {
      var errorMsg = "toBlobURL: Failed to fetch ".concat(url, ": ").concat(response.status, " ").concat(response.statusText);
      console.error(errorMsg);
      throw new Error(errorMsg);
    }
    var buffer = await response.arrayBuffer();
    var blob = new Blob([buffer], {
      type: mimeType
    });
    var blobUrl = URL.createObjectURL(blob);
    console.log("toBlobURL: Created Blob URL for ".concat(url));
    return blobUrl;
  }
  function downloadBlobURL(blobUrl, downloadname) {
    var a = document.createElement("a");
    a.href = blobUrl, a.download = downloadname, a.style.display = "none", document.body.appendChild(a), a.click(), document.body.removeChild(a), setTimeout(function () {
      return URL.revokeObjectURL(blobUrl);
    }, 100);
  }
  function downloadBlob(blob, downloadname) {
    downloadBlobURL(URL.createObjectURL(blob), downloadname);
  }
  async function fetchFileWithProgress(url, _ref) {
    var onProgress = _ref.onProgress,
      signal = _ref.signal;
    var res = await fetch(url, {
      signal: signal
    });
    if (!res.body) throw new Error("URL下载失败: " + url);
    var contentLength = res.headers.get("content-length"),
      total = contentLength ? parseInt(contentLength, 10) : 0,
      reader = res.body.getReader(),
      loaded = 0,
      chunks = [];
    for (;;) {
      var _yield$reader$read = await reader.read(),
        done = _yield$reader$read.done,
        value = _yield$reader$read.value;
      if (value) {
        chunks.push(value);
        loaded += value.length;
        onProgress && onProgress(loaded, total);
      }
      if (done) break;
    }
    var dataArray = new Uint8Array(loaded),
      pos = 0;
    for (var _i = 0, _chunks = chunks; _i < _chunks.length; _i++) {
      var chunk = _chunks[_i];
      dataArray.set(chunk, pos);
      pos += chunk.length;
    }
    return dataArray;
  }
  function prettyBytes(bytes) {
    var decimalPlaces = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
    if (0 === bytes) return "0 B";
    for (var units = ["B", "KB", "MB", "GB", "TB"], size = bytes, unitIndex = 0; size >= 1024 && unitIndex < units.length - 1;) size /= 1024, unitIndex++;
    var formatted = size.toFixed(decimalPlaces);
    return "".concat(formatted, " ").concat(units[unitIndex]);
  }
  function getSignData(param, sec) {
    return _objectSpread(_objectSpread({}, param), {}, {
      sign: md5("".concat(Object.entries(param).filter(function (_ref2) {
        return "sign" !== _slicedToArray(_ref2, 1)[0];
      }).map(function (e) {
        return "".concat(e[0], "=").concat(e[1]);
      }).join("&")).concat(sec))
    });
  }
  async function _mergeVideoAndAudio(videoUrl, audioUrl, _ref) {
    var showProgress = _ref.showProgress,
      controller = _ref.controller;
    if (!videoUrl || "#" === videoUrl) {
      message_Message_warning("视频地址为空");
      throw new Error("videoUrl not found");
    }
    if (!audioUrl || "#" === audioUrl) {
      message_Message_warning("音频地址为空");
      throw new Error("audioUrl not found");
    }
    showProgress = showProgress || function (data) {
      console.log("[ffmpeg] Progress: ", data);
    };
    showProgress({
      message: "正在初始化FFmpeg"
    });
    var ffmpeg = new FFmpegWASM.FFmpeg();
    var load = async function load() {
      var baseFFmpegUrl = "https://unpkg.com/@ffmpeg/ffmpeg@0.12.15/dist/umd",
        baseCoreUrl = "https://unpkg.com/@ffmpeg/core@0.12.10/dist/umd",
        baseCoreMTUrl = "https://unpkg.com/@ffmpeg/core-mt@0.12.10/dist/umd";
      ffmpeg.on("log", function (_ref3) {
        var message = _ref3.message;
        console.log("[ffmpeg]", message);
      });
      if (window.crossOriginIsolated) {
        console.log("[ffmpeg] 多线程模式");
        var coreURL = await toBlobURL("".concat(baseCoreMTUrl, "/ffmpeg-core.js"), "text/javascript");
        var wasmURL = await toBlobURL("".concat(baseCoreMTUrl, "/ffmpeg-core.wasm"), "application/wasm");
        var workerURL = await toBlobURL("".concat(baseCoreMTUrl, "/ffmpeg-core.worker.js"), "application/javascript");
        var workerLoadURL = await toBlobURL("".concat(baseFFmpegUrl, "/814.ffmpeg.js"), "text/javascript");
        await ffmpeg.load({
          coreURL: coreURL,
          wasmURL: wasmURL,
          workerURL: workerURL,
          workerLoadURL: workerLoadURL
        });
      } else {
        console.log("[ffmpeg] 单线程模式");
        var coreURL2 = await toBlobURL("".concat(baseCoreUrl, "/ffmpeg-core.js"), "text/javascript");
        var wasmURL2 = await toBlobURL("".concat(baseCoreUrl, "/ffmpeg-core.wasm"), "application/wasm");
        var workerLoadURL2 = await toBlobURL("".concat(baseFFmpegUrl, "/814.ffmpeg.js"), "text/javascript");
        await ffmpeg.load({
          coreURL: coreURL2,
          wasmURL: wasmURL2,
          workerLoadURL: workerLoadURL2
        });
      }
    };
    try {
      await load();
      showProgress({
        message: "准备下载视频和音频"
      });
      var videoLoaded = 0,
        audioLoaded = 0,
        videoTotal = 0,
        audioTotal = 0,
        updateProgress = function updateProgress() {
          var totalBytes = videoTotal + audioTotal,
            loadedBytes = videoLoaded + audioLoaded,
            overallPercent = totalBytes > 0 ? Math.floor(loadedBytes / totalBytes * 100) : 0,
            msg = "\n                下载进度: ".concat(overallPercent, "% </br>\n                视频: ").concat(prettyBytes(videoLoaded), " / ").concat(prettyBytes(videoTotal), " </br>\n                音频: ").concat(prettyBytes(audioLoaded), " / ").concat(prettyBytes(audioTotal), " </br>\n            ").trim().replace(/\n\s*/g, "\n");
          showProgress({
            message: msg
          });
        };
      controller = controller || new AbortController();
      var _yield$Promise$all = await Promise.all([fetchFileWithProgress(videoUrl, {
        onProgress: function onProgress(loaded, total) {
          videoLoaded = loaded, videoTotal = total, updateProgress();
        },
        signal: controller.signal
      }), fetchFileWithProgress(audioUrl, {
        onProgress: function onProgress(loaded, total) {
          audioLoaded = loaded, audioTotal = total, updateProgress();
        },
        signal: controller.signal
      })]),
        _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2),
        videoData = _yield$Promise$all2[0],
        audioData = _yield$Promise$all2[1];
      await ffmpeg.writeFile("video.m4s", videoData);
      await ffmpeg.writeFile("audio.m4s", audioData);
      showProgress({
        message: "正在合并视频和音频"
      });
      await ffmpeg.exec(["-i", "video.m4s", "-i", "audio.m4s", "-c", "copy", "output.mp4"]);
      showProgress({
        message: "合并成功，正在读取文件"
      });
      var mergedData = await ffmpeg.readFile("output.mp4");
      return Promise.resolve(new Blob([mergedData.buffer], {
        type: "video/mp4"
      }));
    } catch (e) {
      controller && controller.signal && !controller.signal.aborted && (controller.abort(), message_Message_error("任务被迫中止"));
      console.error("Error merging streams:", e);
      return Promise.reject(e);
    }
  }
  var ffmpeg = {
    mergeVideoAndAudio: function mergeVideoAndAudio(_x, _x2, _x3) {
      return _mergeVideoAndAudio.apply(this, arguments);
    }
  };
  function rpc_type() {
    return config_config.rpc_domain.startsWith("https://") || config_config.rpc_domain.match(/localhost|127\.0\.0\.1/) ? "post" : "ariang";
  }
  function download_videos_rpc(videos, rpc_type) {
    "post" === rpc_type ? download_rpc_post_all(videos) : "ariang" === rpc_type ? download_rpc_ariang.apply(void 0, _toConsumableArray(videos)) : message_Message_error("未知RPC类型: " + rpc_type);
  }
  function download_videos(video_tasks) {
    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      videos = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
      reqType = arguments.length > 3 ? arguments[3] : void 0;
    if (video_tasks.length) {
      if (i >= video_tasks.length) {
        var type = rpc_type();
        return videos.length > 0 && (download_videos_rpc(videos, type), videos.length = 0), void MessageBox_alert("批量下载执行结束！");
      }
      var task = video_tasks[i],
        msg = "第".concat(i + 1, "（").concat(i + 1, "/").concat(video_tasks.length, "）个视频");
      MessageBox_alert("".concat(msg, "：获取中..."));
      api.get_urls(task.p, task.q, task.format, function success(res) {
        if (setTimeout(function () {
          download_videos(video_tasks, i + 1, videos, reqType);
        }, 4000), !res.code) {
          message_Message_success("请求成功" + (res.times ? "<br/>今日剩余请求次数".concat(res.times) : "")), MessageBox_alert("".concat(msg, "：获取成功！"));
          var _ref3 = [res.url, rpc_type(), res.video, res.audio],
            url = _ref3[0],
            type = _ref3[1],
            video_url = _ref3[2],
            audio_url = _ref3[3];
          "dash" === task.format ? (task.dl_video && videos.push({
            url: video_url,
            filename: task.filename + format(video_url),
            rpc_dir: task.rpc_dir
          }), task.dl_audio && videos.push({
            url: audio_url,
            filename: task.filename + ".m4a",
            rpc_dir: task.rpc_dir
          })) : videos.push({
            url: url,
            filename: task.filename + format(url),
            rpc_dir: task.rpc_dir
          }), "post" === type ? videos.length > 3 && (download_videos_rpc(videos, type), videos.length = 0) : "ariang" === type && (download_videos_rpc(videos, type), videos.length = 0);
        }
      }, function error() {
        download_videos(video_tasks, i + 1, videos, reqType);
      }, reqType);
    }
  }
  function checkMotrixRunning(callback) {
    var rpc = {
        domain: config_config.rpc_domain,
        port: config_config.rpc_port,
        path: config_config.rpc_path,
        token: config_config.rpc_token
      };
    // 走 _ajax（内部优先 GM_xmlhttpRequest）：原生 fetch 会被 CORS/混合内容拦掉，
    // 导致连接检测在 https 页面上永远返回失败。
    _ajax({
      type: "POST",
      url: "".concat(rpc.domain, ":").concat(rpc.port).concat(rpc.path),
      contentType: "application/json",
      dataType: "json",
      timeout: 1000,
      data: JSON.stringify({
        id: "bp_aria2_rpc",
        jsonrpc: "2.0",
        method: "aria2.getGlobalStat",
        params: rpc.token ? ["token:".concat(rpc.token)] : []
      })
    }).then(function (res) {
      callback(!!(res && res.result));
    }, function () {
      callback(!1);
    });
  }
  function handleMotrixNotRunning(execDownload) {
    var startTime = Date.now(),
      pollTimer = null,
      hasDownloaded = !1;
    function stopPolling() {
      pollTimer && (clearInterval(pollTimer), pollTimer = null);
    }
    function startPolling() {
      pollTimer = setInterval(function () {
        if (Date.now() - startTime > 10000) return stopPolling(), void (hasDownloaded || message_Message_error("连接超时：Motrix 启动失败或未响应"));
        checkMotrixRunning(function (running) {
          running && !hasDownloaded && (!function sendDownload() {
            hasDownloaded || (execDownload && execDownload(), hasDownloaded = !0), stopPolling();
          }(), message_Message_success("已连接到 Motrix，任务已发送"));
        });
      }, 500);
    }
    if ("1" === config_config.show_motrix_confirm_open_auto) return window.open("motrix://"), void startPolling();
    MessageBox_confirm("未检测到运行的 Motrix，是否启动？", function () {
      window.open("motrix://"), startPolling();
    }, function () {
      (function cancelDownload() {
        stopPolling(), message_Message_info("下载已取消");
      })();
    });
  }
  function checkMotrixRunningBeforeExecute(execFunc) {
    checkMotrixRunning(function (running) {
      running ? execFunc && execFunc() : handleMotrixNotRunning(execFunc);
    });
  }
  var download_rpc_clicked = !1;
  function download_rpc_post(video) {
    download_rpc_post_all([video]);
  }
  function download_rpc_post_all(videos) {
    if (download_rpc_clicked) message_Message_info("操作进行中，请勿重复点击");else {
      download_rpc_clicked = !0;
      var data = _toConsumableArray(videos);
      ajax(function get_rpc_post(data) {
        Array.isArray(data) || (data = data && "object" === _typeof(data) ? [data] : []);
        var rpc = {
          domain: config_config.rpc_domain,
          port: config_config.rpc_port,
          path: config_config.rpc_path || "/jsonrpc",
          token: config_config.rpc_token,
          dir: config_config.rpc_dir
        };
        return {
          url: "".concat(rpc.domain, ":").concat(rpc.port).concat(rpc.path),
          type: "POST",
          dataType: "json",
          contentType: "application/json",
          data: JSON.stringify(data.map(function (_ref4) {
            var url = _ref4.url,
              filename = _ref4.filename,
              rpc_dir = _ref4.rpc_dir,
              param = {
                out: filename,
                header: ["User-Agent: ".concat(window.navigator.userAgent), "Referer: ".concat(window.location.href)]
              };
            return (rpc_dir || rpc.dir) && (param.dir = rpc_dir || rpc.dir), {
              id: window.btoa("BParse_".concat(Date.now(), "_").concat(Math.random())),
              jsonrpc: "2.0",
              method: "aria2.addUri",
              params: rpc.token ? ["token:".concat(rpc.token), [url], param] : [[url], param]
            };
          }))
        };
      }(data)).then(function (res) {
        res.length === data.length ? message_Message_success("RPC请求成功") : message_Message_warning("请检查RPC参数");
      }).catch(function () {
        message_Message_error("请检查RPC服务配置");
      }).finally(function () {
        return download_rpc_clicked = !1;
      }), message_Message_info("发送RPC下载请求");
    }
  }
  function get_ariang_set_hash(rpc) {
    return rpc ? "#!/settings/rpc/set/".concat(rpc.domain.replace("://", "/"), "/").concat(rpc.port).concat(rpc.path, "/").concat(window.btoa(rpc.token)) : "";
  }
  function open_ariang(rpc) {
    var hash_tag = rpc ? get_ariang_set_hash(rpc) : "",
      a = document.createElement("a");
    return a.style.display = "none", a.onclick = function () {
      window.bp_aria2_window = window.open(config_config.ariang_host), hash_tag && setTimeout(function () {
        window.bp_aria2_window.location.href = config_config.ariang_host + hash_tag;
      }, 500);
    }, document.body.appendChild(a), a.click(), document.body.removeChild(a), window.bp_aria2_window;
  }
  function download_rpc_ariang() {
    for (var _len = arguments.length, videos = new Array(_len), _key = 0; _key < _len; _key++) videos[_key] = arguments[_key];
    0 != videos.length && (1 == videos.length && Array.isArray(videos[0]) ? download_rpc_ariang.apply(void 0, _toConsumableArray(videos[0])) : (!function download_rpc_ariang_send(video) {
      var bp_aria2_window = window.bp_aria2_window,
        time = 100;
      bp_aria2_window && !bp_aria2_window.closed || (open_ariang(), time = 3000), setTimeout(function () {
        var bp_aria2_window = window.bp_aria2_window,
          cmd = ["url=".concat(encodeURIComponent(window.btoa(video.url))), "out=".concat(encodeURIComponent(video.filename)), "header=User-Agent:".concat(window.navigator.userAgent), "header=Referer:".concat(window.location.origin)];
        (video.rpc_dir || config_config.ariang_dir) && cmd.push("dir=".concat(encodeURIComponent(video.rpc_dir || config_config.ariang_dir)));
        var task_hash = "#!/new/task?" + cmd.join("&");
        bp_aria2_window && !bp_aria2_window.closed ? (bp_aria2_window.location.href = config_config.ariang_host + task_hash, message_Message_success("发送RPC请求")) : message_Message_warning("AriaNg页面未打开");
      }, time);
    }(videos.pop()), setTimeout(function () {
      download_rpc_ariang.apply(void 0, videos);
    }, 100)));
  }
  var download_blob_clicked = !1,
    need_show_progress = !0;
  function download_blob(url, filename) {
    if (download_blob_clicked) return message_Message_info("操作进行中，请勿重复点击"), void (need_show_progress = !0);
    var xhr = new XMLHttpRequest();
    xhr.open("get", url), xhr.responseType = "blob", xhr.onload = function () {
      if (200 === this.status || 304 === this.status) {
        if ("msSaveOrOpenBlob" in navigator) return void navigator.msSaveOrOpenBlob(this.response, filename);
        downloadBlobURL(URL.createObjectURL(this.response), filename);
      } else message_Message_error("下载失败，HTTP ".concat(this.status));
      download_blob_clicked = !1;
    }, need_show_progress = !0, xhr.onprogress = function (evt) {
      if (evt.lengthComputable) {
        var loaded = evt.loaded,
          total = evt.total;
        !function show_progress(_ref5) {
          var total = _ref5.total,
            loaded = _ref5.loaded,
            percent = _ref5.percent;
          need_show_progress && MessageBox_alert("文件大小：".concat(prettyBytes(total), "(").concat(total, "Byte)<br/>") + "已经下载：".concat(prettyBytes(loaded), "(").concat(loaded, "Byte)<br/>") + "当前进度：".concat(percent, "%<br/>下载中请勿操作浏览器，刷新或离开页面会导致下载取消！<br/>再次点击下载按钮可查看下载进度。"), function () {
            need_show_progress = !1;
          }), total === loaded && (MessageBox_alert("下载完成，请等待浏览器保存！"), download_blob_clicked = !1);
        }({
          total: total,
          loaded: loaded,
          percent: Math.floor(100 * loaded / total)
        });
      }
    }, xhr.onerror = function () {
      message_Message_error("下载失败"), download_blob_clicked = !1;
    }, xhr.send(), download_blob_clicked = !0, message_Message_info("准备开始下载");
  }
  var download_blob_merge_clicked = !1,
    need_show_merge_progress = !0;
  function format(urlStr) {
    var pathname = "";
    try {
      pathname = new URL(urlStr).pathname;
    } catch (e) {
      pathname = urlStr.split(/[?#]/)[0];
    }
    if (!pathname) return "";
    var lowerPath = pathname.toLowerCase();
    if (lowerPath.endsWith(".mp4") || lowerPath.endsWith(".m4s")) return ".mp4";
    if (lowerPath.endsWith(".flv")) return ".flv";
    console.warn("意外的url文件：" + pathname);
    var dotIndex = pathname.lastIndexOf(".");
    return -1 !== dotIndex ? pathname.substring(dotIndex) : "";
  }
  var _document$head$innerH,
    Download = {
      url_format: format,
      download: function download(url, filename, type) {
        filename = filename.replace(/[\/\\*|]+/g, "-").replace(/:/g, "：").replace(/\?/g, "？").replace(/"/g, "'").replace(/</g, "《").replace(/>/g, "》"), "blob" === type ? download_blob(url, filename) : "rpc" === type ? function download_rpc(url, filename, rpc_dir) {
          var type = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "post";
          if ("post" === type) {
            if ("0" === config_config.show_motrix_confirm) return void download_rpc_post({
              url: url,
              filename: filename,
              rpc_dir: rpc_dir
            });
            checkMotrixRunningBeforeExecute(function () {
              download_rpc_post({
                url: url,
                filename: filename,
                rpc_dir: rpc_dir
              });
            });
          } else "ariang" === type && download_rpc_ariang({
            url: url,
            filename: filename,
            rpc_dir: rpc_dir
          });
        }(url, filename, null, rpc_type()) : "api" === type && function download_api(url, filename) {
          var api = config_config.download_api,
            api_sec = config_config.download_api_secret;
          if (api) {
            var data = {
              filename: filename,
              ts: Date.now(),
              url: url
            };
            ajax({
              url: api,
              type: "POST",
              data: api_sec ? getSignData(data, api_sec) : data
            }).then(function (res) {
              console.info("download_api res:", res);
            }), message_Message_success("请求已发送");
          } else message_Message_warning("请配置下载接口");
        }(url, filename);
      },
      download_blob_merge: function download_blob_merge(video_url, audio_url, filename) {
        if (download_blob_merge_clicked) return message_Message_info("操作进行中，请勿重复点击"), void (need_show_merge_progress = !0);
        download_blob_merge_clicked = !0, need_show_merge_progress = !0;
        var controller = new AbortController();
        function show_merge_progress(_ref6) {
          var message = _ref6.message,
            loaded = _ref6.loaded,
            total = _ref6.total,
            isFinished = _ref6.isFinished;
          if (need_show_merge_progress) {
            var content = "\n                ".concat(message, "</br>\n                ").concat(loaded && total && "\n                下载进度: ".concat(Math.round(loaded / total * 100), "% </br>\n                文件大小：").concat(prettyBytes(total), " <br/>\n                已经下载：").concat(prettyBytes(loaded)) || "", "\n                请勿操作浏览器，刷新或离开页面会导致下载取消！\n            ");
            MessageBox_confirm(content, function () {
              need_show_merge_progress = !1;
            }, function () {
              controller.abort();
            });
          }
          isFinished && (MessageBox_alert("下载完成，请等待浏览器保存！"), download_blob_merge_clicked = !1);
        }
        message_Message_info("准备开始下载"), ffmpeg.mergeVideoAndAudio(video_url, audio_url, {
          showProgress: show_merge_progress,
          controller: controller
        }).then(function (mergedBlob) {
          mergedBlob && 0 !== mergedBlob.size ? (show_merge_progress({
            isFinished: !0
          }), downloadBlob(mergedBlob, filename)) : message_Message_error("合并视频失败");
        }).catch(function (error) {
          console.error(error), "AbortError" !== error.name ? (controller.signal.aborted || controller.abort(), message_Message_error("合并下载失败")) : message_Message_warning("已取消下载");
        }).finally(function () {
          download_blob_merge_clicked = !1;
        });
      },
      open_ariang: open_ariang,
      get_ariang_set_hash: get_ariang_set_hash
    },
    config = "<div id=\"bp_config\"> <div class=\"config-mark\"></div> <div class=\"config-bg\"> <span style=\"font-size:20px;display:block;margin-bottom:15px\"> <b>bilibili视频下载 参数设置</b> <b> <a href=\"javascript:;\" id=\"reset_config\"> [重置] </a> </b> </span> <div id=\"tab-content\" style=\"flex:1;overflow-y:auto;padding-left:10px;font-size:14px\"> <div class=\"tab-panel\" data-id=\"basic\"> <div style=\"margin:2% 0\"> <label>请求地址：</label> <input id=\"base_api\" style=\"width:40%\"/>&nbsp;&nbsp;&nbsp;&nbsp; <label>请求方式：</label> <select id=\"request_type\"> <option value=\"auto\">自动判断</option> <option value=\"local\">本地请求</option> <option value=\"remote\">远程请求</option> </select><br/> <small>注意：普通使用请勿修改；默认使用混合请求</small> </div> <div style=\"margin:2% 0\"> <label>视频格式：</label> <select id=\"format\"> <option value=\"mp4\">MP4</option> <option value=\"flv\">FLV</option> <option value=\"dash\">DASH</option> </select>&nbsp;&nbsp;&nbsp;&nbsp; <label>切换CDN：</label> <select id=\"host_key\"> {{host_key_options}} </select><br/> <small>注意：无法选择MP4清晰度；建议特殊地区或播放异常时切换（自行选择合适线路）</small> </div> <div style=\"margin:2% 0\"> <label>视频质量：</label> <select id=\"video_quality\"> {{video_quality_options}} </select><br/> <small>说明：脚本识别错误时可手动设置质量参数；悬浮面板内切换清晰度会立即生效</small> </div> <div style=\"margin:2% 0\"> <label>下载方式：</label> <select id=\"download_type\"> <option value=\"a\">URL链接</option> <option value=\"web\">Web请求</option> <option value=\"aria\">Aria2命令</option> <option value=\"blob\">Blob请求</option> <option value=\"blob_merge\">Blob合并</option> <option value=\"rpc\">RPC接口</option> <option value=\"api\">API请求</option> </select>&nbsp;&nbsp;&nbsp;&nbsp; <label>AriaNg地址：</label> <input id=\"ariang_host\" style=\"width:40%\"/><br/> <small>提示：建议使用RPC请求下载；非HTTPS或非本地RPC域名使用AriaNg下载</small> </div> <div style=\"margin:2% 0\"> <label>RPC配置：[ 域名 : 端口 | 路径 | 密钥 ]</label> <a class=\"setting-context\" href=\"javascript:;\" id=\"ariang_sync_config\">同步至AriaNg</a><br/> <input id=\"rpc_domain\" placeholder=\"ws://192.168.1.1\" style=\"width:25%\"/> : <input id=\"rpc_port\" placeholder=\"6800\" style=\"width:10%\"/> | <input id=\"rpc_path\" placeholder=\"/jsonrpc\" style=\"width:20%\"/> | <input id=\"rpc_token\" placeholder=\"未设置不填\" style=\"width:15%;color:transparent\" onFocus=\"this.style.color='black';\" onBlur=\"this.style.color='transparent';\"/><br/> <small>注意：RPC默认使用Motrix（需要安装并运行）下载，其他软件请修改参数</small> </div> <div style=\"margin:2% 0\"> <label>授权状态：</label> <select id=\"auth\" disabled=\"disabled\"> <option value=\"0\">未授权</option> <option value=\"1\">已授权</option> </select> <a class=\"setting-context\" href=\"javascript:;\" id=\"show_login\">扫码授权</a> <a class=\"setting-context\" href=\"javascript:;\" id=\"show_login_2\">网页授权</a> <a class=\"setting-context\" href=\"javascript:;\" id=\"show_logout\">取消授权</a> <a class=\"setting-context\" href=\"javascript:;\" id=\"show_login_help\">授权说明</a> </div> </div> </div> </div> <div style=\"text-align:right;margin-top:20px\"> <button class=\"setting-button\" id=\"save_config\">确定</button> </div> </div> <style>#bp_config{opacity:0;display:none;position:fixed;inset:0px;top:0;left:0;width:100%;height:100%;z-index:10000}#bp_config .config-bg{position:absolute;background:#fff;border-radius:10px;padding:20px;top:50%;left:50%;transform:translate(-50%,-50%);width:700px;max-width:90vw;max-height:90vh;overflow:auto;box-shadow:0 4px 20px rgba(0,0,0,.2);z-index:10001}#bp_config .config-mark{width:100%;height:100%;position:fixed;top:0;left:0;background:rgba(0,0,0,.5);z-index:10000}#bp_config .setting-button{width:120px;height:40px;border-width:0;border-radius:3px;background:#1e90ff;cursor:pointer;outline:0;color:#fff;font-size:17px}#bp_config .setting-button:hover{background:#59f}#bp_config .setting-context{margin:0 1%;color:#00f}#bp_config .setting-context:hover{color:red}#bp_config small{color:#666;font-size:12px;margin-top:4px;display:block}#bp_config label{font-weight:500;min-width:60px;display:inline-block}#bp_config input,#bp_config select{padding:4px 6px;border:1px solid #ccc;border-radius:3px}#bp_config input:focus,#bp_config select:focus{border-color:#1e90ff;outline:0}</style> </div> ";
  var config_config = {
      base_api: "https://api.injahow.cn/bparse/",
      request_type: "auto",
      format: "mp4",
      host_key: "0",
      replace_force: "0",
      download_type: "web",
      rpc_domain: "http://localhost",
      rpc_port: "16800",
      rpc_token: "",
      rpc_path: "/jsonrpc",
      rpc_dir: "",
      aria2c_connection_level: "min",
      aria2c_addition_parameters: "",
      ariang_host: "http://ariang.injahow.cn/",
      ariang_dir: "",
      download_api: "http://localhost:16880/download",
      download_api_secret: "",
      video_quality: "0",
      show_motrix_confirm: "0",
      show_motrix_confirm_open_auto: "0",
      filter_promotion: "0",
      filter_keywords: ""
    },
    default_config = Object.assign({}, config_config),
    hostMap = {
      local: (null === (_document$head$innerH = document.head.innerHTML.match(/up[\w-]+\.bilivideo\.com/)) || void 0 === _document$head$innerH ? void 0 : _document$head$innerH[0]) || "未发现本地CDN",
      bd: "upos-sz-mirrorbd.bilivideo.com",
      ks3: "upos-sz-mirrorks3.bilivideo.com",
      ks3b: "upos-sz-mirrorks3b.bilivideo.com",
      ks3c: "upos-sz-mirrorks3c.bilivideo.com",
      ks32: "upos-sz-mirrorks32.bilivideo.com",
      kodo: "upos-sz-mirrorkodo.bilivideo.com",
      kodob: "upos-sz-mirrorkodob.bilivideo.com",
      cos: "upos-sz-mirrorcos.bilivideo.com",
      cosb: "upos-sz-mirrorcosb.bilivideo.com",
      bos: "upos-sz-mirrorbos.bilivideo.com",
      wcs: "upos-sz-mirrorwcs.bilivideo.com",
      wcsb: "upos-sz-mirrorwcsb.bilivideo.com",
      hw: "upos-sz-mirrorhw.bilivideo.com",
      hwb: "upos-sz-mirrorhwb.bilivideo.com",
      upbda2: "upos-sz-upcdnbda2.bilivideo.com",
      upws: "upos-sz-upcdnws.bilivideo.com",
      uptx: "upos-sz-upcdntx.bilivideo.com",
      uphw: "upos-sz-upcdnhw.bilivideo.com",
      js: "upos-tf-all-js.bilivideo.com",
      hk: "cn-hk-eq-bcache-01.bilivideo.com",
      akamai: "upos-hz-mirrorakam.akamaized.net"
    },
    videoQualityMap = {
      127: "8K 超高清",
      120: "4K 超高清",
      116: "1080P 60帧",
      112: "1080P 高码率",
      80: "1080P 高清",
      74: "720P 60帧",
      64: "720P 准高清",
      48: "720P 高清(MP4)",
      32: "480P 清晰",
      16: "360P 流畅"
    },
    config_functions = {
      save_config: function save_config() {
        var old_config;
        try {
          old_config = JSON.parse(store.get("config_str"));
        } catch (err) {
          old_config = {};
        } finally {
          old_config = _objectSpread(_objectSpread({}, default_config), old_config);
        }
        var config_str = {};
        for (var key in default_config) config_config[key] !== default_config[key] && (config_str[key] = config_config[key]);
        store.set("config_str", JSON.stringify(config_str));
        config_config.host_key !== old_config.host_key && check.refresh(), config_config.rpc_domain !== old_config.rpc_domain && (config_config.rpc_domain.match("https://") || config_config.rpc_domain.match(/(localhost|127\.0\.0\.1)/) || MessageBox_alert("检测到当前RPC不是localhost本地接口，即将跳转到AriaNg网页控制台页面；请查看控制台RPC接口参数是否正确，第一次加载可能较慢请耐心等待；配置好后即可使用脚本进行远程下载，使用期间不用关闭AriaNg页面！", function () {
          Download.open_ariang({
            domain: config_config.rpc_domain,
            port: config_config.rpc_port,
            path: config_config.rpc_path,
            token: config_config.rpc_token
          });
        }));
        $("#bp_config").hide(), $("#bp_config").css("opacity", 0), scroll_scroll.show();
      },
      reset_config: function reset_config() {
        for (var key in default_config) config_config[key] = default_config[key], $("#".concat(key)).val(default_config[key]);
      },
      show_login: function show_login() {
        auth.login("1");
      },
      show_login_2: function show_login_2() {
        auth.login("0");
      },
      show_logout: function show_logout() {
        auth.logout();
      },
      show_login_help: function show_login_help() {
        MessageBox_confirm("进行授权之后在远程请求时拥有用户账号原有的权限，例如能够获取用户已经付费或承包的番剧，是否需要授权？", function () {
          auth.login();
        });
      },
      ariang_sync_config: function ariang_sync_config() {
        var rpc = {
            domain: config_config.rpc_domain,
            port: config_config.rpc_port,
            path: config_config.rpc_path,
            token: config_config.rpc_token
          },
          ariang_window = window.bp_aria2_window;
        if (ariang_window && !ariang_window.closed) return ariang_window.location.href = config_config.ariang_host + Download.get_ariang_set_hash(rpc), void message_Message_info("已同步配置");
        Download.open_ariang(rpc);
      }
    };
  function get_filter_keywords() {
    return (config_config.filter_keywords || "").split(/[,，\n]/).map(function (s) {
      return s.trim();
    }).filter(Boolean);
  }
  function is_promotion_title(title) {
    if ("1" !== config_config.filter_promotion) return false;
    var t = String(null == title ? "" : title),
      kws = get_filter_keywords();
    for (var i = 0; i < kws.length; i++) if (t.indexOf(kws[i]) !== -1) return true;
    return false;
  }
  function getCookie(cookieName) {
    for (var cookieList = document.cookie.split(";"), i = 0; i < cookieList.length; ++i) {
      var arr = cookieList[i].split("=");
      if (cookieName === arr[0].trim()) return arr[1];
    }
    return null;
  }
  function auth_defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  var Auth = class Auth {
      constructor() {
        this.auth_clicked = !1, this.auth_window = null, this.TV_KEY = "4409e2ce8ffd12b8", this.TV_SEC = "59b43e04ad6965f34319062b478f83dd";
      }
      hasAuth() {
        return store.get("auth_id") && store.get("auth_sec");
      }
      checkLoginStatus() {
        var _this = this,
          _ref = [store.get("auth_id"), store.get("auth_sec"), store.get("access_key"), store.get("auth_time") || 0],
          auth_id = _ref[0],
          auth_sec = _ref[1],
          access_key = _ref[2],
          auth_time = _ref[3];
        if (auth_id || auth_sec) {
          if (config_config.base_api !== store.get("pre_base_api") || Date.now() - parseInt(auth_time) > 86400000) {
            if (!access_key) return message_Message_info("授权已失效"), void this.reLogin();
            ajax({
              url: "https://passport.bilibili.com/api/oauth?access_key=".concat(access_key),
              type: "GET",
              dataType: "json"
            }).then(function (res) {
              if (res.code) return message_Message_info("授权已过期，准备重新授权"), void _this.reLogin();
              store.set("auth_time", Date.now()), ajax({
                url: "".concat(config_config.base_api).concat(config_config.base_api.endsWith("/") ? "" : "/", "auth/?act=check&auth_id=").concat(auth_id, "&auth_sec=").concat(auth_sec),
                type: "GET",
                dataType: "json"
              }).then(function (res) {
                res.code && (message_Message_info("检查失败，准备重新授权"), _this.reLogin());
              });
            });
          }
          store.set("pre_base_api", config_config.base_api);
        }
      }
      _login(resolve) {
        var _this2 = this;
        this.auth_clicked ? message_Message_info("操作进行中，请勿重复点击") : (this.auth_clicked = !0, ajax({
          url: "https://passport.bilibili.com/x/passport-tv-login/qrcode/auth_code",
          type: "POST",
          data: getSignData({
            appkey: this.TV_KEY,
            csrf: getCookie("bili_jct") || "",
            local_id: "0",
            ts: Date.now()
          }, this.TV_SEC)
        }).then(resolve).catch(function () {
          return _this2.auth_clicked = !1;
        }));
      }
      login() {
        var do_login = "1" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "1") ? this.loginApp.bind(this) : this.loginWeb.bind(this);
        store.get("auth_id") ? MessageBox_confirm("发现授权记录，是否重新授权？", do_login) : do_login();
      }
      reLogin() {
        this.logout(), store.set("auth_time", "0"), this.loginApp();
      }
      loginApp() {
        var _this3 = this;
        this._login(function (res) {
          if (res && !res.code) {
            var _res$data = res.data,
              url = _res$data.url,
              auth_code = _res$data.auth_code,
              is_login = 0,
              box = MessageBox_alert("<p>请使用<a href=\"https://app.bilibili.com/\" target=\"_blank\">哔哩哔哩客户端</a>扫码登录</p><div id=\"login_qrcode\"></div>", function () {
                is_login || message_Message_info("登陆失败！"), clearInterval(timer), _this3.auth_clicked = !1;
              });
            new QRCode(document.getElementById("login_qrcode"), url);
            var timer = setInterval(function () {
              _ajax({
                url: "https://passport.bilibili.com/x/passport-tv-login/qrcode/poll",
                type: "POST",
                data: getSignData({
                  appkey: _this3.TV_KEY,
                  auth_code: auth_code,
                  csrf: getCookie("bili_jct") || "",
                  local_id: "0",
                  ts: Date.now().toString()
                }, _this3.TV_SEC)
              }).then(function (res) {
                !res.code && res.data ? (console.log("login success"), is_login = 1, _this3.doAuth(res.data), box.affirm()) : 86038 === res.code && box.affirm();
              });
            }, 3000);
          }
        });
      }
      loginWeb() {
        var _this4 = this;
        this._login(function (res) {
          if (res && !res.code) {
            var _res$data2 = res.data,
              url = _res$data2.url,
              auth_code = _res$data2.auth_code;
            _this4.auth_window = window.open(url);
            var is_login = 0,
              timer = setInterval(function () {
                if (!_this4.auth_window || _this4.auth_window.closed) return clearInterval(timer), _this4.auth_clicked = !1, void (is_login || message_Message_info("登陆失败！"));
                _ajax({
                  url: "https://passport.bilibili.com/x/passport-tv-login/qrcode/poll",
                  type: "POST",
                  data: getSignData({
                    appkey: _this4.TV_KEY,
                    auth_code: auth_code,
                    csrf: getCookie("bili_jct") || "",
                    local_id: "0",
                    ts: Date.now().toString()
                  }, _this4.TV_SEC)
                }).then(function (res) {
                  !res.code && res.data ? (console.log("login success"), _this4.doAuth(res.data), is_login = 1, _this4.auth_window.close()) : 86038 === res.code && _this4.auth_window.close();
                }).catch(function () {
                  return _this4.auth_window.close();
                });
              }, 3000);
          }
        });
      }
      logout() {
        var _this5 = this;
        if (store.get("auth_id")) {
          if (this.auth_clicked) message_Message_info("操作进行中，请勿重复点击");else {
            var _ref2 = [store.get("auth_id"), store.get("auth_sec")],
              auth_id = _ref2[0],
              auth_sec = _ref2[1];
            ajax({
              url: "".concat(config_config.base_api).concat(config_config.base_api.endsWith("/") ? "" : "/", "auth/?act=logout&auth_id=").concat(auth_id, "&auth_sec=").concat(auth_sec),
              type: "GET",
              dataType: "json"
            }).then(function (res) {
              res.code ? message_Message_warning("注销失败") : (message_Message_success("注销成功"), store.set("auth_id", ""), store.set("auth_sec", ""), store.set("auth_time", "0"), store.set("access_key", ""), $("#auth").val("0"));
            }).finally(function () {
              return _this5.auth_clicked = !1;
            });
          }
        } else MessageBox_alert("没有发现授权记录");
      }
      doAuth(param) {
        var _this6 = this;
        this.auth_window && !this.auth_window.closed && (this.auth_window.close(), this.auth_window = null), ajax({
          url: "".concat(config_config.base_api).concat(config_config.base_api.endsWith("/") ? "" : "/", "auth/?act=login&").concat(Object.entries({
            auth_id: store.get("auth_id"),
            auth_sec: store.get("auth_sec")
          }).map(function (e) {
            return "".concat(e[0], "=").concat(e[1]);
          }).join("&")),
          type: "POST",
          contentType: "application/json",
          data: JSON.stringify(_objectSpread({}, param))
        }).then(function (res) {
          res.code ? message_Message_warning("授权失败") : (message_Message_success("授权成功"), res.auth_id && res.auth_sec && (store.set("auth_id", res.auth_id), store.set("auth_sec", res.auth_sec)), store.set("access_key", param.access_token), store.set("auth_time", Date.now()), $("#auth").val("1"));
        }).finally(function () {
          return _this6.auth_clicked = !1;
        });
      }
    },
    auth = new Auth();
  var event_event = {
      setting_btn: function setting_btn() {
        for (var key in user.lazyInit(!0), config_config) $("#".concat(key)).val(config_config[key]);
        $("#auth").val(auth.hasAuth() ? "1" : "0"), $("#bp_config").show(), $("#bp_config").animate({
          opacity: "1"
        }, 300), scroll_scroll.hide();
      }
    };
  var Main = class Main {
      constructor() {
        console.log("\n".concat(" %c bilibili视频下载_优化版 v", "3.3.0", " ").concat("90a6675", " %c ", "\n", "\n"), "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;");
      }
      init() {
        var root_div = document.createElement("div");
        root_div.id = "bp_root", document.body.append(root_div), function initConfig(el) {
          var options = "<option value=\"0\">关闭</option>";
          for (var k in hostMap) options += "<option value=\"".concat(k, "\">").concat(hostMap[k], "</option>");
          for (var _k in config = config.replace("{{host_key_options}}", options), options = "<option value=\"0\">与播放器相同</option>", videoQualityMap) options += "<option value=\"".concat(_k, "\">").concat(videoQualityMap[_k], "</option>");
          config = config.replace("{{video_quality_options}}", options), el && $(el)[0] ? $(el).append(config) : $("body").append(config);
          var config_str = store.get("config_str");
          try {
            var old_config = JSON.parse(config_str);
            for (var key in old_config) Object.hasOwnProperty.call(config_config, key) && (config_config[key] = old_config[key]);
          } catch (_unused) {
            console.log("初始化脚本配置"), store.set("config_str", "{}");
          }
          var _loop = function _loop(_key3) {
            $("#".concat(_key3)).on("input", function (e) {
              config_config[_key3] = e.delegateTarget.value;
            });
          };
          for (var _key3 in config_config) _loop(_key3);
          for (var _k2 in config_functions) {
            var e = $("#".concat(_k2))[0];
            e && (e.onclick = config_functions[_k2]);
          }
          for (var _key4 in config_config) $("#".concat(_key4)).val(config_config[_key4]);
          window.onbeforeunload = function () {
            var bp_aria2_window = window.bp_aria2_window;
            bp_aria2_window && !bp_aria2_window.closed && bp_aria2_window.close();
          };
        }("#".concat(root_div.id)), function initMessage(el) {
          el && $(el)[0] ? $(el).append(message) : $("body").append(message);
        }("#".concat(root_div.id)), user.lazyInit(), auth.checkLoginStatus(), check.refresh();
        // 移除 B 站「限流/充电」遮罩（原 initToolbar 末尾逻辑，工具栏模块删除后在此补回）
        // 遮罩通常在页面异步渲染后才插入，故 500ms 轮询重试，命中即停，最多 15 秒。
        !function removeLimitMask(retry) {
          var mask = document.getElementById("limit-mask-wall");
          if (mask && mask.parentNode) {
            mask.parentNode.removeChild(mask);
            return;
          }
          retry > 0 && setTimeout(function () {
            removeLimitMask(retry - 1);
          }, 500);
        }(30);
      }
      run() {
        this.init(), window.bpd = event_event, Object.entries(event_event).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];
          return $("body").on("click", "#".concat(k), v);
        }), $("body").on("click", "a.router-link-active", function () {
          this !== $("li[class=\"on\"]").find("a")[0] && check.refresh();
        }), $("body").on("click", "li.ep-item", function () {
          check.refresh();
        }), $("body").on("click", "button.bilibili-player-iconfont-next", function () {
          check.refresh();
        }), $("body").on("click", "li.bui-select-item", function () {
          check.refresh();
        }), $("body").on("click", ".rec-list", function () {
          check.refresh();
        }), $("body").on("click", ".bilibili-player-ending-panel-box-videos", function () {
          check.refresh();
        }), setInterval(function () {
          check.href !== location.href && check.refresh();
        }, 500), setInterval(function () {
          var vb = video.base();
          check.aid === vb.aid() && check.cid === vb.cid() && check.q === video.get_quality().q || check.refresh();
        }, 1500);
        start_promotion_filter();
      }
    },
    main = Main;
  /* ============================================================
   * 悬浮交互面板模块（原生 DOM，无第三方库）
   * 依赖同作用域内的：store / config_config / default_config /
   *   config_functions / event_event / video / videoQualityMap / prettyBytes
   * 推送目标复用脚本原生 RPC 通道，无进度队列 UI
   * ============================================================ */
  function initFloatingPanel() {
    if (window.__bpFloatingPanelInited) return;
    window.__bpFloatingPanelInited = true;

    var state = {
      pos: null,
      size: null,
      launcherPos: null,
      pushTarget: "",
      quality: "",
      qualitySig: "",
      partsSig: "",
      checkedParts: {}
    };
    // 推送目标预设（写入现有 RPC 配置，复用脚本原生推送通道）
    // aria2 与 AriaNgGUI 已合并（同为 6800 端口 RPC）；浏览器直下已取消，面板始终走 RPC 推送
    var PUSH_PRESETS = {
      motrix: { label: "Motrix", domain: "http://localhost", port: "16800", path: "/jsonrpc", dtype: "rpc", sub: "端口 16800" },
      aria2:  { label: "AriaNgGUI", domain: "http://localhost", port: "6800", path: "/jsonrpc", dtype: "rpc", sub: "端口 6800" }
    };
    function guessPushTarget() {
      var p = String(config_config.rpc_port || "");
      if (/16800/.test(p)) return "motrix";
      return "aria2";
    }
    try { state.pos = JSON.parse(store.get("panel_pos") || "null"); } catch (e) { state.pos = null; }
    try { state.size = JSON.parse(store.get("panel_size") || "null"); } catch (e) { state.size = null; }
    try { state.launcherPos = JSON.parse(store.get("launcher_pos") || "null"); } catch (e) { state.launcherPos = null; }
    try { state.pushTarget = store.get("panel_push_target") || ""; } catch (e) {}
    // 以实际 RPC 端口为准校正高亮卡片，避免「选的 aria2 实际却推到 Motrix 端口」导致链接发错软件
    if (!PUSH_PRESETS[state.pushTarget] || PUSH_PRESETS[state.pushTarget].port !== String(config_config.rpc_port || "")) {
      state.pushTarget = guessPushTarget();
    }

    function esc(s) {
      return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
      });
    }
    // 读取油猴元数据 @version（改 @version 后标题版号自动同步，无需手动改两处）
    function getScriptVersion() {
      var v = "";
      try {
        if (typeof GM_info !== "undefined" && GM_info && GM_info.script && GM_info.script.version) v = GM_info.script.version;
      } catch (e) {}
      try {
        if (!v && typeof GM !== "undefined" && GM && GM.info && GM.info.script && GM.info.script.version) v = GM.info.script.version;
      } catch (e) {}
      // 兜底：从注入页面的脚本元数据头解析
      if (!v) {
        try {
          var ss = document.scripts || document.getElementsByTagName("script");
          for (var i = 0; i < ss.length; i++) {
            var t = ss[i].textContent || "";
            if (t.indexOf("==UserScript==") > -1) {
              var m = /@version\s+([^\r\n]+)/.exec(t);
              if (m) { v = m[1].replace(/^\s+|\s+$/g, ""); break; }
            }
          }
        } catch (e) {}
      }
      return String(v || "").replace(/^\s+|\s+$/g, "");
    }
    function persistConfig() {
      var config_str = {};
      for (var key in default_config) {
        if (config_config[key] !== default_config[key]) config_str[key] = config_config[key];
      }
      store.set("config_str", JSON.stringify(config_str));
    }

    /* ---------- 样式 ---------- */
    var css = [
      '#bp_float_panel{position:fixed;right:16px;top:120px;width:320px;height:560px;min-width:240px;min-height:160px;display:flex;flex-direction:column;font-family:-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;font-size:13px;color:#222;background:#fff;border-radius:12px;box-shadow:0 6px 24px rgba(0,0,0,.18);z-index:19999;overflow:hidden;border:1px solid #e3e5e7;user-select:none}',
      '#bp_float_panel.bp-fp-hidden{display:none}',
      '#bp_float_panel.bp-fp-collapsed{height:auto!important;min-height:0!important}',
      '.bp-fp-head{flex:none;display:flex;align-items:center;height:42px;padding:0 10px;background:linear-gradient(90deg,#fb7299,#fc8bab);color:#fff;cursor:move}',
      '.bp-fp-title{flex:1;font-weight:600;font-size:14px;display:flex;align-items:center;gap:6px}',
      '.bp-fp-title .bp-fp-dot{width:8px;height:8px;background:#fff;border-radius:50%;display:inline-block}',
      '.bp-fp-ver{font-size:11px;font-weight:400;opacity:.85;letter-spacing:.3px}',
      '.bp-fp-btn{width:24px;height:24px;border:0;background:rgba(255,255,255,.18);color:#fff;border-radius:6px;cursor:pointer;font-size:14px;line-height:24px;text-align:center;margin-left:4px}',
      '.bp-fp-btn:hover{background:rgba(255,255,255,.34)}',
      '.bp-fp-body{flex:1;min-height:0;overflow-y:auto}',
      '.bp-fp-collapsed .bp-fp-body{display:none}',
      '.bp-fp-sec{padding:10px 12px;border-bottom:1px solid #f0f1f2}',
      '.bp-fp-sec:last-child{border-bottom:0}',
      '.bp-fp-sec-t{font-weight:600;color:#fb7299;margin-bottom:8px;font-size:12px;letter-spacing:.5px}',
      '.bp-fp-inline{display:flex;align-items:center;gap:8px}',
      '.bp-fp-inline .bp-fp-sec-t{margin:0;white-space:nowrap;flex:0 0 auto}',
      '.bp-fp-inline .bp-fp-sel{flex:1;min-width:0;width:auto}',
      '.bp-fp-inline .bp-fp-push-grid{flex:1;min-width:0;display:flex;gap:5px;align-items:stretch}',
      '.bp-fp-inline .bp-fp-push-card{flex:1;min-width:0;padding:4px 3px;font-size:11px;line-height:1.25;display:flex;flex-direction:column;justify-content:center;overflow-wrap:anywhere}',
      '.bp-fp-inline .bp-fp-push-card small{font-size:9px;line-height:1.35}',
      '.bp-fp-inline .bp-fp-fold-b{flex:1;min-width:0;display:flex;align-items:center}',
      '.bp-fp-foldable .bp-fp-sec-t{cursor:pointer;-webkit-user-select:none;user-select:none}',
      '.bp-fp-foldable .bp-fp-sec-t:hover{color:#ff8fb0}',
      '.bp-fp-caret{display:inline-block;margin-left:5px;font-size:10px;line-height:1;opacity:.8;transition:transform .15s}',
      '.bp-fp-folded .bp-fp-caret{transform:rotate(-90deg)}',
      '.bp-fp-folded .bp-fp-fold-b{display:none!important}',
      '.bp-fp-folded .bp-fp-push-grid{display:none!important}',
      '.bp-fp-info-row{display:flex;margin:3px 0;line-height:1.5}',
      '.bp-fp-info-k{color:#909399;width:52px;flex:none}',
      '.bp-fp-info-v{flex:1;word-break:break-all;color:#303133}',
      '.bp-fp-title-link{display:block;color:#303133;text-decoration:none;cursor:pointer;transition:color .15s}',
      '.bp-fp-title-link:hover{color:#fb7299;text-decoration:underline}',
      '.bp-fp-title-link.bp-fp-link-off{color:#c0c4cc;cursor:default;text-decoration:none}',
      '.bp-fp-empty{color:#c0c4cc;text-align:center;padding:12px 0;font-size:12px;grid-column:1/-1}',
      '.bp-fp-sel{width:100%;padding:5px 6px;border:1px solid #e3e5e7;border-radius:6px;font-size:12px;color:#303133;background:#fff;cursor:pointer;outline:0}',
      '.bp-fp-sel:focus{border-color:#fb7299}',
      '.bp-fp-hint{font-size:11px;color:#a0a4ab;margin-top:5px;line-height:1.4}',
      '.bp-fp-parts{max-height:200px;overflow-y:auto;border:1px solid #eef0f2;border-radius:6px;padding:4px 4px;background:#fdfdfd;display:grid;grid-template-columns:1fr 1fr;gap:2px 6px;align-content:start}',
      '.bp-fp-part{display:flex;align-items:center;gap:5px;padding:3px 6px;cursor:pointer;font-size:12px;line-height:1.4;color:#303133;border-radius:4px;min-width:0}',
      '.bp-fp-part:hover{background:#fff5f8}',
      '.bp-fp-part input{margin:0;accent-color:#fb7299;flex:none;cursor:pointer}',
      '.bp-fp-part span{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
      '.bp-fp-part-ops{display:flex;gap:5px;margin-bottom:6px}',
      '.bp-fp-mini{flex:1;border:1px solid #e3e5e7;background:#fff;border-radius:5px;padding:3px 0;cursor:pointer;color:#606266;font-size:11px}',
      '.bp-fp-mini:hover{color:#fb7299;border-color:#fb7299}',
      '.bp-fp-dl{border:0;background:linear-gradient(90deg,#fb7299,#fc8bab);color:#fff;border-radius:6px;padding:7px 0;width:100%;cursor:pointer;font-size:12px;font-weight:600;margin-top:6px}',
      '.bp-fp-dl:hover{filter:brightness(1.05)}',
      '.bp-fp-resizer{position:absolute;right:2px;bottom:2px;width:16px;height:16px;cursor:nwse-resize;z-index:5;background:repeating-linear-gradient(135deg,transparent 0,transparent 3px,#c0c4cc 3px,#c0c4cc 5px,transparent 5px,transparent 7px);opacity:.75}',
      '.bp-fp-collapsed .bp-fp-resizer{display:none}',
      '.bp-fp-push-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:6px}',
      '.bp-fp-push-card{border:1px solid #e3e5e7;background:#fafafa;border-radius:6px;padding:7px 4px;cursor:pointer;text-align:center;color:#606266;font-size:12px;transition:all .15s;line-height:1.35}',
      '.bp-fp-push-card:hover{border-color:#fb7299;color:#fb7299}',
      '.bp-fp-push-card.on{background:#fb7299;color:#fff;border-color:#fb7299}',
      '.bp-fp-push-card small{display:block;font-size:10px;opacity:.85;font-weight:400}',
      '.bp-fp-push-row{display:flex;gap:6px;margin-top:8px;align-items:center}',
      '.bp-fp-push-row label{color:#909399;font-size:11px;flex:none}',
      '.bp-fp-input{flex:1;min-width:0;padding:5px 6px;border:1px solid #e3e5e7;border-radius:6px;font-size:12px;color:#303133;outline:0}',
      '.bp-fp-input:focus{border-color:#fb7299}',
      '.bp-fp-push-status{margin-top:8px;padding:6px 8px;background:#f7f8fa;border-radius:6px;font-size:11px;color:#606266;line-height:1.5;word-break:break-all}',
      '#bp_config{z-index:29998!important}',
      '#bp_float_launcher{position:fixed;right:16px;top:120px;width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#fb7299,#fc8bab);color:#fff;border:0;box-shadow:0 4px 14px rgba(251,114,153,.5);z-index:19999;cursor:move;font-size:20px;display:none;touch-action:none}'
    ].join("\n");
    var styleEl = document.createElement("style");
    styleEl.id = "bp_float_panel_style";
    styleEl.textContent = css;
    document.head.appendChild(styleEl);

    /* ---------- 主面板 DOM ---------- */
    var root = document.createElement("div");
    root.id = "bp_float_panel";
    root.innerHTML =
      '<div class="bp-fp-head">' +
        '<div class="bp-fp-title"><span class="bp-fp-dot"></span>B站下载助手' + (function () { var v = getScriptVersion(); return v ? '<span class="bp-fp-ver">v' + esc(v) + '</span>' : ''; })() + '</div>' +
        '<button class="bp-fp-btn" id="bp_fp_min" title="折叠面板">－</button>' +
        '<button class="bp-fp-btn" id="bp_fp_close" title="关闭">×</button>' +
      '</div>' +
      '<div class="bp-fp-body">' +
        '<div class="bp-fp-sec">' +
          '<div class="bp-fp-info-row"><span class="bp-fp-info-k">标题</span><a class="bp-fp-info-v bp-fp-title-link" id="bp_fp_title" href="#" target="_blank" rel="noopener noreferrer">加载中…</a></div>' +
        '</div>' +
        '<div class="bp-fp-sec">' +
          '<div class="bp-fp-part-ops">' +
            '<button class="bp-fp-mini" id="bp_fp_part_all">全选</button>' +
            '<button class="bp-fp-mini" id="bp_fp_part_none">全不选</button>' +
            '<button class="bp-fp-mini" id="bp_fp_part_invert">反选</button>' +
          '</div>' +
          '<div class="bp-fp-parts" id="bp_fp_parts"></div>' +
        '</div>' +
        '<div class="bp-fp-sec bp-fp-foldable">' +
          '<div class="bp-fp-inline"><div class="bp-fp-sec-t bp-fp-fold-h" title="点击折叠 / 展开">📤 下载推送目标<span class="bp-fp-caret">▾</span></div>' +
          '<div class="bp-fp-push-grid" id="bp_fp_push_grid"></div></div>' +
          '<div class="bp-fp-fold-b">' +
          '<div class="bp-fp-push-row"><label>配置RPC</label><input class="bp-fp-input" id="bp_fp_rpc_url" placeholder="http://127.0.0.1:16800/jsonrpc"/></div>' +
          '<div class="bp-fp-push-row"><label>保存路径</label><input class="bp-fp-input" id="bp_fp_rpc_dir" placeholder="留空 = 下载器默认目录"/></div>' +
          '<div class="bp-fp-hint">填完整地址，改完即生效；端口决定目标：16800 = Motrix，6800 = aria2。保存路径留空则用下载器默认目录（Windows 如 D:\\Downloads，NAS 如 /downloads）。</div>' +
          '<div class="bp-fp-push-status" id="bp_fp_push_status"></div>' +
          '</div>' +
        '</div>' +
        '<div class="bp-fp-sec bp-fp-foldable">' +
          '<div class="bp-fp-inline"><div class="bp-fp-sec-t bp-fp-fold-h" title="点击折叠 / 展开">🎯 下载清晰度<span class="bp-fp-caret">▾</span></div>' +
          '<div class="bp-fp-fold-b"><select class="bp-fp-sel" id="bp_fp_quality_sel"></select></div></div>' +
          '<div class="bp-fp-hint bp-fp-fold-b">选集下载会立即按此清晰度生效；若使用脚本其它下载入口，需重新请求地址。</div>' +
        '</div>' +
        '<div class="bp-fp-sec bp-fp-foldable">' +
          '<div class="bp-fp-inline"><div class="bp-fp-sec-t bp-fp-fold-h" title="点击折叠 / 展开">🎬 下载视频格式<span class="bp-fp-caret">▾</span></div>' +
          '<div class="bp-fp-fold-b"><select class="bp-fp-sel" id="bp_fp_format_sel">' +
            '<option value="mp4">MP4（默认，不可选清晰度）</option>' +
            '<option value="flv">FLV</option>' +
            '<option value="dash">DASH（视频+音频分离）</option>' +
          '</select></div></div>' +
          '<div class="bp-fp-hint bp-fp-fold-b">选集下载按此格式立即生效；下载音频需选 DASH。</div>' +
        '</div>' +
        '<div class="bp-fp-sec">' +
          '<button class="bp-fp-dl" id="bp_fp_part_download">⬇ 批量下载</button>' +
        '</div>' +
      '</div>' +
      '<div class="bp-fp-resizer" id="bp_fp_resizer" title="拖动调整面板大小"></div>';
    document.body.appendChild(root);

    /* ---------- 重新唤出的悬浮球（可自由拖动） ---------- */
    var launcher = document.createElement("button");
    launcher.id = "bp_float_launcher";
    launcher.title = "可自由拖动，点击打开B站下载助手面板";
    launcher.textContent = "⇩";
    document.body.appendChild(launcher);

    var El = {
      title: document.getElementById("bp_fp_title"),
      qualitySel: document.getElementById("bp_fp_quality_sel"),
      formatSel: document.getElementById("bp_fp_format_sel"),
      parts: document.getElementById("bp_fp_parts"),
      partAll: document.getElementById("bp_fp_part_all"),
      partNone: document.getElementById("bp_fp_part_none"),
      partInvert: document.getElementById("bp_fp_part_invert"),
      partDownload: document.getElementById("bp_fp_part_download"),
      resizer: document.getElementById("bp_fp_resizer"),
      pushGrid: document.getElementById("bp_fp_push_grid"),
      rpcUrl: document.getElementById("bp_fp_rpc_url"),
      rpcDir: document.getElementById("bp_fp_rpc_dir"),
      pushStatus: document.getElementById("bp_fp_push_status"),
      min: document.getElementById("bp_fp_min"),
      close: document.getElementById("bp_fp_close")
    };

    /* ---------- 应用已保存的尺寸 ---------- */
    if (state.size && typeof state.size.w === "number" && typeof state.size.h === "number") {
      root.style.width = Math.max(240, Math.min(state.size.w, window.innerWidth - 20)) + "px";
      root.style.height = Math.max(160, Math.min(state.size.h, window.innerHeight - 20)) + "px";
    }

    /* ---------- 应用已保存的面板位置 ---------- */
    if (state.pos && typeof state.pos.x === "number") {
      root.style.left = Math.max(0, Math.min(state.pos.x, window.innerWidth - root.offsetWidth)) + "px";
      root.style.top = Math.max(0, Math.min(state.pos.y, window.innerHeight - 60)) + "px";
      root.style.right = "auto";
    }

    /* ---------- 应用已保存的悬浮球位置 ---------- */
    if (state.launcherPos && typeof state.launcherPos.x === "number" && typeof state.launcherPos.y === "number") {
      launcher.style.left = Math.max(0, Math.min(state.launcherPos.x, window.innerWidth - 48)) + "px";
      launcher.style.top = Math.max(0, Math.min(state.launcherPos.y, window.innerHeight - 48)) + "px";
      launcher.style.right = "auto";
    }

    /* ---------- 主面板拖拽移动 ---------- */
    var dragging = false, dx = 0, dy = 0;
    var head = root.querySelector(".bp-fp-head");
    head.addEventListener("mousedown", function (e) {
      if (e.target.className.indexOf("bp-fp-btn") > -1) return;
      dragging = true;
      var rect = root.getBoundingClientRect();
      dx = e.clientX - rect.left;
      dy = e.clientY - rect.top;
      root.style.left = rect.left + "px";
      root.style.top = rect.top + "px";
      root.style.right = "auto";
      e.preventDefault();
    });
    document.addEventListener("mousemove", function (e) {
      if (!dragging) return;
      var x = Math.max(0, Math.min(e.clientX - dx, window.innerWidth - root.offsetWidth));
      var y = Math.max(0, Math.min(e.clientY - dy, window.innerHeight - 42));
      root.style.left = x + "px";
      root.style.top = y + "px";
    });
    document.addEventListener("mouseup", function () {
      if (!dragging) return;
      dragging = false;
      try {
        store.set("panel_pos", JSON.stringify({ x: parseFloat(root.style.left) || 0, y: parseFloat(root.style.top) || 0 }));
      } catch (e) {}
    });

    /* ---------- 拖动调整高宽 ---------- */
    var resizing = false, rsx = 0, rsy = 0, rsw = 0, rsh = 0;
    El.resizer.addEventListener("mousedown", function (e) {
      resizing = true;
      var rect = root.getBoundingClientRect();
      rsx = e.clientX; rsy = e.clientY; rsw = rect.width; rsh = rect.height;
      e.preventDefault();
      e.stopPropagation();
    });
    document.addEventListener("mousemove", function (e) {
      if (!resizing) return;
      var w = Math.max(240, Math.min(rsw + e.clientX - rsx, window.innerWidth - 20));
      var h = Math.max(160, Math.min(rsh + e.clientY - rsy, window.innerHeight - 20));
      root.style.width = w + "px";
      root.style.height = h + "px";
    });
    document.addEventListener("mouseup", function () {
      if (!resizing) return;
      resizing = false;
      try {
        store.set("panel_size", JSON.stringify({ w: root.offsetWidth, h: root.offsetHeight }));
      } catch (e) {}
    });

    /* ---------- 折叠 / 关闭 / 唤出 ---------- */
    El.min.addEventListener("click", function () {
      var collapsed = root.classList.toggle("bp-fp-collapsed");
      El.min.textContent = collapsed ? "▢" : "－";
      El.min.title = collapsed ? "展开面板" : "折叠面板";
      if (collapsed) {
        // 记住展开时的高度；内联为空说明用的是 CSS 默认高度，展开时也还原为空
        root._savedH = root.style.height;
        root.style.height = "";
      } else {
        root.style.height = root._savedH || "";
        // 展开后若超出视口就收敛，避免标题栏拖不回来、底部按钮点不到
        var maxH = window.innerHeight - 20;
        if (root.getBoundingClientRect().height > maxH) root.style.height = Math.max(160, maxH) + "px";
      }
    });
    El.close.addEventListener("click", function () {
      root.classList.add("bp-fp-hidden");
      launcher.style.display = "block";
      // 关闭时：若之前拖动过悬浮球则用其记忆位置，否则落在面板当前位置
      var px, py;
      if (state.launcherPos && typeof state.launcherPos.x === "number") {
        px = state.launcherPos.x; py = state.launcherPos.y;
      } else {
        var rect = root.getBoundingClientRect();
        px = rect.left; py = rect.top;
      }
      launcher.style.left = Math.max(0, Math.min(px, window.innerWidth - 48)) + "px";
      launcher.style.top = Math.max(0, Math.min(py, window.innerHeight - 48)) + "px";
      launcher.style.right = "auto";
    });

    /* ---------- 悬浮球拖拽移动（关闭后同样可自由移动） ---------- */
    var lDragging = false, lMoved = false, lsx = 0, lsy = 0, ldx = 0, ldy = 0;
    launcher.addEventListener("mousedown", function (e) {
      if (e.button !== 0) return;
      lDragging = true;
      lMoved = false;
      lsx = e.clientX; lsy = e.clientY;
      var rect = launcher.getBoundingClientRect();
      ldx = e.clientX - rect.left;
      ldy = e.clientY - rect.top;
      launcher.style.left = rect.left + "px";
      launcher.style.top = rect.top + "px";
      launcher.style.right = "auto";
      e.preventDefault();
    });
    document.addEventListener("mousemove", function (e) {
      if (!lDragging) return;
      if (Math.abs(e.clientX - lsx) > 3 || Math.abs(e.clientY - lsy) > 3) lMoved = true;
      var x = Math.max(0, Math.min(e.clientX - ldx, window.innerWidth - 48));
      var y = Math.max(0, Math.min(e.clientY - ldy, window.innerHeight - 48));
      launcher.style.left = x + "px";
      launcher.style.top = y + "px";
    });
    document.addEventListener("mouseup", function () {
      if (!lDragging) return;
      lDragging = false;
      state.launcherPos = { x: parseFloat(launcher.style.left) || 0, y: parseFloat(launcher.style.top) || 0 };
      try { store.set("launcher_pos", JSON.stringify(state.launcherPos)); } catch (e) {}
    });
    launcher.addEventListener("click", function () {
      if (lMoved) { lMoved = false; return; } // 拖动后不误触发"打开面板"
      root.classList.remove("bp-fp-hidden");
      launcher.style.display = "none";
      // 面板出现在悬浮球位置，位置联动
      var lx = parseFloat(launcher.style.left), ly = parseFloat(launcher.style.top);
      if (!isNaN(lx) && !isNaN(ly)) {
        root.style.left = Math.max(0, Math.min(lx, window.innerWidth - root.offsetWidth)) + "px";
        root.style.top = Math.max(0, Math.min(ly, window.innerHeight - 60)) + "px";
        root.style.right = "auto";
        try { store.set("panel_pos", JSON.stringify({ x: parseFloat(root.style.left) || 0, y: parseFloat(root.style.top) || 0 })); } catch (e) {}
      }
    });

    /* ---------- 清晰度 ---------- */
    function getSupport() {
      try { return (video.get_quality_support() || []).map(String); } catch (e) { return []; }
    }
    function initQuality(support) {
      var cur = "";
      try { cur = String(video.get_quality().q || ""); } catch (e) {}
      var pref = config_config.video_quality && config_config.video_quality !== "0" ? String(config_config.video_quality) : "";
      state.quality = support.indexOf(pref) > -1 ? pref : (support.indexOf(cur) > -1 ? cur : (support[0] || cur));
    }
    function renderQualityOptions(force) {
      var support = getSupport();
      var sig = support.join(",");
      if (!force && sig === state.qualitySig) return;
      state.qualitySig = sig;
      if (!state.quality || support.indexOf(state.quality) < 0) initQuality(support);
      var html = "";
      for (var i = 0; i < support.length; i++) {
        var q = support[i];
        html += '<option value="' + q + '">' + esc(videoQualityMap[q] || (q + "P")) + '</option>';
      }
      El.qualitySel.innerHTML = html || '<option value="">无可用清晰度</option>';
      El.qualitySel.value = state.quality;
    }
    El.qualitySel.addEventListener("change", function () {
      state.quality = this.value;
      if (state.quality) { config_config.video_quality = state.quality; persistConfig(); }
    });

    /* ---------- 下载格式 ---------- */
    function initFormat() {
      var f = String(config_config.format || "mp4");
      if (["mp4", "flv", "dash"].indexOf(f) < 0) f = "mp4";
      El.formatSel.value = f;
    }
    El.formatSel.addEventListener("change", function () {
      var f = this.value;
      if (["mp4", "flv", "dash"].indexOf(f) < 0) return;
      config_config.format = f;
      persistConfig();
      message_Message_success("下载格式已切换为：" + f.toUpperCase());
    });

    /* ---------- 选集 / 分P ---------- */
    function renderParts(force) {
      var vb = null, total = 0;
      try { vb = video.base(); total = vb.total ? vb.total() : 0; } catch (e) {}
      var sig = total + "|" + (vb && vb.getName ? vb.getName() : "");
      if (!force && sig === state.partsSig) return;
      state.partsSig = sig;
      if (!total || !vb) { El.parts.innerHTML = '<div class="bp-fp-empty">当前页面无分P信息</div>'; return; }
      var html = "";
      for (var i = 1; i <= total; i++) {
        var title = "";
        try { title = vb.title(i) || ""; } catch (e) {}
        var checked = state.checkedParts[i] ? " checked" : "";
        html += '<label class="bp-fp-part" title="P' + i + ' ' + esc(title) + '"><input type="checkbox" data-p="' + i + '"' + checked + '><span>P' + i + ' ' + esc(title) + '</span></label>';
      }
      El.parts.innerHTML = html;
    }
    function eachPart(cb) {
      var boxes = El.parts.querySelectorAll('input[type="checkbox"]');
      for (var i = 0; i < boxes.length; i++) cb(boxes[i]);
    }
    function syncChecked() {
      state.checkedParts = {};
      eachPart(function (b) { if (b.checked) state.checkedParts[b.getAttribute("data-p")] = true; });
    }
    El.parts.addEventListener("change", function (e) {
      if (e.target && e.target.getAttribute("data-p")) syncChecked();
    });
    El.partAll.addEventListener("click", function () { eachPart(function (b) { b.checked = true; }); syncChecked(); });
    El.partNone.addEventListener("click", function () { eachPart(function (b) { b.checked = false; }); syncChecked(); });
    El.partInvert.addEventListener("click", function () { eachPart(function (b) { b.checked = !b.checked; }); syncChecked(); });
    /* 批量下载文件名不带视频标题：多P 只用「P{n} + 分P名」，
       单P 没有别的名字可用，退回原标题（否则文件名为空）。 */
    function taskFilename(vb, p) {
      var total = 0, name = "", main = "";
      try { total = vb.total ? vb.total() : 0; } catch (e) {}
      if (!total || total <= 1) {
        try { return vb.filename(p) || "P" + p; } catch (e) { return "P" + p; }
      }
      try { name = vb.title(p) || ""; } catch (e) {}
      try { main = vb.getName ? vb.getName() || "" : ""; } catch (e) {}
      if (main && name.indexOf(main) === 0) name = name.slice(main.length);
      name = String(name).replace(/^[\s\-_·]+/, "").trim();
      // 合集/番剧的 title() 可能自带「主标题 P{n} ...」，统一收敛到自己的 P 段
      var selfMark = "P" + p + " ";
      var at = name.indexOf(selfMark);
      if (at > 0) name = name.slice(at);
      if (!/^P\d+(\s|$)/.test(name)) name = "P" + p + (name ? " " + name : "");
      name = name.replace(/[\/\\:*?"<>|]+/g, "").replace(/\s+/g, " ").trim();
      return name || "P" + p;
    }
    El.partDownload.addEventListener("click", function () {
      var vb = null;
      try { vb = video.base(); } catch (e) {}
      var boxes = El.parts.querySelectorAll('input[type="checkbox"]:checked');
      if (!boxes.length) { message_Message_warning("请先在选集列表中勾选要下载的分P"); return; }
      if (!vb) { message_Message_warning("未获取到视频信息"); return; }
      var q = state.quality || String(video.get_quality().q);
      var format = config_config.format || "mp4";
      var tasks = [];
      for (var i = 0; i < boxes.length; i++) {
        var p = parseInt(boxes[i].getAttribute("data-p"), 10);
        var title = "";
        try { title = vb.title(p) || ""; } catch (e) {}
        if (typeof is_promotion_title === "function" && is_promotion_title(title)) {
          console.log("[悬浮面板] 过滤分P P" + p + "：" + title);
          continue;
        }
        tasks.push({
          cid: vb.cid(p),
          p: p,
          q: q,
          format: format,
          filename: taskFilename(vb, p),
          dl_video: true,
          dl_audio: format === "dash",
          rpc_dir: String(El.rpcDir && El.rpcDir.value || "").trim()
        });
      }
      if (!tasks.length) { message_Message_warning("所选分P均被过滤，未创建下载任务"); return; }
      /* 输入框可能尚未失焦，这里再同步一次，保证按当前地址与路径推送 */
      var rawRpcUrl = String(El.rpcUrl.value || "").trim();
      if (rawRpcUrl && !applyRpcUrl()) {
        message_Message_warning("RPC 地址格式不正确，示例：http://127.0.0.1:16800/jsonrpc");
        return;
      }
      config_config.rpc_dir = String(El.rpcDir && El.rpcDir.value || "").trim();
      persistConfig();
      var pname = PUSH_PRESETS[state.pushTarget] ? PUSH_PRESETS[state.pushTarget].label : "自定义";
      message_Message_success("已提交 " + tasks.length + " 个分P，推送目标：" + pname);
      function run() {
        // 强制用 auto 路由（本地官方接口优先、失败自动回退远程），
        // 避免历史配置里残留 request_type=remote 时又走易失效的第三方代理。
        try { download_videos(tasks, 0, [], "auto"); }
        catch (e) { console.error("[悬浮面板] 选集下载失败:", e); }
      }
      if ("post" === rpc_type() && "0" !== config_config.show_motrix_confirm && typeof checkMotrixRunningBeforeExecute === "function") {
        checkMotrixRunningBeforeExecute(run);
      } else run();
    });

    /* ---------- 视频信息 ---------- */
    function refreshVideoInfo() {
      try {
        var vb = video.base();
        var name = vb.getName ? vb.getName() : "";
        El.title.textContent = name || "未知标题";
        El.title.title = name ? (name + "（点击在新标签页打开）") : "";
        El.title.href = videoPageUrl(vb);
        El.title.classList.remove("bp-fp-link-off");
        renderQualityOptions(false);
        renderParts(false);
      } catch (e) {
        El.title.textContent = "当前页面暂无视频信息";
        El.title.removeAttribute("href");
        El.title.title = "";
        El.title.classList.add("bp-fp-link-off");
      }
    }
    /* 由当前视频信息拼出可跳转的视频页地址（多P 时带 ?p=） */
    function videoPageUrl(vb) {
      var p = 1, bvid = "", aid = "";
      try { p = vb && vb.p ? (vb.p() || 1) : 1; } catch (e) {}
      try { bvid = vb && vb.bvid ? (vb.bvid() || "") : ""; } catch (e) {}
      try { aid = vb && vb.aid ? (vb.aid() || "") : ""; } catch (e) {}
      var suffix = p > 1 ? "?p=" + p : "";
      if (bvid) return "https://www.bilibili.com/video/" + bvid + "/" + suffix;
      if (aid) return "https://www.bilibili.com/video/av" + aid + "/" + suffix;
      return location.origin + location.pathname + location.search;
    }
    /* 标题点击：拦截站点可能的 SPA 路由拦截，统一新标签页打开；ctrl/中键等保留浏览器默认行为 */
    El.title.addEventListener("click", function (e) {
      if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      var href = this.getAttribute("href");
      e.preventDefault();
      if (!href || href === "#") return;
      window.open(href, "_blank", "noopener");
    });

    /* ---------- 推送目标 ---------- */
    /* 把 domain/port/path 拼成一条完整地址 */
    function rpcUrlText() {
      var d = String(config_config.rpc_domain || "").replace(/\/+$/, "");
      var pt = String(config_config.rpc_port || "").trim();
      var ph = String(config_config.rpc_path || "").trim();
      if (ph && ph.charAt(0) !== "/") ph = "/" + ph;
      return d + (pt ? ":" + pt : "") + ph;
    }
    /* 解析完整地址写回 rpc_domain/rpc_port/rpc_path；格式非法返回 false */
    function applyRpcUrl() {
      var s = String(El.rpcUrl.value || "").trim();
      if (!s) return false;
      if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(s)) s = "http://" + s;
      var m = /^([a-z][a-z0-9+.-]*:\/\/)([^\/:?#]+)(?::(\d+))?([^?#]*)/i.exec(s);
      if (!m) return false;
      config_config.rpc_domain = m[1] + m[2];
      if (m[3]) config_config.rpc_port = m[3];
      config_config.rpc_path = m[4] || "/jsonrpc";
      return true;
    }
    function updatePushStatus() {
      var preset = PUSH_PRESETS[state.pushTarget];
      var mode = "";
      try { mode = rpc_type() === "post" ? "RPC直连(POST)" : "AriaNg页面推送"; } catch (e) {}
      var extra = "";
      if (config_config.show_motrix_confirm === "1" && rpc_type() === "post") extra = " · 已开启启动确认";
      El.pushStatus.innerHTML =
        "当前：<b style='color:#fb7299'>" + esc(preset ? preset.label : "自定义") + "</b>" +
        " · " + esc(rpcUrlText()) +
        " · " + mode + extra;
    }
    function renderPushTargets() {
      var html = "", keys = ["motrix", "aria2"];
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i], p = PUSH_PRESETS[k];
        html += '<div class="bp-fp-push-card' + (state.pushTarget === k ? " on" : "") + '" data-push="' + k + '" title="' + esc(p.label + "（" + p.sub + "）") + '">' +
                  p.label + '<small>' + p.sub + '</small>' +
                '</div>';
      }
      El.pushGrid.innerHTML = html;
      El.rpcUrl.value = rpcUrlText();
      El.rpcDir.value = config_config.rpc_dir || "";
      updatePushStatus();
    }
    El.pushGrid.addEventListener("click", function (e) {
      var card = e.target.closest(".bp-fp-push-card");
      if (!card) return;
      var k = card.getAttribute("data-push"), p = PUSH_PRESETS[k];
      if (!p) return;
      state.pushTarget = k;
      config_config.rpc_domain = p.domain;
      config_config.rpc_port = p.port;
      config_config.rpc_path = p.path;
      config_config.download_type = p.dtype;
      persistConfig();
      try { store.set("panel_push_target", k); } catch (e) {}
      renderPushTargets();
      message_Message_success("推送目标已切换为：" + p.label);
    });
    /* 无「测试连接 / 保存设置」按钮：地址与保存路径改完即时写回配置并落地，
       避免用户改了地址/路径却仍按旧值推送（松开输入框或直接点下载都生效）。 */
    function syncRpcConfig() {
      var s = String(El.rpcUrl.value || "").trim();
      if (!s) {
        El.rpcUrl.value = rpcUrlText();
      } else if (!applyRpcUrl()) {
        El.pushStatus.innerHTML = "<span style='color:#f56c6c'>● RPC 地址格式不正确，示例：http://127.0.0.1:16800/jsonrpc</span>";
        return false;
      }
      config_config.rpc_dir = String(El.rpcDir && El.rpcDir.value || "").trim();
      if (config_config.rpc_domain) {
        config_config.download_type = "rpc";
        state.pushTarget = guessPushTarget();
        try { store.set("panel_push_target", state.pushTarget); } catch (e) {}
      }
      persistConfig();
      renderPushTargets();
      return true;
    }
    El.rpcUrl.addEventListener("change", syncRpcConfig);
    El.rpcDir.addEventListener("change", syncRpcConfig);

    /* ---------- 栏目折叠（推送目标 / 清晰度 / 格式） ---------- */
    (function () {
      var heads = root.querySelectorAll(".bp-fp-fold-h");
      for (var i = 0; i < heads.length; i++) {
        heads[i].addEventListener("click", function (e) {
          e.stopPropagation();
          var sec = this.parentNode;
          while (sec && sec !== root && sec.className.indexOf("bp-fp-foldable") < 0) sec = sec.parentNode;
          if (!sec || sec === root) return;
          var folded = sec.classList.toggle("bp-fp-folded");
          this.setAttribute("title", folded ? "点击展开" : "点击折叠");
        });
      }
    })();

    /* ---------- 初始化 ---------- */
    initFormat();
    renderQualityOptions(true);
    renderParts(true);
    renderPushTargets();
    refreshVideoInfo();
    setInterval(refreshVideoInfo, 2000);
    console.log("[悬浮面板] 已初始化");
  }


  function start_promotion_filter() {
    if (window.bp_promo_filter_started) return;
    window.bp_promo_filter_started = !0;
    var PROMO_SELECTORS = [".rec-list", ".bilibili-player-ending-panel-box-videos", ".recommended-list", ".recommend-list", "#recommendList", ".bili-video-card", ".video-card", ".video-card-small"],
      TITLE_SELECTORS = [".bili-video-card__info--tit", ".title", "a.title", "[title]", "a"];
    function getTitle(el) {
      for (var j = 0; j < TITLE_SELECTORS.length; j++) {
        var t = el.querySelector(TITLE_SELECTORS[j]);
        if (t) {
          var txt = (t.getAttribute("title") || t.textContent || "").trim();
          if (txt) return txt;
        }
      }
      return (el.getAttribute("title") || el.textContent || "").trim().slice(0, 200);
    }
    function scan() {
      var enabled = "1" === config_config.filter_promotion;
      var els = document.querySelectorAll(PROMO_SELECTORS.join(","));
      for (var i = 0; i < els.length; i++) {
        var el = els[i];
        if (!enabled) {
          if ("1" === el.dataset.bpPromoChecked) {
            el.style.display = el.dataset.bpPromoPrevDisplay || "";
            delete el.dataset.bpPromoChecked;
            delete el.dataset.bpPromoPrevDisplay;
          }
          continue;
        }
        if ("1" === el.dataset.bpPromoChecked) continue;
        var title = getTitle(el);
        if (is_promotion_title(title)) {
          el.dataset.bpPromoPrevDisplay = el.style.display || "";
          el.dataset.bpPromoChecked = "1";
          el.style.display = "none";
          console.log("[过滤恰饭] 隐藏推荐：" + title);
        }
      }
    }
    var pending = !1;
    function schedule() {
      if (pending) return;
      pending = !0;
      setTimeout(function () {
        pending = !1;
        scan();
      }, 200);
    }
    setInterval(scan, 1500);
    try {
      new MutationObserver(schedule).observe(document.body, {
        childList: !0,
        subtree: !0
      });
    } catch (e) {}
    scan();
  }
  window.bp_fun_locked || (window.bp_fun_locked = !0, document.getElementsByClassName("error-text")[0] || setTimeout(function () {
    new main().run();
    initFloatingPanel();
  }, 0));
}();