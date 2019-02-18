var __extends=this&&this.__extends||function(){var i=function(e,t){i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(t.hasOwnProperty(n))e[n]=t[n]};return i(e,t)};return function(e,t){i(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();define(["require","exports","./fieldBase","../textArea/textArea","../../core/util"],function(e,t,n,i,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var u=function(e){__extends(t,e);function t(){var t=e.call(this)||this;t.textArea=new i.TextArea;t._maxLenght=Number.MAX_VALUE;t._minLenght=0;t.textArea.percentWidth=100;t.textArea.percentHeight=100;r.Util.getElementByClass("textareaPanel",t.textArea.element).style.boxShadow="none";t.input.style.visibility="hidden";t.input.style.display="none";r.Util.appendDisplayObject(t.inputDiv,t.textArea);t.input=t.textArea._textAreaElement;t.input.style.background="transparent";t.input.style.border="0px";t.input.oninput=function(e){if(!t.verified){t.verify()}};return t}Object.defineProperty(t.prototype,"multiLine",{get:function(){return this.textArea.multiLine},set:function(e){this.textArea.multiLine=e},enumerable:true,configurable:true});t.prototype.verify=function(){if(this.input["value"].length>this._maxLenght){this.verified=false;this.input.title="请输入少于"+this._maxLenght+"个字符。"}else if(this.input["value"].length<this._minLenght){this.verified=false;this.input.title="请输入多于"+this._minLenght+"个字符。"}else{this.verified=true;this.input.title=""}this._value=this.input["value"];this.setXMLValue()};t.prototype.valueStringToValue=function(){this._value=this.valueString.replace(new RegExp(/(\r\n)/g),"[BR]").replace(new RegExp(/(\r)/g),"[BR]").replace(new RegExp(/(\n)/g),"[BR]")};t.prototype.valueToValueString=function(){this.valueString=this._value.replace(new RegExp(/(\r\n)/g),"[BR]").replace(new RegExp(/(\r)/g),"[BR]").replace(new RegExp(/(\n)/g),"[BR]")};t.prototype.setInputValue=function(){this.valueToValueString();this.textArea.value=this.valueString.replace(new RegExp(/(\[BR\])/g),"\r\n")};Object.defineProperty(t.prototype,"maxLenght",{get:function(){return this._maxLenght},set:function(e){this._maxLenght=e},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"minLenght",{get:function(){return this._minLenght},set:function(e){this._minLenght=e},enumerable:true,configurable:true});return t}(n.FieldBase);t.TextField=u});