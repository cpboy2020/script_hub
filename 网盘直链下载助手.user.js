// ==UserScript==
// @name              我的网盘直链下载助手
// @namespace         https://github.com/cpboy2020/script_hub
// @version           1.0.0
// @author            cpboy2020
// @description       支持百度/阿里/天翼/迅雷/夸克/移动/城通网盘直链下载。支持 HTTP/JSON-RPC/cURL，推送至 IDM/XDown/Aria2/NDM/Motrix/终端。基于油小猴(youxiaohou.com)的网盘直链下载助手修改。
// @copyright         2026, cpboy2020 (https://github.com/cpboy2020/script_hub)
// @license           GPL-3.0
// @compatible        Chrome
// @compatible        Edge
// @compatible        Firefox
// @homepage          https://github.com/cpboy2020/script_hub
// @website           https://github.com/cpboy2020/script_hub
// @source            https://github.com/cpboy2020/script_hub
// @supportURL        https://github.com/cpboy2020/script_hub/issues
// @icon              data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJiZyIgeDE9IjAiIHkxPSIwIiB4Mj0iMC4yNSIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzFFNUFBMCIvPjxzdG9wIG9mZnNldD0iMC41NSIgc3RvcC1jb2xvcj0iIzEyM0M3MiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzBBMjM0NCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJodWxsIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjRkZCNjNGIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTg3NjBGIi8+PC9saW5lYXJHcmFkaWVudD48Y2xpcFBhdGggaWQ9InNxdWlyY2xlIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgcng9IjExNiIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIGNsaXAtcGF0aD0idXJsKCNzcXVpcmNsZSkiPjxyZWN0IHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBmaWxsPSJ1cmwoI2JnKSIvPjxwYXRoIGQ9Ik0wLDQzNCBDIDY4LDQwOCAxMjQsNDA4IDE4MCw0MzQgQyAyMzYsNDYwIDI5Miw0NjAgMzQ4LDQzNCBDIDQwNCw0MDggNDYwLDQwOCA1MTIsNDM0IEw1MTIsNTEyIEwwLDUxMiBaIgogICAgICAgICAgZmlsbD0iIzFGNUU5QyIvPjxwYXRoIGQ9Ik0wLDQ3MiBDIDc2LDQ0NiAxMzIsNDQ2IDE4OCw0NzIgQyAyNDQsNDk4IDMwMCw0OTggMzU2LDQ3MiBDIDQxMiw0NDYgNDY4LDQ0NiA1MTIsNDcyIEw1MTIsNTEyIEwwLDUxMiBaIgogICAgICAgICAgZmlsbD0iIzNCOENEMCIvPjxyZWN0IHg9IjIzNiIgeT0iNjAiIHdpZHRoPSI0NCIgaGVpZ2h0PSIxNzAiIHJ4PSIxMCIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0xNjIsMjI2IEwzNTAsMjI2IEwyNTYsMzIwIFoiIGZpbGw9IiNGRkZGRkYiLz48cmVjdCB4PSIyMTgiIHk9IjMzMiIgd2lkdGg9Ijc2IiBoZWlnaHQ9IjQwIiByeD0iMTIiIGZpbGw9IiNGRkZGRkYiLz48cmVjdCB4PSIyMzYiIHk9IjM0NCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjExIiByeD0iNSIgZmlsbD0iIzdGQjNFMCIvPjxwYXRoIGQ9Ik0xNjIsMzc4IEwzNTAsMzc4IFEzNjAsMzc4IDM1NywzODcgTDM0MCw0MTAgUTMzNiw0MTYgMzI4LDQxNiBMMTg0LDQxNiBRMTc2LDQxNiAxNzIsNDEwIEwxNTUsMzg3IFExNTIsMzc4IDE2MiwzNzggWiIKICAgICAgICAgIGZpbGw9InVybCgjaHVsbCkiLz48cmVjdCB4PSIxNDkiIHk9IjM2NiIgd2lkdGg9IjIxNCIgaGVpZ2h0PSIxMiIgcng9IjYiIGZpbGw9IiNGRkZGRkYiLz48L2c+PC9zdmc+
// @match             *://pan.baidu.com/disk/home*
// @match             *://yun.baidu.com/disk/home*
// @match             *://pan.baidu.com/disk/main*
// @match             *://yun.baidu.com/disk/main*
// @match             https://pan.baidu.com/s/*
// @match             *://openapi.baidu.com/oauth/*
// @match             *://www.aliyundrive.com/drive*
// @match             *://www.alipan.com/drive*
// @match             *://cloud.189.cn/web/*
// @match             *://pan.xunlei.com/*
// @match             *://pan.quark.cn/*
// @match             *://yun.139.com/*
// @match             *://caiyun.139.com/*
// @match             *://*.ctfile.com/*
// @match             *://*.ctfile.net/*
// @match             *://*.ctfile.cn/*
// @match             *://*.545c.com/*
// @noframes
// @run-at            document-start
// @connect           *
// @connect           localhost
// @connect           127.0.0.1
// @connect           baidu.com
// @connect           baidupcs.com
// @connect           jomodns.com
// @connect           aliyundrive.com
// @connect           aliyundrive.net
// @connect           alipan.com
// @connect           aliyundrive.cloud
// @connect           189.cn
// @connect           xunlei.com
// @connect           quark.cn
// @connect           yun.139.com
// @connect           caiyun.139.com
// @connect           ctfile.com
// @connect           tv002.com
// @connect           ctcontents.com
// @grant             GM_xmlhttpRequest
// @grant             GM_setClipboard
// @grant             GM_setValue
// @grant             GM_getValue
// @grant             GM_deleteValue
// @grant             GM_registerMenuCommand
// @grant             GM_cookie
// @grant             GM_openInTab
// @grant             window.close
// @updateURL         https://update.greasyfork.org/scripts/595544/FerryLink.meta.js
// @downloadURL       https://update.greasyfork.org/scripts/595544/FerryLink.user.js
// ==/UserScript==
// 说明：保留通配是因为用户可自定义 RPC/IDM/BitComet 主机；实际请求已被 validRpcDomain 限制为本机/内网
(function () {
    'use strict';

/* ==================== 本地依赖层：替代 jQuery / SweetAlert2 / js-md5 ====================
     * 说明：为消除对 npmmirror CDN 的运行时依赖，以下用原生代码实现了脚本实际用到的
     *       jQuery / SweetAlert2 / js-md5 子集 API，行为与原库保持一致。
     * ==================================================================================== */

    /* ---------- (3) md5：标准 MD5，返回 32 位小写 hex（UTF-8 输入，兼容 js-md5） ---------- */
    var md5 = (function () {
        function RotateLeft(lValue, iShiftBits) { return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits)); }
        function AddUnsigned(lX, lY) {
            var lX4, lY4, lX8, lY8, lResult;
            lX8 = (lX & 0x80000000); lY8 = (lY & 0x80000000);
            lX4 = (lX & 0x40000000); lY4 = (lY & 0x40000000);
            lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
            if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
            if (lX4 | lY4) {
                if (lResult & 0x40000000) return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
            return (lResult ^ lX8 ^ lY8);
        }
        function F(x, y, z) { return (x & y) | ((~x) & z); }
        function G(x, y, z) { return (x & z) | (y & (~z)); }
        function H(x, y, z) { return (x ^ y ^ z); }
        function I(x, y, z) { return (y ^ (x | (~z))); }
        function FF(a, b, c, d, x, s, ac) { return AddUnsigned(RotateLeft(AddUnsigned(AddUnsigned(a, F(b, c, d)), AddUnsigned(x, ac)), s), b); }
        function GG(a, b, c, d, x, s, ac) { return AddUnsigned(RotateLeft(AddUnsigned(AddUnsigned(a, G(b, c, d)), AddUnsigned(x, ac)), s), b); }
        function HH(a, b, c, d, x, s, ac) { return AddUnsigned(RotateLeft(AddUnsigned(AddUnsigned(a, H(b, c, d)), AddUnsigned(x, ac)), s), b); }
        function II(a, b, c, d, x, s, ac) { return AddUnsigned(RotateLeft(AddUnsigned(AddUnsigned(a, I(b, c, d)), AddUnsigned(x, ac)), s), b); }
        function ConvertToWordArray(sMessage) {
            var lMessageLength = sMessage.length,
                lNumberOfWords_temp1 = lMessageLength + 8,
                lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64,
                lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16,
                lWordArray = [], lBytePosition = 0, lByteCount = 0, lWordPosition, w;
            for (w = 0; w < lNumberOfWords; w++) lWordArray[w] = 0;
            while (lByteCount < lMessageLength) {
                lWordPosition = (lByteCount - (lByteCount % 4)) / 4;
                lBytePosition = (lByteCount % 4) * 8;
                lWordArray[lWordPosition] = (lWordArray[lWordPosition] | (sMessage.charCodeAt(lByteCount) << lBytePosition));
                lByteCount++;
            }
            lWordPosition = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordPosition] = lWordArray[lWordPosition] | (0x80 << lBytePosition);
            lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
            lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
            return lWordArray;
        }
        function WordToHex(lValue) {
            var out = "", temp, lByte, lCount;
            for (lCount = 0; lCount <= 3; lCount++) {
                lByte = (lValue >>> (lCount * 8)) & 255;
                temp = "0" + lByte.toString(16);
                out += temp.substr(temp.length - 2, 2);
            }
            return out;
        }
        var S11 = 7, S12 = 12, S13 = 17, S14 = 22,
            S21 = 5, S22 = 9, S23 = 14, S24 = 20,
            S31 = 4, S32 = 11, S33 = 16, S34 = 23,
            S41 = 6, S42 = 10, S43 = 15, S44 = 21;
        return function (str) {
            str = String(str == null ? '' : str);
            var bytes, latin = '', i;
            if (typeof TextEncoder !== 'undefined') {
                bytes = new TextEncoder().encode(str);
                for (i = 0; i < bytes.length; i++) latin += String.fromCharCode(bytes[i]);
            } else {
                latin = unescape(encodeURIComponent(str));
            }
            var x = ConvertToWordArray(latin), k,
                a = 0x67452301, b = 0xEFCDAB89, c = 0x98BADCFE, d = 0x10325476,
                AA, BB, CC, DD;
            for (k = 0; k < x.length; k += 16) {
                AA = a; BB = b; CC = c; DD = d;
                a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478); d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
                c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB); b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
                a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF); d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
                c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613); b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
                a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8); d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
                c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1); b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
                a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122); d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
                c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E); b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
                a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562); d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
                c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51); b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
                a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D); d = GG(d, a, b, c, x[k + 10], S22, 0x02441453);
                c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681); b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
                a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6); d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
                c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87); b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
                a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905); d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
                c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9); b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
                a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942); d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
                c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122); b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
                a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44); d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
                c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60); b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
                a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6); d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
                c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085); b = HH(b, c, d, a, x[k + 6], S34, 0x04881D05);
                a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039); d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
                c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8); b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
                a = II(a, b, c, d, x[k + 0], S41, 0xF4292244); d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
                c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7); b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
                a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3); d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
                c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D); b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
                a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F); d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
                c = II(c, d, a, b, x[k + 6], S43, 0xA3014314); b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
                a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82); d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
                c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB); b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
                a = AddUnsigned(a, AA); b = AddUnsigned(b, BB); c = AddUnsigned(c, CC); d = AddUnsigned(d, DD);
            }
            return (WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d)).toLowerCase();
        };
    })();

        /* ---------- (1) mini-jQuery：DOM / 事件委托 / 链式操作 ---------- */
    var $ = (function () {
        var _events = [];
        var _listeners = {};
        var _dataStore = (typeof WeakMap === 'function') ? new WeakMap() : null;

        function toNodes(sel, ctx) {
            var nodes = [], i;
            if (sel == null) return nodes;
            if (Array.isArray(sel)) { for (i = 0; i < sel.length; i++) if (sel[i]) nodes.push(sel[i]); return nodes; }
            if (sel.nodeType || sel === window || sel === document) return [sel];
            if (sel instanceof JQ) { for (i = 0; i < sel.length; i++) nodes.push(sel[i]); return nodes; }
            if (typeof sel === 'string') {
                var s = sel.trim();
                if (!s) return nodes;
                if (s.charAt(0) === '<') {
                    var t = document.createElement('template');
                    t.innerHTML = s;
                    return Array.prototype.slice.call(t.content.childNodes).filter(function (n) { return n.nodeType === 1; });
                }
                var root = ctx ? (ctx.nodeType ? ctx : ctx[0]) : document;
                if (!root || !root.querySelectorAll) return nodes;
                return Array.prototype.slice.call(root.querySelectorAll(sel));
            }
            return nodes;
        }
        function matches(el, selector) {
            if (!el || el.nodeType !== 1 || !selector) return false;
            var fn = el.matches || el.msMatchesSelector || el.webkitMatchesSelector;
            try { return fn.call(el, selector); } catch (e) { return false; }
        }
        function closest(el, selector, root) {
            while (el && el.nodeType === 1) {
                if (matches(el, selector)) return el;
                if (el === root) break;
                el = el.parentElement;
            }
            return null;
        }
        function makeEvent(e, matched, logicalType) {
            return {
                type: logicalType || e.type,
                target: e.target,
                currentTarget: matched,
                relatedTarget: e.relatedTarget,
                pageX: e.pageX, pageY: e.pageY,
                clientX: e.clientX, clientY: e.clientY,
                which: e.which, keyCode: e.keyCode, key: e.key, code: e.code,
                shiftKey: e.shiftKey, ctrlKey: e.ctrlKey, altKey: e.altKey, metaKey: e.metaKey,
                data: e.data,
                preventDefault: function () { e.preventDefault && e.preventDefault(); },
                stopPropagation: function () { e.stopPropagation && e.stopPropagation(); },
                originalEvent: e
            };
        }
        function nativeType(logical) {
            if (logical === 'mouseenter') return 'mouseover';
            if (logical === 'mouseleave') return 'mouseout';
            return logical;
        }
        function dispatch(e) {
            var nType = e.type, i, reg, root, matched;
            for (i = 0; i < _events.length; i++) {
                reg = _events[i];
                if (reg.nType !== nType) continue;
                root = reg.root;
                if (root && root.nodeType !== 9 && root !== window && typeof root.contains === 'function' && !root.contains(e.target)) continue;
                if (reg.selector) {
                    matched = e.target && e.target.nodeType === 1 ? closest(e.target, reg.selector, root) : null;
                    if (!matched) continue;
                } else {
                    matched = root;
                }
                if (reg.logical === 'mouseenter' && e.relatedTarget && matched.contains && matched.contains(e.relatedTarget)) continue;
                if (reg.logical === 'mouseleave' && e.relatedTarget && matched.contains && matched.contains(e.relatedTarget)) continue;
                reg.handler.call(matched, makeEvent(e, matched, reg.logical));
            }
        }
        function ensureListener(nType) {
            if (_listeners[nType]) return;
            _listeners[nType] = true;
            document.addEventListener(nType, dispatch, false);
        }
        function parseEvents(events) {
            return String(events).trim().split(/\s+/).map(function (token) {
                var parts = token.split('.');
                return { logical: parts[0], ns: parts.slice(1).join('.') };
            });
        }
        function setStyle(el, k, v) {
            if (!el.style) return;
            if (k.charAt(0) === '-' && k.charAt(1) === '-') el.style.setProperty(k, v == null ? '' : v);
            else el.style[k] = v;
        }
        function parseHTML(html) {
            var t = document.createElement('template');
            t.innerHTML = html;
            return Array.prototype.slice.call(t.content.childNodes);
        }
        function argNodes(arg) {
            if (arg instanceof JQ) { var a = [], i; for (i = 0; i < arg.length; i++) a.push(arg[i]); return a; }
            if (typeof arg === 'string') return parseHTML(arg);
            if (arg && arg.nodeType) return [arg];
            if (Array.isArray(arg)) return arg.slice();
            return [];
        }

        function JQ(sel, ctx) {
            var nodes = toNodes(sel, ctx), i;
            for (i = 0; i < nodes.length; i++) this[i] = nodes[i];
            this.length = nodes.length;
        }
        JQ.prototype.each = function (fn) {
            for (var i = 0; i < this.length; i++) {
                if (fn.call(this[i], i, this[i]) === false) break;
            }
            return this;
        };
        JQ.prototype.on = function (events, selector, handler) {
            var self = this;
            if (typeof selector === 'function') { handler = selector; selector = null; }
            if (typeof events === 'object' && events !== null) {
                for (var k in events) if (Object.prototype.hasOwnProperty.call(events, k)) self.on(k, selector, events[k]);
                return this;
            }
            var tokens = parseEvents(events);
            self.each(function (root) {
                tokens.forEach(function (t) {
                    var nType = nativeType(t.logical);
                    ensureListener(nType);
                    _events.push({ root: root, nType: nType, logical: t.logical, ns: t.ns, selector: selector || null, handler: handler });
                });
            });
            return this;
        };
        JQ.prototype.off = function (events, selector) {
            var tokens = events ? parseEvents(events) : [];
            _events = _events.filter(function (reg) {
                if (!tokens.length) return false;
                for (var i = 0; i < tokens.length; i++) {
                    var t = tokens[i];
                    if (reg.logical === t.logical && (!t.ns || reg.ns === t.ns) && (!selector || reg.selector === selector)) return false;
                }
                return true;
            });
            return this;
        };
        JQ.prototype.addClass = function (cls) {
            return this.each(function () { if (this.classList) String(cls).split(/\s+/).forEach(function (c) { c && this.classList.add(c); }, this); });
        };
        JQ.prototype.removeClass = function (cls) {
            return this.each(function () { if (this.classList) String(cls).split(/\s+/).forEach(function (c) { c && this.classList.remove(c); }, this); });
        };
        JQ.prototype.toggleClass = function (cls, force) {
            return this.each(function () {
                if (!this.classList) return;
                var on = force === undefined ? !this.classList.contains(cls) : !!force;
                if (on) this.classList.add(cls); else this.classList.remove(cls);
            });
        };
        JQ.prototype.hasClass = function (cls) {
            return this.length ? !!this[0].classList && this[0].classList.contains(cls) : false;
        };
        JQ.prototype.css = function (prop, val) {
            if (typeof prop === 'object' && prop !== null) {
                var obj = prop;
                return this.each(function () { for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k)) setStyle(this, k, obj[k]); });
            }
            if (val === undefined) {
                if (!this.length) return undefined;
                try { return window.getComputedStyle(this[0])[prop]; } catch (e) { return this[0].style ? this[0].style[prop] : undefined; }
            }
            return this.each(function () { setStyle(this, prop, val); });
        };
        JQ.prototype.html = function (val) {
            if (val === undefined) return this.length ? this[0].innerHTML : undefined;
            return this.each(function () { this.innerHTML = val; });
        };
        JQ.prototype.text = function (val) {
            if (val === undefined) return this.length ? this[0].textContent : undefined;
            return this.each(function () { this.textContent = val; });
        };
        JQ.prototype.val = function (val) {
            if (val === undefined) return this.length ? this[0].value : undefined;
            return this.each(function () { this.value = val; });
        };
        JQ.prototype.attr = function (name, val) {
            if (typeof name === 'object' && name !== null) {
                var obj = name;
                return this.each(function () { for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k)) this.setAttribute(k, obj[k]); });
            }
            if (val === undefined) return this.length ? this[0].getAttribute(name) : undefined;
            return this.each(function () { this.setAttribute(name, val); });
        };
        JQ.prototype.removeAttr = function (name) {
            return this.each(function () { this.removeAttribute(name); });
        };
        JQ.prototype.prop = function (name, val) {
            if (val === undefined) return this.length ? this[0][name] : undefined;
            return this.each(function () { this[name] = val; });
        };
        JQ.prototype.data = function (key, val) {
            var store = _dataStore;
            if (val === undefined) {
                if (!this.length) return undefined;
                var d = store ? store.get(this[0]) : this[0].__flData;
                return d ? d[key] : undefined;
            }
            return this.each(function () {
                var d;
                if (store) { d = store.get(this) || {}; d[key] = val; store.set(this, d); }
                else { d = this.__flData || (this.__flData = {}); d[key] = val; }
            });
        };
        JQ.prototype.show = function () {
            return this.each(function () { if (this.style) this.style.display = ''; });
        };
        JQ.prototype.hide = function () {
            return this.each(function () { if (this.style) this.style.display = 'none'; });
        };
        JQ.prototype.fadeIn = function (dur, cb) {
            this.each(function () { if (this.style) { this.style.display = ''; this.style.opacity = '1'; } });
            if (typeof cb === 'function') setTimeout(cb, typeof dur === 'number' ? dur : 0);
            return this;
        };
        JQ.prototype.fadeOut = function (dur, cb) {
            var ms = typeof dur === 'number' ? dur : 0, self = this;
            this.each(function () { if (this.style) this.style.opacity = '0'; });
            setTimeout(function () { self.each(function () { if (this.style) this.style.display = 'none'; }); }, ms);
            if (typeof cb === 'function') setTimeout(cb, ms);
            return this;
        };
        function _insert(target, child, prepend) {
            var nodes = argNodes(child), i;
            for (i = 0; i < nodes.length; i++) target.insertBefore(nodes[i], prepend ? target.firstChild : null);
        }
        JQ.prototype.append = function (child) { return this.each(function () { _insert(this, child, false); }); };
        JQ.prototype.prepend = function (child) { return this.each(function () { _insert(this, child, true); }); };
        JQ.prototype.before = function (child) {
            var nodes = argNodes(child);
            return this.each(function () {
                var p = this.parentNode; if (!p) return;
                nodes.forEach(function (n) { p.insertBefore(n, this); }, this);
            });
        };
        JQ.prototype.replaceWith = function (html) {
            return this.each(function () {
                var p = this.parentNode, nodes = argNodes(html), i;
                if (!p) return;
                for (i = 0; i < nodes.length; i++) p.insertBefore(nodes[i], this);
                p.removeChild(this);
            });
        };
        JQ.prototype.empty = function () { return this.each(function () { this.innerHTML = ''; }); };
        JQ.prototype.find = function (selector) {
            var nodes = [];
            this.each(function () {
                if (!this.querySelectorAll) return;
                Array.prototype.push.apply(nodes, Array.prototype.slice.call(this.querySelectorAll(selector)));
            });
            return $(nodes);
        };
        JQ.prototype.children = function (selector) {
            var nodes = [];
            this.each(function () {
                if (!this.children) return;
                var kids = Array.prototype.slice.call(this.children), i;
                for (i = 0; i < kids.length; i++) if (!selector || matches(kids[i], selector)) nodes.push(kids[i]);
            });
            return $(nodes);
        };
        JQ.prototype.closest = function (selector) {
            var nodes = [];
            this.each(function () {
                var el = this;
                while (el && el.nodeType === 1) {
                    if (matches(el, selector)) { if (nodes.indexOf(el) < 0) nodes.push(el); break; }
                    el = el.parentElement;
                }
            });
            return $(nodes);
        };
        JQ.prototype.parents = function (selector) {
            var nodes = [];
            this.each(function () {
                var el = this.parentElement;
                while (el) { if (!selector || matches(el, selector)) nodes.push(el); el = el.parentElement; }
            });
            return $(nodes);
        };
        JQ.prototype.siblings = function (selector) {
            var nodes = [];
            this.each(function () {
                var p = this.parentElement; if (!p) return;
                var kids = p.children, i;
                for (i = 0; i < kids.length; i++) if (kids[i] !== this && (!selector || matches(kids[i], selector))) nodes.push(kids[i]);
            });
            return $(nodes);
        };
        JQ.prototype.first = function () { return this.length ? $(this[0]) : $(); };
        JQ.prototype.eq = function (i) { i = i < 0 ? this.length + i : i; return $(this[i] || null); };
        JQ.prototype.get = function (i) { return i == null ? Array.prototype.slice.call(this) : (i < 0 ? this[this.length + i] : this[i]); };
        JQ.prototype.index = function () {
            if (!this.length || !this[0].parentElement) return -1;
            return Array.prototype.indexOf.call(this[0].parentElement.children, this[0]);
        };
        JQ.prototype.filter = function (arg) {
            var nodes = [];
            this.each(function (i) {
                var ok = typeof arg === 'function' ? arg.call(this, i, this) : matches(this, arg);
                if (ok) nodes.push(this);
            });
            return $(nodes);
        };
        JQ.prototype.not = function (arg) {
            var nodes = [];
            this.each(function () { if (!matches(this, arg)) nodes.push(this); });
            return $(nodes);
        };
        JQ.prototype.is = function (arg) {
            for (var i = 0; i < this.length; i++) if (matches(this[i], arg)) return true;
            return false;
        };
        JQ.prototype.add = function (sel) {
            var nodes = [], i;
            for (i = 0; i < this.length; i++) nodes.push(this[i]);
            Array.prototype.push.apply(nodes, toNodes(sel));
            return $(nodes);
        };
        JQ.prototype.remove = function () {
            return this.each(function () { if (this.parentNode) this.parentNode.removeChild(this); });
        };
        JQ.prototype.click = function (handler) {
            if (typeof handler === 'function') return this.on('click', handler);
            return this.each(function () { if (this.click) this.click(); });
        };
        JQ.prototype.trigger = function (type) {
            return this.each(function () {
                var ev;
                try { ev = new Event(type, { bubbles: true, cancelable: true }); } catch (e) { return; }
                this.dispatchEvent(ev);
            });
        };
        JQ.prototype.animate = function (props) {
            return this.each(function () { if (this.style) for (var k in props) setStyle(this, k, props[k]); });
        };
        function jq(sel, ctx) { return new JQ(sel, ctx); }
        jq.each = function (obj, cb) {
            if (Array.isArray(obj) || (obj && typeof obj.length === 'number' && typeof obj !== 'string')) {
                for (var i = 0; i < obj.length; i++) if (cb.call(obj[i], i, obj[i]) === false) break;
            } else if (obj && typeof obj === 'object') {
                for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && cb.call(obj[k], k, obj[k]) === false) break;
            }
            return obj;
        };
        return jq;
    })();

    /* ---------- (2) mini-Swal：fire / mixin / close / get* / showLoading / 计时器 ---------- */
    var Swal = (function () {
        var _styleInjected = false;
        var _instances = [];
        var _CSS = [
            '.swal2-container{display:flex;position:fixed;z-index:1060;top:0;left:0;right:0;bottom:0;justify-content:center;align-items:center;padding:1em;overflow:auto;box-sizing:border-box;font-family:inherit}',
            '.swal2-container.swal2-top{align-items:flex-start}',
            '.swal2-popup{background:#fff;border-radius:.3em;box-shadow:0 10px 30px rgba(0,0,0,.2);font-family:inherit;width:32em;max-width:100%;padding:1.25em;box-sizing:border-box;position:relative;color:#545454;font-size:16px;text-align:center}',
            '.swal2-popup.swal2-toast{width:auto;max-width:90vw;padding:.6em 1em;display:flex;align-items:center;gap:.6em;box-shadow:0 5px 15px rgba(0,0,0,.15);text-align:left}',
            '.swal2-header{display:flex;flex-direction:column;align-items:center;width:100%}',
            '.swal2-toast .swal2-header{flex-direction:row;width:auto;gap:.5em}',
            '.swal2-title{margin:0 0 .4em;font-size:1.4em;font-weight:500;line-height:1.3;word-break:break-word}',
            '.swal2-toast .swal2-title{font-size:1em;margin:0}',
            '.swal2-html-container{margin:.5em 0;width:100%;font-size:1em;line-height:1.5;overflow:auto}',
            '.swal2-toast .swal2-html-container{width:auto;margin:0}',
            '.swal2-footer{margin-top:.8em;font-size:.9em;color:#666;width:100%}',
            '.swal2-actions{display:flex;justify-content:center;gap:.5em;margin-top:.8em;width:100%;flex-wrap:wrap}',
            '.swal2-toast .swal2-actions{width:auto;margin:0 0 0 .4em}',
            '.swal2-confirm,.swal2-cancel{border:0;border-radius:.25em;padding:.4em 1em;font-size:1em;cursor:pointer;background:#3085d6;color:#fff}',
            '.swal2-confirm:hover,.swal2-cancel:hover{filter:brightness(.92)}',
            '.swal2-cancel{background:#aaa}',
            '.swal2-close{position:absolute;top:.3em;right:.5em;background:none;border:0;font-size:1.6em;line-height:1;cursor:pointer;color:#999}',
            '.swal2-close:hover{color:#333}',
            '.swal2-icon{width:2.2em;height:2.2em;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:500;font-size:1.1em;flex:0 0 auto}',
            '.swal2-icon.swal2-success{background:#a5dc86}.swal2-icon.swal2-error{background:#f27474}.swal2-icon.swal2-warning{background:#f8bb86;color:#333}.swal2-icon.swal2-info{background:#3fc3ee}.swal2-icon.swal2-question{background:#87adbd}',
            '.swal2-image{max-width:100%;margin:.5em auto;display:block}',
            '.swal2-timer-progress-bar{position:absolute;bottom:0;left:0;height:4px;background:#3085d6;width:100%;transition:width linear}',
            '.swal2-loading{width:2em;height:2em;border:3px solid rgba(48,133,214,.25);border-top-color:#3085d6;border-radius:50%;animation:swal2spin .8s linear infinite;margin:0 auto}',
            '@keyframes swal2spin{to{transform:rotate(360deg)}}'
        ].join('\n');
        function injectStyle() {
            if (_styleInjected) return;
            _styleInjected = true;
            var s = document.createElement('style');
            s.id = 'swal2-local-style';
            s.textContent = _CSS;
            (document.head || document.documentElement).appendChild(s);
        }
        function mk(tag, cls, html) {
            var n = document.createElement(tag);
            if (cls) n.className = cls;
            if (html != null) n.innerHTML = html;
            return n;
        }
        function addCC(el, cc, key) {
            if (!el || !cc || !cc[key]) return;
            String(cc[key]).split(/\s+/).forEach(function (c) { if (c) el.classList.add(c); });
        }
        var ICON = { success: '✓', error: '✕', warning: '!', info: 'i', question: '?' };

        function fire(opts) {
            opts = opts || {};
            injectStyle();
            _instances.slice().forEach(function (inst) { inst.close({ isDismissed: true, dismiss: 'replace' }, true); });
            return new Promise(function (resolve) {
                var isToast = !!opts.toast;
                var cc = opts.customClass || {};
                var container = mk('div', 'swal2-container' + (opts.position === 'top' ? ' swal2-top' : ''));
                addCC(container, cc, 'container');
                var popup = mk('div', 'swal2-popup' + (isToast ? ' swal2-toast' : ''));
                addCC(popup, cc, 'popup');
                if (opts.width) popup.style.width = (typeof opts.width === 'number' ? opts.width + 'px' : opts.width);
                if (opts.padding) popup.style.padding = opts.padding;

                var header = mk('div', 'swal2-header');
                addCC(header, cc, 'header');
                if (opts.icon && ICON[opts.icon]) {
                    var ic = mk('div', 'swal2-icon swal2-' + opts.icon, ICON[opts.icon]);
                    addCC(ic, cc, 'icon');
                    header.appendChild(ic);
                }
                if (opts.imageUrl) {
                    var img = mk('img', 'swal2-image');
                    img.src = opts.imageUrl;
                    if (opts.imageWidth) img.style.width = opts.imageWidth;
                    header.appendChild(img);
                }
                var hasTitleText = opts.titleText != null;
                var titleVal = hasTitleText ? String(opts.titleText) : (opts.title != null ? String(opts.title) : '');
                if (titleVal) {
                    var t = mk('h2', 'swal2-title');
                    addCC(t, cc, 'title');
                    if (hasTitleText) t.textContent = titleVal; else t.innerHTML = titleVal;
                    header.appendChild(t);
                }
                popup.appendChild(header);

                var content = null;
                if (opts.html != null || opts.text != null) {
                    content = mk('div', 'swal2-html-container');
                    addCC(content, cc, 'htmlContainer');
                    addCC(content, cc, 'content');
                    if (opts.html != null) content.innerHTML = opts.html;
                    else content.textContent = String(opts.text);
                    popup.appendChild(content);
                }
                if (opts.footer != null && opts.footer !== '') {
                    var ft = mk('div', 'swal2-footer');
                    addCC(ft, cc, 'footer');
                    ft.innerHTML = String(opts.footer);
                    popup.appendChild(ft);
                }

                var actions = mk('div', 'swal2-actions');
                addCC(actions, cc, 'actions');
                if (opts.showConfirmButton !== false) {
                    var btn = mk('button', 'swal2-confirm', opts.confirmButtonText || 'OK');
                    addCC(btn, cc, 'confirmButton');
                    btn.type = 'button';
                    btn.addEventListener('click', function () { close({ isConfirmed: true, value: true }); });
                    actions.appendChild(btn);
                }
                if (opts.showCancelButton) {
                    var cancel = mk('button', 'swal2-cancel', opts.cancelButtonText || 'Cancel');
                    addCC(cancel, cc, 'cancelButton');
                    cancel.type = 'button';
                    cancel.addEventListener('click', function () { close({ isDismissed: true, dismiss: 'cancel' }); });
                    actions.appendChild(cancel);
                }
                popup.appendChild(actions);
                if (opts.showCloseButton) {
                    var x = mk('button', 'swal2-close', '×');
                    addCC(x, cc, 'closeButton');
                    x.type = 'button';
                    x.setAttribute('aria-label', '关闭');
                    x.addEventListener('click', function () { close({ isDismissed: true, dismiss: 'close' }); });
                    popup.appendChild(x);
                }
                container.appendChild(popup);
                var target = opts.target || document.body;
                if (target && target.appendChild) target.appendChild(container);
                else document.body.appendChild(container);

                var done = false, keyHandler = null;
                var timerCtl = { clear: function () {}, pause: function () {}, resume: function () {} };
                var instance = { container: container, popup: popup, content: content, close: null };
                instance.close = close;
                _instances.push(instance);

                function close(result, skipWillClose) {
                    if (done) return;
                    done = true;
                    var idx = _instances.indexOf(instance);
                    if (idx >= 0) _instances.splice(idx, 1);
                    timerCtl.clear();
                    if (keyHandler) document.removeEventListener('keydown', keyHandler, true);
                    // 立刻退出 loading 态。容器要延后一拍才移除（留给 await 之后读弹窗内 DOM），
                    // 若不摘类，调用方用 `.swal2-popup.swal2-loading` 判断“还在加载”时会命中这个
                    // 已关闭的旧弹窗，把紧接着打开的新弹窗一起关掉（表现为弹窗一闪而过）。
                    if (popup.classList.contains('swal2-loading')) {
                        popup.classList.remove('swal2-loading');
                        var spin = popup.querySelector('.swal2-actions .swal2-loading');
                        if (spin && spin.parentNode) spin.parentNode.removeChild(spin);
                    }
                    if (!skipWillClose && typeof opts.willClose === 'function') {
                        try { opts.willClose(); } catch (e) { console.warn('willClose 出错', e); }
                    }
                    resolve(result || {});
                    setTimeout(function () { if (container.parentNode) container.parentNode.removeChild(container); }, 0);
                }
                function byTimer() { close({ isDismissed: true, dismiss: 'timer' }); }

                if (opts.timer) {
                    var remain = opts.timer, start = Date.now(), tid = null, paused = false;
                    timerCtl.clear = function () { if (tid) clearTimeout(tid); tid = null; };
                    timerCtl.pause = function () { if (tid) { clearTimeout(tid); remain -= Date.now() - start; tid = null; } paused = true; };
                    timerCtl.resume = function () { if (paused) { paused = false; if (remain > 0) { start = Date.now(); tid = setTimeout(byTimer, remain); } } };
                    popup._swalTimer = timerCtl;
                    start = Date.now();
                    tid = setTimeout(byTimer, remain);
                    if (opts.timerProgressBar) {
                        var bar = mk('div', 'swal2-timer-progress-bar');
                        popup.appendChild(bar);
                        setTimeout(function () { bar.style.transitionDuration = opts.timer + 'ms'; bar.style.width = '0'; }, 20);
                    }
                }
                if (opts.allowOutsideClick !== false) {
                    container.addEventListener('mousedown', function (e) {
                        if (e.target === container) close({ isDismissed: true, dismiss: 'backdrop' });
                    });
                }
                if (opts.allowEscapeKey !== false) {
                    keyHandler = function (e) {
                        if (e.key === 'Escape' || e.keyCode === 27) close({ isDismissed: true, dismiss: 'esc' });
                    };
                    document.addEventListener('keydown', keyHandler, true);
                }
                if (typeof opts.didOpen === 'function') {
                    try { opts.didOpen(popup); } catch (e) { console.warn('didOpen 出错', e); }
                }
            });
        }
        function mixin(defaults) {
            return {
                fire: function (opts) {
                    var merged = {}, k;
                    for (k in defaults) if (Object.prototype.hasOwnProperty.call(defaults, k)) merged[k] = defaults[k];
                    for (k in (opts || {})) if (Object.prototype.hasOwnProperty.call(opts, k)) merged[k] = opts[k];
                    return fire(merged);
                }
            };
        }
        var api = {
            fire: fire,
            mixin: mixin,
            close: function () {
                if (!_instances.length) return;
                _instances[_instances.length - 1].close({ isDismissed: true, dismiss: 'close' });
            },
            getContainer: function () { var i = _instances[_instances.length - 1]; return i ? i.container : null; },
            getPopup: function () { var i = _instances[_instances.length - 1]; return i ? i.popup : null; },
            getHtmlContainer: function () { var i = _instances[_instances.length - 1]; return i ? i.content : null; },
            getTitle: function () { var i = _instances[_instances.length - 1]; return i ? i.popup.querySelector('.swal2-title') : null; },
            getActions: function () { var i = _instances[_instances.length - 1]; return i ? i.popup.querySelector('.swal2-actions') : null; },
            getConfirmButton: function () { var i = _instances[_instances.length - 1]; return i ? i.popup.querySelector('.swal2-confirm') : null; },
            showLoading: function () {
                if (!_instances.length) return;
                var inst = _instances[_instances.length - 1];
                var actions = inst.popup.querySelector('.swal2-actions');
                if (actions) actions.innerHTML = '<div class="swal2-loading"></div>';
                inst.popup.classList.add('swal2-loading');
            },
            stopTimer: function () { if (this && this._swalTimer) this._swalTimer.pause(); },
            resumeTimer: function () { if (this && this._swalTimer) this._swalTimer.resume(); }
        };
        return api;
    })();

    /* ==================== 本地依赖层 END ==================== */

    // 依赖已内联为本地实现（见下方「本地依赖层」），此处仅自检内联层是否初始化成功
    if (typeof $ === 'undefined' || typeof Swal === 'undefined' || typeof md5 === 'undefined') {
        document.documentElement.appendChild(Object.assign(document.createElement('div'), {
            textContent: '本地依赖层初始化失败，请从项目主页重新安装脚本。',
            style: 'position:fixed;top:0;left:0;right:0;z-index:2147483647;background:#cc3235;color:#fff;padding:8px 12px;font:13px/1.5 sans-serif;text-align:center'
        }));
        return;
    }
    // 列表参数只有页面知道，记下它发的那条请求
    const driveHdrs = {};          // 城通给的下载地址常配一组头，按 URL 存
    const BTN_ICON = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M9 3v9"></path><path d="M5 8l4 4 4-4"></path><path d="M3 12v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3"></path></svg>';
    const ROW_BUTTON = '<div class="ctfile-button ctfile-button-peer fl-button" title="下载助手">' + BTN_ICON + '下载助手</div>';
    const driveTrace = { url: '', body: '' };
    if (/drive\.ctfile\.com/.test(location.host)) {
        const pageWin = (typeof unsafeWindow !== 'undefined' && unsafeWindow) ? unsafeWindow : window;
        try {
            const of = pageWin.fetch;
            pageWin.fetch = function (u, o) {
                try {
                    const url = typeof u === 'string' ? u : ((u && u.url) || '');
                    if (/\/v4\/file\/browse\/list/.test(url) && o && o.body) { driveTrace.url = url; driveTrace.body = String(o.body); }
                } catch (e) { }
                return of.apply(this, arguments);
            };
        } catch (e) { }
        try {
            const X = pageWin.XMLHttpRequest.prototype;
            const ox = X.open, os = X.send;
            X.open = function (m, u) {
                this.__flUrl = u;
                return ox.apply(this, arguments);
            };
            X.send = function (b) {
                try {
                    if (b && /\/v4\/file\/browse\/list/.test(String(this.__flUrl))) { driveTrace.url = this.__flUrl; driveTrace.body = String(b); }
                } catch (e) { }
                return os.apply(this, arguments);
            };
        } catch (e) { }
    }
    let pageNum = '', selectedFiles = [], panInfo = {}, color = '',
        doc = $(document), downloadProgress = {}, pendingRequests = {}, intervals = {};

    const MARK_OK = '<span class="fl-mark ok">✓</span>';
    const MARK_NO = '<span class="fl-mark no">✗</span>';
    let downloadState = { downloader: '', protocol: '' };

    const DOWNLOADERS = [
        { id: 'browser',  name: '浏览器'   },
        { id: 'idm',      name: 'IDM'      },
        { id: 'aria2',    name: 'Aria2'    },
        { id: 'motrix',   name: 'Motrix'   },
        { id: 'xdown',    name: 'XDown'    },
        { id: 'bitcomet', name: 'BitComet' },
        { id: 'term',     name: '终端'     },
    ];

    // act：nav 隐藏 iframe，push 推本机接口，copy 复制
    // id 是分派键，改名会断执行器，别动
    //   http   HTTP 直链       直链下载
    //   idm    本地 HTTP API   IDM 内置接口 1001
    //   transcode 转码        备用视频链路，直链不可用或过慢时可选
    //   rpc    JSON-RPC        aria2/Motrix 的 6800 端口
    //   curl   cURL            命令行
    //   aria2c Aria2c          命令行
    //   bc     BC              bc:// 调起本机客户端
    //   bc-rpc BC-RPC          BitComet 远程下载
    const PROTOCOLS = {
        browser:  [{ id: 'http',   name: 'HTTP 直链',     group: 'link', act: 'nav'  },
                   { id: 'transcode', name: '转码',      group: 'link', act: 'nav'  },
                   { id: 'seg',    name: '多链下载',    group: 'link', act: 'nav'  }],
        idm:      [{ id: 'idm',    name: '本地 HTTP API', group: 'api',  act: 'push' }],
        aria2:    [{ id: 'aria2c', name: 'Aria2c',         group: 'cli',  act: 'copy' },
                   { id: 'rpc',    name: 'JSON-RPC',      group: 'api',  act: 'push' }],
        motrix:   [{ id: 'aria2c', name: 'Aria2c',         group: 'cli',  act: 'copy' },
                   { id: 'rpc',    name: 'JSON-RPC',      group: 'api',  act: 'push' }],
        xdown:    [{ id: 'http',   name: 'HTTP 直链',     group: 'link', act: 'copy', btn: '复制命令' }],
        bitcomet: [{ id: 'bc',     name: 'BC',           group: 'uri',  act: 'copy', btn: '复制命令' },
                   { id: 'bc-rpc', name: 'BC-RPC',       group: 'api',  act: 'push' }],
        term:     [{ id: 'curl',   name: 'cURL',          group: 'cli',  act: 'copy' },
                   { id: 'aria2c', name: 'Aria2c',        group: 'cli',  act: 'copy' }],
    };

    // 四族：直接 GET / 推本机接口 / 生成命令行 / 调 URI
    const PROTO_GROUPS = [
        { id: 'link', label: '直链下载' },
        { id: 'api',  label: 'HTTP 接口推送' },
        { id: 'cli',  label: '命令行' },
        { id: 'uri',  label: 'URI 协议' },
    ];
    const PROTO_TITLES = {
        http:   '浏览器直接请求直链下载',
        transcode: '备用视频链路；直链不可用或过慢时可选',
        idm:    '通过 IDM 本地 HTTP 接口（127.0.0.1:1001）推送任务，需 IDM 已启动且浏览器扩展已注册 client',
        rpc:    '通过 JSON-RPC 接口推送任务：选 Aria2 用「Aria 配置」，选 Motrix 用「Motrix 配置」（端口 Aria2 默认 6800、Motrix 默认 16800），需已开启 RPC',
        curl:   '生成 curl 命令行，适合 Linux/macOS 终端',
        aria2c: '生成 aria2c 命令行，适合终端或脚本',
        bc:     '复制 bc:// 地址：粘贴到 BitComet「文件→打开 URL」或地址栏即可调起客户端下载；无需配置端口，需本机已安装 BitComet',
        'bc-rpc': '点击开始下载后先探测 BitComet 远程下载：可用则直接推送（无浏览器弹框）；不可用则自动改用 bc:// 调起本机 BitComet 客户端',
        seg:    '多路并发分段取回再合并存盘，单连接被限速时能叠加带宽；节点过慢会自动停手',
    };
    const PROTO_ORDER = ['http', 'transcode', 'seg', 'idm', 'rpc', 'curl', 'aria2c', 'bc', 'bc-rpc'];
    const ALL_PROTOCOLS = PROTO_GROUPS.map(g => {
        const seen = {};
        Object.keys(PROTOCOLS).forEach(dl => PROTOCOLS[dl].forEach(p => {
            if (p.group === g.id && !seen[p.id]) seen[p.id] = p;
        }));
        return { label: g.label, items: PROTO_ORDER.filter(id => seen[id]).map(id => seen[id]) };
    });

    let watched = {};
    const terminalType = {
        wc: "Windows CMD",
        wp: "Windows PowerShell",
        lt: "Linux 终端",
        ls: "Linux Shell",
        mt: "MacOS 终端",
    };
    let toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: false,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
    });
    const message = {
        success: (text) => {
            return toast.fire({titleText: text, icon: 'success'});
        },
        error: (text) => {
            return toast.fire({titleText: text, icon: 'error'});
        },
        warning: (text) => {
            return toast.fire({titleText: text, icon: 'warning'});
        },
        info: (text) => {
            return toast.fire({titleText: text, icon: 'info'});
        },
        question: (text) => {
            return toast.fire({titleText: text, icon: 'question'});
        }
    };
    const LEGACY_LOCAL_KEYS = ['baiduyunPlugin_BDUSS', 'accessToken'];
    // 有固定选项的设置：默认值和可选值只写这一处
    const SETTING_CHOICES = {
        setting_theme_mode: {
            value: 'light',
            list: ['light', 'dark'],
            text: { light: '浅色', dark: '深色' },
        },
        setting_terminal_type: {
            value: () => (/Mac/i.test(navigator.platform) ? 'mt' : /Win/i.test(navigator.platform) ? 'wc' : 'lt'),
            list: Object.keys(terminalType),
            text: terminalType,
        },
        setting_theme_color: {
            value: '#09AAFF',
            list: ['#09AAFF', '#cc3235', '#526efa', '#518c17', '#ed944b', '#f969a5', '#bca280'],
        },
        setting_idm_rpc: {
            value: [{ id: '1', default: true }],
        },
    };
    let base = {
        getCookie(name) {
            let cname = name + "=";
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i].trim();
                if (c.indexOf(cname) == 0) return c.substring(cname.length, c.length);
            }
            return "";
        },
        isType(obj) {
            return Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
        },
        getValue(name) {
            return GM_getValue(name);
        },
        // 选项不对就按默认值用，不改存储
        settingChoice(key) {
            const spec = SETTING_CHOICES[key];
            const raw = base.getValue(key);
            if (!spec) return raw;
            if (spec.list) {
                const s = String(raw == null ? '' : raw).toLowerCase();
                const hit = spec.list.find(v => v.toLowerCase() === s);
                return hit || base.settingChoiceDefault(key);
            }
            // 数组型设置目前只有 IDM 编号，id 只收正整数
            const ok = Array.isArray(raw) && raw.length > 0 && raw.every(i => i && typeof i === 'object' && base._idmIdNorm(i.id) !== '');
            // 旧值可能带空格、前导零或是数字型，取用时统一成规范后的字符串
            return ok ? raw.map(i => ({ ...i, id: base._idmIdNorm(i.id) })) : base.settingChoiceDefault(key);
        },
        settingChoiceLabel(key) {
            const v = base.settingChoice(key);
            const spec = SETTING_CHOICES[key];
            return (spec && spec.text && spec.text[v]) || v;
        },
        settingChoiceDefault(key) {
            const f = SETTING_CHOICES[key].value;
            if (typeof f === 'function') return f();
            return Array.isArray(f) ? f.map(i => ({ ...i })) : f;
        },
        setValue(name, value) {
            GM_setValue(name, value);
        },
        deleteValue(name) {
            GM_deleteValue(name);
        },
        getStorage(key) {
            let v = null;
            if (key === 'token' || !LEGACY_LOCAL_KEYS.includes(key)) {
                try { v = localStorage.getItem(key); } catch (e) { /* storage unavailable */ }
            }
            if (v === null || v === undefined) v = GM_getValue(key, null);
            if ((v === null || v === undefined) && LEGACY_LOCAL_KEYS.includes(key)) {
                let legacy = null;
                try { legacy = localStorage.getItem(key); } catch (e) { /* storage unavailable */ }
                if (legacy !== null && legacy !== undefined) {
                    GM_setValue(key, legacy);
                    v = legacy;
                    // 只删刚搬走的那一份，站点换了新值就留着
                    try { if (localStorage.getItem(key) === legacy) localStorage.removeItem(key); } catch (e) { /* storage unavailable */ }
                }
            }
            try {
                return JSON.parse(v);
            } catch (e) {
                return v;
            }
        },
        async refreshAliToken(tk) {
            if (!tk || !tk.refresh_token) return tk;
            const now = Date.now();
            const exp = tk.expire_time ? Date.parse(tk.expire_time) : 0;
            if (!exp || exp - now > 60000) return tk;
            try {
                const res = await base.post(
                    'https://api.aliyundrive.com/v2/account/token',
                    { grant_type: 'refresh_token', refresh_token: tk.refresh_token },
                    { 'content-type': 'application/json;charset=utf-8' }
                );
                // 秒数会被当成年份，超出一天就按 2 小时算
                let expAt = Date.parse(res.expire_time || '');
                if (!(expAt > now && expAt < now + 86400000)) expAt = now + 7200000;
                const merged = Object.assign({}, tk, {
                    access_token: res.access_token,
                    refresh_token: res.refresh_token || tk.refresh_token,
                    token_type: res.token_type || tk.token_type || 'Bearer',
                    expire_time: new Date(expAt).toISOString()
                });
                base.setStorage('token', merged);
                return merged;
            } catch (e) {
                return tk;
            }
        },
        setStorage(key, value) {
            let payload = value;
            if (this.isType(value) === 'object' || this.isType(value) === 'array') {
                payload = JSON.stringify(value);
            }
            if (key === 'token') {
                try { localStorage.setItem(key, payload); } catch (e) { /* storage unavailable */ }
            }
            return GM_setValue(key, payload);
        },
        migrate() {
            const MARK = 'DownloadAssistant_migrated_version';
            // 动作都幂等，每次启动跑一遍；标记只用来证明脚本体跑过
            try {
                // 前两个是别人的键名，只清自己的抽屉；后两个是自家命名空间，连公共桌面一起清
                ['shareToken', 'share_token'].forEach((k) => {
                    try { GM_deleteValue(k); } catch (e) {}
                });
                ['DownloadAssistant_last_downloader', 'DownloadAssistant_last_protocol'].forEach((k) => {
                    try { GM_deleteValue(k); localStorage.removeItem(k); } catch (e) {}
                });
                LEGACY_LOCAL_KEYS.forEach((k) => {
                    // 搬家与清理都在 getStorage 里做，它只删自己搬走的那一份
                    try { base.getStorage(k); } catch (e) {}
                });
                if (GM_getValue(MARK, '') === '') GM_setValue(MARK, '1');
            } catch (e) { /* never block startup */ }
        },
        setClipboard(text) {
            GM_setClipboard(text, 'text');
        },
        e(str) {
                        return btoa(Array.from(new TextEncoder().encode(str), c => String.fromCharCode(c)).join(''));
                    },
        getExtension(name) {
            let s = String(name == null ? '' : name);
            let m = /\.([A-Za-z0-9_]{1,16})$/.exec(s);
            if (!m || s.length === m[0].length) return '';   // 只有点没有主名的不算
            return m[1].toUpperCase();
        },
        sizeFormat(value) {
            if (value === +value) {
                if (!(value >= 1)) return '0B';                 // 小于 1 字节时 log 为负，单位下标算出 undefined
                let unit = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
                let index = Math.floor(Math.log(value) / Math.log(1024));
                let size = value / Math.pow(1024, index);
                size = size.toFixed(1);
                return size + unit[index];
            }
            return '';
        },

        esc(str) {
            return String(str ?? '').replace(/[&<>"']/g, c => ({
                '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
            }[c]));
        },
        // [安全] 下载用 Cookie：默认全量以保持功能；在设置里配置白名单后，仅下发指定的 Cookie 字段
        getDownloadCookie() {
            const raw = String(document.cookie || '');
            let wl = '';
            try { wl = String(base.getValue('setting_cookie_whitelist') || '').trim(); } catch (e) { }
            if (!wl) return raw;
            const names = wl.split(/[,，\s]+/).filter(Boolean);
            return raw.split(';')
                .map(s => s.trim())
                .filter(s => names.some(n => s.indexOf(n + '=') === 0))
                .join('; ');
        },
        fixFilename(name) {
            return String(name || '').replace(/[!?&|`"'*\/:<>\\$;(){}\n\r\x00-\x1F\x7F]/g, '_');
        },
        validRpcDomain(domain) {
            const d = String(domain || '').trim();
            if (!d) return false;
            if (d === 'localhost' || d === '::1' || d === '[::1]') return true;
            let host = d;
            try {
                host = new URL(d.includes('://') ? d : 'http://' + d).hostname;
            } catch (e) { return false; }
            if (host === 'localhost' || host === '::1') return true;
            return /^((127|10)\.\d{1,3}\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3}|169\.254\.\d{1,3}\.\d{1,3})$/.test(host)
                || /^172\.(1[6-9]|2[0-9]|3[01])\.\d{1,3}\.\d{1,3}$/.test(host)
                || /^100\.(6[4-9]|[7-9]\d|1[01]\d|12[0-7])\.\d{1,3}\.\d{1,3}$/.test(host);
        },
        // 端口和路径也得单独校验，否则 `@` 会把 host 换成别人的
        localPartError(port, path) {
            const pn = String(port == null ? '' : port);                 // 不 trim：带空格拼进去就是坏 URL
            if (!/^\d{1,5}$/.test(pn) || +pn < 1 || +pn > 65535) return '端口应为 1-65535 的数字';
            const p = String(path == null ? '' : path);
            if (!/^\/[^@\s]*(?:\?[^@\s]*)?$/.test(p)) return '路径应以 / 开头，且不含 @ 和空格';
            return '';
        },
        // ── 默认下载器：记住一组选择，打开面板直接可用 ──────────────────
        defaultSelection() {
            const s = base._siteKey();
            const dl = base.getValue(`setting_default_downloader_${s}`) || '';
            const proto = base.getValue(`setting_default_protocol_${s}`) || '';
            if (!dl || !PROTOCOLS[dl]) return null;
            if (!PROTOCOLS[dl].some(p => p.id === proto)) return null;
            return { downloader: dl, protocol: proto };
        },
        setDefaultSelection(dl, proto) {
            const s = base._siteKey();
            base.setValue(`setting_default_downloader_${s}`, dl || '');
            base.setValue(`setting_default_protocol_${s}`, proto || '');
        },
        clearDefaultSelection() {
            const s = base._siteKey();
            base.deleteValue(`setting_default_downloader_${s}`);
            base.deleteValue(`setting_default_protocol_${s}`);
        },
        // 默认值按网盘分开存，迅雷的多链/转码才不会把别的站顶掉
        _siteKey() {
            const a = base._activeAdapter || {};
            return a.site || 'default';
        },
        _defaultNames() {
            const d = base.defaultSelection();
            if (!d) return '';
            const dl = DOWNLOADERS.find(x => x.id === d.downloader);
            const p = (PROTOCOLS[d.downloader] || []).find(x => x.id === d.protocol);
            return (dl ? dl.name : d.downloader) + ' · ' + (p ? p.name : d.protocol);
        },
        // 星标只做记号，含义靠文字，图标不抢对比度
        _defaultBtnHtml() {
            const d = base.defaultSelection();
            const same = !!d && downloadState.downloader === d.downloader && downloadState.protocol === d.protocol;
            const star = '<svg viewBox="0 0 12 12" width="11" height="11" aria-hidden="true"><path d="M6 1.5l1.4 2.8 3.1.45-2.25 2.2.53 3.1L6 8.6 3.22 10.05l.53-3.1L1.5 4.75l3.1-.45z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>';
            if (!same) {
                return `<button type="button" id="fl-dl-default-btn" class="fl-dl-default-btn listener-dl-set-default" title="记住当前的下载器与协议，下次打开面板自动选中">${star}<span>设为默认</span></button>`;
            }
            const starOn = star.replace('fill="none"', 'fill="currentColor"');
            const cross = '<svg class="fl-dl-default-x" viewBox="0 0 12 12" width="11" height="11" aria-hidden="true"><path d="M2.8 2.8l6.4 6.4M9.2 2.8L2.8 9.2" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>';
            return `<button type="button" id="fl-dl-default-btn" class="fl-dl-default-btn is-set listener-dl-set-default" title="当前默认下载方式，点此取消">${starOn}<span class="fl-dl-default-tag">默认</span><span class="fl-dl-default-name">${base.esc(base._defaultNames())}</span>${cross}</button>`;
        },
        // 按当前选择改称呼，只有等于默认才给 ✕
        _syncDefaultBtn() {
            const $b = $('#fl-dl-default-btn');
            if (!$b.length) return;
            const html = base._defaultBtnHtml();
            if ($b[0].outerHTML !== html) $b.replaceWith(html);
        },
        _applyDefaultSelection() {
            const d = base.defaultSelection();
            if (!d || downloadState.downloader) return false;   // 同页面内已选过就沿用
            const protos = PROTOCOLS[d.downloader] || [];
            const pick = protos.find(p => p.id === d.protocol && base._protoUsable(p))
                || protos.find(p => base._protoUsable(p));
            downloadState.downloader = d.downloader;
            downloadState.protocol = pick ? pick.id : '';
        },
        // Aria2 与 Motrix 是两套独立参数，key 前缀只在这里定
        _rpcPre(kind) { return kind === 'motrix' ? 'setting_motrix_' : 'setting_rpc_'; },
        _rpcDefaults(kind) { return kind === 'motrix' ? base.motrixDefaults : base.rpcDefaults; },
        _rpcName(kind) { return kind === 'motrix' ? 'Motrix' : 'Aria2'; },
        _rpcValues(kind) {
            const pre = base._rpcPre(kind);
            return {
                domain: base.getValue(pre + 'domain'),
                port: base.getValue(pre + 'port'),
                path: base.getValue(pre + 'path'),
                token: base.getValue(pre + 'token'),
                dir: base.getValue(pre + 'dir'),
            };
        },
        // 主面板选了 Motrix 的 JSON-RPC 就走 Motrix 那套，其余仍走 Aria2
        _rpcKind() { return downloadState.downloader === 'motrix' ? 'motrix' : 'aria'; },
        _rpcConfig(kind) {
            const rpc = base._rpcValues(kind || base._rpcKind());
            if (!base.validRpcDomain(rpc.domain)) {
                base.panelNotice('RPC主机无效，仅允许本机或内网地址（如 http://127.0.0.1）', 'error');
                return null;
            }
            const partErr = base.localPartError(rpc.port, rpc.path);
            if (partErr) {
                base.panelNotice('RPC ' + partErr, 'error');
                return null;
            }
            const dir = base.rpcDir(rpc.dir);
            rpc.dir = dir.dir;
            rpc.url = `${rpc.domain}:${rpc.port}${rpc.path}`;
            return rpc;
        },
        safeRpcFilename(name) {
            let s = String(name || '')
                .replace(/[\x00-\x1F\x7F]/g, '')
                .replace(/[/\\:*?"<>|]/g, '_')
                .replace(/\.\./g, '_')
                .replace(/^\.+/, '_');
            if (!s.trim()) return '';   // 交回 aria2 用链接的文件名，写死会撞名
            if (/^(?:con|prn|aux|nul|com[1-9]|lpt[1-9])[. ]*$/i.test(s)) s = '_' + s;   // 裸设备名会吞文件
            const m = /^(.*?)(\.[^\\/]{1,16})$/.exec(s);
            let stem = m ? m[1] : s, ext = m ? m[2] : '';
            // 按字节：ext4/APFS 限 255 字节，控制文件占 12
            const enc = new TextEncoder();
            let cps = Array.from(stem), bytes = enc.encode(stem + ext).length;
            while (cps.length > 1 && bytes > 243) bytes -= enc.encode(cps.pop()).length;
            return cps.join('') + ext;
        },
        rpcDir(dir) {
            let s = String(dir == null ? '' : dir).trim();
            if (/^".*"$/.test(s) || /^'.*'$/.test(s)) s = s.slice(1, -1);
            s = s.replace(/^([A-Za-z])：/, '$1:').trim();
            if (!s) return { dir: undefined, err: '' };
            if (/[\x00-\x1F\x7F]/.test(s)) return { dir: undefined, err: '保存路径含不可见字符，本次改用下载器默认目录' };
            if (!/^(?:[A-Za-z]:[\\/]|\\\\[^\\/]+[\\/][^\\/]|\/)/.test(s)) return { dir: undefined, err: '保存路径「' + s + '」不是完整路径，本次改用下载器默认目录；请填到具体目录，如 C:\\Downloads' };
            if (!/[^\\/]/.test(s)) return { dir: undefined, err: '保存路径「' + s + '」不是有效的保存目录，本次改用下载器默认目录' };
            const b = s.startsWith('\\\\?\\') || s.startsWith('\\\\.\\') ? s.slice(4) : s;
            if (b !== s && !/^(?:[A-Za-z]:[\\/]|\\\\)/.test(b)) return { dir: undefined, err: '保存路径「' + s + '」这种长路径写法不受支持，本次改用下载器默认目录' };
            if (/^(?:[A-Za-z]:|\\)/.test(b) && /[<>"|?*:]/.test(/^[A-Za-z]:/.test(b) ? b.slice(2) : b)) return { dir: undefined, err: '保存路径含文件名不允许的字符，本次改用下载器默认目录' };
            return { dir: s, err: '' };
        },
        getRandomString(len) {
            len = len || 16;
            let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
            let maxPos = $chars.length;
            let pwd = '';
            for (let i = 0; i < len; i++) {
                pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
            }
            return pwd;
        },
        getSign(e, t, a, n) {
            let i = "";
            if (t) {
                let s = Object.assign({}, t);
                i = JSON.stringify(s),
                    i = i.replace(/\s*/g, ""),
                    i = encodeURIComponent(i);
                let c = i.split(""),
                    u = c.sort();
                i = u.join("");
            }
            let A = md5(base.e(i));
            let l = md5(a + ":" + n);
            return md5(A + l).toUpperCase();
        },
        _resetData() {
                    downloadProgress = {};
                    $.each(pendingRequests, (key) => {
                        (pendingRequests[key]).abort();
                    });
                    $.each(intervals, (key) => {
                        clearInterval(intervals[key]);
                    });
                    intervals = {};
                    pendingRequests = {};
                },
        post(url, data, headers, type) {
                            if (this.isType(data) === 'object') {
                                data = JSON.stringify(data);
                            }
                            return new Promise((resolve, reject) => {
                                const key = 'post_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
                                const clear = () => { delete pendingRequests[key]; };
                                pendingRequests[key] = GM_xmlhttpRequest({
                                    method: "POST", url, headers, data,
                                    responseType: type || 'json',
                                    timeout: 30000,
                                    ontimeout: () => { clear(); reject(new Error('请求超时（30s）')); },
                                    onload: (res) => {
                                        clear();
                                        if (type === 'blob') { resolve(res); return; }
                                        if (res.status >= 400) {
                                            const body = res.response || res.responseText || '';
                                            let msg = 'HTTP ' + res.status;
                                            try {
                                                const parsed = JSON.parse(body);
                                                msg = parsed.message || parsed.msg || parsed.code || msg;
                                            } catch (e) { /* non-JSON error body */ }
                                            reject(new Error(msg));
                                            return;
                                        }
                                        resolve(res.response || res.responseText);
                                    },
                                    onerror: (err) => {
                                        clear();
                                        reject(err);
                                    },
                                });
                            });
                        },
        get(url, headers, type, extra) {
            headers = Object.assign({ 'Referer': location.origin }, headers);
            return new Promise((resolve, reject) => {
                const key = 'get_' + (extra && extra.index != null ? extra.index : Date.now());
                const clear = () => { delete pendingRequests[key]; };
                let requestObj = GM_xmlhttpRequest({
                    method: "GET", url, headers,
                    responseType: type || 'json',
                    timeout: type === 'blob' ? 0 : 30000,
                    ontimeout: () => { clear(); reject(new Error('请求超时（30s）')); },
                    onload: (res) => {
                        clear();
                        if (type !== 'blob' && res.status >= 400) {
                            reject(new Error('HTTP ' + res.status));
                            return;
                        }
                        resolve(res.response || res.responseText);
                    },
                    onprogress: (res) => {
                        if (extra && extra.filename && extra.index != null) {
                            res.total > 0 ? downloadProgress[extra.index] = Math.floor(res.loaded * 100 / res.total) : downloadProgress[extra.index] = 0;
                        }
                    },
                    onloadstart() {
                        if (extra && extra.filename && extra.index != null) {
                            downloadProgress[extra.index] = 0;
                        }
                    },
                    onerror: (err) => {
                        clear();
                        reject(err);
                    },
                });
                pendingRequests[key] = requestObj;
            });
        },
        getFinalUrl(url, headers) {
            headers = Object.assign({ 'Referer': location.origin }, headers);
            return new Promise((resolve, reject) => {
                const key = 'finalurl_' + Date.now();
                const done = (v) => { delete pendingRequests[key]; resolve(v); };
                pendingRequests[key] = GM_xmlhttpRequest({
                    method: "HEAD", url, headers,
                    timeout: 10000,
                    ontimeout: () => { delete pendingRequests[key]; reject(new Error('请求超时（10s）')); },
                    onload: (res) => { done(res.finalUrl || url); },
                    onerror: () => {
                        delete pendingRequests[key];
                        pendingRequests[key] = GM_xmlhttpRequest({
                            method: "GET", url,
                            headers: Object.assign({}, headers, { 'Range': 'bytes=0-0' }),
                            timeout: 10000,
                            ontimeout: () => { delete pendingRequests[key]; reject(new Error('请求超时（10s）')); },
                            onload: (res) => { done(res.finalUrl || url); },
                            onerror: () => { delete pendingRequests[key]; resolve(url); }
                        });
                    }
                });
            });
        },
        stringify(obj) {
            let str = '';
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    var value = obj[key];
                    if (Array.isArray(value)) {
                        for (var i = 0; i < value.length; i++) {
                            str += encodeURIComponent(key) + '=' + encodeURIComponent(value[i]) + '&';
                        }
                    } else {
                        str += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
                    }
                }
            }
            return str.slice(0, -1);
        },
        addStyle(id, tag, css) {
            tag = tag || 'style';
            let doc = document, styleDom = doc.getElementById(id);
            if (styleDom) return;
            let style = doc.createElement(tag);
            style.rel = 'stylesheet';
            style.id = id;
            tag === 'style' ? style.innerHTML = css : style.href = css;
            doc.getElementsByTagName('head')[0].appendChild(style);
        },
        sleep(time) {
            return new Promise(resolve => setTimeout(resolve, time));
        },
        // [稳定性] 并发池：按 limit 分批执行任务，结果顺序与入参一致；单个失败不影响其它项
        async mapLimit(items, limit, fn) {
            const list = Array.isArray(items) ? items : [];
            const out = new Array(list.length);
            let cursor = 0;
            const worker = async () => {
                while (cursor < list.length) {
                    const i = cursor++;
                    try { out[i] = await fn(list[i], i); }
                    catch (e) { console.warn('并发任务失败', e); out[i] = null; }
                }
            };
            const n = Math.max(1, Math.min(limit || 5, list.length || 1));
            await Promise.all(Array.from({ length: n }, worker));
            return out;
        },
        findReact(dom, traverseUp = 0) {
            if (!dom) return null;
            const key = Object.keys(dom).find(key => {
                return key.startsWith("__reactFiber$")
                    || key.startsWith("__reactInternalInstance$");
            });
            if (!key) return null;
            const domFiber = dom[key];
            if (domFiber == null) return null;
            if (domFiber._currentElement) {
                let compFiber = domFiber._currentElement._owner;
                for (let i = 0; i < traverseUp; i++) {
                    if (!compFiber || !compFiber._currentElement) return null;
                    compFiber = compFiber._currentElement._owner;
                }
                return compFiber ? compFiber._instance : null;
            }
            const GetCompFiber = fiber => {
                let parentFiber = fiber.return;
                while (parentFiber && typeof parentFiber.type == "string") {
                    parentFiber = parentFiber.return;
                }
                return parentFiber;
            };
            let compFiber = GetCompFiber(domFiber);
            if (!compFiber) return null;
            for (let i = 0; i < traverseUp; i++) {
                compFiber = GetCompFiber(compFiber);
                if (!compFiber) return null;
            }
            return compFiber.stateNode || compFiber;
        },
        // Aria2 / Motrix 各存一套参数：主面板选哪个下载器就用哪套
        rpcDefaults: { domain: 'http://localhost', port: '6800', path: '/jsonrpc', token: '', dir: '' },
        motrixDefaults: { domain: 'http://localhost', port: '16800', path: '/jsonrpc', token: '', dir: '' },
        bcDefaults: { domain: 'http://localhost', port: '8080', path: '/panel/task_add_httpftp_result', user: '', pass: '', dir: '' },
        initDefaultConfig() {
            let value = [
                { name: 'setting_rpc_domain', value: base.rpcDefaults.domain },
                { name: 'setting_rpc_port', value: base.rpcDefaults.port },
                { name: 'setting_rpc_path', value: base.rpcDefaults.path },
                { name: 'setting_rpc_token', value: base.rpcDefaults.token },
                { name: 'setting_rpc_dir', value: base.rpcDefaults.dir },
                { name: 'setting_motrix_domain', value: base.motrixDefaults.domain },
                { name: 'setting_motrix_port', value: base.motrixDefaults.port },
                { name: 'setting_motrix_path', value: base.motrixDefaults.path },
                { name: 'setting_motrix_token', value: base.motrixDefaults.token },
                { name: 'setting_motrix_dir', value: base.motrixDefaults.dir },
                { name: 'setting_bitcomet_domain', value: base.bcDefaults.domain },
                { name: 'setting_bitcomet_port', value: base.bcDefaults.port },
                { name: 'setting_bitcomet_path', value: base.bcDefaults.path },
                { name: 'setting_bitcomet_user', value: base.bcDefaults.user },
                { name: 'setting_bitcomet_pass', value: base.bcDefaults.pass },
                { name: 'setting_bitcomet_dir', value: base.bcDefaults.dir },
            ];
            value.forEach((v) => {
                base.getValue(v.name) === undefined && base.setValue(v.name, v.value);
            });
            if (base.getValue('setting_rpc_dir') === 'C:') base.setValue('setting_rpc_dir', '');   // 清掉旧默认值
            Object.keys(SETTING_CHOICES).forEach((k) => {
                base.getValue(k) === undefined && base.setValue(k, base.settingChoiceDefault(k));
            });
        },
        showSetting() {
            const rpcVal = `${base.getValue('setting_rpc_domain')}:${base.getValue('setting_rpc_port')}${base.getValue('setting_rpc_path')}`;
            const motrixVal = `${base.getValue('setting_motrix_domain')}:${base.getValue('setting_motrix_port')}${base.getValue('setting_motrix_path')}`;
            const idmId = base._idmId();
            let colorBtn = '';
            SETTING_CHOICES.setting_theme_color.list.forEach((v) => {
                colorBtn += `<div data-color="${v}" style="background: ${v};border: 1px solid ${v}" class="fl-color-box listener-color ${v === base.settingChoice('setting_theme_color') ? 'checked' : ''}" tabindex="0" role="button"></div>`;
            });
            let termOpts = '';
            Object.keys(terminalType).forEach(k => {
                termOpts += `<option value="${k}" ${base.settingChoice('setting_terminal_type') === k ? 'selected' : ''}>${terminalType[k]}</option>`;
            });
            const dom = `<div class="fl-setting-list">
                <div class="fl-setting-row fl-setting-row-click listener-open-idm-setting">
                    <div class="fl-setting-row-main"><div class="fl-setting-row-name">IDM 客户端</div><div class="fl-setting-row-sub">客户端 ID：${base.esc(idmId)}</div></div>
                </div>
                <div class="fl-setting-row fl-setting-row-click listener-open-motrix-setting">
                    <div class="fl-setting-row-main"><div class="fl-setting-row-name">Motrix 配置</div><div class="fl-setting-row-sub">${base.esc(motrixVal)}</div></div>
                </div>
                <div class="fl-setting-row fl-setting-row-click listener-open-rpc-setting">
                    <div class="fl-setting-row-main"><div class="fl-setting-row-name">Aria 配置</div><div class="fl-setting-row-sub">${base.esc(rpcVal)}</div></div>
                </div>
                <div class="fl-setting-row fl-setting-row-click listener-open-bc-setting">
                    <div class="fl-setting-row-main"><div class="fl-setting-row-name">BitComet 配置</div><div class="fl-setting-row-sub">${base.esc(base.getValue('setting_bitcomet_domain') || '')}:${base.esc(base.getValue('setting_bitcomet_port') || '')}${base.esc(base.getValue('setting_bitcomet_path') || '')}</div></div>
                </div>
                <div class="fl-setting-row">
                    <div class="fl-setting-row-main"><div class="fl-setting-row-name">终端类型</div></div>
                    <select class="fl-input listener-terminal fl-setting-select">${termOpts}</select>
                </div>
                <div class="fl-setting-row">
                    <div class="fl-setting-row-main"><div class="fl-setting-row-name">主题颜色</div></div>
                    <div class="fl-color">${colorBtn}</div>
                </div>
                <div class="fl-setting-row">
                    <div class="fl-setting-row-main"><div class="fl-setting-row-name">深色模式</div><div class="fl-setting-row-sub listener-theme-mode-sub">${base.settingChoiceLabel('setting_theme_mode')}</div></div>
                    <button type="button" class="fl-input listener-theme-mode fl-setting-theme-btn">${base.settingChoiceLabel('setting_theme_mode')}</button>
                </div>
                <div class="fl-setting-row fl-setting-row-tall">
                    <div class="fl-setting-row-main"><div class="fl-setting-row-name">下载 Cookie 白名单</div><div class="fl-setting-row-sub fl-setting-row-sub-wrap">留空=下发全部（默认）；填 Cookie 名，逗号分隔，则仅下发指定字段，避免整段会话凭证进入命令行/剪贴板</div></div>
                    <input type="text" class="fl-input listener-cookie-whitelist" style="max-width:170px;min-width:110px" placeholder="留空=全部" value="${base.esc(base.getValue('setting_cookie_whitelist') || '')}">
                </div>
                <div class="fl-setting-help">帮助：<a href="https://www.youxiaohou.com/zh-cn/motrix.html" target="_blank" rel="noreferrer noopener">RPC 配置说明</a> · <a href="https://www.youxiaohou.com/zh-cn/curl.html" target="_blank" rel="noreferrer noopener">cURL 使用教程</a> · <a href="https://github.com/cpboy2020/script_hub" target="_blank" rel="noreferrer noopener">项目主页</a></div>
            </div>`;
            Swal.fire({
                title: '助手配置',
                html: dom,
                width: 520,
                padding: '20px 20px 20px',
                showCloseButton: true,
                showConfirmButton: false,
                footer: '',
                target: document.body,
                customClass: {
                    container: 'ferrylink-swal-container',
                    popup: 'ferrylink-swal-popup'
                },
                didOpen: () => {
                    const container = Swal.getContainer();
                    const popup = Swal.getPopup();
                    if (container) container.style.setProperty('z-index', '2147483647', 'important');
                    if (popup) popup.style.setProperty('z-index', '2147483647', 'important');
                    base._panelChrome('setting');
                },
            }).then(() => {
                if (base._settingNav) { base._settingNav = false; return; }
                message.success('设置已保存，立即生效');
            }).catch(err => {
                console.error('[showSetting] Swal.fire error:', err);
            });
            this._bindSettingEvents();
        },
        // kind: 'aria'（默认）| 'motrix' —— 两者字段与行为一致，只是存取各自的参数
        showRPCSetting(fromSetting, kind) {
            const k = kind === 'motrix' ? 'motrix' : 'aria';
            const pre = base._rpcPre(k);
            const isMt = k === 'motrix';
            const val = (f) => base.esc(base.getValue(pre + f));
            const tag = isMt ? ' data-rpc="motrix"' : '';
            const tip = isMt
                ? '本页配置 Motrix 的 JSON-RPC 参数：Motrix 默认端口 16800，需在「偏好设置 → 进阶 → RPC」中开启远程访问。'
                : '本页配置 Aria2 的 JSON-RPC 参数：Aria2 默认端口 6800，按实际运行的客户端填写即可。';
            const dom = `<div>
                <div class="fl-dl-warning-bar" style="display:block">${tip}</div>
                <label class="fl-setting-label"><div class="fl-label">RPC主机</div><input type="text"${tag} placeholder="主机地址，需带上http(s)://" class="fl-input listener-domain" value="${val('domain')}"></label>
                <label class="fl-setting-label"><div class="fl-label">RPC端口</div><input type="text"${tag} placeholder="端口号，${isMt ? 'Motrix 默认 16800' : 'Aria2 默认 6800'}" class="fl-input listener-port" value="${val('port')}"></label>
                <label class="fl-setting-label"><div class="fl-label">RPC路径</div><input type="text"${tag} placeholder="路径，默认为/jsonrpc" class="fl-input listener-path" value="${val('path')}"></label>
                <label class="fl-setting-label"><div class="fl-label">RPC密钥</div><input type="password"${tag} autocomplete="off" placeholder="无密钥无需填写" class="fl-input listener-token" value="${val('token')}"></label>
                <label class="fl-setting-label"><div class="fl-label">保存路径</div><input type="text"${tag} placeholder="留空则使用下载器默认目录；Windows 请填完整路径，如 C:\\Downloads" class="fl-input listener-dir" value="${val('dir')}"></label>
                <div class="fl-setting-actions"><button type="button" class="fl-dl-btn fl-dl-btn-secondary listener-reset-rpc"${tag}>恢复默认</button><button type="button" class="fl-dl-btn fl-dl-btn-secondary listener-test-rpc"${tag}>测试连接</button></div>
            </div>`;
            Swal.fire({
                title: isMt ? 'Motrix 配置' : 'Aria 配置',
                html: dom,
                showCloseButton: true,
                showConfirmButton: false,
                target: document.body,
                customClass: {
                    container: 'ferrylink-swal-container',
                    popup: 'ferrylink-swal-popup fl-popup-flip'
                },
                didOpen: () => {
                    const container = Swal.getContainer();
                    const popup = Swal.getPopup();
                    if (container) container.style.setProperty('z-index', '2147483647', 'important');
                    if (popup) popup.style.setProperty('z-index', '2147483647', 'important');
                    base._panelChrome('sub');
                },
                willClose: () => {
                    if (fromSetting) base.showSetting();
                    else message.success('设置已保存，立即生效');
                },
            });
            this._bindSettingEvents();
        },
        showIDMSetting(fromSetting) {
            const idmId = base._idmId();
            const dom = `<div>
                <label class="fl-setting-label"><div class="fl-label">客户端 ID</div><span class="fl-idm-field"><input type="text" placeholder="IDM 多配置时的客户端编号，默认 1" class="fl-input listener-idm-id" data-idm="${base.esc(idmId)}" aria-describedby="fl-idm-tip" value="${base.esc(idmId)}"><span class="fl-idm-bubble" id="fl-idm-tip" role="status" aria-live="polite"><svg class="fl-idm-bubble-icon" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false"><circle cx="8" cy="8" r="7" fill="#f2c14e"/><path d="M8 4.2v4.4" stroke="#1f2533" stroke-width="1.6" stroke-linecap="round"/><circle cx="8" cy="11.3" r=".95" fill="#1f2533"/></svg>仅接受数字，其它字符自动过滤</span></span></label>
                <div class="fl-setting-tip-text">Client ID 是 IDM 用来区分不同浏览器捕获扩展的编号，多浏览器需各配一个，填错会导致推送失败，一般保持默认 1 即可。取值方法：浏览器进入 IDM 扩展的「管理扩展/调试附加组件」检查视图，在 DevTools 的「应用程序/存储 → 扩展存储 → 本地」里找 client 对应的数字。</div>
            </div>`;
            Swal.fire({
                title: 'IDM 客户端设置',
                html: dom,
                showCloseButton: true,
                showConfirmButton: false,
                target: document.body,
                customClass: {
                    container: 'ferrylink-swal-container',
                    popup: 'ferrylink-swal-popup fl-popup-flip'
                },
                didOpen: () => {
                    const container = Swal.getContainer();
                    const popup = Swal.getPopup();
                    if (container) container.style.setProperty('z-index', '2147483647', 'important');
                    if (popup) popup.style.setProperty('z-index', '2147483647', 'important');
                    base._panelChrome('sub');
                },
                willClose: () => {
                    if (fromSetting) base.showSetting();
                    else message.success('设置已保存，立即生效');
                },
            });
            this._bindSettingEvents();
        },
        showBitcometSetting(fromSetting) {
            const domain = base.getValue('setting_bitcomet_domain') || '';
            const port = base.getValue('setting_bitcomet_port') || '8080';
            const path = base.getValue('setting_bitcomet_path') || '/panel/task_add_httpftp_result';
            const user = base.getValue('setting_bitcomet_user') || '';
            const pass = base.getValue('setting_bitcomet_pass') || '';
            const dir = base.getValue('setting_bitcomet_dir') || '';
            const dom = `<div>
                <label class="fl-setting-label"><div class="fl-label">服务器地址</div><input type="text" placeholder="主机地址，需带上http(s)://" class="fl-input listener-bc-domain" value="${base.esc(domain)}"></label>
                <label class="fl-setting-label"><div class="fl-label">服务器端口</div><input type="text" placeholder="端口号，一般为 8080" class="fl-input listener-bc-port" value="${base.esc(port)}"></label>
                <label class="fl-setting-label"><div class="fl-label">请求路径</div><input type="text" placeholder="一般为 /panel/task_add_httpftp_result" class="fl-input listener-bc-path" value="${base.esc(path)}"></label>
                <label class="fl-setting-label"><div class="fl-label">服务器账号</div><input type="text" placeholder="远程下载服务的账号，无账号无需填写" class="fl-input listener-bc-user" value="${base.esc(user)}"></label>
                <label class="fl-setting-label"><div class="fl-label">服务器密码</div><input type="password" placeholder="远程下载服务的密码，无密码无需填写" class="fl-input listener-bc-pass" value="${base.esc(pass)}"></label>
                <label class="fl-setting-label"><div class="fl-label">保存路径</div><input type="text" placeholder="文件下载后保存路径，留空则使用 BitComet 默认目录" class="fl-input listener-bc-dir" value="${base.esc(dir)}"></label>
                <div class="fl-setting-actions"><button type="button" class="fl-dl-btn fl-dl-btn-secondary listener-reset-bc">恢复默认</button><button type="button" class="fl-dl-btn fl-dl-btn-secondary listener-test-bc">测试连接</button></div>
            </div>`;
            Swal.fire({
                title: 'BitComet 配置',
                html: dom,
                showCloseButton: true,
                showConfirmButton: false,
                target: document.body,
                customClass: {
                    container: 'ferrylink-swal-container',
                    popup: 'ferrylink-swal-popup fl-popup-flip'
                },
                didOpen: () => {
                    const container = Swal.getContainer();
                    const popup = Swal.getPopup();
                    if (container) container.style.setProperty('z-index', '2147483647', 'important');
                    if (popup) popup.style.setProperty('z-index', '2147483647', 'important');
                    base._panelChrome('sub');
                },
                willClose: () => {
                    if (fromSetting) base.showSetting();
                    else message.success('设置已保存，立即生效');
                },
            });
            this._bindSettingEvents();
        },
        _bindSettingEvents() {
            if (this.settingBound) return;
            this.settingBound = true;
            doc.on('click', '.listener-color', (e) => {
                const picked = e.target.dataset.color;
                if (!picked || base.settingChoice('setting_theme_color') === picked) return;
                base.applyThemeColor(picked);
                doc.find('.listener-color').removeClass('checked');
                $(e.currentTarget).addClass('checked');
                base.panelNotice('主题色已切换', 'success');
            });
            doc.on('keydown', '.listener-color', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.currentTarget.click(); }
            });
            doc.on('click', '.listener-theme-mode', () => {
                const modes = SETTING_CHOICES.setting_theme_mode.list;
                const next = modes[(modes.indexOf(base.settingChoice('setting_theme_mode')) + 1) % modes.length];
                base.setValue('setting_theme_mode', next);
                base.applyThemeMode();
                $('.listener-theme-mode').text(base.settingChoiceLabel('setting_theme_mode'));
                $('.listener-theme-mode-sub').text(base.settingChoiceLabel('setting_theme_mode'));
            });
            doc.on('input', '.listener-domain', async (e) => {
                base.setValue(base._rpcPre(e.target.getAttribute('data-rpc')) + 'domain', e.target.value);
            });
            doc.on('input', '.listener-port', async (e) => {
                base.setValue(base._rpcPre(e.target.getAttribute('data-rpc')) + 'port', e.target.value);
            });
            doc.on('input', '.listener-path', async (e) => {
                base.setValue(base._rpcPre(e.target.getAttribute('data-rpc')) + 'path', e.target.value);
            });
            doc.on('input', '.listener-token', async (e) => {
                base.setValue(base._rpcPre(e.target.getAttribute('data-rpc')) + 'token', e.target.value);
            });
            doc.on('input', '.listener-dir', async (e) => {
                base.setValue(base._rpcPre(e.target.getAttribute('data-rpc')) + 'dir', e.target.value);
            });
            doc.on('input', '.listener-cookie-whitelist', (e) => {
                base.setValue('setting_cookie_whitelist', e.target.value);
            });
            doc.on('input', '.listener-idm-id', async (e) => {
                const el = e.target, raw = el.value || '';
                // 打字时会经过 0 和前导零，正整数交给 _idmIdNorm
                if (raw !== '' && !/^\d+$/.test(raw)) {
                    el.value = el.dataset.idm || '';
                    el.setAttribute('aria-invalid', 'true');
                    const bubble = $(el).siblings('.fl-idm-bubble');
                    bubble.addClass('fl-shown');
                    // 先撤掉再重排，动画才会在连着出错时重播
                    bubble.removeClass('is-shake');
                    void bubble[0].offsetWidth;
                    bubble.addClass('is-shake');
                    clearTimeout(bubble.data('hide'));
                    bubble.data('hide', setTimeout(() => {
                        bubble.removeClass('fl-shown');
                        el.removeAttribute('aria-invalid');
                    }, 2400));
                    return;
                }
                el.removeAttribute('aria-invalid');
                const digits = raw.replace(/^0+/, '');
                if (digits !== raw) el.value = digits;
                el.dataset.idm = digits;
                if (digits !== '') base.setValue('setting_idm_rpc', [{ id: digits, default: true }]);
            });
            doc.on('change', '.listener-idm-id', async (e) => {
                const v = base._idmIdNorm(e.target.value) || '1';
                e.target.dataset.idm = v;
                e.target.removeAttribute('aria-invalid');
                e.target.value = v;
                base.setValue('setting_idm_rpc', [{ id: v, default: true }]);
            });
            doc.on('change', '.listener-terminal', async (e) => {
                base.setValue('setting_terminal_type', e.target.value);
            });
            doc.on('click', '.listener-open-rpc-setting', () => {
                base._settingNav = true;
                Swal.close();
                base.showRPCSetting(true, 'aria');
            });
            doc.on('click', '.listener-open-motrix-setting', () => {
                base._settingNav = true;
                Swal.close();
                base.showRPCSetting(true, 'motrix');
            });
            doc.on('click', '.listener-open-idm-setting', () => {
                base._settingNav = true;
                Swal.close();
                base.showIDMSetting(true);
            });
            doc.on('click', '.listener-open-bc-setting', () => {
                base._settingNav = true;
                Swal.close();
                base.showBitcometSetting(true);
            });
            doc.on('input', '.listener-bc-domain', async (e) => {
                base.setValue('setting_bitcomet_domain', e.target.value);
            });
            doc.on('input', '.listener-bc-port', async (e) => {
                base.setValue('setting_bitcomet_port', e.target.value);
            });
            doc.on('input', '.listener-bc-path', async (e) => {
                base.setValue('setting_bitcomet_path', e.target.value);
            });
            doc.on('input', '.listener-bc-user', async (e) => {
                base.setValue('setting_bitcomet_user', e.target.value);
            });
            doc.on('input', '.listener-bc-pass', async (e) => {
                base.setValue('setting_bitcomet_pass', e.target.value);
            });
            doc.on('input', '.listener-bc-dir', async (e) => {
                base.setValue('setting_bitcomet_dir', e.target.value);
            });
            doc.on('click', '.listener-test-rpc', async (e) => {
                const $btn = $(e.currentTarget).prop('disabled', true).text('测试中…');
                await base.testRpcConnection(e.currentTarget.getAttribute('data-rpc'));
                $btn.prop('disabled', false).text('测试连接');
            });
            doc.on('click', '.listener-test-bc', async (e) => {
                const $btn = $(e.currentTarget).prop('disabled', true).text('测试中…');
                await base.testBitcometConnection();
                $btn.prop('disabled', false).text('测试连接');
            });
            doc.on('click', '.listener-reset-rpc', (e) => {
                const kind = e.currentTarget.getAttribute('data-rpc') === 'motrix' ? 'motrix' : 'aria';
                const name = base._rpcName(kind);
                if (!window.confirm('将重置所有 ' + name + ' 配置为默认值？当前自定义设置会被覆盖。')) return;
                const pre = base._rpcPre(kind), def = base._rpcDefaults(kind);
                ['domain', 'port', 'path', 'token', 'dir'].forEach(f => base.setValue(pre + f, def[f]));
                // 面板里的输入框跟着回填，否则看到还是旧值
                [['domain', '.listener-domain'], ['port', '.listener-port'], ['path', '.listener-path'], ['token', '.listener-token'], ['dir', '.listener-dir']]
                    .forEach(([f, sel]) => $(sel).val(def[f]));
                base.panelNotice(name + ' 配置已恢复默认', 'success');
            });
            doc.on('click', '.listener-reset-bc', () => {
                if (!window.confirm('将重置所有 BitComet 配置为默认值？当前自定义设置会被覆盖。')) return;
                ['setting_bitcomet_domain', 'setting_bitcomet_port', 'setting_bitcomet_path', 'setting_bitcomet_user', 'setting_bitcomet_pass', 'setting_bitcomet_dir']
                    .forEach(k => base.setValue(k, base.bcDefaults[k.slice('setting_bitcomet_'.length).toLowerCase()]));
                base.panelNotice('BitComet 配置已恢复默认', 'success');
            });
        },
        // 编号是正整数，先去掉前导零；不合法返回空串
        _idmIdNorm(v) {
            if (typeof v !== 'string' && typeof v !== 'number') return '';
            const s = String(v).trim().replace(/^0+/, '');
            return /^\d+$/.test(s) ? s : '';
        },
        _idmId() {
            const idmCfg = base.settingChoice('setting_idm_rpc');
            return (Array.isArray(idmCfg) ? (idmCfg.find(i => i && i.default) || idmCfg[0] || {}).id : (idmCfg && idmCfg.id)) || '1';
        },
        async testRpcConnection(kind) {
            const k = kind === 'motrix' ? 'motrix' : 'aria';
            const name = base._rpcName(k);
            const cfg = base._rpcValues(k);
            const domain = cfg.domain, port = cfg.port, path = cfg.path, token = cfg.token;
            if (!base.validRpcDomain(domain)) { base.panelNotice('请先填写正确的 RPC 主机（仅允许本机或内网地址）', 'error'); return; }
            const pErr = base.localPartError(port, path);
            if (pErr) { base.panelNotice('RPC ' + pErr, 'error'); return; }
            const url = `${domain}:${port}${path}`;
            try {
                const res = await base.post(url, { id: Date.now(), jsonrpc: '2.0', method: 'aria2.getVersion', params: [`token:${token || ''}`] });
                const v = res && res.result && res.result.version;
                if (v) base.panelNotice('连接成功，' + name + ' 版本 ' + v, 'success');
                else base.panelNotice(name + ' 拒绝请求：' + ((res && res.error && res.error.message) || '未知错误（请检查密钥与路径）'), 'error');
            } catch (e) {
                base.panelNotice('无法连接 RPC（' + domain + ':' + port + '）' + (e && e.message ? '：' + e.message : '') + '，请确认下载器已启动且 RPC 服务已开启', 'error');
            }
        },
        async testBitcometConnection(silent) {
            const domain = base.getValue('setting_bitcomet_domain'),
                port = base.getValue('setting_bitcomet_port'),
                path = base.getValue('setting_bitcomet_path'),
                user = base.getValue('setting_bitcomet_user'),
                pass = base.getValue('setting_bitcomet_pass');
            if (!base.validRpcDomain(domain)) { if (!silent) base.panelNotice('请先填写正确的服务器地址（仅允许本机或内网地址）', 'error'); return false; }
            const pErr = base.localPartError(port, path);
            if (pErr) { if (!silent) base.panelNotice('BitComet ' + pErr, 'error'); return false; }
            const url = domain + ':' + port + path;
            const origin = domain + ':' + port;
            try {
                await this.post(url, 'a=1', {
                    'Authorization': 'Basic ' + this.e(user + ':' + pass),
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Cache-Control': 'max-age=0',
                    'Origin': origin,
                    'Referer': origin + '/panel/task_add_httpftp',
                    'User-Agent': navigator.userAgent,
                }, 'text');
                if (!silent) base.panelNotice('连接成功', 'success');
                return true;
            } catch (e) {
                if (silent) return false;
                const msg = (e && e.message) || '';
                if (/401/.test(msg)) base.panelNotice('服务器已连接，但账号或密码错误', 'warning');
                else base.panelNotice('无法连接 BitComet（' + domain + ':' + port + '）' + (msg ? '：' + msg : ''), 'error');
                return false;
            }
        },
        registerMenuCommand() {
            GM_registerMenuCommand('设置', () => {
                this.showSetting();
            });
        },
        panelNotice(text, type, ms) {
            base._lastNotice = text;
            $('.fl-dl-toast').remove();
            const $t = $(`<div class="fl-dl-toast${type ? ' fl-dl-toast-' + type : ''}"><span>${base.esc(text)}</span></div>`);
            $t.attr('role', type === 'error' ? 'alert' : 'status');
            $('body').append($t);
            $t.hide().fadeIn(180);
            clearTimeout(this._noticeTimer);
            this._noticeTimer = setTimeout(() => { $t.fadeOut(200, () => $t.remove()); }, ms || 2500);
        },
        createTip() {
            doc.on('click', '.fl-dl-chip[data-type="downloader"]', (e) => {
                const id = e.currentTarget.dataset.id;
                const oldProto = downloadState.protocol;
                $('.fl-dl-chip[data-type="downloader"]').removeClass('active');
                if (downloadState.downloader === id) {
                    downloadState.downloader = '';
                    downloadState.protocol = '';
                    base._updateProtocolChips();
                    base._updateMainButton();
                    return;
                }
                downloadState.downloader = id;
                $(e.currentTarget).addClass('active');
                const protos = PROTOCOLS[id];
                if (oldProto && protos.some(p => p.id === oldProto)) {
                    downloadState.protocol = oldProto;
                } else {
                    downloadState.protocol = protos.length === 1 ? protos[0].id : '';
                }
                base._updateProtocolChips();
                base._updateMainButton();
            });
            doc.on('click', '.fl-dl-chip[data-type="protocol"]', (e) => {
                if (!downloadState.downloader) { base.panelNotice('请先在上方选择下载器', 'info'); return; }
                downloadState.protocol = e.currentTarget.dataset.id;
                $('.fl-dl-chip[data-type="protocol"]').removeClass('active');
                $(e.currentTarget).addClass('active');
                base._updateMainButton();
                base._paintLinkCells();
                base._syncDefaultBtn();
            });
            doc.on('click', '.listener-dl-execute', async () => {
                if (!downloadState.downloader || !downloadState.protocol) return;
                if (!base.panelFiles || !base.panelFiles.length) return;
                if (base._executing) return;   // 上一次还没跑完，重复点会把提示弹两遍
                base._executing = true;
                try {
                    const files = base.panelFiles.map((f, i) => ({ ...f, _idx: i }));
                    await base.executeAction(files, base._activeAdapter);
                } finally {
                    base._executing = false;
                }
            });
            doc.on('click', '.listener-dl-copy-name', (e) => {
                if (!base.panelFiles || !base.panelFiles.length) return;
                const names = base.panelFiles.filter(f => !f.isFolder).map(f => f.filename);
                const $btn = $(e.currentTarget);
                const old = $btn.text();
                if (!names.length) { $btn.text('没有可复制的文件名'); setTimeout(() => $btn.text(old), 1500); return; }
                base.setClipboard(names.join('\n'));
                $btn.text('复制完成：成功 ' + names.length + '，失败 0');
                setTimeout(() => $btn.text(old), 1500);
            });
            doc.on('click', '.listener-dl-copy-link', (e) => {
                if (!base.panelFiles || !base.panelFiles.length) return;
                const useMedia = downloadState.protocol === 'transcode' && base._hasMediaLink();
                const links = base.panelFiles.filter(f => !f.isFolder).map(f => useMedia ? f.mediaLink : f.dlink).filter(u => u && /^https?:\/\//.test(u));
                const $btn = $(e.currentTarget);
                const old = $btn.text();
                if (!links.length) { $btn.text('没有可复制的链接'); setTimeout(() => $btn.text(old), 1500); return; }
                base.setClipboard(links.join('\n'));
                $btn.text('复制完成：成功 ' + links.length + '，失败 0');
                setTimeout(() => $btn.text(old), 1500);
            });
            doc.on('click', '.listener-dl-set-default', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const cur = base.defaultSelection();
                const same = cur && cur.downloader === downloadState.downloader && cur.protocol === downloadState.protocol;
                if (same) {
                    base.clearDefaultSelection();
                    base.panelNotice('已取消默认下载方式', 'info');
                } else if (downloadState.downloader && downloadState.protocol) {
                    base.setDefaultSelection(downloadState.downloader, downloadState.protocol);
                    base.panelNotice('已设为默认：' + base._defaultNames(), 'success');
                } else {
                    base.panelNotice('请先选择下载器和协议，再设为默认', 'info');
                    return;
                }
                $('#fl-dl-default-btn').replaceWith(base._defaultBtnHtml());
            });
            doc.on('click', '.listener-open-setting', (e) => {
                e.preventDefault();
                e.stopPropagation();
                base.showSetting();
            });
            doc.on('click', '.listener-dl-confirm', () => Swal.close());
            doc.on('click', '.listener-dl-retry', async () => {
                const adapter = base._activeAdapter;
                if (!adapter) return;
                Swal.close();
                Swal.showLoading();
                try { await adapter.getPCSLink(); }
                catch (err) { Swal.close(); base.renderErrorPanel('获取下载链接失败：' + (err && err.message || '未知错误'), adapter); }
                finally { base.closeIfLoading(); }
            });
        },
        createDownloadIframe() {
            if ($('#downloadIframe').length > 0) return;
            let $div = $('<div style="padding:0;margin:0;display:block"></div>');
            let $iframe = $('<iframe src="about:blank" id="downloadIframe" style="display:none"></iframe>');
            $div.append($iframe);
            $('body').append($div);
        },
        // 加速链用 filename 参数补齐文件名
        _withName(link, filename) {
            try {
                if (!/^dl-c-[\w-]+\.drive\.quark\.cn$/i.test(new URL(link).hostname)) return link;
            } catch (e) { return link; }
            if (/[?&]filename=/i.test(link)) return link;
            const name = base.fixFilename(filename || '');
            if (!name) return link;
            return link + (link.indexOf('?') >= 0 ? '&' : '?') + 'filename=' + encodeURIComponent(name);
        },
        async iframeDownload(link, filename) {
            if (!/^https?:\/\//i.test(link)) {
                base.panelNotice('提示：下载链接无效！', 'error');
                return false;
            }
            // 城通直链带 inline，浏览器会拿去播放
            if (/ctfile\.|545c\.com/.test(location.host)) {
                let name = '';
                try { name = decodeURIComponent((link.match(/[?&]fname=([^&]*)/) || [])[1] || ''); } catch (e) { }
                name = base.fixFilename(name).slice(0, 120) || 'download';
                let why = '';
                try { return await this._swDownload(link, name); }
                catch (e) { why = (e && e.message) || '中转不可用'; }
                let r = await this._opfsDownload(link, name);
                if (r && r.ok) return r;
                // 两条路都不通就让浏览器打开
                GM_openInTab(link, { active: false, insert: true, setParent: true });
                base.panelNotice('脚本取不回这条直链（' + why + '），已在新标签打开', 'info', 9000);
                return { ok: true };
            }
            link = base._withName(link, filename);
            this.createDownloadIframe();
            $('#downloadIframe').attr('src', link);
            return true;
        },
        // 借城通 SW 中转：它给响应加 attachment 头
        async _swDownload(url, filename) {
            let bridge = document.createElement('iframe');
            bridge.hidden = true;
            bridge.src = new URL('/download/bridge.html', location.href).href;
            let ch = new MessageChannel();
            let dropBridge = () => { try { bridge.remove(); } catch (e) { } };
            let streamUrl = await new Promise((resolve, reject) => {
                let timer = setTimeout(() => reject(new Error('存储通道没起来')), 15000);
                ch.port1.onmessage = (e) => {
                    let d = e.data;
                    if (d && d.url) {
                        clearTimeout(timer);
                        let u;
                        try { u = new URL(String(d.url), location.href); } catch (err) { return reject(err); }
                        if (u.origin !== location.origin) return reject(new Error('存储来源不对'));
                        resolve(u.href);
                    } else if (d && d.error) {
                        clearTimeout(timer); reject(new Error(String(d.error)));
                    } else if (d === 'ack' && ch._ack) {
                        ch._ack(); ch._ack = null;
                    }
                };
                bridge.onload = () => bridge.contentWindow.postMessage(
                    { type: 'ctfile-download', fileName: filename, size: 0 }, location.origin, [ch.port2]
                );
                document.body.appendChild(bridge);
            }).catch((e) => { dropBridge(); throw e; });

            // 先取一次，跨域和 4xx 在这里暴露
            let resp;
            try {
                resp = await fetch(url);   // 签名在 URL 里，不用带 cookie
                if (!resp.ok) throw new Error('HTTP ' + resp.status);
            } catch (e) {
                try { ch.port1.postMessage('abort'); } catch (err) { }
                dropBridge();
                throw e;
            }
            // worker 的 pull 只在有消费者时触发
            let sink = document.createElement('iframe');
            sink.hidden = true; sink.src = streamUrl;
            document.body.appendChild(sink);
            // 通道建好就交付，喂数据在后台跑
            this._feedSw(resp, ch, bridge, sink);
            return { ok: true };
        },
        async _feedSw(resp, ch, bridge, sink) {
            try {
                let reader = resp.body.getReader(), gated = true;
                for (;;) {
                    let chunk = await reader.read();
                    if (chunk.done) break;
                    ch.port1.postMessage({ chunk: chunk.value });
                    if (!gated) continue;
                    // 不回话就放弃门控，避免整条链卡住
                    let got = await Promise.race([
                        new Promise((r) => { ch._ack = () => r(true); }),
                        new Promise((r) => setTimeout(() => r(false), 3000)),
                    ]);
                    ch._ack = null;
                    gated = got;
                }
                ch.port1.postMessage('end');
            } catch (e) {
                try { ch.port1.postMessage('abort'); } catch (err) { }
                try { base.panelNotice('取回中断：' + ((e && e.message) || e), 'error', 9000); } catch (err) { }
            } finally {
                // sink 是浏览器取数的入口，删了会掐断下载
                setTimeout(() => { try { bridge.remove(); } catch (e) { } }, 60000);
            }
        },
        async _opfsDownload(url, filename) {
            let st = (typeof navigator !== 'undefined' && navigator.storage) || null;
            if (!st || typeof st.getDirectory !== 'function') {
                return { ok: false, why: '浏览器不支持临时存储，改用 IDM 或复制链接' };
            }
            let root, tmpName = 'fl-' + Date.now() + '.tmp', fh;
            try {
                root = await st.getDirectory();
                fh = await root.getFileHandle(tmpName, { create: true });
            } catch (e) {
                return { ok: false, why: '临时存储不可用：' + ((e && e.message) || e) };
            }
            try {
                let resp = await fetch(url);   // 签名在 URL 里，不用带 cookie
                if (!resp.ok) throw new Error('HTTP ' + resp.status);
                let w = await fh.createWritable();
                let reader = resp.body.getReader();
                for (;;) {
                    let chunk = await reader.read();
                    if (chunk.done) break;
                    await w.write(chunk.value);
                }
                await w.close();
                let file = await fh.getFile();
                let a = document.createElement('a');
                let objUrl = URL.createObjectURL(file);
                a.href = objUrl; a.download = filename;
                document.body.appendChild(a); a.click(); a.remove();
                setTimeout(() => URL.revokeObjectURL(objUrl), 60000);
                return { ok: true };
            } catch (e) {
                return { ok: false, why: (e && e.message) || '取回失败' };
            } finally {
                // blob URL 还指着这个文件，等浏览器读完再删，大文件要几分钟
                setTimeout(() => { try { root.removeEntry(tmpName).catch(() => { }); } catch (e) { } }, 1800000);
            }
        },
        // 百度 >50MB 直链绑 UA，浏览器导航 403，得由脚本带认证头取回
        _streamDownload(f, onProgress) {
            return new Promise((resolve) => {
                GM_xmlhttpRequest({
                    method: 'GET',
                    url: f.dlink,
                    headers: base._cdnHeaders(f.dlink),
                    responseType: 'blob',
                    onprogress: (r) => { if (r.total > 0 && onProgress) onProgress(Math.floor(r.loaded * 100 / r.total), r.loaded); },
                    onload: (r) => {
                        // 204 = IDM 把请求接走了，提示一下免得用户以为没反应
                        if (r && r.status === 204) { resolve({ ok: true, by: 'IDM' }); return; }
                        if (!r || r.status < 200 || r.status >= 300 || !r.response) {
                            resolve({ ok: false, why: 'HTTP ' + ((r && r.status) || '?') });
                            return;
                        }
                        const url = URL.createObjectURL(r.response);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = f.filename || 'download';
                        document.body.appendChild(a);
                        a.click();
                        a.remove();
                        setTimeout(() => URL.revokeObjectURL(url), 60000);
                        resolve({ ok: true });
                    },
                    onerror: () => resolve({ ok: false, why: '网络错误' }),
                    ontimeout: () => resolve({ ok: false, why: '超时' }),
                });
            });
        },

        // 只在“当前弹窗仍处于 loading”时才关闭它。
        // 不能用 document.querySelector('.swal2-popup.swal2-loading') 泛查：已关闭的旧弹窗
        // 可能还留在 DOM 里一拍，泛查会把它当成当前弹窗，进而把刚打开的结果面板关掉。
        closeIfLoading() {
            const popup = (typeof Swal !== 'undefined' && Swal.getPopup) ? Swal.getPopup() : null;
            if (popup && popup.classList.contains('swal2-loading')) Swal.close();
        },
        /* ---------- 面板外框：标题栏随主题色 + 整块可拖拽 + 设置面板返回主面板 ---------- */
        // 主面板与设置面板共用一个位置，来回切换时面板不会跳回屏幕中央
        _panelPos: { x: 0, y: 0 },
        _panelIcons: {
            main: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m7 11 5 5 5-5"/><path d="M4 19h16"/></svg>',
            back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',
            gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
        },
        // 浅色主题（棕褐/橙/粉）上白字发虚，按亮度改用深色文字
        _panelInk(c) {
            const m = /^#?([0-9a-f]{6})$/i.exec(String(c || ''));
            if (!m) return false;
            const n = parseInt(m[1], 16);
            const yiq = (((n >> 16) & 255) * 299 + ((n >> 8) & 255) * 587 + (n & 255) * 114) / 1000;
            return yiq >= 150;
        },
        // 已打开的面板也要跟着换色，否则改完主题色得关掉重开才生效
        _paintPanelTheme() {
            const c = color || '#09aaff';
            const ink = base._panelInk(c);
            document.querySelectorAll('.fl-panel').forEach((p) => {
                p.style.setProperty('--fl-theme', c);
                p.classList.toggle('fl-bar-ink', ink);
            });
        },
        // 页面上注入的按钮（目前是夸克）也跟着主题色深浅换字色
        _paintPageButtons() {
            const ink = base._panelInk(color || '#09aaff');
            // 各网盘页面上注入的「下载助手」按钮（夸克/天翼/阿里/迅雷/移动）
            document.querySelectorAll('.quark-button, .tianyi-button, .ali-button, .xunlei-button, .yidong-button')
                .forEach((el) => el.classList.toggle('fl-btn-ink', ink));
        },
        _panelChrome(kind) {
            const popup = (typeof Swal !== 'undefined' && Swal.getPopup) ? Swal.getPopup() : null;
            if (!popup) return;
            const isSetting = kind === 'setting';
            const isSub = kind === 'sub';   // IDM / Aria / Motrix / BitComet 等二级配置页
            popup.classList.add('fl-panel', isSetting ? 'fl-panel-setting' : (isSub ? 'fl-panel-sub' : 'fl-panel-main'));
            // 记下 Swal 给的原始宽度，双击缩放手柄时还原用
            if (!popup.dataset.flBaseW) popup.dataset.flBaseW = popup.style.width || '';
            base._paintPanelTheme();
            const header = popup.querySelector('.swal2-header');
            if (!header) return;
            const title = header.querySelector('.swal2-title');
            if (title) title.classList.add('fl-panel-title');
            if (!header.querySelector('.fl-panel-bar-icon')) {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'fl-panel-bar-icon' + (isSetting ? ' fl-panel-back' : ' is-static');
                btn.innerHTML = isSetting ? base._panelIcons.back : (isSub ? base._panelIcons.gear : base._panelIcons.main);
                btn.setAttribute('aria-label', isSetting ? '返回多网盘下载助手' : (isSub ? '下载器配置' : '多网盘下载助手'));
                if (isSetting) {
                    btn.title = '返回多网盘下载助手';
                    btn.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        base.backToPanel();
                    });
                }
                header.insertBefore(btn, header.firstChild);
            }
            // 先套尺寸，再按最终尺寸把拖拽位置夹回视口，否则位置会按旧宽高算偏
            base._panelResize(popup, kind);
            base._panelDrag(popup, header);
        },
        // 标题栏拖动；只移动 popup 的 left/top，不动 transform，避免和入场动画打架
        _panelDrag(popup, handle) {
            if (!popup || !handle || handle.getAttribute('data-fl-drag')) return;
            handle.setAttribute('data-fl-drag', '1');
            const pos = base._panelPos || { x: 0, y: 0 };
            const apply = (x, y) => {
                popup.style.position = 'relative';
                popup.style.left = Math.round(x) + 'px';
                popup.style.top = Math.round(y) + 'px';
            };
            // 上次拖到的位置：窗口变小过就夹回可见范围，别一开就在屏幕外
            if (pos.x || pos.y) {
                const vw = window.innerWidth || document.documentElement.clientWidth || 0;
                const vh = window.innerHeight || document.documentElement.clientHeight || 0;
                const w = popup.offsetWidth, h = popup.offsetHeight;
                let x = pos.x, y = pos.y;
                if (w && h && vw && vh) {
                    const keepX = Math.min(120, w);
                    x = Math.max(keepX - w - (vw - w) / 2, Math.min(vw - keepX - (vw - w) / 2, x));
                    y = Math.max(48 - h - (vh - h) / 2, Math.min(vh - 48 - (vh - h) / 2, y));
                }
                apply(x, y);
            }
            let start = null;
            const num = (v) => { const n = parseFloat(v); return isNaN(n) ? 0 : n; };
            const onMove = (e) => {
                if (!start) return;
                const p = e.touches ? e.touches[0] : e;
                if (!p) return;
                const vw = window.innerWidth || document.documentElement.clientWidth || 0;
                const vh = window.innerHeight || document.documentElement.clientHeight || 0;
                let nx = start.ox + (p.clientX - start.x);
                let ny = start.oy + (p.clientY - start.y);
                // 水平至少留 120px、垂直至少留 48px 在视口里，别把面板拖丢
                const keepX = Math.min(120, start.w);
                const left = start.bl + nx;
                const top = start.bt + ny;
                if (left < keepX - start.w) nx = keepX - start.w - start.bl;
                if (left > vw - keepX) nx = vw - keepX - start.bl;
                if (top < 48 - start.h) ny = 48 - start.h - start.bt;
                if (top > vh - 48) ny = vh - 48 - start.bt;
                if (e.cancelable) e.preventDefault();
                apply(nx, ny);
            };
            const onUp = () => {
                if (!start) return;
                base._panelPos = { x: num(popup.style.left), y: num(popup.style.top) };
                start = null;
                popup.classList.remove('fl-panel-dragging');
                document.removeEventListener('mousemove', onMove, true);
                document.removeEventListener('mouseup', onUp, true);
                document.removeEventListener('touchmove', onMove, true);
                document.removeEventListener('touchend', onUp, true);
            };
            handle.addEventListener('mousedown', (e) => {
                if (e.button !== 0) return;
                const t = e.target;
                if (t && t.closest && t.closest('.swal2-close, .fl-panel-bar-icon, a, input, select, textarea')) return;
                // 入场动画还带 transform 时，getBoundingClientRect 会偏，先摘掉动画
                popup.style.animation = 'none';
                const r = popup.getBoundingClientRect();
                const ox = num(popup.style.left);
                const oy = num(popup.style.top);
                start = { x: e.clientX, y: e.clientY, ox, oy, bl: r.left - ox, bt: r.top - oy, w: r.width, h: r.height };
                popup.classList.add('fl-panel-dragging');
                document.addEventListener('mousemove', onMove, true);
                document.addEventListener('mouseup', onUp, true);
                e.preventDefault();
            });
            handle.addEventListener('touchstart', (e) => {
                const t = e.target;
                if (t && t.closest && t.closest('.swal2-close, .fl-panel-bar-icon, a, input, select, textarea')) return;
                const p = e.touches && e.touches[0];
                if (!p) return;
                popup.style.animation = 'none';
                const r = popup.getBoundingClientRect();
                const ox = num(popup.style.left);
                const oy = num(popup.style.top);
                start = { x: p.clientX, y: p.clientY, ox, oy, bl: r.left - ox, bt: r.top - oy, w: r.width, h: r.height };
                popup.classList.add('fl-panel-dragging');
                document.addEventListener('touchmove', onMove, { capture: true, passive: false });
                document.addEventListener('touchend', onUp, true);
            }, { passive: true });
        },
        /* ---------- 面板自由缩放：右侧 / 底部 / 右下角三个拖拽点 ---------- */
        // 尺寸按面板类型分开存（主面板 860、设置 520、二级页默认 32em），互不干扰
        _panelSizes: null,
        _panelSizeKey: 'setting_panel_size',
        _panelMin: {
            main: { w: 460, h: 280 },
            setting: { w: 340, h: 240 },
            sub: { w: 340, h: 220 },
        },
        _sizes() {
            if (base._panelSizes) return base._panelSizes;
            let v = base.getValue(base._panelSizeKey);
            if (typeof v === 'string') {
                try { v = JSON.parse(v); } catch (e) { v = null; }
            }
            base._panelSizes = (v && typeof v === 'object') ? v : {};
            return base._panelSizes;
        },
        _savePanelSize(kind, w, h) {
            const all = base._sizes();
            if (w > 0 && h > 0) all[kind] = { w: Math.round(w), h: Math.round(h) };
            else delete all[kind];
            base.setValue(base._panelSizeKey, JSON.stringify(all));
        },
        _viewBox() {
            return {
                w: Math.max(320, (window.innerWidth || document.documentElement.clientWidth || 0) - 20),
                h: Math.max(240, (window.innerHeight || document.documentElement.clientHeight || 0) - 20),
            };
        },
        _panelResize(popup, kind) {
            if (!popup || popup.getAttribute('data-fl-resize')) return;
            const key = kind === 'setting' ? 'setting' : (kind === 'sub' ? 'sub' : 'main');
            popup.setAttribute('data-fl-resize', key);
            const min = base._panelMin[key] || base._panelMin.main;
            const num = (v) => { const n = parseFloat(v); return isNaN(n) ? 0 : n; };
            let cur = { w: 0, h: 0 };   // 上一次生效的尺寸
            let start = null;

            const measure = () => {
                const r = popup.getBoundingClientRect();
                return {
                    w: Math.round(r.width) || num(popup.style.width) || popup.offsetWidth || 0,
                    h: Math.round(r.height) || num(popup.style.height) || popup.offsetHeight || 0,
                };
            };

            // 只改宽高，宽高都不越界；顺带把 flex 居中带来的位移补回去
            const apply = (w, h) => {
                const v = base._viewBox();
                const nw = Math.round(Math.max(min.w, Math.min(v.w, w)));
                const nh = Math.round(Math.max(min.h, Math.min(v.h, h)));
                const dw = cur.w ? nw - cur.w : 0;
                const dh = cur.h ? nh - cur.h : 0;
                popup.classList.add('fl-panel-sized');
                popup.style.width = nw + 'px';
                popup.style.height = nh + 'px';
                if (dw || dh) {
                    // 弹窗由容器居中，加宽会在左右各长一半，补回一半让左上角钉住
                    popup.style.position = 'relative';
                    popup.style.left = Math.round(num(popup.style.left) + dw / 2) + 'px';
                    popup.style.top = Math.round(num(popup.style.top) + dh / 2) + 'px';
                }
                cur = { w: nw, h: nh };
                return cur;
            };

            // 上次的尺寸：窗口变小过也算一遍，别超出视口
            const saved = base._sizes()[key];
            if (saved && saved.w > 0 && saved.h > 0) apply(saved.w, saved.h);

            [['e', 'fl-panel-rs-e'], ['s', 'fl-panel-rs-s'], ['se', 'fl-panel-rs-se']].forEach(([dir, cls]) => {
                if (popup.querySelector('.' + cls)) return;
                const el = document.createElement('div');
                el.className = 'fl-panel-rs ' + cls;
                el.setAttribute('data-dir', dir);
                el.setAttribute('aria-hidden', 'true');
                if (dir === 'se') el.title = '拖动调整大小，双击还原默认';
                popup.appendChild(el);
            });

            const onMove = (e) => {
                if (!start) return;
                const p = e.touches ? e.touches[0] : e;
                if (!p) return;
                const dx = p.clientX - start.x;
                const dy = p.clientY - start.y;
                apply(start.dir === 's' ? start.w : start.w + dx, start.dir === 'e' ? start.h : start.h + dy);
                if (e.cancelable) e.preventDefault();
            };
            // 缩放后可能整块滑出屏幕：先保证不越出右/下边（否则右下角手柄都点不到），再保证至少一角可见
            const clampPos = () => {
                const r = popup.getBoundingClientRect();
                const vw = window.innerWidth || document.documentElement.clientWidth || 0;
                const vh = window.innerHeight || document.documentElement.clientHeight || 0;
                if (!vw || !vh || !r.width || !r.height) return;
                let dx = 0, dy = 0;
                if (r.right > vw - 4) dx = vw - 4 - r.right;
                else if (r.right < 120) dx = 120 - r.right;
                if (r.bottom > vh - 4) dy = vh - 4 - r.bottom;
                else if (r.bottom < 48) dy = 48 - r.bottom;
                // 收回来以后别再换一个方向顶出去
                if (r.left + dx > vw - 120) dx = vw - 120 - r.left;
                if (r.top + dy > vh - 48) dy = vh - 48 - r.top;
                if (dx || dy) {
                    popup.style.position = 'relative';
                    popup.style.left = Math.round(num(popup.style.left) + dx) + 'px';
                    popup.style.top = Math.round(num(popup.style.top) + dy) + 'px';
                }
            };
            const onUp = () => {
                if (!start) return;
                start = null;
                clampPos();
                cur = measure();
                base._savePanelSize(key, cur.w, cur.h);
                base._panelPos = { x: num(popup.style.left), y: num(popup.style.top) };
                popup.classList.remove('fl-panel-resizing');
                document.removeEventListener('mousemove', onMove, true);
                document.removeEventListener('mouseup', onUp, true);
                document.removeEventListener('touchmove', onMove, true);
                document.removeEventListener('touchend', onUp, true);
            };
            const begin = (e, p) => {
                const t = e.target;
                const handle = t && t.closest ? t.closest('.fl-panel-rs') : null;
                if (!handle) return false;
                popup.style.animation = 'none';   // 入场动画的 transform 会让量到的尺寸偏
                const m = measure();
                cur = { w: m.w, h: m.h };
                start = { x: p.clientX, y: p.clientY, w: m.w, h: m.h, dir: handle.getAttribute('data-dir') || 'se' };
                popup.classList.add('fl-panel-resizing');
                return true;
            };
            popup.addEventListener('mousedown', (e) => {
                if (e.button !== 0) return;
                if (!begin(e, e)) return;
                if (e.cancelable) e.preventDefault();
                e.stopPropagation();   // 别让它继续冒泡去触发标题栏拖动
                document.addEventListener('mousemove', onMove, true);
                document.addEventListener('mouseup', onUp, true);
            });
            popup.addEventListener('touchstart', (e) => {
                const p = e.touches && e.touches[0];
                if (!p) return;
                if (!begin(e, p)) return;
                document.addEventListener('touchmove', onMove, { capture: true, passive: false });
                document.addEventListener('touchend', onUp, true);
            }, { passive: true });
            // 双击手柄：回到 Swal 给的原始尺寸，位置也回中央
            popup.addEventListener('dblclick', (e) => {
                const t = e.target;
                const handle = t && t.closest ? t.closest('.fl-panel-rs') : null;
                if (!handle) return;
                e.preventDefault();
                e.stopPropagation();
                popup.classList.remove('fl-panel-sized');
                base._savePanelSize(key, 0, 0);
                popup.style.width = popup.dataset.flBaseW || '';
                popup.style.height = '';
                popup.style.left = '';
                popup.style.top = '';
                cur = { w: 0, h: 0 };
                base._panelPos = { x: 0, y: 0 };
            });
        },
        // 设置面板左上角图标：直接回到「多网盘下载助手」面板
        backToPanel() {
            const files = base.panelFiles || [];
            const adapter = base._activeAdapter;
            base._settingNav = true;   // 别弹“设置已保存”
            Swal.close();
            base.renderDownloadPanel(files, adapter);
        },
        // 这个容器在 loading 态是隐藏的，得先打开
        tipLoading(text) {
            let el = document.querySelector('.swal2-popup.swal2-loading .swal2-html-container');
            if (!el) return;
            if (!el.dataset.flTip) {
                el.style.cssText += ';display:block !important;margin:14px 0 0;font-size:13px;color:#606266;text-align:center';
                el.dataset.flTip = '1';
            }
            el.textContent = text;
        },
        renderDownloadPanel(files, adapter) {
            base.panelFiles = files;
            base._activeAdapter = adapter;
            base._applyDefaultSelection(); // 先套默认，再画 chips

            const fileRows = files.map((f, i) => {
                const gray = f.isFolder || !f.dlink || !/^https?:\/\//.test(f.dlink);
                let reason = '';
                if (f.isFolder) reason = '文件夹请进入后选择文件';
                else if (!f.dlink) reason = '该文件未返回下载链接（可能已失效或被禁止下载）';
                else if (!/^https?:\/\//.test(f.dlink)) reason = f.dlink;
                const linkText = f.dlink && /^https?:\/\//.test(f.dlink) ? f.dlink : reason;
                return `<div class="fl-dl-file-row${gray ? ' fl-dl-gray' : ''}" data-index="${i}">
                    <div class="fl-dl-file-name" title="${base.esc(f.filename)}">${base.esc(f.filename)}</div>
                    <div class="fl-dl-file-size">${f.sizeStr || ''}</div>
                    <div class="fl-dl-file-link" title="${base.esc(linkText)}">${base.esc(linkText)}</div>
                    <div class="fl-dl-file-status" data-status-index="${i}"></div>
                </div>`;
            }).join('');

            const dlChips = DOWNLOADERS.map(d => {
                const active = downloadState.downloader === d.id ? ' active' : '';
                return `<div class="fl-dl-chip${active}" data-type="downloader" data-id="${d.id}">${d.name}</div>`;
            }).join('');

            const intro = '未选择下载器时展示全部协议，选择下载器后自动筛选可用协议。<br><b>直链带有效期，获取后请尽快使用。</b>';
            const badCount = files.filter(f => f.isFolder || !f.dlink || !/^https?:\/\//.test(f.dlink)).length;
            const countLine = files.length === 0 ? '' : `<div class="fl-dl-file-count">共 ${files.length} 个文件${badCount ? '，' + badCount + ' 个不可操作' : ''}</div>`;
            const emptyHtml = files.length === 0 ? '<div class="fl-dl-empty"><svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h4"/></svg><div class="fl-dl-empty-title">请先在页面中选择文件</div></div>' : `${countLine}<div class="fl-dl-files" id="fl-dl-files">${fileRows}</div>`;

            const html = `<div class="fl-dl-panel">
                <div class="fl-dl-intro">${intro}</div>
                ${emptyHtml}
                <div class="fl-dl-section">
                    <div class="fl-dl-section-label">选择下载器 ${base._defaultBtnHtml()}</div>
                    <div class="fl-dl-chips">${dlChips}</div>
                </div>
                <div class="fl-dl-section">
                    <div class="fl-dl-section-label" id="fl-dl-protocol-label">${base._protocolLabelText()}</div>
                    <div class="fl-dl-chips" id="fl-dl-protocol-chips">${base._protocolChipsHtml()}</div>
                </div>
                <div class="fl-dl-actions">
                    <button class="fl-dl-btn fl-dl-btn-primary listener-dl-execute" disabled>请先选择下载器</button>
                    <button class="fl-dl-btn fl-dl-btn-secondary listener-dl-copy-name">复制文件名</button>
                    <button class="fl-dl-btn fl-dl-btn-secondary listener-dl-copy-link">复制下载链接</button>
                    <button class="fl-dl-btn fl-dl-btn-secondary fl-dl-btn-right listener-open-setting">助手设置</button>
                </div>
                <div class="fl-dl-help">帮助：<a href="https://www.youxiaohou.com/zh-cn/motrix.html" target="_blank" rel="noreferrer noopener">RPC 配置说明</a> · <a href="https://www.youxiaohou.com/zh-cn/curl.html" target="_blank" rel="noreferrer noopener">cURL 使用教程</a> · <a href="https://github.com/cpboy2020/script_hub" target="_blank" rel="noreferrer noopener">项目主页</a></div>
            </div>`;

            Swal.fire({
                title: '多网盘下载助手',
                html, allowOutsideClick: false,
                showCloseButton: true, showConfirmButton: false,
                width: 860,
                padding: '16px 24px 16px',
                customClass: { popup: 'fl-popup' },
                didOpen: () => { base._panelChrome('main'); },
                willClose: () => { base._resetData(); },
            });
            base._updateMainButton();
            base._paintLinkCells();
        },
        renderErrorPanel(errMsg, adapter, okText) {
            base._activeAdapter = adapter;
            base.panelFiles = [];
            Swal.fire({
                title: '获取下载链接失败',
                html: `<div class="fl-dl-panel"><div class="fl-dl-error">${base.esc(errMsg)}<br>${okText ? `<button class="fl-dl-retry listener-dl-confirm">${okText}</button>` : '<button class="fl-dl-retry listener-dl-retry">重试</button>'}</div></div>`,
                allowOutsideClick: false,
                showCloseButton: true, showConfirmButton: false,
                width: 860,
                customClass: { popup: 'fl-popup' },
            });
        },
        _updateMainButton() {
            const $btn = $('.listener-dl-execute');
            if (!$btn.length) return;
            if (!base.panelFiles || !base.panelFiles.length) { $btn.prop('disabled', true).text('请先在页面中选择文件'); return; }
            if (!downloadState.downloader) { $btn.prop('disabled', true).text('请先选择下载器'); return; }
            const protos = PROTOCOLS[downloadState.downloader];
            if (!downloadState.protocol && protos.length === 1) {
                downloadState.protocol = protos[0].id;
                $('.fl-dl-chip[data-type="protocol"]').removeClass('active');
                $(`.fl-dl-chip[data-type="protocol"][data-id="${downloadState.protocol}"]`).addClass('active');
            }
            if (!downloadState.protocol) { $btn.prop('disabled', true).text('请先选择下载协议'); return; }
            // 无转码档时回落，别把无效选择留给用户
            if (downloadState.protocol === 'transcode' && !base._hasMediaLink()) {
                downloadState.protocol = 'http';
                $('.fl-dl-chip[data-type="protocol"]').removeClass('active');
                $('.fl-dl-chip[data-type="protocol"][data-id="http"]').addClass('active');
            }
            const proto = protos.find(p => p.id === downloadState.protocol);
            if (!proto) { $btn.prop('disabled', true).text('请先选择下载协议'); return; }
            $btn.prop('disabled', false);
            if (proto.btn) $btn.text(proto.btn);
            else if (proto.act === 'nav') $btn.text('开始下载');
            else if (proto.act === 'push') $btn.text('推送下载任务');
            else if (proto.act === 'copy') $btn.text('复制命令');
        },
        _protocolLabelText() {
            return downloadState.downloader ? '可用协议' : '全部协议（选择下载器后自动筛选）';
        },
        // 转码档只有迅雷给，判据只留这一处
        _hasMediaLink() {
            return (base.panelFiles || []).some(f => f.mediaLink);
        },
        // 站点受限的协议只这一处判据，chip 与默认值共用
        _protoUsable(p) {
            const isXunlei = /xunlei\.com/.test(String(location && location.host || ''));
            if (p.id === 'seg' && !isXunlei) return false;
            if (p.id === 'transcode' && (!isXunlei || !base._hasMediaLink())) return false;
            return true;
        },
        _protoChip(p) {
            if (!base._protoUsable(p)) return '';
            const active = downloadState.protocol === p.id ? ' active' : '';
            return `<div class="fl-dl-chip${active}" data-type="protocol" data-id="${p.id}" title="${base.esc(PROTO_TITLES[p.id] || '')}">${p.name}</div>`;
        },
        _protocolChipsHtml() {
            if (!downloadState.downloader) {
                return ALL_PROTOCOLS.map(g => `
                    <div class="fl-dl-proto-group">
                        <div class="fl-dl-proto-group-label">${g.label}</div>
                        <div class="fl-dl-chips">${g.items.map(p => base._protoChip(p)).join('')}</div>
                    </div>`).join('');
            }
            return PROTOCOLS[downloadState.downloader].map(p => base._protoChip(p)).filter(Boolean).join('');
        },
        // 落选提示只在多选时给
        _paintLinkCells() {
            const useMedia = downloadState.protocol === 'transcode' && base._hasMediaLink();
            const missTip = useMedia && (base.panelFiles || []).length > 1;
            (base.panelFiles || []).forEach((f, i) => {
                const url = (useMedia ? f.mediaLink : f.dlink) || '';
                const ok = /^https?:\/\//.test(url);
                const text = ok ? url : (f.isFolder ? '文件夹请进入后选择文件' : (missTip ? '该文件没有转码档' : (url || '该文件未返回下载链接（可能已失效或被禁止下载）')));
                const $row = $('.fl-dl-file-row[data-index="' + i + '"]');
                $row.toggleClass('fl-dl-gray', !!f.isFolder || !ok);
                $row.children('.fl-dl-file-link').text(text).attr('title', text);
            });
        },
        _updateProtocolChips() {
            const $c = $('#fl-dl-protocol-chips');
            if (!$c.length) return;
            $('#fl-dl-protocol-label').text(base._protocolLabelText());
            $c.html(base._protocolChipsHtml());
            base._paintLinkCells();
            base._syncDefaultBtn();
        },
        async executeAction(files, adapter) {
            if (!downloadState.downloader || !downloadState.protocol) return;
            const protos = PROTOCOLS[downloadState.downloader];
            const proto = protos.find(p => p.id === downloadState.protocol);
            if (!proto) return;
            // 只换地址不换通道，执行器只认 dlink
            if (proto.id === 'transcode') {
                const usable = files.filter(f => !f.isFolder && f.mediaLink && /^https?:\/\//.test(f.mediaLink));
                const skipped = files.filter(f => !f.isFolder).length - usable.length;
                if (skipped > 0) base.panelNotice(skipped + ' 个文件没有转码档，已跳过', 'warning');
                if (!usable.length) return;
                files = usable.map(f => ({ ...f, dlink: f.mediaLink }));
            }
            const valid = files.filter(f => !f.isFolder && f.dlink && /^https?:\/\//.test(f.dlink));
            if (!valid.length) { base.panelNotice('没有可操作的文件', 'warning'); return; }
            // 50MB 预扫描只管浏览器下载和 aria2c
            const over = (proto.act === 'nav' || proto.id === 'aria2c') ? valid.filter(f => base._isBigBaiduLink(f)) : [];
            if (over.length) {
                const list = over.map(f => base.esc(f.filename) + '（' + base.sizeFormat(f.rawSize) + '）').join('<br>');
                const tip = proto.act === 'nav'
                    ? '<br><br>这些文件会由脚本带认证头取回（进度显示在对应那一行）；失败时请改用 IDM / Aria2 / curl'
                    : '<br><br>命令行下载需携带认证头（脚本已自动附加）';
                const r = await Swal.fire({
                    title: '文件超过 50MB',
                    html: '以下文件超过 50MB，浏览器自带下载会被服务器 403 拒绝：<br>' + list + tip,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: '继续下载',
                    cancelButtonText: '重新选择',
                });
                base.renderDownloadPanel(base.panelFiles || [], base._activeAdapter);
                if (!r.isConfirmed) return;
            }
            if (proto.act === 'nav') await base._executeNav(valid, adapter, proto);
            else if (proto.act === 'push') await base._executePush(valid, adapter);
            else if (proto.act === 'copy') await base._executeCopy(valid, adapter);
        },
        async _executeNav(files, adapter, proto) {
            const $btn = $('.listener-dl-execute');
            if (files.length > 5) base.panelNotice('共 ' + files.length + ' 个文件，逐个触发中…如遇拦截可改用推送/复制', 'info');
            $btn.text('正在逐个触发 ' + files.length + ' 个下载…').prop('disabled', true);
            let ok = 0, fail = 0;
            for (let i = 0; i < files.length; i++) {
                const f = files[i];
                const $st = $('.fl-dl-file-status[data-status-index="' + f._idx + '"]');
                if (base._isBigBaiduLink(f)) {
                    const bar = base._paintBar($st, '下载中');
                    bar.paint(0);
                    const r = await base._streamDownload(f, bar.paint);
                    bar.done();
                    if (r.ok) {
                        ok++;
                        $st.html(MARK_OK);
                        if (r.by) base.panelNotice('已成功唤起 ' + r.by + '，请查看 ' + r.by + ' 下载框！', 'success');
                    } else {
                        fail++;
                        $st.html(MARK_NO);
                        base.panelNotice('下载失败：' + r.why + '。大文件请用 IDM/Aria2/cURL。', 'error');
                    }
                } else if (proto && proto.id === 'seg' && base._useSegDownload(f)) {
                    const bar = base._paintBar($st, '多链下载');
                    bar.paint(0);
                    const r = await base._segDownload(f, bar.paint);
                    bar.done();
                    if (r.ok) {
                        ok++; $st.html(MARK_OK);
                        base.panelNotice('已下载 ' + f.filename + '（' + base.sizeFormat(f.rawSize || 0) + '）', 'success', 5000);
                    } else { fail++; $st.html(MARK_NO); base.panelNotice('多链下载失败：' + r.why, 'error'); }
                } else {
                    const r = await base.iframeDownload(f.dlink, f.filename);
                    if (r === true || (r && r.ok)) { ok++; $st.html(MARK_OK); }
                    else { fail++; $st.html(MARK_NO); if (r && r.why) base.panelNotice('下载失败：' + r.why, 'error', 9000); }
                }
                if (i < files.length - 1) await base.sleep(800);
            }
            $btn.text('下载完成：成功 ' + ok + '，失败 ' + fail);
            setTimeout(() => base._updateMainButton(), 4000);
        },
        // 进度画在「链接」格上：两个下载路径共用，别各写一份
        _paintBar($st, label) {
            const $bar = $st.siblings('.fl-dl-file-link');
            const linkText = $bar.text();
            const dark = $(document.body).hasClass('fl-dark');
            const track = dark ? '#3f4041' : '#eef0f2';
            let lastPaint = 0, lastLoaded = 0, lastT = 0, spd = 0;
            const t0 = Date.now();
            const fmt = (p) => (p >= 100 ? '100' : p.toFixed(1));
            return {
                paint: (pct, loaded) => {
                    const now = Date.now();
                    // 500ms 一帧不闪；速度按 1 秒增量算
                    if (pct !== 0 && pct !== 100 && now - lastPaint < 500) return;
                    lastPaint = now;
                    if (typeof loaded === 'number' && loaded > 0) {
                        const dt = (now - lastT) / 1000;
                        if (lastT && dt >= 1) {
                            spd = Math.max(0, (loaded - lastLoaded) / dt);
                            lastLoaded = loaded; lastT = now;
                        } else if (!lastT) {
                            const sec = (now - t0) / 1000;
                            lastLoaded = loaded; lastT = now;
                            if (sec > 0.5) spd = loaded / sec;
                        }
                    }
                    $bar.css({
                        borderRadius: '8px', textAlign: 'center', fontFamily: 'inherit',
                        background: 'linear-gradient(to right, ' + (color || '#09AAFF') + ' ' + pct + '%, ' + track + ' ' + pct + '%)',
                        color: pct > 50 ? '#fff' : (dark ? '#e8eaed' : '#606266'),
                    }).text(label + ' ' + fmt(pct) + '%' + (spd > 0 ? ' · ' + base.sizeFormat(spd) + '/s' : ''));
                },
                done: () => $bar.removeAttr('style').text(linkText),
            };
        },
        // 只有迅雷能叠加：城通单连接已满速，多路实测无提升
        _useSegDownload(f) {
            return /xunlei\.com/.test(location.host) && !!f.dlink;
        },
        // 多连接下载：服务端按连接限速，开多个连接线性叠加
        _segDownload(f, onProgress) {
            const THREAD = 4;                       // 并发连接数，再多会被服务端拒
            const CHUNK = 4 * 1024 * 1024;          // 每次请求 4MB：太大就撞超时，太小请求头开销高
            const WORK_TIMEOUT = 60000;             // 连续 60s 无进展就放弃该块
            const total = f.rawSize || 0;
            const headers = base._cdnHeaders(f.dlink);
            const got = {};
            const done = [];
            let finished = 0;
            const t0 = Date.now();
            const report = () => {
                let sum = finished;
                for (const k in got) sum += got[k];
                if (onProgress && total > 0) onProgress(Math.min(99.9, sum * 100 / total), sum);
            };
            const reqs = new Map();              // 在途请求，看门狗判定慢就全掐掉
            const abortOne = (idx) => { const rq = reqs.get(idx); if (rq) { try { rq.abort(); } catch (e) { } } };
            const abortAll = () => { reqs.forEach(r => { try { r.abort(); } catch (e) { } }); reqs.clear(); };
            let slowAbort = false;
            const fire = (idx, start, end) => new Promise((resolve) => {
                let timer = null, settled = false;
                const finish = (v) => {
                    settled = true;
                    if (timer) clearTimeout(timer);
                    reqs.delete(idx);
                    resolve(v);
                };
                const arm = () => {
                    if (settled) return;
                    if (timer) clearTimeout(timer);
                    timer = setTimeout(() => {
                        abortOne(idx);
                        finish({ ok: false, why: '超时' });
                    }, WORK_TIMEOUT);
                };
                arm();
                reqs.set(idx, GM_xmlhttpRequest({
                    method: 'GET',
                    url: f.dlink,
                    headers: Object.assign({ Range: 'bytes=' + start + '-' + end }, headers),
                    responseType: 'arraybuffer',
                    onprogress: (r) => {
                        if (r && r.loaded) { got[idx] = r.loaded; arm(); report(); }
                    },
                    onload: (r) => {
                        const want = end - start + 1;
                        // 长度与起点都对得上才算这一块，短读拼进去就是坏文件
                        const len = (r.response && (r.response.byteLength !== undefined ? r.response.byteLength : r.response.length)) || 0;
                        const cr = /content-range:\s*bytes\s+(\d+)-(\d+)\/(\d+|\*)/i.exec(r.responseHeaders || '');
                        // 缺 Content-Range 时只有「这一块就是整个文件」才证得了偏移
                        const at = cr
                            ? (Number(cr[1]) === start && Number(cr[2]) === end && (cr[3] === '*' || Number(cr[3]) === total))
                            : (start === 0 && len === total);
                        if (r.status === 206 && len === want && at) {
                            got[idx] = want; report(); finish({ ok: true, buf: r.response });
                        } else if (r.status === 206) {
                            finish({ ok: false, why: '分块位置或长度不符（应为 ' + want + ' 字节）' });
                        } else if (r.status === 200 && start === 0 && want === total && len === total) {
                            got[idx] = want; report(); finish({ ok: true, buf: r.response });   // 200 只有单块文件能证偏移
                        } else if (r.status === 200) {
                            finish({ ok: false, why: '服务器不支持分段（返回整个文件）' });
                        } else finish({ ok: false, why: 'HTTP ' + r.status });
                    },
                    onerror: () => finish({ ok: false, why: '网络错误' }),
                    ontimeout: () => finish({ ok: false, why: '超时' }),
                }));
            });
            return (async () => {
                if (!total) return { ok: false, why: '取不到文件大小' };
                const chunks = [];
                for (let off = 0; off < total; off += CHUNK) {
                    chunks.push({ start: off, end: Math.min(off + CHUNK - 1, total - 1) });
                }
                let next = 0, fail = 0;
                const watchdog = setInterval(() => {
                    const sec = (Date.now() - t0) / 1000;
                    if (sec < 60) return;
                    const sum = finished + Object.keys(got).reduce((a, k) => a + got[k], 0);
                    const rate = sum / 1024 / sec;
                    if (rate < 60) {
                        slowAbort = true; abortAll();
                        clearInterval(watchdog);
                    }
                }, 10000);
                const worker = async (idx) => {
                    while (next < chunks.length) {
                        if (slowAbort || fail >= 6) return;
                        const me = next++;
                        const c = chunks[me];
                        let r = null;
                        for (let t = 0; t < 3; t++) {
                            if (slowAbort) return;
                            got[idx] = 0;
                            r = await fire(idx, c.start, c.end);
                            if (r.ok && r.buf) break;
                            // 503 = 服务端嫌连接多，退避要比普通错误久
                            const wait = /503/.test(r.why || '') ? 2000 * (t + 1) : 500 * (t + 1);
                            await base.sleep(wait);
                        }
                        if (!r || !r.ok || !r.buf || r.buf.byteLength !== c.end - c.start + 1) { fail++; got[idx] = 0; return; }
                        done[me] = r.buf; finished += r.buf.byteLength; delete got[idx]; report();
                    }
                };
                await Promise.all(Array.from({ length: Math.min(THREAD, chunks.length) }, (_, i) => worker(i)));
                clearInterval(watchdog);
                if (slowAbort) return { ok: false, why: '节点速度过低，已停止' };
                const missing = chunks.findIndex((c, i) => !done[i]);
                if (missing >= 0) return { ok: false, why: fail ? '部分分块失败' : '有分块未完成' };
                if (onProgress) onProgress(100, total);
                const url = URL.createObjectURL(new Blob(done));
                const a = document.createElement('a');
                a.href = url;
                a.download = f.filename || 'download';
                document.body.appendChild(a);
                a.click();
                a.remove();
                setTimeout(() => URL.revokeObjectURL(url), 120000);
                return { ok: true };
            })();
        },
        async _executePush(files, adapter) {
            const $btn = $('.listener-dl-execute');
            const pid = downloadState.protocol;
            if (pid === 'idm') {
                $btn.text('正在推送 ' + files.length + ' 个任务至 IDM…').prop('disabled', true);
                let ok = 0, fail = 0, rejected = '', stopped = false;
                for (let f of files) {
                    const $cell = $('.fl-dl-file-status[data-status-index="' + f._idx + '"]');
                    let r;
                    try {
                        r = stopped ? { ok: false, kind: 'down' } : await base.sendLinkToIDM(f.dlink, f.filename, f.rawSize || 0, base._cdnHeaders(f.dlink));
                    } catch (e) {
                        r = { ok: false, kind: 'error' };
                    }
                    if (r.ok) { ok++; $cell.html(MARK_OK); continue; }
                    fail++; $cell.html(MARK_NO);
                    if (r.kind === 'reject') rejected = r.state;
                    if (r.kind === 'down') { rejected = ''; stopped = true; }   // 整批断掉，拒收提示会带偏
                }
                $btn.text('推送完成：成功 ' + ok + '，失败 ' + fail);
                if (fail > 0) {
                    const why = rejected ? 'IDM 拒收任务（状态 ' + rejected + '），请反馈脚本版本'
                        : ok > 0 ? '已推送 ' + ok + ' 个，' + fail + ' 个未完成，可重试'
                        : 'IDM 未响应，请检查 IDM 浏览器插件是否启用';
                    base.panelNotice(why, ok > 0 ? 'warning' : 'error');
                } else if (ok > 0) base.panelNotice('已推送至 IDM', 'success');
                setTimeout(() => base._updateMainButton(), 4000);
            } else if (pid === 'rpc') {
                const kind = base._rpcKind();
                const cfg = base._rpcValues(kind);
                if (!cfg.domain || !cfg.port || !cfg.path) { base.showRPCSetting(false, kind); return; }
                $btn.text('正在推送 ' + files.length + ' 个任务至 RPC…').prop('disabled', true);
                const dirErr = base.rpcDir(cfg.dir).err;
                let ok = 0, fail = 0;
                for (let f of files) {
                    const $cell = $('.fl-dl-file-status[data-status-index="' + f._idx + '"]');
                    base._lastNotice = '';   // 清掉上一条，免得把别人的提示当成本次失败原因
                    const r = await adapter.sendLinkToRPC(f.filename, f.dlink);
                    if (r === 'success') { ok++; $cell.html(MARK_OK); }
                    else { fail++; $cell.html(MARK_NO); base._markFailWithReason($cell, base._lastNotice); }
                }
                $btn.text('推送完成：成功 ' + ok + '，失败 ' + fail);
                const dirNote = dirErr ? '；' + dirErr : '';
                if (fail > 0) base.panelNotice('部分文件推送失败，原因见各行说明' + dirNote, 'error');
                else if (ok > 0) base.panelNotice('已推送 ' + ok + ' 个任务给 ' + base._rpcName(kind) + '，进度请看下载器' + dirNote, dirErr ? undefined : 'success');
                setTimeout(() => base._updateMainButton(), 4000);
            } else if (pid === 'bc-rpc') {
                // 先探远程，通就静默推送，不通调本地 BC
                // 探活上限 2.5s：点击的激活态只有 5s，卡住就把导航机会耗光
                const remote = await Promise.race([
                    base.testBitcometConnection(true),
                    base.sleep(2500).then(() => false),
                ]);
                if (!remote) { base._launchBC(files); return; }
                $btn.text('正在推送 ' + files.length + ' 个任务至 BitComet…').prop('disabled', true);
                let ok = 0, fail = 0;
                for (let f of files) {
                    const $cell = $('.fl-dl-file-status[data-status-index="' + f._idx + '"]');
                    base._lastNotice = '';
                    const r = await base.sendLinkToBitcomet(f.filename, f.dlink, base._cdnHeaders(f.dlink));
                    if (r === 'success') { ok++; $cell.html(MARK_OK); }
                    else { fail++; $cell.html(MARK_NO); base._markFailWithReason($cell, base._lastNotice); }
                }
                $btn.text('推送完成：成功 ' + ok + '，失败 ' + fail);
                if (ok > 0) base.panelNotice('已推送至 BitComet', 'success');
                setTimeout(() => base._updateMainButton(), 4000);
            }
        },
        _markFailWithReason($cell, why) {
            const text = why || '推送失败（未返回原因）';
            $cell.siblings('.fl-dl-file-link').text(text).attr('title', text);
        },
        _launchBC(files) {
            const $btn = $('.listener-dl-execute');
            const adapter = base._activeAdapter;
            if (!adapter) return;
            let ok = 0, fail = 0, delay = 0;
            files.forEach((f, i) => {
                const idx = (f._idx != null) ? f._idx : i;
                let b = '';
                try { b = adapter.convertLinkToBC(f.dlink, f.filename, panInfo.ua || navigator.userAgent); } catch (e) { b = ''; }
                if (typeof b === 'object') b = b.link || '';
                const url = decodeURIComponent(b || '');
                const $cell = $('.fl-dl-file-status[data-status-index="' + idx + '"]');
                if (!/^bc:\/\//i.test(url)) { fail++; $cell.html(MARK_NO); return; }
                setTimeout(() => {
                    const a = document.createElement('a');
                    a.href = url;
                    a.style.display = 'none';
                    document.body.appendChild(a);
                    a.click();
                    setTimeout(() => a.remove(), 0);
                }, delay);
                delay += 600;   // 多个任务错开，避免连续导航被浏览器合并/丢弃
                ok++;
                $cell.html(MARK_OK);
            });
            $btn.text('推送成功：成功 ' + ok + '，失败 ' + fail);
            if (fail > 0) base.panelNotice('调起失败 ' + fail + ' 个：bc:// 地址生成失败', 'error');
            setTimeout(() => base._updateMainButton(), 4000);
        },
        async _executeCopy(files, adapter) {
            const $btn = $('.listener-dl-execute');
            $btn.text('正在生成命令…').prop('disabled', true);
            const pid = downloadState.protocol;
            let parts = [];
            for (let f of files) {
                let cmd = '';
                if (pid === 'aria2c') {
                    let a = adapter.convertLinkToAria(f.dlink, f.filename, panInfo.ua || navigator.userAgent);
                    if (typeof a === 'object') a = encodeURIComponent(a.link || a.text || '');
                    cmd = decodeURIComponent(a);
                } else if (pid === 'curl') {
                    let c = adapter.convertLinkToCurl(f.dlink, f.filename, panInfo.ua || navigator.userAgent);
                    if (typeof c === 'object') c = encodeURIComponent(c.link || '');
                    cmd = decodeURIComponent(c);
                } else if (pid === 'bc') {
                    let b = adapter.convertLinkToBC(f.dlink, f.filename, panInfo.ua || navigator.userAgent);
                    if (typeof b === 'object') b = encodeURIComponent(b.link || '');
                    cmd = decodeURIComponent(b);
                } else {
                    cmd = f.dlink;   // XDown 等：复制原始直链
                }
                parts.push(cmd);
                $('.fl-dl-file-status[data-status-index="' + f._idx + '"]').html(MARK_OK);
            }
            base.setClipboard(parts.join('\n'));
            $btn.text('复制完成：成功 ' + parts.length + '，失败 0');
            setTimeout(() => base._updateMainButton(), 4000);
        },


        standHeaders(headers = {}, addDefault = false) {
            if (!headers) return {};
            if (typeof headers === 'string') {
                const raw = {};
                headers.split(/[\r\n]+/).forEach(line => {
                    if (!line.trim() || !line.includes(':')) return;
                    const [key, ...rest] = line.split(':');
                    raw[key.trim().toLowerCase()] = rest.join(':').trim();
                });
                headers = raw;
            }
            let out = {};
            for (let key in headers) {
                const value = typeof headers[key] === 'object' ? JSON.stringify(headers[key]) : String(headers[key]);
                if (!value) continue;
                out[key.toLowerCase().split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('-')] = value;
            }
            if (addDefault) return out;
            return {
                "Cache-Control": "no-cache",
                "Pragma": "no-cache",
                "User-Agent": navigator.userAgent,
                "Referer": `${location.origin}/`,
                ...out
            };
        },
                _isBigBaiduLink(f) {
                    return /d\.pcs\.baidu\.com/.test(f.dlink || '') && (f.rawSize || 0) > 50 * 1024 * 1024;
                },
                _cdnHeaders(link) {
                    const h = {};
                    if (driveHdrs[link]) Object.assign(h, driveHdrs[link]);
                    // 按主机名判断，防子串冒充；UA 照发，Cookie 只走 https
                    let host = '', secure = false;
                    try { const u = new URL(link); host = u.hostname.toLowerCase(); secure = u.protocol === 'https:'; } catch (e) { }
                    const onHost = (d) => host === d || host.endsWith('.' + d);
                    if (onHost('d.pcs.baidu.com')) h['User-Agent'] = 'pan.baidu.com';
                    if (onHost('xunlei.com')) {
                        const xc = xunlei && xunlei._getAuthCookie ? xunlei._getAuthCookie() : '';
                        if (xc && secure) h['Cookie'] = xc;
                    }
                    if (onHost('quark.cn')) {
                        h['User-Agent'] = LOCAL_CONFIG.quark.ua;
                        if (secure) h['Cookie'] = base.getDownloadCookie();
                    }
                    return h;
                },
                // bc:// 参数名按官方文档：url / refer / cookie / user_agent，写成 referrer 客户端不认
                _bc(link, filename, headers) {
                    const h = this.standHeaders(headers, true);
                    const p = [`url=${encodeURIComponent(link)}`];
                    if (h['Referer']) p.push('refer=' + encodeURIComponent(h['Referer']));
                    if (h['User-Agent']) p.push('user_agent=' + encodeURIComponent(h['User-Agent']));
                    if (h['Cookie']) p.push('cookie=' + encodeURIComponent(h['Cookie']));
                    return encodeURIComponent(`bc://http/${this.e(`AA/${encodeURIComponent(filename)}/?${p.join('&')}ZZ`)}`);
                },
                async sendLinkToBitcomet(filename, link, headers) {
                    const domain = base.getValue('setting_bitcomet_domain');
                    const port = base.getValue('setting_bitcomet_port');
                    const path = base.getValue('setting_bitcomet_path');
                    const user = base.getValue('setting_bitcomet_user');
                    const pass = base.getValue('setting_bitcomet_pass');
                    const dir = base.getValue('setting_bitcomet_dir') || '';
                    if (!base.validRpcDomain(domain)) {
                        base.panelNotice('BitComet 服务器地址无效，仅允许本机或内网地址', 'error');
                        return 'fail';
                    }
                    const pErr = base.localPartError(port, path);
                    if (pErr) { base.panelNotice('BitComet ' + pErr, 'error'); return 'fail'; }
                    const url = domain + ':' + port + path;
                    const origin = domain + ':' + port;   // BitComet 面板自身的 origin
                    headers = this.standHeaders(headers);
                    const data = new URLSearchParams();
                    data.set('url', link);
                    if (dir) data.set('save_path', dir);
                    data.set('file_name', filename);
                    data.set('connection', '200');
                    for (const [k, v] of Object.entries(headers)) {
                        const key = k.toLowerCase();
                        if (key === 'referer') data.set('referrer', v);
                        else if (key === 'user-agent') data.set('user_agent', v);
                        else if (key === 'cookie') data.set('cookie', v);
                    }
                    try {
                        const res = await this.post(url, data.toString(), {
                            'Authorization': 'Basic ' + this.e(user + ':' + pass),
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Cache-Control': 'max-age=0',
                            'Origin': origin,
                            'Referer': origin + '/panel/task_add_httpftp',
                            'User-Agent': navigator.userAgent,
                        }, 'text');
                        if (res && String(res).includes('Add task failed!')) {
                            base.panelNotice('BitComet 添加任务失败', 'error');
                            return 'fail';
                        }
                        return 'success';
                    } catch (e) {
                        base.panelNotice('无法连接 BitComet（' + domain + ':' + port + '）' + (e && e.message ? '：' + e.message : ''), 'error');
                        return 'fail';
                    }
                },
        async sendLinkToIDM(link, filename, filesize, headers = {}) {
            const list = base.settingChoice('setting_idm_rpc') || [];
            const rpc = list.find(i => i && i.default) || list[0] || { id: '1' };
            if (!this.sendLinkToIDM.lock) this.sendLinkToIDM.lock = Promise.resolve();
            const run = this.sendLinkToIDM.lock.then(async () => {
                headers = this.standHeaders(headers);
                if (!this.sendLinkToIDM.seq) this.sendLinkToIDM.seq = 1;
                const seq = this.sendLinkToIDM.seq;
                const time = Date.now();
                // IDM 监听 127.0.0.1:1001，是本机接口，不跨域
                const url = `http://127.0.0.1:1001/client/${encodeURIComponent(rpc.id)}?seq=${seq}`;
                const ext = base.getExtension(filename);
                // IDM 头解析死板，少个结尾换行整块被拒
                const headersText = Object.entries(headers).map(([k, v]) => `${k}: ${v}`).join('\n') + '\n';
                // 长度前缀是字节数，文件名用 Blob().size
                const format = (key, val) => {
                    if (val === undefined || val === null) return '';
                    const str = String(val);
                    return `${key}=${new Blob([str]).size}:${str}`;
                };
                const fields = [
                    format(4, ext),
                    format(6, link),
                    format(7, location.origin),
                    format(11, headersText),
                    format(100, filename),
                    format(122, 4)
                ];
                // 信封格式没文档，从左往右读
                const data = `MSG#${seq}#13#1#10241:${seq + 1000}:0:${time}:0:1:2:${filesize || 0}:0,${fields.join(',')};`;

                const raw = await new Promise((resolve) => {
                    GM_xmlhttpRequest({
                        method: "POST", url, data,
                        headers: { "Content-Type": "text/plain" },
                        // withCredentials 关掉会 403
                        withCredentials: true,
                        timeout: 15000,
                        onload: (r) => resolve({ status: r.status, text: r.responseText || r.response || '' }),
                        ontimeout: () => resolve(null),
                        onerror: () => resolve(null),
                    });
                });
                this.sendLinkToIDM.seq++;
                // 只认报文尾 3;：头没文档，扩展也不读
                const body = raw ? String(raw.text).trim() : '';
                if (raw && raw.status === 200 && /:3;$/.test(body)) return { ok: true };
                // 只有 404/没响应才短路，其它非 200 不连坐
                if (!raw || raw.status === 404) return { ok: false, kind: 'down' };
                if (raw.status !== 200) return { ok: false, kind: 'http' };
                return { ok: false, kind: 'reject', state: (/:(\d+);$/.exec(body) || [])[1] || '未知' };
            });
            // 单次异常不能毒住后续推送
            return this.sendLinkToIDM.lock = run.catch((e) => {
                return { ok: false, kind: 'error' };
            });
        },

        listenElement(element, callback) {
            if (!element) return;
            if (watched[element]) return;
            watched[element] = true;
            const checkInterval = 500, warnAfter = 15000;
            let warned = false;
            const startAt = Date.now();
            function checkElement() {
                if (document.querySelector(element)) {
                    let ok = true;
                    try { callback(); } catch (e) {
                        ok = false;   // 回调抛错说明没挂上，下一轮再试
                        console.warn('挂载回调出错，稍后重试：', e && e.message);
                    }
                    if (ok) return;   // 挂上了就收工
                }
                setTimeout(checkElement, checkInterval);
                if (!warned && !document.querySelector('.fl-button') && Date.now() - startAt > warnAfter) {
                    warned = true;
                    console.warn('挂载点未出现：' + element + '（15 秒内一直没找到，页面结构可能已改）');
                }
            }
            checkElement();
        },
        // 挂载点会被框架重画，盯 DOM 变化比轮询省
        watchDom(callback) {
            if (typeof MutationObserver !== 'function' || !document.body) return;
            if (this._flObserver) return;   // [稳定性] 只创建一个，避免重复监听
            let last = 0;
            const ob = new MutationObserver(() => {
                if ($('.fl-button').length) return;
                let now = Date.now();
                if (now - last < 50) return;   // 连试失败时节流，别把主线程拖住
                last = now;
                // 等框架这一轮画完再插，晚一帧总好过被覆盖后闪一下
                requestAnimationFrame(() => { if (!$('.fl-button').length) callback(); });
            });
            ob.observe(document.body, { childList: true, subtree: true });
            this._flObserver = ob;
            window.addEventListener('pagehide', () => { try { ob.disconnect(); } catch (e) { } }, { once: true });
        },
        // 重渲染会清掉按钮：立刻挂 + 短重试 + 盯 DOM
        mountWithRetry(mount, guard) {
            let tries = 0, running = false;
            const done = () => {
                try {
                    if (guard && !guard()) {   // 页型不对就撤掉，不留能点的孤儿
                        $('.fl-button').remove();
                        return true;
                    }
                    if ($('.fl-button').length) return true;
                    return mount() === true;
                } catch (e) {
                    console.warn('挂载回调出错，稍后重试：', e && e.message);
                    return false;
                }
            };
            // 单飞：密集重绘时不叠多条重试链
            const retry = () => {
                if (running) return;
                running = true;
                const step = () => {
                    if (done() || ++tries > 10) { running = false; return; }
                    setTimeout(step, 300);
                };
                step();
            };
            this._flRetry = () => { tries = 0; retry(); };
            retry();
            if (!this._flWatching) {
                this._flWatching = true;
                this.watchDom(() => { if (!running) this._flRetry && this._flRetry(); });
                // hash 路由不重画整块时没有 DOM 事件，只能靠这两个监听重新判页型
                const onRoute = () => setTimeout(() => this._flRetry && this._flRetry(), 150);
                window.addEventListener('hashchange', onRoute);
                window.addEventListener('popstate', onRoute);
            }
        },
        addFerryLinkStyle() {
            color = base.settingChoice('setting_theme_color');
            // 页面上各网盘的「下载助手」按钮：底色跟主题色；浅色主题（棕褐/橙/粉）自动换深色字
            const btnInk = base._panelInk(color || '#09aaff') ? '#1f2328' : '#fff';
            const darkRules = `
            .ferrylink-swal-popup, .fl-popup { background: #1d1e1f !important; color: #d8d9da; }
            .swal2-popup { background: #1d1e1f !important; }
            .swal2-title { color: #e8eaed; }
            .swal2-html-container { color: #d8d9da; }
            .swal2-close { color: #8b8e93; }
            .swal2-close:hover { color: #d8d9da; }
            .swal2-confirm { background-color: ${color} !important; }
            .swal2-cancel { background-color: #3a3b3d !important; color: #d8d9da !important; }
            .fl-setting-row { border-bottom-color: #343536; }
            .fl-setting-row-name { color: #e8eaed; }
            .fl-setting-row-sub, .fl-setting-tip-text, .fl-setting-help { color: #8b8e93; }
            .fl-setting-row-click:hover { background: #2a2b2c; }
            .fl-setting-row-click::after { color: #8b8e93; }
            .fl-setting-row-click:hover::after { color: ${color}; }
            .fl-label { color: #e8eaed; }
            .fl-idm-bubble { box-shadow: 0 0 0 3px #1d1e1f, 0 8px 24px rgba(0, 0, 0, .45); }
            .fl-input { background: #2a2b2c; border-color: #3f4041; color: #e8eaed; }
            .fl-input::placeholder { color: #6b6e73; }
            .fl-color-box { border-color: #3f4041; }
            .fl-color-box.checked { border-color: #e8eaed !important; }
            .fl-dl-panel { color: #d8d9da; }
            .fl-dl-intro, .fl-dl-help, .fl-dl-file-count, .fl-dl-section-label, .fl-dl-proto-group-label { color: #8b8e93; }
            .fl-dl-files { border-top-color: #343536; border-bottom-color: #343536; }
            .fl-dl-section { border-top-color: #343536; }
            .fl-dl-file-row:hover { background: #2a2b2c; }
            .fl-dl-file-name { color: #e8eaed; }
            .fl-dl-file-size { color: #8b8e93; }
            .fl-dl-file-link { color: #a8abb0; }
            .fl-mark.ok { color: #9ccc65; }
            .fl-mark.no { color: #e06c75; }
            .fl-dl-gray .fl-dl-file-link { color: #e06c75; }
            /* 深色下滚动条提亮，否则跟深色背景同色看不见 */
            body.fl-dark ::-webkit-scrollbar-thumb { background-color: rgba(255,255,255,.22); }
            body.fl-dark ::-webkit-scrollbar-thumb:hover { background-color: rgba(255,255,255,.3); }
            .fl-dl-chip { background: #2a2b2c; border-color: #3f4041; color: #c9cacc; }
            .fl-dl-chip.active { background: ${color}; border-color: ${color}; color: #fff; }
            .fl-dl-default-btn { background: #2a2b2c; border-color: #3f4041; color: #c9cacc; }
            .fl-dl-default-btn:focus-visible { box-shadow: 0 0 0 2px #1d1e1f, 0 0 0 4px currentColor; }
            .fl-dl-default-btn:hover { background: #343536; border-color: ${color}; color: ${color}; }
            .fl-dl-default-btn.is-set { background: #1b2c35; border-color: #26617f; color: ${color}; }
            .fl-dl-default-btn.is-set .fl-dl-default-tag, .fl-dl-default-btn.is-set .fl-dl-default-name { color: #d8d9da; }
            .fl-dl-default-btn.is-set .fl-dl-default-x { color: #8b8e93; }
            .fl-dl-default-btn.is-set:hover { background: #3f2226; border-color: #5a2f33; }
            .fl-dl-default-btn.is-set:hover .fl-dl-default-tag, .fl-dl-default-btn.is-set:hover .fl-dl-default-name, .fl-dl-default-btn.is-set:hover .fl-dl-default-x { color: #e06c75; }
            .fl-dl-actions { border-top-color: #343536; }
            .fl-dl-btn-secondary { background: #2a2b2c; color: #c9cacc; border-color: #3f4041; }
            .fl-dl-btn-secondary:hover { background: #343536; }
            .fl-dl-btn-primary:disabled { background: #2a2b2c; color: #5b5e63; }
            .fl-dl-warning-bar { background: #3f2226; color: #e06c75; }
            .fl-dl-toast { background: #2a2b2c; color: #e8eaed; border-color: #3f4041; }
            .fl-dl-toast-success { border-color: #67c23a; color: #95d475; }
            .fl-dl-toast-error { border-color: #f56c6c; color: #f89898; }
            .fl-dl-empty { color: #8b8e93; }
            .fl-dl-empty svg { color: #5e6165; }
            .fl-dl-intro { background: #2a2b2c; border: 1px solid #343536; color: #a8abb0; }
            .fl-dl-intro b { color: #e8eaed; }
            .fl-dl-error { color: #e06c75; }
            .fl-dl-retry { background: #2a2b2c; border-color: ${color}; color: ${color}; }
            .fl-dl-retry:hover { background: ${color}22; }
            .swal2-popup, .swal2-title, .swal2-html-container { color: #e8eaed; }
            `;
            // 组合选择器每项都带前缀，否则只第一个生效
            const darkScoped = darkRules.trim().split('\n').map(l => l.trim() ? l.trim().replace(/(^|,\s+)([.#])/g, '$1body.fl-dark $2') : l).join('\n');
            let css = `
            body::-webkit-scrollbar { display: none }
            ::-webkit-scrollbar { width: 6px; height: 10px }
            ::-webkit-scrollbar-track { border-radius: 0; background: none }
            ::-webkit-scrollbar-thumb { background-color: rgba(85,85,85,.65) }
            ::-webkit-scrollbar-thumb,::-webkit-scrollbar-thumb:hover { border-radius: 999px; -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.2) }
            ::-webkit-scrollbar-thumb:hover { background-color: rgba(85,85,85,.75) }
            /* 面板外的弹窗用 16px 基准，面板本体 12px */
            .swal2-popup { font-size: 16px !important; }
            .fl-popup { font-size: 12.5px !important; border-radius: 6px !important; box-shadow: 0 1px 2px rgb(28 28 32 / 4%), 0 6px 16px rgb(28 28 32 / 8%) !important; }
            .fl-popup a { color: ${color} !important; }
            /* 面板标题栏：底色跟主题色走（--fl-theme 由 _panelChrome 写入，主题色切换即时生效） */
            .fl-panel { --fl-theme: ${color}; --fl-pad-x: 24px; --fl-pad-t: 16px; }
            .fl-panel-setting { --fl-pad-x: 20px; --fl-pad-t: 20px; }
            /* IDM / Aria / Motrix / BitComet 这些二级页用 popup 默认内边距 1.25em */
            .fl-panel-sub { --fl-pad-x: 20px; --fl-pad-t: 20px; }
            /* 负外边距把栏顶到 popup 边缘，做成通栏标题条 */
            .fl-panel > .swal2-header { position: relative; display: flex; flex-direction: row; align-items: center; gap: 8px; box-sizing: border-box; width: auto; height: 42px; padding: 0 46px 0 12px; margin: calc(-1 * var(--fl-pad-t)) calc(-1 * var(--fl-pad-x)) 12px; border-top-left-radius: inherit; border-top-right-radius: inherit; background: var(--fl-theme); background-image: linear-gradient(180deg, rgba(255, 255, 255, .12), rgba(0, 0, 0, .12)); color: #fff; cursor: move; user-select: none; -webkit-user-select: none; touch-action: none; }
            .fl-panel.fl-panel-dragging > .swal2-header { cursor: grabbing; }
            .fl-panel .fl-panel-title { margin: 0; padding: 0; color: #fff !important; font-size: 14px !important; font-weight: 600 !important; line-height: 1.2; letter-spacing: .02em; text-align: left; text-shadow: 0 1px 1px rgba(0, 0, 0, .18); }
            .fl-panel-bar-icon { flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; padding: 0; border: 0; border-radius: 50%; background: rgba(255, 255, 255, .2); color: #fff; cursor: pointer; transition: background-color 150ms, transform 150ms; }
            .fl-panel-bar-icon svg { display: block; width: 14px; height: 14px; }
            .fl-panel-bar-icon:hover { background: rgba(255, 255, 255, .34); }
            .fl-panel-bar-icon:active { transform: scale(.94); }
            .fl-panel-bar-icon.is-static { cursor: move; }
            .fl-panel-bar-icon:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
            /* 关闭按钮从右上角挪进标题栏里，跟栏同高 */
            .fl-panel > .swal2-close { top: 0; right: 0; z-index: 3; display: flex; align-items: center; justify-content: center; width: 44px; height: 42px; padding: 0; border-top-right-radius: inherit; background: none; color: #fff; font-size: 22px; line-height: 1; opacity: .85; }
            .fl-panel > .swal2-close:hover { background: rgba(0, 0, 0, .16); color: #fff; opacity: 1; }
            /* 棕褐/橙/粉这类浅色底：白字对比不够，换深色字 */
            .fl-panel.fl-bar-ink .fl-panel-title { color: #1f2328 !important; text-shadow: none; }
            .fl-panel.fl-bar-ink .fl-panel-bar-icon { background: rgba(0, 0, 0, .12); color: #1f2328; }
            .fl-panel.fl-bar-ink .fl-panel-bar-icon:hover { background: rgba(0, 0, 0, .2); }
            .fl-panel.fl-bar-ink .fl-panel-bar-icon:focus-visible { outline-color: #1f2328; }
            .fl-panel.fl-bar-ink > .swal2-close { color: #1f2328; }
            .fl-panel.fl-bar-ink > .swal2-close:hover { background: rgba(0, 0, 0, .14); color: #1f2328; }
            /* 面板缩放：右/下/右下三个热区（右下角带一个可见的斜纹手柄） */
            .fl-panel { --fl-grip: rgba(20, 22, 26, .3); }
            .fl-panel-rs { position: absolute; z-index: 4; touch-action: none; }
            .fl-panel-rs-e { top: 46px; right: 0; bottom: 16px; width: 7px; cursor: ew-resize; }
            .fl-panel-rs-s { left: 16px; right: 16px; bottom: 0; height: 7px; cursor: ns-resize; }
            .fl-panel-rs-se { right: 0; bottom: 0; width: 18px; height: 18px; cursor: nwse-resize; }
            .fl-panel-rs-se::before { content: ''; position: absolute; right: 3px; bottom: 3px; width: 9px; height: 9px; border-right: 2px solid var(--fl-grip); border-bottom: 2px solid var(--fl-grip); border-bottom-right-radius: 3px; }
            .fl-panel-rs-e:hover, .fl-panel-rs-s:hover, .fl-panel-rs-se:hover { background: rgba(0, 0, 0, .05); }
            .fl-panel-resizing { -webkit-user-select: none; user-select: none; }
            .fl-panel-resizing > .swal2-header { cursor: default; }
            .fl-panel-resizing > .swal2-html-container { overflow: hidden; }
            /* 定过尺寸后：纵向 flex，内容区自己滚，标题栏和底部按钮不会被挤出面板 */
            .fl-panel-sized { display: flex; flex-direction: column; box-sizing: border-box; max-width: calc(100vw - 20px); max-height: calc(100vh - 20px); }
            .fl-panel-sized > .swal2-header { flex: 0 0 auto; }
            .fl-panel-sized > .swal2-html-container { flex: 1 1 auto; min-height: 0; overflow: auto; }
            .fl-panel-sized > .swal2-actions, .fl-panel-sized > .swal2-footer { flex: 0 0 auto; }
            body.fl-dark .fl-panel { --fl-grip: rgba(255, 255, 255, .34); }
            body.fl-dark .fl-panel-rs-e:hover, body.fl-dark .fl-panel-rs-s:hover, body.fl-dark .fl-panel-rs-se:hover { background: rgba(255, 255, 255, .07); }
            .tag-danger { color: #cc3235; margin: 0 5px; }
            .ali-button { display: inline-flex; align-items: center; justify-content: center; border: 0 solid transparent; border-radius: 5px; white-space: nowrap; flex-shrink: 0; font-size: 14px; line-height: 1.5; outline: 0; touch-action: manipulation; transition: filter .15s ease, background-color .3s ease; color: ${btnInk}; background: ${color}; margin-left: 20px; padding: 0 12px; position: relative; cursor: pointer; height: 32px; min-height: 32px; }
            .ali-button svg path[fill="#fff"] { fill: currentColor; }
            /* 悬停/按下只调亮度，底色始终跟着主题色走 */
            .ali-button:hover { filter: brightness(1.1); }
            .ali-button:active { filter: brightness(.94); }
            .ali-button:focus-visible { outline: 2px solid ${color}; outline-offset: 2px; }
            .xunlei-button { display: inline-flex; align-items: center; justify-content: center; border: 0 solid transparent; border-radius: 4px; white-space: nowrap; flex-shrink: 0; font-size: 14px; line-height: 1.5; outline: 0; touch-action: manipulation; transition: filter .15s ease, background-color .3s ease; color: ${btnInk}; background: ${color}; margin-left: 12px; padding: 0 12px; position: relative; cursor: pointer; height: 36px; min-height: 32px; }
            .xunlei-button i { line-height: 36px; padding-left: 2px; }
            .xunlei-button:hover { filter: brightness(1.1); }
            .xunlei-button:active { filter: brightness(.94); }
            .xunlei-button:focus-visible { outline: 2px solid ${color}; outline-offset: 2px; }
            .tianyi-button { display: inline-flex; align-items: center; justify-content: center; margin-right: 12px; padding: 0 12px; border-radius: 2px; color: ${btnInk}; font-size: 12px; border: 1px solid rgba(0, 0, 0, .12); background: ${color}; cursor: pointer; position: relative; min-height: 30px; line-height: 28px; transition: filter .15s ease, background-color .3s ease, border-color .3s ease; width: auto; white-space: nowrap; text-align: center; }
            .tianyi-button:hover { filter: brightness(1.1); }
            .tianyi-button:active { filter: brightness(.94); }
            .tianyi-button:focus-visible { outline: 2px solid ${color}; outline-offset: 2px; }
            .yidong-button { float: left; position: relative; display: flex; align-items: center; justify-content: center; gap: 4px; margin: 20px 24px 20px 0; width: 98px; height: 36px; background: ${color}; border-radius: 2px; font-size: 14px; color: ${btnInk}; line-height: 1; text-align: center; cursor: pointer; min-height: 32px; transition: filter .15s ease, background-color .3s ease; }
            .yidong-button svg { width: 20px; height: 20px; flex: 0 0 auto; }
            .yidong-button:hover { filter: brightness(1.1); }
            .yidong-button:active { filter: brightness(.94); }
            .yidong-button:focus-visible { outline: 2px solid ${color}; outline-offset: 2px; }
            /* JS 补挂的深色字（浅色主题下），与上面的 btnInk 双保险 */
            .ali-button.fl-btn-ink, .xunlei-button.fl-btn-ink, .tianyi-button.fl-btn-ink, .yidong-button.fl-btn-ink { color: #1f2328; }
            .ali-button.fl-btn-ink svg path[fill="#fff"] { fill: #1f2328; }
            .quark-button { display: inline-flex; align-items: center; justify-content: center; border: 0; border-radius: 8px; white-space: nowrap; flex-shrink: 0; font-size: 12px; font-weight: 600; line-height: 1.5; outline: 0; color: ${btnInk}; background: ${color}; margin-right: 16px; padding: 0 10px; position: relative; cursor: pointer; height: 36px; min-height: 32px; transition: filter .15s ease, background-color .3s ease; }
            .quark-button svg { width: 20px; height: 20px; margin-right: 0; flex: 0 0 auto; }
            .quark-button svg g { stroke: ${btnInk}; }
            /* 悬停/按下只调亮度，底色始终跟着主题色走 */
            .quark-button:hover { filter: brightness(1.1); }
            .quark-button:active { filter: brightness(.94); }
            .quark-button:focus-visible { outline: 2px solid ${color}; outline-offset: 2px; }
            /* 棕褐/橙/粉这类浅色主题上白字发虚，跟面板标题栏一样改用深色字 */
            .quark-button.fl-btn-ink { color: #1f2328; }
            .quark-button.fl-btn-ink svg g { stroke: #1f2328; }
            .ctfile-button { display: inline-flex; align-items: center; justify-content: center; gap: 8px; box-sizing: border-box; margin: 6px; height: 48px; padding: 0 24px; border: 1px solid #1677ff; border-radius: 8px; background: #1677ff; color: #fff; font-family: inherit; font-size: 16px; font-weight: 700; line-height: 1; white-space: nowrap; flex-shrink: 0; cursor: pointer; transition: background-color .15s, border-color .15s, box-shadow .15s; }
            .ctfile-button:hover { background: #0958d9; border-color: #0958d9; }
            .ctfile-button:active { background: #003eb3; border-color: #003eb3; }
            .ctfile-button:focus-visible { outline: 2px solid #0958d9; outline-offset: 2px; }
            .ctfile-button svg { width: 18px; height: 18px; flex-shrink: 0; }
            .fl-button.fl-button-share { display: inline-flex; align-items: center; justify-content: center; gap: 6px; box-sizing: border-box; height: 36px; padding: 0 16px; margin: 0 8px 0 0; border: 1px solid var(--fl-bd, #09aaff); border-radius: 18px; background: var(--fl-bg, #f0faff); color: var(--fl-fg, #09aaff); font-family: inherit; font-size: 14px; font-weight: 700; line-height: 1; text-decoration: none; white-space: nowrap; flex-shrink: 0; cursor: pointer; }
            .fl-button.fl-button-share:hover { background: var(--fl-bg-h, #e1f4ff); }
            .fl-button.fl-button-share:focus-visible { outline: 2px solid var(--fl-bd, #09aaff); outline-offset: 2px; }
            .fl-button.fl-button-share svg { width: 16px; height: 16px; flex-shrink: 0; }
            .ctfile-button-sm { height: 30px; padding: 0 14px; gap: 6px; font-size: 14px; font-weight: 600; }
            .ctfile-button-sm svg { width: 16px; height: 16px; }
            /* 跟「上传/上传文件夹」同款：色值、高度、圆角挂载时从旁边按钮读回来（--fl-*） */
            .ctfile-button-peer { margin: 0; height: var(--fl-h, 32px); padding: 0 16px; gap: 8px; border: 1px solid var(--fl-bd, #1677ff); border-radius: var(--fl-r, 8px); background: var(--fl-bg, #1677ff); color: var(--fl-fg, #fff); font-size: var(--fl-fs, 14px); font-weight: var(--fl-fw, 600); }
            .ctfile-button-peer:hover { box-shadow: inset 0 0 0 999px rgba(255, 255, 255, .14); }
            .ctfile-button-peer:active { box-shadow: inset 0 0 0 999px rgba(0, 0, 0, .12); }
            .ctfile-button-peer:focus-visible { outline: 2px solid var(--fl-bd, #1677ff); outline-offset: 2px; }
            .ctfile-button-peer svg { width: 18px; height: 18px; }
            .pointer { cursor: pointer; }
            /* 设置页：菜单式主设置页行样式 */
            .fl-setting-list { text-align: left; }
            .fl-setting-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 10px 8px; margin: 0 -8px; border-bottom: 1px solid #e6e8eb; }
            .fl-setting-row:last-child { border-bottom: 0; }
            .fl-setting-row-main { flex: 1; min-width: 0; }
            .fl-setting-row-name { font-size: 14px; color: #303133; }
            .fl-setting-row-sub { font-size: 11px; color: #6b7078; margin-top: 2px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
            /* 长说明（如 Cookie 白名单）：不省略，按面板宽度自动折行，面板拉宽行数就变少 */
            .fl-setting-row-tall { align-items: flex-start; flex-wrap: wrap; row-gap: 6px; }
            .fl-setting-row-tall .fl-setting-row-main { flex: 1 1 240px; }
            .fl-setting-row-tall .fl-setting-row-name { line-height: 1.45; }
            .fl-setting-row-tall .fl-input { flex: 1 1 150px; margin-top: 3px; }
            .fl-setting-row-sub-wrap { white-space: normal; overflow: visible; text-overflow: clip; line-height: 1.7; overflow-wrap: anywhere; word-break: break-word; }
            .fl-setting-row-click { cursor: pointer; border-radius: 6px; }
            .fl-setting-row-click::after { content: '›'; font-size: 20px; line-height: 1; color: #6b7078; transition: color 150ms; }
            .fl-setting-row-click:hover { background: #f5f6f7; }
            .fl-setting-row-click:hover .fl-setting-row-name { color: ${color}; }
            .fl-setting-row-click:hover::after { color: ${color}; }
            .fl-setting-tip-text { font-size: 11px; color: #6b7078; line-height: 1.7; margin-top: 10px; text-align: left; }
            .fl-idm-field { position: relative; flex: 1; display: flex; }
            .fl-idm-bubble { position: absolute; left: 0; top: calc(100% + 8px); z-index: 20; display: inline-flex; align-items: center; gap: 7px; width: max-content; max-width: 260px; padding: 9px 13px; border-radius: 10px; background: #514226; color: #f4f6fa; font-size: 12.5px; line-height: 1.45; letter-spacing: .01em; text-align: left; box-shadow: 0 0 0 3px #fff, 0 8px 24px rgba(60, 40, 10, .22); opacity: 0; transform: translateY(-3px); pointer-events: none; transition: opacity .2s cubic-bezier(.16, 1, .3, 1), transform .2s cubic-bezier(.16, 1, .3, 1); }
            .fl-idm-bubble-icon { flex: 0 0 auto; display: block; }
            .fl-idm-bubble::before { content: ''; position: absolute; left: 14px; top: -6px; border: 6px solid transparent; border-top: 0; border-bottom-color: #514226; }
            .fl-idm-bubble.fl-shown { opacity: 1; transform: translateY(0); }
            @keyframes fl-idm-shake {
                0%, 100% { transform: translate3d(0, 0, 0); }
                15% { transform: translate3d(-3px, 0, 0); }
                30% { transform: translate3d(3px, 0, 0); }
                45% { transform: translate3d(-2px, 0, 0); }
                60% { transform: translate3d(2px, 0, 0); }
                75% { transform: translate3d(-1px, 0, 0); }
            }
            .fl-idm-bubble.is-shake { animation: fl-idm-shake .34s cubic-bezier(.36, .07, .19, .97) 1; }
            .fl-setting-help { font-size: 12px; color: #6b7078; margin-top: 8px; text-align: center; }
            /* 同 .fl-dl-help a：设置页这行也是文字加链接混排，一样要挡宿主样式 */
            .fl-setting-help a { color: ${color}; text-decoration: none; font: inherit; vertical-align: baseline; }
            .fl-setting-help a:hover { text-decoration: underline; }
            .fl-setting-label { display: flex; align-items: center; justify-content: space-between; padding-top: 10px; }
            .fl-label { flex: 0 0 100px; text-align: left; }
            .fl-input { flex: 1; padding: 8px 10px; border: 1px solid #e6e8eb; border-radius: 6px; font-size: 14px; background: #fff; color: #303133; transition: border-color 180ms ease; }
            .fl-input:focus { outline: none; border-color: ${color}; }
            .fl-setting-select { flex: 0 0 180px; min-height: 36px; cursor: pointer; appearance: none; -webkit-appearance: none; padding-right: 30px; background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%23909399' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 10px center; }
            .fl-setting-select:focus-visible { outline: 2px solid ${color}; outline-offset: 2px; }
            .fl-color { flex: 1; display: flex; flex-wrap: wrap; gap: 8px; }
            .fl-color-box { width: 30px; height: 30px; box-sizing: border-box; border: 1px solid #e6e8eb; border-radius: 6px; cursor: pointer; transition: border-color 150ms; }
            .fl-color-box:hover { border-color: ${color}; }
            .fl-color-box.checked { border: 3px dashed #303133 !important }
            .fl-color-box:focus-visible { outline: 2px solid ${color}; outline-offset: 2px; }
            .swal2-close { color: #8b8e93; }
            /* swal2 关闭按钮焦点轮廓：Tab 导航或弹窗打开时自动聚焦都会触发 */
            .swal2-close:focus, .swal2-close:focus-visible { outline: 0 !important; box-shadow: none !important; }
            .swal2-container { z-index: 200000 !important; }
            .ferrylink-swal-container { z-index: 2147483647 !important; }
            .ferrylink-swal-popup { z-index: 2147483647 !important; }
            body.swal2-height-auto { height: inherit !important; }
                        .btn-operate .btn-main { display:flex; align-items:center; }
            /* ---- L3 UI 层：下载面板样式 fl-dl-* ---- */
            .fl-dl-panel { width: 100%; font-size: 13.5px; }
            .fl-dl-intro { font-size: 13px; color: #606266; line-height: 1.65; margin-bottom: 12px; padding: 10px 14px; border-radius: 8px; background: #f5f6f7; }
            .fl-dl-intro b { color: #303133; font-weight: 600; }
            .fl-dl-intro a { color: ${color}; }
            .fl-dl-help { font-size: 12.5px; color: #6b7078; margin-top: 10px; }
            /* 宿主页会重置裸链接的字号字体，让「帮助：」偏高，这里用 font: inherit 对齐 */
            .fl-dl-help a { color: ${color}; text-decoration: none; font: inherit; vertical-align: baseline; }
            .fl-dl-help a:hover { text-decoration: underline; }
            .fl-dl-btn:focus-visible, .fl-dl-chip:focus-visible { outline: 2px solid ${color}; outline-offset: 2px; }
            .fl-dl-files { max-height: 320px; overflow-y: auto; margin: 0 -10px; padding: 0 10px; border-top: 1px solid #e6e8eb; }
            .fl-dl-file-count { font-size: 12.5px; color: #6b7078; margin-bottom: 6px; font-weight: 600; }
            /* 左右各外扩 10px 再由 padding 抵消，让 hover 底色与列表上下通栏边线同宽同齐 */
            .fl-dl-file-row { display: flex; align-items: center; gap: 10px; margin: 0 -10px; padding: 8px 20px; transition: background 180ms; }
            .fl-dl-file-row:hover { background: #f2f4f7; }
            .fl-dl-file-name { flex: 0 0 200px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-weight: 500; color: #111; }
            .fl-dl-file-size { flex: 0 0 70px; font-size: 12.5px; color: #6b7078; text-align: right; }
            .fl-dl-file-link { flex: 1; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 12.5px; color: #787774; }
            .fl-dl-file-status { flex: 0 0 auto; font-size: 13px; min-width: 22px; text-align: center; }
            .fl-mark { font-size: 16px; font-weight: 700; line-height: 1; }
            .fl-mark.ok { color: #518c17; }
            .fl-mark.no { color: #cc3235; }
            /* 灰行只压名字、大小、状态，原因那格保持清楚，用户要读的就是它 */
            .fl-dl-gray .fl-dl-file-name, .fl-dl-gray .fl-dl-file-size, .fl-dl-gray .fl-dl-file-status { opacity: 0.45; }
            .fl-dl-gray .fl-dl-file-link { color: #cc3235; }
            .fl-dl-section { margin: 0 -10px; padding: 14px 10px; border-top: 1px solid #e6e8eb; }
            .fl-dl-section-label { font-size: 12.5px; color: #6b7078; margin-bottom: 8px; font-weight: 600; }
            .fl-dl-default-btn { display: inline-flex; align-items: center; gap: 5px; margin-left: 8px; height: 22px; padding: 0 9px; border: 1px solid #d4d8de; border-radius: 999px; background: #fff; color: #606266; font-size: 12px; font-weight: 400; line-height: 1; font-family: inherit; cursor: pointer; vertical-align: middle; transition: background-color 180ms, border-color 180ms, color 180ms; }
            .fl-dl-default-btn svg { flex: 0 0 auto; }
            .fl-dl-default-btn:hover { border-color: #b9dff2; background: #f4fbff; color: #0a7bb8; }
            .fl-dl-default-btn:focus-visible { outline: none; box-shadow: 0 0 0 2px #fff, 0 0 0 4px currentColor; }
            .fl-dl-default-btn.is-set { border-color: #bfe9ff; background: #eef9ff; color: #0a7bb8; }
            .fl-dl-default-btn.is-set .fl-dl-default-tag { color: #303133; font-weight: 600; }
            .fl-dl-default-btn.is-set .fl-dl-default-name { max-width: 168px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #303133; }
            .fl-dl-default-btn.is-set .fl-dl-default-x { color: #8b8e93; }
            .fl-dl-default-btn.is-set:hover { border-color: #f2b7b9; background: #fef0f0; color: #cc3235; }
            .fl-dl-default-btn.is-set:hover .fl-dl-default-tag, .fl-dl-default-btn.is-set:hover .fl-dl-default-name { color: #cc3235; }
            .fl-dl-default-btn.is-set:hover .fl-dl-default-x { color: #cc3235; }
            #fl-dl-protocol-chips { row-gap: 4px; }
            .fl-dl-chips { display: flex; flex-wrap: wrap; gap: 8px; }
            .fl-dl-chip { display: inline-flex; align-items: center; padding: 8px 18px; border-radius: 999px; font-size: 13.5px; border: 1px solid #d4d8de; background: #fafbfc; color: #606266; cursor: pointer; transition: background-color 180ms, border-color 180ms, color 180ms; white-space: nowrap; }
            .fl-dl-chip:hover { border-color: ${color}; color: ${color}; }
            .fl-dl-chip.active { background: ${color}; border-color: ${color}; color: #fff; }
            .fl-dl-chip.disabled { opacity: 0.4; cursor: not-allowed; pointer-events: none; }
            .fl-dl-proto-group { width: 100%; }
            .fl-dl-proto-group-label { font-size: 12px; color: #6b7078; margin: 4px 0; }
            .fl-dl-actions { display: flex; align-items: center; gap: 10px; padding-top: 14px; border-top: 1px solid #e6e8eb; }
            .fl-dl-btn { padding: 8px 22px; border-radius: 8px; font-size: 13.5px; border: 0; cursor: pointer; transition: background-color 180ms, border-color 180ms, color 180ms; white-space: nowrap; min-height: 38px; }
            .fl-dl-btn-primary { background: ${color}; color: #fff; font-size: 14.5px; font-weight: 500; min-width: 150px; }
            .fl-dl-btn-primary:hover { opacity: 0.9; }
            .fl-dl-btn-primary:disabled { background: #f5f6f7; color: #c0c4cc; cursor: not-allowed; font-weight: 400; }
            .fl-dl-btn-secondary { background: #fff; color: #606266; border: 1px solid #d4d8de; }
            .fl-dl-btn-right { margin-left: auto; }
            .fl-dl-btn-secondary:hover { background: #f5f6f7; }
            .fl-dl-btn-secondary:disabled { opacity: 0.5; cursor: not-allowed; }
            .fl-dl-error { padding: 16px; text-align: center; color: #cc3235; }
            .fl-dl-warning-bar { background: #fef0f0; color: #cc3235; padding: 6px 12px; border-radius: 6px; font-size: 12px; margin: 8px 0; display: none; }
            .fl-dl-toast { position: fixed; top: 10vh; left: 50%; transform: translateX(-50%); z-index: 2147483647; display: flex; align-items: center; background: #fff; color: #303133; border: 1px solid #e6e8eb; padding: 12px 24px; border-radius: 8px; font-size: 15px; font-weight: 500; box-shadow: 0 4px 16px rgb(28 28 32 / 18%), 0 1px 3px rgb(28 28 32 / 12%); max-width: 80vw; }
            .fl-dl-toast span { word-break: break-all; }
            .fl-dl-toast-success { border-color: #67c23a; color: #2f7a17; }
            .fl-dl-toast-error { border-color: #f56c6c; color: #c03639; }
            .fl-dl-empty { padding: 14px 28px; text-align: center; color: #6b7078; font-size: 14.5px; }
            .fl-dl-empty svg { display: block; margin: 0 auto 10px; color: #c3c8cf; }
            .fl-dl-empty-title { font-size: 15.5px; }
            .fl-dl-retry { margin-top: 10px; padding: 8px 22px; min-height: 38px; border-radius: 8px; border: 1px solid ${color}; color: ${color}; background: #fff; cursor: pointer; font-size: 13px; }
            .fl-dl-retry:hover { background: ${color}11; }
            /* 弹窗入场：drop（平滑掉落） */
            @keyframes ferrylinkDrop {
                0%   { transform: translateY(-30px); opacity: 0; }
                100% { transform: translateY(0);    opacity: 1; }
            }
            .swal2-popup:not(.swal2-hide) { animation: ferrylinkDrop 0.42s cubic-bezier(.22,.61,.36,1) both; }
            .fl-popup-flip:not(.swal2-hide) { animation: ferrylinkFlip 0.45s cubic-bezier(.22,.61,.36,1) both; transform-origin: center; }
            /* 系统开启减少动态效果时不播入场动画 */
            @media (prefers-reduced-motion: reduce) {
                .swal2-popup:not(.swal2-hide), .fl-popup-flip:not(.swal2-hide) { animation: none; }
            }
            ::selection { background: ${color}33; color: inherit; }
            @keyframes ferrylinkFlip {
                0%   { transform: perspective(800px) rotateY(-80deg); opacity: 0; }
                100% { transform: perspective(800px) rotateY(0); opacity: 1; }
            }
            ${darkScoped}
            .fl-setting-actions { display: flex; align-items: center; justify-content: center; gap: 80px; padding-top: 14px; }
            .fl-setting-theme-btn { flex: 0 0 auto; min-height: 32px; padding: 4px 16px; cursor: pointer; }
            `;
            this.addStyle('ferrylink-style', 'style', css);
            this.applyThemeMode();
        },
        applyThemeMode() {
            const dark = base.settingChoice('setting_theme_mode') === 'dark';
            $(document.body).toggleClass('fl-dark', dark);
        },
        // [体验] 主题色即时生效：按新色重建样式表，并同步已渲染按钮的内联色，避免整页刷新
        applyThemeColor(newColor) {
            if (!newColor) return;
            const old = color;
            base.setValue('setting_theme_color', newColor);
            const styleDom = document.getElementById('ferrylink-style');
            if (styleDom) styleDom.remove();
            this.addFerryLinkStyle();
            base._paintPanelTheme();   // 已打开的面板标题栏同步换色
            base._paintPageButtons();  // 页面上的夸克按钮同步换色/换字色
            if (old && old !== newColor) {
                document.querySelectorAll('.fl-button [style]').forEach(el => {
                    const st = el.getAttribute('style');
                    if (st && st.indexOf(old) !== -1) el.setAttribute('style', st.split(old).join(newColor));
                });
            }
        },
    };
    const LOCAL_CONFIG = {
        baidu: {
            pcs: {"0": "https://pan.baidu.com/rest/2.0/xpan/multimedia?method=filemetas&dlink=1", "1": "https://pan.baidu.com/api/sharedownload?channel=chunlei&web=1&app_id=250528", "2": "https://pan.baidu.com/share/tplconfig?fields=sign,timestamp&channel=chunlei&web=1&app_id=250528&clienttype=0", "3": "https://openapi.baidu.com/oauth/2.0/authorize?client_id=IlLqBbU3GjQ0t46TRwFateTprHWl39zF&response_type=token&redirect_uri=oob&confirm_login=0&scope=basic,netdisk", "4": "https://openapi.baidu.com/oauth/2.0/login_success"},
            btn: {"home": ".tcuLAu", "main": ".wp-s-agile-tool-bar__header"},
            ua: "pan.baidu.com",
            api: {0: "API 下载", 1: ''},
            aria: {0: "Aria 下载", 1: ''},
            rpc: {0: "RPC 下载", 1: ''},
            curl: {0: "cURL 下载", 1: ''},
            bc: {0: "BC 下载", 1: ''},
        },
        ali: {
            pcs: {"0": "https://api.aliyundrive.com/v2/file/get_share_link_download_url", "1": "https://api.aliyundrive.com/v2/file/get_download_url"},
            btn: {"home": "[class*=\"header--\"] > [class*=\"actions--\"], [class*=\"header--\"] [class*=\"actions--\"]"},
            dom: {"list": "[class*=\"node-list-table-view--\"]", "grid": "[class*=\"node-list-grid-view--\"]", "switch": "[class*=\"switch-wrapper--\"]"},
            api: {0: "API 下载", 1: ''},
            aria: {0: "Aria 下载", 1: ''},
            rpc: {0: "RPC 下载", 1: ''},
            curl: {0: "cURL 下载", 1: ''},
            bc: {0: "BC 下载", 1: ''},
        },
        tianyi: {
            pcs: {"0": "https://cloud.189.cn/api/open/file/getFileDownloadUrl.action", "1": "https://api.cloud.189.cn/open/oauth2/ssoH5.action", "2": "https://api.cloud.189.cn/open/file/getFileDownloadUrl.action"},
            btn: {"home": "[class*=\"FileHead_file-head-left\"]"},
            api: {0: "API 下载", 1: ''},
            aria: {0: "Aria 下载", 1: ''},
            rpc: {0: "RPC 下载", 1: ''},
            curl: {0: "cURL 下载", 1: ''},
            bc: {0: "BC 下载", 1: ''},
        },
        xunlei: {
            pcs: {"0": "https://api-pan.xunlei.com/drive/v1/files/"},
            btn: {"home": ".FileMenu__menus--HFKwO"},
            api: {0: "API 下载", 1: ''},
            aria: {0: "Aria 下载", 1: ''},
            rpc: {0: "RPC 下载", 1: ''},
            curl: {0: "cURL 下载", 1: ''},
            bc: {0: "BC 下载", 1: ''},
        },
        quark: {
            pcs: {"0": "https://drive-pc.quark.cn/1/clouddrive/file/download?pr=ucpro&fr=pc&sys=win32&ve=6.9.7.761", "1": "https://drive-social-api.quark.cn/1/clouddrive/chat/conv/file/acquire_dl_token?pr=ucpro&fr=pc&sys=win32&ve=6.9.7.761&fr=win&la=zh-CN&ch=pckk%40product_guanwan"},
            btn: {"home": ".btn-operate .btn-main"},
            ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 QuarkPC/6.9.7.761 QuarkCloudDrivePC/6.9.7.761 quark-cloud-drive/2.5.40",
            api: {0: "API 下载", 1: ''},
            aria: {0: "Aria 下载", 1: ''},
            rpc: {0: "RPC 下载", 1: ''},
            curl: {0: "cURL 下载", 1: ''},
            bc: {0: "BC 下载", 1: ''},
        },
        yidong: {
            pcs: {"0": "https://personal-kd-njs.yun.139.com/hcy/file/getDownloadUrl", "1": "https://caiyun.139.com/stapi/outlink/content/download"},
            btn: {"home": ".top_button"},
            api: {0: "API 下载", 1: ''},
            aria: {0: "Aria 下载", 1: ''},
            rpc: {0: "RPC 下载", 1: ''},
            curl: {0: "cURL 下载", 1: ''},
            bc: {0: "BC 下载", 1: ''},
        },
    };

    // L1 适配层：各网盘适配器，禁止互相引用
    let baidu = {
        site: 'baidu',
        _linkCache: [],   // dlink 内存缓存 [{ id: fs_id, expires, data }]，会话级、不落 GM 存储
        _getFidArray() {
            let fidlist = [];
            selectedFiles.forEach(v => {
                if (+v.isdir === 1) return;
                let fid = v.fs_id !== undefined && v.fs_id !== null ? v.fs_id
                    : (v.file_id !== undefined && v.file_id !== null ? v.file_id : v.id);
                if (fid !== undefined && fid !== null && fid !== '') fidlist.push(fid);
            });
            return fidlist;
        },

        setBDUSS(done) {
            const save = (BDUSS) => {
                if (BDUSS) base.setStorage("baiduyunPlugin_BDUSS", {BDUSS});
                done && done(!!BDUSS);
            };
            try {
                if (GM_cookie) {
                    GM_cookie('list', {name: 'BDUSS'}, (cookies, error) => {
                        if (!error && cookies && cookies[0] && cookies[0].value) {
                            save(cookies[0].value);
                        } else {
                            save(base.getCookie('BDUSS'));
                        }
                    });
                    return;
                }
            } catch (e) {
            }
            save(base.getCookie('BDUSS'));
        },
        getBDUSS() {
            let baiduyunPlugin_BDUSS = base.getStorage('baiduyunPlugin_BDUSS') ? base.getStorage('baiduyunPlugin_BDUSS') : '{"baiduyunPlugin_BDUSS":""}';
            return baiduyunPlugin_BDUSS.BDUSS || '';
        },
        convertLinkToAria(link, filename, ua) {
            let BDUSS = this.getBDUSS();
            filename = base.fixFilename(filename);
            let cookie = BDUSS ? ` --header "Cookie: BDUSS=${BDUSS}"` : '';
            return encodeURIComponent(`aria2c "${link}" --out "${filename}" -x 16 -s 16 -k 1M --header "User-Agent: ${ua}"${cookie}`);
        },
        convertLinkToBC(link, filename, ua) {
            let BDUSS = this.getBDUSS();
            let cookie = BDUSS ? `BDUSS=${BDUSS}` : '';
            let bc = `AA/${encodeURIComponent(filename)}/?url=${encodeURIComponent(link)}&cookie=${encodeURIComponent(cookie)}&user_agent=${encodeURIComponent(ua)}ZZ`;
            return encodeURIComponent(`bc://http/${base.e(bc)}`);
        },
        convertLinkToCurl(link, filename, ua) {
            let BDUSS = this.getBDUSS();
            let terminal = base.settingChoice('setting_terminal_type');
            filename = base.fixFilename(filename);
            let cookie = BDUSS ? ` -b "BDUSS=${BDUSS}"` : '';
            return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}" -A "${ua}"${cookie}`);
        },
        addPageListener() {
            // 重复挂载（SPA 路由切换后重挂按钮）时别再叠一层监听，否则一次点击会连发多次请求
            if (this._pageClickBound) return;
            this._pageClickBound = true;
            doc.on('click', '.fl-button', async (e) => {
                if ($(e.target).closest('.g-button-menu, .menu').length) return;
                // 不走 didOpen 调 showLoading：它包在 setTimeout 里，面板已在 DOM
                Swal.fire({ title: '获取下载链接', html: '<div class="fl-fetch-progress">正在获取…</div>', allowOutsideClick: false, showConfirmButton: false });
                Swal.showLoading();
                if (pageNum === 'share') this.setBDUSS();
                try { await this.getPCSLink(); } catch (err) { Swal.close(); base.renderErrorPanel('获取下载链接失败：' + (err && err.message || '未知错误'), this); } finally { base.closeIfLoading(); }
            });
        },
        addButton() {
            const $button = $(`<div class="fl-button" style="position: relative; display: inline-block; margin-right: 8px;"><div style="color:#fff;background: ${color};border-color:${color}" class="g-button g-button-blue"><span class="g-button-right"><em class="icon icon-download"></em><span class="text" style="width: 60px;">下载助手</span></span></div>`);
            const $mainButton = $(`<div class="fl-button" style="position: relative; display: inline-block; margin-right: 16px;"><button class="u-button u-button--primary u-button--small is-round is-has-icon" style="background: ${color};border-color: ${color};font-size: 14px; height: 32px; padding: 8px 16px; border: none; border-radius: 16px;"><i class="u-icon u-icon-download"></i><span>下载助手</span></button>`);
            const $shareButton = $(`<a class="fl-button fl-button-share" href="javascript:;" title="下载助手">${BTN_ICON}<span>下载助手</span></a>`);
            if (color) [['--fl-fg', color], ['--fl-bd', color], ['--fl-bg', color + '1f'], ['--fl-bg-h', color + '3d']].forEach((kv) => $shareButton[0].style.setProperty(kv[0], kv[1]));
            base.mountWithRetry(() => {
                pageNum = this.detectPage();
                if (pageNum === 'share' && this._shareIsMine()) return true;
                let sel = pageNum === 'share' ? this._shareMountSel() : (panInfo.btn[pageNum] || panInfo.btn.main);
                let $toolWrap = pageNum === 'share' ? $(sel).first() : $(sel);
                if (!$toolWrap.length) return false;
                let $btn = pageNum === 'main' ? $mainButton : (pageNum === 'share' ? $shareButton : $button);
                if (pageNum === 'share' && !/x-button-box/.test(sel)) $toolWrap.append($btn);
                else $toolWrap.prepend($btn);
                return true;
            }, () => !!this.detectPage());
            // 分享页等点击再读，避免只打开页面就落库
            if (pageNum !== 'share') this.setBDUSS();
            this.addPageListener();
        },
        async getToken() {
            const saveToken = (token) => {
                if (token) {
                    base.setValue('baidu_access_token', token);
                    base.setValue('baidu_access_token_bduss', this.getBDUSS());
                    this.getCurrentUK().then((uk) => {
                        if (uk) base.setValue('baidu_access_token_uk', uk);
                    });
                }
                return token;
            };
            const waitForToken = (maxAttempts = 30) => new Promise((resolve) => {
                let attempts = 0;
                const interval = setInterval(() => {
                    const token = base.getValue('baidu_access_token');
                    if (token) {
                        clearInterval(interval);
                        resolve(token);
                    }
                    attempts++;
                    if (attempts > maxAttempts) {
                        clearInterval(interval);
                        resolve('');
                    }
                }, 1000);
            });
            let stage = '';
            try {
                if (base.getFinalUrl) {
                    stage = '取授权页';
                    let res = await base.getFinalUrl(panInfo.pcs[3]);
                    if (res.includes('authorize')) {
                        stage = '取授权页 HTML';
                        let html = await base.get(panInfo.pcs[3], {}, 'text');
                        let bdstoken = html.match(/name="bdstoken"\s+value="([^"]+)"/)?.[1];
                        let client_id = html.match(/name="client_id"\s+value="([^"]+)"/)?.[1];
                        if (bdstoken && client_id) {
                            stage = '提交授权';
                            let data = {
                                grant_permissions_arr: 'netdisk',
                                bdstoken: bdstoken,
                                client_id: client_id,
                                response_type: 'token',
                                display: 'page',
                                grant_permissions: 'basic,netdisk'
                            };
                            await base.post(panInfo.pcs[3], base.stringify(data), {'Content-Type': 'application/x-www-form-urlencoded'});
                            let res2 = await base.getFinalUrl(panInfo.pcs[3]);
                            let t = saveToken(res2.match(/access_token=([^&]+)/)?.[1]);
                            if (t) return t;
                            console.warn('百度授权后未返回 access_token');
                        } else {
                            console.warn('百度授权页缺少 bdstoken/client_id');
                        }
                    } else {
                        let t = saveToken(res.match(/access_token=([^&]+)/)?.[1]);
                        if (t) return t;
                        console.warn('百度回跳地址缺少 access_token');
                    }
                }
            } catch (e) {
                console.warn('百度静默授权失败（' + stage + '）：' + (e && e.message || e));
            }
            base.deleteValue('baidu_access_token');
            base.tipLoading('已打开百度授权页，正在等待授权完成…');
            GM_openInTab(panInfo.pcs[3], {active: false, insert: true, setParent: true});
            let token = await waitForToken();
            // 授权页可能刚好在超时后才写入，再读一次
            if (!token) token = base.getValue('baidu_access_token');
            return saveToken(token);
        },
        async getCurrentUK() {
            try {
                let res = await Promise.race([
                    base.get('https://pan.baidu.com/rest/2.0/xpan/nas?method=uinfo', {"User-Agent": panInfo.ua}),
                    new Promise((resolve) => setTimeout(() => resolve(null), 3000))
                ]);
                if (res && res.errno === 0 && res.user_info && res.user_info.uk) {
                    return String(res.user_info.uk);
                }
            } catch (e) {}
            return '';
        },
        async preflightAccount() {
            try {
                let accessToken = base.getValue('baidu_access_token');
                let storedUK = base.getValue('baidu_access_token_uk');
                if (!accessToken || !storedUK) return;
                let currentUK = await this.getCurrentUK();
                if (!currentUK) return;
                if (currentUK !== storedUK) {
                    base.deleteValue('baidu_access_token');
                    base.deleteValue('baidu_access_token_bduss');
                    base.deleteValue('baidu_access_token_uk');
                }
            } catch (e) {
                    message.error('百度授权失败：' + (e.message || '未知错误'));
                }
        },
        async getPCSLink(maxRequestTime = 1) {
            if (pageNum === 'share') return this._shareLink();
            selectedFiles = this.getSelectedList();
            let fidArray = this._getFidArray(), res;
            const authFail = () => { Swal.close(); return base.renderErrorPanel('百度授权未完成：请刷新重试，仍失败请确认已登录百度', this); };
            if (pageNum === 'home' || pageNum === 'main') {
                if (selectedFiles.length === 0) {
                    Swal.close(); return base.renderDownloadPanel([], this);
                }
                if (!fidArray.length) {
                    Swal.close(); return message.error('提示：请打开文件夹后勾选文件！');
                }
                let currentBDUSS = this.getBDUSS();
                let storedBDUSS = base.getValue('baidu_access_token_bduss');
                let accessToken = base.getValue('baidu_access_token');
                if (accessToken) {
                    let currentUK = await this.getCurrentUK();
                    let storedUK = base.getValue('baidu_access_token_uk');
                    let mismatch = false;
                    if (currentUK && storedUK && storedUK !== currentUK) mismatch = true;
                    if (!mismatch && currentBDUSS && storedBDUSS && storedBDUSS !== currentBDUSS) mismatch = true;
                    if (mismatch) {
                        base.deleteValue('baidu_access_token');
                        base.deleteValue('baidu_access_token_bduss');
                        base.deleteValue('baidu_access_token_uk');
                        this._linkCache = [];   // 账号变了，旧 dlink 绑定的是别人的 uk，全废
                        accessToken = '';
                    } else if (currentUK && !storedUK) {
                        base.setValue('baidu_access_token_uk', currentUK);
                    } else if (currentBDUSS && !storedBDUSS) {
                        base.setValue('baidu_access_token_bduss', currentBDUSS);
                    }
                }
                if (!accessToken) accessToken = await this.getToken();
                if (!accessToken) return authFail();

                const now = Date.now();
                const files = selectedFiles.filter(v => +v.isdir !== 1);
                const pending = files.filter(it => {
                    const idx = this._linkCache.findIndex(c => c.id == it.fs_id);
                    if (idx === -1) return true;
                    if (this._linkCache[idx].expires > now) {
                        Object.assign(it, this._linkCache[idx].data);
                        return false;
                    }
                    this._linkCache.splice(idx, 1);
                    return true;
                });

                // 百度 fsids 上限 100，取 50 留余量
                const BATCH = 50;
                let returnedCount = 0, refreshed = false, anyMarked = false;
                for (let i = 0; i < pending.length; i += BATCH) {
                    const batch = pending.slice(i, i + BATCH);
                    const fsids = encodeURIComponent('[' + batch.map(x => x.fs_id) + ']');
                    const url = `${panInfo.pcs[0]}&fsids=${fsids}&access_token=${accessToken}`;
                    try {
                        res = await base.get(url, {"User-Agent": panInfo.ua});
                    } catch (e) { res = null; }

                    if (res && res.errno === 112) {
                        Swal.close(); return message.error('提示：页面过期，请刷新重试！');
                    }
                    if (!res || res.errno !== 0) {
                        if (!refreshed && maxRequestTime >= 1) {
                            refreshed = true;
                            base.deleteValue('baidu_access_token');
                            base.deleteValue('baidu_access_token_bduss');
                            base.deleteValue('baidu_access_token_uk');
                            accessToken = await this.getToken();
                            if (!accessToken) return authFail();
                            i -= BATCH; continue;
                        }
                        const reason = res && res.errno
                            ? `获取下载地址失败（错误码 ${res.errno}）`
                            : '请求失败，请重试';
                        batch.forEach(x => { x.dlink = reason; });
                        anyMarked = true;
                    } else if (!Array.isArray(res.list)) {
                        // 百度会把错误说明塞进 list（如大文件要 SVIP），不重试
                        const text = typeof res.list === 'string' && res.list ? res.list : '该文件未返回下载链接';
                        batch.forEach(x => { x.dlink = text; });
                        anyMarked = true;
                    } else {
                        batch.forEach(x => {
                            const hit = res.list.find(li => li.fs_id == x.fs_id);
                            if (hit) {
                                Object.assign(x, hit);
                                returnedCount++;
                                this._linkCache.push({ id: x.fs_id, expires: now + 4 * 60 * 60 * 1000, data: hit });
                            } else if (res.list.length > 0) {
                                x.dlink = '该文件未返回下载链接（可能已失效或被禁止下载）';
                                anyMarked = true;
                            }
                        });
                    }

                    const hc = Swal.getHtmlContainer && Swal.getHtmlContainer();
                    if (hc) hc.textContent = `已获取 ${Math.min(i + BATCH, pending.length)} / ${pending.length} 个地址`;
                    if (i + BATCH < pending.length) await base.sleep(1000);
                }

                if (pending.length > 0 && returnedCount === 0 && !anyMarked) {
                    if (maxRequestTime >= 1) {
                        base.deleteValue('baidu_access_token');
                        base.deleteValue('baidu_access_token_bduss');
                        base.deleteValue('baidu_access_token_uk');
                        if (!(await this.getToken())) return authFail();
                        return this.getPCSLink(maxRequestTime - 1);
                    }
                    return message.error('提示：获取下载链接失败！请刷新网页后重试！');
                }
                const normalized = this.normalizeList(files);
                base.renderDownloadPanel(normalized, this);
            }
        },
        _shareInfo() {
            let scope = (typeof unsafeWindow !== 'undefined' && unsafeWindow) ? unsafeWindow : window;
            let dump = null;
            try { dump = scope.locals && scope.locals.dump ? scope.locals.dump() : null; } catch (e) { }
            let has = dump && typeof dump === 'object';
            let pick = (k) => {
                let v = has ? dump[k] : null;
                v = v && typeof v === 'object' && 'value' in v ? v.value : v;
                return v === undefined || v === null ? '' : String(v);
            };
            let raw = has && dump.file_list ? (dump.file_list.value || dump.file_list) : null;
            let list = Array.isArray(raw) ? raw : [];
            let sekey = String(scope.currentSekey || '');
            let m = /^\/s\/([^/?#]+)/.exec(location.pathname);
            return { pick: pick, list: list, sekey: sekey, surl: m ? m[1] : '', hasDump: !!has };
        },
        // 要带页面来源，用页面 fetch 发
        _shareRequest(url, method, body) {
            let scope = (typeof unsafeWindow !== 'undefined' && unsafeWindow) ? unsafeWindow : window;
            let toJson = (t) => {
                if (t && typeof t === 'object') return t;
                try { return JSON.parse(t); } catch (e) {
                    throw new Error('接口返回的不是数据（可能未登录或页面已改版）');
                }
            };
            if (typeof scope.fetch === 'function') {
                let opt = { method: method, credentials: 'include' };
                if (method !== 'GET') {
                    opt.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
                    opt.body = body;
                }
                // 卡住会占死单飞位，到点自己断
                let ctrl = new AbortController();
                opt.signal = ctrl.signal;
                let timer = setTimeout(() => ctrl.abort(), 20000);
                return scope.fetch(url, opt).then(r => r.text()).then(t => { clearTimeout(timer); return toJson(t); }).catch((e) => {
                    clearTimeout(timer);
                    // POST 可能已被收下，重发等于提交两次
                    if (method !== 'GET') throw new Error(e && e.name === 'AbortError' ? '请求超时，请稍后重试' : ((e && e.message) || '请求超时或失败，请稍后重试'));
                    return Promise.resolve(base.get(url)).then(toJson);
                });
            }
            return method === 'GET'
                ? Promise.resolve(base.get(url)).then(toJson)
                : Promise.resolve(base.post(url, body, { 'Content-Type': 'application/x-www-form-urlencoded', 'Referer': location.origin }, 'text')).then(toJson);
        },
        _shareMountSel() {
            let cands = ['.module-share-bottom-bar .x-button-box', '.module-share-top-bar .x-button-box', '.share-header-bar'];
            for (let i = 0; i < cands.length; i++) {
                if (document.querySelector(cands[i])) return cands[i];
            }
            return '';
        },
        // 自己的分享有「取消分享」，不挂按钮
        _shareIsMine() {
            let bars = document.querySelectorAll('.share-header-bar, .module-share-top-bar, .module-share-bottom-bar');
            return Array.from(bars).some(b => Array.from(b.querySelectorAll('button, a')).some(el => /^取消分享$/.test((el.textContent || '').trim())));
        },
        // data-file-key 就是 fs_id
        _shareChecked() {
            let rows = document.querySelectorAll('.JS-list-view-item[data-file-key]');
            if (!rows.length) return null;
            let picked = [];
            rows.forEach(r => {
                if (!r.classList.contains('JS-item-active') && !r.querySelector('.wp-checkbox--checked')) return;
                let id = r.getAttribute('data-file-key') || '';
                if (id) picked.push({ fs_id: id });
            });
            return picked;
        },
        // 读不到返回 null，跟「确实没勾」区分开
        _shareSelected() {
            let scope = (typeof unsafeWindow !== 'undefined' && unsafeWindow) ? unsafeWindow : window;
            let ctx = null;
            try { ctx = require('system-core:context/context.js'); } catch (e) { }
            if (!ctx) { try { ctx = scope.require('system-core:context/context.js'); } catch (e) { } }
            let got = null;
            try { got = ctx && ctx.instanceForSystem.list.getSelected(); } catch (e) { }
            if (Array.isArray(got) && got.length) return got;
            let dom = this._shareChecked();
            return dom === null ? (Array.isArray(got) ? got : null) : dom;
        },
        async _shareLink() {
            if (this._shareChain) return this._shareChain;
            this._shareChain = this._shareFetch();
            try { return await this._shareChain; } finally { this._shareChain = null; }
        },
        async _shareFetch() {
            let ref = this._shareInfo();
            const fail = (msg) => { Swal.close(); base.renderErrorPanel(msg, this); };
            if (!ref.surl) return fail('读不到分享标识，请刷新页面后重试');
            if (!ref.hasDump) return fail('读不到页面信息（locals 未就绪），请刷新页面后重试');
            // 只有明确未登录才拦，字段缺失交给接口报错
            if (ref.pick('loginstate') === '0') return fail('分享页下载需要登录百度网盘，请登录后重试');
            if (!ref.pick('shareid') || !ref.pick('share_uk')) return fail('页面里的分享标识不完整，请刷新页面后重试');
            let read = this._shareSelected();
            let meta = {};
            ref.list.forEach(v => { if (v && v.fs_id !== undefined && v.fs_id !== null) meta[String(v.fs_id)] = v; });
            let picked = (read || []).map(v => Object.assign({}, v, meta[String(v.fs_id)] || {}));
            // 认错了只会多提示，不会多下文件
            let hasPicker = !!(document.querySelector('.JS-list-view-item .wp-checkbox, .JS-list-view-item input[type=checkbox]'));
            // 单文件页没勾选框，直接用清单里那一个
            if (!picked.length && ref.list.length === 1 && !hasPicker) picked = ref.list;
            // 多文件又没勾选框：不猜，明说
            if (!picked.length && !hasPicker && ref.list.length > 1) return fail('页面上没有勾选框，请刷新页面或换用支持的分享版式');
            if (!picked.length && read === null) return fail('读不到页面的勾选状态，请刷新页面后重试');
            if (!picked.length) { Swal.close(); base.renderDownloadPanel([], this); return; }
            // 类型只能来自页面清单，填不到就别猜
            if (picked.some(v => v && (v.isdir == null || v.isdir === ''))) return fail('读不到文件类型，请刷新页面后重试');
            let files = picked.filter(v => v && +v.isdir !== 1);
            if (!files.length) { Swal.close(); message.error('提示：分享页只支持文件，请勾选文件后再试！'); return; }
            if (files.length > 20) return fail('一次最多取 20 个文件（当前 ' + files.length + ' 个），请减少勾选后重试');
            let bdstoken = ref.pick('bdstoken');
            let tplUrl = panInfo.pcs[2] + '&surl=' + encodeURIComponent(ref.surl) + (bdstoken ? '&bdstoken=' + encodeURIComponent(bdstoken) : '');
            let tpl = await this._shareRequest(tplUrl, 'GET');
            let sign = (tpl && tpl.data) || {};
            if (!sign.sign || !sign.timestamp) {
                let why = tpl && tpl.errno ? '（errno ' + tpl.errno + (tpl.errmsg ? '：' + tpl.errmsg : '') + '）' : '';
                return fail('取不到分享签名' + why + '，请刷新页面后重试');
            }
            let dlUrl = panInfo.pcs[1] + '&sign=' + encodeURIComponent(sign.sign) + '&timestamp=' + encodeURIComponent(sign.timestamp);
            let uk = encodeURIComponent(ref.pick('share_uk'));
            let primaryid = encodeURIComponent(ref.pick('shareid'));
            let rows = [];
            for (let i = 0; i < files.length; i++) {
                let it = files[i];
                if (files.length > 1) base.tipLoading('正在获取下载链接 ' + (i + 1) + '/' + files.length + '…');
                let fid = it.fs_id || it.file_id || it.id || '';
                let row = { server_filename: it.server_filename || it.filename || '', size: it.size, isdir: it.isdir };
                if (!fid) {
                    row.dlink = '读不到文件标识，请刷新页面后重试';
                    rows.push(row);
                    continue;
                }
                try {
                    let form = 'encrypt=0&product=share'
                        + (ref.sekey ? '&extra=' + encodeURIComponent(JSON.stringify({ sekey: ref.sekey })) : '')
                        + '&timestamp=' + encodeURIComponent(sign.timestamp)
                        + '&uk=' + uk
                        + '&primaryid=' + primaryid
                        + '&fid_list=' + encodeURIComponent(JSON.stringify([String(fid)]));
                    let res = await this._shareRequest(dlUrl, 'POST', form);
                    if (res && res.errno === 0 && Array.isArray(res.list) && res.list.length) {
                        row = Object.assign(row, res.list[0]);
                    } else if (res && res.errno === 0 && typeof res.list === 'string') {
                        row.dlink = '该文件超过百度可获取限制，需保存到网盘后下载';
                    } else if (res && res.errno === 0) {
                        row.dlink = '接口没有返回下载地址，请稍后重试';
                    } else if (res && res.errno === -20) {
                        row.dlink = '百度要求人机验证，请先在该页面点一次「下载」输完验证码，再回来重试';
                    } else if (res && (res.errno === 9019 || /needverify/.test(String(res.errmsg)))) {
                        row.dlink = '百度要求身份验证，请刷新页面后重试';
                    } else {
                        row.dlink = '获取下载地址失败：' + String((res && (res.errmsg || res.show_msg || res.errno)) || '').slice(0, 60);
                    }
                } catch (e) {
                    row.dlink = '获取下载地址失败：' + ((e && e.message) || '未知错误');
                }
                rows.push(row);
                if (i + 1 < files.length) await base.sleep(1000);
            }
            base.renderDownloadPanel(this.normalizeList(rows, true), this);
        },
        normalizeList(list, noAuth) {
            // 分享直链不需要授权，别贴个人令牌
            let token = noAuth ? '' : base.getValue('baidu_access_token');
            return list.map(v => {
                let dlink = '';
                if (v.dlink) {
                    dlink = /^https?:\/\//.test(v.dlink) && token
                        ? v.dlink + '&access_token=' + token
                        : v.dlink;
                }
                return {
                    filename: v.server_filename || v.filename || '',
                    sizeStr: base.sizeFormat(v.size),
                    rawSize: v.size || 0,
                    dlink: dlink,
                    ext: base.getExtension(v.server_filename || v.filename),
                    isFolder: +v.isdir === 1,
                    raw: v,
                };
            });
        },
        async sendLinkToRPC(filename, link) {
            let rpc = base._rpcConfig();
            if (!rpc) return 'fail';
            let BDUSS = this.getBDUSS();
            let url = rpc.url;
            let rpcData = {
                id: new Date().getTime(),
                jsonrpc: '2.0',
                method: 'aria2.addUri',
                params: [`token:${rpc.token}`, [link], {
                    dir: rpc.dir,
                    out: base.safeRpcFilename(filename),
                    header: [`User-Agent: ${panInfo.ua}`, ...(BDUSS ? [`Cookie: BDUSS=${BDUSS}`] : [])],
                }]
            };
            try {
                let res = await base.post(url, rpcData, {"User-Agent": panInfo.ua}, '');
                if (res.result) return 'success';
                base.panelNotice('Aria2 拒绝请求：' + ((res.error && res.error.message) || '未知错误（请检查 RPC 密钥与保存路径）'));
                return 'fail';
            } catch (e) {
                base.panelNotice('无法连接 RPC（' + rpc.domain + ':' + rpc.port + '）' + (e && e.message ? '：' + e.message : '') + '，请确认下载器已启动且 RPC 服务已开启');
                return 'fail';
            }
        },
        getSelectedList() {
            try {
                return require('system-core:context/context.js').instanceForSystem.list.getSelected();
            } catch (e) {
                let panInfo = document.querySelector('.wp-s-core-pan');
                return panInfo && panInfo.__vue__ ? panInfo.__vue__.selectedList : [];
            }
        },
        detectPage() {
            let path = location.pathname, hash = location.hash || '';
            if (/^\/disk\/home/.test(path)) return 'home';
            if (/^\/disk\/main/.test(path)) {
                if (/^#\/recyclebin/.test(hash)) return '';
                return 'main';
            }
            if (/^\/s\//.test(path)) return 'share';
            return '';
        },
        async initFerryLink() {
            base.initDefaultConfig();
            base.addFerryLinkStyle();
            pageNum = this.detectPage();
            panInfo = LOCAL_CONFIG.baidu;
            Object.freeze && Object.freeze(panInfo);
            this.addButton();
            base.createTip();
            base.registerMenuCommand();
            if (pageNum !== 'share') this.preflightAccount();
        },
        async initAuthorize() {
            const startedAt = Date.now(), MAX_POLL_MS = 5 * 60 * 1000;
            let authPollTimer = setInterval(() => {
                // [稳定性] 兜底：OAuth 流程中断时不要永远 200ms 轮询
                if (Date.now() - startedAt > MAX_POLL_MS) {
                    clearInterval(authPollTimer);
                    console.warn('百度授权轮询超时，已停止');
                    return;
                }
                if (/openapi.baidu.com\/oauth\/2.0\/authorize/.test(location.href)) {
                    let confirmButton =
                        document.querySelector('#auth-allow') ||
                        document.querySelector('#accept') ||
                        document.querySelector('input[type="submit"]') ||
                        Array.from(document.querySelectorAll('button, a, input[type="button"]')).find(el => {
                            let t = (el.textContent || el.value || '').trim();
                            return /^(授权|允许|同意|确认|Allow|Authorize)/i.test(t);
                        });
                    if (confirmButton) {
                        confirmButton.click();
                        return;
                    }
                }
                if (/openapi.baidu.com\/oauth\/2.0\/login_success/.test(location.href)) {
                    if (location.href.includes('access_token')) {
                        let token = location.href.match(/access_token=([^&#]+)/)?.[1];
                        base.setValue('baidu_access_token', token);
                        this.getCurrentUK().then((uk) => {
                            if (uk) base.setValue('baidu_access_token_uk', uk);
                        });
                        clearInterval(authPollTimer);
                        window.close();
                    }
                }
            }, 200)
        }
    };
    let ali = {
        site: 'ali',
        convertLinkToAria(link, filename, ua) {
                    filename = base.fixFilename(filename);
                    // 阿里 CDN 没浏览器 UA 就 403，命令也得带头
                    return encodeURIComponent(`aria2c "${link}" --out "${filename}" -x 16 -s 16 -k 1M --header "Referer: ${location.origin}/" --header "User-Agent: ${ua || navigator.userAgent}"`);
                },
        convertLinkToBC(link, filename, ua) {
            return base._bc(link, filename, {
                'Referer': `${location.origin}/`,
                'User-Agent': ua || navigator.userAgent,
            });
        },
        convertLinkToCurl(link, filename, ua) {
            let terminal = base.settingChoice('setting_terminal_type');
            filename = base.fixFilename(filename);
            // -e 带 Referer：域名会迁移，写死 aliyundrive.com 在 alipan.com 上会 403
            return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}" -e "${location.origin}/" -A "${ua || navigator.userAgent}"`);
        },
        addPageListener() {
            // 重复挂载（SPA 路由切换后重挂按钮）时别再叠一层监听，否则一次点击会连发多次请求
            if (this._pageClickBound) return;
            this._pageClickBound = true;
            doc.on('click', '.fl-button', async (e) => {
                if ($(e.target).closest('.g-button-menu, .menu').length) return;
                Swal.showLoading();
                try { await this.getPCSLink(); } catch (err) { Swal.close(); base.renderErrorPanel('获取下载链接失败：' + (err && err.message || '未知错误'), this); } finally { base.closeIfLoading(); }
            });
        },
        async getRealLink(d, f) {
                    try {
                        let tk = base.getStorage('token');
                        tk = await base.refreshAliToken(tk);
                        if (!tk || !tk.access_token) {
                            Swal.close();
                            return message.error('提示：Token过期或缺失，请刷新网页后重试！');
                        }
                        let authorization = `${tk.token_type} ${tk.access_token}`;
                        let res = await base.post(panInfo.pcs[1], {
                            drive_id: d,
                            file_id: f
                        }, {
                            authorization,
                            "content-type": "application/json;charset=utf-8",
                            "referer": "https://www.aliyundrive.com/",
                            "x-canary": "client=windows,app=adrive,version=v6.0.0"
                        });
                        if (res.code === 'AccessTokenInvalid') {
                            Swal.close();
                            return message.error('提示：Token过期，请刷新网页后重试！');
                        }
                        if (res.url) {
                            return res.url;
                        }
                        return '';
                    } catch (e) { return ''; }
                },
        addButton() {
            let $button = $(`<div class="ali-button fl-button"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M853.333 938.667H170.667a85.333 85.333 0 0 1-85.334-85.334v-384A85.333 85.333 0 0 1 170.667 384H288a32 32 0 0 1 0 64H170.667a21.333 21.333 0 0 0-21.334 21.333v384a21.333 21.333 0 0 0 21.334 21.334h682.666a21.333 21.333 0 0 0 21.334-21.334v-384A21.333 21.333 0 0 0 853.333 448H736a32 32 0 0 1 0-64h117.333a85.333 85.333 0 0 1 85.334 85.333v384a85.333 85.333 0 0 1-85.334 85.334z" fill="#fff"/><path d="M715.03 543.552a32.81 32.81 0 0 0-46.251 0L554.005 657.813v-540.48a32 32 0 0 0-64 0v539.734L375.893 543.488a32.79 32.79 0 0 0-46.229 0 32.427 32.427 0 0 0 0 46.037l169.557 168.811a32.81 32.81 0 0 0 46.251 0l169.557-168.81a32.47 32.47 0 0 0 0-45.974z" fill="#FF9C00"/></svg><span>下载助手</span></div>`);
            const fallbacks = [
                panInfo.btn.home,
                '[class*="header--"] [class*="actions--"]',
                '[class*="file-list-header"] [class*="action"]',
                'header [class*="upload"]',
            ];
            const tryInject = () => {
                for (const sel of fallbacks) {
                    let $el = $(sel);
                    if ($el.length) {
                        $el.append($button);
                        return true;
                    }
                }
                return false;
            };
            base.mountWithRetry(() => { pageNum = this.detectPage(); return tryInject(); }, () => this.detectPage() === 'home');
            this.addPageListener();
        },
        async getPCSLink() {
                    selectedFiles = this.getSelectedList();
                    if (selectedFiles.length === 0) {
                        Swal.close(); return base.renderDownloadPanel([], this);
                    }
                    if (this.isOnlyFolder()) {
                        Swal.close(); return message.error('提示：请打开文件夹后勾选文件！');
                    }
                let tk = base.getStorage('token');
                tk = await base.refreshAliToken(tk);
                if (!tk || !tk.access_token) {
                    Swal.close(); return message.error('提示：请先登录阿里云盘后再下载！');
                }
                try {
                    let authorization = `${tk.token_type} ${tk.access_token}`;
                    const dlResult = await base.mapLimit(selectedFiles, 5, item => base.post(panInfo.pcs[1], {
                        drive_id: item.driveId,
                        file_id: item.fileId,
                    }, {
                        authorization,
                        "content-type": "application/json;charset=utf-8",
                        "referer": "https://www.aliyundrive.com/",
                        "x-canary": "client=windows,app=adrive,version=v6.0.0"
                    }));
                    dlResult.forEach((res, i) => {
                        if (res && res.url) selectedFiles[i].downloadUrl = res.url;
                    });
                } catch (e) {
                    Swal.close();
                    const m = (e && e.message) || '';
                    if (/AccessTokenInvalid|token/i.test(m)) {
                        return message.error('提示：Token已过期，请刷新网页后重试！');
                    }
                    return message.error('提示：获取下载链接失败（' + m + '），请刷新重试！');
                }
                if (selectedFiles.length > 20) {
                    Swal.close();
                    return message.error('提示：单次最多可勾选 20 个文件！');
                }
                let noUrlSelectList = selectedFiles.filter(v => !Boolean(v.downloadUrl))
                                const res = await base.mapLimit(noUrlSelectList, 5, (item) => this.getRealLink(item.driveId, item.fileId));
                                res.forEach((val, index) => {
                                    if (val && typeof val === 'string' && /^https?:/.test(val)) noUrlSelectList[index].downloadUrl = val;
                                });
                                let files = this.normalizeList(selectedFiles);
            base.renderDownloadPanel(files, this);
                                                        },
                                        normalizeList(list) {
            return list.map(v => ({
                filename: v.name || '',
                sizeStr: base.sizeFormat(v.size),
                rawSize: v.size || 0,
                dlink: v.downloadUrl || '',
                isFolder: v.type === 'folder',
                raw: v,
            }));
        },
        async sendLinkToRPC(filename, link) {
            let rpc = base._rpcConfig();
            if (!rpc) return 'fail';
            let url = rpc.url;
                        const UA = navigator.userAgent;
                        let rpcData = {
                            id: new Date().getTime(),
                            jsonrpc: '2.0',
                            method: 'aria2.addUri',
                            params: [`token:${rpc.token}`, [link], {
                                dir: rpc.dir,
                                out: base.safeRpcFilename(filename),
                                header: [`Referer: ${location.origin}/`, `Origin: ${location.origin}`, `User-Agent: ${UA}`]
                            }]
                        };
                        try {
                            let res = await base.post(url, rpcData, {}, '');
                if (res.result) return 'success';
                base.panelNotice('Aria2 拒绝请求：' + ((res.error && res.error.message) || '未知错误（请检查 RPC 密钥与保存路径）'));
                return 'fail';
            } catch (e) {
                base.panelNotice('无法连接 RPC（' + rpc.domain + ':' + rpc.port + '）' + (e && e.message ? '：' + e.message : '') + '，请确认下载器已启动且 RPC 服务已开启');
                return 'fail';
            }
        },
        getSelectedList() {
            try {
                let selectedList = [];
                let tableDom = document.querySelector(panInfo.dom.list);
                if (tableDom) {
                    let reactObj = base.findReact(tableDom, 1);
                    if (reactObj) {
                        let props = reactObj.pendingProps;
                        if (props) {
                            let fileList = props.dataSource || [];
                            let selectedKeys = (props.selectedKeys != null) ? (Array.isArray(props.selectedKeys) ? props.selectedKeys : String(props.selectedKeys).split(',')) : [];
                            fileList.forEach((val) => {
                                if (selectedKeys.includes(val.fileId)) {
                                    selectedList.push(Object.assign({}, val));
                                }
                            });
                        }
                    }
                    return selectedList;
                }

                let gridDom = document.querySelector(panInfo.dom.grid);
                if (!gridDom) return [];
                let gridReact = base.findReact(gridDom, 0);
                if (!gridReact) return [];
                let dataSource = (gridReact.pendingProps || {}).dataSource || [];
                if (!dataSource.length) return [];
                document.querySelectorAll('[class*="node-card-container"]').forEach((card) => {
                    let cb = card.querySelector('input[type=checkbox]');
                    if (!cb || !cb.checked) return;
                    let title = card.getAttribute('title') || '';
                    let hit = dataSource.find((v) => v.name === title);
                    if (hit) selectedList.push(Object.assign({}, hit));
                });
                return selectedList;
            } catch (e) {
                return [];
            }
        },

        detectPage() {
            let path = location.pathname;
            if (/^\/(drive)/.test(path) && !/recycle-bin/.test(path)) return 'home';
            return '';
        },
        isOnlyFolder() {
            for (let i = 0; i < selectedFiles.length; i++) {
                if (selectedFiles[i].type === 'file') return false;
            }
            return true;
        },
        async initFerryLink() {
            base.initDefaultConfig();
            base.addFerryLinkStyle();
            pageNum = this.detectPage();
            panInfo = LOCAL_CONFIG.ali;
            Object.freeze && Object.freeze(panInfo);
            this.addButton();
            base.createTip();
            base.registerMenuCommand();
        }
    };
    let tianyi = {
        site: 'tianyi',
        convertLinkToAria(link, filename, ua) {
            filename = base.fixFilename(filename);
            return encodeURIComponent(`aria2c "${link}" --out "${filename}" -x 16 -s 16 -k 1M`);
        },
        convertLinkToBC(link, filename, ua) {
            let bc = `AA/${encodeURIComponent(filename)}/?url=${encodeURIComponent(link)}ZZ`;
            return encodeURIComponent(`bc://http/${base.e(bc)}`);
        },
        convertLinkToCurl(link, filename, ua) {
            let terminal = base.settingChoice('setting_terminal_type');
            filename = base.fixFilename(filename);
            return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}"`);
        },
        addPageListener() {
            // 重复挂载（SPA 路由切换后重挂按钮）时别再叠一层监听，否则一次点击会连发多次请求
            if (this._pageClickBound) return;
            this._pageClickBound = true;
            doc.on('click', '.fl-button', async (e) => {
                if ($(e.target).closest('.g-button-menu, .menu').length) return;
                Swal.showLoading();
                try { await this.getPCSLink(); } catch (err) { Swal.close(); base.renderErrorPanel('获取下载链接失败：' + (err && err.message || '未知错误'), this); } finally { base.closeIfLoading(); }
            });
        },
        _insertBeforeUpload(container, $button) {
            if (container.firstChild) {
                container.insertBefore($button[0], container.firstChild);
            } else {
                container.appendChild($button[0]);
            }
        },
        addButton() {
            let $button = $(`<div class="tianyi-button fl-button">下载助手</div>`);
            base.mountWithRetry(() => {
                pageNum = this.detectPage();
                let container = document.querySelector(panInfo.btn.home);
                if (!container) return false;
                this._insertBeforeUpload(container, $button);
                return true;
            }, () => this.detectPage() === 'home');
            this.addPageListener();
        },
        async getToken() {
            let res = await base.getFinalUrl(panInfo.pcs[1], {});
            let accessToken = res.match(/accessToken=(\w+)/)?.[1];
            accessToken && base.setStorage('accessToken', accessToken);
            return accessToken;
        },
        async getFileUrlByOnce(item, index, token) {
            try {
                if (item.downloadUrl) return {
                    index,
                    downloadUrl: item.downloadUrl
                };
                let time = Date.now(),
                    fileId = item.fileId,
                    o = "AccessToken=" + token + "&Timestamp=" + time + "&fileId=" + fileId,
                    url = panInfo.pcs[2] + '?fileId=' + fileId;
                let sign = md5(o).toString();
                let res = await base.get(url, {
                    "accept": "application/json;charset=UTF-8",
                    "sign-type": 1,
                    "accesstoken": token,
                    "timestamp": time,
                    "signature": sign
                });
                if (res.res_code === 0) {
                    return {
                        index,
                        downloadUrl: res.fileDownloadUrl
                    };
                } else if (res.errorCode === 'InvalidSessionKey') {
                    return {
                        index,
                        downloadUrl: '提示：请先登录网盘！'
                    };
                    return {
                        index,
                        downloadUrl: '提示：请先[转存]文件，前往[我的网盘]中下载！'
                    };
                } else {
                    return {
                        index,
                        downloadUrl: '获取下载地址失败，请刷新重试！'
                    };
                }
            } catch (e) {
                return {
                    index,
                    downloadUrl: '获取下载地址失败，请刷新重试！'
                };
            }
        },
        async getPCSLink() {
                    selectedFiles = this.getSelectedList();
                    if (selectedFiles.length === 0) {
                        Swal.close(); return base.renderDownloadPanel([], this);
                    }
                    if (this.isOnlyFolder()) {
                        Swal.close(); return message.error('提示：请打开文件夹后勾选文件！');
                    }
            let token = base.getStorage('accessToken') || await this.getToken();
            if (!token) {
                Swal.close(); return message.error('提示：请先登录网盘！');
            }
            const res = await base.mapLimit(selectedFiles, 5, (item, index) => this.getFileUrlByOnce(item, index, token));
            res.forEach(val => {
                if (val) selectedFiles[val.index].downloadUrl = val.downloadUrl;
            });
            let files = this.normalizeList(selectedFiles);
            base.renderDownloadPanel(files, this);
        },
        normalizeList(list) {
            return list.map(v => ({
                filename: v.fileName || '',
                sizeStr: base.sizeFormat(v.size),
                rawSize: v.size || 0,
                dlink: v.downloadUrl && /^https?:\/\//.test(v.downloadUrl) ? v.downloadUrl : '',
                isFolder: !!v.isFolder,
                raw: v,
            }));
        },
        async sendLinkToRPC(filename, link) {
            let rpc = base._rpcConfig();
            if (!rpc) return 'fail';
            let url = rpc.url;
            let rpcData = {
                id: new Date().getTime(),
                jsonrpc: '2.0',
                method: 'aria2.addUri',
                params: [`token:${rpc.token}`, [link], {
                    dir: rpc.dir,
                    out: base.safeRpcFilename(filename),
                    header: []
                }]
            };
            try {
                let res = await base.post(url, rpcData, {}, '');
                if (res.result) return 'success';
                base.panelNotice('Aria2 拒绝请求：' + ((res.error && res.error.message) || '未知错误（请检查 RPC 密钥与保存路径）'));
                return 'fail';
            } catch (e) {
                base.panelNotice('无法连接 RPC（' + rpc.domain + ':' + rpc.port + '）' + (e && e.message ? '：' + e.message : '') + '，请确认下载器已启动且 RPC 服务已开启');
                return 'fail';
            }
        },
        getSelectedList() {
            try {
                return document.querySelector(".c-file-list").__vue__.selectedList;
            } catch (e) {
                let detail = document.querySelector(".info-detail");
                return detail && detail.__vue__ ? [detail.__vue__.fileDetail] : [];
            }
        },
        detectPage() {
            let path = location.pathname;
            if (/^\/web\/main/.test(path) && !/recycle/i.test(path)) return 'home';
            return '';
        },
        isOnlyFolder() {
            for (let i = 0; i < selectedFiles.length; i++) {
                if (!selectedFiles[i].isFolder) return false;
            }
            return true;
        },
        async initFerryLink() {
            base.initDefaultConfig();
            base.addFerryLinkStyle();
            pageNum = this.detectPage();
            panInfo = LOCAL_CONFIG.tianyi;
            Object.freeze && Object.freeze(panInfo);
            this.addButton();
            this.getToken();
            base.createTip();
            base.registerMenuCommand();
        }
    };
    let xunlei = {
        site: 'xunlei',
        _homeSelectors: [
            '.FileMenu__container--yB0l1',
            '.FileMenu__menus--HFKwO',
            '.file-menu',
            '.source-list-menu',
        ],
        _getAuthCookie() {
            let keys = ['userid', 'deviceid', 'XLA_CI', 'xl_fp_rt'];
            let parts = [];
            for (let k of keys) {
                let v = base.getCookie(k);
                if (v) parts.push(`${k}=${v}`);
            }
            return parts.join('; ').replace(/[\\"`$]/g, '');
        },
        convertLinkToAria(link, filename, ua) {
            filename = base.fixFilename(filename);
            let cookie = this._getAuthCookie();
            let cookieStr = cookie ? ` --header "Cookie: ${cookie}"` : '';
            let uaStr = ` --header "User-Agent: ${navigator.userAgent}"`;
            // 迅雷多 Range 会断开，aria2 只能单线程
            // 迅雷 CDN 认 cookie + UA，缺一个就断连
            return encodeURIComponent(`aria2c "${link}" --out "${filename}" -x 1 -s 1${cookieStr}${uaStr}`);
        },
        convertLinkToBC(link, filename, ua) {
            return base._bc(link, filename, {
                'Cookie': this._getAuthCookie(),
                'User-Agent': ua || navigator.userAgent,
            });
        },
        convertLinkToCurl(link, filename, ua) {
            let terminal = base.settingChoice('setting_terminal_type');
            filename = base.fixFilename(filename);
            let cookie = this._getAuthCookie();
            let cookieStr = cookie ? ` -b "${cookie}"` : '';
            return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}"${cookieStr} -H "User-Agent: ${navigator.userAgent}"`);
        },
        addPageListener() {
            // 重复挂载（SPA 路由切换后重挂按钮）时别再叠一层监听，否则一次点击会连发多次请求
            if (this._pageClickBound) return;
            this._pageClickBound = true;
            doc.on('click', '.fl-button', async (e) => {
                if ($(e.target).closest('.g-button-menu, .menu').length) return;
                Swal.showLoading();
                try { await this.getPCSLink(); } catch (err) { Swal.close(); base.renderErrorPanel('获取下载链接失败：' + (err && err.message || '未知错误'), this); } finally { base.closeIfLoading(); }
            });
        },
        _findHomeContainer() {
            if (panInfo.btn && panInfo.btn.home) {
                let el = document.querySelector(panInfo.btn.home);
                if (el) return el;
            }
            for (let sel of this._homeSelectors) {
                let el = document.querySelector(sel);
                if (el) return el;
            }
            return null;
        },
        addButton() {
            if (!pageNum) return;
            let $toolWrap;
            let $button = $(`<div class="xunlei-button fl-button"><i class="xlpfont xlp-download"></i><span style="font-size: 13px; margin-left: 0; line-height: 13px;">下载助手</span></div>`);
            if (pageNum === 'home') {
                this._smartListen(() => {
                    let container = this._findHomeContainer();
                    if (container && $('.fl-button').length === 0) {
                        $(container).prepend($button);
                    }
                });
            }
            this.addPageListener();
        },
        _smartListen(callback) {
            const checkInterval = 500;
            function check() {
                setTimeout(check, checkInterval);
                callback();
            }
            check();
        },
        getToken() {
            let credentials = {}, captcha = {};
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                if (/^credentials_/.test(key)) {
                    credentials = base.getStorage(key);
                }
                if (/^captcha_[\w]{16}/.test(key)) {
                    captcha = base.getStorage(key);
                }
            }
            let deviceid = '';
            try {
                let lsDevice = base.getStorage('deviceid');
                if (lsDevice) {
                    if (typeof lsDevice === 'string' && lsDevice.includes(',')) {
                        let match = /(\w{32})/.exec(lsDevice.split(','));
                        if (match) deviceid = match[1];
                    } else if (typeof lsDevice === 'string') {
                        let match = /(\w{32})/.exec(lsDevice);
                        if (match) deviceid = match[1];
                    }
                }
            } catch (e) {}
            if (!deviceid) {
                let cookieDevice = base.getCookie('peerid') || base.getCookie('deviceid');
                if (cookieDevice) {
                    if (cookieDevice.includes('.') && cookieDevice.length > 32) {
                        let parts = cookieDevice.split('.');
                        if (parts[1] && parts[1].length >= 32) {
                            deviceid = parts[1].substring(0, 32);
                        }
                    }
                    if (!deviceid) {
                        let match = /([0-9a-f]{32})/i.exec(cookieDevice);
                        if (match) deviceid = match[1];
                    }
                }
            }
            if (!deviceid) {
                deviceid = Array.from({length: 32}, () =>
                    Math.floor(Math.random() * 16).toString(16)
                ).join('');
            }
            let token = {
                credentials,
                captcha,
                deviceid
            };
            return token;
        },
        async getFileUrlByOnce(item, index, token) {
            try {
                if (item.downloadUrl) return {
                    index,
                    downloadUrl: item.downloadUrl,
                    mediaLink: item.mediaLink || ''
                };
                let headers = {
                    'content-type': "application/json",
                    'x-device-id': token.deviceid,
                };
                if (token.credentials && token.credentials.access_token) {
                    let tokenType = token.credentials.token_type || 'Bearer';
                    headers['Authorization'] = `${tokenType} ${token.credentials.access_token}`;
                }
                if (token.captcha && token.captcha.token) {
                    headers['x-captcha-token'] = token.captcha.token;
                }
                let res = await base.get(panInfo.pcs[0] + item.id, headers);
                if (res.web_content_link) {
                    let mediaLink = '';
                    if (Array.isArray(res.medias) && res.medias.length > 0) {
                        let media = res.medias.find(m => m && m.link && m.link.url && m.media_name !== '原始画质') || res.medias[0];
                        if (media && media.link && media.link.url) {
                            mediaLink = media.link.url;
                        }
                    }
                    return {
                        index,
                        downloadUrl: res.web_content_link,
                        mediaLink
                    };
                } else if (res.reason) {
                    return {
                        index,
                        downloadUrl: '获取失败：' + (res.reason || res.message || '未知错误')
                    };
                } else {
                    return {
                        index,
                        downloadUrl: '获取下载地址失败，请刷新重试！'
                    };
                }
            } catch (e) {
                return {
                    index,
                    downloadUrl: '获取下载地址失败，请刷新重试！'
                };
            }
        },
        async getPCSLink() {
                    selectedFiles = this.getSelectedList();
                    if (selectedFiles.length === 0) {
                        Swal.close(); return base.renderDownloadPanel([], this);
                    }
                    if (this.isOnlyFolder()) {
                        Swal.close(); return message.error('提示：请打开文件夹后勾选文件！');
                    }
            if (pageNum === 'home') {
                let token = this.getToken();
                if (!token.credentials || !token.credentials.access_token) {
                    return message.error('提示：登录凭证获取失败，请先登录网盘后刷新页面！');
                }
                const res = await base.mapLimit(selectedFiles, 5, (item, index) => this.getFileUrlByOnce(item, index, token));
                res.forEach(val => {
                    if (!val) return;
                    selectedFiles[val.index].downloadUrl = val.downloadUrl;
                    if (val.mediaLink) selectedFiles[val.index].mediaLink = val.mediaLink;
                });
            } else {
                let dialog = await Swal.fire({
                    toast: true,
                    icon: 'info',
                    title: `提示：请将文件<span class="tag-danger">[保存到网盘]</span>后前往<span class="tag-danger">[我的网盘]</span>中下载！`,
                    showConfirmButton: true,
                    confirmButtonText: '点击保存',
                    position: 'top',
                });
                if (dialog.isConfirmed) {
                    let save = document.querySelector('.saveToCloud');
                    save && save.click();
                    return;
                }
            }
            let files = this.normalizeList(selectedFiles);
            base.renderDownloadPanel(files, this);
        },
        normalizeList(list) {
            return list.map(v => ({
                filename: v.name || '',
                sizeStr: base.sizeFormat(+v.size),
                rawSize: +v.size || 0,
                dlink: v.downloadUrl && /^https?:\/\//.test(v.downloadUrl) ? v.downloadUrl : '',
                mediaLink: v.mediaLink && /^https?:\/\//.test(v.mediaLink) ? v.mediaLink : '',
                isFolder: v.kind === 'drive#folder',
                raw: v,
            }));
        },
        async sendLinkToRPC(filename, link) {
            let rpc = base._rpcConfig();
            if (!rpc) return 'fail';
            let url = rpc.url;
            let authCookie = this._getAuthCookie ? this._getAuthCookie() : '';
            let rpcHeader = authCookie
                ? [`Cookie: ${authCookie}`, `User-Agent: ${navigator.userAgent}`]
                : [];
            let rpcData = {
                id: new Date().getTime(),
                jsonrpc: '2.0',
                method: 'aria2.addUri',
                params: [`token:${rpc.token}`, [link], {
                    dir: rpc.dir,
                    out: base.safeRpcFilename(filename),
                    header: rpcHeader
                }]
            };
            try {
                let res = await base.post(url, rpcData, {}, '');
                if (res.result) return 'success';
                base.panelNotice('Aria2 拒绝请求：' + ((res.error && res.error.message) || '未知错误（请检查 RPC 密钥与保存路径）'));
                return 'fail';
            } catch (e) {
                base.panelNotice('无法连接 RPC（' + rpc.domain + ':' + rpc.port + '）' + (e && e.message ? '：' + e.message : '') + '，请确认下载器已启动且 RPC 服务已开启');
                return 'fail';
            }
        },
        getSelectedList() {
            try {
                let doms = document.querySelectorAll('.SourceListItem__item--XxpOC');
                if (doms.length > 0) {
                    let selectedList = [];
                    for (let dom of doms) {
                        let domVue = dom.__vue__;
                        if (domVue && domVue.info && domVue.selected) {
                            if (domVue.selected.includes(domVue.info.id)) {
                                selectedList.push(domVue.info);
                            }
                        }
                    }
                    if (selectedList.length > 0) return selectedList;
                }
                let allItems = document.querySelectorAll('[class*="SourceListItem__item"]');
                if (allItems.length > 0) {
                    let selectedList = [];
                    for (let dom of allItems) {
                        let domVue = dom.__vue__;
                        if (domVue) {
                            let info = domVue.info || domVue.item || (domVue.$props && domVue.$props.info);
                            let selected = domVue.selected || domVue.fileSelected || (domVue.$props && domVue.$props.selected);
                            if (info && selected && selected.includes(info.id)) {
                                selectedList.push(info);
                            }
                        }
                    }
                    if (selectedList.length > 0) return selectedList;
                }
                let app = document.querySelector('#__nuxt') || document.querySelector('#app');
                if (app && app.__vue__) {
                    let rootVue = app.__vue__;
                    let found = this._findSelectedInVueTree(rootVue, 0);
                    if (found && found.length > 0) return found;
                }
                return [];
            } catch (e) {
                return [];
            }
        },
        _findSelectedInVueTree(vm, depth) {
            if (depth > 8 || !vm) return null;
            try {
                if (vm.fileSelected && vm.listInfo && Array.isArray(vm.fileSelected) && vm.fileSelected.length > 0) {
                    return vm.fileSelected.map(id => vm.listInfo[id]).filter(Boolean);
                }
                if (vm.$children) {
                    for (let child of vm.$children) {
                        let result = this._findSelectedInVueTree(child, depth + 1);
                        if (result && result.length > 0) return result;
                    }
                }
            } catch (e) {}
            return null;
        },
        detectPage() {
            let path = location.pathname;
            if (/^\/$/.test(path)) return 'home';
            return '';
        },
        isOnlyFolder() {
            for (let i = 0; i < selectedFiles.length; i++) {
                if (selectedFiles[i].kind === 'drive#file') return false;
            }
            return true;
        },
        async initFerryLink() {
            base.initDefaultConfig();
            base.addFerryLinkStyle();
            pageNum = this.detectPage();
            panInfo = LOCAL_CONFIG.xunlei;
            Object.freeze && Object.freeze(panInfo);
            this.addButton();
            base.createTip();
            base.registerMenuCommand();
        }
    };
    let quark = {
        site: 'quark',
        convertLinkToAria(link, filename, ua) {
            filename = base.fixFilename(filename);
            return encodeURIComponent(`aria2c "${link}" --out "${filename}" --header "User-Agent: ${panInfo.ua}" --header "Cookie: ${base.getDownloadCookie().replace(/[\\"`$]/g, '')}"`);
        },
        convertLinkToBC(link, filename, ua) {
            // 只带 __pus/__puus 会 412，要给完整 cookie
            return base._bc(link, filename, {
                'Referer': `${location.origin}/`,
                'User-Agent': ua || navigator.userAgent,
                'Cookie': base.getDownloadCookie(),
            });
        },
        convertLinkToCurl(link, filename, ua) {
            let terminal = base.settingChoice('setting_terminal_type');
            filename = base.fixFilename(filename);
            return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}" -A "${panInfo.ua}" -b "${base.getDownloadCookie().replace(/[\\"`$]/g, '')}"`);
        },
        addPageListener() {
            if (this._listenerBound) return;
            this._listenerBound = true;
            doc.on('click', '.fl-button', async (e) => {
                if ($(e.target).closest('.g-button-menu, .menu').length) return;
                Swal.showLoading();
                try { await this.getPCSLink(); } catch (err) { Swal.close(); base.renderErrorPanel('获取下载链接失败：' + (err && err.message || '未知错误'), this); } finally { base.closeIfLoading(); }
            });
        },
        addButton() {
            const $button = $(`<div class="quark-button fl-button"><svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="#fff" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 2-2z"/><path d="M14 8h1.553c.85 0 1.16.093 1.47.267.311.174.556.43.722.756.166.326.255.65.255 1.54v4.873c0 .892-.089 1.215-.255 1.54-.166.327-.41.583-.722.757-.31.174-.62.267-1.47.267H6.447c-.85 0-1.16-.093-1.47-.267a1.778 1.778 0 01-.722-.756c-.166-.326-.255-.65-.255-1.54v-4.873c0-.892.089-1.215.255-1.54.166-.327.41-.583.722-.757.31-.174.62-.267 1.47-.267H11"/><path stroke-linecap="round" stroke-linejoin="round" d="M11 3v10"/></g></svg><span>下载助手</span></div>`);
            base.mountWithRetry(() => {
                pageNum = this.detectPage();
                let $toolWrap = $(panInfo.btn.home);
                if (!$toolWrap.length) return false;
                $toolWrap.prepend($button);
                base._paintPageButtons();   // 浅色主题下直接挂深色字
                return true;
            }, () => this.detectPage() === 'home');
        },
        // 夸克不给 token 就派到限速节点，约 30KB/s
        async getAccelToken() {
            const now = Date.now();
            const cached = base.getValue('quark_accel_token');
            if (cached && cached.token && cached.expired_timestamp) {
                if (cached.expired_timestamp > now + 60000) {
                    return cached.token;
                }
            }
            const time = Math.floor(now / 1e3);
            try {
                let res = await base.post(panInfo.pcs[1], {
                    "conversation_id": "300000" + time,
                    "conversation_type": 3,
                    "msg_id": time + "000"
                }, {"content-type": "application/json;charset=utf-8", "Cookie": base.getDownloadCookie(), "User-Agent": panInfo.ua});
                if (res && res.code === 0 && res.data && res.data.token) {
                    base.setValue('quark_accel_token', res.data);
                    return res.data.token;
                }
            } catch (e) {}
            return '';
        },
        async getPCSLink() {
                    selectedFiles = this.getSelectedList();
                    if (selectedFiles.length === 0) {
                        Swal.close(); return base.renderDownloadPanel([], this);
                    }
                    if (this.isOnlyFolder()) {
                        Swal.close(); return message.error('提示：请打开文件夹后勾选文件！');
                    }
            let fids = [];
            selectedFiles.forEach(val => {
                fids.push(val.fid);
            });
            if (pageNum === 'home') {
                let token = await this.getAccelToken();
                let res = await base.post(panInfo.pcs[0], {
                    "fids": fids,
                    "speedup_session": "",
                    "token": token
                }, {"content-type": "application/json;charset=utf-8", "Cookie": base.getDownloadCookie(), "user-agent": panInfo.ua});
                if (res.code === 31001) {
                    Swal.close(); return message.error('提示：请先登录网盘！');
                }
                if (res.code !== 0) {
                                    return message.error('提示：获取链接失败！');
                                }
                                let files = this.normalizeList(res.data);
            base.renderDownloadPanel(files, this);
                            } else {
                let dialog = await Swal.fire({
                    toast: true,
                    icon: 'info',
                    title: `提示：请将文件<span class="tag-danger">[保存到网盘]</span>后前往<span class="tag-danger">[我的网盘]</span>中下载！`,
                    showConfirmButton: true,
                    confirmButtonText: '点击保存',
                    position: 'top',
                });
                if (dialog.isConfirmed) {
                    let save = document.querySelector('.file-info_r');
                    save && save.click();
                    return;
                }
            }
        },
        normalizeList(list) {
            return list.map(v => ({
                filename: v.file_name || '',
                sizeStr: base.sizeFormat(v.size),
                rawSize: v.size || 0,
                dlink: v.download_url || '',
                isFolder: v.file === false,
                raw: v,
            }));
        },
        async sendLinkToRPC(filename, link) {
            let rpc = base._rpcConfig();
            if (!rpc) return 'fail';
            let url = rpc.url;
            let rpcData = {
                id: new Date().getTime(),
                jsonrpc: '2.0',
                method: 'aria2.addUri',
                params: [`token:${rpc.token}`, [link], {
                    dir: rpc.dir,
                    out: base.safeRpcFilename(filename),
                    header: [`User-Agent: ${panInfo.ua}`, `Cookie: ${base.getDownloadCookie()}`],
                    'user-agent': panInfo.ua,
                    'referer': `${location.origin}/`
                }]
            };
            try {
                let res = await base.post(url, rpcData, {}, '');
                if (res.result) return 'success';
                base.panelNotice('Aria2 拒绝请求：' + ((res.error && res.error.message) || '未知错误（请检查 RPC 密钥与保存路径）'));
                return 'fail';
            } catch (e) {
                base.panelNotice('无法连接 RPC（' + rpc.domain + ':' + rpc.port + '）' + (e && e.message ? '：' + e.message : '') + '，请确认下载器已启动且 RPC 服务已开启');
                return 'fail';
            }
        },
        getSelectedList() {
            try {
                let selectedList = [];
                let reactDom = document.getElementsByClassName('file-list')[0];
                let reactObj = base.findReact(reactDom);
                if (!reactObj) return [];
                let props = reactObj.props;
                if (props) {
                    let fileList = props.list || [];
                    let selectedKeys = props.selectedRowKeys || [];
                    fileList.forEach((val) => {
                        if (selectedKeys.includes(val.fid)) {
                            selectedList.push(Object.assign({}, val));
                        }
                    });
                }
                return selectedList;
            } catch (e) {
                return [];
            }
        },
        detectPage() {
            // pathname 恒为 /list，靠 hash 判页；#/ 也是落地路由
            let hash = location.hash || '';
            if (!hash || hash === '#/' || /^#\/list\/all(?:$|[?/])/.test(hash)) return 'home';
            return '';
        },
        isOnlyFolder() {
            for (let i = 0; i < selectedFiles.length; i++) {
                if (selectedFiles[i].file) return false;
            }
            return true;
        },
        async initFerryLink() {
            base.initDefaultConfig();
            base.addFerryLinkStyle();
            pageNum = this.detectPage();
            panInfo = LOCAL_CONFIG.quark;
            Object.freeze && Object.freeze(panInfo);
            this.addButton();
            this.addPageListener();
            base.createTip();
            base.registerMenuCommand();
        }
    };
    let yidong = {
        site: 'yidong',
        convertLinkToAria(link, filename, ua) {
            filename = base.fixFilename(filename);
            return encodeURIComponent(`aria2c "${link}" --out "${filename}" -x 16 -s 16 -k 1M`);
        },
        convertLinkToBC(link, filename, ua) {
            let bc = `AA/${encodeURIComponent(filename)}/?url=${encodeURIComponent(link)}ZZ`;
            return encodeURIComponent(`bc://http/${base.e(bc)}`);
        },
        convertLinkToCurl(link, filename, ua) {
            let terminal = base.settingChoice('setting_terminal_type');
            filename = base.fixFilename(filename);
            return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}"`);
        },
        addPageListener() {
            // 重复挂载（SPA 路由切换后重挂按钮）时别再叠一层监听，否则一次点击会连发多次请求
            if (this._pageClickBound) return;
            this._pageClickBound = true;
            doc.on('click', '.fl-button', async (e) => {
                if ($(e.target).closest('.g-button-menu, .menu').length) return;
                Swal.showLoading();
                try { await this.getPCSLink(); } catch (err) { Swal.close(); base.renderErrorPanel('获取下载链接失败：' + (err && err.message || '未知错误'), this); } finally { base.closeIfLoading(); }
            });
        },
        addButton() {
            let $button = $(`<div class="yidong-button fl-button"><svg viewBox="0 0 40 40" width="20" height="20" fill="currentColor" stroke="none" aria-hidden="true" focusable="false"><path d="M19 5h2v1h-2zM18 6h4v1h-4zM18 7h4v1h-4zM18 8h4v1h-4zM18 9h4v1h-4zM18 10h4v1h-4zM18 11h4v1h-4zM18 12h4v1h-4zM18 13h4v1h-4zM18 14h4v1h-4zM18 15h4v1h-4zM18 16h4v1h-4zM18 17h4v1h-4zM12 18h3v1h-3zM18 18h4v1h-4zM25 18h3v1h-3zM12 19h3v1h-3zM18 19h4v1h-4zM25 19h3v1h-3zM12 20h4v1h-4zM18 20h4v1h-4zM24 20h4v1h-4zM13 21h4v1h-4zM18 21h4v1h-4zM23 21h4v1h-4zM14 22h12v1h-12zM14 23h12v1h-12zM15 24h10v1h-10zM16 25h8v1h-8zM17 26h6v1h-6zM5 27h2v1h-2zM18 27h4v1h-4zM33 27h2v1h-2zM4 28h4v1h-4zM19 28h2v1h-2zM32 28h4v1h-4zM4 29h4v1h-4zM32 29h4v1h-4zM4 30h4v1h-4zM32 30h4v1h-4zM4 31h4v1h-4zM32 31h4v1h-4zM4 32h32v1h-32zM4 33h32v1h-32zM4 34h32v1h-32zM5 35h30v1h-30z"></path></svg>下载助手</div>`);
            base.mountWithRetry(() => {
                pageNum = this.detectPage();
                let $toolWrap = $(panInfo.btn.home);
                if (!$toolWrap.length) return false;
                $toolWrap.prepend($button);
                return true;
            }, () => this.detectPage() === 'home');
            this.addPageListener();
        },
        async getFileUrlByOnce(item, index) {
            try {
                if (item.downloadUrl) return {
                    index,
                    downloadUrl: item.downloadUrl
                };
                if (this.detectPage() === 'home') {
                    let body = {
                        "fileId": item.contentID
                    };
                    let time = new Date(+new Date() + 8 * 3600 * 1000).toJSON().substr(0, 19).replace('T', ' ');
                    let key = base.getRandomString(16);
                    let sign = base.getSign(undefined, body, time, key);
                    let res = await base.post(panInfo.pcs[0], body, {
                        'authorization': base.getCookie('authorization'),
                        'caller': 'web',
                        'content-type': "application/json;charset=UTF-8",
                        'CMS-DEVICE': 'default',
                        'mcloud-channel': '1000101',
                        'mcloud-client': '10701',
                        'mcloud-sign': time + "," + key + "," + sign,
                        'mcloud-version': '7.14.2',
                        'x-deviceinfo': '||9|7.17.0|edge||||windows 10||zh-CN|||',
                        'x-huawei-channelsrc': '10000034',
                        'x-inner-ntwk': '2',
                        'x-m4c-caller': 'PC',
                        'x-m4c-src': '10002',
                        'x-svctype': '1',
                        'x-yun-api-version': 'v1',
                        'x-yun-app-channel': '10000034',
                        'x-yun-channel-source': '10000034',
                        'x-yun-client-info': '||9|7.17.0|edge||||windows 10||zh-CN|||||',
                        'x-yun-module-type': '100',
                        'x-yun-svc-type': '1',
                        'x-yun-url-type': '3',
                    });
                    if (res.success) {
                        return {
                            index,
                            downloadUrl: res.data.url
                        };
                    } else {
                        return {
                            index,
                            downloadUrl: '获取下载地址失败，请刷新重试！'
                        };
                    }
                }
                // 移动云盘把 linkID 挂在页面根实例上，别的函数拿不到
                let vueDom = null;
                try { vueDom = document.querySelector('.home-page').__vue__ || null; } catch (e) { }
                let linkId = (vueDom && vueDom.linkID) || '';
                if (!linkId) return { index, downloadUrl: '读不到移动云盘 linkID，请刷新页面后重试' };
                let res = await base.post(panInfo.pcs[1], `linkId=${encodeURIComponent(linkId)}&contentIds=${encodeURIComponent(item.path)}&catalogIds=`, {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    });
                    if (res.code === 0) {
                        return {
                            index,
                            downloadUrl: res.data.redrUrl
                        };
                    } else {
                        return {
                            index,
                            downloadUrl: '获取下载地址失败，请刷新重试！'
                        };
                    }
            } catch (e) {
                return {
                    index,
                    downloadUrl: '获取下载地址失败，请刷新重试！'
                };
            }
        },
        async getPCSLink() {
            selectedFiles = this.getSelectedList();
            if (selectedFiles.length === 0) {
                Swal.close(); return base.renderDownloadPanel([], this);
            }
            if (this.isOnlyFolder()) {
                return message.error('提示：勾选的全是文件夹，脚本仅支持下载文件，请打开文件夹后勾选文件！');
            }
            selectedFiles = selectedFiles.filter(v => v && v.contentID);
            if (selectedFiles.length === 0) {
                return message.error('提示：未获取到文件标识，请刷新页面后重试！');
            }
            const res = await base.mapLimit(selectedFiles, 5, (item, index) => this.getFileUrlByOnce(item, index));
            res.forEach(val => {
                if (val) selectedFiles[val.index].downloadUrl = val.downloadUrl;
            });
            let files = this.normalizeList(selectedFiles);
            base.renderDownloadPanel(files, this);
        },
        normalizeList(list) {
            return list.map(v => ({
                filename: v.contentName || v.coName || '',
                sizeStr: base.sizeFormat(v.contentSize || v.coSize),
                rawSize: v.contentSize || v.coSize || 0,
                dlink: v.downloadUrl && /^https?:\/\//.test(v.downloadUrl) ? v.downloadUrl : '',
                isFolder: !!(v.dirEtag || v.caName),
                raw: v,
            }));
        },
        async sendLinkToRPC(filename, link) {
            let rpc = base._rpcConfig();
            if (!rpc) return 'fail';
            let url = rpc.url;
            let rpcData = {
                id: new Date().getTime(),
                jsonrpc: '2.0',
                method: 'aria2.addUri',
                params: [`token:${rpc.token}`, [link], {
                    dir: rpc.dir,
                    out: base.safeRpcFilename(filename),
                    header: []
                }]
            };
            try {
                let res = await base.post(url, rpcData, {}, '');
                if (res.result) return 'success';
                base.panelNotice('Aria2 拒绝请求：' + ((res.error && res.error.message) || '未知错误（请检查 RPC 密钥与保存路径）'));
                return 'fail';
            } catch (e) {
                base.panelNotice('无法连接 RPC（' + rpc.domain + ':' + rpc.port + '）' + (e && e.message ? '：' + e.message : '') + '，请确认下载器已启动且 RPC 服务已开启');
                return 'fail';
            }
        },
        getSelectedList() {
            let normalize = (item, vue) => {
                if (!item || typeof item !== 'object') return null;
                if (!item.owner && vue) {
                    try {
                        let root = vue.$root || vue;
                        let s = root && root.$data;
                        if (s) {
                            let owner = s.owner || s.account ||
                                (s.userInfo && (s.userInfo.account || s.userInfo.phone)) ||
                                (s.globalInfo && (s.globalInfo.account || s.globalInfo.phone)) || '';
                            if (owner) item.owner = owner;
                        }
                    } catch (e) {}
                }
                return item;
            };
            let result = [];
            try {
                let vue = document.querySelector(".main_file_list").__vue__;
                let list = vue.selectList;
                if (Array.isArray(list) && list.length) {
                    result = list.map(val => normalize(val.item, vue)).filter(Boolean);
                    if (result.length) return result;
                }
            } catch (e) {}
            try {
                let vueDom = document.querySelector(".home-page").__vue__;
                let fileList = vueDom._computedWatchers.fileList.value;
                let dirList = vueDom._computedWatchers.dirList.value;
                let selectedFileIndex = vueDom.selectedFile;
                let selectedDirIndex = vueDom.selectedDir;
                let selectFileList = fileList.filter((v, i) => {
                    return selectedFileIndex.includes(i);
                });
                let selectDirList = dirList.filter((v, i) => {
                    return selectedDirIndex.includes(i);
                });
                let list = [...selectFileList, ...selectDirList];
                if (list.length) {
                    result = list.map(v => normalize(v, vueDom)).filter(Boolean);
                    if (result.length) return result;
                }
            } catch (e) {}
            try {
                let containers = document.querySelectorAll('.main_file_list, [class*="file-list"], [class*="fileList"], .file-box, .home-page');
                let markSelectors = ['[class*="selected"]', '[class*="checked"]', 'input[type="checkbox"]:checked'];
                containers.forEach(container => {
                    markSelectors.forEach(sel => {
                        container.querySelectorAll(sel).forEach(dom => {
                            let vue = dom.__vue__ || (dom.parentElement && dom.parentElement.__vue__) ||
                                (dom.closest && dom.closest('[class*="item"]') && dom.closest('[class*="item"]').__vue__);
                            if (!vue) return;
                            let item = vue.item || vue.fileData || vue.info ||
                                (vue.$props && (vue.$props.item || vue.$props.file || vue.$props.data));
                            if (!item && vue.$data) {
                                item = vue.$data.item || vue.$data.fileData || vue.$data.info;
                            }
                            item = normalize(item, vue);
                            if (item && !result.includes(item)) result.push(item);
                        });
                    });
                });
                if (result.length) return result;
            } catch (e) {}
            return [];
        },
        detectPage() {
            let path = location.pathname, hash = location.hash || '';
            if (/^\/w/.test(path)) {
                if (/^#\/(recyclebin|recycle)/.test(hash)) return '';
                return 'home';
            }
            return '';
        },
        isOnlyFolder() {
            for (let i = 0; i < selectedFiles.length; i++) {
                let v = selectedFiles[i] || {};
                if (v.kind === 'folder' || v.folder === true || v.isFolder === true || v.contentType === 'folder' || v.contentType === 'dir') continue;
                return false;
            }
            return true;
        },
        async initFerryLink() {
            base.initDefaultConfig();
            base.addFerryLinkStyle();
            pageNum = this.detectPage();
            panInfo = LOCAL_CONFIG.yidong;
            Object.freeze && Object.freeze(panInfo);
            this.addButton();
            base.createTip();
            base.registerMenuCommand();
        }
    };
    let ctfile = {
        site: 'ctfile',
        convertLinkToAria(link, filename, ua) {
            filename = base.fixFilename(filename);
            return encodeURIComponent(`aria2c "${link}" --out "${filename}" -x 16 -s 16 -k 1M`);
        },
        convertLinkToBC(link, filename, ua) {
            let bc = `AA/${encodeURIComponent(filename)}/?url=${encodeURIComponent(link)}ZZ`;
            return encodeURIComponent(`bc://http/${base.e(bc)}`);
        },
        convertLinkToCurl(link, filename, ua) {
            let terminal = base.settingChoice('setting_terminal_type');
            filename = base.fixFilename(filename);
            return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}"`);
        },
        addPageListener() {
            // 重复挂载（SPA 路由切换后重挂按钮）时别再叠一层监听，否则一次点击会连发多次请求
            if (this._pageClickBound) return;
            this._pageClickBound = true;
            doc.on('click', '.fl-button', async (e) => {
                if ($(e.target).closest('.g-button-menu, .menu').length) return;
                Swal.showLoading();
                try { await this.getPCSLink(); } catch (err) { Swal.close(); base.renderErrorPanel('获取下载链接失败：' + (err && err.message || '未知错误'), this); } finally { base.closeIfLoading(); }
            });
        },
        addButton() {
            if (!pageNum) return;
            if (pageNum === 'drive') {
                this._mountDriveBtn();          // 先进页面就挂一次，工具栏已就绪时不用等 DOM 变动
                base.watchDom(() => {
                    if ($('.fl-button').length) return;
                    this._mountDriveBtn();
                });
                return;
            }
            let cls = pageNum === 'dir' ? 'ctfile-button ctfile-button-sm fl-button' : 'ctfile-button fl-button';
            let $button = $(`<div class="${cls}" title="下载助手">${BTN_ICON}下载助手</div>`);
            let mount = pageNum === 'dir' ? '.ct-bulk-bar .ct-actions' : '.ct-download-zone .ct-actions';
            base.listenElement(mount, () => {
                $('.fl-button').length === 0 && $(mount).prepend($button);
            });
        },
        _uploadBtn() {
            let $hit = $('button, a, [role="button"], [class*=btn]').filter(function () {
                if (this.hidden || /none/i.test(String(this.style && this.style.display))) return false;
                if ($(this).closest('[hidden], [aria-hidden="true"]:not(body > *)').length) return false;
                if ($(this).find('button, a, [role="button"]').length) return false;
                return /^(上传|上传文件|Upload)$/i.test($(this).text().replace(/\s+/g, ''));
            }).first();
            return $hit.length ? $hit : null;
        },
        _mountDriveBtn() {
            if ($('.fl-button').length) return true;    // 已经挂过，别重复插
            let $up = this._uploadBtn();
            if (!$up) return false;         // 工具栏还没渲染出来，等 DOM 变动再挂
            let up = $up[0], cs = getComputedStyle(up);
            let $btn = $(ROW_BUTTON).css({
                '--fl-h': cs.height === 'auto' ? '' : cs.height,
                '--fl-bg': cs.backgroundColor,
                '--fl-fg': cs.color,
                '--fl-bd': cs.borderTopColor,
                '--fl-r': cs.borderTopLeftRadius || '8px',
                '--fl-fs': cs.fontSize,
                '--fl-fw': cs.fontWeight,
            });
            let group = up.closest('.ct-btn-split');
            let anchor = group;
            if (!anchor) {
                let sib = up.nextElementSibling;
                let compact = !!sib && (sib.getBoundingClientRect().left - up.getBoundingClientRect().right) < 2;
                anchor = compact ? up.parentElement : up;
            }
            if (!anchor) return false;
            $btn.css('margin-right', '0px');
            anchor.before($btn[0]);
            let gap = anchor.getBoundingClientRect().left - $btn[0].getBoundingClientRect().right;
            if (gap < 2) {
                let ref = anchor.nextElementSibling;
                let ml = ref ? parseFloat(getComputedStyle(ref).marginLeft) || 0 : 0;
                $btn.css('margin-right', (ml > 0 ? ml : 8) + 'px');
            }
            return true;
        },
        _watchHash() {
            window.addEventListener('hashchange', () => {
                driveTrace.body = '';
                pageNum = this.detectPage();
                if (pageNum === 'drive') {
                    if (!$('.ctfile-button.fl-button').length) this._mountDriveBtn();
                    return;
                }
                $('.ctfile-button.fl-button').remove();
            });
        },
        // 分享页 /f/<id> 与目录页 /d/<id>，提取码都在 ?p=
        _shareRef() {
            let m = /^\/(f|d)\/([^/?#]+)/.exec(location.pathname);
            let pass = '';
            try { pass = new URLSearchParams(location.search).get('p') || ''; } catch (e) { }
            if (!pass && m) pass = this._localPass('passcode', m[2]);
            return { type: m ? m[1] : '', id: m ? m[2] : '', pass };
        },
        // 提取码与通行证都由页面写在本地，按 :<分享 id> 后缀找
        _localPass(prefix, id) {
            let tail = ':' + id;
            for (let i = 0; i < localStorage.length; i++) {
                let key = '';
                try { key = localStorage.key(i) || ''; } catch (e) { }
                if (key.indexOf(prefix) !== 0 || key.slice(-tail.length) !== tail) continue;
                let raw = '';
                try { raw = localStorage.getItem(key) || ''; } catch (e) { }
                try {
                    let o = JSON.parse(raw);
                    let v = (o && (o.pass || o.value)) || '';
                    if (v) return v;
                } catch (e) { }
            }
            return '';
        },
        async getPCSLink() {
            let ref = this._shareRef();
            if (!ref.id) return this.detectPage() === 'drive' ? this._driveLink() : base.renderErrorPanel('仅支持文件分享页、目录页与个人网盘页', this);
            return ref.type === 'd' ? this._dirLink(ref) : this._fileLink(ref);
        },
        // 扩展后台发的请求没有来源，得从页面上下文发
        async _drivePost(path, body) {
            let tk = '';
            try { tk = sessionStorage.getItem('ctfile_basic_token') || ''; } catch (e) { }
            if (!tk) throw new Error('读不到登录凭证，请刷新页面后重试');
            let ext = /^https?:/i.test(path);
            let url = ext ? String(path) : ('https://api.ctfile.com' + path);
            if (ext && !/^https:\/\/(?:[\w-]+\.)*ctfile\.com(?=\/|$)/i.test(url)) throw new Error('拒绝向非城通地址发送凭证');
            let headers = { 'content-type': 'application/json', 'authorization': 'Bearer ' + tk };
            let pw = (typeof unsafeWindow !== 'undefined' && unsafeWindow) ? unsafeWindow : null;
            if (pw && typeof pw.fetch === 'function') {
                let r = await pw.fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(body), credentials: 'include' });
                let j = null;
                try { j = await r.json(); } catch (e) { }
                if (!j) throw new Error('HTTP ' + r.status);
                if (r.status >= 400 && !j.code) j.code = r.status;
                return j;
            }
            return base.post(url, body, headers);
        },
        // 先试 stream，拿不到再走授权链路
        async _driveUrls(space, items) {
            let ws = space.id || space.workspace_id || space.space_id;
            let out = {};
            for (let i = 0; i < items.length; i++) {
                let it = items[i];
                if (items.length > 1) base.tipLoading('正在获取下载链接 ' + (i + 1) + '/' + items.length + '…');
                let fid = this._fid(it).replace(/^f/, '');
                try {
                    let r = await this._drivePost('/v4/file/browse/stream', { workspace_id: ws, file_id: fid });
                    let f = (r && r.file) || (r && r.data && r.data.file) || {};
                    let url = f.downurl || f.download_url || '';
                    if (url && !this._deadLink(url)) {
                        out[this._fid(it)] = url;
                        if (f.headers) driveHdrs[url] = f.headers;
                    }
                } catch (e) {
                    console.warn('ctfile stream 失败：', fid, e && e.message);
                }
            }
            if (Object.keys(out).length) return out;
            let ids = items.map(it => this._fid(it)).join(',');
            let auth = await this._drivePost('/v4/file/browse/create-download-auth', { workspace_id: ws, ids: ids });
            let a = (auth && auth.data) || auth || {};
            let sig = a.download_signature || '';
            if (!sig) throw new Error('下载授权失败：' + String(JSON.stringify(auth)).slice(0, 120));
            let list = await this._drivePost('/v4/file/browse/download-list', {
                userid: a.userid, downuid: a.downuid, ids: a.ids || ids,
                workspace_id: a.workspace_id || ws, expires_at: a.expires_at,
                download_signature: sig, cursor: '', limit: 500
            });
            this._lastList = list;
            let ld = (list && list.data) || list || {};
            let rows = ld.results || ld.items || [];
            for (let i = 0; i < rows.length; i++) {
                let r = rows[i] || {};
                if (rows.length > 1) base.tipLoading('正在换取下载地址 ' + (i + 1) + '/' + rows.length + '…');
                let sign = r.download_sign || r.sign || '';
                if (!sign) continue;
                let u = await this._drivePost('/v4/file/browse/fetch-url-direct', { download_sign: sign, carrier: 0 });
                let ud = (u && u.data) || u || {};
                let url = ud.download_url || ud.downurl || '';
                let key = String(r.fid || r.file_id || '');
                if (url && !out[key] && !this._deadLink(url)) {
                    out[key] = url;
                    if (ud.headers) driveHdrs[url] = ud.headers;
                }
                this._lastFetch = u;
            }
            return out;
        },
        async _driveLink() {
            let picked = this._driveCheckedNames();
            if (!picked.length) return base.renderDownloadPanel([], this);   // 没勾选就给空面板，和其余六家一致
            let spaces = await this._driveSpaces();
            if (!spaces.length) return base.renderErrorPanel('读不到网盘空间，请刷新页面后重试', this);
            let space = spaces[0], items = [];
            this._lastFetch = this._lastList = null;
            for (let i = 0; i < spaces.length && i < 3; i++) {
                let got = [];
                try {
                    got = (await this._driveList(spaces[i])).filter(it => this._isDriveFile(it) && this._fid(it));
                } catch (e) {
                    console.warn('ctfile 空间取列表失败：', spaces[i], e && e.message);
                }
                if (got.length) { space = spaces[i]; items = got; break; }
            }
            let hit = items.filter(it => {
                let n = this._name(it);
                return n && picked.indexOf(n) !== -1;
            });
            if (hit.length) items = hit;
            else if (items.length) return base.renderErrorPanel('勾选的文件不在本页，或全是文件夹', this, '确认');
            if (!items.length) return base.renderErrorPanel('当前目录没有可取的文件，请先进入子文件夹', this);
            if (items.length >= 100) return base.renderErrorPanel('当前目录文件过多，请进入子文件夹后再试', this);
            let ids = items.map(it => this._fid(it));
            let byId = {}, dl = null;
            try {
                dl = await this._drivePost('/v4/file/browse/direct-link', {
                    workspace_id: space.id || space.workspace_id || space.space_id, file_ids: ids.join(',')
                });
                let urls = (dl && dl.direct_urls) || (dl && dl.data && dl.data.direct_urls) || [];
                urls.forEach(u => {
                    byId[this._fid(u, true)] = u.url || '';
                    if (u.headers) driveHdrs[u.url] = u.headers;
                });
            } catch (e) {
                console.warn('ctfile 直链接口失败，改走下载链路：', e && e.message);
            }
            // 无签名的 ctcontents 地址打不开，继续找别的路
            let gotReal = Object.keys(byId).some(k => byId[k] && !this._deadLink(byId[k]));
            if (!gotReal) {
                let alt = {};
                try { alt = await this._driveUrls(space, items); } catch (e) {
                    console.warn('ctfile 换链失败：', e && e.message);
                }
                Object.keys(alt).forEach(k => {
                    if (!byId[k] || this._deadLink(byId[k])) byId[k] = alt[k];
                });
            }
            let list = items.map(it => {
                let fid = this._fid(it);
                let link = byId[fid] || byId[fid.replace(/^f/, '')] || '';
                return this._fileRow({ file_name: this._name(it), file_size: it.size || it.file_size || it.size_bytes }, link, it);
            });
            if (list.every(f => !f.dlink || this._deadLink(f.dlink))) {
                // 签名与请求头都算临时凭证，回显前按字段打码
                let raw = String(JSON.stringify(this._lastFetch || this._lastList || dl || {}, (k, v) => {
                    if (typeof v === 'string') {
                        if (/(sign|token|cookie|auth|secret|passwd|password|pwd|session|jwt|apikey|credential)/i.test(k)) return '…';
                        return v.replace(/https?:\/\/[^\s"']+/gi, (u) => {
                            const cut = u.search(/[?#]/);
                            const head = (cut > 0 ? u.slice(0, cut) : u).replace(/\/\/[^/@\s]+@/, '//…@');
                            return cut > 0 ? head + '…' : head;
                        });
                    }
                    return v;
                })).slice(0, 200);
                return base.renderErrorPanel('城通个人网盘取不到可用地址。接口原文：' + raw, this);
            }
            base.renderDownloadPanel(list, this);
        },
        // orderby 只认服务端枚举，值不对就整页空，所以逐个试
        // 页面那条请求的参数最准，只改分页
        _driveReplay(root) {
            if (!driveTrace.url || !driveTrace.body) return null;
            try {
                let body = JSON.parse(driveTrace.body);
                if (!body || typeof body !== 'object') return null;
                body.start = 0;
                body.pagesize = 100;
                if (body.folder_id === undefined && root) body.folder_id = root;
                return body;
            } catch (e) {
                return null;
            }
        },
        // 根目录不是 '0'，先问出真实 folder id
        async _driveRoot(space) {
            let ws = space.id || space.workspace_id || space.space_id;
            let pick = (o) => {
                let d = (o && o.data) || o || {};
                let f = d.folder || d.root || d.current || (o && o.folder) || {};
                let v = String(f.fid || f.id || f.folder_id || '');
                return /^d?\d+$/.test(v) ? v : '';
            };
            try {
                let v = pick(await this._drivePost('/v4/file/browse/folder-tree', { workspace_id: ws }));
                if (v) return v;
            } catch (e) { }
            try {
                let v = pick(await this._drivePost('/v4/file/browse/find-by-path', { workspace_id: ws, path: '/' }));
                if (v) return v;
            } catch (e) { }
            return '';
        },
        async _driveList(space) {
            if (driveTrace.url && driveTrace.body) {
                try {
                    let b = JSON.parse(driveTrace.body);
                    if (b && typeof b === 'object') {
                        b.start = 0;
                        let res = await this._drivePost(driveTrace.url, b);
                        let items = this._driveItems(res);
                        if (items.length) return items;
                    }
                } catch (e) {
                    console.warn('ctfile 照抄页面请求失败：', e && e.message);
                }
            }
            let root = await this._driveRoot(space);
            if (!root) console.warn('ctfile 换不到根目录 id，退回 0：', space);
            let ws = space.id || space.workspace_id || space.space_id;
            let folders = [this._driveFolder()].filter(f => f !== '0').concat(root ? [root] : ['d0', null]);
            let plan = [this._driveReplay(root)];
            folders.forEach(f => {
                plan.push({ orderby: 'new', folder_id: f });
                plan.push({ orderby: 'date', folder_id: f });
            });
            plan = plan.filter(Boolean);
            let last = null, err = null;
            for (let i = 0; i < plan.length; i++) {
                let body = Object.assign({
                    workspace_id: space.id || space.workspace_id || space.space_id,
                    folder_id: this._driveFolder(), filter: 'all', keyword: '', start: 0, pagesize: 100
                }, plan[i]);
                let res;
                try {
                    res = await this._drivePost('/v4/file/browse/list', body);
                } catch (e) {
                    err = e;
                    continue;
                }
                last = res;
                if (res && res.code && res.code !== 200) {
                    err = new Error(res.msg || ('城通返回 ' + res.code));
                    continue;
                }
                let items = this._driveItems(res);
                if (items.length) {
                    return items;
                }
            }
            if (!last && err) throw err;
            console.warn('ctfile 列表始终为空：', space);
            return [];
        },
        // 文件夹在城通用 fid 首字母 d 标记，没有别的字段可依赖
        _isDriveFile(it) {
            let raw = String((it && (it.fid || it.file_id || it.id)) || '');
            if (!raw || /^d/.test(raw)) return false;
            return !(it.kind === 'folder' || it.type === 'folder' || it.is_dir || it.is_folder || it.ext === 'folder');
        },
        async _driveSpaces() {
            let kind = (location.hash.match(/#\/(public|private)/) || [])[1] || 'public';
            let res = await this._drivePost('/v4/workspace/manage/list', { start: 0, pagesize: 100 });
            let spaces = (res && res.workspaces) || (res && res.data && res.data.workspaces) || [];
            let kof = s => s.kind || s.type || s.workspace_type || '';
            let hit = spaces.filter(s => kof(s) === kind);
            let rest = spaces.filter(s => kof(s) !== kind);
            if (!hit.length && spaces.length) console.warn('ctfile 没有 ' + kind + ' 空间，依次试：', spaces);
            return hit.concat(rest);
        },
        _driveFolder() {
            let m = location.hash.match(/#\/(?:public|private)\/(\d+)/);
            return m ? m[1] : '0';
        },
        // 无签名地址打不开，带 cts/ctk/chk 的才是真直链
        _deadLink(u) {
            let v = String(u || '');
            if (!v) return true;
            return /ctcontents\.com/.test(v) && !/[?&](ctk|chk|cts)=/.test(v);
        },
        _driveCheckedNames() {
            let names = [];
            let push = (el) => {
                let t = $(el).text().replace(/\s+/g, ' ').trim();
                if (t && names.indexOf(t) === -1) names.push(t);
            };
            $('input[type=checkbox], input[type=radio]').filter(function () { return this.checked; }).each(function () {
                let n = $(this).attr('aria-label');
                if (n) { if (names.indexOf(n) === -1) names.push(n); return; }
                let row = $(this).closest('tr, li, [role=row], [class*=row], [class*=item], [class*=card]');
                if (row.length) push(row[0]);
            });
            $('[aria-selected="true"], .is-selected, .selected, .is-checked').each(function () { push(this); });
            return names.slice(0, 40);
        },
        // 文件数组在 data 里，字段名各版本不一，几种写法都试
        _driveItems(res) {
            let d = (res && res.data) || {};
            let cands = [d.results, d.files, d.items, d.list, d.rows,
                res && res.results, res && res.files, res && res.items, res && res.list, res && res.rows];
            for (let i = 0; i < cands.length; i++) if (Array.isArray(cands[i]) && cands[i].length) return cands[i];
            return [];
        },
        _fid(it, raw) {
            let v = it && (it.fid || it.file_id || it.id);
            if (v === undefined || v === null || v === '') return '';
            v = String(v);
            return raw || /^f/.test(v) ? v : 'f' + v;
        },
        _name(it) {
            return (it && (it.name || it.file_name || it.filename)) || '';
        },
        // 尺寸有字节数和 "37.92 MB" 两种写法
        _sizeOf(v) {
            if (typeof v === 'number') return v;
            let m = String(v == null ? '' : v).match(/^([\d.]+)\s*([KMGT]?B)?/i);
            if (!m) return 0;
            let unit = { B: 1, KB: 1024, MB: 1048576, GB: 1073741824, TB: 1099511627776 };
            return Math.round((parseFloat(m[1]) || 0) * (unit[(m[2] || 'B').toUpperCase()] || 1));
        },
        // 文件信息与通行证一次取回
        async _resource(ref, ap) {
            let url = 'https://urlapi2.ctfile.com/api/v2/resource?kind=file&id=' + encodeURIComponent(ref.id)
                + '&folder_id=0&fk=&passcode=' + encodeURIComponent(ref.pass) + '&type_id=0'
                + (ap ? '&access_pass=' + encodeURIComponent(ap) : '');
            let res = await base.get(url);
            let d = (res && res.data) || {};
            return { code: (res && res.code) || 0, msg: (res && (res.msg || res.message)) || '', file: d.file || null, pass: d.access_pass || ap || '' };
        },
        async _fileLink(ref) {
            let ap = this._localPass('access-pass', ref.id);
            if (!ap) return base.renderErrorPanel('读不到页面凭证，刷新页面后重试', this);
            let r = await this._resource(ref, ap);
            let info = r.file;
            if (!info || !info.file_chk) return base.renderErrorPanel('读取文件信息失败：' + (r.msg || ('城通返回 ' + r.code)), this);
            let link = await this._linkOf({ kind: 'file', id: ref.id, folder_id: '0', fk: '', passcode: ref.pass, type_id: '0', access_pass: r.pass }, info.verifycode, {
                file_id: info.file_id, userid: info.userid, file_chk: info.file_chk, start_time: info.start_time, wait_seconds: info.wait_seconds
            });
            if (!link) return base.renderErrorPanel('取不到下载地址，请重试', this);
            base.renderDownloadPanel([this._fileRow(info, link)], this);
        },
        async _dirLink(ref) {
            let rows = await this._listing(ref);
            let files = rows.filter(r => r.kind === 'file' && r.original_file);
            if (!files.length) return base.renderErrorPanel('目录里没有可取的文件，请先进入子文件夹', this);
            let picked = this._checkedRowIds();
            if (picked.length) files = files.filter(r => picked.indexOf(r.id) !== -1);
            if (!files.length) return base.renderErrorPanel('勾选的文件不在本页，或全是文件夹', this);
            if (files.length > 40) return base.renderErrorPanel('一次最多取 40 个文件，当前 ' + files.length + ' 个，请勾选后再试', this);
            let list = [];
            for (let i = 0; i < files.length; i++) {
                let r = files[i];
                if (files.length > 1) base.tipLoading('正在获取下载链接 ' + (i + 1) + '/' + files.length + '…');
                let hrefId = (String(r.href || '').match(/#\/f\/(.+)$/) || [])[1];
                let link = hrefId ? await this._linkOf({ kind: 'file', id: hrefId, folder_id: '0', fk: '', passcode: ref.pass, type_id: '0' }, r.verifycode, r.original_file) : '';
                list.push(this._fileRow({ file_name: r.name, file_size: r.size_bytes }, link, r));
            }
            base.renderDownloadPanel(list, this);
        },
        async _listing(ref) {
            let rows = [];
            let ap = this._localPass('access-pass', ref.id);
            for (let page = 0; page < 5; page++) {
                let res = await base.get('https://urlapi.ctfile.com/api/v2/listing?kind=dir&id=' + encodeURIComponent(ref.id) + '&folder_id=0&fk=&passcode=' + encodeURIComponent(ref.pass) + '&type_id=0&start=' + rows.length + '&length=200' + (ap ? '&access_pass=' + encodeURIComponent(ap) : ''));
                if (res && res.code && res.code !== 200) throw new Error(res.msg || ('城通返回 ' + res.code));
                let d = res && res.data;
                let batch = (d && d.rows) || [];
                rows = rows.concat(batch);
                if (!batch.length || !d.hasMore) break;
            }
            return rows;
        },
        // 后台直发缺 Origin 会被拒，改在页面内发
        async _linkOf(context, verifycode, original) {
            let body = { context: context, mb: 0, app: 0, verifycode: String(verifycode || ''), original_file: original };
            let pw = (typeof unsafeWindow !== 'undefined' && unsafeWindow) ? unsafeWindow : window;
            if (!pw || typeof pw.fetch !== 'function') throw new Error('读不到页面环境，刷新页面后重试');
            let r = await pw.fetch('https://urlapi.ctfile.com/api/v2/download', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(body),
            });
            let res = null;
            try { res = await r.json(); } catch (e) { }
            if (!res) throw new Error('HTTP ' + r.status);
            let d = res.data || res;
            return d.downurl || d.url || d.download_url || '';
        },
        _fileRow(info, link, raw) {
            let bytes = this._sizeOf(info.file_size);
            return {
                filename: info.file_name || '',
                sizeStr: base.sizeFormat(bytes),
                rawSize: bytes,
                dlink: link || '',
                isFolder: false,
                raw: raw || info,
            };
        },
        _checkedRowIds() {
            let ids = [];
            $('tr[data-row-id] input[type=checkbox]').each(function () {
                if (this.checked) ids.push($(this).closest('tr').attr('data-row-id'));
            });
            return ids.filter(Boolean);
        },
        async sendLinkToRPC(filename, link) {
            let rpc = base._rpcConfig();
            if (!rpc) return 'fail';
            let url = rpc.url;
            let rpcData = {
                id: new Date().getTime(),
                jsonrpc: '2.0',
                method: 'aria2.addUri',
                params: [`token:${rpc.token}`, [link], {
                    dir: rpc.dir,
                    out: base.safeRpcFilename(filename),
                    header: []
                }]
            };
            try {
                let res = await base.post(url, rpcData, {}, '');
                if (res.result) return 'success';
                base.panelNotice('Aria2 拒绝请求：' + ((res.error && res.error.message) || '未知错误（请检查 RPC 密钥与保存路径）'));
                return 'fail';
            } catch (e) {
                base.panelNotice('无法连接 RPC（' + rpc.domain + ':' + rpc.port + '）' + (e && e.message ? '：' + e.message : '') + '，请确认下载器已启动且 RPC 服务已开启');
                return 'fail';
            }
        },
        detectPage() {
            let m = /^\/(f|d)\//.exec(location.pathname);
            if (m) return m[1] === 'd' ? 'dir' : 'file';
            if (/#\/(public|private)/.test(location.hash)) return 'drive';
            // 页面脚本晚一步才补上 hash，域名已经能说明是个人网盘
            if (/(^|\.)drive\.ctfile\.com$/.test(location.host)) return 'drive';
            return '';
        },
        async initFerryLink() {
            base.initDefaultConfig();
            base.addFerryLinkStyle();
            pageNum = this.detectPage();
            panInfo = {};
            this.addButton();
            this.addPageListener();
            base.createTip();
            base.registerMenuCommand();
            this._watchHash();
        }
    };
    let main = {
        init() {
            base.migrate();
            if (/(pan|yun).baidu.com/.test(location.host)) {
                baidu.initFerryLink();
            }
            if (/openapi.baidu.com\/oauth/.test(location.href)) {
                baidu.initAuthorize()
            }
            if (/www.(aliyundrive|alipan).com/.test(location.host)) {
                ali.initFerryLink();
            }
            if (/cloud.189.cn/.test(location.host)) {
                tianyi.initFerryLink();
            }
            if (/pan.xunlei.com/.test(location.host)) {
                xunlei.initFerryLink();
            }
            if (/pan.quark.cn/.test(location.host)) {
                quark.initFerryLink();
            }
            if (/(yun|caiyun).139.com/.test(location.host)) {
                yidong.initFerryLink();
            }
            if (/(^|\.)ctfile\.(com|net|cn)$|(^|\.)545c\.com$/.test(location.host)) {
                ctfile.initFerryLink();
            }
        }
    };
    // document-start 时 DOM 未就绪，等 DOMContentLoaded 再初始化
    const startInit = () => main.init();
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startInit, { once: true });
    } else {
        startInit();
    }
})();