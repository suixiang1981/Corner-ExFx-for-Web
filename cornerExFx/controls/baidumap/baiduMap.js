var __extends=this&&this.__extends||function(){var n=function(e,t){n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)if(t.hasOwnProperty(a))e[a]=t[a]};return n(e,t)};return function(e,t){n(e,t);function a(){this.constructor=e}e.prototype=t===null?Object.create(t):(a.prototype=t.prototype,new a)}}();define(["require","exports","../../core/util","../../core/displayObject","../../core/fXEvent","../../core/dictionary"],function(e,t,n,a,i,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(a){__extends(i,a);function i(e){var t=a.call(this)||this;t.makeDict=new o.Dictionary;t.ak=e;t.mapDivId=n.Util.newGuid();t.element.innerHTML=Loader.loadTXT("cornerExFx/controls/baidumap/baidumap.html",true);t.mapDiv=document.createElement("div");t.mapDiv.id=t.mapDivId;t.mapDiv.className="mapDiv";t.loadJScript();return t}i.prototype.loadJScript=function(){this.element.appendChild(this.mapDiv);Loader.setRequireConfig({paths:{async:"async",BMap:"http://api.map.baidu.com/api?v=3.0&ak="+this.ak},shim:{BMap:{deps:["jquery"],exports:"BMap"}}});this.init()};i.prototype.init=function(){var a=this;Loader.define(["jquery","async!BMap"],function(){a.map=new BMap.Map(a.mapDivId);var e=new s;e.target=a;e.type=s.Load;a.dispatchEvent(e);var t=[{featureType:"all",elementType:"geometry",stylers:{hue:"#007fff",saturation:89}},{featureType:"water",elementType:"all",stylers:{color:"#ffffff"}}];a.map.setMapStyle({styleJson:t})})};i.prototype.enableScrollWheelZoom=function(){this.map.enableScrollWheelZoom()};i.prototype.centerAndZoom=function(e,t){this.map.centerAndZoom(new BMap.Point(e.x,e.y),t)};i.prototype.panTo=function(e){this.map.panTo(new BMap.Point(e.x,e.y))};i.prototype.setZoom=function(e){this.map.setZoom(e)};i.prototype.addMarker=function(e,t,a){if(a===void 0){a=""}if(this.makeDict.containsKey(e)){this.map.removeOverlay(this.makeDict.getValue(e))}var n=new BMap.Marker(new BMap.Point(t.x,t.y));if(a!=""){var i=new BMap.Label(a,{offset:new BMap.Size(24,0)});i.setStyle({color:"#000000",fontSize:"15px",backgroundColor:"0.5",border:"0",fontWeight:"bold",textShadow:"0px 0px 4px #FFFFFF"});n.setLabel(i)}this.makeDict.add(e,n);this.map.addOverlay(n)};i.prototype.selectMarker=function(e){if(this.makeDict.containsKey(this._selectedMarkerId)){var t=this.makeDict.getValue(this._selectedMarkerId);t.setAnimation(null)}if(this.makeDict.containsKey(e)){var a=this.makeDict.getValue(e);this._selectedMarkerId=e;a.setAnimation(i.BMAP_ANIMATION_BOUNCE);var n=a.getPosition();this.map.panTo(n)}};Object.defineProperty(i.prototype,"selectedMarkerId",{get:function(){return this._selectedMarkerId},enumerable:true,configurable:true});i.BMAP_ANIMATION_BOUNCE=2;i.BMAP_ANIMATION_DROP=1;return i}(a.DisplayObject);t.BaiduMap=r;var p=function(){function e(e,t){this.x=e;this.y=t}return e}();t.MapPoint=p;var s=function(e){__extends(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}t.Load="Load";return t}(i.FXEvent);t.FxMapEvent=s});