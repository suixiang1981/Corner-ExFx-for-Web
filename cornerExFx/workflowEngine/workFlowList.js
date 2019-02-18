var __extends=this&&this.__extends||function(){var i=function(t,e){i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)if(e.hasOwnProperty(o))t[o]=e[o]};return i(t,e)};return function(t,e){i(t,e);function o(){this.constructor=t}t.prototype=e===null?Object.create(e):(o.prototype=e.prototype,new o)}}();define(["require","exports","../core/displayObject","../core/util","../mvc/timeSeriesListDataView/TimeSeriesListDataView","./workFlowEngine","../mvvm/mvvmBase","../core/dictionary","./workFlowEditor","../core/fXEvent","../controls/messageBox/messageBox"],function(t,e,o,p,h,v,n,i,a,F,k){"use strict";Object.defineProperty(e,"__esModule",{value:true});var l=function(f){__extends(D,f);function D(l,t,e,o){if(t===void 0){t=null}if(e===void 0){e=""}if(o===void 0){o=true}var n=f.call(this)||this;n.isLoadData=false;n.isToDo=true;n.titleNow=[];n._where="";n.whereSys="";n._where=e;D.workFlowStepListDict.add(l.stepId,n);n.step=l;n.port=t;n.listDataView=new h.TimeSeriesListDataView("workFlowEngine.workFlowStep."+n.step.stepId,n.port,false,o);n.listDataView.left=0;n.listDataView.right=0;n.listDataView.top=0;n.listDataView.bottom=0;n.listDataView.control.backgroundColorFields=["backgroundColor"];n.listDataView.control.colorFields=["color"];n.listDataView.control.fontFields=["font"];p.Util.appendDisplayObject(n.element,n.listDataView);n.listDataView.loadInfoFunction=function(t){n.addWorkFlowStepField("color","",false,t.dataFields);n.addWorkFlowStepField("backgroundColor","",false,t.dataFields);n.addWorkFlowStepField("icon","",false,t.dataFields);n.addWorkFlowStepField("font","",false,t.dataFields);return t};n.listDataView.loadDataFunction=function(t){if(n.loadDataFunction!=null){t=n.loadDataFunction(t)}for(var e=0;e<t.childNodes.length;e++){var o=t.childNodes.item(e);if(o.nodeType==1){var i=o;var a=p.Util.getElementNumberAttribute(i,"state",0);if(a==0){i.setAttribute("font","bold medium 'Segoe UI', sans-serif")}}}if(n.titleNow.length==0){for(var e=0;e<n.listDataView.control.titleItems.count;e++){var l=n.listDataView.control.titleItems.getItemAt(e);if(l.label=="当前状态"||l.label=="当前步骤"||l.label=="当前更新时间"||l.label=="当前用户"){n.titleNow.push(l)}}}if(n.isToDo){for(var e=0;e<n.titleNow.length;e++){var l=n.titleNow[e];if(n.listDataView.control.titleItems.contains(l)){n.listDataView.control.titleItems.removeItem(l)}}}else{for(var e=0;e<n.titleNow.length;e++){var l=n.titleNow[e];if(!n.listDataView.control.titleItems.contains(l)){n.listDataView.control.titleItems.addItem(l)}}}return t};n.whereSys="(state IS NULL OR state = 0 OR state = 1)";n.loadData();n.listDataView.control.addEventListener(F.FXMouseEvent.DoubleClick,function(t){n.open(n.listDataView.control.selectedItem)});var i=p.Util.getElementById("listDataViewChart",n.listDataView.toolBarDiv);var a=document.createElement("div");a.className="toolSplit";p.Util.insertElement(a,i);var s=document.createElement("div");s.innerHTML=Loader.loadTXT("cornerExFx/workflowEngine/skins/workFlowButtonAdd.html",true);s.className="toolButton";s.title="创建";var r=document.createElement("div");r.innerHTML=Loader.loadTXT("cornerExFx/workflowEngine/skins/workFlowButtonComplete.html",true);r.className="toolButton";r.title="办结";p.Util.insertElement(r,i);r.onclick=function(){n.isToDo=false;n.whereSys="(nowState = 10)";n.loadData();d.className="toolButton";r.className="toolButtonSelected";c.className="toolButton";u.className="toolButton"};var c=document.createElement("div");c.innerHTML=Loader.loadTXT("cornerExFx/workflowEngine/skins/workFlowButtonDone.html",true);c.className="toolButton";c.title="已办";p.Util.insertElement(c,i);c.onclick=function(){n.isToDo=false;n.whereSys="(state=9 OR state=10)";n.loadData();d.className="toolButton";c.className="toolButtonSelected";u.className="toolButton";r.className="toolButton"};var d=document.createElement("div");d.innerHTML=Loader.loadTXT("cornerExFx/workflowEngine/skins/workFlowButtonTodo.html",true);d.className="toolButtonSelected";d.title="待办";p.Util.insertElement(d,i);d.onclick=function(){n.isToDo=true;n.whereSys="(state IS NULL OR state=0 OR state=1)";n.loadData();d.className="toolButtonSelected";c.className="toolButton";u.className="toolButton";r.className="toolButton"};var u=document.createElement("div");u.innerHTML=Loader.loadTXT("cornerExFx/workflowEngine/skins/workFlowButtonAll.html",true);u.className="toolButton";u.title="全部";p.Util.insertElement(u,i);u.onclick=function(){n.isToDo=false;n.whereSys="";n.loadData();d.className="toolButton";c.className="toolButton";u.className="toolButtonSelected";r.className="toolButton"};a=document.createElement("div");a.className="toolSplit";p.Util.insertElement(a,i);var w=document.createElement("div");w.innerHTML=Loader.loadTXT("cornerExFx/workflowEngine/skins/workFlowButtonOpen.html",true);w.className="toolButtonDisabled";w.title="打开";p.Util.insertElement(w,i);n.listDataView.control.addEventListener(F.FXListEvent.Change,function(t){w.className=n.listDataView.control.selectedItem==null?"toolButtonDisabled":"toolButton"});w.onclick=function(){n.open(n.listDataView.control.selectedItem)};var m=p.Util.getElementById("listDataViewChart",n.listDataView.toolBarDiv);v.WorkFlowEngine.getfirstStep(function(t){if(t.containsKey(n.step.stepId)){var e=document.createElement("div");e.className="toolSplit";p.Util.insertElement(s,m);p.Util.insertElement(e,i);s.onclick=function(){k.MessageBox.show("是否创建"+n.step.workFlowLabel,"创建",k.MessageBoxButtons.YesNo,k.MessageBoxIcon.Information,function(t){if(t==k.MessageBoxButton.Yes){v.WorkFlowEngine.create(l.stepId,function(t,e,o,i,a){if(t){n.listDataView.loadData();v.WorkFlowEngine.load(l.stepId,o,i,a,function(t){n.showWorkFlowStepEditor(t)},true,n.port)}})}})}}else{var o=document.createElement("div");o.className="toolSplit";p.Util.insertElement(o,m)}},true);return n}D.prototype.loadData=function(){var t="";if(this._where!=""&&this.whereSys!=""){t="("+this._where+")AND("+this.whereSys+")"}else if(this._where==""&&this.whereSys!=""){t=this.whereSys}else if(this._where!=""&&this.whereSys==""){t=this._where}if(!this.isLoadData){this.listDataView.load(t)}else{this.listDataView.loadData(0,t)}this.isLoadData=true};Object.defineProperty(D.prototype,"listViewControl",{get:function(){return this.listDataView},enumerable:true,configurable:true});Object.defineProperty(D.prototype,"where",{get:function(){return this._where},set:function(t){this._where=t},enumerable:true,configurable:true});D.prototype.open=function(t){var e=this;if(t!=null){var o=this.listDataView.control.getFieldValue("formId",t);var i=this.listDataView.control.getFieldValue("stepId",t);var a=this.listDataView.control.getFieldValue("formYear",t);var l=this.listDataView.control.getFieldValue("formMonth",t);v.WorkFlowEngine.load(i,o,a,l,function(t){e.showWorkFlowStepEditor(t)},true,this.port)}};D.prototype.refresh=function(){this.listDataView.loadData()};D.prototype.addWorkFlowStepField=function(t,e,o,i,a){if(a===void 0){a=false}var l=new n.MVVMField;l.label=e;l.isView=o;l.name=t;if(a){l.dateDataType=p.DateDataType.DateTime;l.type=n.DatabaseDataType.Date}i.add(l.name,l);i.keys.unshift(l.name);i.keys.pop()};D.prototype.showWorkFlowStepEditor=function(t){var e;var o=t.stepList.getItemAt(0).recordId;if(D.editotDict.containsKey(o)){e=D.editotDict.getValue(o)}else{e=new a.WorkFlowEditor(t);D.editotDict.add(o,e)}var i=new s;i.type=s.Show;i.target=this;i.editor=e;this.dispatchEvent(i);e.loadData(t)};D.loadData=function(t){for(var e=0;e<t.stepList.count;e++){var o=t.stepList.getItemAt(e);if(this.workFlowStepListDict.containsKey(o.stepId)){this.workFlowStepListDict.getValue(o.stepId).listDataView.loadData()}}};D.editotDict=new i.Dictionary;D.workFlowStepListDict=new i.Dictionary;return D}(o.DisplayObject);e.WorkFlowList=l;var s=function(t){__extends(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}e.Show="Show";return e}(F.FXEvent);e.FxWorkFlowEvent=s});