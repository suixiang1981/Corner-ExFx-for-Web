var __extends=this&&this.__extends||function(){var r=function(e,t){r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)if(t.hasOwnProperty(i))e[i]=t[i]};return r(e,t)};return function(e,t){r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}();define(["require","exports","../../core/displayObject","../../core/arrayCollection","../../core/fXEvent","../../core/util"],function(e,t,i,r,d,u){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(i){__extends(e,i);function e(e){if(e===void 0){e=false}var t=i.call(this)||this;t.fields=new r.ArrayCollection;t.isListMode=false;t.oldW=-1;t.timer=-1;t.timerW=-1;t.oldH=-1;t._verified=true;t._enabled=true;t.isListMode=e;t.fields.addEventListener(d.FXCollectionEvent.Change,function(e){t.setFields()});if(t.timerW==-1){t.timerW=setInterval(function(){if(t.element.offsetWidth!=t.oldW){t.oldW=t.element.offsetWidth;t.refresh()}},1)}return t}e.prototype.setFields=function(){var e=this;if(this.timer==-1){this.timer=setTimeout(function(){clearTimeout(e.timer);e.timer=-1;e.refresh()},1)}};e.prototype.refresh=function(){var t=this;var e=0;var i=0;var r=0;this.oldH=this.height;var n=true;for(var s=0;s<this.fields.count;s++){var o=this.fields.getItemAt(s);if(o.visible){o["addEventListener"](d.FXResizeEvent.Resize,function(e){t.setFields()});var f=false;if(o.tag!=null){f=o.tag.controlIsNewLine}u.Util.appendElement(this.element,o.element);var h=o.width;if(o.percentWidth>0){h=this.element.clientWidth*o.percentWidth/100}if(n){n=false;o.left=i;o.top=e;i+=h;r=o.height;if(this.height!=r){this.height=r}}else{if(i+h>this.oldW||i>0&&f||this.isListMode){i=0;e+=r+5;o.left=i;o.top=e;var l=e+o.height;if(this.height!=l){this.height=l}r=o.height}else{o.left=i;o.top=e;if(r<o.height){r=o.height}var l=e+r;if(this.height!=l){this.height=l}}i+=h}}}if(this.oldH!=this.height){this.oldH=this.height;var a=new c;a.target=this;a.type=c.Resize;this.dispatchEvent(a)}};Object.defineProperty(e.prototype,"xmlDataProvider",{get:function(){return this._dataElement},set:function(e){this._dataElement=e;for(var t=0;t<this.fields.count;t++){var i=this.fields.getItemAt(t);i.xmlDataProvider=this._dataElement}},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"verified",{get:function(){return this._verified},enumerable:true,configurable:true});e.prototype.verify=function(){this._verified=true;for(var e=0;e<this.fields.count;e++){var t=this.fields.getItemAt(e);if(t.visible){t.verify();if(!t.verified){this._verified=false}}}};Object.defineProperty(e.prototype,"enabled",{get:function(){"\n";return this._enabled},set:function(e){this._enabled=e;for(var t=0;t<this.fields.count;t++){var i=this.fields.getItemAt(t);i.enabled=this._enabled}},enumerable:true,configurable:true});return e}(i.DisplayObject);t.Form=n;var c=function(e){__extends(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}t.Resize="Resize";return t}(d.FXEvent);t.FxFormEvent=c});