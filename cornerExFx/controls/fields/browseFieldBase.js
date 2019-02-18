var __extends=this&&this.__extends||function(){var n=function(e,t){n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)if(t.hasOwnProperty(i))e[i]=t[i]};return n(e,t)};return function(e,t){n(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}();define(["require","exports","../../containers/titleWindow/titleWindow","./fieldBase","../../core/util"],function(e,t,n,i,l){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=function(t){__extends(i,t);function i(){var e=t!==null&&t.apply(this,arguments)||this;e.dialogPanel=null;e.innerPanel=null;e.okButton=null;e.cancelButton=null;e.dialogWidth=300;e.dialogHeight=400;e._inputEnabled=true;return e}Object.defineProperty(i.prototype,"inputEnabled",{get:function(){return this._inputEnabled},set:function(e){this._inputEnabled=e;this.input["disabled"]=!(this._enabled&&this._inputEnabled)},enumerable:true,configurable:true});i.prototype.loadHTML=function(){var e=this;if(!i.isBrowseFieldCSSLoaded){i.isBrowseFieldCSSLoaded=true;Loader.loadCSS("cornerExFx/controls/fields/skins/"+l.Util.skin+"/browseFieldBase.css");Loader.loadCSS("cornerExFx/controls/fields/skins/"+l.Util.skin+"/browseFieldDialog.css")}this.element.innerHTML=Loader.loadTXT("cornerExFx/controls/fields/skins/"+l.Util.skin+"/browseFieldBase.html",true);this.fieldBrowseDiv=l.Util.getElementByClass("fieldBrowseDiv",this.element);this.fieldBrowseDiv.onclick=function(){if(e.titleWindow==null){e.titleWindow=new n.TitleWindow;e.titleWindow.panel.innerHTML=Loader.loadTXT("cornerExFx/controls/fields/skins/air/browseFieldDialog.html",true);e.innerPanel=l.Util.getElementByClass("browseDialogInnerPanel",e.titleWindow.panel);e.okButton=l.Util.getElementById("browseDialogOKButton",e.titleWindow.panel);e.cancelButton=l.Util.getElementById("browseDialogCancelButton",e.titleWindow.panel);e.cancelButton.onclick=function(){e.titleWindow.hide()};e.okButton.onclick=function(){e.selectedHandler();e.titleWindow.hide()};if(e.dialogPanel!=null){l.Util.appendDisplayObject(e.dialogPanel,e.titleWindow)}else{l.Util.appendDisplayObject(document.body,e.titleWindow)}e.titleWindow.width=e.dialogWidth;e.titleWindow.height=e.dialogHeight}e.titleWindow.show();e.openHandler()}};i.prototype.openHandler=function(){};i.prototype.selectedHandler=function(){};Object.defineProperty(i.prototype,"enabled",{set:function(e){this._enabled=e;if(this._enabled){this.fieldBrowseDiv.style.visibility="visible";this.input["disabled"]=!(this._enabled&&this._inputEnabled);this.input.style.color="#000000";this.labelDiv.style.color="#000000"}else{this.input["disabled"]=true;this.input.style.color="#666666";this.labelDiv.style.color="#666666";this.fieldBrowseDiv.style.visibility="hidden"}},enumerable:true,configurable:true});i.isBrowseFieldCSSLoaded=false;return i}(i.FieldBase);t.BrowseFieldBase=o});