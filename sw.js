if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let a={};const t=e=>i(e,l),o={module:{uri:l},exports:a,require:t};s[l]=Promise.all(r.map((e=>o[e]||t(e)))).then((e=>(n(...e),a)))}}define(["./workbox-455a0d7a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"about.html",revision:"13b50ef2c1d3a41d378b146009bba3ba"},{url:"assets/_...all_.c00f980b.js",revision:null},{url:"assets/_name_.047e8771.js",revision:null},{url:"assets/404.d6be0b53.js",revision:null},{url:"assets/about.90793c39.js",revision:null},{url:"assets/app.7cf8b3a7.js",revision:null},{url:"assets/app.abe261b6.css",revision:null},{url:"assets/home.d9f6dfa8.js",revision:null},{url:"assets/README.8e8c4344.js",revision:null},{url:"assets/vendor.4bac29fc.js",revision:null},{url:"assets/virtual_pwa-register.bbb77b58.js",revision:null},{url:"index.html",revision:"f75086b91a483c5c97b013cef14b96d4"},{url:"readme.html",revision:"e3373c86bd55e857f23edc3a6fe978f4"},{url:"favicon.svg",revision:"fd480326ce2f9db2043fceedae54cb67"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
