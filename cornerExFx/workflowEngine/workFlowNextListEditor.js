var __extends=this&&this.__extends||function(){var o=function(t,i){o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)if(i.hasOwnProperty(e))t[e]=i[e]};return o(t,i)};return function(t,i){o(t,i);function e(){this.constructor=t}t.prototype=i===null?Object.create(i):(e.prototype=i.prototype,new e)}}();define(["require","exports","../containers/titleWindow/titleWindow","../mvvm/listDataEditor/listDataEditor","../core/util"],function(t,i,e,o,r){"use strict";Object.defineProperty(i,"__esModule",{value:true});var n=function(t){__extends(i,t);function i(){var i=t.call(this)||this;i.listDataEditor=new o.ListDataEditor("workFlowEngine.stepNextList");i.listDataEditor.percentHeight=100;i.listDataEditor.percentWidth=100;i.addChild(i.listDataEditor);r.Util.appendDisplayObject(i.element,i.listDataEditor);i.listDataEditor.listSelectFieldWhereFunction=function(t){if(t=="nextId"){return"workFlowId='"+i.workFlowId+"'"}return""};return i}i.prototype.load=function(t,i){this.workFlowId=i;this.listDataEditor.load("stepId='"+t.toString()+"'");this.listDataEditor.additionalData.clear();this.listDataEditor.additionalData.add("stepId",t.toString())};return i}(e.TitleWindow);i.WorkFlowNextListEditor=n});