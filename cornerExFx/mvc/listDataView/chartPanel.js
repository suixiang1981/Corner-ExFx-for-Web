var __extends=this&&this.__extends||function(){var s=function(e,t){s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)if(t.hasOwnProperty(i))e[i]=t[i]};return s(e,t)};return function(e,t){s(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}();define(["require","exports","../../core/displayObject","../../controls/charts/charts","../../core/util","../../controls/fields/listSelectField","../../controls/listBox/listBox","../../containers/scrollPanel/scrollPanel","../../controls/fields/fieldBase","../../core/arrayCollection","../../mvvm/mvvmBase","./seriesEditor"],function(e,t,i,d,l,a,n,r,o,h,c,u){"use strict";Object.defineProperty(t,"__esModule",{value:true});var s=function(i){__extends(s,i);function s(e){var t=i.call(this)||this;t.panel=new r.ScrollPanel;t.displayObjectAC=new h.ArrayCollection;t.typeString=null;t.seriesEditorAC=new h.ArrayCollection;t.info=e;t.element.className="chartPanel";if(!s.isCSSLoaded){s.isCSSLoaded=true;Loader.loadCSS("cornerExFx/mvc/listDataView/skins/"+l.Util.skin+"/chartPanel.css")}if(t.charts==null){t.charts=new d.Charts;t.charts.left=5;t.charts.top=5;t.charts.bottom=5;t.charts.right=260;l.Util.appendDisplayObject(t.element,t.charts);t.panel.top=0;t.panel.right=0;t.panel.bottom=0;t.panel.width=260;l.Util.appendDisplayObject(t.element,t.panel);t.typeField=new a.ListSelectField;t.typeField.right=5;t.typeField.top=5;t.typeField.left=0;t.typeField.height=30;t.typeField.label="图表类型";t.panel.addChild(t.typeField);t.typeField.listBox.iconField="icon";t.typeField.listBox.items.addItem(new n.ListBoxItem("组合图","cornerExFx/mvc/listDataView/skins/compositeCharts.png",["composite"]));t.typeField.listBox.items.addItem(new n.ListBoxItem("饼图","cornerExFx/mvc/listDataView/skins/pieCharts.png",["pie"]));t.typeField.listBox.items.addItem(new n.ListBoxItem("圆环图","cornerExFx/mvc/listDataView/skins/annulusCharts.png",["annulus"]));t.typeField.addEventListener(o.FxFieldEvent.Change,function(e){if(e.newValue==null){t.type_change(null)}else{t.type_change(e.newValue.data[0])}});t.typeField.listBox.selectedItem=t.typeField.listBox.items.getItemAt(0)}return t}Object.defineProperty(s.prototype,"xmlDataProvider",{get:function(){return this._dataElement},set:function(e){this._dataElement=e;this.setData()},enumerable:true,configurable:true});s.prototype.newXField=function(){var t=this;if(this.recordField==null){this.recordField=new a.ListSelectField;this.recordField.right=5;this.recordField.left=0;this.recordField.height=30;this.recordField.addEventListener(o.FxFieldEvent.Change,function(e){t.setData()});this.recordField.listBox.items.removeAll();if(this.info.labelField!=null){this.recordField.listBox.items.addItem(new n.ListBoxItem(this.info.labelField.label,null,[this.info.labelField]))}for(var e=0;e<this.info.dataFields.keys.length;e++){var i=this.info.dataFields.getValue(this.info.dataFields.keys[e]);if(i.isView){this.recordField.listBox.items.addItem(new n.ListBoxItem(i.label,null,[i]))}}if(this.recordField.listBox.items.count>0){this.recordField.listBox.selectedItem=this.recordField.listBox.items.getItemAt(0)}}};s.prototype.newSeriesBar=function(){if(this.seriesBar==null){this.seriesBar=new p;this.seriesBar.right=0;this.seriesBar.left=0;this.seriesBar.height=40}};s.prototype.newValueField=function(){var t=this;if(this.valueField==null){this.valueField=new a.ListSelectField;this.valueField.right=5;this.valueField.left=0;this.valueField.height=30;this.valueField.addEventListener(o.FxFieldEvent.Change,function(e){t.setData()})}};s.prototype.addSeriesEditor=function(){var e=this;var t=new u.SeriesEditor(this.info,this.seriesEditorAC);t.onChange=function(){e.setData()};this.seriesEditorAC.addItem(t);this.displayObjectAC.addItemAt(t,this.displayObjectAC.count-1);this.setControls();this.setData();return t};s.prototype.removeSeriesEditor=function(){if(this.seriesEditorAC.count>1){var e=this.seriesEditorAC.getItemAt(this.seriesEditorAC.count-1);e.onChange=null;this.seriesEditorAC.removeItem(e);this.displayObjectAC.removeItem(e);this.panel.removeChild(e);this.setControls();this.setData()}};s.prototype.type_change=function(e){var t=this;if(e===void 0){e=""}this.typeString=e;for(var i=0;i<this.displayObjectAC.count;i++){var s=this.displayObjectAC.getItemAt(i);this.panel.removeChild(s)}this.displayObjectAC.removeAll();if(this.typeString=="composite"){this.newXField();this.recordField.label="横(X)轴字段";this.displayObjectAC.addItem(this.recordField);if(this.seriesEditorAC.count==0){var l=new u.SeriesEditor(this.info,this.seriesEditorAC);l.onChange=function(){t.setData()};this.seriesEditorAC.addItem(l)}for(var i=0;i<this.seriesEditorAC.count;i++){this.displayObjectAC.addItem(this.seriesEditorAC.getItemAt(i))}this.newSeriesBar();this.displayObjectAC.addItem(this.seriesBar);this.seriesBar.addFunction=function(){t.addSeriesEditor()};this.seriesBar.delFunction=function(){t.removeSeriesEditor()}}else if(e=="pie"||e=="annulus"){this.newXField();this.recordField.label="分类字段";this.displayObjectAC.addItem(this.recordField);this.newValueField();this.valueField.label="值字段";this.valueField.listBox.items.removeAll();var a=new c.MVVMField;a.type=c.DatabaseDataType.Number;a.name="[Count]";this.valueField.listBox.items.addItem(new n.ListBoxItem("[计数]",null,[a]));if(this.valueField.listBox.items.count>0){this.valueField.listBox.selectedItem=this.valueField.listBox.items.getItemAt(0)}if(this.info.labelField.type==c.DatabaseDataType.Number){if(this.info.labelField!=null){this.valueField.listBox.items.addItem(new n.ListBoxItem(this.info.labelField.label,null,[this.info.labelField]))}}for(var i=0;i<this.info.dataFields.keys.length;i++){var r=this.info.dataFields.getValue(this.info.dataFields.keys[i]);if(r.type==c.DatabaseDataType.Number){if(r.isView){this.valueField.listBox.items.addItem(new n.ListBoxItem(r.label,null,[r]))}}}this.displayObjectAC.addItem(this.valueField)}this.setControls();this.setData()};s.prototype.setControls=function(){var e=40;for(var t=0;t<this.displayObjectAC.count;t++){var i=this.displayObjectAC.getItemAt(t);i.top=e;e=e+i.height+5;this.panel.addChild(i)}if(this.seriesBar!=null){this.seriesBar.delButtonVisible=this.seriesEditorAC.count>1}};s.prototype.setData=function(){this.charts.xmlDataProvider=this._dataElement;if(this.typeString=="pie"||this.typeString=="annulus"){if(this.recordField!=null&&this.valueField!=null){if(this.recordField.value!=null&&this.valueField.value!=null){var e=null;if(this.typeString=="pie"){e=new d.PieSeries}else{e=new d.AnnulusSeries}e.field=this.valueField.value.data[0].name;e.label=this.recordField.value.label;e.nameField=this.recordField.value.data[0].name;this.charts.series=[e];this.charts.xAxis=[];this.charts.yAxis=[];this.charts.draw();return}}}else if(this.typeString=="composite"){var t=void 0;var i=void 0;var s=void 0;var l=[];for(var a=0;a<this.seriesEditorAC.count;a++){var r=this.seriesEditorAC.getItemAt(a);var e=new d.Series;l.push(e);if(r.field.value!=null){var n=r.field.value.data[0];e.field=n.name;e.label=n.label}if(r.typeField.value!=null){e.type=r.typeField.value.data[0]}if(r.axisTypeField.value!=null){if(r.axisTypeField.value.data[0]==c.MVVMChartAxisType.major){if(t==null){t=new d.Axis}s=t;e.yAxisIndex=0}else{if(i==null){i=new d.Axis}s=i;e.yAxisIndex=1}if(r.field.value!=null){var n=r.field.value.data[0];if(n.type==c.DatabaseDataType.Number){s.type=d.AxisType.value}else if(n.type==c.DatabaseDataType.Date){s.type=d.AxisType.time}else{s.type=d.AxisType.category}}}}this.charts.yAxis=[t,i];this.charts.series=l;s=new d.Axis;if(this.recordField!=null){if(this.recordField.value!=null){var n=this.recordField.value.data[0];s.field=n.name;s.label=n.label}}this.charts.xAxis=[s];this.charts.draw();return}this.charts.xAxis=[];this.charts.yAxis=[];this.charts.series=[];this.charts.draw()};s.isCSSLoaded=false;return s}(i.DisplayObject);t.ChartPanel=s;var p=function(t){__extends(i,t);function i(){var e=t.call(this)||this;if(!i.isCSSLoaded){i.isCSSLoaded=true;Loader.loadCSS("cornerExFx/mvc/listDataView/skins/"+l.Util.skin+"/seriesBar.css")}e.element.className="seriesBar";e.element.innerHTML=Loader.loadTXT("cornerExFx/mvc/listDataView/skins/seriesBar.html",true);e.add=l.Util.getElementById("seriesBarAddButton",e.element);e.del=l.Util.getElementById("seriesBarDelButton",e.element);e.add.onclick=function(){if(e.addFunction!=null){e.addFunction()}};e.del.onclick=function(){if(e.delFunction!=null){e.delFunction()}};return e}Object.defineProperty(i.prototype,"delButtonVisible",{set:function(e){if(e){this.add.id="seriesBarAddButton";this.del.id="seriesBarDelButton"}else{this.add.id="seriesBarAddButtonB";this.del.id="seriesBarDelButtonB"}},enumerable:true,configurable:true});i.isCSSLoaded=false;return i}(i.DisplayObject);t.SeriesBar=p});