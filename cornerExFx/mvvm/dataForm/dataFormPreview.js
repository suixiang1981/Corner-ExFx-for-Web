var __extends=this&&this.__extends||function(){var a=function(e,t){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)if(t.hasOwnProperty(i))e[i]=t[i]};return a(e,t)};return function(e,t){a(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}();define(["require","exports","../../core/displayObject","../../core/util"],function(e,t,i,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(t){__extends(i,t);function i(){var e=t.call(this)||this;e.oldPicW=0;e.oldPicH=0;e.element.className="dataFormPreview";e.element.innerHTML=Loader.loadTXT("cornerExFx/mvvm/dataForm/skins/preview.html");if(!i.isCSSLoaded){i.isCSSLoaded=true;Loader.loadCSS("cornerExFx/mvvm/dataForm/skins/"+a.Util.skin+"/preview.css")}e.dataFormPreviewTitle=a.Util.getElementByClass("dataFormPreviewTitle",e.element);e.dataFormPreviewImage=a.Util.getElementByClass("dataFormPreviewImage",e.element);e.windowClose=a.Util.getElementByClass("windowClose",e.element);e.windowClose.onclick=function(){if(e.oldE!=null){e.oldE.target["height"]=e.oldE.target["height"]-e.height}e.close();e.refresh()};return e}i.prototype.close=function(){this.visible=false;this.oldE=null};i.prototype.setField=function(e){var t=this;if(this.oldE!=null){this.oldE.target["height"]=this.oldE.target["height"]-this.height}this.visible=true;this.oldE=e;this.dataFormPreviewTitle.textContent="附件预览 - "+e.fileName;if(this.dataFormPreviewImage!=null){this.dataFormPreviewImage.onload=null;this.element.removeChild(this.dataFormPreviewImage)}this.dataFormPreviewImage=document.createElement("img");this.element.appendChild(this.dataFormPreviewImage);this.dataFormPreviewImage.className="dataFormPreviewImage";this.dataFormPreviewImage.src=e.path;this.dataFormPreviewImage.onload=function(){t.oldPicW=t.dataFormPreviewImage.width;t.oldPicH=t.dataFormPreviewImage.height;if(t.oldPicW>t.element.clientWidth){t.dataFormPreviewImage.width=t.element.clientWidth;t.dataFormPreviewImage.height=t.element.clientWidth/t.oldPicW*t.oldPicH}t.dataFormPreviewImage.style.left="50%";t.dataFormPreviewImage.style.marginLeft=-t.dataFormPreviewImage.width/2+"px";t.top=e.target["top"]+e.target["height"];t.height=t.dataFormPreviewImage.height+35;e.target["height"]=e.target["height"]+t.height;t.refresh()}};i.isCSSLoaded=false;return i}(i.DisplayObject);t.DataFormPreview=r});