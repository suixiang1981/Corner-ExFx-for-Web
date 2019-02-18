var __extends=this&&this.__extends||function(){var n=function(e,t){n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)if(t.hasOwnProperty(i))e[i]=t[i]};return n(e,t)};return function(e,t){n(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}();define(["require","exports","./fieldBase","../../core/util"],function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=function(e){__extends(i,e);function i(){var t=e.call(this)||this;t._showCallButton=true;t._regExp=/(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}1[3-9][0-9]{9}$)/;t._maxLenght=15;t._minLenght=0;if(!i.isPhoneFieldLoaded){i.isPhoneFieldLoaded=true;Loader.loadCSS("cornerExFx/controls/fields/skins/air/phoneField.css")}t.input.oninput=function(e){if(!t.verified){t.verify()}};t.phoneFieldCallDiv=n.Util.getElementByClass("phoneFieldCallDiv",t.element);t.phoneFieldCallDiv.onclick=function(){if(t.callFunction!=null){t.verify();if(t.verified){t.callFunction(t.value,t.field)}}};return t}i.prototype.loadHTML=function(){this.element.innerHTML=Loader.loadTXT("cornerExFx/controls/fields/skins/air/phoneField.html",true)};Object.defineProperty(i.prototype,"showCallButton",{get:function(){return this._showCallButton},set:function(e){this._showCallButton=e;this.phoneFieldCallDiv.style.visibility=this._showCallButton?"visible":"hidden";this.phoneFieldCallDiv.style.display=this._showCallButton?"inline":"none"},enumerable:true,configurable:true});Object.defineProperty(i.prototype,"regExp",{get:function(){return this._regExp},set:function(e){this._regExp=e},enumerable:true,configurable:true});i.prototype.verify=function(){var e=this.input.value;if(e.length>this._maxLenght){this.verified=false;this.input.title="请输入少于"+this._maxLenght+"个字符。"}else if(e.length<this._minLenght){this.verified=false;this.input.title="请输入多于"+this._minLenght+"个字符。"}else if(!this._regExp.test(e)){this.verified=false;this.input.title="请输正确的电话号码格式。固定电话若包含区号，请在区号后加“-”。"}else{this.verified=true;this.input.title=""}this._value=this.input.value;this.setXMLValue()};i.prototype.valueStringToValue=function(){this._value=this.valueString};i.prototype.valueToValueString=function(){this.valueString=this._value};Object.defineProperty(i.prototype,"maxLenght",{get:function(){return this._maxLenght},set:function(e){this._maxLenght=e},enumerable:true,configurable:true});Object.defineProperty(i.prototype,"minLenght",{get:function(){return this._minLenght},set:function(e){this._minLenght=e},enumerable:true,configurable:true});i.isPhoneFieldLoaded=false;return i}(i.FieldBase);t.PhoneField=o});