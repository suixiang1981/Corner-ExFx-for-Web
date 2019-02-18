var __extends=this&&this.__extends||function(){var n=function(t,e){n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)if(e.hasOwnProperty(o))t[o]=e[o]};return n(t,e)};return function(t,e){n(t,e);function o(){this.constructor=t}t.prototype=e===null?Object.create(e):(o.prototype=e.prototype,new o)}}();define(["require","exports","./eventDispatcher"],function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:true});var n=function(o){__extends(t,o);function t(t){var e=o.call(this)||this;e.timer=-1;e.data=[];e.url=t;return e}t.prototype.start=function(){var t=this;this.timer=setInterval(function(){t.connect()},500)};t.prototype.stop=function(){clearInterval(this.timer);this.timer=-1;this.closeSocket()};t.prototype.connect=function(){if(this.socket!=null)document.title=this.socket.readyState.toString();if(this.socket==null){this.socket=new WebSocket(this.url)}else if(this.socket.readyState==1){if(this.data.length>0){var t=this.data.shift();this.socket.send(t)}}else{this.closeSocket()}};t.prototype.closeSocket=function(){this.socket.close();this.socket=null};t.prototype.sendString=function(t){this.data.push(t)};t.prototype.sendBinary=function(t){this.data.push(t)};return t}(o.EventDispatcher);e.WebSocketClient=n});