// ==UserScript==
// @name            Bilibili-Download-Enhancer
// @name:zh         我的哔哩哔哩下载
// @namespace       https://github.com/fookhsu/script_hub/tree/main/bili_download
// @version         2.6.0
// @description     B站增强（重构版）：普通多P/合集/UP主全部视频批量下载，合集支持按集/全部P，推送 aria2/Motrix/AriaNgGUI；含 WBI 签名、DASH 兜底、失败重试、一键三连、浏览记录“已看”、简介转链接。仅个人学习交流。
// @author          fookhsu (原版) / refactor
// @icon              data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACS0lEQVRYR8WXz2oTURTGv3MnpqhNKy1UWmxRTGdaiLSQRKkKIoK4FVrRPoHu7BMYn0B3+gQquuiuiC6kaFVsAhGEZkKqG/+Vrtp0YWsyR27KlEwz0xnnT3LgwjB37vl+97tzz9whdDiow/pwBCjofN0AJohwKQgkMxYF8Dmt0bxdnhaAQoWTXMczENJBhFvGMgqk4GY6SZXmPgvAmy/cnYijGqrwvmTVHSQup2jLvG0ByJf5EYDbUQIAeJxR6U4LQHGV1VodesTijfQxBdrkaSrL6z0Hlst8i4An7QBgYDar0lMrgM45ItxrCwDjflajnC+AtR8Gvn8zGpz9xwVOjor/Zma/ANt/GIsLNWxt8p7o4IiAmlLQP+C9pvkG+FoyUPxYs52xhFDPKIh3uRviG2ClWIdsTpHoJYymFNdliQzABBsaEZg4p+DwUftliRxAggwOC0xdidma1RaAI92Ea9OHOgcwPqlANruI1AElhsa2dBKXQJEBnDglGlvxWN/BNcE3gKyCS69b64AUlMISwEv4BpDJ3778i/Xfu5XQtFtaLq+9RiCA6gZj/dcuQN8Audod6kvodYZuz9k7UOK7JPDAbXAY/WxgLjtGDy2f408VPi8MLIUh4JbDELhwNknvLQDyQNoTh87AkFuCIP0E/NzcgWYeTC0bdrkNp6Lm9bc4YM4qr/NzEGaCzNJxLONFRqMbzf22JSu/wlcphhwzpsIAIcIHriGXGadX+/MdWDPflTjRxcH+kLYJhYtj5Piz4/0gF4YVNjk6DvAPDb0aMEr8/nEAAAAASUVORK5CYII=
// @include         *://www.bilibili.com/**
// @include         *://search.bilibili.com/**
// @include         *://space.bilibili.com/**
// @connect         bilibili.com
// @grant           GM_getValue
// @grant           GM.getValue
// @grant           GM_setValue
// @grant           GM.setValue
// @grant           GM_xmlhttpRequest
// @grant           GM.xmlHttpRequest
// @grant           GM_registerMenuCommand
// @grant           GM_info
// @license         AGPL-3.0-or-later
// @charset         UTF-8
// @run-at          document-idle
// @downloadURL TODO:请替换为自有 .user.js 地址
// @updateURL TODO:请替换为自有 .meta.js 地址
// ==/UserScript==
/**
 * B站哔哩哔哩下载增强（Tampermonkey / Violentmonkey 油猴脚本）。
 * - 不依赖 jQuery 等第三方 DOM 库，全部使用原生 DOM；
 * - 分P信息只需一次 API 请求获取；
 * - 普通视频支持多P列表下载；合集(ugc_season)支持「按集 / 全部P」两种范围，
 *   每集多分P时整集勾选自动展开，集数很多时可一键定位“下载当前集”；
 * - 批量下载通过 aria2 JSON-RPC(WebSocket) 推送到 Motrix / AriaNgGUI；
 * - 遵循 AGPL License，仅用于个人学习交流，请注意版权。
 */
