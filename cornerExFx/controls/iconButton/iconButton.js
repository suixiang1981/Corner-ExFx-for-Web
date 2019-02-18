var __extends=this&&this.__extends||function(){var n=function(t,i){n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)if(i.hasOwnProperty(e))t[e]=i[e]};return n(t,i)};return function(t,i){n(t,i);function e(){this.constructor=t}t.prototype=i===null?Object.create(i):(e.prototype=i.prototype,new e)}}();define(["require","exports","../button/button"],function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:true});var n=function(o){__extends(t,o);function t(t,i,e){if(t===void 0){t=null}if(i===void 0){i=MaterialDesignHue.LightBlue}if(e===void 0){e=false}var n=o.call(this,t,i,e)||this;n._iconMargin=5;n._iconSize=32;n._icon="";n._iconAlign=s.Left;n._labelAlign=l.Auto;n.loadCSS("cornerExFx/controls/iconButton/iconButton.css");return n}t.prototype.getHtmlPath=function(){return"cornerExFx/controls/iconButton/iconButton.html"};Object.defineProperty(t.prototype,"iconMargin",{get:function(){return this._iconMargin},set:function(t){this._iconMargin=t;this.drawIcon()},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"iconSize",{get:function(){return this._iconSize},set:function(t){this._iconSize=t;this.drawIcon()},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"icon",{get:function(){return this._icon},set:function(t){this._icon=t;this.drawIcon()},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"iconAlign",{get:function(){return this._iconAlign},set:function(t){this._iconAlign=t;this.drawIcon()},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"labelAlign",{get:function(){return this._labelAlign},set:function(t){this._labelAlign=t;this.drawIcon()},enumerable:true,configurable:true});t.prototype.drawIcon=function(){if(this._label==""||this._label==null){this.isButtonHalo=false}if(this._icon!=""){this.buttonIcon.src=this._icon;this.buttonIcon.width=this._iconSize;this.buttonIcon.height=this._iconSize;if(this._iconAlign==s.Left||this._iconAlign==s.Right){var t=this._iconAlign==s.Left?"left":"right";var i=this._iconAlign==s.Left?"right":"left";this.buttonIcon.style[t]=this._iconMargin+"px";this.buttonIcon.style.top="50%";this.buttonIcon.style.marginTop="-"+this._iconSize/2+"px";if(this._labelAlign==l.Auto){this.buttonLabel.style[t]=this._iconSize+this._iconMargin*2+"px";this.buttonLabel.style.textAlign=t}else{this.buttonLabel.style[t]="3px";this.buttonLabel.style.textAlign="center"}this.buttonLabel.style.top="3px";this.buttonLabel.style.bottom="3px";this.buttonLabel.style[i]="3px"}else{if(this._iconAlign==s.Center){this.buttonIcon.style.top="50%";this.buttonIcon.style.marginTop="-"+this._iconSize/2+"px";this.buttonIcon.style.left=this.buttonIcon.style.top;this.buttonIcon.style.marginLeft=this.buttonIcon.style.marginTop}else if(this._iconAlign==s.Top){this.buttonLabel.style.textAlign="center";this.buttonIcon.style.top=this.iconMargin+"px";this.buttonIcon.style.marginLeft="-"+this._iconSize/2+"px";this.buttonIcon.style.left="50%"}this.buttonLabel.style.textAlign="center";if(this.labelAlign==l.Auto){if(this.iconAlign==s.Center){this.buttonLabel.style.top=(this._height+this.iconSize)/2+"px"}else{this.buttonLabel.style.top=this.iconMargin+this._iconSize+"px"}}else{this.buttonLabel.style.top="3px"}this.buttonLabel.style.bottom="3px";this.buttonLabel.style.left="3px";this.buttonLabel.style.right="3px"}if(this._iconAlign==s.Center&&this._labelAlign==l.Auto){this.setNumberStyle(this.buttonLabel,"lineHeight",(this._height-this.iconSize)/2-3)}else if(this._iconAlign==s.Top&&this._labelAlign==l.Auto){this.setNumberStyle(this.buttonLabel,"lineHeight",this._height-this.iconSize-this._iconMargin-3)}else{this.setNumberStyle(this.buttonLabel,"lineHeight",this._height-6)}this.buttonIcon.style.visibility="visible"}else{this.buttonIcon.style.visibility="hidden"}};t.prototype.setHeight=function(t){this._height=t;this.setNumberStyle(this.element,"height",t);this.drawIcon()};return t}(e.Button);i.IconButton=n;var s;(function(t){t[t["Left"]=0]="Left";t[t["Right"]=1]="Right";t[t["Top"]=2]="Top";t[t["Center"]=3]="Center"})(s=i.IconAlign||(i.IconAlign={}));var l;(function(t){t[t["Auto"]=0]="Auto";t[t["Center"]=1]="Center"})(l=i.LabelAlign||(i.LabelAlign={}))});