var __extends=this&&this.__extends||function(){var o=function(t,e){o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)if(e.hasOwnProperty(i))t[i]=e[i]};return o(t,e)};return function(t,e){o(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}();define(["require","exports","./fieldBase","../../core/util","../../core/fXEvent"],function(t,e,i,n,o){"use strict";Object.defineProperty(e,"__esModule",{value:true});var p=function(t){__extends(p,t);function p(){var e=t.call(this)||this;e.isPopup=false;e.popupWidth=200;e.popupHeight=200;e.timePopupHandle=-1;e.timePopdownHandle=-1;if(!p.isComboFieldCSSLoaded){p.isComboFieldCSSLoaded=true;Loader.loadCSS("cornerExFx/controls/fields/skins/"+n.Util.skin+"/comboFieldBase.css")}p.comboFieldArray.push(e);e.element.onkeydown=function(t){if(t.keyCode==40){e._popup()}else if(t.keyCode==27){e.popdown()}};e.element.tabIndex=0;e.popupButtonDiv=n.Util.getElementByClass("fieldPopupButtonDiv",e.element);e.popupButtonDiv.addEventListener("pointerdown",function(t){t.stopPropagation();if(e.isPopup){e.popdown()}else{e._popup()}});document.addEventListener("pointerdown",function(t){e.popdown()});return e}p.prototype._popup=function(){var t=new o.FxDropdownEvent;t.type=o.FxDropdownEvent.Open;t.target=this;this.dispatchEvent(t);if(t.cancel){return}this.popup()};p.prototype.popup=function(){var t=this;if(!this.isPopup){this.isPopup=true;for(var e=0;e<p.comboFieldArray.length;e++){var i=p.comboFieldArray[e];if(i!=this){i.popdown()}}var o=n.Util.getWorldPosition(this.popupButtonDiv);if(this.popupPanel==null){this.popupPanel=n.Util.getElementByClass("fieldComboPopupPanel",this.element);n.Util.removeElement(this.element,this.popupPanel);n.Util.appendElement(document.body,this.popupPanel);this.popupPanel.style.visibility="visible";this.popupPanel.style.display="inline"}if("openHandler"in this){this["openHandler"]()}if(o.x-this.popupWidth+this.popupButtonDiv.clientWidth<0){this.popupPanel.style.left="0px"}else{this.popupPanel.style.left=o.x-this.popupWidth+this.popupButtonDiv.clientWidth+"px"}if(o.y+this.popupHeight+this.popupButtonDiv.clientHeight>window.innerHeight){this.popupPanel.style.top="auto";this.popupPanel.style.bottom=window.innerHeight-o.y+3+"px"}else{this.popupPanel.style.top=o.y+3+this.popupButtonDiv.clientHeight+"px";this.popupPanel.style.bottom="auto"}this.popupPanel.style.visibility="visible";this.popupPanel.style.display="inline";this.popupPanel.style.width=this.popupWidth+"px";n.Util.htmlElementToTop(this.popupPanel);if(this.timePopupHandle==-1){this.timePopupHandle=setTimeout(function(){t.popupPanel.style.height=t.popupHeight+"px";t.timePopupHandle=-1},1)}}};p.prototype.popdown=function(){var t=this;if(this.isPopup){this.isPopup=false;this.popupPanel.style.height="0px";if(this.timePopdownHandle==-1){this.timePopdownHandle=setTimeout(function(){t.popupPanel.style.visibility="hidden";t.popupPanel.style.display="none";t.timePopdownHandle=-1},200)}var e=new o.FxDropdownEvent;e.type=o.FxDropdownEvent.Close;e.target=this;this.dispatchEvent(e)}};p.prototype.loadHTML=function(){this.element.innerHTML=Loader.loadTXT("cornerExFx/controls/fields/skins/"+n.Util.skin+"/comboFieldBase.html",true);this.comboFieldIcon=n.Util.getElementByClass("comboFieldIcon",this.element)};Object.defineProperty(p.prototype,"enabled",{set:function(t){this._enabled=t;if(this._enabled){this.popupButtonDiv.style.visibility="visible";this.input["disabled"]=false;this.input.style.color="#000000";this.labelDiv.style.color="#000000"}else{this.input["disabled"]=true;this.input.style.color="#666666";this.labelDiv.style.color="#666666";this.popupButtonDiv.style.visibility="hidden"}},enumerable:true,configurable:true});p.isComboFieldCSSLoaded=false;p.comboFieldArray=[];return p}(i.FieldBase);e.ComboFieldBase=p});