var __extends=this&&this.__extends||function(){var l=function(e,t){l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)if(t.hasOwnProperty(i))e[i]=t[i]};return l(e,t)};return function(e,t){l(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}();define(["require","exports","../../core/displayObject","../../controls/fields/listSelectField","../../core/util","../../mvvm/mvvmBase","../../controls/listBox/listBox","../../controls/fields/fieldBase","../../controls/fields/stringField","../../controls/fields/dateField","../../controls/fields/numberField","../../controls/button/button","../../controls/progress/progress","../../communication/contentType","../../controls/messageBox/messageBox","../../core/fXEvent"],function(e,t,i,r,u,h,c,m,l,s,o,a,n,f,p,L){"use strict";Object.defineProperty(t,"__esModule",{value:true});var d=function(d){__extends(e,d);function e(e,t){var i=d.call(this)||this;i.fieldListSelect=new r.ListSelectField;i.operatorListSelect=new r.ListSelectField;i.oldType=null;i.oldDateDataType=null;i.oldList=null;i.httpClient=t;i.element.innerHTML=Loader.loadTXT("cornerExFx/mvc/listDataView/skins/whereBar.html",true);i.searchBarAddButton=u.Util.getElementById("searchBarAddButton",i.element);i.searchBarDelButton=u.Util.getElementById("searchBarDelButton",i.element);i.searchBarAddButton.onclick=function(){if(i.addFunction!=null)i.addFunction(i)};i.searchBarDelButton.onclick=function(){if(i.delFunction!=null)i.delFunction(i)};i.info=e;i.fieldListSelect.width=250;i.fieldListSelect.height=30;i.fieldListSelect.labelWidth=0;i.fieldListSelect.top=5;u.Util.appendDisplayObject(i.element,i.fieldListSelect);i.operatorListSelect.width=120;i.operatorListSelect.height=30;i.operatorListSelect.labelWidth=0;i.operatorListSelect.top=5;i.operatorListSelect.left=250;u.Util.appendDisplayObject(i.element,i.operatorListSelect);i.fieldListSelect.listBox.items.removeAll();var l=new c.ListBoxItem(i.info.labelField.label,"",[i.info.labelField]);i.fieldListSelect.listBox.items.addItem(l);for(var a=0;a<i.info.dataFields.keys.length;a++){var s=i.info.dataFields.getValue(i.info.dataFields.keys[a]);if(s.isView){i.fieldListSelect.listBox.items.addItem(new c.ListBoxItem(s.label,"",[s]))}}for(var a=0;a<i.info.dataFields.keys.length;a++){var s=i.info.dataFields.getValue(i.info.dataFields.keys[a]);for(var o=0;o<i.fieldListSelect.listBox.items.count;o++){var n=i.fieldListSelect.listBox.items.getItemAt(o);if(n.data[0].label==s.label){if(!u.Util.isNullStringValue(s.list)&&u.Util.isNullStringValue(n.data[0].list)){i.fieldListSelect.listBox.items.getItemAt(o).data[0]=s;break}}}}i.fieldListSelect.addEventListener(m.FxFieldEvent.Change,function(e){if(e.newValue!=null){if(e.newValue.data!=null){if(e.newValue.data.length==1){i.field=e.newValue.data[0];if(i.oldType!=i.field.type||i.oldList!=i.field.list){i.setValueField(i.field);i.oldType=i.field.type;i.oldList=i.field.list;i.operatorListSelect.listBox.items.removeAll();if(u.Util.isNullStringValue(i.field.list)){if(i.field.type==h.DatabaseDataType.String){i.operatorListSelect.listBox.items.addItem(new c.ListBoxItem("包含(⊆)","",["LIKE"]));i.operatorListSelect.listBox.items.addItem(new c.ListBoxItem("不包含(⊄)","",["LIKE","NOT"]));i.operatorListSelect.listBox.items.addItem(new c.ListBoxItem("等于(＝)","",["="]));i.operatorListSelect.listBox.items.addItem(new c.ListBoxItem("不等于(≠)","",["<>"]))}else if(i.field.type==h.DatabaseDataType.Text){i.operatorListSelect.listBox.items.addItem(new c.ListBoxItem("包含(⊆)","",["LIKE"]));i.operatorListSelect.listBox.items.addItem(new c.ListBoxItem("不包含(⊄)","",["LIKE","NOT"]))}else if(i.field.type==h.DatabaseDataType.Boolean){i.operatorListSelect.listBox.items.addItem(new c.ListBoxItem("是","",["=1"]));i.operatorListSelect.listBox.items.addItem(new c.ListBoxItem("否","",["=0"]))}else if(i.field.type==h.DatabaseDataType.Date||i.field.type==h.DatabaseDataType.Number){i.operatorListSelect.listBox.items.addItem(new c.ListBoxItem("大于(＞)","",[">"]));i.operatorListSelect.listBox.items.addItem(new c.ListBoxItem("大于等于(≥)","",[">="]));i.operatorListSelect.listBox.items.addItem(new c.ListBoxItem("小于(＜)","",["<"]));i.operatorListSelect.listBox.items.addItem(new c.ListBoxItem("小于等于(≤)","",["<="]));i.operatorListSelect.listBox.items.addItem(new c.ListBoxItem("等于(＝)","",["="]));i.operatorListSelect.listBox.items.addItem(new c.ListBoxItem("不等于(≠)","",["<>"]))}}else{i.operatorListSelect.listBox.items.addItem(new c.ListBoxItem("等于(＝)","",["="]));i.operatorListSelect.listBox.items.addItem(new c.ListBoxItem("不等于(≠)","",["<>"]))}i.operatorListSelect.value=i.operatorListSelect.listBox.items.getItemAt(0)}if(i.oldDateDataType!=i.field.dateDataType){i.oldDateDataType=i.field.dateDataType;i.setValueField(i.field)}}}}});i.fieldListSelect.value=l;return i}e.prototype.setValueField=function(e){var a=this;if(this.stringValue!=null)u.Util.removeDislayObject(this.element,this.stringValue);if(this.dateValue!=null)u.Util.removeDislayObject(this.element,this.dateValue);if(this.dateTimeValue!=null)u.Util.removeDislayObject(this.element,this.dateTimeValue);if(this.numberValue!=null)u.Util.removeDislayObject(this.element,this.numberValue);if(this.listSelectValue!=null)u.Util.removeDislayObject(this.element,this.listSelectValue);if(u.Util.isNullStringValue(e.list)){if(e.type==h.DatabaseDataType.String||e.type==h.DatabaseDataType.Text){if(this.stringValue==null){this.stringValue=new l.StringField;this.stringValue.left=370;this.stringValue.height=30;this.stringValue.top=5;this.stringValue.width=250;this.stringValue.labelWidth=0}this.valuefield=this.stringValue;u.Util.appendDisplayObject(this.element,this.stringValue)}else if(e.type==h.DatabaseDataType.Date&&e.dateDataType==u.DateDataType.Date){if(this.dateValue==null){this.dateValue=new s.DateField;this.dateValue.left=370;this.dateValue.height=30;this.dateValue.top=5;this.dateValue.width=250;this.dateValue.labelWidth=0}this.valuefield=this.dateValue;u.Util.appendDisplayObject(this.element,this.dateValue)}else if(e.type==h.DatabaseDataType.Date&&(e.dateDataType==u.DateDataType.DateTime||e.dateDataType==u.DateDataType.DateTimeHM||e.dateDataType==u.DateDataType.Time||e.dateDataType==u.DateDataType.TimeHM)){if(this.dateTimeValue==null){this.dateTimeValue=new s.DateField(true);this.dateTimeValue.left=370;this.dateTimeValue.height=30;this.dateTimeValue.top=5;this.dateTimeValue.width=250;this.dateTimeValue.labelWidth=0}this.valuefield=this.dateTimeValue;u.Util.appendDisplayObject(this.element,this.dateTimeValue)}else if(e.type==h.DatabaseDataType.Number){if(this.numberValue==null){this.numberValue=new o.NumberField;this.numberValue.left=370;this.numberValue.height=30;this.numberValue.top=5;this.numberValue.width=250;this.numberValue.labelWidth=0}this.numberValue.decimals=e.decimals;this.numberValue.maxValue=e.maxValue;this.numberValue.minValue=e.minValue;this.numberValue.stepSize=1/Math.pow(10,e.decimals);this.valuefield=this.numberValue;u.Util.appendDisplayObject(this.element,this.numberValue)}}else{if(this.listSelectValue==null){this.listSelectValue=new r.ListSelectField;this.listSelectValue.left=370;this.listSelectValue.height=30;this.listSelectValue.top=5;this.listSelectValue.width=250;this.listSelectValue.labelWidth=0}this.valuefield=this.listSelectValue;u.Util.appendDisplayObject(this.element,this.listSelectValue);h.MVVMInfo.loadListInfo(this.field.list,this.httpClient,function(e){n.Progress.show("正在加载...",-1);var t=u.Util.stringToXml("<loadList/>");t.documentElement.setAttribute("name",a.field.list);var l=e;a.httpClient.post(u.Util.xmlToString(t),f.ContentType.TextXML,function(e){var t=u.Util.stringToXml(e);if(u.Util.getElementBooleanAttribute(t.documentElement,"return",false)){var i=u.Util.getElementChildrenNamedItem(t.documentElement,"data");if(l.idField!=null)a.listSelectValue.listBox.idField=l.idField.name;if(l.iconField!=null)a.listSelectValue.listBox.iconField=l.iconField.name;if(l.labelField!=null)a.listSelectValue.listBox.labelField=l.labelField.name;a.listSelectValue.listBox.dataFields=[l.idField.name];a.listSelectValue.listBox.xmlDataProvider=i;if(a.listSelectValue.listBox.items.count>0){a.listSelectValue.value=a.listSelectValue.listBox.items.getItemAt(0)}n.Progress.hide()}else{n.Progress.hide();p.MessageBox.show("加载数据失败！","加载数据",p.MessageBoxButtons.OK,p.MessageBoxIcon.Error)}})})}};Object.defineProperty(e.prototype,"location",{set:function(e){var t=this;this._location=e;if(e==S.Last||e==S.OnlyOne){if(this.button==null){this.button=new a.Button;this.button.label="搜索";this.button.left=625;this.button.height=27;this.button.top=5;this.button.width=100;u.Util.appendDisplayObject(this.element,this.button);this.button.addEventListener(L.FXMouseEvent.Click,function(e){t.searchFunction()})}this.button.visible=true;if(this.logicListSelect!=null){this.logicListSelect.visible=false}this.searchBarAddButton.style.visibility="visible";this.searchBarAddButton.style.display="inline";this.searchBarDelButton.style.left="760px"}else{this.searchBarAddButton.style.visibility="hidden";this.searchBarAddButton.style.display="none";this.searchBarDelButton.style.left="730px";if(this.button!=null)this.button.visible=false;if(this.logicListSelect==null){this.logicListSelect=new r.ListSelectField;this.logicListSelect.listBox.items.addItem(new c.ListBoxItem("并且(∩)","",["AND"]));this.logicListSelect.listBox.items.addItem(new c.ListBoxItem("或者(∪)","",["OR"]));this.logicListSelect.value=this.logicListSelect.listBox.items.getItemAt(0);this.logicListSelect.left=620;this.logicListSelect.height=30;this.logicListSelect.top=5;this.logicListSelect.width=105;this.logicListSelect.labelWidth=0;u.Util.appendDisplayObject(this.element,this.logicListSelect)}this.logicListSelect.visible=true}},enumerable:true,configurable:true});e.prototype.getWhere=function(){if(this.operatorListSelect.value==null)return;if(this._location==S.First||this._location==S.Middle){if(this.logicListSelect!=null){if(this.logicListSelect.value==null){return}}}var e="";this.valuefield.verify();if(this.valuefield.verified){if(this.operatorListSelect.value.data.length==2){e+=this.operatorListSelect.value.data[1];e+=" "}e+="["+this.field.name+"]";e+=" ";e+=this.operatorListSelect.value.data[0];e+=" ";if(this.field.type==h.DatabaseDataType.Date||this.field.type==h.DatabaseDataType.Text||this.field.type==h.DatabaseDataType.String){e+="'"}if(this.operatorListSelect.value.data[0]=="LIKE"){e+="%"}if(this.valuefield==this.dateTimeValue){e+=u.Util.dateToString(this.dateTimeValue.value,u.DateFormat.Default,u.DateDataType.DateTimeHM)}else if(this.valuefield==this.dateValue){e+=u.Util.dateToString(this.dateValue.value,u.DateFormat.Default,u.DateDataType.Date)}else if(this.valuefield==this.stringValue||this.valuefield==this.numberValue){e+=this.valuefield.value}else if(this.valuefield==this.listSelectValue){e+=this.listSelectValue.listBox.getIdByItem(this.listSelectValue.value)}if(this.operatorListSelect.value.data[0]=="LIKE"){e+="%"}if(this.field.type==h.DatabaseDataType.Date||this.field.type==h.DatabaseDataType.Text||this.field.type==h.DatabaseDataType.String){e+="'"}}if(this._location==S.First||this._location==S.Middle){if(this.logicListSelect!=null){e+=" ";e+=this.logicListSelect.value.data[0];e+=" "}}return e};return e}(i.DisplayObject);t.WhereBar=d;var S;(function(e){e[e["First"]=0]="First";e[e["Last"]=1]="Last";e[e["Middle"]=2]="Middle";e[e["OnlyOne"]=3]="OnlyOne"})(S=t.WhereLocation||(t.WhereLocation={}))});