(function () {
	'use strict';

	// ============================================================
	// 通用小工具
	// ============================================================
	const $ = (sel, root) => (root || document).querySelector(sel);
	const $$ = (sel, root) => Array.prototype.slice.call((root || document).querySelectorAll(sel));

	const rid = () => Math.ceil(Math.random() * 100000000);

	function gmGet(name, def) {
		if (typeof GM_getValue === 'function') return GM_getValue(name, def);
		if (typeof GM !== 'undefined' && typeof GM.getValue === 'function') {
			let v = def;
			GM.getValue(name, def).then((val) => { v = val; });
			return v;
		}
		const val = localStorage.getItem(name);
		return val === null ? def : val;
	}
	function gmSet(name, value) {
		if (typeof GM_setValue === 'function') return GM_setValue(name, value);
		if (typeof GM !== 'undefined' && typeof GM.setValue === 'function') return GM.setValue(name, value);
		return localStorage.setItem(name, value);
	}

	// 读取脚本头部的 @version（用户脚本管理器通过 GM_info 暴露），面板标题据此显示版本号
	const SCRIPT_VERSION = (() => {
		const pick = (v) => (v === undefined || v === null ? '' : String(v).trim());
		try {
			if (typeof GM_info !== 'undefined' && GM_info && GM_info.script) {
				const v = pick(GM_info.script.version);
				if (v) return v;
			}
		} catch (_) { /* ignore */ }
		try {
			if (typeof GM !== 'undefined' && GM && GM.info && GM.info.script) {
				const v = pick(GM.info.script.version);
				if (v) return v;
			}
		} catch (_) { /* ignore */ }
		try {
			const meta = (typeof GM_info !== 'undefined' && GM_info &&
				(GM_info.scriptMetaStr || (GM_info.script && GM_info.script.metaStr))) || '';
			const m = String(meta).match(/^[ \t]*\/\/[ \t]*@version[ \t]+(\S+)/m);
			if (m && m[1]) return m[1];
		} catch (_) { /* ignore */ }
		return '';
	})();

	function addStyle(css) {
		const styleEl = document.createElement('style');
		styleEl.textContent = css;
		(document.head || document.documentElement).appendChild(styleEl);
		return styleEl;
	}

	function gmRequest(method, url, data) {
		return new Promise((resolve, reject) => {
			GM_xmlhttpRequest({
				method: method || 'GET',
				url: url,
				data: data,
				onload: (res) => {
					if (res.status === 200 || res.status === '200') resolve(res.responseText);
					else reject(new Error('http status ' + res.status));
				},
				onerror: () => reject(new Error('network error')),
			});
		});
	}

	// ============================================================
	// 纯 JS MD5（WBI 签名用，篡改猴环境无 Node crypto）
	// 经典 Mike Reed 实现，已通过标准向量校验
	// ============================================================
	function jsMD5(sMessage) {
		function RotateLeft(lValue, iShiftBits) { return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits)); }
		function AddUnsigned(lX, lY) {
			const lX4 = lX & 0x40000000, lY4 = lY & 0x40000000, lX8 = lX & 0x80000000, lY8 = lY & 0x80000000;
			let r = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
			if (lX4 & lY4) return (r ^ 0x80000000 ^ lX8 ^ lY8);
			if (lX4 | lY4) { if (r & 0x40000000) return (r ^ 0xC0000000 ^ lX8 ^ lY8); return (r ^ 0x40000000 ^ lX8 ^ lY8); }
			return (r ^ lX8 ^ lY8);
		}
		const F = (x, y, z) => (x & y) | (~x & z), G = (x, y, z) => (x & z) | (y & ~z);
		const H = (x, y, z) => x ^ y ^ z, I = (x, y, z) => y ^ (x | ~z);
		function FF(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(F(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b);}
		function GG(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(G(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b);}
		function HH(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(H(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b);}
		function II(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(I(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b);}
		function ConvertToWordArray(s) {
			const len = s.length;
			const nWords = (((len + 8 - ((len + 8) % 64)) / 64) + 1) * 16;
			const words = new Array(nWords - 1);
			let bp = 0;
			for (let bc = 0; bc < len; bc++) {
				const wc = (bc - (bc % 4)) / 4; bp = (bc % 4) * 8;
				words[wc] = (words[wc] | (s.charCodeAt(bc) << bp));
			}
			const wc = (len - (len % 4)) / 4; bp = (len % 4) * 8;
			words[wc] = words[wc] | (0x80 << bp);
			words[nWords - 2] = len << 3; words[nWords - 1] = len >>> 29;
			return words;
		}
		function WordToHex(v) { let o = ''; for (let i = 0; i <= 3; i++) { const b = (v >>> (i * 8)) & 255; o += (b < 16 ? '0' : '') + b.toString(16); } return o; }
		const x = ConvertToWordArray(sMessage);
		let a = 0x67452301, b = 0xEFCDAB89, c = 0x98BADCFE, d = 0x10325476;
		const S11=7,S12=12,S13=17,S14=22,S21=5,S22=9,S23=14,S24=20,S31=4,S32=11,S33=16,S34=23,S41=6,S42=10,S43=15,S44=21;
		for (let k = 0; k < x.length; k += 16) {
			const AA=a,BB=b,CC=c,DD=d;
			a=FF(a,b,c,d,x[k],S11,0xd76aa478);d=FF(d,a,b,c,x[k+1],S12,0xe8c7b756);c=FF(c,d,a,b,x[k+2],S13,0x242070db);b=FF(b,c,d,a,x[k+3],S14,0xc1bdceee);
			a=FF(a,b,c,d,x[k+4],S11,0xf57c0faf);d=FF(d,a,b,c,x[k+5],S12,0x4787c62a);c=FF(c,d,a,b,x[k+6],S13,0xa8304613);b=FF(b,c,d,a,x[k+7],S14,0xfd469501);
			a=FF(a,b,c,d,x[k+8],S11,0x698098d8);d=FF(d,a,b,c,x[k+9],S12,0x8b44f7af);c=FF(c,d,a,b,x[k+10],S13,0xffff5bb1);b=FF(b,c,d,a,x[k+11],S14,0x895cd7be);
			a=FF(a,b,c,d,x[k+12],S11,0x6b901122);d=FF(d,a,b,c,x[k+13],S12,0xfd987193);c=FF(c,d,a,b,x[k+14],S13,0xa679438e);b=FF(b,c,d,a,x[k+15],S14,0x49b40821);
			a=GG(a,b,c,d,x[k+1],S21,0xf61e2562);d=GG(d,a,b,c,x[k+6],S22,0xc040b340);c=GG(c,d,a,b,x[k+11],S23,0x265e5a51);b=GG(b,c,d,a,x[k],S24,0xe9b6c7aa);
			a=GG(a,b,c,d,x[k+5],S21,0xd62f105d);d=GG(d,a,b,c,x[k+10],S22,0x02441453);c=GG(c,d,a,b,x[k+15],S23,0xd8a1e681);b=GG(b,c,d,a,x[k+4],S24,0xe7d3fbc8);
			a=GG(a,b,c,d,x[k+9],S21,0x21e1cde6);d=GG(d,a,b,c,x[k+14],S22,0xc33707d6);c=GG(c,d,a,b,x[k+3],S23,0xf4d50d87);b=GG(b,c,d,a,x[k+8],S24,0x455a14ed);
			a=GG(a,b,c,d,x[k+13],S21,0xa9e3e905);d=GG(d,a,b,c,x[k+2],S22,0xfcefa3f8);c=GG(c,d,a,b,x[k+7],S23,0x676f02d9);b=GG(b,c,d,a,x[k+12],S24,0x8d2a4c8a);
			a=HH(a,b,c,d,x[k+5],S31,0xfffa3942);d=HH(d,a,b,c,x[k+8],S32,0x8771f681);c=HH(c,d,a,b,x[k+11],S33,0x6d9d6122);b=HH(b,c,d,a,x[k+14],S34,0xfde5380c);
			a=HH(a,b,c,d,x[k+1],S31,0xa4beea44);d=HH(d,a,b,c,x[k+4],S32,0x4bdecfa9);c=HH(c,d,a,b,x[k+7],S33,0xf6bb4b60);b=HH(b,c,d,a,x[k+10],S34,0xbebfbc70);
			a=HH(a,b,c,d,x[k+13],S31,0x289b7ec6);d=HH(d,a,b,c,x[k],S32,0xeaa127fa);c=HH(c,d,a,b,x[k+3],S33,0xd4ef3085);b=HH(b,c,d,a,x[k+6],S34,0x04881d05);
			a=HH(a,b,c,d,x[k+9],S31,0xd9d4d039);d=HH(d,a,b,c,x[k+12],S32,0xe6db99e5);c=HH(c,d,a,b,x[k+15],S33,0x1fa27cf8);b=HH(b,c,d,a,x[k+2],S34,0xc4ac5665);
			a=II(a,b,c,d,x[k],S41,0xf4292244);d=II(d,a,b,c,x[k+7],S42,0x432aff97);c=II(c,d,a,b,x[k+14],S43,0xab9423a7);b=II(b,c,d,a,x[k+5],S44,0xfc93a039);
			a=II(a,b,c,d,x[k+12],S41,0x655b59c3);d=II(d,a,b,c,x[k+3],S42,0x8f0ccc92);c=II(c,d,a,b,x[k+10],S43,0xffeff47d);b=II(b,c,d,a,x[k+1],S44,0x85845dd1);
			a=II(a,b,c,d,x[k+8],S41,0x6fa87e4f);d=II(d,a,b,c,x[k+15],S42,0xfe2ce6e0);c=II(c,d,a,b,x[k+6],S43,0xa3014314);b=II(b,c,d,a,x[k+13],S44,0x4e0811a1);
			a=II(a,b,c,d,x[k+4],S41,0xf7537e82);d=II(d,a,b,c,x[k+11],S42,0xbd3af235);c=II(c,d,a,b,x[k+2],S43,0x2ad7d2bb);b=II(b,c,d,a,x[k+9],S44,0xeb86d391);
			a=AddUnsigned(a,AA);b=AddUnsigned(b,BB);c=AddUnsigned(c,CC);d=AddUnsigned(d,DD);
		}
		return (WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d)).toLowerCase();
	}

	// ============================================================
	// WBI 签名模块（B站 Web API 风控签名）
	// 算法来源：bilibili-API-collect 文档，已用官方样例校验
	// ============================================================
	const WBI_MIXIN_TAB = [
		46,47,18,2,53,8,23,32,15,50,10,31,58,3,45,35,
		27,43,5,49,33,9,42,19,29,28,14,39,12,38,41,13,
		37,48,7,16,24,55,40,61,26,17,0,1,60,51,30,4,
		22,25,54,21,56,59,6,63,57,62,11,36,20,34,44,52,
	];
	const NAV_API = 'https://api.bilibili.com/x/web-interface/nav';
	let wbiCache = null; // { imgKey, subKey, expire }

	function getWbiKeys() {
		if (wbiCache && Date.now() < wbiCache.expire) return Promise.resolve(wbiCache);
		return gmRequest('GET', NAV_API).then((text) => {
			let json = null;
			try { json = JSON.parse(text); } catch (_) { throw new Error('nav parse error'); }
			const wbi = json && json.data && json.data.wbi_img;
			if (!wbi || !wbi.img_url || !wbi.sub_url) throw new Error('wbi key missing');
			const imgKey = wbi.img_url.split('/').pop().split('.')[0];
			const subKey = wbi.sub_url.split('/').pop().split('.')[0];
			if (!/^[0-9a-zA-Z]{32}$/.test(imgKey) || !/^[0-9a-zA-Z]{32}$/.test(subKey)) {
				throw new Error('wbi key format error');
			}
			wbiCache = { imgKey: imgKey, subKey: subKey, expire: Date.now() + 6 * 3600 * 1000 };
			return wbiCache;
		});
	}

	function getMixinKey(imgKey, subKey) {
		const raw = imgKey + subKey;
		let s = '';
		for (let i = 0; i < WBI_MIXIN_TAB.length; i++) s += raw[WBI_MIXIN_TAB[i]] || '';
		return s.substring(0, 32);
	}

	// 对参数对象签名，返回带 wts/w_rid 的 query 字符串（参数值用 encodeURIComponent 编码）
	function encWbi(params, keys) {
		const mixinKey = getMixinKey(keys.imgKey, keys.subKey);
		const p = Object.assign({}, params);
		p.wts = Math.floor(Date.now() / 1000);
		const rawQuery = Object.keys(p).sort().map((k) => {
			const v = String(p[k]).replace(/[!'()*]/g, '');
			return k + '=' + encodeURIComponent(v);
		}).join('&');
		const wRid = jsMD5(rawQuery + mixinKey);
		return rawQuery + '&w_rid=' + wRid;
	}

	// 带 WBI 签名的 GET 请求
	function wbiGet(api, params) {
		return getWbiKeys().then((keys) => {
			const query = encWbi(params, keys);
			return gmRequest('GET', api + '?' + query);
		});
	}

	function isPC() {
		return !/Android|iPhone|SymbianOS|Windows Phone|iPad|iPod/i.test(navigator.userAgent);
	}
	function getSystemOS() {
		const u = navigator.userAgent;
		if (/Windows/i.test(u)) return 'windows';
		if (/Macintosh|MacIntel/i.test(u)) return 'macOS';
		if (/iPhone|iPad/i.test(u)) return 'ios';
		if (/Android/i.test(u)) return 'android';
		return 'other';
	}
	function currentBv() {
		const pathname = window.location.pathname;
		if (pathname.indexOf('/medialist/play/watchlater/') !== -1) {
			return pathname.replace('/medialist/play/watchlater/', '').split('/')[0] || '';
		}
		const m = pathname.match(/\/video\/(BV[0-9A-Za-z]+)/);
		return m ? m[1] : '';
	}

	let toastCssInjected = false;
	function webToast(params) {
		if (!toastCssInjected) {
			toastCssInjected = true;
			addStyle(`
				@keyframes shx-fade-in{0%{opacity:0}100%{opacity:1}}
				@keyframes shx-fade-out{0%{opacity:1}100%{opacity:0}}
				.web-toast-kkli9{
					position:fixed; background:rgba(0,0,0,.7); color:#fff;
					font-size:14px; line-height:1; padding:10px; border-radius:3px;
					left:50%; transform:translateX(-50%);
					z-index:999999999; white-space:nowrap;
				}
				.web-toast-kkli9.shx-in{animation:shx-fade-in .5s}
				.web-toast-kkli9.shx-out{animation:shx-fade-out .5s}
			`);
		}
		const el = document.createElement('div');
		el.className = 'web-toast-kkli9 shx-in';
		if (params.message !== undefined && params.message !== null) el.textContent = String(params.message);
		if (params.background) el.style.backgroundColor = params.background;
		if (params.color) el.style.color = params.color;
		el.style.top = '50px';
		el.style.bottom = '';
		document.body.appendChild(el);

		const remove = () => {
			if (el.parentNode) el.parentNode.removeChild(el);
		};
		const delay = params.time || 1500;
		const finish = () => {
			el.classList.remove('shx-in');
			el.classList.add('shx-out');
		};
		el.addEventListener('animationend', remove, { once: true });
		setTimeout(() => { finish(); setTimeout(remove, 600); }, delay);
	}

	function cleanFileName(name, maxLen) {
		let n = (name || String(Date.now()));
		n = n.replace(/[\s\~`=|\\;:"',.><\/]/g, '');
		return n.substring(0, maxLen || 100) + '.mp4';
	}

	// ============================================================
	// 全局功能开关 + 设置弹框
	// ============================================================
	const SETTING_KEY = 'setingData';
	let settings = gmGet(SETTING_KEY, null);
	if (!settings || typeof settings !== 'object') settings = { bilibiliHelper: true };
	if (typeof settings.bilibiliHelper !== 'boolean') {
		settings.bilibiliHelper = true;
		gmSet(SETTING_KEY, settings);
	}

	const dialog = (() => {
		let handle = null;
		function close() {
			if (!handle) return;
			if (handle.mask.parentNode) handle.mask.parentNode.removeChild(handle.mask);
			document.removeEventListener('keydown', handle.onKey);
			handle = null;
		}
		function open(param) {
			close();
			const isStr = typeof param === 'string';
			const opts = isStr ? { title: param } : (param || {});

			const mask = document.createElement('div');
			const content = document.createElement('div');
			const head = document.createElement('div');
			const titleEl = document.createElement('span');
			const closeBtn = document.createElement('span');
			const body = document.createElement('div');

			Object.assign(mask.style, {
				width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,.6)',
				position: 'fixed', left: '0', top: '0', zIndex: 9999999999,
			});
			Object.assign(content.style, {
				maxWidth: '450px', width: '100%', maxHeight: '600px', backgroundColor: '#fff',
				boxShadow: '0 0 2px #999', position: 'absolute', left: '50%', top: '50%',
				transform: 'translate(-50%,-50%)', borderRadius: '5px',
			});
			Object.assign(head.style, {
				width: '100%', height: '40px', lineHeight: '40px', boxSizing: 'border-box',
				backgroundColor: '#dedede', color: '#000', textAlign: 'center',
				fontWeight: '700', fontSize: '17px', borderRadius: '4px 4px 0 0', position: 'relative',
			});
			Object.assign(closeBtn.style, {
				textDecoration: 'none', color: '#000', position: 'absolute', right: '10px',
				top: '0', fontSize: '25px', cursor: 'pointer', userSelect: 'none',
			});
			Object.assign(body.style, { padding: '15px', maxHeight: '400px', overflowY: 'auto' });

			titleEl.textContent = opts.title || '默认标题';
			closeBtn.textContent = '×';
			body.innerHTML = opts.content || '';
			head.appendChild(titleEl);
			head.appendChild(closeBtn);
			content.appendChild(head);
			content.appendChild(body);
			mask.appendChild(content);
			document.body.appendChild(mask);

			handle = {
				mask, content: body, close,
				onKey: (e) => { if (e.key === 'Escape') close(); },
			};
			document.addEventListener('keydown', handle.onKey);

			closeBtn.addEventListener('click', () => {
				close();
				if (typeof opts.onClose === 'function') opts.onClose();
			});
			if (typeof opts.onContentReady === 'function') {
				opts.onContentReady({ content: body, dialog: handle });
			}
			return handle;
		}
		return { open, close };
	})();

	function usersSeting() {
		const rows = [{
			tag: 'bilibiliHelper',
			name: 'B站使用加强(视频下载支持批量、浏览记录、一键三连)',
			checked: !!settings.bilibiliHelper,
		}];
		const html = rows.map((one) => `
			<div style="padding:5px 0">
				<input style="width:15px;height:15px;vertical-align:middle;margin-bottom:3px;cursor:pointer"
					type="checkbox" data-tag="${one.tag}" ${one.checked ? 'checked' : ''}>
				<label style="font-size:14px;margin:3px 0;vertical-align:middle;font-weight:500;color:#000">${one.name}</label>
			</div>`).join('');

		dialog.open({
			title: '功能开关',
			content: html,
			onClose: () => { try { location.reload(); } catch (_) {} },
			onContentReady: (api) => {
				$$('input[type="checkbox"]', api.content).forEach((checkbox) => {
					checkbox.addEventListener('click', (e) => {
						settings[e.target.getAttribute('data-tag')] = e.target.checked;
						gmSet(SETTING_KEY, settings);
						webToast({ message: '操作成功', background: '#FF4D40' });
					});
				});
			},
		});
	}

	// ============================================================
	// B站增强：视频下载 / 一键三连 / 浏览记录 / 简介转链接
	// ============================================================
	const VIEW_API = 'https://api.bilibili.com/x/web-interface/view';
	const PLAYURL_API = 'https://api.bilibili.com/x/player/playurl';
	const DOWNLOAD_SETTING_KEY = 'download_setting_key';
	const RECORD_KEY = 'bilibili_video_record';
	const DEFAULT_DOWNLOAD_SETTING = () => ({
		RPCURL: 'ws://localhost:16800/jsonrpc',
		savePath: getSystemOS() === 'macOS' ? '' : 'D:/',
		RPCToken: '',
		downloadWay: 'Motrix',
		passCookie: false,   // 安全默认：不向 aria2 传递 Cookie
		qn: 112,             // 请求清晰度（受账号权限限制，实际以服务端返回为准）
		videoFormat: 'mp4',  // 下载格式：mp4 / flv / dash
	});
	const URL_REG = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?/g;

	function startBilibiliHelper() {
		const host = window.location.host;
		const pathname = window.location.pathname;
		const onVideoPage = host === 'www.bilibili.com' &&
			(pathname.indexOf('/video') !== -1 || pathname.indexOf('/watchlater') !== -1);
		const onSpacePage = host === 'space.bilibili.com' && /^\/\d+/.test(pathname);

		if (onVideoPage) initVideoToolbar();
		if (onSpacePage) initSpaceToolbar();
		initRecordView();
		initTextToLink();
	}
	// ============================================================
	// UP主全部视频下载（space.bilibili.com）
	// 分页拉取投稿列表（WBI 签名）→ 逐视频解析分P → 复用下载弹框推送 aria2
	// ============================================================
	const SPACE_SEARCH_API = 'https://api.bilibili.com/x/space/wbi/arc/search';

	// 从 space 页面路径解析目标 UID
	function currentUid() {
		const m = window.location.pathname.match(/^\/(\d+)/);
		return m ? m[1] : '';
	}

	// 分页拉取 UP主全部视频（每页 50，按发布时间）
	// onProgress(page, got, total) 用于回传进度
	function fetchSpaceVideos(uid, onProgress) {
		const ps = 50;
		let pn = 1;
		let count = Infinity;
		const all = [];
		const fetchPage = () => {
			const params = {
				mid: uid,
				ps: ps,
				pn: pn,
				order: 'pubdate',
				platform: 'web',
				web_location: '1550101',
			};
			return wbiGet(SPACE_SEARCH_API, params).then((text) => {
				let json = null;
				try { json = JSON.parse(text); } catch (_) { /* ignore */ }
				if (!json || json.code !== 0 || !json.data || !json.data.list) {
					throw new Error((json && json.message) || 'space api error');
				}
				const vlist = (json.data.list && json.data.list.vlist) || [];
				count = (json.data.page && json.data.page.count) || vlist.length;
				all.push.apply(all, vlist);
				if (typeof onProgress === 'function') onProgress(pn, all.length, count);
				if (vlist.length < ps || all.length >= count) return all;
				pn++;
				// 每页间轻微延时，降低触发风控的概率
				return delay(300).then(fetchPage);
			});
		};
		return fetchPage();
	}

	// 把投稿列表条目（含 bvid）解析为下载 model：
	// 对每个 bvid 调 view 拿 aid/pages，展开为 plain parts。
	// onProgress(done, total) 回传解析进度。
	function buildSpaceModel(vlist, onProgress) {
		const jobs = vlist.filter((v) => v && v.bvid).map((v) => ({ bvid: v.bvid, title: v.title || '' }));
		return mapLimit(jobs, 4, (job) => {
			return gmRequest('GET', VIEW_API + '?bvid=' + job.bvid).then((text) => {
				let json = null;
				try { json = JSON.parse(text); } catch (_) { /* ignore */ }
				if (!json || json.code !== 0 || !json.data) return [];
				const d = json.data;
				const aid = d.aid;
				const pages = Array.isArray(d.pages) && d.pages.length
					? d.pages
					: [{ cid: d.cid, page: 1, part: d.title || job.title }];
				return pages.map((p) => ({
					aid: aid,
					cid: p.cid,
					page: p.page || 1,
					part: p.part || job.title || '',
					videoTitle: d.title || job.title || '',
				}));
			}).catch(() => []);
		}).then((groups) => {
			const parts = [];
			groups.forEach((g) => parts.push.apply(parts, g));
			if (typeof onProgress === 'function') onProgress(jobs.length, jobs.length);
			return { kind: 'plain', parts: parts };
		});
	}

	// space 页面左侧挂件
	function initSpaceToolbar() {
		const uid = currentUid();
		if (!uid) return;
		const old = $('[id^="bilibili_space_ext_"]');
		if (old && old.parentNode) old.parentNode.removeChild(old);

		const sUid = rid();
		const container = document.createElement('div');
		container.id = 'bilibili_space_ext_' + sUid;
		container.innerHTML = '<div class="self_s_btn" id="space_dl_' + sUid + '">下载UP主视频</div>';
		document.body.appendChild(container);
		addStyle(`
			#bilibili_space_ext_${sUid}{position:fixed;left:0;top:250px;z-index:9999}
			#bilibili_space_ext_${sUid} .self_s_btn{
				background-color:#FB7299;color:#fff;font-size:12px;border-radius:3px;
				cursor:pointer;padding:6px 10px;
			}
			#bilibili_space_ext_${sUid} .self_s_btn[disabled]{opacity:.5;cursor:wait}
		`);

		const modal = buildDownloadModal('sp' + sUid);
		document.body.appendChild(modal.mask);
		document.body.appendChild(modal.body);
		const btn = $('#space_dl_' + sUid, container);

		btn.addEventListener('click', () => {
			btn.disabled = true;
			btn.textContent = '拉取中…';
			fetchSpaceVideos(uid, (page, got, total) => {
				btn.textContent = '已拉取 ' + got + '/' + (isFinite(total) ? total : '?');
			}).then((vlist) => {
				if (!vlist.length) {
					webToast({ message: '未获取到视频，可能需要登录或触发风控', background: '#FF4D40', time: 4000 });
					return null;
				}
				btn.textContent = '解析 ' + vlist.length + ' 个视频…';
				return buildSpaceModel(vlist, (done, total) => {
					btn.textContent = '解析 ' + done + '/' + total;
				});
			}).then((model) => {
				if (model && model.parts && model.parts.length) {
					modal.show(model, '', 'UP主 ' + uid + ' 的全部视频（' + model.parts.length + ' 个分P）');
				}
			}).catch((err) => {
				webToast({ message: '拉取失败：' + (err && err.message ? err.message : '未知错误'), background: '#FF4D40', time: 5000 });
			}).then(() => {
				btn.disabled = false;
				btn.textContent = '下载UP主视频';
			});
		});
	}

	// ---------------- 视频下载 / 一键三连 ----------------
	function initVideoToolbar() {
		const old = $('[id^="bilibili_exti_"]');
		if (old && old.parentNode) old.parentNode.removeChild(old);

		const uid = rid();
		const container = document.createElement('div');
		container.id = 'bilibili_exti_' + uid;
		container.className = 'shx-bili-toolbar';
		container.innerHTML = `
			<div class="self_s_btn" id="download_s_${uid}">下载视频</div>
			<div class="self_s_btn" id="focus_s_${uid}">一键三连</div>`;
		document.body.appendChild(container);

		const modal = buildDownloadModal(uid);
		document.body.appendChild(modal.mask);
		document.body.appendChild(modal.body);

		container.addEventListener('mouseenter', () => {
			container.style.left = '0px';
			container.style.opacity = '1';
		});
		container.addEventListener('mouseleave', () => {
			container.style.left = '-' + Math.max(0, (container.offsetWidth || 60) / 2) + 'px';
			container.style.opacity = '0.6';
		});

		$('#focus_s_' + uid, container).addEventListener('click', () => {
			const bar = $('#arc_toolbar_report');
			const like = $('.video-like', bar);
			const coin = $('.video-coin', bar);
			if (like) like.click();
			if (coin) coin.click();
		});

		const downloadBtn = $('#download_s_' + uid, container);
		downloadBtn.addEventListener('click', () => {
			downloadBtn.disabled = true;
			downloadBtn.textContent = '准备中~';
			prepareDownloadPages()
				.then((result) => {
					if (result.status === 'success') {
						const { model, pic, title } = result.downloadData;
						modal.show(model, pic, title);
					}
				})
				.catch(() => { /* ignore */ })
				.then(() => {
					downloadBtn.disabled = false;
					downloadBtn.textContent = '下载视频';
				});
		});

		addStyle(`
			.shx-bili-toolbar{
				position:fixed; left:-30px; top:250px; opacity:.6; transition:.3s; z-index:9999;
			}
			.shx-bili-toolbar .self_s_btn{
				background-color:#FB7299; color:#FFF; font-size:12px; border-radius:3px;
				cursor:pointer; margin:10px 0; width:64px; height:22px; text-align:center;
				line-height:22px;
			}
			.shx-bili-toolbar .self_s_btn[disabled]{ opacity:.5; cursor:wait; }
		`);
	}

	function normalizeSeason(data) {
		const aid = data.aid;
		const sections = (data.ugc_season && data.ugc_season.sections) || [];
		const episodes = [];
		const secCount = sections.length;
		sections.forEach((section, si) => {
			const secTitle = section.title || '';
			const useSec = secCount > 1 && !!secTitle;
			(section.episodes || []).forEach((ep, ei) => {
				let pages = [];
				if (Array.isArray(ep.pages) && ep.pages.length) {
					pages = ep.pages.map((p) => ({ aid: ep.aid, cid: p.cid, page: p.page || 1, part: p.part || '' }));
				} else if (ep.cid) {
					pages = [{ aid: ep.aid, cid: ep.cid, page: (ep.page && ep.page.page) || 1, part: (ep.page && ep.page.part) || '' }];
				}
				if (ep.aid === aid && !pages.length && Array.isArray(data.pages) && data.pages.length) {
					pages = data.pages.map((p) => ({ aid: aid, cid: p.cid, page: p.page || 1, part: p.part || '' }));
				}
				if (!pages.length) return;
				const base = '第' + (ei + 1) + '集';
				episodes.push({
					label: useSec ? secTitle + '·' + base : base,
					title: ep.title || (ep.arc && ep.arc.title) || '',
					aid: ep.aid,
					pages: pages,
				});
			});
		});
		return { title: (data.ugc_season && data.ugc_season.title) || '', episodes: episodes };
	}

	function buildDownloadModal(uid) {
		const CSS = `
			.modal-mask-${uid}{
				position:fixed; top:0; left:0; z-index:999; width:100%; height:100%;
				display:none; background-color:#000; opacity:.3;
			}
			.modal-body-${uid}{
				position:fixed; border-radius:5px; background:#fff; top:10%; width:600px;
				max-width:90%; max-height:80%; z-index:1000; left:50%;
				transform:translateX(-50%); display:none; padding:0; overflow:hidden;
				box-sizing:border-box; flex-direction:column;
			}
			.modal-body-${uid} .page-header{
				flex:0 0 auto; height:38px; min-height:38px; box-sizing:border-box; margin:0;
				display:flex; flex-direction:row; align-items:center; gap:8px;
				padding:0 8px 0 12px; border:0; background:#FB7299; color:#fff;
				border-radius:5px 5px 0 0; position:relative; overflow:hidden;
				cursor:move; user-select:none; touch-action:none;
			}
			.modal-body-${uid} .page-header>.page-title{
				flex:0 1 auto; min-width:0; max-width:100%;
				font-size:16px; font-weight:bold; color:#fff; line-height:1.2;
				white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
			}
			.modal-body-${uid} .page-header>.close{
				flex:0 0 auto; width:20px; height:20px; box-sizing:border-box;
				display:inline-block; line-height:20px; text-align:center;
				border-radius:3px; background:rgba(255,255,255,.28); color:#fff;
				font-size:16px; font-weight:400; cursor:pointer; user-select:none;
			}
			.modal-body-${uid} .page-header>.close:hover{background:rgba(255,255,255,.45)}
			.modal-body-${uid} .page-container{
				flex:1 1 auto; min-height:0; max-height:none;
				overflow-y:auto; overflow-x:hidden;
				box-sizing:border-box; padding:10px 10px 18px;
			}
			.modal-body-${uid} .page-wrap{display:flex;flex-wrap:wrap;margin-top:5px}
			.modal-body-${uid} .page-wrap>.board-item{
				display:block;width:calc(50% - 10px);background:#FB7299;color:#fff;
				margin:5px;cursor:pointer;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;
				border-radius:3px;
			}
			.modal-body-${uid} .page-wrap>.board-item input{
				width:14px;height:14px;vertical-align:middle;margin-right:5px;
			}
			.modal-body-${uid} .page-wrap>.board-item>span{vertical-align:middle;display:inline-block;max-width:78%;overflow:hidden;text-overflow:ellipsis}
			.modal-body-${uid} .page-wrap>.board-item .ep-badge{
				display:inline-block;vertical-align:middle;margin-left:4px;padding:0 4px;border-radius:3px;
				font-size:10px;color:#FB7299;background:#fff;
			}
			.modal-body-${uid} .modal-btn-wrap{text-align:center;margin-top:10px;cursor:pointer}
			.modal-body-${uid} .modal-btn-wrap>span{
				border:1px solid #ccc;display:inline-block;padding:3px 8px;margin:0 5px;border-radius:3px;
			}
			.modal-body-${uid} .dl-select-bar{
				display:flex;align-items:center;gap:12px;position:sticky;top:0;z-index:2;
				padding:6px 10px;margin-top:8px;background:#fafafa;border:1px solid #eee;
				border-radius:4px;font-size:13px;color:#555;
			}
			.modal-body-${uid} .dl-select-bar .dl-master{
				display:inline-flex;align-items:center;gap:5px;cursor:pointer;user-select:none;
			}
			.modal-body-${uid} .dl-select-bar .dl-master input{
				width:15px;height:15px;vertical-align:middle;cursor:pointer;
			}
			.modal-body-${uid} .dl-select-bar .dl-count{color:#FB7299;font-weight:600}
			.modal-body-${uid} .dl-scope{
				display:flex;align-items:center;gap:14px;flex-wrap:wrap;
				padding:6px 10px;margin-top:6px;background:#fff;border:1px dashed #eee;
				border-radius:4px;font-size:13px;color:#555;
			}
			.modal-body-${uid} .dl-scope label{display:inline-flex;align-items:center;gap:4px;cursor:pointer;user-select:none}
			.modal-body-${uid} .dl-scope input{margin:0}
			.modal-body-${uid} .dl-current{margin:6px 10px 0}
			.modal-body-${uid} .dl-current .dl-current-btn{
				display:inline-flex; align-items:center; gap:6px; max-width:100%;
				background:#FB7299; color:#fff; border:none; border-radius:4px;
				padding:7px 14px; font-size:13px; cursor:pointer; user-select:none;
			}
			.modal-body-${uid} .dl-current .dl-current-btn:hover{filter:brightness(.96)}
			.modal-body-${uid} .dl-current .dl-current-name{
				display:inline-block; overflow:hidden; text-overflow:ellipsis;
				white-space:nowrap; max-width:280px; vertical-align:bottom;
			}
			.modal-body-${uid} .board-item.dl-cur{box-shadow:0 0 0 2px #fff inset, 0 0 0 4px #ff97b0}
			.modal-body-${uid} .dl-prefix{
				display:flex;align-items:center;gap:8px;flex-wrap:wrap;
				margin:6px 10px 0;padding:6px 10px;background:#fff;
				border:1px dashed #eee;border-radius:4px;font-size:13px;color:#555;
			}
			.modal-body-${uid} .dl-prefix input{
				flex:1;min-width:160px;max-width:280px;height:24px;padding:0 8px;
				border:1px solid #ccc;border-radius:4px;outline:none;
			}
			.modal-body-${uid} .dl-prefix .tip{color:#999;font-size:12px}
			.modal-body-${uid} .aria2-setting{
				border:1px dashed #F1F1F1;border-radius:4px;margin-top:6px;padding:4px 8px;
			}
			/* 配置区：整块居中、行内左对齐、控件宽度随面板自动伸缩 */
			.modal-body-${uid} .setting-item{
				display:grid; grid-template-columns:82px minmax(0,1fr); align-items:center; gap:4px 8px;
				width:100%; max-width:680px; margin:5px auto; box-sizing:border-box;
				text-align:left; font-size:13px; line-height:1.4;
			}
			.modal-body-${uid} .setting-item-full{display:flex; flex-wrap:wrap; align-items:center; gap:6px}
			.modal-body-${uid} .setting-item .topic-name{
				grid-column:1; display:block; width:auto; text-align:left;
				white-space:nowrap; color:#555;
			}
			.modal-body-${uid} .setting-item>input{
				grid-column:2; width:100%; min-width:0; box-sizing:border-box;
				padding:0 10px; border:1px solid #888; outline:none; border-radius:3px; height:24px;
			}
			.modal-body-${uid} .setting-item select{
				grid-column:2; width:100%; min-width:0; box-sizing:border-box;
				padding:1px 6px; border:1px solid #888; outline:none; border-radius:3px; height:24px;
				background:#fff; color:#333; font-size:13px;
			}
			.modal-body-${uid} .setting-item>*:not(.topic-name){grid-column:2}
			.modal-body-${uid} .format-hint{font-size:12px;color:#888;display:block;margin-top:2px}
			.modal-body-${uid} .merge-box{
				display:none;margin:8px 10px;padding:8px;border:1px solid #eee;border-radius:4px;background:#fcfcfc;
			}
			.modal-body-${uid} .merge-box .merge-title{font-size:13px;font-weight:bold;color:#FB7299;margin-bottom:5px}
			.modal-body-${uid} .merge-box textarea{
				width:100%;height:56px;box-sizing:border-box;font-size:12px;color:#333;
				border:1px solid #ddd;border-radius:3px;resize:vertical;
			}
			.modal-body-${uid} .merge-box .merge-actions{text-align:right;margin-top:4px}
			.modal-body-${uid} .merge-box button{
				background:#FB7299;color:#fff;border:none;border-radius:3px;
				padding:3px 10px;font-size:12px;cursor:pointer;
			}
			.modal-body-${uid} .tip-wrap{margin-top:10px;font-size:12px}
			.modal-body-${uid} .tip-wrap>.title{font-size:16px;font-weight:bold}
			.modal-body-${uid} .tip-wrap>.content>ul>li{margin-top:5px;line-height:1.6}
			.modal-body-${uid} .dl-version{
				flex:0 0 auto; align-self:center; margin:0;
				font-size:12px; font-weight:400; line-height:1;
				color:rgba(255,255,255,.78); white-space:nowrap;
			}
			.modal-body-${uid} .dl-version:empty{display:none}
			.modal-body-${uid} .modal-tools{
				flex:0 0 auto; margin-left:auto; position:static; height:auto;
				display:flex; align-items:center; gap:5px;
			}
			.modal-body-${uid} .modal-tools .tool-btn{
				width:20px; height:20px; line-height:20px; box-sizing:border-box;
				text-align:center; border-radius:3px;
				background:rgba(255,255,255,.28); color:#fff;
				font-size:13px; font-weight:400; cursor:pointer; user-select:none;
			}
			.modal-body-${uid} .modal-tools .tool-btn:hover{background:rgba(255,255,255,.45); color:#fff}
			.modal-body-${uid} .modal-resize{
				position:absolute;right:0;bottom:0;width:18px;height:18px;z-index:6;
				cursor:nwse-resize;touch-action:none;
				background:
					linear-gradient(135deg,transparent 44%,#c8c8c8 44%,#c8c8c8 52%,transparent 52%),
					linear-gradient(135deg,transparent 62%,#c8c8c8 62%,#c8c8c8 70%,transparent 70%);
			}
			.modal-body-${uid}.is-collapsed{min-height:0}
			.modal-body-${uid}.is-collapsed .page-container{display:none}
			.modal-body-${uid}.is-collapsed .modal-resize{display:none}
		`;
		addStyle(CSS);

		const mask = document.createElement('div');
		mask.className = 'modal-mask-' + uid;
		const body = document.createElement('div');
		body.className = 'modal-body-' + uid;
		body.innerHTML = `
			<div class="page-header">
				<span class="page-title">视频下载(可批量)</span>
				<span class="close" title="关闭">&times;</span>
			</div>
			<div class="page-container">
				<label style="color:red;font-size:12px">注：此功能会调用bilibili的API，脚本仅用于个人交流，切勿用于商业用途，否则后果自负，特此申明！</label>
				<div class="dl-select-bar" title="选集很多时可在这里一键全选">
					<label class="dl-master"><input type="checkbox" name="dlMaster"> 全选</label>
					<span class="dl-count"></span>
				</div>
				<div class="dl-scope" style="display:none">
					<span>下载范围：</span>
					<label><input type="radio" name="dlScope" value="episode" checked> 按集下载(合集)</label>
					<label><input type="radio" name="dlScope" value="part"> 下载全部P</label>
				</div>
				<div class="dl-current" style="display:none">
					<button type="button" class="dl-current-btn" name="dlCurrent">◎ 下载当前集：<span class="dl-current-name"></span></button>
				</div>
				<div class="dl-prefix" style="display:none">
					<label for="dlPrefix">文件名前缀(合集名)：</label>
					<input type="text" id="dlPrefix" name="dlPrefix" placeholder="默认使用合集标题，可自行修改">
					<span class="tip">示例：【前缀】第3集 标题 P1 分P标题</span>
				</div>
				<div class="page-wrap"></div>
				<div class="aria2-setting">
					<div class="setting-item setting-item-full">
						<span><input type="radio" name="downloadWay" value="Motrix">Motrix下载</span>&nbsp;&nbsp;&nbsp;
						<span><input type="radio" name="downloadWay" value="AriaNgGUI">AriaNgGUI下载</span>
					</div>
					<div class="setting-item">
						<label class="topic-name">配置RPC:</label>
						<input type="text" name="RPCURL" placeholder="请准确输入RPC对应软件的地址，默认：Motrix">
					</div>
					<div class="setting-item">
						<label class="topic-name">配置Token:</label>
						<input type="text" name="RPCToken" placeholder="默认无需填写">
					</div>
					<div class="setting-item">
						<label class="topic-name">保存路径:</label>
						<input type="text" name="savePath" placeholder="请准确输入文件保存路径">
						<div style="font-size:12px;color:#888">最好自定义下载地址，默认地址可能不满足需要</div>
					</div>
					<div class="setting-item">
						<label class="topic-name">清晰度:</label>
						<select name="qn">
							<option value="112">1080P60（需大会员）</option>
							<option value="80">1080P（需登录）</option>
							<option value="64">720P</option>
							<option value="32">480P</option>
							<option value="16">360P</option>
						</select>
					</div>
					<div class="setting-item">
						<label class="topic-name">下载格式:</label>
						<select name="videoFormat">
							<option value="mp4">MP4（durl 合流，aria2 直接下载）</option>
							<option value="flv">FLV（durl 合流，服务器返回啥存啥）</option>
							<option value="dash">DASH（音视频分离，需本地合并）</option>
						</select>
						<span class="format-hint">MP4/FLV 为音视频合一直链；DASH 会分别下载视频流与音频流并生成 ffmpeg 合并命令</span>
					</div>
					<div class="merge-box" name="mergeBox">
						<div class="merge-title">DASH 视频合并命令（下载完成后在本地执行）</div>
						<textarea name="mergeCmd" readonly placeholder="选择 DASH 格式并下载后，这里会生成 ffmpeg 合并命令"></textarea>
						<div class="merge-actions"><button type="button" name="copyMerge">复制命令</button></div>
					</div>
					<div class="setting-item" style="color:#c33">
						<label class="topic-name">安全:</label>
						<label style="cursor:pointer">
							<input type="checkbox" name="passCookie"> 向 aria2 传递 Cookie（仅高画质需要；会在本地 RPC 参数中出现，注意风险）
						</label>
					</div>
				</div>
				<div class="modal-btn-wrap">
					<span name="selectall">全选</span>
					<span name="removeSelect">取消选择</span>
					<span name="downloadAll">批量下载</span>
				</div>
				<div class="tip-wrap">
					<div class="title">关于下载：</div>
					<div class="content"><ul>
						<li>1、<b>合集</b>视频可先在上方选择范围：「按集下载(合集)」整集勾选（该集含多个分P会一起下）或「下载全部P」单独挑选</li>
						<li>2、点击单个分P标题可浏览器直接打开；批量下载请先打开
							<a target="_blank" href="https://motrix.app/zh-CN/">Motrix</a> 或
							<a target="_blank" href="https://github.com/Xmader/aria-ng-gui">AriaNgGUI</a>，
							单集也推荐使用 <a target="_blank" href="https://github.com/nilaoda/BBDown">BBDown</a></li>
						<li>3、Motrix 默认 RPC：ws://localhost:16800/jsonrpc；Aria2 默认 RPC：ws://localhost:6800/jsonrpc；点击"批量下载"会自动保存当前下载设置</li>
					</ul></div>
				</div>
			</div>`;

		const pageWrap = $('.page-wrap', body);
		const closeBtn = $('.page-header .close', body);
		const masterBox = $('input[name="dlMaster"]', body);
		const countEl = $('.dl-count', body);
		const scopeRow = $('.dl-scope', body);
		const scopeRadios = $$('input[name="dlScope"]', body);
		const currentWrap = $('.dl-current', body);
		const currentBtn = $('[name="dlCurrent"]', body);
		const currentNameEl = $('.dl-current-name', body);
		const prefixWrap = $('.dl-prefix', body);
		const prefixInput = $('input[name="dlPrefix"]', body);

		// ============================================================
		// 面板：版本号（取脚本 @version）+ 自由拖动 + 折叠 / 展开 + 双击最大化
		// ============================================================
		const headerEl = $('.page-header', body);
		const headerTitleEl = $('.page-header > .page-title', body);
		if (headerTitleEl && SCRIPT_VERSION) {
			const verEl = document.createElement('span');
			verEl.className = 'dl-version';
			verEl.textContent = 'v' + SCRIPT_VERSION;
			verEl.title = 'Version ' + SCRIPT_VERSION;
			headerEl.insertBefore(verEl, closeBtn);
		}

				const PANEL_RECT_KEY = 'bilibili_dl_panel_rect';
		const PANEL_MIN_W = 380;
		const PANEL_MIN_H = 300;
		const PANEL_HEADER_H = 38;          // 与 CSS 中 .page-header 的 height 保持一致
		const ICON_COLLAPSE = '\u2212';
		const ICON_EXPAND = '\u002B';

		const toolsEl = document.createElement('div');
		toolsEl.className = 'modal-tools';
		toolsEl.innerHTML =
			'<span class="tool-btn" data-act="collapse" title="折叠">' + ICON_COLLAPSE + '</span>';
		headerEl.insertBefore(toolsEl, closeBtn);

		const collapseBtn = $('[data-act="collapse"]', toolsEl);
		const resizeEl = document.createElement('div');
		resizeEl.className = 'modal-resize';
		resizeEl.title = '拖动调整大小';
		body.appendChild(resizeEl);

		let maximizedRect = null;   // 最大化前的尺寸
		let collapsedRect = null;   // 折叠前的尺寸（折叠态下始终保存展开后的目标尺寸）
		let panelAction = null;

		function viewSize() {
			return {
				w: window.innerWidth || document.documentElement.clientWidth || 900,
				h: window.innerHeight || document.documentElement.clientHeight || 700,
			};
		}
		function clampRect(r, minH) {
			const vp = viewSize();
			const floorH = minH || PANEL_MIN_H;
			const maxW = Math.max(PANEL_MIN_W, vp.w);
			const maxH = Math.max(floorH, vp.h);
			const w = Math.min(Math.max(r.w, PANEL_MIN_W), maxW);
			const h = Math.min(Math.max(r.h, floorH), maxH);
			return {
				x: Math.min(Math.max(0, r.x), Math.max(0, vp.w - w)),
				y: Math.min(Math.max(0, r.y), Math.max(0, vp.h - h)),
				w: w,
				h: h,
			};
		}
		function readRect() {
			const r = body.getBoundingClientRect();
			return { x: r.left, y: r.top, w: r.width, h: r.height };
		}
		function writeBox(box) {
			body.style.transform = 'none';
			body.style.left = box.x + 'px';
			body.style.top = box.y + 'px';
			body.style.width = box.w + 'px';
			body.style.height = box.h + 'px';
			body.style.maxWidth = 'none';
			body.style.maxHeight = 'none';
			return box;
		}
		function writeRect(r, minH) {
			return writeBox(clampRect(r, minH));
		}
		function savePanelRect(r) {
			if (body.style.display === 'none') return;
			gmSet(PANEL_RECT_KEY, r || readRect());
		}
		function syncCollapseIcon() {
			if (!collapseBtn) return;
			const collapsed = !!collapsedRect;
			collapseBtn.innerHTML = collapsed ? ICON_EXPAND : ICON_COLLAPSE;
			collapseBtn.title = collapsed ? '展开' : '折叠';
		}
		function setCollapsedState(on) {
			if (on) body.classList.add('is-collapsed');
			else body.classList.remove('is-collapsed');
		}
		// 折叠 / 展开：折叠时高度收到标题栏，内容区隐藏，展开后回到原尺寸
		function toggleCollapse() {
			if (collapsedRect) {
				const target = collapsedRect;
				collapsedRect = null;
				setCollapsedState(false);
				writeRect(target);
				savePanelRect(maximizedRect || target);
			} else {
				const cur = writeRect(readRect());
				collapsedRect = { x: cur.x, y: cur.y, w: cur.w, h: cur.h };
				setCollapsedState(true);
				const box = writeRect({ x: cur.x, y: cur.y, w: cur.w, h: PANEL_HEADER_H }, PANEL_HEADER_H);
				collapsedRect.x = box.x;
				collapsedRect.y = box.y;
				collapsedRect.w = box.w;
				// 存展开尺寸：下次打开仍是展开态
				savePanelRect(maximizedRect || collapsedRect);
			}
			syncCollapseIcon();
		}
		function toggleMaxPanel() {
			if (collapsedRect) { toggleCollapse(); return; }   // 折叠态双击 = 展开
			if (maximizedRect) {
				writeRect(maximizedRect);
				maximizedRect = null;
				savePanelRect();
			} else {
				maximizedRect = readRect();
				const vp = viewSize();
				writeRect({ x: 0, y: 0, w: vp.w, h: vp.h });
				// 记住原始尺寸：下次打开回到常规大小，而不是全屏
				savePanelRect(maximizedRect);
			}
		}
		function onPanelMove(e) {
			if (!panelAction) return;
			const dx = e.clientX - panelAction.sx;
			const dy = e.clientY - panelAction.sy;
			let box;
			if (panelAction.mode === 'move') {
				box = writeRect({ x: panelAction.ox + dx, y: panelAction.oy + dy, w: panelAction.ow, h: panelAction.oh }, panelAction.minH);
			} else {
				box = writeRect({ x: panelAction.ox, y: panelAction.oy, w: panelAction.ow + dx, h: panelAction.oh + dy });
			}
			if (collapsedRect) {
				collapsedRect.x = box.x;
				collapsedRect.y = box.y;
				collapsedRect.w = box.w;
			}
		}
		function endPanelAction() {
			window.removeEventListener('pointermove', onPanelMove, true);
			window.removeEventListener('pointerup', endPanelAction, true);
			window.removeEventListener('pointercancel', endPanelAction, true);
			if (panelAction) savePanelRect(collapsedRect || undefined);
			panelAction = null;
			document.body.style.userSelect = '';
		}
		function beginPanelAction(mode, e) {
			let r;
			if (collapsedRect) {
				if (mode !== 'move') return;         // 折叠态只允许拖动，不允许改尺寸
				const cur = readRect();
				r = { x: cur.x, y: cur.y, w: cur.w, h: PANEL_HEADER_H };
			} else {
				r = writeRect(readRect());
				maximizedRect = null;
			}
			panelAction = {
				mode: mode, sx: e.clientX, sy: e.clientY,
				ox: r.x, oy: r.y, ow: r.w, oh: r.h,
				minH: collapsedRect ? PANEL_HEADER_H : PANEL_MIN_H,
			};
			document.body.style.userSelect = 'none';
			window.addEventListener('pointermove', onPanelMove, true);
			window.addEventListener('pointerup', endPanelAction, true);
			window.addEventListener('pointercancel', endPanelAction, true);
		}
		function restorePanelRect() {
			if (collapsedRect) {
				const target = collapsedRect;
				collapsedRect = null;
				setCollapsedState(false);
				syncCollapseIcon();
				writeRect(target);
			}
			const saved = gmGet(PANEL_RECT_KEY, null);
			if (saved && typeof saved === 'object' && saved.w > 0 && saved.h > 0) {
				writeRect(saved);
			}
		}

		headerEl.addEventListener('pointerdown', (e) => {
			if (e.button !== 0 && e.button !== undefined) return;
			const t = e.target;
			if (t && t.closest && t.closest('.close, .modal-tools')) return;
			e.preventDefault();
			beginPanelAction('move', e);
		});
		// 最大化 / 还原：仅保留双击标题栏（图标已移除）
		headerEl.addEventListener('dblclick', (e) => {
			const t = e.target;
			if (t && t.closest && t.closest('.close, .modal-tools')) return;
			toggleMaxPanel();
		});
		resizeEl.addEventListener('pointerdown', (e) => {
			if (e.button !== 0 && e.button !== undefined) return;
			e.preventDefault();
			e.stopPropagation();
			beginPanelAction('resize', e);
		});
		toolsEl.addEventListener('click', (e) => {
			const btn = e.target && e.target.closest ? e.target.closest('.tool-btn') : null;
			if (!btn) return;
			if (btn.getAttribute('data-act') === 'collapse') toggleCollapse();
		});
		// 窗口尺寸变化时，把面板拉回可视区域
		window.addEventListener('resize', () => {
			if (body.style.display === 'none' || !body.style.width) return;
			maximizedRect = null;
			if (collapsedRect) {
				const box = writeRect({ x: collapsedRect.x, y: collapsedRect.y, w: collapsedRect.w, h: PANEL_HEADER_H }, PANEL_HEADER_H);
				collapsedRect.x = box.x;
				collapsedRect.y = box.y;
				collapsedRect.w = box.w;
				return;
			}
			writeRect(readRect());
		});

let model = null;
		let currentAid = null;
		let scope = 'plain';
		let cover = '';
		let videoTitle = '';

		function esc(s) {
			return String(s == null ? '' : s)
				.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
				.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
		}
		function seg(s, max) {
			s = (s == null) ? '' : String(s);
			return s.length > max ? s.slice(0, max) : s;
		}
		function composeSeasonFile(t, prefix) {
			const bits = [];
			if (prefix) bits.push('【' + seg(prefix, 16) + '】');
			if (t.epLabel) bits.push(t.epLabel);
			if (t.epTitle) bits.push(seg(t.epTitle, 16));
			if (t.multi) bits.push('P' + (t.page || 1));
			if (t.part && t.part !== t.epTitle) bits.push(seg(t.part, 24));
			return bits.filter(Boolean).join(' ');
		}
		function tasksOf(box) {
			if (box && box.dataset && box.dataset.tasks) {
				try {
					const t = JSON.parse(box.dataset.tasks);
					if (Array.isArray(t) && t.length) return t;
				} catch (_) { /* ignore */ }
			}
			return [{
				aid: +(box && box.dataset.aid),
				cid: +(box && box.dataset.cid),
				fileBase: (box && box.title) || '',
			}];
		}
		function currentRows() {
			if (!model) return [];
			if (model.kind === 'plain') {
				return model.parts.map((p) => {
					// UP主批量下载带 videoTitle：行与文件名都带上视频标题，避免重名
					const name = p.videoTitle
						? (p.videoTitle + '【P' + p.page + '】' + (p.part || ''))
						: ('【P' + p.page + '】' + (p.part || ''));
					return { name: name, multi: false, tasks: [{ aid: p.aid, cid: p.cid, fileBase: name }] };
				});
			}
			if (scope === 'episode') {
				return model.episodes.map((ep) => {
					const name = (ep.label + ' ' + ep.title).trim();
					const multi = ep.pages.length > 1;
					const tasks = ep.pages.map((p) => ({
						aid: p.aid || ep.aid,
						cid: p.cid,
						epLabel: ep.label,
						epTitle: ep.title,
						multi: multi,
						page: p.page || 1,
						part: p.part || '',
					}));
					return { name: name, multi: multi, tasks: tasks };
				});
			}
			const rows = [];
			model.episodes.forEach((ep) => {
				const base = (ep.label + ' ' + ep.title).trim();
				const multi = ep.pages.length > 1;
				ep.pages.forEach((p) => {
					const name = base + (multi ? (p.part ? ' P' + p.page + ' ' + p.part : ' P' + p.page) : '');
					rows.push({
						name: name,
						multi: false,
						tasks: [{
							aid: p.aid || ep.aid,
							cid: p.cid,
							epLabel: ep.label,
							epTitle: ep.title,
							multi: multi,
							page: p.page || 1,
							part: p.part || '',
						}],
					});
				});
			});
			return rows;
		}
		function renderList() {
			const rows = currentRows();
			const head = '<div style="width:100%"><a href="' + esc(cover) + '" target="_blank">标题：' +
				esc(videoTitle) + '（点我跳转封面）</a></div>';
			pageWrap.innerHTML = head + rows.map((r) => {
				const first = r.tasks[0];
				const text = r.name + (r.multi ? '（' + r.tasks.length + '分P）' : '');
				const badge = r.multi ? '<span class="ep-badge">' + r.tasks.length + '分P</span>' : '';
				const tasksJson = JSON.stringify(r.tasks);
				return '<div class="board-item">' +
					'<input type="checkbox" data-aid="' + esc(first.aid) + '" data-cid="' + esc(first.cid) +
					'" data-tasks="' + esc(tasksJson) + '" title="' + esc(text) + '">' +
					'<span data-aid="' + esc(first.aid) + '" data-cid="' + esc(first.cid) +
					'" data-tasks="' + esc(tasksJson) + '" title="' + esc(text) + '">' + esc(r.name) + badge + '</span></div>';
			}).join('');
		}
		function selectionSummary() {
			const boxes = $$('.page-wrap input[type="checkbox"]', body);
			const total = boxes.length;
			const checked = boxes.filter((b) => b.checked).length;
			if (masterBox) {
				masterBox.checked = total > 0 && checked === total;
				masterBox.indeterminate = checked > 0 && checked < total;
			}
			if (countEl) {
				const unit = model && model.kind === 'season' && scope === 'episode' ? '集' : 'P';
				countEl.textContent = total ? '已选 ' + checked + '/' + total + ' ' + unit : '';
			}
			return checked;
		}
		function currentEpisodeIndex() {
			if (!model || model.kind !== 'season') return -1;
			for (let i = 0; i < model.episodes.length; i++) {
				if (model.episodes[i].aid === currentAid) return i;
			}
			return -1;
		}
		function refreshCurrentBtn() {
			const ok = model && model.kind === 'season' && scope === 'episode';
			const idx = ok ? currentEpisodeIndex() : -1;
			if (!ok || idx < 0 || !currentWrap) {
				if (currentWrap) currentWrap.style.display = 'none';
				return;
			}
			const ep = model.episodes[idx];
			currentNameEl.textContent = (ep.label + ' ' + ep.title).trim();
			currentWrap.style.display = '';
		}
		function hide() {
			body.style.display = 'none';
			mask.style.display = 'none';
		}
		function show(dataModel, pic, title) {
			model = dataModel || null;
			currentAid = (dataModel && dataModel.currentAid) || null;
			cover = pic || '';
			videoTitle = title || '';
			if (model && model.kind === 'season') {
				scope = 'episode';
				scopeRow.style.display = '';
				scopeRadios.forEach((r) => { r.checked = (r.value === 'episode'); });
			} else {
				scope = 'plain';
				scopeRow.style.display = 'none';
			}
			if (model && model.kind === 'season' && prefixWrap && prefixInput) {
				prefixWrap.style.display = '';
				if (!prefixInput.dataset.edited) prefixInput.value = model.title || '';
			} else if (prefixWrap) {
				prefixWrap.style.display = 'none';
			}
			renderList();
			refreshCurrentBtn();
			applySavedSettings();
			selectionSummary();
			restorePanelRect();
			body.style.display = 'flex';
			mask.style.display = 'block';
		}
		function applySavedSettings() {
			const saved = gmGet(DOWNLOAD_SETTING_KEY, null) || {};
			const conf = Object.assign(DEFAULT_DOWNLOAD_SETTING(), saved);
			$('input[name="RPCURL"]', body).value = conf.RPCURL;
			$('input[name="savePath"]', body).value = conf.savePath;
			$('input[name="RPCToken"]', body).value = conf.RPCToken;
			const passCookieEl = $('input[name="passCookie"]', body);
			if (passCookieEl) passCookieEl.checked = !!conf.passCookie;
			const qnEl = $('select[name="qn"]', body);
			if (qnEl) qnEl.value = String(conf.qn || 112);
			const fmtEl = $('select[name="videoFormat"]', body);
			if (fmtEl) {
				const valid = ['mp4', 'flv', 'dash'].indexOf(conf.videoFormat) !== -1;
				fmtEl.value = valid ? conf.videoFormat : 'mp4';
			}
			const radios = $$('input[name="downloadWay"]', body);
			radios.forEach((r) => { r.checked = (r.value === conf.downloadWay); });
			if (!radios.some((r) => r.checked)) radios[0].checked = true;
		}
		if (masterBox) {
			masterBox.addEventListener('change', () => {
				$$('.page-wrap input[type="checkbox"]', body).forEach((c) => { c.checked = masterBox.checked; });
				selectionSummary();
			});
		}
		pageWrap.addEventListener('change', (e) => {
			if (e.target && e.target.tagName === 'INPUT' && e.target.type === 'checkbox') selectionSummary();
		});
		scopeRadios.forEach((radio) => {
			radio.addEventListener('change', () => {
				if (!radio.checked) return;
				scope = radio.value;
				renderList();
				refreshCurrentBtn();
				selectionSummary();
			});
		});
		if (prefixInput) {
			prefixInput.addEventListener('input', () => { prefixInput.dataset.edited = '1'; });
		}
		currentBtn.addEventListener('click', () => {
			if (!model || model.kind !== 'season' || scope !== 'episode') return;
			const idx = currentEpisodeIndex();
			if (idx < 0) {
				webToast({ message: '未在当前合集中定位到正在观看的集', background: '#FF4D40' });
				return;
			}
			const boxes = $$('.page-wrap input[type="checkbox"]', body);
			boxes.forEach((b, i) => {
				b.checked = (i === idx);
				if (b.closest) b.closest('.board-item').classList.toggle('dl-cur', i === idx);
			});
			selectionSummary();
			if (boxes[idx] && boxes[idx].scrollIntoView) {
				try {
					boxes[idx].closest('.board-item').scrollIntoView({ block: 'center' });
				} catch (_) { /* jsdom 等环境可能不支持 scrollIntoView 选项 */ }
			}
			webToast({ message: '已勾选当前集，点击下方"批量下载"即可整集下载', time: 2500 });
		});
		pageWrap.addEventListener('click', (e) => {
			const span = e.target && e.target.closest ? e.target.closest('.board-item > span') : null;
			if (!span) return;
			const item = span.closest('.board-item');
			const box = item && item.querySelector('input[type="checkbox"]');
			if (!box) return;
			const tasks = tasksOf(box);
			span.style.backgroundColor = '#ccc';
			if (tasks.length > 1) {
				if (!box.checked) {
					box.checked = true;
					selectionSummary();
				}
				webToast({ message: '该集含 ' + tasks.length + ' 个分P，已勾选该集，请点击下方"批量下载"整集下载', time: 3000 });
				return;
			}
			startDownloadFile(tasks[0].aid, tasks[0].cid);
		});
		closeBtn.addEventListener('click', hide);
		$('[name="selectall"]', body).addEventListener('click', () => {
			$$('.page-wrap input[type="checkbox"]', body).forEach((c) => { c.checked = true; });
			selectionSummary();
		});
		$('[name="removeSelect"]', body).addEventListener('click', () => {
			$$('.page-wrap input[type="checkbox"]', body).forEach((c) => { c.checked = false; });
			selectionSummary();
		});
		$$('input[name="downloadWay"]', body).forEach((radio) => {
			radio.addEventListener('change', () => {
				if (!radio.checked) return;
				const isMotrix = radio.value === 'Motrix';
				$('input[name="RPCURL"]', body).value = isMotrix
					? 'ws://localhost:16800/jsonrpc'
					: 'ws://localhost:6800/jsonrpc';
			});
		});
		const copyMergeBtn = $('[name="copyMerge"]', body);
		if (copyMergeBtn) {
			copyMergeBtn.addEventListener('click', () => {
				const ta = $('textarea[name="mergeCmd"]', body);
				if (!ta || !ta.value) { webToast({ message: '暂无可复制的合并命令', background: '#FF4D40' }); return; }
				// 优先用 GM 剪贴板，降级到 select + execCommand，兼容各脚本管理器
				let done = false;
				try {
					if (typeof GM_setClipboard === 'function') { GM_setClipboard(ta.value, 'text'); done = true; }
					else if (window.navigator && navigator.clipboard && navigator.clipboard.writeText) {
						navigator.clipboard.writeText(ta.value); done = true;
					}
				} catch (_) { /* ignore */ }
				if (!done) {
					try { ta.select(); document.execCommand('copy'); done = true; } catch (_) { /* ignore */ }
				}
				webToast({ message: done ? '合并命令已复制' : '复制失败，请手动选中文本复制', background: done ? '#4caf50' : '#FF4D40' });
			});
		}
		$('[name="downloadAll"]', body).addEventListener('click', async () => {
			const rpcUrl = $('input[name="RPCURL"]', body).value;
			const savePath = $('input[name="savePath"]', body).value;
			const rpcToken = $('input[name="RPCToken"]', body).value || '';
			const passCookieEl = $('input[name="passCookie"]', body);
			const passCookie = !!(passCookieEl && passCookieEl.checked);
			const qnEl = $('select[name="qn"]', body);
			const qn = qnEl ? parseInt(qnEl.value, 10) || 112 : 112;
			const fmtEl = $('select[name="videoFormat"]', body);
			const videoFormat = fmtEl && ['mp4', 'flv', 'dash'].indexOf(fmtEl.value) !== -1 ? fmtEl.value : 'mp4';
			const wayRadio = $('input[name="downloadWay"]:checked', body);
			const downloadWay = wayRadio ? wayRadio.value : 'Motrix';
			gmSet(DOWNLOAD_SETTING_KEY, { RPCURL: rpcUrl, savePath: savePath, RPCToken: rpcToken, downloadWay: downloadWay, passCookie: passCookie, qn: qn, videoFormat: videoFormat });
			const checkedBoxes = $$('.page-wrap input[type="checkbox"]:checked', body);
			if (!checkedBoxes.length) {
				webToast({ message: '至少需要选中1项', background: '#FF4D40' });
				return;
			}
			if (!savePath) {
				webToast({ message: '保存路径不能为空', background: '#FF4D40' });
				return;
			}
			if (!rpcUrl) {
				webToast({ message: 'RPC地址不能为空', background: '#FF4D40' });
				return;
			}
			const prefix = prefixInput ? (prefixInput.value || '').trim() : '';
			const jobs = [];
			checkedBoxes.forEach((box) => {
				tasksOf(box).forEach((t) => {
					jobs.push({
						aid: t.aid,
						cid: t.cid,
						fileName: cleanFileName(t.fileBase !== undefined ? t.fileBase : composeSeasonFile(t, prefix)),
					});
				});
			});
			if (!jobs.length) return;
			webToast({ message: '已选中 ' + jobs.length + ' 个分P，正在解析播放地址并推送到 aria2…', time: 3000 });
			const streams = await mapLimit(jobs, 4, (job) => resolvePlayData(job.aid, job.cid, { qn: qn, format: videoFormat }));
			const ready = [];
			let urlFail = 0;
			let dashFail = 0;
			const mergeLines = [];
			jobs.forEach((job, i) => {
				const s = streams[i];
				if (!s) { urlFail++; return; }
				if (s.kind === 'single') {
					// 合流直链：按服务端实际容器命名（flv 模式若返回 mp4 则仍存 .mp4，不谎报）
					const ext = videoFormat === 'flv' ? detectExt(s.format, s.url) : '.mp4';
					ready.push({ url: s.url, out: replaceExt(job.fileName, ext) });
					return;
				}
				if (s.kind === 'dash') {
					if (videoFormat !== 'dash') {
						// 用户未选 DASH 但服务端只给了 DASH：沿用旧提示，不误推送
						dashFail++;
						return;
					}
					const v = s.video && s.video[0];
					const a = s.audio && s.audio[0];
					if (!v) { urlFail++; return; }
					const base = replaceExt(job.fileName, '');
					const vOut = base + '.video.m4s';
					ready.push({ url: v.url, out: vOut });
					if (a) {
						const aOut = base + '.audio.m4s';
						ready.push({ url: a.url, out: aOut });
						mergeLines.push('ffmpeg -i "' + vOut + '" -i "' + aOut + '" -c copy "' + base + '.mp4"');
					} else {
						mergeLines.push('REM ' + base + ' 无独立音频流，已仅下载视频流：' + vOut);
					}
					return;
				}
				urlFail++;
			});
			if (dashFail) {
				webToast({ message: dashFail + ' 个视频仅返回 DASH 流（音视频分离），请把「下载格式」切到 DASH 或改用 BBDown', background: '#FF4D40', time: 5000 });
			}
			// 展示 ffmpeg 合并命令（DASH 模式）
			const mergeBox = $('[name="mergeBox"]', body);
			const mergeCmd = $('textarea[name="mergeCmd"]', body);
			if (mergeBox && mergeCmd) {
				if (mergeLines.length) {
					mergeCmd.value = mergeLines.join('\n');
					mergeBox.style.display = '';
				} else {
					mergeCmd.value = '';
					mergeBox.style.display = 'none';
				}
			}
			if (!ready.length) {
				// 若已给出 DASH 提示，不再叠加通用失败提示
				if (!dashFail) webToast({ message: '获取下载链接失败，请稍后重试', background: '#FF4D40', time: 4000 });
				return;
			}
			const res = await rpcAddMany(ready, { savePath: savePath, rpcUrl: rpcUrl, rpcToken: rpcToken, passCookie: passCookie });
			// DASH 模式下每个视频拆成 2 个任务，成功数按“视频数”折算展示，避免用户误解
			const expectedTasks = ready.length;
			const doneTasks = Math.max(0, expectedTasks - (res ? res.fail : expectedTasks));
			const failed = (res ? res.fail : expectedTasks) + (urlFail > 0 ? urlFail : 0);
			const unit = videoFormat === 'dash' ? '条流' : '个';
			webToast({
				message: failed ? '已推送 aria2：成功 ' + doneTasks + '/' + expectedTasks + ' ' + unit + '，失败 ' + failed
					: '已全部推送到 aria2，共 ' + expectedTasks + ' ' + unit + (mergeLines.length ? '；请在下方复制合并命令' : ''),
				background: failed ? '#FF4D40' : '#4caf50',
				time: 5000,
			});
		});
		return { mask: mask, body: body, show: show, hide: hide };
	}

	function mapLimit(items, limit, fn) {
		const results = new Array(items.length).fill(null);
		let idx = 0;
		const workers = [];
		const n = Math.max(1, Math.min(limit || 4, items.length));
		for (let w = 0; w < n; w++) {
			workers.push((async () => {
				while (idx < items.length) {
					const i = idx++;
					try { results[i] = await fn(items[i], i); } catch (_) { results[i] = null; }
				}
			})());
		}
		return Promise.all(workers).then(() => results);
	}

	// 依据 API 返回的 format 字段推断真实容器后缀（诚实命名：服务器返回 mp4 就不谎报 flv）
	function detectExt(dataFormat, url) {
		const f = String(dataFormat || '').toLowerCase();
		if (f.indexOf('flv') !== -1) return '.flv';
		if (f.indexOf('mp4') !== -1) return '.mp4';
		try {
			const pathname = new URL(url).pathname.toLowerCase();
			if (/\.flv$/.test(pathname)) return '.flv';
			if (/\.mp4$/.test(pathname)) return '.mp4';
		} catch (_) { /* ignore */ }
		return '.mp4';
	}

	// 去掉旧后缀再拼接新后缀
	function replaceExt(name, ext) {
		return String(name || '').replace(/\.[a-z0-9]+$/i, '') + ext;
	}

	// fnval 映射：mp4=1（durl 合流）、flv=0（durl，容器由服务端决定）、dash=16（音视频分离）
	const FORMAT_FNVAL = { mp4: 1, flv: 0, dash: 16 };

	// 统一播放流解析。返回：
	//  { kind:'single', url, format }  durl 音视频合一直链
	//  { kind:'dash', video:[{url,id,bandwidth,mimeType}], audio:[...], format }  DASH 分离流
	//  null 失败
	// 带失败重试与指数退避。
	function resolvePlayData(aid, cid, options) {
		const opts = options || {};
		const qn = opts.qn || 112;
		const fmt = Object.prototype.hasOwnProperty.call(FORMAT_FNVAL, opts.format) ? opts.format : 'mp4';
		const fnval = FORMAT_FNVAL[fmt];
		const retries = opts.retries == null ? 2 : opts.retries;
		const attempt = (n) => {
			const url = PLAYURL_API + '?avid=' + aid + '&cid=' + cid +
				'&qn=' + qn + '&fnval=' + fnval + '&fnver=0&fourk=0';
			return gmRequest('GET', url).then((text) => {
				let json = null;
				try { json = JSON.parse(text); } catch (_) { /* ignore */ }
				if (!json || json.code !== 0 || !json.data) {
					if (n > 0 && json && (-404 === json.code || 412 === json.code || -352 === json.code)) {
						return delay(400 * Math.pow(2, retries - n)).then(() => attempt(n - 1));
					}
					return null;
				}
				const data = json.data;
				// durl 优先：音视频合一，aria2 可直接下载
				if (data.durl && data.durl[0] && data.durl[0].url) {
					return { kind: 'single', url: data.durl[0].url, format: data.format || '' };
				}
				// DASH：音视频分离，按带宽降序（最高码率优先）返回候选流
				if (data.dash) {
					const pick = (arr) => (arr || []).slice().sort((a, b) => (b.bandwidth || 0) - (a.bandwidth || 0));
					return {
						kind: 'dash',
						video: pick(data.dash.video),
						audio: pick(data.dash.audio),
						format: data.format || '',
					};
				}
				return null;
			}).catch(() => {
				if (n > 0) return delay(400 * Math.pow(2, retries - n)).then(() => attempt(n - 1));
				return null;
			});
		};
		return attempt(retries);
	}

	// 兼容旧调用（startDownloadFile 等）：single 返回 url 字符串，dash 返回 {dash:true}
	function resolvePlayUrl(aid, cid, options) {
		return resolvePlayData(aid, cid, options).then((r) => {
			if (!r) return null;
			if (r.kind === 'single') return r.url;
			return { dash: true };
		});
	}

	function delay(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	function rpcAddMany(tasks, cfg) {
		const savePath = (cfg && cfg.savePath) || 'D:/';
		const rpcUrl = (cfg && cfg.rpcUrl) || 'ws://localhost:16800/jsonrpc';
		const rpcToken = (cfg && cfg.rpcToken) || '';
		// 安全：Cookie 默认不传给 aria2。只有用户显式开启 passCookie 时才携带，
		// 因为 SESSDATA 等敏感凭据若经明文 ws:// 传输或以 RPC 参数留存会泄露。
		const passCookie = !!(cfg && cfg.passCookie);
		const total = tasks.length;
		return new Promise((resolve) => {
			let socket = null;
			try { socket = new WebSocket(rpcUrl); } catch (_) {
				resolve({ ok: 0, fail: total, reason: 'Aria2连接错误，请打开Aria2和检查RPC设置！' });
				return;
			}
			const pending = new Map();
			let seq = 0;
			let cursor = 0;
			let inFlight = 0;
			let okCount = 0;
			let failCount = 0;
			const MAX_IN_FLIGHT = 4;
			let finished = false;
			let watchdog = null;

			const finish = (extraFail) => {
				if (finished) return;
				finished = true;
				if (watchdog) { try { window.clearTimeout(watchdog); } catch (_) {} }
				try { socket.close(); } catch (_) {}
				resolve({ ok: okCount, fail: failCount + (extraFail || 0) });
			};
			watchdog = window.setTimeout(() => {
				finish(Math.max(0, total - okCount - failCount - inFlight) + inFlight);
			}, 15000);

			const sendOne = (t) => {
				const id = 'bili-' + (++seq);
				const headers = [
					'User-Agent:' + navigator.userAgent,
					'Referer:https://www.bilibili.com/',
				];
				if (passCookie && document.cookie) headers.push('Cookie:' + document.cookie);
				const params = [[t.url], {
					dir: savePath,
					'max-connection-per-server': '16',
					header: headers,
				}];
				if (t.out) params[1].out = t.out;
				const msg = { jsonrpc: '2.0', id: id, method: 'aria2.addUri', params: params };
				if (rpcToken) msg.params.unshift('token:' + rpcToken);
				pending.set(id, true);
				inFlight++;
				cursor++;
				try {
					socket.send(JSON.stringify(msg));
				} catch (_) {
					pending.delete(id);
					inFlight--;
					failCount++;
				}
			};
			const drain = () => {
				while (cursor < total && inFlight < MAX_IN_FLIGHT) sendOne(tasks[cursor]);
				if (inFlight === 0 && cursor >= total) finish(0);
			};
			socket.onopen = () => { try { drain(); } catch (_) { finish(total - cursor); } };
			socket.onerror = () => finish(total - cursor);
			socket.onclose = () => finish(total - cursor);
			socket.onmessage = (event) => {
				let msg = null;
				try { msg = JSON.parse(event.data); } catch (_) { return; }
				if (!msg || msg.id === undefined) return;
				const id = String(msg.id);
				if (!pending.has(id)) return;
				pending.delete(id);
				inFlight--;
				if (msg.error) failCount++;
				else okCount++;
				try { drain(); } catch (_) { finish(total - cursor); }
			};
		});
	}

	function startDownloadFile(aid, cid) {
		resolvePlayUrl(aid, cid).then((url) => {
			if (typeof url === 'string' && url) {
				window.open(url);
			} else if (url && url.dash) {
				webToast({ message: '该视频仅提供 DASH 流，请在下载弹框中选「DASH」格式批量下载并合并', background: '#FF4D40' });
			} else {
				webToast({ message: '获取下载链接失败', background: '#FF4D40' });
			}
		});
	}

	function prepareDownloadPages() {
		const bv = currentBv();
		if (!bv) return Promise.resolve({ status: 'bv_null' });
		return gmRequest('GET', VIEW_API + '?bvid=' + bv)
			.then((text) => {
				let json = null;
				try { json = JSON.parse(text); } catch (_) { /* ignore */ }
				if (!json || json.code !== 0 || !json.data) return { status: 'request_error' };
				const data = json.data;
				const aid = data.aid;
				if (!aid) return { status: 'aid_null' };
				const pic = data.pic || '';
				const title = data.title || '';
				if (data.ugc_season && data.ugc_season.sections) {
					const season = normalizeSeason(data);
					if (season.episodes.length) {
						return {
							status: 'success',
							downloadData: {
								model: { kind: 'season', episodes: season.episodes, currentAid: aid, title: season.title || '' },
								pic: pic,
								title: title,
							},
						};
					}
				}
				const parts = (data.pages || []).map((p) => ({
					aid: aid, cid: p.cid, page: p.page || 1, part: p.part || '',
				}));
				return {
					status: 'success',
					downloadData: { model: { kind: 'plain', parts: parts }, pic: pic, title: title },
				};
			})
			.catch(() => ({ status: 'request_error' }));
	}

	function initRecordView() {
		const host = window.location.host;
		const isVideoPage = host === 'www.bilibili.com' && window.location.pathname.indexOf('/video') !== -1;

		if (isVideoPage) {
			let lastHref = '';
			setInterval(() => {
				if (window.location.href === lastHref) return;
				lastHref = window.location.href;
				const bv = currentBv();
				if (!bv) return;
				let cache = gmGet(RECORD_KEY, '') || '';
				if (cache.length > 12 * 500) cache = cache.substring(12 * 100);
				if (cache.indexOf(bv) === -1) {
					cache += bv;
					gmSet(RECORD_KEY, cache);
				}
			}, 500);
		}

		if (host.indexOf('bilibili.com') !== -1) {
			const targets = [
				{ node: '.bili-video-card', top: 8, right: 12 },
				{ node: '#page-index .small-item', top: 12, right: 12 },
				{ node: '#submit-video-list .small-item', top: 12, right: 12 },
				{ node: '#page-series-detail .small-item.fakeDanmu-item', top: 12, right: 12 },
			];

			function markAsSeen(ele, top, right) {
				if (ele.querySelector('div[name="marklooked"]')) return;
				ele.style.position = 'relative';
				const badge = document.createElement('div');
				badge.setAttribute('name', 'marklooked');
				badge.textContent = '已看';
				badge.style.cssText = 'z-index:100;position:absolute;top:' + top + 'px;right:' + right +
					'px;background-color:rgba(251,123,159,1);border-radius:3px;font-size:10px;color:#FFF;padding:0 2px;';
				ele.appendChild(badge);
			}

			function scan() {
				const cache = gmGet(RECORD_KEY, '') || '';
				targets.forEach((t) => {
					$$(t.node).forEach((ele) => {
						if (ele.getAttribute('dealxll') === 'true') return;
						const link = ele.querySelector('a[href^="//www.bilibili.com/video"], a[href^="https://www.bilibili.com/video"]');
						const href = link ? link.getAttribute('href') : null;
						if (!href) return;
						const bvs = href.match(/(\/BV(.*?)\/)/g);
						if (!bvs || bvs.length !== 1) return;
						const bv = bvs[0].replace(/\//g, '');
						ele.addEventListener('click', () => markAsSeen(ele, t.top, t.right));
						if (cache.indexOf(bv) !== -1) markAsSeen(ele, t.top, t.right);
						ele.setAttribute('dealxll', 'true');
					});
				});
			}
			setInterval(scan, 500);
			GM_registerMenuCommand('清空B站浏览记录', () => {
				if (confirm('是否要清空B站浏览记录？清空后将不可恢复...')) {
					gmSet(RECORD_KEY, '');
					$$('div[name="marklooked"]').forEach((b) => {
						if (b.parentNode) b.parentNode.removeChild(b);
					});
				}
			});
		}
	}

	function linkify(root) {
		if (!root) return;
		const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
		const textNodes = [];
		while (walker.nextNode()) textNodes.push(walker.currentNode);
		textNodes.forEach((tn) => {
			const value = tn.nodeValue;
			if (!value) return;
			const parent = tn.parentElement;
			if (!parent || parent.tagName === 'A' || parent.closest('[data-shx-linkified]')) return;
			URL_REG.lastIndex = 0;
			let last = 0;
			let m;
			let made = false;
			const frag = document.createDocumentFragment();
			while ((m = URL_REG.exec(value)) !== null) {
				const matched = m[0];
				if (last < m.index) frag.appendChild(document.createTextNode(value.slice(last, m.index)));
				const isBili = matched.indexOf('bilibili.com') !== -1;
				const el = document.createElement(isBili ? 'span' : 'a');
				if (!isBili) {
					el.setAttribute('href', matched);
					el.setAttribute('target', '_blank');
					el.style.color = '#00AEEC';
				}
				el.textContent = matched;
				el.setAttribute('data-shx-linkified', '1');
				frag.appendChild(el);
				made = true;
				last = URL_REG.lastIndex;
			}
			if (!made) return;
			if (last < value.length) frag.appendChild(document.createTextNode(value.slice(last)));
			parent.replaceChild(frag, tn);
		});
	}

	function initTextToLink() {
		const root = $('#v_desc');
		if (!root) return;
		linkify(root);
		const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
		if (!MutationObserver) return;
		const observer = new MutationObserver(() => linkify(root));
		observer.observe(root, { characterData: true, childList: true });
	}


	if (isPC()) {
		GM_registerMenuCommand('功能开关', usersSeting);
	} else {
		settings.bilibiliHelper = false;
	}
	if (settings.bilibiliHelper) {
		startBilibiliHelper();
	}
})();
