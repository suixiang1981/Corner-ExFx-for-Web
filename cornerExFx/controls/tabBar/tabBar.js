var __extends=this&&this.__extends||function(){var a=function(t,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)if(e.hasOwnProperty(i))t[i]=e[i]};return a(t,e)};return function(t,e){a(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}();define(["require","exports","../../core/displayObject","../../core/fXEvent","../../core/util","../../core/arrayCollection"],function(t,e,i,n,o,a){"use strict";Object.defineProperty(e,"__esModule",{value:true});var s=function(e){__extends(t,e);function t(){var t=e!==null&&e.apply(this,arguments)||this;t._oldW=-1;t._oldH=-1;t.tabItems=new a.ArrayCollection;t.timeH=-1;return t}Object.defineProperty(t.prototype,"dataProvider",{get:function(){return this._dataProvider},set:function(t){var i=this;this._dataProvider=t;this._dataProvider.items.addEventListener(n.FXCollectionEvent.Change,function(t){i.dataProvider_change(t)});for(var e=0;e<this._dataProvider.items.count;e++){this.addItem(e,this._dataProvider.items.getItemAt(e))}setInterval(function(){if(i._oldW!=i.element.clientWidth||i._oldH!=i.element.clientHeight){i._oldW=i.element.clientWidth;i._oldH=i.element.clientHeight;i.setTabs()}},10);this._dataProvider.addEventListener(n.FXListEvent.Change,function(t){var e=i._dataProvider.items.getItemIndex(t.newItem);if(e>=0&&e<i.tabItems.count){i.tabItems.getItemAt(e)._isSelected=true}e=i._dataProvider.items.getItemIndex(t.oldItem);if(e>=0&&e<i.tabItems.count){i.tabItems.getItemAt(e)._isSelected=false}})},enumerable:true,configurable:true});t.prototype.dataProvider_change=function(t){var e=this;if(t.kind==n.CollectionEventKind.Add){this.addItem(t.location,t.items[t.location])}else if(t.kind==n.CollectionEventKind.Remove){if(t.oldLocation<this.tabItems.count-1){this.dataProvider.selectedItem=this.dataProvider.items.getItemAt(t.oldLocation+1)}else if(t.oldLocation>0){this.dataProvider.selectedItem=this.dataProvider.items.getItemAt(0)}else{this.dataProvider.selectedItem=null}this.removeItem(t.oldLocation)}else if(t.kind==n.CollectionEventKind.RemoveAll){var i=this.tabItems.count;for(var a=0;a<i;a++){this.removeItem(0)}}setTimeout(function(){e.setTabs()},1)};t.prototype.removeItem=function(t){var e=this.tabItems.getItemAt(t);e.dispose();if(e.element.parentElement!=null){o.Util.removeDislayObject(e.element.parentElement,e)}this.tabItems.removeItem(e)};t.prototype.addItem=function(t,e){var i=this;var a=new l;this.tabItems.addItemAt(a,t);a.setData(e);o.Util.appendDisplayObject(this.element,a);a.onresize=function(){i.setTabs()};a.onclick=function(t){i.dataProvider.selectedItem=i.dataProvider.items.getItemAt(i.tabItems.getItemIndex(t))};a.onclose=function(t){var e=i.tabItems.getItemIndex(t);i.dataProvider.items.removeItemAt(e)}};t.prototype.setTabs=function(){var t=this;if(this.timeH==-1){this.timeH=setTimeout(function(){clearTimeout(t.timeH);t.timeH=-1;t.setTabsFun()},1)}};t.prototype.setTabsFun=function(){var t=0;for(var e=0;e<this.tabItems.count;e++){var i=this.tabItems.getItemAt(e);if(i.width+t<this.element.clientWidth-30){o.Util.appendDisplayObject(this.element,i);i.left=t;i.visible=true;t+=i.width-2}else{i.visible=false}}};return t}(i.DisplayObject);e.TabBar=s;var l=function(i){__extends(a,i);function a(t){if(t===void 0){t=null}var e=i.call(this)||this;e.timer=-1;e._oldW=-1;if(!a.isCSSLoaded){a.isCSSLoaded=true;Loader.loadCSS("cornerExFx/controls/tabBar/skins/"+o.Util.skin+"/tabBarItem.css")}e.element.style.transition="left linear 100ms";e.element.innerHTML=Loader.loadTXT("cornerExFx/controls/tabBar/skins/"+o.Util.skin+"/tabBarItem.html",true);e.tabBarItem=o.Util.getElementByClass("tabBarItem",e.element);e.tabBarItemIcon=o.Util.getElementByClass("tabBarItemIcon",e.element);e.tabBarItemLabel=o.Util.getElementByClass("tabBarItemLabel",e.element);e.tabBarItemCloseButton=o.Util.getElementByClass("tabBarItemCloseButton",e.element);if(t!=null){e.setData(t)}e.timer=setInterval(function(){if(e._visible){var t=e.tabBarItem.clientWidth;if(e._oldW!=t){e._oldW=t;if(e.onresize!=null){e.onresize()}}}},10);e.tabBarItem.onclick=function(){if(e.onclick!=null){e.onclick(e)}};e.tabBarItemCloseButton.onclick=function(){if(e.onclose!=null){e.onclose(e)}};return e}a.prototype.dispose=function(){clearInterval(this.timer);this.onresize=null;this.onclick=null;this.onclose=null};Object.defineProperty(a.prototype,"width",{get:function(){return this._oldW},enumerable:true,configurable:true});Object.defineProperty(a.prototype,"_isSelected",{set:function(t){if(t){this.tabBarItem.className="tabBarItemSelected";if(o.Util.isNullStringValue(this.data.icon)){this.tabBarItemLabel.className="tabBarItemLabelIconHideSelected"}else{this.tabBarItemLabel.className="tabBarItemLabelSelected"}o.Util.htmlElementToTop(this.element)}else{this.tabBarItem.className="tabBarItem";if(o.Util.isNullStringValue(this.data.icon)){this.tabBarItemLabel.className="tabBarItemLabelIconHide"}else{this.tabBarItemLabel.className="tabBarItemLabel"}}},enumerable:true,configurable:true});a.prototype.setData=function(t){this.data=t;if(o.Util.isNullStringValue(t.icon)){this.tabBarItemLabel.className="tabBarItemLabelIconHide";this.tabBarItemIcon.className="tabBarItemIconHide"}else{this.tabBarItemLabel.className="tabBarItemLabel";this.tabBarItemIcon.className="tabBarItemIcon";this.tabBarItemIcon.src=t.icon}this.tabBarItemLabel.textContent=t.label;if("showCloseButton"in t){if(!t["showCloseButton"]){this.tabBarItemCloseButton.style.visibility="hidden";this.tabBarItemCloseButton.style.display="none"}else{this.tabBarItemCloseButton.style.visibility="visible";this.tabBarItemCloseButton.style.display="inline"}}};a.isCSSLoaded=false;return a}(i.DisplayObject);e.TabItem=l});