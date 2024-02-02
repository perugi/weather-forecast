(()=>{var n={700:(n,e,t)=>{const r=t(296);n.exports=class{static renderGHLogo(n,e="#gh-logo"){document.querySelector(e).src=void 0===n?r:n}}},348:(n,e,t)=>{"use strict";t.d(e,{c:()=>c});var r=t(648),o=t.n(r),i=t(312),a=t.n(i)()(o());a.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}","",{version:3,sources:["webpack://./src/reset.css"],names:[],mappings:"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiFI,SAAS;IACT,UAAU;IACV,SAAS;IACT,eAAe;IACf,aAAa;IACb,wBAAwB;AAC5B;;AAEA,gDAAgD;AAChD;;;;;;;;;;;IAWI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;;;;IAII,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;AACrB",sourcesContent:["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}"],sourceRoot:""}]);const c=a},336:(n,e,t)=>{"use strict";t.d(e,{c:()=>c});var r=t(648),o=t.n(r),i=t(312),a=t.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),a.push([n.id,"* {\n  box-sizing: border-box;\n  font-family: 'Outfit', sans-serif;\n}\n\n:root {\n  --text-color: #4d4d4d;\n  --text-color-light: #979797;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  color: var(--text-color);\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n}\n\nmain {\n  flex: auto;\n  display: flex;\n  flex-direction: column;\n}\n\n#search-container {\n  flex: 1;\n  margin: 10px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n#search-container > div:first-child {\n  font-weight: 600;\n}\n\n#search-form {\n  margin-top: 10px;\n}\n\n#settings-container {\n  position: absolute;\n  right: 50px;\n  top: 50px;\n}\n\n/* Button from https://codepen.io/alvarotrigo/pen/oNoJePo*/\n\n.knobs,\n.layer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.button {\n  position: relative;\n  top: 50%;\n  width: 74px;\n  height: 36px;\n  margin: -20px auto 0 auto;\n  overflow: hidden;\n}\n\n.button.r,\n.button.r .layer {\n  border-radius: 100px;\n}\n\n.checkbox {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  opacity: 0;\n  cursor: pointer;\n  z-index: 3;\n}\n\n.knobs {\n  z-index: 2;\n}\n\n.layer {\n  width: 100%;\n  background-color: #ebf7fc;\n  transition: 0.3s ease all;\n  z-index: 1;\n}\n#metric-imperial-button .knobs:before {\n  content: 'ºC';\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  width: 20px;\n  height: 10px;\n  color: #fff;\n  font-size: 10px;\n  font-weight: bold;\n  text-align: center;\n  line-height: 1;\n  padding: 9px 4px;\n  background-color: #03a9f4;\n  border-radius: 50%;\n  transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;\n}\n\n#metric-imperial-button .checkbox:checked + .knobs:before {\n  content: 'ºF';\n  left: 42px;\n  background-color: #f44336;\n}\n\n#metric-imperial-button .checkbox:checked ~ .layer {\n  background-color: #fcebeb;\n}\n\n#metric-imperial-button .knobs,\n#metric-imperial-button .knobs:before,\n#metric-imperial-button .layer {\n  transition: 0.3s ease all;\n}\n\n/* End Button */\n\n/* #weather-container {\n  flex: 5;\n  display: none;\n  grid-template-rows: 2fr 2fr 1fr;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas:\n    'current-container forecast-24h-container'\n    'current-container forecast-daily-container'\n    'spacer-container spacer-container';\n  gap: 20px;\n} */\n\n#weather-container {\n  flex: 5;\n  display: none;\n  flex-direction: row;\n  justify-content: center;\n  padding-top: 10vh;\n}\n\n#current-container {\n  align-self: flex-start;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  align-items: flex-start;\n  margin-right: 20px;\n}\n\n#current-container > div:last-child {\n  display: flex;\n}\n\n#current-city {\n  font-size: 32px;\n  font-weight: 600;\n}\n\n#current-country {\n  font-size: 24px;\n}\n\n#last-updated {\n  color: var(--text-color-light);\n  font-size: 13px;\n  margin-bottom: 20px;\n}\n\n#current-weather-icon {\n  width: 150px;\n  height: 150px;\n}\n\n#current-weather-description {\n  text-align: center;\n  font-size: 18px;\n}\n\n#current-conditions {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 24px;\n}\n\n#feels-like {\n  color: var(--text-color-light);\n  font-size: 15px;\n  margin-bottom: 10px;\n  text-align: center;\n}\n\n#current-precipitation {\n  margin-bottom: 10px;\n}\n\n#wind-direction {\n  width: 100px;\n}\n\n#forecast-container {\n  display: flex;\n  flex-direction: column;\n}\n\n#forecast-24h-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n}\n\n#forecast-24h-title {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n\n#forecast-24h-cards {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.forecast-24h-card {\n  display: flex;\n  width: 80px;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid var(--text-color-light);\n  padding: 10px;\n  border-radius: 6px;\n}\n\n.forecast-24h-time {\n  margin-bottom: 5px;\n}\n\n.forecast-24h-description {\n  margin-bottom: 5px;\n  font-size: 12px;\n  text-align: center;\n}\n\n.forecast-24h-temperature {\n  margin-top: auto;\n  margin-bottom: 5px;\n}\n\n#forecast-daily-container {\n  margin-top: 20px;\n}\n\n#forecast-daily-cards {\n  display: flex;\n  gap: 10px;\n}\n\n.forecast-daily-card {\n  width: 180px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.forecast-daily-title {\n  font-size: 18px;\n  font-weight: 600;\n  align-self: flex-start;\n}\n\n.forecast-daily-date {\n  align-self: flex-start;\n  margin-bottom: 10px;\n}\n\n.forecast-daily-icon {\n  width: 100px;\n}\n\n.forecast-daily-description {\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n\n.forecast-daily-temperature {\n  margin-bottom: 10px;\n}\n\n#loading-container {\n  display: none;\n  flex: 5;\n  align-items: center;\n  justify-content: center;\n}\n\n#error-container {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  flex: 5;\n}\n\nfooter {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  background-color: var(--highlight-color);\n  font-family: 'Outfit', sans-serif;\n  font-size: 14px;\n  font-weight: 300;\n}\n\nfooter > div {\n  width: 250px;\n}\n\ndiv.author {\n  display: flex;\n  justify-content: center;\n}\n\n#gh-link {\n  text-decoration: none;\n  letter-spacing: 0;\n  color: var(--font-medium);\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n  height: 38px;\n}\n\n#gh-logo {\n  width: 35px;\n  height: 35px;\n  margin: 0 10px;\n  transition: transform 0.3s ease-in-out;\n}\n\n#gh-link:hover #gh-logo {\n  transform: rotate(360deg) scale(1.2);\n}\n\nhtml {\n  visibility: visible;\n  opacity: 1;\n}\n","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"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",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');\n\n* {\n  box-sizing: border-box;\n  font-family: 'Outfit', sans-serif;\n}\n\n:root {\n  --text-color: #4d4d4d;\n  --text-color-light: #979797;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  color: var(--text-color);\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n}\n\nmain {\n  flex: auto;\n  display: flex;\n  flex-direction: column;\n}\n\n#search-container {\n  flex: 1;\n  margin: 10px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n#search-container > div:first-child {\n  font-weight: 600;\n}\n\n#search-form {\n  margin-top: 10px;\n}\n\n#settings-container {\n  position: absolute;\n  right: 50px;\n  top: 50px;\n}\n\n/* Button from https://codepen.io/alvarotrigo/pen/oNoJePo*/\n\n.knobs,\n.layer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.button {\n  position: relative;\n  top: 50%;\n  width: 74px;\n  height: 36px;\n  margin: -20px auto 0 auto;\n  overflow: hidden;\n}\n\n.button.r,\n.button.r .layer {\n  border-radius: 100px;\n}\n\n.checkbox {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  opacity: 0;\n  cursor: pointer;\n  z-index: 3;\n}\n\n.knobs {\n  z-index: 2;\n}\n\n.layer {\n  width: 100%;\n  background-color: #ebf7fc;\n  transition: 0.3s ease all;\n  z-index: 1;\n}\n#metric-imperial-button .knobs:before {\n  content: 'ºC';\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  width: 20px;\n  height: 10px;\n  color: #fff;\n  font-size: 10px;\n  font-weight: bold;\n  text-align: center;\n  line-height: 1;\n  padding: 9px 4px;\n  background-color: #03a9f4;\n  border-radius: 50%;\n  transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;\n}\n\n#metric-imperial-button .checkbox:checked + .knobs:before {\n  content: 'ºF';\n  left: 42px;\n  background-color: #f44336;\n}\n\n#metric-imperial-button .checkbox:checked ~ .layer {\n  background-color: #fcebeb;\n}\n\n#metric-imperial-button .knobs,\n#metric-imperial-button .knobs:before,\n#metric-imperial-button .layer {\n  transition: 0.3s ease all;\n}\n\n/* End Button */\n\n/* #weather-container {\n  flex: 5;\n  display: none;\n  grid-template-rows: 2fr 2fr 1fr;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas:\n    'current-container forecast-24h-container'\n    'current-container forecast-daily-container'\n    'spacer-container spacer-container';\n  gap: 20px;\n} */\n\n#weather-container {\n  flex: 5;\n  display: none;\n  flex-direction: row;\n  justify-content: center;\n  padding-top: 10vh;\n}\n\n#current-container {\n  align-self: flex-start;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  align-items: flex-start;\n  margin-right: 20px;\n}\n\n#current-container > div:last-child {\n  display: flex;\n}\n\n#current-city {\n  font-size: 32px;\n  font-weight: 600;\n}\n\n#current-country {\n  font-size: 24px;\n}\n\n#last-updated {\n  color: var(--text-color-light);\n  font-size: 13px;\n  margin-bottom: 20px;\n}\n\n#current-weather-icon {\n  width: 150px;\n  height: 150px;\n}\n\n#current-weather-description {\n  text-align: center;\n  font-size: 18px;\n}\n\n#current-conditions {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 24px;\n}\n\n#feels-like {\n  color: var(--text-color-light);\n  font-size: 15px;\n  margin-bottom: 10px;\n  text-align: center;\n}\n\n#current-precipitation {\n  margin-bottom: 10px;\n}\n\n#wind-direction {\n  width: 100px;\n}\n\n#forecast-container {\n  display: flex;\n  flex-direction: column;\n}\n\n#forecast-24h-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n}\n\n#forecast-24h-title {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n\n#forecast-24h-cards {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.forecast-24h-card {\n  display: flex;\n  width: 80px;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid var(--text-color-light);\n  padding: 10px;\n  border-radius: 6px;\n}\n\n.forecast-24h-time {\n  margin-bottom: 5px;\n}\n\n.forecast-24h-description {\n  margin-bottom: 5px;\n  font-size: 12px;\n  text-align: center;\n}\n\n.forecast-24h-temperature {\n  margin-top: auto;\n  margin-bottom: 5px;\n}\n\n#forecast-daily-container {\n  margin-top: 20px;\n}\n\n#forecast-daily-cards {\n  display: flex;\n  gap: 10px;\n}\n\n.forecast-daily-card {\n  width: 180px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.forecast-daily-title {\n  font-size: 18px;\n  font-weight: 600;\n  align-self: flex-start;\n}\n\n.forecast-daily-date {\n  align-self: flex-start;\n  margin-bottom: 10px;\n}\n\n.forecast-daily-icon {\n  width: 100px;\n}\n\n.forecast-daily-description {\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n\n.forecast-daily-temperature {\n  margin-bottom: 10px;\n}\n\n#loading-container {\n  display: none;\n  flex: 5;\n  align-items: center;\n  justify-content: center;\n}\n\n#error-container {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  flex: 5;\n}\n\nfooter {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  background-color: var(--highlight-color);\n  font-family: 'Outfit', sans-serif;\n  font-size: 14px;\n  font-weight: 300;\n}\n\nfooter > div {\n  width: 250px;\n}\n\ndiv.author {\n  display: flex;\n  justify-content: center;\n}\n\n#gh-link {\n  text-decoration: none;\n  letter-spacing: 0;\n  color: var(--font-medium);\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n  height: 38px;\n}\n\n#gh-logo {\n  width: 35px;\n  height: 35px;\n  margin: 0 10px;\n  transition: transform 0.3s ease-in-out;\n}\n\n#gh-link:hover #gh-logo {\n  transform: rotate(360deg) scale(1.2);\n}\n\nhtml {\n  visibility: visible;\n  opacity: 1;\n}\n"],sourceRoot:""}]);const c=a},312:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var A=0;A<n.length;A++){var l=[].concat(n[A]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},648:n=>{"use strict";n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},596:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],A=r.base?s[0]+r.base:s[0],l=i[A]||0,d="".concat(A," ").concat(l);i[A]=l+1;var p=t(d),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=o(u,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),A=0;A<i.length;A++){var l=t(i[A]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},176:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},120:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},520:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},936:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},296:(n,e,t)=>{"use strict";n.exports=t.p+"16586d27e32aa6788cfe.png"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{"use strict";var n=t(596),e=t.n(n),r=t(520),o=t.n(r),i=t(176),a=t.n(i),c=t(120),s=t.n(c),A=t(808),l=t.n(A),d=t(936),p=t.n(d),u=t(348),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(u.c,f),u.c&&u.c.locals&&u.c.locals;var m=t(336),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(m.c,h),m.c&&m.c.locals&&m.c.locals;var E=t(700),C=t.n(E);const g=t.p+"7958cf2591da6e9152f5.svg";function x(n){const e=Object.prototype.toString.call(n);return n instanceof Date||"object"==typeof n&&"[object Date]"===e?new n.constructor(+n):"number"==typeof n||"[object Number]"===e||"string"==typeof n||"[object String]"===e?new Date(n):new Date(NaN)}function y(n,e){return(n<0?"-":"")+Math.abs(n).toString().padStart(e,"0")}function B(n,e){const t=x(n);if(isNaN(t.getTime()))throw new RangeError("Invalid time value");const r=e?.format??"extended",o=e?.representation??"complete";let i="",a="";const c="extended"===r?"-":"",s="extended"===r?":":"";if("time"!==o){const n=y(t.getDate(),2),e=y(t.getMonth()+1,2);i=`${y(t.getFullYear(),4)}${c}${e}${c}${n}`}if("date"!==o){const n=t.getTimezoneOffset();if(0!==n){const e=Math.abs(n);a=`${n<0?"+":"-"}${y(Math.trunc(e/60),2)}:${y(e%60,2)}`}else a="Z";i=`${i}${""===i?"":"T"}${[y(t.getHours(),2),y(t.getMinutes(),2),y(t.getSeconds(),2)].join(s)}${a}`}return i}function b(n){const e=n.filter(((n,e)=>e%3==0));return e.forEach(((t,r)=>{e[r].precip_mm=n[3*r].precip_mm+n[3*r+1].precip_mm+n[3*r+2].precip_mm,e[r].precip_in=n[3*r].precip_in+n[3*r+1].precip_in+n[3*r+2].precip_in})),e}const v=t.p+"82d493fc389b8c730118.svg",w=t.p+"a42b7aecb402f64a710e.svg",k=t.p+"55422f882a4f7a801e19.svg",_=t.p+"f84acd637efd8b2fc2ad.svg",S=t.p+"480c02b3176fc05c58f8.svg",I=t.p+"e49559c8bc76f5831268.svg",q=t.p+"04c7c2b59cc7f880964e.svg",D=t.p+"8ec6348464463b87cb2d.svg",z=t.p+"57003ca1eba0d7b9fac6.svg",j=t.p+"9ebe53f78102eeda8dda.svg",$=t.p+"d0afc492a200f9650be3.svg",T=t.p+"ed479556ea1711b2334f.svg",L=t.p+"a4fb212c874b83e3d23c.svg",M=t.p+"7d9bdc4d85bf8a6df385.svg",W=t.p+"51c45daa29f1295ac8e2.svg";function U(n){return n>=8&&n<20}function F(n,e){switch(n){case 1e3:return U(e)?v:w;case 1003:return U(e)?k:_;case 1006:return S;case 1009:return I;case 1030:return q;case 1063:case 1150:case 1153:return D;case 1066:case 1114:case 1210:case 1213:case 1216:case 1219:case 1222:case 1225:case 1255:case 1258:return z;case 1069:case 1072:case 1168:case 1171:case 1198:case 1201:case 1204:case 1207:case 1249:case 1252:return j;case 1087:case 1273:case 1276:return $;case 1117:case 1279:case 1282:return T;case 1135:case 1147:return L;case 1180:case 1183:case 1186:case 1189:case 1192:case 1195:case 1240:case 1243:case 1246:return M;case 1237:case 1261:case 1264:return W;default:return}}function Y(n){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][function(n){return x(n).getDay()}(n)]}C().renderGHLogo(),(new class{selectedLocation;timeoutId;weatherData;displayIsMetric;API_QUERY_WAIT_TIME=6e4;constructor(){this.selectedLocation=null,this.intervalId=null,this.weatherData=null,this.displayIsMetric=!0}render(){const n=document.querySelector("#location-input");document.querySelector("#location-button").addEventListener("click",(()=>{this.#n(n.value)})),n.addEventListener("keyup",(e=>{13===e.keyCode&&this.#n(n.value)})),document.querySelector("#metric-imperial-button").addEventListener("click",(()=>{this.displayIsMetric=!this.displayIsMetric,this.weatherData&&(this.#e(),this.#t(),this.#r())})),document.querySelector("#wind-direction").src=g}async#n(n){this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null),this.selectedLocation=n,this.#o("user")}async#o(n){this.selectedLocation&&("user"===n&&(document.querySelector("#loading-container").style.display="flex",document.querySelector("#error-container").style.display="none",document.querySelector("#weather-container").style.display="none"),this.weatherData=await async function(n){return function(n){if(console.log(n),n.error)return console.log("Error in response from API"),console.log(n.error),n;const e=new Date,t={};t.lastUpdated=n.current.last_updated,t.location={name:n.location.name,country:n.location.country,localtime:n.location.localtime},t.current={date:B(e,{representation:"date"}),condition:n.current.condition.text,condition_code:n.current.condition.code,temp_c:n.current.temp_c,temp_f:n.current.temp_f,feelslike_c:n.current.feelslike_c,feelslike_f:n.current.feelslike_f,precip_mm:n.current.precip_mm,precip_in:n.current.precip_in,wind_dir:n.current.wind_degree,wind_kph:n.current.wind_kph,wind_mph:n.current.wind_mph};const r=b([...n.forecast.forecastday[0].hour]).filter(((e,t)=>3*t>n.location.localtime.split(" ")[1].split(":")[0])),o=b([...n.forecast.forecastday[1].hour]),i=r.concat(o.slice(0,8-r.length)).map((n=>({time:n.time.split(" ")[1],condition:n.condition.text,condition_code:n.condition.code,temp_c:n.temp_c,temp_f:n.temp_f,precip_mm:n.precip_mm,precip_in:n.precip_in})));return t.current.forecastNext24h=i,t.forecast=[],n.forecast.forecastday.slice(1).forEach((n=>{t.forecast.push({date:n.date,condition:n.day.condition.text,condition_code:n.day.condition.code,mintemp_c:n.day.mintemp_c,mintemp_f:n.day.mintemp_f,maxtemp_c:n.day.maxtemp_c,maxtemp_f:n.day.maxtemp_f,totalprecip_mm:n.day.totalprecip_mm,totalprecip_in:n.day.totalprecip_in})})),t}(await async function(n){try{const e=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=09eb9cda033a40c29bc210257242501&q=${n}&days=3&aqi=no&alerts=no`);return await e.json()}catch(n){return console.log("Error fetching weather data:"),console.log(n),null}}(n))}(this.selectedLocation),this.weatherData.error?this.#i():(this.#e(),this.#t(),this.#r(),this.timeoutId=setTimeout((()=>{this.#o("automatic")}),this.API_QUERY_WAIT_TIME)))}#i(){const n=document.querySelector("#loading-container"),e=document.querySelector("#weather-container"),t=document.querySelector("#error-container");console.log(this.weatherData),t.textContent=this.weatherData.error.message,n.style.display="none",e.style.display="none",t.style.display="flex"}#e(){const n=document.querySelector("#weather-container"),e=document.querySelector("#loading-container"),t=document.querySelector("#error-container"),r=n.querySelector("#current-container");r.querySelector("#current-city").textContent=this.weatherData.location.name,r.querySelector("#current-country").textContent=this.weatherData.location.country,r.querySelector("#current-date").textContent=`${Y(this.weatherData.location.localtime.split(" ")[0])}, ${this.weatherData.location.localtime}`,r.querySelector("#last-updated").textContent=`Last updated: ${this.weatherData.lastUpdated}`;const o=r.querySelector("#current-weather-icon");o.setAttribute("alt",`Weather Icon ${this.weatherData.current.condition_code}`),o.src=F(this.weatherData.current.condition_code,(new Date).getHours),r.querySelector("#current-weather-description").textContent=this.weatherData.current.condition;const i=r.querySelector("#current-temperature");this.displayIsMetric?i.textContent=`${this.weatherData.current.temp_c}°C`:i.textContent=`${this.weatherData.current.temp_f}°F`;const a=r.querySelector("#feels-like");this.displayIsMetric?a.innerHTML=`Feels like<br />${this.weatherData.current.feelslike_c}°C`:a.innerHTML=`Feels like<br />${this.weatherData.current.feelslike_f}°F`;const c=r.querySelector("#current-precipitation");this.displayIsMetric?c.textContent=`${this.weatherData.current.precip_mm.toFixed(1)} mm`:c.textContent=`${this.weatherData.current.precip_in.toFixed(1)} in`;const s=r.querySelector("#wind-direction");s.setAttribute("alt",`Wind direction ${this.weatherData.current.wind_dir} degrees`),s.style.transform=`rotate(${this.weatherData.current.wind_dir}deg)`;const A=r.querySelector("#wind-speed");this.displayIsMetric?A.textContent=`${this.weatherData.current.wind_kph} km/h`:A.textContent=`${this.weatherData.current.wind_mph} mph`,e.style.display="none",n.style.display="flex",t.style.display="none"}#t(){const n=document.querySelector("#forecast-24h-cards");n.innerHTML="",this.weatherData.current.forecastNext24h.forEach((e=>{const t=document.createElement("div");t.classList.add("forecast-24h-card");const r=document.createElement("div");r.classList.add("forecast-24h-time"),r.textContent=e.time;const o=document.createElement("img");o.classList.add("forecast-24h-icon"),o.setAttribute("alt",`Weather Icon ${e.condition_code}`),o.src=F(e.condition_code,e.time.split(":")[0]);const i=document.createElement("div");i.classList.add("forecast-24h-description"),i.textContent=e.condition;const a=document.createElement("div");a.classList.add("forecast-24h-temperature"),this.displayIsMetric?a.textContent=`${e.temp_c}°C`:a.textContent=`${e.temp_f}°F`;const c=document.createElement("div");c.classList.add("forecast-24h-precipitation"),this.displayIsMetric?c.textContent=`${e.precip_mm.toFixed(1)} mm`:c.textContent=`${e.precip_in.toFixed(1)} in`,t.appendChild(r),t.appendChild(o),t.appendChild(i),t.appendChild(a),t.appendChild(c),n.appendChild(t)}))}#r(){const n=document.querySelector("#forecast-daily-cards");n.innerHTML="",this.weatherData.forecast.forEach(((e,t)=>{const r=document.createElement("div");r.classList.add("forecast-daily-card");const o=document.createElement("div");o.classList.add("forecast-daily-title"),o.textContent=0===t?"Tomorrow":"Day after tomorrow";const i=document.createElement("div");i.classList.add("forecast-daily-date"),i.textContent=`${Y(e.date)}, ${e.date}`;const a=document.createElement("img");a.classList.add("forecast-daily-icon"),a.setAttribute("alt",`Weather Icon ${e.condition_code}`),a.src=F(e.condition_code,12);const c=document.createElement("div");c.classList.add("forecast-daily-description"),c.textContent=e.condition;const s=document.createElement("div");s.classList.add("forecast-daily-temperature"),this.displayIsMetric?s.textContent=`${e.mintemp_c} / ${e.maxtemp_c}°C`:s.textContent=`${e.mintemp_f} / ${e.maxtemp_f}°F`;const A=document.createElement("div");A.classList.add("forecast-daily-precipitation"),this.displayIsMetric?A.textContent=`${e.totalprecip_mm.toFixed(1)} mm`:A.textContent=`${e.totalprecip_in.toFixed(1)} in`,r.appendChild(o),r.appendChild(i),r.appendChild(a),r.appendChild(c),r.appendChild(s),r.appendChild(A),n.appendChild(r)}))}}).render()})()})();
//# sourceMappingURL=main.js.map