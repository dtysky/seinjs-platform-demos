"use strict";function compareVersion(e,r){for(var t=e.split("."),o=r.split("."),a=Math.max(t.length,o.length);t.length<a;)t.push("0");for(;o.length<a;)o.push("0");for(var n=0;n<a;n++){var s=parseInt(t[n]),p=parseInt(o[n]);if(p<s)return 1;if(s<p)return-1}return 0}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default=compareVersion;exports.default=compareVersion;