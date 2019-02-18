var __extends=this&&this.__extends||function(){var o=function(t,e){o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)if(e.hasOwnProperty(i))t[i]=e[i]};return o(t,e)};return function(t,e){o(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}();define(["require","exports","../../containers/scrollPanel/scrollPanel","../../core/util","../mvvmBase","../../communication/httpClient","../../communication/contentType","../../controls/progress/progress","../../controls/messageBox/messageBox","../../mvvm/dataForm/dataForm","../../controls/form/form","../../containers/titleWindow/titleWindow","../../controls/button/button","../../core/fXEvent"],function(t,e,l,s,o,r,d,m,u,c,h,i,g,f){"use strict";Object.defineProperty(e,"__esModule",{value:true});var a=function(a){__extends(n,a);function n(t,e,i){if(e===void 0){e=false}if(i===void 0){i=null}var o=a.call(this)||this;o.scrollPanel=new l.ScrollPanel;o.listDataName="";o.isEditMode=false;o.isControlsLoad=false;if(!n.isListDataEditorDialogCSSLoaded){n.isListDataEditorDialogCSSLoaded=true;Loader.loadCSS("cornerExFx/mvvm/listDataEditor/skins/"+s.Util.skin+"/listDataDialog.css")}o.element.style.visibility="hidden";o.element.style.display="none";o.isEditMode=e;o.label=e?"编辑":"添加";o.httpClient=new r.HttpClient;o.listDataName=t;o._dataForm=new c.DataForm(t,e,i,true);o._dataForm.addEventListener(h.FxFormEvent.Resize,function(t){o.scrollPanel.panel.style.height=o._dataForm.height+"px";o.scrollPanel.refresh()});o.panel.innerHTML=Loader.loadTXT("cornerExFx/mvvm/listDataEditor/skins/listDataDialog.html",true);o.listDataAddDialogBottom=s.Util.getElementByClass("listDataAddDialogBottom",o.panel);o.listDataAddDialogInnerPanel=s.Util.getElementByClass("listDataAddDialogInnerPanel",o.panel);o.buttonOK=new g.Button;o.buttonOK.width=90;o.buttonOK.height=30;o.buttonOK.right=100;o.buttonCancel=new g.Button;o.buttonCancel.width=90;o.buttonCancel.height=30;o.buttonCancel.right=5;o.buttonOK.label=e?"编辑":"添加";o.buttonCancel.label="取消";s.Util.appendDisplayObject(o.listDataAddDialogBottom,o.buttonOK);s.Util.appendDisplayObject(o.listDataAddDialogBottom,o.buttonCancel);o.buttonCancel.tabIndex=1e4;o.buttonOK.tabIndex=10001;o.scrollPanel.left=5;o.scrollPanel.right=5;o.scrollPanel.top=5;o.scrollPanel.bottom=5;o.scrollPanel.isHScroll=false;o.scrollPanel.panel.style.width="100%";o._dataForm.percentWidth=100;o.scrollPanel.addChild(o._dataForm);o._dataForm.load();s.Util.appendDisplayObject(o.listDataAddDialogInnerPanel,o.scrollPanel);o.buttonOK.addEventListener(f.FXMouseEvent.Click,function(t){o._dataForm.verify();if(!o._dataForm.verified){return}o.hide();if(o.isEditMode){o.edit()}else{o.add()}});o.buttonCancel.addEventListener(f.FXMouseEvent.Click,function(t){o.hide()});return o}Object.defineProperty(n.prototype,"dataForm",{get:function(){return this._dataForm},enumerable:true,configurable:true});n.prototype.edit=function(){var i=this;this._dataForm.verify();if(!this._dataForm.verified){u.MessageBox.show("请完善所填写的信息。","无法添加",u.MessageBoxButtons.OK,u.MessageBoxIcon.Error);return}m.Progress.show("正在更新...",-1);var t=this.getXMLStr();this.httpClient.post(t,d.ContentType.TextXML,function(t){var e=s.Util.stringToXml(t);if(s.Util.getElementBooleanAttribute(e.documentElement,"return",false)){i.editCallback(s.Util.getElementChildrenNamedItem(e.documentElement,"data"))}else{m.Progress.hide();u.MessageBox.show("编辑数据失败","编辑",u.MessageBoxButtons.OK,u.MessageBoxIcon.Error)}})};n.prototype.getXMLStr=function(){var t;if(this.isEditMode){t=s.Util.stringToXml("<editListItem><data/></editListItem>")}else{t=s.Util.stringToXml("<addListItem><data/></addListItem>")}var e=s.Util.getElementChildrenNamedItem(t.documentElement,"data");if(this.listView!=null){t.documentElement.setAttribute(this.listView.idField,this.listView.getIdByItem(this.listView.selectedItem))}t.documentElement.setAttribute("name",this.listDataName);for(var i=0;i<this._dataForm.xmlDataProvider.attributes.length;i++){var o=this._dataForm.xmlDataProvider.attributes.item(i);e.setAttribute(o.name,o.value)}return s.Util.xmlToString(t)};n.prototype.add=function(){var i=this;this._dataForm.verify();if(!this._dataForm.verified){u.MessageBox.show("请完善所填写的信息。","无法添加",u.MessageBoxButtons.OK,u.MessageBoxIcon.Error);return}m.Progress.show("正在添加...",-1);this.addingCallback(this._dataForm.xmlDataProvider);var t=this.getXMLStr();this.httpClient.post(t,d.ContentType.TextXML,function(t){var e=s.Util.stringToXml(t);if(s.Util.getElementBooleanAttribute(e.documentElement,"return",false)){i.addCallback(s.Util.getElementChildrenNamedItem(e.documentElement,"data"))}else{m.Progress.hide();u.MessageBox.show("添加数据失败","添加",u.MessageBoxButtons.OK,u.MessageBoxIcon.Error)}})};n.prototype.showDialog=function(t,e){var i=this;if(t===void 0){t=true}if(e===void 0){e=null}this.listView=e;this._dataForm.addEventListener(o.FxMVVMEvent.Load,function(t){i.height=i._dataForm.height+95;if(i.height>500){i.height=500;i.width=430}a.prototype.showDialog.call(i,true)});this._dataForm.listSelectFieldWhereFunction=this.listSelectFieldWhereFunction;if(this.listView==null||!this.isEditMode){this._dataForm.load(null)}else{this._dataForm.load(e.getIdByItem(e.selectedItem))}};n.isListDataEditorDialogCSSLoaded=false;return n}(i.TitleWindow);e.ListDataEditorDialog=a});