!function(e){function t(t){for(var n,a,s=t[0],c=t[1],l=t[2],f=0,d=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(u&&u(t);d.length;)d.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,s=1;s<o.length;s++){var c=o[s];0!==r[c]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={0:0},i=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([46,1]),o()}({46:function(e,t,o){"use strict";o.r(t);o(47),o(65),o(67),o(84);var n=$("canvas.dots"),r={dotsArray:[],el:{context:n[0].getContext("2d"),h1:$("h1"),canvasWidth:window.innerWidth,canvasHeight:window.innerHeight},config:{dotSize:5,numOfDots:200,directions:["+","-"],speeds:[.5,1,1.5,2,2.5],stage:0},init:function(){r.layout(),r.type(),r.moveDot()},type:function(){new TypeIt("h1",{loop:!1}).type("We live in uncertain times.").pause(5e3).delete().type("Disruptive technologies.").exec((function(){return new Promise((function(e){r.config.stage=1,setTimeout((function(){e()}),5e3)}))})).delete().type("Shifting trends.").exec((function(){return new Promise((function(e){r.config.stage=2,setTimeout((function(){e()}),5e3)}))})).delete().type("Political Risks.").exec((function(){return new Promise((function(e){r.config.stage=3,setTimeout((function(){e()}),5e3)}))})).go()},shrinkBox:function(){},stage3:function(){$(".page-1").addClass("hidden"),$(".page-2").removeClass("hidden")},moveDot:function(){var e=r.el,t=e.canvasWidth,o=e.canvasHeight;r.el.context.clearRect(0,0,t,o);var n=0,i=r.dotsArray;for(n=0;n<i.length;n++){var a=Math.floor(Math.random()*Math.floor(500));0==r.config.stage&&(1==a&&(i[n].xMove="-"),2==a&&(i[n].xMove="+"),3==a&&(i[n].yMove="-"),4==a&&(i[n].yMove="+")),"+"==i[n].xMove?i[n].x+=i[n].speed:i[n].x-=i[n].speed,"+"==i[n].yMove?i[n].y+=i[n].speed:i[n].y-=i[n].speed,r.drawDot(i[n]),1==r.config.stage&&i[n].x>r.el.h1.position().left&&i[n].y>r.el.h1.position().top&&i[n].y<r.el.h1.position().top+r.el.h1.height()&&i[n].x<r.el.h1.position().left+r.el.h1.width()&&(r.dotsArray[n].color="#F55151"),2==r.config.stage&&(i[n].color="rgba(255,255,255,0.4)",i[n].y+i[n].radius<o/2&&(i[n].yMove="+")),3==r.config.stage&&(i[n].speed=2*Math.cos(n)),i[n].x+i[n].radius>=t&&(i[n].xMove="-"),i[n].x-i[n].radius<=0&&(i[n].xMove="+"),i[n].y+i[n].radius>=o&&(i[n].yMove="-"),i[n].y-i[n].radius<=0&&(i[n].yMove="+")}window.requestAnimationFrame(r.moveDot)},layout:function(){n.attr({height:r.el.canvasHeight,width:r.el.canvasWidth}),r.dotsArray=[];for(var e=0;e<r.config.numOfDots;e++){var t=Math.random()*r.el.canvasWidth,o=Math.random()*r.el.canvasHeight,i=r.config.directions[Math.floor(Math.random()*r.config.directions.length)],a=r.config.directions[Math.floor(Math.random()*r.config.directions.length)],s=(r.config.speeds[Math.floor(Math.random()*r.config.speeds.length)],{x:t,y:o,radius:Math.floor(4*Math.random()),xMove:i,yMove:a,color:"rgba(255,255,255,0.4)",speed:2*Math.sin(e)});r.dotsArray.push(s),r.drawDot(s)}},drawDot:function(e){r.el.context.globalAlpha=.9,r.el.context.beginPath(),r.el.context.arc(e.x,e.y,e.radius,0,2*Math.PI,!1),r.el.context.fillStyle=e.color,r.el.context.fill()}};r.init()}});
//# sourceMappingURL=app.3278965d.js.map