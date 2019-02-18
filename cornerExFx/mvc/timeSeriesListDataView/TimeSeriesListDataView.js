var __extends=this&&this.__extends||function(){var n=function(e,t){n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)if(t.hasOwnProperty(i))e[i]=t[i]};return n(e,t)};return function(e,t){n(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}();define(["require","exports","../listDataView/listDataView","../../core/util","../../controls/fields/dateField","../../controls/fields/fieldBase","../../mvvm/mvvmBase","../../controls/messageBox/messageBox"],function(e,t,i,l,d,m,u,c){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(o){__extends(e,o);function e(e,t,i,n){if(t===void 0){t=null}if(i===void 0){i=false}if(n===void 0){n=false}var a=o.call(this,e,t,i,n)||this;a.startingTime=new d.DateField;a.endingTime=new d.DateField;a.mainTop=40;a.addTimeBar();var s=new Date;var r=new Date(s.getFullYear(),s.getMonth(),s.getDate());a.startingTime.value=new Date(r.valueOf()-30*1440*60*1e3);a.endingTime.value=r;a.startingTime.addEventListener(m.FxFieldEvent.Change,function(e){a.loadData()});a.endingTime.addEventListener(m.FxFieldEvent.Change,function(e){a.loadData()});a.addEventListener(u.FxMVVMEvent.Load,function(e){if(l.Util.getElementBooleanAttribute(e.xml.documentElement,"spanOut",false)){c.MessageBox.show("起止日期跨度太大，请缩小范围！","数据查询",c.MessageBoxButtons.OK,c.MessageBoxIcon.Information)}});return a}e.prototype.addTimeBar=function(){Loader.loadCSS("cornerExFx/mvc/timeSeriesListDataView/skins/"+l.Util.skin+"/timeSeriesListDataView.css");var e=document.createElement("div");e.className="timeSeriesListDataViewBar";l.Util.appendElement(this.element,e);this.startingTime.width=220;this.startingTime.labelWidth=69;this.startingTime.label="起始日期";this.startingTime.top=5;l.Util.appendDisplayObject(e,this.startingTime);this.endingTime.label="终止日期";this.endingTime.width=220;this.endingTime.labelWidth=69;this.endingTime.left=225;this.endingTime.top=5;l.Util.appendDisplayObject(e,this.endingTime)};e.prototype._loadDataXMLFunction=function(e){this.startingTime.verify();this.endingTime.verify();if(this.startingTime.verified&&this.endingTime.verified){e.documentElement.setAttribute("startingTime",l.Util.dateToString(this.startingTime.value,l.DateFormat.Default,l.DateDataType.Date));e.documentElement.setAttribute("endingTime",l.Util.dateToString(this.endingTime.value,l.DateFormat.Default,l.DateDataType.Date))}};return e}(i.ListDataView);t.TimeSeriesListDataView=n});